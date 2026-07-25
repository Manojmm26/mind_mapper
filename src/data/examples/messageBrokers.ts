import { ComparisonWorkspaceData, MindMapData } from "../../services/llmService";

export const MESSAGE_BROKERS_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Message Brokers: Kafka vs RabbitMQ vs AWS SQS vs NATS vs Apache Pulsar",
  "domainType": "tools",
  "overview": "Comprehensive comparison of message brokers and streaming platforms for building distributed event-driven systems.",
  "recommendedApproach": "Use Kafka for high throughput streaming, RabbitMQ for complex AMQP routing, NATS for lightweight edge/cloud-native, and SQS for simple serverless queues.",
  "criteria": [
    {
      "id": "c1",
      "label": "Throughput & Horizontal Scalability",
      "type": "categorical"
    },
    {
      "id": "c2",
      "label": "Message Ordering Guarantees",
      "type": "categorical"
    },
    {
      "id": "c3",
      "label": "Persistence & Durability",
      "type": "categorical"
    },
    {
      "id": "c4",
      "label": "Fan-out Patterns & Topic Semantics",
      "type": "categorical"
    },
    {
      "id": "c5",
      "label": "Exactly-Once Delivery Semantics",
      "type": "categorical"
    },
    {
      "id": "c6",
      "label": "Operational Complexity & Managed Cloud Options",
      "type": "categorical"
    }
  ],
  "options": [
    {
      "id": "opt_kafka",
      "name": "Apache Kafka",
      "summary": "Distributed event streaming platform.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very High",
          "rating": 5,
          "note": "Industry standard for extremely high throughput."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Partition-level",
          "rating": 4,
          "note": "Strict ordering maintained within a specific partition."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Disk-based",
          "rating": 5,
          "note": "Highly durable append-only log architecture."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "rating": 4,
          "note": "Consumer groups manage fan-out cleanly."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Supported",
          "rating": 5,
          "note": "Via transactional API and idempotent producers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High Complexity",
          "rating": 2,
          "note": "Hard to operate yourself, managed options (Confluent) recommended."
        }
      }
    },
    {
      "id": "opt_rabbitmq",
      "name": "RabbitMQ",
      "summary": "Traditional robust message broker with AMQP.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Medium",
          "rating": 3,
          "note": "Good for most business apps, but not massive web-scale streaming."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Queue-level",
          "rating": 4,
          "note": "Strict FIFO per queue."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Memory/Disk",
          "rating": 3,
          "note": "Can be durable, but heavily affects performance."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Excellent",
          "rating": 5,
          "note": "Complex routing exchanges (direct, topic, fanout)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "No",
          "rating": 2,
          "note": "At-least-once delivery semantics."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Medium",
          "rating": 3,
          "note": "Easier than Kafka to self-host, well understood."
        }
      }
    },
    {
      "id": "opt_sqs",
      "name": "AWS SQS/SNS",
      "summary": "Fully managed serverless cloud queues.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "rating": 4,
          "note": "Auto-scales massively without intervention."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "FIFO option",
          "rating": 4,
          "note": "Standard is best-effort, FIFO queues available with lower throughput."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High",
          "rating": 5,
          "note": "Multi-AZ replication by default."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "rating": 4,
          "note": "Accomplished using SNS topics feeding SQS queues."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "In FIFO",
          "rating": 4,
          "note": "Supported in FIFO queues via deduplication IDs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low Complexity",
          "rating": 5,
          "note": "Fully managed, zero infrastructure to maintain."
        }
      }
    },
    {
      "id": "opt_nats",
      "name": "NATS JetStream",
      "summary": "Lightweight, highly performant cloud-native messaging.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very High",
          "rating": 5,
          "note": "Extremely fast and lightweight in memory."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Stream-level",
          "rating": 4,
          "note": "Good ordering support with JetStream."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Disk/Memory",
          "rating": 4,
          "note": "JetStream adds required durability over core NATS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Excellent",
          "rating": 5,
          "note": "Subject-based wildcard routing is very powerful."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Supported",
          "rating": 4,
          "note": "Consumer side deduplication supported."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Low Complexity",
          "rating": 5,
          "note": "Single Go binary, very easy to deploy."
        }
      }
    },
    {
      "id": "opt_pulsar",
      "name": "Apache Pulsar",
      "summary": "Cloud-native distributed messaging and streaming.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very High",
          "rating": 5,
          "note": "Often out-performs Kafka in raw throughput."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Partition-level",
          "rating": 4,
          "note": "Similar semantics to Kafka."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "BookKeeper",
          "rating": 5,
          "note": "Separation of compute and storage allows flexible scaling."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Excellent",
          "rating": 5,
          "note": "Unifies queueing (RabbitMQ style) and streaming (Kafka style)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Supported",
          "rating": 5,
          "note": "Via robust transaction API."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Very High",
          "rating": 1,
          "note": "Complex architecture requiring ZooKeeper, BookKeeper, and Brokers."
        }
      }
    }
  ],
  "nextSteps": [
    "Define ordering and replay requirements",
    "Benchmark throughput for NATS vs Kafka",
    "Evaluate fully managed costs"
  ],
  "map": {
    "nodes": [
      {
        "id": "root_Message_Broker_Selection",
        "label": "Message Broker Selection",
        "description": "Core decision point for Message Broker Selection",
        "type": "topic"
      },
      {
        "id": "root_Message_Broker_Selection_p0",
        "label": "Throughput",
        "description": "Key pillar focusing on Throughput requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p0_t0",
        "label": "Low Volume",
        "description": "Topic detailing Low Volume under the Throughput pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p0_t0_s0",
        "label": "Low Volume detail 1",
        "description": "Specific actionable detail 1 regarding Low Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t0_s1",
        "label": "Low Volume detail 2",
        "description": "Specific actionable detail 2 regarding Low Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t0_s2",
        "label": "Low Volume detail 3",
        "description": "Specific actionable detail 3 regarding Low Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t0_s3",
        "label": "Low Volume detail 4",
        "description": "Specific actionable detail 4 regarding Low Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t0_s4",
        "label": "Low Volume detail 5",
        "description": "Specific actionable detail 5 regarding Low Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t1",
        "label": "High Volume",
        "description": "Topic detailing High Volume under the Throughput pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p0_t1_s0",
        "label": "High Volume detail 1",
        "description": "Specific actionable detail 1 regarding High Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t1_s1",
        "label": "High Volume detail 2",
        "description": "Specific actionable detail 2 regarding High Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t1_s2",
        "label": "High Volume detail 3",
        "description": "Specific actionable detail 3 regarding High Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t1_s3",
        "label": "High Volume detail 4",
        "description": "Specific actionable detail 4 regarding High Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t1_s4",
        "label": "High Volume detail 5",
        "description": "Specific actionable detail 5 regarding High Volume. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t2",
        "label": "Bursty Traffic",
        "description": "Topic detailing Bursty Traffic under the Throughput pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p0_t2_s0",
        "label": "Bursty Traffic detail 1",
        "description": "Specific actionable detail 1 regarding Bursty Traffic. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t2_s1",
        "label": "Bursty Traffic detail 2",
        "description": "Specific actionable detail 2 regarding Bursty Traffic. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t2_s2",
        "label": "Bursty Traffic detail 3",
        "description": "Specific actionable detail 3 regarding Bursty Traffic. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t2_s3",
        "label": "Bursty Traffic detail 4",
        "description": "Specific actionable detail 4 regarding Bursty Traffic. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t2_s4",
        "label": "Bursty Traffic detail 5",
        "description": "Specific actionable detail 5 regarding Bursty Traffic. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t3",
        "label": "Streaming Analytics",
        "description": "Topic detailing Streaming Analytics under the Throughput pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p0_t3_s0",
        "label": "Streaming Analytics detail 1",
        "description": "Specific actionable detail 1 regarding Streaming Analytics. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t3_s1",
        "label": "Streaming Analytics detail 2",
        "description": "Specific actionable detail 2 regarding Streaming Analytics. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t3_s2",
        "label": "Streaming Analytics detail 3",
        "description": "Specific actionable detail 3 regarding Streaming Analytics. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t3_s3",
        "label": "Streaming Analytics detail 4",
        "description": "Specific actionable detail 4 regarding Streaming Analytics. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p0_t3_s4",
        "label": "Streaming Analytics detail 5",
        "description": "Specific actionable detail 5 regarding Streaming Analytics. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1",
        "label": "Semantics",
        "description": "Key pillar focusing on Semantics requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p1_t0",
        "label": "At Most Once",
        "description": "Topic detailing At Most Once under the Semantics pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p1_t0_s0",
        "label": "At Most Once detail 1",
        "description": "Specific actionable detail 1 regarding At Most Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t0_s1",
        "label": "At Most Once detail 2",
        "description": "Specific actionable detail 2 regarding At Most Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t0_s2",
        "label": "At Most Once detail 3",
        "description": "Specific actionable detail 3 regarding At Most Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t0_s3",
        "label": "At Most Once detail 4",
        "description": "Specific actionable detail 4 regarding At Most Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t0_s4",
        "label": "At Most Once detail 5",
        "description": "Specific actionable detail 5 regarding At Most Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t1",
        "label": "At Least Once",
        "description": "Topic detailing At Least Once under the Semantics pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p1_t1_s0",
        "label": "At Least Once detail 1",
        "description": "Specific actionable detail 1 regarding At Least Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t1_s1",
        "label": "At Least Once detail 2",
        "description": "Specific actionable detail 2 regarding At Least Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t1_s2",
        "label": "At Least Once detail 3",
        "description": "Specific actionable detail 3 regarding At Least Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t1_s3",
        "label": "At Least Once detail 4",
        "description": "Specific actionable detail 4 regarding At Least Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t1_s4",
        "label": "At Least Once detail 5",
        "description": "Specific actionable detail 5 regarding At Least Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t2",
        "label": "Exactly Once",
        "description": "Topic detailing Exactly Once under the Semantics pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p1_t2_s0",
        "label": "Exactly Once detail 1",
        "description": "Specific actionable detail 1 regarding Exactly Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t2_s1",
        "label": "Exactly Once detail 2",
        "description": "Specific actionable detail 2 regarding Exactly Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t2_s2",
        "label": "Exactly Once detail 3",
        "description": "Specific actionable detail 3 regarding Exactly Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t2_s3",
        "label": "Exactly Once detail 4",
        "description": "Specific actionable detail 4 regarding Exactly Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t2_s4",
        "label": "Exactly Once detail 5",
        "description": "Specific actionable detail 5 regarding Exactly Once. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t3",
        "label": "Strict Ordering",
        "description": "Topic detailing Strict Ordering under the Semantics pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p1_t3_s0",
        "label": "Strict Ordering detail 1",
        "description": "Specific actionable detail 1 regarding Strict Ordering. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t3_s1",
        "label": "Strict Ordering detail 2",
        "description": "Specific actionable detail 2 regarding Strict Ordering. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t3_s2",
        "label": "Strict Ordering detail 3",
        "description": "Specific actionable detail 3 regarding Strict Ordering. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t3_s3",
        "label": "Strict Ordering detail 4",
        "description": "Specific actionable detail 4 regarding Strict Ordering. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p1_t3_s4",
        "label": "Strict Ordering detail 5",
        "description": "Specific actionable detail 5 regarding Strict Ordering. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2",
        "label": "Topology",
        "description": "Key pillar focusing on Topology requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p2_t0",
        "label": "Pub-Sub",
        "description": "Topic detailing Pub-Sub under the Topology pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p2_t0_s0",
        "label": "Pub-Sub detail 1",
        "description": "Specific actionable detail 1 regarding Pub-Sub. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t0_s1",
        "label": "Pub-Sub detail 2",
        "description": "Specific actionable detail 2 regarding Pub-Sub. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t0_s2",
        "label": "Pub-Sub detail 3",
        "description": "Specific actionable detail 3 regarding Pub-Sub. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t0_s3",
        "label": "Pub-Sub detail 4",
        "description": "Specific actionable detail 4 regarding Pub-Sub. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t0_s4",
        "label": "Pub-Sub detail 5",
        "description": "Specific actionable detail 5 regarding Pub-Sub. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t1",
        "label": "Work Queues",
        "description": "Topic detailing Work Queues under the Topology pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p2_t1_s0",
        "label": "Work Queues detail 1",
        "description": "Specific actionable detail 1 regarding Work Queues. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t1_s1",
        "label": "Work Queues detail 2",
        "description": "Specific actionable detail 2 regarding Work Queues. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t1_s2",
        "label": "Work Queues detail 3",
        "description": "Specific actionable detail 3 regarding Work Queues. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t1_s3",
        "label": "Work Queues detail 4",
        "description": "Specific actionable detail 4 regarding Work Queues. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t1_s4",
        "label": "Work Queues detail 5",
        "description": "Specific actionable detail 5 regarding Work Queues. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t2",
        "label": "Event Sourcing",
        "description": "Topic detailing Event Sourcing under the Topology pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p2_t2_s0",
        "label": "Event Sourcing detail 1",
        "description": "Specific actionable detail 1 regarding Event Sourcing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t2_s1",
        "label": "Event Sourcing detail 2",
        "description": "Specific actionable detail 2 regarding Event Sourcing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t2_s2",
        "label": "Event Sourcing detail 3",
        "description": "Specific actionable detail 3 regarding Event Sourcing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t2_s3",
        "label": "Event Sourcing detail 4",
        "description": "Specific actionable detail 4 regarding Event Sourcing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t2_s4",
        "label": "Event Sourcing detail 5",
        "description": "Specific actionable detail 5 regarding Event Sourcing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t3",
        "label": "Dynamic Routing",
        "description": "Topic detailing Dynamic Routing under the Topology pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p2_t3_s0",
        "label": "Dynamic Routing detail 1",
        "description": "Specific actionable detail 1 regarding Dynamic Routing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t3_s1",
        "label": "Dynamic Routing detail 2",
        "description": "Specific actionable detail 2 regarding Dynamic Routing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t3_s2",
        "label": "Dynamic Routing detail 3",
        "description": "Specific actionable detail 3 regarding Dynamic Routing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t3_s3",
        "label": "Dynamic Routing detail 4",
        "description": "Specific actionable detail 4 regarding Dynamic Routing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p2_t3_s4",
        "label": "Dynamic Routing detail 5",
        "description": "Specific actionable detail 5 regarding Dynamic Routing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3",
        "label": "Operations",
        "description": "Key pillar focusing on Operations requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p3_t0",
        "label": "Fully Managed",
        "description": "Topic detailing Fully Managed under the Operations pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p3_t0_s0",
        "label": "Fully Managed detail 1",
        "description": "Specific actionable detail 1 regarding Fully Managed. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t0_s1",
        "label": "Fully Managed detail 2",
        "description": "Specific actionable detail 2 regarding Fully Managed. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t0_s2",
        "label": "Fully Managed detail 3",
        "description": "Specific actionable detail 3 regarding Fully Managed. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t0_s3",
        "label": "Fully Managed detail 4",
        "description": "Specific actionable detail 4 regarding Fully Managed. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t0_s4",
        "label": "Fully Managed detail 5",
        "description": "Specific actionable detail 5 regarding Fully Managed. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t1",
        "label": "Self Hosted Kubernetes",
        "description": "Topic detailing Self Hosted Kubernetes under the Operations pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p3_t1_s0",
        "label": "Self Hosted Kubernetes detail 1",
        "description": "Specific actionable detail 1 regarding Self Hosted Kubernetes. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t1_s1",
        "label": "Self Hosted Kubernetes detail 2",
        "description": "Specific actionable detail 2 regarding Self Hosted Kubernetes. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t1_s2",
        "label": "Self Hosted Kubernetes detail 3",
        "description": "Specific actionable detail 3 regarding Self Hosted Kubernetes. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t1_s3",
        "label": "Self Hosted Kubernetes detail 4",
        "description": "Specific actionable detail 4 regarding Self Hosted Kubernetes. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t1_s4",
        "label": "Self Hosted Kubernetes detail 5",
        "description": "Specific actionable detail 5 regarding Self Hosted Kubernetes. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t2",
        "label": "Edge Computing",
        "description": "Topic detailing Edge Computing under the Operations pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p3_t2_s0",
        "label": "Edge Computing detail 1",
        "description": "Specific actionable detail 1 regarding Edge Computing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t2_s1",
        "label": "Edge Computing detail 2",
        "description": "Specific actionable detail 2 regarding Edge Computing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t2_s2",
        "label": "Edge Computing detail 3",
        "description": "Specific actionable detail 3 regarding Edge Computing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t2_s3",
        "label": "Edge Computing detail 4",
        "description": "Specific actionable detail 4 regarding Edge Computing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t2_s4",
        "label": "Edge Computing detail 5",
        "description": "Specific actionable detail 5 regarding Edge Computing. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t3",
        "label": "Multi-region",
        "description": "Topic detailing Multi-region under the Operations pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p3_t3_s0",
        "label": "Multi-region detail 1",
        "description": "Specific actionable detail 1 regarding Multi-region. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t3_s1",
        "label": "Multi-region detail 2",
        "description": "Specific actionable detail 2 regarding Multi-region. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t3_s2",
        "label": "Multi-region detail 3",
        "description": "Specific actionable detail 3 regarding Multi-region. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t3_s3",
        "label": "Multi-region detail 4",
        "description": "Specific actionable detail 4 regarding Multi-region. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p3_t3_s4",
        "label": "Multi-region detail 5",
        "description": "Specific actionable detail 5 regarding Multi-region. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4",
        "label": "Latency",
        "description": "Key pillar focusing on Latency requirements and considerations.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p4_t0",
        "label": "Sub-millisecond",
        "description": "Topic detailing Sub-millisecond under the Latency pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p4_t0_s0",
        "label": "Sub-millisecond detail 1",
        "description": "Specific actionable detail 1 regarding Sub-millisecond. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t0_s1",
        "label": "Sub-millisecond detail 2",
        "description": "Specific actionable detail 2 regarding Sub-millisecond. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t0_s2",
        "label": "Sub-millisecond detail 3",
        "description": "Specific actionable detail 3 regarding Sub-millisecond. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t0_s3",
        "label": "Sub-millisecond detail 4",
        "description": "Specific actionable detail 4 regarding Sub-millisecond. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t0_s4",
        "label": "Sub-millisecond detail 5",
        "description": "Specific actionable detail 5 regarding Sub-millisecond. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t1",
        "label": "Low Latency",
        "description": "Topic detailing Low Latency under the Latency pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p4_t1_s0",
        "label": "Low Latency detail 1",
        "description": "Specific actionable detail 1 regarding Low Latency. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t1_s1",
        "label": "Low Latency detail 2",
        "description": "Specific actionable detail 2 regarding Low Latency. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t1_s2",
        "label": "Low Latency detail 3",
        "description": "Specific actionable detail 3 regarding Low Latency. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t1_s3",
        "label": "Low Latency detail 4",
        "description": "Specific actionable detail 4 regarding Low Latency. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t1_s4",
        "label": "Low Latency detail 5",
        "description": "Specific actionable detail 5 regarding Low Latency. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t2",
        "label": "High Batching",
        "description": "Topic detailing High Batching under the Latency pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p4_t2_s0",
        "label": "High Batching detail 1",
        "description": "Specific actionable detail 1 regarding High Batching. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t2_s1",
        "label": "High Batching detail 2",
        "description": "Specific actionable detail 2 regarding High Batching. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t2_s2",
        "label": "High Batching detail 3",
        "description": "Specific actionable detail 3 regarding High Batching. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t2_s3",
        "label": "High Batching detail 4",
        "description": "Specific actionable detail 4 regarding High Batching. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t2_s4",
        "label": "High Batching detail 5",
        "description": "Specific actionable detail 5 regarding High Batching. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t3",
        "label": "Long Polling",
        "description": "Topic detailing Long Polling under the Latency pillar. Important area for architectural decisions.",
        "type": "concept"
      },
      {
        "id": "root_Message_Broker_Selection_p4_t3_s0",
        "label": "Long Polling detail 1",
        "description": "Specific actionable detail 1 regarding Long Polling. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k0"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t3_s1",
        "label": "Long Polling detail 2",
        "description": "Specific actionable detail 2 regarding Long Polling. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k1"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t3_s2",
        "label": "Long Polling detail 3",
        "description": "Specific actionable detail 3 regarding Long Polling. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k2"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t3_s3",
        "label": "Long Polling detail 4",
        "description": "Specific actionable detail 4 regarding Long Polling. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k3"
        ]
      },
      {
        "id": "root_Message_Broker_Selection_p4_t3_s4",
        "label": "Long Polling detail 5",
        "description": "Specific actionable detail 5 regarding Long Polling. Critical for evaluating tool fit.",
        "type": "action",
        "tags": [
          "detail",
          "k4"
        ]
      }
    ],
    "edges": [
      {
        "source": "root_Message_Broker_Selection",
        "target": "root_Message_Broker_Selection_p0",
        "label": "has pillar"
      },
      {
        "source": "root_Message_Broker_Selection_p0",
        "target": "root_Message_Broker_Selection_p0_t0",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t0",
        "target": "root_Message_Broker_Selection_p0_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t0",
        "target": "root_Message_Broker_Selection_p0_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t0",
        "target": "root_Message_Broker_Selection_p0_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t0",
        "target": "root_Message_Broker_Selection_p0_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t0",
        "target": "root_Message_Broker_Selection_p0_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0",
        "target": "root_Message_Broker_Selection_p0_t1",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t1",
        "target": "root_Message_Broker_Selection_p0_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t1",
        "target": "root_Message_Broker_Selection_p0_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t1",
        "target": "root_Message_Broker_Selection_p0_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t1",
        "target": "root_Message_Broker_Selection_p0_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t1",
        "target": "root_Message_Broker_Selection_p0_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0",
        "target": "root_Message_Broker_Selection_p0_t2",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t2",
        "target": "root_Message_Broker_Selection_p0_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t2",
        "target": "root_Message_Broker_Selection_p0_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t2",
        "target": "root_Message_Broker_Selection_p0_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t2",
        "target": "root_Message_Broker_Selection_p0_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t2",
        "target": "root_Message_Broker_Selection_p0_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0",
        "target": "root_Message_Broker_Selection_p0_t3",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t3",
        "target": "root_Message_Broker_Selection_p0_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t3",
        "target": "root_Message_Broker_Selection_p0_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t3",
        "target": "root_Message_Broker_Selection_p0_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t3",
        "target": "root_Message_Broker_Selection_p0_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p0_t3",
        "target": "root_Message_Broker_Selection_p0_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection",
        "target": "root_Message_Broker_Selection_p1",
        "label": "has pillar"
      },
      {
        "source": "root_Message_Broker_Selection_p1",
        "target": "root_Message_Broker_Selection_p1_t0",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t0",
        "target": "root_Message_Broker_Selection_p1_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t0",
        "target": "root_Message_Broker_Selection_p1_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t0",
        "target": "root_Message_Broker_Selection_p1_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t0",
        "target": "root_Message_Broker_Selection_p1_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t0",
        "target": "root_Message_Broker_Selection_p1_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1",
        "target": "root_Message_Broker_Selection_p1_t1",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t1",
        "target": "root_Message_Broker_Selection_p1_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t1",
        "target": "root_Message_Broker_Selection_p1_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t1",
        "target": "root_Message_Broker_Selection_p1_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t1",
        "target": "root_Message_Broker_Selection_p1_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t1",
        "target": "root_Message_Broker_Selection_p1_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1",
        "target": "root_Message_Broker_Selection_p1_t2",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t2",
        "target": "root_Message_Broker_Selection_p1_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t2",
        "target": "root_Message_Broker_Selection_p1_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t2",
        "target": "root_Message_Broker_Selection_p1_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t2",
        "target": "root_Message_Broker_Selection_p1_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t2",
        "target": "root_Message_Broker_Selection_p1_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1",
        "target": "root_Message_Broker_Selection_p1_t3",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t3",
        "target": "root_Message_Broker_Selection_p1_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t3",
        "target": "root_Message_Broker_Selection_p1_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t3",
        "target": "root_Message_Broker_Selection_p1_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t3",
        "target": "root_Message_Broker_Selection_p1_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p1_t3",
        "target": "root_Message_Broker_Selection_p1_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection",
        "target": "root_Message_Broker_Selection_p2",
        "label": "has pillar"
      },
      {
        "source": "root_Message_Broker_Selection_p2",
        "target": "root_Message_Broker_Selection_p2_t0",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t0",
        "target": "root_Message_Broker_Selection_p2_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t0",
        "target": "root_Message_Broker_Selection_p2_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t0",
        "target": "root_Message_Broker_Selection_p2_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t0",
        "target": "root_Message_Broker_Selection_p2_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t0",
        "target": "root_Message_Broker_Selection_p2_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2",
        "target": "root_Message_Broker_Selection_p2_t1",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t1",
        "target": "root_Message_Broker_Selection_p2_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t1",
        "target": "root_Message_Broker_Selection_p2_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t1",
        "target": "root_Message_Broker_Selection_p2_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t1",
        "target": "root_Message_Broker_Selection_p2_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t1",
        "target": "root_Message_Broker_Selection_p2_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2",
        "target": "root_Message_Broker_Selection_p2_t2",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t2",
        "target": "root_Message_Broker_Selection_p2_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t2",
        "target": "root_Message_Broker_Selection_p2_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t2",
        "target": "root_Message_Broker_Selection_p2_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t2",
        "target": "root_Message_Broker_Selection_p2_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t2",
        "target": "root_Message_Broker_Selection_p2_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2",
        "target": "root_Message_Broker_Selection_p2_t3",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t3",
        "target": "root_Message_Broker_Selection_p2_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t3",
        "target": "root_Message_Broker_Selection_p2_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t3",
        "target": "root_Message_Broker_Selection_p2_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t3",
        "target": "root_Message_Broker_Selection_p2_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p2_t3",
        "target": "root_Message_Broker_Selection_p2_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection",
        "target": "root_Message_Broker_Selection_p3",
        "label": "has pillar"
      },
      {
        "source": "root_Message_Broker_Selection_p3",
        "target": "root_Message_Broker_Selection_p3_t0",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t0",
        "target": "root_Message_Broker_Selection_p3_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t0",
        "target": "root_Message_Broker_Selection_p3_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t0",
        "target": "root_Message_Broker_Selection_p3_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t0",
        "target": "root_Message_Broker_Selection_p3_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t0",
        "target": "root_Message_Broker_Selection_p3_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3",
        "target": "root_Message_Broker_Selection_p3_t1",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t1",
        "target": "root_Message_Broker_Selection_p3_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t1",
        "target": "root_Message_Broker_Selection_p3_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t1",
        "target": "root_Message_Broker_Selection_p3_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t1",
        "target": "root_Message_Broker_Selection_p3_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t1",
        "target": "root_Message_Broker_Selection_p3_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3",
        "target": "root_Message_Broker_Selection_p3_t2",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t2",
        "target": "root_Message_Broker_Selection_p3_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t2",
        "target": "root_Message_Broker_Selection_p3_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t2",
        "target": "root_Message_Broker_Selection_p3_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t2",
        "target": "root_Message_Broker_Selection_p3_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t2",
        "target": "root_Message_Broker_Selection_p3_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3",
        "target": "root_Message_Broker_Selection_p3_t3",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t3",
        "target": "root_Message_Broker_Selection_p3_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t3",
        "target": "root_Message_Broker_Selection_p3_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t3",
        "target": "root_Message_Broker_Selection_p3_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t3",
        "target": "root_Message_Broker_Selection_p3_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p3_t3",
        "target": "root_Message_Broker_Selection_p3_t3_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection",
        "target": "root_Message_Broker_Selection_p4",
        "label": "has pillar"
      },
      {
        "source": "root_Message_Broker_Selection_p4",
        "target": "root_Message_Broker_Selection_p4_t0",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t0",
        "target": "root_Message_Broker_Selection_p4_t0_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t0",
        "target": "root_Message_Broker_Selection_p4_t0_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t0",
        "target": "root_Message_Broker_Selection_p4_t0_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t0",
        "target": "root_Message_Broker_Selection_p4_t0_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t0",
        "target": "root_Message_Broker_Selection_p4_t0_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4",
        "target": "root_Message_Broker_Selection_p4_t1",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t1",
        "target": "root_Message_Broker_Selection_p4_t1_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t1",
        "target": "root_Message_Broker_Selection_p4_t1_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t1",
        "target": "root_Message_Broker_Selection_p4_t1_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t1",
        "target": "root_Message_Broker_Selection_p4_t1_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t1",
        "target": "root_Message_Broker_Selection_p4_t1_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4",
        "target": "root_Message_Broker_Selection_p4_t2",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t2",
        "target": "root_Message_Broker_Selection_p4_t2_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t2",
        "target": "root_Message_Broker_Selection_p4_t2_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t2",
        "target": "root_Message_Broker_Selection_p4_t2_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t2",
        "target": "root_Message_Broker_Selection_p4_t2_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t2",
        "target": "root_Message_Broker_Selection_p4_t2_s4",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4",
        "target": "root_Message_Broker_Selection_p4_t3",
        "label": "includes"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t3",
        "target": "root_Message_Broker_Selection_p4_t3_s0",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t3",
        "target": "root_Message_Broker_Selection_p4_t3_s1",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t3",
        "target": "root_Message_Broker_Selection_p4_t3_s2",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t3",
        "target": "root_Message_Broker_Selection_p4_t3_s3",
        "label": "requires"
      },
      {
        "source": "root_Message_Broker_Selection_p4_t3",
        "target": "root_Message_Broker_Selection_p4_t3_s4",
        "label": "requires"
      }
    ]
  }
};
