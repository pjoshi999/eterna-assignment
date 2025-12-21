/**
 * TopNav Component - Axiom Trade Top Navigation
 * WITH FUNCTIONAL MODALS AND DROPDOWNS
 */

"use client";

import { useState } from "react";

import { SearchModal } from "../modals/SearchModal";
import { DepositModal } from "../modals/DepositModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { MobileSidebar } from "./MobileSidebar";
import { BottomNav } from "./BottomNav";

export function TopNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#0a0b0f]">
      {/* Main Top Navigation */}
      <nav className="w-full h-[64px] px-2 sm:px-6 border-b border-[#1A1B1F] flex items-center justify-between bg-[#0a0b0f] relative z-30">
        {/* Left - Logo and Nav Items */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-[40px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <g clipPath="url(#clip0_88_28967)">
                <path
                  d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_88_28967">
                  <rect
                    width="26"
                    height="22"
                    fill="white"
                    transform="translate(5 7)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex flex-1 items-center gap-1 overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,black_calc(100%-80px),transparent)]">
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px] justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Discover
            </button>
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px] justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Pulse
            </button>
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px] justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Trackers
            </button>
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px] justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Perpetuals
            </button>
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px] justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Yield
            </button>
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px] justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Vision
            </button>
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px]  justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Portfolio
            </button>
            <button className="flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] text-[14px]  justify-start items-center [transition:none] duration-0 hover:bg-[#526fff]/20 hover:text-[#526fff] hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px] text-[#fcfcfc]">
              Rewards
            </button>
          </div>
        </div>

        {/* Desktop Right - Search, SOL, Deposit, Wallet (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#15161A] hover:bg-[#2A2B30] hover:text-white border border-[#2A2B30] transition-colors group"
          >
            <i className="ri-search-2-line text-[18px] text-[#9CA3AF] group-hover:text-white transition-colors"></i>
          </button>

          {/* SOL Network Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="h-[40px] px-3.5 rounded-full bg-[#15161A] border border-[#2A2B30] flex items-center gap-2 hover:bg-[#2A2B30] transition-colors group">
                <i className="ri-menu-4-line text-[#00E0FF] text-[16px]"></i>
                <span className="text-[14px] font-medium text-white">SOL</span>
                <i className="ri-arrow-down-s-line text-[#6B7280] text-[16px] group-hover:text-white transition-colors"></i>
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
            className="h-[40px] px-6 bg-[#526fff] text-[14px] text-black font-semibold rounded-full hover:bg-[#4156cc] transition-colors flex items-center"
          >
            Deposit
          </button>

          {/* Star Button */}
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#15161A] border border-[#2A2B30] hover:bg-[#2A2B30] hover:text-white transition-colors group">
            <i className="ri-star-line text-[18px] text-[#9CA3AF] group-hover:text-white transition-colors"></i>
          </button>

          {/* Bell Button */}
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#15161A] border border-[#2A2B30] hover:bg-[#2A2B30] hover:text-white transition-colors group">
            <i className="ri-notification-3-line text-[18px] text-[#9CA3AF] group-hover:text-white transition-colors"></i>
          </button>

          {/* Wallet / User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="h-[40px] pl-4 pr-3 rounded-full bg-[#15161A] border border-[#2A2B30] flex items-center gap-3 hover:bg-[#2A2B30] transition-colors group">
                <div className="flex items-center gap-2">
                  <i className="ri-wallet-3-line text-[#9CA3AF] text-[18px] group-hover:text-white transition-colors"></i>
                  <span className="text-[14px] font-medium text-white">0</span>
                </div>
                <div className="w-[1px] h-[16px] bg-[#2A2B30]"></div>
                <div className="flex items-center gap-2">
                  <i className="ri-global-line text-[#00E0FF] text-[18px]"></i>
                  <span className="text-[14px] font-medium text-white">0</span>
                  <i className="ri-arrow-down-s-line text-[#6B7280] text-[16px] ml-1 group-hover:text-white transition-colors"></i>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0f1014] border border-[#1a1b1f] w-56">
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <i className="ri-user-line"></i>
                <span>Account and Security</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <i className="ri-settings-3-line"></i>
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <i className="ri-translate"></i>
                <span>Auto Translate</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-white hover:bg-[rgba(255,255,255,0.05)]">
                <i className="ri-sparkling-line"></i>
                <span>Feature Updates</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-danger hover:bg-[rgba(255,255,255,0.05)]">
                <i className="ri-logout-box-line"></i>
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile Circle */}
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#15161A] border border-[#2A2B30] hover:bg-[#2A2B30] hover:text-white transition-colors group">
            <i className="ri-user-3-line text-[18px] text-[#9CA3AF] group-hover:text-white transition-colors"></i>
          </button>
        </div>

        {/* Mobile Right Nav (Visible on Mobile) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Wallet Pill */}
          <button className="h-[32px] px-2.5 rounded-full bg-[#15161A] border border-[#2A2B30] flex items-center gap-2 hover:bg-[#2A2B30] transition-colors">
            <i className="ri-wallet-3-line text-[#9CA3AF] text-[14px]"></i>
            <span className="text-[12px] font-medium text-white">0</span>
            <div className="w-[1px] h-[10px] bg-[#2A2B30]"></div>
            <i className="ri-global-line text-[#00E0FF] text-[14px]"></i>
            <span className="text-[12px] font-medium text-white">0</span>
            <i className="ri-arrow-down-s-line text-[#6B7280] text-[12px]"></i>
          </button>

          {/* Paste CA Button */}
          <button className="h-[32px] px-2.5 rounded-full bg-[#15161A] border border-[#2A2B30] flex items-center gap-2 hover:bg-[#2A2B30] hover:text-white transition-colors group">
            <i className="ri-file-copy-line text-[#9CA3AF] text-[14px] group-hover:text-white"></i>
            <span className="text-[12px] font-medium text-[#9CA3AF] group-hover:text-white">
              Paste CA
            </span>
          </button>

          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#15161A] border border-[#2A2B30] hover:bg-[#2A2B30] hover:text-white transition-colors group"
          >
            <i className="ri-search-2-line text-[14px] text-[#9CA3AF] group-hover:text-white"></i>
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#15161A] border border-[#2A2B30] hover:bg-[#2A2B30] hover:text-white transition-colors group"
          >
            <i className="ri-menu-line text-[14px] text-[#9CA3AF] group-hover:text-white"></i>
          </button>
        </div>
      </nav>

      {/* Sub-Navigation Bar (Hidden on Mobile) */}
      <div className="hidden lg:flex grayscale-[30%] hover:grayscale-0 transition-[filter] relative flex-row w-full h-[28px] gap-[8px] px-[16px] pb-[1px] overflow-hidden border-b border-[#22242d] sm:border-[#22242d]/50 ">
        <div className="flex items-center gap-2">
          <button className="min-w-[24px] min-h-[24px] flex items-center justify-center text-[#777a8c] hover:text-[#c8c9d1] hover:bg-[#22242d99] transition-colors duration-125 ease-in-out rounded-[4px]">
            <i className="ri-settings-3-line text-[14px]"></i>
          </button>
          <div className="w-[1px] h-[16px] bg-[#22242d]"></div>
          <div className="flex items-center gap-2">
            <button className="min-w-[24px] min-h-[24px] flex items-center justify-center text-[#c8c9d1] hover:text-[#c8c9d1] hover:bg-[#22242d99] transition-colors duration-125 ease-in-out rounded-[4px]">
              <i className="ri-star-line text-[14px]"></i>
            </button>
            <button className="min-w-[24px] min-h-[24px] flex items-center justify-center text-[#777a8c] hover:text-[#c8c9d1] hover:bg-[#22242d99] transition-colors duration-125 ease-in-out rounded-[4px]">
              <i className="ri-line-chart-line text-[14px]"></i>
            </button>
          </div>
          <div className="w-[1px] h-[16px] bg-[#22242d]"></div>
        </div>
      </div>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <DepositModal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
      />
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <BottomNav />
    </div>
  );
}
