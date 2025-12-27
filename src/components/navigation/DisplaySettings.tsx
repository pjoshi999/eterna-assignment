"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Tab = "Layout" | "Metrics" | "Row" | "Extras";

export function DisplaySettings() {
  const [activeTab, setActiveTab] = useState<Tab>("Layout");
  const [metricsSize, setMetricsSize] = useState<"Small" | "Large">("Large");
  const [quickBuySize, setQuickBuySize] = useState<
    "Small" | "Large" | "Mega" | "Ultra"
  >("Small");

  // Layout Toggles State
  const [toggles, setToggles] = useState({
    showSearchBar: true,
    noDecimals: false,
    showHiddenTokens: false,
    unhideOnMigrated: false,
    circleImages: false,
    progressBar: false,
    spacedTables: false,
  });

  const toggleItem = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs: Tab[] = ["Layout", "Metrics", "Row", "Extras"];

  return (
    <div className="w-[340px] p-4 text-white">
      {/* Metrics Section */}
      <div className="mb-4">
        <h3 className="text-[#9ca3af] text-[13px] font-medium mb-2">Metrics</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setMetricsSize("Small")}
            className={cn(
              "flex flex-col items-center justify-center py-3 rounded-[6px] border transition-all",
              metricsSize === "Small"
                ? "bg-[#25262b] border-[#526fff]"
                : "bg-[#16171d] border-[#22242d] hover:bg-[#1f2026]"
            )}
          >
            <span className="text-[#9ca3af] text-[12px]">MC 77K</span>
            <span className="text-[13px] font-medium mt-0.5">Small</span>
          </button>
          <button
            onClick={() => setMetricsSize("Large")}
            className={cn(
              "flex flex-col items-center justify-center py-3 rounded-[6px] border transition-all",
              metricsSize === "Large"
                ? "bg-[#282a33] border-[#3f414d]" // Active state matching screenshot (lighter bg)
                : "bg-[#16171d] border-[#22242d] hover:bg-[#1f2026]"
            )}
          >
            <span className="text-[#e2e8f0] text-[14px]">MC 77K</span>
            <span className="text-[#9ca3af] text-[12px] mt-0.5">Large</span>
          </button>
        </div>
      </div>

      {/* Quick Buy Section */}
      <div className="mb-4">
        <h3 className="text-[#9ca3af] text-[13px] font-medium mb-2">
          Quick Buy
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {(["Small", "Large", "Mega", "Ultra"] as const).map((size) => (
            <button
              key={size}
              onClick={() => setQuickBuySize(size)}
              className={cn(
                "flex flex-col items-center justify-center py-2.5 rounded-[6px] border transition-all relative overflow-hidden",
                quickBuySize === size
                  ? "bg-[#282a33] border-[#3f414d]"
                  : "bg-[#16171d] border-[#22242d] hover:bg-[#1f2026]"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-6 h-3.5 rounded-[2px] mb-1.5",
                  quickBuySize === size ? "bg-[#526fff]" : "bg-[#2a2b33]"
                )}
              >
                <i className="ri-flashlight-fill text-white text-[10px]"></i>
                <span className="text-[9px] font-bold ml-[1px]">7</span>
              </div>
              <span
                className={cn(
                  "text-[11px]",
                  quickBuySize === size ? "text-white" : "text-[#9ca3af]"
                )}
              >
                {size}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Theme Toggle Row */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 text-white">
          <i className="ri-sun-line text-[#9ca3af]"></i>
          <span className="text-[14px]">Grey</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center bg-[#16171d] p-1 rounded-full mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 py-1.5 text-[13px] font-medium rounded-full transition-all text-center",
              activeTab === tab
                ? "bg-[#282a33] text-white"
                : "text-[#6b7280] hover:text-[#9ca3af]"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Layout Content */}
      {activeTab === "Layout" && (
        <div className="flex flex-col gap-1">
          <ToggleRow
            icon="ri-search-line"
            label="Show Search Bar"
            checked={toggles.showSearchBar}
            onChange={() => toggleItem("showSearchBar")}
          />
          <ToggleRow
            icon="ri-hashtag"
            label="No Decimals"
            checked={toggles.noDecimals}
            onChange={() => toggleItem("noDecimals")}
          />
          <ToggleRow
            icon="ri-eye-line"
            label="Show Hidden Tokens"
            checked={toggles.showHiddenTokens}
            onChange={() => toggleItem("showHiddenTokens")}
          />
          <ToggleRow
            icon="ri-eye-off-line"
            label="Unhide on Migrated"
            checked={toggles.unhideOnMigrated}
            onChange={() => toggleItem("unhideOnMigrated")}
          />
          <ToggleRow
            icon="ri-checkbox-blank-circle-line" // Square icon for "Circle Images" context if implying toggle shape? No, usually refers to avatar shape.
            // Using a square icon to represent "CheckBox / Frame" concept or just the icon next to text
            label="Circle Images"
            checked={toggles.circleImages}
            onChange={() => toggleItem("circleImages")}
          />
          <ToggleRow
            icon="ri-loader-4-line"
            label="Progress Bar"
            checked={toggles.progressBar}
            onChange={() => toggleItem("progressBar")}
          />
          <ToggleRow
            icon="ri-layout-grid-line"
            label="Spaced Tables"
            checked={toggles.spacedTables}
            onChange={() => toggleItem("spacedTables")}
          />
        </div>
      )}
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div
      onClick={onChange}
      className="flex items-center gap-3 p-2 rounded-[6px] hover:bg-[#16171d] transition-colors cursor-pointer group"
    >
      <div className="w-5 flex justify-center text-[#6b7280] group-hover:text-[#9ca3af]">
        <i className={cn(icon, "text-[16px]")}></i>
      </div>
      <span className="flex-1 text-[14px] text-[#e2e8f0] font-medium">
        {label}
      </span>
      <div className="relative flex items-center">
        {/* Custom Checkbox/Radio appearance */}
        {checked ? (
          <i className="ri-checkbox-circle-fill text-[#4ade80] text-[18px]"></i> // Green check
        ) : (
          <i className="ri-checkbox-blank-circle-line text-[#3f414d] text-[18px]"></i> // Empty circle
        )}
      </div>
    </div>
  );
}
