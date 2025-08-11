import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cache, makeCacheKey } from "@/lib/cache";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const key = makeCacheKey(["stats:v2", session.user.id]);
  const cached = cache.get<string>(key);
  if (cached) return new Response(cached, { headers: { "Content-Type": "application/json" } });

  // Parallel DB-only queries (fast)
  const [totalScans, severityAgg, recentScans, gitlabInteg] = await Promise.all([
    prisma.scan.count({ where: { createdByUserId: session.user.id } }),
    prisma.scanFinding.groupBy({
      by: ["severity"],
      _count: { _all: true },
      where: { scan: { createdByUserId: session.user.id } },
    }),
    prisma.scan.findMany({
      where: { createdByUserId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
      select: { id: true, createdAt: true, status: true },
    }),
    prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } }),
  ]);

  // Projects/Groups from our persisted GitLab index if present
  let projects = 0;
  let groups = 0;
  if (gitlabInteg?.id) {
    const [gCount, pCount] = await Promise.all([
      prisma.gitlabGroup.count({ where: { integrationId: gitlabInteg.id } }),
      prisma.gitlabProject.count({ where: { integrationId: gitlabInteg.id } }),
    ]);
    groups = gCount;
    projects = pCount;
  }

  const body = JSON.stringify({
    totalScans,
    bySeverity: severityAgg.map((x) => ({ severity: x.severity, count: x._count._all })),
    recentScans,
    orgStats: { groups, projects },
    ts: Date.now(),
  });
  cache.set(key, body, 3_000);
  return new Response(body, { headers: { "Content-Type": "application/json" } });
}


