import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { z } from "zod";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), password: z.string().min(8) });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) return new Response("Invalid payload", { status: 400 });
    const exists = await prisma.user.findUnique({ where: { email: parsed.data.email } });
    if (exists) return new Response("Email already registered", { status: 409 });
    const passwordHash = await hash(parsed.data.password, 10);
    await prisma.user.create({ data: { name: parsed.data.name, email: parsed.data.email, passwordHash } });
    return new Response(null, { status: 204 });
  } catch (e: any) {
    const msg = String(e?.message || "");
    if (/Can\'t reach database server|connect ECONNREFUSED|PRISMA|Query Engine/i.test(msg)) {
      return new Response("Service temporarily unavailable. Please try again shortly.", { status: 503 });
    }
    return new Response("Unexpected error", { status: 500 });
  }
}


