import { ComparisonWorkspaceData } from "../../services/llmService";

export const AI_GUARDRAILS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "AI Guardrails & Safety Engines: NeMo Guardrails vs Llama Guard vs Guidance",
  "domainType": "tools",
  "overview": "An AI safety evaluation comparing programmable dialog rails (NeMo Guardrails), fine-tuned safety classifier models (Llama Guard 3), and constrained regex/JSON token generation (Guidance).",
  "recommendedApproach": "Use NeMo Guardrails for enterprise conversational dialog safety; use Llama Guard for fast input/output safety classification; use Guidance for strict JSON schema enforcement.",
  "criteria": [
    {
      "id": "c1",
      "label": "Safety Classification Latency Overhead",
      "type": "text",
      "description": "Milliseconds added to check prompt inputs and model outputs."
    },
    {
      "id": "c2",
      "label": "Programmable Dialog Flow Control (Colang)",
      "type": "text",
      "description": "Defining conversational rails and fallback responses using domain-specific policy languages."
    },
    {
      "id": "c3",
      "label": "Structured Token Generation Constraints (Regex / JSON)",
      "type": "text",
      "description": "Forcing LLMs to generate valid JSON or regex-constrained tokens at the logit level."
    },
    {
      "id": "c4",
      "label": "Jailbreak & Prompt Injection Protection",
      "type": "text",
      "description": "Detecting adversarial prompt injection attacks."
    },
    {
      "id": "c5",
      "label": "Hallucination & Fact-Checking Verification",
      "type": "text",
      "description": "Verifying response facts against RAG reference documents."
    },
    {
      "id": "c6",
      "label": "Integration Ecosystem",
      "type": "text",
      "description": "Support across LangChain, LlamaIndex, and vLLM."
    }
  ],
  "options": [
    {
      "id": "nemo-guardrails",
      "name": "NVIDIA NeMo Guardrails",
      "summary": "NVIDIA's open-source toolkit for adding programmable guardrails to LLM-based conversational applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Moderate",
          "note": "Executes Colang rails and programmable checks prior to model output."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Colang)",
          "note": "Uses Colang policy language to define custom conversational flows and topic restrictions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Supported",
          "note": "Enforces JSON schemas via programmable rails."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "High",
          "note": "Built-in jailbreak and prompt injection detection heuristics."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class (Fact Checking)",
          "note": "Built-in self-checking mechanisms to detect hallucinations against context."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "NVIDIA Ecosystem",
          "note": "First-class integration with NVIDIA NeMo and enterprise LLM stacks."
        }
      },
      "tags": [
        "NeMo Guardrails",
        "NVIDIA",
        "Colang",
        "Fact Checking",
        "AI Safety"
      ]
    },
    {
      "id": "llama-guard",
      "name": "Meta Llama Guard 3",
      "summary": "Meta's input/output safety classifier model built on Llama architecture for content moderation.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Fast Classifier)",
          "note": "Fast 8B / 1B parameter classifier model designed for low-latency safety checks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Taxonomy Based",
          "note": "Classifies inputs/outputs against MLCommons hazard taxonomy categories."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "N/A",
          "note": "Focused purely on safety classification."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class Jailbreak Detection",
          "note": "Trained heavily on adversarial jailbreak prompts and malicious code attempts."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderation Focused",
          "note": "Focused on safety and harm classification rather than fact verification."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal Llama Stack",
          "note": "Supported natively in vLLM, Ollama, and Hugging Face."
        }
      },
      "tags": [
        "Llama Guard",
        "Meta",
        "Classifier",
        "Jailbreak Detection",
        "MLCommons"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy Llama Guard 3 as a low-latency input filter to catch prompt injection attacks.",
    "Adopt NeMo Guardrails to enforce conversational domain boundaries via Colang scripts.",
    "Combine constrained logit sampling with safety classifiers for production AI agents."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "AI Guardrails Selection",
        "description": "Choosing the AI safety framework."
      },
      {
        "id": "p1",
        "label": "Programmable Dialog Rails & Fact Verification (NeMo)",
        "description": "Need Colang scripts to control conversation flows and verify facts against RAG context."
      },
      {
        "id": "p2",
        "label": "Fast Low-Latency Safety Classifier (Llama Guard)",
        "description": "Need fast 1B/8B model to classify prompts against MLCommons hazard taxonomies."
      },
      {
        "id": "e1",
        "label": "NeMo Guardrails",
        "description": "NVIDIA programmable dialog guardrails framework."
      },
      {
        "id": "e2",
        "label": "Llama Guard 3",
        "description": "Meta safety classifier model for prompt moderation."
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
