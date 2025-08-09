"use client";
import useSWR from "swr";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Dashboard() {
  const { data } = useSWR("/api/stats", fetcher, { refreshInterval: 5000, revalidateOnFocus: false });
  const bySeverity = (data?.bySeverity ?? []) as Array<{ severity: string; count: number }>;
  const severity = bySeverity.map((x: any) => ({ name: x.severity, value: x.count }));
  const recent = (data?.recentScans ?? []).map((x: any) => ({ name: x.id.slice(0, 6), value: x.status === "COMPLETED" ? 1 : 0 }));
  const SeverityPie = dynamic(() => import("@/components/charts/SeverityPie"), { ssr: false, loading: () => <div className="h-56 rounded bg-muted animate-pulse" /> });
  const RecentArea = dynamic(() => import("@/components/charts/RecentArea"), { ssr: false, loading: () => <div className="h-56 rounded bg-muted animate-pulse" /> });

  const completed = (data?.recentScans ?? []).filter((s: any) => s.status === "COMPLETED").length;
  const running = (data?.recentScans ?? []).filter((s: any) => s.status === "RUNNING").length;
  const queued = (data?.recentScans ?? []).filter((s: any) => s.status === "QUEUED").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Security Posture</h1>
          <p className="text-base text-muted-foreground mt-1">LLM-powered code scanning across your Git provider</p>
        </div>
        <div className="flex gap-2">
          <Button asChild><Link href="/scans">New Scan</Link></Button>
          <Button asChild variant="outline"><Link href="/integrations">Integrations</Link></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard title="Total Scans" value={data?.totalScans ?? 0} />
        <KpiCard title="Projects" value={data?.orgStats?.projects ?? 0} />
        <KpiCard title="Groups" value={data?.orgStats?.groups ?? 0} />
        <KpiCard title="Completed (recent)" value={completed} subtitle={`Running: ${running} • Queued: ${queued}`} />
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="text-sm text-muted-foreground">Findings by Severity</div>
          </CardHeader>
          <CardContent>
            <div className="h-56"><SeverityPie data={severity} /></div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Recent Scan Completions</div>
              <Badge variant="primary">Live</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-56"><RecentArea data={recent} /></div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="text-sm text-muted-foreground">Latest Scans</div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground border-b">
                  <th className="py-2 pr-4">Scan</th>
                  <th className="py-2 pr-4">Created</th>
                  <th className="py-2 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {(data?.recentScans ?? []).slice(0, 8).map((s: any) => (
                  <tr key={s.id} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-mono text-xs"><Link className="underline" href={`/scans/${s.id}`}>{s.id.slice(0,8)}</Link></td>
                    <td className="py-2 pr-4">{new Date(s.createdAt).toLocaleString()}</td>
                    <td className="py-2 pr-4"><Badge variant={s.status === "COMPLETED" ? "secondary" : s.status === "FAILED" ? "destructive" : "primary"}>{s.status}</Badge></td>
                  </tr>
                ))}
                {((data?.recentScans ?? []).length === 0) && (
                  <tr><td className="py-4 text-muted-foreground" colSpan={3}>No scans yet. <Link className="underline" href="/scans">Start one</Link>.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


