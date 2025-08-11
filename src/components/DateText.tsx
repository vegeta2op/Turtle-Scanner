import React from "react";

function formatUtc(value: string | number | Date): { iso: string; text: string } {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return { iso: "", text: "" };
  const iso = d.toISOString();
  const fmt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(d);
  return { iso, text: `${fmt} UTC` };
}

export default function DateText({ value }: { value: string | number | Date }) {
  const { iso, text } = formatUtc(value);
  return (
    <time dateTime={iso}>{text}</time>
  );
} 