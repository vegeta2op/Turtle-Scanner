import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decryptFromBase64 } from "@/lib/crypto";
import { createGitlabClient } from "@/lib/gitlab";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const { searchParams } = new URL(req.url);
  const groupId = parseInt(searchParams.get("groupId") || "0", 10);
  const refresh = searchParams.get("refresh") === "1";

  const integ = await prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } });
  const token = integ?.accessTokenEnc ? decryptFromBase64(integ.accessTokenEnc) : undefined;
  const api = createGitlabClient(token);

  // If no groupId provided, list top-level groups for the user
  if (!groupId) {
    // Prefer DB-backed cache for top groups
    const top = await prisma.gitlabGroup.findMany({
      where: { integrationId: integ!.id, parentGitlabGroupId: null },
      orderBy: { name: "asc" },
      select: { gitlabGroupId: true, name: true, fullPath: true },
    });
    if (top.length > 0 && !refresh) {
      return Response.json({ top: top.map((g) => ({ id: g.gitlabGroupId, name: g.name, full_name: g.fullPath })) });
    }
    // Fallback: fetch from GitLab once and persist minimal nodes as "top"
    // @ts-ignore
    const groups = await api.Groups.all({ topLevelOnly: true, perPage: 100 });
    if (groups?.length) {
      await prisma.$transaction([
        prisma.gitlabGroup.deleteMany({ where: { integrationId: integ!.id, parentGitlabGroupId: null } }),
        prisma.gitlabGroup.createMany({
          data: groups.map((g: any) => ({
            integrationId: integ!.id,
            gitlabGroupId: g.id,
            parentGitlabGroupId: null,
            name: g.name,
            fullPath: g.full_name,
          })),
          skipDuplicates: true,
        }),
      ]);
    }
    return Response.json({ top: groups?.map((g: any) => ({ id: g.id, name: g.name, full_name: g.full_name })) ?? [] });
  }

  const groups: any[] = [];
  const projects: any[] = [];

  async function traverse(gid: number, parentId: number | null) {
    try {
      const g = await (api.Groups.show as any)(gid);
      if (g) groups.push({ id: g.id, name: g.name, parentId, type: "group" });
    } catch {}
    const subgroups = await api.Groups.subgroups(gid, { perPage: 100 });
    const projs = await api.Groups.projects(gid, { includeSubgroups: false, perPage: 100 });
    projects.push(
      ...projs.map((p: any) => ({ id: p.id, name: p.name, path_with_namespace: p.path_with_namespace, parentId: gid, type: "project" }))
    );
    const subgroupList: any[] = Array.isArray(subgroups)
      ? (subgroups as any[])
      : (((subgroups as unknown as any)?.data as any[]) ?? []);
    for (const sg of subgroupList) {
      await traverse(sg.id, gid);
    }
  }

  // Serve from DB first
  const dbGroups = await prisma.gitlabGroup.findMany({
    where: { integrationId: integ!.id },
    select: { gitlabGroupId: true, parentGitlabGroupId: true, name: true },
  });
  const dbProjects = await prisma.gitlabProject.findMany({
    where: { integrationId: integ!.id },
    select: { gitlabProjectId: true, groupGitlabId: true, name: true, pathWithNamespace: true },
  });
  if (!refresh && (dbGroups.length > 0 || dbProjects.length > 0)) {
    return Response.json({
      groups: dbGroups.map((g) => ({ id: g.gitlabGroupId, parentId: g.parentGitlabGroupId, name: g.name, type: "group" })),
      projects: dbProjects.map((p) => ({ id: p.gitlabProjectId, parentId: p.groupGitlabId ?? null, name: p.name, path_with_namespace: p.pathWithNamespace, type: "project" })),
    });
  }
  // Otherwise fetch from GitLab and persist
  await traverse(groupId, null);
  if (groups.length || projects.length) {
    await prisma.$transaction([
      prisma.gitlabGroup.deleteMany({ where: { integrationId: integ!.id } }),
      prisma.gitlabProject.deleteMany({ where: { integrationId: integ!.id } }),
      prisma.gitlabGroup.createMany({
        data: groups.map((g: any) => ({
          integrationId: integ!.id,
          gitlabGroupId: g.id,
          parentGitlabGroupId: g.parentId ?? null,
          name: g.name,
          fullPath: undefined,
        })),
        skipDuplicates: true,
      }),
      prisma.gitlabProject.createMany({
        data: projects.map((p: any) => ({
          integrationId: integ!.id,
          gitlabProjectId: p.id,
          groupGitlabId: p.parentId ?? null,
          name: p.name,
          pathWithNamespace: p.path_with_namespace,
        })),
        skipDuplicates: true,
      }),
    ]);
  }
  return Response.json({ groups, projects });
}


