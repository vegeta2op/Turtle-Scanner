"use client";
import React, { useMemo, useState } from "react";

type GroupNode = { id: number; name: string; parentId: number | null };
type ProjectNode = { id: number; name: string; path_with_namespace?: string; parentId: number | null; html_url?: string };

export default function OrgTree({
  groups,
  projects,
  rootId,
}: {
  groups: GroupNode[];
  projects: ProjectNode[];
  rootId: number | null;
}) {
  const { childrenGroupsByParent, projectsByParent, rootCandidates } = useMemo(() => {
    const childrenGroupsByParent = new Map<number | null, GroupNode[]>();
    const projectsByParent = new Map<number | null, ProjectNode[]>();
    for (const g of groups) {
      const key = g.parentId ?? null;
      if (!childrenGroupsByParent.has(key)) childrenGroupsByParent.set(key, []);
      childrenGroupsByParent.get(key)!.push(g);
    }
    for (const p of projects) {
      const key = p.parentId ?? null;
      if (!projectsByParent.has(key)) projectsByParent.set(key, []);
      projectsByParent.get(key)!.push(p);
    }
    const rootCandidates = (childrenGroupsByParent.get(null) ?? []).sort((a, b) => a.name.localeCompare(b.name));
    for (const [key, list] of childrenGroupsByParent.entries()) if (key !== null) list.sort((a, b) => a.name.localeCompare(b.name));
    for (const [key, list] of projectsByParent.entries()) if (key !== null) list.sort((a, b) => (a.path_with_namespace ?? a.name).localeCompare(b.path_with_namespace ?? b.name));
    return { childrenGroupsByParent, projectsByParent, rootCandidates };
  }, [groups, projects]);

  const startGroups = rootId ? (childrenGroupsByParent.get(null) || []).filter((g) => g.id === rootId) : rootCandidates;

  return (
    <div className="text-sm">
      {startGroups.map((g) => (
        <GroupBranch
          key={g.id}
          group={g}
          level={0}
          initiallyOpen={false}
          childrenGroupsByParent={childrenGroupsByParent}
          projectsByParent={projectsByParent}
        />
      ))}
      {!startGroups.length && (
        <div className="text-xs text-muted-foreground">No groups found.</div>
      )}
    </div>
  );
}

function GroupBranch({
  group,
  level,
  initiallyOpen,
  childrenGroupsByParent,
  projectsByParent,
}: {
  group: GroupNode;
  level: number;
  initiallyOpen?: boolean;
  childrenGroupsByParent: Map<number | null, GroupNode[]>;
  projectsByParent: Map<number | null, ProjectNode[]>;
}) {
  const children = childrenGroupsByParent.get(group.id) ?? [];
  const projs = projectsByParent.get(group.id) ?? [];
  const [open, setOpen] = useState<boolean>(Boolean(initiallyOpen));
  const hasChildren = children.length > 0 || projs.length > 0;
  const indentPx = Math.min(20 + level * 16, 72);
  return (
    <div className="row-modern">
      <button
        type="button"
        onClick={() => hasChildren && setOpen((v) => !v)}
        className="w-full flex items-center gap-2 py-2 px-2 rounded"
        style={{ paddingLeft: indentPx }}
        aria-expanded={open}
      >
        <span className={`inline-block transition-transform duration-200 ${open ? "rotate-90" : "rotate-0"} ${hasChildren ? "text-muted-foreground" : "opacity-0"}`}>▶</span>
        <span className="row-icon">{level === 0 ? "📁" : "📂"}</span>
        <span className="font-medium truncate">{group.name}</span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="ml-5 pl-3 space-y-1">
            {open &&
              children.map((cg) => (
                <GroupBranch
                  key={cg.id}
                  group={cg}
                  level={level + 1}
                  initiallyOpen={false}
                  childrenGroupsByParent={childrenGroupsByParent}
                  projectsByParent={projectsByParent}
                />
              ))}
            {open &&
              projs.map((p) => (
                <div key={p.id} className="row-modern flex items-center gap-2 py-1.5 px-2 text-xs" style={{ paddingLeft: Math.min(indentPx + 12, 72) }}>
                  <span className="row-icon">📄</span>
                  {p.html_url ? (
                    <a className="truncate underline" href={p.html_url} target="_blank" rel="noreferrer">{p.path_with_namespace ?? p.name}</a>
                  ) : (
                    <span className="truncate">{p.path_with_namespace ?? p.name}</span>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}


