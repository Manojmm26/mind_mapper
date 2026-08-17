import { ComparisonWorkspaceData } from "../../services/llmService";

export const OBSERVABILITY_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Observability & APM Stacks: Datadog vs Grafana Stack vs Dynatrace vs OpenTelemetry + Jaeger",
  "domainType": "tools",
  "overview": "An evaluation of enterprise observability solutions comparing metrics, logs, tracing (MELT), vendor lock-in, OpenTelemetry compliance, and cost predictability.",
  "recommendedApproach": "Adopt OpenTelemetry (OTel) for vendor-neutral instrumentation; use Grafana Cloud/OSS for cost-effective open-source control; use Datadog or Dynatrace for turnkey AI-assisted enterprise observability.",
  "criteria": [
    {
      "id": "c1",
      "label": "Unified MELT Correlation (Metrics, Events, Logs, Traces)",
      "type": "text",
      "description": "Seamless cross-linking between log lines, trace spans, and metric spikes."
    },
    {
      "id": "c2",
      "label": "OpenTelemetry (OTel) Native Support",
      "type": "text",
      "description": "Adherence to vendor-neutral OpenTelemetry standards and collector agents."
    },
    {
      "id": "c3",
      "label": "Out-of-the-Box Dashboards & AI Anomaly Detection",
      "type": "text",
      "description": "Turnkey dashboards, automated root cause analysis, and AI alerting."
    },
    {
      "id": "c4",
      "label": "Deployment & Data Sovereignty",
      "type": "text",
      "description": "Self-hosted on-premise/Kubernetes option vs SaaS cloud-only."
    },
    {
      "id": "c5",
      "label": "Developer Experience & Query Language",
      "type": "text",
      "description": "PromQL, LogQL, Datadog syntax, and query building DX."
    },
    {
      "id": "c6",
      "label": "Pricing Predictability & Indexing Costs",
      "type": "text",
      "description": "Cost scaling with log volume, custom metrics, and APM host counts."
    }
  ],
  "options": [
    {
      "id": "datadog",
      "name": "Datadog",
      "summary": "The leading turnkey SaaS observability platform with unmatched UX and integration depth.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class",
          "note": "Seamless 1-click jump from APM trace spans directly to correlated log lines."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Supports OTel ingestion, though encourages Datadog Agent."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched",
          "note": "Hundreds of pre-built dashboards for AWS, K8s, Postgres, Redis."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "SaaS Only",
          "note": "Cloud SaaS platform; data hosted in Datadog cloud regions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Outstanding DX",
          "note": "Extremely polished UI with intuitive query builders."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Expensive",
          "note": "Can become very costly as custom metrics and log volumes grow."
        }
      },
      "tags": [
        "Turnkey",
        "SaaS",
        "Polished UX",
        "Market Leader"
      ]
    },
    {
      "id": "grafana-stack",
      "name": "Grafana Stack (LGTM: Loki, Grafana, Tempo, Mimir)",
      "summary": "The premier open-source observability suite offering complete data control and cost efficiency.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Excellent",
          "note": "Grafana unifies Loki (logs), Tempo (traces), and Mimir/Prometheus (metrics)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Native",
          "note": "Built from the ground up around OpenTelemetry and Prometheus standards."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "Massive community dashboard repository (grafana.com/dashboards)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Self-Hosted or SaaS",
          "note": "Deploy on your own K8s cluster or use Grafana Cloud."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Power-User (PromQL/LogQL)",
          "note": "PromQL and LogQL offer powerful querying, though steep learning curve."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Highly Cost-Effective",
          "note": "Loki's indexless log architecture drastically reduces storage costs."
        }
      },
      "tags": [
        "Open-Source",
        "Prometheus",
        "Loki",
        "Cost-Effective"
      ]
    },
    {
      "id": "dynatrace",
      "name": "Dynatrace",
      "summary": "Enterprise AI-powered observability platform emphasizing automated root cause analysis.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Excellent (Davis AI)",
          "note": "Davis AI engine automatically maps dependencies and correlates events."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Full OpenTelemetry support integrated into Grail data lakehouse."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class AI",
          "note": "Automated root-cause analysis pinpoints exact failing code lines."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "SaaS & Managed",
          "note": "Offers Dynatrace Managed for strict on-prem enterprise requirements."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Enterprise DQL",
          "note": "Dynatrace Query Language (DQL) for querying Grail data lakehouse."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Pricing",
          "note": "DPS (Dynatrace Platform Subscription) pricing tailored for large enterprises."
        }
      },
      "tags": [
        "AI-Driven",
        "Davis AI",
        "Enterprise",
        "Automated"
      ]
    },
    {
      "id": "opentelemetry-jaeger",
      "name": "OpenTelemetry + Jaeger / SigNoz",
      "summary": "Vendor-neutral open-source telemetry collection standard paired with open tracing backends.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Good",
          "note": "Provides standard trace context propagation across microservices."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "The Gold Standard",
          "note": "OpenTelemetry is the CNCF industry standard for telemetry data."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "DIY / Community",
          "note": "Requires assembling and configuring visualization UI backends."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Self-Hosted",
          "note": "Complete control over telemetry data pipeline and storage."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Standard",
          "note": "Standardized OTLP protocol formats."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Zero Vendor Lock-In",
          "note": "Switch backends (Datadog, Grafana, Honeycomb) by changing OTel collector config."
        }
      },
      "tags": [
        "CNCF",
        "Vendor-Neutral",
        "OpenTelemetry",
        "Tracing"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Instrument application code exclusively using OpenTelemetry SDKs to avoid vendor lock-in.",
    "Deploy OpenTelemetry Collector in Kubernetes as a sidecar or daemonset.",
    "Evaluate Grafana Cloud / LGTM stack for open-source cost control.",
    "Set up log sampling rules to drop non-critical debug logs before storage ingestion."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Observability Stack Selection",
        "description": "Choosing an APM and telemetry strategy for microservices."
      },
      {
        "id": "p1",
        "label": "Turnkey SaaS & Polished UX",
        "description": "Want immediate out-of-the-box dashboards with minimal setup."
      },
      {
        "id": "p2",
        "label": "Open-Source & Cost Control",
        "description": "Prefer Prometheus standards, Grafana dashboards, and indexless Loki logs."
      },
      {
        "id": "p3",
        "label": "AI-Driven Root Cause Analysis",
        "description": "Large enterprise needing automated anomaly detection and dependency mapping."
      },
      {
        "id": "p4",
        "label": "Zero Vendor Lock-In Standard",
        "description": "Enforcing CNCF OpenTelemetry standards across all services."
      },
      {
        "id": "e1",
        "label": "Datadog",
        "description": "Market leader turnkey SaaS observability platform."
      },
      {
        "id": "e2",
        "label": "Grafana Stack (LGTM)",
        "description": "Open-source suite (Loki, Tempo, Mimir, Grafana)."
      },
      {
        "id": "e3",
        "label": "Dynatrace",
        "description": "Enterprise AI-driven root cause analysis platform."
      },
      {
        "id": "e4",
        "label": "OpenTelemetry + Jaeger / SigNoz",
        "description": "CNCF vendor-neutral telemetry collection framework."
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
