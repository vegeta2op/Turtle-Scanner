import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decryptFromBase64 } from "@/lib/crypto";
import { createGitlabClient } from "@/lib/gitlab";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const { searchParams } = new URL(req.url);
  const groupIdRaw = searchParams.get("groupId");
  const groupId = groupIdRaw ? parseInt(groupIdRaw, 10) : undefined;
  const q = (searchParams.get("q") || "").trim();

  const integ = await prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } });
  const token = integ?.accessTokenEnc ? decryptFromBase64(integ.accessTokenEnc) : undefined;
  const api = createGitlabClient(token);

  // If a group is provided, keep the existing group-scoped logic
  if (groupId) {
    async function listPage(page?: number) {
      // @ts-ignore GitBeaker typing
      return await api.Groups.projects(groupId, { includeSubgroups: true, perPage: 100, page });
    }

    let results: any[] = [];
    try {
      if (q) {
        // @ts-ignore GitBeaker typing
        results = await api.Groups.projects(groupId, { includeSubgroups: true, perPage: 100, search: q });
      }
    } catch {}

    if (!q || results.length === 0 || q.includes("/")) {
      const all: any[] = [];
      for (let page = 1; page <= 5; page++) {
        const pageItems = await listPage(page);
        if (!Array.isArray(pageItems) || pageItems.length === 0) break;
        all.push(...pageItems);
        if (pageItems.length < 100) break;
      }
      results = q
        ? all.filter((p) => {
            const hay = String(p.path_with_namespace || p.name || "").toLowerCase();
            return hay.includes(q.toLowerCase());
          })
        : all;
    }

    return Response.json(results);
  }

  // No groupId: perform a global search across accessible projects
  try {
    // @ts-ignore GitBeaker typing
    const projects = await api.Projects.all({ membership: true, perPage: 50, simple: true, ...(q ? { search: q } : {}) });
    return Response.json(projects);
  } catch {
    return Response.json([]);
  }
}


