/**
 * PulseBar Component - Secondary control bar for Pulse section
 */

"use client";

import {
  Menu,
  Zap,
  HelpCircle,
  Grid,
  Volume2,
  RefreshCw,
  ChevronDown,
} from "lucide-react";

export function PulseBar() {
  return (
    <div className="w-full h-12 bg-[#0a0b0f] border-b border-[#1a1b1f] px-4 flex items-center justify-between">
      {/* Left - Pulse Title with Icons */}
      <div className="flex items-center gap-3">
        <h1 className="text-[15px] font-semibold text-white">Pulse</h1>
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Menu className="w-4 h-4 text-[#526fff]" />
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Zap className="w-4 h-4 text-[#fbbf24]" />
        </button>
      </div>

      {/* Right - Display Controls */}
      <div className="flex items-center gap-2">
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <HelpCircle className="w-4 h-4 text-[#6b7280]" />
        </button>

        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Menu className="w-3.5 h-3.5 text-[#6b7280]" />
          <span className="text-[12px] text-[#6b7280]">Display</span>
          <ChevronDown className="w-3 h-3 text-[#6b7280]" />
        </button>

        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Grid className="w-4 h-4 text-[#6b7280]" />
        </button>

        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Grid className="w-4 h-4 text-[#6b7280]" />
        </button>

        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <Volume2 className="w-4 h-4 text-[#6b7280]" />
        </button>

        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <RefreshCw className="w-4 h-4 text-[#6b7280]" />
        </button>

        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <span className="text-[12px] text-white font-medium">1</span>
          <ChevronDown className="w-3 h-3 text-[#6b7280]" />
        </button>

        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[rgba(82,111,255,0.1)]">
          <span className="text-[11px] text-[#526fff] font-medium">= 0</span>
        </div>
      </div>
    </div>
  );
}
