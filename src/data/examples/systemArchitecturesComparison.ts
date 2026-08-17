import { ComparisonWorkspaceData } from "../../services/llmService";

export const SYSTEM_ARCHITECTURES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "System Architecture Patterns: Modular Monolith vs Microservices vs Serverless Functions vs Event-Driven (EDA)",
  "domainType": "strategies",
  "overview": "A high-level architectural decision matrix evaluating operational overhead, team scaling, data consistency, deployment independence, and system resilience.",
  "recommendedApproach": "Start with a Modular Monolith for early-stage products to maintain rapid iteration and ACID transactions; transition to Microservices or Event-Driven Architecture (EDA) as domain boundaries and team sizes grow.",
  "criteria": [
    {
      "id": "c1",
      "label": "Operational & Infrastructure Overhead",
      "type": "text",
      "description": "Complexity of deployment pipelines, monitoring, and network topology."
    },
    {
      "id": "c2",
      "label": "Independent Team Scaling & Ownership",
      "type": "text",
      "description": "Enabling autonomous engineering teams to ship code without blocking each other."
    },
    {
      "id": "c3",
      "label": "Data Consistency & Distributed Transactions",
      "type": "text",
      "description": "Single-database ACID consistency vs Eventual Consistency and Saga patterns."
    },
    {
      "id": "c4",
      "label": "Fault Isolation & Blast Radius",
      "type": "text",
      "description": "Preventing a single bug or memory leak from taking down the entire system."
    },
    {
      "id": "c5",
      "label": "Developer Iteration & Local Debugging",
      "type": "text",
      "description": "Ease of spinning up full environment on a local laptop for debugging."
    },
    {
      "id": "c6",
      "label": "Cost Scaling & Idle Resource Efficiency",
      "type": "text",
      "description": "Fixed server cluster costs vs pay-per-execution serverless scaling."
    }
  ],
  "options": [
    {
      "id": "modular-monolith",
      "name": "Modular Monolith",
      "summary": "Single deployable unit structured internally into strictly isolated domain modules.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Lowest Overhead",
          "note": "Single deployment pipeline, single database, zero network hop latency between modules."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good (Medium Teams)",
          "note": "Module boundaries enforced via code structure and internal interfaces."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% ACID Consistency",
          "note": "Single database transaction covers updates across multiple domain modules."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Shared Memory Space",
          "note": "A process crash or memory leak impacts the entire monolithic server instance."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class",
          "note": "Clone repo and run 'npm start' or 'go run' for instant local execution."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Predictable Server Cost",
          "note": "Efficient utilization of memory; easy to scale vertically or horizontally."
        }
      },
      "tags": [
        "Monolith",
        "Modular",
        "Low-Ops",
        "ACID"
      ]
    },
    {
      "id": "microservices",
      "name": "Microservices Architecture",
      "summary": "Decoupled services owned by independent teams communicating over network APIs (REST/gRPC).",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High Overhead",
          "note": "Requires Kubernetes, service meshes, distributed tracing, and CI/CD pipelines."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class",
          "note": "Autonomous teams deploy their microservices independently at any time."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Eventual Consistency",
          "note": "Each service owns its private database; requires Saga pattern for distributed updates."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Isolated Blast Radius",
          "note": "Failure in recommendation service does not crash checkout service."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Complex Local Setup",
          "note": "Requires Docker Compose or Telepresence to run multi-service dependencies locally."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Higher Base Cost",
          "note": "Cluster management overhead and container memory baselines."
        }
      },
      "tags": [
        "Microservices",
        "Decoupled",
        "Team Autonomy",
        "Distributed"
      ]
    },
    {
      "id": "event-driven-eda",
      "name": "Event-Driven Architecture (EDA)",
      "summary": "Asynchronous architecture where decoupled services communicate via published event streams.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Moderate to High",
          "note": "Requires Kafka, RabbitMQ, or EventBridge message broker infrastructure."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Outstanding",
          "note": "Publishers emit events without knowing consumers; new features added seamlessly."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Eventual Consistency",
          "note": "Asynchronous event delivery requires idempotent event handlers."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "High Resilience",
          "note": "Message queues buffer spikes; consumers process events at their own pace."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderate",
          "note": "Requires event schema registries (Avro/Protobuf) and mock event emitters."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Efficient Buffer Scale",
          "note": "Absorbs massive traffic bursts without scaling compute instances."
        }
      },
      "tags": [
        "Event-Driven",
        "Kafka",
        "Asynchronous",
        "EDA"
      ]
    },
    {
      "id": "serverless-functions",
      "name": "Serverless Functions Architecture",
      "summary": "Application composed of short-lived cloud functions triggered directly by HTTP/events.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Infrastructure Ops",
          "note": "Cloud provider manages all OS patching, server provisioning, and auto-scaling."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High",
          "note": "Functions deployed independently using SST or Serverless Framework."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Stateless",
          "note": "Requires external database (DynamoDB, Aurora Serverless) for state persistence."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Fine-Grained Isolation",
          "note": "Each function invocation executes in an isolated microVM sandbox."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Good (Local SST/SAM)",
          "note": "Local emulation via SST or Serverless Framework."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Zero Cost at Idle",
          "note": "Pay strictly per invocation millisecond; perfect for variable traffic workloads."
        }
      },
      "tags": [
        "Serverless",
        "AWS Lambda",
        "Pay-per-Use",
        "Zero-Ops"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Start with a Modular Monolith when building early-stage products with small engineering teams.",
    "Split into Microservices when team size grows (>25 engineers) and deployment contention arises.",
    "Introduce Event-Driven Architecture (Kafka/RabbitMQ) for asynchronous domain events.",
    "Use Serverless Functions for unpredictable, event-triggered bursty workloads."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "System Architecture Strategy",
        "description": "Selecting the core architectural pattern for your software system."
      },
      {
        "id": "p1",
        "label": "Early-to-Mid Stage Product with Small Team",
        "description": "Need rapid velocity, simple single-database ACID transactions, and minimal ops."
      },
      {
        "id": "p2",
        "label": "Large Multi-Team Enterprise",
        "description": "Autonomous engineering teams needing independent deployment pipelines."
      },
      {
        "id": "p3",
        "label": "Asynchronous High-Scale Event Streams",
        "description": "Decoupled services publishing and consuming continuous real-time event streams."
      },
      {
        "id": "p4",
        "label": "Unpredictable / Bursty Event-Driven Workloads",
        "description": "Pay-per-use scaling with zero idle server infrastructure maintenance."
      },
      {
        "id": "e1",
        "label": "Modular Monolith",
        "description": "Single deployable unit with strict internal domain module boundaries."
      },
      {
        "id": "e2",
        "label": "Microservices Architecture",
        "description": "Decoupled domain services communicating via REST/gRPC APIs."
      },
      {
        "id": "e3",
        "label": "Event-Driven Architecture (EDA)",
        "description": "Asynchronous event stream processing powered by Kafka or RabbitMQ."
      },
      {
        "id": "e4",
        "label": "Serverless Functions Architecture",
        "description": "Event-triggered cloud functions with zero idle infrastructure cost."
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
