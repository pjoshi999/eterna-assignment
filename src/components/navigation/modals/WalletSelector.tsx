"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Using standard Dropdown for this
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

// Mini Switch
function MiniSwitch({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (c: boolean) => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onCheckedChange(!checked);
      }}
      className={cn(
        "w-8 h-4 rounded-full transition-colors relative",
        checked ? "bg-[#35363b]" : "bg-[#2A2B30]"
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 w-3 h-3 rounded-full bg-[#6b7280] transition-transform",
          checked ? "left-[14px]" : "left-0.5"
        )}
      />
    </button>
  );
}

export function WalletSelector({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[300px] bg-[#101114] border-[#1a1b1f] p-0 text-white"
        align="end"
      >
        <div className="flex items-center justify-between p-3 border-b border-[#1a1b1f]">
          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded-[4px] bg-[#1e2025] text-white text-[11px] border border-[#2a2c36]">
              Unselect All
            </span>
            <span className="px-2 py-0.5 rounded-[4px] bg-transparent text-[#6b7280] text-[11px] hover:text-[#9ca3af] transition-colors cursor-pointer">
              Select All with Balance
            </span>
          </div>
          <i className="ri-settings-line text-[#6b7280]"></i>
        </div>

        <div className="p-2 gap-1 flex flex-col">
          <div className="flex items-center justify-between p-2 rounded-[6px] hover:bg-[#16171d] transition-colors group cursor-pointer border border-transparent hover:border-[#22242d]">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#F59E0B] rounded-[2px]" />
              <div className="flex flex-col">
                <span className="text-[13px] font-medium text-[#F59E0B]">
                  Axiom Main
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-[#6b7280]">
                  <div className="flex items-center gap-1">
                    <i className="ri-flashlight-line text-[10px]"></i>
                    Off
                  </div>
                  <span className="font-mono">BZcvB</span>
                  <i className="ri-file-copy-line text-[10px]"></i>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[#1e2025] rounded-[4px] border border-[#2a2c36]">
                <Image
                  src="https://axiom.trade/images/sol-fill.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
                <span className="text-[11px] text-[#52c5ff]">0</span>
              </div>
              <MiniSwitch checked={enabled} onCheckedChange={setEnabled} />
            </div>
          </div>

          <button className="flex items-center gap-2 p-2 text-[12px] text-[#9ca3af] hover:text-white transition-colors pl-3">
            <i className="ri-add-line"></i>
            Add Wallet
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
