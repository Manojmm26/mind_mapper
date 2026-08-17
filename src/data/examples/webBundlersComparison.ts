import { ComparisonWorkspaceData } from "../../services/llmService";

export const WEB_BUNDLERS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Modern Web Bundlers & Build Tools: Vite vs Esbuild vs Rspack vs SWC vs Webpack",
  "domainType": "tools",
  "overview": "A frontend build toolchain evaluation comparing native ESM dev servers, Rust/Go compilation speed (Esbuild/SWC/Rspack), Webpack plugin compatibility, and production bundling.",
  "recommendedApproach": "Use Vite for standard frontend React/Vue/Svelte development; use Rspack for fast Rust-powered Webpack replacement in enterprise apps; use Esbuild/SWC for ultra-fast compilation.",
  "criteria": [
    {
      "id": "c1",
      "label": "Dev Server HMR Speed (Native ESM vs Bundled)",
      "type": "text",
      "description": "Instant browser Hot Module Replacement via unbundled native ESM imports."
    },
    {
      "id": "c2",
      "label": "Production Build Compilation Speed (Go / Rust Engine)",
      "type": "text",
      "description": "Compiling TS/JSX code using Rust or Go native binaries."
    },
    {
      "id": "c3",
      "label": "Webpack Plugin & Loader Compatibility",
      "type": "text",
      "description": "100% drop-in compatibility with legacy Webpack loaders and plugins."
    },
    {
      "id": "c4",
      "label": "Tree-Shaking & Code Splitting Optimization",
      "type": "text",
      "description": "Advanced dead-code elimination and dynamic chunk splitting."
    },
    {
      "id": "c5",
      "label": "Configuration Simplicity",
      "type": "text",
      "description": "Zero-config defaults vs complex Webpack configuration files."
    },
    {
      "id": "c6",
      "label": "React Server Components & SSR Support",
      "type": "text",
      "description": "Supporting SSR build targets and RSC server/client split bundles."
    }
  ],
  "options": [
    {
      "id": "vite",
      "name": "Vite",
      "summary": "Next-generation frontend tooling powered by native ESM dev server and Rollup/Rolldown production bundling.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class HMR (Native ESM)",
          "note": "Dev server serves source code over native ESM; HMR remains instant regardless of application size."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Esbuild Dev / Rollup Build",
          "note": "Uses Esbuild for fast dev pre-bundling and Rollup (transitioning to Rust Rolldown) for production builds."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Vite Plugin Ecosystem",
          "note": "Massive ecosystem of lightweight Vite plugins."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Outstanding (Rollup)",
          "note": "Rollup code-splitting generates optimized production assets."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Intuitive vite.config.ts",
          "note": "Clean, typed configuration file."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal SSR Standard",
          "note": "Powers React Router v7, Nuxt 3, SvelteKit, Astro, and SolidStart."
        }
      },
      "tags": [
        "Vite",
        "Native ESM",
        "Esbuild",
        "Rollup",
        "Frontend Standard"
      ]
    },
    {
      "id": "rspack",
      "name": "Rspack (ByteDance)",
      "summary": "High-performance Rust-based bundler designed as a fast, drop-in replacement for Webpack.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Instant HMR",
          "note": "Rust architecture delivers sub-second HMR even in massive enterprise monorepos."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "10x-100x Faster than Webpack",
          "note": "Written in Rust with multi-threaded parallel compilation."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% Webpack API Parity",
          "note": "Drop-in replacement for Webpack plugins, loaders, and Module Federation."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Advanced Webpack Splitting",
          "note": "Full support for SplitChunksPlugin and Module Federation v2."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Webpack Compatible Config",
          "note": "Uses familiar rspack.config.js syntax."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Rsbuild Framework",
          "note": "Rsbuild provides zero-config build abstraction for React and Vue."
        }
      },
      "tags": [
        "Rspack",
        "Rust",
        "Webpack Drop-In",
        "Module Federation"
      ]
    },
    {
      "id": "esbuild",
      "name": "Esbuild",
      "summary": "An extremely fast JavaScript and CSS bundler written in Go.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Instant",
          "note": "Compiles code directly to machine code in Go."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unmatched Go Speed",
          "note": "Compiles TypeScript and JavaScript 10x-100x faster than tsc or Webpack."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Simple Go API",
          "note": "Uses custom JS/Go plugin API."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "note": "Handles tree-shaking and minification."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Simple CLI / JS API",
          "note": "Straightforward build API without complex plugin chains."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Core Utility",
          "note": "Powers Vite dev pre-bundling, TSUP, and AWS Lambda build tools."
        }
      },
      "tags": [
        "Esbuild",
        "Go Engine",
        "Blazing Fast",
        "Transpiler"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Vite for new web projects wanting instant dev server HMR and clean configuration.",
    "Adopt Rspack as a drop-in Rust replacement for legacy Webpack builds in enterprise monorepos.",
    "Use Esbuild or SWC for fast TypeScript transpilation in server-side Node/Bun scripts."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Web Bundler Selection",
        "description": "Choosing the frontend build toolchain."
      },
      {
        "id": "p1",
        "label": "Instant ESM Dev Server & Universal Web Standard",
        "description": "Need native ESM HMR dev server powered by Vite for React, Vue, or Svelte."
      },
      {
        "id": "p2",
        "label": "Drop-In Rust Replacement for Webpack",
        "description": "Need 10x-100x faster Rust build speeds while retaining 100% Webpack loader/plugin compatibility."
      },
      {
        "id": "p3",
        "label": "Ultra-Fast Go Transpiler Core",
        "description": "Need lightweight Go engine for instant TypeScript transpilation and script bundling."
      },
      {
        "id": "e1",
        "label": "Vite",
        "description": "Next-gen ESM frontend build tool."
      },
      {
        "id": "e2",
        "label": "Rspack",
        "description": "High-performance Rust Webpack replacement."
      },
      {
        "id": "e3",
        "label": "Esbuild",
        "description": "Go-powered ultra-fast JS/TS bundler."
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
      }
    ]
  }
};
