import { ComparisonWorkspaceData } from "../../services/llmService";

export const TASK_QUEUES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed Task Queues & Event Schedulers: Celery vs BullMQ vs Temporal vs AWS SQS/Lambda vs Airflow",
  "domainType": "tools",
  "overview": "A comparative evaluation of task orchestration systems analyzing message durability, workflow state machines, retry policies, language ecosystem, and operational complexity.",
  "recommendedApproach": "Use BullMQ for Redis-backed Node.js/TypeScript queues; use Temporal for durable multi-step saga workflows; use Airflow for batch data pipelines; use Celery for Python background workers.",
  "criteria": [
    {
      "id": "c1",
      "label": "Workflow State Persistence & Sagas",
      "type": "text",
      "description": "Simple fire-and-forget task dispatching vs durable, state-checkpointed long-running workflows."
    },
    {
      "id": "c2",
      "label": "Language Ecosystem & SDK Quality",
      "type": "text",
      "description": "Python, Node.js/TypeScript, Go, and Java task worker support."
    },
    {
      "id": "c3",
      "label": "Message Storage Backend Requirements",
      "type": "text",
      "description": "Redis, RabbitMQ, PostgreSQL, AWS SQS, or dedicated event store."
    },
    {
      "id": "c4",
      "label": "Retry Policies, Rate-Limiting & Delayed Jobs",
      "type": "text",
      "description": "Exponential backoff retries, concurrency limits, and scheduled job execution."
    },
    {
      "id": "c5",
      "label": "Operational Complexity & UI Inspection",
      "type": "text",
      "description": "Effort to deploy workers and inspect active/failed jobs in web UI."
    },
    {
      "id": "c6",
      "label": "Horizontal Scalability & Throughput",
      "type": "text",
      "description": "Handling tens of thousands of task dispatches per second."
    }
  ],
  "options": [
    {
      "id": "bullmq",
      "name": "BullMQ",
      "summary": "Fast, reliable Redis-based task and message queue for Node.js and TypeScript.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Task Queues & Flows",
          "note": "Supports parent-child task dependencies (Flows) and delayed jobs."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "TypeScript First",
          "note": "First-class TypeScript type safety for job payloads and worker handlers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Redis Required",
          "note": "Leverages Redis Lua scripts for atomic queue operations and high speed."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class",
          "note": "Built-in rate limiting, backoff retries, concurrency controls, and cron repeaters."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Low (Bull-Board UI)",
          "note": "Easy deployment with Bull-Board dashboard for monitoring queues."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High (>10k jobs/sec)",
          "note": "Redis in-memory speed delivers ultra-high throughput."
        }
      },
      "tags": [
        "Node.js",
        "TypeScript",
        "Redis",
        "BullMQ"
      ]
    },
    {
      "id": "temporal",
      "name": "Temporal.io",
      "summary": "Durable execution platform for building fault-tolerant, stateful long-running workflows.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Unmatched (Durable Execution)",
          "note": "Workflows resume seamlessly from exact code lines even after server crashes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "TypeScript, Go, Python, Java",
          "note": "Write workflows as standard deterministic code functions in TS, Go, or Python."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Cassandra / Postgres",
          "note": "Requires Temporal Server cluster backed by Cassandra, Postgres, or MySQL."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Infinite Retries & Timers",
          "note": "Durably sleep for months; automatic activity retries and saga compensations."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderate (Temporal Cloud)",
          "note": "Self-hosted cluster has moderate ops; Temporal Cloud simplifies deployment."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Scale",
          "note": "Used by Stripe, Netflix, and Uber for core payment and order sagas."
        }
      },
      "tags": [
        "Durable Execution",
        "Saga Pattern",
        "Temporal",
        "Fault-Tolerant"
      ]
    },
    {
      "id": "celery",
      "name": "Celery",
      "summary": "The ubiquitous distributed task queue for Python applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Task Canvas (Chords/Chains)",
          "note": "Supports task signatures, chains, groups, and chords."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Python Ecosystem Standard",
          "note": "De facto standard for Django, Flask, and FastAPI backends."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "RabbitMQ / Redis",
          "note": "Uses RabbitMQ or Redis as broker, with SQL/Redis result backends."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Very Good",
          "note": "Configurable ETA, rate limits, and task expiration policies."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderate (Flower UI)",
          "note": "Monitored via Flower web dashboard; requires careful worker pool management."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High",
          "note": "Scales across hundreds of worker nodes via gevent or prefork pools."
        }
      },
      "tags": [
        "Python",
        "Django",
        "RabbitMQ",
        "Celery"
      ]
    },
    {
      "id": "airflow",
      "name": "Apache Airflow",
      "summary": "Platform to programmatically author, schedule, and monitor batch data pipelines via Python DAGs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Directed Acyclic Graphs (DAGs)",
          "note": "Built specifically for multi-stage batch data processing DAGs."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Python Native",
          "note": "Define data workflows purely in Python code files."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "PostgreSQL Metadata DB",
          "note": "Requires SQL metadata database for state tracking."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Built for Batch",
          "note": "Scheduled cron triggers, retries, and backfilling historical runs."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Rich Web UI",
          "note": "Comprehensive web dashboard for DAG inspection and task logs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Batch Focused",
          "note": "Designed for batch ETL pipelines, not sub-second real-time task queues."
        }
      },
      "tags": [
        "Airflow",
        "DAGs",
        "ETL",
        "Batch Processing"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Select queue engine based on primary language (Node/TS -> BullMQ; Python -> Celery; Data ETL -> Airflow).",
    "Adopt Temporal if your application implements complex multi-step payment sagas, long delays, or distributed transactions.",
    "Deploy Bull-Board or Flower UI to give engineering teams visibility into failed task queues.",
    "Implement dead-letter queues (DLQ) for non-retryable task errors."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Task Queue Engine Selection",
        "description": "Selecting the asynchronous task and workflow orchestration engine."
      },
      {
        "id": "p1",
        "label": "Fast Node.js / TypeScript Redis Queue",
        "description": "Need low latency, rate limiting, and delayed jobs in JS/TS applications."
      },
      {
        "id": "p2",
        "label": "Durable Stateful Sagas & Long Workflows",
        "description": "Workflows that must survive server crashes and resume from exact code state."
      },
      {
        "id": "p3",
        "label": "Python Web Backend Background Tasks",
        "description": "Asynchronous email sending, image processing, and PDF generation for Django/FastAPI."
      },
      {
        "id": "p4",
        "label": "Batch Data Engineering & Scheduled ETL DAGs",
        "description": "Authoring multi-stage data processing pipelines with rich DAG visualization."
      },
      {
        "id": "e1",
        "label": "BullMQ",
        "description": "Redis-backed TypeScript task queue with flows and rate limiting."
      },
      {
        "id": "e2",
        "label": "Temporal.io",
        "description": "Durable execution platform for stateful long-running workflows."
      },
      {
        "id": "e3",
        "label": "Celery",
        "description": "Python standard distributed task worker framework."
      },
      {
        "id": "e4",
        "label": "Apache Airflow",
        "description": "Python DAG batch scheduler and data pipeline manager."
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
