import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Axiom Trade Color Palette (Exact)
        background: "#06070b",
        foreground: "#fcfcfc",
        primary: {
          DEFAULT: "#526fff",
          foreground: "#fcfcfc",
        },
        secondary: {
          DEFAULT: "#9ca3af",
          foreground: "#fcfcfc",
        },
        tertiary: {
          DEFAULT: "#6b7280",
          light: "#4b5563",
        },
        success: {
          DEFAULT: "#22c55e",
          light: "#25d365",
        },
        danger: {
          DEFAULT: "#ef4444",
          light: "#ff4e4e",
        },
        twitter: "#5dbcff",
        border: "rgba(255, 255, 255, 0.1)",
        hover: "rgba(82, 111, 255, 0.05)",
        "hover-alt": "rgba(255, 255, 255, 0.02)",
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "#9ca3af",
        },
        accent: {
          DEFAULT: "#526fff",
          foreground: "#fcfcfc",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.02)",
          foreground: "#fcfcfc",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        flash: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "flash-green": {
          "0%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "rgba(34, 197, 94, 0.2)" },
          "100%": { backgroundColor: "transparent" },
        },
        "flash-red": {
          "0%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "rgba(239, 68, 68, 0.2)" },
          "100%": { backgroundColor: "transparent" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flash: "flash 0.3s ease-in-out",
        "flash-green": "flash-green 0.3s ease-in-out",
        "flash-red": "flash-red 0.3s ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
