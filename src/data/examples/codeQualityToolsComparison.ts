import { ComparisonWorkspaceData } from "../../services/llmService";

export const CODE_QUALITY_TOOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Code Quality & Static Analysis Tools: SonarQube vs Biome vs ESLint + Prettier vs Semgrep",
  "domainType": "tools",
  "overview": "A code quality engineering evaluation comparing Rust-powered fast linters (Biome), security AST static analysis (Semgrep), multi-language enterprise quality gates (SonarQube), and classic JS/TS linters.",
  "recommendedApproach": "Use Biome for 35x faster Rust formatting and linting in JS/TS projects; use Semgrep for custom SAST security rule matching; use SonarQube for enterprise multi-language quality gate compliance.",
  "criteria": [
    {
      "id": "c1",
      "label": "Linting & Formatting Execution Speed",
      "type": "text",
      "description": "Rust-powered native execution vs Node.js AST traversal time."
    },
    {
      "id": "c2",
      "label": "SAST Security Analysis & Vulnerability Detection",
      "type": "text",
      "description": "Custom rule matching against OWASP vulnerabilities, secret leaks, and insecure functions."
    },
    {
      "id": "c3",
      "label": "Multi-Language Enterprise Support",
      "type": "text",
      "description": "Supporting Java, C++, C#, Python, Go, Rust, and TS in a single platform."
    },
    {
      "id": "c4",
      "label": "Quality Gates & Pull Request Decoration",
      "type": "text",
      "description": "Blocking GitHub/GitLab PR merges automatically if code coverage or quality gate fails."
    },
    {
      "id": "c5",
      "label": "Configuration Simplicity & Zero-Config",
      "type": "text",
      "description": "Single biome.json file replacing eslint, prettier, and stylelint configs."
    },
    {
      "id": "c6",
      "label": "Custom Rule Writing (YAML vs AST Plugins)",
      "type": "text",
      "description": "Ease of writing custom security rules for internal team standards."
    }
  ],
  "options": [
    {
      "id": "biome",
      "name": "Biome (v1.x)",
      "summary": "Ultra-fast Rust-based toolchain for web projects replacing ESLint and Prettier.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (35x Faster)",
          "note": "Written in Rust; formats and lints 100,000 lines of code in under 100ms."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Code Quality Rules",
          "note": "Catches common JS/TS bugs, unused variables, and performance issues."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "JS, TS, JSX, JSON, CSS",
          "note": "Focused on web languages (JavaScript, TypeScript, JSX, JSON, CSS)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "CLI CI Check",
          "note": "'biome ci' validates formatting and linting in CI pipelines instantly."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Single biome.json",
          "note": "Single zero-dependency binary and config replacing Prettier, ESLint, and plugins."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Built-in Rules",
          "note": "Comprehensive set of built-in lint rules."
        }
      },
      "tags": [
        "Biome",
        "Rust",
        "35x Faster",
        "ESLint Replacement",
        "Prettier Replacement"
      ]
    },
    {
      "id": "semgrep",
      "name": "Semgrep",
      "summary": "Lightweight, fast static analysis tool for searching code, finding bugs, and enforcing security standards.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast (C / OCaml Engine)",
          "note": "Scans thousands of files per second using lightweight AST matching."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class SAST",
          "note": "Specialized in finding security vulnerabilities, OWASP Top 10, and hardcoded secrets."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "30+ Languages",
          "note": "Supports Python, Java, Go, JS/TS, C++, C#, Ruby, PHP, Rust, and Terraform."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Semgrep App & PR Inline",
          "note": "Comments inline on GitHub Pull Requests for security violations."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Clean YAML Config",
          "note": "Rules written in simple pattern-matching YAML syntax (pattern: $X == $X)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Easiest Custom Rules",
          "note": "Write custom security rules in minutes using syntax that looks like source code."
        }
      },
      "tags": [
        "Semgrep",
        "SAST",
        "Security",
        "YAML Rules",
        "Multi-Language"
      ]
    },
    {
      "id": "sonarqube",
      "name": "SonarQube",
      "summary": "Enterprise static code analysis platform providing code quality gates and technical debt management.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Moderate",
          "note": "Full multi-language scan takes longer; executed during scheduled or PR build pipelines."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High (Security Hotspots)",
          "note": "Detects security vulnerabilities, code smells, and security hotspots."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Enterprise Multi-Language",
          "note": "Supports 30+ languages in unified dashboard."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Gold Standard Quality Gates",
          "note": "Enforces Clean as You Code strategy and blocks deployment if Quality Gate fails."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Server + SonarLint",
          "note": "Requires running SonarQube Server instance and IDE extension."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Extensive Rule Suite",
          "note": "Thousands of built-in SonarWay rules."
        }
      },
      "tags": [
        "SonarQube",
        "Quality Gates",
        "Technical Debt",
        "Enterprise"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Biome in JS/TS projects to replace ESLint and Prettier for 35x faster linting and formatting.",
    "Adopt Semgrep in CI/CD pipelines for custom security AST rule matching and secret scanning.",
    "Use SonarQube for enterprise organization-wide Quality Gate compliance and technical debt tracking."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Code Quality Tool Selection",
        "description": "Choosing the static analysis, formatting, and SAST security scanner."
      },
      {
        "id": "p1",
        "label": "Ultra-Fast Rust Web Formatting & Linting",
        "description": "Want 35x faster linting and formatting in a single binary replacing ESLint & Prettier."
      },
      {
        "id": "p2",
        "label": "Fast SAST Security & Custom Pattern Matching",
        "description": "Need light SAST scanner with intuitive YAML rule syntax for OWASP vulnerabilities."
      },
      {
        "id": "p3",
        "label": "Enterprise Multi-Language Quality Gates",
        "description": "Need organization-wide dashboard tracking technical debt, test coverage, and Quality Gates."
      },
      {
        "id": "e1",
        "label": "Biome",
        "description": "Rust-powered 35x faster linter and formatter."
      },
      {
        "id": "e2",
        "label": "Semgrep",
        "description": "Fast multi-language SAST security analyzer with YAML rules."
      },
      {
        "id": "e3",
        "label": "SonarQube",
        "description": "Enterprise code quality and security gate platform."
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
