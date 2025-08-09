import { env } from "@/env";

export function createGithubHeaders(token?: string) {
  const t = token ?? env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "codescanner-app",
  };
  if (t) headers.Authorization = `Bearer ${t}`;
  return headers;
}

export async function githubGet(path: string, token?: string) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: createGithubHeaders(token),
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json();
} 