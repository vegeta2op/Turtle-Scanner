"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Card, CardContent, CardHeader } from "./Card";

export function KpiCard({ title, value, subtitle }: { title: string; value: number; subtitle?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Card className="relative overflow-hidden">
      <div className="pointer-events-none absolute -inset-1 rounded-xl opacity-60 animate-shimmer" />
      <CardHeader className="relative">
        <div className="text-sm text-muted-foreground">{title}</div>
      </CardHeader>
      <CardContent className="relative">
        <div className="text-5xl font-semibold tracking-tight" suppressHydrationWarning>
          {mounted ? <CountUp end={value} duration={1.0} /> : value}
        </div>
        {subtitle && <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>}
      </CardContent>
    </Card>
  );
}


