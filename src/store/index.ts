/**
 * Redux Store Configuration
 * Main store setup with all slices and middleware
 */

import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import websocketReducer from "./slices/websocketSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    websocket: websocketReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serialization check
        ignoredActions: ["websocket/setLastMessage"],
      },
    }),
});

// Infer types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
