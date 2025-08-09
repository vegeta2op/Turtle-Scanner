import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Returns minimal instructions to add a webhook in a GitLab project/group
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  // Webhook endpoint users should configure in GitLab
  const url = `${process.env.APP_BASE_URL}/api/gitlab/webhook`;
  return Response.json({
    webhookUrl: url,
    description: "Add a Merge Request webhook pointing here with push events disabled.",
  });
}


