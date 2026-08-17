import { ComparisonWorkspaceData } from "../../services/llmService";

export const REALTIME_PROTOCOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Real-Time Web Protocols: WebSockets vs Server-Sent Events (SSE) vs WebTransport",
  "domainType": "concepts",
  "overview": "A web transport comparison evaluating bidirectional TCP sockets (WebSockets), unidirectional HTTP streaming (SSE), and multiplexed UDP/QUIC streams (WebTransport).",
  "recommendedApproach": "Use Server-Sent Events (SSE) for LLM token streaming and dashboard updates; use WebSockets for bidirectional chat & gaming; use WebTransport for low-latency UDP streams.",
  "criteria": [
    {
      "id": "c1",
      "label": "Directionality (Unidirectional Server-Push vs Bidirectional)",
      "type": "text",
      "description": "Server-to-client streaming vs full-duplex client-server messaging."
    },
    {
      "id": "c2",
      "label": "Underlying Protocol (HTTP/1.1 TCP vs HTTP/2 & HTTP/3 QUIC)",
      "type": "text",
      "description": "Upgraded TCP connection vs HTTP/3 UDP multiplexing."
    },
    {
      "id": "c3",
      "label": "Automatic Reconnection & Event ID Tracking",
      "type": "text",
      "description": "Built-in browser auto-reconnect with Last-Event-ID vs manual JS heartbeat reconnection."
    },
    {
      "id": "c4",
      "label": "HTTP Firewall & Proxy Friendliness",
      "type": "text",
      "description": "Traversing corporate proxies, Cloudflare, and HTTP/2 multiplexed connections."
    },
    {
      "id": "c5",
      "label": "Head-of-Line Blocking Elimination",
      "type": "text",
      "description": "Eliminating TCP packet loss blocking across multiple streams via QUIC datagrams."
    },
    {
      "id": "c6",
      "label": "Ecosystem Adoption (LLM Token Streaming)",
      "type": "text",
      "description": "The standard protocol for ChatGPT / OpenAI response streaming."
    }
  ],
  "options": [
    {
      "id": "sse",
      "name": "Server-Sent Events (SSE)",
      "summary": "Lightweight, standard HTTP-based unidirectional server-push streaming technology.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Unidirectional (Server-to-Client)",
          "note": "Pushes text event streams from server to browser over standard HTTP."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "HTTP/1.1, HTTP/2, HTTP/3",
          "note": "Runs over standard HTTP connections; multiplexes seamlessly over HTTP/2."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class Native Auto-Reconnect",
          "note": "Browsers automatically reconnect on connection drop and send Last-Event-ID header."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Firewall Friendly",
          "note": "Uses standard text/event-stream content-type; bypasses strict corporate proxy blocks."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "TCP Bound",
          "note": "Subject to standard TCP packet order."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "The AI Token Streaming Standard",
          "note": "De facto standard for OpenAI, Anthropic, and Vercel AI SDK token streaming."
        }
      },
      "tags": [
        "SSE",
        "LLM Streaming",
        "Unidirectional",
        "Auto-Reconnect",
        "HTTP/2"
      ]
    },
    {
      "id": "websockets",
      "name": "WebSockets (WS/WSS)",
      "summary": "Full-duplex, bidirectional persistent TCP communication protocol over a single socket connection.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Full-Duplex)",
          "note": "Enables simultaneous bidirectional communication between client and server."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "TCP Upgrade Protocol",
          "note": "Upgrades HTTP connection to raw WS/WSS TCP binary frame protocol."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Manual JS Reconnection",
          "note": "Requires custom JavaScript heartbeat ping/pong and reconnection logic."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Requires WS Gateway Proxy",
          "note": "Requires proxy configuration for load balancers and API gateways."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "TCP Head-of-Line Blocking",
          "note": "Single dropped TCP packet blocks all pending messages on socket."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Chat & Multiplayer Leader",
          "note": "Standard for multiplayer gaming, live chat, and collaborative editors (Figma)."
        }
      },
      "tags": [
        "WebSockets",
        "Full-Duplex",
        "Bidirectional",
        "Chat",
        "Multiplayer"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Server-Sent Events (SSE) for LLM response token streaming and dashboard updates.",
    "Adopt WebSockets for real-time collaborative editing and bidirectional chat applications.",
    "Use HTTP/2 or HTTP/3 to multiplex multiple SSE streams over a single TCP/QUIC connection."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Real-Time Protocol Selection",
        "description": "Choosing the real-time web transport."
      },
      {
        "id": "p1",
        "label": "LLM Token Streaming & Unidirectional Server Push (SSE)",
        "description": "Need lightweight HTTP text/event-stream with built-in native browser auto-reconnect."
      },
      {
        "id": "p2",
        "label": "Full-Duplex Bidirectional Messaging & Multiplayer (WebSockets)",
        "description": "Need persistent TCP socket for low-latency bidirectional chat and collaborative editing."
      },
      {
        "id": "e1",
        "label": "Server-Sent Events (SSE)",
        "description": "Native HTTP unidirectional server push standard."
      },
      {
        "id": "e2",
        "label": "WebSockets",
        "description": "Full-duplex persistent TCP socket protocol."
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
