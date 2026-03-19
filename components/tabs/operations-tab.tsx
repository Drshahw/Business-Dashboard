"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, AlertTriangle, Users, Package } from "lucide-react";

export function OperationsTab() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Avg Prep Time</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">14m 20s</p>
              </div>
              <div className="p-2 bg-sky-700/10 rounded-xl">
                <Clock className="w-5 h-5 text-sky-700" />
              </div>
            </div>
            <p className="text-xs text-emerald-700 mt-4">-1m 10s vs last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Voided Orders</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">3</p>
              </div>
              <div className="p-2 bg-rose-700/10 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-rose-700" />
              </div>
            </div>
            <p className="text-xs text-rose-700 mt-4">+1 vs last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Active Staff</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">8</p>
              </div>
              <div className="p-2 bg-emerald-700/10 rounded-xl">
                <Users className="w-5 h-5 text-emerald-700" />
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-4">Optimal for current volume</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Low Inventory</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">2</p>
              </div>
              <div className="p-2 bg-amber-700/10 rounded-xl">
                <Package className="w-5 h-5 text-amber-700" />
              </div>
            </div>
            <p className="text-xs text-amber-700 mt-4">Truffle Oil, Avocados</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Shift Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Mock shift data */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
              <div>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Morning Shift (8am - 4pm)</p>
                <p className="text-xs text-zinc-500">Manager: Sarah J.</p>
              </div>
              <div className="flex gap-8 text-right">
                <div>
                  <p className="text-xs text-zinc-500">Orders</p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">142</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Avg Prep</p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">12m</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Rating</p>
                  <p className="text-sm font-medium text-emerald-400">4.9</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
              <div>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Evening Shift (4pm - 12am)</p>
                <p className="text-xs text-zinc-500">Manager: Mike T.</p>
              </div>
              <div className="flex gap-8 text-right">
                <div>
                  <p className="text-xs text-zinc-500">Orders</p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">200</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Avg Prep</p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">16m</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Rating</p>
                  <p className="text-sm font-medium text-yellow-400">4.6</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
