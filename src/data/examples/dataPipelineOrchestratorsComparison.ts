import { ComparisonWorkspaceData } from "../../services/llmService";

export const DATA_PIPELINE_ORCHESTRATORS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Data Pipeline Orchestrators: Apache Airflow vs Dagster vs Prefect",
  "domainType": "tools",
  "overview": "A data engineering platform evaluation comparing task-based DAG scheduling (Airflow), asset-centric data orchestration (Dagster), and hybrid execution (Prefect).",
  "recommendedApproach": "Use Dagster for modern data-asset-centric orchestration & software-defined assets (SDAs); use Airflow for industry-standard legacy DAG scheduling; use Prefect for dynamic Python flows.",
  "criteria": [
    {
      "id": "c1",
      "label": "Orchestration Model (Task-Based DAG vs Data-Asset Centric)",
      "type": "text",
      "description": "Task execution order vs software-defined data asset lineage (SDAs)."
    },
    {
      "id": "c2",
      "label": "Local Developer Testing & Fast Feedback",
      "type": "text",
      "description": "Testing data pipelines locally without spinning up heavy Celery/Kubernetes clusters."
    },
    {
      "id": "c3",
      "label": "Data Typing & I/O Lineage Tracking",
      "type": "text",
      "description": "Passing typed data frames directly between pipeline steps with automated data lineage."
    },
    {
      "id": "c4",
      "label": "Dynamic DAGs & Runtime Parameterization",
      "type": "text",
      "description": "Generating pipeline steps dynamically at runtime based on API responses."
    },
    {
      "id": "c5",
      "label": "Web UI Inspection & Asset Catalog",
      "type": "text",
      "description": "Modern web dashboard displaying data asset freshness and column lineage."
    },
    {
      "id": "c6",
      "label": "Industry Adoption & Operator Ecosystem",
      "type": "text",
      "description": "Breadth of pre-built integrations for Snowflake, dbt, BigQuery, and Spark."
    }
  ],
  "options": [
    {
      "id": "dagster",
      "name": "Dagster",
      "summary": "The data-asset-centric orchestrator for building, testing, and monitoring data assets.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Software-Defined Assets)",
          "note": "Models pipelines as Software-Defined Assets (SDAs); focuses on the data produced rather than raw tasks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Local Testing",
          "note": "Test data assets in-memory using standard PyTest without external databases."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Native Type System",
          "note": "Strong data typing, I/O managers, and automated column-level data lineage."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Dynamic Partitioning",
          "note": "Dynamic partition keys and sensors."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Dagit Web UI",
          "note": "Clean modern Dagit dashboard displaying real-time data asset lineage graph."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "dbt & Snowflake Standard",
          "note": "First-class native integration with dbt models and Snowflake."
        }
      },
      "tags": [
        "Dagster",
        "Software-Defined Assets",
        "dbt",
        "Data Lineage",
        "Modern"
      ]
    },
    {
      "id": "airflow",
      "name": "Apache Airflow",
      "summary": "The pioneer open-source workflow management platform created by Airbnb.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Task-Based DAG",
          "note": "Defines pipelines as directed acyclic graphs (DAGs) of operator tasks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Heavy Local Setup",
          "note": "Requires running Postgres, Webserver, and Scheduler locally (via astro/breeze)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "XComs",
          "note": "Passes small metadata via XComs; large datasets offloaded to S3."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Dynamic Task Mapping",
          "note": "Airflow 2.3+ introduced dynamic task mapping."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Classic Grid View",
          "note": "Classic DAG grid and tree execution view."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal Enterprise Standard",
          "note": "Supported by MWAA (AWS), Cloud Composer (GCP), and Astronomer."
        }
      },
      "tags": [
        "Airflow",
        "Apache",
        "DAG",
        "Industry Standard",
        "MWAA"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Dagster for modern data engineering teams centered on dbt, Snowflake, and Software-Defined Assets.",
    "Adopt Apache Airflow for legacy enterprise migration and cloud-managed services (MWAA / Cloud Composer).",
    "Define unit tests for data assets using PyTest before deploying to production."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Orchestrator Selection",
        "description": "Choosing the data pipeline orchestrator."
      },
      {
        "id": "p1",
        "label": "Software-Defined Data Assets & dbt Lineage",
        "description": "Need asset-centric orchestration, local PyTest testing, and column-level lineage via Dagster."
      },
      {
        "id": "p2",
        "label": "Universal Task-Based DAG Scheduling",
        "description": "Need industry-standard Apache Airflow DAGs supported by AWS MWAA and GCP Cloud Composer."
      },
      {
        "id": "e1",
        "label": "Dagster",
        "description": "Modern asset-centric data orchestrator."
      },
      {
        "id": "e2",
        "label": "Apache Airflow",
        "description": "Pioneer task-based workflow orchestrator."
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
