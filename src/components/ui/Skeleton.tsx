import React from "react";
import { twMerge } from "tailwind-merge";

export function Skeleton({ className }: { className?: string }) {
  return <div className={twMerge("animate-pulse rounded-md bg-muted", className)} />;
}


