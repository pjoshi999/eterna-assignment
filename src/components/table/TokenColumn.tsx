/**
 * TokenColumn Component
 * Displays a column of tokens with header and scrollable list
 */

"use client";

import { memo, useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import type { ColumnType } from "@/types";
import { TokenRow } from "./TokenRow";
import { Skeleton } from "../ui/skeleton";

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
    <div className="flex flex-col h-full border border-border rounded-lg bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-background">
        <h2 className="text-base font-medium">{title}</h2>
        <span className="text-sm text-secondary">{columnTokens.length}</span>
      </div>

      {/* Token List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {loading ? (
          <div className="p-4 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : columnTokens.length === 0 ? (
          <div className="flex items-center justify-center h-full text-secondary p-8">
            <p>No tokens in this column</p>
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
