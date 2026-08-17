import { ComparisonWorkspaceData } from "../../services/llmService";

export const MANAGED_KUBERNETES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Managed Cloud Kubernetes Distributions: Amazon EKS vs Google GKE vs Azure AKS vs Red Hat OpenShift",
  "domainType": "services",
  "overview": "A cloud infrastructure evaluation comparing managed Kubernetes offerings on control plane management, node auto-scaling (Karpenter vs GKE Autopilot), cloud IAM integration, and multi-cloud portability.",
  "recommendedApproach": "Use Google GKE for the pioneer Kubernetes experience and Autopilot zero-ops nodes; use Amazon EKS + Karpenter for high-scale AWS infrastructure; use Red Hat OpenShift for enterprise hybrid-cloud.",
  "criteria": [
    {
      "id": "c1",
      "label": "Control Plane Management & SLA",
      "type": "text",
      "description": "Managed control plane uptime SLA (99.95%) and automated version upgrades."
    },
    {
      "id": "c2",
      "label": "Node Auto-Scaling (Karpenter vs Autopilot)",
      "type": "text",
      "description": "Just-in-time pod node provisioning vs standard cluster autoscaler."
    },
    {
      "id": "c3",
      "label": "Cloud IAM & Workload Identity",
      "type": "text",
      "description": "Mapping K8s service accounts directly to cloud IAM roles (IRSA / Workload Identity)."
    },
    {
      "id": "c4",
      "label": "Multi-Cloud & Hybrid On-Premises Portability",
      "type": "text",
      "description": "Running clusters on AWS, GCP, Azure, and bare-metal on-premises."
    },
    {
      "id": "c5",
      "label": "Networking & CNI Performance (VPC CNI vs Cilium)",
      "type": "text",
      "description": "Native cloud VPC IP assignment to pods vs eBPF Cilium CNI."
    },
    {
      "id": "c6",
      "label": "Pricing Structure (Hourly Control Plane + Compute)",
      "type": "text",
      "description": "$0.10/hr per cluster control plane cost plus underlying node compute."
    }
  ],
  "options": [
    {
      "id": "gke",
      "name": "Google Kubernetes Engine (GKE)",
      "summary": "The pioneer managed Kubernetes service from Google offering GKE Autopilot and advanced networking.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Gold Standard (99.95% SLA)",
          "note": "Created by the creators of Kubernetes with seamless automated control plane upgrades."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (GKE Autopilot)",
          "note": "Autopilot manages node infrastructure entirely; pay strictly for pod CPU/RAM requests."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "GCP Workload Identity",
          "note": "Seamless mapping of Kubernetes service accounts to GCP IAM roles."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Anthos / GKE Enterprise",
          "note": "GKE Enterprise manages multi-cloud and on-premises clusters."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Dataplane V2 (Cilium)",
          "note": "GKE Dataplane V2 is powered natively by eBPF Cilium."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "$0.10 / hr per Cluster",
          "note": "Standard cluster fee with one free cluster per billing account."
        }
      },
      "tags": [
        "Google GKE",
        "Autopilot",
        "Cilium",
        "Pioneer",
        "K8s Leader"
      ]
    },
    {
      "id": "eks",
      "name": "Amazon EKS",
      "summary": "AWS managed Kubernetes service providing high integration with AWS cloud services and Karpenter.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High Availability (99.95%)",
          "note": "Managed control plane across multiple AWS Availability Zones."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Karpenter Auto-Scaler",
          "note": "Karpenter provisions exact EC2 instance types just-in-time based on pod requirements."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "IRSA / EKS Pod Identities",
          "note": "EKS Pod Identities grant AWS IAM permissions directly to individual pods."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "EKS Anywhere",
          "note": "EKS Anywhere deploys Kubernetes on bare-metal and VMware on-premises."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "AWS VPC CNI",
          "note": "Assigns real AWS VPC IP addresses directly to Kubernetes pods."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "$0.10 / hr per Cluster",
          "note": "Standard AWS control plane billing per cluster."
        }
      },
      "tags": [
        "Amazon EKS",
        "AWS",
        "Karpenter",
        "IRSA",
        "VPC CNI"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Google GKE for the best out-of-the-box Kubernetes experience and zero-ops Autopilot nodes.",
    "Choose Amazon EKS paired with Karpenter for AWS workloads needing flexible EC2 node provisioning.",
    "Configure Workload Identity / EKS Pod Identities to eliminate hardcoded AWS keys inside containers."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Managed K8s Selection",
        "description": "Choosing the cloud Kubernetes distribution."
      },
      {
        "id": "p1",
        "label": "Google Pioneer K8s & Zero-Ops Autopilot",
        "description": "Need GKE Autopilot pod-level billing and eBPF Dataplane V2."
      },
      {
        "id": "p2",
        "label": "AWS Native Ecosystem & Karpenter Node Autoscaling",
        "description": "Need Amazon EKS with Karpenter just-in-time EC2 node provisioning and VPC CNI."
      },
      {
        "id": "e1",
        "label": "Google GKE",
        "description": "Pioneer managed Kubernetes service with Autopilot."
      },
      {
        "id": "e2",
        "label": "Amazon EKS",
        "description": "AWS managed Kubernetes service powered by Karpenter."
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
