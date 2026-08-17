import { ComparisonWorkspaceData } from "../../services/llmService";

export const DISTRIBUTED_TRANSACTIONS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed Transaction Patterns: Saga (Choreography / Orchestration) vs 2PC vs Outbox Pattern",
  "domainType": "concepts",
  "overview": "A distributed systems architecture evaluation comparing eventual consistency via Saga compensating transactions, ACID two-phase commit (2PC) blocking locks, and Transactional Outbox pattern.",
  "recommendedApproach": "Use Saga Pattern (Orchestration) for microservice workflows requiring eventual consistency; use Transactional Outbox to guarantee DB update & Kafka event dual-write atomicity.",
  "criteria": [
    {
      "id": "c1",
      "label": "Data Consistency Model (ACID vs Eventual Consistency)",
      "type": "text",
      "description": "Strict distributed ACID vs eventual consistency with compensating transactions."
    },
    {
      "id": "c2",
      "label": "System Availability & Blocking Locks",
      "type": "text",
      "description": "High availability without distributed database row locking."
    },
    {
      "id": "c3",
      "label": "Failure Recovery & Compensating Actions",
      "type": "text",
      "description": "Executing rollbacks via compensating undo transactions (e.g. CancelOrder)."
    },
    {
      "id": "c4",
      "label": "Dual-Write Atomicity (Database + Message Queue)",
      "type": "text",
      "description": "Guaranteeing a database update and Kafka event publish happen atomically together."
    },
    {
      "id": "c5",
      "label": "Architectural Complexity",
      "type": "text",
      "description": "Managing centralized saga orchestrators vs CDC Debezium connectors."
    },
    {
      "id": "c6",
      "label": "Microservice Autonomy & Coupling",
      "type": "text",
      "description": "Loose service coupling vs tight synchronous RPC coupling."
    }
  ],
  "options": [
    {
      "id": "saga-pattern",
      "name": "Saga Pattern (Orchestration / Choreography)",
      "summary": "Sequence of local transactions where each local transaction updates the database and triggers the next step via events.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Eventual Consistency",
          "note": "Services achieve eventual consistency via asynchronous event notifications."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Availability",
          "note": "Eliminates distributed database locks; services update local DBs independently."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Compensating Transactions",
          "note": "If a step fails, the Saga executes compensating undo transactions in reverse order."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Event Triggered",
          "note": "Triggers subsequent steps via Kafka or Temporal sagas."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Temporal / State Machine",
          "note": "Temporal.io or AWS Step Functions simplify saga state machine orchestration."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Loosely Coupled",
          "note": "Services remain completely decoupled."
        }
      },
      "tags": [
        "Saga Pattern",
        "Eventual Consistency",
        "Microservices",
        "Compensating Transactions",
        "Temporal"
      ]
    },
    {
      "id": "transactional-outbox",
      "name": "Transactional Outbox Pattern",
      "summary": "Pattern ensuring database update and event publishing happen atomically within a single local DB transaction.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Local ACID Guarantee",
          "note": "Business record and outbox message written atomically in same local DB transaction."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High Local Availability",
          "note": "No remote blocking network calls during DB transaction commit."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "At-Least-Once Delivery",
          "note": "Outbox relay guarantees event is published to Kafka/RabbitMQ."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class (Eliminates Dual-Write)",
          "note": "Pioneered eliminating dual-write bugs between DB and message broker using CDC (Debezium)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "CDC / Debezium Connector",
          "note": "Debezium reads Postgres WAL logs automatically to relay messages."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Local Service Autonomy",
          "note": "Enforces service encapsulation."
        }
      },
      "tags": [
        "Outbox Pattern",
        "Debezium",
        "CDC",
        "Dual-Write",
        "Postgres WAL"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Saga Orchestration (via Temporal.io) for multi-step microservice business workflows.",
    "Use Transactional Outbox + Debezium CDC to guarantee DB updates and Kafka events are published atomically.",
    "Avoid Two-Phase Commit (2PC) in high-scale microservices due to blocking network lock risks."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Distributed Transaction Selection",
        "description": "Choosing the transaction pattern."
      },
      {
        "id": "p1",
        "label": "Multi-Step Microservice Eventual Consistency (Saga)",
        "description": "Need asynchronous local transactions with compensating undo actions on failure."
      },
      {
        "id": "p2",
        "label": "Atomic DB + Event Broker Dual-Write Prevention (Outbox)",
        "description": "Need local DB ACID transaction writing outbox table relayed via Debezium CDC to Kafka."
      },
      {
        "id": "e1",
        "label": "Saga Pattern",
        "description": "Eventual consistency pattern using compensating transactions."
      },
      {
        "id": "e2",
        "label": "Transactional Outbox Pattern",
        "description": "Local ACID outbox table relayed via CDC to message brokers."
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
