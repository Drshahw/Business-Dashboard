"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, AlertCircle } from "lucide-react";

const topItems = [
  { name: "Truffle Burger", category: "Mains", sales: 145, revenue: "$2,610", margin: "68%", trend: "+12%" },
  { name: "Spicy Tuna Roll", category: "Sushi", sales: 120, revenue: "$1,800", margin: "72%", trend: "+8%" },
  { name: "Matcha Latte", category: "Drinks", sales: 210, revenue: "$1,050", margin: "85%", trend: "+15%" },
];

const lowItems = [
  { name: "Vegan Wrap", category: "Mains", sales: 12, revenue: "$144", margin: "45%", trend: "-22%" },
  { name: "Fruit Salad", category: "Sides", sales: 8, revenue: "$56", margin: "50%", trend: "-15%" },
];

export function MenuTab() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5 text-emerald-700" />
              Top Performing Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
                  <div>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.name}</p>
                    <p className="text-xs text-zinc-500">{item.category} • {item.sales} orders</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">{item.revenue}</p>
                    <p className="text-xs text-emerald-700">{item.trend}</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-xs text-zinc-500">Margin</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.margin}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowDownRight className="w-5 h-5 text-rose-700" />
              Needs Attention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                  <div>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.name}</p>
                    <p className="text-xs text-zinc-500">{item.category} • {item.sales} orders</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">{item.revenue}</p>
                    <p className="text-xs text-rose-700">{item.trend}</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-xs text-zinc-500">Margin</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.margin}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Menu Optimization</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Vegan Wrap sales have dropped 22%. Consider updating the recipe or replacing it with a seasonal item.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
