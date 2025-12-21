/**
 * TokenTable Component
 * Main container - matches Axiom Trade minimal layout
 */

"use client";

import { TokenColumn } from "./TokenColumn";
import { useWebSocket } from "@/hooks/useWebSocket";
import { ConnectionStatus } from "../realtime/ConnectionStatus";

export function TokenTable() {
  // Initialize WebSocket connection
  useWebSocket();

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Three Column Grid - Full Height */}
      <div className="h-screen grid grid-cols-1 lg:grid-cols-3">
        <TokenColumn column="new" title="New Pairs" />
        <TokenColumn column="final" title="Final Stretch" />
        <TokenColumn column="migrated" title="Migrated" />
      </div>

      {/* Connection Status Bar */}
      <ConnectionStatus />
    </div>
  );
}
