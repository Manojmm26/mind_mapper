import { ComparisonWorkspaceData } from "../../services/llmService";

export const LLM_EVALUATION_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "LLM Evaluation & Guardrails Frameworks: Ragas vs DeepEval vs Guardrails AI vs Langfuse",
  "domainType": "tools",
  "overview": "An AI engineering evaluation of LLM testing and safety frameworks analyzing RAG metrics (faithfulness, answer relevance), real-time input/output guardrails, and observability tracing.",
  "recommendedApproach": "Use Ragas or DeepEval for CI/CD automated RAG metric evaluation; use Guardrails AI for real-time PII redaction and JSON schema validation; use Langfuse for LLM analytics and prompt management.",
  "criteria": [
    {
      "id": "c1",
      "label": "RAG Metric Evaluation (Faithfulness, Context Precision)",
      "type": "text",
      "description": "Quantifying hallucination rate, context recall, and answer relevancy scores."
    },
    {
      "id": "c2",
      "label": "Real-Time Input/Output Guardrails (PII, Toxicity, Schema)",
      "type": "text",
      "description": "Blocking PII leaks, toxic content, and invalid JSON structures prior to returning responses."
    },
    {
      "id": "c3",
      "label": "CI/CD Integration & PyTest Testing",
      "type": "text",
      "description": "Running LLM unit tests automatically in GitHub Actions build pipelines."
    },
    {
      "id": "c4",
      "label": "Tracing & Prompt Management",
      "type": "text",
      "description": "Logging prompt tokens, latency, cost per user, and managing prompt templates."
    },
    {
      "id": "c5",
      "label": "Open Source vs Managed SaaS",
      "type": "text",
      "description": "Self-hosted Python SDK vs cloud observability web platform."
    },
    {
      "id": "c6",
      "label": "LLM-as-a-Judge Accuracy & Costs",
      "type": "text",
      "description": "Using GPT-4o or Claude 3.5 Sonnet as an evaluator judge."
    }
  ],
  "options": [
    {
      "id": "ragas",
      "name": "Ragas",
      "summary": "Framework for evaluating Retrieval Augmented Generation (RAG) pipelines without ground truth reference.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pioneer RAG Metrics",
          "note": "Computes Faithfulness, Answer Relevancy, Context Recall, and Context Precision."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Offline Evaluation",
          "note": "Focused on evaluation testing rather than inline real-time proxy guardrails."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Python & LlamaIndex Native",
          "note": "Integrates seamlessly into PyTest, LlamaIndex, and LangChain pipelines."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Evaluation Focused",
          "note": "Exports evaluation score matrices into Pandas DataFrames."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Open Source",
          "note": "Open-source Python library."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "LLM-as-a-Judge",
          "note": "Uses GPT-4o or local Ollama models as evaluators."
        }
      },
      "tags": [
        "Ragas",
        "RAG Metrics",
        "Faithfulness",
        "Open-Source"
      ]
    },
    {
      "id": "deepeval",
      "name": "DeepEval (Confident AI)",
      "summary": "The open-source LLM evaluation framework built for unit testing LLM applications like PyTest.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "14+ Built-in Metrics",
          "note": "G-Eval, Hallucination, RAG metrics, Toxicity, Bias, and Summarization."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Offline & Real-Time",
          "note": "Primary focus on CI/CD unit testing; offers Confident AI cloud platform."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class PyTest Integration",
          "note": "Run 'deepeval test run' inside GitHub Actions just like unit tests."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Confident AI Dashboard",
          "note": "Integrates with Confident AI web dashboard for tracking evaluation trends over time."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Open Source & Cloud",
          "note": "Open-source SDK with cloud dashboard."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "G-Eval Framework",
          "note": "Leverages G-Eval algorithm for high correlation with human judgment."
        }
      },
      "tags": [
        "DeepEval",
        "PyTest",
        "CI/CD",
        "Hallucination"
      ]
    },
    {
      "id": "guardrails-ai",
      "name": "Guardrails AI",
      "summary": "Open-source Python package for specifying structure and type validation for LLM outputs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "RAG Validation",
          "note": "Validates retrieved facts against generation."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Real-Time Guardrails",
          "note": "Enforces JSON schemas, redacts PII (SSN, emails), blocks toxic language, and auto-corrects outputs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Inline Wrappers",
          "note": "Wraps OpenAI/Anthropic API calls directly in Python."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Guardrails Hub",
          "note": "Guardrails Hub provides pre-built validators (Regex, Presidio PII, SQL)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Open Source",
          "note": "Open-source Python library."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low Overhead",
          "note": "Uses fast local regex and regex-based guardrail checks."
        }
      },
      "tags": [
        "Guardrails AI",
        "PII Redaction",
        "JSON Schema",
        "Real-Time"
      ]
    },
    {
      "id": "langfuse",
      "name": "Langfuse",
      "summary": "Open-source LLM engineering platform for tracing, evaluations, prompt management, and metrics.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Evaluation Pipeline",
          "note": "Automates LLM-as-a-judge and human feedback scores."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Observability Tracing",
          "note": "Captures full prompt generation trees, latency, token counts, and cost."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "SDK & OpenTelemetry",
          "note": "Python, TypeScript, and OpenTelemetry integrations."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class Prompt Management",
          "note": "Version-controlled prompt CMS with instant rollback and variable injection."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Open Source & Cloud",
          "note": "Self-host via Docker-Compose/K8s or use Langfuse Cloud."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Cost Tracking",
          "note": "Tracks exact LLM cost per user and model version."
        }
      },
      "tags": [
        "Langfuse",
        "Tracing",
        "Prompt Management",
        "Open-Source"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Ragas or DeepEval inside CI/CD pipelines to run automated hallucination and context-precision tests.",
    "Deploy Guardrails AI to sanitize user prompts and enforce valid JSON schema outputs in production.",
    "Use Langfuse for OpenTelemetry LLM tracing, prompt version management, and cost tracking."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "LLM Evaluation Selection",
        "description": "Choosing the LLM testing, guardrail, and observability tool."
      },
      {
        "id": "p1",
        "label": "CI/CD Automated RAG Metric Testing",
        "description": "Need PyTest unit tests measuring faithfulness, context recall, and hallucination rates in GitHub Actions."
      },
      {
        "id": "p2",
        "label": "Real-Time Input/Output Safety Guardrails",
        "description": "Need to redact PII, block toxic language, and enforce valid JSON schemas live."
      },
      {
        "id": "p3",
        "label": "Observability Tracing & Prompt CMS Management",
        "description": "Need version-controlled prompts, token cost tracking, and full LLM execution traces."
      },
      {
        "id": "e1",
        "label": "Ragas / DeepEval",
        "description": "Open-source RAG metric evaluation frameworks for CI/CD."
      },
      {
        "id": "e2",
        "label": "Guardrails AI",
        "description": "Real-time PII redaction and JSON schema enforcement wrapper."
      },
      {
        "id": "e3",
        "label": "Langfuse",
        "description": "Open-source LLM tracing, prompt management, and metrics platform."
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
