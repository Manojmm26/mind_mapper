import { ComparisonWorkspaceData } from "../../services/llmService";

export const STREAM_PROCESSING_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed Stream Processing: Apache Flink vs Apache Spark Streaming vs Kafka Streams vs Bytewax",
  "domainType": "tools",
  "overview": "A real-time data engineering comparison evaluating event-at-a-time low latency (Flink) vs micro-batching (Spark), stateful stream windowing, checkpointing, and Python stream processing.",
  "recommendedApproach": "Use Apache Flink for true low-latency event-at-a-time streaming & stateful windowing; use Kafka Streams for lightweight Java microservices; use Bytewax for Python-native streaming.",
  "criteria": [
    {
      "id": "c1",
      "label": "Processing Model (Event-at-a-Time vs Micro-Batching)",
      "type": "text",
      "description": "True low-latency single event streaming vs discrete micro-batch execution."
    },
    {
      "id": "c2",
      "label": "Sub-Second Latency (Milliseconds vs Seconds)",
      "type": "text",
      "description": "Real-time processing latency profile."
    },
    {
      "id": "c3",
      "label": "Stateful Stream Management & RocksDB Checkpoints",
      "type": "text",
      "description": "Managing terabytes of in-flight state with fault-tolerant savepoints."
    },
    {
      "id": "c4",
      "label": "Event-Time Windowing & Watermarks",
      "type": "text",
      "description": "Handling out-of-order events using event timestamps and watermarking."
    },
    {
      "id": "c5",
      "label": "Deployment & Cluster Footprint",
      "type": "text",
      "description": "Dedicated JobManager/TaskManager cluster vs lightweight embedded library."
    },
    {
      "id": "c6",
      "label": "Python & SQL API Maturity (PyFlink vs PySpark)",
      "type": "text",
      "description": "Streaming SQL and Python data science ergonomics."
    }
  ],
  "options": [
    {
      "id": "flink",
      "name": "Apache Flink",
      "summary": "The gold-standard distributed stream processing framework for stateful computations over data streams.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Event-at-a-Time Native",
          "note": "True streaming engine processing individual events continuously with sub-10ms latency."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Sub-10ms Latency",
          "note": "Delivers real-time millisecond processing."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (RocksDB State)",
          "note": "RocksDB state backend manages terabytes of state with asynchronous savepoints."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Gold Standard Watermarks",
          "note": "Pioneered event-time windowing, sliding windows, and out-of-order event watermarks."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Cluster Deployment",
          "note": "Deploys via Flink Kubernetes Operator."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Flink SQL & PyFlink",
          "note": "Powerful streaming SQL engine for real-time analytics."
        }
      },
      "tags": [
        "Flink",
        "Apache",
        "Event-at-a-Time",
        "RocksDB",
        "Streaming SQL"
      ]
    },
    {
      "id": "kafka-streams",
      "name": "Kafka Streams",
      "summary": "Client library for building applications and microservices whose input and output data are stored in Kafka.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Event-at-a-Time Library",
          "note": "Processes Kafka records one by one inside your application process."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Low Latency",
          "note": "Millisecond latency directly consuming from Kafka partitions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Embedded RocksDB",
          "note": "Uses local embedded RocksDB instances backed by Kafka changelog topics."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "KStream & KTable API",
          "note": "Pioneered stream-table duality abstractions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Zero Cluster Overhead",
          "note": "No separate cluster to manage; runs inside standard Java/Spring Boot apps."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Java / Scala",
          "note": "Java and Scala client library."
        }
      },
      "tags": [
        "Kafka Streams",
        "Java",
        "Embedded",
        "KTable",
        "Microservices"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Apache Flink for complex event processing, large stateful windowing, and streaming SQL.",
    "Choose Kafka Streams for lightweight Java microservices processing Kafka topics without separate clusters.",
    "Tune RocksDB memory settings and configure asynchronous checkpoints to cloud object storage."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Stream Processing Selection",
        "description": "Choosing the real-time stream engine."
      },
      {
        "id": "p1",
        "label": "Stateful Event-at-a-Time & Streaming SQL",
        "description": "Need sub-10ms event-at-a-time processing with RocksDB state savepoints and Flink SQL."
      },
      {
        "id": "p2",
        "label": "Embedded Java Microservice Stream Library",
        "description": "Need lightweight embedded library processing Kafka topics with zero cluster overhead."
      },
      {
        "id": "e1",
        "label": "Apache Flink",
        "description": "Gold standard distributed event-at-a-time streaming engine."
      },
      {
        "id": "e2",
        "label": "Kafka Streams",
        "description": "Embedded Java stream processing library for Kafka."
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
