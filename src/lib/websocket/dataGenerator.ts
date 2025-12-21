/**
 * Data Generator for Mock Tokens
 * Generates realistic token data with better images
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
  "Popcat Coin",
  "Bonk Token",
  "Dogwifhat",
  "Samoyedcoin",
  "Myro Token",
  "Fartcoin",
  "Silly Dragon",
  "Maneki Neko",
  "Michi Token",
  "Cat in a dogs world",
  "Gummy Bear",
  "Toshi Token",
  "Duko Token",
  "Ponke Meme",
  "Moo Deng",
  "Peng Coin",
  "Slerf Token",
  "BOOK OF MEME",
  "Hobbes Token",
  "Mumu Token",
  "Goatseus Maximus",
  "Zeus Network",
  "Act I",
  "Wen Token",
  "Mother Iggy",
  "Daddy Tate",
  "Retardio",
  "Giga Chad",
  "Michi Cat",
  "Rats on Solana",
];

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateIndicators(): TokenIndicator[] {
  return [
    {
      label: "Top 10 Holders",
      percentage: Math.floor(randomBetween(60, 95)),
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

    // Use placeholder images with unique seeds
    const imageUrl = `https://api.multiavatar.com/${name}-${i}.png`;

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
        volume24h: randomBetween(1000, 10000000),
        priceChange24h: randomBetween(-50, 200),
        holders: Math.floor(randomBetween(100, 50000)),
        liquidity: randomBetween(5000, 5000000),
        funding: randomBetween(1000, 10000),
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
