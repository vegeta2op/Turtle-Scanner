"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function OrgIndexBar({ groupId }: { groupId?: string }) {
  const { data } = useSWR(groupId ? `/api/gitlab/index?groupId=${groupId}` : null, fetcher, {
    refreshInterval: (latest: any) => (latest?.status && latest.status !== "COMPLETED" ? 1000 : 0),
  } as any);
  if (!groupId || !data || data.status === "IDLE") return null;
  const pct = data.status === "COMPLETED" ? 100 : Math.min(95, 20 + (data.groups + data.projects));
  return (
    <div className="px-3">
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div className="h-full bg-blue-500 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-1 text-[10px] text-muted-foreground">Indexing: {data.groups ?? 0} groups, {data.projects ?? 0} projects</div>
    </div>
  );
}


