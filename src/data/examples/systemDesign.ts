import { MindMapData } from "../../services/llmService";

export const SYSTEM_DESIGN_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "sd_root",
      "label": "High-Scale Distributed Systems Architecture",
      "description": "A deep architectural blueprint for engineering fault-tolerant, low-latency, multi-region distributed infrastructure.",
      "type": "topic",
      "importance": "high",
      "tags": [
        "system-design",
        "architecture",
        "scale",
        "infrastructure"
      ],
      "confidence": "high"
    },
    {
      "id": "sd_p1",
      "label": "1. Edge Networking & Traffic Routing",
      "description": "Managing global ingress, SSL termination, and CDN caching.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "sd_p1_t1",
      "label": "DNS & Anycast Routing",
      "description": "Routing users to the nearest edge PoP (Point of Presence).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p1_t1_s0",
      "label": "GeoDNS Latency-Based Routing",
      "description": "Architectural specification and design tradeoffs for GeoDNS Latency-Based Routing.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t1_s1",
      "label": "BGP Anycast IP Routing Protocols",
      "description": "Architectural specification and design tradeoffs for BGP Anycast IP Routing Protocols.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t1_s2",
      "label": "DNSSEC Signature Validation",
      "description": "Architectural specification and design tradeoffs for DNSSEC Signature Validation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t1_s3",
      "label": "CDN Edge PoP Cache Warmup",
      "description": "Architectural specification and design tradeoffs for CDN Edge PoP Cache Warmup.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t1_s4",
      "label": "Cloudflare & Fastly VCL Edge Workers",
      "description": "Architectural specification and design tradeoffs for Cloudflare & Fastly VCL Edge Workers.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t1_s5",
      "label": "HTTP/3 QUIC Transport Protocol Adoption",
      "description": "Architectural specification and design tradeoffs for HTTP/3 QUIC Transport Protocol Adoption.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t2",
      "label": "Load Balancing Tier",
      "description": "Distributing millions of incoming connections across server pools.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p1_t2_s0",
      "label": "L4 TCP/UDP Load Balancing (Maglev/IPVS)",
      "description": "Architectural specification and design tradeoffs for L4 TCP/UDP Load Balancing (Maglev/IPVS).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t2_s1",
      "label": "L7 HTTP/gRPC Load Balancing (Envoy/HAProxy)",
      "description": "Architectural specification and design tradeoffs for L7 HTTP/gRPC Load Balancing (Envoy/HAProxy).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t2_s2",
      "label": "Consistent Hashing Ring with Virtual Nodes",
      "description": "Architectural specification and design tradeoffs for Consistent Hashing Ring with Virtual Nodes.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t2_s3",
      "label": "Weighted Least Connections & Health Checks",
      "description": "Architectural specification and design tradeoffs for Weighted Least Connections & Health Checks.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t2_s4",
      "label": "SSL/TLS Offloading & SNI Routing",
      "description": "Architectural specification and design tradeoffs for SSL/TLS Offloading & SNI Routing.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t2_s5",
      "label": "Connection Draining & Zero-Downtime Reloads",
      "description": "Architectural specification and design tradeoffs for Connection Draining & Zero-Downtime Reloads.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t3",
      "label": "API Gateway Guardrails",
      "description": "Enforcing security, rate limits, and request transformation.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p1_t3_s0",
      "label": "Token Bucket & Leaky Bucket Rate Limiting",
      "description": "Architectural specification and design tradeoffs for Token Bucket & Leaky Bucket Rate Limiting.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t3_s1",
      "label": "Distributed Rate Limiting via Redis Cluster",
      "description": "Architectural specification and design tradeoffs for Distributed Rate Limiting via Redis Cluster.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t3_s2",
      "label": "OAuth2 & JWT Token Verification at Edge",
      "description": "Architectural specification and design tradeoffs for OAuth2 & JWT Token Verification at Edge.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t3_s3",
      "label": "Web Application Firewall (WAF) OWASP Rules",
      "description": "Architectural specification and design tradeoffs for Web Application Firewall (WAF) OWASP Rules.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t3_s4",
      "label": "Request & Response Schema Validation",
      "description": "Architectural specification and design tradeoffs for Request & Response Schema Validation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p1_t3_s5",
      "label": "API Cost Allocation & Quota Tracking",
      "description": "Architectural specification and design tradeoffs for API Cost Allocation & Quota Tracking.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2",
      "label": "2. Microservices & Compute Orchestration",
      "description": "Decoupled domain services running on containerized clusters.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "sd_p2_t1",
      "label": "Service Mesh Infrastructure",
      "description": "Handling inter-service communication, mTLS, and observability.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p2_t1_s0",
      "label": "Istio & Linkerd Sidecar Proxies",
      "description": "Architectural specification and design tradeoffs for Istio & Linkerd Sidecar Proxies.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t1_s1",
      "label": "eBPF Kernel-Level Traffic Interception (Cilium)",
      "description": "Architectural specification and design tradeoffs for eBPF Kernel-Level Traffic Interception (Cilium).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t1_s2",
      "label": "Mutual TLS (mTLS) Automatic Encryption",
      "description": "Architectural specification and design tradeoffs for Mutual TLS (mTLS) Automatic Encryption.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t1_s3",
      "label": "Distributed Tracing (Jaeger / OpenTelemetry)",
      "description": "Architectural specification and design tradeoffs for Distributed Tracing (Jaeger / OpenTelemetry).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t1_s4",
      "label": "Service Discovery & Internal DNS",
      "description": "Architectural specification and design tradeoffs for Service Discovery & Internal DNS.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t1_s5",
      "label": "Locality-Prioritized Service Routing",
      "description": "Architectural specification and design tradeoffs for Locality-Prioritized Service Routing.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t2",
      "label": "Resilience & Fault Isolation",
      "description": "Preventing cascading system failures during outages.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p2_t2_s0",
      "label": "Circuit Breaker State Machine (Open/Half-Open/Closed)",
      "description": "Architectural specification and design tradeoffs for Circuit Breaker State Machine (Open/Half-Open/Closed).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t2_s1",
      "label": "Bulkhead Pattern Thread Pool Isolation",
      "description": "Architectural specification and design tradeoffs for Bulkhead Pattern Thread Pool Isolation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t2_s2",
      "label": "Exponential Backoff with Full Jitter Retries",
      "description": "Architectural specification and design tradeoffs for Exponential Backoff with Full Jitter Retries.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t2_s3",
      "label": "Graceful Degradation & Fallback Responses",
      "description": "Architectural specification and design tradeoffs for Graceful Degradation & Fallback Responses.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t2_s4",
      "label": "Chaos Engineering (Chaos Mesh / Litmus)",
      "description": "Architectural specification and design tradeoffs for Chaos Engineering (Chaos Mesh / Litmus).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t2_s5",
      "label": "Load Shedding & Shedding Secondary Requests",
      "description": "Architectural specification and design tradeoffs for Load Shedding & Shedding Secondary Requests.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t3",
      "label": "Container Orchestration",
      "description": "Managing container deployment, scaling, and self-healing.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p2_t3_s0",
      "label": "Kubernetes Pod Autoscaling (HPA / KEDA)",
      "description": "Architectural specification and design tradeoffs for Kubernetes Pod Autoscaling (HPA / KEDA).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t3_s1",
      "label": "Rolling Updates & Blue-Green Deployments",
      "description": "Architectural specification and design tradeoffs for Rolling Updates & Blue-Green Deployments.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t3_s2",
      "label": "Canary Releases with Automated Rollback",
      "description": "Architectural specification and design tradeoffs for Canary Releases with Automated Rollback.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t3_s3",
      "label": "Node Affinity & Pod Anti-Affinity",
      "description": "Architectural specification and design tradeoffs for Node Affinity & Pod Anti-Affinity.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t3_s4",
      "label": "Cluster Federation & Multi-Cloud Control Planes",
      "description": "Architectural specification and design tradeoffs for Cluster Federation & Multi-Cloud Control Planes.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p2_t3_s5",
      "label": "Zero-Trust Pod Security Policies (PSP / OPA)",
      "description": "Architectural specification and design tradeoffs for Zero-Trust Pod Security Policies (PSP / OPA).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3",
      "label": "3. Asynchronous Messaging & Streaming",
      "description": "Decoupling workloads with high-throughput event logs.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "sd_p3_t1",
      "label": "Distributed Log Engines",
      "description": "Partitioned persistent event streaming platforms.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p3_t1_s0",
      "label": "Apache Kafka Partitioning & Consumer Groups",
      "description": "Architectural specification and design tradeoffs for Apache Kafka Partitioning & Consumer Groups.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t1_s1",
      "label": "Kafka Segment Files & Zero-Copy Transmit",
      "description": "Architectural specification and design tradeoffs for Kafka Segment Files & Zero-Copy Transmit.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t1_s2",
      "label": "KRaft Consensus without ZooKeeper",
      "description": "Architectural specification and design tradeoffs for KRaft Consensus without ZooKeeper.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t1_s3",
      "label": "Apache Pulsar Tiered Storage Architecture",
      "description": "Architectural specification and design tradeoffs for Apache Pulsar Tiered Storage Architecture.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t1_s4",
      "label": "Log Compaction & Retention Policies",
      "description": "Architectural specification and design tradeoffs for Log Compaction & Retention Policies.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t1_s5",
      "label": "MirrorMaker 2 Multi-Region Replication",
      "description": "Architectural specification and design tradeoffs for MirrorMaker 2 Multi-Region Replication.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t2",
      "label": "Transactional Queues & Workers",
      "description": "Managing discrete background jobs and task distribution.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p3_t2_s0",
      "label": "RabbitMQ AMQP Exchange Types (Direct/Fanout/Topic)",
      "description": "Architectural specification and design tradeoffs for RabbitMQ AMQP Exchange Types (Direct/Fanout/Topic).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t2_s1",
      "label": "AWS SQS Dead Letter Queues (DLQ)",
      "description": "Architectural specification and design tradeoffs for AWS SQS Dead Letter Queues (DLQ).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t2_s2",
      "label": "At-Least-Once vs Exactly-Once Processing Guarantees",
      "description": "Architectural specification and design tradeoffs for At-Least-Once vs Exactly-Once Processing Guarantees.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t2_s3",
      "label": "Idempotency Keys & Deduplication Tables",
      "description": "Architectural specification and design tradeoffs for Idempotency Keys & Deduplication Tables.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t2_s4",
      "label": "Priority Task Queues & Worker Pool Autoscaling",
      "description": "Architectural specification and design tradeoffs for Priority Task Queues & Worker Pool Autoscaling.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t2_s5",
      "label": "Delayed Message Retries & Backoff Timers",
      "description": "Architectural specification and design tradeoffs for Delayed Message Retries & Backoff Timers.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t3",
      "label": "Event-Driven Patterns",
      "description": "Architectural styles built around domain event streams.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p3_t3_s0",
      "label": "Event Sourcing: Replaying Immutable State Log",
      "description": "Architectural specification and design tradeoffs for Event Sourcing: Replaying Immutable State Log.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t3_s1",
      "label": "CQRS: Command Query Responsibility Segregation",
      "description": "Architectural specification and design tradeoffs for CQRS: Command Query Responsibility Segregation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t3_s2",
      "label": "Outbox Pattern for Atomic DB & Event Commits",
      "description": "Architectural specification and design tradeoffs for Outbox Pattern for Atomic DB & Event Commits.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t3_s3",
      "label": "Saga Pattern: Choreography vs Orchestration",
      "description": "Architectural specification and design tradeoffs for Saga Pattern: Choreography vs Orchestration.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t3_s4",
      "label": "Change Data Capture (Debezium CDC)",
      "description": "Architectural specification and design tradeoffs for Change Data Capture (Debezium CDC).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p3_t3_s5",
      "label": "Schema Registry & Avro / Protobuf Evolution",
      "description": "Architectural specification and design tradeoffs for Schema Registry & Avro / Protobuf Evolution.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4",
      "label": "4. Distributed Data & Storage Layers",
      "description": "Persisting data across replicated and partitioned databases.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "sd_p4_t1",
      "label": "Database Sharding & Replication",
      "description": "Scaling database reads and writes horizontally.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p4_t1_s0",
      "label": "Horizontal Partitioning (Range, Hash, Directory)",
      "description": "Architectural specification and design tradeoffs for Horizontal Partitioning (Range, Hash, Directory).",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t1_s1",
      "label": "Single-Leader Active-Passive Replication",
      "description": "Architectural specification and design tradeoffs for Single-Leader Active-Passive Replication.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t1_s2",
      "label": "Multi-Leader Active-Active Conflict Resolution",
      "description": "Architectural specification and design tradeoffs for Multi-Leader Active-Active Conflict Resolution.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t1_s3",
      "label": "Leaderless Replication (Dynamo-style Quorums R+W>N)",
      "description": "Architectural specification and design tradeoffs for Leaderless Replication (Dynamo-style Quorums R+W>N).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t1_s4",
      "label": "Replication Lag & Read-Your-Own-Writes Consistency",
      "description": "Architectural specification and design tradeoffs for Replication Lag & Read-Your-Own-Writes Consistency.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t1_s5",
      "label": "Global Distributed SQL (CockroachDB / YugabyteDB)",
      "description": "Architectural specification and design tradeoffs for Global Distributed SQL (CockroachDB / YugabyteDB).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t2",
      "label": "Distributed Caching Topologies",
      "description": "Reducing database load with sub-millisecond RAM caches.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p4_t2_s0",
      "label": "Cache Strategies: Cache-Aside vs Write-Through vs Write-Behind",
      "description": "Architectural specification and design tradeoffs for Cache Strategies: Cache-Aside vs Write-Through vs Write-Behind.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t2_s1",
      "label": "Cache Stampede Mitigation (Probabilistic Early Expiry)",
      "description": "Architectural specification and design tradeoffs for Cache Stampede Mitigation (Probabilistic Early Expiry).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t2_s2",
      "label": "Redis Cluster Sharding & Slot Slot Rebalancing",
      "description": "Architectural specification and design tradeoffs for Redis Cluster Sharding & Slot Slot Rebalancing.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t2_s3",
      "label": "Memcached Multi-Threaded Slab Allocation",
      "description": "Architectural specification and design tradeoffs for Memcached Multi-Threaded Slab Allocation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t2_s4",
      "label": "Cache Eviction: LRU, LFU, and ARC Algorithms",
      "description": "Architectural specification and design tradeoffs for Cache Eviction: LRU, LFU, and ARC Algorithms.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t2_s5",
      "label": "Hot Key In-Memory Buffering (Two-Tier Cache)",
      "description": "Architectural specification and design tradeoffs for Hot Key In-Memory Buffering (Two-Tier Cache).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t3",
      "label": "Distributed Consensus Protocols",
      "description": "Maintaining unified state across unreliable networks.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "sd_p4_t3_s0",
      "label": "Raft Consensus: Leader Election & Log Replication",
      "description": "Architectural specification and design tradeoffs for Raft Consensus: Leader Election & Log Replication.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t3_s1",
      "label": "Paxos & Multi-Paxos Formal Proofs",
      "description": "Architectural specification and design tradeoffs for Paxos & Multi-Paxos Formal Proofs.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t3_s2",
      "label": "Vector Clocks & Lamport Timestamps",
      "description": "Architectural specification and design tradeoffs for Vector Clocks & Lamport Timestamps.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t3_s3",
      "label": "CAP Theorem & PACELC Tradeoff Analysis",
      "description": "Architectural specification and design tradeoffs for CAP Theorem & PACELC Tradeoff Analysis.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t3_s4",
      "label": "etcd & Consul Distributed Key-Value Coordination",
      "description": "Architectural specification and design tradeoffs for etcd & Consul Distributed Key-Value Coordination.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "sd_p4_t3_s5",
      "label": "Byzantine Fault Tolerance (BFT) Consensus Algorithms",
      "description": "Architectural specification and design tradeoffs for Byzantine Fault Tolerance (BFT) Consensus Algorithms.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    }
  ],
  "edges": [
    {
      "source": "sd_root",
      "target": "sd_p1",
      "label": "Infrastructure Subsystem"
    },
    {
      "source": "sd_p1",
      "target": "sd_p1_t1"
    },
    {
      "source": "sd_p1_t1",
      "target": "sd_p1_t1_s0"
    },
    {
      "source": "sd_p1_t1",
      "target": "sd_p1_t1_s1"
    },
    {
      "source": "sd_p1_t1",
      "target": "sd_p1_t1_s2"
    },
    {
      "source": "sd_p1_t1",
      "target": "sd_p1_t1_s3"
    },
    {
      "source": "sd_p1_t1",
      "target": "sd_p1_t1_s4"
    },
    {
      "source": "sd_p1_t1",
      "target": "sd_p1_t1_s5"
    },
    {
      "source": "sd_p1",
      "target": "sd_p1_t2"
    },
    {
      "source": "sd_p1_t2",
      "target": "sd_p1_t2_s0"
    },
    {
      "source": "sd_p1_t2",
      "target": "sd_p1_t2_s1"
    },
    {
      "source": "sd_p1_t2",
      "target": "sd_p1_t2_s2"
    },
    {
      "source": "sd_p1_t2",
      "target": "sd_p1_t2_s3"
    },
    {
      "source": "sd_p1_t2",
      "target": "sd_p1_t2_s4"
    },
    {
      "source": "sd_p1_t2",
      "target": "sd_p1_t2_s5"
    },
    {
      "source": "sd_p1",
      "target": "sd_p1_t3"
    },
    {
      "source": "sd_p1_t3",
      "target": "sd_p1_t3_s0"
    },
    {
      "source": "sd_p1_t3",
      "target": "sd_p1_t3_s1"
    },
    {
      "source": "sd_p1_t3",
      "target": "sd_p1_t3_s2"
    },
    {
      "source": "sd_p1_t3",
      "target": "sd_p1_t3_s3"
    },
    {
      "source": "sd_p1_t3",
      "target": "sd_p1_t3_s4"
    },
    {
      "source": "sd_p1_t3",
      "target": "sd_p1_t3_s5"
    },
    {
      "source": "sd_root",
      "target": "sd_p2",
      "label": "Infrastructure Subsystem"
    },
    {
      "source": "sd_p2",
      "target": "sd_p2_t1"
    },
    {
      "source": "sd_p2_t1",
      "target": "sd_p2_t1_s0"
    },
    {
      "source": "sd_p2_t1",
      "target": "sd_p2_t1_s1"
    },
    {
      "source": "sd_p2_t1",
      "target": "sd_p2_t1_s2"
    },
    {
      "source": "sd_p2_t1",
      "target": "sd_p2_t1_s3"
    },
    {
      "source": "sd_p2_t1",
      "target": "sd_p2_t1_s4"
    },
    {
      "source": "sd_p2_t1",
      "target": "sd_p2_t1_s5"
    },
    {
      "source": "sd_p2",
      "target": "sd_p2_t2"
    },
    {
      "source": "sd_p2_t2",
      "target": "sd_p2_t2_s0"
    },
    {
      "source": "sd_p2_t2",
      "target": "sd_p2_t2_s1"
    },
    {
      "source": "sd_p2_t2",
      "target": "sd_p2_t2_s2"
    },
    {
      "source": "sd_p2_t2",
      "target": "sd_p2_t2_s3"
    },
    {
      "source": "sd_p2_t2",
      "target": "sd_p2_t2_s4"
    },
    {
      "source": "sd_p2_t2",
      "target": "sd_p2_t2_s5"
    },
    {
      "source": "sd_p2",
      "target": "sd_p2_t3"
    },
    {
      "source": "sd_p2_t3",
      "target": "sd_p2_t3_s0"
    },
    {
      "source": "sd_p2_t3",
      "target": "sd_p2_t3_s1"
    },
    {
      "source": "sd_p2_t3",
      "target": "sd_p2_t3_s2"
    },
    {
      "source": "sd_p2_t3",
      "target": "sd_p2_t3_s3"
    },
    {
      "source": "sd_p2_t3",
      "target": "sd_p2_t3_s4"
    },
    {
      "source": "sd_p2_t3",
      "target": "sd_p2_t3_s5"
    },
    {
      "source": "sd_root",
      "target": "sd_p3",
      "label": "Infrastructure Subsystem"
    },
    {
      "source": "sd_p3",
      "target": "sd_p3_t1"
    },
    {
      "source": "sd_p3_t1",
      "target": "sd_p3_t1_s0"
    },
    {
      "source": "sd_p3_t1",
      "target": "sd_p3_t1_s1"
    },
    {
      "source": "sd_p3_t1",
      "target": "sd_p3_t1_s2"
    },
    {
      "source": "sd_p3_t1",
      "target": "sd_p3_t1_s3"
    },
    {
      "source": "sd_p3_t1",
      "target": "sd_p3_t1_s4"
    },
    {
      "source": "sd_p3_t1",
      "target": "sd_p3_t1_s5"
    },
    {
      "source": "sd_p3",
      "target": "sd_p3_t2"
    },
    {
      "source": "sd_p3_t2",
      "target": "sd_p3_t2_s0"
    },
    {
      "source": "sd_p3_t2",
      "target": "sd_p3_t2_s1"
    },
    {
      "source": "sd_p3_t2",
      "target": "sd_p3_t2_s2"
    },
    {
      "source": "sd_p3_t2",
      "target": "sd_p3_t2_s3"
    },
    {
      "source": "sd_p3_t2",
      "target": "sd_p3_t2_s4"
    },
    {
      "source": "sd_p3_t2",
      "target": "sd_p3_t2_s5"
    },
    {
      "source": "sd_p3",
      "target": "sd_p3_t3"
    },
    {
      "source": "sd_p3_t3",
      "target": "sd_p3_t3_s0"
    },
    {
      "source": "sd_p3_t3",
      "target": "sd_p3_t3_s1"
    },
    {
      "source": "sd_p3_t3",
      "target": "sd_p3_t3_s2"
    },
    {
      "source": "sd_p3_t3",
      "target": "sd_p3_t3_s3"
    },
    {
      "source": "sd_p3_t3",
      "target": "sd_p3_t3_s4"
    },
    {
      "source": "sd_p3_t3",
      "target": "sd_p3_t3_s5"
    },
    {
      "source": "sd_root",
      "target": "sd_p4",
      "label": "Infrastructure Subsystem"
    },
    {
      "source": "sd_p4",
      "target": "sd_p4_t1"
    },
    {
      "source": "sd_p4_t1",
      "target": "sd_p4_t1_s0"
    },
    {
      "source": "sd_p4_t1",
      "target": "sd_p4_t1_s1"
    },
    {
      "source": "sd_p4_t1",
      "target": "sd_p4_t1_s2"
    },
    {
      "source": "sd_p4_t1",
      "target": "sd_p4_t1_s3"
    },
    {
      "source": "sd_p4_t1",
      "target": "sd_p4_t1_s4"
    },
    {
      "source": "sd_p4_t1",
      "target": "sd_p4_t1_s5"
    },
    {
      "source": "sd_p4",
      "target": "sd_p4_t2"
    },
    {
      "source": "sd_p4_t2",
      "target": "sd_p4_t2_s0"
    },
    {
      "source": "sd_p4_t2",
      "target": "sd_p4_t2_s1"
    },
    {
      "source": "sd_p4_t2",
      "target": "sd_p4_t2_s2"
    },
    {
      "source": "sd_p4_t2",
      "target": "sd_p4_t2_s3"
    },
    {
      "source": "sd_p4_t2",
      "target": "sd_p4_t2_s4"
    },
    {
      "source": "sd_p4_t2",
      "target": "sd_p4_t2_s5"
    },
    {
      "source": "sd_p4",
      "target": "sd_p4_t3"
    },
    {
      "source": "sd_p4_t3",
      "target": "sd_p4_t3_s0"
    },
    {
      "source": "sd_p4_t3",
      "target": "sd_p4_t3_s1"
    },
    {
      "source": "sd_p4_t3",
      "target": "sd_p4_t3_s2"
    },
    {
      "source": "sd_p4_t3",
      "target": "sd_p4_t3_s3"
    },
    {
      "source": "sd_p4_t3",
      "target": "sd_p4_t3_s4"
    },
    {
      "source": "sd_p4_t3",
      "target": "sd_p4_t3_s5"
    }
  ]
};
