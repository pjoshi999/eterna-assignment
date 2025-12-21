/**
 * UI Slice
 * Redux slice for managing UI state (modals, tooltips, display settings)
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisplaySettings {
  layout: "list" | "grid";
  showQuickBuy: boolean;
  showMetrics: {
    marketCap: boolean;
    volume: boolean;
    funding: boolean;
  };
}

interface UIState {
  displaySettings: DisplaySettings;
  selectedTokenId: string | null;
  isModalOpen: boolean;
  activeTooltip: string | null;
  hoveredTokenId: string | null;
}

const initialState: UIState = {
  displaySettings: {
    layout: "list",
    showQuickBuy: true,
    showMetrics: {
      marketCap: true,
      volume: true,
      funding: true,
    },
  },
  selectedTokenId: null,
  isModalOpen: false,
  activeTooltip: null,
  hoveredTokenId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDisplaySettings: (
      state,
      action: PayloadAction<Partial<DisplaySettings>>
    ) => {
      state.displaySettings = {
        ...state.displaySettings,
        ...action.payload,
      };
    },

    setSelectedToken: (state, action: PayloadAction<string | null>) => {
      state.selectedTokenId = action.payload;
    },

    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },

    setActiveTooltip: (state, action: PayloadAction<string | null>) => {
      state.activeTooltip = action.payload;
    },

    setHoveredToken: (state, action: PayloadAction<string | null>) => {
      state.hoveredTokenId = action.payload;
    },

    toggleMetric: (
      state,
      action: PayloadAction<keyof DisplaySettings["showMetrics"]>
    ) => {
      const metric = action.payload;
      state.displaySettings.showMetrics[metric] =
        !state.displaySettings.showMetrics[metric];
    },
  },
});

export const {
  setDisplaySettings,
  setSelectedToken,
  setModalOpen,
  setActiveTooltip,
  setHoveredToken,
  toggleMetric,
} = uiSlice.actions;

export default uiSlice.reducer;
