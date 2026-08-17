import { ComparisonWorkspaceData } from "../../services/llmService";

export const GRAPH_DATABASES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Graph Database Engines: Neo4j vs Memgraph vs Amazon Neptune vs ArangoDB",
  "domainType": "tools",
  "overview": "A comparative evaluation of graph databases analyzing property graph models, Cypher/Gremlin query languages, in-memory execution, and transactional ACID compliance.",
  "recommendedApproach": "Use Neo4j as the industry standard property graph database; use Memgraph for high-speed in-memory C++ Cypher queries; use Amazon Neptune for AWS-managed multi-region graph pipelines.",
  "criteria": [
    {
      "id": "c1",
      "label": "Query Language (Cypher vs Gremlin vs SPARQL)",
      "type": "text",
      "description": "Declarative pattern matching Cypher syntax vs functional Gremlin traversal."
    },
    {
      "id": "c2",
      "label": "In-Memory vs Disk Storage Architecture",
      "type": "text",
      "description": "In-memory C++ graph traversal vs disk-backed native graph stores."
    },
    {
      "id": "c3",
      "label": "ACID Transaction Guarantees",
      "type": "text",
      "description": "Strict multi-node ACID transactions on graph nodes and relationship edges."
    },
    {
      "id": "c4",
      "label": "Graph Algorithms & Analytics (PageRank, Community Detection)",
      "type": "text",
      "description": "Built-in graph data science algorithms (GDS) for network analysis."
    },
    {
      "id": "c5",
      "label": "Cloud Managed vs Open Source Self-Hosted",
      "type": "text",
      "description": "Managed cloud database service vs self-hosted Docker/K8s."
    },
    {
      "id": "c6",
      "label": "Multi-Model Capabilities (Document/Key-Value + Graph)",
      "type": "text",
      "description": "Pure native graph engine vs multi-model store supporting JSON documents."
    }
  ],
  "options": [
    {
      "id": "neo4j",
      "name": "Neo4j",
      "summary": "The pioneer and market leader in native property graph databases.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Cypher Creator",
          "note": "Created the Cypher query language, now standardized as ISO GQL."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Native Graph Store",
          "note": "Index-free adjacency stores node and edge pointers directly on disk/RAM."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Full ACID",
          "note": "Serializable and read committed ACID transactions."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Graph Data Science (GDS)",
          "note": "Extensive library for PageRank, Louvain community detection, and node embeddings."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Neo4j Aura SaaS / Self-Hosted",
          "note": "Available via Neo4j Aura cloud or self-hosted enterprise."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Native Property Graph",
          "note": "Dedicated native property graph model."
        }
      },
      "tags": [
        "Neo4j",
        "Cypher",
        "Property Graph",
        "Market Leader"
      ]
    },
    {
      "id": "memgraph",
      "name": "Memgraph",
      "summary": "High-performance, in-memory graph database written in C++ compatible with Neo4j and Cypher.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "100% Cypher Compatible",
          "note": "Drop-in replacement for Neo4j Cypher queries and Bolt protocol."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "In-Memory C++ Engine",
          "note": "In-memory graph processing delivers up to 120x faster query execution."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "ACID Compliant",
          "note": "Full ACID transactions backed by snapshot persistence to disk."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "MAGE Graph Algorithms",
          "note": "Memgraph Advanced Graph Extensions (MAGE) for real-time streaming graph algorithms."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Open-Source & Cloud",
          "note": "Run via Docker or use Memgraph Cloud."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Streaming Graph",
          "note": "Native integrations with Apache Kafka and Pulsar for real-time graph updates."
        }
      },
      "tags": [
        "Memgraph",
        "In-Memory",
        "C++",
        "Fast Cypher",
        "Kafka"
      ]
    },
    {
      "id": "neptune",
      "name": "Amazon Neptune",
      "summary": "Fully managed graph database service built for high-availability cloud applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Gremlin & openCypher & SPARQL",
          "note": "Supports openCypher, Apache TinkerPop Gremlin, and W3C SPARQL."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "AWS Storage Engine",
          "note": "Separated storage engine replicating 6 copies of data across 3 AZs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "ACID Compliant",
          "note": "Full ACID transactions across graph queries."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Neptune ML",
          "note": "Integrates with Amazon SageMaker for Graph Neural Networks (GNNs)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% AWS Managed",
          "note": "Fully managed AWS regional service with auto-scaling storage."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Property & RDF Graphs",
          "note": "Supports both Property Graphs and W3C RDF triple stores."
        }
      },
      "tags": [
        "AWS Neptune",
        "Gremlin",
        "openCypher",
        "AWS Managed"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Neo4j for enterprise property graph applications needing standard Cypher and Graph Data Science.",
    "Choose Memgraph for ultra-fast in-memory Cypher queries streaming real-time events from Kafka.",
    "Choose Amazon Neptune if operating entirely within AWS and requiring multi-protocol (Gremlin/SPARQL) support."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Graph Database Selection",
        "description": "Choosing the graph database engine for connected networks."
      },
      {
        "id": "p1",
        "label": "Standard Property Graph & Cypher",
        "description": "Need industry-standard Cypher queries and native property graph storage."
      },
      {
        "id": "p2",
        "label": "Ultra-Fast In-Memory C++ Graph",
        "description": "Need sub-millisecond Cypher traversals streaming directly from Kafka."
      },
      {
        "id": "p3",
        "label": "Managed AWS Multi-Protocol Graph",
        "description": "Need fully managed AWS service supporting openCypher, Gremlin, and SPARQL."
      },
      {
        "id": "e1",
        "label": "Neo4j",
        "description": "Market leader native property graph database."
      },
      {
        "id": "e2",
        "label": "Memgraph",
        "description": "In-memory C++ Cypher graph database built for streaming."
      },
      {
        "id": "e3",
        "label": "Amazon Neptune",
        "description": "Fully managed AWS graph database supporting multiple query languages."
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
