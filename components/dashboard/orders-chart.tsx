"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const data = [
  { time: "10am", orders: 12 },
  { time: "12pm", orders: 45 },
  { time: "2pm", orders: 30 },
  { time: "4pm", orders: 18 },
  { time: "6pm", orders: 55 },
  { time: "8pm", orders: 68 },
  { time: "10pm", orders: 25 },
];

export function OrdersChart() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Orders by Hour</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#27272a" : "#e4e4e7"} vertical={false} />
              <XAxis dataKey="time" stroke={isDark ? "#71717a" : "#a1a1aa"} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={isDark ? "#71717a" : "#a1a1aa"} fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: isDark ? "#27272a" : "#f4f4f5", opacity: 0.4 }}
                contentStyle={{ 
                  backgroundColor: isDark ? "#18181b" : "#ffffff", 
                  borderColor: isDark ? "#27272a" : "#e4e4e7", 
                  borderRadius: "8px",
                  color: isDark ? "#ffffff" : "#09090b"
                }}
                itemStyle={{ color: "#eab308" }}
              />
              <Bar dataKey="orders" fill="#eab308" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
