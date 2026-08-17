import { ComparisonWorkspaceData } from "../../services/llmService";

export const VECTOR_DATABASES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Vector Databases & Hybrid Search Engines: Pinecone vs Milvus vs Qdrant vs Weaviate vs Chromadb vs pgvector",
  "domainType": "tools",
  "overview": "A detailed technical evaluation of vector storage solutions comparing indexing algorithms (HNSW vs IVF), hybrid keyword-vector search, self-hosting vs serverless, and billion-scale performance.",
  "recommendedApproach": "Use pgvector for simple postgres-native vector search under 1M vectors; use Qdrant or Weaviate for hybrid search and self-hosted flexibility; use Pinecone for zero-ops serverless scale.",
  "criteria": [
    {
      "id": "c1",
      "label": "Vector Indexing Algorithms & Speed",
      "type": "text",
      "description": "Support for HNSW, DiskANN, IVF-PQ, and query latency (QPS)."
    },
    {
      "id": "c2",
      "label": "Hybrid Search & Sparse/Dense Fusion",
      "type": "text",
      "description": "Combining BM25 keyword search with dense vector embeddings via Reciprocal Rank Fusion (RRF)."
    },
    {
      "id": "c3",
      "label": "Metadata Filtering & Payload Storage",
      "type": "text",
      "description": "Filtered search speed and rich payload JSON storage inside vector nodes."
    },
    {
      "id": "c4",
      "label": "Deployment Model (Serverless vs Self-Hosted)",
      "type": "text",
      "description": "Fully managed SaaS vs open-source Docker/Kubernetes helm deployments."
    },
    {
      "id": "c5",
      "label": "Scale & Billion-Vector Support",
      "type": "text",
      "description": "Horizontal sharding, memory compression (PQ/SQ), and disk-backed indexes."
    },
    {
      "id": "c6",
      "label": "Cost & Resource Efficiency",
      "type": "text",
      "description": "RAM consumption per vector dimension and pricing predictability."
    }
  ],
  "options": [
    {
      "id": "pinecone",
      "name": "Pinecone",
      "summary": "Fully managed, cloud-native serverless vector database built for zero operational overhead.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Outstanding",
          "note": "Proprietary FreshDisk indexing provides ultra-low latency."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Supports sparse-dense hybrid vectors (SPLADE + dense)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Excellent",
          "note": "Fast metadata filtering during vector traversal."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Serverless",
          "note": "Fully managed SaaS on AWS, GCP, and Azure; no clusters to manage."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Billion+ Ready",
          "note": "Seamless auto-scaling across isolated namespaces."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Pay-per-Read/Write",
          "note": "Serverless tier charges only for read/write RUs and storage."
        }
      },
      "tags": [
        "Serverless",
        "Zero-Ops",
        "Cloud-Native",
        "SaaS"
      ]
    },
    {
      "id": "qdrant",
      "name": "Qdrant",
      "summary": "High-performance vector search engine written in Rust with advanced payload filtering.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class",
          "note": "Rust-powered custom HNSW implementation with memory-mapped files."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Excellent",
          "note": "Native sparse vector support and hybrid match fusion."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "Payload indexes allow complex geo, numerical, and text filters during search."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Open Source & Cloud",
          "note": "Runs via Docker/K8s or managed Qdrant Cloud."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High",
          "note": "Scalar quantization (SQ) and product quantization (PQ) reduce memory by 4x."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Resource-Efficient",
          "note": "Rust memory safety and SIMD hardware acceleration minimize RAM usage."
        }
      },
      "tags": [
        "Rust",
        "Open-Source",
        "Payload Filtering",
        "HNSW"
      ]
    },
    {
      "id": "weaviate",
      "name": "Weaviate",
      "summary": "An open-source vector database featuring built-in ML modules and GraphQL API.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very Good",
          "note": "HNSW and Dynamic Indexing (HNSW + Flat) for memory optimization."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Outstanding",
          "note": "Native BM25 keyword + vector hybrid search out of the box."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Excellent",
          "note": "Class/object data model with GraphQL query capabilities."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Open Source & Cloud",
          "note": "Easy Docker-Compose/Helm deployment or Weaviate Cloud Services (WCS)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High",
          "note": "Supports multi-tenancy and async vector indexing."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Good",
          "note": "Product quantization (PQ) enables billion-scale fitting in RAM."
        }
      },
      "tags": [
        "GraphQL",
        "Hybrid Search",
        "BM25",
        "Open-Source"
      ]
    },
    {
      "id": "milvus",
      "name": "Milvus (Zilliz)",
      "summary": "Distributed, highly scalable open-source vector database built for massive enterprise workloads.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Outstanding",
          "note": "Supports HNSW, IVF-Flat, IVF-PQ, SCANN, and GPU acceleration (Knowhere)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Supports full-text search and sparse vector indexing in v2.4+."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Good",
          "note": "Dynamic schema support for JSON metadata filtering."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Distributed / K8s",
          "note": "Microservice architecture requiring K8s, MinIO, and Etcd (or Milvus Lite)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Billion+ Scale",
          "note": "Designed specifically for massive enterprise scale across clusters."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Heavy",
          "note": "Higher operational footprint for small datasets; great at high scale."
        }
      },
      "tags": [
        "Distributed",
        "Billion-Scale",
        "GPU-Accel",
        "Linux Foundation"
      ]
    },
    {
      "id": "pgvector",
      "name": "pgvector (PostgreSQL Extension)",
      "summary": "An open-source vector similarity search extension for PostgreSQL.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Good (HNSW/IVFFlat)",
          "note": "Supports HNSW and IVFFlat indexes directly inside Postgres tables."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (SQL)",
          "note": "Combine vector similarity with full SQL JOINs, CTEs, and tsvector BM25."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched",
          "note": "Full power of PostgreSQL column types, JSONB, and transactional ACID guarantees."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Postgres Native",
          "note": "Available on AWS RDS, Supabase, Neon, and any standard Postgres DB."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderate",
          "note": "Great up to ~10M vectors; requires careful RAM tuning for HNSW index builds."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Lowest Overhead",
          "note": "Zero extra infrastructure cost if you are already running PostgreSQL."
        }
      },
      "tags": [
        "Postgres",
        "SQL",
        "ACID",
        "Zero-Extra-Infra"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Estimate total vector count (Under 1M -> pgvector; 1M-50M -> Qdrant/Weaviate; 100M+ -> Pinecone/Milvus).",
    "Test hybrid search accuracy (BM25 + dense vectors) on your domain dataset.",
    "Evaluate self-hosted maintenance budget vs managed SaaS subscription costs.",
    "Benchmark query latency (QPS) under concurrent load using HNSW index parameters."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Vector DB Selection",
        "description": "Choosing the best vector search database for AI applications."
      },
      {
        "id": "p1",
        "label": "Already Using PostgreSQL (< 10M Vectors)",
        "description": "Want to keep stack simple with zero new database infrastructure."
      },
      {
        "id": "p2",
        "label": "Zero-Ops Managed Cloud SaaS",
        "description": "Need serverless auto-scaling without managing clusters."
      },
      {
        "id": "p3",
        "label": "High-Performance Self-Hosted (Rust/Go)",
        "description": "Need open-source Docker/K8s vector DB with rich payload filtering."
      },
      {
        "id": "p4",
        "label": "Billion-Scale Enterprise Distributed Cluster",
        "description": "Deploying massive multi-node vector clusters with GPU acceleration."
      },
      {
        "id": "e1",
        "label": "pgvector",
        "description": "Postgres extension bringing vector search inside standard SQL tables."
      },
      {
        "id": "e2",
        "label": "Pinecone",
        "description": "Fully managed serverless vector database with instant API access."
      },
      {
        "id": "e3",
        "label": "Qdrant / Weaviate",
        "description": "Fast open-source vector engines with hybrid search and payload filters."
      },
      {
        "id": "e4",
        "label": "Milvus (Zilliz)",
        "description": "Distributed cloud-native vector database for massive scale."
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
