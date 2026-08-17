import { ComparisonWorkspaceData } from "../../services/llmService";

export const LAKEHOUSE_FORMATS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Data Lakehouse Table Formats: Apache Iceberg vs Delta Lake vs Apache Hudi",
  "domainType": "concepts",
  "overview": "A data architecture comparison evaluating open table formats on ACID transactions on object storage (S3/GCS), schema evolution, time-travel point-in-time queries, and query engine neutrality.",
  "recommendedApproach": "Use Apache Iceberg for engine-neutral open table format backed by Snowflake, Databricks, and AWS; use Delta Lake for Databricks Spark pipelines; use Apache Hudi for streaming upserts.",
  "criteria": [
    {
      "id": "c1",
      "label": "Engine Neutrality (Snowflake, Databricks, Trino, Flink)",
      "type": "text",
      "description": "Independent governance and multi-query engine support."
    },
    {
      "id": "c2",
      "label": "ACID Transactions on Object Storage (S3 / GCS)",
      "type": "text",
      "description": "Optimistic concurrency control guaranteeing isolated ACID commits on cloud blob storage."
    },
    {
      "id": "c3",
      "label": "Schema Evolution & Hidden Partitioning",
      "type": "text",
      "description": "Safe column additions/renames and automatic partition evolution without rewriting tables."
    },
    {
      "id": "c4",
      "label": "Time-Travel & Branching Snapshot Queries",
      "type": "text",
      "description": "Querying table state at specific historical timestamps or git-like snapshot tags."
    },
    {
      "id": "c5",
      "label": "Streaming Upsert & Merge-on-Read Speed",
      "type": "text",
      "description": "Handling frequent record updates (Merge-on-Read vs Copy-on-Write)."
    },
    {
      "id": "c6",
      "label": "Open Source Governance (Apache vs Linux Foundation)",
      "type": "text",
      "description": "Apache Software Foundation governance vs corporate vendor control."
    }
  ],
  "options": [
    {
      "id": "iceberg",
      "name": "Apache Iceberg",
      "summary": "The open-source high-performance format for huge analytic tables created by Netflix and Apple.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Gold Standard Neutrality",
          "note": "Supported natively by Snowflake, Databricks, AWS Athena, Starburst, Trino, Flink, and Spark."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Strict Snapshot ACID",
          "note": "Serializability via atomic snapshot metadata file commits."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Hidden Partitioning",
          "note": "Pioneered hidden partitioning; change partition spec without breaking existing queries."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class Time-Travel",
          "note": "Query historical snapshots by ID or timestamp, with branch and tag support."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Copy-on-Write & Merge-on-Read",
          "note": "Supports both COW for fast reads and MOR for fast writes."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apache Software Foundation",
          "note": "100% open-source ASF project."
        }
      },
      "tags": [
        "Iceberg",
        "Apache",
        "Lakehouse",
        "Engine-Neutral",
        "Time-Travel"
      ]
    },
    {
      "id": "delta-lake",
      "name": "Delta Lake (Linux Foundation)",
      "summary": "The open-source storage framework created by Databricks to build data lakehouses.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Databricks Core / Universal",
          "note": "Core storage engine of Databricks; Delta Universal Format (UniForm) reads Iceberg metadata."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "JSON Transaction Log",
          "note": "ACID transactions backed by _delta_log transaction log files."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Schema Enforcement",
          "note": "Prevents bad data insertion; schema evolution via mergeSchema option."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Delta Time-Travel",
          "note": "Query previous versions using VERSION AS OF or TIMESTAMP AS OF."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High Streaming Speed",
          "note": "Native streaming source/sink for Apache Spark Structured Streaming."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Linux Foundation",
          "note": "Open-source Linux Foundation project."
        }
      },
      "tags": [
        "Delta Lake",
        "Databricks",
        "Spark",
        "Lakehouse"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Apache Iceberg for multi-engine data lakehouse architectures (Snowflake, Trino, Flink).",
    "Adopt Delta Lake if your data pipeline is built primarily on Databricks and PySpark.",
    "Enable automatic compaction and orphan file cleanup jobs on S3 storage buckets."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Lakehouse Format Selection",
        "description": "Choosing the open table format."
      },
      {
        "id": "p1",
        "label": "Engine-Neutral Open Standard (Snowflake, Trino, Flink)",
        "description": "Need Apache governance with hidden partitioning and broad query engine support."
      },
      {
        "id": "p2",
        "label": "Databricks PySpark Lakehouse Ecosystem",
        "description": "Need native Spark Structured Streaming and Delta UniForm compatibility."
      },
      {
        "id": "e1",
        "label": "Apache Iceberg",
        "description": "Engine-neutral open table format for analytic tables."
      },
      {
        "id": "e2",
        "label": "Delta Lake",
        "description": "Databricks open-source storage framework."
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
