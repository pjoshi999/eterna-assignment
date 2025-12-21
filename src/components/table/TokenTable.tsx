/**
 * TokenTable Component
 * Main container for the three-column token table
 */

"use client";

import { TokenColumn } from "./TokenColumn";
import { useWebSocket } from "@/hooks/useWebSocket";
import { ConnectionStatus } from "../realtime/ConnectionStatus";

export function TokenTable() {
  // Initialize WebSocket connection
  useWebSocket();

  return (
    <div className="w-full h-screen p-4 bg-background">
      <div className="max-w-[1600px] mx-auto h-full flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Axiom Trade</h1>
            <p className="text-sm text-secondary">Real-time Token Discovery</p>
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden">
          <TokenColumn column="new" title="New Pairs" />
          <TokenColumn column="final" title="Final Stretch" />
          <TokenColumn column="migrated" title="Migrated" />
        </div>
      </div>

      {/* Connection Status Bar */}
      <ConnectionStatus />
    </div>
  );
}
