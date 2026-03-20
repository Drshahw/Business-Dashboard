"use client";

import { useState } from "react";
import { Navbar } from "@/components/dashboard/navbar";
import { PremiumToolbar } from "@/components/dashboard/premium-toolbar";
import { DashboardTab } from "@/components/tabs/dashboard-tab";
import { SalesTab } from "@/components/tabs/sales-tab";
import { MenuTab } from "@/components/tabs/menu-tab";
import { OperationsTab } from "@/components/tabs/operations-tab";
import { MarketingTab } from "@/components/tabs/marketing-tab";
import { CustomersTab } from "@/components/tabs/customers-tab";
import { FinanceTab } from "@/components/tabs/finance-tab";
import { AIAssistantTab } from "@/components/tabs/ai-assistant-tab";
import { SuppliersTab } from "@/components/tabs/suppliers-tab";

export default function Page() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen font-sans selection:bg-amber-700/30 pb-20">
      <Navbar />
      
      {/* Premium Animated Toolbar */}
      <PremiumToolbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto p-6 mt-4">
        {activeTab === "dashboard" && <DashboardTab setActiveTab={setActiveTab} />}
        {activeTab === "sales" && <SalesTab />}
        {activeTab === "menu" && <MenuTab />}
        {activeTab === "operations" && <OperationsTab />}
        {activeTab === "marketing" && <MarketingTab />}
        {activeTab === "customers" && <CustomersTab />}
        {activeTab === "finance" && <FinanceTab />}
        {activeTab === "suppliers" && <SuppliersTab />}
        {activeTab === "ai" && <AIAssistantTab />}
      </main>
    </div>
  );
}
