"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Send, Bot, User, ArrowRight, Lightbulb } from "lucide-react";

export function AIAssistantTab() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Restaurant Intelligence Co-pilot. I've analyzed your recent data. How can I help you today?",
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setMessages([...messages, { role: "user", content: query }]);
    setQuery("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Based on your POS data, sales dropped 12% today primarily due to lower lunch traffic. However, your Truffle Burger is trending on Instagram. I recommend running a targeted lunch promotion tomorrow featuring the Truffle Burger to capitalize on the social media momentum." 
      }]);
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Insights & Actions */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-amber-700/20 shadow-[0_0_30px_-10px_rgba(180,83,9,0.1)]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Lightbulb className="w-4 h-4 text-amber-700" />
                Suggested Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-amber-700/10 border border-amber-700/20 hover:bg-amber-700/20 transition-colors cursor-pointer group">
                <p className="text-sm font-medium text-amber-700 mb-1">Promote Truffle Burger</p>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 mb-2">High IG engagement detected. Run a lunch special.</p>
                <div className="flex items-center text-xs text-amber-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Draft Campaign <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer group">
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1">Reduce Tuesday Staff</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Low volume 2PM-4PM. Save $120/week on labor.</p>
                <div className="flex items-center text-xs text-zinc-700 dark:text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Schedule <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Quick Prompts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "Why did sales drop today?",
                "What should I promote this weekend?",
                "How can I reduce food cost?",
                "Summarize recent Google reviews"
              ].map((prompt) => (
                <button 
                  key={prompt}
                  onClick={() => setQuery(prompt)}
                  className="w-full text-left p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-200 dark:border-white/10 transition-colors text-xs text-zinc-700 dark:text-zinc-300"
                >
                  &quot;{prompt}&quot;
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Chat Interface */}
        <Card className="lg:col-span-2 flex flex-col h-[600px]">
          <CardHeader className="border-b border-zinc-200 dark:border-white/5 pb-4">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-700" />
              Intelligence Co-pilot
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "user" ? "bg-zinc-200 dark:bg-zinc-800" : "bg-amber-700/10 text-amber-700"
                }`}>
                  {msg.role === "user" ? <User className="w-4 h-4 text-zinc-700 dark:text-zinc-300" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tr-sm" 
                    : "bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 text-zinc-700 dark:text-zinc-300 rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </CardContent>

          <div className="p-4 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950/50 rounded-b-xl">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything about your restaurant..."
                className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-700/50 focus:ring-1 focus:ring-amber-700/50 transition-all"
              />
              <button 
                type="submit"
                disabled={!query.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-amber-700 text-white disabled:opacity-50 disabled:bg-zinc-200 dark:disabled:bg-zinc-800 disabled:text-zinc-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </Card>

      </div>
    </div>
  );
}
