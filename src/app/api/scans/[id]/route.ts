import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const params = await ctx.params;
  const scan = await prisma.scan.findFirst({
    where: { id: params.id, createdByUserId: session.user.id },
    include: { findings: true },
  });
  if (!scan) return new Response("Not found", { status: 404 });
  return Response.json(scan);
}


