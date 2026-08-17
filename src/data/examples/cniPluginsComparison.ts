import { ComparisonWorkspaceData } from "../../services/llmService";

export const CNI_PLUGINS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Kubernetes CNI Plugins: Cilium (eBPF) vs Calico vs Flannel",
  "domainType": "tools",
  "overview": "A Kubernetes networking evaluation comparing eBPF kernel packet processing (Cilium), BGP routing / iptables firewalls (Calico), and simple VXLAN overlays (Flannel).",
  "recommendedApproach": "Use Cilium (eBPF) for modern high-performance Kubernetes networking, eBPF security, and Hubble observability; use Calico for traditional enterprise BGP/iptables.",
  "criteria": [
    {
      "id": "c1",
      "label": "Packet Processing Architecture (eBPF vs iptables vs VXLAN)",
      "type": "text",
      "description": "Kernel-level eBPF socket bypass vs legacy iptables rules."
    },
    {
      "id": "c2",
      "label": "Network Policy Security & L7 Inspection",
      "type": "text",
      "description": "Enforcing fine-grained pod-to-pod network policies at Layer 3/4 and Layer 7 (HTTP/gRPC)."
    },
    {
      "id": "c3",
      "label": "Network Observability & Flow Inspection (Hubble)",
      "type": "text",
      "description": "Real-time flow monitoring of pod traffic without packet capture tools."
    },
    {
      "id": "c4",
      "label": "Transparent Encryption (WireGuard / IPsec)",
      "type": "text",
      "description": "Automatic kernel-level pod-to-pod encryption."
    },
    {
      "id": "c5",
      "label": "BGP Routing & Bare-Metal Peer Integration",
      "type": "text",
      "description": "Peering directly with physical data center network switches via BGP."
    },
    {
      "id": "c6",
      "label": "CNCF Standardization & Governance",
      "type": "text",
      "description": "CNCF graduated status and industry adoption."
    }
  ],
  "options": [
    {
      "id": "cilium",
      "name": "Cilium (CNCF)",
      "summary": "The eBPF-powered open-source CNI plugin delivering high-performance networking, security, and observability.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (eBPF)",
          "note": "Replaces iptables entirely with eBPF programs loaded directly into the Linux kernel for ultra-low latency."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "L3/L4 & L7 Security",
          "note": "Enforces NetworkPolicies up to Layer 7 (e.g. allow GET /api/v1 only)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (Hubble)",
          "note": "Hubble provides visual service dependency maps and real-time flow monitoring."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native WireGuard / IPsec",
          "note": "Transparent pod-to-pod encryption at kernel speed."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Cilium BGP Control Plane",
          "note": "Native BGP speaker advertises Pod CIDRs directly to top-of-rack switches."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "The default CNI backing Google GKE (Dataplane V2) and AWS EKS Anywhere."
        }
      },
      "tags": [
        "Cilium",
        "eBPF",
        "CNCF",
        "Hubble",
        "WireGuard",
        "CNI Leader"
      ]
    },
    {
      "id": "calico",
      "name": "Tigera Calico",
      "summary": "Battle-tested cloud-native networking and network security solution using BGP and iptables.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "iptables / eBPF Mode",
          "note": "Supports traditional iptables networking alongside experimental eBPF mode."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High NetworkPolicy",
          "note": "Industry pioneer in Kubernetes NetworkPolicy enforcement."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Calico Enterprise UI",
          "note": "Calico Enterprise provides visual security dashboards."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "WireGuard Encryption",
          "note": "Supports WireGuard pod encryption."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Pioneer BGP Peering",
          "note": "Pioneered BGP routing for bare-metal Kubernetes data centers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Ubiquitous Standard",
          "note": "Supported natively across all cloud providers."
        }
      },
      "tags": [
        "Calico",
        "BGP",
        "iptables",
        "NetworkPolicy",
        "Tigera"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Cilium (eBPF) for modern Kubernetes cluster networking, eBPF security, and Hubble observability.",
    "Enable Hubble UI to inspect pod-to-pod network flow maps and drop reasons live.",
    "Enable transparent WireGuard encryption in Cilium to encrypt pod traffic automatically."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "CNI Plugin Selection",
        "description": "Choosing the Kubernetes Container Network Interface."
      },
      {
        "id": "p1",
        "label": "eBPF Kernel Networking & Hubble Flow Observability",
        "description": "Need eBPF kernel packet bypass, Hubble flow maps, and transparent WireGuard encryption."
      },
      {
        "id": "p2",
        "label": "Traditional BGP Bare-Metal Peering & Iptables Security",
        "description": "Need battle-tested BGP peer routing for enterprise data centers using Calico."
      },
      {
        "id": "e1",
        "label": "Cilium",
        "description": "CNCF graduated eBPF-powered CNI plugin."
      },
      {
        "id": "e2",
        "label": "Calico",
        "description": "Battle-tested BGP and NetworkPolicy CNI plugin."
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
