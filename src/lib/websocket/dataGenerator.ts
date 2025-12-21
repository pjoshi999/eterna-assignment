/**
 * Data Generator for Mock Tokens
 * Generates realistic token data with UI Avatars
 */

import type { Token, TokenIndicator, ColumnType } from "@/types";

const tokenNames = [
  "POPCAT",
  "BONK",
  "WIF",
  "SAMO",
  "MYRO",
  "FARTCOIN",
  "SILLY",
  "MANEKI",
  "MICHI",
  "MEW",
  "GUMMY",
  "TOSHI",
  "DUKO",
  "PONKE",
  "MOODENG",
  "PENG",
  "SLERF",
  "BOME",
  "HOBBES",
  "MUMU",
  "GOAT",
  "ZEUS",
  "ACT",
  "WEN",
  "MOTHER",
  "DADDY",
  "RETARDIO",
  "GIGA",
  "MICHI",
  "RATS",
];

const fullNames = [
  "Popcat",
  "Bonk",
  "Dogwifhat",
  "Samo",
  "Myro",
  "Fartcoin",
  "Silly",
  "Maneki",
  "Michi",
  "Mew",
  "Gummy",
  "Toshi",
  "Duko",
  "Ponke",
  "Moo Deng",
  "Peng",
  "Slerf",
  "BOME",
  "Hobbes",
  "Mumu",
  "Goat",
  "Zeus",
  "Act I",
  "Wen",
  "Mother",
  "Daddy",
  "Retardio",
  "Giga",
  "Michi",
  "Rats",
];

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateIndicators(): TokenIndicator[] {
  return [
    {
      label: "Top 10 Holders",
      percentage: Math.floor(randomBetween(0, 100)),
      color: Math.random() > 0.5 ? "red" : "green",
    },
    {
      label: "LP Burned",
      percentage: Math.floor(randomBetween(0, 100)),
      color: Math.random() > 0.3 ? "green" : "red",
    },
    {
      label: "Mint Disabled",
      percentage: Math.floor(randomBetween(0, 100)),
      color: Math.random() > 0.5 ? "green" : "red",
    },
    {
      label: "Freeze Disabled",
      percentage: Math.floor(randomBetween(0, 100)),
      color: Math.random() > 0.6 ? "green" : "red",
    },
    {
      label: "Ownership Renounced",
      percentage: Math.floor(randomBetween(0, 100)),
      color: Math.random() > 0.4 ? "green" : "red",
    },
  ];
}

export function generateMockTokens(count: number): Token[] {
  const tokens: Token[] = [];
  const columns: ColumnType[] = ["new", "final", "migrated"];

  for (let i = 0; i < count; i++) {
    const name = tokenNames[i % tokenNames.length];
    const fullName = fullNames[i % fullNames.length];
    const column = columns[i % 3];

    // Use UI Avatars API with token name
    const imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=random&size=140&bold=true`;

    const currentPrice = randomBetween(0.0001, 10);

    tokens.push({
      id: `${column}-${i}`,
      name,
      fullName,
      address: `${Math.random().toString(36).substring(2, 15)}${Math.random()
        .toString(36)
        .substring(2, 15)}`,
      imageUrl,
      column,
      currentPrice,
      previousPrice: currentPrice,
      metrics: {
        marketCap: randomBetween(10000, 100000000),
        volume24h: randomBetween(100, 10000000),
        priceChange24h: randomBetween(-50, 200),
        holders: Math.floor(randomBetween(100, 50000)),
        liquidity: randomBetween(5000, 5000000),
        funding: randomBetween(100, 10000),
      },
      socials: {
        twitter:
          Math.random() > 0.3
            ? `https://twitter.com/${name.toLowerCase()}`
            : undefined,
        website:
          Math.random() > 0.5 ? `https://${name.toLowerCase()}.com` : undefined,
        telegram:
          Math.random() > 0.4
            ? `https://t.me/${name.toLowerCase()}`
            : undefined,
      },
      indicators: generateIndicators(),
      trending: Math.random() > 0.7,
      lastUpdate: Date.now() - Math.floor(randomBetween(0, 3600000)),
    });
  }

  return tokens;
}
