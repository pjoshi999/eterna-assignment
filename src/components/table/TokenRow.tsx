/**
 * TokenRow Component
 * Displays a single token with all its data in a row
 */

"use client";

import { memo } from "react";
import type { Token } from "@/types";
import { PriceFlash } from "../realtime/PriceFlash";
import {
  formatCompactNumber,
  formatPrice,
  formatTimeAgo,
  formatPercentage,
  shortenAddress,
} from "@/lib/utils/formatters";
import { Badge } from "../ui/badge";
import { Copy, Twitter, Globe, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

interface TokenRowProps {
  token: Token;
}

export const TokenRow = memo(function TokenRow({ token }: TokenRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(token.address);
    } catch {
      console.error("Failed to copy address");
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 border-b border-border transition-smooth cursor-pointer",
        isHovered && "bg-hover"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Token Image & Address */}
      <div className="flex flex-col items-center gap-1 w-16">
        <div className="relative w-12 h-12 rounded-md overflow-hidden bg-card">
          <Image
            src={token.imageUrl}
            alt={token.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopyAddress}
                className="flex items-center gap-1 text-2xs text-tertiary hover:text-primary transition-smooth"
              >
                <Copy className="w-3 h-3" />
                <span>{shortenAddress(token.address, 2)}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy address</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Token Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-base">{token.name}</h3>
          <span className="text-sm text-secondary truncate">
            {token.fullName}
          </span>
          {token.trending && (
            <Badge variant="secondary" className="text-2xs px-1.5 py-0">
              🔥
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-tertiary mb-2">
          <span>{formatTimeAgo(token.lastUpdate)}</span>
          {token.mentions && <span>• {token.mentions} mentions</span>}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 mb-2">
          {token.socials.twitter && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={token.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-twitter hover:opacity-80 transition-smooth"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Twitter</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {token.socials.website && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={token.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-smooth"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Website</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {token.socials.pumpfun && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={token.socials.pumpfun}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-smooth"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Pump.fun</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-2 flex-wrap">
          {token.indicators.map((indicator, idx) => (
            <TooltipProvider key={idx}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1 text-2xs">
                    <span className="text-secondary">{indicator.label}</span>
                    <span
                      className={cn(
                        "font-semibold",
                        indicator.percentage >= 80 && "text-success",
                        indicator.percentage >= 60 &&
                          indicator.percentage < 80 &&
                          "text-primary",
                        indicator.percentage < 60 && "text-danger"
                      )}
                    >
                      {indicator.percentage}%
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{indicator.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="flex flex-col items-end gap-1 min-w-[140px]">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-tertiary">MC:</span>
          <PriceFlash
            value={token.metrics.marketCap}
            previousValue={token.metrics.marketCap}
            formatter={formatCompactNumber}
            className="font-semibold"
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-tertiary">V:</span>
          <PriceFlash
            value={token.metrics.volume24h}
            previousValue={token.metrics.volume24h}
            formatter={formatCompactNumber}
            className="font-semibold"
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-tertiary">F:</span>
          <PriceFlash
            value={token.metrics.funding}
            previousValue={token.metrics.funding}
            formatter={formatCompactNumber}
            className="font-semibold"
          />
        </div>
        <div className="text-sm">
          <PriceFlash
            value={token.currentPrice}
            previousValue={token.previousPrice}
            formatter={formatPrice}
            className="font-bold"
          />
        </div>
        <div className="text-xs">
          <span
            className={cn(
              "font-medium",
              token.metrics.priceChange24h >= 0 ? "text-success" : "text-danger"
            )}
          >
            {formatPercentage(token.metrics.priceChange24h)}
          </span>
        </div>
      </div>

      {/* Quick Buy Button (shows on hover) */}
      {isHovered && (
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-smooth text-sm font-medium">
          Buy
        </button>
      )}
    </div>
  );
});
