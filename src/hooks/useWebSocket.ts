/**
 * useWebSocket Hook
 * Custom hook for managing WebSocket connection and updates
 */

"use client";

import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setConnected,
  setConnecting,
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
  const { connected } = useAppSelector((state) => state.websocket);
  const ws = getMockWebSocket({ updateInterval: 1 }); // 1ms updates

  const connect = useCallback(() => {
    try {
      dispatch(setConnecting(true));
      dispatch(setLoading(true));

      // Get initial tokens
      const initialTokens = ws.getInitialTokens();
      dispatch(setTokens(initialTokens));

      // Connect WebSocket
      ws.connect();

      // Set up connection handler
      ws.onConnection((status) => {
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

      // Set up message handler
      ws.onMessage((update: TokenUpdate) => {
        dispatch(updateToken(update));
      });
    } catch (err) {
      dispatch(
        setWSError(err instanceof Error ? err.message : "Unknown error")
      );
      dispatch(setError("Failed to initialize WebSocket"));
      dispatch(setLoading(false));
    }
  }, [dispatch, ws]);

  const disconnect = useCallback(() => {
    ws.disconnect();
  }, [ws]);

  useEffect(() => {
    // Auto-connect on mount
    connect();

    // Cleanup on unmount
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return {
    connected,
    connect,
    disconnect,
  };
}
