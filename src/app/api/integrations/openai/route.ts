import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { encryptToBase64, decryptFromBase64 } from "@/lib/crypto";

const schema = z.object({ apiKey: z.string().min(10) });

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) return new Response("Invalid payload", { status: 400 });
    const enc = encryptToBase64(parsed.data.apiKey);
    const existing = await prisma.integrationSettings.findFirst({ where: { provider: "OPENAI" as any, userId: session.user.id } });
    if (existing) await prisma.integrationSettings.update({ where: { id: existing.id }, data: { accessTokenEnc: enc } });
    else await prisma.integrationSettings.create({ data: { provider: "OPENAI" as any, userId: session.user.id, accessTokenEnc: enc } });
    return new Response(null, { status: 204 });
  } catch (e: any) {
    return new Response(e?.message || "Failed to save OpenAI key", { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
    const existing = await prisma.integrationSettings.findFirst({ where: { provider: "OPENAI" as any, userId: session.user.id } });
    if (!existing?.accessTokenEnc) return Response.json({ connected: false });
    try {
      const token = decryptFromBase64(existing.accessTokenEnc);
      const last4 = token.slice(-4);
      return Response.json({ connected: true, masked: `${"*".repeat(Math.max(0, token.length - 4))}${last4}` });
    } catch {
      return Response.json({ connected: true, masked: "********" });
    }
  } catch (e: any) {
    return new Response(e?.message || "Failed", { status: 500 });
  }
}

export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
    const existing = await prisma.integrationSettings.findFirst({ where: { provider: "OPENAI" as any, userId: session.user.id } });
    if (existing) await prisma.integrationSettings.update({ where: { id: existing.id }, data: { accessTokenEnc: null } });
    return new Response(null, { status: 204 });
  } catch (e: any) {
    return new Response(e?.message || "Failed", { status: 500 });
  }
} 