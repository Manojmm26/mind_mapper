import { ComparisonWorkspaceData } from "../../services/llmService";

export const RATE_LIMITING_ALGORITHMS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "API Rate Limiting Algorithms: Token Bucket vs Leaky Bucket vs Sliding Window Log",
  "domainType": "concepts",
  "overview": "An API gateway architecture comparison evaluating burst traffic handling (Token Bucket), smooth queue output (Leaky Bucket), and exact window precision (Sliding Window Log).",
  "recommendedApproach": "Use Token Bucket for general REST API rate limiting allowing controlled traffic bursts; use Leaky Bucket for smoothing traffic to sensitive downstream legacy services.",
  "criteria": [
    {
      "id": "c1",
      "label": "Burst Traffic Permissibility",
      "type": "text",
      "description": "Allowing short spikes of burst requests up to bucket capacity."
    },
    {
      "id": "c2",
      "label": "Output Flow Smoothing & Queueing",
      "type": "text",
      "description": "Processing outgoing requests at a continuous, steady rate regardless of incoming spikes."
    },
    {
      "id": "c3",
      "label": "Memory Footprint per Client/IP",
      "type": "text",
      "description": "Storing simple counter + timestamp vs logging timestamp arrays per request."
    },
    {
      "id": "c4",
      "label": "Boundary Reset Spike Vulnerability",
      "type": "text",
      "description": "Vulnerability to 2x burst traffic across fixed window boundary resets."
    },
    {
      "id": "c5",
      "label": "Redis Distributed Implementation Ease",
      "type": "text",
      "description": "Atomic Redis Lua script implementation."
    },
    {
      "id": "c6",
      "label": "Primary API Gateway Adoption",
      "type": "text",
      "description": "Default algorithm in Envoy, Kong, Cloudflare, and AWS API Gateway."
    }
  ],
  "options": [
    {
      "id": "token-bucket",
      "name": "Token Bucket Algorithm",
      "summary": "The most widely used rate limiting algorithm allowing bursty traffic up to a defined bucket capacity.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Controlled Bursts)",
          "note": "Tokens refill at a steady rate; clients can consume all available tokens instantly in burst spikes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Pass-Through Bursts",
          "note": "Passes burst traffic through immediately as long as tokens remain."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Minimal (2 Numbers per Key)",
          "note": "Stores last_refill_timestamp and current_token_count in Redis key."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Immune",
          "note": "Continuous refill prevents 2x boundary spikes."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Easiest Redis Lua Script",
          "note": "Single atomic Redis Lua script checks and decrements token count."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Industry Standard",
          "note": "Default algorithm in AWS API Gateway, Guava, and Stripe."
        }
      },
      "tags": [
        "Token Bucket",
        "Bursts",
        "Redis Lua",
        "API Gateway Standard"
      ]
    },
    {
      "id": "leaky-bucket",
      "name": "Leaky Bucket Algorithm",
      "summary": "Queues incoming requests in a FIFO bucket and processes them at a fixed, constant output rate.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Queued Bursts",
          "note": "Burst requests are queued in the bucket rather than passed through instantly."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Smooth Output)",
          "note": "Outputs requests at a steady, constant rate, protecting sensitive downstream databases from traffic spikes."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Queue Storage",
          "note": "Stores queued request references in Redis list."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Immune",
          "note": "Smooth output rate eliminates window boundary spikes."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderate",
          "note": "Redis FIFO list implementation."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "NGINX & Traffic Shaping",
          "note": "Core algorithm used in NGINX limit_req module."
        }
      },
      "tags": [
        "Leaky Bucket",
        "Traffic Shaping",
        "NGINX",
        "Smooth Output"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Token Bucket for public API gateways allowing controlled user burst requests.",
    "Use Leaky Bucket when protecting legacy database backends from sudden traffic surges.",
    "Implement rate limiting using atomic Redis Lua scripts to prevent race conditions across server nodes."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Rate Limiter Selection",
        "description": "Choosing the rate limiting algorithm."
      },
      {
        "id": "p1",
        "label": "Controlled User Traffic Bursts & Minimal Memory (Token Bucket)",
        "description": "Need to allow short bursts of API calls while enforcing token refill rates in Redis."
      },
      {
        "id": "p2",
        "label": "Smooth Steady-State Output to Legacy Backends (Leaky Bucket)",
        "description": "Need to queue incoming spikes and release requests at a constant steady rate to protect downstream databases."
      },
      {
        "id": "e1",
        "label": "Token Bucket",
        "description": "Industry standard rate limiter permitting controlled burst traffic."
      },
      {
        "id": "e2",
        "label": "Leaky Bucket",
        "description": "Traffic shaping algorithm enforcing steady constant output rates."
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
