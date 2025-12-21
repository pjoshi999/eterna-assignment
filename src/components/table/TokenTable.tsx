/**
 * TokenTable Component
 * Main container with navigation bars
 */

"use client";

import { TokenColumn } from "./TokenColumn";
import { useWebSocket } from "@/hooks/useWebSocket";
import { ConnectionStatus } from "../realtime/ConnectionStatus";
import { TopNav } from "../navigation/TopNav";
import { PulseBar } from "../navigation/PulseBar";

export function TokenTable() {
  // Initialize WebSocket connection
  useWebSocket();

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <TopNav />
      <div className="sm:w-[96.6%] w-full sm:px-0 px-1 mx-auto">
        {/* Pulse Control Bar */}
        <PulseBar />

        {/* Three Column Grid - Full Height */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden bg-[#101114] border border-[#22242d] rounded-[8px] sm:rounded-[4px]">
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
