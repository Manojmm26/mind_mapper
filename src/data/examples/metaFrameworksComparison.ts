import { ComparisonWorkspaceData } from "../../services/llmService";

export const META_FRAMEWORKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Full-Stack Web Meta-Frameworks: Next.js 15 vs React Router v7 (Remix) vs Nuxt 3 vs SvelteKit vs Astro",
  "domainType": "tools",
  "overview": "A comparative evaluation of modern web meta-frameworks analyzing routing models, data loading APIs, server components, bundle size, and edge deployment.",
  "recommendedApproach": "Use Next.js 15 for React Server Components (RSC) & Vercel ecosystem; use React Router v7 (Remix) for web-standards nested routing; use Nuxt 3 for Vue; use SvelteKit for Svelte; use Astro for static content.",
  "criteria": [
    {
      "id": "c1",
      "label": "Routing Architecture (App Router vs Nested Routes)",
      "type": "text",
      "description": "File-system directory routes (App Router) vs nested layout routes (loader/action)."
    },
    {
      "id": "c2",
      "label": "Data Mutation & Form Handling (Server Actions vs Actions)",
      "type": "text",
      "description": "React Server Actions vs web-standard Request/Response form actions."
    },
    {
      "id": "c3",
      "label": "Underlying UI Library (React vs Vue vs Svelte)",
      "type": "text",
      "description": "Framework core engine and component ecosystem depth."
    },
    {
      "id": "c4",
      "label": "Zero-JS Islands vs Hydration Bundle",
      "type": "text",
      "description": "Hydration overhead and zero-JS defaults for static content."
    },
    {
      "id": "c5",
      "label": "Edge & Serverless Multi-Cloud Portability",
      "type": "text",
      "description": "Deployment adapters for Vercel, Netlify, Cloudflare Workers, Node, Deno, Bun."
    },
    {
      "id": "c6",
      "label": "Developer Velocity & HMR",
      "type": "text",
      "description": "Fast HMR, TypeScript autocomplete, and error overlay DX."
    }
  ],
  "options": [
    {
      "id": "nextjs",
      "name": "Next.js 15",
      "summary": "The flagship React meta-framework powered by Vercel, React Server Components, and Turbopack.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "App Router (RSC)",
          "note": "Directory-based file routing with layout.tsx, page.tsx, loading.tsx, error.tsx conventions."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "React Server Actions",
          "note": "Mutate server database directly inside async server functions ('use server')."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "React 19",
          "note": "Deepest ecosystem with unmatched third-party library adoption."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "RSC Zero-Bundle",
          "note": "Server components stay on server; client components hydrate interactively."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Vercel / Node / Edge",
          "note": "Optimized for Vercel; deployable on Node.js or Docker via standalone output."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Turbopack HMR",
          "note": "Fast compilation with Turbopack Rust bundler."
        }
      },
      "tags": [
        "Next.js",
        "RSC",
        "Server Actions",
        "React 19"
      ]
    },
    {
      "id": "react-router-v7",
      "name": "React Router v7 / Remix",
      "summary": "Full-stack React framework centered on web standards, progressive enhancement, and nested routes.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Nested Routes",
          "note": "Nested layouts load data in parallel without waterfall delays."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Web Standard Actions",
          "note": "HTML <Form> GET/POST actions backed by Web API Request/Response handlers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "React",
          "note": "Standard React component model."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Hydrated React",
          "note": "Fast hydration with automatic revalidation on data mutations."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Universal Adapters",
          "note": "Deploys identically to Node, Cloudflare Workers, Fastly, or Deno."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Vite Powered",
          "note": "Built on Vite for instant HMR and clean configuration."
        }
      },
      "tags": [
        "Remix",
        "React Router",
        "Vite",
        "Web Standards"
      ]
    },
    {
      "id": "nuxt",
      "name": "Nuxt 3",
      "summary": "The intuitive Vue 3 meta-framework featuring auto-imports and server engine (Nitro).",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pages Directory",
          "note": "Intuitive Vue file-based routing."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Nitro Server Engine",
          "note": "Nitro server engine generates unified API routes and server handlers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Vue 3 (Composition API)",
          "note": "Uses Vue 3 reactivity and single file components (.vue)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Tree-Shakeable",
          "note": "Small initial payload with automatic component auto-imports."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "UnJS Nitro Engines",
          "note": "Nitro engine deploys anywhere (Cloudflare, Vercel, Node, Netlify)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Unmatched Vue DX",
          "note": "Auto-imports components, composables, and utilities without import statements."
        }
      },
      "tags": [
        "Nuxt",
        "Vue 3",
        "Nitro",
        "Auto-Imports"
      ]
    },
    {
      "id": "sveltekit",
      "name": "SvelteKit",
      "summary": "The high-performance Svelte meta-framework offering small bundles and compiler-first speed.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Filesystem Routes",
          "note": "+page.svelte, +page.server.ts layout hierarchy."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Form Actions",
          "note": "Clean server +page.server.ts form actions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Svelte 5 (Runes)",
          "note": "Powered by Svelte 5 universal signals for reactive updates."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Tiny Footprint",
          "note": "Compiler-first architecture eliminates Virtual DOM overhead."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Adapter Architecture",
          "note": "@sveltejs/adapter-auto deploys seamlessly across providers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Vite Powered",
          "note": "Blazing fast Vite dev server experience."
        }
      },
      "tags": [
        "SvelteKit",
        "Svelte 5",
        "Compiler",
        "Vite"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Next.js 15 for React Server Components and deep Vercel ecosystem integration.",
    "Choose React Router v7 (Remix) for web-standard nested routing and Vite dev server speed.",
    "Choose Nuxt 3 if building with Vue 3; choose SvelteKit if building with Svelte 5.",
    "Audit hydration JS bundle size and Server Action response latency."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Meta-Framework Selection",
        "description": "Choosing the full-stack web application framework."
      },
      {
        "id": "p1",
        "label": "React Ecosystem & Server Components",
        "description": "Need React Server Components, Server Actions, and Vercel cloud deployment."
      },
      {
        "id": "p2",
        "label": "Web Standards & Nested Route Parallel Loading",
        "description": "Prefer Web Request/Response APIs, nested layouts, and Vite tooling."
      },
      {
        "id": "p3",
        "label": "Vue 3 Ecosystem & Auto-Imports",
        "description": "Building full-stack web applications with Vue 3 and Nitro server engine."
      },
      {
        "id": "p4",
        "label": "Compiler-First Smallest JS Bundle",
        "description": "Need Svelte 5 signals and minimal client JavaScript hydration overhead."
      },
      {
        "id": "e1",
        "label": "Next.js 15",
        "description": "Flagship React framework with App Router and Server Components."
      },
      {
        "id": "e2",
        "label": "React Router v7 (Remix)",
        "description": "Web-standard React framework powered by Vite."
      },
      {
        "id": "e3",
        "label": "Nuxt 3",
        "description": "Vue 3 meta-framework with Nitro engine and auto-imports."
      },
      {
        "id": "e4",
        "label": "SvelteKit",
        "description": "Compiler-first Svelte 5 framework with tiny bundle size."
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
