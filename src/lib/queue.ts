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

type ScanJobPayload = {
  scanId: string;
};

export function startScanWorker() {
  // Avoid starting during static generation/build or when Redis is unavailable
  if (process.env.NEXT_PHASE === "phase-production-build") return null as any;
  if (!process.env.REDIS_URL && process.env.NODE_ENV !== "development") return null as any;

  // Ensure single worker in dev
  // @ts-ignore
  if ((global as any)._scanWorker) return (global as any)._scanWorker as Worker;
  const worker = new Worker<ScanJobPayload>(
    "scan",
    async (job: Job<ScanJobPayload>) => {
      const scan = await prisma.scan.update({
        where: { id: job.data.scanId },
        data: { status: "RUNNING", startedAt: new Date() },
      });

      try {
        // Enrich context from GitLab (if repository set)
        let codeContext = "";
        const current = await prisma.scan.findUnique({ where: { id: scan.id } });
        if (current?.repositoryId) {
          const repo = await prisma.repository.findUnique({ where: { id: current.repositoryId } });
          if (repo?.gitlabProjectId) {
            const snapshot = await fetchProjectSnapshot(repo.gitlabProjectId, {
              branch: repo.defaultBranch ?? undefined,
              maxFiles: 120,
              maxBytes: 700_000,
            });
            codeContext += snapshot.files
              .map((f) => `\n// FILE: ${f.path}\n${f.content.substring(0, 5000)}`)
              .join("\n");
          }
        }
        if (!codeContext) codeContext = "// repository context unavailable";

        const ai = env.OPENAI_API_KEY ? new OpenAI({ apiKey: env.OPENAI_API_KEY }) : null;
        const messages = [
          {
            role: "user" as const,
            content:
              "Identify security vulnerabilities in the following codebase snapshot. Return JSON array of {severity,title,recommendation}.\n\n" +
              codeContext,
          },
        ];

        let findings: Array<{ severity: any; title: string; recommendation?: string }>; // severity validated later
        if (ai) {
          const response = await ai.chat.completions.create({
            model: "gpt-4o-mini",
            messages,
            temperature: 0.2,
          });
          const text = response.choices[0]?.message?.content ?? "[]";
          findings = JSON.parse(text) as any;
        } else {
          findings = [];
        }

        // Persist findings
        if (findings.length) await prisma.scanFinding.createMany({
          data: findings.map((f) => ({
            scanId: scan.id,
            severity: normalizeSeverity(f.severity),
            title: f.title,
            recommendation: f.recommendation ?? null,
          })),
        });

        const all = await prisma.scanFinding.findMany({ where: { scanId: scan.id } });
        const md = generateMarkdownReport(all);
        await prisma.scan.update({
          where: { id: scan.id },
          data: { status: "COMPLETED", finishedAt: new Date(), reportMarkdown: md },
        });
      } catch (err) {
        await prisma.scan.update({ where: { id: job.data.scanId }, data: { status: "FAILED", finishedAt: new Date() } });
        throw err;
      }
    },
    { connection: connection as any }
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


