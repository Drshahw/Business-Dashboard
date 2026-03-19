"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Star, TrendingUp, Users, Heart, MessageCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const igData = [
  { name: "Mon", reach: 1200 },
  { name: "Tue", reach: 1800 },
  { name: "Wed", reach: 1500 },
  { name: "Thu", reach: 2200 },
  { name: "Fri", reach: 3500 },
  { name: "Sat", reach: 4200 },
  { name: "Sun", reach: 3800 },
];

export function MarketingTab() {
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
  const dotStroke = isDark ? "#18181b" : "#ffffff";

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Instagram Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <div className="p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg">
              <Instagram className="w-5 h-5 text-zinc-900 dark:text-white" />
            </div>
            <CardTitle className="text-zinc-800 dark:text-zinc-200">Instagram Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1"><Users className="w-3 h-3" /> Reach</p>
                <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">18.2k</p>
                <p className="text-xs text-emerald-700 mt-1">+12%</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1"><Heart className="w-3 h-3" /> Likes</p>
                <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">2.4k</p>
                <p className="text-xs text-emerald-700 mt-1">+5%</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Comments</p>
                <p className="text-xl font-bold text-zinc-900 dark:text-white mt-1">142</p>
                <p className="text-xs text-rose-700 mt-1">-2%</p>
              </div>
            </div>
            
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={igData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                  <XAxis dataKey="name" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, borderRadius: "8px", color: isDark ? "#fff" : "#000" }}
                    itemStyle={{ color: "#b45309" }}
                  />
                  <Line type="monotone" dataKey="reach" stroke="#b45309" strokeWidth={3} dot={{ r: 4, fill: "#b45309", strokeWidth: 2, stroke: dotStroke }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Google Reviews Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <div className="p-2 bg-blue-700 rounded-lg">
              <Star className="w-5 h-5 text-zinc-900 dark:text-white fill-white" />
            </div>
            <CardTitle className="text-zinc-800 dark:text-zinc-200">Google Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-zinc-900 dark:text-white">4.8</p>
                <div className="flex justify-center mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-amber-700 fill-amber-700" />
                  ))}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">842 total reviews</p>
              </div>
              <div className="flex-1 space-y-2">
                {[
                  { stars: 5, pct: 85 },
                  { stars: 4, pct: 10 },
                  { stars: 3, pct: 3 },
                  { stars: 2, pct: 1 },
                  { stars: 1, pct: 1 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-2 text-xs">
                    <span className="w-2 text-zinc-500 dark:text-zinc-400">{row.stars}</span>
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <div className="flex-1 h-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-700 rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="w-6 text-right text-zinc-500">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Recent Reviews</h4>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">JD</div>
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">John D.</span>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-amber-700 fill-amber-700" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">&quot;Amazing truffle burger! The atmosphere was great and service was super fast. Will definitely come back.&quot;</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
