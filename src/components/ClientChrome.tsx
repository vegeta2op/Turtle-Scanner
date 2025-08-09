"use client";
import dynamic from "next/dynamic";

const BottomProgress = dynamic(() => import("@/components/BottomProgress"), { ssr: false });

export default function ClientChrome() {
  return <BottomProgress />;
}


