import { ComparisonWorkspaceData } from "../../services/llmService";

export const LLM_ORCHESTRATION_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "LLM Orchestration Frameworks: LangChain vs LlamaIndex vs AutoGen vs CrewAI",
  "domainType": "tools",
  "overview": "An AI framework evaluation comparing multi-agent coordination, document indexing/chunking for RAG, prompt abstractions, and production execution efficiency.",
  "recommendedApproach": "Use LlamaIndex for advanced RAG indexing and data connectors; use AutoGen or CrewAI for multi-agent autonomous team coordination; use LangChain for universal LLM chain primitives.",
  "criteria": [
    {
      "id": "c1",
      "label": "Multi-Agent Autonomous Coordination",
      "type": "text",
      "description": "Spawning collaborative multi-agent teams with role delegation and conversations."
    },
    {
      "id": "c2",
      "label": "RAG Document Indexing & Vector Connectors",
      "type": "text",
      "description": "Hierarchical chunking, node parsing, and vector store data connectors."
    },
    {
      "id": "c3",
      "label": "API Abstraction Stability & Code Hygiene",
      "type": "text",
      "description": "API signature stability and avoidance of breaking library refactors."
    },
    {
      "id": "c4",
      "label": "LangGraph / State Machine Graph Execution",
      "type": "text",
      "description": "Cyclic state machine graph flows with human-in-the-loop checkpoints."
    },
    {
      "id": "c5",
      "label": "Language Ecosystem (Python vs TypeScript)",
      "type": "text",
      "description": "Python library maturity alongside native TypeScript/Node SDKs."
    },
    {
      "id": "c6",
      "label": "Observability & Tracing Integration",
      "type": "text",
      "description": "Built-in integration with LangSmith, Phoenix, or OpenTelemetry."
    }
  ],
  "options": [
    {
      "id": "langchain",
      "name": "LangChain & LangGraph",
      "summary": "The pioneer LLM framework providing chains, agents, and stateful cyclic graph execution via LangGraph.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "LangGraph State Machines",
          "note": "LangGraph enables stateful multi-agent workflows with cycles and human approval."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Extensive Connectors",
          "note": "Hundreds of integrations for vector DBs, document loaders, and tools."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "LangChain Core (v0.2+)",
          "note": "Modularized into langchain-core, langchain-community, and partner packages."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class (LangGraph)",
          "note": "Industry standard for complex cyclic agent state machines."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Python & TypeScript",
          "note": "Dual first-class SDKs for Python and JS/TS (@langchain/core)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "LangSmith",
          "note": "Native integration with LangSmith tracing and evaluation."
        }
      },
      "tags": [
        "LangChain",
        "LangGraph",
        "Python",
        "TypeScript",
        "Pioneer"
      ]
    },
    {
      "id": "llamaindex",
      "name": "LlamaIndex",
      "summary": "The data framework for LLM applications focused on context augmentation and advanced RAG.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "LlamaAgents",
          "note": "Multi-agent framework for routing context-aware queries."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unmatched RAG Leader",
          "note": "Pioneered sentence-window retrieval, auto-merging retrievers, and metadata extractors."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Clean Data API",
          "note": "Structured Document -> Node -> Index -> QueryEngine abstractions."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "LlamaWorkflows",
          "note": "Event-driven async workflows for agentic execution."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Python & TypeScript",
          "note": "Strong LlamaIndex.TS library for Node/Next.js."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "LlamaTrace / Arize",
          "note": "Integrates with Phoenix, Arize, and OpenInference."
        }
      },
      "tags": [
        "LlamaIndex",
        "RAG",
        "Vector Connectors",
        "Context Augmentation"
      ]
    },
    {
      "id": "autogen",
      "name": "Microsoft AutoGen",
      "summary": "Framework for developing multi-agent conversation applications that solve tasks collaboratively.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Multi-Agent",
          "note": "Pioneered conversational agent teams (UserProxyAgent, AssistantAgent, GroupChat)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Basic RAG",
          "note": "Integrates with Chroma or Qdrant for agent RAG retrieval."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "AutoGen v0.4 Architecture",
          "note": "Redesigned event-driven asynchronous multi-agent architecture."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "GroupChat Manager",
          "note": "Orchestrates multi-agent speaker selection and group discussions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Python Primary",
          "note": "Primary development in Python with .NET support."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Console & Web UI",
          "note": "Includes AutoGen Studio for visual multi-agent prototyping."
        }
      },
      "tags": [
        "AutoGen",
        "Microsoft",
        "Multi-Agent",
        "GroupChat"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose LlamaIndex for complex RAG document indexing and retrieval pipelines.",
    "Choose LangGraph for stateful cyclic workflows requiring human approval checkpoints.",
    "Choose AutoGen or CrewAI for collaborative multi-agent code generation teams."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "LLM Orchestration Selection",
        "description": "Choosing the LLM framework."
      },
      {
        "id": "p1",
        "label": "Advanced RAG Document Indexing",
        "description": "Need sentence-window retrieval and specialized vector connectors."
      },
      {
        "id": "p2",
        "label": "Stateful Cyclic Agent Workflows",
        "description": "Need LangGraph state machines with human approval checkpoints."
      },
      {
        "id": "p3",
        "label": "Multi-Agent Autonomous Teams",
        "description": "Need conversational multi-agent teams with role delegation."
      },
      {
        "id": "e1",
        "label": "LlamaIndex",
        "description": "RAG data framework."
      },
      {
        "id": "e2",
        "label": "LangChain / LangGraph",
        "description": "Universal LLM chain and stateful graph engine."
      },
      {
        "id": "e3",
        "label": "Microsoft AutoGen",
        "description": "Multi-agent conversational team framework."
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
