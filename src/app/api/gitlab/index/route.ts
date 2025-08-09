import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decryptFromBase64 } from "@/lib/crypto";
import { createGitlabClient } from "@/lib/gitlab";
import { redis } from "@/lib/redis";

// In-memory fallback when Redis is unavailable
const mem: Map<string, any> = (global as any).__indexMem ?? new Map();
if (!(global as any).__indexMem) (global as any).__indexMem = mem;

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const { groupId } = await req.json();
  if (!groupId) return new Response("Missing groupId", { status: 400 });

  const integ = await prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } });
  const token = integ?.accessTokenEnc ? decryptFromBase64(integ.accessTokenEnc) : undefined;
  if (!token) return new Response("Missing token", { status: 400 });
  const api = createGitlabClient(token);

  const progressKey = `index:${session.user.id}:${groupId}`;
  const startState = { status: "RUNNING", groups: 0, projects: 0 } as const;
  mem.set(progressKey, startState);
  try { await redis.set(progressKey, JSON.stringify(startState)); } catch {}

  // Run indexing inline for now; could be offloaded to a background queue
  let groups = 0;
  let projects = 0;
  async function traverse(gid: number, parentId: number | null) {
    groups++;
    mem.set(progressKey, { status: "RUNNING", groups, projects });
    try { await redis.set(progressKey, JSON.stringify({ status: "RUNNING", groups, projects })); } catch {}
    // Persist lightweight snapshot into IntegrationSettings.data
    try {
      await prisma.integrationSettings.update({
        where: { id: integ!.id },
        data: {
          data: {
            set: {
              ...(integ?.data as any),
              indexStates: {
                ...((integ?.data as any)?.indexStates ?? {}),
                [groupId]: { status: "RUNNING", groups, projects, updatedAt: new Date().toISOString() },
              },
            },
          },
        },
      });
    } catch {}
    // Fetch group metadata for accurate name/parent persistence
    let groupMeta: any | undefined;
    try { groupMeta = await (api.Groups.show as any)(gid); } catch {}
    const subgroups = await api.Groups.subgroups(gid, { perPage: 100 });
    const projs = await api.Groups.projects(gid, { includeSubgroups: false, perPage: 100 });
    projects += (projs as any[]).length;
    mem.set(progressKey, { status: "RUNNING", groups, projects });
    try { await redis.set(progressKey, JSON.stringify({ status: "RUNNING", groups, projects })); } catch {}
    try {
      await prisma.integrationSettings.update({
        where: { id: integ!.id },
        data: {
          data: {
            set: {
              ...(integ?.data as any),
              indexStates: {
                ...((integ?.data as any)?.indexStates ?? {}),
                [groupId]: { status: "RUNNING", groups, projects, updatedAt: new Date().toISOString() },
              },
            },
          },
        },
      });
    } catch {}
    // Persist incremental snapshot of this node subtree
    try {
      await prisma.$transaction([
        prisma.gitlabGroup.upsert({
          where: { integrationId_gitlabGroupId: { integrationId: integ!.id, gitlabGroupId: gid } },
          create: {
            integrationId: integ!.id,
            gitlabGroupId: gid,
            parentGitlabGroupId: parentId,
            name: groupMeta?.name ?? String(gid),
            fullPath: groupMeta?.full_path ?? null,
          },
          update: {
            parentGitlabGroupId: parentId,
            name: groupMeta?.name ?? String(gid),
            fullPath: groupMeta?.full_path ?? null,
            lastSyncedAt: new Date(),
          },
        }),
        prisma.gitlabProject.createMany({
          data: (projs as any[]).map((p) => ({
            integrationId: integ!.id,
            gitlabProjectId: p.id,
            groupGitlabId: gid,
            name: p.name,
            pathWithNamespace: p.path_with_namespace,
          })),
          skipDuplicates: true,
        }),
      ]);
    } catch {}
    const subgroupList: any[] = Array.isArray(subgroups)
      ? (subgroups as any[])
      : (((subgroups as unknown as any)?.data as any[]) ?? []);
    for (const sg of subgroupList) await traverse(sg.id, gid);
  }
  await traverse(Number(groupId), null);
  mem.set(progressKey, { status: "COMPLETED", groups, projects });
  try { await redis.set(progressKey, JSON.stringify({ status: "COMPLETED", groups, projects })); } catch {}
  try {
    await prisma.integrationSettings.update({
      where: { id: integ!.id },
      data: {
        data: {
          set: {
            ...(integ?.data as any),
            indexStates: {
              ...((integ?.data as any)?.indexStates ?? {}),
              [groupId]: { status: "COMPLETED", groups, projects, updatedAt: new Date().toISOString() },
            },
          },
        },
      },
    });
  } catch {}
  return Response.json({ groups, projects });
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get("groupId");
  if (!groupId) return new Response("Missing groupId", { status: 400 });
  const progressKey = `index:${session.user.id}:${groupId}`;
  // Prefer persisted Prisma state first to avoid showing stale RUNNING after refresh
  let state: any | undefined;
  try {
    const integ = await prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } });
    if (integ?.data && (integ.data as any).indexStates?.[groupId]) {
      state = (integ.data as any).indexStates[groupId];
    }
  } catch {}
  if (!state) {
    try {
      const raw = await redis.get(progressKey);
      if (raw) state = JSON.parse(raw);
    } catch {}
  }
  if (!state) state = mem.get(progressKey);
  return Response.json(state ?? { status: "IDLE" });
}


