import { ComparisonWorkspaceData } from "../../services/llmService";

export const AUTONOMOUS_CODING_AGENTS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Autonomous AI Coding Agents: SWE-agent vs OpenDevin (All-Hands AI) vs Aider",
  "domainType": "tools",
  "overview": "An autonomous AI software engineering comparison evaluating agentic terminal execution, repository-wide AST indexing, benchmark issue solving (SWE-bench), and human-in-the-loop pair programming.",
  "recommendedApproach": "Use Aider for terminal-based Git pair-programming in existing repositories; use OpenDevin / SWE-agent for autonomous GitHub issue resolution.",
  "criteria": [
    {
      "id": "c1",
      "label": "SWE-bench Verified Resolution Rate (%)",
      "type": "text",
      "description": "Percentage of real-world GitHub issues solved autonomously on SWE-bench."
    },
    {
      "id": "c2",
      "label": "Terminal Execution & Shell Sandbox",
      "type": "text",
      "description": "Executing terminal bash commands, running unit tests, and inspecting linter errors."
    },
    {
      "id": "c3",
      "label": "Repository-Wide AST Map Indexing",
      "type": "text",
      "description": "Building tree-sitter AST maps to understand cross-file dependencies."
    },
    {
      "id": "c4",
      "label": "Git Integration & Auto-Commits",
      "type": "text",
      "description": "Creating concise Git commits automatically for each refactored feature."
    },
    {
      "id": "c5",
      "label": "Human-in-the-Loop Interactivity",
      "type": "text",
      "description": "Interactive terminal pairing vs background batch task execution."
    },
    {
      "id": "c6",
      "label": "Open Source & Custom Model Support",
      "type": "text",
      "description": "100% open-source code supporting custom LLM backends (Ollama/vLLM)."
    }
  ],
  "options": [
    {
      "id": "aider",
      "name": "Aider",
      "summary": "The premier command-line AI pair programming tool that edits code in your local Git repository.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Top Tier Leader",
          "note": "Ranks among the highest scoring benchmark solutions on SWE-bench Lite."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Interactive Shell",
          "note": "Runs git, pytest, and linters automatically to fix errors self-sufficiently."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (Repo Map)",
          "note": "Uses Tree-Sitter to build a concise repository map of all classes and signatures."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class Git Commits",
          "note": "Automatically creates clean Git commits with sensible commit messages for every edit."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Terminal Pairing",
          "note": "Designed specifically for developer CLI pair programming."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% Open Source",
          "note": "Supports Claude 3.5 Sonnet, GPT-4o, DeepSeek R1, and Ollama."
        }
      },
      "tags": [
        "Aider",
        "CLI",
        "Repo Map",
        "Tree-Sitter",
        "Git Autocommit"
      ]
    },
    {
      "id": "swe-agent",
      "name": "SWE-agent (Princeton)",
      "summary": "Open-source agent system created by Princeton University that turns LLMs into software engineers.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pioneered SWE-bench",
          "note": "Created the Agent-Computer Interface (ACI) benchmark standard."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Docker Sandbox ACI",
          "note": "Runs inside isolated Docker sandbox containers executing custom shell commands."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Search & Edit Tools",
          "note": "Custom file viewing and line editing tools."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Git PR Generation",
          "note": "Outputs patch files and GitHub pull requests."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Batch Autonomous",
          "note": "Designed for autonomous background batch execution."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% Open Source",
          "note": "Open-source research project."
        }
      },
      "tags": [
        "SWE-agent",
        "Princeton",
        "Docker Sandbox",
        "Autonomous",
        "SWE-bench"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Aider in the terminal for daily interactive pair programming in existing repos.",
    "Adopt SWE-agent or OpenDevin in Docker sandboxes for automated background GitHub issue resolution.",
    "Leverage Tree-Sitter repository maps to reduce context token usage on large codebases."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Coding Agent Selection",
        "description": "Choosing the autonomous AI coding framework."
      },
      {
        "id": "p1",
        "label": "Interactive CLI Pair Programming & Git Autocommits (Aider)",
        "description": "Need terminal pair programming with Tree-Sitter repo maps and auto-commit messages."
      },
      {
        "id": "p2",
        "label": "Autonomous Background Docker Batch Execution (SWE-agent)",
        "description": "Need isolated Docker sandbox container executing shell commands to solve GitHub issues autonomously."
      },
      {
        "id": "e1",
        "label": "Aider",
        "description": "Premier CLI AI pair programming tool."
      },
      {
        "id": "e2",
        "label": "SWE-agent",
        "description": "Princeton autonomous software engineering agent."
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
