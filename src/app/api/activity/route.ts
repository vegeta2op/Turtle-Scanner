import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const [queued, running] = await Promise.all([
    prisma.scan.count({ where: { createdByUserId: session.user.id, status: "QUEUED" } }),
    prisma.scan.count({ where: { createdByUserId: session.user.id, status: "RUNNING" } }),
  ]);

  return Response.json({ queued, running, busy: queued + running > 0, ts: Date.now() });
}


