/**
 * Token Types and Interfaces
 * Comprehensive type definitions for token data structure
 */

export type ColumnType = "new" | "final" | "migrated";

export interface TokenSocials {
  twitter?: string;
  website?: string;
  telegram?: string;
  discord?: string;
  pumpfun?: string;
}

export interface TokenIndicator {
  type: "bonding" | "liquidity" | "holders" | "market" | "security";
  label: string;
  percentage: number;
  tooltip: string;
}

export interface TokenMetrics {
  marketCap: number;
  volume24h: number;
  funding: number;
  priceChange24h: number;
  holders: number;
  liquidity: number;
}

export interface Token {
  id: string;
  address: string;
  name: string;
  fullName: string;
  imageUrl: string;
  column: ColumnType;

  // Timestamps
  createdAt: number;
  lastUpdate: number;

  // Social links
  socials: TokenSocials;

  // Indicators (5 indicators as seen on Axiom Trade)
  indicators: TokenIndicator[];

  // Metrics
  metrics: TokenMetrics;

  // Current price (for real-time updates)
  currentPrice: number;
  previousPrice?: number;

  // Additional metadata
  mentions?: number;
  trending?: boolean;
}

export interface TokenUpdate {
  id: string;
  field: keyof TokenMetrics | "currentPrice";
  value: number;
  timestamp: number;
}

export interface WebSocketMessage {
  type: "update" | "batch" | "connection" | "error";
  payload: TokenUpdate | TokenUpdate[] | { status: string };
}

export interface PriceFlash {
  direction: "up" | "down" | "neutral";
  intensity: number; // 0-1 for animation intensity
}

// Helper type for sorting
export type SortField = keyof TokenMetrics | "createdAt" | "lastUpdate";
export type SortDirection = "asc" | "desc";

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}
