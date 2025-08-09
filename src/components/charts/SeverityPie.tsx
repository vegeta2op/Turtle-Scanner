"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function SeverityPie({ data }: { data: Array<{ name: string; value: number }> }) {
  const colors: Record<string, string> = { CRITICAL: "#b91c1c", HIGH: "#ef4444", MEDIUM: "#f59e0b", LOW: "#10b981", INFO: "#3b82f6" };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" label>
          {data.map((entry, index) => (
            <Cell key={`c-${index}`} fill={colors[entry.name] ?? "#8884d8"} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}


