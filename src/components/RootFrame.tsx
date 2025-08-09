"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/NavLink";
import SidebarClient from "@/components/SidebarClient";
import PageShell from "@/components/PageShell";
import { SWRConfig } from "swr";

export default function RootFrame({ children, session, fallback }: { children: React.ReactNode; session: any; fallback?: Record<string, any> }) {
  const pathname = usePathname();
  const isAuth = pathname?.startsWith("/auth/") ?? false;

  if (isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        {children}
      </div>
    );
  }

  return (
    <SWRConfig value={{
      fetcher: (url: string) => fetch(url).then((r) => r.json()),
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      keepPreviousData: true,
      dedupingInterval: 60_000,
      focusThrottleInterval: 60_000,
      provider: () => new Map(),
      fallback: fallback ?? {},
    }}>
      <div className="min-h-screen grid grid-rows-[64px_1fr] md:grid-rows-1 md:grid-cols-[280px_1fr]">
        <header className="md:hidden mx-4 mt-4 flex items-center justify-between px-4 py-3 rounded-2xl shadow-sm glass-morph">
          <Link href="/" className="text-lg font-semibold">CodeScanner</Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
              <Link href="/scans">New Scan</Link>
            </Button>
          </div>
        </header>
        <aside className="hidden md:block relative m-4 p-6 space-y-6 rounded-2xl shadow-lg glass-morph">
          <div className="text-xl font-semibold">CodeScanner</div>
          <nav className="space-y-1">
            <NavLink href="/">Dashboard</NavLink>
            <NavLink href="/scans">Scans</NavLink>
            <NavLink href="/integrations">Integrations</NavLink>
            <NavLink href="/org-map">Org Map</NavLink>
          </nav>
          <SidebarClient />
          <div className="absolute bottom-4 inset-x-6">
            <div className="mb-3 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            {session?.user ? (
              <Button asChild variant="outline" className="w-full">
                <a href="/api/auth/signout">Logout</a>
              </Button>
            ) : (
              <Button asChild variant="outline" className="w-full">
                <Link href="/auth/signin">Login</Link>
              </Button>
            )}
          </div>
        </aside>
        <main className="p-4 md:p-6 space-y-6 m-0 md:m-4 rounded-3xl glass-plain">
          <PageShell>{children}</PageShell>
        </main>
      </div>
    </SWRConfig>
  );
}


