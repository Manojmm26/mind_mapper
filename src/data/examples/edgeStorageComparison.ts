import { ComparisonWorkspaceData } from "../../services/llmService";

export const EDGE_STORAGE_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Edge Storage & Databases: Cloudflare KV / D1 / Durable Objects vs Upstash Redis vs Neon Postgres",
  "domainType": "services",
  "overview": "An edge architecture comparison evaluating global read latency, strong vs eventual consistency, SQL vs KV data models, and edge compute binding.",
  "recommendedApproach": "Use Cloudflare Workers KV for fast read-heavy global key-values; use Cloudflare Durable Objects for strongly consistent single-location state & WebSockets; use Upstash Redis for global serverless Redis.",
  "criteria": [
    {
      "id": "c1",
      "label": "Edge Read Latency & Global Caching",
      "type": "text",
      "description": "Sub-10ms reads directly from nearest edge point of presence."
    },
    {
      "id": "c2",
      "label": "Consistency Model (Eventual vs Strong / Single-Location)",
      "type": "text",
      "description": "Eventual consistency propagation vs strongly consistent single-point coordination."
    },
    {
      "id": "c3",
      "label": "Data Model (Key-Value vs Relational SQL vs Document)",
      "type": "text",
      "description": "Key-value pairs vs SQLite relational tables vs Redis data structures."
    },
    {
      "id": "c4",
      "label": "Serverless Connection Pooling",
      "type": "text",
      "description": "Handling thousands of concurrent serverless function connections without max_connections errors."
    },
    {
      "id": "c5",
      "label": "Edge Worker Integration",
      "type": "text",
      "description": "Zero-latency JavaScript bindings inside Cloudflare Workers or Vercel Edge."
    },
    {
      "id": "c6",
      "label": "Pricing Scaling (Pay-per-Request vs Storage)",
      "type": "text",
      "description": "Generous free tiers and request-based pricing."
    }
  ],
  "options": [
    {
      "id": "cloudflare-kv",
      "name": "Cloudflare Workers KV",
      "summary": "Global, low-latency key-value data store optimized for high-volume read workloads.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Reads (< 10ms)",
          "note": "Caches keys directly on Cloudflare edge locations worldwide for instant reads."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Eventual Consistency",
          "note": "Writes take up to 60 seconds to propagate globally across all edge nodes."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Key-Value Pairs",
          "note": "Simple string, JSON, or stream value storage per key."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "HTTP Native",
          "note": "Zero connection limits; handles millions of concurrent edge requests."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Native Worker Binding",
          "note": "Direct env.MY_KV.get() binding inside Cloudflare Workers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100k Free Reads / Day",
          "note": "Included in Cloudflare Workers free plan."
        }
      },
      "tags": [
        "Cloudflare KV",
        "Read-Heavy",
        "Eventual Consistency",
        "Edge"
      ]
    },
    {
      "id": "upstash-redis",
      "name": "Upstash Redis",
      "summary": "Serverless Redis database designed for edge functions with REST API access.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast Edge Read/Write",
          "note": "Global multi-region replication delivers fast reads near users."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Strong Primary",
          "note": "Primary write location with asynchronous multi-region read replicas."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Full Redis API",
          "note": "Supports Redis Hashes, Sets, ZSETs, and Rate Limiting algorithms."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "HTTP / REST API",
          "note": "Bypasses TCP connection limits by exposing HTTP REST endpoint for serverless/edge functions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Vercel & Cloudflare",
          "note": "Official partner for Vercel KV and Cloudflare Workers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Pay-per-Command",
          "note": "Pay strictly for commands executed ($0.20 per 100k requests)."
        }
      },
      "tags": [
        "Upstash",
        "Serverless Redis",
        "HTTP REST API",
        "Vercel KV"
      ]
    },
    {
      "id": "cloudflare-d1",
      "name": "Cloudflare D1 (Serverless SQLite)",
      "summary": "Cloudflare's native serverless relational database built on SQLite.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Edge Read Caching",
          "note": "Fast reads cached near Cloudflare Workers."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Single Primary Write",
          "note": "Single primary SQLite database guarantees transaction consistency."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Relational SQL",
          "note": "Standard SQLite SQL syntax with Drizzle ORM support."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Worker Bound",
          "note": "Direct JS binding (env.DB.prepare()) inside Cloudflare Workers."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Native Worker Binding",
          "note": "Zero TCP overhead; executes directly in Worker event loop."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "5GB Free",
          "note": "Generous free allowance in Cloudflare Workers."
        }
      },
      "tags": [
        "Cloudflare D1",
        "SQLite",
        "Relational SQL",
        "Edge"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Cloudflare Workers KV for static site config, user session tokens, and read-heavy assets.",
    "Use Upstash Redis for serverless rate limiting, caching, and atomic counters.",
    "Use Cloudflare D1 for lightweight relational SQL data inside Cloudflare Workers."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Edge Storage Selection",
        "description": "Choosing the database layer for edge compute functions."
      },
      {
        "id": "p1",
        "label": "Read-Heavy Global Key-Value Store",
        "description": "Need sub-10ms edge reads for configuration and static tokens."
      },
      {
        "id": "p2",
        "label": "Serverless Redis Data Structures & Rate Limiting",
        "description": "Need HTTP REST Redis API for atomic counters and rate limiting in Vercel/Cloudflare functions."
      },
      {
        "id": "p3",
        "label": "Serverless Relational SQLite on Edge",
        "description": "Need SQL queries and Drizzle ORM directly inside Cloudflare Workers."
      },
      {
        "id": "e1",
        "label": "Cloudflare Workers KV",
        "description": "Global eventually consistent key-value store."
      },
      {
        "id": "e2",
        "label": "Upstash Redis",
        "description": "Serverless HTTP Redis database for edge functions."
      },
      {
        "id": "e3",
        "label": "Cloudflare D1",
        "description": "Serverless relational SQLite database."
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
