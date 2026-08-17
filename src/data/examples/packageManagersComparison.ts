import { ComparisonWorkspaceData } from "../../services/llmService";

export const PACKAGE_MANAGERS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "JavaScript Package Managers: pnpm vs Bun Install vs npm vs Yarn Berry (v4)",
  "domainType": "tools",
  "overview": "A package management comparison evaluating hard-linked content-addressable store (pnpm), Zig native speed (Bun), Zero-installs (Yarn Berry), and disk space efficiency.",
  "recommendedApproach": "Use pnpm for high-speed monorepos saving up to 70% disk space; use Bun Install for maximum raw speed; use npm for default compatibility.",
  "criteria": [
    {
      "id": "c1",
      "label": "Installation Speed & Cold Cache Performance",
      "type": "text",
      "description": "Time required to install package dependencies from cold cache."
    },
    {
      "id": "c2",
      "label": "Disk Space Efficiency (Hard Links / Symlinks)",
      "type": "text",
      "description": "Global content-addressable store sharing files across monorepos."
    },
    {
      "id": "c3",
      "label": "Monorepo Workspace Filtering & Isolation",
      "type": "text",
      "description": "Preventing phantom dependency access (importing unlisted packages)."
    },
    {
      "id": "c4",
      "label": "Strict Dependency Resolution",
      "type": "text",
      "description": "Strict non-flat node_modules structure enforcing valid package declarations."
    },
    {
      "id": "c5",
      "label": "Lockfile Integrity & Catalog Protocol",
      "type": "text",
      "description": "pnpm catalog: protocol for managing monorepo dependency versions centrally."
    },
    {
      "id": "c6",
      "label": "Universal Ecosystem Compatibility",
      "type": "text",
      "description": "100% compatibility with all build scripts and native C++ node-gyp packages."
    }
  ],
  "options": [
    {
      "id": "pnpm",
      "name": "pnpm (v9+)",
      "summary": "Fast, disk space efficient package manager using a content-addressable store and symlinked node_modules.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast (up to 3x faster than npm)",
          "note": "Parallel dependency fetching and hard-link creation."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Content-Addressable)",
          "note": "Stores files once in a global content-addressable store; hard-links files into project node_modules, saving gigabytes of disk space."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class Monorepo Support",
          "note": "Native workspace filtering (pnpm --filter) and catalog: protocol for central monorepo version management."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Strict Symlinked Layout",
          "note": "Eliminates phantom dependencies by creating a non-flat symlinked node_modules structure."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "pnpm-lock.yaml",
          "note": "Deterministic, human-readable lockfile."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Industry Monorepo Standard",
          "note": "Adopted by Vue, Next.js, Vite, Turborepo, and major open-source projects."
        }
      },
      "tags": [
        "pnpm",
        "Content-Addressable",
        "Monorepo",
        "Disk-Efficient",
        "Strict"
      ]
    },
    {
      "id": "bun-install",
      "name": "Bun Install (bunpm)",
      "summary": "Ultra-fast binary package manager written in Zig designed to replace npm install.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (25x Faster)",
          "note": "Written in Zig; parallel system calls install packages up to 25x faster than npm."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Global Cache",
          "note": "Global package cache in ~/.bun/install/cache."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Workspaces Support",
          "note": "Supports package.json workspaces."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Flat node_modules",
          "note": "Standard flat node_modules layout."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "bun.lock (Binary/Text)",
          "note": "Ultra-fast binary lockfile format (bun.lockb) and text lockfile."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High Compatibility",
          "note": "Compatible with npm registry packages."
        }
      },
      "tags": [
        "Bun Install",
        "Zig Engine",
        "25x Faster",
        "Ultra-Fast"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt pnpm for JavaScript/TypeScript monorepos to eliminate phantom dependencies and save disk space.",
    "Use Bun Install for ultra-fast local package installation in CI/CD build scripts.",
    "Use pnpm catalogs (catalog: protocol) to standardize package versions across monorepo packages."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Package Manager Selection",
        "description": "Choosing the JavaScript package manager."
      },
      {
        "id": "p1",
        "label": "Disk Space Efficiency & Monorepo Isolation (pnpm)",
        "description": "Need global content-addressable store with hard-links and strict symlinked node_modules."
      },
      {
        "id": "p2",
        "label": "Ultra-Fast 25x Installation Speed in Zig (Bun)",
        "description": "Need maximum raw installation speed for local dev and CI pipelines."
      },
      {
        "id": "e1",
        "label": "pnpm",
        "description": "Content-addressable monorepo package manager."
      },
      {
        "id": "e2",
        "label": "Bun Install",
        "description": "Zig-powered 25x faster package manager."
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
