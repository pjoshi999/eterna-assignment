/**
 * Token Slice
 * Redux slice for managing token data and operations
 * Fixed: Proper immutable updates and auto-sorting
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Token, TokenUpdate, ColumnType, SortConfig } from "@/types";

interface TokenState {
  tokens: Record<string, Token>; // Keyed by token ID for O(1) access
  newPairs: string[]; // Array of token IDs in "new" column
  finalStretch: string[]; // Array of token IDs in "final" column
  migrated: string[]; // Array of token IDs in "migrated" column
  loading: boolean;
  error: string | null;
  sortConfig: Record<ColumnType, SortConfig | null>;
}

const initialState: TokenState = {
  tokens: {},
  newPairs: [],
  finalStretch: [],
  migrated: [],
  loading: false,
  error: null,
  sortConfig: {
    new: null,
    final: null,
    migrated: null,
  },
};

// Helper function to sort tokens by market cap
const sortTokensByMarketCap = (
  tokenIds: string[],
  tokens: Record<string, Token>
): string[] => {
  return [...tokenIds].sort((a, b) => {
    const tokenA = tokens[a];
    const tokenB = tokens[b];
    return (tokenB?.metrics.marketCap || 0) - (tokenA?.metrics.marketCap || 0);
  });
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    // Set initial tokens
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = {};
      state.newPairs = [];
      state.finalStretch = [];
      state.migrated = [];

      action.payload.forEach((token) => {
        state.tokens[token.id] = token;

        // Add to appropriate column
        switch (token.column) {
          case "new":
            state.newPairs.push(token.id);
            break;
          case "final":
            state.finalStretch.push(token.id);
            break;
          case "migrated":
            state.migrated.push(token.id);
            break;
        }
      });

      // Sort all columns by market cap
      state.newPairs = sortTokensByMarketCap(state.newPairs, state.tokens);
      state.finalStretch = sortTokensByMarketCap(
        state.finalStretch,
        state.tokens
      );
      state.migrated = sortTokensByMarketCap(state.migrated, state.tokens);
    },

    // Add a new token
    addToken: (state, action: PayloadAction<Token>) => {
      const token = action.payload;
      state.tokens[token.id] = token;

      // Add to appropriate column
      switch (token.column) {
        case "new":
          state.newPairs.unshift(token.id);
          state.newPairs = sortTokensByMarketCap(state.newPairs, state.tokens);
          break;
        case "final":
          state.finalStretch.unshift(token.id);
          state.finalStretch = sortTokensByMarketCap(
            state.finalStretch,
            state.tokens
          );
          break;
        case "migrated":
          state.migrated.unshift(token.id);
          state.migrated = sortTokensByMarketCap(state.migrated, state.tokens);
          break;
      }
    },

    // Update token data (for WebSocket updates) - FIXED VERSION
    updateToken: (state, action: PayloadAction<TokenUpdate>) => {
      const { id, field, value } = action.payload;
      const token = state.tokens[id];

      if (!token) return;

      // Create new token object to ensure immutability
      const updatedToken: Token = { ...token };

      // Store previous price for flash animation
      if (field === "currentPrice") {
        updatedToken.previousPrice = updatedToken.currentPrice;
        updatedToken.currentPrice = value;
      } else {
        // Update metrics - create new metrics object
        updatedToken.metrics = {
          ...updatedToken.metrics,
          [field]: value,
        };
      }

      updatedToken.lastUpdate = Date.now();

      // Update the token in state
      state.tokens[id] = updatedToken;

      // Re-sort the appropriate column for dynamic reordering
      switch (token.column) {
        case "new":
          state.newPairs = sortTokensByMarketCap(state.newPairs, state.tokens);
          break;
        case "final":
          state.finalStretch = sortTokensByMarketCap(
            state.finalStretch,
            state.tokens
          );
          break;
        case "migrated":
          state.migrated = sortTokensByMarketCap(state.migrated, state.tokens);
          break;
      }
    },

    // Batch update tokens
    batchUpdateTokens: (state, action: PayloadAction<TokenUpdate[]>) => {
      action.payload.forEach((update) => {
        const { id, field, value } = update;
        const token = state.tokens[id];

        if (!token) return;

        // Create new token object
        const updatedToken: Token = { ...token };

        if (field === "currentPrice") {
          updatedToken.previousPrice = updatedToken.currentPrice;
          updatedToken.currentPrice = value;
        } else {
          updatedToken.metrics = {
            ...updatedToken.metrics,
            [field]: value,
          };
        }

        updatedToken.lastUpdate = Date.now();
        state.tokens[id] = updatedToken;
      });

      // Re-sort all columns after batch update
      state.newPairs = sortTokensByMarketCap(state.newPairs, state.tokens);
      state.finalStretch = sortTokensByMarketCap(
        state.finalStretch,
        state.tokens
      );
      state.migrated = sortTokensByMarketCap(state.migrated, state.tokens);
    },

    // Set sort configuration
    setSortConfig: (
      state,
      action: PayloadAction<{ column: ColumnType; config: SortConfig | null }>
    ) => {
      state.sortConfig[action.payload.column] = action.payload.config;
    },

    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    // Set error state
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTokens,
  addToken,
  updateToken,
  batchUpdateTokens,
  setSortConfig,
  setLoading,
  setError,
} = tokenSlice.actions;

export default tokenSlice.reducer;
