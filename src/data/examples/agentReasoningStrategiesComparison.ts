import { ComparisonWorkspaceData } from "../../services/llmService";

export const AGENT_REASONING_STRATEGIES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "AI Agent Reasoning Strategies: ReAct vs Chain-of-Thought (CoT) vs Tree-of-Thoughts (ToT)",
  "domainType": "concepts",
  "overview": "An AI agent architecture comparison evaluating reasoning loop patterns: step-by-step reasoning (CoT), interleaved reasoning + tool execution (ReAct), and tree exploration with backtracking (ToT).",
  "recommendedApproach": "Use ReAct (Reasoning + Acting) for tool-using autonomous AI agents; use Chain-of-Thought (CoT) for complex math & logic problems; use Tree-of-Thoughts (ToT) for strategic game planning.",
  "criteria": [
    {
      "id": "c1",
      "label": "Tool Calling Interleaving (Thought -> Action -> Observation)",
      "type": "text",
      "description": "Interleaving reasoning thoughts directly with external API tool execution."
    },
    {
      "id": "c2",
      "label": "Tree Exploration & Backtracking (Tree-Search)",
      "type": "text",
      "description": "Exploring multiple reasoning branches (BFS/DFS) and evaluating promising paths."
    },
    {
      "id": "c3",
      "label": "Token Usage & Cost Scaling",
      "type": "text",
      "description": "API token consumption per solved problem instance."
    },
    {
      "id": "c4",
      "label": "Self-Correction & Error Recovery",
      "type": "text",
      "description": "Detecting tool execution errors and adjusting reasoning steps automatically."
    },
    {
      "id": "c5",
      "label": "Mathematical & Logical Accuracy",
      "type": "text",
      "description": "Improving multi-step arithmetic and symbolic logic accuracy."
    },
    {
      "id": "c6",
      "label": "Ease of Implementation in AI Frameworks",
      "type": "text",
      "description": "Native support in LangGraph, AutoGen, and CrewAI."
    }
  ],
  "options": [
    {
      "id": "react-pattern",
      "name": "ReAct (Reasoning + Acting)",
      "summary": "The foundational AI agent pattern interleaving reasoning thoughts with action tool calls.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Thought/Action/Obs)",
          "note": "Iterates through Thought -> Action -> Observation loop until final answer is reached."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Linear Trajectory",
          "note": "Executes linear reasoning steps sequentially."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Moderate",
          "note": "Efficient token usage compared to tree exploration."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "High",
          "note": "Inspects tool observation outputs; retries with alternative actions on error."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High (with Tools)",
          "note": "Leverages Python REPL or calculator tools for exact math."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal Standard",
          "note": "Default pattern powering LangChain agents and AutoGen."
        }
      },
      "tags": [
        "ReAct",
        "Tool Calling",
        "Agent Pattern",
        "Thought-Action-Obs",
        "Standard"
      ]
    },
    {
      "id": "cot",
      "name": "Chain-of-Thought (CoT)",
      "summary": "Prompting strategy encouraging LLMs to generate intermediate reasoning steps before answering.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pure Generation",
          "note": "Generates step-by-step reasoning tokens directly before producing the final response."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Linear Chain",
          "note": "Single linear chain of reasoning thoughts."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Low",
          "note": "Minimal token overhead over simple prompt generation."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Self-Consistency (CoT-SC)",
          "note": "Self-consistency samples multiple CoT chains and takes majority vote."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Pioneered Math Accuracy",
          "note": "Massively improves multi-step arithmetic, logic puzzles, and reasoning."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Easiest ('Think Step by Step')",
          "note": "Simple prompt addition ('Let's think step by step')."
        }
      },
      "tags": [
        "Chain-of-Thought",
        "CoT",
        "Prompting",
        "Math Logic"
      ]
    },
    {
      "id": "tot",
      "name": "Tree-of-Thoughts (ToT)",
      "summary": "Framework enabling LLMs to explore multiple reasoning paths using tree search algorithms (BFS/DFS).",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Tree Node Evaluation",
          "note": "Evaluates candidate thoughts at each tree node before proceeding."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (BFS/DFS Search)",
          "note": "Uses Breadth-First or Depth-First search to explore multiple reasoning paths and backtrack from dead ends."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High Token Cost",
          "note": "Generates and evaluates dozens of candidate thought branches per step."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Backtracking",
          "note": "Backtracks automatically when candidate branch score is low."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Complex Planning Leader",
          "note": "Outperforms CoT on Game of 24, Creative Writing, and Crosswords."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Requires Search Controller",
          "note": "Requires external tree-search controller code."
        }
      },
      "tags": [
        "Tree-of-Thoughts",
        "ToT",
        "Tree Search",
        "Backtracking",
        "Planning"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use ReAct (Thought -> Action -> Observation) for autonomous tool-using AI agents.",
    "Use Chain-of-Thought (CoT) for complex multi-step mathematical reasoning.",
    "Use Tree-of-Thoughts (ToT) for strategic game planning requiring path exploration and backtracking."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Reasoning Strategy Selection",
        "description": "Choosing the AI agent reasoning architecture."
      },
      {
        "id": "p1",
        "label": "Interleaved Tool Calling & API Execution (ReAct)",
        "description": "Need Thought -> Action -> Observation loops for executing API tools autonomously."
      },
      {
        "id": "p2",
        "label": "Linear Step-by-Step Problem Solving (CoT)",
        "description": "Need intermediate reasoning steps for complex arithmetic and logic prompts."
      },
      {
        "id": "p3",
        "label": "Tree Search Exploration & Backtracking (ToT)",
        "description": "Need BFS/DFS search over multiple candidate reasoning branches for strategic planning."
      },
      {
        "id": "e1",
        "label": "ReAct Pattern",
        "description": "Thought -> Action -> Observation tool calling agent loop."
      },
      {
        "id": "e2",
        "label": "Chain-of-Thought (CoT)",
        "description": "Linear step-by-step reasoning prompt strategy."
      },
      {
        "id": "e3",
        "label": "Tree-of-Thoughts (ToT)",
        "description": "Tree-search exploration with backtracking."
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
