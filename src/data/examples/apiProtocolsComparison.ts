import { ComparisonWorkspaceData } from "../../services/llmService";

export const API_PROTOCOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "API Communication Protocols: REST (OpenAPI) vs GraphQL vs gRPC (HTTP/2) vs tRPC",
  "domainType": "concepts",
  "overview": "An API architectural evaluation comparing RESTful HTTP endpoints, GraphQL over/under-fetching elimination, gRPC high-performance Protobuf binary streaming, and tRPC zero-codegen TypeScript end-to-end type safety.",
  "recommendedApproach": "Use tRPC for full-stack TypeScript Next.js apps; use gRPC for high-throughput microservice-to-microservice RPCs; use REST/OpenAPI for public third-party APIs; use GraphQL for complex client data graphs.",
  "criteria": [
    {
      "id": "c1",
      "label": "Type Safety & Codegen Requirement",
      "type": "text",
      "description": "Zero-codegen TypeScript type inference vs protoc schema compilation."
    },
    {
      "id": "c2",
      "label": "Over-Fetching & Under-Fetching Elimination",
      "type": "text",
      "description": "Requesting exact field selections vs fixed REST JSON payloads."
    },
    {
      "id": "c3",
      "label": "Wire Payload Size & Binary Compression",
      "type": "text",
      "description": "Binary Protobuf payload size vs human-readable JSON text."
    },
    {
      "id": "c4",
      "label": "Streaming Capabilities (Server-Sent Events, WebSockets, gRPC Streaming)",
      "type": "text",
      "description": "Bidirectional HTTP/2 streaming vs GraphQL subscriptions."
    },
    {
      "id": "c5",
      "label": "Public API Developer Ergonomics & Caching",
      "type": "text",
      "description": "HTTP GET caching via CDNs and OpenAPI Swagger documentation."
    },
    {
      "id": "c6",
      "label": "Ecosystem Tooling (Postman, Swagger, Client SDKs)",
      "type": "text",
      "description": "Ubiquity of tooling across web, mobile, and backend languages."
    }
  ],
  "options": [
    {
      "id": "trpc",
      "name": "tRPC",
      "summary": "End-to-end type-safe APIs without GraphQL or code generation for TypeScript applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Zero Codegen)",
          "note": "Imports backend TypeScript router types directly into frontend for instant 100% type safety with zero build/codegen step."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Procedure Driven",
          "note": "Defines query/mutation procedures; handles data requirements cleanly."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "JSON (SuperJSON)",
          "note": "Uses JSON / SuperJSON serialization over standard HTTP."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "SSE & Subscriptions",
          "note": "Supports Server-Sent Events (SSE) and WebSocket subscriptions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "TypeScript Full-Stack",
          "note": "Ideal for monorepos and full-stack Next.js / React applications."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "TanStack Query Integration",
          "note": "Built directly on top of TanStack Query (React Query) hooks."
        }
      },
      "tags": [
        "tRPC",
        "TypeScript",
        "Zero-Codegen",
        "Type-Safe",
        "Next.js"
      ]
    },
    {
      "id": "grpc",
      "name": "gRPC (Google)",
      "summary": "High-performance, open-source universal RPC framework created by Google running on HTTP/2.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Protobuf Schema Codegen",
          "note": "Compiles strongly-typed client stubs across C++, Rust, Go, Java, Python, and TS using protoc."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Exact RPC Methods",
          "note": "Executes predefined RPC functions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (Protobuf Binary)",
          "note": "Uses compact binary Protocol Buffers over HTTP/2 multiplexed streams."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native HTTP/2 Streaming",
          "note": "Supports Unary, Server Streaming, Client Streaming, and Bidirectional Streaming."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Microservice Backbone",
          "note": "The de facto standard for inter-service backend RPCs in Kubernetes."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "gRPC-Web / Envoy",
          "note": "Requires gRPC-Web or Envoy proxy for direct browser calls."
        }
      },
      "tags": [
        "gRPC",
        "Protobuf",
        "HTTP/2",
        "Microservices",
        "Google"
      ]
    },
    {
      "id": "graphql",
      "name": "GraphQL",
      "summary": "Query language for APIs giving clients the power to ask for exactly what they need.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "GraphQL Schema (.graphql)",
          "note": "Defines schema SDL; generates types via GraphQL Code Generator."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Zero Over-Fetching)",
          "note": "Clients request exact field shapes in a single query payload, eliminating over-fetching."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "JSON Payload",
          "note": "Standard HTTP POST with JSON response payload."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "GraphQL Subscriptions",
          "note": "WebSocket subscriptions for real-time data pushes."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "GraphiQL & Federation",
          "note": "Interactive GraphiQL IDE and Apollo Federation for microservice subgraphs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apollo / Relay",
          "note": "Massive ecosystem backed by Apollo, Relay, and Hasura."
        }
      },
      "tags": [
        "GraphQL",
        "Apollo",
        "Zero Over-Fetching",
        "Schema SDL"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt tRPC for full-stack TypeScript Next.js monorepos for zero-codegen type safety.",
    "Adopt gRPC for high-throughput inter-service microservice communication in Kubernetes.",
    "Use REST with OpenAPI Swagger specs for external public third-party APIs."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "API Protocol Selection",
        "description": "Choosing the API communication architecture."
      },
      {
        "id": "p1",
        "label": "Full-Stack TypeScript Zero-Codegen Type Safety",
        "description": "Need instant end-to-end type safety between Next.js server and client without schema compilation."
      },
      {
        "id": "p2",
        "label": "High-Throughput Microservice HTTP/2 Binary RPCs",
        "description": "Need multiplexed Protobuf binary streams for inter-service backend communication."
      },
      {
        "id": "p3",
        "label": "Client-Specified Field Querying (Zero Over-Fetching)",
        "description": "Need clients to request exact nested field shapes over GraphQL."
      },
      {
        "id": "e1",
        "label": "tRPC",
        "description": "End-to-end type-safe API layer for TypeScript."
      },
      {
        "id": "e2",
        "label": "gRPC",
        "description": "High-performance Protobuf RPC framework over HTTP/2."
      },
      {
        "id": "e3",
        "label": "GraphQL",
        "description": "Query language eliminating over-fetching."
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
