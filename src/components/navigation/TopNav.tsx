/**
 * TopNav Component - Axiom Trade Top Navigation
 */

"use client";

import { Search, Star, Bell, Wallet, ChevronDown } from "lucide-react";

export function TopNav() {
  return (
    <nav className="w-full h-14 bg-[#0a0b0f] border-b border-[#1a1b1f] px-4 flex items-center justify-between">
      {/* Left - Logo and Nav Items */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm">⚡</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-[13px] text-[#6b7280] hover:text-white transition-colors">
            Discover
          </button>
          <button className="text-[13px] text-white font-medium relative">
            Pulse
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#526fff]"></div>
          </button>
          <button className="text-[13px] text-[#6b7280] hover:text-white transition-colors">
            Trackers
          </button>
          <button className="text-[13px] text-[#6b7280] hover:text-white transition-colors">
            Perpetuals
          </button>
          <button className="text-[13px] text-[#6b7280] hover:text-white transition-colors">
            Yield
          </button>
          <button className="text-[13px] text-[#6b7280] hover:text-white transition-colors">
            Vision
          </button>
          <button className="text-[13px] text-[#6b7280] hover:text-white transition-colors">
            Portfolio
          </button>
          <button className="text-[13px] text-[#6b7280] hover:text-white transition-colors">
            Rewards
          </button>
        </div>
      </div>

      {/* Right - Search, SOL, Deposit, Wallet */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Search className="w-4 h-4 text-[#6b7280]" />
        </button>

        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <span className="text-[13px] text-white font-medium">SOL</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
        </button>

        <button className="px-4 py-1.5 bg-[#526fff] text-white text-[13px] font-medium rounded hover:bg-[#4156cc] transition-colors">
          Deposit
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Star className="w-4 h-4 text-[#6b7280]" />
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Bell className="w-4 h-4 text-[#6b7280]" />
        </button>

        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Wallet className="w-4 h-4 text-[#6b7280]" />
          <span className="text-[13px] text-[#6b7280]">0</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
        </div>
      </div>
    </nav>
  );
}
