import { ComparisonWorkspaceData } from "../../services/llmService";

export const DATA_WAREHOUSE_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Cloud Data Warehouses & OLAP Platforms: Snowflake vs Databricks vs BigQuery vs Redshift vs ClickHouse",
  "domainType": "services",
  "overview": "A comparative guide to cloud data platforms evaluating compute-storage separation, real-time streaming, SQL vs Spark processing, and concurrency scaling.",
  "recommendedApproach": "Use Snowflake for frictionless enterprise SQL analytics; use Databricks for Lakehouse ML/PySpark workflows; use ClickHouse for sub-second real-time customer analytics.",
  "criteria": [
    {
      "id": "c1",
      "label": "Compute-Storage Separation Architecture",
      "type": "text",
      "description": "Independent scaling of cloud object storage (S3/GCS) and virtual warehouses."
    },
    {
      "id": "c2",
      "label": "Real-Time Streaming & Sub-Second Ingestion",
      "type": "text",
      "description": "Ability to query incoming event streams with low latency."
    },
    {
      "id": "c3",
      "label": "SQL Simplicity vs Data Engineering (Spark/Python)",
      "type": "text",
      "description": "Standard ANSI SQL ease of use vs PySpark / Delta Lake engineering power."
    },
    {
      "id": "c4",
      "label": "Auto-Scaling Concurrency & Workload Isolation",
      "type": "text",
      "description": "Multi-cluster warehouse scaling to handle thousands of concurrent queries."
    },
    {
      "id": "c5",
      "label": "Open Table Formats (Iceberg / Delta / Hudi)",
      "type": "text",
      "description": "Support for open-source storage formats preventing data vendor lock-in."
    },
    {
      "id": "c6",
      "label": "Cost Management & Credit Predictability",
      "type": "text",
      "description": "Credit burn rate, auto-suspend efficiency, and slot reservation pricing."
    }
  ],
  "options": [
    {
      "id": "snowflake",
      "name": "Snowflake",
      "summary": "The premier cloud data warehouse offering zero-management SQL analytics and data sharing.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pioneering",
          "note": "Virtual Warehouses scale up/down instantly on top of shared cloud storage."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Snowpipe and Dynamic Tables process near real-time micro-batches."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "ANSI SQL Leader",
          "note": "Easiest platform for BI analysts; Snowpark adds Python/Java UDFs."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class",
          "note": "Multi-cluster warehouses scale concurrency automatically without query queueing."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Apache Iceberg Native",
          "note": "First-class support for Apache Iceberg tables stored in custom S3 buckets."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Credit-Based",
          "note": "Flexible per-second credit pricing with automatic warehouse auto-suspend."
        }
      },
      "tags": [
        "Snowflake",
        "SQL",
        "Zero-Ops",
        "Data Sharing"
      ]
    },
    {
      "id": "databricks",
      "name": "Databricks (Lakehouse)",
      "summary": "Unified data & AI platform built on Apache Spark and open Delta Lake format.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Lakehouse Architecture",
          "note": "Combines data lake flexibility with data warehouse ACID guarantees via Delta Lake."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Outstanding (Structured Streaming)",
          "note": "Apache Spark Structured Streaming handles continuous real-time ETL."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "PySpark & ML Preferred",
          "note": "The gold standard for data engineers, data scientists, and ML MLflow pipelines."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Very Good (Databricks SQL)",
          "note": "Serverless SQL warehouses provide fast query execution for BI."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Delta Lake Creator",
          "note": "Creator of Delta Lake open format with UniForm support for Iceberg."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "DBU Units",
          "note": "Databricks Units (DBUs) plus cloud provider VM infrastructure costs."
        }
      },
      "tags": [
        "Databricks",
        "Delta Lake",
        "Spark",
        "AI / ML"
      ]
    },
    {
      "id": "bigquery",
      "name": "Google BigQuery",
      "summary": "Serverless, petabyte-scale cloud data warehouse natively integrated into Google Cloud.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "100% Serverless",
          "note": "Separate Dremel compute tree and Colossus storage requires zero cluster sizing."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Excellent",
          "note": "Streaming buffer ingests millions of rows/sec with immediate query availability."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "SQL Native",
          "note": "Standard SQL syntax with BigQuery ML for training models directly in SQL."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Instantaneous",
          "note": "Allocates slots dynamically to handle bursty concurrency spikes."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "BigLake / Iceberg",
          "note": "BigLake unifies queries over Iceberg, Parquet, and Delta files."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "On-Demand or Slots",
          "note": "Pay $6.25 per TB scanned or reserve flat-rate capacity slots."
        }
      },
      "tags": [
        "GCP",
        "Serverless",
        "BigQuery",
        "Petabyte-Scale"
      ]
    },
    {
      "id": "clickhouse",
      "name": "ClickHouse",
      "summary": "Ultra-fast open-source columnar database management system for real-time analytical reporting.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Shared-MergeTree",
          "note": "ClickHouse Cloud separates storage onto object stores with local SSD cache."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unmatched (Sub-Second)",
          "note": "Executes analytical queries across billions of rows in milliseconds."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Vectorized SQL",
          "note": "SIMD vectorized query engine written in C++ for maximum throughput."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "High Throughput",
          "note": "Handles massive query volume with minimal CPU overhead."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Iceberg / S3 Integration",
          "note": "Directly queries external Parquet and Iceberg files."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Open Source / Cloud",
          "note": "Extremely resource-efficient; run self-hosted or ClickHouse Cloud."
        }
      },
      "tags": [
        "ClickHouse",
        "Columnar",
        "Real-Time",
        "Vectorized"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Identify primary persona: Business Intelligence SQL Analysts (Snowflake/BigQuery) vs ML Data Engineers (Databricks).",
    "Evaluate real-time SLA requirement (If sub-second user-facing analytics, deploy ClickHouse).",
    "Adopt Apache Iceberg or Delta Lake as open table format to prevent vendor lock-in.",
    "Configure auto-suspend timeouts on virtual warehouses to optimize monthly credit spend."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Data Platform Selection",
        "description": "Choosing the cloud data warehouse and analytics engine."
      },
      {
        "id": "p1",
        "label": "Enterprise SQL & BI Analytics",
        "description": "Need zero-ops SQL environment for business intelligence dashboards."
      },
      {
        "id": "p2",
        "label": "Data Engineering & PySpark ML",
        "description": "Building complex Python ETL pipelines and ML model training."
      },
      {
        "id": "p3",
        "label": "Serverless GCP Ecosystem",
        "description": "Deeply integrated with Google Cloud services and pay-per-TB pricing."
      },
      {
        "id": "p4",
        "label": "Sub-Second User-Facing Real-Time OLAP",
        "description": "Need lightning-fast customer-facing analytics dashboards."
      },
      {
        "id": "e1",
        "label": "Snowflake",
        "description": "Leading cloud data warehouse with isolated virtual compute."
      },
      {
        "id": "e2",
        "label": "Databricks",
        "description": "Lakehouse platform powered by Delta Lake and PySpark."
      },
      {
        "id": "e3",
        "label": "Google BigQuery",
        "description": "Serverless petabyte analytics with BigQuery ML."
      },
      {
        "id": "e4",
        "label": "ClickHouse",
        "description": "Vectorized C++ columnar database for sub-second queries."
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
