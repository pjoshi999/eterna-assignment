/**
 * PulseBar Component - Secondary control bar for Pulse section
 */

"use client";

import {
  Menu,
  HelpCircle,
  Grid,
  Volume2,
  RefreshCw,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export function PulseBar() {
  return (
    <div className="w-full h-12 bg-[#0a0b0f] flex items-center justify-between px-2 sm:px-4 lg:px-0">
      {/* Mobile View */}
      <div className="lg:hidden flex items-center w-full gap-3 overflow-hidden">
        {/* Title & Network Icons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <h1 className="text-[18px] font-medium text-white sm:block hidden">
            Pulse
          </h1>
          <button className="relative flex items-center justify-center sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-full bg-[#22242d99]">
            <Image
              src="https://axiom.trade/images/sol-fill.svg"
              alt="sol"
              width={14}
              height={14}
              className="sm:w-[14px] sm:h-[14px] w-[20px] h-[20px]"
            />
          </button>
          <button className="relative flex items-center justify-center sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-full">
            <Image
              src="https://axiom.trade/images/bnb-fill.svg"
              alt="sol"
              width={14}
              height={14}
              className="sm:w-[14px] sm:h-[14px] w-[20px] h-[20px]"
            />
          </button>
        </div>

        {/* Scrollable Filters */}
        <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar mask-gradient-right">
          <button className="whitespace-nowrap px-3 py-1 text-[13px] font-medium text-[#9ca3af]">
            New Pairs
          </button>
          <button className="whitespace-nowrap px-3 py-1 text-[13px] font-medium text-white bg-[#2A2B30] rounded-full">
            Final Stretch
          </button>
          <button className="whitespace-nowrap px-3 py-1 text-[13px] font-medium text-[#9ca3af]">
            Migrated
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#2A2B30]">
            <span className="text-[12px] font-medium text-white">P1</span>
            <i className="ri-settings-3-line text-[#9ca3af] text-[12px]"></i>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex w-full items-center justify-between">
        {/* Left - Pulse Title with Icons */}
        <div className="flex items-center gap-1">
          <h1 className="text-[20px] font-medium text-white pr-2">Pulse</h1>
          <button className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 bg-[#22242d99] scale-110">
            <Image
              src="https://axiom.trade/images/sol-fill.svg"
              alt="sol"
              width={20}
              height={20}
            />
          </button>
          <button className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 hover:bg-[#22242d99] opacity-60 hover:opacity-100">
            <Image
              src="https://axiom.trade/images/bnb-fill.svg"
              alt="sol"
              width={20}
              height={20}
              className="grayscale-[0.3] text-transparent"
            />
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
    </div>
  );
}
