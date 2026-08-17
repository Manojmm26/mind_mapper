import { ComparisonWorkspaceData } from "../../services/llmService";

export const DB_PARADIGMS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Primary Database Storage Paradigms: Relational (SQL) vs Document (NoSQL) vs Wide-Column vs Graph vs Time-Series",
  "domainType": "concepts",
  "overview": "A architectural comparison of fundamental database storage paradigms evaluating data modeling flexibility, ACID transaction guarantees, horizontal scale, and query expressiveness.",
  "recommendedApproach": "Use Relational SQL (Postgres) as the default for structured transactional domain models; use Document NoSQL for flexible JSON schemas; use Wide-Column (Cassandra) for massive write-heavy IoT; use Graph for complex entity networks.",
  "criteria": [
    {
      "id": "c1",
      "label": "Data Modeling Flexibility vs Schema Enforcement",
      "type": "text",
      "description": "Strict relational tables and foreign keys vs schema-less dynamic JSON documents."
    },
    {
      "id": "c2",
      "label": "ACID Transaction Guarantees",
      "type": "text",
      "description": "Multi-row strict ACID consistency vs eventual consistency BASE models."
    },
    {
      "id": "c3",
      "label": "Horizontal Read/Write Scalability",
      "type": "text",
      "description": "Single-node vertical scaling vs automatic multi-master linear sharding."
    },
    {
      "id": "c4",
      "label": "Query Expressiveness & JOIN Performance",
      "type": "text",
      "description": "Complex SQL JOINs and CTEs vs key-value lookups or Cypher graph traversals."
    },
    {
      "id": "c5",
      "label": "Storage Engine Optimization",
      "type": "text",
      "description": "B+ Trees, LSM-Trees, Columnar compressed stores, or Adjacency lists."
    },
    {
      "id": "c6",
      "label": "Operational Maturity & Tooling",
      "type": "text",
      "description": "ORMs, migrations, backup tools, and community expertise."
    }
  ],
  "options": [
    {
      "id": "relational-sql",
      "name": "Relational (PostgreSQL / MySQL)",
      "summary": "Normalized table architecture enforcing foreign keys and strict ACID transactions via SQL.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Strict Schema (JSONB support)",
          "note": "Enforces table columns, foreign keys, and constraints (Postgres adds JSONB)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Full Multi-Row ACID",
          "note": "Serializable and Read Committed isolation levels guarantee zero financial corruption."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Vertical + Read Replicas",
          "note": "Scales vertically; distributed SQL (CockroachDB/Yugabyte) adds multi-region sharding."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class (SQL)",
          "note": "Arbitrary JOINs, aggregation functions, window functions, and subqueries."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "B+ Tree Storage",
          "note": "Optimized for fast point lookups and ordered index scans."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal Standard",
          "note": "Ubiquitous ORMs (Prisma, Drizzle, Hibernate) and DBA expertise."
        }
      },
      "tags": [
        "SQL",
        "ACID",
        "Postgres",
        "Normalized"
      ]
    },
    {
      "id": "document-nosql",
      "name": "Document Store (MongoDB / DocumentDB)",
      "summary": "Stores data as flexible JSON/BSON documents matching application object hierarchies.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Dynamic Schema-less",
          "note": "Evolve data models by adding fields without running schema migrations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Single-Document ACID",
          "note": "Atomic updates on nested documents (multi-document transactions supported)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Built-in Sharding",
          "note": "Horizontal scale out across shard keys built natively into cluster."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Aggregation Pipeline",
          "note": "Rich JSON query language ($match, $group, $lookup joins)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "WiredTiger B-Tree",
          "note": "In-memory cache and compressed block storage."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Extensive",
          "note": "Popular choice for rapid prototyping and content management."
        }
      },
      "tags": [
        "JSON",
        "MongoDB",
        "NoSQL",
        "Sharding"
      ]
    },
    {
      "id": "wide-column",
      "name": "Wide-Column (Cassandra / ScyllaDB)",
      "summary": "Distributed LSM-tree storage engine designed for massive write throughput and high availability.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Partition Key Bound",
          "note": "Data modeled strictly around query access patterns and partition keys."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Eventual Consistency",
          "note": "Tunable consistency (ONE, QUORUM, ALL) via Paxos/Lightweight transactions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Linear Scale Out",
          "note": "Masterless ring architecture scaling linearly to hundreds of nodes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Restricted (No JOINs)",
          "note": "CQL queries must supply partition key; no relational JOINs allowed."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "LSM-Tree Storage",
          "note": "Sequential disk writes deliver millions of writes per second."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Specialized",
          "note": "Requires dedicated database engineering for data modeling."
        }
      },
      "tags": [
        "Cassandra",
        "LSM-Tree",
        "High-Write",
        "Masterless"
      ]
    },
    {
      "id": "graph-db",
      "name": "Graph Database (Neo4j / Memgraph)",
      "summary": "Stores nodes and relationships natively for fast graph traversal without JOIN tables.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Graph Schemas",
          "note": "Nodes and edges carry arbitrary key-value properties."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "ACID Compliant",
          "note": "Guarantees transaction integrity during complex multi-hop graph updates."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Scale Up / Sharded",
          "note": "High-performance single-node memory structures; sharding complex graphs is challenging."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Cypher / Gremlin",
          "note": "Declarative graph query language for pattern matching (e.g. (a)-[:KNOWS]->(b))."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Index-Free Adjacency",
          "note": "Pointer chasing directly traverses relationships in $\\mathcal{O}(1)$ time."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Domain Specific",
          "note": "Standard for fraud detection, social networks, and knowledge graphs."
        }
      },
      "tags": [
        "Neo4j",
        "Graph",
        "Cypher",
        "Knowledge Graph"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Start with PostgreSQL as the default choice unless a specific non-relational requirement exists.",
    "Choose MongoDB if domain objects are deeply nested JSON with unpredictable fields.",
    "Choose Cassandra / ScyllaDB if write throughput exceeds 100,000 writes/sec across global regions.",
    "Choose Neo4j / Memgraph if queries require multi-hop relationship traversals (> 3 degrees)."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Database Paradigm Selection",
        "description": "Selecting the foundational data model for application backends."
      },
      {
        "id": "p1",
        "label": "Structured Relational & ACID Transactions",
        "description": "Need strict foreign key integrity, financial transactions, and complex SQL joins."
      },
      {
        "id": "p2",
        "label": "Flexible JSON Document Hierarchies",
        "description": "Rapidly evolving schemas, content catalogs, and nested document trees."
      },
      {
        "id": "p3",
        "label": "Massive Scale Write-Heavy Event Log",
        "description": "High-velocity telemetry streaming requiring linear horizontal scale out."
      },
      {
        "id": "p4",
        "label": "Highly Connected Entity Networks",
        "description": "Social connections, fraud rings, recommendation graphs, and knowledge bases."
      },
      {
        "id": "e1",
        "label": "Relational SQL (PostgreSQL)",
        "description": "Standard ACID transactional database with JSONB capabilities."
      },
      {
        "id": "e2",
        "label": "Document NoSQL (MongoDB)",
        "description": "Dynamic BSON document storage with built-in sharding."
      },
      {
        "id": "e3",
        "label": "Wide-Column (Cassandra)",
        "description": "Masterless LSM-tree cluster for ultra-high write volume."
      },
      {
        "id": "e4",
        "label": "Graph Database (Neo4j)",
        "description": "Index-free adjacency engine optimized for Cypher pattern matching."
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
