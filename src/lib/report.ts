import { Severity } from "@/generated/prisma";

export function generateMarkdownReport(findings: Array<{
  severity: Severity;
  title: string;
  recommendation?: string | null;
}>) {
  const header = `| Severity | Title | Recommendation |\n|---|---|---|`;
  const rows = findings
    .sort((a, b) => severityRank(b.severity) - severityRank(a.severity))
    .map((f) => `| ${f.severity} | ${escapeMd(f.title)} | ${escapeMd(f.recommendation ?? "")} |`)
    .join("\n");
  return [header, rows].join("\n");
}

function escapeMd(s: string) {
  return s.replace(/\|/g, "\\|");
}

function severityRank(s: Severity): number {
  switch (s) {
    case "CRITICAL":
      return 5;
    case "HIGH":
      return 4;
    case "MEDIUM":
      return 3;
    case "LOW":
      return 2;
    case "INFO":
      return 1;
    default:
      return 0;
  }
}


