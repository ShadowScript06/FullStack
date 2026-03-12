// /app/dashboard/endpoints/EndpointMetrics.tsx
"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


type CheckType = {
  id: string;
  endpointId: string;
  status: number;
  responseMs: number;
  createdAt: string;
  // optionally include endpoint if you need it
};

export default function EndpointMetrics({ checks }: { checks: CheckType[] }) {
  const data = checks.map(c => ({
    time: new Date(c.createdAt).toLocaleTimeString(),
    responseMs: c.responseMs,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="responseMs" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
}