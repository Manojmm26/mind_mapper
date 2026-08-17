import { ComparisonWorkspaceData } from "../../services/llmService";

export const SEARCH_ENGINES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Search Engines & Full-Text Retrieval: Elasticsearch vs OpenSearch vs Meilisearch vs Typesense vs Algolia",
  "domainType": "tools",
  "overview": "A comparative guide to search engines analyzing BM25 relevance scoring, typo tolerance, indexing speed, cluster sharding, and self-hosted vs SaaS.",
  "recommendedApproach": "Use Meilisearch or Typesense for instant, typo-tolerant search-as-you-type in web applications; use OpenSearch or Elasticsearch for heavy log analytics and complex enterprise search; use Algolia for hosted zero-ops SaaS.",
  "criteria": [
    {
      "id": "c1",
      "label": "Typo Tolerance & Search-as-You-Type Speed",
      "type": "text",
      "description": "Sub-50ms instant search results with automatic typo correction."
    },
    {
      "id": "c2",
      "label": "Log Analytics & Large-Scale Sharding",
      "type": "text",
      "description": "Inverted index scaling over terabytes of log data."
    },
    {
      "id": "c3",
      "label": "Hybrid Keyword + Vector Semantic Search",
      "type": "text",
      "description": "Combining BM25 full-text matching with dense vector embeddings."
    },
    {
      "id": "c4",
      "label": "Deployment Model & RAM Footprint",
      "type": "text",
      "description": "Heavy Java JVM cluster vs lightweight C++/Rust binary vs SaaS."
    },
    {
      "id": "c5",
      "label": "Query DSL & API Simplicity",
      "type": "text",
      "description": "REST API simplicity vs verbose Lucene JSON Query DSL."
    },
    {
      "id": "c6",
      "label": "Open Source Licensing & Governance",
      "type": "text",
      "description": "Apache 2.0 (OpenSearch/Typesense/Meili) vs ELv2 / SaaS."
    }
  ],
  "options": [
    {
      "id": "meilisearch",
      "name": "Meilisearch",
      "summary": "Lightning-fast, open-source search engine written in Rust designed for instant search-as-you-type experiences.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (< 20ms)",
          "note": "Delivers instant search-as-you-type with prefix search and automatic typo tolerance."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "App-Focused",
          "note": "Optimized for application search (e-commerce, SaaS catalogs) rather than log analytics."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Hybrid Search",
          "note": "Supports experimental vector search and embeddings alongside BM25."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Lightweight Rust",
          "note": "Single small Rust binary with minimal RAM footprint."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Easiest REST API",
          "note": "Simple REST API requiring zero complex query mapping."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "MIT License",
          "note": "100% open-source MIT licensed software."
        }
      },
      "tags": [
        "Rust",
        "Instant Search",
        "Typo-Tolerant",
        "MIT"
      ]
    },
    {
      "id": "typesense",
      "name": "Typesense",
      "summary": "Open-source, in-memory search engine written in C++ optimized for fast developer experience.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Instant (< 10ms)",
          "note": "In-memory C++ index structures deliver sub-10ms search responses."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High (Cluster Mode)",
          "note": "Raft-based clustering for high availability and read scaling."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Native Hybrid Search",
          "note": "Built-in vector search combining dense embeddings with keyword relevance."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Lightweight C++",
          "note": "Fast C++ execution with low memory overhead."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Intuitive",
          "note": "Clean HTTP REST API and client SDKs for JS, Python, Ruby, PHP."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "GPLv3 / Cloud",
          "note": "Open-source core with managed Typesense Cloud SaaS option."
        }
      },
      "tags": [
        "C++",
        "In-Memory",
        "Hybrid Search",
        "Fast"
      ]
    },
    {
      "id": "opensearch",
      "name": "AWS OpenSearch (Lucene)",
      "summary": "The open-source Apache 2.0 fork of Elasticsearch backed by AWS and community partners.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Configurable",
          "note": "Supports prefix matching and fuzzy queries via Lucene."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unmatched (Petabyte-Scale)",
          "note": "Industry standard for log management, security analytics (SIEM), and big data."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "k-NN Vector Plugin",
          "note": "Native k-NN plugin for vector similarity search based on NMSLIB / FAISS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Java JVM Cluster",
          "note": "Requires dedicated Java JVM cluster management, heap tuning, and shard planning."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Verbose Query DSL",
          "note": "Powerful but complex JSON query DSL."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apache 2.0",
          "note": "Truly open-source Linux Foundation community project."
        }
      },
      "tags": [
        "OpenSearch",
        "Apache 2.0",
        "Lucene",
        "Log Analytics"
      ]
    },
    {
      "id": "algolia",
      "name": "Algolia",
      "summary": "Fully managed SaaS search API delivering instant search, analytics, and AI recommendations.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class SaaS",
          "note": "Hosted search network delivers millisecond responses worldwide."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "App Search Focus",
          "note": "Built for e-commerce, content discovery, and mobile search."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Algolia NeuralSearch",
          "note": "Combines vector embeddings with keyword search in managed SaaS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Zero-Ops SaaS",
          "note": "100% managed SaaS; zero servers or clusters to manage."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Turnkey Widgets",
          "note": "InstantSearch.js UI libraries for React, Vue, and Angular."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Pay-per-Search Unit",
          "note": "Charges per search request and index record unit."
        }
      },
      "tags": [
        "Algolia",
        "SaaS",
        "Zero-Ops",
        "E-Commerce"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Meilisearch or Typesense for instant, typo-tolerant search in web/mobile applications.",
    "Choose OpenSearch / Elasticsearch for terabyte-scale log aggregation and security analytics.",
    "Choose Algolia for zero-ops managed SaaS search with pre-built UI components.",
    "Tune search relevance weights (attribute ranking, typo tolerance) on test datasets."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Search Engine Selection",
        "description": "Choosing the search engine for application data or log analytics."
      },
      {
        "id": "p1",
        "label": "Instant Typo-Tolerant Application Search",
        "description": "Building search-as-you-type for e-commerce, SaaS apps, or documentation using small binaries."
      },
      {
        "id": "p2",
        "label": "Petabyte-Scale Log & Security Analytics",
        "description": "Indexing terabytes of log data, traces, and metrics with multi-node Lucene clusters."
      },
      {
        "id": "p3",
        "label": "Managed Zero-Ops SaaS Search",
        "description": "Fully managed cloud search API with pre-built frontend UI widgets."
      },
      {
        "id": "e1",
        "label": "Meilisearch / Typesense",
        "description": "Fast C++/Rust engines for instant search-as-you-type."
      },
      {
        "id": "e2",
        "label": "OpenSearch",
        "description": "Apache 2.0 Lucene cluster for big data log analytics."
      },
      {
        "id": "e3",
        "label": "Algolia",
        "description": "Managed cloud search API with instant UI components."
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
