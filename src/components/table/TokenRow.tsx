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
    <div className="flex items-start gap-3 px-3 py-3 border-b border-[#1a1b1f] hover:bg-[rgba(255,255,255,0.01)] transition-colors cursor-pointer group">
      {/* Left - Token Image with Address Below */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="relative w-[140px] h-[140px] rounded border-2 border-success bg-black overflow-hidden">
          <Image
            src={token.imageUrl}
            alt={token.name}
            fill
            className="object-cover"
            sizes="140px"
          />
          {/* Green dot indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-success rounded-full border-2 border-black"></div>
        </div>
        <span className="text-xs text-[#6b7280]">
          {shortenAddress(token.address, 4)}...pump
        </span>
      </div>

      {/* Middle - Token Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        {/* Name Row with Copy Icon */}
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-[16px] text-white leading-none">
            {token.name}
          </h3>
          <span className="text-[14px] text-[#6b7280] uppercase">
            {token.fullName}
          </span>
          <button
            onClick={handleCopyAddress}
            className="text-[#6b7280] hover:text-white transition-colors"
          >
            <i className="text-inherit ri-file-copy-fill text-[14px]"></i>
          </button>
        </div>

        {/* Time and Icons Row */}
        <div className="flex items-center gap-3">
          {/* Time in GREEN */}
          <span className="text-[14px] text-success font-medium">
            {formatTimeAgo(token.lastUpdate)}
          </span>

          {/* Icons */}
          <i className="ri-link text-[14px] text-[#6b7280]"></i>
          <i className="ri-search-line text-[14px] text-[#6b7280]"></i>

          {/* User count */}
          <div className="flex items-center gap-1">
            <i className="ri-user-line text-[14px] text-[#6b7280]"></i>
            <span className="text-xs text-[#6b7280]">1</span>
          </div>

          {/* Lightning count */}
          <div className="flex items-center gap-1">
            <i className="ri-flashlight-line text-[14px] text-[#6b7280]"></i>
            <span className="text-xs text-[#6b7280]">0</span>
          </div>
        </div>

        {/* Indicators Row - 5 percentages with icons */}
        <div className="flex items-center gap-4">
          {token.indicators.slice(0, 5).map((indicator, idx) => {
            const icons = [
              "ri-user-line",
              "ri-shield-check-line",
              "ri-crosshair-line",
              "ri-lock-line",
              "ri-share-line",
            ];
            const isPositive = indicator.percentage >= 5;
            const color = isPositive ? "#22c55e" : "#ef4444";

            return (
              <div key={idx} className="flex items-center gap-1">
                <i
                  className={`${icons[idx]} text-[14px]`}
                  style={{ color }}
                ></i>
                <span className="text-xs font-medium" style={{ color }}>
                  {indicator.percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side Metrics - GOLDEN YELLOW for MC/V! */}
      <div className="flex flex-col items-end gap-1 min-w-[100px] flex-shrink-0">
        {/* MC - GOLDEN */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-xs text-[#6b7280]">MC</span>
          <PriceFlash
            value={token.metrics.marketCap}
            previousValue={token.metrics.marketCap}
            formatter={(v) => `$${formatCompactNumber(v)}`}
            className="text-[15px] font-bold text-[#5dbcff]"
          />
        </div>

        {/* V - GOLDEN */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-xs text-[#6b7280]">V</span>
          <PriceFlash
            value={token.metrics.volume24h}
            previousValue={token.metrics.volume24h}
            formatter={(v) => `$${formatCompactNumber(v)}`}
            className="text-[14px] font-semibold text-white"
          />
        </div>

        {/* F with colored bar - WHITE */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-xs text-[#6b7280]">F</span>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              <div className="w-0.5 h-2.5 bg-success rounded-[1px]"></div>
              <div className="w-0.5 h-2.5 bg-success rounded-[1px]"></div>
              <div className="w-0.5 h-2.5 bg-success rounded-[1px]"></div>
            </div>
            <PriceFlash
              value={token.metrics.funding / 1000}
              previousValue={token.metrics.funding / 1000}
              formatter={(v) => Math.floor(v * 1000).toString()}
              className="text-xs font-medium text-white"
            />
          </div>
        </div>

        {/* TX with progress bar */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-xs text-[#6b7280]">TX</span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-white">
              {Math.floor(token.metrics.volume24h / 100)}
            </span>
            <div className="w-12 h-1 bg-[#1a1b1f] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-success via-yellow-400 to-danger"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
