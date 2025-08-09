import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getScanQueue, startScanWorker } from "@/lib/queue";
import { z } from "zod";

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
  if (!repositoryId && parsed.data.gitlabProjectId) {
    const existing = await prisma.repository.findFirst({ where: { gitlabProjectId: parsed.data.gitlabProjectId } });
    const repo =
      existing ??
      (await prisma.repository.create({
        data: {
          name: `gitlab-${parsed.data.gitlabProjectId}`,
          gitlabProjectId: parsed.data.gitlabProjectId,
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

  await getScanQueue().add("scan", { scanId: scan.id });
  return Response.json({ id: scan.id, status: scan.status });
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const scans = await prisma.scan.findMany({
    where: { createdByUserId: session.user.id },
    orderBy: { createdAt: "desc" },
    select: { id: true, status: true, createdAt: true, reportMarkdown: true },
  });
  return Response.json(scans);
}


