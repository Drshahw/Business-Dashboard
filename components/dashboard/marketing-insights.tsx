"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Star, TrendingUp, Users } from "lucide-react";

export function MarketingInsights() {
  return (
    <Card className="col-span-1 lg:col-span-1">
      <CardHeader>
        <CardTitle>Marketing & Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Instagram */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg">
              <Instagram className="w-5 h-5 text-zinc-900 dark:text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Instagram</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Last 7 days</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1"><Users className="w-3 h-3" /> Followers</p>
              <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">12.4k <span className="text-xs text-emerald-400 font-normal ml-1">+120</span></p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Engagement</p>
              <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">4.2% <span className="text-xs text-emerald-400 font-normal ml-1">+0.8%</span></p>
            </div>
          </div>
        </div>

        {/* Google Reviews */}
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Star className="w-5 h-5 text-zinc-900 dark:text-white fill-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Google Reviews</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">All time</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-zinc-900 dark:text-white">4.8</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">842 Reviews</p>
              <p className="text-xs text-emerald-400">+12 this week</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
