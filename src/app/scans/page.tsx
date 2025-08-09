"use client";
import useSWR from "swr";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/Skeleton";
import { Modal } from "@/components/ui/Modal";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type Provider = "GITLAB" | "GITHUB";

type RepoLabel = { title: string; subtitle: string };

function formatLabel(provider: Provider, r: any): RepoLabel {
  if (provider === "GITHUB") {
    const full = r.full_name ?? ""; // org/repo
    const [org, repo] = full.split("/");
    return { title: repo ?? full, subtitle: org ?? "" };
  } else {
    const path: string = r.path_with_namespace ?? r.name ?? ""; // group/sub/repo
    const parts = path.split("/");
    const repo = parts.pop() ?? path;
    const group = parts.join("/");
    return { title: repo, subtitle: group };
  }
}

export default function ScansPage() {
  const { data, mutate, isLoading } = useSWR("/api/scans", fetcher, { refreshInterval: 2000 });
  const [creating, setCreating] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Provider + availability
  const [provider, setProvider] = useState<Provider>("GITLAB");
  const [avail, setAvail] = useState<{ GITLAB: boolean; GITHUB: boolean }>({ GITLAB: false, GITHUB: false });
  useEffect(() => {
    const load = async () => {
      const [gl, gh] = await Promise.all([
        fetch("/api/integrations/gitlab").then((r) => (r.ok ? r.json() : { connected: false })),
        fetch("/api/integrations/github").then((r) => (r.ok ? r.json() : { connected: false })),
      ]);
      setAvail({ GITLAB: !!gl.connected, GITHUB: !!gh.connected });
      if (!gl.connected && gh.connected) setProvider("GITHUB");
    };
    load();
  }, []);

  // Search + repository list
  const [groupId, setGroupId] = useState<string>(""); // for GitLab
  const [query, setQuery] = useState<string>("");
  const [repos, setRepos] = useState<any[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<any | null>(null);
  const [includeCrossRepo, setIncludeCrossRepo] = useState(true);
  const [topGroups, setTopGroups] = useState<Array<{ id: number; name: string; full_name?: string }>>([]);

  useEffect(() => {
    const loadTop = async () => {
      if (!avail.GITLAB) return;
      const res = await fetch("/api/gitlab/map");
      if (res.ok) {
        const j = await res.json();
        setTopGroups(j.top || []);
      }
    };
    loadTop();
  }, [avail.GITLAB]);

  // Dropdown state
  const [ddOpen, setDdOpen] = useState(false);
  const cbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!cbRef.current) return;
      if (!cbRef.current.contains(e.target as Node)) setDdOpen(false);
    }
    if (ddOpen) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [ddOpen]);

  useEffect(() => {
    const run = async () => {
      if (!query && !groupId && provider === "GITLAB") { setRepos([]); return; }
      if (provider === "GITLAB" && groupId) {
        const res = await fetch(`/api/gitlab/search?groupId=${groupId}&q=${encodeURIComponent(query || "")}`);
        if (res.ok) setRepos(await res.json());
      }
      if (provider === "GITHUB") {
        const q = query ? encodeURIComponent(query) : "stars:%3E1";
        const res = await fetch(`https://api.github.com/search/repositories?q=${q}&per_page=30`);
        if (res.ok) {
          const j = await res.json();
          setRepos(j.items || []);
        }
      }
    };
    run();
  }, [provider, groupId, query]);

  const createScan = async () => {
    setCreating(true);
    const payload: any = { includeCrossRepo };
    if (provider === "GITLAB") payload.gitlabProjectId = selectedRepo?.id;
    if (provider === "GITHUB") payload.parameters = { githubRepoId: selectedRepo?.id, provider: "GITHUB" };
    await fetch("/api/scans", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    setCreating(false);
    setShowModal(false);
    mutate();
  };

  const providerDisabled = {
    GITLAB: !avail.GITLAB,
    GITHUB: !avail.GITHUB,
  } as const;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Scans</h1>
          <p className="text-sm text-gray-600">Start a new scan or review previous results</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline"><a href="/integrations">Integrations</a></Button>
          <Button onClick={() => setShowModal(true)}>New Scan</Button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-3">
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
        </div>
      ) : (
        <div className="grid gap-3">
          {(data ?? []).map((s: any) => (
            <Card key={s.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{s.id}</div>
                    <div className="text-sm text-muted-foreground">{new Date(s.createdAt).toLocaleString()}</div>
                  </div>
                  <Badge variant={s.status === "COMPLETED" ? "secondary" : s.status === "FAILED" ? "destructive" : "primary"}>{s.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button asChild variant="outline"><a href={`/scans/${s.id}`}>View</a></Button>
                  {s.reportMarkdown && (
                    <Button asChild variant="outline"><a href={`data:text/markdown;charset=utf-8,${encodeURIComponent(s.reportMarkdown)}`} download={`scan-${s.id}.md`}>Export Markdown</a></Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)} title="Create Scan" description="Run an LLM-powered SAST scan across your source provider.">
        <div className="space-y-4">
          {/* Provider selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
            <label className="text-sm text-muted-foreground">Provider</label>
            <div className="sm:col-span-2 flex gap-2">
              <button
                className={`px-3 py-2 rounded-md border ${provider === "GITLAB" ? "bg-primary/10 border-primary" : "bg-background"} ${providerDisabled.GITLAB ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={providerDisabled.GITLAB}
                onClick={() => setProvider("GITLAB")}
              >GitLab</button>
              <button
                className={`px-3 py-2 rounded-md border ${provider === "GITHUB" ? "bg-primary/10 border-primary" : "bg-background"} ${providerDisabled.GITHUB ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={providerDisabled.GITHUB}
                onClick={() => setProvider("GITHUB")}
              >GitHub</button>
            </div>
          </div>

          {provider === "GITLAB" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start">
              <label className="text-sm text-muted-foreground mt-2">Group</label>
              <div className="sm:col-span-2">
                <div className="relative">
                  <select
                    className="w-full border rounded-lg px-3 py-2 bg-background"
                    value={groupId}
                    onChange={(e) => setGroupId(e.target.value)}
                  >
                    <option value="">Select a top-level group</option>
                    {topGroups.map((g) => (
                      <option key={g.id} value={String(g.id)}>
                        {g.name} {g.full_name ? `(${g.full_name})` : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Combobox */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start" ref={cbRef}>
            <label className="text-sm text-muted-foreground mt-2">Repository</label>
            <div className="sm:col-span-2">
              <button
                type="button"
                className={`w-full border rounded-lg px-3 py-2 text-left bg-background ${(!avail[provider] || (provider === "GITLAB" && !groupId)) ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => { if (avail[provider] && (provider !== "GITLAB" || groupId)) setDdOpen((v) => !v); }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="truncate">
                    {selectedRepo ? (
                      <div className="truncate">
                        <div className="font-medium truncate">{formatLabel(provider, selectedRepo).title}</div>
                        <div className="text-xs text-muted-foreground truncate">{formatLabel(provider, selectedRepo).subtitle}</div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">{provider === "GITLAB" ? "Enter group and search projects" : "Search repositories"}</span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">▾</span>
                </div>
              </button>

              {ddOpen && (
                <div className="relative">
                  <div className="absolute z-50 left-0 right-0 mt-2 rounded-xl border panel-modern p-2 shadow-2xl">
                    <input
                      className="w-full border rounded px-3 py-2 mb-2 bg-background"
                      placeholder={provider === "GITLAB" ? "Type to filter projects" : "Type to search repositories"}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      autoFocus
                    />
                    <div className="max-h-64 overflow-auto divide-y">
                      {repos.map((r) => {
                        const { title, subtitle } = formatLabel(provider, r);
                        const selected = selectedRepo?.id === r.id;
                        return (
                          <button key={r.id} className={`w-full text-left p-2 hover:bg-muted ${selected ? "bg-muted" : ""}`} onClick={() => { setSelectedRepo(r); setDdOpen(false); }}>
                            <div className="font-medium truncate">{title}</div>
                            <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
                          </button>
                        );
                      })}
                      {repos.length === 0 && <div className="p-3 text-sm text-muted-foreground">No matches</div>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Options */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={includeCrossRepo} onChange={(e) => setIncludeCrossRepo(e.target.checked)} />
            Include cross-repo context
          </label>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button onClick={createScan} disabled={creating || !selectedRepo}>{creating ? "Queueing..." : "Start Scan"}</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}


