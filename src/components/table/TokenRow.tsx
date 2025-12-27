/**
 * TokenRow Component - EXACT Axiom Trade Match
 * Based on Axiom Trade screenshot with Remix Icons and Toast
 */

"use client";

import { memo } from "react";
import type { Token } from "@/types";
import { PriceFlash } from "../realtime/PriceFlash";
import {
  formatCompactNumber,
  formatTimeAgo,
  shortenAddress,
  shortenString,
} from "@/lib/utils/formatters";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { useToast } from "../ui/toast";
import { useState } from "react";

// ... existing imports

interface TokenRowProps {
  token: Token;
}

export const TokenRow = memo(function TokenRow({ token }: TokenRowProps) {
  const { showToast } = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const isLowMC = token.metrics.marketCap < 30000000;

  const handleCopyAddress = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(token.address);
      showToast(
        "Address copied to clipboard",
        <i className="ri-file-copy-fill text-[20px]"></i>
      );
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <>
      {/* Desktop Row Layout */}
      <div className="hidden lg:flex relative items-start gap-3 px-3 py-3 border-b border-[#1a1b1f] hover:bg-[#191a21] transition-colors cursor-pointer group hover:z-50">
        {/* Left - Token Image with Address Below */}
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
          <div className="relative p-[2px] rounded-[4px] border-[1px] border-[#4ade80]">
            <div
              className="relative w-[68px] h-[68px] rounded-[1px] bg-black overflow-hidden group/image"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              <div className="group">
                <Image
                  src={token.imageUrl}
                  alt={token.name}
                  fill
                  className="object-cover"
                  sizes="68px"
                />

                {/* <div className="group-hover:absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <i className="ri-camera-line text-white text-[24px]"></i>
                </div> */}
              </div>

              <div className="absolute left-0 top-1 bottom-1 w-6 flex flex-col justify-center items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-auto">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="relative w-5 h-5 bg-[#1a1b1f] rounded-[4px] flex items-center justify-center hover:bg-black transition-colors border border-[#22242d] group/btn">
                      <i className="ri-eye-off-line text-[#9ca3af] group-hover/btn:text-white text-[12px]"></i>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Hide Token</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="relative w-5 h-5 bg-[#1a1b1f] rounded-[4px] flex items-center justify-center hover:bg-black transition-colors border border-[#22242d] group/btn">
                      <i className="ri-notification-off-line text-[#9ca3af] group-hover/btn:text-white text-[12px]"></i>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Mute Alerts</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="relative w-5 h-5 bg-[#1a1b1f] rounded-[4px] flex items-center justify-center hover:bg-black transition-colors border border-[#22242d] group/btn">
                      <i className="ri-prohibited-line text-[#9ca3af] group-hover/btn:text-white text-[12px]"></i>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Block Token</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* ... Popup Logic ... */}
              {showPopup && (
                <div className="fixed left-2.5 top-[88px] z-[100] w-[240px] bg-[#18181a] border border-[#1a1b1f] rounded-[5px] shadow-2xl p-1 flex flex-col gap-3 pointer-events-none">
                  {/* ... popup content ... */}
                  {/* Big Image Section */}
                  <div className="relative aspect-square w-full rounded-[5px] overflow-hidden border border-[#1a1b1f]">
                    <Image
                      src={token.imageUrl}
                      alt={token.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 flex items-center gap-1">
                      <i className="ri-flashlight-fill text-[#52c5ff] text-[16px]"></i>
                      <span className="text-white text-[12px] font-bold">
                        0 SOL
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-[#777a8c] text-[12px] font-medium px-1">
                      Reused Image Tokens (12)
                    </h4>

                    {/* Mock Reused Tokens List */}
                    <div className="flex flex-col gap-2">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-2 bg-[#16171d] rounded-[10px] border border-[#1a1b1f]"
                        >
                          <div className="relative w-10 h-10 rounded-[6px] overflow-hidden">
                            <Image
                              src={token.imageUrl}
                              alt=""
                              fill
                              className="object-cover opacity-80"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="text-white text-[13px] font-medium truncate">
                                {token.name}
                              </span>
                              <span className="text-primaryGreen text-[11px]">
                                4d
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="text-[#777a8c] text-[11px]">
                                TX: 4d
                              </span>
                            </div>
                          </div>
                          <div className="text-[#52c5ff] text-[13px] font-medium">
                            12.3K
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* ... pump icon ... */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#101114] rounded-full flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-[#06070b] border border-[#4ade80] rounded-full flex items-center justify-center overflow-hidden">
                {/* <i className="ri-capsule-fill text-[#fff] text-[9px]"></i> */}
                <Image
                  src="https://axiom.trade/images/pump.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* ... */}
          <span className="text-[11px] text-[#777a8c] font-medium whitespace-nowrap tracking-tight">
            {shortenAddress(token.address, 4)}
          </span>
        </div>

        {/* Hover Bonding Pill (Absolute) */}
        <div className="absolute top-[-10px] left-[50%] -translate-x-[50%] z-[100] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {token.indicators.find((i) => i.type === "bonding") && (
            <div className="bg-[#18181a] border rounded-[4px] px-2 py-0.5 flex items-center shadow-lg backdrop-blur-sm">
              <span className="text-primaryGreen text-[11px] font-medium whitespace-nowrap">
                Bonding:{" "}
                {token.indicators.find((i) => i.type === "bonding")
                  ?.percentage || 0}
                %
              </span>
            </div>
          )}
        </div>

        {/* Right - Main Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
          {/* Row 1: Name - MC */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden mr-2">
              <h3 className="font-medium text-[16px] text-white leading-tight truncate">
                {token.name}
              </h3>
              <div
                className="flex items-start gap-1 group/copy"
                onClick={handleCopyAddress}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-[16px] text-[#777a8c] font-medium truncate group-hover/copy:text-[#526fff]">
                      {shortenString(token.fullName, 8)}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to Copy Address</p>
                  </TooltipContent>
                </Tooltip>

                <button className="text-[#777a8c] transition-colors group-hover/copy:text-[#526fff]">
                  <i className="ri-file-copy-fill text-[14px]"></i>
                </button>
              </div>
            </div>
            {/* ... MC ... */}
            <div className="flex items-end gap-1 flex-shrink-0 leading-none">
              <span className="text-[11px] text-[#777a8c] font-bold">MC</span>
              <PriceFlash
                value={token.metrics.marketCap}
                previousValue={token.metrics.marketCap}
                formatter={(v) => `$${formatCompactNumber(v)}`}
                className={`text-[16px] font-bold ${
                  isLowMC ? "text-[#52c5ff]" : "text-[#dcc13c]"
                }`} // Yellow match screenshot, Blue if < 30M
              />
            </div>
          </div>

          {/* Row 2: Time/Icons/Holders - Vol */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-[13px] text-primaryGreen font-medium">
                {formatTimeAgo(token.lastUpdate)}
              </span>
              <div className="flex items-center gap-1.5 text-[#777a8c]">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <i className="ri-function-line text-[13px] hover:text-white transition-colors cursor-pointer"></i>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Functions</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <i className="ri-links-line text-[13px] hover:text-white transition-colors cursor-pointer"></i>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>External Links</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <i className="ri-search-line text-[13px] hover:text-white transition-colors cursor-pointer"></i>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Search</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-1 text-[#9ca3af]">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                      <i className="ri-user-3-line text-[13px]"></i>
                      <span className="text-[11px] font-medium">169</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Holders</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-1 text-[#9ca3af]">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                      <i className="ri-bar-chart-groupped-line text-[13px]"></i>
                      <span className="text-[11px] font-medium">54</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Traders</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            {/* ... Vol ... */}
            <div className="flex items-center gap-1.5 flex-shrink-0 leading-none">
              <span className="text-[11px] text-[#777a8c] font-bold">V</span>
              <PriceFlash
                value={token.metrics.volume24h}
                previousValue={token.metrics.volume24h}
                formatter={(v) => `$${formatCompactNumber(v)}`}
                className="text-[13px] font-bold text-white"
              />
            </div>
          </div>

          {/* Row 3: F / TX (Right Aligned) */}
          <div className="flex justify-end items-center gap-3 mt-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#777a8c] font-bold tracking-wide">
                F
              </span>
              <div className="flex items-center gap-0.5">
                <button className="">
                  <Image
                    src="https://axiom.trade/images/sol-fill.svg"
                    alt="sol"
                    width={14}
                    height={14}
                    className="sm:w-[14px] sm:h-[14px] w-[20px] h-[20px]"
                  />
                </button>
              </div>
              <span className="text-[12px] text-white font-medium">
                {token.metrics.funding.toFixed(3)}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#777a8c] font-bold tracking-wide">
                TX
              </span>
              <span className="text-[12px] text-white font-medium">
                {Math.floor(token.metrics.volume24h / 50)}
              </span>
              <div className="w-10 h-[3px] bg-[#2A2B30] rounded-full overflow-hidden">
                <div className="h-full w-[60%] bg-[#ef4444] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Row 4: Badges */}
          <div className="flex items-center gap-[4px] overflow-hidden">
            {token.indicators.slice(0, 5).map((indicator, idx) => {
              const label = indicator.label.toLowerCase();
              const val = indicator.percentage;

              // Define thresholds & icons based on the image
              let iconClass = "ri-user-star-line";
              let isRed = false;

              if (label.includes("user") || label.includes("hold")) {
                iconClass = "ri-user-star-line";
                isRed = val > 20; // 74% is red in image
              } else if (
                label.includes("chef") ||
                label.includes("dev") ||
                label.includes("ds")
              ) {
                iconClass = "ri-restaurant-line"; // Closest to chef hat
                isRed = val > 15; // 11% is green in image
              } else if (label.includes("sniper")) {
                iconClass = "ri-crosshair-2-line";
                isRed = val > 5; // 11% is red in image
              } else if (label.includes("ghost")) {
                iconClass = "ri-ghost-line";
                isRed = val > 50; // 0% is green, anything else usually red/warning
              } else if (label.includes("cube") || label.includes("box")) {
                iconClass = "ri-box-3-line";
                isRed = val > 50;
              } else if (label.includes("paid")) {
                iconClass = "ri-shield-star-line";
                isRed = false; // Usually green or system badge
              }

              const colorClass = isRed ? "text-[#ef4444]" : "text-primaryGreen";

              return (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 px-[4px] py-[1.5px] rounded-full bg-[#101114] border border-[#22242d80] cursor-help">
                      <i
                        className={`${iconClass} ${colorClass} text-[14px]`}
                      ></i>
                      <span className={`text-[12px] ${colorClass}`}>
                        {label.includes("paid") ? "Paid" : `${val}%`}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{indicator.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
            <button className="ml-auto bg-[#526fff] px-[6px] text-[#090909] group-hover:flex hidden flex-row gap-[4px] justify-center items-center rounded-[999px] h-[24px] whitespace-nowrap transition-all duration-0 relative overflow-hidden">
              <i className="ri-flashlight-fill text-black text-[12px]"></i>
              <span className="text-black text-[11px] font-bold">0 SOL</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="flex lg:hidden flex-col p-2.5 bg-[#101114]  relative overflow-hidden group hover:bg-[#191a21]">
        <div className="flex gap-3">
          {/* Left Image */}
          <div className="relative w-[72px] h-[72px] shrink-0 border border-primaryGreen rounded-[6px] p-0.5">
            <div className="relative w-full h-full rounded-[4px] overflow-hidden bg-black">
              <Image
                src={token.imageUrl}
                alt={token.name}
                fill
                className="object-cover"
                sizes="72px"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#101114] rounded-full flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-[#06070b] border border-[#4ade80] rounded-full flex items-center justify-center overflow-hidden">
                {/* <i className="ri-capsule-fill text-[#fff] text-[9px]"></i> */}
                <Image
                  src="https://axiom.trade/images/pump.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Info Grid */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            {/* Header Line */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 overflow-hidden">
                <h3 className="text-[16px] font-medium text-white truncate">
                  {token.name}
                </h3>
                <div
                  className="flex items-start gap-1 group/copy"
                  onClick={handleCopyAddress}
                >
                  <span className="text-[16px] text-[#777a8c] font-medium truncate group-hover/copy:text-[#526fff]">
                    {shortenString(token.fullName, 8)}
                  </span>
                  <button className="text-[#777a8c] transition-colors group-hover/copy:text-[#526fff]">
                    <i className="ri-file-copy-fill text-[14px]"></i>
                  </button>
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-[#777a8c] text-[12px] font-medium">
                  MC
                </span>
                <span
                  className={`${
                    isLowMC ? "text-[#52c5ff]" : "text-[#dcc13c]"
                  } font-medium text-[16px]`}
                >
                  ${formatCompactNumber(token.metrics.marketCap)}
                </span>
              </div>
            </div>

            {/* Second Line: Time & Volume */}
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center gap-2">
                <span className="text-primaryGreen text-[13px] font-medium">
                  {formatTimeAgo(token.lastUpdate)}
                </span>
                <div className="flex items-center gap-1 text-[#777a8c]">
                  <i className="ri-function-line text-[14px]"></i>
                  <i className="ri-global-line text-[14px]"></i>
                  <i className="ri-search-line text-[14px]"></i>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#777a8c] text-[12px]">V</span>
                <span className="text-white font-bold text-[14px]">
                  ${formatCompactNumber(token.metrics.volume24h)}
                </span>
              </div>
            </div>

            {/* Third Line: Users & Funding */}
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center gap-3 text-[#9ca3af]">
                <div className="flex items-center gap-1">
                  <i className="ri-user-line text-[13px]"></i>
                  <span className="text-[12px]">169</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="ri-bar-chart-groupped-line text-[13px]"></i>
                  <span className="text-[12px]">54</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[#777a8c] text-[11px]">F</span>
                  <span className="text-white text-[12px]">
                    {Math.floor(token.metrics.funding / 1000)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#777a8c] text-[11px]">TX</span>
                  <span className="text-white text-[12px]">
                    {Math.floor(token.metrics.volume24h / 100)}
                  </span>
                  <div className="w-8 h-1 bg-[#2A2B30] rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-[#ef4444]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address Below Image */}
        <div className="mt-0">
          <span className="text-[#777a8c] text-[12px] pl-1.5 tracking-wide">
            {shortenAddress(token.address, 4)}
          </span>
        </div>

        {/* Footer Badges */}
        <div className="flex items-end gap-1 overflow-hidden">
          {token.indicators.slice(0, 5).map((indicator, idx) => {
            const label = indicator.label.toLowerCase();
            const val = indicator.percentage;

            // Define thresholds & icons based on the image
            let iconClass = "ri-user-star-line";
            let isRed = false;

            if (label.includes("user") || label.includes("hold")) {
              iconClass = "ri-user-star-line";
              isRed = val > 20; // 74% is red in image
            } else if (
              label.includes("chef") ||
              label.includes("dev") ||
              label.includes("ds")
            ) {
              iconClass = "ri-restaurant-line"; // Closest to chef hat
              isRed = val > 15; // 11% is green in image
            } else if (label.includes("sniper")) {
              iconClass = "ri-crosshair-2-line";
              isRed = val > 5; // 11% is red in image
            } else if (label.includes("ghost")) {
              iconClass = "ri-ghost-line";
              isRed = val > 50; // 0% is green, anything else usually red/warning
            } else if (label.includes("cube") || label.includes("box")) {
              iconClass = "ri-box-3-line";
              isRed = val > 50;
            } else if (label.includes("paid")) {
              iconClass = "ri-shield-star-line";
              isRed = false; // Usually green or system badge
            }

            const colorClass = isRed ? "text-[#ef4444]" : "text-primaryGreen";

            return (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <div className="px-[6px] border border-[#22242d80] flex flex-row gap-[3.3px] justify-center items-center rounded-[999px] h-[24px] whitespace-nowrap transition-all duration-0 relative overflow-hidden cursor-help">
                    <i className={`${iconClass} ${colorClass} text-[14px]`}></i>
                    <span className={`text-[12px] ${colorClass}`}>
                      {label.includes("paid") ? "Paid" : `${val}%`}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{indicator.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
          <button className="ml-auto bg-[#526fff] px-[6px] text-[#090909] flex flex-row gap-[4px] justify-center items-center rounded-[999px] h-[24px] whitespace-nowrap transition-all duration-0 relative overflow-hidden">
            <i className="ri-flashlight-fill text-black text-[12px]"></i>
            <span className="text-black text-[11px] font-bold">0 SOL</span>
          </button>
        </div>
      </div>
    </>
  );
});
