/**
 * WebSocket Types
 * Type definitions for WebSocket communication
 */

import { WebSocketMessage } from "./token";

export interface WebSocketConfig {
  url: string;
  reconnectInterval: number;
  maxReconnectAttempts: number;
  updateInterval: number; // 1ms for mock WebSocket
}

export interface WebSocketState {
  connected: boolean;
  connecting: boolean;
  lastMessage?: WebSocketMessage;
  lastUpdate?: number;
  error?: string;
  reconnectAttempts: number;
}

export type WebSocketEventType = "open" | "close" | "error" | "message";

export interface WebSocketEvent {
  type: WebSocketEventType;
  timestamp: number;
  data?: unknown;
}

// Mock WebSocket types
export interface MockWebSocketOptions {
  updateInterval?: number; // Default: 1ms
  priceVolatility?: number; // Default: 0.01 (1%)
  maxPriceChange?: number; // Default: 0.05 (5%)
}
