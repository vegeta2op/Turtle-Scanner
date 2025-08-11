import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getScanQueue, startScanWorker } from "@/lib/queue";
import { z } from "zod";
import { decryptFromBase64 } from "@/lib/crypto";
import { createGitlabClient } from "@/lib/gitlab";
import { cache, makeCacheKey } from "@/lib/cache";

const createSchema = z.object({
  organizationId: z.string().optional(),
  repositoryId: z.string().optional(),
  gitlabProjectId: z.number().optional(),
  includeCrossRepo: z.boolean().optional(),
  parameters: z.any().optional(),
});

export async function POST(req: Request) {
  // Start worker on demand (dev/local)
  startScanWorker();
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return new Response("Invalid payload", { status: 400 });

  // If raw gitlabProjectId is provided, ensure a Repository exists/linked
  let repositoryId: string | null = parsed.data.repositoryId ?? null;
  let gitlabProjectId: number | null = parsed.data.gitlabProjectId ?? null;

  // Resolve GitLab project if provided as URL or path in parameters
  if (!gitlabProjectId && parsed.data.parameters) {
    try {
      const p = parsed.data.parameters;
      const url: string | undefined = p.gitlabUrl || p.url || p.projectUrl;
      const path: string | undefined = p.gitlabProjectPath || p.projectPath || (typeof url === "string" ? new URL(url).pathname.slice(1) : undefined);
      if (path) {
        const integ = await prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } });
        const token = integ?.accessTokenEnc ? decryptFromBase64(integ.accessTokenEnc) : undefined;
        const api = createGitlabClient(token);
        // GitLab API accepts URL-encoded full path as project identifier
        const proj: any = await (api.Projects.show as any)(encodeURIComponent(path));
        if (proj?.id) gitlabProjectId = Number(proj.id);
      }
    } catch {}
  }

  if (!repositoryId && gitlabProjectId) {
    const existing = await prisma.repository.findFirst({ where: { gitlabProjectId } });
    const repo =
      existing ??
      (await prisma.repository.create({
        data: {
          name: `gitlab-${gitlabProjectId}`,
          gitlabProjectId,
        },
      }));
    repositoryId = repo.id;
  }

  const scan = await prisma.scan.create({
    data: {
      createdByUserId: session.user.id,
      organizationId: parsed.data.organizationId ?? null,
      repositoryId,
      includeCrossRepo: parsed.data.includeCrossRepo ?? true,
      parameters: parsed.data.parameters ?? {},
    },
  });

  // Bust cache for list
  cache.delete(makeCacheKey(["scans", session.user.id]));
  await getScanQueue().add("scan", { scanId: scan.id });
  return Response.json({ id: scan.id, status: scan.status });
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const key = makeCacheKey(["scans", session.user.id]);
  const cached = cache.get<string>(key);
  if (cached) return new Response(cached, { headers: { "Content-Type": "application/json" } });

  const scans = await prisma.scan.findMany({
    where: { createdByUserId: session.user.id },
    orderBy: { createdAt: "desc" },
    select: { id: true, status: true, createdAt: true, reportMarkdown: true },
  });
  const body = JSON.stringify(scans);
  cache.set(key, body, 2_000); // short TTL cache
  return new Response(body, { headers: { "Content-Type": "application/json" } });
}


