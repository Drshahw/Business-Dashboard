"use strict";

import { Bell, Calendar, ChevronDown, MapPin, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-xl">
      <div className="flex h-16 items-center px-6 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-zinc-900 dark:text-white mr-4">
          <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center text-white shrink-0">
            <span className="font-black text-lg">S</span>
          </div>
          <span className="hidden sm:inline">Soyl</span>
        </div>

        {/* Branch Selector */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-sm font-medium text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-white/10">
          <MapPin className="w-4 h-4 text-amber-700 dark:text-amber-600" />
          <span className="hidden sm:inline">D3 Dubai</span>
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        </button>

        {/* Date Filter */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-sm font-medium text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 ml-auto">
          <Calendar className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
          <span className="hidden sm:inline">Today, Oct 24</span>
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-yellow-400 border-2 border-white dark:border-black" />
        </button>

        {/* User Profile */}
        <button className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-colors">
          <User className="w-5 h-5 text-zinc-500 dark:text-zinc-300" />
        </button>
      </div>
    </header>
  );
}
