"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, AlertTriangle, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

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
            <Card className="border-zinc-800 bg-zinc-950/50 hover:border-amber-700/50 transition-colors">
              <CardContent className="p-5">
                <p className="text-xs text-zinc-500">{kpi.title}</p>
                <div className="flex items-end justify-between mt-2">
                  <p className="text-xl font-bold text-white">{kpi.value}</p>
                  <span className={`text-xs ${kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{kpi.trend}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 2. ALERTS & ISSUES (Urgent) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-rose-900/30 bg-rose-950/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-rose-500 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Urgent Action Required
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-rose-950/20 rounded-lg border border-rose-900/20">
              <p className="text-sm text-zinc-300">Sales drop detected in Branch A (15% vs yesterday)</p>
              <button onClick={() => setActiveTab("sales")} className="text-xs bg-rose-700 text-white px-3 py-1 rounded-md">Investigate</button>
            </div>
          </CardContent>
        </Card>

        {/* 3. QUICK ACTIONS */}
        <Card className="border-zinc-800 bg-zinc-950/50">
          <CardHeader className="pb-2"><CardTitle className="text-sm">Quick Actions</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {["Promotion", "Inventory", "Reports", "AI Chat"].map(action => (
              <button key={action} className="text-xs bg-zinc-900 border border-zinc-800 p-2 rounded-lg hover:border-amber-700/50 transition-colors">
                {action}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 4. PERFORMANCE OVERVIEW & HIGHLIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-zinc-800 bg-zinc-950/50">
          <CardHeader><CardTitle className="text-sm">Performance Overview</CardTitle></CardHeader>
          <CardContent className="h-48 flex items-center justify-center text-zinc-600 border-t border-zinc-800">
            [Compact Sales Chart Placeholder]
          </CardContent>
        </Card>
        
        <Card className="border-zinc-800 bg-zinc-950/50">
          <CardHeader><CardTitle className="text-sm">Key Highlights</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Top Item Today", value: "Truffle Burger (+12%)", id: "menu" },
              { label: "Slowest Hour", value: "3–4 PM", id: "operations" },
            ].map(h => (
              <div key={h.label} onClick={() => setActiveTab(h.id)} className="cursor-pointer group">
                <p className="text-xs text-zinc-500">{h.label}</p>
                <p className="text-sm text-white group-hover:text-amber-500 transition-colors">{h.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
