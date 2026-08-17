import { ComparisonWorkspaceData } from "../../services/llmService";

export const CONTAINER_SECURITY_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Container Security & Runtime Defense: Sysdig Falco vs Aqua Security vs NeuVector",
  "domainType": "tools",
  "overview": "A container security evaluation comparing eBPF Linux syscall threat detection (Falco), container image vulnerability scanning, zero-trust container network firewalls, and CNCF governance.",
  "recommendedApproach": "Use CNCF Falco for eBPF-driven real-time Linux kernel threat detection; use NeuVector for zero-trust container layer 7 network firewalls; use Aqua Security for enterprise end-to-end CNAPP.",
  "criteria": [
    {
      "id": "c1",
      "label": "Kernel System Call Threat Detection (eBPF / Module)",
      "type": "text",
      "description": "Inspecting Linux kernel syscalls (execve, openat, connect) live using eBPF probes."
    },
    {
      "id": "c2",
      "label": "Rule Engine & Threat Detection Syntax",
      "type": "text",
      "description": "Writing declarative security rules for detecting unauthorized shell spawns or file reads."
    },
    {
      "id": "c3",
      "label": "Zero-Trust Container Network Segmentation (L7 WAF)",
      "type": "text",
      "description": "Inspecting pod-to-pod network traffic at Layer 7 to block unauthorized API calls."
    },
    {
      "id": "c4",
      "label": "Container Image Vulnerability & Secret Scanning",
      "type": "text",
      "description": "Scanning OCI container layers for CVE vulnerabilities and exposed credentials."
    },
    {
      "id": "c5",
      "label": "Kubernetes Audit Log Integration",
      "type": "text",
      "description": "Analyzing Kubernetes API audit logs for unauthorized pod exec or cluster role bindings."
    },
    {
      "id": "c6",
      "label": "Open Source Governance (CNCF Graduated)",
      "type": "text",
      "description": "CNCF project status vs commercial CNAPP vendor."
    }
  ],
  "options": [
    {
      "id": "falco",
      "name": "CNCF Falco",
      "summary": "The open-source standard for cloud-native runtime security and kernel threat detection.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (eBPF)",
          "note": "Uses modern eBPF probe to monitor Linux kernel system calls with near-zero overhead."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Intuitive Falco Rules",
          "note": "Declarative YAML rule engine (e.g. detect shell inside container or sensitive file write)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Syscall Focused",
          "note": "Focuses on kernel behavioral security rather than network packet inspection."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Runtime Defense Focus",
          "note": "Pairs with Trivy or Grype for pre-deployment image scanning."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "K8s Audit Plugin",
          "note": "Monitors Kubernetes API audit events in real time."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "100% open-source CNCF graduated project created by Sysdig."
        }
      },
      "tags": [
        "Falco",
        "CNCF",
        "eBPF",
        "Syscalls",
        "Runtime Security"
      ]
    },
    {
      "id": "neuvector",
      "name": "SUSE NeuVector",
      "summary": "Open-source zero-trust container security platform with layer 7 container firewalling.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Kernel Inspection",
          "note": "Inspects container processes and file access."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Auto-Behavioral Learning",
          "note": "Automatically learns container behavioral baselines and creates security policies."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (L7 Container Firewall)",
          "note": "Deep packet inspection (DPI) blocks unauthorized pod-to-pod network traffic."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Built-in Scanner",
          "note": "Scans container registries and running pods for CVE vulnerabilities."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "K8s Native",
          "note": "Deploys via Kubernetes CRDs and Helm."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% Open Source (SUSE)",
          "note": "100% open-source security platform backed by SUSE."
        }
      },
      "tags": [
        "NeuVector",
        "SUSE",
        "L7 Firewall",
        "Zero-Trust",
        "Open-Source"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy CNCF Falco with eBPF probes for real-time Linux kernel threat detection in Kubernetes.",
    "Deploy NeuVector for zero-trust pod-to-pod layer 7 container firewall protection.",
    "Enforce runtime security rules to alert on spawned bash shells or unauthorized /etc file writes inside pods."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Container Security Selection",
        "description": "Choosing the runtime security and container defense platform."
      },
      {
        "id": "p1",
        "label": "eBPF Linux Kernel Threat Detection",
        "description": "Need CNCF graduated open-source rule engine detecting unauthorized syscalls via eBPF."
      },
      {
        "id": "p2",
        "label": "Zero-Trust Layer 7 Container Network Firewall",
        "description": "Need deep packet inspection to block unauthorized pod-to-pod network communications."
      },
      {
        "id": "e1",
        "label": "CNCF Falco",
        "description": "eBPF kernel system call threat detection engine."
      },
      {
        "id": "e2",
        "label": "SUSE NeuVector",
        "description": "Zero-trust container layer 7 network security platform."
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
