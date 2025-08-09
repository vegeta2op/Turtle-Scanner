import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decryptFromBase64 } from "@/lib/crypto";
import { createGitlabClient } from "@/lib/gitlab";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const [counts, severityAgg, recent] = await Promise.all([
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
  ]);

  // Pull org metrics from GitLab (if PAT present)
  let orgStats: { groups: number; projects: number; repos: number } | null = null;
  const integ = await prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } });
  const token = integ?.accessTokenEnc ? decryptFromBase64(integ.accessTokenEnc) : undefined;
  // Prefer persisted index states (sums of all indexed groups)
  const idxStates = (integ?.data as any)?.indexStates as Record<string, { groups: number; projects: number }>|undefined;
  if (idxStates && Object.keys(idxStates).length > 0) {
    const totals = Object.values(idxStates).reduce(
      (acc, s) => ({ groups: acc.groups + (s.groups || 0), projects: acc.projects + (s.projects || 0) }),
      { groups: 0, projects: 0 }
    );
    orgStats = { groups: totals.groups, projects: totals.projects, repos: totals.projects };
  } else if (token) {
    const api = createGitlabClient(token);
    try {
      // Fallback: sum all visible projects across top-level groups
      // @ts-ignore
      const top = await api.Groups.all({ topLevelOnly: true, perPage: 100 });
      let projects = 0;
      let groups = 0;
      async function traverse(gid: number) {
        groups += 1;
        const subgroups = await api.Groups.subgroups(gid, { perPage: 100 });
        const projs = await api.Groups.projects(gid, { includeSubgroups: false, perPage: 100 });
        projects += (projs as any[]).length;
        const subgroupList: any[] = Array.isArray(subgroups)
          ? (subgroups as any[])
          : (((subgroups as unknown as any)?.data as any[]) ?? []);
        for (const sg of subgroupList) await traverse(sg.id);
      }
      const topList: any[] = Array.isArray(top) ? (top as any[]) : (((top as unknown as any)?.data as any[]) ?? []);
      for (const g of topList) await traverse(g.id);
      orgStats = { groups, projects, repos: projects };
    } catch {}
  }

  return Response.json({
    totalScans: counts,
    bySeverity: severityAgg.map((x) => ({ severity: x.severity, count: x._count._all })),
    recentScans: recent,
    orgStats,
  });
}


