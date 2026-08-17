import { ComparisonWorkspaceData } from "../../services/llmService";

export const POD_AUTOSCALING_ENGINES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Kubernetes Pod Autoscaling Engines: KEDA vs HPA vs VPA",
  "domainType": "tools",
  "overview": "A Kubernetes autoscaling comparison evaluating event-driven scale-to-zero (KEDA), CPU/RAM metric scaling (HPA), and automatic vertical container resource resizing (VPA).",
  "recommendedApproach": "Use KEDA for event-driven scale-to-zero autoscaling based on Kafka lag or SQS queues; use HPA for standard CPU/RAM scaling; use VPA for right-sizing container memory limits.",
  "criteria": [
    {
      "id": "c1",
      "label": "Scale-to-Zero (0 Pod Replicas)",
      "type": "text",
      "description": "Scaling deployments down to 0 pods when event queues are idle to eliminate compute costs."
    },
    {
      "id": "c2",
      "label": "Event Scalers (Kafka, SQS, RabbitMQ, Prometheus)",
      "type": "text",
      "description": "Autoscaling based on custom event metrics (e.g. queue consumer lag > 100)."
    },
    {
      "id": "c3",
      "label": "Resource Dimension (Horizontal Replicas vs Vertical CPU/RAM)",
      "type": "text",
      "description": "Adding more pod instances (horizontal) vs increasing CPU/RAM limits (vertical)."
    },
    {
      "id": "c4",
      "label": "Kubernetes Metrics Server Integration",
      "type": "text",
      "description": "Relying on standard K8s Metrics Server CPU/memory percentages."
    },
    {
      "id": "c5",
      "label": "In-Place Pod Resizing (K8s v1.27+)",
      "type": "text",
      "description": "Resizing pod CPU/RAM without restarting container processes."
    },
    {
      "id": "c6",
      "label": "CNCF Standardization & Governance",
      "type": "text",
      "description": "CNCF graduated/incubating status."
    }
  ],
  "options": [
    {
      "id": "keda",
      "name": "KEDA (Kubernetes Event-Driven Autoscaling)",
      "summary": "CNCF graduated component that drives the scaling of any container in Kubernetes based on event metrics.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Scale to 0)",
          "note": "Scales deployments down to 0 pods when idle, and instantly scales back up to 1+ on new events."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "60+ Built-in Scalers",
          "note": "Scales natively based on Kafka lag, AWS SQS, Azure Service Bus, RabbitMQ, Redis, or Prometheus queries."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Horizontal Scaling",
          "note": "Extends standard K8s HPA under the hood."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Custom Metrics Adapter",
          "note": "Exposes custom metrics to Kubernetes HPA automatically."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Pod Lifecycle",
          "note": "Manages pod replica counts."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "100% open-source CNCF graduated project created by Microsoft and Red Hat."
        }
      },
      "tags": [
        "KEDA",
        "Scale-to-Zero",
        "Event-Driven",
        "CNCF",
        "Kafka Lag"
      ]
    },
    {
      "id": "hpa",
      "name": "Kubernetes HPA (Horizontal Pod Autoscaler)",
      "summary": "Native Kubernetes controller that automatically updates workload resources to match demand based on CPU/RAM.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Minimum 1 Pod",
          "note": "Standard HPA scales between minReplicas (typically >= 1) and maxReplicas."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Metrics Server / Custom",
          "note": "Scales on CPU/memory average utilization or custom Prometheus metrics."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Horizontal Replicas",
          "note": "Spawns additional pod instances to distribute load."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Native K8s Core",
          "note": "Built directly into Kubernetes controller-manager."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Pod Count",
          "note": "Adjusts deployment replica count field."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Kubernetes Core API",
          "note": "Standard Kubernetes API (autoscaling/v2)."
        }
      },
      "tags": [
        "HPA",
        "Kubernetes Native",
        "CPU Scaling",
        "Horizontal"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy KEDA on Kubernetes for event-driven scale-to-zero queue workers (Kafka/SQS).",
    "Use standard HPA for web application deployments scaling on CPU and memory utilization.",
    "Monitor scale-up latency and tune stabilization windows to prevent pod thrashing."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Autoscaling Engine Selection",
        "description": "Choosing the Kubernetes pod autoscaler."
      },
      {
        "id": "p1",
        "label": "Event-Driven Scale-to-Zero Queue Workers",
        "description": "Need to scale pods down to 0 when Kafka/SQS queues are empty, and scale up on consumer lag."
      },
      {
        "id": "p2",
        "label": "Native CPU/RAM Percentage Scaling",
        "description": "Need standard Kubernetes HPA scaling replicas based on Metrics Server CPU utilization."
      },
      {
        "id": "e1",
        "label": "KEDA",
        "description": "CNCF event-driven scale-to-zero autoscaler."
      },
      {
        "id": "e2",
        "label": "Kubernetes HPA",
        "description": "Native horizontal pod autoscaler."
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
