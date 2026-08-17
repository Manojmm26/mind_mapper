import { ComparisonWorkspaceData } from "../../services/llmService";

export const EMBEDDING_MODELS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "AI Vector Embedding Models: OpenAI text-embedding-3 vs Cohere Embed v3 vs Voyage AI vs BGE-M3",
  "domainType": "tools",
  "overview": "A comparative evaluation of dense and sparse embedding models analyzing vector dimensionality, Matryoshka compression, retrieval accuracy (MTEB benchmark), multilingual performance, and self-hosted availability.",
  "recommendedApproach": "Use OpenAI text-embedding-3-large for general-purpose RAG with Matryoshka dimension truncation; use Cohere Embed v3 for search reranking and compressed int8/binary embeddings; use BGE-M3 for open-source self-hosted multi-lingual RAG.",
  "criteria": [
    {
      "id": "c1",
      "label": "MTEB Benchmark Retrieval Accuracy",
      "type": "text",
      "description": "Massive Text Embedding Benchmark (MTEB) score across search, classification, and retrieval tasks."
    },
    {
      "id": "c2",
      "label": "Matryoshka Representation Learning (Flex Dimensions)",
      "type": "text",
      "description": "Truncating embedding dimensions (e.g. 3072 down to 256) without losing core semantic quality."
    },
    {
      "id": "c3",
      "label": "Multilingual & Multi-Aspect Search",
      "type": "text",
      "description": "Cross-lingual retrieval support across 100+ languages."
    },
    {
      "id": "c4",
      "label": "Quantization (int8 / binary vectors)",
      "type": "text",
      "description": "Native support for 1-bit binary or 8-bit integer embeddings to reduce RAM."
    },
    {
      "id": "c5",
      "label": "Deployment & Data Privacy (SaaS vs Self-Hosted)",
      "type": "text",
      "description": "SaaS API access vs open-source Hugging Face model execution."
    },
    {
      "id": "c6",
      "label": "API Pricing per Million Tokens",
      "type": "text",
      "description": "Cost to embed large corpus collections."
    }
  ],
  "options": [
    {
      "id": "openai-embed-3",
      "name": "OpenAI text-embedding-3-large",
      "summary": "OpenAI's highest performing embedding model supporting Matryoshka flexible dimensions.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Top Tier MTEB",
          "note": "Outperforms older ada-002 significantly on retrieval benchmarks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Matryoshka)",
          "note": "Truncate 3072 dimensions down to 1024, 512, or 256 to save vector DB storage."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "Strong multilingual performance across 100+ languages."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Float32 API",
          "note": "Returns float32 arrays; vector DB handles post-quantization."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "OpenAI Cloud API",
          "note": "Hosted SaaS endpoint."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "$0.13 / 1M tokens",
          "note": "Highly cost-effective pricing tier."
        }
      },
      "tags": [
        "OpenAI",
        "Matryoshka",
        "RAG",
        "MTEB"
      ]
    },
    {
      "id": "cohere-embed-v3",
      "name": "Cohere Embed v3",
      "summary": "Enterprise embedding model built specifically for search retrieval and int8/binary compression.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Outstanding (Search)",
          "note": "Optimized specifically for search query vs document intent matching."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Fixed Dimensions",
          "note": "1024 dimension vectors."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class Multilingual",
          "note": "Trained specifically for cross-lingual enterprise search in 100+ languages."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native int8 & Binary",
          "note": "Returns int8 or 1-bit binary vectors directly from API, cutting DB RAM costs by 95%."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "SaaS & Bedrock",
          "note": "Available on Cohere API, AWS Bedrock, and Azure AI."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "$0.10 / 1M tokens",
          "note": "Competitive enterprise pricing."
        }
      },
      "tags": [
        "Cohere",
        "Binary Vectors",
        "int8",
        "Multilingual"
      ]
    },
    {
      "id": "bge-m3",
      "name": "BGE-M3 (BAAI Open-Source)",
      "summary": "Leading open-source embedding model supporting Multi-Functionality, Multi-Lingual, and Multi-Granularity.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Top Open-Source",
          "note": "Consistently ranks at top of open-source MTEB leaderboards."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "1024 Dimensions",
          "note": "Standard 1024 dimension output."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100+ Languages",
          "note": "Outstanding cross-lingual semantic matching."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Sparse + Dense Hybrid",
          "note": "Generates dense vectors, sparse BM25-style weights, and multi-vector ColBERT tokens simultaneously."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Self-Hosted",
          "note": "Run locally on GPUs via Hugging Face sentence-transformers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Zero API Cost",
          "note": "Free open-source weights; pay only for GPU compute."
        }
      },
      "tags": [
        "Open-Source",
        "BGE-M3",
        "Hybrid Search",
        "Self-Hosted"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Test text-embedding-3-large with Matryoshka dimension truncation (1024 dimensions) in vector database.",
    "Evaluate Cohere Embed v3 if vector database RAM budget requires native int8 or binary vector compression.",
    "Deploy BGE-M3 locally for privacy-sensitive or air-gapped RAG pipelines."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Embedding Model Selection",
        "description": "Choosing the vector embedding model for RAG and semantic search."
      },
      {
        "id": "p1",
        "label": "Flexible Vector Dimensions & High Accuracy",
        "description": "Need Matryoshka dimension truncation to reduce vector database RAM footprint without losing accuracy."
      },
      {
        "id": "p2",
        "label": "Native int8 / Binary Vector Compression",
        "description": "Need enterprise search embedding with native binary vector output for massive vector collections."
      },
      {
        "id": "p3",
        "label": "Open-Source Self-Hosted Privacy",
        "description": "Must run embedding model locally on private GPUs with zero external API calls."
      },
      {
        "id": "e1",
        "label": "OpenAI text-embedding-3",
        "description": "Flexible Matryoshka dimension truncation embedding model."
      },
      {
        "id": "e2",
        "label": "Cohere Embed v3",
        "description": "Enterprise search embedding with native int8 and binary compression."
      },
      {
        "id": "e3",
        "label": "BGE-M3",
        "description": "Leading open-source dense and sparse hybrid embedding model."
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
