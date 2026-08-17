import { ComparisonWorkspaceData } from "../../services/llmService";

export const DB_INDEXING_STRUCTURES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Database Indexing Structures: B+ Trees vs LSM-Trees vs Inverted Indexes",
  "domainType": "concepts",
  "overview": "A low-level database storage engine comparison evaluating read vs write amplification, random I/O vs sequential write throughput, memory buffer compaction, and range scan performance.",
  "recommendedApproach": "Use B+ Trees for read-heavy OLTP databases requiring fast range scans; use LSM-Trees for high-write-throughput databases; use Inverted Indexes for full-text search.",
  "criteria": [
    {
      "id": "c1",
      "label": "Write Amplification & Sequential I/O",
      "type": "text",
      "description": "Sequential append writes (SSTables) vs random page updates."
    },
    {
      "id": "c2",
      "label": "Point Lookups vs Range Scan Performance",
      "type": "text",
      "description": "Traversing B+ Tree linked leaf pages vs multi-level LSM SSTable merge scans."
    },
    {
      "id": "c3",
      "label": "Disk Space Overhead & Compaction",
      "type": "text",
      "description": "Page fragmentation vs Size-Tiered / Leveled Compaction."
    },
    {
      "id": "c4",
      "label": "Memory Buffer Architecture (MemTable vs Buffer Pool)",
      "type": "text",
      "description": "MemTable WAL appends vs LRU Buffer Pool page caching."
    },
    {
      "id": "c5",
      "label": "Primary Database Implementations",
      "type": "text",
      "description": "PostgreSQL/MySQL (B+ Tree) vs RocksDB/Cassandra (LSM) vs Lucene (Inverted Index)."
    },
    {
      "id": "c6",
      "label": "Hardware Suitability (SSD / NVMe Lifetime)",
      "type": "text",
      "description": "Impact of write amplification on flash memory wear."
    }
  ],
  "options": [
    {
      "id": "b-plus-tree",
      "name": "B+ Tree Index",
      "summary": "The classic self-balancing search tree structure powering relational OLTP databases like PostgreSQL and MySQL.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Random Page Writes",
          "note": "Updates 8KB/16KB disk pages in-place; higher write amplification under heavy random writes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Point & Range)",
          "note": "Doubly-linked leaf nodes enable ultra-fast sequential range scans (SELECT WHERE age BETWEEN 20 AND 30)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Page Fragmentation",
          "note": "Page splits cause disk fragmentation over time, requiring VACUUM / OPTIMIZE TABLE."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Buffer Pool LRU Cache",
          "note": "Caches disk pages in RAM via Buffer Pool with WAL logging."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Postgres (B-Tree), MySQL (InnoDB)",
          "note": "The universal indexing structure for relational OLTP."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High Write Amplification",
          "note": "In-place page updates wear NVMe cells faster under high write volume."
        }
      },
      "tags": [
        "B+ Tree",
        "Postgres",
        "MySQL",
        "OLTP",
        "Range Scans"
      ]
    },
    {
      "id": "lsm-tree",
      "name": "LSM-Tree (Log-Structured Merge-Tree)",
      "summary": "Write-optimized data structure that converts random writes into sequential disk append operations.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Sequential Writes)",
          "note": "Writes incoming data sequentially to MemTable and WAL log, eliminating random disk I/O."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Bloom Filter Assisted",
          "note": "Uses Bloom Filters to avoid checking every SSTable file on disk during point lookups."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Leveled / Size-Tiered Compaction",
          "note": "Background thread merges and deduplicates SSTables continuously."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "MemTable + Immutable SSTables",
          "note": "Flushes in-memory MemTables to immutable sorted SSTable files on disk."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "RocksDB, Cassandra, ClickHouse",
          "note": "The standard for high-write-throughput NoSQL, time-series, and columnar storage."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "NVMe Friendly",
          "note": "Sequential writes minimize Flash/SSD memory wear."
        }
      },
      "tags": [
        "LSM-Tree",
        "RocksDB",
        "Cassandra",
        "High-Write",
        "SSTable"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose B+ Tree indexes for relational OLTP databases requiring fast multi-row range queries.",
    "Choose LSM-Tree storage engines (RocksDB/Cassandra) for high-write-throughput telemetry and IoT workloads.",
    "Tune Bloom Filter precision and Compaction policies to optimize read latency on LSM-Trees."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Index Structure Selection",
        "description": "Choosing the database index architecture."
      },
      {
        "id": "p1",
        "label": "Read-Heavy OLTP & Fast Range Queries",
        "description": "Need doubly-linked leaf node B+ Trees for fast point lookups and range scans in Postgres/MySQL."
      },
      {
        "id": "p2",
        "label": "High-Write Throughput Sequential I/O",
        "description": "Need LSM-Tree MemTables and SSTables to convert random writes to sequential append operations."
      },
      {
        "id": "e1",
        "label": "B+ Tree Index",
        "description": "Classic indexing engine powering relational OLTP databases."
      },
      {
        "id": "e2",
        "label": "LSM-Tree",
        "description": "Write-optimized log-structured merge index powering RocksDB."
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
