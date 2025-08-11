"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

async function getJson(url: string) { const r = await fetch(url); return r.ok ? r.json() : null; }

export default function ProfilePage() {
  const [openai, setOpenai] = useState<{ connected: boolean; masked?: string } | null>(null);
  const [gemini, setGemini] = useState<{ connected: boolean; masked?: string } | null>(null);
  const [openaiKey, setOpenaiKey] = useState("");
  const [geminiKey, setGeminiKey] = useState("");

  const [pw, setPw] = useState({ current: "", next: "", confirm: "" });
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const [o, g] = await Promise.all([getJson("/api/integrations/openai"), getJson("/api/integrations/gemini")]);
      setOpenai(o || { connected: false });
      setGemini(g || { connected: false });
    };
    load();
  }, []);

  const saveOpenAI = async () => {
    setMsg(null);
    const r = await fetch("/api/integrations/openai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ apiKey: openaiKey }) });
    if (r.ok) { setOpenai(await getJson("/api/integrations/openai")); setOpenaiKey(""); setMsg("OpenAI key saved."); }
    else setMsg((await r.text()) || "Failed to save OpenAI key.");
  };
  const delOpenAI = async () => { await fetch("/api/integrations/openai", { method: "DELETE" }); setOpenai(await getJson("/api/integrations/openai")); };

  const saveGemini = async () => {
    setMsg(null);
    const r = await fetch("/api/integrations/gemini", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ apiKey: geminiKey }) });
    if (r.ok) { setGemini(await getJson("/api/integrations/gemini")); setGeminiKey(""); setMsg("Gemini key saved."); }
    else setMsg((await r.text()) || "Failed to save Gemini key.");
  };
  const delGemini = async () => { await fetch("/api/integrations/gemini", { method: "DELETE" }); setGemini(await getJson("/api/integrations/gemini")); };

  const changePassword = async () => {
    setMsg(null);
    if (!pw.next || pw.next !== pw.confirm) { setMsg("Passwords do not match."); return; }
    const r = await fetch("/api/auth/change-password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ current: pw.current, next: pw.next }) });
    if (r.ok) setMsg("Password updated."); else setMsg(await r.text());
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="text-sm text-muted-foreground">OpenAI</div>
          </CardHeader>
          <CardContent>
            {openai?.connected && <div className="text-xs text-muted-foreground mb-2">Current: <span className="font-mono">{openai.masked}</span></div>}
            <div className="flex gap-2">
              <input className="flex-1 border rounded px-3 py-2" placeholder="sk-..." value={openaiKey} onChange={(e) => setOpenaiKey(e.target.value)} />
              <Button onClick={saveOpenAI} disabled={!openaiKey}>Save</Button>
              {openai?.connected && <Button variant="outline" onClick={delOpenAI}>Remove</Button>}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-sm text-muted-foreground">Gemini</div>
          </CardHeader>
          <CardContent>
            {gemini?.connected && <div className="text-xs text-muted-foreground mb-2">Current: <span className="font-mono">{gemini.masked}</span></div>}
            <div className="flex gap-2">
              <input className="flex-1 border rounded px-3 py-2" placeholder="AIza..." value={geminiKey} onChange={(e) => setGeminiKey(e.target.value)} />
              <Button onClick={saveGemini} disabled={!geminiKey}>Save</Button>
              {gemini?.connected && <Button variant="outline" onClick={delGemini}>Remove</Button>}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="text-sm text-muted-foreground">Change Password</div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <input className="border rounded px-3 py-2" placeholder="Current" type="password" value={pw.current} onChange={(e) => setPw((p) => ({ ...p, current: e.target.value }))} />
            <input className="border rounded px-3 py-2" placeholder="New" type="password" value={pw.next} onChange={(e) => setPw((p) => ({ ...p, next: e.target.value }))} />
            <input className="border rounded px-3 py-2" placeholder="Confirm" type="password" value={pw.confirm} onChange={(e) => setPw((p) => ({ ...p, confirm: e.target.value }))} />
          </div>
          <div className="flex justify-end mt-3">
            <Button onClick={changePassword}>Update Password</Button>
          </div>
        </CardContent>
      </Card>

      {msg && <div className="text-sm">{msg}</div>}
    </div>
  );
} 