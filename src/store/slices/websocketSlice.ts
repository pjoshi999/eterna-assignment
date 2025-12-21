/**
 * WebSocket Slice
 * Redux slice for managing WebSocket connection state
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { WebSocketState } from "@/types";

const initialState: WebSocketState = {
  connected: false,
  connecting: false,
  lastMessage: undefined,
  lastUpdate: undefined,
  error: undefined,
  reconnectAttempts: 0,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    setConnecting: (state, action: PayloadAction<boolean>) => {
      state.connecting = action.payload;
      if (action.payload) {
        state.connected = false;
      }
    },

    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
      state.connecting = false;
      if (action.payload) {
        state.reconnectAttempts = 0;
        state.error = undefined;
      }
    },

    setLastMessage: (
      state,
      action: PayloadAction<WebSocketState["lastMessage"]>
    ) => {
      state.lastMessage = action.payload;
      state.lastUpdate = Date.now();
    },

    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
      state.connected = false;
      state.connecting = false;
    },

    incrementReconnectAttempts: (state) => {
      state.reconnectAttempts += 1;
    },

    resetWebSocket: (state) => {
      state.connected = false;
      state.connecting = false;
      state.lastMessage = undefined;
      state.lastUpdate = undefined;
      state.error = undefined;
      state.reconnectAttempts = 0;
    },
  },
});

export const {
  setConnecting,
  setConnected,
  setLastMessage,
  setError,
  incrementReconnectAttempts,
  resetWebSocket,
} = websocketSlice.actions;

export default websocketSlice.reducer;
