"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={twMerge(
        "block px-3 py-2 rounded-lg hover:bg-muted transition-colors",
        active && "bg-blue-600/90 text-white"
      )}
    >
      {children}
    </Link>
  );
}


