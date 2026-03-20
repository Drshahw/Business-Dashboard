"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, AlertTriangle, Zap, BarChart3, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { CompactSalesChart } from "@/components/dashboard/compact-sales-chart";

export function DashboardTab({ setActiveTab }: { setActiveTab: (id: string) => void }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* 1. KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Revenue", value: "124,500 AED", trend: "+12%", id: "finance" },
          { title: "Orders", value: "842", trend: "+5%", id: "sales" },
          { title: "Avg Order Value", value: "148 AED", trend: "-2%", id: "sales" },
          { title: "Growth", value: "8.4%", trend: "+1.2%", id: "dashboard" },
        ].map((kpi, i) => (
          <motion.div key={i} whileHover={{ y: -2 }} onClick={() => setActiveTab(kpi.id)} className="cursor-pointer">
            <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:border-amber-700/50 transition-all shadow-sm hover:shadow-md">
              <CardContent className="p-5">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{kpi.title}</p>
                <div className="flex items-end justify-between mt-2">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">{kpi.value}</p>
                  <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                    kpi.trend.startsWith('+') 
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' 
                      : 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400'
                  }`}>
                    {kpi.trend.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {kpi.trend}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 2. ALERTS & ISSUES (Urgent) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-rose-200 dark:border-rose-900/30 bg-rose-50 dark:bg-rose-950/10 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-rose-600 dark:text-rose-500 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Urgent Action Required
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-900/20 shadow-sm">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Sales drop detected in Branch A</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">15% decrease compared to yesterday's lunch volume.</p>
              </div>
              <button 
                onClick={() => setActiveTab("sales")} 
                className="text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-rose-600/20"
              >
                Investigate
              </button>
            </div>
          </CardContent>
        </Card>

        {/* 3. QUICK ACTIONS */}
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 shadow-sm">
          <CardHeader className="pb-2"><CardTitle className="text-sm font-bold text-zinc-900 dark:text-white">Quick Actions</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {["Promotion", "Inventory", "Reports", "AI Chat"].map(action => (
              <button 
                key={action} 
                className="text-xs font-medium bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl hover:border-amber-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-700 dark:text-zinc-300"
              >
                {action}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 4. PERFORMANCE OVERVIEW & HIGHLIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 shadow-sm overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-bold text-zinc-900 dark:text-white">Performance Overview</CardTitle>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Revenue</span>
            </div>
          </CardHeader>
          <CardContent className="h-64 p-0">
            <div className="h-full w-full px-4 pb-4">
              <CompactSalesChart />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 shadow-sm">
          <CardHeader><CardTitle className="text-sm font-bold text-zinc-900 dark:text-white">Key Highlights</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Top Item Today", value: "Truffle Burger (+12%)", id: "menu", color: "text-amber-600 dark:text-amber-500" },
              { label: "Slowest Hour", value: "3–4 PM", id: "operations", color: "text-rose-600 dark:text-rose-500" },
              { label: "Best Day", value: "Sunday", id: "sales", color: "text-emerald-600 dark:text-emerald-500" },
            ].map(h => (
              <div key={h.label} onClick={() => setActiveTab(h.id)} className="cursor-pointer group p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{h.label}</p>
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-bold ${h.color}`}>{h.value}</p>
                  <ArrowUpRight className="w-3 h-3 text-zinc-300 group-hover:text-amber-500 transition-colors" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
