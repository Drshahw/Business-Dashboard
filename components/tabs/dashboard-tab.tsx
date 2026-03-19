import { KPICards } from "@/components/dashboard/kpi-cards";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { OrdersChart } from "@/components/dashboard/orders-chart";
import { TopItems } from "@/components/dashboard/top-items";
import { MarketingInsights } from "@/components/dashboard/marketing-insights";
import { AIInsights } from "@/components/dashboard/ai-insights";

export function DashboardTab() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section>
        <KPICards />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <SalesChart />
        <OrdersChart />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <TopItems />
        <MarketingInsights />
        <AIInsights />
      </section>
    </div>
  );
}
