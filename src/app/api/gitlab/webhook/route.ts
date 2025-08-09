import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { decryptFromBase64 } from "@/lib/crypto";
import { createGitlabClient, fetchProjectSnapshot, postMergeRequestComment } from "@/lib/gitlab";
import OpenAI from "openai";
import { env } from "@/env";

export async function POST(req: NextRequest) {
  // Minimal webhook: react to Merge Request events and comment a quick scan summary
  // In production: validate secret token in headers (X-Gitlab-Token)
  const payload = await req.json();
  const event = req.headers.get("x-gitlab-event");
  if (event !== "Merge Request Hook") return new Response("ignored", { status: 200 });

  const projectId = payload?.project?.id as number | undefined;
  const mr = payload?.object_attributes;
  const mrIid = mr?.iid as number | undefined;
  if (!projectId || !mrIid) return new Response("bad", { status: 200 });

  try {
    const snapshot = await fetchProjectSnapshot(projectId, { maxFiles: 60, maxBytes: 400_000 });
    const codeContext = snapshot.files
      .map((f) => `\n// FILE: ${f.path}\n${f.content.substring(0, 4000)}`)
      .join("\n");

    if (!env.OPENAI_API_KEY) return new Response("no ai", { status: 200 });
    const ai = new OpenAI({ apiKey: env.OPENAI_API_KEY });
    const res = await ai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content:
            "Review this MR code snapshot for security issues. Reply with 3-5 bullets.\n\n" +
            codeContext,
        },
      ],
      temperature: 0.2,
    });
    const summary = res.choices[0]?.message?.content ?? "No issues found.";
    await postMergeRequestComment(projectId, mrIid, `Automated Scan Summary:\n\n${summary}`);
  } catch (err) {
    // swallow errors so the webhook doesn't retry excessively
  }

  return new Response("ok", { status: 200 });
}


