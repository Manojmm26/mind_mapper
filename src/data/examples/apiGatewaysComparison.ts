import { ComparisonWorkspaceData } from "../../services/llmService";

export const API_GATEWAYS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "API Gateways & Reverse Proxies: Envoy vs Kong vs NGINX vs Traefik vs Cloudflare Workers",
  "domainType": "tools",
  "overview": "A comparative evaluation of enterprise API gateways and edge reverse proxies analyzing proxy architecture, dynamic configuration reload, gRPC/HTTP3 support, plugin ecosystem, and latency.",
  "recommendedApproach": "Use Envoy as the high-performance sidecar proxy for Kubernetes service meshes (Istio/Cilium); use Kong for enterprise API management; use Traefik for automated Docker/K8s ingress; use Cloudflare Workers for edge routing.",
  "criteria": [
    {
      "id": "c1",
      "label": "Proxy Architecture & C++ / Rust Throughput",
      "type": "text",
      "description": "Event-driven C++/Rust memory model vs Lua/Go dynamic execution overhead."
    },
    {
      "id": "c2",
      "label": "Dynamic Configuration Reload (Zero Downtime)",
      "type": "text",
      "description": "xDS API dynamic updates vs config file reloads."
    },
    {
      "id": "c3",
      "label": "Protocols (HTTP/3, gRPC, WebSockets, TLS 1.3)",
      "type": "text",
      "description": "Multiplexed protocol support and TLS termination speed."
    },
    {
      "id": "c4",
      "label": "Plugin Ecosystem & Rate Limiting / Auth",
      "type": "text",
      "description": "WASM plugins, Lua plugins, OAuth2/JWT verification, and rate limiting."
    },
    {
      "id": "c5",
      "label": "Kubernetes Ingress & Mesh Integration",
      "type": "text",
      "description": "Native Gateway API, Istio, Linkerd, and CRD ingress controller integration."
    },
    {
      "id": "c6",
      "label": "Operational Complexity & Dashboard",
      "type": "text",
      "description": "Ease of deployment, Prometheus metrics export, and admin UI."
    }
  ],
  "options": [
    {
      "id": "envoy",
      "name": "Envoy Proxy",
      "summary": "High-performance C++ distributed proxy designed for cloud-native service meshes.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (C++)",
          "note": "Asynchronous C++ non-blocking event loop delivers extreme throughput."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Dynamic (xDS)",
          "note": "Dynamic discovery APIs (gDS, LDS, RDS, CDS) reload config without dropping connections."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "First-class gRPC translation, HTTP/3 (QUIC), WebSockets, and TLS 1.3."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "WASM Extensions",
          "note": "Supports WebAssembly (Proxy-WASM) plugins in C++, Rust, and Go."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Service Mesh Standard",
          "note": "The core data plane powering Istio, Consul Service Mesh, and AWS App Mesh."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High Complexity",
          "note": "Requires control planes (Istio/Gloo) to manage raw xDS configuration."
        }
      },
      "tags": [
        "C++",
        "xDS",
        "Istio",
        "Service Mesh"
      ]
    },
    {
      "id": "kong",
      "name": "Kong Gateway",
      "summary": "Cloud-native API gateway built on NGINX and OpenResty with extensive plugin store.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High (NGINX Core)",
          "note": "Leverages NGINX C core for fast packet forwarding."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "DB / DB-less Dynamic",
          "note": "Supports Postgres DB or DB-less declarative YAML config updates."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "Full HTTP/2, gRPC, and WebSocket proxying."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Massive Plugin Marketplace",
          "note": "Hundreds of enterprise plugins for OAuth2, Rate Limiting, OpenTelemetry, and AI Gateway."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Kong Ingress Controller",
          "note": "Native K8s Ingress Controller supporting Gateway API."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Moderate (Kong Manager)",
          "note": "Includes Kong Manager UI and Konnect SaaS control plane."
        }
      },
      "tags": [
        "NGINX",
        "Lua",
        "Plugins",
        "Enterprise API GW"
      ]
    },
    {
      "id": "nginx",
      "name": "NGINX (Plus / Open Source)",
      "summary": "The battle-tested web server, load balancer, and reverse proxy powering millions of sites.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Industry Standard C",
          "note": "Non-blocking event-driven master/worker architecture."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Reload Signals",
          "note": "'nginx -s reload' spawns new worker processes cleanly."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High",
          "note": "Supports HTTP/3 QUIC, HTTP/2, gRPC, and stream proxying."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "C / njs Modules",
          "note": "Lua (OpenResty) and JavaScript (njs) scripting modules."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "NGINX Ingress Controller",
          "note": "The classic default Kubernetes ingress controller."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Simple File-Based",
          "note": "Simple nginx.conf syntax understood by every DevOps engineer."
        }
      },
      "tags": [
        "Battle-Tested",
        "Reverse Proxy",
        "C",
        "Standard"
      ]
    },
    {
      "id": "traefik",
      "name": "Traefik Proxy",
      "summary": "Modern HTTP reverse proxy and load balancer written in Go with automatic discovery.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Good (Go)",
          "note": "Go-based proxy with low latency and clean concurrency."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Automatic Auto-Discovery",
          "note": "Watches Docker sockets and K8s CRDs to dynamically update routes without restart."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "Automatic Let's Encrypt TLS certificates, HTTP/3, and gRPC."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Middleware Plugins",
          "note": "Go plugin system for custom authentication and header rewrites."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Native K8s & Docker",
          "note": "Discovers routes automatically via Docker labels or Kubernetes Custom Resources."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class Dashboard",
          "note": "Clean visual Web UI out of the box."
        }
      },
      "tags": [
        "Go",
        "Auto-Discovery",
        "Docker",
        "Traefik"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Envoy for microservice sidecar proxies and Istio service mesh implementations.",
    "Choose Kong for centralized enterprise API management, rate-limiting, and OAuth2 gateways.",
    "Choose Traefik for container environments needing automatic route discovery via Docker labels.",
    "Benchmark TLS handshake latency and gRPC streaming throughput."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "API Gateway Selection",
        "description": "Choosing the proxy and gateway for microservices."
      },
      {
        "id": "p1",
        "label": "Kubernetes Service Mesh Data Plane",
        "description": "Need C++ dynamic xDS configuration for Istio or Cilium service mesh."
      },
      {
        "id": "p2",
        "label": "Enterprise API Gateway & Plugins",
        "description": "Need rich OAuth2, rate limiting, and plugin marketplace for external client APIs."
      },
      {
        "id": "p3",
        "label": "Automated Docker Container Routing",
        "description": "Need zero-config route discovery via Docker labels and auto Let's Encrypt TLS."
      },
      {
        "id": "p4",
        "label": "Traditional Web Server & Reverse Proxy",
        "description": "Battle-tested C reverse proxy for static files and basic upstream load balancing."
      },
      {
        "id": "e1",
        "label": "Envoy Proxy",
        "description": "High-performance C++ dynamic proxy for service meshes."
      },
      {
        "id": "e2",
        "label": "Kong Gateway",
        "description": "NGINX-based enterprise API gateway with extensive plugin store."
      },
      {
        "id": "e3",
        "label": "Traefik Proxy",
        "description": "Go-based dynamic reverse proxy with automatic Docker discovery."
      },
      {
        "id": "e4",
        "label": "NGINX",
        "description": "Industry standard C reverse proxy and load balancer."
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
