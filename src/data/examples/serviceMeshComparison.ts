import { ComparisonWorkspaceData } from "../../services/llmService";

export const SERVICE_MESH_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Service Mesh Control Planes: Istio vs Linkerd vs Cilium Service Mesh (eBPF)",
  "domainType": "tools",
  "overview": "A cloud-native networking comparison evaluating sidecar architecture (Envoy) vs sidecarless eBPF kernel mesh (Cilium), mTLS encryption performance, and operational complexity.",
  "recommendedApproach": "Use Cilium Service Mesh for sidecarless eBPF performance and low RAM; use Linkerd for ultralight Rust sidecar simplicity; use Istio for full enterprise control.",
  "criteria": [
    {
      "id": "c1",
      "label": "Mesh Architecture (Sidecar Envoy vs Sidecarless eBPF)",
      "type": "text",
      "description": "Injecting sidecar proxy containers into every pod vs eBPF kernel routing."
    },
    {
      "id": "c2",
      "label": "mTLS Encryption & Certificate Management",
      "type": "text",
      "description": "Automatic pod-to-pod mutual TLS with SPIFFE/SPIRE identity."
    },
    {
      "id": "c3",
      "label": "RAM & CPU Memory Footprint per Node",
      "type": "text",
      "description": "Overhead consumed by proxy containers across large clusters."
    },
    {
      "id": "c4",
      "label": "Traffic Management (Canary, Circuit Breaking, Fault Injection)",
      "type": "text",
      "description": "Fine-grained HTTP path routing, retry backoffs, and circuit breakers."
    },
    {
      "id": "c5",
      "label": "Kubernetes Gateway API Compliance",
      "type": "text",
      "description": "Standardized Gateway API implementation for ingress and service routing."
    },
    {
      "id": "c6",
      "label": "Operational Simplicity",
      "type": "text",
      "description": "Ease of installation, upgrades, and troubleshooting."
    }
  ],
  "options": [
    {
      "id": "cilium-mesh",
      "name": "Cilium Service Mesh (eBPF)",
      "summary": "Sidecarless eBPF-powered service mesh delivering ultra-high throughput and low RAM footprint.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Sidecarless eBPF)",
          "note": "Processes network traffic directly inside the Linux kernel via eBPF; no sidecar proxies required."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "WireGuard / IPsec / mTLS",
          "note": "Transparent pod-to-pod encryption via WireGuard or IPsec at kernel speed."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Lowest Footprint",
          "note": "Saves up to 80% RAM and CPU compared to running sidecar Envoy proxies in every pod."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "L7 Envoy per Node",
          "note": "Runs a single per-node Envoy proxy for complex L7 HTTP traffic management when needed."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Native K8s Gateway API",
          "note": "Native K8s Gateway API controller."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "CNCF graduated project powering modern cloud Kubernetes networks."
        }
      },
      "tags": [
        "Cilium",
        "eBPF",
        "Sidecarless",
        "CNCF",
        "Low RAM"
      ]
    },
    {
      "id": "istio",
      "name": "Istio",
      "summary": "The premier CNCF graduated enterprise service mesh powered by Envoy proxies and Ambient Mesh.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Envoy Sidecar & Ambient Mesh",
          "note": "Supports traditional Envoy sidecars alongside zero-sidecar Ambient Mesh (ztunnel)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Gold Standard mTLS",
          "note": "Automated mTLS certificate rotation powered by SPIFFE identities."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Heavy (Sidecar) / Low (Ambient)",
          "note": "Sidecars consume memory; Ambient mode significantly reduces resource overhead."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unmatched L7 Features",
          "note": "Industry benchmark for canary rollouts, fault injection, rate limiting, and circuit breaking."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Istio Ingress & Gateway API",
          "note": "Full support for Kubernetes Gateway API."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High Complexity",
          "note": "Requires dedicated service mesh management team for large enterprise setups."
        }
      },
      "tags": [
        "Istio",
        "Envoy",
        "CNCF",
        "Ambient Mesh",
        "Enterprise"
      ]
    },
    {
      "id": "linkerd",
      "name": "Linkerd (CNCF)",
      "summary": "Ultralight, ultra-fast, and secure open-source service mesh written in Rust.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Rust Micro-Proxy Sidecar",
          "note": "Uses lightweight, memory-safe Linkerd2-proxy written in Rust."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Zero-Config mTLS",
          "note": "mTLS is enabled out of the box automatically for all pod communications."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Ultra-Low Footprint",
          "note": "Rust micro-proxy consumes minimal RAM (~15MB per pod) and CPU."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Focused Features",
          "note": "Focuses on core reliability, retries, timeouts, and traffic splitting."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Gateway API",
          "note": "Uses K8s Gateway API for HTTP routing."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Easiest to Operate",
          "note": "Renowned for zero-config simplicity and developer friendliness."
        }
      },
      "tags": [
        "Linkerd",
        "Rust Proxy",
        "CNCF",
        "Simple",
        "Zero-Config"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Cilium Service Mesh for sidecarless eBPF performance and low RAM consumption.",
    "Adopt Linkerd for an ultralight, zero-config mTLS service mesh using Rust micro-proxies.",
    "Adopt Istio for complex enterprise L7 traffic routing, fault injection, and Ambient Mesh."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Service Mesh Selection",
        "description": "Choosing the service mesh control plane."
      },
      {
        "id": "p1",
        "label": "Sidecarless eBPF Kernel Mesh & Low RAM",
        "description": "Need eBPF kernel routing without per-pod sidecar proxies to save 80% RAM."
      },
      {
        "id": "p2",
        "label": "Enterprise Envoy Sidecar & Ambient Mesh",
        "description": "Need industry-standard mTLS, SPIFFE identity, and complex L7 canary routing."
      },
      {
        "id": "p3",
        "label": "Ultralight Zero-Config Rust Micro-Proxy",
        "description": "Need simple, secure zero-config mTLS powered by lightweight Rust proxies."
      },
      {
        "id": "e1",
        "label": "Cilium Service Mesh",
        "description": "Sidecarless eBPF service mesh."
      },
      {
        "id": "e2",
        "label": "Istio",
        "description": "CNCF enterprise service mesh with Envoy and Ambient Mesh."
      },
      {
        "id": "e3",
        "label": "Linkerd",
        "description": "Ultralight Rust-powered CNCF service mesh."
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
