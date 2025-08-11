import { Gitlab } from "@gitbeaker/node";
import { env } from "@/env";

export function createGitlabClient(token?: string) {
  return new Gitlab({
    host: env.GITLAB_BASE_URL,
    token: token ?? env.GITLAB_TOKEN,
  });
}

export async function searchProjectsRecursively(groupId: number, query: string) {
  const api = createGitlabClient();
  const groupsApi = api.Groups;
  const projectsApi = api.Projects;

  const results: any[] = [];

  async function traverse(group: number) {
    const subgroups = await groupsApi.subgroups(group, { perPage: 100 });
    const projects = await groupsApi.projects(group, { perPage: 100, includeSubgroups: true, search: query });
    results.push(...projects);
    for (const sg of subgroups as unknown as any[]) {
      await traverse(sg.id);
    }
  }

  await traverse(groupId);
  // Deduplicate by id
  const dedup = new Map<number, any>();
  for (const p of results) dedup.set(p.id, p);
  return Array.from(dedup.values());
}

export async function fetchProjectKeyFiles(projectId: number) {
  const api = createGitlabClient();
  const trees = await api.Repositories.tree(projectId, { recursive: true, perPage: 100 });
  const interesting = (trees as any[])
    .filter((t) => t.type === "blob")
    .filter((t) => /(^|\/)(package\.json|requirements\.txt|pom\.xml|build\.gradle|setup\.py|Cargo\.toml|go\.mod|Gemfile|Pipfile|composer\.json|Dockerfile|docker-compose\.ya?ml|\.github\/workflows\/|\.gitlab-ci\.yml|src\/.*\.(ts|js|go|py|java|rb))$/i.test(t.path))
    .slice(0, 60);
  const files: Array<{ path: string; content: string }> = [];
  for (const f of interesting) {
    try {
      const file = await api.RepositoryFiles.show(projectId, f.path, "main");
      const buff = Buffer.from((file as any).content, "base64");
      files.push({ path: f.path, content: buff.toString("utf8") });
    } catch {}
  }
  return files;
}

/**
 * Fetch a broader snapshot of a GitLab project with guardrails:
 * - Determines default branch
 * - Traverses the repo tree recursively
 * - Filters to interesting files (config, manifests, CI, and code under src/ and other common dirs)
 * - Limits total files and total bytes to fit LLM context windows
 */
export async function fetchProjectSnapshot(
  projectId: number,
  options?: {
    branch?: string;
    maxFiles?: number;
    maxBytes?: number;
    include?: RegExp;
  },
  token?: string
) {
  const api = createGitlabClient(token);
  const project = await (api.Projects.show as any)(projectId);
  const branch: string = options?.branch ?? project?.default_branch ?? "main";
  const includeRegex =
    options?.include ??
    new RegExp(
      '(^|\\/)(?:readme\\.md|license|security\\.md|package\\.json|requirements\\.txt|pom\\.xml|build\\.gradle|setup\\.py|Cargo\\.toml|go\\.mod|Gemfile|Pipfile|composer\\.json|Dockerfile|docker-compose\\.ya?ml|\\.github\\/workflows\\/|\\.gitlab-ci\\.yml|\\.env\\.example|(?:(?:src|lib|app|server|backend|frontend|cmd|pkg|internal|api|routes|controllers|models|utils|services)\\/.*\\.(?:ts|tsx|js|jsx|mjs|cjs|go|py|java|rb|rs|php|cs))|(?:[^\\/]+\\.(?:ts|tsx|js|jsx|mjs|cjs|go|py|java|rb|rs|php|cs)))$',
      'i'
    );
  const maxFiles = options?.maxFiles ?? 120;
  const maxBytes = options?.maxBytes ?? 600_000; // ~600 KB text

  const trees = await api.Repositories.tree(projectId, { recursive: true, perPage: 100 });
  const files: Array<{ path: string; content: string }> = [];
  let budget = maxBytes;

  for (const node of trees as any[]) {
    if (node.type !== "blob") continue;
    const p: string = node.path;
    if (!includeRegex.test(p)) continue;
    if (files.length >= maxFiles || budget <= 0) break;
    try {
      const file = await api.RepositoryFiles.show(projectId, p, branch);
      const buff = Buffer.from((file as any).content, "base64");
      const text = buff.toString("utf8");
      const size = Buffer.byteLength(text, "utf8");
      if (size > budget) continue;
      budget -= size;
      files.push({ path: p, content: text });
    } catch {
      // ignore individual file errors
    }
  }

  return { branch, files };
}

export async function postMergeRequestComment(
  projectId: number,
  mrIid: number,
  body: string,
  token?: string
) {
  const api = createGitlabClient(token);
  // GitBeaker: Discussions or MergeRequestNotes
  try {
    // @ts-ignore types for resource access
    await (api as any).MergeRequestNotes.create(projectId, mrIid, body);
  } catch (err) {
    // fallback older API name
    try {
      await (api as any).Discussions.createMergeRequest(projectId, mrIid, { body });
    } catch {}
  }
}


