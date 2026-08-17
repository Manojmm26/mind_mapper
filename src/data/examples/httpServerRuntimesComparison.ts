import { ComparisonWorkspaceData } from "../../services/llmService";

export const HTTP_SERVER_RUNTIMES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "High-Performance HTTP Server Frameworks: Actix-web (Rust) vs Netty (Java) vs Gin (Go) vs Fastify (Node)",
  "domainType": "tools",
  "overview": "A web server benchmark evaluation comparing asynchronous non-blocking event loops, memory allocation, request-per-second (RPS) throughput, and developer ergonomics.",
  "recommendedApproach": "Use Actix-web (Rust) for top-tier TechEmpower RPS benchmark speed; use Gin (Go) for fast cloud microservices; use Fastify (Node) for high-speed JS/TS web APIs.",
  "criteria": [
    {
      "id": "c1",
      "label": "TechEmpower RPS Throughput & Latency",
      "type": "text",
      "description": "Requests per second (RPS) benchmark ranking under heavy concurrent load."
    },
    {
      "id": "c2",
      "label": "Memory Footprint per Connection",
      "type": "text",
      "description": "RAM overhead allocated per active client connection."
    },
    {
      "id": "c3",
      "label": "Non-Blocking Async Event Loop",
      "type": "text",
      "description": "Tokio async (Rust) vs Netty NIO (Java) vs libuv (Node) vs Goroutines (Go)."
    },
    {
      "id": "c4",
      "label": "Developer Velocity & Middleware Ecosystem",
      "type": "text",
      "description": "Ease of writing handlers, middleware, and request validation."
    },
    {
      "id": "c5",
      "label": "Type Safety & Compile-Time Checking",
      "type": "text",
      "description": "Compile-time route handler type safety vs runtime introspection."
    },
    {
      "id": "c6",
      "label": "Production Industry Adoption",
      "type": "text",
      "description": "Usage in high-scale enterprise production environments."
    }
  ],
  "options": [
    {
      "id": "actix-web",
      "name": "Actix-web (Rust)",
      "summary": "Extremely fast, memory-safe web framework for Rust built on Tokio.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Top Tier (#1 - #3 TechEmpower)",
          "note": "Consistently ranks at the absolute top of global TechEmpower benchmarks for raw RPS."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Minimal RAM",
          "note": "Minimal RAM overhead without garbage collection pauses."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Tokio Async Engine",
          "note": "Powered by Tokio asynchronous non-blocking runtime."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Rust Ergonomics",
          "note": "Type-safe extractors (web::Json, web::Path) and middleware pipelines."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Compile-Time Safe",
          "note": "Rust compiler catches type errors and data races at compile time."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Rust Web Standard",
          "note": "The flagship web framework in the Rust ecosystem."
        }
      },
      "tags": [
        "Actix-web",
        "Rust",
        "TechEmpower #1",
        "Tokio",
        "Fastest"
      ]
    },
    {
      "id": "gin",
      "name": "Gin (Go)",
      "summary": "A high-performance HTTP web framework written in Go featuring a custom radxtree router.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Ultra-Fast (40x faster than Martini)",
          "note": "Custom radix tree router delivers sub-millisecond HTTP routing."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Lightweight Goroutines",
          "note": "Goroutines handle thousands of concurrent connections efficiently."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Go Net/HTTP Engine",
          "note": "Built on Go's battle-tested net/http package."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Intuitive Middleware",
          "note": "Simple gin.Context handlers and middleware chains."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Strong Static Types",
          "note": "Typed Go struct binding and JSON validation."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Dominant Go Framework",
          "note": "Most popular Go web framework worldwide."
        }
      },
      "tags": [
        "Gin",
        "Go",
        "Radix Tree",
        "Fast",
        "Microservices"
      ]
    },
    {
      "id": "fastify",
      "name": "Fastify (Node.js)",
      "summary": "Fast and low overhead web framework for Node.js focused on high performance and JSON schema validation.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fastest Node Framework",
          "note": "Serves up to 2x more requests than Express.js using fast-json-stringify."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "V8 Engine Optimized",
          "note": "JIT-optimized internal structure."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Libuv Event Loop",
          "note": "Asynchronous event-driven Node.js runtime."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Plugin Architecture",
          "note": "Encapsulated plugin hierarchy and JSON Schema validation."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "TypeScript Native",
          "note": "First-class TypeScript type definitions."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Modern Node Choice",
          "note": "The modern replacement for legacy Express.js."
        }
      },
      "tags": [
        "Fastify",
        "Node.js",
        "TypeScript",
        "Fast JSON",
        "Express Replacement"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Actix-web (Rust) for absolute maximum RPS throughput and low-latency microservices.",
    "Choose Gin (Go) for fast, lightweight Go backend APIs.",
    "Choose Fastify (Node.js) for high-performance TypeScript web applications."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "HTTP Framework Selection",
        "description": "Choosing the web server runtime framework."
      },
      {
        "id": "p1",
        "label": "Absolute Maximum TechEmpower RPS & Zero GC (Rust)",
        "description": "Need top-tier RPS benchmark performance with Rust memory safety."
      },
      {
        "id": "p2",
        "label": "Fast Go Radix-Tree Microservice Routing",
        "description": "Need intuitive Go goroutine concurrency and sub-millisecond routing."
      },
      {
        "id": "p3",
        "label": "High-Speed TypeScript Node.js Framework",
        "description": "Need fast JSON stringification and plugin hierarchy replacing Express."
      },
      {
        "id": "e1",
        "label": "Actix-web",
        "description": "Ultra-fast Rust web framework."
      },
      {
        "id": "e2",
        "label": "Gin",
        "description": "Popular fast Go web framework."
      },
      {
        "id": "e3",
        "label": "Fastify",
        "description": "High-performance Node.js web framework."
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
