import { ComparisonWorkspaceData } from "../../services/llmService";

export const MONITORING_PLATFORMS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Infrastructure Monitoring Platforms: Datadog vs Prometheus + Grafana vs Dynatrace vs New Relic",
  "domainType": "tools",
  "overview": "An observability comparison evaluating full-stack SaaS monitoring vs open-source Prometheus/Grafana stacks, AI root-cause detection, and cost control.",
  "recommendedApproach": "Use Prometheus + Grafana (or Mimir) for 100% open-source Kubernetes metric monitoring; use Datadog for turnkey full-stack SaaS visibility; use Dynatrace for automated AI root-cause analysis.",
  "criteria": [
    {
      "id": "c1",
      "label": "Turnkey Integrations vs Custom Exporters",
      "type": "text",
      "description": "Pre-built SaaS integrations vs open-source Prometheus exporters."
    },
    {
      "id": "c2",
      "label": "Kubernetes & Infrastructure Metrics",
      "type": "text",
      "description": "Scraping Kubelet, node-exporter, and pod metrics natively."
    },
    {
      "id": "c3",
      "label": "AI-Powered Anomaly & Root-Cause Detection",
      "type": "text",
      "description": "Davis AI engine automatically identifying topology dependency failures."
    },
    {
      "id": "c4",
      "label": "OpenTelemetry Compliance",
      "type": "text",
      "description": "Ingesting OpenTelemetry (OTel) metrics, traces, and logs."
    },
    {
      "id": "c5",
      "label": "Dashboarding & Visualization Flexibility",
      "type": "text",
      "description": "Grafana panel ecosystem vs SaaS widget builder."
    },
    {
      "id": "c6",
      "label": "Pricing Model & Cost Control",
      "type": "text",
      "description": "Self-hosted infrastructure costs vs host/metric volume SaaS billing."
    }
  ],
  "options": [
    {
      "id": "prometheus-grafana",
      "name": "Prometheus + Grafana Stack",
      "summary": "The open-source CNCF standard for Kubernetes metric scraping, PromQL alerting, and Grafana dashboards.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Prometheus Exporters",
          "note": "Hundreds of open-source exporters for Redis, Postgres, NGINX, and Linux."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "The K8s Standard",
          "note": "Native Kubernetes service discovery scrapes pod metrics effortlessly."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Rule-Based Alerting",
          "note": "Alertmanager rules defined via PromQL expressions."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OpenTelemetry Native",
          "note": "Ingests OTLP metrics directly."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Dashboarding",
          "note": "Grafana is the undisputed world leader in visualization dashboards."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% Free Open-Source",
          "note": "Zero license fees; pay only for cluster storage nodes (or Grafana Cloud)."
        }
      },
      "tags": [
        "Prometheus",
        "Grafana",
        "CNCF",
        "Open-Source",
        "K8s"
      ]
    },
    {
      "id": "datadog",
      "name": "Datadog",
      "summary": "The premier cloud-scale monitoring and security platform providing unified metrics, traces, and logs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "600+ Turnkey Integrations",
          "note": "Datadog Agent automatically discovers and monitors AWS, GCP, K8s, and DBs."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Datadog Agent",
          "note": "Single unified agent captures metrics, logs, traces, and security events."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Watchdog AI",
          "note": "Watchdog AI highlights anomalous latency spikes and error rate changes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OTel Collector Partner",
          "note": "Accepts OpenTelemetry traces and metrics."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Polished SaaS Dashboards",
          "note": "Turnkey dashboards created automatically upon installing integrations."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Per-Host + Usage Billing",
          "note": "Per-host fee plus custom metrics, log ingestion, and APM trace add-ons."
        }
      },
      "tags": [
        "Datadog",
        "SaaS",
        "Turnkey",
        "Watchdog AI"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy Prometheus + Grafana for open-source Kubernetes metric monitoring.",
    "Adopt Datadog if your team requires turnkey 600+ integrations with zero maintenance.",
    "Instrument applications with OpenTelemetry to keep backend telemetry portable."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Monitoring Platform Selection",
        "description": "Choosing the infrastructure observability stack."
      },
      {
        "id": "p1",
        "label": "Open-Source Kubernetes Native Stack",
        "description": "Need free CNCF open-source PromQL metric scraping and Grafana dashboards."
      },
      {
        "id": "p2",
        "label": "Turnkey Unified Cloud SaaS Platform",
        "description": "Need single agent capturing metrics, logs, and traces with 600+ integrations."
      },
      {
        "id": "e1",
        "label": "Prometheus + Grafana",
        "description": "CNCF open-source metric monitoring stack."
      },
      {
        "id": "e2",
        "label": "Datadog",
        "description": "Enterprise cloud observability SaaS platform."
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
