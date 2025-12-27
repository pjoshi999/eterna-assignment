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

import { useState } from "react";

export function TokenTable() {
  // Initialize WebSocket connection
  useWebSocket();

  // Mobile Tab State
  const [activeMobileTab, setActiveMobileTab] = useState("new");

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <TopNav />
      <div className="sm:w-[96.6%] w-full sm:px-0 px-1 mx-auto pt-4">
        {/* Pulse Control Bar */}
        <PulseBar
          activeMobileTab={activeMobileTab}
          onTabChange={setActiveMobileTab}
        />

        {/* Three Column Grid - Full Height */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden bg-[#101114] border border-[#22242d] rounded-[8px] sm:rounded-[4px]">
          {/* New Pairs */}
          <div
            className={`${
              activeMobileTab === "new" ? "block" : "hidden"
            } lg:block h-full`}
          >
            <TokenColumn column="new" title="New Pairs" />
          </div>

          {/* Final Stretch */}
          <div
            className={`${
              activeMobileTab === "final" ? "block" : "hidden"
            } lg:block h-full`}
          >
            <TokenColumn column="final" title="Final Stretch" />
          </div>

          {/* Migrated */}
          <div
            className={`${
              activeMobileTab === "migrated" ? "block" : "hidden"
            } lg:block h-full`}
          >
            <TokenColumn column="migrated" title="Migrated" />
          </div>
        </div>
      </div>

      {/* Connection Status Bar */}
      <ConnectionStatus />
    </div>
  );
}
