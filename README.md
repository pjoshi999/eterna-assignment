# Axiom Trade - Token Discovery Table

A pixel-perfect replica of Axiom Trade's token discovery table built with Next.js 14, featuring real-time WebSocket updates at 1ms intervals.

![Axiom Trade Token Table](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8) ![Redux](https://img.shields.io/badge/Redux-Toolkit-764abc)

## 🚀 Live Demo

- **Production**: [https://eterna-assignment-git-main-pjoshi999s-projects.vercel.app?_vercel_share=SPJktFHUrIxRe2DqR43RYrjQnxiO0l2M](https://eterna-assignment-git-main-pjoshi999s-projects.vercel.app?_vercel_share=SPJktFHUrIxRe2DqR43RYrjQnxiO0l2M)

### Technical Highlights
- ⚡ **Performance Optimized**: React.memo, optimized Redux state structure (O(1) lookups).
- 🎨 **Design System**: Semantic Tailwind tokens (`bg-main`, `accent-blue`) for themeable and maintainable styling.
- 📱 **Mobile-First UX**: Native-like bottom sheets, scrollable tabs, and responsive gestures.
- 🔄 **State Management**: Redux Toolkit + Local State separation.
- 📊 **Strict Typing**: No `any` types, comprehensive interfaces.

## 📄 Overview



> **[See DESIGN.md](./DESIGN.md) for detailed architecture and design decisions.**

## ✨ Features

### Core Functionality
- ✅ **Three-Column Layout**: New Pairs, Final Stretch, and Migrated tokens
- ✅ **Real-Time Updates**: Mock WebSocket sending price updates every 1ms
- ✅ **Mobile Optimized**: Custom Scrollable Tabs & Touch-friendly modals
- ✅ **Interactive Elements**: Hover effects, tooltips, popovers, and bottom sheets
- ✅ **Price Flash Animations**: Green/red color transitions on value changes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Data Fetching**: React Query (TanStack Query)
- **UI Components**: Radix UI / shadcn/ui
- **Font**: Inter (Google Fonts)
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/eterna-assignment.git
cd eterna-assignment

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page (TokenTable)
│   └── globals.css        # Global styles & animations
├── components/
│   ├── table/             # Token table components
│   │   ├── TokenTable.tsx    # Main container with 3 columns
│   │   ├── TokenColumn.tsx   # Individual column
│   │   └── TokenRow.tsx      # Token card with all data
│   ├── realtime/          # Real-time features
│   │   ├── PriceFlash.tsx    # Green/red flash animation
│   │   └── ConnectionStatus.tsx  # WebSocket status bar
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── tooltip.tsx
│   │   ├── skeleton.tsx
│   │   └── ...
│   └── Providers.tsx      # Redux & React Query providers
├── hooks/
│   └── useWebSocket.ts    # WebSocket connection hook
├── lib/
│   ├── websocket/
│   │   ├── mockWebSocket.ts  # Mock WS with 1ms updates
│   │   └── dataGenerator.ts  # Realistic token data
│   ├── utils/
│   │   ├── formatters.ts     # Number/price formatting
│   │   └── cn.ts             # Tailwind class merger
│   └── constants/
│       └── colors.ts         # Theme colors
├── store/
│   ├── index.ts           # Redux store configuration
│   ├── hooks.ts           # Typed Redux hooks
│   └── slices/
│       ├── tokenSlice.ts      # Token state (O(1) lookups)
│       ├── websocketSlice.ts  # Connection state
│       └── uiSlice.ts         # UI state (modals, tooltips)
└── types/
    ├── token.ts           # Token interfaces
    ├── websocket.ts       # WebSocket types
    └── index.ts           # Type exports
```

## 🎨 Design System

The project uses a semantic design system built with Tailwind CSS.

- **Main Background**: `bg-main` (#0a0b0f)
- **Primary Accent**: `accent-blue` (#526fff)
- **Secondary Text**: `text-secondary` (#9ca3af)

> Full design tokens are defined in [tailwind.config.ts](./tailwind.config.ts).

## 📄 License

This project is created for evaluation purposes.

## 👨‍💻 Author

**Priyanshu Joshi**

---

**Note**: This is a demonstration project showcasing pixel-perfect UI replication, real-time data handling, and production-quality React/Next.js development practices.
