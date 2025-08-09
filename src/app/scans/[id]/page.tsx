"use client";
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ScanDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { data } = useSWR(`/api/scans/${params.id}`, fetcher, { refreshInterval: 1500 });
  if (!data) return <p>Loading…</p>;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={() => router.back()}>Back</Button>
        <h1 className="text-2xl font-semibold">Scan {data.id}</h1>
      </div>
      <div>Status: <span className="px-2 py-1 bg-gray-100 rounded text-sm">{data.status}</span></div>
      {data.reportMarkdown && (
        <div>
          <h2 className="text-lg font-medium">Report</h2>
          <pre className="whitespace-pre-wrap text-sm bg-gray-50/60 backdrop-blur p-3 rounded overflow-auto">{data.reportMarkdown}</pre>
        </div>
      )}
      <div>
        <h2 className="text-lg font-medium">Findings</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-sm border">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 border">Severity</th>
                <th className="text-left p-2 border">Title</th>
                <th className="text-left p-2 border">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {(data.findings ?? []).map((f: any) => (
                <tr key={f.id}>
                  <td className="p-2 border">{f.severity}</td>
                  <td className="p-2 border">{f.title}</td>
                  <td className="p-2 border">{f.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


