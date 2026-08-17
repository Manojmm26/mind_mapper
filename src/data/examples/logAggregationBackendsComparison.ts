import { ComparisonWorkspaceData } from "../../services/llmService";

export const LOG_AGGREGATION_BACKENDS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Log Aggregation & Search Backends: Grafana Loki vs ClickHouse vs OpenSearch",
  "domainType": "tools",
  "overview": "A log engineering comparison evaluating indexless metadata-only logging (Loki), high-throughput columnar analytics (ClickHouse), and full-text Lucene inverted index search (OpenSearch).",
  "recommendedApproach": "Use Grafana Loki for low-cost Kubernetes label-indexed log storage; use ClickHouse for high-cardinality analytical log queries; use OpenSearch for complex full-text log search.",
  "criteria": [
    {
      "id": "c1",
      "label": "Log Indexing Architecture (Label-Only vs Full-Text vs Columnar)",
      "type": "text",
      "description": "Indexing log metadata labels only (Loki) vs full-text inverted index (OpenSearch) vs columnar (ClickHouse)."
    },
    {
      "id": "c2",
      "label": "Storage Cost & S3 Object Bucket Compression",
      "type": "text",
      "description": "Compressed log chunks stored directly in cheap S3 object storage."
    },
    {
      "id": "c3",
      "label": "LogQL / SQL Query Expressiveness",
      "type": "text",
      "description": "Querying logs via LogQL regex/parsers vs full ANSI SQL analytics."
    },
    {
      "id": "c4",
      "label": "Grafana Dashboard Integration",
      "type": "text",
      "description": "Native seamless log visualization inside Grafana."
    },
    {
      "id": "c5",
      "label": "Ingestion Throughput (MB/s per Node)",
      "type": "text",
      "description": "Sustained log ingestion bandwidth."
    },
    {
      "id": "c6",
      "label": "High-Cardinality Field Searching",
      "type": "text",
      "description": "Searching unindexed log attributes (user_id, IP) across billions of log lines."
    }
  ],
  "options": [
    {
      "id": "loki",
      "name": "Grafana Loki",
      "summary": "Like Prometheus, but for logs. Indexless log aggregation system designed to be highly cost-effective.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Label-Only Indexing",
          "note": "Indexes only metadata labels (app=frontend, env=prod); log contents are compressed into chunk streams."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Cheap S3)",
          "note": "Drastically reduces storage costs by storing compressed log chunks directly on cheap S3 object storage."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "LogQL Engine",
          "note": "PromQL-inspired LogQL filters log streams and parses JSON/regex on the fly."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Native Grafana",
          "note": "Designed specifically for Grafana; click from Prometheus metric spikes directly into Loki logs."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High Throughput",
          "note": "High ingestion speed due to minimal indexing overhead."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Stream Filtered",
          "note": "LogQL filters high-cardinality fields at query time."
        }
      },
      "tags": [
        "Loki",
        "Grafana",
        "Indexless",
        "LogQL",
        "S3 Storage"
      ]
    },
    {
      "id": "clickhouse-logs",
      "name": "ClickHouse (Log Storage)",
      "summary": "Ultra-fast open-source columnar database delivering blazing fast analytical log queries.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Columnar Storage Layout",
          "note": "Stores log columns (timestamp, level, message, user_id) separately for ultra-fast aggregations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Extreme Compression (10-20x)",
          "note": "Columnar ZSTD/LZ4 compression reduces log storage footprints significantly."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Full ANSI SQL",
          "note": "Query logs using full SQL, GROUP BY, aggregations, and JOINs."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Grafana Datasource",
          "note": "Grafana ClickHouse plugin provides visual querying."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Unmatched Ingestion",
          "note": "Ingests millions of log rows per second per node easily."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class High-Cardinality",
          "note": "Scans billions of high-cardinality log fields in milliseconds."
        }
      },
      "tags": [
        "ClickHouse",
        "Columnar",
        "Fast SQL",
        "High-Cardinality",
        "Log Analytics"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy Grafana Loki for Kubernetes container log aggregation integrated with Grafana dashboards.",
    "Deploy ClickHouse for analytical log platforms requiring high-cardinality SQL queries.",
    "Offload log storage chunks to AWS S3 object buckets to minimize disk costs."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Log Backend Selection",
        "description": "Choosing the log aggregation and search engine."
      },
      {
        "id": "p1",
        "label": "Low-Cost S3 Label-Only Kubernetes Logging",
        "description": "Need indexless log storage integrated natively with Prometheus and Grafana dashboards."
      },
      {
        "id": "p2",
        "label": "High-Cardinality Columnar SQL Log Analytics",
        "description": "Need ultra-fast ANSI SQL queries scanning billions of log lines by high-cardinality fields."
      },
      {
        "id": "e1",
        "label": "Grafana Loki",
        "description": "Indexless cost-effective log aggregation system."
      },
      {
        "id": "e2",
        "label": "ClickHouse",
        "description": "Ultra-fast columnar database for high-volume log analytics."
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
