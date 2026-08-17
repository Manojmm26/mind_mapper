import { ComparisonWorkspaceData } from "../../services/llmService";

export const DISTRIBUTED_TRACING_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed Tracing Backends: Jaeger vs Grafana Tempo vs Zipkin vs Honeycomb",
  "domainType": "tools",
  "overview": "A distributed tracing comparison evaluating OpenTelemetry (OTel) OTLP ingestion, trace storage indexing, span sampling, and correlation with metrics and logs.",
  "recommendedApproach": "Use Grafana Tempo for indexless object-storage trace collection; use Jaeger for open-source CNCF standard distributed tracing; use Honeycomb for high-cardinality observability analysis.",
  "criteria": [
    {
      "id": "c1",
      "label": "Trace Storage Indexing & Object Storage Efficiency",
      "type": "text",
      "description": "Indexing every span vs indexless block storage (S3/GCS) architecture."
    },
    {
      "id": "c2",
      "label": "OpenTelemetry OTLP Native Ingestion",
      "type": "text",
      "description": "First-class ingestion of OpenTelemetry Protocol (OTLP/gRPC) trace spans."
    },
    {
      "id": "c3",
      "label": "Trace-to-Log & Trace-to-Metric Correlation",
      "type": "text",
      "description": "Seamless navigation from trace IDs to Loki logs and Prometheus metrics."
    },
    {
      "id": "c4",
      "label": "Tail-Based vs Head-Based Sampling",
      "type": "text",
      "description": "Filtering traces at collector based on HTTP errors/latency (tail-based) vs random (head-based)."
    },
    {
      "id": "c5",
      "label": "High-Cardinality Query Speed",
      "type": "text",
      "description": "Querying billions of trace spans by customer_id or git_commit."
    },
    {
      "id": "c6",
      "label": "Self-Hosted K8s vs Managed SaaS",
      "type": "text",
      "description": "Deployable via Helm on Kubernetes vs managed SaaS cloud platform."
    }
  ],
  "options": [
    {
      "id": "jaeger",
      "name": "CNCF Jaeger",
      "summary": "The pioneer open-source distributed tracing system built by Uber and graduated under CNCF.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Elasticsearch / Cassandra",
          "note": "Requires Elasticsearch, OpenSearch, or Cassandra backend for trace index storage."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% OTLP Native",
          "note": "Native OpenTelemetry collector ingestion via OTLP gRPC/HTTP."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Standard UI",
          "note": "Provides standard trace timeline waterfall UI view."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OTel Collector Sampling",
          "note": "Supports head-based and tail-based sampling via OpenTelemetry Collector."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Very Good",
          "note": "Search by service name, operation, tags, and duration thresholds."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated Open-Source",
          "note": "100% free open-source CNCF project deployable via Jaeger Operator."
        }
      },
      "tags": [
        "Jaeger",
        "CNCF",
        "OpenTelemetry",
        "Uber"
      ]
    },
    {
      "id": "grafana-tempo",
      "name": "Grafana Tempo",
      "summary": "High-volume, low-cost distributed tracing backend using object storage (S3/GCS).",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Indexless S3 Storage",
          "note": "Stores trace blocks directly on object storage without heavy search indexes, drastically lowering costs."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Native OTLP & Jaeger",
          "note": "Ingests OTLP, Jaeger, Zipkin, and OpenCensus protocols."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched (Grafana Stack)",
          "note": "Deep integration with Grafana, Loki (logs), and Prometheus/Mimir (metrics)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "TraceQL Search",
          "note": "TraceQL engine searches unindexed trace blocks efficiently."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High",
          "note": "TraceQL allows structural queries across span attributes."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Self-Hosted or Grafana Cloud",
          "note": "Deploy on Kubernetes or use managed Grafana Cloud."
        }
      },
      "tags": [
        "Tempo",
        "Grafana",
        "Indexless",
        "S3 Storage"
      ]
    },
    {
      "id": "honeycomb",
      "name": "Honeycomb.io",
      "summary": "Observability platform optimized for high-cardinality trace analysis and SLO tracking.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Columnar Retriever",
          "note": "Proprietary fast columnar datastore optimized for high-cardinality telemetry events."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% OTel Native",
          "note": "Pioneered OpenTelemetry adoption."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (BubbleUp)",
          "note": "BubbleUp feature automatically highlights anomalous fields in trace spans."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Refinery Tail Sampling",
          "note": "Honeycomb Refinery provides intelligent tail-based sampling."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Unmatched High-Cardinality",
          "note": "Slice and dice millions of traces instantly by any user attribute."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Managed SaaS",
          "note": "Cloud SaaS platform with generous free event volume."
        }
      },
      "tags": [
        "Honeycomb",
        "High-Cardinality",
        "BubbleUp",
        "SaaS"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Instrument code using standard OpenTelemetry SDKs (zero vendor lock-in).",
    "Deploy Grafana Tempo if you want low-cost trace storage using AWS S3 object buckets.",
    "Deploy CNCF Jaeger for standard open-source tracing waterfall inspection.",
    "Evaluate Honeycomb if debugging complex high-cardinality microservice interactions."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Distributed Tracing Selection",
        "description": "Choosing the trace storage and analysis backend."
      },
      {
        "id": "p1",
        "label": "Low-Cost Object Storage (S3) Indexless Tracing",
        "description": "Need to store massive trace volumes directly in S3 object storage integrated with Grafana & Loki."
      },
      {
        "id": "p2",
        "label": "Standard CNCF Open-Source Tracing",
        "description": "Need standard CNCF graduated waterfall timeline inspection."
      },
      {
        "id": "p3",
        "label": "High-Cardinality Instant Anomaly Analysis",
        "description": "Need to query billions of trace events instantly by user_id and inspect anomalous attributes."
      },
      {
        "id": "e1",
        "label": "Grafana Tempo",
        "description": "Indexless object-storage trace backend integrated with Grafana."
      },
      {
        "id": "e2",
        "label": "CNCF Jaeger",
        "description": "CNCF open-source distributed tracing system."
      },
      {
        "id": "e3",
        "label": "Honeycomb.io",
        "description": "High-cardinality observability platform with BubbleUp."
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
