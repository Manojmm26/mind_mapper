import { ComparisonWorkspaceData } from "../../services/llmService";

export const BUILD_TOOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Modern Web Build Tools & Bundlers: Vite vs Webpack vs Turbopack vs Rspack vs Esbuild",
  "domainType": "tools",
  "overview": "A comprehensive comparison of JavaScript/TypeScript build tools and bundlers, evaluating HMR speed, cold start time, plugin ecosystem, and production optimization.",
  "recommendedApproach": "Use Vite for modern web apps & SPA development; use Rspack for fast Webpack-compatible migration; use Esbuild for lightning-fast library bundling; use Turbopack for Next.js projects.",
  "criteria": [
    {
      "id": "c1",
      "label": "Dev Server Cold Start & HMR Speed",
      "type": "text",
      "description": "Time to start dev server and instant Hot Module Replacement latency."
    },
    {
      "id": "c2",
      "label": "Production Build Speed & Tree-Shaking",
      "type": "text",
      "description": "Bundling velocity, minification, and dead code elimination."
    },
    {
      "id": "c3",
      "label": "Ecosystem & Plugin Compatibility",
      "type": "text",
      "description": "Availability of plugins and compatibility with legacy Webpack loaders."
    },
    {
      "id": "c4",
      "label": "Configuration Complexity & DX",
      "type": "text",
      "description": "Ease of setup and out-of-the-box defaults for TS/React/Vue/CSS."
    },
    {
      "id": "c5",
      "label": "Core Engine Implementation Language",
      "type": "text",
      "description": "JavaScript/Node vs Rust vs Go implementation impact on memory and speed."
    },
    {
      "id": "c6",
      "label": "Framework Integration (Next, Nuxt, SvelteKit)",
      "type": "text",
      "description": "Default bundler powering modern meta-frameworks."
    }
  ],
  "options": [
    {
      "id": "vite",
      "name": "Vite 6.x",
      "summary": "The dominant next-generation frontend tooling platform powered by native ES modules and Esbuild/Rolldown.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Instant",
          "note": "Serves source code over native ESM during dev with near-zero cold start."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Fast (Rollup / Rolldown)",
          "note": "Uses Rollup (transitioning to Rust-based Rolldown) for optimized production bundles."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Massive Ecosystem",
          "note": "Universal Rollup/Vite plugin format with huge community adoption."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class DX",
          "note": "Zero config for TypeScript, JSX, CSS Modules, and web workers."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "JS + Go + Rust",
          "note": "Combines Node.js architecture with Esbuild (Go) and Rolldown (Rust)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Standard",
          "note": "Default engine for Nuxt, SvelteKit, Astro, SolidStart, and Vue."
        }
      },
      "tags": [
        "Native ESM",
        "Esbuild",
        "Rolldown",
        "Standard"
      ]
    },
    {
      "id": "webpack",
      "name": "Webpack 5.x",
      "summary": "The battle-tested, highly configurable bundler that powered the modern web era.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Slow",
          "note": "Bundles entire dependency graph before serving dev server."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Moderate",
          "note": "Highly capable tree-shaking and code splitting, but slower build times."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched History",
          "note": "Thousands of loaders and plugins covering every legacy edge case."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Complex",
          "note": "Reputation for lengthy, intricate webpack.config.js boilerplate."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "JavaScript (Node)",
          "note": "Single-threaded Node.js execution limits build throughput."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Legacy Default",
          "note": "Legacy default for Create React App and older enterprise monorepos."
        }
      },
      "tags": [
        "Battle-Tested",
        "Loaders",
        "Module Federation",
        "Legacy"
      ]
    },
    {
      "id": "rspack",
      "name": "Rspack 1.x (ByteDance)",
      "summary": "A high-performance Rust-based bundler designed to be a drop-in replacement for Webpack.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Ultra-Fast",
          "note": "Parallel Rust compilation delivers up to 10x faster HMR than Webpack."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "10x Faster than Webpack",
          "note": "Multi-threaded Rust bundler handles massive enterprise codebases effortlessly."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Webpack Compatible",
          "note": "Compatible with Webpack loader API and plugin architecture."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "note": "Allows incremental migration from existing Webpack configs."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Rust",
          "note": "Built in Rust with high parallel CPU core utilization."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Growing (Rsbuild)",
          "note": "Powers Rsbuild and growing enterprise monorepo migrations."
        }
      },
      "tags": [
        "Rust",
        "Webpack-Drop-In",
        "ByteDance",
        "10x Speed"
      ]
    },
    {
      "id": "turbopack",
      "name": "Turbopack (Vercel)",
      "summary": "An incremental Rust-based bundler optimized as the successor to Webpack for Next.js.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Ultra-Fast",
          "note": "Incremental computation engine only compiles modified functions."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Fast",
          "note": "Rust engine provides high-speed production builds for Next.js App Router."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Next.js Focused",
          "note": "Supports core Webpack loaders via Next.js integration."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Zero Config (Next.js)",
          "note": "Pre-configured inside Next.js via 'next dev --turbo'."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Rust (Turbo Engine)",
          "note": "Built on Turbo function memoization architecture in Rust."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Next.js Native",
          "note": "First-class default bundler for Next.js 15+."
        }
      },
      "tags": [
        "Next.js",
        "Rust",
        "Vercel",
        "Incremental"
      ]
    },
    {
      "id": "esbuild",
      "name": "Esbuild",
      "summary": "An extremely fast JavaScript/TypeScript bundler and minifier written in Go.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Instantaneous",
          "note": "Starts and compiles in milliseconds."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Blazing Fast (Go)",
          "note": "Bundles code 10-100x faster than traditional Node bundlers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Basic",
          "note": "Minimal plugin API; intentionally lacks HMR and complex AST transforms."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Straightforward",
          "note": "Clean CLI and JavaScript API options."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Go",
          "note": "Written in Go with heavy parallel memory structures."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Core Engine",
          "note": "Used under the hood by Vite, AWS SAM, and Phoenix."
        }
      },
      "tags": [
        "Go",
        "Blazing Fast",
        "Library Bundler",
        "Minification"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Vite for new React, Vue, Svelte, or SPA projects.",
    "Evaluate Rspack if migrating a large legacy Webpack codebase with minimal config rewrite.",
    "Use Turbopack when building applications on Next.js 15+.",
    "Use Esbuild for building fast TypeScript backend Node/Bun packages or CLI tools."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Build Tool Decision",
        "description": "Selecting the best bundler for your web project."
      },
      {
        "id": "p1",
        "label": "Modern SPA / Web Application",
        "description": "Building a React, Vue, or Svelte app prioritizing fast HMR and clean DX."
      },
      {
        "id": "p2",
        "label": "Legacy Webpack Migration",
        "description": "Large existing codebase with complex Webpack loaders requiring 10x speedup."
      },
      {
        "id": "p3",
        "label": "Next.js App Router Project",
        "description": "Building full-stack React application with Vercel/Next.js."
      },
      {
        "id": "p4",
        "label": "TypeScript Library / CLI Bundling",
        "description": "Need ultra-fast compilation for npm packages or lambda functions."
      },
      {
        "id": "e1",
        "label": "Vite",
        "description": "Native ESM dev server with Rolldown/Rollup production builds."
      },
      {
        "id": "e2",
        "label": "Rspack",
        "description": "Rust drop-in replacement for Webpack."
      },
      {
        "id": "e3",
        "label": "Turbopack",
        "description": "Incremental Rust bundler tailored for Next.js."
      },
      {
        "id": "e4",
        "label": "Esbuild",
        "description": "Ultra-fast Go bundler and minifier."
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
