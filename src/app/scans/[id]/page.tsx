"use client";
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import Markdown from "@/components/Markdown";
import DateText from "@/components/DateText";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function StatusBadge({ status }: { status: string }) {
  const cls = status === "COMPLETED" ? "bg-green-500/15 text-green-400 border-green-500/30" : status === "FAILED" ? "bg-red-500/15 text-red-400 border-red-500/30" : "bg-yellow-500/15 text-yellow-400 border-yellow-500/30";
  return <span className={`inline-block text-xs px-2.5 py-1 rounded border ${cls}`}>{status}</span>;
}

function Sev({ s }: { s: string }) {
  const map: Record<string, string> = {
    CRITICAL: "bg-red-600/20 text-red-300 border-red-600/30",
    HIGH: "bg-orange-600/20 text-orange-300 border-orange-600/30",
    MEDIUM: "bg-amber-600/20 text-amber-300 border-amber-600/30",
    LOW: "bg-green-700/20 text-green-300 border-green-700/30",
    INFO: "bg-sky-700/20 text-sky-300 border-sky-700/30",
  };
  return <span className={`inline-block text-[10px] px-2 py-0.5 rounded border ${map[s] ?? "bg-slate-700/20 text-slate-300 border-slate-600/30"}`}>{s}</span>;
}

export default function ScanDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { data } = useSWR(`/api/scans/${params.id}`, fetcher, { refreshInterval: 2000, revalidateOnFocus: false, revalidateOnMount: false });
  if (!data) return <div className="p-6 text-sm text-muted-foreground">Loading…</div>;

  const downloadMd = () => {
    if (!data.reportMarkdown) return;
    const blob = new Blob([data.reportMarkdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `scan-${data.id}.md`; a.click();
    URL.revokeObjectURL(url);
  };

  const deleteScan = async () => {
    if (!confirm("Delete this scan? This cannot be undone.")) return;
    const r = await fetch(`/api/scans/${params.id}`, { method: "DELETE" });
    if (r.ok) router.push("/scans");
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => router.back()}>Back</Button>
          <h1 className="text-2xl font-semibold">Scan {String(data.id).slice(0, 10)}</h1>
          <StatusBadge status={data.status} />
        </div>
        <div className="flex gap-2">
          {data.reportMarkdown && (
            <Button variant="outline" onClick={downloadMd}>Export Markdown</Button>
          )}
          <Button variant="destructive" onClick={deleteScan}>Delete</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="text-sm text-muted-foreground">Findings</div>
          </CardHeader>
          <CardContent className="max-h-[42vh] min-h-[220px] overflow-auto scroll-area">
            {(data.findings ?? []).length === 0 ? (
              <div className="text-sm text-muted-foreground">No findings yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b">
                      <th className="py-2 pr-4">Severity</th>
                      <th className="py-2 pr-4">Title</th>
                      <th className="py-2 pr-4">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data.findings ?? []).map((f: any) => (
                      <tr key={f.id} className="border-b last:border-0 align-top">
                        <td className="py-2 pr-4 whitespace-nowrap"><Sev s={f.severity} /></td>
                        <td className="py-2 pr-4">
                          <div className="font-medium">{f.title}</div>
                          {f.filePath && (
                            <div className="text-xs text-muted-foreground mt-0.5">{f.filePath}{f.line ? `:${f.line}` : ''}</div>
                          )}
                        </td>
                        <td className="py-2 pr-4">
                          <div className="text-xs text-muted-foreground whitespace-pre-wrap">{f.recommendation || "–"}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm text-muted-foreground">Summary</div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Created</div>
              <div><DateText value={data.createdAt} /></div>
              <div className="text-muted-foreground">Started</div>
              <div>{data.startedAt ? <DateText value={data.startedAt} /> : "–"}</div>
              <div className="text-muted-foreground">Finished</div>
              <div>{data.finishedAt ? <DateText value={data.finishedAt} /> : "–"}</div>
              <div className="text-muted-foreground">Cross-repo</div>
              <div>{data.includeCrossRepo ? "Yes" : "No"}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {data.reportMarkdown && (
        <Card className="h-[45vh] flex flex-col">
          <CardHeader>
            <div className="text-sm text-muted-foreground">AI Report</div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto scroll-area">
            <Markdown content={data.reportMarkdown} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}


