"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface MobileDisplaySettingsModalProps {
  children?: React.ReactNode;
}

export function MobileDisplaySettingsModal({
  children,
}: MobileDisplaySettingsModalProps) {
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
      {/* Mobile-specific: Full width bottom sheet style or centered popup? The image looks like a bottom-aligned sheet or just a modal. Let's make it a nice centered modal for now, or bottom-anchored if user prefers sheet. Image 3 looks like a standard modal/sheet. */}
      {/* Using standard centered modal for consistency unless sheet requested */}
      <DialogContent className="fixed p-0 w-[95%] max-w-[400px] bg-[#101114] border border-[#1a1b1f] rounded-[12px] shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
        {/* Header Section from Image 3 */}
        <div className="p-4 flex flex-col gap-4 border-b border-[#1a1b1f]">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#777a8c]">
              Metrics
            </span>
          </div>
          {/* Metrics placeholders */}
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

          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#777a8c]">
              Quick Buy
            </span>
          </div>
          {/* Quick Buy Buttons */}
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

          <div className="flex items-center gap-2">
            <i className="ri-sun-line text-white"></i>
            <span className="text-white font-medium">Grey</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center border-b border-[#1a1b1f] px-2 bg-[#101114]">
          {["layout", "metrics", "row", "extras"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab as "metrics" | "layout" | "row" | "extras")
              }
              className={`flex-1 py-3 text-[13px] font-medium capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-[#526fff] text-white"
                  : "border-transparent text-[#777a8c]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Layout Content */}
        {activeTab === "layout" && (
          <div className="p-4 flex flex-col gap-4">
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
                      : "border-[#777a8c]"
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
