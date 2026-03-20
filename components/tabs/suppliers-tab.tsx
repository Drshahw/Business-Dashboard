"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, Filter, ArrowUpRight, TrendingUp, AlertCircle, Package, Truck } from "lucide-react";

const suppliers = [
  { id: 1, name: "Meat Masters", category: "Meat", lastOrder: "2026-03-18", spend: "45,200 AED", change: "+2.1%", reliability: "98%", status: "Active" },
  { id: 2, name: "Green Valley Farm", category: "Vegetables", lastOrder: "2026-03-19", spend: "12,400 AED", change: "-1.5%", reliability: "95%", status: "Active" },
  { id: 3, name: "Dairy Dreams", category: "Dairy", lastOrder: "2026-03-17", spend: "8,900 AED", change: "+5.0%", reliability: "92%", status: "Active" },
  { id: 4, name: "Sea Fresh", category: "Seafood", lastOrder: "2026-03-15", spend: "32,100 AED", change: "+0.8%", reliability: "89%", status: "Inactive" },
];

export function SuppliersTab() {
  const [view, setView] = useState<"table" | "card">("table");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Suppliers</h2>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Last 30 Days
          </button>
          <button className="px-4 py-2 bg-amber-700 text-white rounded-xl text-sm font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Supplier
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Suppliers", value: "42", icon: Package, trend: "+2" },
          { title: "Total Spend", value: "98,600 AED", icon: Truck, trend: "+5%" },
          { title: "Avg Cost Change", value: "1.2%", icon: TrendingUp, trend: "-0.5%" },
          { title: "Most Used", value: "Meat Masters", icon: Package, trend: "Stable" },
        ].map((kpi, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{kpi.title}</p>
                  <p className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">{kpi.value}</p>
                </div>
                <div className="p-2 bg-amber-700/10 rounded-xl">
                  <kpi.icon className="w-5 h-5 text-amber-700" />
                </div>
              </div>
              <p className="text-xs text-emerald-700 mt-4 font-medium">{kpi.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Supplier List</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-xl text-sm" />
            </div>
            <button className="p-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-xl">
              <Filter className="w-4 h-4 text-zinc-500" />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-zinc-500 border-b border-zinc-200 dark:border-white/5">
                <tr>
                  <th className="pb-3 font-medium">Supplier Name</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Last Order</th>
                  <th className="pb-3 font-medium">Total Spend</th>
                  <th className="pb-3 font-medium">Price Change</th>
                  <th className="pb-3 font-medium">Reliability</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-white/5">
                {suppliers.map((s) => (
                  <tr key={s.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer">
                    <td className="py-4 font-medium text-zinc-900 dark:text-white">{s.name}</td>
                    <td className="py-4 text-zinc-600 dark:text-zinc-400">{s.category}</td>
                    <td className="py-4 text-zinc-600 dark:text-zinc-400">{s.lastOrder}</td>
                    <td className="py-4 font-medium">{s.spend}</td>
                    <td className={`py-4 ${s.change.startsWith("+") ? "text-rose-700" : "text-emerald-700"}`}>{s.change}</td>
                    <td className="py-4 text-zinc-600 dark:text-zinc-400">{s.reliability}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${s.status === "Active" ? "bg-emerald-700/10 text-emerald-700" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600"}`}>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="border-amber-700/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <AlertCircle className="w-5 h-5" /> AI Procurement Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-amber-700/5 border border-amber-700/10">
            <p className="text-sm font-medium text-amber-700 mb-1">Cost Alert</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">Meat prices from Meat Masters increased by 5% this week. Consider bulk ordering before further hikes.</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-700/5 border border-emerald-700/10">
            <p className="text-sm font-medium text-emerald-700 mb-1">Optimization</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">Supplier B offers similar vegetable quality at 8% lower cost. Suggesting a trial order.</p>
          </div>
          <div className="p-4 rounded-xl bg-sky-700/5 border border-sky-700/10">
            <p className="text-sm font-medium text-sky-700 mb-1">Reorder Recommendation</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">Dairy stock is low. Based on current usage, reorder from Dairy Dreams by tomorrow to avoid shortages.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
