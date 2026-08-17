import { ComparisonWorkspaceData } from "../../services/llmService";

export const JS_RUNTIMES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "JavaScript & TypeScript Runtimes: Node.js vs Deno vs Bun",
  "domainType": "tools",
  "overview": "A backend performance evaluation comparing JavaScript runtimes across execution engine (V8 vs JavaScriptCore), native TypeScript support, startup time, npm compatibility, and built-in tooling.",
  "recommendedApproach": "Use Node.js for maximum enterprise stability & legacy package ecosystem; use Bun for blazing fast startup & built-in bundler/test runner; use Deno for web-standard security sandboxing.",
  "criteria": [
    {
      "id": "c1",
      "label": "Cold Start & Execution Engine Speed",
      "type": "text",
      "description": "V8 engine vs WebKit JavaScriptCore (JSC) execution speed and HTTP throughput."
    },
    {
      "id": "c2",
      "label": "Native TypeScript Support",
      "type": "text",
      "description": "Direct execution of .ts files without separate build/compile step."
    },
    {
      "id": "c3",
      "label": "NPM Package Compatibility",
      "type": "text",
      "description": "Support for C++ native node-gyp addons and node_modules resolution."
    },
    {
      "id": "c4",
      "label": "Built-in Toolset (Bundler, Test Runner, Package Manager)",
      "type": "text",
      "description": "All-in-one execution replacing Jest, Vite, npm, and tsc."
    },
    {
      "id": "c5",
      "label": "Security Model & Sandboxing Permissions",
      "type": "text",
      "description": "Default security restrictions (--allow-net, --allow-read flags)."
    },
    {
      "id": "c6",
      "label": "Web Standards APIs (Fetch, WebSockets, WebCrypto)",
      "type": "text",
      "description": "First-class alignment with browser-native Web API standards."
    }
  ],
  "options": [
    {
      "id": "bun",
      "name": "Bun (v1.x)",
      "summary": "Ultra-fast all-in-one JavaScript runtime, bundler, test runner, and package manager written in Zig.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (JavaScriptCore)",
          "note": "Powered by WebKit JavaScriptCore (JSC); starts up to 4x faster than Node.js."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Native Zero-Config",
          "note": "Executes .ts and .tsx files directly with built-in transpiler."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High (> 95% Compatibility)",
          "note": "Implements Node.js APIs (fs, path, http) and fast node_modules resolution."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "All-in-One Replacement",
          "note": "Includes 'bun install' (25x faster), 'bun test' (Jest compatible), and 'bun build'."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Standard",
          "note": "Standard Node-like permission model."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Native Web APIs",
          "note": "First-class fetch, WebSocket, HTMLRewriter, and WebCrypto support."
        }
      },
      "tags": [
        "Bun",
        "Zig",
        "JavaScriptCore",
        "Blazing Fast"
      ]
    },
    {
      "id": "node",
      "name": "Node.js (v22 / v24)",
      "summary": "The industry-standard JavaScript runtime powering enterprise server infrastructure for over a decade.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast (V8 Engine)",
          "note": "Google V8 engine with JIT compilation and libuv async event loop."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Experimental Type Stripping",
          "note": "Node v22.6+ adds experimental type stripping for running TS directly."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% Ubiquitous Standard",
          "note": "Flawless compatibility with all npm packages and native C++ N-API addons."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "External Ecosystem",
          "note": "Relies on npm/pnpm, Vitest/Jest, and Esbuild/TSUP for build pipelines."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Permission Model (Experimental)",
          "note": "Experimental --permission flag for restricted filesystem/net access."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Web Standards",
          "note": "Native global fetch, WebStreams, and EventTarget added in recent versions."
        }
      },
      "tags": [
        "Node.js",
        "V8",
        "Industry Standard",
        "Enterprise"
      ]
    },
    {
      "id": "deno",
      "name": "Deno (v2.x)",
      "summary": "Secure runtime for JavaScript and TypeScript written in Rust from the creator of Node.js.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast (V8 + Rust)",
          "note": "V8 engine wrapped in Tokio Rust async runtime."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "First-Class Native TS",
          "note": "Executes TypeScript directly with zero setup; built-in type checker."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "NPM Parity (Deno 2)",
          "note": "Deno 2 adds seamless npm: package specifiers and node_modules support."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Built-in Tooling",
          "note": "Includes 'deno fmt', 'deno lint', 'deno test', 'deno bench', and 'deno compile'."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Security",
          "note": "Secure by default; requires explicit flags (--allow-read, --allow-net)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% Web Standards",
          "note": "Designed from day one to match browser Web APIs."
        }
      },
      "tags": [
        "Deno",
        "Rust",
        "Secure",
        "Deno 2"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Bun for local development, fast CLI utilities, and high-performance serverless endpoints.",
    "Use Node.js for enterprise production services requiring 100% legacy npm/C++ addon compatibility.",
    "Use Deno for security-sensitive serverless edge functions requiring sandboxed permission flags.",
    "Benchmark HTTP throughput using wrk or autocannon on your target API endpoints."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "JS Runtime Selection",
        "description": "Choosing the server-side JavaScript/TypeScript execution runtime."
      },
      {
        "id": "p1",
        "label": "Ultra-Fast Execution & All-In-One Tooling",
        "description": "Need instant startup, built-in fast package manager, bundler, and test runner in Zig."
      },
      {
        "id": "p2",
        "label": "Enterprise Ubiquitous Standard",
        "description": "Need 100% guaranteed compatibility with legacy npm packages and C++ N-API modules."
      },
      {
        "id": "p3",
        "label": "Sandboxed Security & Web Standards",
        "description": "Need explicit permission flags (--allow-net) and native Web APIs in Rust."
      },
      {
        "id": "e1",
        "label": "Bun",
        "description": "Zig-powered runtime using JavaScriptCore with built-in bundler & test runner."
      },
      {
        "id": "e2",
        "label": "Node.js",
        "description": "Industry-standard V8 runtime powering enterprise backend infrastructure."
      },
      {
        "id": "e3",
        "label": "Deno",
        "description": "Secure-by-default Rust runtime with first-class TypeScript support."
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
