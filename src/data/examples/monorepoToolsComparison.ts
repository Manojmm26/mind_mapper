import { ComparisonWorkspaceData } from "../../services/llmService";

export const MONOREPO_TOOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Monorepo Build Tools: Turborepo vs Nx vs Lerna vs pnpm Workspaces vs Bazel",
  "domainType": "tools",
  "overview": "A build engineering comparison evaluating monorepo management tools across remote caching, dependency graph generation, incremental task execution, and monorepo scaling.",
  "recommendedApproach": "Use Turborepo for lightweight, blazing fast JS/TS monorepos; use Nx for enterprise full-stack dependency graph visualization; use Bazel for multi-language (Go, C++, Java, JS) enterprise builds.",
  "criteria": [
    {
      "id": "c1",
      "label": "Remote Build Caching & Artifact Reuse",
      "type": "text",
      "description": "Reusing build, lint, and test artifacts across developer machines and CI pipelines."
    },
    {
      "id": "c2",
      "label": "Dependency Graph Analysis & Affected Execution",
      "type": "text",
      "description": "Only running tasks on packages affected by specific pull request changes."
    },
    {
      "id": "c3",
      "label": "Multi-Language Support (Non-JS)",
      "type": "text",
      "description": "Handling Go, Rust, Java, Python alongside JavaScript/TypeScript packages."
    },
    {
      "id": "c4",
      "label": "Configuration Simplicity & Onboarding",
      "type": "text",
      "description": "Ease of adding to existing pnpm/npm workspace projects."
    },
    {
      "id": "c5",
      "label": "Task Scheduling & CPU Core Parallelism",
      "type": "text",
      "description": "Topological task execution optimization across multi-core CPU runners."
    },
    {
      "id": "c6",
      "label": "Monorepo Ecosystem Integration",
      "type": "text",
      "description": "Integrations with Vercel, GitHub Actions, Nx Cloud, and package managers."
    }
  ],
  "options": [
    {
      "id": "turborepo",
      "name": "Turborepo (Vercel)",
      "summary": "High-performance build system for JavaScript and TypeScript monorepos written in Go.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Vercel Remote Cache)",
          "note": "Shares build cache artifacts globally via Vercel or custom S3 backends."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "--filter flag calculates package dependency graph to execute only changed apps."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "JS / TS Focused",
          "note": "Purpose-built for modern JavaScript/TypeScript ecosystems."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Easiest Onboarding",
          "note": "Single turbo.json file defines pipeline tasks over standard package.json scripts."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Parallel Go Engine",
          "note": "Schedules tasks topologically to saturate available CPU cores."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Native Vercel Integration",
          "note": "Automatic zero-config remote caching inside Vercel deployments."
        }
      },
      "tags": [
        "Turborepo",
        "Vercel",
        "Go Engine",
        "Simple"
      ]
    },
    {
      "id": "nx",
      "name": "Nx",
      "summary": "Powerful, extensible build system featuring dependency graph visualization and code generators.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Outstanding (Nx Cloud)",
          "note": "Nx Cloud provides distributed task execution and remote caching."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Industry Best",
          "note": "Fine-grained AST project graph tracks file-level code dependencies."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Extensible Plugins",
          "note": "Official and community plugins for Go, Rust, Python, and .NET."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Moderate",
          "note": "Rich features require adopting nx.json and generator abstractions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Distributed Task Execution",
          "note": "Distributes heavy build jobs automatically across cloud agent nodes."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Massive Ecosystem",
          "note": "Interactive visual graph viewer (`nx graph`) and scaffolding generators."
        }
      },
      "tags": [
        "Nx",
        "Enterprise",
        "Graph Visualization",
        "Nx Cloud"
      ]
    },
    {
      "id": "bazel",
      "name": "Google Bazel",
      "summary": "Google's multi-language, hermetic build system designed for massive multi-gigabyte repositories.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Hermetic Reproducibility",
          "note": "100% deterministic build artifacts guaranteed via sandboxed isolation."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Exact Target Graph",
          "note": "BUILD files specify exact inputs/outputs for every single compilation target."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Universal Multi-Language",
          "note": "Built to compile Java, C++, Python, Go, Rust, and Web code simultaneously."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Extremely Steep",
          "note": "Requires dedicated build engineering team to write Starlark scripts."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Unmatched Scaling",
          "note": "Handles millions of lines of code across thousands of engineers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Google Infrastructure",
          "note": "Used by Google, Uber, and Twitter for mega-monorepos."
        }
      },
      "tags": [
        "Bazel",
        "Google",
        "Multi-Language",
        "Hermetic"
      ]
    },
    {
      "id": "pnpm-workspaces",
      "name": "pnpm Workspaces",
      "summary": "Fast, disk-space efficient package manager providing native monorepo workspace linking.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Global Content Store",
          "note": "Hard-links packages from single global content-addressable store on disk."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Basic (--filter)",
          "note": "Filters workspace packages by git commit diffs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "JS / TS Only",
          "note": "Standard Node.js package manager workspace implementation."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Zero Config",
          "note": "Simple pnpm-workspace.yaml file defines package directories."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Fast Installation",
          "note": "Parallel dependency installation up to 3x faster than npm."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal Standard",
          "note": "Combines seamlessly with Turborepo or Nx for task execution."
        }
      },
      "tags": [
        "pnpm",
        "Package Manager",
        "Workspaces",
        "Disk Efficient"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use pnpm Workspaces as the foundational package manager for all JS/TS monorepos.",
    "Add Turborepo on top of pnpm Workspaces for simple, ultra-fast task caching.",
    "Adopt Nx if you need deep dependency graph visualization and automated code scaffolding.",
    "Consider Bazel only if managing multi-language monorepos (Go + C++ + Java + TS) with a dedicated build team."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Monorepo Strategy Decision",
        "description": "Selecting the build toolchain for repository management."
      },
      {
        "id": "p1",
        "label": "Fast & Simple JS/TS Monorepo",
        "description": "Need easy setup, remote caching, and high speed for React/Node projects."
      },
      {
        "id": "p2",
        "label": "Full-Stack Enterprise & Scaffolding",
        "description": "Need dependency graph visualization, code generators, and distributed CI tasks."
      },
      {
        "id": "p3",
        "label": "Multi-Language Mega-Monorepo",
        "description": "Building Go, C++, Java, and Web projects together with strict build determinism."
      },
      {
        "id": "p4",
        "label": "Basic Package Linking Only",
        "description": "Only need fast disk-efficient dependency symlinking between packages."
      },
      {
        "id": "e1",
        "label": "Turborepo",
        "description": "Go-powered fast task scheduler with Vercel Remote Cache."
      },
      {
        "id": "e2",
        "label": "Nx",
        "description": "Rich build framework with interactive graph inspection and generators."
      },
      {
        "id": "e3",
        "label": "Google Bazel",
        "description": "Hermetic multi-language build system for massive enterprise repos."
      },
      {
        "id": "e4",
        "label": "pnpm Workspaces",
        "description": "Fast content-addressable package manager workspace tool."
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
