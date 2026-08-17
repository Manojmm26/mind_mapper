import { ComparisonWorkspaceData } from "../../services/llmService";

export const LLM_BASE_MODELS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Open-Source LLM Base Models: Llama 3.3 vs Qwen 2.5 vs DeepSeek V3 / R1 vs Mistral NeMo",
  "domainType": "tools",
  "overview": "A foundation model evaluation comparing open-weights LLMs on coding benchmarks (HumanEval), mathematical reasoning (MATH), context window size, license permissiveness, and MoE architecture.",
  "recommendedApproach": "Use Llama 3.3 70B for general enterprise open-weights deployment; use Qwen 2.5 Coder for coding & math; use DeepSeek R1 for reasoning; use Mistral NeMo for lightweight edge.",
  "criteria": [
    {
      "id": "c1",
      "label": "Reasoning & Coding Benchmark Scores (HumanEval / MATH)",
      "type": "text",
      "description": "Performance on code generation and mathematical reasoning benchmarks."
    },
    {
      "id": "c2",
      "label": "Context Window Capacity (128k+ Tokens)",
      "type": "text",
      "description": "Native context window size and effective needle-in-a-haystack retrieval."
    },
    {
      "id": "c3",
      "label": "Architecture Type (Dense vs Mixture-of-Experts MoE)",
      "type": "text",
      "description": "Dense parameters vs active routing MoE parameters (e.g. 671B MoE with 37B active)."
    },
    {
      "id": "c4",
      "label": "License Permissiveness (Apache 2.0 vs Llama Community)",
      "type": "text",
      "description": "Commercial license restrictions and enterprise deployment rights."
    },
    {
      "id": "c5",
      "label": "Multilingual Capabilities (100+ Languages)",
      "type": "text",
      "description": "Cross-lingual translation and reasoning."
    },
    {
      "id": "c6",
      "label": "Fine-Tuning Ergonomics & Lora Training",
      "type": "text",
      "description": "Availability of Unsloth and Axolotl LoRA fine-tuning recipes."
    }
  ],
  "options": [
    {
      "id": "llama-3-3",
      "name": "Meta Llama 3.3 (70B)",
      "summary": "Meta's state-of-the-art open-weights model delivering GPT-4 class capabilities at 70B size.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Top Tier Dense",
          "note": "Delivers performance matching older 405B models in a 70B parameter size."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "128k Native Context",
          "note": "Flawless 128k token context window retrieval."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Dense Architecture",
          "note": "70B dense parameter architecture."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Llama 3.3 Community License",
          "note": "Free for commercial use up to 700M monthly active users."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Strong Multilingual",
          "note": "Trained on massive multi-language corpus."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Industry Standard",
          "note": "Supported natively in every fine-tuning framework (Unsloth, Axolotl)."
        }
      },
      "tags": [
        "Llama 3.3",
        "Meta",
        "70B",
        "Dense",
        "Open-Weights"
      ]
    },
    {
      "id": "qwen-2-5",
      "name": "Qwen 2.5 (Qwen2.5-Coder 32B)",
      "summary": "Alibaba Cloud's open-weights model family excelling in coding, mathematics, and multilingual tasks.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Open Coding",
          "note": "Qwen2.5-Coder-32B matches or outperforms Claude 3.5 Sonnet on HumanEval."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "128k Context",
          "note": "Supports 128k context window."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Dense & MoE Options",
          "note": "Ranging from 0.5B to 72B dense and MoE models."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Apache 2.0 (under 32B)",
          "note": "100% open-source Apache 2.0 license for most models."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Multilingual",
          "note": "Outstanding Chinese, English, and multi-language capabilities."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High",
          "note": "Widely supported in Ollama, vLLM, and Hugging Face."
        }
      },
      "tags": [
        "Qwen 2.5",
        "Alibaba",
        "Coding Leader",
        "Apache 2.0",
        "32B"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy Llama 3.3 70B for general-purpose enterprise application tasks.",
    "Deploy Qwen 2.5 Coder 32B for autonomous coding and software engineering agents.",
    "Fine-tune base models using Unsloth LoRA on domain-specific instruction datasets."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Base Model Selection",
        "description": "Choosing the open-weights LLM base family."
      },
      {
        "id": "p1",
        "label": "General Enterprise Open-Weights Standard (70B)",
        "description": "Need Meta Llama 3.3 70B dense model for general instruction following and reasoning."
      },
      {
        "id": "p2",
        "label": "State-of-the-Art Open Coding & Math (Apache 2.0)",
        "description": "Need Qwen 2.5 Coder 32B with Apache 2.0 license outperforming closed models on HumanEval."
      },
      {
        "id": "e1",
        "label": "Llama 3.3 70B",
        "description": "Meta state-of-the-art open-weights model."
      },
      {
        "id": "e2",
        "label": "Qwen 2.5 Coder",
        "description": "Alibaba open-weights coding benchmark leader."
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
