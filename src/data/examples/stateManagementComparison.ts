import { ComparisonWorkspaceData } from "../../services/llmService";

export const STATE_MANAGEMENT_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "React State Management & Data Fetching: Zustand vs Redux Toolkit vs TanStack Query vs Jotai",
  "domainType": "tools",
  "overview": "A detailed comparison of React state management and asynchronous data fetching libraries, evaluating mental models, boilerplate, server cache synchronization, and bundle size.",
  "recommendedApproach": "Use TanStack Query for all server-state data fetching & caching; combine with Zustand for simple global client state or Jotai for atomic state management.",
  "criteria": [
    {
      "id": "c1",
      "label": "State Model (Flux vs Atomic vs Unopinionated)",
      "type": "text",
      "description": "Store structure and mental model for state updates."
    },
    {
      "id": "c2",
      "label": "Boilerplate & Developer Velocity",
      "type": "text",
      "description": "Lines of code required to create stores, actions, and selectors."
    },
    {
      "id": "c3",
      "label": "Server State & Async Caching",
      "type": "text",
      "description": "Handling request deduping, background revalidation, and cache invalidation."
    },
    {
      "id": "c4",
      "label": "TypeScript DX & Autocomplete",
      "type": "text",
      "description": "Type inference for actions, state properties, and queries."
    },
    {
      "id": "c5",
      "label": "Bundle Size & Performance",
      "type": "text",
      "description": "Impact on client JavaScript bundle and selector re-render optimization."
    },
    {
      "id": "c6",
      "label": "DevTools & Time-Travel Debugging",
      "type": "text",
      "description": "Quality of browser extensions for inspecting state transitions."
    }
  ],
  "options": [
    {
      "id": "zustand",
      "name": "Zustand",
      "summary": "A small, fast, and unopinionated state management library using simplified hooks.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Unopinionated Store",
          "note": "Centralized store accessed via hooks without Provider wrapper boilerplate."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Minimal",
          "note": "Create a complete global store in under 10 lines of code."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Client-Focused",
          "note": "Best for UI client state; pair with TanStack Query for server data."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Excellent",
          "note": "Automatic TypeScript inference without complex generics."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Tiny (~1KB)",
          "note": "Microscopic bundle size with atomic selector subscriptions preventing over-renders."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Good",
          "note": "Redux DevTools middleware support included out of the box."
        }
      },
      "tags": [
        "Small",
        "Hook-Based",
        "Client State",
        "No-Provider"
      ]
    },
    {
      "id": "tanstack-query",
      "name": "TanStack Query (React Query)",
      "summary": "The industry standard for managing asynchronous server state, caching, and background synchronization.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Async Server State",
          "note": "Treats server data as a separate concern from local UI state."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Low",
          "note": "Replaces hundreds of lines of custom useEffect/fetch logic with useQuery."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class",
          "note": "Automatic deduping, window-focus revalidation, optimistic updates, and garbage collection."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Outstanding",
          "note": "Infer query data types directly from fetcher return signatures."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Highly Optimized",
          "note": "Prevents redundant network calls across component trees."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class",
          "note": "Dedicated TanStack Query DevTools drawer showing live cache states."
        }
      },
      "tags": [
        "Server State",
        "Caching",
        "Async",
        "Standard"
      ]
    },
    {
      "id": "redux-toolkit",
      "name": "Redux Toolkit (RTK + RTK Query)",
      "summary": "The official, standardized toolset for efficient Redux development.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Flux Architecture",
          "note": "Predictable unidirectional data flow with Immer immutability."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Moderate",
          "note": "createSlice reduces historic Redux boilerplate, but still requires actions/reducers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good (RTK Query)",
          "note": "RTK Query addon provides built-in caching and data fetching."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Excellent",
          "note": "Strictly typed state and action creators."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Larger (~10KB)",
          "note": "Includes Redux core, Reselect, and Immer."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Unmatched",
          "note": "Redux DevTools provides unmatched time-travel debugging and state snapshots."
        }
      },
      "tags": [
        "Redux",
        "Flux",
        "Immer",
        "Enterprise"
      ]
    },
    {
      "id": "jotai",
      "name": "Jotai",
      "summary": "Primitive and flexible state management for React inspired by Recoil's atomic model.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Atomic Model",
          "note": "Build state out of small, composable atoms (useAtom)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Minimal",
          "note": "Define atoms independently without top-down store configuration."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Good (Async Atoms)",
          "note": "Async atoms integrate with React Suspense seamlessly."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Excellent",
          "note": "Natural TypeScript typing per atom."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Tiny (~2KB)",
          "note": "Minimalist core with fine-grained bottom-up re-rendering."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Good",
          "note": "Jotai DevTools and Redux integration middleware."
        }
      },
      "tags": [
        "Atomic",
        "Atoms",
        "Suspense",
        "Bottom-Up"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Separate state into Server State (DB/API data) vs Client State (modals, theme, forms).",
    "Adopt TanStack Query immediately for all API data fetching and caching.",
    "Use Zustand for global client UI state if you want a clean, single-store approach.",
    "Use Jotai if your UI requires highly dynamic, atomic component state graphs."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "React State Strategy",
        "description": "Choosing the right state management architecture."
      },
      {
        "id": "p1",
        "label": "Server Data & API Responses",
        "description": "Handling HTTP fetching, caching, revalidation, and mutations."
      },
      {
        "id": "p2",
        "label": "Global Client UI State",
        "description": "Managing user preferences, active modals, and sidebar toggles."
      },
      {
        "id": "p3",
        "label": "Complex Enterprise Flux Workflows",
        "description": "Need strict time-travel debugging and strict team conventions."
      },
      {
        "id": "p4",
        "label": "Atomic & Composable State Graphs",
        "description": "Building dynamic node editors or fine-grained interactive UI widgets."
      },
      {
        "id": "e1",
        "label": "TanStack Query",
        "description": "De facto standard for async server state management."
      },
      {
        "id": "e2",
        "label": "Zustand",
        "description": "Lightweight, hook-based unopinionated global store."
      },
      {
        "id": "e3",
        "label": "Redux Toolkit",
        "description": "Standardized Flux architecture with Immer and RTK Query."
      },
      {
        "id": "e4",
        "label": "Jotai",
        "description": "Atomic state primitive with native React Suspense integration."
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
        "source": "root",
        "target": "p3"
      },
      {
        "source": "root",
        "target": "p4"
      },
      {
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      },
      {
        "source": "p3",
        "target": "e3"
      },
      {
        "source": "p4",
        "target": "e4"
      }
    ]
  }
};
