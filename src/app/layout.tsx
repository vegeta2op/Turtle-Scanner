import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ClientChrome from "@/components/ClientChrome";
import RootFrame from "@/components/RootFrame";
import { prisma } from "@/lib/prisma";
import { decryptFromBase64 } from "@/lib/crypto";

export const metadata = {
  title: "Turtle CodeScanner",
  description: "AI-assisted code scanning",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  // Build SWR fallback for instant client hydration
  let fallback: Record<string, any> = {};
  if (session?.user?.id) {
    try {
      const [list, totalScans, recentScans, severityAgg, glInteg] = await Promise.all([
        prisma.integrationSettings.findMany({ where: { userId: session.user.id }, select: { provider: true, accessTokenEnc: true } }),
        prisma.scan.count({ where: { createdByUserId: session.user.id } }),
        prisma.scan.findMany({ where: { createdByUserId: session.user.id }, orderBy: { createdAt: "desc" }, take: 10, select: { id: true, createdAt: true, status: true } }),
        prisma.scanFinding.groupBy({ by: ["severity"], _count: { _all: true }, where: { scan: { createdByUserId: session.user.id } } }),
        prisma.integrationSettings.findFirst({ where: { provider: "GITLAB", userId: session.user.id } }),
      ]);
      const byProv = new Map(list.map((i) => [i.provider, i]));
      function mask(token?: string | null) {
        if (!token) return undefined;
        try {
          const t = decryptFromBase64(token);
          const last4 = t.slice(-4);
          return `${"*".repeat(Math.max(0, t.length - 4))}${last4}`;
        } catch {
          return "********";
        }
      }
      const gl = byProv.get("GITLAB");
      const gh = byProv.get("GITHUB");
      const sl = byProv.get("SLACK");
      const ji = byProv.get("JIRA");
      fallback["/api/integrations/gitlab"] = { connected: !!gl?.accessTokenEnc, masked: mask(gl?.accessTokenEnc) };
      fallback["/api/integrations/github"] = { connected: !!gh?.accessTokenEnc, masked: mask(gh?.accessTokenEnc) };
      fallback["/api/integrations/slack"] = { connected: !!sl?.accessTokenEnc, masked: mask(sl?.accessTokenEnc) };
      fallback["/api/integrations/jira"] = { connected: !!ji?.accessTokenEnc, masked: mask(ji?.accessTokenEnc) };

      // Prime stats and scans for faster first paint
      let projects = 0;
      let groups = 0;
      if (glInteg?.id) {
        const [gCount, pCount] = await Promise.all([
          prisma.gitlabGroup.count({ where: { integrationId: glInteg.id } }),
          prisma.gitlabProject.count({ where: { integrationId: glInteg.id } }),
        ]);
        groups = gCount; projects = pCount;
      }
      fallback["/api/stats"] = {
        totalScans,
        bySeverity: severityAgg.map((x) => ({ severity: x.severity, count: x._count._all })),
        recentScans,
        orgStats: { groups, projects },
      };
      const scans = await prisma.scan.findMany({ where: { createdByUserId: session.user.id }, orderBy: { createdAt: "desc" }, select: { id: true, status: true, createdAt: true, reportMarkdown: true } });
      fallback["/api/scans"] = scans;
    } catch {}
  }

  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <RootFrame session={session} fallback={fallback}>{children}</RootFrame>
        <ClientChrome />
      </body>
    </html>
  );
}
