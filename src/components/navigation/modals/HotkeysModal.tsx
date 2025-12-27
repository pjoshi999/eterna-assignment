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

// Inline Custom Switch since standard UI might not have it or needs customizing
function CustomSwitch({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (c: boolean) => void;
}) {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "w-10 h-5 rounded-full transition-colors relative",
        checked ? "bg-[#526fff]" : "bg-[#2A2B30]"
      )}
    >
      <div
        className={cn(
          "absolute top-1 w-3 h-3 rounded-full bg-white transition-transform",
          checked ? "left-[22px]" : "left-1"
        )}
      />
    </button>
  );
}

export function HotkeysModal({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) {
  const [enabled, setEnabled] = useState(true);
  const [pauseOnHover, setPauseOnHover] = useState(true);

  // Mock Modifier Keys Grid
  const modifiers = [
    { label: "New Pairs", keys: ["Shift", "Ctrl", "Option", "⌘"] },
    { label: "Final Stretch", keys: ["Shift", "Ctrl", "Option", "⌘"] },
    { label: "Migrated", keys: ["Shift", "Ctrl", "Option", "⌘"], active: 2 }, // Option active
  ];

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
      <DialogContent className="max-w-[400px] bg-[#101114] border-[#1a1b1f] text-white p-0 gap-0">
        <DialogHeader className="p-4 border-b border-[#1a1b1f]">
          <DialogTitle className="text-[16px] font-medium">
            Pulse Hotkeys
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 flex flex-col gap-6">
          {/* Toggles */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[13px] font-medium">Hotkeys</span>
              <span className="text-[11px] text-[#6b7280]">
                Quick buy tokens with custom hotkeys
              </span>
            </div>
            <CustomSwitch checked={enabled} onCheckedChange={setEnabled} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[13px] font-medium">
                Pause live feed on Hover
              </span>
            </div>
            <CustomSwitch
              checked={pauseOnHover}
              onCheckedChange={setPauseOnHover}
            />
          </div>

          {/* Info */}
          <div className="flex items-center gap-2 p-3 rounded-[6px] bg-[#16171d] border border-[#1a1b1f]">
            <i className="ri-information-line text-[#9ca3af]"></i>
            <span className="text-[11px] text-[#9ca3af]">
              Combine the Pause + Modifier + Row keys to buy tokens
            </span>
          </div>

          {/* Pause Key Input */}
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-[#9ca3af]">Pause Key</span>
            <div className="px-3 py-1.5 bg-[#16171d] border border-[#1a1b1f] rounded-[4px] min-w-[60px] text-center text-[12px]">
              Space
            </div>
          </div>

          <div className="h-[1px] bg-[#1a1b1f]" />

          {/* Table Modifier Keys */}
          <div>
            <h4 className="text-[13px] font-medium mb-3">
              Table Modifier Keys
            </h4>
            <div className="flex flex-col gap-2">
              {modifiers.map((mod, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-[12px] text-[#9ca3af]">
                    {mod.label}
                  </span>
                  <div className="flex gap-1">
                    {mod.keys.map((k, kIdx) => (
                      <button
                        key={k}
                        className={cn(
                          "px-2 py-1 text-[11px] rounded-[4px] border min-w-[40px] transition-colors",
                          mod.active === kIdx
                            ? "bg-[#1e2030] border-[#526fff] text-[#526fff]"
                            : "bg-[#16171d] border-[#1a1b1f] text-[#6b7280] hover:text-white"
                        )}
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-[#1a1b1f]" />

          {/* Row Keys */}
          <div>
            <h4 className="text-[13px] font-medium mb-3">Row Keys</h4>
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center justify-between">
                  <span className="text-[12px] text-[#9ca3af]">Row {num}</span>
                  <div className="px-3 py-1.5 bg-[#16171d] border border-[#1a1b1f] rounded-[4px] min-w-[40px] text-center text-[12px]">
                    {num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#1a1b1f] flex items-center justify-between">
          <button className="flex items-center gap-1 text-[12px] text-[#9ca3af] hover:text-white transition-colors">
            <i className="ri-refresh-line"></i>
            Reset
          </button>
          <button className="px-4 py-1.5 bg-[#526fff] text-white text-[13px] font-medium rounded-[6px] hover:bg-[#4259cc] transition-colors">
            Done
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
