import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TradingSettingsModal } from "@/components/modals/TradingSettingsModal";
import { PnLSettingsModal } from "@/components/modals/PnLSettingsModal";
import { RegionSelector } from "@/components/navigation/RegionSelector";
import { NotificationSettingsModal } from "@/components/modals/NotificationSettingsModal";

export function Footer() {
  return (
    <footer className="hidden lg:flex fixed bottom-0 left-0 right-0 h-[40px] bg-[#0a0b0f] border-t border-[#1a1b1f] items-center px-6 justify-between z-50 text-[12px] font-medium font-sans">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Preset Button */}
        <TradingSettingsModal>
          <button className="text-[#526fff] bg-[#526fff]/20 flex flex-row h-[24px] px-[8px] gap-[4px] justify-start items-center rounded-[4px] hover:bg-[#526fff]/25 transition-colors duration-150 ease-in-out cursor-pointer group">
            <i className="ri-list-settings-line text-[16px]"></i>
            <span>PRESET 1</span>
            {/* Tooltip via native title for simplicity as nesting complex triggers can conflicts, or we can use the Tooltip wrapper inside if tested */}
          </button>
        </TradingSettingsModal>
        {/* Note: If we want both Tooltip and Modal, we need careful nesting. 
            For now, let's keep the detailed Modal interaction as primary. 
            The previous plan asked for tooltips on ALL elements. 
            If I wrap the Trigger with Tooltip, the TooltipTrigger catches the hover/click events. 
            Let's try nesting: Modal -> Tooltip -> Trigger 
        */}

        {/* Wallet Info Pill */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center bg-[#15161a] border border-[#22242d] rounded-full px-3 py-1 gap-2 h-[26px] cursor-help">
              <span className="flex items-center gap-1.5 text-[#c8c9d1]">
                <i className="ri-wallet-3-line"></i>
                <span className="text-white">1</span>
              </span>
              <div className="w-[1px] h-3 bg-[#22242d]"></div>
              <span className="flex items-center gap-1.5">
                <Image
                  src="https://axiom.trade/images/sol-fill.svg"
                  alt="sol"
                  width={12}
                  height={12}
                />
                <span className="text-white">0</span>
              </span>
              <i className="ri-arrow-down-s-line text-[#6b7280]"></i>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Wallet Overview</p>
          </TooltipContent>
        </Tooltip>

        <div className="w-[1px] h-4 bg-[#22242d]"></div>

        {/* Settings */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="text-[#6b7280] hover:text-white transition-colors">
              <i className="ri-settings-3-line text-[16px]"></i>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>

        {/* Nav Items */}
        <div className="flex items-center gap-4 text-[#c8c9d1]">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors relative">
                <i className="ri-wallet-line text-[16px]"></i>
                <span>Wallet</span>
                <span className="absolute -top-0.5 -right-1 w-1.5 h-1.5 bg-[#ef4444] rounded-full"></span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Wallet</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors relative">
                <i className="ri-twitter-x-line text-[16px]"></i>
                <span>Twitter</span>
                <span className="absolute -top-0.5 -right-1 w-1.5 h-1.5 bg-[#ef4444] rounded-full"></span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors relative">
                <i className="ri-compass-3-line text-[16px]"></i>
                <span>Discover</span>
                <span className="absolute -top-0.5 -right-1 w-1.5 h-1.5 bg-[#ef4444] rounded-full"></span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Discover</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors relative">
                <i className="ri-pulse-line text-[16px]"></i>
                <span>Pulse</span>
                <span className="absolute -top-0.5 -right-1 w-1.5 h-1.5 bg-[#ef4444] rounded-full"></span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pulse</p>
            </TooltipContent>
          </Tooltip>

          <div className="w-[1px] h-4 bg-[#22242d]"></div>

          <PnLSettingsModal>
            <button className="flex items-center gap-1.5 hover:text-white transition-colors text-[#c8c9d1]">
              <i className="ri-bar-chart-2-line text-[16px]"></i>
              <span>PnL</span>
            </button>
          </PnLSettingsModal>
        </div>

        <div className="w-[1px] h-4 bg-[#22242d]"></div>

        {/* Icons Pill */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center bg-[#15161a] border border-[#22242d] rounded-full px-2 py-0.5 h-[24px] gap-1 cursor-help">
              <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px]">
                <i className="ri-capsule-fill"></i>
              </span>
              <span className="text-[10px] text-orange-500">🔥</span>
              <span className="text-[10px] text-red-500">🥩</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Status Indicators</p>
          </TooltipContent>
        </Tooltip>

        <div className="w-[1px] h-4 bg-[#22242d]"></div>

        {/* Balance Display */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2 cursor-help">
              <Image
                src="https://axiom.trade/images/sol-fill.svg"
                alt="sol"
                width={14}
                height={14}
                className="opacity-80"
              />
              <span className="text-[#12af80]">$121.93</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Total Balance</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Connection Status */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-row h-[24px] xl:px-[8px] gap-[4px] justify-start items-center rounded-[4px] bg-[#12af8033] text-[#12af80] cursor-help">
              <div className="bg-[#12af80]/20 w-[12px] h-[12px] rounded-full flex flex-row gap-[4px] justify-center items-center">
                <div className="bg-[#12af80] w-[8px] h-[8px] rounded-full"></div>
              </div>
              <span>Connection is stable</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Connection Status</p>
          </TooltipContent>
        </Tooltip>

        <RegionSelector>
          <div className="flex items-center gap-2 text-[#c8c9d1] hover:text-white cursor-pointer px-2">
            <span>GLOBAL</span>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </RegionSelector>

        <div className="w-[1px] h-4 bg-[#22242d]"></div>

        <div className="flex items-center gap-3 text-[#6b7280]">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:text-white transition-colors">
                <i className="ri-layout-masonry-line text-[16px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Layout Options</p>
            </TooltipContent>
          </Tooltip>

          <NotificationSettingsModal>
            <button className="hover:text-white transition-colors">
              <i className="ri-notification-3-line text-[16px]"></i>
            </button>
          </NotificationSettingsModal>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:text-white transition-colors">
                <i className="ri-palette-line text-[16px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="w-[1px] h-4 bg-[#22242d]"></div>

        <div className="flex items-center gap-3 text-[#6b7280]">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:text-white transition-colors">
                <i className="ri-discord-fill text-[16px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Discord Community</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:text-white transition-colors">
                <i className="ri-twitter-x-line text-[16px]"></i>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow us</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:text-white transition-colors flex items-center gap-1.5">
                <i className="ri-file-text-line text-[16px]"></i>
                <span className="text-[12px] font-medium hidden xl:block">
                  Docs
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Documentation</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}
