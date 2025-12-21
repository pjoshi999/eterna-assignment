/**
 * Mock Token Data Generator
 * Generates realistic token data for testing
 */

import type { Token, TokenIndicator } from "@/types";

const TOKEN_NAMES = [
  { name: "BONK", fullName: "Bonk Inu" },
  { name: "PEPE", fullName: "Pepe Coin" },
  { name: "WIF", fullName: "Dogwifhat" },
  { name: "POPCAT", fullName: "Popcat Coin" },
  { name: "MEW", fullName: "Cat in a Dogs World" },
  { name: "FARTCOIN", fullName: "Fart Coin" },
  { name: "GIGA", fullName: "Giga Chad" },
  { name: "MANEKI", fullName: "Maneki Neko" },
  { name: "RETARDIO", fullName: "Retardio" },
  { name: "MICHI", fullName: "Michi" },
];

const INDICATOR_TYPES: TokenIndicator[] = [
  {
    type: "bonding",
    label: "Bonding",
    percentage: 85,
    tooltip: "Token bonding curve progress",
  },
  {
    type: "liquidity",
    label: "LP",
    percentage: 92,
    tooltip: "Liquidity pool status",
  },
  {
    type: "holders",
    label: "Holders",
    percentage: 78,
    tooltip: "Holder distribution score",
  },
  {
    type: "market",
    label: "Market",
    percentage: 88,
    tooltip: "Market health indicator",
  },
  {
    type: "security",
    label: "Security",
    percentage: 95,
    tooltip: "Contract security score",
  },
];

function generateAddress(): string {
  const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let address = "";
  for (let i = 0; i < 44; i++) {
    address += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return address;
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function generateMockToken(
  id: string,
  column: "new" | "final" | "migrated"
): Token {
  const tokenData = TOKEN_NAMES[Math.floor(Math.random() * TOKEN_NAMES.length)];
  const basePrice = randomBetween(0.0001, 10);

  return {
    id,
    address: generateAddress(),
    name: tokenData.name,
    fullName: tokenData.fullName,
    imageUrl: `https://api.dicebear.com/7.x/shapes/svg?seed=${id}`,
    column,
    createdAt: Date.now() - Math.floor(Math.random() * 3600000), // Within last hour
    lastUpdate: Date.now(),
    socials: {
      twitter:
        Math.random() > 0.3
          ? `https://twitter.com/${tokenData.name.toLowerCase()}`
          : undefined,
      website:
        Math.random() > 0.5
          ? `https://${tokenData.name.toLowerCase()}.com`
          : undefined,
      telegram:
        Math.random() > 0.6
          ? `https://t.me/${tokenData.name.toLowerCase()}`
          : undefined,
      pumpfun:
        Math.random() > 0.2
          ? `https://pump.fun/coin/${generateAddress()}`
          : undefined,
    },
    indicators: INDICATOR_TYPES.map((ind) => ({
      ...ind,
      percentage: Math.floor(randomBetween(60, 99)),
    })),
    metrics: {
      marketCap: randomBetween(100000, 50000000),
      volume24h: randomBetween(50000, 10000000),
      funding: randomBetween(10000, 1000000),
      priceChange24h: randomBetween(-20, 50),
      holders: Math.floor(randomBetween(100, 50000)),
      liquidity: randomBetween(50000, 5000000),
    },
    currentPrice: basePrice,
    previousPrice: basePrice,
    mentions: Math.floor(randomBetween(10, 1000)),
    trending: Math.random() > 0.7,
  };
}

export function generateMockTokens(count: number = 30): Token[] {
  const tokens: Token[] = [];
  const perColumn = Math.floor(count / 3);

  // Generate tokens for each column
  for (let i = 0; i < perColumn; i++) {
    tokens.push(generateMockToken(`new-${i}`, "new"));
  }
  for (let i = 0; i < perColumn; i++) {
    tokens.push(generateMockToken(`final-${i}`, "final"));
  }
  for (let i = 0; i < count - perColumn * 2; i++) {
    tokens.push(generateMockToken(`migrated-${i}`, "migrated"));
  }

  return tokens;
}
