"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface PnLSettingsModalProps {
  children?: React.ReactNode;
}

export function PnLSettingsModal({ children }: PnLSettingsModalProps) {
  const [activeTab, setActiveTab] = useState<
    "wallet" | "twitter" | "discover" | "pulse" | "pnl"
  >("pnl");
  const [pnlView, setPnlView] = useState<"full" | "compact" | "icon">(
    "compact"
  );

  const tabs = [
    { id: "wallet", label: "Wallet", icon: "ri-wallet-line", active: false },
    {
      id: "twitter",
      label: "Twitter",
      icon: "ri-twitter-x-line",
      active: false,
    },
    {
      id: "discover",
      label: "Discover",
      icon: "ri-compass-3-line",
      active: false,
    },
    { id: "pulse", label: "Pulse", icon: "ri-pulse-line", active: false },
    { id: "pnl", label: "PnL", icon: "ri-bar-chart-2-line", active: true },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="fixed p-0 w-[500px] bg-[#101114] border border-[#1a1b1f] rounded-t-[12px] rounded-br-[12px] shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-[#1a1b1f]">
          <DialogTitle className="text-[14px] font-medium text-white">
            Order Trackers
          </DialogTitle>
          {/* Close button handled by DialogPrimitive by default or can be custom */}
        </div>

        {/* Navigation Tabs */}
        <div className="p-4 flex justify-center border-b border-[#1a1b1f]/50">
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as
                      | "wallet"
                      | "twitter"
                      | "discover"
                      | "pulse"
                      | "pnl"
                  )
                }
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] border text-[12px] font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[#16171d] border-[#2a2b30] text-white"
                    : "bg-transparent border-transparent text-[#777a8c] hover:text-white hover:bg-[#16171d]"
                }`}
              >
                <i className={`${tab.icon} text-[14px]`}></i>
                <span>{tab.label}</span>
                {/* Active Red Dot for indicators */}
                {["twitter", "discover", "pulse"].includes(tab.id) && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#ef4444] rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === "pnl" && (
            <div className="flex justify-center gap-4">
              {/* Full Card */}
              <div
                onClick={() => setPnlView("full")}
                className={`flex flex-col items-center gap-3 cursor-pointer group`}
              >
                <div
                  className={`w-[130px] h-[80px] bg-[#0a0b0f] border rounded-[8px] flex items-center justify-center transition-all ${
                    pnlView === "full"
                      ? "border-[#526fff] shadow-[0_0_0_1px_#526fff]"
                      : "border-[#1a1b1f] group-hover:border-[#526fff]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#15161a] rounded-[4px] border border-[#22242d]">
                    <i className="ri-bar-chart-2-line text-[#777a8c]"></i>
                    <span className="text-[10px] text-[#c8c9d1]">
                      PnL Tracker
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[12px] font-medium ${
                    pnlView === "full" ? "text-white" : "text-[#777a8c]"
                  }`}
                >
                  Full
                </span>
              </div>

              {/* Compact Card */}
              <div
                onClick={() => setPnlView("compact")}
                className={`flex flex-col items-center gap-3 cursor-pointer group`}
              >
                <div
                  className={`w-[130px] h-[80px] bg-[#0a0b0f] border rounded-[8px] flex items-center justify-center transition-all ${
                    pnlView === "compact"
                      ? "border-[#526fff] shadow-[0_0_0_1px_#526fff]"
                      : "border-[#1a1b1f] group-hover:border-[#526fff]"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <i className="ri-bar-chart-2-line text-[#777a8c] text-[16px]"></i>
                    <span className="text-[12px] text-white font-medium">
                      PnL
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[12px] font-medium ${
                    pnlView === "compact" ? "text-white" : "text-[#777a8c]"
                  }`}
                >
                  Compact
                </span>
              </div>

              {/* Icon Card */}
              <div
                onClick={() => setPnlView("icon")}
                className={`flex flex-col items-center gap-3 cursor-pointer group`}
              >
                <div
                  className={`w-[130px] h-[80px] bg-[#0a0b0f] border rounded-[8px] flex items-center justify-center transition-all ${
                    pnlView === "icon"
                      ? "border-[#526fff] shadow-[0_0_0_1px_#526fff]"
                      : "border-[#1a1b1f] group-hover:border-[#526fff]"
                  }`}
                >
                  <i className="ri-bar-chart-2-line text-[#777a8c] text-[20px]"></i>
                </div>
                <span
                  className={`text-[12px] font-medium ${
                    pnlView === "icon" ? "text-white" : "text-[#777a8c]"
                  }`}
                >
                  Icon
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-[#1a1b1f] flex justify-between items-center bg-[#0d0e12]">
          <button className="w-8 h-8 rounded-[6px] hover:bg-[#1a1b1f] flex items-center justify-center text-[#777a8c] transition-colors">
            <i className="ri-restart-line text-[16px]"></i>
          </button>
          <button className="flex-1 ml-3 h-[36px] bg-[#526fff] hover:bg-[#425ae0] text-white text-[13px] font-bold rounded-[6px] transition-colors">
            Done
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
