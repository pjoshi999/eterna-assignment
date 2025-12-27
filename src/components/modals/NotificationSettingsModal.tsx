"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface NotificationSettingsModalProps {
  children?: React.ReactNode;
}

export function NotificationSettingsModal({
  children,
}: NotificationSettingsModalProps) {
  const [displayNotifications, setDisplayNotifications] = useState(true);
  const [toastPosition, setToastPosition] = useState<
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
  >("top-center");
  const [transactionSounds, setTransactionSounds] = useState(false);

  // Helper for grid items
  const positions = [
    { id: "top-left", label: "Top Left" },
    { id: "top-center", label: "Top Center" },
    { id: "top-right", label: "Top Right" },
    { id: "bottom-left", label: "Bottom Left" },
    { id: "bottom-center", label: "Bottom Center" },
    { id: "bottom-right", label: "Bottom Right" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="fixed p-0 w-[400px] bg-[#101114] border border-[#1a1b1f] rounded-t-[12px] rounded-br-[12px] shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-[#1a1b1f]">
          <DialogTitle className="text-[14px] font-medium text-white">
            Notification Settings
          </DialogTitle>
          {/* Close button handled by DialogPrimitive by default or can be custom */}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-4">
          {/* Main Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-white font-medium">
              Display notifications
            </span>
            <Switch
              checked={displayNotifications}
              onCheckedChange={setDisplayNotifications}
              className="data-[state=checked]:bg-[#526fff]"
            />
          </div>
          <p className="text-[11px] text-[#777a8c] -mt-2">
            Display wallet tracker toasts, and notification cards
          </p>

          {/* Toast Position */}
          <div className="space-y-2">
            <span className="text-[12px] text-[#777a8c] font-medium">
              Toast Position
            </span>
            <div className="grid grid-cols-3 gap-2">
              {positions.map((pos) => (
                <button
                  key={pos.id}
                  onClick={() =>
                    setToastPosition(
                      pos.id as
                        | "top-center"
                        | "top-left"
                        | "top-right"
                        | "bottom-center"
                        | "bottom-left"
                        | "bottom-right"
                    )
                  }
                  className={`flex flex-col items-center gap-1 p-2 rounded-[6px] border transition-all ${
                    toastPosition === pos.id
                      ? "bg-[#15161a] border-[#526fff]"
                      : "bg-transparent border-[#22242d] hover:border-[#777a8c]"
                  }`}
                >
                  {/* Visual representation of position */}
                  <div className="w-full h-[32px] bg-[#0a0b0f] rounded-[2px] relative">
                    {/* The 'toast' block visual */}
                    <div
                      className={`absolute w-[12px] h-[4px] bg-[#526fff] rounded-[1px] ${
                        pos.id.includes("top") ? "top-1" : "bottom-1"
                      } ${
                        pos.id.includes("left")
                          ? "left-1"
                          : pos.id.includes("right")
                          ? "right-1"
                          : "left-1/2 -translate-x-1/2"
                      }`}
                    ></div>
                  </div>
                  <span className="text-[10px] text-[#777a8c]">
                    {pos.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Transaction Sounds */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-[13px] text-white font-medium">
              Transaction Sounds
            </span>
            <Switch
              checked={transactionSounds}
              onCheckedChange={setTransactionSounds}
              className="data-[state=checked]:bg-[#526fff]"
            />
          </div>

          <button className="w-full h-[36px] bg-[#526fff] hover:bg-[#425ae0] text-white text-[13px] font-bold rounded-[6px] transition-colors mt-2">
            Done
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
