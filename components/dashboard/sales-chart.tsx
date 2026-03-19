"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const data = [
  { name: "Mon", sales: 4000 },
  { name: "Tue", sales: 3000 },
  { name: "Wed", sales: 2000 },
  { name: "Thu", sales: 2780 },
  { name: "Fri", sales: 1890 },
  { name: "Sat", sales: 2390 },
  { name: "Sun", sales: 3490 },
];

export function SalesChart() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Sales Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#27272a" : "#e4e4e7"} vertical={false} />
              <XAxis dataKey="name" stroke={isDark ? "#71717a" : "#a1a1aa"} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={isDark ? "#71717a" : "#a1a1aa"} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: isDark ? "#18181b" : "#ffffff", 
                  borderColor: isDark ? "#27272a" : "#e4e4e7", 
                  borderRadius: "8px",
                  color: isDark ? "#ffffff" : "#09090b"
                }}
                itemStyle={{ color: "#eab308" }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#eab308" 
                strokeWidth={3} 
                dot={{ r: 4, fill: "#eab308", strokeWidth: 2, stroke: isDark ? "#18181b" : "#ffffff" }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
