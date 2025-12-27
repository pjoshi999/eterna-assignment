"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function WalletPopover() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "h-[35px] pl-4 pr-3 rounded-full bg-[#21242d] border border-[#22242d] flex items-center gap-3 hover:bg-[#22242d] transition-colors group",
            isOpen && "bg-[#22242d]"
          )}
        >
          <div className="flex items-center gap-2">
            <i className="ri-wallet-3-line text-[18px]"></i>
            <span className="text-[14px] font-medium text-white">0</span>
          </div>
          <div className="w-[1px] h-[16px] bg-[#22242d]"></div>
          <div className="flex items-center gap-2">
            <i className="ri-global-line text-[18px]"></i>
            <span className="text-[14px] font-medium text-white">0</span>
            <i className="ri-arrow-down-s-line text-[16px] ml-1"></i>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-[240px] bg-[#15161A] border border-[#22242d] p-4 text-white shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#9CA3AF] text-xs">Total Value</span>
          <div className="flex items-center gap-3 text-[#9CA3AF]">
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <i className="ri-file-copy-line text-xs"></i>
              <span className="text-xs">Solana</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <i className="ri-file-list-3-line text-xs"></i>
              <span className="text-xs">Perps</span>
            </div>
          </div>
        </div>

        {/* Value */}
        <div className="text-sm font-medium mb-3">$0</div>

        {/* Input/Swap area */}
        <div className="rounded-lg px-3 py-1.5 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="ri-wallet-3-fill text-[#4A5568]"></i>
            <span className="font-mono text-white">0</span>
          </div>
          <i className="ri-arrow-left-right-line text-[#6B7280]"></i>
          <div className="flex items-center gap-2">
            <i className="ri-global-line text-[#00E0FF]"></i>
            <span className="font-mono text-white">0</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="h-[36px] bg-[#526fff] hover:bg-[#4156cc] rounded-full text-sm font-medium transition-colors text-black">
            Deposit
          </button>
          <button className="h-[36px] bg-[#22242d] hover:bg-[#2c2e36] rounded-full text-sm font-medium transition-colors text-white">
            Withdraw
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
