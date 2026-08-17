import { ComparisonWorkspaceData } from "../../services/llmService";

export const FRONTEND_STATE_ARCHITECTURE_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Frontend State Management: Zustand vs Redux Toolkit vs TanStack Query (React Query) vs Jotai",
  "domainType": "tools",
  "overview": "A React state architecture evaluation comparing client-side UI stores (Zustand), server-state caching & revalidation (TanStack Query), atomic signals (Jotai), and classic Redux flux stores.",
  "recommendedApproach": "Use TanStack Query for server data fetching, caching, and background revalidation; use Zustand for simple, fast client UI state; use Jotai for atomic state primitives.",
  "criteria": [
    {
      "id": "c1",
      "label": "Server-State vs Client-State Specialization",
      "type": "text",
      "description": "Managing async API fetching/caching vs local UI modal/theme state."
    },
    {
      "id": "c2",
      "label": "Boilerplate & Store Declaration Simplicity",
      "type": "text",
      "description": "Declaring state stores in 5 lines of code vs actions, reducers, and selectors."
    },
    {
      "id": "c3",
      "label": "Automatic Background Revalidation & Stale-While-Revalidate",
      "type": "text",
      "description": "Auto-refetching stale API data on window focus, network reconnect, or interval timer."
    },
    {
      "id": "c4",
      "label": "Atomic Granular Re-renders (Signals / Atoms)",
      "type": "text",
      "description": "Re-rendering only the exact components reading mutated state fields."
    },
    {
      "id": "c5",
      "label": "Middleware & Persistence (LocalStorage / Redux DevTools)",
      "type": "text",
      "description": "Persisting state to local storage and debugging via Redux DevTools."
    },
    {
      "id": "c6",
      "label": "Bundle Size (kB)",
      "type": "text",
      "description": "Client JavaScript bundle size footprint."
    }
  ],
  "options": [
    {
      "id": "tanstack-query",
      "name": "TanStack Query (React Query v5)",
      "summary": "Powerful asynchronous state management for TS/JS, React, Vue, Svelte, and Solid.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Server State)",
          "note": "Dedicated to managing server state, API fetching, caching, mutations, and optimistic updates."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Simple Hook API",
          "note": "Use useQuery() and useMutation() hooks directly with zero manual store setup."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched Auto-Revalidation",
          "note": "Implements Stale-While-Revalidate; auto-refetches data on window focus and reconnect."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Optimized Re-renders",
          "note": "Selective structural sharing prevents unnecessary component re-renders."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "TanStack Devtools",
          "note": "Dedicated interactive Devtools inspector panel."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Lightweight",
          "note": "Tree-shakeable package."
        }
      },
      "tags": [
        "TanStack Query",
        "React Query",
        "Server State",
        "Caching",
        "Standard"
      ]
    },
    {
      "id": "zustand",
      "name": "Zustand",
      "summary": "Small, fast, and scalable bear-necessities state management solution using simplified flux principles.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Client UI State)",
          "note": "Purpose-built for managing local UI state (modals, active tabs, themes, user preferences)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Zero Boilerplate (1 KB)",
          "note": "Create a store in 5 lines of code (create((set) => ({ count: 0, inc: () => set(...) })))."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Client Store",
          "note": "Combines with TanStack Query for server fetching."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Selector Re-renders",
          "note": "Components re-render only when selected state slice changes (useStore(state => state.count))."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Persist & DevTools",
          "note": "Built-in persist middleware saves to localStorage; connects to Redux DevTools."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Tiny (1.1 kB)",
          "note": "Microscopic 1.1 kB bundle footprint."
        }
      },
      "tags": [
        "Zustand",
        "Client State",
        "1.1kB",
        "Zero Boilerplate",
        "React"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use TanStack Query for 100% of server API data fetching, caching, and background revalidation.",
    "Use Zustand for global client-side UI state (theme, active sidebar, modal states).",
    "Eliminate manual useEffect data fetching loops by adopting TanStack Query hooks."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Frontend State Selection",
        "description": "Choosing the React state management architecture."
      },
      {
        "id": "p1",
        "label": "Server API Data Fetching, Caching, & Auto-Revalidation",
        "description": "Need dedicated server-state manager with Stale-While-Revalidate caching and window-focus refetching."
      },
      {
        "id": "p2",
        "label": "Lightweight 1kB Client UI Store",
        "description": "Need zero-boilerplate 1kB store for local UI state (modals, themes, preferences)."
      },
      {
        "id": "e1",
        "label": "TanStack Query",
        "description": "Unmatched server-state manager for API fetching and caching."
      },
      {
        "id": "e2",
        "label": "Zustand",
        "description": "Fast, 1.1kB client UI state manager."
      }
    ],
    "edges": [
      {
        "source": "root",
        "target": "p1"
      },
      {
        "source": "root",
        "target": "p2"
      },
      {
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      }
    ]
  }
};
