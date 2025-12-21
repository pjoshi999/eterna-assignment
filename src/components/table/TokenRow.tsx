/**
 * TokenRow Component - Exact Axiom Trade Design
 * Pixel-perfect match to axiom.trade/pulse
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
import { User, Globe, Search, Copy } from "lucide-react";
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
    <div className="flex items-start gap-3 p-3 border-b border-border hover:bg-hover-alt transition-smooth cursor-pointer group">
      {/* Token Image with Address */}
      <div className="flex flex-col items-center gap-1">
        <div className="relative w-[88px] h-[88px] rounded border-2 border-success overflow-hidden bg-black flex-shrink-0">
          <Image
            src={token.imageUrl}
            alt={token.name}
            fill
            className="object-cover"
            sizes="88px"
          />
          <button
            onClick={handleCopyAddress}
            className="absolute bottom-1 right-1 w-5 h-5 bg-black/80 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Copy className="w-3 h-3 text-foreground" />
          </button>
        </div>
        <span className="text-2xs text-tertiary">
          {shortenAddress(token.address, 4)}...
        </span>
      </div>

      {/* Token Info */}
      <div className="flex-1 min-w-0">
        {/* Name and Time */}
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-base text-foreground">{token.name}</h3>
          <span className="text-sm text-secondary">{token.fullName}</span>
          {copied && <span className="text-2xs text-success">Copied!</span>}
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-success text-sm">
            {formatTimeAgo(token.lastUpdate)}
          </span>
        </div>

        {/* Icon Row */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4 text-primary" />
          </div>
          {token.socials.website && (
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-foreground" />
            </div>
          )}
          {token.socials.telegram && (
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-twitter"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.037.308.02.475z" />
              </svg>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Search className="w-4 h-4 text-foreground" />
          </div>

          {/* Holders */}
          <div className="flex items-center gap-1">
            <User className="w-3 h-3 text-secondary" />
            <span className="text-xs text-secondary">
              {token.indicators[2]?.percentage || 12}
            </span>
          </div>

          {/* Additional Icon */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-secondary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-xs text-secondary">
              {token.indicators[3]?.percentage || 6}
            </span>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-3">
          {token.indicators.slice(0, 5).map((indicator, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                {idx === 0 && <span className="text-danger text-xs">👤</span>}
                {idx === 1 && <span className="text-success text-xs">🛡️</span>}
                {idx === 2 && <span className="text-danger text-xs">💎</span>}
                {idx === 3 && <span className="text-primary text-xs">🔒</span>}
                {idx === 4 && (
                  <span className="text-secondary text-xs">⚡</span>
                )}
                <span
                  className={cn(
                    "text-xs font-semibold",
                    indicator.percentage >= 80 && "text-danger",
                    indicator.percentage >= 50 &&
                      indicator.percentage < 80 &&
                      "text-success",
                    indicator.percentage < 50 && "text-primary"
                  )}
                >
                  {indicator.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Metrics */}
      <div className="flex flex-col items-end gap-1 min-w-[100px]">
        <div className="text-sm">
          <span className="text-tertiary mr-1">MC</span>
          <PriceFlash
            value={token.metrics.marketCap}
            previousValue={token.metrics.marketCap}
            formatter={(v) => `$${formatCompactNumber(v)}`}
            className="font-semibold text-primary"
          />
        </div>
        <div className="text-sm">
          <span className="text-tertiary mr-1">V</span>
          <PriceFlash
            value={token.metrics.volume24h}
            previousValue={token.metrics.volume24h}
            formatter={(v) => `$${formatCompactNumber(v)}`}
            className="font-semibold"
          />
        </div>

        {/* F with colored bar */}
        <div className="flex items-center gap-1">
          <span className="text-tertiary text-xs mr-1">F</span>
          <div className="flex items-center gap-1">
            <div className="w-1 h-3 bg-success rounded-sm"></div>
            <PriceFlash
              value={token.metrics.funding / 1000}
              previousValue={token.metrics.funding / 1000}
              formatter={(v) => formatCompactNumber(v * 1000)}
              className="text-xs font-medium"
            />
          </div>
        </div>

        {/* TX with progress bar */}
        <div className="flex items-center gap-1">
          <span className="text-tertiary text-xs mr-1">TX</span>
          <span className="text-xs">
            {Math.floor(token.metrics.volume24h / 100)}
          </span>
          <div className="w-8 h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-success to-danger"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
});
