import { Queue, Worker, type Job } from "bullmq";
import { redis } from "@/lib/redis";
import { prisma } from "@/lib/prisma";
import { generateMarkdownReport } from "@/lib/report";
import { env } from "@/env";
import OpenAI from "openai";
import { fetchProjectSnapshot } from "@/lib/gitlab";

const connection = redis;

let scanQueueInstance: Queue | null = null;
export function getScanQueue(): Queue {
  if (!scanQueueInstance) {
    scanQueueInstance = new Queue("scan", { connection: connection as any });
  }
  return scanQueueInstance;
}

type ScanJobPayload = { scanId: string };

export function startScanWorker() {
  if (process.env.NEXT_PHASE === "phase-production-build") return null as any;
  if (!process.env.REDIS_URL && process.env.NODE_ENV !== "development") return null as any;
  // @ts-ignore
  if ((global as any)._scanWorker) return (global as any)._scanWorker as Worker;

  const worker = new Worker<ScanJobPayload>(
    "scan",
    async (job: Job<ScanJobPayload>) => {
      const scan = await prisma.scan.update({ where: { id: job.data.scanId }, data: { status: "RUNNING", startedAt: new Date() } });

      try {
        // Enrich context from GitLab (if repository set)
        let codeContext = "";
        const current = await prisma.scan.findUnique({ where: { id: scan.id } });
        if (current?.repositoryId) {
          const repo = await prisma.repository.findUnique({ where: { id: current.repositoryId } });
          if (repo?.gitlabProjectId) {
            try {
              // Get user PAT for GitLab to access private code
              const integ = await prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: scan.createdByUserId } });
              const token = integ?.accessTokenEnc ? (await import("@/lib/crypto")).decryptFromBase64(integ.accessTokenEnc) : undefined;
              const snapshot = await fetchProjectSnapshot(
                repo.gitlabProjectId,
                { branch: repo.defaultBranch ?? undefined, maxFiles: 120, maxBytes: 700_000 },
                token
              );
              codeContext += snapshot.files.map((f) => `\n// FILE: ${f.path}\n${f.content.substring(0, 5000)}`).join("\n");
            } catch (snapErr) {
              codeContext = "// repository context unavailable (snapshot failed)";
            }
          }
        }
        if (!codeContext) codeContext = "// repository context unavailable";

        // Prefer per-user OpenAI key saved in profile; fallback to process env
        const openaiInteg = await prisma.integrationSettings.findFirst({ where: { provider: "OPENAI" as any, userId: scan.createdByUserId } });
        const openaiKey = openaiInteg?.accessTokenEnc ? (await import("@/lib/crypto")).decryptFromBase64(openaiInteg.accessTokenEnc) : env.OPENAI_API_KEY;
        // Gemini fallback
        const geminiInteg = await prisma.integrationSettings.findFirst({ where: { provider: "GEMINI" as any, userId: scan.createdByUserId } });
        const geminiKey = geminiInteg?.accessTokenEnc ? (await import("@/lib/crypto")).decryptFromBase64(geminiInteg.accessTokenEnc) : undefined;

        const ai = openaiKey ? new OpenAI({ apiKey: openaiKey, timeout: 30_000 }) : null;
        const messages = [
          { role: "system" as const, content: "You are a strict SAST engine. Respond with strict JSON only." },
          {
            role: "user" as const,
            content:
              "Identify real code or configuration vulnerabilities (CWE-style) in the following snapshot. Ignore README, LICENSE, SECURITY.md and other documentation-only content. Only include an item if you can point to a specific file path (and line if possible). Allowed severities: CRITICAL,HIGH,MEDIUM,LOW,INFO. Return ONLY a JSON array of objects with keys 'severity','title','recommendation','filePath','line'. If none, return []. No prose, no markdown fences.\n\n" +
              codeContext,
          },
        ];

        let findings: Array<{ severity: any; title: string; recommendation?: string; filePath?: string; line?: number }> = [];
        if (ai) {
          const response = await ai.chat.completions.create({ model: "gpt-4o-mini", messages, temperature: 0.2 });
          const text = response.choices[0]?.message?.content ?? "[]";
          const jsonText = extractJsonArray(text) ?? "[]";
          try {
            findings = JSON.parse(jsonText) as any;
          } catch {
            findings = [];
          }
        } else if (geminiKey) {
          // Minimal Gemini REST call (no extra dependency)
          const body = {
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text:
                      "Identify real code or configuration vulnerabilities (CWE-style) in the following snapshot. Ignore README, LICENSE, SECURITY.md and other documentation-only content. Only include an item if you can point to a specific file path (and line if possible). Allowed severities: CRITICAL,HIGH,MEDIUM,LOW,INFO. Return ONLY a JSON array of objects with keys 'severity','title','recommendation','filePath','line'. If none, return []. No prose, no markdown fences.\n\n" +
                      codeContext,
                  },
                ],
              },
            ],
            generationConfig: { temperature: 0.2 },
          } as any;
          try {
            const res = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(geminiKey)}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              }
            );
            const j: any = await res.json();
            const txt: string = j?.candidates?.[0]?.content?.parts?.[0]?.text ?? "[]";
            const jsonText = extractJsonArray(txt) ?? "[]";
            try {
              findings = JSON.parse(jsonText) as any;
            } catch {
              findings = [];
            }
          } catch {
            findings = [];
          }
        }

        // Post-process: drop items without a filePath
        findings = (findings || []).filter((f) => f && f.title && f.severity && f.filePath);

        if (findings.length)
          await prisma.scanFinding.createMany({
            data: findings.map((f) => ({
              scanId: scan.id,
              severity: normalizeSeverity(f.severity),
              title: f.title,
              recommendation: f.recommendation ?? null,
              filePath: f.filePath ?? null,
              line: typeof f.line === "number" ? f.line : null,
            })),
          });

        const all = await prisma.scanFinding.findMany({ where: { scanId: scan.id } });
        const md = generateMarkdownReport(all);
        await prisma.scan.update({ where: { id: scan.id }, data: { status: "COMPLETED", finishedAt: new Date(), reportMarkdown: md } });
      } catch (err) {
        await prisma.scan.update({ where: { id: job.data.scanId }, data: { status: "FAILED", finishedAt: new Date() } });
        throw err;
      }
    },
    { connection: connection as any, concurrency: 2 }
  );

  if (process.env.NODE_ENV !== "production") {
    // @ts-ignore
    (global as any)._scanWorker = worker;
  }

  return worker;
}

function normalizeSeverity(input: any): "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFO" {
  const v = String(input).toUpperCase();
  if (["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"].includes(v)) return v as any;
  return "INFO";
}

function extractJsonArray(text: string): string | null {
  // Finds the first JSON array in the text (handles code fences or extra prose)
  const match = text.match(/\[[\s\S]*\]/);
  return match ? match[0] : null;
}


