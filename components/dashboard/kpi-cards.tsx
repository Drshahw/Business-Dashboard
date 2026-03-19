"use strict";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, DollarSign, ShoppingBag, TrendingUp, Receipt } from "lucide-react";

const kpis = [
  {
    title: "Revenue",
    value: "$12,450",
    change: "+14.2%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "342",
    change: "+5.4%",
    trend: "up",
    icon: ShoppingBag,
  },
  {
    title: "Average Order Value",
    value: "$36.40",
    change: "-2.1%",
    trend: "down",
    icon: Receipt,
  },
  {
    title: "Growth",
    value: "24.5%",
    change: "+4.1%",
    trend: "up",
    icon: TrendingUp,
  },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <Card key={kpi.title} className="hover:border-amber-700/20 transition-colors">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{kpi.title}</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{kpi.value}</p>
              </div>
              <div className="p-2 bg-amber-700/10 rounded-xl">
                <kpi.icon className="w-5 h-5 text-amber-700" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${
                  kpi.trend === "up" ? "text-emerald-700 bg-emerald-700/10" : "text-rose-700 bg-rose-700/10"
                }`}
              >
                {kpi.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {kpi.change}
              </span>
              <span className="text-xs text-zinc-500">vs last week</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
