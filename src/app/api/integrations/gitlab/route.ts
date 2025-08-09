import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { encryptToBase64, decryptFromBase64 } from "@/lib/crypto";

const schema = z.object({ token: z.string().min(10) });

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return new Response("Invalid payload", { status: 400 });

  const tokenEnc = encryptToBase64(parsed.data.token);
  // Find existing integration
  const existing = await prisma.integrationSettings.findFirst({
    where: {
      provider: "GITLAB",
      userId: session.user.id,
    },
  });

  if (existing) {
    // Update existing
    await prisma.integrationSettings.update({
      where: { id: existing.id },
      data: { accessTokenEnc: tokenEnc },
    });
  } else {
    // Create new
    await prisma.integrationSettings.create({
      data: {
        provider: "GITLAB",
        userId: session.user.id,
        accessTokenEnc: tokenEnc,
      },
    });
  }
  return new Response(null, { status: 204 });
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const existing = await prisma.integrationSettings.findFirst({
    where: { provider: "GITLAB", userId: session.user.id },
  });
  if (!existing?.accessTokenEnc) return Response.json({ connected: false });
  try {
    const token = decryptFromBase64(existing.accessTokenEnc);
    const last4 = token.slice(-4);
    const masked = `${"*".repeat(Math.max(0, token.length - 4))}${last4}`;
    return Response.json({ connected: true, masked });
  } catch {
    return Response.json({ connected: true, masked: "********" });
  }
}

export async function DELETE() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const existing = await prisma.integrationSettings.findFirst({
    where: { provider: "GITLAB", userId: session.user.id },
  });
  if (!existing) return new Response(null, { status: 204 });
  await prisma.integrationSettings.update({
    where: { id: existing.id },
    data: { accessTokenEnc: null },
  });
  return new Response(null, { status: 204 });
}


