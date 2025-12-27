"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface MobileDisplaySettingsProps {
  children?: React.ReactNode;
}

export function MobileDisplaySettings({
  children,
}: MobileDisplaySettingsProps) {
  const [activeTab, setActiveTab] = useState<
    "layout" | "metrics" | "row" | "extras"
  >("layout");

  // Mock state for layout toggles
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [noDecimals, setNoDecimals] = useState(true);
  const [showHiddenTokens, setShowHiddenTokens] = useState(false);
  const [unhideOnMigrated, setUnhideOnMigrated] = useState(false);
  const [circleImages, setCircleImages] = useState(false);
  const [progressBar, setProgressBar] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {/* Bottom Sheet Styling */}
      <DialogContent className="fixed bottom-0 left-0 right-0 top-auto translate-y-0 translate-x-0 w-full max-w-none rounded-t-[16px] rounded-b-none border-t border-[#22242d] bg-[#101114] p-4 data-[state=open]:slide-in-from-bottom text-white gap-0">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-4">
          {/* Metrics */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-medium text-[#777a8c]">
              Metrics
            </span>
            <div className="flex gap-2">
              <div className="flex-1 h-[40px] border border-[#1a1b1f] bg-[#15161a] rounded-[6px] flex flex-col items-center justify-center">
                <span className="text-[10px] text-[#777a8c]">MC 77K</span>
                <span className="text-[10px] text-[#777a8c]">Small</span>
              </div>
              <div className="flex-1 h-[40px] border border-[#526fff] bg-[#526fff]/20 rounded-[6px] flex flex-col items-center justify-center">
                <span className="text-[10px] text-white">MC 77K</span>
                <span className="text-[10px] text-white">Large</span>
              </div>
            </div>
          </div>

          {/* Quick Buy */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-medium text-[#777a8c]">
              Quick Buy
            </span>
            <div className="flex gap-2">
              <button className="flex-1 bg-[#526fff]/20 border border-[#526fff] rounded-[6px] h-[48px] flex flex-col items-center justify-center">
                <span className="text-[#526fff] text-[12px] font-bold">⚡</span>
                <span className="text-white text-[10px]">Small</span>
              </button>
              <button className="flex-1 bg-[#15161a] border border-[#1a1b1f] rounded-[6px] h-[48px] flex flex-col items-center justify-center">
                <span className="text-[#526fff] text-[12px] font-bold">⚡</span>
                <span className="text-[#777a8c] text-[10px]">Large</span>
              </button>
              <button className="flex-1 bg-[#15161a] border border-[#1a1b1f] rounded-[6px] h-[48px] flex flex-col items-center justify-center">
                <span className="text-[#526fff] text-[12px] font-bold">⚡</span>
                <span className="text-[#777a8c] text-[10px]">Mega</span>
              </button>
              <button className="flex-1 bg-[#15161a] border border-[#1a1b1f] rounded-[6px] h-[48px] flex flex-col items-center justify-center">
                <span className="text-[#526fff] text-[12px] font-bold">⚡</span>
                <span className="text-[#777a8c] text-[10px]">Ultra</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <i className="ri-sun-line text-white"></i>
            <span className="text-white font-medium text-[14px]">Grey</span>
          </div>
        </div>

        {/* Tabs - Pill Style */}
        <div className="flex items-center gap-4 border-b border-[#22242d] pb-2 mb-4 overflow-x-auto no-scrollbar">
          {["layout", "metrics", "row", "extras"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "bg-[#2a2b30] text-white"
                  : "bg-transparent text-[#777a8c] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Layout Content */}
        {activeTab === "layout" && (
          <div className="flex flex-col gap-4 pb-6">
            {[
              {
                label: "Show Search Bar",
                checked: showSearchBar,
                set: setShowSearchBar,
                icon: "ri-search-line",
              },
              {
                label: "No Decimals",
                checked: noDecimals,
                set: setNoDecimals,
                icon: "ri-hashtag",
              },
              {
                label: "Show Hidden Tokens",
                checked: showHiddenTokens,
                set: setShowHiddenTokens,
                icon: "ri-eye-line",
              },
              {
                label: "Unhide on Migrated",
                checked: unhideOnMigrated,
                set: setUnhideOnMigrated,
                icon: "ri-eye-2-line",
              },
              {
                label: "Circle Images",
                checked: circleImages,
                set: setCircleImages,
                icon: "ri-checkbox-blank-circle-line",
              },
              {
                label: "Progress Bar",
                checked: progressBar,
                set: setProgressBar,
                icon: "ri-loader-4-line",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between cursor-pointer"
                onClick={() => item.set(!item.checked)}
              >
                <div className="flex items-center gap-3">
                  <i className={`${item.icon} text-[16px] text-white`}></i>
                  <span className="text-[13px] font-medium text-white">
                    {item.label}
                  </span>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    item.checked
                      ? "bg-[#526fff] border-[#526fff]"
                      : "border-[#777a8c] bg-transparent"
                  }`}
                >
                  {item.checked && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
