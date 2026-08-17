import { ComparisonWorkspaceData } from "../../services/llmService";

export const IN_MEMORY_CACHE_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "In-Memory Data Stores & Caches: Redis vs Valkey vs DragonFly vs Memcached",
  "domainType": "tools",
  "overview": "A performance evaluation of in-memory caching platforms comparing single-threaded event loops vs multi-threaded architectures, data structures, persistence (RDB/AOF), and licensing.",
  "recommendedApproach": "Use Valkey or Redis 7 as the open-source industry standard for caching, pub/sub, and data structures; use DragonFly for multi-threaded high-throughput drop-in speed; use Memcached for simple multithreaded key-value caching.",
  "criteria": [
    {
      "id": "c1",
      "label": "Multi-Threading Architecture & CPU Core Scaling",
      "type": "text",
      "description": "Single-threaded event loop vs multi-threaded I/O vs multi-threaded shared-nothing execution."
    },
    {
      "id": "c2",
      "label": "Data Structures & Complex Types",
      "type": "text",
      "description": "Hashes, Lists, Sets, Sorted Sets (ZSET), Bitmaps, HyperLogLogs, Geospatial, and Streams."
    },
    {
      "id": "c3",
      "label": "Persistence & Disaster Recovery (RDB / AOF)",
      "type": "text",
      "description": "Disk snapshots (RDB), append-only logs (AOF), and replica synchronization."
    },
    {
      "id": "c4",
      "label": "Open Source Licensing & Community Governance",
      "type": "text",
      "description": "BSD / Linux Foundation (Valkey) vs RSALv2/SSPL (Redis) vs Apache 2.0."
    },
    {
      "id": "c5",
      "label": "Memory Efficiency & Eviction Policies",
      "type": "text",
      "description": "LRU/LFU eviction algorithms, memory fragmentation, and RAM footprint per key."
    },
    {
      "id": "c6",
      "label": "Clustering & High Availability (Sentinel / Cluster)",
      "type": "text",
      "description": "Redis Cluster auto-sharding, Sentinel failover, and multi-node replication."
    }
  ],
  "options": [
    {
      "id": "valkey",
      "name": "Valkey (Linux Foundation)",
      "summary": "The open-source, community-governed BSD-licensed fork of Redis backed by AWS, Google, and Linux Foundation.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Single-Thread + Multi-I/O",
          "note": "High-performance event loop with multi-threaded socket I/O."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Complete Redis Parity",
          "note": "100% compatible with all Redis data structures, Pub/Sub, and Lua scripting."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "RDB & AOF",
          "note": "Full snapshot and append-only log disk persistence."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "BSD (Linux Foundation)",
          "note": "Truly open-source software governed by the Linux Foundation."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Highly Optimized",
          "note": "Jemalloc memory allocator with configurable LRU/LFU policies."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Native Cluster & Sentinel",
          "note": "100% drop-in replacement for Redis Cluster and Sentinel."
        }
      },
      "tags": [
        "Valkey",
        "Linux Foundation",
        "Open-Source",
        "BSD"
      ]
    },
    {
      "id": "dragonfly",
      "name": "DragonFly",
      "summary": "Modern, multi-threaded in-memory data store compatible with Redis/Memcached APIs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Multi-Threaded",
          "note": "Shared-nothing thread architecture scales linearly across 64+ CPU cores."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Redis API Compatible",
          "note": "Supports core Redis data structures and commands."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "RDB Compatible",
          "note": "Reads and writes standard Redis RDB snapshot files."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "BSL License",
          "note": "Business Source License transitioning to Apache 2.0 after 4 years."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "25% Less Memory",
          "note": "Custom Vellum memory structure eliminates fragmentation, storing 25% more data in same RAM."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Single Instance Scale",
          "note": "Single DragonFly instance handles up to 4 million QPS without complex Redis Cluster setup."
        }
      },
      "tags": [
        "DragonFly",
        "Multi-Threaded",
        "High-QPS",
        "Memory-Efficient"
      ]
    },
    {
      "id": "redis",
      "name": "Redis (v7 / Enterprise)",
      "summary": "The pioneer in-memory data structure store that defined modern caching.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Single-Thread Core",
          "note": "Single-threaded command execution guarantees atomic operations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Universal Benchmark",
          "note": "Pioneered ZSETs, Streams, Bitmaps, and RedisJSON / RediSearch modules."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "RDB & AOF",
          "note": "Standard disk persistence options."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "RSALv2 / SSPL",
          "note": "Dual dual-licensed under Redis Source Available License."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Excellent",
          "note": "Configurable maxmemory eviction policies."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Standard",
          "note": "Supported natively on AWS ElastiCache and Redis Cloud."
        }
      },
      "tags": [
        "Redis",
        "Pioneer",
        "Data Structures",
        "In-Memory"
      ]
    },
    {
      "id": "memcached",
      "name": "Memcached",
      "summary": "High-performance, multi-threaded in-memory key-value caching system.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Multi-Threaded",
          "note": "Native multi-threaded architecture utilizes all server CPU cores."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Key-Value Only",
          "note": "Simple string/binary key-value storage; no complex data structures or lists."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Purely Ephemeral",
          "note": "No disk persistence; data is completely cleared on server reboot."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "BSD License",
          "note": "100% open-source BSD license."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Slab Allocator",
          "note": "Slab allocation prevents memory fragmentation."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Client-Side Sharding",
          "note": "Relies on client hashing (Consistent Hashing) for multi-node clusters."
        }
      },
      "tags": [
        "Memcached",
        "Simple KV",
        "Multi-Threaded",
        "Ephemeral"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Valkey for an open-source, BSD-licensed 100% drop-in replacement for Redis.",
    "Choose DragonFly if running high-throughput single-node caches needing multi-core CPU scaling.",
    "Choose Memcached if you only need lightweight, multi-threaded key-value string caching.",
    "Monitor cache hit ratio, memory fragmentation ratio, and eviction rates."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "In-Memory Cache Selection",
        "description": "Choosing the right in-memory database and caching layer."
      },
      {
        "id": "p1",
        "label": "Open-Source BSD Standard with Data Structures",
        "description": "Need rich data structures (ZSETs, Hashes, Pub/Sub) under open-source governance."
      },
      {
        "id": "p2",
        "label": "Ultra-High QPS Multi-Threaded Core Scaling",
        "description": "Single-node cache processing millions of QPS across 64+ CPU cores."
      },
      {
        "id": "p3",
        "label": "Simple Ephemeral Key-Value Caching",
        "description": "Lightweight multi-threaded string key-value cache with no disk persistence."
      },
      {
        "id": "e1",
        "label": "Valkey",
        "description": "Linux Foundation open-source drop-in replacement for Redis."
      },
      {
        "id": "e2",
        "label": "DragonFly",
        "description": "Multi-threaded shared-nothing in-memory store for extreme QPS."
      },
      {
        "id": "e3",
        "label": "Memcached",
        "description": "Simple multi-threaded ephemeral key-value memory cache."
      },
      {
        "id": "e4",
        "label": "Redis",
        "description": "Pioneer data structure store."
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
