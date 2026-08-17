import { ComparisonWorkspaceData } from "../../services/llmService";

export const API_ARCHITECTURES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "API Architectures & Protocols: REST vs GraphQL vs gRPC vs WebSockets vs Server-Sent Events (SSE)",
  "domainType": "approaches",
  "overview": "A technical decision matrix comparing modern API transport protocols across payload efficiency, type safety, streaming capabilities, browser support, and caching.",
  "recommendedApproach": "Use REST for public third-party APIs; use gRPC for high-throughput microservice-to-microservice RPCs; use GraphQL for complex client-driven data fetching; use SSE/WebSockets for real-time updates.",
  "criteria": [
    {
      "id": "c1",
      "label": "Payload Efficiency & Binary Serialization",
      "type": "text",
      "description": "Network overhead, Protocol Buffers vs JSON, and over/under-fetching."
    },
    {
      "id": "c2",
      "label": "Type Safety & Schema Definition",
      "type": "text",
      "description": "Strict contract definitions (.proto, GraphQL schema, OpenAPI)."
    },
    {
      "id": "c3",
      "label": "Real-Time & Streaming Support",
      "type": "text",
      "description": "Bidirectional streaming, multiplexing, and event-driven updates."
    },
    {
      "id": "c4",
      "label": "Browser Native Support & HTTP Caching",
      "type": "text",
      "description": "Native fetch/XHR support and HTTP edge CDN caching (GET/headers)."
    },
    {
      "id": "c5",
      "label": "Tooling & Client Code Generation",
      "type": "text",
      "description": "SDK generation tools (Protoc, Relay/Apollo, OpenAPI codegen)."
    },
    {
      "id": "c6",
      "label": "Operational & Debugging Complexity",
      "type": "text",
      "description": "Ease of inspecting network payloads in browser DevTools and load balancing."
    }
  ],
  "options": [
    {
      "id": "rest",
      "name": "REST (OpenAPI / JSON)",
      "summary": "The ubiquitous resource-based HTTP architectural style used across the web.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Moderate",
          "note": "JSON text payloads; prone to over-fetching and under-fetching."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good (OpenAPI)",
          "note": "OpenAPI/Swagger specs provide machine-readable contracts."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Limited",
          "note": "Request-response cycle; relies on polling unless combined with SSE/WebSockets."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Native",
          "note": "Leverages native HTTP verbs, status codes, and standard CDN caching."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Massive",
          "note": "Universal tooling across every programming language and framework."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Trivial",
          "note": "Human-readable JSON easily inspected in standard browser Network tabs."
        }
      },
      "tags": [
        "HTTP/1.1",
        "JSON",
        "OpenAPI",
        "Ubiquitous"
      ]
    },
    {
      "id": "graphql",
      "name": "GraphQL",
      "summary": "A client-driven query language allowing clients to request exact fields in a single query.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High (Zero Over-fetching)",
          "note": "Clients specify exact fields required, eliminating over-fetching."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Strict (SDL)",
          "note": "Strongly typed Schema Definition Language (SDL) with AST validation."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "GraphQL Subscriptions over WebSockets or SSE for real-time data."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Complex",
          "note": "POST queries bypass standard HTTP GET edge caching; requires normalized client caches (Apollo/URQL)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Excellent",
          "note": "GraphQL Code Generator builds fully typed React hooks and TypeScript types."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Moderate",
          "note": "Single /graphql endpoint complicates standard HTTP status monitoring and rate limiting."
        }
      },
      "tags": [
        "Query Language",
        "Client-Driven",
        "Type-Safe",
        "SDL"
      ]
    },
    {
      "id": "grpc",
      "name": "gRPC (HTTP/2 + Protobuf)",
      "summary": "High-performance, low-latency framework using Protocol Buffers and HTTP/2 multiplexing.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class",
          "note": "Compact binary Protocol Buffers serialization up to 8x faster than JSON."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Strict (.proto)",
          "note": "Enforces strict .proto contracts with backwards-compatible field tags."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "Native client, server, and bidirectional streaming over HTTP/2."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Requires Proxy (gRPC-Web)",
          "note": "Browsers cannot directly initiate gRPC HTTP/2 frames; requires Envoy proxy or gRPC-Web."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class",
          "note": "Protoc generates ultra-fast, strongly typed stubs for Go, Java, C++, Rust, Python."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High Complexity",
          "note": "Binary payloads require specialized tools (grpcurl, Postman) to inspect."
        }
      },
      "tags": [
        "HTTP/2",
        "Protobuf",
        "RPC",
        "Microservices"
      ]
    },
    {
      "id": "websockets",
      "name": "WebSockets",
      "summary": "Full-duplex, persistent TCP connection protocol for real-time bidirectional communication.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very High",
          "note": "Minimal per-frame overhead (2-10 bytes) after initial HTTP handshake."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unstructured",
          "note": "No built-in schema; application must define custom message formats (JSON, msgpack)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (Bidirectional)",
          "note": "Simultaneous low-latency sending and receiving over single TCP socket."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native Browser API",
          "note": "Supported natively in all browsers via standard WebSocket API."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Custom",
          "note": "Requires custom wrappers or libraries like Socket.io / Socket-client."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Complex",
          "note": "Stateful connections complicate horizontal scaling, reconnection, and load balancing."
        }
      },
      "tags": [
        "Full-Duplex",
        "Real-Time",
        "Stateful",
        "Sockets"
      ]
    },
    {
      "id": "sse",
      "name": "Server-Sent Events (SSE)",
      "summary": "Lightweight, text-based unidirectional server-to-client streaming over standard HTTP.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Good",
          "note": "Simple text/event-stream format with minimal framing overhead."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unstructured",
          "note": "Carries text/JSON data events; relies on application-level typing."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding (Unidirectional)",
          "note": "Ideal for LLM token streaming and live feed updates."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native EventSource API",
          "note": "Supported natively in browsers with automatic reconnection out of the box."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Simple",
          "note": "Easy to implement using standard HTTP response headers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low Complexity",
          "note": "Stateless HTTP connections that work seamlessly through standard HTTP load balancers."
        }
      },
      "tags": [
        "Unidirectional",
        "LLM-Streaming",
        "HTTP Native",
        "EventSource"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Map out API consumers: Internal Microservices vs Mobile Apps vs Third-Party Developers.",
    "Evaluate real-time needs: Full-duplex chat (WebSockets) vs LLM token streaming (SSE).",
    "Design protobuf or OpenAPI schemas before writing backend handlers.",
    "Set up API gateway / Envoy proxy if integrating gRPC with web browsers."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "API Protocol Decision",
        "description": "Selecting the optimal communication protocol for your service."
      },
      {
        "id": "p1",
        "label": "Internal Microservice-to-Microservice",
        "description": "Need maximum binary throughput and low latency."
      },
      {
        "id": "p2",
        "label": "Public / Third-Party External APIs",
        "description": "Need universal developer adoption, simple tooling, and HTTP caching."
      },
      {
        "id": "p3",
        "label": "Complex Web/Mobile Client Data Fetching",
        "description": "Need to eliminate over-fetching across nested resource graphs."
      },
      {
        "id": "p4",
        "label": "Real-Time Server-to-Client Streaming",
        "description": "Streaming LLM outputs or continuous live updates."
      },
      {
        "id": "p5",
        "label": "Bidirectional Interactive Sockets",
        "description": "Multiplayer games, collaborative canvases, or live chat."
      },
      {
        "id": "e1",
        "label": "gRPC (HTTP/2 + Protobuf)",
        "description": "Compact binary protocol with strongly typed .proto contracts."
      },
      {
        "id": "e2",
        "label": "REST (OpenAPI)",
        "description": "Standard HTTP verbs and JSON with edge CDN caching."
      },
      {
        "id": "e3",
        "label": "GraphQL",
        "description": "Client-specified queries for flexible frontend data fetching."
      },
      {
        "id": "e4",
        "label": "Server-Sent Events (SSE)",
        "description": "Lightweight HTTP text/event-stream for LLM responses."
      },
      {
        "id": "e5",
        "label": "WebSockets",
        "description": "Full-duplex persistent TCP channels for interactive apps."
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
        "source": "root",
        "target": "p5"
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
      },
      {
        "source": "p5",
        "target": "e5"
      }
    ]
  }
};
