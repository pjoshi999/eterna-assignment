/**
 * Axiom Trade Color Constants
 * Extracted from https://axiom.trade/pulse
 */

export const COLORS = {
  // Background Colors
  background: {
    primary: "#06070b",
    card: "rgba(255, 255, 255, 0.02)",
    hover: "rgba(82, 111, 255, 0.05)",
    hoverAlt: "rgba(255, 255, 255, 0.02)",
  },

  // Text Colors
  text: {
    primary: "#fcfcfc",
    secondary: "#9ca3af",
    tertiary: "#6b7280",
    tertiaryLight: "#4b5563",
  },

  // Accent Colors
  accent: {
    primary: "#526fff",
    success: "#22c55e",
    successLight: "#25d365",
    danger: "#ef4444",
    dangerLight: "#ff4e4e",
    twitter: "#5dbcff",
  },

  // Border & Separator
  border: {
    default: "rgba(255, 255, 255, 0.1)",
    muted: "rgba(255, 255, 255, 0.05)",
  },
} as const;

export type ColorScheme = typeof COLORS;
