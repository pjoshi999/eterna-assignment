/**
 * useWebSocket Hook
 * Custom hook for managing WebSocket connection and updates
 * FIXED: Proper initialization and memoization
 */

"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import {
  setConnected,
  setError as setWSError,
} from "@/store/slices/websocketSlice";
import {
  setTokens,
  updateToken,
  setLoading,
  setError,
} from "@/store/slices/tokenSlice";
import { getMockWebSocket } from "@/lib/websocket/mockWebSocket";
import type { TokenUpdate } from "@/types";

export function useWebSocket() {
  const dispatch = useAppDispatch();
  const wsRef = useRef<ReturnType<typeof getMockWebSocket> | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization in strict mode
    if (initializedRef.current) return;
    initializedRef.current = true;

    try {
      console.log("🔌 Initializing WebSocket...");
      dispatch(setLoading(true));

      // Get WebSocket instance (singleton)
      wsRef.current = getMockWebSocket({ updateInterval: 100 }); // 100ms for visible updates

      // Get initial tokens
      const initialTokens = wsRef.current.getInitialTokens();
      console.log(`📊 Loaded ${initialTokens.length} initial tokens`);

      // Dispatch to Redux
      dispatch(setTokens(initialTokens));

      // Set up message handler for real-time updates
      wsRef.current.onMessage((update: TokenUpdate) => {
        dispatch(updateToken(update));
      });

      // Set up connection handler
      wsRef.current.onConnection((status) => {
        console.log(`📡 WebSocket status: ${status}`);
        if (status === "connected") {
          dispatch(setConnected(true));
          dispatch(setLoading(false));
        } else if (status === "error") {
          dispatch(setWSError("Connection failed"));
          dispatch(setError("Failed to connect to WebSocket"));
          dispatch(setLoading(false));
        } else if (status === "disconnected") {
          dispatch(setConnected(false));
        }
      });

      // Connect WebSocket
      wsRef.current.connect();
      console.log("✅ WebSocket connected");
    } catch (err) {
      console.error("❌ WebSocket error:", err);
      dispatch(
        setWSError(err instanceof Error ? err.message : "Unknown error")
      );
      dispatch(setError("Failed to initialize WebSocket"));
      dispatch(setLoading(false));
    }

    // Cleanup on unmount
    return () => {
      if (wsRef.current) {
        console.log("🔌 Disconnecting WebSocket...");
        wsRef.current.disconnect();
      }
    };
  }, [dispatch]);
}
