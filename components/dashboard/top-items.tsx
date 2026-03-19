"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const items = [
  { name: "Truffle Burger", sales: 145, revenue: "$2,610", trend: "+12%" },
  { name: "Spicy Tuna Roll", sales: 120, revenue: "$1,800", trend: "+8%" },
  { name: "Avocado Toast", sales: 95, revenue: "$1,140", trend: "-3%" },
  { name: "Matcha Latte", sales: 210, revenue: "$1,050", trend: "+15%" },
  { name: "Wagyu Steak", sales: 45, revenue: "$3,150", trend: "+5%" },
];

export function TopItems() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Top Menu Items</CardTitle>
        <button className="text-xs text-amber-700 hover:text-amber-600 transition-colors flex items-center gap-1">
          View All <ArrowUpRight className="w-3 h-3" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-700/10 flex items-center justify-center text-amber-700 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.name}</p>
                  <p className="text-xs text-zinc-500">{item.sales} orders</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zinc-900 dark:text-white">{item.revenue}</p>
                <p className={`text-xs ${item.trend.startsWith("+") ? "text-emerald-700" : "text-rose-700"}`}>
                  {item.trend}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
