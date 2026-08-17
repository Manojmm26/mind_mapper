import { ComparisonWorkspaceData } from "../../services/llmService";

export const AI_CODE_ASSISTANTS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "AI Coding Assistants & Environments: GitHub Copilot vs Cursor vs Antigravity vs Tabnine vs Claude Code",
  "domainType": "tools",
  "overview": "A comparative evaluation of AI-assisted coding tools analyzing codebase indexing, multi-file edits, agentic reasoning, privacy, and IDE integration.",
  "recommendedApproach": "Use Cursor or Antigravity for full-codebase agentic pair programming and multi-file refactoring; use GitHub Copilot for seamless inline tab-completion across standard IDEs.",
  "criteria": [
    {
      "id": "c1",
      "label": "Codebase Context & Semantic Indexing",
      "type": "text",
      "description": "Indexing local AST, embeddings, and workspace symbol graphs for full-repo awareness."
    },
    {
      "id": "c2",
      "label": "Multi-File Editing & Agentic Refactoring",
      "type": "text",
      "description": "Ability to plan, create, and modify multiple files across directory trees autonomously."
    },
    {
      "id": "c3",
      "label": "Inline Tab Completion Speed",
      "type": "text",
      "description": "Sub-100ms real-time ghost text auto-completion speed while typing."
    },
    {
      "id": "c4",
      "label": "IDE Integration & Customization",
      "type": "text",
      "description": "Native IDE fork vs extension model (VS Code, JetBrains, Neovim, CLI)."
    },
    {
      "id": "c5",
      "label": "Model Choice & Custom LLM Endpoints",
      "type": "text",
      "description": "Flexibility to select Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, or local Ollama."
    },
    {
      "id": "c6",
      "label": "Enterprise Security & Zero Data Retention",
      "type": "text",
      "description": "Guarantees that private code is never trained on or retained by third parties."
    }
  ],
  "options": [
    {
      "id": "cursor",
      "name": "Cursor (Anysphere)",
      "summary": "An AI-first VS Code fork offering deep codebase context, Composer multi-file editing, and instant tab prediction.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (@Codebase)",
          "note": "Local embedding index supports @files, @folders, and repository semantic search."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Composer Agentic Mode",
          "note": "Composer multi-file edit window creates and modifies codebase files autonomously."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Instant (Cursor Tab)",
          "note": "Custom fine-tuned speculative model predicts next edits astonishingly fast."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "VS Code Fork",
          "note": "Forked directly from VS Code; imports all extensions and themes instantly."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Multi-Model Choice",
          "note": "Seamlessly switch between Claude 3.5 Sonnet, GPT-4o, and Gemini Pro."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Privacy Mode",
          "note": "Privacy mode prevents any code retention on remote servers."
        }
      },
      "tags": [
        "AI-IDE",
        "Composer",
        "Claude 3.5",
        "Multi-File"
      ]
    },
    {
      "id": "github-copilot",
      "name": "GitHub Copilot",
      "summary": "The pioneer AI pair programmer deeply integrated into GitHub, VS Code, and JetBrains IDEs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very Good (@workspace)",
          "note": "Uses GitHub repository graph and open tabs context."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Copilot Edits (v1.95+)",
          "note": "Copilot Edits mode allows multi-file session changes inside VS Code."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Industry Benchmark",
          "note": "Sub-second ghost text inline code completion."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Universal Extension",
          "note": "Works across VS Code, Visual Studio, JetBrains IDEs, and Neovim."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "GPT-4o & Claude Option",
          "note": "Supports OpenAI models and Claude 3.5 Sonnet inside Copilot Chat."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Shield",
          "note": "GitHub Copilot Enterprise guarantees copyright indemnity and zero training retention."
        }
      },
      "tags": [
        "GitHub",
        "Extension",
        "Universal",
        "Enterprise"
      ]
    },
    {
      "id": "antigravity",
      "name": "Google Antigravity (AGY)",
      "summary": "Advanced agentic coding platform with deep subagent orchestrations, artifact systems, and CLI tools.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Full Codebase Vector Index",
          "note": "Deep integration with local ripgrep, AST tools, and transcript logs."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Autonomous Subagents",
          "note": "Spawns concurrent subagents to research, execute commands, and edit files."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "N/A (Agentic Loop)",
          "note": "Designed around agentic task execution and artifact generation rather than autocomplete."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "CLI & IDE Extension",
          "note": "Available via agy CLI, sidecar, and AGY IDE integration."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Gemini & DeepMind Models",
          "note": "Powered by Gemini 1.5 Pro and DeepMind reasoning models."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Google Enterprise Compliance",
          "note": "Rigorous enterprise data protection and workspace isolation."
        }
      },
      "tags": [
        "Antigravity",
        "Subagents",
        "DeepMind",
        "Agentic"
      ]
    },
    {
      "id": "tabnine",
      "name": "Tabnine",
      "summary": "Privacy-focused AI code assistant with self-hosted and zero-data-retention guarantees.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Local Context",
          "note": "Indexes local repository context with strict privacy boundaries."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Basic",
          "note": "Focused primarily on inline code completions and targeted chat edits."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Fast",
          "note": "Lightweight local or VPC-hosted models deliver low latency."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Broad IDE Support",
          "note": "Extensions for VS Code, JetBrains, Eclipse, and Android Studio."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Custom & Air-Gapped",
          "note": "Supports custom fine-tuned local models and air-gapped deployments."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class Privacy",
          "note": "Guarantees code is never stored, trained on, or exposed to public clouds."
        }
      },
      "tags": [
        "Privacy",
        "Air-Gapped",
        "Self-Hosted",
        "Security"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Try Cursor or Antigravity for complex multi-file feature additions and full repository refactoring.",
    "Use GitHub Copilot if your organization requires universal JetBrains/VS Code extension support and corporate indemnity.",
    "Evaluate Tabnine for strict air-gapped or self-hosted enterprise compliance environments.",
    "Configure project-specific system instructions (.cursorrules / guidelines) to enforce coding standards."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "AI Code Assistant Selection",
        "description": "Choosing the right AI-powered coding tool for developers."
      },
      {
        "id": "p1",
        "label": "Agentic Multi-File Refactoring & AI IDE",
        "description": "Want an AI-first IDE that edits multiple files across the repository."
      },
      {
        "id": "p2",
        "label": "Universal JetBrains / VS Code Extension",
        "description": "Need simple inline tab-completion across existing IDE workflows."
      },
      {
        "id": "p3",
        "label": "Autonomous Task Execution & Subagents",
        "description": "Need background subagents running commands, tests, and deep research."
      },
      {
        "id": "p4",
        "label": "Air-Gapped Strict Privacy Compliance",
        "description": "Code must never leave private infrastructure or touch public SaaS APIs."
      },
      {
        "id": "e1",
        "label": "Cursor",
        "description": "AI-first VS Code fork with Composer multi-file editing."
      },
      {
        "id": "e2",
        "label": "GitHub Copilot",
        "description": "Standard extension pair programmer integrated into GitHub."
      },
      {
        "id": "e3",
        "label": "Google Antigravity (AGY)",
        "description": "Agentic platform with subagents, CLI, and artifact tools."
      },
      {
        "id": "e4",
        "label": "Tabnine",
        "description": "Privacy-first self-hosted & air-gapped AI coding solution."
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
