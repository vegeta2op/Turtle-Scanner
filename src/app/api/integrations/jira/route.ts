import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { encryptToBase64, decryptFromBase64 } from "@/lib/crypto";

const schema = z.object({ host: z.string().min(3), email: z.string().email(), apiToken: z.string().min(10) });

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return new Response("Invalid payload", { status: 400 });

  const tokenEnc = encryptToBase64(parsed.data.apiToken);
  const existing = await prisma.integrationSettings.findFirst({ where: { provider: "JIRA", userId: session.user.id } });
  if (existing) {
    await prisma.integrationSettings.update({ where: { id: existing.id }, data: { accessTokenEnc: tokenEnc, data: { set: { host: parsed.data.host, email: parsed.data.email } } } });
  } else {
    await prisma.integrationSettings.create({ data: { provider: "JIRA", userId: session.user.id, accessTokenEnc: tokenEnc, data: { host: parsed.data.host, email: parsed.data.email } } });
  }
  return new Response(null, { status: 204 });
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const existing = await prisma.integrationSettings.findFirst({ where: { provider: "JIRA", userId: session.user.id } });
  if (!existing) return Response.json({ connected: false });
  const masked = existing.accessTokenEnc ? "********" : null;
  return Response.json({ connected: !!existing.accessTokenEnc, masked, data: existing.data ?? {} });
}

export async function DELETE() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const existing = await prisma.integrationSettings.findFirst({ where: { provider: "JIRA", userId: session.user.id } });
  if (!existing) return new Response(null, { status: 204 });
  await prisma.integrationSettings.update({ where: { id: existing.id }, data: { accessTokenEnc: null } });
  return new Response(null, { status: 204 });
} 