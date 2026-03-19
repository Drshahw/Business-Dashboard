"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingDown, CreditCard, Wallet, Users } from "lucide-react";

export function FinanceTab() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Gross Revenue</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$45,200</p>
              </div>
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <p className="text-xs text-emerald-400 mt-4">This Month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Est. Profit</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$12,400</p>
              </div>
              <div className="p-2 bg-yellow-400/10 rounded-xl">
                <Wallet className="w-5 h-5 text-amber-700" />
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-4">27.4% Margin</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">COGS</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$14,800</p>
              </div>
              <div className="p-2 bg-rose-500/10 rounded-xl">
                <TrendingDown className="w-5 h-5 text-rose-700" />
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-4">32.7% of Revenue</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Labor Costs</p>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$11,500</p>
              </div>
              <div className="p-2 bg-amber-700/10 rounded-xl">
                <Users className="w-5 h-5 text-amber-700" />
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-4">25.4% of Revenue</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-zinc-800 dark:text-zinc-200">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { method: "Credit Card", value: "$32,500", pct: 72 },
                { method: "Debit Card", value: "$8,100", pct: 18 },
                { method: "Cash", value: "$3,600", pct: 8 },
                { method: "Other (Apple Pay, etc)", value: "$1,000", pct: 2 },
              ].map((item) => (
                <div key={item.method} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg">
                      <CreditCard className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.method}</p>
                      <p className="text-xs text-zinc-500">{item.pct}% of total</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
