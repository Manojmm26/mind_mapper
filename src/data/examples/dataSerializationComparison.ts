import { ComparisonWorkspaceData } from "../../services/llmService";

export const DATA_SERIALIZATION_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Data Serialization Formats: Protocol Buffers vs Apache Avro vs FlatBuffers vs MessagePack vs JSON",
  "domainType": "concepts",
  "overview": "A low-level data engineering comparison evaluating binary payload size, serialization/deserialization CPU throughput, zero-copy parsing, schema evolution rules, and human readability.",
  "recommendedApproach": "Use Protocol Buffers for gRPC microservices and internal RPCs; use Apache Avro for Kafka event streams and big data data lakes; use FlatBuffers for zero-copy game development; use JSON for public REST web APIs.",
  "criteria": [
    {
      "id": "c1",
      "label": "Binary Payload Compression & Size",
      "type": "text",
      "description": "Wire size overhead compared to raw uncompressed JSON text."
    },
    {
      "id": "c2",
      "label": "Serialization & Deserialization Speed (MB/s)",
      "type": "text",
      "description": "CPU cycles required to pack and unpack data structures into memory."
    },
    {
      "id": "c3",
      "label": "Zero-Copy Memory Mapping",
      "type": "text",
      "description": "Accessing serialized fields directly in memory without deserialization allocation."
    },
    {
      "id": "c4",
      "label": "Schema Evolution & Backward/Forward Compatibility",
      "type": "text",
      "description": "Field tags, schema registries, and safe field additions/deprecations."
    },
    {
      "id": "c5",
      "label": "Human Readability & Dev Tools",
      "type": "text",
      "description": "Ease of inspecting and editing payloads without special decoder tools."
    },
    {
      "id": "c6",
      "label": "Code Generation & Multi-Language SDKs",
      "type": "text",
      "description": "Compiling schemas (.proto, .avsc, .fbs) into C++, Rust, Go, Java, TS code."
    }
  ],
  "options": [
    {
      "id": "protobuf",
      "name": "Protocol Buffers (Protobuf v3)",
      "summary": "Google's language-neutral, binary serialization mechanism powering gRPC and microservices.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Highly Compact (Varints)",
          "note": "Uses variable-width integers (varints) and field tags to minimize wire size (3-10x smaller than JSON)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Fast",
          "note": "High-speed C++/Go/Rust binary packing."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Requires Deserialization",
          "note": "Unpacks binary bytes into language object structs."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Strict Field Numbering",
          "note": "Numerical field tags (e.g. string name = 1;) ensure safe forward/backward compatibility."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Binary (Requires Protoc)",
          "note": "Binary payload; convert to JSON via protoc / grpcurl for debugging."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Gold Standard (Protoc)",
          "note": "Protoc generates strongly-typed stubs for almost every programming language."
        }
      },
      "tags": [
        "Protobuf",
        "gRPC",
        "Google",
        "Microservices"
      ]
    },
    {
      "id": "apache-avro",
      "name": "Apache Avro",
      "summary": "Row-based data serialization system designed specifically for Apache Kafka streaming and Hadoop.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Smallest Payload (No Field Tags)",
          "note": "Omits field tags entirely from binary data payload, relying on Schema Registry."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Fast",
          "note": "Fast binary serialization optimized for batch event streams."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Requires Deserialization",
          "note": "Unpacks bytes using writer and reader schemas."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Schema Registry Standard",
          "note": "Confluent Schema Registry enforces central schema evolution rules."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "JSON Schema Definition",
          "note": "Schemas defined in clean JSON format (.avsc)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Java / Python Heavy",
          "note": "Primary standard in Java, Python, and Go big data pipelines."
        }
      },
      "tags": [
        "Avro",
        "Kafka",
        "Schema Registry",
        "Streaming"
      ]
    },
    {
      "id": "flatbuffers",
      "name": "Google FlatBuffers",
      "summary": "Cross-platform serialization library designed for performance-critical game development.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Compact",
          "note": "Padded internal offsets allow direct memory alignment."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Instantaneous (Zero-Copy)",
          "note": "Zero deserialization time; reads fields directly from serialized flat binary buffers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% Zero-Copy",
          "note": "Access payload data directly in memory mapped files without allocating heap objects."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Field Table Offsets",
          "note": "Table offsets support backward and forward schema compatibility."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Binary (.fbs)",
          "note": "FlatBuffers schema compiler (flatc) converts to code."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "C++, Rust, Java, C#",
          "note": "Designed for C++ game engines and real-time graphics pipelines."
        }
      },
      "tags": [
        "FlatBuffers",
        "Zero-Copy",
        "Games",
        "Performance"
      ]
    },
    {
      "id": "json",
      "name": "JSON (JavaScript Object Notation)",
      "summary": "The ubiquitous text-based data interchange format powering the web.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Verbose Text",
          "note": "Repeats object key strings in every message, resulting in larger payloads."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Moderate (V8 JSON.parse)",
          "note": "V8 C++ JSON.parse is fast, but text parsing consumes CPU cycles."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Full Memory Parse",
          "note": "Must parse full JSON string into memory AST."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Flexible / OpenAPI",
          "note": "Dynamic fields easily added; validated via JSON Schema or OpenAPI."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Human Readable",
          "note": "Human readable text easily inspected in browser Network tab."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal",
          "note": "Supported natively in every language and web browser."
        }
      },
      "tags": [
        "JSON",
        "Text",
        "REST",
        "Universal"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Protocol Buffers for internal microservices and gRPC APIs.",
    "Choose Apache Avro paired with Confluent Schema Registry for Kafka event streaming.",
    "Choose FlatBuffers for game networking, audio processing, or zero-copy IPC.",
    "Benchmark payload size reduction (Protobuf/Avro are typically 60-80% smaller than JSON)."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Data Serialization Selection",
        "description": "Choosing the binary or text data format for communications."
      },
      {
        "id": "p1",
        "label": "gRPC Microservices & Typed Field Tags",
        "description": "Need compact binary serialization with numeric field tags and stubs."
      },
      {
        "id": "p2",
        "label": "Kafka Event Streaming & Schema Registry",
        "description": "Need smallest payload for event streams with centralized schema versioning."
      },
      {
        "id": "p3",
        "label": "Zero-Copy Game & Audio Performance",
        "description": "Need to read fields directly from memory buffer with zero allocation overhead."
      },
      {
        "id": "p4",
        "label": "Public Web REST APIs & Human Readability",
        "description": "Need universal browser compatibility and human-readable text payloads."
      },
      {
        "id": "e1",
        "label": "Protocol Buffers (Protobuf)",
        "description": "Google binary format powering gRPC and microservices."
      },
      {
        "id": "e2",
        "label": "Apache Avro",
        "description": "Schema Registry binary format powering Kafka streaming."
      },
      {
        "id": "e3",
        "label": "FlatBuffers",
        "description": "Zero-copy memory mapping library for high-speed games."
      },
      {
        "id": "e4",
        "label": "JSON",
        "description": "Universal text format for web APIs."
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
