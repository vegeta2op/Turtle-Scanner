"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarClient() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/scans", label: "Scans" },
    { href: "/integrations", label: "Integrations" },
    { href: "/org-map", label: "Org Map" },
    { href: "/profile", label: "My Profile" },
  ];
  return (
    <nav className="space-y-1">
      {links.map((l) => (
        <Link key={l.href} href={l.href} prefetch className={`block px-3 py-2 rounded ${pathname === l.href ? "bg-primary/15" : "hover:bg-primary/10"}`}>{l.label}</Link>
      ))}
    </nav>
  );
}


