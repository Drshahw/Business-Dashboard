"use client";

import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
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

export function CompactSalesChart() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
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
            strokeWidth={2} 
            dot={false} 
            activeDot={{ r: 4 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
