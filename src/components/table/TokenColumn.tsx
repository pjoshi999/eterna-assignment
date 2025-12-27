/**
 * TokenColumn Component - Exact Axiom Trade Header
 * Matches axiom.trade/pulse column headers
 */

"use client";

import { memo, useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import type { ColumnType } from "@/types";
import { TokenRow } from "./TokenRow";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { useState } from "react";

interface TokenColumnProps {
  column: ColumnType;
  title: string;
}

export const TokenColumn = memo(function TokenColumn({
  column,
  title,
}: TokenColumnProps) {
  const { tokens, newPairs, finalStretch, migrated, loading } = useAppSelector(
    (state) => state.token
  );

  const [activePreset, setActivePreset] = useState<string | null>(null);

  const handleMouseEnter = (preset: string) => setActivePreset(preset);
  const handleMouseLeave = () => setActivePreset(null);

  const tokenIds = useMemo(() => {
    switch (column) {
      case "new":
        return newPairs;
      case "final":
        return finalStretch;
      case "migrated":
        return migrated;
    }
  }, [column, newPairs, finalStretch, migrated]);

  const columnTokens = useMemo(
    () => tokenIds.map((id) => tokens[id]).filter(Boolean),
    [tokenIds, tokens]
  );

  return (
    <div className="flex flex-col h-full bg-[#101114] overflow-hidden border-r border-[#1a1b1f] last:border-r-0">
      {/* Header - Exact Axiom Style */}
      <div className="hidden sm:flex items-center justify-between px-3 py-2 border-b border-[#1a1b1f] bg-[#101114]">
        <div className="flex items-center gap-3">
          <h2 className="text-[16px] font-medium text-white">{title}</h2>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center bg-[#0d0e12] border border-[#1a1b1f] rounded-full px-3 py-1 gap-3">
            <div className="flex items-center gap-2">
              <i className="ri-flashlight-fill text-[#777a8c] text-[14px]"></i>
              <span className="text-white text-[14px] font-medium">0</span>
              <Image
                src="https://axiom.trade/images/sol-fill.svg"
                alt="sol"
                width={14}
                height={14}
              />
            </div>
            <div className="w-[1px] h-3 bg-[#1a1b1f]"></div>
            <div className="flex items-center gap-3">
              <Popover open={activePreset === "P1"}>
                <PopoverAnchor asChild>
                  <span
                    onMouseEnter={() => handleMouseEnter("P1")}
                    onMouseLeave={handleMouseLeave}
                    className={`text-[12px] font-medium cursor-pointer transition-colors ${
                      activePreset === "P1"
                        ? "text-white"
                        : "text-[#777a8c] hover:text-white"
                    }`}
                  >
                    P1
                  </span>
                </PopoverAnchor>
                <PopoverContent
                  onMouseEnter={() => handleMouseEnter("P1")}
                  onMouseLeave={handleMouseLeave}
                  className="bg-[#0f1014] border border-[#1a1b1f] p-2 rounded-[8px] flex flex-col gap-2 w-auto min-w-[100px] z-50 shadow-xl"
                  sideOffset={5}
                >
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-settings-4-line w-4 text-center"></i>
                    <span>20%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#F59E0B]">
                    <i className="ri-gas-station-line w-4 text-center"></i>
                    <span>0.001</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-stack-line w-4 text-center"></i>
                    <span>0.01</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-shield-line w-4 text-center"></i>
                    <span>Off</span>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={activePreset === "P2"}>
                <PopoverAnchor asChild>
                  <span
                    onMouseEnter={() => handleMouseEnter("P2")}
                    onMouseLeave={handleMouseLeave}
                    className={`text-[12px] font-medium cursor-pointer transition-colors ${
                      activePreset === "P2"
                        ? "text-white"
                        : "text-[#777a8c] hover:text-white"
                    }`}
                  >
                    P2
                  </span>
                </PopoverAnchor>
                <PopoverContent
                  onMouseEnter={() => handleMouseEnter("P2")}
                  onMouseLeave={handleMouseLeave}
                  className="bg-[#0f1014] border border-[#1a1b1f] p-2 rounded-[8px] flex flex-col gap-2 w-auto min-w-[100px] z-50 shadow-xl"
                  sideOffset={5}
                >
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-settings-4-line w-4 text-center"></i>
                    <span>20%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#F59E0B]">
                    <i className="ri-gas-station-line w-4 text-center"></i>
                    <span>0.001</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-stack-line w-4 text-center"></i>
                    <span>0.01</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-shield-line w-4 text-center"></i>
                    <span>Off</span>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={activePreset === "P3"}>
                <PopoverAnchor asChild>
                  <span
                    onMouseEnter={() => handleMouseEnter("P3")}
                    onMouseLeave={handleMouseLeave}
                    className={`text-[12px] font-medium cursor-pointer transition-colors ${
                      activePreset === "P3"
                        ? "text-white"
                        : "text-[#52c5ff] hover:text-white"
                    }`}
                  >
                    P3
                  </span>
                </PopoverAnchor>
                <PopoverContent
                  onMouseEnter={() => handleMouseEnter("P3")}
                  onMouseLeave={handleMouseLeave}
                  className="bg-[#0f1014] border border-[#1a1b1f] p-2 rounded-[8px] flex flex-col gap-2 w-auto min-w-[100px] z-50 shadow-xl"
                  sideOffset={5}
                >
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-settings-4-line w-4 text-center"></i>
                    <span>20%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#F59E0B]">
                    <i className="ri-gas-station-line w-4 text-center"></i>
                    <span>0.001</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-stack-line w-4 text-center"></i>
                    <span>0.01</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
                    <i className="ri-shield-line w-4 text-center"></i>
                    <span>Off</span>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="relative">
            <i className="ri-equalizer-2-line text-[#777a8c] text-[20px]"></i>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#52c5ff] rounded-full border border-[#0a0b0f]"></div>
          </div>
        </div>
      </div>

      {/* Token List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {loading ? (
          <div className="p-3 space-y-3">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full bg-[#0f1014]" />
            ))}
          </div>
        ) : columnTokens.length === 0 ? (
          <div className="flex items-center justify-center h-full text-[#6b7280] p-8">
            <p className="text-sm">No tokens</p>
          </div>
        ) : (
          <div className="no-shift">
            {columnTokens.map((token) => (
              <TokenRow key={token.id} token={token} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
