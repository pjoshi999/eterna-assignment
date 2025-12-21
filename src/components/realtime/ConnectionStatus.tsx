/**
 * ConnectionStatus Component
 * Displays WebSocket connection status at bottom of screen
 */

"use client";

import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";

export function ConnectionStatus() {
  const { connected, connecting, error } = useAppSelector(
    (state) => state.websocket
  );

  if (connected && !error) return null; // Hide when stable

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 py-2 px-4 text-center text-xs font-medium z-50 animate-pulse",
        connecting && "bg-primary/20 text-primary",
        error && "bg-danger/20 text-danger",
        !connected && !connecting && !error && "bg-secondary/20 text-secondary"
      )}
    >
      {connecting && "Connecting to WebSocket..."}
      {error && `Connection error: ${error}`}
      {!connected && !connecting && !error && "Disconnected"}
    </div>
  );
}
