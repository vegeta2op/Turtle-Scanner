"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SidebarStatus() {
  // Watch general activity (scans) and org indexing (last chosen group in localStorage)
  const { data: act } = useSWR("/api/activity", fetcher, { refreshInterval: 1500 });
  const groupId = typeof window !== "undefined" ? localStorage.getItem("org:group") ?? undefined : undefined;
  const { data: idx } = useSWR(groupId ? `/api/gitlab/index?groupId=${groupId}` : null, fetcher, { refreshInterval: 1000 });

  const busy = act?.busy || (idx && idx.status !== "IDLE" && idx.status !== "COMPLETED");
  if (!busy) return null;
  const pct = idx?.status === "COMPLETED" ? 100 : idx ? Math.min(95, 20 + (idx.groups + idx.projects)) : 30;

  return (
    <div className="mt-2">
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div className="h-full bg-blue-500 transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}


