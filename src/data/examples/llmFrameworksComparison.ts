import { ComparisonWorkspaceData } from "../../services/llmService";

export const LLM_FRAMEWORKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "LLM Orchestration & Agent Frameworks: LangChain vs LlamaIndex vs AutoGen vs CrewAI vs Semantic Kernel",
  "domainType": "tools",
  "overview": "A rigorous comparison of top LLM orchestration frameworks, evaluating multi-agent orchestration, RAG retrieval quality, production monitoring, tool use, and ecosystem maturity.",
  "recommendedApproach": "Use LlamaIndex for complex RAG & knowledge retrieval; use AutoGen or CrewAI for multi-agent autonomous collaboration; use LangChain for general chains and broad integration support.",
  "criteria": [
    {
      "id": "c1",
      "label": "Multi-Agent Orchestration & Communication",
      "type": "text",
      "description": "Support for autonomous agent loops, team delegation, and message passing."
    },
    {
      "id": "c2",
      "label": "RAG & Indexing Capabilities",
      "type": "text",
      "description": "Sophistication of document parsing, chunking, hybrid search, and RAG pipelines."
    },
    {
      "id": "c3",
      "label": "Tool Calling & Function Execution",
      "type": "text",
      "description": "Ease of binding custom tools, APIs, and sandboxed code execution."
    },
    {
      "id": "c4",
      "label": "Production Observability & Tracing",
      "type": "text",
      "description": "Integration with tracing platforms (LangSmith, Phoenix, OpenTelemetry)."
    },
    {
      "id": "c5",
      "label": "Language Support & Developer Experience",
      "type": "text",
      "description": "Python, TypeScript, and .NET SDK parity and API stability."
    },
    {
      "id": "c6",
      "label": "Latency & Overhead",
      "type": "text",
      "description": "Internal abstraction overhead and impact on time-to-first-token."
    }
  ],
  "options": [
    {
      "id": "langchain",
      "name": "LangChain",
      "summary": "The pioneer and largest ecosystem for chaining LLMs, prompts, memories, and vector stores.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very Good (LangGraph)",
          "note": "LangGraph enables stateful multi-agent graphs with cycles."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Extensive",
          "note": "Hundreds of loaders and splitters, though abstractions can be complex."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "First-class support for OpenAI, Anthropic, and custom function calling."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Industry Standard",
          "note": "Native integration with LangSmith for full prompt/execution tracing."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Python & TS",
          "note": "Dual Python and JS/TS packages; API churn can require maintenance."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Moderate",
          "note": "Deep abstraction layers add slight processing overhead."
        }
      },
      "tags": [
        "Chains",
        "LangGraph",
        "LangSmith",
        "Ecosystem"
      ]
    },
    {
      "id": "llamaindex",
      "name": "LlamaIndex",
      "summary": "The premier framework optimized for data ingestion, indexing, and advanced RAG architectures.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Good (Workflows)",
          "note": "Event-driven Workflows support agentic loops and sub-agents."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class",
          "note": "Advanced node parsing, hierarchical indexing, router retrievers, and reranking."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "LlamaHub provides 100+ connectors and tool abstractions."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Excellent",
          "note": "Native integrations with Arize Phoenix, LlamaTrace, and OpenInference."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Python & TS",
          "note": "Python-first with strong LlamaIndex.TS for TypeScript/Node."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low",
          "note": "Focused data structures minimize framework overhead."
        }
      },
      "tags": [
        "RAG",
        "Data Indexing",
        "Retrieval",
        "LlamaHub"
      ]
    },
    {
      "id": "autogen",
      "name": "Microsoft AutoGen",
      "summary": "Multi-agent conversation framework designed for complex collaborative AI workflows.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Outstanding",
          "note": "Pioneered multi-agent conversable agent conversations and group chats."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Basic",
          "note": "Relies on external RAG libraries for advanced vector search."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "Built-in Docker sandboxing for safe code execution and tool calls."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "note": "Supports OpenTelemetry and custom logging handlers."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Python (.NET/v0.4)",
          "note": "v0.4 rewrite introduces clean asynchronous Python and .NET APIs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low",
          "note": "Lightweight event loop with direct LLM calls."
        }
      },
      "tags": [
        "Multi-Agent",
        "Group Chat",
        "Code Execution",
        "Microsoft"
      ]
    },
    {
      "id": "crewai",
      "name": "CrewAI",
      "summary": "Role-playing, task-oriented multi-agent framework built for pragmatic production automation.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Excellent",
          "note": "Intuitive Agent, Task, and Crew abstractions with sequential/hierarchical processes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good",
          "note": "Built-in memory (short-term, long-term, entity memory) and basic RAG tools."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "Easily decorates Python functions as agent tools."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Very Good",
          "note": "Integrates with AgentOps and LangSmith for step-by-step tracing."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Python-focused",
          "note": "Clean, highly readable Python API with rapid developer velocity."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low",
          "note": "Lightweight orchestration layer on top of LangChain/LiteLLM."
        }
      },
      "tags": [
        "Role-Playing",
        "Task Automation",
        "Crews",
        "AgentOps"
      ]
    },
    {
      "id": "semantic-kernel",
      "name": "Semantic Kernel (Microsoft)",
      "summary": "Enterprise-grade SDK integrating LLM AI services with conventional programming languages.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very Good",
          "note": "Agent Framework supports chat completion and open AI assistants."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good",
          "note": "Memory connectors and vector store abstractions across C#, Python, Java."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "Native strongly-typed native plugin functions and auto-function calling."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Enterprise Grade",
          "note": "Built-in OpenTelemetry metrics and Azure Application Insights."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "C#, Python, Java",
          "note": "First-class C#/.NET support alongside Python and Java."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Minimal",
          "note": "High-performance compiled SDKs with negligible latency overhead."
        }
      },
      "tags": [
        "Enterprise",
        ".NET / C#",
        "Plugins",
        "OpenTelemetry"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Identify primary workload type: Heavy Document RAG vs Multi-Agent Automation.",
    "Evaluate language requirements (.NET/C# points to Semantic Kernel; Python to LlamaIndex/CrewAI).",
    "Benchmark prompt token overhead and execution latency on target models.",
    "Set up OpenTelemetry / LangSmith tracing early in development."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "LLM Framework Selection",
        "description": "Choosing the right orchestration layer for LLM applications."
      },
      {
        "id": "p1",
        "label": "Document RAG & Knowledge Bases",
        "description": "Complex data ingestion, chunking, and multi-document search."
      },
      {
        "id": "p2",
        "label": "Autonomous Multi-Agent Systems",
        "description": "Role-playing agents collaborating on multi-step tasks."
      },
      {
        "id": "p3",
        "label": "Enterprise .NET / Multi-Language",
        "description": "Integration with existing C#, Java, or C++ backend systems."
      },
      {
        "id": "p4",
        "label": "General Chaining & Ecosystem Depth",
        "description": "Broadest array of integrations, vector databases, and tools."
      },
      {
        "id": "e1",
        "label": "LlamaIndex",
        "description": "Best-in-class indexing, hybrid search, and reranking pipeline."
      },
      {
        "id": "e2",
        "label": "AutoGen",
        "description": "Conversable agents with code execution sandboxes."
      },
      {
        "id": "e3",
        "label": "CrewAI",
        "description": "Structured role-based agent crews with task delegation."
      },
      {
        "id": "e4",
        "label": "Semantic Kernel",
        "description": "Strongly typed plugins for C#, Python, and Java enterprise apps."
      },
      {
        "id": "e5",
        "label": "LangChain / LangGraph",
        "description": "Cyclic graph workflows and universal integration ecosystem."
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
        "source": "p2",
        "target": "e3"
      },
      {
        "source": "p3",
        "target": "e4"
      },
      {
        "source": "p4",
        "target": "e5"
      }
    ]
  }
};
