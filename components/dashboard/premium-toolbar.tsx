"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { LayoutGrid, TrendingUp, Utensils, Layers, Megaphone, Users, Wallet, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const transitionConfig: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 28,
};

const tabs = [
  { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
  { id: 'sales', icon: TrendingUp, label: 'Sales' },
  { id: 'menu', icon: Utensils, label: 'Menu' },
  { id: 'operations', icon: Layers, label: 'Operations' },
  { id: 'marketing', icon: Megaphone, label: 'Marketing' },
  { id: 'customers', icon: Users, label: 'Customers' },
  { id: 'finance', icon: Wallet, label: 'Finance' },
  { id: 'ai', icon: Sparkles, label: 'AI Assistant' },
];

interface PremiumToolbarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export function PremiumToolbar({ activeTab, setActiveTab }: PremiumToolbarProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true; // Default to dark before mount

  const toolbarContainerBg = 'bg-white/90 dark:bg-[#18181b]/90 border-zinc-200/50 dark:border-zinc-800/50 text-zinc-500 dark:text-zinc-400';

  return (
    <div className="flex justify-center w-full my-4 sm:my-6 sticky top-16 sm:top-20 z-40 px-2 sm:px-4">
      <motion.nav 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transitionConfig, delay: 0.1 }}
        className={`
          relative flex items-center p-1 sm:p-1.5 gap-0.5 sm:gap-1
          rounded-full shadow-2xl backdrop-blur-xl border
          ${toolbarContainerBg}
          max-w-full
        `}
      >
        
        {/* Tabs Container (Scrollable) */}
        <div className="flex-1 flex items-center justify-between sm:justify-start gap-0 sm:gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [mask-image:linear-gradient(to_right,white_90%,transparent_100%)] sm:[mask-image:none]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center justify-center h-8 w-8 sm:h-12 sm:w-auto sm:px-3 md:px-4 rounded-full sm:rounded-[1.25rem]
                  transition-colors duration-300 shrink-0
                  ${isActive ? 'text-zinc-950 dark:text-white' : 'hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800/30'}
                `}
              >
                {/* Active Tab Background with Spinning Golden Border */}
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    transition={transitionConfig}
                    className="absolute inset-0 z-0 overflow-hidden rounded-full sm:rounded-[1.25rem]"
                  >
                    {/* Spinning conic gradient */}
                    <div 
                      className="absolute -inset-[100%] animate-spin" 
                      style={{ 
                        animationDuration: '3s',
                        backgroundImage: 'conic-gradient(from 90deg, transparent 0%, transparent 70%, #b45309 90%, #78350f 100%)'
                      }} 
                    />
                    {/* Inner mask to hide the center of the gradient and create a border */}
                    <div className="absolute inset-[1.5px] rounded-full sm:rounded-[calc(1.25rem-1.5px)] bg-white dark:bg-[#121212]" />
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-amber-700/10 blur-md" />
                  </motion.div>
                )}

                {/* Icon and Label */}
                <div className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <Icon 
                    className={`w-4 h-4 sm:w-[18px] sm:h-[18px] ${tab.id === 'ai' && isActive ? 'text-amber-700' : ''}`}
                    strokeWidth={isActive ? 2 : 1.75} 
                  />
                  <span className={`text-sm font-medium hidden lg:block ${tab.id === 'ai' && isActive ? 'text-amber-700' : ''}`}>
                    {tab.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-5 sm:h-6 mx-1 sm:mx-2 shrink-0 bg-zinc-300/50 dark:bg-zinc-700/50" />

        {/* Theme Toggle Button (Fixed on the right) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full shrink-0 transition-colors duration-200 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
          aria-label="Toggle Theme"
        >
          {mounted && (
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={transitionConfig}
                >
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white" strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={transitionConfig}
                >
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950" strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.button>

      </motion.nav>
    </div>
  );
}
