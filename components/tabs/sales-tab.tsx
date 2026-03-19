"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const revenueData = [
  { name: "Mon", revenue: 4000, previous: 3200 },
  { name: "Tue", revenue: 3000, previous: 2800 },
  { name: "Wed", revenue: 2000, previous: 2400 },
  { name: "Thu", revenue: 2780, previous: 2600 },
  { name: "Fri", revenue: 5890, previous: 4800 },
  { name: "Sat", revenue: 7390, previous: 6800 },
  { name: "Sun", revenue: 6490, previous: 5900 },
];

const channelData = [
  { name: "Dine-in", value: 65 },
  { name: "Delivery", value: 25 },
  { name: "Takeaway", value: 10 },
];

export function SalesTab() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const gridColor = isDark ? "#27272a" : "#e4e4e7";
  const axisColor = isDark ? "#71717a" : "#a1a1aa";
  const tooltipBg = isDark ? "#18181b" : "#ffffff";
  const tooltipBorder = isDark ? "#27272a" : "#e4e4e7";
  const previousLineColor = isDark ? "#52525b" : "#a1a1aa";

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-zinc-800 dark:text-zinc-200">Revenue Trend</CardTitle>
            <div className="flex bg-zinc-100 dark:bg-zinc-900 rounded-lg p-1 border border-zinc-200 dark:border-white/5">
              <button className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm">Daily</button>
              <button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white">Weekly</button>
              <button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white">Monthly</button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#b45309" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#b45309" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                  <XAxis dataKey="name" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, borderRadius: "8px", color: isDark ? "#fff" : "#000" }}
                    itemStyle={{ color: "#b45309" }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#b45309" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  <Line type="monotone" dataKey="previous" stroke={previousLineColor} strokeWidth={2} strokeDasharray="5 5" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-zinc-800 dark:text-zinc-200">Sales by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 mt-4">
              {channelData.map((channel) => (
                <div key={channel.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300">{channel.name}</span>
                    <span className="font-medium text-zinc-900 dark:text-white">{channel.value}%</span>
                  </div>
                  <div className="h-2 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-700 rounded-full" 
                      style={{ width: `${channel.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-4 rounded-xl bg-amber-700/10 border border-amber-700/20">
              <h4 className="text-sm font-medium text-amber-700 mb-1">Insight</h4>
              <p className="text-xs text-zinc-700 dark:text-zinc-300">Delivery orders are up 15% this week. Consider optimizing packaging for better heat retention.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
