/**
 * TokenColumn Component - With Header Controls
 * Matches Axiom Trade column design
 */

"use client";

import { memo, useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import type { ColumnType } from "@/types";
import { TokenRow } from "./TokenRow";
import { Skeleton } from "../ui/skeleton";
import { Filter, Zap } from "lucide-react";

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
    <div className="flex flex-col h-full bg-background overflow-hidden">
      {/* Header with Controls */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/95 backdrop-blur-sm">
        <h2 className="text-base font-medium text-foreground">{title}</h2>

        <div className="flex items-center gap-2">
          {/* Bonding Percentage */}
          {column === "final" && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-success/10">
              <span className="text-xs text-secondary">Bonding:</span>
              <span className="text-xs font-semibold text-success">92.07%</span>
            </div>
          )}

          {/* Filter Button */}
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-hover-alt transition-smooth">
            <Filter className="w-4 h-4 text-primary" />
          </button>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-smooth">
              P1
            </button>
            <button className="px-2 py-1 text-xs font-medium text-foreground hover:bg-hover-alt rounded transition-smooth">
              P2
            </button>
            <button className="px-2 py-1 text-xs font-medium text-foreground hover:bg-hover-alt rounded transition-smooth">
              P3
            </button>
          </div>

          {/* Sort/Settings */}
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-hover-alt transition-smooth">
            <Zap className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>

      {/* Token List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {loading ? (
          <div className="p-4 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-24 w-full" />
              </div>
            ))}
          </div>
        ) : columnTokens.length === 0 ? (
          <div className="flex items-center justify-center h-full text-secondary p-8">
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
