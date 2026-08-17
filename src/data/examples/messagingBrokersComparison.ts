import { ComparisonWorkspaceData } from "../../services/llmService";

export const MESSAGING_BROKERS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed Messaging & Event Streaming: Apache Kafka vs Apache Pulsar vs RabbitMQ vs NATS JetStream",
  "domainType": "tools",
  "overview": "An event-driven architecture comparison evaluating distributed log append persistence (Kafka), multi-tenancy + compute-storage separation (Pulsar), AMQP message queuing (RabbitMQ), and lightweight Go messaging (NATS).",
  "recommendedApproach": "Use Apache Kafka for high-throughput event streaming & log replay; use RabbitMQ for complex AMQP routing & job queues; use NATS JetStream for lightweight ultra-fast Go messaging; use Pulsar for multi-tenant storage separation.",
  "criteria": [
    {
      "id": "c1",
      "label": "Message Ordering & Replay (Log Append vs Queue)",
      "type": "text",
      "description": "Immutable append-only log replay vs transient message queue deletion upon ACK."
    },
    {
      "id": "c2",
      "label": "Throughput & Latency (MB/s & Sub-Millisecond)",
      "type": "text",
      "description": "High-bandwidth continuous streaming vs ultra-low-latency pub/sub."
    },
    {
      "id": "c3",
      "label": "Compute & Storage Separation",
      "type": "text",
      "description": "Decoupled storage nodes (Apache BookKeeper) vs coupled broker disk partitions."
    },
    {
      "id": "c4",
      "label": "Routing Protocols (AMQP, MQTT, STOMP, NATS)",
      "type": "text",
      "description": "Flexible exchange topic bindings vs fixed partition keys."
    },
    {
      "id": "c5",
      "label": "Operational Complexity & Cluster Footprint",
      "type": "text",
      "description": "Single Go binary vs Java JVM + KRaft/Zookeeper cluster maintenance."
    },
    {
      "id": "c6",
      "label": "Multi-Tenancy & Geo-Replication",
      "type": "text",
      "description": "Native multi-tenant namespace isolation and active-active geo-replication."
    }
  ],
  "options": [
    {
      "id": "kafka",
      "name": "Apache Kafka (KRaft)",
      "summary": "The gold-standard distributed event streaming platform for high-throughput log append replay.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Immutable Commit Log",
          "note": "Stores events in ordered partitions allowing historical log replay at any offset."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Unmatched Throughput",
          "note": "Optimized OS page cache and zero-copy sendfile network transmission."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Coupled Partitions",
          "note": "Broker nodes manage both compute and partition disk storage (KRaft mode eliminates ZooKeeper)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Partition Keys",
          "note": "Routes messages to specific partition numbers based on key hash."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Java JVM Cluster",
          "note": "Requires dedicated Java JVM broker tuning and partition rebalancing."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "MirrorMaker 2",
          "note": "Cross-cluster replication via MirrorMaker 2."
        }
      },
      "tags": [
        "Kafka",
        "Event Streaming",
        "Log Append",
        "KRaft",
        "Gold Standard"
      ]
    },
    {
      "id": "rabbitmq",
      "name": "RabbitMQ",
      "summary": "The most widely deployed open-source message broker supporting AMQP 0-9-1, MQTT, and STOMP.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Transient Queue Deletion",
          "note": "Messages are deleted from queues once acknowledged by consumers (RabbitMQ Streams adds log append)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Sub-Millisecond Latency",
          "note": "Ultra-low latency message delivery for real-time task queues."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Erlang Node Storage",
          "note": "Queues reside in RAM and Erlang process memory."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class AMQP Routing",
          "note": "Direct, Topic, Fanout, and Headers exchanges offer sophisticated message routing."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Lightweight Erlang",
          "note": "Erlang OTP runtime handles massive concurrent socket connections effortlessly."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Quorum Queues",
          "note": "Raft-based Quorum Queues guarantee high availability."
        }
      },
      "tags": [
        "RabbitMQ",
        "AMQP",
        "Message Queue",
        "Erlang",
        "Routing"
      ]
    },
    {
      "id": "nats-jetstream",
      "name": "NATS JetStream",
      "summary": "Hyper-fast, lightweight open-source messaging system written in Go featuring JetStream persistence.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pub/Sub + JetStream Log",
          "note": "Provides ephemeral Pub/Sub alongside JetStream durable stream persistence."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Ultra-Fast (Millions QPS)",
          "note": "Single Go binary handles millions of messages per second with minimal CPU."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Lightweight Storage",
          "note": "Embedded Raft storage layer."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Subject-Based Routing",
          "note": "Flexible subject wildcard routing (e.g. orders.us.west.*)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Single Go Binary (15MB)",
          "note": "Easiest cluster maintenance; single 15MB Go binary with zero external dependencies."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Global Supercluster",
          "note": "Built-in leaf nodes and global superclustering."
        }
      },
      "tags": [
        "NATS",
        "JetStream",
        "Go Engine",
        "Hyper-Fast",
        "CNCF"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Apache Kafka for event-driven streaming architectures requiring durable log replay.",
    "Use RabbitMQ for complex AMQP task queues and microservice message routing.",
    "Use NATS JetStream for lightweight, ultra-fast Go microservices and IoT pub/sub."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Messaging Broker Selection",
        "description": "Choosing the event streaming or queuing broker."
      },
      {
        "id": "p1",
        "label": "High-Throughput Durable Event Streaming & Replay",
        "description": "Need immutable log append partitions for event-driven architectures."
      },
      {
        "id": "p2",
        "label": "Complex AMQP Routing & Transient Job Queues",
        "description": "Need flexible exchange routing and transient queue ACK processing."
      },
      {
        "id": "p3",
        "label": "Ultra-Fast Lightweight Single Go Binary",
        "description": "Need hyper-fast pub/sub and JetStream streams in a single 15MB binary."
      },
      {
        "id": "e1",
        "label": "Apache Kafka",
        "description": "Gold standard distributed event streaming platform."
      },
      {
        "id": "e2",
        "label": "RabbitMQ",
        "description": "AMQP message broker for task routing."
      },
      {
        "id": "e3",
        "label": "NATS JetStream",
        "description": "Go-powered lightweight hyper-fast messaging system."
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
