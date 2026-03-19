"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, AlertTriangle, Info, CheckCircle2, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Sales dropped 12% today",
    explanation: "Lunch hour traffic was significantly lower than the 30-day average. Weather conditions may have impacted walk-ins.",
    action: "Consider running a 'Rainy Day' promotion during lunch hours tomorrow.",
    priority: "high",
  },
  {
    title: "Truffle Burger trending on IG",
    explanation: "A local food influencer tagged your Truffle Burger 2 hours ago. Engagement is up 400%.",
    action: "Ensure adequate inventory of truffle oil and wagyu patties for the weekend.",
    priority: "medium",
  },
  {
    title: "Staffing optimization opportunity",
    explanation: "Tuesdays between 2 PM and 4 PM consistently show low order volume across the last 4 weeks.",
    action: "Reduce front-of-house staff by 1 person during this window to save on labor costs.",
    priority: "low",
  },
];

export function AIInsights() {
  return (
    <Card className="col-span-1 lg:col-span-1 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />
      
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <CardTitle>AI Insights</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 mt-4">
        {insights.map((insight, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border transition-all hover:shadow-lg ${
              insight.priority === "high"
                ? "bg-rose-500/10 border-rose-500/20 hover:border-rose-500/40 hover:shadow-rose-500/10"
                : insight.priority === "medium"
                ? "bg-yellow-400/10 border-yellow-400/20 hover:border-yellow-400/40 hover:shadow-yellow-400/10"
                : "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {insight.priority === "high" ? (
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                ) : insight.priority === "medium" ? (
                  <Info className="w-5 h-5 text-yellow-400" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                )}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{insight.title}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{insight.explanation}</p>
                <div className="pt-2 mt-2 border-t border-zinc-200 dark:border-white/5">
                  <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <span className="text-yellow-400">Action:</span> {insight.action}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
