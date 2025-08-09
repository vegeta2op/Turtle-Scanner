"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { Button } from "@/components/ui/Button";
import OrgIndexBar from "@/components/OrgIndexBar";
import OrgTree from "@/components/OrgTree";

export default function OrgMapPage() {
  type Provider = "GITLAB" | "GITHUB";
  const [provider, setProvider] = useState<Provider>("GITLAB");
  const [avail, setAvail] = useState<{ GITLAB: boolean; GITHUB: boolean }>({ GITLAB: false, GITHUB: false });

  const [groupId, setGroupId] = useState<string>("");
  const [topGroups, setTopGroups] = useState<any[]>([]);
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR(provider === "GITLAB" && groupId ? `/api/gitlab/map?groupId=${groupId}` : null, fetcher, { revalidateOnFocus: false });

  const [ghRepos, setGhRepos] = useState<any[]>([]);
  useEffect(() => {
    const bootstrap = async () => {
      const [gl, gh] = await Promise.all([
        fetch("/api/integrations/gitlab").then((r) => (r.ok ? r.json() : { connected: false })),
        fetch("/api/integrations/github").then((r) => (r.ok ? r.json() : { connected: false })),
      ]);
      setAvail({ GITLAB: !!gl.connected, GITHUB: !!gh.connected });
      if (!gl.connected && gh.connected) setProvider("GITHUB");
      // hydrate selected group
      if (typeof window !== "undefined") {
        const saved = window.localStorage.getItem("org:group");
        if (saved) setGroupId(saved);
      }
      if (gl.connected) {
        const res = await fetch(`/api/gitlab/map`);
        if (res.ok) {
          const j = await res.json();
          setTopGroups(j.top ?? []);
        }
      }
      if (gh.connected) {
        // Only personal repos for this token: /user/repos visibility owner
        try {
          const res = await fetch("https://api.github.com/user/repos?per_page=100&affiliation=owner");
          if (res.ok) setGhRepos(await res.json());
        } catch {}
      }
    };
    bootstrap();
  }, []);

  const projects = data ?? [];

  const ghTree = {
    groups: ghRepos.length ? [{ id: 0, name: "Your Repositories", parentId: null }] : [],
    projects: ghRepos.map((r) => ({ id: r.id, name: r.name, path_with_namespace: r.full_name, parentId: 0, html_url: r.html_url })),
  };

  return (
    <div className="space-y-4">
      <div className="flex items-end gap-3 justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Organization Map</h1>
          <p className="text-sm text-muted-foreground">Browse groups and projects from your Git provider</p>
        </div>
        <div className="flex gap-2">
          <button className={`px-3 py-2 rounded-md border ${provider === "GITLAB" ? "bg-primary/10 border-primary" : "bg-background"} ${!avail.GITLAB ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!avail.GITLAB} onClick={() => setProvider("GITLAB")}>GitLab</button>
          <button className={`px-3 py-2 rounded-md border ${provider === "GITHUB" ? "bg-primary/10 border-primary" : "bg-background"} ${!avail.GITHUB ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!avail.GITHUB} onClick={() => setProvider("GITHUB")}>GitHub</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <Card className="md:col-span-1 h-[calc(100vh-220px)] flex flex-col">
          <CardHeader className="sticky top-0 z-10 bg-transparent">
            <div className="text-sm text-muted-foreground">{provider === "GITLAB" ? "Top-level groups" : "Repository Scope"}</div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto">
            <div className="space-y-2 pb-6">
              {provider === "GITLAB" ? (
                <div className="grid gap-2">
                  {topGroups.map((g) => {
                    const isSelected = String(g.id) === groupId;
                    return (
                      <Button
                        key={g.id}
                        variant={isSelected ? "primary" : "outline"}
                        onClick={() => {
                          const id = String(g.id);
                          setGroupId(id);
                          if (typeof window !== "undefined") window.localStorage.setItem("org:group", id);
                        }}
                      >
                        {g.full_name || g.name}
                      </Button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">Showing personal repositories for your GitHub token</div>
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 h-[calc(100vh-220px)] flex flex-col">
          <CardHeader className="sticky top-0 z-10 bg-transparent space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {provider === "GITLAB" ? (groupId ? `Group ${groupId}` : "Select a group") : `GitHub (${ghRepos.length} repos)`}
              </div>
              {provider === "GITLAB" && groupId && (
                <div className="flex gap-2">
                  <Button onClick={async () => { await fetch("/api/gitlab/index", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ groupId }) }); }}>Index</Button>
                  <Button variant="outline" onClick={async () => { await fetch("/api/gitlab/index", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ groupId }) }); }}>Reindex</Button>
                </div>
              )}
            </div>
            {provider === "GITLAB" && <OrgIndexBar groupId={groupId || undefined} />}
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto">
            {provider === "GITLAB" ? (
              !groupId ? (
                <div className="text-sm text-muted-foreground">Select a group on the left to view its map</div>
              ) : isLoading ? (
                <div className="grid md:grid-cols-2 gap-3">
                  <Skeleton className="h-24" />
                  <Skeleton className="h-24" />
                  <Skeleton className="h-24" />
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="text-sm text-muted-foreground">Group ID: {groupId}</div>
                  <div className="space-y-2 pb-10">
                    {data ? (
                      <OrgTree
                        groups={(data.groups ?? []).map((g: any) => ({ id: g.id, name: g.name, parentId: g.parentId ?? null }))}
                        projects={(data.projects ?? []).map((p: any) => ({ id: p.id, name: p.name, path_with_namespace: p.path_with_namespace, parentId: p.parentId ?? null }))}
                        rootId={Number(groupId)}
                      />
                    ) : (
                      <div className="text-sm text-muted-foreground">Click Index to populate the map.</div>
                    )}
                  </div>
                </div>
              )
            ) : (
              <div className="space-y-2 pb-10">
                <OrgTree
                  groups={ghTree.groups}
                  projects={ghTree.projects}
                  rootId={0}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


