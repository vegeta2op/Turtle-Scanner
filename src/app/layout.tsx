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
      const list = await prisma.integrationSettings.findMany({
        where: { userId: session.user.id },
        select: { provider: true, accessTokenEnc: true },
      });
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
