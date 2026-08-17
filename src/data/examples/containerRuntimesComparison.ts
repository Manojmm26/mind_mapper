import { ComparisonWorkspaceData } from "../../services/llmService";

export const CONTAINER_RUNTIMES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Linux Container Runtimes: containerd vs CRI-O vs Docker Engine (Moby) vs Podman",
  "domainType": "tools",
  "overview": "A low-level container infrastructure evaluation comparing Kubernetes Container Runtime Interface (CRI) implementations, daemonless rootless architectures, OCI runtime execution (runc/crun), and resource footprint.",
  "recommendedApproach": "Use containerd as the lightweight industry-standard CRI for Kubernetes clusters; use CRI-O for minimal Red Hat OpenShift K8s runtimes; use Podman for daemonless, rootless developer container management.",
  "criteria": [
    {
      "id": "c1",
      "label": "Kubernetes CRI Interface Efficiency",
      "type": "text",
      "description": "Direct gRPC CRI implementation for Kubernetes Kubelet without translation layers."
    },
    {
      "id": "c2",
      "label": "Daemonless & Rootless Security Architecture",
      "type": "text",
      "description": "Running containers without background daemon root privileges (eliminating single point of failure)."
    },
    {
      "id": "c3",
      "label": "Low CPU / RAM Memory Footprint",
      "type": "text",
      "description": "Minimal resident memory consumption per container host node."
    },
    {
      "id": "c4",
      "label": "OCI Runtime Execution (runc / crun / Kata)",
      "type": "text",
      "description": "Invoking OCI compliant spec runtimes (fast C crun vs Kata isolated VMs)."
    },
    {
      "id": "c5",
      "label": "Developer CLI Ergonomics & Docker Compatibility",
      "type": "text",
      "description": "100% CLI flag compatibility ('podman run' alias for 'docker run')."
    },
    {
      "id": "c6",
      "label": "CNCF Standardization & Governance",
      "type": "text",
      "description": "Graduated CNCF status and neutral community governance."
    }
  ],
  "options": [
    {
      "id": "containerd",
      "name": "containerd (CNCF)",
      "summary": "The industry-standard core container runtime embedded in Docker and Kubernetes clusters worldwide.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Industry Standard CRI",
          "note": "Direct CRI plugin communicates seamlessly with Kubernetes Kubelet via gRPC."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Daemon Architecture",
          "note": "Lightweight background daemon managing complete container lifecycle."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Minimal Footprint",
          "note": "Stripped of high-level build engines; consumes minimal CPU/RAM per node."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OCI Compliant",
          "note": "Delegates execution to runc, crun, or Kata Containers."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "ctr / nerdctl CLI",
          "note": "Uses nerdctl CLI for Docker-compatible developer experience."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "Graduated CNCF project backed by Docker, AWS, Google, and Microsoft."
        }
      },
      "tags": [
        "containerd",
        "CNCF",
        "K8s CRI",
        "Lightweight"
      ]
    },
    {
      "id": "crio",
      "name": "CRI-O (CNCF)",
      "summary": "Lightweight, purpose-built container runtime for Kubernetes created by Red Hat.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "100% Dedicated K8s CRI",
          "note": "Designed exclusively to be the Kubernetes container runtime with zero extra features."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Secure Minimal Daemon",
          "note": "Strict security boundary optimized for Kubernetes pods."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Lightest Memory Footprint",
          "note": "Ultra-low memory overhead on Kubernetes worker nodes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OCI Native",
          "note": "Works natively with runc, crun, and Clear Containers."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "K8s Only",
          "note": "Not intended as a standalone developer CLI; managed entirely via Kubelet."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "Graduated CNCF project backing Red Hat OpenShift."
        }
      },
      "tags": [
        "CRI-O",
        "CNCF",
        "Kubernetes Only",
        "OpenShift"
      ]
    },
    {
      "id": "podman",
      "name": "Podman (Red Hat)",
      "summary": "Daemonless, rootless container engine for developing, managing, and running OCI Containers.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Developer CLI",
          "note": "Primary focus is local developer workflows and Pod YAML testing."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Daemonless & Rootless)",
          "note": "Zero background daemon; runs containers safely under unprivileged user accounts."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Zero Daemon Overhead",
          "note": "Forks container processes directly; zero background daemon consuming idle RAM."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OCI & crun",
          "note": "Default C crun runtime for fast container startup."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Docker CLI Alias",
          "note": "Drop-in alias for Docker ('alias docker=podman'); includes Podman Desktop GUI."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Open-Source (Apache 2.0)",
          "note": "Developed by Red Hat and open-source community."
        }
      },
      "tags": [
        "Podman",
        "Daemonless",
        "Rootless",
        "Docker Alternative"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use containerd as the default container runtime for Kubernetes production nodes.",
    "Use Podman for local development environments requiring daemonless rootless security.",
    "Configure crun (C runtime) instead of runc for faster container startup and lower RAM."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Container Runtime Selection",
        "description": "Choosing the low-level container execution engine."
      },
      {
        "id": "p1",
        "label": "Kubernetes Node Production Standard",
        "description": "Need lightweight CNCF-graduated CRI runtime for Kubernetes worker nodes."
      },
      {
        "id": "p2",
        "label": "Minimal Purpose-Built K8s Runtime for OpenShift",
        "description": "Need dedicated CRI-only engine stripped of non-Kubernetes features."
      },
      {
        "id": "p3",
        "label": "Daemonless Rootless Developer Security",
        "description": "Need zero-daemon local container runner operating under non-root permissions."
      },
      {
        "id": "e1",
        "label": "containerd",
        "description": "Industry-standard CNCF container runtime for Kubernetes."
      },
      {
        "id": "e2",
        "label": "CRI-O",
        "description": "Purpose-built Kubernetes CRI runtime backing OpenShift."
      },
      {
        "id": "e3",
        "label": "Podman",
        "description": "Daemonless rootless container engine for developers."
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
