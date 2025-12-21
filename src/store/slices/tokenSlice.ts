/**
 * Token Slice
 * Redux slice for managing token data and operations
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
    },

    // Add a new token
    addToken: (state, action: PayloadAction<Token>) => {
      const token = action.payload;
      state.tokens[token.id] = token;

      // Add to appropriate column
      switch (token.column) {
        case "new":
          state.newPairs.unshift(token.id);
          break;
        case "final":
          state.finalStretch.unshift(token.id);
          break;
        case "migrated":
          state.migrated.unshift(token.id);
          break;
      }
    },

    // Update token data (for WebSocket updates)
    updateToken: (state, action: PayloadAction<TokenUpdate>) => {
      const { id, field, value } = action.payload;
      const token = state.tokens[id];

      if (!token) return;

      // Store previous price for flash animation
      if (field === "currentPrice") {
        token.previousPrice = token.currentPrice;
        token.currentPrice = value;
      } else {
        // Update metrics
        (token.metrics as Record<string, number>)[field] = value;
      }

      token.lastUpdate = Date.now();
    },

    // Batch update tokens
    batchUpdateTokens: (state, action: PayloadAction<TokenUpdate[]>) => {
      action.payload.forEach((update) => {
        const { id, field, value } = update;
        const token = state.tokens[id];

        if (!token) return;

        if (field === "currentPrice") {
          token.previousPrice = token.currentPrice;
          token.currentPrice = value;
        } else {
          (token.metrics as Record<string, number>)[field] = value;
        }

        token.lastUpdate = Date.now();
      });
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
