import { ComparisonWorkspaceData } from "../../services/llmService";

export const DB_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Relational vs Document vs Cache vs Wide-Column vs Search vs OLAP Datastores",
  "domainType": "tools",
  "overview": "A multi-dimensional engineering decision matrix evaluating PostgreSQL, MongoDB, Redis, Apache Cassandra, Elasticsearch, and ClickHouse across transactional safety, latency, sharding, vector search, and analytical throughput.",
  "recommendedApproach": "Adopt a Polyglot Persistence strategy: Use PostgreSQL as your primary transactional ACID source of truth, Redis as a high-speed caching tier, Elasticsearch/ClickHouse for search & analytics, and Cassandra for massive write-heavy time-series streams.",
  "criteria": [
    {
      "id": "c1",
      "label": "ACID Compliance & Multi-Row Transactions",
      "type": "categorical",
      "description": "Strict relational integrity, WAL logging, serializable isolation levels, and multi-table transactions.",
      "weight": 0.2
    },
    {
      "id": "c2",
      "label": "Query Expressiveness & Joins",
      "type": "categorical",
      "description": "Complex relational joins, window functions, CTE expressions, and aggregation pipelines.",
      "weight": 0.15
    },
    {
      "id": "c3",
      "label": "Schema Flexibility & DX",
      "type": "categorical",
      "description": "Dynamic schema-free iteration, JSON/BSON document structures, and zero-downtime migrations.",
      "weight": 0.15
    },
    {
      "id": "c4",
      "label": "Sub-Millisecond Read/Write Latency",
      "type": "categorical",
      "description": "In-memory speed and sub-1ms p99 query access latency.",
      "weight": 0.15
    },
    {
      "id": "c5",
      "label": "Horizontal Sharding & Scale-Out",
      "type": "categorical",
      "description": "Native cluster sharding, linear write scaling, and multi-region masterless replication.",
      "weight": 0.15
    },
    {
      "id": "c6",
      "label": "AI Vector Search (HNSW Embeddings)",
      "type": "categorical",
      "description": "Native ANN indexing, high-dimensional vector similarity, and RAG retrieval compatibility.",
      "weight": 0.1
    },
    {
      "id": "c7",
      "label": "OLAP Analytics & Columnar Speed",
      "type": "categorical",
      "description": "Column-oriented compression, vectorization, and multi-billion row query aggregation throughput.",
      "weight": 0.1
    }
  ],
  "options": [
    {
      "id": "opt_pg",
      "name": "PostgreSQL",
      "summary": "Battle-tested SQL engine with enterprise ACID guarantees, JSONB support, pgvector, and rich extension ecosystem.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "5/5 (Serializable)",
          "rating": 5,
          "note": "Full multi-row serializable ACID transactions with WAL"
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "5/5 (Full SQL)",
          "rating": 5,
          "note": "Rich JOINs, CTEs, Window Functions, and Recursive queries"
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "4/5 (Hybrid SQL/JSONB)",
          "rating": 4,
          "note": "Strict schemas with flexible GIN-indexed JSONB columns"
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "3.5/5 (~5-15ms)",
          "rating": 3,
          "note": "Sub-10ms queries with B-Tree indexes; tuning required"
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "3/5 (Citus/PgBouncer)",
          "rating": 3,
          "note": "Vertical scale primary; Citus required for horizontal sharding"
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "4.5/5 (pgvector HNSW)",
          "rating": 5,
          "note": "Native pgvector extension with HNSW & IVFFlat vector indexes"
        },
        "c7": {
          "criterionId": "c7",
          "displayValue": "3/5 (Row-Oriented)",
          "rating": 3,
          "note": "Row-based storage; requires DuckDB / Hydra for heavy OLAP"
        }
      },
      "tags": [
        "Primary DB",
        "SQL",
        "ACID",
        "Vector Search"
      ],
      "actions": [
        {
          "label": "PostgreSQL Docs",
          "href": "https://www.postgresql.org/docs/"
        },
        {
          "label": "Supabase Cloud",
          "href": "https://supabase.com/"
        }
      ]
    },
    {
      "id": "opt_mongo",
      "name": "MongoDB",
      "summary": "Developer-first document store with dynamic BSON schemas, native sharding clusters, and powerful aggregations.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "4/5 (Multi-Doc ACID)",
          "rating": 4,
          "note": "Multi-document transactions supported across replica sets"
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "4/5 (Aggregation Framework)",
          "rating": 4,
          "note": "Rich BSON pipeline with $lookup joins and $facet grouping"
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "5/5 (Schema-less BSON)",
          "rating": 5,
          "note": "Schema-agnostic documents for rapid feature iteration"
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "4/5 (~2-8ms)",
          "rating": 4,
          "note": "Fast single-document lookup with WiredTiger cache"
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "5/5 (Native Auto-Sharding)",
          "rating": 5,
          "note": "Built-in cluster sharding with automated chunk balancing"
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "4/5 (Atlas Vector Search)",
          "rating": 4,
          "note": "MongoDB Atlas Search vector indexing for RAG"
        },
        "c7": {
          "criterionId": "c7",
          "displayValue": "2.5/5 (BSON Aggregations)",
          "rating": 2,
          "note": "Row-based document scan overhead on massive analytical queries"
        }
      },
      "tags": [
        "NoSQL",
        "Document",
        "Auto-Sharding"
      ],
      "actions": [
        {
          "label": "MongoDB Atlas",
          "href": "https://www.mongodb.com/cloud/atlas"
        },
        {
          "label": "Aggregation Guide",
          "href": "https://www.mongodb.com/docs/manual/aggregation/"
        }
      ]
    },
    {
      "id": "opt_redis",
      "name": "Redis",
      "summary": "Ultra-low latency in-memory data structure store, high-speed caching engine, session broker, and pub/sub message bus.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "2/5 (Atomic Commands)",
          "rating": 2,
          "note": "Single-command atomicity & MULTI/EXEC, but weak ACID disk persistence"
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "2/5 (Key-Value Structures)",
          "rating": 2,
          "note": "Strings, Hashes, Sorted Sets, HyperLogLog; no relational JOINs"
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "4.5/5 (Key-Value Structures)",
          "rating": 5,
          "note": "No schema constraints; direct data structure manipulation"
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "5/5 (Sub-Millisecond p99)",
          "rating": 5,
          "note": "Sub-1ms in-memory read/write performance (< 500µs)"
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "4.5/5 (Redis Cluster)",
          "rating": 4,
          "note": "16,384 hash slot partitioning with Sentinel failover"
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "4/5 (RedisVL / RediSearch)",
          "rating": 4,
          "note": "RediSearch module providing real-time vector indexing"
        },
        "c7": {
          "criterionId": "c7",
          "displayValue": "1.5/5 (In-Memory Only)",
          "rating": 1,
          "note": "RAM cost prohibitive for multi-terabyte analytical queries"
        }
      },
      "tags": [
        "In-Memory",
        "Cache",
        "Sub-Millisecond"
      ],
      "actions": [
        {
          "label": "Redis Cloud",
          "href": "https://redis.io/"
        },
        {
          "label": "Commands Matrix",
          "href": "https://redis.io/commands/"
        }
      ]
    },
    {
      "id": "opt_cassandra",
      "name": "Apache Cassandra",
      "summary": "Masterless wide-column NoSQL database built for extreme write throughput and linear multi-datacenter horizontal scale.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "2/5 (Tunable Consistency)",
          "rating": 2,
          "note": "BASE consistency (Eventually Consistent / Lightweight Transactions)"
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "2/5 (CQL Partition Querying)",
          "rating": 2,
          "note": "Queries restricted to Partition Key; no JOINs or subqueries"
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "3/5 (CQL Schemas)",
          "rating": 3,
          "note": "Defined CQL tables with dynamic collections"
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "4.5/5 (Fast Append Writes)",
          "rating": 4,
          "note": "Sub-2ms append-only LSM tree write speed"
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "5/5 (Masterless Ring)",
          "rating": 5,
          "note": "Masterless peer-to-peer ring with zero single point of failure"
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "3.5/5 (Vector Search SAI)",
          "rating": 3,
          "note": "Storage-Attached Indexing (SAI) vector search capabilities"
        },
        "c7": {
          "criterionId": "c7",
          "displayValue": "3/5 (Spark Integration)",
          "rating": 3,
          "note": "Requires Spark-Cassandra Connector for analytical processing"
        }
      },
      "tags": [
        "Wide-Column",
        "Masterless",
        "Write-Heavy"
      ],
      "actions": [
        {
          "label": "Apache Cassandra",
          "href": "https://cassandra.apache.org/"
        },
        {
          "label": "DataStax Astra DB",
          "href": "https://www.datastax.com/"
        }
      ]
    },
    {
      "id": "opt_es",
      "name": "Elasticsearch",
      "summary": "Distributed inverted-index search and analytics engine for log management, full-text search, and vector retrieval.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "1.5/5 (Eventually Consistent)",
          "rating": 1,
          "note": "Index refresh interval latency (~1s); no transactional guarantees"
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "4.5/5 (Full-Text & Aggs)",
          "rating": 4,
          "note": "Rich Lucene query DSL, aggregations, fuzzy search, and stemmers"
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "4.5/5 (Dynamic Mapping)",
          "rating": 4,
          "note": "Auto-detecting JSON document mappings"
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "3.5/5 (~10-30ms)",
          "rating": 3,
          "note": "Fast inverted index lookups; higher memory footprint"
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "4.5/5 (Shard Clusters)",
          "rating": 4,
          "note": "Primary & Replica sharding with master node coordination"
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "4.5/5 (dense_vector HNSW)",
          "rating": 5,
          "note": "Lucene HNSW dense vector search with hybrid BM25 scoring"
        },
        "c7": {
          "criterionId": "c7",
          "displayValue": "4/5 (Analytics Aggs)",
          "rating": 4,
          "note": "Fast bucket aggregations for logs, metrics, and ELK telemetry"
        }
      },
      "tags": [
        "Full-Text Search",
        "Inverted Index",
        "Logs & ELK"
      ],
      "actions": [
        {
          "label": "Elastic Cloud",
          "href": "https://www.elastic.co/"
        },
        {
          "label": "Lucene Internals",
          "href": "https://lucene.apache.org/"
        }
      ]
    },
    {
      "id": "opt_ch",
      "name": "ClickHouse",
      "summary": "Column-oriented DBMS designed for real-time analytical reporting (OLAP) processing billions of rows per second.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "2/5 (Non-Transactional)",
          "rating": 2,
          "note": "Block-based batch insertion; non-ACID single-row updates"
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "4/5 (Vectorized SQL)",
          "rating": 4,
          "note": "Vectorized SQL with specialized analytical array functions"
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "3/5 (Strict Table Schemas)",
          "rating": 3,
          "note": "MergeTree engine table schemas requiring explicit column definitions"
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "3/5 (Batch Writes)",
          "rating": 3,
          "note": "Optimized for large batch inserts; high latency on single-row writes"
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "5/5 (Sharded MergeTree)",
          "rating": 5,
          "note": "Distributed MergeTree engines scaling to petabytes"
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "2.5/5 (Experimental Vector)",
          "rating": 2,
          "note": "Experimental ANN indexes; primarily column-oriented data"
        },
        "c7": {
          "criterionId": "c7",
          "displayValue": "5/5 (Sub-Second 100B Rows)",
          "rating": 5,
          "note": "10-100x faster analytical aggregation throughput than traditional RDBMS"
        }
      },
      "tags": [
        "OLAP",
        "Columnar",
        "Real-Time Analytics"
      ],
      "actions": [
        {
          "label": "ClickHouse Cloud",
          "href": "https://clickhouse.com/"
        },
        {
          "label": "Architecture Overview",
          "href": "https://clickhouse.com/docs/"
        }
      ]
    }
  ],
  "nextSteps": [
    "Identify your primary workload: OLTP (PostgreSQL), Document (MongoDB), Cache (Redis), Write-Heavy (Cassandra), Search (Elasticsearch), or Analytics (ClickHouse).",
    "Establish primary ACID source of truth first, then add complementary caches and search indexes as scale demands.",
    "Evaluate vector search needs: pgvector for all-in-one Postgres, or dedicated vector indexes for massive scale."
  ],
  "map": {
    "nodes": [
      {
        "id": "db_tree_root",
        "label": "Database Architecture Selection Tree",
        "description": "A comprehensive decision tree mapping data access patterns to optimal database engines.",
        "type": "topic",
        "importance": "high",
        "tags": [
          "decision-tree",
          "databases"
        ]
      },
      {
        "id": "branch_oltp",
        "label": "1. Transactional & Relational (OLTP)",
        "description": "Need strict multi-row ACID compliance, foreign keys, and complex SQL joins.",
        "type": "concept",
        "importance": "high",
        "tags": [
          "oltp",
          "acid"
        ]
      },
      {
        "id": "leaf_pg",
        "label": "PostgreSQL (Recommended General Purpose)",
        "description": "Primary store for user accounts, billing, e-commerce, and structured relational schemas.",
        "type": "decision",
        "importance": "high",
        "tags": [
          "postgresql"
        ]
      },
      {
        "id": "leaf_pgvector",
        "label": "PostgreSQL + pgvector (All-in-One RAG)",
        "description": "Ideal when you want vector search without operating a separate vector database.",
        "type": "decision",
        "importance": "medium",
        "tags": [
          "vector",
          "rag"
        ]
      },
      {
        "id": "branch_doc",
        "label": "2. Document & Dynamic Schemas",
        "description": "Need rapid schema iteration, polymorphic JSON documents, and out-of-the-box sharding.",
        "type": "concept",
        "importance": "high",
        "tags": [
          "document",
          "nosql"
        ]
      },
      {
        "id": "leaf_mongo",
        "label": "MongoDB Cluster",
        "description": "Best for content management, product catalogs, mobile backends, and flexible JSON APIs.",
        "type": "decision",
        "importance": "high",
        "tags": [
          "mongodb"
        ]
      },
      {
        "id": "branch_cache",
        "label": "3. Sub-Millisecond Speed & Caching",
        "description": "Need ultra-low latency <1ms read/write access for ephemeral data.",
        "type": "concept",
        "importance": "high",
        "tags": [
          "cache",
          "memory"
        ]
      },
      {
        "id": "leaf_redis",
        "label": "Redis Cache Layer",
        "description": "Essential for session storage, rate limiting, pub/sub queues, and database query caching.",
        "type": "decision",
        "importance": "high",
        "tags": [
          "redis"
        ]
      },
      {
        "id": "branch_write",
        "label": "4. Extreme Write Volume & Masterless",
        "description": "Need masterless multi-region write scaling across thousands of nodes.",
        "type": "concept",
        "importance": "high",
        "tags": [
          "write-heavy"
        ]
      },
      {
        "id": "leaf_cassandra",
        "label": "Apache Cassandra Cluster",
        "description": "Ideal for IoT sensor data, financial tick logs, and high-frequency write streams.",
        "type": "decision",
        "importance": "high",
        "tags": [
          "cassandra"
        ]
      },
      {
        "id": "branch_search",
        "label": "5. Full-Text Search & Log Analytics",
        "description": "Need inverted index search, fuzzy matching, and log aggregation.",
        "type": "concept",
        "importance": "high",
        "tags": [
          "search",
          "logs"
        ]
      },
      {
        "id": "leaf_es",
        "label": "Elasticsearch Cluster",
        "description": "Best for app search bars, ELK log monitoring, and hybrid vector search.",
        "type": "decision",
        "importance": "high",
        "tags": [
          "elasticsearch"
        ]
      },
      {
        "id": "branch_olap",
        "label": "6. Real-Time Columnar Analytics (OLAP)",
        "description": "Need sub-second aggregations over billions of telemetry rows.",
        "type": "concept",
        "importance": "high",
        "tags": [
          "olap",
          "columnar"
        ]
      },
      {
        "id": "leaf_clickhouse",
        "label": "ClickHouse Columnar Engine",
        "description": "Best for ad-tech analytics, user behavior tracking, and real-time dashboarding.",
        "type": "decision",
        "importance": "high",
        "tags": [
          "clickhouse"
        ]
      }
    ],
    "edges": [
      {
        "source": "db_tree_root",
        "target": "branch_oltp",
        "label": "ACID & Relational"
      },
      {
        "source": "branch_oltp",
        "target": "leaf_pg",
        "label": "Standard Transactional"
      },
      {
        "source": "branch_oltp",
        "target": "leaf_pgvector",
        "label": "AI & Vector Search"
      },
      {
        "source": "db_tree_root",
        "target": "branch_doc",
        "label": "Polymorphic Documents"
      },
      {
        "source": "branch_doc",
        "target": "leaf_mongo",
        "label": "BSON Sharded Cluster"
      },
      {
        "source": "db_tree_root",
        "target": "branch_cache",
        "label": "Sub-1ms Latency"
      },
      {
        "source": "branch_cache",
        "target": "leaf_redis",
        "label": "In-Memory Cache"
      },
      {
        "source": "db_tree_root",
        "target": "branch_write",
        "label": "Masterless Writes"
      },
      {
        "source": "branch_write",
        "target": "leaf_cassandra",
        "label": "LSM Write Ring"
      },
      {
        "source": "db_tree_root",
        "target": "branch_search",
        "label": "Full-Text & Logs"
      },
      {
        "source": "branch_search",
        "target": "leaf_es",
        "label": "Inverted Index"
      },
      {
        "source": "db_tree_root",
        "target": "branch_olap",
        "label": "Billion-Row Aggs"
      },
      {
        "source": "branch_olap",
        "target": "leaf_clickhouse",
        "label": "Columnar Storage"
      }
    ]
  }
};
