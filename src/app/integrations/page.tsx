"use client";
import { useEffect, useState, useMemo } from "react";
import useSWR from "swr";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

// Helper to show a compact token mask like "••••••••abcd"
function shortMask(masked?: string) {
  if (!masked) return "";
  const last4 = masked.slice(-4);
  return `••••••••${last4}`;
}

type ProviderKey = "gitlab" | "github" | "slack" | "jira";

type ProviderConfig = {
  key: ProviderKey;
  name: string;
  icon: string; // external URL
  getUrl: string;
  postUrl: string;
  deleteUrl: string;
  fields: Array<{ key: string; label: string; type?: string; placeholder?: string }>;
};

const PROVIDERS: ProviderConfig[] = [
  {
    key: "gitlab",
    name: "GitLab",
    icon: "https://cdn.simpleicons.org/gitlab",
    getUrl: "/api/integrations/gitlab",
    postUrl: "/api/integrations/gitlab",
    deleteUrl: "/api/integrations/gitlab",
    fields: [{ key: "token", label: "Personal Access Token", placeholder: "glpat-..." }],
  },
  {
    key: "github",
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github",
    getUrl: "/api/integrations/github",
    postUrl: "/api/integrations/github",
    deleteUrl: "/api/integrations/github",
    fields: [{ key: "token", label: "Personal Access Token", placeholder: "ghp_..." }],
  },
  {
    key: "slack",
    name: "Slack",
    icon: "https://cdn.simpleicons.org/slack",
    getUrl: "/api/integrations/slack",
    postUrl: "/api/integrations/slack",
    deleteUrl: "/api/integrations/slack",
    fields: [{ key: "token", label: "Bot Token", placeholder: "xoxb-..." }],
  },
  {
    key: "jira",
    name: "Jira",
    icon: "https://cdn.simpleicons.org/jira",
    getUrl: "/api/integrations/jira",
    postUrl: "/api/integrations/jira",
    deleteUrl: "/api/integrations/jira",
    fields: [
      { key: "host", label: "Host", placeholder: "your-org.atlassian.net" },
      { key: "email", label: "Email", placeholder: "you@example.com" },
      { key: "apiToken", label: "API Token", placeholder: "..." },
    ],
  },
];

const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : { connected: false }));
const swrOpts = { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false, dedupingInterval: 60_000, keepPreviousData: true } as const;

export default function IntegrationsPage() {
  const [open, setOpen] = useState<ProviderKey | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});

  // SWR caches for each provider (prevents refetch on tab focus)
  const { data: gl, mutate: mGL } = useSWR(PROVIDERS[0].getUrl, fetcher, swrOpts);
  const { data: gh, mutate: mGH } = useSWR(PROVIDERS[1].getUrl, fetcher, swrOpts);
  const { data: sl, mutate: mSL } = useSWR(PROVIDERS[2].getUrl, fetcher, swrOpts);
  const { data: ji, mutate: mJI } = useSWR(PROVIDERS[3].getUrl, fetcher, swrOpts);

  const states = useMemo(() => ({
    gitlab: gl ?? { connected: false },
    github: gh ?? { connected: false },
    slack: sl ?? { connected: false },
    jira: ji ?? { connected: false },
  }), [gl, gh, sl, ji]);

  const mutateByKey: Record<ProviderKey, () => Promise<any>> = {
    gitlab: mGL,
    github: mGH,
    slack: mSL,
    jira: mJI,
  } as const;

  const onSave = async (p: ProviderConfig) => {
    setStatus(null);
    const body: any = {};
    for (const f of p.fields) body[f.key] = form[f.key];
    const res = await fetch(p.postUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (res.ok) {
      await mutateByKey[p.key]();
      setForm({});
      setStatus(`${p.name} saved`);
      setOpen(null);
    } else setStatus(`${p.name} failed`);
  };

  const onDelete = async (p: ProviderConfig) => {
    setStatus(null);
    const res = await fetch(p.deleteUrl, { method: "DELETE" });
    if (res.ok) {
      await mutateByKey[p.key]();
      setStatus(`${p.name} removed`);
      setOpen(null);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Integrations</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {PROVIDERS.map((p) => (
          <button
            key={p.key}
            className="group aspect-square border rounded-2xl glass-panel hover-lift p-4 text-left flex flex-col items-start justify-between"
            onClick={() => setOpen(p.key)}
          >
            <div className="flex items-center gap-3">
              <img src={p.icon} alt={p.name} className="h-9 w-9" />
              <div className="font-medium text-base">{p.name}</div>
            </div>
            <div className="w-full text-xs text-muted-foreground mt-auto">
              {(states as any)[p.key]?.connected ? (
                <div className="space-y-1">
                  <div>Connected</div>
                  <div className="font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                    {shortMask((states as any)[p.key]?.masked)}
                  </div>
                </div>
              ) : (
                <div>Not connected</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {PROVIDERS.map((p) => (
        <Modal key={p.key} open={open === p.key} onClose={() => setOpen(null)} title={`${p.name} Settings`}>
          <div className="space-y-3">
            {(states as any)[p.key]?.connected && (states as any)[p.key]?.masked && (
              <div className="text-sm text-muted-foreground">
                Current: <span className="font-mono">{shortMask((states as any)[p.key].masked)}</span>
              </div>
            )}
            {p.fields.map((f) => (
              <div key={f.key} className="space-y-1">
                <label className="text-sm">{f.label}</label>
                <input
                  className="border rounded px-3 py-2 w-full bg-background"
                  placeholder={f.placeholder}
                  type={f.type ?? "text"}
                  value={form[f.key] ?? ""}
                  onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))}
                />
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <Button onClick={() => onSave(p)} disabled={p.fields.some((f) => !form[f.key])}>Save</Button>
              {(states as any)[p.key]?.connected && <Button variant="outline" onClick={() => onDelete(p)}>Delete</Button>}
            </div>
            {status && <div className="text-sm pt-1">{status}</div>}
          </div>
        </Modal>
      ))}

      <div className="mt-2 text-sm text-muted-foreground">
        Tip: Webhook for GitLab MRs available under GitLab card.
      </div>
    </div>
  );
}


