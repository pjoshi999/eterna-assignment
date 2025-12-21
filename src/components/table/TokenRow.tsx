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
import Image from "next/image";
import { useToast } from "../ui/toast";

interface TokenRowProps {
  token: Token;
}

export const TokenRow = memo(function TokenRow({ token }: TokenRowProps) {
  const { showToast } = useToast();

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
      <div className="hidden lg:flex items-start gap-3 px-3 py-3 border-b border-[#1a1b1f] hover:bg-[rgba(255,255,255,0.01)] transition-colors cursor-pointer group">
        {/* Left - Token Image with Address Below */}
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
          <div className="relative p-[2px] rounded-[4px] border-[1px] border-[#4ade80]">
            <div className="relative w-[68px] h-[68px] rounded-[1px] bg-black overflow-hidden">
              <Image
                src={token.imageUrl}
                alt={token.name}
                fill
                className="object-cover"
                sizes="68px"
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
          <span className="text-[11px] text-[#6b7280] font-medium whitespace-nowrap tracking-tight">
            {shortenAddress(token.address, 4)}
          </span>
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
                <span className="text-[16px] text-[#6b7280] font-medium truncate group-hover/copy:text-[#526fff]">
                  {shortenString(token.fullName, 8)}
                </span>
                <button className="text-[#6b7280] transition-colors group-hover/copy:text-[#526fff]">
                  <i className="ri-file-copy-fill text-[14px]"></i>
                </button>
              </div>
            </div>
            <div className="flex items-end gap-1 flex-shrink-0 leading-none">
              <span className="text-[11px] text-[#6b7280] font-bold">MC</span>
              <PriceFlash
                value={token.metrics.marketCap}
                previousValue={token.metrics.marketCap}
                formatter={(v) => `$${formatCompactNumber(v)}`}
                className="text-[16px] font-bold text-[#facc15]" // Yellow match screenshot
              />
            </div>
          </div>

          {/* Row 2: Time/Icons/Holders - Vol */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-[13px] text-primaryGreen font-medium">
                {formatTimeAgo(token.lastUpdate)}
              </span>
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <i className="ri-function-line text-[13px] hover:text-white transition-colors"></i>
                <i className="ri-links-line text-[13px] hover:text-white transition-colors"></i>
                <i className="ri-search-line text-[13px] hover:text-white transition-colors"></i>
              </div>
              <div className="flex items-center gap-1 text-[#9ca3af]">
                <i className="ri-user-3-line text-[13px]"></i>
                <span className="text-[11px] font-medium">169</span>
              </div>
              <div className="flex items-center gap-1 text-[#9ca3af]">
                <i className="ri-bar-chart-groupped-line text-[13px]"></i>
                <span className="text-[11px] font-medium">54</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0 leading-none">
              <span className="text-[11px] text-[#6b7280] font-bold">V</span>
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
              <span className="text-[10px] text-[#6b7280] font-bold tracking-wide">
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
              <span className="text-[10px] text-[#6b7280] font-bold tracking-wide">
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
          <div className="flex items-center gap-2 overflow-hidden">
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
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2 py-[3px] rounded-full bg-[#101114] border border-[#22242d80]"
                >
                  <i className={`${iconClass} ${colorClass} text-[12px]`}></i>
                  <span className={`text-[10px] font-bold ${colorClass}`}>
                    {label.includes("paid") ? "Paid" : `${val}%`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="flex lg:hidden flex-col p-2.5 bg-[#101114]  relative overflow-hidden group">
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
                  {token.name} {shortenString(token.fullName, 6)}
                </h3>
                <i className="ri-file-copy-fill text-[#777a8c] text-[14px]"></i>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#6b7280] text-[12px]">MC</span>
                <span className="text-[#52c5ff] font-bold text-[14px]">
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
                <div className="flex items-center gap-1 text-[#6b7280]">
                  <i className="ri-function-line text-[14px]"></i>
                  <i className="ri-global-line text-[14px]"></i>
                  <i className="ri-search-line text-[14px]"></i>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#6b7280] text-[12px]">V</span>
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
                  <span className="text-[#6b7280] text-[11px]">F</span>
                  <span className="text-white text-[12px]">
                    {Math.floor(token.metrics.funding / 1000)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#6b7280] text-[11px]">TX</span>
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
        <div className="mt-1">
          <span className="text-[#6b7280] text-[13px] font-medium tracking-wide">
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
              <div
                key={idx}
                className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[4px] justify-start items-center rounded-full bg-[#101114] border border-[#22242d80]"
              >
                <i className={`${iconClass} ${colorClass} text-[14px]`}></i>
                <span className={`text-[12px] font-bold ${colorClass}`}>
                  {label.includes("paid") ? "Paid" : `${val}%`}
                </span>
              </div>
            );
          })}
          <button className="ml-auto shrink-0 flex items-center gap-1 bg-[#526fff] px-1 py-1 rounded-full shadow-lg hover:bg-[#4156cc] transition-colors">
            <i className="ri-flashlight-fill text-black text-[12px]"></i>
            <span className="text-black text-[11px] font-bold">0 SOL</span>
          </button>
        </div>
      </div>
    </>
  );
});
