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

// Reusing Custom Switch
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
        checked ? "bg-white" : "bg-[#2A2B30]" // Based on screenshot, active seems white or very light grey? Assuming white for contrast in this specific modal
      )}
    >
      <div
        className={cn(
          "absolute top-1 w-3 h-3 rounded-full bg-black transition-transform",
          checked ? "left-[22px]" : "left-1"
        )}
      />
    </button>
  );
}

export function AlertsModal({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) {
  const [soundAlerts, setSoundAlerts] = useState(true);

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
      <DialogContent className="max-w-[320px] bg-[#101114] border-[#1a1b1f] text-white p-0 gap-0">
        <DialogHeader className="p-4 border-b border-[#1a1b1f]">
          <DialogTitle className="text-[16px] font-medium">Alerts</DialogTitle>
        </DialogHeader>

        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-medium">Sound Alerts</span>
            <CustomSwitch
              checked={soundAlerts}
              onCheckedChange={setSoundAlerts}
            />
          </div>
          <p className="text-[11px] text-[#6b7280]">
            Play sound alerts for Tokens in Pulse
          </p>

          <button className="w-full py-2.5 bg-[#526fff] text-white text-[13px] font-medium rounded-[6px] hover:bg-[#4259cc] transition-colors mt-2">
            Continue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
