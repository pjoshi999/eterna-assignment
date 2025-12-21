/**
 * TokenRow Component - EXACT Axiom Trade Match
 * Based on axiom.trade/pulse screenshot
 */

"use client";

import { memo, useState } from "react";
import type { Token } from "@/types";
import { PriceFlash } from "../realtime/PriceFlash";
import {
  formatCompactNumber,
  formatTimeAgo,
  shortenAddress,
} from "@/lib/utils/formatters";
import {
  User,
  Globe,
  Send,
  Search,
  Users,
  Zap,
  Lock,
  Shield,
  Diamond,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TokenRowProps {
  token: Token;
}

export const TokenRow = memo(function TokenRow({ token }: TokenRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(token.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <div className="flex items-start gap-3 px-3 py-3 border-b border-[#1a1b1f] hover:bg-[rgba(255,255,255,0.01)] transition-colors cursor-pointer group">
      {/* Token Image - 88x88 with colored border */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="relative w-[88px] h-[88px] rounded overflow-hidden border-2 border-success bg-black">
          <Image
            src={token.imageUrl}
            alt={token.name}
            fill
            className="object-cover"
            sizes="88px"
          />
        </div>
        <button
          onClick={handleCopyAddress}
          className="text-[10px] text-[#6b7280] hover:text-white transition-colors flex items-center gap-1"
        >
          {shortenAddress(token.address, 4)}...
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        {/* Name Row */}
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[15px] text-white leading-none">
            {token.name}
          </h3>
          <span className="text-[13px] text-[#6b7280]">{token.fullName}</span>
          <button className="text-[#6b7280] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
            📋
          </button>
        </div>

        {/* Time and Icons Row */}
        <div className="flex items-center gap-2.5 mt-0.5">
          {/* Time in GREEN */}
          <span className="text-[12px] text-[#22c55e] font-medium">
            {formatTimeAgo(token.lastUpdate)}
          </span>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-[#6b7280]" />
            <Globe className="w-3.5 h-3.5 text-[#6b7280]" />
            <Send className="w-3.5 h-3.5 text-[#5dbcff]" />
            <Search className="w-3.5 h-3.5 text-[#6b7280]" />
          </div>

          {/* Holder and Lightning counts */}
          <div className="flex items-center gap-2 ml-1">
            <div className="flex items-center gap-0.5">
              <Users className="w-3 h-3 text-[#6b7280]" />
              <span className="text-[11px] text-[#6b7280]">
                {token.indicators[2]?.percentage || 12}
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              <Zap className="w-3 h-3 text-[#6b7280]" />
              <span className="text-[11px] text-[#6b7280]">
                {token.indicators[3]?.percentage || 6}
              </span>
            </div>
          </div>
        </div>

        {/* Indicators Row */}
        <div className="flex items-center gap-3 mt-1">
          {token.indicators.slice(0, 5).map((indicator, idx) => {
            const icons = [Lock, Shield, Diamond, Target, Zap];
            const IconComponent = icons[idx];
            const isPositive = indicator.percentage >= 5;
            const color = isPositive ? "#22c55e" : "#ef4444";

            return (
              <div key={idx} className="flex items-center gap-1">
                <IconComponent className="w-3 h-3" style={{ color }} />
                <span className="text-[12px] font-medium" style={{ color }}>
                  {indicator.percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side Metrics - GOLDEN YELLOW for MC/V! */}
      <div className="flex flex-col items-end gap-0.5 min-w-[90px] flex-shrink-0">
        {/* MC - GOLDEN */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#6b7280]">MC</span>
          <PriceFlash
            value={token.metrics.marketCap}
            previousValue={token.metrics.marketCap}
            formatter={(v) => `$${formatCompactNumber(v)}`}
            className="text-[14px] font-semibold text-[#fbbf24]"
          />
        </div>

        {/* V - GOLDEN */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#6b7280]">V</span>
          <PriceFlash
            value={token.metrics.volume24h}
            previousValue={token.metrics.volume24h}
            formatter={(v) => `$${formatCompactNumber(v)}`}
            className="text-[13px] font-medium text-[#fbbf24]"
          />
        </div>

        {/* F with bar - WHITE */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#6b7280]">F</span>
          <div className="flex items-center gap-1">
            <div className="w-1 h-3 bg-success rounded-[1px]"></div>
            <PriceFlash
              value={token.metrics.funding / 1000}
              previousValue={token.metrics.funding / 1000}
              formatter={(v) => formatCompactNumber(v * 1000)}
              className="text-[12px] font-medium text-white"
            />
          </div>
        </div>

        {/* TX with progress bar */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#6b7280]">TX</span>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-white">
              {Math.floor(token.metrics.volume24h / 100)}
            </span>
            <div className="w-8 h-0.5 bg-[#1a1b1f] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-success via-yellow-400 to-danger"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
