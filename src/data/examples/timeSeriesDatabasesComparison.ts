import { ComparisonWorkspaceData } from "../../services/llmService";

export const TIME_SERIES_DATABASES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Time-Series Databases: TimescaleDB vs InfluxDB vs Prometheus vs QuestDB",
  "domainType": "tools",
  "overview": "A performance evaluation of time-series databases comparing relational SQL extensions, columnar storage, high-cardinality metric indexing, compression ratios, and retention policies.",
  "recommendedApproach": "Use TimescaleDB for PostgreSQL-native SQL time-series analytics; use Prometheus for Kubernetes & infrastructure monitoring; use QuestDB for SIMD-accelerated financial market tick data.",
  "criteria": [
    {
      "id": "c1",
      "label": "SQL Support & Query Expressiveness",
      "type": "text",
      "description": "Standard ANSI SQL JOINs vs specialized time-series query languages (Flux / PromQL)."
    },
    {
      "id": "c2",
      "label": "High-Cardinality Metric Ingestion Speed",
      "type": "text",
      "description": "Handling millions of unique metric label combinations without performance degradation."
    },
    {
      "id": "c3",
      "label": "Columnar Compression Ratio (Gorilla / ZSTD)",
      "type": "text",
      "description": "Compressing timestamped numeric metrics by 90%+ on disk."
    },
    {
      "id": "c4",
      "label": "Postgres Ecosystem Integration",
      "type": "text",
      "description": "Native PostgreSQL extension vs custom standalone time-series engine."
    },
    {
      "id": "c5",
      "label": "Data Retention & Automatic Chunk Hypertables",
      "type": "text",
      "description": "Partitioning data automatically into time/space chunks for fast deletion."
    },
    {
      "id": "c6",
      "label": "Primary Use Case (Infrastructure Monitoring vs Financial Ticks)",
      "type": "text",
      "description": "K8s monitoring metrics vs high-frequency financial trading tick data."
    }
  ],
  "options": [
    {
      "id": "timescaledb",
      "name": "TimescaleDB",
      "summary": "The open-source relational database for time-series packaged as a PostgreSQL extension.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "100% Full SQL",
          "note": "Use standard PostgreSQL SQL, JOINs, window functions, and PostGIS geo-spatial queries."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High",
          "note": "Hypertables partition data into time/space chunks transparently."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (90%+)",
          "note": "Native columnar compression reduces disk usage by 90-95%."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "PostgreSQL Extension",
          "note": "Runs directly inside PostgreSQL; use standard ORMs, pg_dump, and Postgres drivers."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Automated Retention",
          "note": "Drop historical hypertables instantly without row-by-row DELETE locks."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "General Time-Series & IoT",
          "note": "Ideal for IoT sensor data, application metrics, and financial analytics."
        }
      },
      "tags": [
        "TimescaleDB",
        "PostgreSQL",
        "Full SQL",
        "Hypertables"
      ]
    },
    {
      "id": "prometheus",
      "name": "Prometheus (TSDB)",
      "summary": "The CNCF standard open-source monitoring and alerting toolkit built around pull-based metric collection.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "PromQL Query Language",
          "note": "Powerful PromQL for computing rate(), histogram_quantile(), and metric aggregations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High (Careful with Cardinality)",
          "note": "Optimized for infrastructure metrics; extreme label cardinality requires Mimir/VictoriaMetrics."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Gorilla Compression",
          "note": "Chimp/Gorilla floating-point timestamp compression algorithm."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Standalone Monitoring Engine",
          "note": "CNCF standard for Kubernetes cluster monitoring and Alertmanager rules."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Retention Hours/Days",
          "note": "Configurable local retention; long-term storage offloaded to Thanos or Mimir."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Infrastructure Monitoring",
          "note": "De facto standard for DevOps infrastructure metrics."
        }
      },
      "tags": [
        "Prometheus",
        "PromQL",
        "K8s Monitoring",
        "CNCF"
      ]
    },
    {
      "id": "questdb",
      "name": "QuestDB",
      "summary": "Ultra-fast open-source SQL time-series database written in C++ and Java with SIMD instructions.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "SQL + Time-Series Extensions",
          "note": "ANSI SQL with SAMPLE BY, LATEST ON, and time-series syntax extensions."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unmatched Ingestion",
          "note": "Influx Line Protocol (ILP) ingests over 4 million rows/sec per server."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Columnar SIMD",
          "note": "Vectorized C++ execution leverages AVX-512 SIMD CPU instructions."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Postgres Wire Protocol",
          "note": "Supports Postgres wire protocol for SQL client connections."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Design for High-Frequency",
          "note": "Partitioned data layout for instant slice-and-dice queries."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Financial Ticks & Market Data",
          "note": "Built specifically for high-frequency financial market tick data and crypto feeds."
        }
      },
      "tags": [
        "QuestDB",
        "SIMD",
        "Financial Ticks",
        "Fast SQL"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose TimescaleDB for PostgreSQL-native SQL time-series data needing relational JOINs.",
    "Choose Prometheus for Kubernetes infrastructure metric scraping and PromQL alerting.",
    "Choose QuestDB for financial market tick ingestion (> 1M writes/sec) and SIMD query speed."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Time-Series DB Selection",
        "description": "Choosing the time-series metric and telemetry database."
      },
      {
        "id": "p1",
        "label": "PostgreSQL SQL Integration & IoT Analytics",
        "description": "Need full ANSI SQL, relational JOINs, and 90%+ compression inside Postgres."
      },
      {
        "id": "p2",
        "label": "Kubernetes & Infrastructure Monitoring",
        "description": "Need pull-based metric scraping, PromQL, and Alertmanager integration."
      },
      {
        "id": "p3",
        "label": "High-Frequency Financial Ticks (>1M rows/sec)",
        "description": "Need SIMD-accelerated C++ ingestion for financial market tick data."
      },
      {
        "id": "e1",
        "label": "TimescaleDB",
        "description": "PostgreSQL extension converting tables to compressed hypertables."
      },
      {
        "id": "e2",
        "label": "Prometheus",
        "description": "CNCF monitoring engine powered by PromQL."
      },
      {
        "id": "e3",
        "label": "QuestDB",
        "description": "SIMD-accelerated C++ time-series database for financial ticks."
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
