"use client";
import dynamic from "next/dynamic";

const SidebarStatus = dynamic(() => import("@/components/SidebarStatus"), { ssr: false });

export default function SidebarClient() {
  return <SidebarStatus />;
}


