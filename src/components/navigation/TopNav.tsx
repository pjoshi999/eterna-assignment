/**
 * TopNav Component - Axiom Trade Top Navigation
 * WITH FUNCTIONAL MODALS AND DROPDOWNS
 */

"use client";

import { useState } from "react";
import { Search, Star, Bell, Wallet, ChevronDown, User } from "lucide-react";
import { SearchModal } from "../modals/SearchModal";
import { DepositModal } from "../modals/DepositModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function TopNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);

  return (
    <>
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
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            <Search className="w-4 h-4 text-[#6b7280]" />
          </button>

          {/* SOL Network Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-green-400 rounded-full"></div>
                <span className="text-[13px] text-white font-medium">SOL</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0f1014] border border-[#1a1b1f]">
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-green-400 rounded-full"></div>
                <span>Solana</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span>BNB</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Deposit Button */}
          <button
            onClick={() => setIsDepositOpen(true)}
            className="px-4 py-1.5 bg-[#526fff] text-white text-[13px] font-medium rounded hover:bg-[#4156cc] transition-colors"
          >
            Deposit
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            <Star className="w-4 h-4 text-[#6b7280]" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            <Bell className="w-4 h-4 text-[#6b7280]" />
          </button>

          {/* Wallet / User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                <Wallet className="w-4 h-4 text-[#6b7280]" />
                <span className="text-[13px] text-[#6b7280]">0</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0f1014] border border-[#1a1b1f] w-56">
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <User className="w-4 h-4" />
                <span>Account and Security</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <span>⚙️</span>
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <span>🌐</span>
                <span>Auto Translate</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <span>✨</span>
                <span>Feature Updates</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-danger hover:bg-[rgba(255,255,255,0.05)]">
                <span>🚪</span>
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <DepositModal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
      />
    </>
  );
}
