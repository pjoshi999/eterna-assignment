# System Design & Architecture

## Overview
This application is a high-performance, real-time crypto trading interface designed for professional users. It mimics the "Axiom/Pulse" aesthetics with a focus on data density, low latency, and responsive interaction.

## Architecture

### 1. Frontend Framework
- **Next.js (App Router)**: Chosen for server-side rendering capabilities (SEO, initial load) and robust routing.
- **React**: Component-based UI composition.
- **TypeScript**: Strict type safety to ensure maintainability and reduce runtime errors.

### 2. State Management
- **Redux Toolkit**: Used for global application state (User preferences, Authentication, WebSocket connection status).
- **React Query (optional/future)**: For async server state.
- **Local State**: `useState` is preferred for UI-only state (e.g., modal visibility, active tabs) to render components closely to their data source and avoid global clutter.

### 3. Styling & Theming
- **Tailwind CSS**: Utility-first CSS framework for rapid development and consistent design tokens.
- **Design Tokens (`tailwind.config.ts`)**:
    - Semantic color naming (`bg-main`, `bg-card`, `text-secondary`) is used over raw hex values to facilitate theme switching and maintenance.
    - Custom animations (`shimmer`, `slide-in`) provide a premium feel.
- **Responsive Design**: Mobile-first approach where critical navigation adapts (e.g., Bottom Sheet on mobile vs Dropdowns on desktop).

### 4. Real-Time Data (WebSocket)
- **Custom WebSocket Hook (`useWebSocket`)**:
    - Manages connection lifecycle (connect, disconnect, reconnect).
    - Batches updates to high-frequency token data to prevent UI thrashing.
    - Dispatches updates to the Redux store or local context.

### 5. Component Structure (Atomic-ish)
- `components/ui/*`: Primitives (Buttons, Dialogs, Tooltips) - highly reusable, style-agnostic parts.
- `components/navigation/*`: Layout specific components (PulseBar, TopNav).
- `components/table/*`: Feature-specific logic for the token list.
- `components/modals/*`: Feature-context overlays.

## Key Design Decisions

### Mobile Optimization
- **Bottom Sheets**: Used for Settings/Filters on mobile to maximize reachability and view area.
- **Scrollable Tabs**: Replaces grid headers on mobile to handle limited width while maintaining access to all data categories ("New Pairs", "Final Stretch").
- **Hiding Redundance**: Secondary headers (like "New Pairs" column title) are hidden on mobile to reduce visual noise.

### Performance
- **Memoization**: `React.memo` and `useMemo` are utilized in high-frequency update components (`TokenRow`) to prevent unnecessary re-renders when data updates.
- **CSS-Hardware Acceleration**: Animations use `transform` and `opacity` properties for 60fps performance.

## Future Improvements
- **Virtualization**: Implement `react-window` for the token list if the dataset exceeds 100+ items.
- **SSR Optimization**: Pre-render static parts of the shell.
