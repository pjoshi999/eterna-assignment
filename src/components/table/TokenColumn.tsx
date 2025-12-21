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
import { Menu, Plus } from "lucide-react";

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
    <div className="flex flex-col h-full bg-[#06070b] overflow-hidden border-r border-[#1a1b1f] last:border-r-0">
      {/* Header - Exact Axiom Style */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1a1b1f] bg-[#0a0b0f]">
        <div className="flex items-center gap-3">
          <h2 className="text-[15px] font-medium text-white">{title}</h2>
          <div className="flex items-center gap-0.5 text-[#6b7280]">
            <Plus className="w-3.5 h-3.5" />
            <span className="text-xs">0</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Filter Menu */}
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            <Menu className="w-4 h-4 text-[#6b7280]" />
          </button>

          {/* Preset Buttons */}
          <div className="flex items-center gap-0.5">
            <button className="px-2 py-0.5 text-[11px] font-medium text-white bg-[#526fff] rounded hover:bg-[#4156cc] transition-colors">
              P1
            </button>
            <button className="px-2 py-0.5 text-[11px] font-medium text-[#6b7280] hover:bg-[rgba(255,255,255,0.05)] rounded transition-colors">
              P2
            </button>
            <button className="px-2 py-0.5 text-[11px] font-medium text-[#6b7280] hover:bg-[rgba(255,255,255,0.05)] rounded transition-colors">
              P3
            </button>
          </div>

          {/* Sort Icon */}
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            <svg
              className="w-4 h-4 text-[#6b7280]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </button>
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
