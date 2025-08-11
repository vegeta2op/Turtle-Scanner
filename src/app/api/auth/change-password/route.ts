import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { compare, hash } from "bcrypt";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const { current, next } = await req.json().catch(() => ({}));
  if (!current || !next || String(next).length < 8) return new Response("Invalid payload", { status: 400 });
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user?.passwordHash) return new Response("Password not set", { status: 400 });
  const ok = await compare(String(current), user.passwordHash);
  if (!ok) return new Response("Current password incorrect", { status: 403 });
  const passwordHash = await hash(String(next), 10);
  await prisma.user.update({ where: { id: user.id }, data: { passwordHash } });
  return new Response(null, { status: 204 });
} 