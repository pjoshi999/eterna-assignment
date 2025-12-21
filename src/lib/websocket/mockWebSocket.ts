/**
 * Mock WebSocket Implementation
 * Simulates WebSocket with real-time updates
 * FIXED: Deep cloning to avoid read-only property errors
 */

import type { TokenUpdate, MockWebSocketOptions } from "@/types";
import { generateMockTokens } from "./dataGenerator";

type MessageCallback = (update: TokenUpdate) => void;
type ConnectionCallback = (
  status: "connected" | "disconnected" | "error"
) => void;

export class MockWebSocket {
  private updateInterval: number;
  private priceVolatility: number;
  private maxPriceChange: number;
  private intervalId: NodeJS.Timeout | null = null;
  private messageCallbacks: Set<MessageCallback> = new Set();
  private connectionCallbacks: Set<ConnectionCallback> = new Set();
  private connected: boolean = false;
  private tokens = generateMockTokens(30);

  constructor(options: MockWebSocketOptions = {}) {
    this.updateInterval = options.updateInterval ?? 100; // 100ms default for visibility
    this.priceVolatility = options.priceVolatility ?? 0.02; // 2% default
    this.maxPriceChange = options.maxPriceChange ?? 0.05; // 5% max default
  }

  connect(): void {
    if (this.connected) return;

    // Simulate connection delay
    setTimeout(() => {
      this.connected = true;
      this.notifyConnection("connected");
      this.startUpdates();
    }, 100);
  }

  disconnect(): void {
    if (!this.connected) return;

    this.connected = false;
    this.stopUpdates();
    this.notifyConnection("disconnected");
  }

  onMessage(callback: MessageCallback): () => void {
    this.messageCallbacks.add(callback);
    return () => this.messageCallbacks.delete(callback);
  }

  onConnection(callback: ConnectionCallback): () => void {
    this.connectionCallbacks.add(callback);
    return () => this.connectionCallbacks.delete(callback);
  }

  getInitialTokens() {
    // Return deep clones to avoid mutation issues
    return this.tokens.map((token) => ({
      ...token,
      metrics: { ...token.metrics },
      socials: { ...token.socials },
      indicators: token.indicators.map((ind) => ({ ...ind })),
    }));
  }

  private startUpdates(): void {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      if (!this.connected) return;

      // Pick 3-5 random tokens to update simultaneously for more visible changes
      const numUpdates = Math.floor(Math.random() * 3) + 3;

      for (let i = 0; i < numUpdates; i++) {
        const randomToken =
          this.tokens[Math.floor(Math.random() * this.tokens.length)];

        // Randomly select which metric to update
        const updateType = Math.random();

        let update: TokenUpdate;

        if (updateType < 0.4) {
          // Update market cap (40% chance) - more dramatic changes
          const change = (Math.random() - 0.5) * 2 * this.priceVolatility * 2; // Double volatility for visibility
          const newValue = randomToken.metrics.marketCap * (1 + change);

          update = {
            id: randomToken.id,
            field: "marketCap",
            value: Math.max(1000, newValue),
            timestamp: Date.now(),
          };

          // Update local copy for next iteration
          randomToken.metrics.marketCap = update.value;
        } else if (updateType < 0.7) {
          // Update volume (30% chance)
          const change = (Math.random() - 0.5) * 2 * this.priceVolatility * 2;
          const newValue = randomToken.metrics.volume24h * (1 + change);

          update = {
            id: randomToken.id,
            field: "volume24h",
            value: Math.max(100, newValue),
            timestamp: Date.now(),
          };

          randomToken.metrics.volume24h = update.value;
        } else if (updateType < 0.9) {
          // Update funding (20% chance)
          const change = (Math.random() - 0.5) * 2 * this.priceVolatility;
          const newValue = randomToken.metrics.funding * (1 + change);

          update = {
            id: randomToken.id,
            field: "funding",
            value: Math.max(100, newValue),
            timestamp: Date.now(),
          };

          randomToken.metrics.funding = update.value;
        } else {
          // Update price (10% chance)
          const priceChange = (Math.random() - 0.5) * 2 * this.maxPriceChange;
          const newPrice = randomToken.currentPrice * (1 + priceChange);

          update = {
            id: randomToken.id,
            field: "currentPrice",
            value: Math.max(0.0001, newPrice),
            timestamp: Date.now(),
          };

          randomToken.previousPrice = randomToken.currentPrice;
          randomToken.currentPrice = update.value;
        }

        this.notifyMessage(update);
      }
    }, this.updateInterval);
  }

  private stopUpdates(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private notifyMessage(update: TokenUpdate): void {
    this.messageCallbacks.forEach((callback) => callback(update));
  }

  private notifyConnection(
    status: "connected" | "disconnected" | "error"
  ): void {
    this.connectionCallbacks.forEach((callback) => callback(status));
  }

  isConnected(): boolean {
    return this.connected;
  }
}

// Singleton instance
let mockWebSocketInstance: MockWebSocket | null = null;

export function getMockWebSocket(
  options?: MockWebSocketOptions
): MockWebSocket {
  if (!mockWebSocketInstance) {
    mockWebSocketInstance = new MockWebSocket(options);
  }
  return mockWebSocketInstance;
}
