"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function BottomProgress() {
  const { data } = useSWR("/api/activity", fetcher, { refreshInterval: 1500 });
  const busy = data?.busy;
  const total = (data?.queued ?? 0) + (data?.running ?? 0);
  if (!busy) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-full border glass-plain">
        <div
          className="h-2 bg-blue-600 transition-all"
          style={{ width: `${Math.min(95, 40 + total * 10)}%` }}
        />
        <div className="px-3 py-1 text-xs text-center text-muted-foreground">Indexing / Scanning in progress… ({data.running ?? 0} running, {data.queued ?? 0} queued)</div>
      </div>
    </div>
  );
}


