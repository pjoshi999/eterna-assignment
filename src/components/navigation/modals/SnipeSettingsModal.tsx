"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function SnipeSettingsModal({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) {
  const [mevMode, setMevMode] = useState("Off");

  const Trigger = <DialogTrigger asChild>{children}</DialogTrigger>;

  return (
    <Dialog>
      {tooltip ? (
        <Tooltip>
          <TooltipTrigger asChild>{Trigger}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        Trigger
      )}
      <DialogContent className="max-w-[360px] bg-[#101114] border-[#1a1b1f] text-white p-0 gap-0">
        <DialogHeader className="p-4 border-b border-[#1a1b1f]">
          <DialogTitle className="text-[16px] font-medium">
            Snipe Settings
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 flex flex-col gap-5">
          {/* Inputs Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="bg-[#16171d] border border-[#1a1b1f] rounded-[6px] h-[36px] flex items-center justify-center gap-1">
                <span className="text-[13px] font-medium">0</span>
                <span className="text-[11px] text-[#6b7280]">%</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-[#9ca3af] uppercase font-bold tracking-wider">
                <i className="ri-settings-4-line"></i>
                Slippage
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="bg-[#16171d] border border-[#1a1b1f] rounded-[6px] h-[36px] flex items-center justify-center gap-1">
                <span className="text-[13px] font-medium">0</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-[#9ca3af] uppercase font-bold tracking-wider">
                <i className="ri-gas-station-line"></i>
                Priority
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="bg-[#16171d] border border-[#1a1b1f] rounded-[6px] h-[36px] flex items-center justify-center gap-1">
                <span className="text-[13px] font-medium">0</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-[#9ca3af] uppercase font-bold tracking-wider">
                <i className="ri-eye-line"></i>
                Bribe
              </div>
            </div>
          </div>

          {/* MEV Mode */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-[12px] text-[#e2e8f0]">
              MEV Mode <i className="ri-information-line text-[#6b7280]"></i>
            </div>
            <div className="flex bg-[#16171d] rounded-[6px] p-1 border border-[#1a1b1f]">
              {["Off", "Reduced", "Secure"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setMevMode(mode)}
                  className={cn(
                    "flex-1 py-1.5 text-[12px] rounded-[4px] transition-colors flex items-center justify-center gap-1",
                    mevMode === mode
                      ? "bg-[#282a33] text-[#526fff] border border-[#3f414d]"
                      : "text-[#6b7280] hover:text-[#9ca3af]"
                  )}
                >
                  {mode === "Off" && <i className="ri-prohibited-line"></i>}
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* RPC */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-[12px] text-[#e2e8f0]">
              RPC
            </div>
            <input
              type="text"
              placeholder="https://a...e.com"
              className="w-full bg-[#16171d] border border-[#1a1b1f] rounded-[6px] px-3 py-2 text-[13px] text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#526fff]"
            />
          </div>

          <button className="w-full py-2.5 bg-[#526fff] text-white text-[13px] font-medium rounded-[6px] hover:bg-[#4259cc] transition-colors">
            Continue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
