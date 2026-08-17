import { ComparisonWorkspaceData } from "../../services/llmService";

export const VECTOR_DATABASE_ENGINES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Vector Database Engines: Pinecone vs Milvus vs Qdrant vs Weaviate vs Chroma",
  "domainType": "tools",
  "overview": "A vector database comparison evaluating HNSW vs DiskANN indexing, RAM compression (int8/scalar quantization), hybrid sparse/dense search, and managed SaaS vs open-source.",
  "recommendedApproach": "Use Pinecone for managed zero-ops serverless vector search; use Qdrant for fast Rust scalar/binary quantization; use Milvus for billion-scale distributed vector clusters.",
  "criteria": [
    {
      "id": "c1",
      "label": "Vector Search Throughput & Latency (HNSW vs DiskANN)",
      "type": "text",
      "description": "Sub-10ms nearest neighbor search latency at scale."
    },
    {
      "id": "c2",
      "label": "Quantization & RAM Reduction (Scalar / Product / Binary)",
      "type": "text",
      "description": "Reducing RAM requirements by up to 95% using scalar (SQ) or binary quantization (BQ)."
    },
    {
      "id": "c3",
      "label": "Hybrid Keyword + Dense Vector Search",
      "type": "text",
      "description": "Combining BM25 keyword matching with dense vector similarity scores."
    },
    {
      "id": "c4",
      "label": "Metadata Filtering Performance",
      "type": "text",
      "description": "Filtering vectors by tenant_id or category during index traversal."
    },
    {
      "id": "c5",
      "label": "Deployment Model (Serverless SaaS vs K8s Cluster)",
      "type": "text",
      "description": "Managed cloud API vs self-hosted Kubernetes cluster operator."
    },
    {
      "id": "c6",
      "label": "Open Source Licensing & Governance",
      "type": "text",
      "description": "Apache 2.0 / BSD open-source core vs proprietary cloud SaaS."
    }
  ],
  "options": [
    {
      "id": "qdrant",
      "name": "Qdrant",
      "summary": "High-performance vector database written in Rust providing advanced payload filtering and quantization.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Rust Speed",
          "note": "Rust engine delivers ultra-fast HNSW indexing and memory-mapped files."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Scalar & Binary Quantization",
          "note": "Compresses vectors natively; holds millions of vectors in minimal RAM."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Native Hybrid Search",
          "note": "Combines dense vectors with sparse vectors (SPLADE/BM25) in single query."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Payload Indexing",
          "note": "Indexes JSON metadata payload fields for instant filtered vector searches."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Self-Hosted & Qdrant Cloud",
          "note": "Deploy on Kubernetes via Helm or use Qdrant Cloud."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apache 2.0",
          "note": "100% open-source software under Apache 2.0."
        }
      },
      "tags": [
        "Qdrant",
        "Rust",
        "Quantization",
        "Apache 2.0",
        "Hybrid Search"
      ]
    },
    {
      "id": "pinecone",
      "name": "Pinecone",
      "summary": "Fully managed, serverless vector database built for high reliability and scale.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast Serverless Index",
          "note": "Serverless architecture decouples storage and compute."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Managed Compression",
          "note": "Handles index compression automatically behind the scenes."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Hybrid Search",
          "note": "Supports sparse-dense vectors for hybrid BM25 search."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Metadata Filtering",
          "note": "Supports key-value metadata filtering on queries."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Zero-Ops SaaS",
          "note": "Fully managed cloud database; pay strictly for read/write units."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Proprietary Cloud",
          "note": "Managed SaaS service."
        }
      },
      "tags": [
        "Pinecone",
        "Serverless",
        "Managed SaaS",
        "Zero-Ops"
      ]
    },
    {
      "id": "milvus",
      "name": "Milvus (LF AI & Data)",
      "summary": "Open-source distributed vector database built for massive enterprise scale.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Billion-Scale Standard",
          "note": "Engineered specifically for petabyte and billion-vector search workloads."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Knowhere C++ Engine",
          "note": "Supports HNSW, IVF-FLAT, DiskANN, and GPU-accelerated (CAGRA) indexes."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Sparse-Dense Hybrid",
          "note": "Supports full-text BM25 and vector hybrid search."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Scalar Filtering",
          "note": "Expression-based scalar filtering."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Kubernetes Distributed",
          "note": "Distributed cloud-native cluster deployment via Milvus Operator."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apache 2.0 (LF AI)",
          "note": "Linux Foundation open-source project."
        }
      },
      "tags": [
        "Milvus",
        "LF AI",
        "Billion-Scale",
        "DiskANN",
        "GPU"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Qdrant for open-source Rust performance, native quantization, and hybrid search.",
    "Choose Pinecone for zero-ops managed serverless vector storage.",
    "Choose Milvus for billion-vector enterprise scale on Kubernetes."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Vector Database Selection",
        "description": "Choosing the vector search database engine."
      },
      {
        "id": "p1",
        "label": "Rust Speed & Native Quantization",
        "description": "Need open-source Rust engine with scalar/binary quantization and payload filtering."
      },
      {
        "id": "p2",
        "label": "Zero-Ops Managed Cloud SaaS",
        "description": "Need fully managed serverless cloud API with zero infrastructure setup."
      },
      {
        "id": "p3",
        "label": "Billion-Scale Distributed Kubernetes Cluster",
        "description": "Need Linux Foundation open-source cluster database for petabyte vector collections."
      },
      {
        "id": "e1",
        "label": "Qdrant",
        "description": "Rust-powered vector database with quantization."
      },
      {
        "id": "e2",
        "label": "Pinecone",
        "description": "Managed serverless vector database."
      },
      {
        "id": "e3",
        "label": "Milvus",
        "description": "Distributed enterprise vector database."
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
