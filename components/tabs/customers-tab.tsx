"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, UserCheck, Clock } from "lucide-react";

export function CustomersTab() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Customers</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">1,248</p>
              </div>
              <div className="p-2 bg-amber-700/10 rounded-xl">
                <Users className="w-5 h-5 text-amber-700" />
              </div>
            </div>
            <p className="text-xs text-emerald-700 mt-4">+8% vs last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">New Customers</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">342</p>
              </div>
              <div className="p-2 bg-emerald-700/10 rounded-xl">
                <UserPlus className="w-5 h-5 text-emerald-700" />
              </div>
            </div>
            <p className="text-xs text-emerald-700 mt-4">+12% vs last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Returning</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">906</p>
              </div>
              <div className="p-2 bg-amber-700/10 rounded-xl">
                <UserCheck className="w-5 h-5 text-amber-700" />
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-4">72% retention rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Visit Frequency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "1 visit / month", pct: 45 },
                { label: "2-3 visits / month", pct: 35 },
                { label: "4+ visits / month (Loyal)", pct: 20 },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300">{item.label}</span>
                    <span className="font-medium text-zinc-900 dark:text-white">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-700 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Peak Visit Times</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-[200px] border border-dashed border-zinc-200 dark:border-white/10 rounded-xl bg-zinc-900/20">
              <div className="text-center">
                <Clock className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Heatmap Visualization</p>
                <p className="text-xs text-zinc-500">Friday 7PM - 9PM is peak</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
