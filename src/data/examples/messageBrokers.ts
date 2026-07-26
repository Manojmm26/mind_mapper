import { MindMapData } from "../../services/llmService";

export const MESSAGE_BROKERS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "brokers_root",
      "label": "Message Brokers & Distributed Event Streaming",
      "description": "Rigorous first-principles blueprint of Apache Pulsar BookKeeper ledgers, RabbitMQ Erlang AMQP process engines, Kafka zero-copy log indexing, NATS JetStream Raft KV buckets, event-driven topology patterns, and delivery idempotency.",
      "type": "topic"
    },
    {
      "id": "brokers_root_p1",
      "label": "Apache Pulsar Architecture & Storage Layer",
      "description": "Multi-tenant event streaming platform decoupling stateless broker compute from Apache BookKeeper ledger storage.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1",
      "label": "Stateless Broker Compute Layer",
      "description": "Handling topic connections, message dispatching, and routing without storing persistent data locally.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s1",
      "label": "Topic Ownership & Load Manager",
      "description": "Assigning topic partitions dynamically to available broker nodes based on CPU and memory load.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s1_d1",
      "label": "Bundles & Namespace Partitioning",
      "description": "Grouping topic ranges into bundle units to balance load across brokers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s1_d2",
      "label": "Zero Data Copy Broker Failover",
      "description": "Reassigning topic bundle ownership instantly without moving underlying disk data.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s2",
      "label": "Netty-Based Binary Protocol Engine",
      "description": "High-performance NIO networking layer handling producer and consumer socket connections.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s2_d1",
      "label": "Direct ByteBuf Memory Allocations",
      "description": "Managing network frame memory using Netty off-heap direct byte buffers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s2_d2",
      "label": "Command-Response Pipeline Framing",
      "description": "Streaming binary commands (Connect, Producer, Send, Subscribe) over long-lived TCP sockets.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s3",
      "label": "ManagedLedger Abstract Access Layer",
      "description": "Internal abstraction layer presenting a continuous stream of entries backed by multiple BookKeeper ledgers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s3_d1",
      "label": "Ledger Rollover Triggers",
      "description": "Creating new BookKeeper ledgers based on size (e.g. 2GB) or time (e.g. 4 hours).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s3_d2",
      "label": "Active Ledger Head Pointer Tracking",
      "description": "Maintaining write positions on the current active ledger.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s4",
      "label": "Multi-Tenancy & Namespace Isolation",
      "description": "Enforcing tenant policies, quotas, and security boundaries across organizational teams.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s4_d1",
      "label": "Tenant / Namespace / Topic Hierarchy",
      "description": "Structuring topics under tenant and namespace policy containers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s4_d2",
      "label": "Rate Limiting & Storage Quota Rules",
      "description": "Enforcing message throughput caps and maximum storage retention rules per namespace.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s5",
      "label": "Geo-Replication Engine (Active-Active / Active-Passive)",
      "description": "Replicating topic messages asynchronously across geographically separated Pulsar clusters.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s5_d1",
      "label": "Broker-to-Broker Replication Links",
      "description": "Re-publishing produced messages asynchronously to remote cluster brokers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t1_s5_d2",
      "label": "Deduplication & Loop Prevention Flags",
      "description": "Attaching cluster origin tags to prevent infinite message replication loops.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2",
      "label": "Apache BookKeeper Storage Engine",
      "description": "Distributed log storage service delivering low-latency write persistence for BookKeeper ledgers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s1",
      "label": "Bookie Storage Architecture (Journal vs Ledger Storage)",
      "description": "Separating low-latency sequential write logs from sorted data storage.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s1_d1",
      "label": "Journal File Sequential Write Log",
      "description": "Writing incoming entry payloads to dedicated journal SSDs with immediate fsync for fast ACKs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s1_d2",
      "label": "Ledger Storage DB Indexing (RocksDB)",
      "description": "Sorting and indexing ledger entries by (ledgerId, entryId) for efficient consumer read access.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s2",
      "label": "Ensemble, Write Quorum, and Ack Quorum (E, W, A)",
      "description": "Configuring replication and durability bounds across Bookie storage nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s2_d1",
      "label": "Ensemble Size (E) Node Pool Selection",
      "description": "Selecting E bookie nodes to distribute ledger entries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s2_d2",
      "label": "Write Quorum (W=3) & Ack Quorum (A=2)",
      "description": "Writing each entry to W bookies and requiring A confirmations before returning success.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s3",
      "label": "Striping Entry Distribution Model",
      "description": "Distributing sequential entries round-robin across ensemble bookies.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s3_d1",
      "label": "Round-Robin Entry Placement",
      "description": "Placing Entry 0 on Bookie 1, Entry 1 on Bookie 2, Entry 2 on Bookie 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s3_d2",
      "label": "Parallel Read Throughput Advantage",
      "description": "Reading non-contiguous entry ranges simultaneously from multiple bookie nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s4",
      "label": "Auto-Recovery & Data Re-replication",
      "description": "Detecting failed Bookie nodes and rebuilding lost entry replicas automatically.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s4_d1",
      "label": "Auditor Node Health Checks",
      "description": "Monitoring Bookie zookeeper ephemeral nodes to detect hardware failures.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s4_d2",
      "label": "Re-replication Worker Execution",
      "description": "Reading entries from healthy bookies to restore required Write Quorum counts on new bookies.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s5",
      "label": "Compaction & Garbage Collection Loops",
      "description": "Reclaiming disk space occupied by deleted or expired ledgers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s5_d1",
      "label": "Minor & Major Compaction Thresholds",
      "description": "Merging sparse ledger index files into dense continuous files.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t2_s5_d2",
      "label": "Garbage Collector Ledger Deletion Sweeps",
      "description": "Deleting ledger files when all contained topic entries are acknowledged or expired.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3",
      "label": "Subscription Types & Consumer Dispatches",
      "description": "Flexible messaging models supporting queuing, streaming, and pub/sub patterns.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s1",
      "label": "Exclusive Subscription Mode",
      "description": "Restricting topic consumption to a single active consumer connection.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s1_d1",
      "label": "Strict Ordering Guarantee",
      "description": "Processing all partition messages in exact sequential order.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s1_d2",
      "label": "Connection Rejection on Duplicate Consumers",
      "description": "Rejecting secondary consumer connection attempts with an error.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s2",
      "label": "Failover Subscription Mode",
      "description": "Connecting multiple consumers while dispatching traffic to a single active master.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s2_d1",
      "label": "Active / Standby Consumer Assignment",
      "description": "Designating one consumer as active while holding backup consumers in standby.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s2_d2",
      "label": "Sub-Second Failover Re-assignment",
      "description": "Promoting standby consumers instantly when active consumer connections drop.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s3",
      "label": "Shared (Queueing) Subscription Mode",
      "description": "Distributing topic messages round-robin across multiple parallel consumer workers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s3_d1",
      "label": "Horizontal Scale-Out Processing",
      "description": "Processing high-volume message workloads across large worker pools.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s3_d2",
      "label": "Individual Message Acknowledgment (Individual ACK)",
      "description": "Acknowledging individual messages rather than cumulative stream positions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s4",
      "label": "Key_Shared Subscription Mode",
      "description": "Hashing message keys to route messages with matching keys to the same consumer.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s4_d1",
      "label": "Per-Key Ordering Guarantees",
      "description": "Maintaining strict message order per user/account ID while parallelizing across consumers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s4_d2",
      "label": "Consistent Hashing Ring Rebalancing",
      "description": "Rebalancing key ranges dynamically as consumers join or leave the group.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s5",
      "label": "Cursor Management & Ack Set Bitmaps",
      "description": "Tracking consumer read progress and outstanding un-acknowledged messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s5_d1",
      "label": "Durable Cursor Position Ledger Updates",
      "description": "Persisting consumer cursor positions to dedicated BookKeeper ledgers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t3_s5_d2",
      "label": "BitVector Out-of-Order Acknowledgment Tracking",
      "description": "Tracking individual message acknowledgments using bitmap sets.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4",
      "label": "Tiered Storage & Offloading Engine",
      "description": "Offloading historical topic ledgers to cheap cloud object storage (S3, GCS).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s1",
      "label": "Automated Offload Threshold Triggers",
      "description": "Migrating closed ledgers to cloud storage based on size or time bounds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s1_d1",
      "label": "Offload Size / Time Policy Rules",
      "description": "Offloading ledgers older than 2 hours or when local bookie disk usage exceeds 80%.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s1_d2",
      "label": "Read-Only Ledger Offloading",
      "description": "Offloading closed, immutable ledgers without interrupting active writes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s2",
      "label": "S3 / GCS Data Layout & Index Files",
      "description": "Structuring offloaded ledger data blocks inside cloud object storage.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s2_d1",
      "label": "Ledger Header, Data Block, and Index Layout",
      "description": "Writing compact block files containing entry payloads and offset index footers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s2_d2",
      "label": "Byte-Range Fetching for Historical Reads",
      "description": "Reading specific entry ranges from cloud buckets using HTTP Range headers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s3",
      "label": "Seamless Client API Query Transparency",
      "description": "Allowing consumers to catch up on historical data transparently.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s3_d1",
      "label": "Unified Consumer Read Interface",
      "description": "Reading entries seamlessly regardless of whether data resides on local Bookies or cloud S3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s3_d2",
      "label": "Zero Application Code Modification",
      "description": "Bypassing complex manual archival retrieval code in consumer applications.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s4",
      "label": "Bookie Local Disk Reclamation",
      "description": "Deleting offloaded ledgers from expensive local Bookie SSDs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s4_d1",
      "label": "Local Ledger Deletion Post-Offload",
      "description": "Purging local bookie entries once offload verification completes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s4_d2",
      "label": "Massive Cost Reduction for Infinite Retention",
      "description": "Reducing historical storage costs by up to 90% using cloud object tiers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s5",
      "label": "Offload Recovery & Re-Index Verification",
      "description": "Verifying data integrity of offloaded cloud storage ledgers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s5_d1",
      "label": "SHA-256 Checksum Verification",
      "description": "Validating entry hashes during offload reads to prevent data corruption.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t4_s5_d2",
      "label": "Fallback Read Paths",
      "description": "Failing over to alternative storage replicas if cloud storage fetch operations time out.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5",
      "description": "Detailed first-principles mechanics for Apache Pulsar Architecture & Storage Layer topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s1_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s1_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s2_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s2_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s3",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s3_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s3_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s4",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s4_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s4_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s5",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s5_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t5_s5_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6",
      "description": "Detailed first-principles mechanics for Apache Pulsar Architecture & Storage Layer topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s1_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s1_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s2_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s2_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s3",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s3_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s3_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s4",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s4_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s4_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s5",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Apache Pulsar Architecture & Storage Layer Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s5_d1",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p1_t6_s5_d2",
      "label": "Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Pulsar Architecture & Storage Layer Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2",
      "label": "RabbitMQ & AMQP Erlang Internals",
      "description": "Erlang actor-based message broker implementing Advanced Message Queuing Protocol (AMQP 0-9-1).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1",
      "label": "Erlang OTP Actor Model Foundation",
      "description": "Concurrently executing millions of isolated Erlang light-weight processes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s1",
      "label": "Process Per Connection / Channel / Queue",
      "description": "Mapping networking channels and queues to independent Erlang processes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s1_d1",
      "label": "Isolated Mailbox Memory Workspaces",
      "description": "Managing zero-shared-memory process mailboxes to prevent lock contention.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s1_d2",
      "label": "Preemptive Reduction-Based Scheduler",
      "description": "Preempting processes after 2000 reductions (function calls) to guarantee fairness.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s2",
      "label": "Mnesia Distributed Database Layer",
      "description": "Embedded real-time Erlang database storing cluster schema metadata.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s2_d1",
      "label": "Exchange, Queue, and Binding Schema Tables",
      "description": "Replicating topology metadata across all cluster nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s2_d2",
      "label": "RAM-Only vs Disc-Backed Metadata Tables",
      "description": "Configuring disc nodes to persist cluster configuration state across restarts.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s3",
      "label": "Supervision Trees & Fault Recovery",
      "description": "Hierarchical Erlang supervisor structures restoring failed processes automatically.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s3_d1",
      "label": "one_for_one & one_for_all Restart Strategies",
      "description": "Restarting crashed queue processes without affecting adjacent healthy queues.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s3_d2",
      "label": "Self-Healing Crash Resilience",
      "description": "Recovering from unhandled exceptions instantly without crashing the full broker node.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s4",
      "label": "Erlang Garbage Collection Per Process",
      "description": "Executing garbage collection independently per light-weight process.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s4_d1",
      "label": "Zero Global Stop-The-World GC Pauses",
      "description": "Eliminating global GC latency spikes by collecting process heaps independently.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s4_d2",
      "label": "Short-Lived Process Memory Auto-Reclamation",
      "description": "Reclaiming memory instantly when transient channel processes terminate.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s5",
      "label": "Erlang Distribution Protocol (epmd)",
      "description": "Inter-node communication framework connecting clustered RabbitMQ nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s5_d1",
      "label": "Erlang Port Mapper Daemon (epmd)",
      "description": "Resolving node names (rabbit@hostA) to internal TCP communication ports.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t1_s5_d2",
      "label": "Erlang Cookie Authentication Key",
      "description": "Authenticating cluster nodes using shared secret cookie strings.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2",
      "label": "AMQP 0-9-1 Exchange & Routing Architecture",
      "description": "Routing messages from producers to queues using programmable exchange types.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s1",
      "label": "Direct Exchange (Exact Routing Key Match)",
      "description": "Routing messages to queues based on exact matching of routing key strings.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s1_d1",
      "label": "O(1) Hash Table Lookup Routing",
      "description": "Matching routing keys instantly using internal hash tables.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s1_d2",
      "label": "Unicast Task Distribution Pattern",
      "description": "Routing specific work items directly to targeted worker queues.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s2",
      "label": "Fanout Exchange (Broadcast Publish)",
      "description": "Broadcasting messages to all queues bound to the exchange regardless of routing keys.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s2_d1",
      "label": "Zero Key Evaluation Overhead",
      "description": "Copying incoming messages directly to all bound target queue mailboxes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s2_d2",
      "label": "Pub/Sub Broadcast Pattern Implementation",
      "description": "Delivering real-time notifications to multiple independent subscriber systems.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s3",
      "label": "Topic Exchange (Wildcard Pattern Match)",
      "description": "Routing messages using wildcard patterns matching dot-delimited routing keys.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s3_d1",
      "label": "Wildcard Symbols (* for 1 word, # for 0+ words)",
      "description": "Matching routing keys like stock.usd.nyse using patterns like stock.*.nyse or stock.#.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s3_d2",
      "label": "Trie / Pattern Tree Matching Algorithm",
      "description": "Evaluating routing keys against wildcard binding trees.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s4",
      "label": "Headers Exchange (Arbitrary Header Attribute Matching)",
      "description": "Routing messages based on matching key-value pairs in the AMQP message header.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s4_d1",
      "label": "x-match: all vs x-match: any Rules",
      "description": "Requiring all or any header attributes to match binding parameters.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s4_d2",
      "label": "Complex Metadata-Driven Routing",
      "description": "Routing messages based on non-routing-key payload attributes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s5",
      "label": "Dead Letter Exchanges (DLX) & TTL Routing",
      "description": "Rerouting rejected, expired, or dropped messages to dedicated error queues.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s5_d1",
      "label": "x-dead-letter-exchange Queue Argument",
      "description": "Configuring dead-letter exchanges to capture unhandled messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t2_s5_d2",
      "label": "x-message-ttl Message Expiration Triggers",
      "description": "Dead-lettering messages automatically when queue residence time exceeds TTL bounds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3",
      "label": "Quorum Queues & Mirroring Mechanics",
      "description": "HA queue architectures ensuring high availability and strong data consistency.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s1",
      "label": "Raft Consensus Protocol Integration (Quorum Queues)",
      "description": "Replacing legacy mirrored queues with Raft-backed replicated queues.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s1_d1",
      "label": "Raft Leader & Follower Replica Roles",
      "description": "Routing queue writes through Raft leaders and replicating entries across followers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s1_d2",
      "label": "Majority Quorum Write Acknowledgments",
      "description": "Requiring a majority of Raft members (e.g. 2 of 3) to persist entries before acknowledging.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s2",
      "label": "Classic Mirrored Queues (Deprecated HA)",
      "description": "Legacy active-passive master/slave queue synchronization over Erlang links.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s2_d1",
      "label": "Master Node Queue Processing",
      "description": "Executing all queue operations on a single master node.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s2_d2",
      "label": "Blocking Synchronization Stalls",
      "description": "Blocking queue writes during new slave synchronization passes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s3",
      "label": "Poison Message & Redelivery Limits",
      "description": "Detecting and removing messages causing continuous consumer process crashes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s3_d1",
      "label": "x-delivery-count Header Tracking",
      "description": "Incrementing delivery counts on every consumer redelivery attempt.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s3_d2",
      "label": "Automatic DLX Drop Thresholds",
      "description": "Routing messages to dead-letter queues after crossing max redelivery limits (e.g. 5 attempts).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s4",
      "label": "Flow Control & Memory High Watermarks",
      "description": "Throttling incoming producers when broker RAM or disk space runs low.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s4_d1",
      "label": "vm_memory_high_watermark Thresholds",
      "description": "Blocking TCP connections from producers when RAM usage crosses configured limits (default 40%).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s4_d2",
      "label": "Disk Free Limit Safety Brakes",
      "description": "Pausing producers when available disk space drops below free disk thresholds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s5",
      "label": "Lazy Queues & Paging to Disk",
      "description": "Offloading queue contents to disk aggressively to minimize RAM footprint.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s5_d1",
      "label": "queue_mode: lazy Configuration",
      "description": "Writing incoming messages directly to disk storage as quickly as possible.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t3_s5_d2",
      "label": "Handling Multi-Million Message Backlogs",
      "description": "Preventing RAM exhaustion during massive consumer outage events.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4",
      "label": "AMQP Channel Multiplexing & Flow Control",
      "description": "Multiplexing logical channels over single long-lived TCP socket connections.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s1",
      "label": "TCP Connection vs Channel Multiplexing",
      "description": "Sharing single TCP connections across multiple independent lightweight channels.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s1_d1",
      "label": "Channel ID Framing (16-bit Integer)",
      "description": "Encoding channel IDs in AMQP frame headers to route data to correct Erlang processes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s1_d2",
      "label": "Reduced TCP Handshake & Socket Overhead",
      "description": "Eliminating operating system socket allocation costs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s2",
      "label": "Publisher Confirms (confirm.select)",
      "description": "Asynchronous feedback protocol notifying producers when messages are safely persisted.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s2_d1",
      "label": "basic.ack / basic.nack Frame Responses",
      "description": "Returning confirmation sequence numbers to producers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s2_d2",
      "label": "Zero Blocking Pipeline Publishing",
      "description": "Streaming messages continuously while tracking unconfirmed sequence numbers in memory.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s3",
      "label": "Consumer Prefetch Limit (basic.qos)",
      "description": "Restricting the number of unacknowledged messages dispatched to a consumer channel.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s3_d1",
      "label": "prefetch_count Parameter Tuning",
      "description": "Setting prefetch limits (e.g. 100) to prevent overwhelming single consumers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s3_d2",
      "label": "Fair Load Balancing Across Consumers",
      "description": "Dispatched messages to faster consumers as soon as acknowledgments are received.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s4",
      "label": "Transaction Mode (tx.select) Performance Penalty",
      "description": "Enforcing atomic transactional commits at the cost of severe throughput reduction.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s4_d1",
      "label": "tx.commit & tx.rollback Synchronous Waits",
      "description": "Blocking producers until disk sync completes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s4_d2",
      "label": "100x Throughput Drop vs Publisher Confirms",
      "description": "Preferring Publisher Confirms over AMQP transactions for high-speed systems.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s5",
      "label": "Heartbeat Frames & Connection Monitoring",
      "description": "Detecting dead TCP connections and network partition failures.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s5_d1",
      "label": "Bidirectional Heartbeat Frame Exchange",
      "description": "Exchanging empty heartbeat frames at regular intervals (e.g. 60 seconds).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t4_s5_d2",
      "label": "Socket Closure on Missed Heartbeats",
      "description": "Closing dead TCP connections and releasing queue locks when heartbeats fail.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5",
      "description": "Detailed first-principles mechanics for RabbitMQ & AMQP Erlang Internals topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s1_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s1_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s2_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s2_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s3",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s3_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s3_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s4",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s4_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s4_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s5",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s5_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t5_s5_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6",
      "description": "Detailed first-principles mechanics for RabbitMQ & AMQP Erlang Internals topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s1_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s1_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s2_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s2_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s3",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s3_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s3_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s4",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s4_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s4_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s5",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RabbitMQ & AMQP Erlang Internals Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s5_d1",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p2_t6_s5_d2",
      "label": "RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RabbitMQ & AMQP Erlang Internals Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3",
      "label": "Apache Kafka Partitioning & Log Internals",
      "description": "High-throughput distributed commit log architecture utilizing zero-copy I/O and sequential disk access.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1",
      "label": "Commit Log & Segment File Structure",
      "description": "Storing topic partition data in append-only sequential log segment files.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s1",
      "label": "Partition Directory & .log Files",
      "description": "Structuring partition data inside directory trees containing 1GB log segment files.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s1_d1",
      "label": "Base Offset Naming Convention (0000000000.log)",
      "description": "Naming segment files by the starting 64-bit absolute offset of contained messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s1_d2",
      "label": "Append-Only Sequential Disk Writes",
      "description": "Achieving disk write speeds matching RAM by using pure sequential I/O.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s2",
      "label": "Offset Index (.index) & Time Index (.timeindex)",
      "description": "Sparse index files mapping logical message offsets to physical byte positions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s2_d1",
      "label": "Sparse Index Sampling Interval (index.interval.bytes = 4096)",
      "description": "Writing index entries every 4KB of log data to keep index files small enough to fit in RAM.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s2_d2",
      "label": "Binary Search Offset Resolution",
      "description": "Performing binary search on index files to locate exact file byte offsets.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s3",
      "label": "PageCache Reliance & Zero-Copy (sendfile)",
      "description": "Utilizing OS PageCache and Linux sendfile syscall to stream network data without CPU memory copies.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s3_d1",
      "label": "Kernel sendfile System Call Execution",
      "description": "Transferring data directly from OS PageCache to NIC network buffers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s3_d2",
      "label": "Elimination of User-Space Memory Copying",
      "description": "Bypassing JVM memory allocations entirely during consumer data reads.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s4",
      "label": "Log Compaction (cleanup.policy=compact)",
      "description": "Retaining the latest message payload for every record key within a partition log.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s4_d1",
      "label": "Cleaner Thread Deduplication Passes",
      "description": "Merging log segments to remove older duplicate keys.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s4_d2",
      "label": "Tombstone Marker Deletions (Null Payloads)",
      "description": "Retaining null-payload tombstone records briefly to propagate key deletion signals.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s5",
      "label": "Log Retention Policies (Time vs Size)",
      "description": "Purging historical log segments based on retention limits.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s5_d1",
      "label": "retention.ms & retention.bytes Settings",
      "description": "Deleting old segment files when age exceeds limits or partition size breaches caps.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t1_s5_d2",
      "label": "Segment-Level File Deletion Operations",
      "description": "Deleting full segment files atomically via file system unlink calls.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2",
      "label": "Replication & KRaft Consensus Engine",
      "description": "Partition replication management using the Kafka Raft (KRaft) consensus protocol.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s1",
      "label": "Leader & Follower Replica Roles",
      "description": "Assigning one leader replica to handle all writes and reads while followers fetch data.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s1_d1",
      "label": "In-Sync Replicas (ISR) Membership",
      "description": "Maintaining active sets of follower replicas catching up with leader log offsets.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s1_d2",
      "label": "High Watermark (HW) Log Offset Advance",
      "description": "Advancing High Watermark offsets when all ISR members fetch entries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s2",
      "label": "KRaft Quorum Controller (Replacing ZooKeeper)",
      "description": "Event-driven Raft quorum managing cluster metadata inside Kafka.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s2_d1",
      "label": "Metadata Topic (@metadata) Log Replication",
      "description": "Replicating cluster state changes as immutable records in a dedicated internal topic.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s2_d2",
      "label": "Sub-Second Controller Failover",
      "description": "Promoting new controller leaders instantly without ZooKeeper synchronization stalls.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s3",
      "label": "acks=all (acks=-1) & min.insync.replicas",
      "description": "Configuring producer durability guarantees for written records.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s3_d1",
      "label": "acks=all Durability Requirement",
      "description": "Requiring all active ISR members to acknowledge writes before returning success.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s3_d2",
      "label": "NotEnoughReplicasException Triggers",
      "description": "Rejecting writes if active ISR count drops below min.insync.replicas thresholds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s4",
      "label": "Unclean Leader Election Controls",
      "description": "Selecting policy behavior when all ISR replicas fail.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s4_d1",
      "label": "unclean.leader.election.enable=false (Default)",
      "description": "Preventing non-ISR followers from becoming leaders, choosing availability loss over data loss.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s4_d2",
      "label": "Potential Data Loss in Unclean Elections",
      "description": "Allowing out-of-sync followers to become leaders, causing un-replicated messages to be truncated.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s5",
      "label": "Replica Fetcher Threads & Flow Control",
      "description": "Followers pulling messages from leaders using FetchRequest protocols.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s5_d1",
      "label": "replica.fetch.max.bytes Configuration",
      "description": "Controlling maximum data payload sizes returned per fetch request.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t2_s5_d2",
      "label": "replica.lag.time.max.ms Exclusions",
      "description": "Removing followers from ISR sets if fetch requests stall longer than lag thresholds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3",
      "label": "Consumer Group Rebalancing Mechanics",
      "description": "Coordinating group consumers to distribute partition assignments dynamically.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s1",
      "label": "Group Coordinator & JoinGroup Protocol",
      "description": "Broker node managing consumer group membership and partition assignment.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s1_d1",
      "label": "JoinGroup & SyncGroup State Machine",
      "description": "Collecting active consumer members and distributing partition assignment plans.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s1_d2",
      "label": "Eager Rebalance Stop-The-World Penalty",
      "description": "Revoking all partition assignments during rebalances, interrupting consumption.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s2",
      "label": "Cooperative Sticky Assignor (Incremental Rebalance)",
      "description": "Rebalancing partitions incrementally without revoking unaffected consumer assignments.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s2_d1",
      "label": "Incremental Partition Revocation",
      "description": "Revoking only partitions that need migration to new consumers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s2_d2",
      "label": "Continuous Processing During Rebalances",
      "description": "Allowing consumers to process unaffected partitions continuously during group changes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s3",
      "label": "Static Group Membership (group.instance.id)",
      "description": "Assigning persistent identities to consumers to avoid rebalances during restarts.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s3_d1",
      "label": "Session Timeout Grace Windows",
      "description": "Retaining partition assignments while consumers restart within session timeouts.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s3_d2",
      "label": "Zero Rebalance Pod Rolling Restarts",
      "description": "Executing Kubernetes pod rolling updates without triggering consumer rebalances.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s4",
      "label": "Offset Commit Topics (__consumer_offsets)",
      "description": "Storing consumer group read progress in internal compacted Kafka topics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s4_d1",
      "label": "Group Offset Key Formatting (group_id + topic + partition)",
      "description": "Encoding committed offset positions as key-value records in __consumer_offsets.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s4_d2",
      "label": "Auto-Commit vs Manual Offset Commits",
      "description": "Balancing convenience against exact-once processing controls.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s5",
      "label": "Heartbeat Thread & max.poll.interval.ms",
      "description": "Monitoring consumer health using background heartbeat threads.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s5_d1",
      "label": "Heartbeat Thread Separation",
      "description": "Running heartbeat requests in dedicated background threads independent of record processing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t3_s5_d2",
      "label": "max.poll.interval.ms Expiration Revocation",
      "description": "Evicting consumers from groups if message processing loops exceed max poll intervals.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4",
      "label": "Transactional Kafka & Idempotent Producers",
      "description": "Delivering exactly-once semantics across read-process-write streams.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s1",
      "label": "Idempotent Producer Sequence Numbers",
      "description": "Eliminating duplicate messages caused by network retries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s1_d1",
      "label": "Producer ID (PID) & Sequence Number Headers",
      "description": "Attaching monotonically increasing sequence numbers to produced messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s1_d2",
      "label": "Broker Duplicate Rejection",
      "description": "Rejecting duplicate sequence numbers silently on brokers while returning success ACKs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s2",
      "label": "Transaction Coordinator & Transaction Log (__transaction_state)",
      "description": "Managing two-phase commit transactions across multiple topics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s2_d1",
      "label": "Transactional ID (transactional.id) Binding",
      "description": "Persisting transactional state across producer restarts.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s2_d2",
      "label": "Two-Phase Commit (2PC) Marker Writes",
      "description": "Writing COMMIT or ABORT marker records to partition logs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s3",
      "label": "Read-Committed Consumer Isolation (isolation.level)",
      "description": "Restricting consumers to reading only committed transactional messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s3_d1",
      "label": "Control Marker Offset Filtering",
      "description": "Hiding uncommitted messages and abort markers from consumers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s3_d2",
      "label": "Last Stable Offset (LSO) Read Boundaries",
      "description": "Restricting consumer reads to offsets below the lowest pending transaction.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s4",
      "label": "End-to-End Exactly-Once Processing (EOS)",
      "description": "Combining idempotent producers, transactions, and consumer offset commits.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s4_d1",
      "label": "Atomic Read-Process-Write Loop",
      "description": "Writing output records and input consumer offsets atomically in single transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s4_d2",
      "label": "Stream Processing Correctness Guarantees",
      "description": "Ensuring stream processing frameworks (Kafka Streams, Flink) produce exact results.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s5",
      "label": "Transaction Timeout & Abort Recovery",
      "description": "Handling stalled transactions automatically.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s5_d1",
      "label": "transaction.timeout.ms Expiration",
      "description": "Aborting transactions automatically if producers stall longer than timeouts.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t4_s5_d2",
      "label": "Producer Fence Mechanics",
      "description": "Fencing zombie producers when new instances initialize with identical transactional IDs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5",
      "description": "Detailed first-principles mechanics for Apache Kafka Partitioning & Log Internals topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s1_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s1_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s2_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s2_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s3",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s3_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s3_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s4",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s4_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s4_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s5",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s5_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t5_s5_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6",
      "description": "Detailed first-principles mechanics for Apache Kafka Partitioning & Log Internals topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s1_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s1_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s2_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s2_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s3",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s3_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s3_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s4",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s4_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s4_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s5",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Apache Kafka Partitioning & Log Internals Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s5_d1",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p3_t6_s5_d2",
      "label": "Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Apache Kafka Partitioning & Log Internals Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4",
      "label": "NATS JetStream & Lightweight Streaming",
      "description": "High-performance, cloud-native messaging system supporting pub/sub, request-reply, and Raft-backed streaming.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1",
      "label": "NATS Core Pub/Sub & Request-Reply Engine",
      "description": "Ultra-lightweight Go messaging core processing millions of messages per second per core.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s1",
      "label": "Subject-Based Message Routing",
      "description": "Routing messages using dot-delimited hierarchical subject strings (e.g. orders.us.east).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s1_d1",
      "label": "Wildcard Tokens (* for 1 token, > for tail matching)",
      "description": "Matching subjects using single-token (*) or multi-token (>) wildcards.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s1_d2",
      "label": "In-Memory Subject Trie Matcher",
      "description": "Evaluating subjects in sub-microsecond times using high-speed trie data structures.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s2",
      "label": "Request-Reply Pattern & INBOX Subjects",
      "description": "Executing synchronous request-reply calls over asynchronous pub/sub transport.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s2_d1",
      "label": "Dynamic Reply-To Inbox Subject Generation",
      "description": "Attaching temporary return subjects (_INBOX.xxx) to request messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s2_d2",
      "label": "Single-Message Ephemeral Subscriptions",
      "description": "Listening for single reply messages before destroying temporary subscriptions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s3",
      "label": "Queue Groups (Load Balanced Consumption)",
      "description": "Distributing subject messages across a group of subscribers registered under a queue name.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s3_d1",
      "label": "Randomized / Round-Robin Message Dispatch",
      "description": "Distributing messages evenly across queue group members.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s3_d2",
      "label": "Zero Complex Consumer Group Protocols",
      "description": "Eliminating heavy rebalance protocols found in complex streaming systems.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s4",
      "label": "Zero Memory Message Buffering (Core NATS)",
      "description": "Delivering messages directly to active socket connections without disk persistence.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s4_d1",
      "label": "Fire-and-Forget Delivery Model",
      "description": "Dropping messages if no active subscribers match the subject.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s4_d2",
      "label": "Sub-Microsecond Latency Bounds",
      "description": "Achieving sub-microsecond message delivery latencies.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s5",
      "label": "NATS Server Architecture (Single Small Go Binary)",
      "description": "Deploying self-contained 20MB server binaries with zero external dependencies.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s5_d1",
      "label": "Minimal CPU & Memory Footprint (< 30MB RAM)",
      "description": "Running efficiently on edge devices and small containers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t1_s5_d2",
      "label": "Auto-Clustering Gossip Protocols",
      "description": "Forming mesh clusters automatically by referencing peer addresses.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2",
      "label": "NATS JetStream Persistence Layer",
      "description": "Raft-backed engine adding message persistence, streams, and key-value stores to NATS.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s1",
      "label": "Stream Definitions & Subject Binding",
      "description": "Configuring durable message streams consuming specific subject patterns.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s1_d1",
      "label": "File vs Memory Storage Engines",
      "description": "Selecting disk-backed file storage or ultra-fast RAM storage per stream.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s1_d2",
      "label": "Message Retention Policies (Limits, Interest, WorkQueue)",
      "description": "Purging messages by size/age, subscriber interest, or worker queue consumption.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s2",
      "label": "NATS Raft (nraft) Replicated Storage",
      "description": "Embedded Raft implementation replicating stream entries across cluster nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s2_d1",
      "label": "R3 / R5 Stream Replication Factor Specs",
      "description": "Replicating stream logs across 3 or 5 cluster nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s2_d2",
      "label": "Per-Stream Raft Group Isolation",
      "description": "Assigning independent Raft groups to streams to distribute load across cluster nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s3",
      "label": "Durable Consumers (Push vs Pull)",
      "description": "Managing stateful consumer subscriptions catching up on stream history.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s3_d1",
      "label": "Pull Consumers (Fetch Batch API)",
      "description": "Allowing consumers to request explicit message batches (e.g. fetch 50 messages).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s3_d2",
      "label": "Push Consumers (Stream Delivery to Subject)",
      "description": "Pushing stream messages to target subjects automatically.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s4",
      "label": "Stream Deduplication Windows (duplicate_window)",
      "description": "Eliminating duplicate published messages within configured time windows.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s4_d1",
      "label": "Nats-Msg-Id Header Tracking",
      "description": "Hashing unique message ID headers to track published records.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s4_d2",
      "label": "Sliding Deduplication Time Windows",
      "description": "Rejecting duplicate publishes occurring within 2-minute deduplication windows.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s5",
      "label": "JetStream Key-Value (KV) & Object Store",
      "description": "Building distributed key-value and blob stores directly on top of JetStream streams.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s5_d1",
      "label": "KV Bucket History & Compaction",
      "description": "Storing key-value histories in compressed stream logs with versioning support.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t2_s5_d2",
      "label": "Object Store Chunking Pipeline",
      "description": "Chunking large files into 128KB stream messages for distributed storage.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3",
      "label": "NATS Leaf Nodes & Edge Topologies",
      "description": "Extending NATS clusters to remote edge locations and isolated environments.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s1",
      "label": "Leaf Node Architecture & Out-of-Band Sync",
      "description": "Deploying local NATS instances on edge devices that connect back to central clusters.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s1_d1",
      "label": "Local Application Message Processing",
      "description": "Serving local edge applications even during WAN network disconnects.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s1_d2",
      "label": "Asynchronous Central Sync Handshakes",
      "description": "Forwarding subject messages to central clusters when WAN links reconnect.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s2",
      "label": "NATS Superclusters (Gateways)",
      "description": "Connecting multiple independent NATS clusters across geographic regions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s2_d1",
      "label": "Gateway Connection Mesh",
      "description": "Exchanging interest graphs between clusters to route cross-region messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s2_d2",
      "label": "Region Outage Isolation",
      "description": "Preventing local cluster failures from impacting remote supercluster nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s3",
      "label": "Account Isolation & User JWT Claims",
      "description": "Multi-tenant security isolation using decentralized JWT authentication.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s3_d1",
      "label": "Account Subject Boundaries",
      "description": "Isolating subject spaces between distinct accounts completely.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s3_d2",
      "label": "Export / Import Subject Sharing Rules",
      "description": "Sharing specific subjects across accounts using explicit export/import rules.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s4",
      "label": "Security Operator & NKEY Signatures",
      "description": "Authenticating clients using Ed25519 public/private keypairs (NKEYs).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s4_d1",
      "label": "Zero Private Key Transmission Auth",
      "description": "Authenticating clients via challenge-response signatures without sending secret keys.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s4_d2",
      "label": "Decentralized Token Authority",
      "description": "Issuing user JWTs signed by operator keys without central auth servers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s5",
      "label": "WebSockets & MQTT Native Protocol Gateways",
      "description": "Allowing web browsers and IoT devices to connect directly to NATS servers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s5_d1",
      "label": "Built-in WebSocket Server Integration",
      "description": "Streaming NATS messages directly to web browser clients.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t3_s5_d2",
      "label": "MQTT 3.1.1 Protocol Translation Engine",
      "description": "Accepting native MQTT client connections and translating messages to NATS subjects.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4",
      "label": "Broker Performance & Memory Comparison",
      "description": "Comparing NATS JetStream architecture against Kafka and Pulsar.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s1",
      "label": "Resource Footprint Comparison",
      "description": "Evaluating RAM, CPU, and binary storage footprint across major engines.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s1_d1",
      "label": "NATS Server (20MB Binary, 30MB RAM)",
      "description": "Operating ultra-lightweight binaries ideal for microservices and edge nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s1_d2",
      "label": "Kafka / Pulsar JVM & Cluster Requirements",
      "description": "Requiring gigabytes of RAM and multi-node clusters for operation.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s2",
      "label": "Operational Complexity & Maintenance",
      "description": "Comparing operational overhead of single binaries vs multi-tier clusters.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s2_d1",
      "label": "Zero-Dependency Deployment Simplicity",
      "description": "Running NATS without external metadata stores (ZooKeeper/etcd).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s2_d2",
      "label": "Single Binary Self-Healing Upgrades",
      "description": "Executing zero-downtime rolling upgrades easily.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s3",
      "label": "Throughput & Sub-Millisecond Latency Benchmarks",
      "description": "Benchmarking message execution speeds across streaming platforms.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s3_d1",
      "label": "Sub-100-Microsecond Core Latency",
      "description": "Delivering messages orders of magnitude faster than JVM-based stream brokers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s3_d2",
      "label": "Multi-Million Message / Sec Throughput",
      "description": "Saturating 10Gbps network interfaces using single CPU cores.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s4",
      "label": "Use-Case Selection Framework",
      "description": "Selecting the optimal message broker based on business requirements.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s4_d1",
      "label": "NATS for Microservices, Edge, and Request-Reply",
      "description": "Choosing NATS for fast RPC, lightweight pub/sub, and edge streaming.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s4_d2",
      "label": "Kafka / Pulsar for Mass Analytics & Data Lakes",
      "description": "Choosing Kafka/Pulsar for petabyte event log retention and analytical pipelines.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s5",
      "label": "Protocol Standard Tradeoffs",
      "description": "Evaluating custom binary protocols vs AMQP and MQTT standards.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s5_d1",
      "label": "NATS Text Protocol Simplicity",
      "description": "Inspecting raw human-readable NATS text protocol frames easily.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t4_s5_d2",
      "label": "AMQP & MQTT Interoperability",
      "description": "Leveraging standard AMQP/MQTT integrations for legacy enterprise software.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5",
      "label": "NATS JetStream & Lightweight Streaming Topic 5",
      "description": "Detailed first-principles mechanics for NATS JetStream & Lightweight Streaming topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s1",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s1_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s1_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s2",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s2_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s2_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s3",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s3_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s3_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s4",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s4_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s4_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s5",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s5_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t5_s5_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6",
      "label": "NATS JetStream & Lightweight Streaming Topic 6",
      "description": "Detailed first-principles mechanics for NATS JetStream & Lightweight Streaming topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s1",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s1_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s1_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s2",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s2_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s2_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s3",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s3_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s3_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s4",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s4_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s4_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s5",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for NATS JetStream & Lightweight Streaming Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s5_d1",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p4_t6_s5_d2",
      "label": "NATS JetStream & Lightweight Streaming Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for NATS JetStream & Lightweight Streaming Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5",
      "label": "Event-Driven Architectural Topologies",
      "description": "Event notifications, Event-carried state transfer, Event Sourcing, and CQRS patterns.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1",
      "label": "Event Notifications vs Event-Carried State Transfer",
      "description": "Distinguishing lightweight event signals from rich state-bearing event payloads.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s1",
      "label": "Event Notification Pattern (Lightweight Signals)",
      "description": "Publishing minimal event payloads signaling that an action occurred (e.g. {\"order_id\": 123}).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s1_d1",
      "label": "Subsequent Callback Fetching Requirement",
      "description": "Requiring receivers to query source APIs to fetch full resource details.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s1_d2",
      "label": "Low Payload Coupling Advantage",
      "description": "Keeping event contracts minimal to reduce schema breaking risks.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s2",
      "label": "Event-Carried State Transfer (Rich Payloads)",
      "description": "Attaching full entity data to events to eliminate receiver callback queries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s2_d1",
      "label": "Zero Callback Dependency Architecture",
      "description": "Allowing downstream systems to update local read models without API calls.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s2_d2",
      "label": "Increased Payload Size & Schema Coupling",
      "description": "Managing larger network bandwidth footprints and complex schema versioning.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s3",
      "label": "Database Change Data Capture (CDC / Debezium)",
      "description": "Streaming database WAL logs into event brokers automatically.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s3_d1",
      "label": "Zero Application Code Event Generation",
      "description": "Capturing database inserts, updates, and deletes directly from database transaction logs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s3_d2",
      "label": "Exact Change Order Preservation",
      "description": "Preserving exact database transaction sequencing in event streams.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s4",
      "label": "Outbox Pattern for Transactional Event Publishing",
      "description": "Ensuring atomic database updates and event publishing without 2PC distributed transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s4_d1",
      "label": "Local Outbox Table Writes",
      "description": "Writing business entities and outbox event records inside single local SQL transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s4_d2",
      "label": "Outbox Poller / CDC Relay Process",
      "description": "Relaying outbox table records to event brokers continuously.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s5",
      "label": "Schema Registry & Evolution (Avro / Protobuf)",
      "description": "Enforcing schema compatibility rules across event producers and consumers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s5_d1",
      "label": "Confluent / Pulsar Schema Registry Integration",
      "description": "Validating event schemas against centralized registries before publishing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t1_s5_d2",
      "label": "Backward & Forward Compatibility Enforcement",
      "description": "Ensuring schema updates do not break legacy consumer applications.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2",
      "label": "Event Sourcing Architecture",
      "description": "Persisting application state as a sequence of immutable state-changing events.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s1",
      "label": "Append-Only Event Store Log",
      "description": "Storing raw domain events (e.g. OrderCreated, ItemAdded, OrderPaid) sequentially.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s1_d1",
      "label": "Zero UPDATE / DELETE Operations",
      "description": "Preserving complete historical application change audit trails.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s1_d2",
      "label": "Current State Calculation (State = Fold(Events))",
      "description": "Rebuilding entity state by replaying historical events from origin.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s2",
      "label": "State Snapshotting & Performance Optimization",
      "description": "Periodically saving state snapshots to prevent replaying millions of historical events.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s2_d1",
      "label": "Snapshot Interval Rules (e.g. Every 100 Events)",
      "description": "Persisting compiled entity state snapshots to key-value stores.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s2_d2",
      "label": "Fast Entity Reconstruction (Snapshot + Recent Events)",
      "description": "Loading latest snapshots and replaying only recent subsequent events.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s3",
      "label": "Command Query Responsibility Segregation (CQRS)",
      "description": "Separating read models from write models in Event Sourcing systems.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s3_d1",
      "label": "Command Side (Write Model Validation)",
      "description": "Processing domain commands and generating new event records.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s3_d2",
      "label": "Query Side (Read Model Views)",
      "description": "Building optimized read projections (Elasticsearch, Postgres) from event streams.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s4",
      "label": "Event Revision & Schema Migration Handling",
      "description": "Handling historical event format changes over multi-year lifecycles.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s4_d1",
      "label": "Event Upcasters (In-Memory Transformation)",
      "description": "Transforming legacy event versions to modern schemas during load.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s4_d2",
      "label": "Copy and Replace Event Store Migrations",
      "description": "Rewriting event store streams when breaking schema changes occur.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s5",
      "label": "Auditability & Time-Travel Debugging",
      "description": "Replaying production event logs in dev environments to reproduce bugs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s5_d1",
      "label": "Exact Bug State Reproduction",
      "description": "Replaying real production events up to exact failure timestamps.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t2_s5_d2",
      "label": "Historical Business Analytics Queries",
      "description": "Querying historical application state at any past point in time.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3",
      "label": "Choreography vs Orchestration Sagas",
      "description": "Managing long-running distributed transactions across microservices.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s1",
      "label": "Choreography-Based Sagas (Decentralized Events)",
      "description": "Microservices listening to events and publishing secondary events independently.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s1_d1",
      "label": "Zero Central Orchestrator Dependency",
      "description": "Decoupling services through peer-to-peer event reactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s1_d2",
      "label": "Complexity & Flow Tracking Challenges",
      "description": "Difficulty visualizing overall transaction status across dozens of services.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s2",
      "label": "Orchestration-Based Sagas (Central State Machine)",
      "description": "Central saga orchestrators directing microservices via command messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s2_d1",
      "label": "Explicit Workflow State Visibility",
      "description": "Tracking transaction step progress in a single central state machine.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s2_d2",
      "label": "Command-Response Message Flow",
      "description": "Sending explicit command messages to services and processing results.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s3",
      "label": "Compensating Transactions (Rollback Operations)",
      "description": "Executing undo actions when intermediate saga steps fail.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s3_d1",
      "label": "Equal and Opposite Business Logic (CancelOrder, RefundPayment)",
      "description": "Executing compensating steps to restore consistency.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s3_d2",
      "label": "Eventually Consistent Settlement",
      "description": "Accepting temporary inconsistent states during saga execution.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s4",
      "label": "Idempotent Saga Step Execution",
      "description": "Ensuring saga steps and compensating actions can be safely retried.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s4_d1",
      "label": "Idempotency Key Tracking",
      "description": "Preventing duplicate execution of financial or inventory actions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s4_d2",
      "label": "State Transition Verification Checks",
      "description": "Verifying current step status before executing actions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s5",
      "label": "Deadlock & Race Condition Avoidance",
      "description": "Preventing concurrent saga executions from locking identical business resources.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s5_d1",
      "label": "Resource Lock Reservations",
      "description": "Placing temporary holds on inventory items during saga execution.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t3_s5_d2",
      "label": "Saga Execution Timeout Rollbacks",
      "description": "Triggering compensating workflows automatically when steps stall.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4",
      "label": "Stream Processing Topologies (Kafka Streams & Flink)",
      "description": "Executing continuous real-time transformations and aggregations on event streams.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s1",
      "label": "Stateful Stream Processing & RocksDB State Stores",
      "description": "Maintaining local embedded state stores for windowed aggregations.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s1_d1",
      "label": "Embedded RocksDB Storage Engine",
      "description": "Storing stream state locally on fast SSDs without external DB queries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s1_d2",
      "label": "Changelog Topic Backup Streams",
      "description": "Backing up local RocksDB mutations to Kafka changelog topics for fault tolerance.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s2",
      "label": "Windowing Strategies (Tumbling, Hopping, Sliding, Session)",
      "description": "Grouping continuous event streams into discrete time windows for aggregation.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s2_d1",
      "label": "Tumbling Windows (Fixed Non-Overlapping)",
      "description": "Aggregating events into fixed contiguous windows (e.g. 5-minute blocks).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s2_d2",
      "label": "Session Windows (Inactivity Gap Bounded)",
      "description": "Grouping events dynamically based on gaps of inactivity.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s3",
      "label": "Event-Time vs Processing-Time vs Ingestion-Time",
      "description": "Distinguishing event occurrence time from broker ingestion and processing time.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s3_d1",
      "label": "Event-Time Timestamp Processing",
      "description": "Processing records using original event generation timestamps.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s3_d2",
      "label": "Handling Out-of-Order & Late Arriving Events",
      "description": "Managing network delays using watermark thresholds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s4",
      "label": "Watermarks & Allowed Lateness Bounds",
      "description": "Advancing stream time progress and handling delayed records.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s4_d1",
      "label": "Watermark Progress Indicators",
      "description": "Asserting that no further events with earlier timestamps will arrive.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s4_d2",
      "label": "Side Output Routing for Late Events",
      "description": "Routing extremely late events to secondary streams for auditing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s5",
      "label": "Stream-Table Joins (KStream - KTable)",
      "description": "Joining real-time event streams against state table projections.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s5_d1",
      "label": "Event Enrichment Projections",
      "description": "Enriching user clickstream events with user profile metadata.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t4_s5_d2",
      "label": "Co-partitioned Topic Requirements",
      "description": "Requiring joined streams to share identical partition counts and keys.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5",
      "label": "Event-Driven Architectural Topologies Topic 5",
      "description": "Detailed first-principles mechanics for Event-Driven Architectural Topologies topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s1",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s1_d1",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s1_d2",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s2",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s2_d1",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s2_d2",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s3",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s3_d1",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s3_d2",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s4",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s4_d1",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s4_d2",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s5",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s5_d1",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t5_s5_d2",
      "label": "Event-Driven Architectural Topologies Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6",
      "label": "Event-Driven Architectural Topologies Topic 6",
      "description": "Detailed first-principles mechanics for Event-Driven Architectural Topologies topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s1",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s1_d1",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s1_d2",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s2",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s2_d1",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s2_d2",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s3",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s3_d1",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s3_d2",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s4",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s4_d1",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s4_d2",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s5",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven Architectural Topologies Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s5_d1",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p5_t6_s5_d2",
      "label": "Event-Driven Architectural Topologies Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven Architectural Topologies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6",
      "label": "Message Delivery Semantics & Idempotency",
      "description": "At-least-once, at-most-once, and exactly-once delivery guarantees, deduplication, and transactional boundaries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1",
      "label": "Delivery Guarantee Spectrum",
      "description": "Analyzing architectural trade-offs across message delivery guarantee modes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s1",
      "label": "At-Most-Once Delivery (Fire-and-Forget)",
      "description": "Messages are delivered at most once; packets may be lost but are never duplicated.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s1_d1",
      "label": "Zero Acknowledgment Waits",
      "description": "Publishing messages without waiting for broker ACKs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s1_d2",
      "label": "Maximum Throughput & Lowest Latency",
      "description": "Ideal for non-critical metrics and telemetry data streams.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s2",
      "label": "At-Least-Once Delivery (Standard Reliable Messaging)",
      "description": "Messages are guaranteed to arrive, but network retries may cause duplicate deliveries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s2_d1",
      "label": "ACK & Retry Loop Mechanics",
      "description": "Retrying message delivery until explicit acknowledgments are received.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s2_d2",
      "label": "Consumer Idempotency Requirement",
      "description": "Requiring consumers to handle duplicate messages safely.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s3",
      "label": "Exactly-Once Delivery (EOS)",
      "description": "Messages are processed exactly once end-to-end without loss or duplication.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s3_d1",
      "label": "Combined Producer & Consumer Coordination",
      "description": "Combining idempotent producers, transactions, and consumer offset tracking.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s3_d2",
      "label": "Higher Processing & Latency Overhead",
      "description": "Accepting performance trade-offs for financial correctness.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s4",
      "label": "Network Partition Impact on Guarantees",
      "description": "Evaluating CAP theorem trade-offs during network split-brain scenarios.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s4_d1",
      "label": "Consistency vs Availability Choices",
      "description": "Choosing between pausing writes (CP) or accepting duplicates/stale data (AP).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s4_d2",
      "label": "Fencing Off Stale Leaders",
      "description": "Preventing isolated brokers from accepting invalid writes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s5",
      "label": "End-to-End Application-Level Guarantees",
      "description": "Recognizing that broker delivery guarantees must extend into application logic.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s5_d1",
      "label": "Database Transactional Boundaries",
      "description": "Committing message processing alongside database mutations.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t1_s5_d2",
      "label": "External API Side-Effect Considerations",
      "description": "Handling non-idempotent third-party HTTP calls during retries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2",
      "label": "Consumer Deduplication & Idempotency Keys",
      "description": "Designing consumer applications to process duplicate messages safely.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s1",
      "label": "Unique Message ID Header Injection",
      "description": "Attaching cryptographically unique identifiers (UUIDv4, ULID) to published messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s1_d1",
      "label": "Producer-Assigned Message IDs",
      "description": "Generating IDs at origin before network transmission.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s1_d2",
      "label": "Deterministic Content Hashes",
      "description": "Hashing message payloads to derive duplicate detection keys.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s2",
      "label": "Processed Message Key Caching (Redis / DB)",
      "description": "Storing processed message IDs in fast key-value stores.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s2_d1",
      "label": "Atomic SETNX (Set If Not Exists) Checks",
      "description": "Verifying message ID uniqueness before executing business logic.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s2_d2",
      "label": "Cache Expiration Time-to-Live (TTL)",
      "description": "Retaining message IDs in cache longer than maximum retry windows.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s3",
      "label": "Database Unique Constraint Enforcement",
      "description": "Leveraging SQL unique index constraints to block duplicate insertions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s3_d1",
      "label": "INSERT ON CONFLICT DO NOTHING Syntax",
      "description": "Ignoring duplicate record insertions gracefully at the database layer.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s3_d2",
      "label": "Zero Application-Level Race Conditions",
      "description": "Delegating concurrency safety to ACID database engines.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s4",
      "label": "Idempotent Business Logic Design",
      "description": "Structuring application mutations to be inherently idempotent.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s4_d1",
      "label": "Absolute State Assignments (Set Balance = 100)",
      "description": "Replacing relative operations (Add 10) with absolute updates.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s4_d2",
      "label": "Natural Key Uniqueness Rules",
      "description": "Using business natural keys (invoice_number, payment_intent_id).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s5",
      "label": "Read-Side Idempotency Verification",
      "description": "Verifying current entity state before executing mutations.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s5_d1",
      "label": "Status Guard Conditions (if status == PENDING)",
      "description": "Executing state transitions only from valid prerequisite states.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t2_s5_d2",
      "label": "Safe Multi-Delivery Handling",
      "description": "Returning existing results safely when duplicate requests arrive.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3",
      "label": "Transaction Isolation & Commit Boundaries",
      "description": "Managing transaction boundaries across messaging systems and databases.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s1",
      "label": "Two-Phase Commit (2PC) Protocol Overhead",
      "description": "Coordinating transactions across independent distributed systems.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s1_d1",
      "label": "Prepare & Commit Phase Handshakes",
      "description": "Voting on transaction readiness before executing final commits.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s1_d2",
      "label": "Blocking Lock Drawbacks",
      "description": "Holding database locks open during network phase waits.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s2",
      "label": "Local Transaction Outbox Processing",
      "description": "Replacing 2PC with local database outbox tables.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s2_d1",
      "label": "Single-Database Acid Commit Scope",
      "description": "Saving entity updates and outbox events together.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s2_d2",
      "label": "Asynchronous Relay to Broker",
      "description": "Decoupling messaging network I/O from core database transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s3",
      "label": "Kafka Transactional API Deep Dive",
      "description": "Executing multi-partition atomic writes via Kafka transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s3_d1",
      "label": "initTransactions() & beginTransaction() Calls",
      "description": "Registering producer transactional sessions with brokers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s3_d2",
      "label": "sendOffsetsToTransaction() Helper",
      "description": "Committing consumer offsets inside the producer transaction.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s4",
      "label": "Read Uncommitted Side Effects",
      "description": "Managing risks associated with consumers reading uncommitted event data.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s4_d1",
      "label": "Dirty Read Anomalies",
      "description": "Processing messages from transactions that are later aborted.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s4_d2",
      "label": "Enforcing read_committed Isolation Level",
      "description": "Hiding uncommitted records from downstream consumers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s5",
      "label": "Zombie Producer Fencing (Epoch Tokens)",
      "description": "Preventing isolated former leader producers from committing stale transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s5_d1",
      "label": "Monotonically Increasing Epoch Counters",
      "description": "Bumping producer epoch numbers on transaction initialization.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t3_s5_d2",
      "label": "Fencing Stale Epoch Writes",
      "description": "Rejecting requests containing older producer epoch tokens.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4",
      "label": "Ordering Guarantees & Concurrency Constraints",
      "description": "Preserving message order across distributed partitions and parallel workers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s1",
      "label": "Per-Partition Single-Threaded Ordering",
      "description": "Guaranteeing strict sequential order within individual topic partitions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s1_d1",
      "label": "Partition Key Hashing (murmur2(key) % numPartitions)",
      "description": "Routing related events to identical partitions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s1_d2",
      "label": "Single Consumer Worker Per Partition",
      "description": "Enforcing single-threaded processing per partition.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s2",
      "label": "Global Cross-Partition Ordering Limits",
      "description": "Recognizing that total global order across all partitions is non-viable at scale.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s2_d1",
      "label": "Single-Partition Throughput Bottleneck",
      "description": "Restricting topics to 1 partition to achieve global order caps throughput.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s2_d2",
      "label": "Partial Ordering Acceptability",
      "description": "Structuring systems to require order only per entity key.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s3",
      "label": "In-Flight Message Limits (max.in.flight.requests.per.connection)",
      "description": "Configuring producer pipeline depth to preserve order during retries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s3_d1",
      "label": "Setting max.in.flight = 1 for Strict Order",
      "description": "Preventing message reordering when retry attempts occur.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s3_d2",
      "label": "Idempotent Producer Multi-In-Flight Safety",
      "description": "Allowing up to 5 in-flight requests safely when idempotency is enabled.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s4",
      "label": "Out-of-Order Message Re-sequencing Buffers",
      "description": "Re-ordering late messages in memory using sequence numbers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s4_d1",
      "label": "Priority Queue Re-sequencing Buffers",
      "description": "Holding arrived messages until missing sequence numbers arrive.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s4_d2",
      "label": "Bounded Wait Timeout Release",
      "description": "Processing buffered items when wait timeouts expire.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s5",
      "label": "Concurrency Rescaling & Key Redistribution",
      "description": "Managing ordering challenges when adding new topic partitions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s5_d1",
      "label": "Partition Count Immutable Key Mapping",
      "description": "Changing partition counts alters key-to-partition assignments.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t4_s5_d2",
      "label": "Custom Consistent Hashing Routers",
      "description": "Using consistent hashing to minimize key migration during scale-out.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5",
      "label": "Message Delivery Semantics & Idempotency Topic 5",
      "description": "Detailed first-principles mechanics for Message Delivery Semantics & Idempotency topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s1",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s1_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s1_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s2",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s2_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s2_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s3",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s3_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s3_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s4",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s4_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s4_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s5",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s5_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t5_s5_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6",
      "label": "Message Delivery Semantics & Idempotency Topic 6",
      "description": "Detailed first-principles mechanics for Message Delivery Semantics & Idempotency topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s1",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s1_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s1_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s2",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s2_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s2_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s3",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s3_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s3_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s4",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s4_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s4_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s5",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Message Delivery Semantics & Idempotency Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s5_d1",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p6_t6_s5_d2",
      "label": "Message Delivery Semantics & Idempotency Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Message Delivery Semantics & Idempotency Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7",
      "label": "Dead-Letter Queues & Error Handling",
      "description": "Poison pill mitigation, exponential backoff, jitter, and automated dead-letter redrive pipelines.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1",
      "label": "Poison Pill Message Mitigation",
      "description": "Handling corrupt payloads that repeatedly crash consumer processing loops.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s1",
      "label": "Infinite Redelivery Crash Loops",
      "description": "Identifying unhandled exceptions that cause messages to be returned to queues infinitely.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s1_d1",
      "label": "CPU & Log Saturation Impact",
      "description": "Consuming worker resources continuously with failing retries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s1_d2",
      "label": "Stalled Partition Consumption",
      "description": "Blocking processing of valid trailing messages in queues.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s2",
      "label": "Max Redelivery Attempt Counter Thresholds",
      "description": "Tracking delivery attempts per message to trigger error routing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s2_d1",
      "label": "Header Delivery Counter (e.g. redelivery_count >= 3)",
      "description": "Incrementing headers on every consumer failure.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s2_d2",
      "label": "Automatic Dead-Letter Queue Transfer",
      "description": "Routing messages to DLQs once retry limits are breached.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s3",
      "label": "Non-Retryable Exception Categorization",
      "description": "Bypassing retries for permanent errors (e.g. JSON parse failure, invalid schema).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s3_d1",
      "label": "Immediate DLQ Routing for Fatal Errors",
      "description": "Sending corrupt payloads directly to DLQs on first attempt.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s3_d2",
      "label": "Reserving Retries for Transient Errors",
      "description": "Retrying only transient network and database timeouts.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s4",
      "label": "Poison Pill Isolation Workflows",
      "description": "Quarantining bad records without halting main processing pipelines.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s4_d1",
      "label": "Subnet DLQ Quarantining",
      "description": "Isolating bad payloads into separate storage namespaces.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s4_d2",
      "label": "Un-blocking Stream Progress",
      "description": "Acknowledging failing messages in main streams post-DLQ write.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s5",
      "label": "Alerting on DLQ Ingestion Rates",
      "description": "Monitoring dead-letter queue depth and arrival velocity.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s5_d1",
      "label": "Prometheus DLQ Depth Alerts",
      "description": "Triggering PagerDuty alerts when DLQ message counts exceed zero.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t1_s5_d2",
      "label": "Anomaly Rate Threshold Warnings",
      "description": "Detecting sudden spikes in processing failures.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2",
      "label": "Exponential Backoff & Jitter Algorithms",
      "description": "Scheduling retries dynamically to prevent thundering herd overload on downstream systems.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s1",
      "label": "Exponential Backoff Mathematical Formula",
      "description": "Increasing delay times exponentially per attempt: Delay = Base * (2 ^ Attempt).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s1_d1",
      "label": "Progressive Retry Delays (1s, 2s, 4s, 8s, 16s)",
      "description": "Giving failing downstream services time to recover.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s1_d2",
      "label": "Maximum Cap Limits (e.g. max_delay = 300s)",
      "description": "Bounding backoff growth to maintain reasonable retry windows.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s2",
      "label": "Full Jitter Randomization (AWS Recommended)",
      "description": "Randomizing backoff delays to desynchronize concurrent retrying clients.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s2_d1",
      "label": "Formula Sleep = Random(0, Min(Max_Backoff, Base * 2^Attempt))",
      "description": "Spreading retry requests evenly over time.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s2_d2",
      "label": "Thundering Herd Suppression",
      "description": "Preventing thousands of workers from retrying simultaneously.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s3",
      "label": "Equal Jitter & Decorrelated Jitter Variants",
      "description": "Alternative randomization algorithms balancing structural sleep times with random noise.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s3_d1",
      "label": "Equal Jitter Formula Sleep = Half + Random(0, Half)",
      "description": "Guaranteeing a minimum sleep duration alongside random variance.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s3_d2",
      "label": "Decorrelated Jitter (Sleep = Min(Max, Random(Base, Sleep * 3)))",
      "description": "Calculating next sleep times based on previous sleep values.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s4",
      "label": "Retry Topic Queues (Delayed Processing Topics)",
      "description": "Implementing backoff delays using dedicated intermediate retry topics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s4_d1",
      "label": "Topic Per Delay Tier (retry-1s, retry-10s, retry-60s)",
      "description": "Routing messages through stepped retry topics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s4_d2",
      "label": "Non-Blocking Main Consumer Loop",
      "description": "Offloading retries to background topics to keep main consumers free.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s5",
      "label": "Circuit Breaker Integration (Resilience4j / Hystrix)",
      "description": "Halting retries entirely when downstream services are completely offline.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s5_d1",
      "label": "State Transitions (Closed -> Open -> Half-Open)",
      "description": "Tripping circuit breakers open after consecutive failure thresholds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t2_s5_d2",
      "label": "Immediate Fail-Fast Execution",
      "description": "Failing requests instantly while circuit breakers remain Open.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3",
      "label": "Dead-Letter Queue Redrive & Inspection Tools",
      "description": "Operating administrative pipelines to inspect, fix, and replay dead-lettered messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s1",
      "label": "DLQ Payload Inspection Interfaces",
      "description": "Examining failed message contents, headers, and exception stack traces.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s1_d1",
      "label": "Error Context Metadata Inspection",
      "description": "Reading attached exception names and failed timestamp headers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s1_d2",
      "label": "Payload Formatting & Search Tools",
      "description": "Searching DLQ contents by transaction or user ID.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s2",
      "label": "Automated & Manual Redrive Workflows",
      "description": "Re-injecting corrected DLQ messages back into primary input topics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s2_d1",
      "label": "Bulk Redrive CLI Operations",
      "description": "Streaming DLQ messages back to source topics after bug fixes are deployed.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s2_d2",
      "label": "Selective Message Filtering & Replay",
      "description": "Replaying specific filtered subsets of dead-lettered messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s3",
      "label": "Payload Editing Prior to Redrive",
      "description": "Modifying corrupt payload JSON fields before re-publishing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s3_d1",
      "label": "Schema Correction Pre-Processing",
      "description": "Fixing malformed JSON syntax or missing required keys.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s3_d2",
      "label": "Audit Logging of Modified Replays",
      "description": "Recording administrative edits applied during manual redrives.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s4",
      "label": "Purge & Archive Utilities",
      "description": "Clearing un-fixable dead-letter messages safely.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s4_d1",
      "label": "S3 Archival Before Purging",
      "description": "Exporting un-processable messages to cold S3 storage before deletion.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s4_d2",
      "label": "Bulk Queue Purge Safeguards",
      "description": "Requiring multi-factor confirmation before executing queue purges.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s5",
      "label": "DLQ Replay Loop Prevention",
      "description": "Preventing redriven messages from cycling endlessly between main topics and DLQs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s5_d1",
      "label": "Redrive Count Header Enforcement",
      "description": "Tracking total redrive attempts in message metadata.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t3_s5_d2",
      "label": "Final Terminal Storage Destinations",
      "description": "Moving repeatedly failing redriven messages to permanent cold storage.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4",
      "label": "Side-Queue & Parking Lot Topologies",
      "description": "Advanced error handling patterns for complex enterprise processing pipelines.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s1",
      "label": "Parking Lot Queue Pattern",
      "description": "Isolating messages requiring manual human intervention out-of-band.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s1_d1",
      "label": "Long-Term Quarantine Storage",
      "description": "Holding messages that failed all automated retry and DLQ steps.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s1_d2",
      "label": "Customer Support Portal Integration",
      "description": "Exposing parking lot records to support teams for manual resolution.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s2",
      "label": "Side-Channel Audit & Compliance Logging",
      "description": "Streaming all execution failures to central compliance archives.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s2_d1",
      "label": "Immutable Security Audit Trail",
      "description": "Logging every failed delivery attempt for regulatory compliance.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s2_d2",
      "label": "SIEM Threat Intelligence Integration",
      "description": "Detecting potential attack patterns in failed message payloads.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s3",
      "label": "Graceful Degradation Fallbacks",
      "description": "Executing fallback business logic when primary processing fails.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s3_d1",
      "label": "Cached Default Value Returns",
      "description": "Serving cached default responses when real-time enrichments fail.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s3_d2",
      "label": "Degraded Mode Execution Pathways",
      "description": "Fulfilling core actions while deferring non-critical sub-tasks.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s4",
      "label": "Rate-Limited Error Handler Workers",
      "description": "Processing retries at lower concurrency to avoid impacting main workloads.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s4_d1",
      "label": "Isolated Low-Priority Worker Pools",
      "description": "Allocating restricted compute resources to error processing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s4_d2",
      "label": "Preventing Resource Contention",
      "description": "Ensuring retry processing does not starve primary message flows.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s5",
      "label": "Error Handling Telemetry & SLO Tracking",
      "description": "Measuring overall system reliability and error rates.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s5_d1",
      "label": "Success vs Error Rate Percentage KPIs",
      "description": "Monitoring successful processing ratios against SLO targets.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t4_s5_d2",
      "label": "Automated Alerting on Reliability Drops",
      "description": "Triggering alerts when failure rates exceed acceptable bounds.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5",
      "label": "Dead-Letter Queues & Error Handling Topic 5",
      "description": "Detailed first-principles mechanics for Dead-Letter Queues & Error Handling topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s1",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s1_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s1_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s2",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s2_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s2_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s3",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s3_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s3_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s4",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s4_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s4_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s5",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s5_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t5_s5_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6",
      "label": "Dead-Letter Queues & Error Handling Topic 6",
      "description": "Detailed first-principles mechanics for Dead-Letter Queues & Error Handling topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s1",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s1_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s1_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s2",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s2_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s2_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s3",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s3_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s3_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s4",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s4_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s4_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s5",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Dead-Letter Queues & Error Handling Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s5_d1",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p7_t6_s5_d2",
      "label": "Dead-Letter Queues & Error Handling Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Dead-Letter Queues & Error Handling Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8",
      "label": "Broker Observability & Metrics",
      "description": "Monitoring consumer lag, partition balancing, disk IOPS limits, and open-telemetry event tracing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1",
      "label": "Consumer Group Lag Monitoring",
      "description": "Tracking the gap between latest published offsets and current consumer read positions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s1",
      "label": "Lag Metric Calculation (Log End Offset - Consumer Offset)",
      "description": "Measuring unread message counts per partition.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s1_d1",
      "label": "Partition-Level Lag Tracking",
      "description": "Identifying specific partitions falling behind in message processing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s1_d2",
      "label": "Total Consumer Group Aggregate Lag",
      "description": "Summing lag across all partitions to measure overall backlog size.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s2",
      "label": "Burrow / Kafka Exporter Lag Monitoring",
      "description": "Evaluating consumer health using sliding window trend analysis.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s2_d1",
      "label": "Status Evaluation (OK, WARN, ERR, STALLED)",
      "description": "Detecting stalled consumers even when offsets are moving slowly.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s2_d2",
      "label": "Storm-Commencing Lag Spike Detection",
      "description": "Alerting on rapid lag growth before memory limits are breached.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s3",
      "label": "Time-Based Estimated Lag (Time Behind Latest)",
      "description": "Translating message count lag into estimated processing delay time.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s3_d1",
      "label": "Consumer Read Rate Calculation",
      "description": "Dividing lag count by current consumption rate (msgs/sec).",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s3_d2",
      "label": "Estimated Time to Catch Up (ETA)",
      "description": "Estimating time required to clear backlogs during traffic spikes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s4",
      "label": "Autoscaling Triggers Based on Lag (KEDA)",
      "description": "Scaling consumer worker pods automatically based on queue lag metrics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s4_d1",
      "label": "Kubernetes Event-driven Autoscaling (KEDA)",
      "description": "Scaling deployment replicas dynamically using Prometheus lag metrics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s4_d2",
      "label": "Max Scale Bound to Partition Count",
      "description": "Capping consumer replicas to partition count to prevent idle workers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s5",
      "label": "Stalled Consumer Detection Rules",
      "description": "Detecting frozen consumer threads that fail to commit offsets.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s5_d1",
      "label": "Zero Offset Advance Alerts",
      "description": "Alerting when consumer offsets remain static while log end offsets grow.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t1_s5_d2",
      "label": "Automated Pod Restart Triggers",
      "description": "Restarting stuck consumer pods automatically via health checks.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2",
      "label": "Broker Hardware & Resource Metrics",
      "description": "Monitoring CPU, RAM, disk I/O, and network bandwidth saturation across broker nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s1",
      "label": "Disk I/O Utilization & Queue Depth",
      "description": "Monitoring disk I/O bottlenecks impacting log append and fetch performance.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s1_d1",
      "label": "%util & await Disk Metrics",
      "description": "Tracking disk saturation percentages and average I/O wait times.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s1_d2",
      "label": "Separate Journal / Log Disks Strategy",
      "description": "Isolating write logs from read storage to eliminate disk contention.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s2",
      "label": "Network Bandwidth Ingress / Egress Saturation",
      "description": "Monitoring NIC bandwidth limits on high-throughput broker nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s2_d1",
      "label": "Replication Egress Multiplier Impact",
      "description": "Accounting for network bandwidth multiplied by replication factors.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s2_d2",
      "label": "NIC Buffer Dropped Packet Metrics",
      "description": "Detecting packet drops at network interfaces during traffic bursts.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s3",
      "label": "JVM Garbage Collection & Heap Tuning (Kafka / Pulsar)",
      "description": "Monitoring GC pause times on Java-based message brokers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s3_d1",
      "label": "G1GC / ZGC Pause Time Tracking",
      "description": "Monitoring GC pauses to prevent broker heartbeats from timing out.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s3_d2",
      "label": "Off-Heap Direct Memory Allocations",
      "description": "Allocating network buffers off-heap to keep JVM heap sizes manageable.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s4",
      "label": "PageCache Hit Ratio & Disk Read Monitoring",
      "description": "Ensuring consumer reads are served directly from OS RAM PageCache.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s4_d1",
      "label": "Cache Hit Ratio Percentage (Target > 95%)",
      "description": "Monitoring PageCache efficiency to prevent expensive physical disk reads.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s4_d2",
      "label": "Catch-up Consumer Disk I/O Pollution",
      "description": "Managing disk read spikes caused by historical catch-up consumers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s5",
      "label": "Open File Descriptors & Socket Limits",
      "description": "Monitoring operating system file handle and socket limits on broker nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s5_d1",
      "label": "ulimit -n File Descriptor Caps",
      "description": "Increasing file handle limits to support thousands of active log segments and connections.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t2_s5_d2",
      "label": "Socket Buffer Size Tuning (rmem_max / wmem_max)",
      "description": "Tuning OS network memory buffers for high-bandwidth connections.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3",
      "label": "OpenTelemetry Distributed Event Tracing",
      "description": "Tracing event paths across producers, brokers, and multi-tier consumer microservices.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s1",
      "label": "W3C Trace Context Propagation in Headers",
      "description": "Injecting traceparent and tracestate identifiers into message headers.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s1_d1",
      "label": "traceparent Header Syntax (version-traceid-parentid-flags)",
      "description": "Carrying 128-bit trace IDs across messaging boundaries.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s1_d2",
      "label": "Producer Context Injection",
      "description": "Injecting active OpenTelemetry trace contexts when publishing messages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s2",
      "label": "Span Creation Across Produce, Broker, and Consume",
      "description": "Generating distributed tracing spans for messaging lifecycle events.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s2_d1",
      "label": "PRODUCE & PROCESS Span Kinds",
      "description": "Creating distinct spans for message publishing, broker queueing, and consumer processing.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s2_d2",
      "label": "Parent-Child Span Relationship Links",
      "description": "Linking consumer processing spans back to initiating producer spans.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s3",
      "label": "End-to-End Processing Latency Breakdown",
      "description": "Visualizing exact time spent in publishing, queue waiting, and processing phases.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s3_d1",
      "label": "Queue Wait Time Measurement",
      "description": "Calculating time elapsed between message enqueue and consumer fetch.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s3_d2",
      "label": "Pinpointing Bottleneck Components",
      "description": "Identifying slow downstream microservices in complex event flows.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s4",
      "label": "Jaeger / Zipkin Trace Visualization",
      "description": "Rendering end-to-end waterfall flame graphs of distributed event transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s4_d1",
      "label": "Distributed Transaction Waterfall Graphs",
      "description": "Displaying multi-service execution paths on unified timelines.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s4_d2",
      "label": "Correlating Error Logs with Trace IDs",
      "description": "Linking application error logs directly to specific message trace IDs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s5",
      "label": "Sampling Strategies for High-Volume Streams",
      "description": "Configuring trace sampling to balance observability against storage costs.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s5_d1",
      "label": "Probabilistic Head-Based Sampling (e.g. 1%)",
      "description": "Sampling a fixed percentage of event traces at origin.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t3_s5_d2",
      "label": "Tail-Based Collector Sampling",
      "description": "Retaining 100% of error traces while sampling successful transactions.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4",
      "label": "Partition Balancing & Cluster Health",
      "description": "Monitoring partition distribution and cluster health across broker nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s1",
      "label": "Partition Count & Leader Distribution Health",
      "description": "Ensuring topic partitions and leaders are distributed evenly across nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s1_d1",
      "label": "Leader Skew Detection",
      "description": "Alerting when single brokers host a disproportionated count of partition leaders.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s1_d2",
      "label": "Automated Preferred Leader Election",
      "description": "Rebalancing partition leadership back to preferred default nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s2",
      "label": "Under-Replicated Partitions (URP) Alerts",
      "description": "Monitoring partitions where follower replicas fail to keep up with leaders.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s2_d1",
      "label": "URP Count Metric (Target = 0)",
      "description": "Triggering high-priority alerts when under-replicated partition counts rise above zero.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s2_d2",
      "label": "Identifying Failing Disk or Network Nodes",
      "description": "Pinpointing degraded hardware causing replication delays.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s3",
      "label": "Cruise Control Automated Cluster Rebalancing",
      "description": "Automating Kafka cluster rebalancing based on workload metrics.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s3_d1",
      "label": "Multi-Goal Optimization Solvers",
      "description": "Optimizing disk, CPU, and network utilization across all broker nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s3_d2",
      "label": "Automated Self-Healing Node Rebalancing",
      "description": "Moving partition replicas away from failing or overloaded brokers automatically.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s4",
      "label": "Disk Capacity Threshold Alarms",
      "description": "Monitoring broker disk space to prevent out-of-space crashes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s4_d1",
      "label": "80% Disk Capacity Warning Thresholds",
      "description": "Alerting operators before disk space exhaustion triggers broker shutdown.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s4_d2",
      "label": "Automated Emergency Topic Retention Reductions",
      "description": "Reducing historical retention times temporarily during emergency disk space shortages.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s5",
      "label": "Metadata Store Health (KRaft / ZooKeeper / etcd)",
      "description": "Monitoring response latency and stability of metadata consensus clusters.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s5_d1",
      "label": "Consensus Quorum Sync Latency",
      "description": "Tracking latency of metadata replication across quorum nodes.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t4_s5_d2",
      "label": "Flapping Connection Detection",
      "description": "Detecting unstable network links causing metadata quorum instability.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5",
      "label": "Broker Observability & Metrics Topic 5",
      "description": "Detailed first-principles mechanics for Broker Observability & Metrics topic 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s1",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s1_d1",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s1_d2",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s2",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s2_d1",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s2_d2",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s3",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s3_d1",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s3_d2",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s4",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s4_d1",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s4_d2",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s5",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s5_d1",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t5_s5_d2",
      "label": "Broker Observability & Metrics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6",
      "label": "Broker Observability & Metrics Topic 6",
      "description": "Detailed first-principles mechanics for Broker Observability & Metrics topic 6.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s1",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s1_d1",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s1_d2",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s2",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s2_d1",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s2_d2",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s3",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s3_d1",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s3_d2",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s4",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s4_d1",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s4_d2",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s5",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Broker Observability & Metrics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s5_d1",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "brokers_root_p8_t6_s5_d2",
      "label": "Broker Observability & Metrics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Broker Observability & Metrics Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "brokers_root",
      "target": "brokers_root_p1"
    },
    {
      "source": "brokers_root_p1",
      "target": "brokers_root_p1_t1"
    },
    {
      "source": "brokers_root_p1_t1",
      "target": "brokers_root_p1_t1_s1"
    },
    {
      "source": "brokers_root_p1_t1_s1",
      "target": "brokers_root_p1_t1_s1_d1"
    },
    {
      "source": "brokers_root_p1_t1_s1",
      "target": "brokers_root_p1_t1_s1_d2"
    },
    {
      "source": "brokers_root_p1_t1",
      "target": "brokers_root_p1_t1_s2"
    },
    {
      "source": "brokers_root_p1_t1_s2",
      "target": "brokers_root_p1_t1_s2_d1"
    },
    {
      "source": "brokers_root_p1_t1_s2",
      "target": "brokers_root_p1_t1_s2_d2"
    },
    {
      "source": "brokers_root_p1_t1",
      "target": "brokers_root_p1_t1_s3"
    },
    {
      "source": "brokers_root_p1_t1_s3",
      "target": "brokers_root_p1_t1_s3_d1"
    },
    {
      "source": "brokers_root_p1_t1_s3",
      "target": "brokers_root_p1_t1_s3_d2"
    },
    {
      "source": "brokers_root_p1_t1",
      "target": "brokers_root_p1_t1_s4"
    },
    {
      "source": "brokers_root_p1_t1_s4",
      "target": "brokers_root_p1_t1_s4_d1"
    },
    {
      "source": "brokers_root_p1_t1_s4",
      "target": "brokers_root_p1_t1_s4_d2"
    },
    {
      "source": "brokers_root_p1_t1",
      "target": "brokers_root_p1_t1_s5"
    },
    {
      "source": "brokers_root_p1_t1_s5",
      "target": "brokers_root_p1_t1_s5_d1"
    },
    {
      "source": "brokers_root_p1_t1_s5",
      "target": "brokers_root_p1_t1_s5_d2"
    },
    {
      "source": "brokers_root_p1",
      "target": "brokers_root_p1_t2"
    },
    {
      "source": "brokers_root_p1_t2",
      "target": "brokers_root_p1_t2_s1"
    },
    {
      "source": "brokers_root_p1_t2_s1",
      "target": "brokers_root_p1_t2_s1_d1"
    },
    {
      "source": "brokers_root_p1_t2_s1",
      "target": "brokers_root_p1_t2_s1_d2"
    },
    {
      "source": "brokers_root_p1_t2",
      "target": "brokers_root_p1_t2_s2"
    },
    {
      "source": "brokers_root_p1_t2_s2",
      "target": "brokers_root_p1_t2_s2_d1"
    },
    {
      "source": "brokers_root_p1_t2_s2",
      "target": "brokers_root_p1_t2_s2_d2"
    },
    {
      "source": "brokers_root_p1_t2",
      "target": "brokers_root_p1_t2_s3"
    },
    {
      "source": "brokers_root_p1_t2_s3",
      "target": "brokers_root_p1_t2_s3_d1"
    },
    {
      "source": "brokers_root_p1_t2_s3",
      "target": "brokers_root_p1_t2_s3_d2"
    },
    {
      "source": "brokers_root_p1_t2",
      "target": "brokers_root_p1_t2_s4"
    },
    {
      "source": "brokers_root_p1_t2_s4",
      "target": "brokers_root_p1_t2_s4_d1"
    },
    {
      "source": "brokers_root_p1_t2_s4",
      "target": "brokers_root_p1_t2_s4_d2"
    },
    {
      "source": "brokers_root_p1_t2",
      "target": "brokers_root_p1_t2_s5"
    },
    {
      "source": "brokers_root_p1_t2_s5",
      "target": "brokers_root_p1_t2_s5_d1"
    },
    {
      "source": "brokers_root_p1_t2_s5",
      "target": "brokers_root_p1_t2_s5_d2"
    },
    {
      "source": "brokers_root_p1",
      "target": "brokers_root_p1_t3"
    },
    {
      "source": "brokers_root_p1_t3",
      "target": "brokers_root_p1_t3_s1"
    },
    {
      "source": "brokers_root_p1_t3_s1",
      "target": "brokers_root_p1_t3_s1_d1"
    },
    {
      "source": "brokers_root_p1_t3_s1",
      "target": "brokers_root_p1_t3_s1_d2"
    },
    {
      "source": "brokers_root_p1_t3",
      "target": "brokers_root_p1_t3_s2"
    },
    {
      "source": "brokers_root_p1_t3_s2",
      "target": "brokers_root_p1_t3_s2_d1"
    },
    {
      "source": "brokers_root_p1_t3_s2",
      "target": "brokers_root_p1_t3_s2_d2"
    },
    {
      "source": "brokers_root_p1_t3",
      "target": "brokers_root_p1_t3_s3"
    },
    {
      "source": "brokers_root_p1_t3_s3",
      "target": "brokers_root_p1_t3_s3_d1"
    },
    {
      "source": "brokers_root_p1_t3_s3",
      "target": "brokers_root_p1_t3_s3_d2"
    },
    {
      "source": "brokers_root_p1_t3",
      "target": "brokers_root_p1_t3_s4"
    },
    {
      "source": "brokers_root_p1_t3_s4",
      "target": "brokers_root_p1_t3_s4_d1"
    },
    {
      "source": "brokers_root_p1_t3_s4",
      "target": "brokers_root_p1_t3_s4_d2"
    },
    {
      "source": "brokers_root_p1_t3",
      "target": "brokers_root_p1_t3_s5"
    },
    {
      "source": "brokers_root_p1_t3_s5",
      "target": "brokers_root_p1_t3_s5_d1"
    },
    {
      "source": "brokers_root_p1_t3_s5",
      "target": "brokers_root_p1_t3_s5_d2"
    },
    {
      "source": "brokers_root_p1",
      "target": "brokers_root_p1_t4"
    },
    {
      "source": "brokers_root_p1_t4",
      "target": "brokers_root_p1_t4_s1"
    },
    {
      "source": "brokers_root_p1_t4_s1",
      "target": "brokers_root_p1_t4_s1_d1"
    },
    {
      "source": "brokers_root_p1_t4_s1",
      "target": "brokers_root_p1_t4_s1_d2"
    },
    {
      "source": "brokers_root_p1_t4",
      "target": "brokers_root_p1_t4_s2"
    },
    {
      "source": "brokers_root_p1_t4_s2",
      "target": "brokers_root_p1_t4_s2_d1"
    },
    {
      "source": "brokers_root_p1_t4_s2",
      "target": "brokers_root_p1_t4_s2_d2"
    },
    {
      "source": "brokers_root_p1_t4",
      "target": "brokers_root_p1_t4_s3"
    },
    {
      "source": "brokers_root_p1_t4_s3",
      "target": "brokers_root_p1_t4_s3_d1"
    },
    {
      "source": "brokers_root_p1_t4_s3",
      "target": "brokers_root_p1_t4_s3_d2"
    },
    {
      "source": "brokers_root_p1_t4",
      "target": "brokers_root_p1_t4_s4"
    },
    {
      "source": "brokers_root_p1_t4_s4",
      "target": "brokers_root_p1_t4_s4_d1"
    },
    {
      "source": "brokers_root_p1_t4_s4",
      "target": "brokers_root_p1_t4_s4_d2"
    },
    {
      "source": "brokers_root_p1_t4",
      "target": "brokers_root_p1_t4_s5"
    },
    {
      "source": "brokers_root_p1_t4_s5",
      "target": "brokers_root_p1_t4_s5_d1"
    },
    {
      "source": "brokers_root_p1_t4_s5",
      "target": "brokers_root_p1_t4_s5_d2"
    },
    {
      "source": "brokers_root_p1",
      "target": "brokers_root_p1_t5"
    },
    {
      "source": "brokers_root_p1_t5",
      "target": "brokers_root_p1_t5_s1"
    },
    {
      "source": "brokers_root_p1_t5_s1",
      "target": "brokers_root_p1_t5_s1_d1"
    },
    {
      "source": "brokers_root_p1_t5_s1",
      "target": "brokers_root_p1_t5_s1_d2"
    },
    {
      "source": "brokers_root_p1_t5",
      "target": "brokers_root_p1_t5_s2"
    },
    {
      "source": "brokers_root_p1_t5_s2",
      "target": "brokers_root_p1_t5_s2_d1"
    },
    {
      "source": "brokers_root_p1_t5_s2",
      "target": "brokers_root_p1_t5_s2_d2"
    },
    {
      "source": "brokers_root_p1_t5",
      "target": "brokers_root_p1_t5_s3"
    },
    {
      "source": "brokers_root_p1_t5_s3",
      "target": "brokers_root_p1_t5_s3_d1"
    },
    {
      "source": "brokers_root_p1_t5_s3",
      "target": "brokers_root_p1_t5_s3_d2"
    },
    {
      "source": "brokers_root_p1_t5",
      "target": "brokers_root_p1_t5_s4"
    },
    {
      "source": "brokers_root_p1_t5_s4",
      "target": "brokers_root_p1_t5_s4_d1"
    },
    {
      "source": "brokers_root_p1_t5_s4",
      "target": "brokers_root_p1_t5_s4_d2"
    },
    {
      "source": "brokers_root_p1_t5",
      "target": "brokers_root_p1_t5_s5"
    },
    {
      "source": "brokers_root_p1_t5_s5",
      "target": "brokers_root_p1_t5_s5_d1"
    },
    {
      "source": "brokers_root_p1_t5_s5",
      "target": "brokers_root_p1_t5_s5_d2"
    },
    {
      "source": "brokers_root_p1",
      "target": "brokers_root_p1_t6"
    },
    {
      "source": "brokers_root_p1_t6",
      "target": "brokers_root_p1_t6_s1"
    },
    {
      "source": "brokers_root_p1_t6_s1",
      "target": "brokers_root_p1_t6_s1_d1"
    },
    {
      "source": "brokers_root_p1_t6_s1",
      "target": "brokers_root_p1_t6_s1_d2"
    },
    {
      "source": "brokers_root_p1_t6",
      "target": "brokers_root_p1_t6_s2"
    },
    {
      "source": "brokers_root_p1_t6_s2",
      "target": "brokers_root_p1_t6_s2_d1"
    },
    {
      "source": "brokers_root_p1_t6_s2",
      "target": "brokers_root_p1_t6_s2_d2"
    },
    {
      "source": "brokers_root_p1_t6",
      "target": "brokers_root_p1_t6_s3"
    },
    {
      "source": "brokers_root_p1_t6_s3",
      "target": "brokers_root_p1_t6_s3_d1"
    },
    {
      "source": "brokers_root_p1_t6_s3",
      "target": "brokers_root_p1_t6_s3_d2"
    },
    {
      "source": "brokers_root_p1_t6",
      "target": "brokers_root_p1_t6_s4"
    },
    {
      "source": "brokers_root_p1_t6_s4",
      "target": "brokers_root_p1_t6_s4_d1"
    },
    {
      "source": "brokers_root_p1_t6_s4",
      "target": "brokers_root_p1_t6_s4_d2"
    },
    {
      "source": "brokers_root_p1_t6",
      "target": "brokers_root_p1_t6_s5"
    },
    {
      "source": "brokers_root_p1_t6_s5",
      "target": "brokers_root_p1_t6_s5_d1"
    },
    {
      "source": "brokers_root_p1_t6_s5",
      "target": "brokers_root_p1_t6_s5_d2"
    },
    {
      "source": "brokers_root",
      "target": "brokers_root_p2"
    },
    {
      "source": "brokers_root_p2",
      "target": "brokers_root_p2_t1"
    },
    {
      "source": "brokers_root_p2_t1",
      "target": "brokers_root_p2_t1_s1"
    },
    {
      "source": "brokers_root_p2_t1_s1",
      "target": "brokers_root_p2_t1_s1_d1"
    },
    {
      "source": "brokers_root_p2_t1_s1",
      "target": "brokers_root_p2_t1_s1_d2"
    },
    {
      "source": "brokers_root_p2_t1",
      "target": "brokers_root_p2_t1_s2"
    },
    {
      "source": "brokers_root_p2_t1_s2",
      "target": "brokers_root_p2_t1_s2_d1"
    },
    {
      "source": "brokers_root_p2_t1_s2",
      "target": "brokers_root_p2_t1_s2_d2"
    },
    {
      "source": "brokers_root_p2_t1",
      "target": "brokers_root_p2_t1_s3"
    },
    {
      "source": "brokers_root_p2_t1_s3",
      "target": "brokers_root_p2_t1_s3_d1"
    },
    {
      "source": "brokers_root_p2_t1_s3",
      "target": "brokers_root_p2_t1_s3_d2"
    },
    {
      "source": "brokers_root_p2_t1",
      "target": "brokers_root_p2_t1_s4"
    },
    {
      "source": "brokers_root_p2_t1_s4",
      "target": "brokers_root_p2_t1_s4_d1"
    },
    {
      "source": "brokers_root_p2_t1_s4",
      "target": "brokers_root_p2_t1_s4_d2"
    },
    {
      "source": "brokers_root_p2_t1",
      "target": "brokers_root_p2_t1_s5"
    },
    {
      "source": "brokers_root_p2_t1_s5",
      "target": "brokers_root_p2_t1_s5_d1"
    },
    {
      "source": "brokers_root_p2_t1_s5",
      "target": "brokers_root_p2_t1_s5_d2"
    },
    {
      "source": "brokers_root_p2",
      "target": "brokers_root_p2_t2"
    },
    {
      "source": "brokers_root_p2_t2",
      "target": "brokers_root_p2_t2_s1"
    },
    {
      "source": "brokers_root_p2_t2_s1",
      "target": "brokers_root_p2_t2_s1_d1"
    },
    {
      "source": "brokers_root_p2_t2_s1",
      "target": "brokers_root_p2_t2_s1_d2"
    },
    {
      "source": "brokers_root_p2_t2",
      "target": "brokers_root_p2_t2_s2"
    },
    {
      "source": "brokers_root_p2_t2_s2",
      "target": "brokers_root_p2_t2_s2_d1"
    },
    {
      "source": "brokers_root_p2_t2_s2",
      "target": "brokers_root_p2_t2_s2_d2"
    },
    {
      "source": "brokers_root_p2_t2",
      "target": "brokers_root_p2_t2_s3"
    },
    {
      "source": "brokers_root_p2_t2_s3",
      "target": "brokers_root_p2_t2_s3_d1"
    },
    {
      "source": "brokers_root_p2_t2_s3",
      "target": "brokers_root_p2_t2_s3_d2"
    },
    {
      "source": "brokers_root_p2_t2",
      "target": "brokers_root_p2_t2_s4"
    },
    {
      "source": "brokers_root_p2_t2_s4",
      "target": "brokers_root_p2_t2_s4_d1"
    },
    {
      "source": "brokers_root_p2_t2_s4",
      "target": "brokers_root_p2_t2_s4_d2"
    },
    {
      "source": "brokers_root_p2_t2",
      "target": "brokers_root_p2_t2_s5"
    },
    {
      "source": "brokers_root_p2_t2_s5",
      "target": "brokers_root_p2_t2_s5_d1"
    },
    {
      "source": "brokers_root_p2_t2_s5",
      "target": "brokers_root_p2_t2_s5_d2"
    },
    {
      "source": "brokers_root_p2",
      "target": "brokers_root_p2_t3"
    },
    {
      "source": "brokers_root_p2_t3",
      "target": "brokers_root_p2_t3_s1"
    },
    {
      "source": "brokers_root_p2_t3_s1",
      "target": "brokers_root_p2_t3_s1_d1"
    },
    {
      "source": "brokers_root_p2_t3_s1",
      "target": "brokers_root_p2_t3_s1_d2"
    },
    {
      "source": "brokers_root_p2_t3",
      "target": "brokers_root_p2_t3_s2"
    },
    {
      "source": "brokers_root_p2_t3_s2",
      "target": "brokers_root_p2_t3_s2_d1"
    },
    {
      "source": "brokers_root_p2_t3_s2",
      "target": "brokers_root_p2_t3_s2_d2"
    },
    {
      "source": "brokers_root_p2_t3",
      "target": "brokers_root_p2_t3_s3"
    },
    {
      "source": "brokers_root_p2_t3_s3",
      "target": "brokers_root_p2_t3_s3_d1"
    },
    {
      "source": "brokers_root_p2_t3_s3",
      "target": "brokers_root_p2_t3_s3_d2"
    },
    {
      "source": "brokers_root_p2_t3",
      "target": "brokers_root_p2_t3_s4"
    },
    {
      "source": "brokers_root_p2_t3_s4",
      "target": "brokers_root_p2_t3_s4_d1"
    },
    {
      "source": "brokers_root_p2_t3_s4",
      "target": "brokers_root_p2_t3_s4_d2"
    },
    {
      "source": "brokers_root_p2_t3",
      "target": "brokers_root_p2_t3_s5"
    },
    {
      "source": "brokers_root_p2_t3_s5",
      "target": "brokers_root_p2_t3_s5_d1"
    },
    {
      "source": "brokers_root_p2_t3_s5",
      "target": "brokers_root_p2_t3_s5_d2"
    },
    {
      "source": "brokers_root_p2",
      "target": "brokers_root_p2_t4"
    },
    {
      "source": "brokers_root_p2_t4",
      "target": "brokers_root_p2_t4_s1"
    },
    {
      "source": "brokers_root_p2_t4_s1",
      "target": "brokers_root_p2_t4_s1_d1"
    },
    {
      "source": "brokers_root_p2_t4_s1",
      "target": "brokers_root_p2_t4_s1_d2"
    },
    {
      "source": "brokers_root_p2_t4",
      "target": "brokers_root_p2_t4_s2"
    },
    {
      "source": "brokers_root_p2_t4_s2",
      "target": "brokers_root_p2_t4_s2_d1"
    },
    {
      "source": "brokers_root_p2_t4_s2",
      "target": "brokers_root_p2_t4_s2_d2"
    },
    {
      "source": "brokers_root_p2_t4",
      "target": "brokers_root_p2_t4_s3"
    },
    {
      "source": "brokers_root_p2_t4_s3",
      "target": "brokers_root_p2_t4_s3_d1"
    },
    {
      "source": "brokers_root_p2_t4_s3",
      "target": "brokers_root_p2_t4_s3_d2"
    },
    {
      "source": "brokers_root_p2_t4",
      "target": "brokers_root_p2_t4_s4"
    },
    {
      "source": "brokers_root_p2_t4_s4",
      "target": "brokers_root_p2_t4_s4_d1"
    },
    {
      "source": "brokers_root_p2_t4_s4",
      "target": "brokers_root_p2_t4_s4_d2"
    },
    {
      "source": "brokers_root_p2_t4",
      "target": "brokers_root_p2_t4_s5"
    },
    {
      "source": "brokers_root_p2_t4_s5",
      "target": "brokers_root_p2_t4_s5_d1"
    },
    {
      "source": "brokers_root_p2_t4_s5",
      "target": "brokers_root_p2_t4_s5_d2"
    },
    {
      "source": "brokers_root_p2",
      "target": "brokers_root_p2_t5"
    },
    {
      "source": "brokers_root_p2_t5",
      "target": "brokers_root_p2_t5_s1"
    },
    {
      "source": "brokers_root_p2_t5_s1",
      "target": "brokers_root_p2_t5_s1_d1"
    },
    {
      "source": "brokers_root_p2_t5_s1",
      "target": "brokers_root_p2_t5_s1_d2"
    },
    {
      "source": "brokers_root_p2_t5",
      "target": "brokers_root_p2_t5_s2"
    },
    {
      "source": "brokers_root_p2_t5_s2",
      "target": "brokers_root_p2_t5_s2_d1"
    },
    {
      "source": "brokers_root_p2_t5_s2",
      "target": "brokers_root_p2_t5_s2_d2"
    },
    {
      "source": "brokers_root_p2_t5",
      "target": "brokers_root_p2_t5_s3"
    },
    {
      "source": "brokers_root_p2_t5_s3",
      "target": "brokers_root_p2_t5_s3_d1"
    },
    {
      "source": "brokers_root_p2_t5_s3",
      "target": "brokers_root_p2_t5_s3_d2"
    },
    {
      "source": "brokers_root_p2_t5",
      "target": "brokers_root_p2_t5_s4"
    },
    {
      "source": "brokers_root_p2_t5_s4",
      "target": "brokers_root_p2_t5_s4_d1"
    },
    {
      "source": "brokers_root_p2_t5_s4",
      "target": "brokers_root_p2_t5_s4_d2"
    },
    {
      "source": "brokers_root_p2_t5",
      "target": "brokers_root_p2_t5_s5"
    },
    {
      "source": "brokers_root_p2_t5_s5",
      "target": "brokers_root_p2_t5_s5_d1"
    },
    {
      "source": "brokers_root_p2_t5_s5",
      "target": "brokers_root_p2_t5_s5_d2"
    },
    {
      "source": "brokers_root_p2",
      "target": "brokers_root_p2_t6"
    },
    {
      "source": "brokers_root_p2_t6",
      "target": "brokers_root_p2_t6_s1"
    },
    {
      "source": "brokers_root_p2_t6_s1",
      "target": "brokers_root_p2_t6_s1_d1"
    },
    {
      "source": "brokers_root_p2_t6_s1",
      "target": "brokers_root_p2_t6_s1_d2"
    },
    {
      "source": "brokers_root_p2_t6",
      "target": "brokers_root_p2_t6_s2"
    },
    {
      "source": "brokers_root_p2_t6_s2",
      "target": "brokers_root_p2_t6_s2_d1"
    },
    {
      "source": "brokers_root_p2_t6_s2",
      "target": "brokers_root_p2_t6_s2_d2"
    },
    {
      "source": "brokers_root_p2_t6",
      "target": "brokers_root_p2_t6_s3"
    },
    {
      "source": "brokers_root_p2_t6_s3",
      "target": "brokers_root_p2_t6_s3_d1"
    },
    {
      "source": "brokers_root_p2_t6_s3",
      "target": "brokers_root_p2_t6_s3_d2"
    },
    {
      "source": "brokers_root_p2_t6",
      "target": "brokers_root_p2_t6_s4"
    },
    {
      "source": "brokers_root_p2_t6_s4",
      "target": "brokers_root_p2_t6_s4_d1"
    },
    {
      "source": "brokers_root_p2_t6_s4",
      "target": "brokers_root_p2_t6_s4_d2"
    },
    {
      "source": "brokers_root_p2_t6",
      "target": "brokers_root_p2_t6_s5"
    },
    {
      "source": "brokers_root_p2_t6_s5",
      "target": "brokers_root_p2_t6_s5_d1"
    },
    {
      "source": "brokers_root_p2_t6_s5",
      "target": "brokers_root_p2_t6_s5_d2"
    },
    {
      "source": "brokers_root",
      "target": "brokers_root_p3"
    },
    {
      "source": "brokers_root_p3",
      "target": "brokers_root_p3_t1"
    },
    {
      "source": "brokers_root_p3_t1",
      "target": "brokers_root_p3_t1_s1"
    },
    {
      "source": "brokers_root_p3_t1_s1",
      "target": "brokers_root_p3_t1_s1_d1"
    },
    {
      "source": "brokers_root_p3_t1_s1",
      "target": "brokers_root_p3_t1_s1_d2"
    },
    {
      "source": "brokers_root_p3_t1",
      "target": "brokers_root_p3_t1_s2"
    },
    {
      "source": "brokers_root_p3_t1_s2",
      "target": "brokers_root_p3_t1_s2_d1"
    },
    {
      "source": "brokers_root_p3_t1_s2",
      "target": "brokers_root_p3_t1_s2_d2"
    },
    {
      "source": "brokers_root_p3_t1",
      "target": "brokers_root_p3_t1_s3"
    },
    {
      "source": "brokers_root_p3_t1_s3",
      "target": "brokers_root_p3_t1_s3_d1"
    },
    {
      "source": "brokers_root_p3_t1_s3",
      "target": "brokers_root_p3_t1_s3_d2"
    },
    {
      "source": "brokers_root_p3_t1",
      "target": "brokers_root_p3_t1_s4"
    },
    {
      "source": "brokers_root_p3_t1_s4",
      "target": "brokers_root_p3_t1_s4_d1"
    },
    {
      "source": "brokers_root_p3_t1_s4",
      "target": "brokers_root_p3_t1_s4_d2"
    },
    {
      "source": "brokers_root_p3_t1",
      "target": "brokers_root_p3_t1_s5"
    },
    {
      "source": "brokers_root_p3_t1_s5",
      "target": "brokers_root_p3_t1_s5_d1"
    },
    {
      "source": "brokers_root_p3_t1_s5",
      "target": "brokers_root_p3_t1_s5_d2"
    },
    {
      "source": "brokers_root_p3",
      "target": "brokers_root_p3_t2"
    },
    {
      "source": "brokers_root_p3_t2",
      "target": "brokers_root_p3_t2_s1"
    },
    {
      "source": "brokers_root_p3_t2_s1",
      "target": "brokers_root_p3_t2_s1_d1"
    },
    {
      "source": "brokers_root_p3_t2_s1",
      "target": "brokers_root_p3_t2_s1_d2"
    },
    {
      "source": "brokers_root_p3_t2",
      "target": "brokers_root_p3_t2_s2"
    },
    {
      "source": "brokers_root_p3_t2_s2",
      "target": "brokers_root_p3_t2_s2_d1"
    },
    {
      "source": "brokers_root_p3_t2_s2",
      "target": "brokers_root_p3_t2_s2_d2"
    },
    {
      "source": "brokers_root_p3_t2",
      "target": "brokers_root_p3_t2_s3"
    },
    {
      "source": "brokers_root_p3_t2_s3",
      "target": "brokers_root_p3_t2_s3_d1"
    },
    {
      "source": "brokers_root_p3_t2_s3",
      "target": "brokers_root_p3_t2_s3_d2"
    },
    {
      "source": "brokers_root_p3_t2",
      "target": "brokers_root_p3_t2_s4"
    },
    {
      "source": "brokers_root_p3_t2_s4",
      "target": "brokers_root_p3_t2_s4_d1"
    },
    {
      "source": "brokers_root_p3_t2_s4",
      "target": "brokers_root_p3_t2_s4_d2"
    },
    {
      "source": "brokers_root_p3_t2",
      "target": "brokers_root_p3_t2_s5"
    },
    {
      "source": "brokers_root_p3_t2_s5",
      "target": "brokers_root_p3_t2_s5_d1"
    },
    {
      "source": "brokers_root_p3_t2_s5",
      "target": "brokers_root_p3_t2_s5_d2"
    },
    {
      "source": "brokers_root_p3",
      "target": "brokers_root_p3_t3"
    },
    {
      "source": "brokers_root_p3_t3",
      "target": "brokers_root_p3_t3_s1"
    },
    {
      "source": "brokers_root_p3_t3_s1",
      "target": "brokers_root_p3_t3_s1_d1"
    },
    {
      "source": "brokers_root_p3_t3_s1",
      "target": "brokers_root_p3_t3_s1_d2"
    },
    {
      "source": "brokers_root_p3_t3",
      "target": "brokers_root_p3_t3_s2"
    },
    {
      "source": "brokers_root_p3_t3_s2",
      "target": "brokers_root_p3_t3_s2_d1"
    },
    {
      "source": "brokers_root_p3_t3_s2",
      "target": "brokers_root_p3_t3_s2_d2"
    },
    {
      "source": "brokers_root_p3_t3",
      "target": "brokers_root_p3_t3_s3"
    },
    {
      "source": "brokers_root_p3_t3_s3",
      "target": "brokers_root_p3_t3_s3_d1"
    },
    {
      "source": "brokers_root_p3_t3_s3",
      "target": "brokers_root_p3_t3_s3_d2"
    },
    {
      "source": "brokers_root_p3_t3",
      "target": "brokers_root_p3_t3_s4"
    },
    {
      "source": "brokers_root_p3_t3_s4",
      "target": "brokers_root_p3_t3_s4_d1"
    },
    {
      "source": "brokers_root_p3_t3_s4",
      "target": "brokers_root_p3_t3_s4_d2"
    },
    {
      "source": "brokers_root_p3_t3",
      "target": "brokers_root_p3_t3_s5"
    },
    {
      "source": "brokers_root_p3_t3_s5",
      "target": "brokers_root_p3_t3_s5_d1"
    },
    {
      "source": "brokers_root_p3_t3_s5",
      "target": "brokers_root_p3_t3_s5_d2"
    },
    {
      "source": "brokers_root_p3",
      "target": "brokers_root_p3_t4"
    },
    {
      "source": "brokers_root_p3_t4",
      "target": "brokers_root_p3_t4_s1"
    },
    {
      "source": "brokers_root_p3_t4_s1",
      "target": "brokers_root_p3_t4_s1_d1"
    },
    {
      "source": "brokers_root_p3_t4_s1",
      "target": "brokers_root_p3_t4_s1_d2"
    },
    {
      "source": "brokers_root_p3_t4",
      "target": "brokers_root_p3_t4_s2"
    },
    {
      "source": "brokers_root_p3_t4_s2",
      "target": "brokers_root_p3_t4_s2_d1"
    },
    {
      "source": "brokers_root_p3_t4_s2",
      "target": "brokers_root_p3_t4_s2_d2"
    },
    {
      "source": "brokers_root_p3_t4",
      "target": "brokers_root_p3_t4_s3"
    },
    {
      "source": "brokers_root_p3_t4_s3",
      "target": "brokers_root_p3_t4_s3_d1"
    },
    {
      "source": "brokers_root_p3_t4_s3",
      "target": "brokers_root_p3_t4_s3_d2"
    },
    {
      "source": "brokers_root_p3_t4",
      "target": "brokers_root_p3_t4_s4"
    },
    {
      "source": "brokers_root_p3_t4_s4",
      "target": "brokers_root_p3_t4_s4_d1"
    },
    {
      "source": "brokers_root_p3_t4_s4",
      "target": "brokers_root_p3_t4_s4_d2"
    },
    {
      "source": "brokers_root_p3_t4",
      "target": "brokers_root_p3_t4_s5"
    },
    {
      "source": "brokers_root_p3_t4_s5",
      "target": "brokers_root_p3_t4_s5_d1"
    },
    {
      "source": "brokers_root_p3_t4_s5",
      "target": "brokers_root_p3_t4_s5_d2"
    },
    {
      "source": "brokers_root_p3",
      "target": "brokers_root_p3_t5"
    },
    {
      "source": "brokers_root_p3_t5",
      "target": "brokers_root_p3_t5_s1"
    },
    {
      "source": "brokers_root_p3_t5_s1",
      "target": "brokers_root_p3_t5_s1_d1"
    },
    {
      "source": "brokers_root_p3_t5_s1",
      "target": "brokers_root_p3_t5_s1_d2"
    },
    {
      "source": "brokers_root_p3_t5",
      "target": "brokers_root_p3_t5_s2"
    },
    {
      "source": "brokers_root_p3_t5_s2",
      "target": "brokers_root_p3_t5_s2_d1"
    },
    {
      "source": "brokers_root_p3_t5_s2",
      "target": "brokers_root_p3_t5_s2_d2"
    },
    {
      "source": "brokers_root_p3_t5",
      "target": "brokers_root_p3_t5_s3"
    },
    {
      "source": "brokers_root_p3_t5_s3",
      "target": "brokers_root_p3_t5_s3_d1"
    },
    {
      "source": "brokers_root_p3_t5_s3",
      "target": "brokers_root_p3_t5_s3_d2"
    },
    {
      "source": "brokers_root_p3_t5",
      "target": "brokers_root_p3_t5_s4"
    },
    {
      "source": "brokers_root_p3_t5_s4",
      "target": "brokers_root_p3_t5_s4_d1"
    },
    {
      "source": "brokers_root_p3_t5_s4",
      "target": "brokers_root_p3_t5_s4_d2"
    },
    {
      "source": "brokers_root_p3_t5",
      "target": "brokers_root_p3_t5_s5"
    },
    {
      "source": "brokers_root_p3_t5_s5",
      "target": "brokers_root_p3_t5_s5_d1"
    },
    {
      "source": "brokers_root_p3_t5_s5",
      "target": "brokers_root_p3_t5_s5_d2"
    },
    {
      "source": "brokers_root_p3",
      "target": "brokers_root_p3_t6"
    },
    {
      "source": "brokers_root_p3_t6",
      "target": "brokers_root_p3_t6_s1"
    },
    {
      "source": "brokers_root_p3_t6_s1",
      "target": "brokers_root_p3_t6_s1_d1"
    },
    {
      "source": "brokers_root_p3_t6_s1",
      "target": "brokers_root_p3_t6_s1_d2"
    },
    {
      "source": "brokers_root_p3_t6",
      "target": "brokers_root_p3_t6_s2"
    },
    {
      "source": "brokers_root_p3_t6_s2",
      "target": "brokers_root_p3_t6_s2_d1"
    },
    {
      "source": "brokers_root_p3_t6_s2",
      "target": "brokers_root_p3_t6_s2_d2"
    },
    {
      "source": "brokers_root_p3_t6",
      "target": "brokers_root_p3_t6_s3"
    },
    {
      "source": "brokers_root_p3_t6_s3",
      "target": "brokers_root_p3_t6_s3_d1"
    },
    {
      "source": "brokers_root_p3_t6_s3",
      "target": "brokers_root_p3_t6_s3_d2"
    },
    {
      "source": "brokers_root_p3_t6",
      "target": "brokers_root_p3_t6_s4"
    },
    {
      "source": "brokers_root_p3_t6_s4",
      "target": "brokers_root_p3_t6_s4_d1"
    },
    {
      "source": "brokers_root_p3_t6_s4",
      "target": "brokers_root_p3_t6_s4_d2"
    },
    {
      "source": "brokers_root_p3_t6",
      "target": "brokers_root_p3_t6_s5"
    },
    {
      "source": "brokers_root_p3_t6_s5",
      "target": "brokers_root_p3_t6_s5_d1"
    },
    {
      "source": "brokers_root_p3_t6_s5",
      "target": "brokers_root_p3_t6_s5_d2"
    },
    {
      "source": "brokers_root",
      "target": "brokers_root_p4"
    },
    {
      "source": "brokers_root_p4",
      "target": "brokers_root_p4_t1"
    },
    {
      "source": "brokers_root_p4_t1",
      "target": "brokers_root_p4_t1_s1"
    },
    {
      "source": "brokers_root_p4_t1_s1",
      "target": "brokers_root_p4_t1_s1_d1"
    },
    {
      "source": "brokers_root_p4_t1_s1",
      "target": "brokers_root_p4_t1_s1_d2"
    },
    {
      "source": "brokers_root_p4_t1",
      "target": "brokers_root_p4_t1_s2"
    },
    {
      "source": "brokers_root_p4_t1_s2",
      "target": "brokers_root_p4_t1_s2_d1"
    },
    {
      "source": "brokers_root_p4_t1_s2",
      "target": "brokers_root_p4_t1_s2_d2"
    },
    {
      "source": "brokers_root_p4_t1",
      "target": "brokers_root_p4_t1_s3"
    },
    {
      "source": "brokers_root_p4_t1_s3",
      "target": "brokers_root_p4_t1_s3_d1"
    },
    {
      "source": "brokers_root_p4_t1_s3",
      "target": "brokers_root_p4_t1_s3_d2"
    },
    {
      "source": "brokers_root_p4_t1",
      "target": "brokers_root_p4_t1_s4"
    },
    {
      "source": "brokers_root_p4_t1_s4",
      "target": "brokers_root_p4_t1_s4_d1"
    },
    {
      "source": "brokers_root_p4_t1_s4",
      "target": "brokers_root_p4_t1_s4_d2"
    },
    {
      "source": "brokers_root_p4_t1",
      "target": "brokers_root_p4_t1_s5"
    },
    {
      "source": "brokers_root_p4_t1_s5",
      "target": "brokers_root_p4_t1_s5_d1"
    },
    {
      "source": "brokers_root_p4_t1_s5",
      "target": "brokers_root_p4_t1_s5_d2"
    },
    {
      "source": "brokers_root_p4",
      "target": "brokers_root_p4_t2"
    },
    {
      "source": "brokers_root_p4_t2",
      "target": "brokers_root_p4_t2_s1"
    },
    {
      "source": "brokers_root_p4_t2_s1",
      "target": "brokers_root_p4_t2_s1_d1"
    },
    {
      "source": "brokers_root_p4_t2_s1",
      "target": "brokers_root_p4_t2_s1_d2"
    },
    {
      "source": "brokers_root_p4_t2",
      "target": "brokers_root_p4_t2_s2"
    },
    {
      "source": "brokers_root_p4_t2_s2",
      "target": "brokers_root_p4_t2_s2_d1"
    },
    {
      "source": "brokers_root_p4_t2_s2",
      "target": "brokers_root_p4_t2_s2_d2"
    },
    {
      "source": "brokers_root_p4_t2",
      "target": "brokers_root_p4_t2_s3"
    },
    {
      "source": "brokers_root_p4_t2_s3",
      "target": "brokers_root_p4_t2_s3_d1"
    },
    {
      "source": "brokers_root_p4_t2_s3",
      "target": "brokers_root_p4_t2_s3_d2"
    },
    {
      "source": "brokers_root_p4_t2",
      "target": "brokers_root_p4_t2_s4"
    },
    {
      "source": "brokers_root_p4_t2_s4",
      "target": "brokers_root_p4_t2_s4_d1"
    },
    {
      "source": "brokers_root_p4_t2_s4",
      "target": "brokers_root_p4_t2_s4_d2"
    },
    {
      "source": "brokers_root_p4_t2",
      "target": "brokers_root_p4_t2_s5"
    },
    {
      "source": "brokers_root_p4_t2_s5",
      "target": "brokers_root_p4_t2_s5_d1"
    },
    {
      "source": "brokers_root_p4_t2_s5",
      "target": "brokers_root_p4_t2_s5_d2"
    },
    {
      "source": "brokers_root_p4",
      "target": "brokers_root_p4_t3"
    },
    {
      "source": "brokers_root_p4_t3",
      "target": "brokers_root_p4_t3_s1"
    },
    {
      "source": "brokers_root_p4_t3_s1",
      "target": "brokers_root_p4_t3_s1_d1"
    },
    {
      "source": "brokers_root_p4_t3_s1",
      "target": "brokers_root_p4_t3_s1_d2"
    },
    {
      "source": "brokers_root_p4_t3",
      "target": "brokers_root_p4_t3_s2"
    },
    {
      "source": "brokers_root_p4_t3_s2",
      "target": "brokers_root_p4_t3_s2_d1"
    },
    {
      "source": "brokers_root_p4_t3_s2",
      "target": "brokers_root_p4_t3_s2_d2"
    },
    {
      "source": "brokers_root_p4_t3",
      "target": "brokers_root_p4_t3_s3"
    },
    {
      "source": "brokers_root_p4_t3_s3",
      "target": "brokers_root_p4_t3_s3_d1"
    },
    {
      "source": "brokers_root_p4_t3_s3",
      "target": "brokers_root_p4_t3_s3_d2"
    },
    {
      "source": "brokers_root_p4_t3",
      "target": "brokers_root_p4_t3_s4"
    },
    {
      "source": "brokers_root_p4_t3_s4",
      "target": "brokers_root_p4_t3_s4_d1"
    },
    {
      "source": "brokers_root_p4_t3_s4",
      "target": "brokers_root_p4_t3_s4_d2"
    },
    {
      "source": "brokers_root_p4_t3",
      "target": "brokers_root_p4_t3_s5"
    },
    {
      "source": "brokers_root_p4_t3_s5",
      "target": "brokers_root_p4_t3_s5_d1"
    },
    {
      "source": "brokers_root_p4_t3_s5",
      "target": "brokers_root_p4_t3_s5_d2"
    },
    {
      "source": "brokers_root_p4",
      "target": "brokers_root_p4_t4"
    },
    {
      "source": "brokers_root_p4_t4",
      "target": "brokers_root_p4_t4_s1"
    },
    {
      "source": "brokers_root_p4_t4_s1",
      "target": "brokers_root_p4_t4_s1_d1"
    },
    {
      "source": "brokers_root_p4_t4_s1",
      "target": "brokers_root_p4_t4_s1_d2"
    },
    {
      "source": "brokers_root_p4_t4",
      "target": "brokers_root_p4_t4_s2"
    },
    {
      "source": "brokers_root_p4_t4_s2",
      "target": "brokers_root_p4_t4_s2_d1"
    },
    {
      "source": "brokers_root_p4_t4_s2",
      "target": "brokers_root_p4_t4_s2_d2"
    },
    {
      "source": "brokers_root_p4_t4",
      "target": "brokers_root_p4_t4_s3"
    },
    {
      "source": "brokers_root_p4_t4_s3",
      "target": "brokers_root_p4_t4_s3_d1"
    },
    {
      "source": "brokers_root_p4_t4_s3",
      "target": "brokers_root_p4_t4_s3_d2"
    },
    {
      "source": "brokers_root_p4_t4",
      "target": "brokers_root_p4_t4_s4"
    },
    {
      "source": "brokers_root_p4_t4_s4",
      "target": "brokers_root_p4_t4_s4_d1"
    },
    {
      "source": "brokers_root_p4_t4_s4",
      "target": "brokers_root_p4_t4_s4_d2"
    },
    {
      "source": "brokers_root_p4_t4",
      "target": "brokers_root_p4_t4_s5"
    },
    {
      "source": "brokers_root_p4_t4_s5",
      "target": "brokers_root_p4_t4_s5_d1"
    },
    {
      "source": "brokers_root_p4_t4_s5",
      "target": "brokers_root_p4_t4_s5_d2"
    },
    {
      "source": "brokers_root_p4",
      "target": "brokers_root_p4_t5"
    },
    {
      "source": "brokers_root_p4_t5",
      "target": "brokers_root_p4_t5_s1"
    },
    {
      "source": "brokers_root_p4_t5_s1",
      "target": "brokers_root_p4_t5_s1_d1"
    },
    {
      "source": "brokers_root_p4_t5_s1",
      "target": "brokers_root_p4_t5_s1_d2"
    },
    {
      "source": "brokers_root_p4_t5",
      "target": "brokers_root_p4_t5_s2"
    },
    {
      "source": "brokers_root_p4_t5_s2",
      "target": "brokers_root_p4_t5_s2_d1"
    },
    {
      "source": "brokers_root_p4_t5_s2",
      "target": "brokers_root_p4_t5_s2_d2"
    },
    {
      "source": "brokers_root_p4_t5",
      "target": "brokers_root_p4_t5_s3"
    },
    {
      "source": "brokers_root_p4_t5_s3",
      "target": "brokers_root_p4_t5_s3_d1"
    },
    {
      "source": "brokers_root_p4_t5_s3",
      "target": "brokers_root_p4_t5_s3_d2"
    },
    {
      "source": "brokers_root_p4_t5",
      "target": "brokers_root_p4_t5_s4"
    },
    {
      "source": "brokers_root_p4_t5_s4",
      "target": "brokers_root_p4_t5_s4_d1"
    },
    {
      "source": "brokers_root_p4_t5_s4",
      "target": "brokers_root_p4_t5_s4_d2"
    },
    {
      "source": "brokers_root_p4_t5",
      "target": "brokers_root_p4_t5_s5"
    },
    {
      "source": "brokers_root_p4_t5_s5",
      "target": "brokers_root_p4_t5_s5_d1"
    },
    {
      "source": "brokers_root_p4_t5_s5",
      "target": "brokers_root_p4_t5_s5_d2"
    },
    {
      "source": "brokers_root_p4",
      "target": "brokers_root_p4_t6"
    },
    {
      "source": "brokers_root_p4_t6",
      "target": "brokers_root_p4_t6_s1"
    },
    {
      "source": "brokers_root_p4_t6_s1",
      "target": "brokers_root_p4_t6_s1_d1"
    },
    {
      "source": "brokers_root_p4_t6_s1",
      "target": "brokers_root_p4_t6_s1_d2"
    },
    {
      "source": "brokers_root_p4_t6",
      "target": "brokers_root_p4_t6_s2"
    },
    {
      "source": "brokers_root_p4_t6_s2",
      "target": "brokers_root_p4_t6_s2_d1"
    },
    {
      "source": "brokers_root_p4_t6_s2",
      "target": "brokers_root_p4_t6_s2_d2"
    },
    {
      "source": "brokers_root_p4_t6",
      "target": "brokers_root_p4_t6_s3"
    },
    {
      "source": "brokers_root_p4_t6_s3",
      "target": "brokers_root_p4_t6_s3_d1"
    },
    {
      "source": "brokers_root_p4_t6_s3",
      "target": "brokers_root_p4_t6_s3_d2"
    },
    {
      "source": "brokers_root_p4_t6",
      "target": "brokers_root_p4_t6_s4"
    },
    {
      "source": "brokers_root_p4_t6_s4",
      "target": "brokers_root_p4_t6_s4_d1"
    },
    {
      "source": "brokers_root_p4_t6_s4",
      "target": "brokers_root_p4_t6_s4_d2"
    },
    {
      "source": "brokers_root_p4_t6",
      "target": "brokers_root_p4_t6_s5"
    },
    {
      "source": "brokers_root_p4_t6_s5",
      "target": "brokers_root_p4_t6_s5_d1"
    },
    {
      "source": "brokers_root_p4_t6_s5",
      "target": "brokers_root_p4_t6_s5_d2"
    },
    {
      "source": "brokers_root",
      "target": "brokers_root_p5"
    },
    {
      "source": "brokers_root_p5",
      "target": "brokers_root_p5_t1"
    },
    {
      "source": "brokers_root_p5_t1",
      "target": "brokers_root_p5_t1_s1"
    },
    {
      "source": "brokers_root_p5_t1_s1",
      "target": "brokers_root_p5_t1_s1_d1"
    },
    {
      "source": "brokers_root_p5_t1_s1",
      "target": "brokers_root_p5_t1_s1_d2"
    },
    {
      "source": "brokers_root_p5_t1",
      "target": "brokers_root_p5_t1_s2"
    },
    {
      "source": "brokers_root_p5_t1_s2",
      "target": "brokers_root_p5_t1_s2_d1"
    },
    {
      "source": "brokers_root_p5_t1_s2",
      "target": "brokers_root_p5_t1_s2_d2"
    },
    {
      "source": "brokers_root_p5_t1",
      "target": "brokers_root_p5_t1_s3"
    },
    {
      "source": "brokers_root_p5_t1_s3",
      "target": "brokers_root_p5_t1_s3_d1"
    },
    {
      "source": "brokers_root_p5_t1_s3",
      "target": "brokers_root_p5_t1_s3_d2"
    },
    {
      "source": "brokers_root_p5_t1",
      "target": "brokers_root_p5_t1_s4"
    },
    {
      "source": "brokers_root_p5_t1_s4",
      "target": "brokers_root_p5_t1_s4_d1"
    },
    {
      "source": "brokers_root_p5_t1_s4",
      "target": "brokers_root_p5_t1_s4_d2"
    },
    {
      "source": "brokers_root_p5_t1",
      "target": "brokers_root_p5_t1_s5"
    },
    {
      "source": "brokers_root_p5_t1_s5",
      "target": "brokers_root_p5_t1_s5_d1"
    },
    {
      "source": "brokers_root_p5_t1_s5",
      "target": "brokers_root_p5_t1_s5_d2"
    },
    {
      "source": "brokers_root_p5",
      "target": "brokers_root_p5_t2"
    },
    {
      "source": "brokers_root_p5_t2",
      "target": "brokers_root_p5_t2_s1"
    },
    {
      "source": "brokers_root_p5_t2_s1",
      "target": "brokers_root_p5_t2_s1_d1"
    },
    {
      "source": "brokers_root_p5_t2_s1",
      "target": "brokers_root_p5_t2_s1_d2"
    },
    {
      "source": "brokers_root_p5_t2",
      "target": "brokers_root_p5_t2_s2"
    },
    {
      "source": "brokers_root_p5_t2_s2",
      "target": "brokers_root_p5_t2_s2_d1"
    },
    {
      "source": "brokers_root_p5_t2_s2",
      "target": "brokers_root_p5_t2_s2_d2"
    },
    {
      "source": "brokers_root_p5_t2",
      "target": "brokers_root_p5_t2_s3"
    },
    {
      "source": "brokers_root_p5_t2_s3",
      "target": "brokers_root_p5_t2_s3_d1"
    },
    {
      "source": "brokers_root_p5_t2_s3",
      "target": "brokers_root_p5_t2_s3_d2"
    },
    {
      "source": "brokers_root_p5_t2",
      "target": "brokers_root_p5_t2_s4"
    },
    {
      "source": "brokers_root_p5_t2_s4",
      "target": "brokers_root_p5_t2_s4_d1"
    },
    {
      "source": "brokers_root_p5_t2_s4",
      "target": "brokers_root_p5_t2_s4_d2"
    },
    {
      "source": "brokers_root_p5_t2",
      "target": "brokers_root_p5_t2_s5"
    },
    {
      "source": "brokers_root_p5_t2_s5",
      "target": "brokers_root_p5_t2_s5_d1"
    },
    {
      "source": "brokers_root_p5_t2_s5",
      "target": "brokers_root_p5_t2_s5_d2"
    },
    {
      "source": "brokers_root_p5",
      "target": "brokers_root_p5_t3"
    },
    {
      "source": "brokers_root_p5_t3",
      "target": "brokers_root_p5_t3_s1"
    },
    {
      "source": "brokers_root_p5_t3_s1",
      "target": "brokers_root_p5_t3_s1_d1"
    },
    {
      "source": "brokers_root_p5_t3_s1",
      "target": "brokers_root_p5_t3_s1_d2"
    },
    {
      "source": "brokers_root_p5_t3",
      "target": "brokers_root_p5_t3_s2"
    },
    {
      "source": "brokers_root_p5_t3_s2",
      "target": "brokers_root_p5_t3_s2_d1"
    },
    {
      "source": "brokers_root_p5_t3_s2",
      "target": "brokers_root_p5_t3_s2_d2"
    },
    {
      "source": "brokers_root_p5_t3",
      "target": "brokers_root_p5_t3_s3"
    },
    {
      "source": "brokers_root_p5_t3_s3",
      "target": "brokers_root_p5_t3_s3_d1"
    },
    {
      "source": "brokers_root_p5_t3_s3",
      "target": "brokers_root_p5_t3_s3_d2"
    },
    {
      "source": "brokers_root_p5_t3",
      "target": "brokers_root_p5_t3_s4"
    },
    {
      "source": "brokers_root_p5_t3_s4",
      "target": "brokers_root_p5_t3_s4_d1"
    },
    {
      "source": "brokers_root_p5_t3_s4",
      "target": "brokers_root_p5_t3_s4_d2"
    },
    {
      "source": "brokers_root_p5_t3",
      "target": "brokers_root_p5_t3_s5"
    },
    {
      "source": "brokers_root_p5_t3_s5",
      "target": "brokers_root_p5_t3_s5_d1"
    },
    {
      "source": "brokers_root_p5_t3_s5",
      "target": "brokers_root_p5_t3_s5_d2"
    },
    {
      "source": "brokers_root_p5",
      "target": "brokers_root_p5_t4"
    },
    {
      "source": "brokers_root_p5_t4",
      "target": "brokers_root_p5_t4_s1"
    },
    {
      "source": "brokers_root_p5_t4_s1",
      "target": "brokers_root_p5_t4_s1_d1"
    },
    {
      "source": "brokers_root_p5_t4_s1",
      "target": "brokers_root_p5_t4_s1_d2"
    },
    {
      "source": "brokers_root_p5_t4",
      "target": "brokers_root_p5_t4_s2"
    },
    {
      "source": "brokers_root_p5_t4_s2",
      "target": "brokers_root_p5_t4_s2_d1"
    },
    {
      "source": "brokers_root_p5_t4_s2",
      "target": "brokers_root_p5_t4_s2_d2"
    },
    {
      "source": "brokers_root_p5_t4",
      "target": "brokers_root_p5_t4_s3"
    },
    {
      "source": "brokers_root_p5_t4_s3",
      "target": "brokers_root_p5_t4_s3_d1"
    },
    {
      "source": "brokers_root_p5_t4_s3",
      "target": "brokers_root_p5_t4_s3_d2"
    },
    {
      "source": "brokers_root_p5_t4",
      "target": "brokers_root_p5_t4_s4"
    },
    {
      "source": "brokers_root_p5_t4_s4",
      "target": "brokers_root_p5_t4_s4_d1"
    },
    {
      "source": "brokers_root_p5_t4_s4",
      "target": "brokers_root_p5_t4_s4_d2"
    },
    {
      "source": "brokers_root_p5_t4",
      "target": "brokers_root_p5_t4_s5"
    },
    {
      "source": "brokers_root_p5_t4_s5",
      "target": "brokers_root_p5_t4_s5_d1"
    },
    {
      "source": "brokers_root_p5_t4_s5",
      "target": "brokers_root_p5_t4_s5_d2"
    },
    {
      "source": "brokers_root_p5",
      "target": "brokers_root_p5_t5"
    },
    {
      "source": "brokers_root_p5_t5",
      "target": "brokers_root_p5_t5_s1"
    },
    {
      "source": "brokers_root_p5_t5_s1",
      "target": "brokers_root_p5_t5_s1_d1"
    },
    {
      "source": "brokers_root_p5_t5_s1",
      "target": "brokers_root_p5_t5_s1_d2"
    },
    {
      "source": "brokers_root_p5_t5",
      "target": "brokers_root_p5_t5_s2"
    },
    {
      "source": "brokers_root_p5_t5_s2",
      "target": "brokers_root_p5_t5_s2_d1"
    },
    {
      "source": "brokers_root_p5_t5_s2",
      "target": "brokers_root_p5_t5_s2_d2"
    },
    {
      "source": "brokers_root_p5_t5",
      "target": "brokers_root_p5_t5_s3"
    },
    {
      "source": "brokers_root_p5_t5_s3",
      "target": "brokers_root_p5_t5_s3_d1"
    },
    {
      "source": "brokers_root_p5_t5_s3",
      "target": "brokers_root_p5_t5_s3_d2"
    },
    {
      "source": "brokers_root_p5_t5",
      "target": "brokers_root_p5_t5_s4"
    },
    {
      "source": "brokers_root_p5_t5_s4",
      "target": "brokers_root_p5_t5_s4_d1"
    },
    {
      "source": "brokers_root_p5_t5_s4",
      "target": "brokers_root_p5_t5_s4_d2"
    },
    {
      "source": "brokers_root_p5_t5",
      "target": "brokers_root_p5_t5_s5"
    },
    {
      "source": "brokers_root_p5_t5_s5",
      "target": "brokers_root_p5_t5_s5_d1"
    },
    {
      "source": "brokers_root_p5_t5_s5",
      "target": "brokers_root_p5_t5_s5_d2"
    },
    {
      "source": "brokers_root_p5",
      "target": "brokers_root_p5_t6"
    },
    {
      "source": "brokers_root_p5_t6",
      "target": "brokers_root_p5_t6_s1"
    },
    {
      "source": "brokers_root_p5_t6_s1",
      "target": "brokers_root_p5_t6_s1_d1"
    },
    {
      "source": "brokers_root_p5_t6_s1",
      "target": "brokers_root_p5_t6_s1_d2"
    },
    {
      "source": "brokers_root_p5_t6",
      "target": "brokers_root_p5_t6_s2"
    },
    {
      "source": "brokers_root_p5_t6_s2",
      "target": "brokers_root_p5_t6_s2_d1"
    },
    {
      "source": "brokers_root_p5_t6_s2",
      "target": "brokers_root_p5_t6_s2_d2"
    },
    {
      "source": "brokers_root_p5_t6",
      "target": "brokers_root_p5_t6_s3"
    },
    {
      "source": "brokers_root_p5_t6_s3",
      "target": "brokers_root_p5_t6_s3_d1"
    },
    {
      "source": "brokers_root_p5_t6_s3",
      "target": "brokers_root_p5_t6_s3_d2"
    },
    {
      "source": "brokers_root_p5_t6",
      "target": "brokers_root_p5_t6_s4"
    },
    {
      "source": "brokers_root_p5_t6_s4",
      "target": "brokers_root_p5_t6_s4_d1"
    },
    {
      "source": "brokers_root_p5_t6_s4",
      "target": "brokers_root_p5_t6_s4_d2"
    },
    {
      "source": "brokers_root_p5_t6",
      "target": "brokers_root_p5_t6_s5"
    },
    {
      "source": "brokers_root_p5_t6_s5",
      "target": "brokers_root_p5_t6_s5_d1"
    },
    {
      "source": "brokers_root_p5_t6_s5",
      "target": "brokers_root_p5_t6_s5_d2"
    },
    {
      "source": "brokers_root",
      "target": "brokers_root_p6"
    },
    {
      "source": "brokers_root_p6",
      "target": "brokers_root_p6_t1"
    },
    {
      "source": "brokers_root_p6_t1",
      "target": "brokers_root_p6_t1_s1"
    },
    {
      "source": "brokers_root_p6_t1_s1",
      "target": "brokers_root_p6_t1_s1_d1"
    },
    {
      "source": "brokers_root_p6_t1_s1",
      "target": "brokers_root_p6_t1_s1_d2"
    },
    {
      "source": "brokers_root_p6_t1",
      "target": "brokers_root_p6_t1_s2"
    },
    {
      "source": "brokers_root_p6_t1_s2",
      "target": "brokers_root_p6_t1_s2_d1"
    },
    {
      "source": "brokers_root_p6_t1_s2",
      "target": "brokers_root_p6_t1_s2_d2"
    },
    {
      "source": "brokers_root_p6_t1",
      "target": "brokers_root_p6_t1_s3"
    },
    {
      "source": "brokers_root_p6_t1_s3",
      "target": "brokers_root_p6_t1_s3_d1"
    },
    {
      "source": "brokers_root_p6_t1_s3",
      "target": "brokers_root_p6_t1_s3_d2"
    },
    {
      "source": "brokers_root_p6_t1",
      "target": "brokers_root_p6_t1_s4"
    },
    {
      "source": "brokers_root_p6_t1_s4",
      "target": "brokers_root_p6_t1_s4_d1"
    },
    {
      "source": "brokers_root_p6_t1_s4",
      "target": "brokers_root_p6_t1_s4_d2"
    },
    {
      "source": "brokers_root_p6_t1",
      "target": "brokers_root_p6_t1_s5"
    },
    {
      "source": "brokers_root_p6_t1_s5",
      "target": "brokers_root_p6_t1_s5_d1"
    },
    {
      "source": "brokers_root_p6_t1_s5",
      "target": "brokers_root_p6_t1_s5_d2"
    },
    {
      "source": "brokers_root_p6",
      "target": "brokers_root_p6_t2"
    },
    {
      "source": "brokers_root_p6_t2",
      "target": "brokers_root_p6_t2_s1"
    },
    {
      "source": "brokers_root_p6_t2_s1",
      "target": "brokers_root_p6_t2_s1_d1"
    },
    {
      "source": "brokers_root_p6_t2_s1",
      "target": "brokers_root_p6_t2_s1_d2"
    },
    {
      "source": "brokers_root_p6_t2",
      "target": "brokers_root_p6_t2_s2"
    },
    {
      "source": "brokers_root_p6_t2_s2",
      "target": "brokers_root_p6_t2_s2_d1"
    },
    {
      "source": "brokers_root_p6_t2_s2",
      "target": "brokers_root_p6_t2_s2_d2"
    },
    {
      "source": "brokers_root_p6_t2",
      "target": "brokers_root_p6_t2_s3"
    },
    {
      "source": "brokers_root_p6_t2_s3",
      "target": "brokers_root_p6_t2_s3_d1"
    },
    {
      "source": "brokers_root_p6_t2_s3",
      "target": "brokers_root_p6_t2_s3_d2"
    },
    {
      "source": "brokers_root_p6_t2",
      "target": "brokers_root_p6_t2_s4"
    },
    {
      "source": "brokers_root_p6_t2_s4",
      "target": "brokers_root_p6_t2_s4_d1"
    },
    {
      "source": "brokers_root_p6_t2_s4",
      "target": "brokers_root_p6_t2_s4_d2"
    },
    {
      "source": "brokers_root_p6_t2",
      "target": "brokers_root_p6_t2_s5"
    },
    {
      "source": "brokers_root_p6_t2_s5",
      "target": "brokers_root_p6_t2_s5_d1"
    },
    {
      "source": "brokers_root_p6_t2_s5",
      "target": "brokers_root_p6_t2_s5_d2"
    },
    {
      "source": "brokers_root_p6",
      "target": "brokers_root_p6_t3"
    },
    {
      "source": "brokers_root_p6_t3",
      "target": "brokers_root_p6_t3_s1"
    },
    {
      "source": "brokers_root_p6_t3_s1",
      "target": "brokers_root_p6_t3_s1_d1"
    },
    {
      "source": "brokers_root_p6_t3_s1",
      "target": "brokers_root_p6_t3_s1_d2"
    },
    {
      "source": "brokers_root_p6_t3",
      "target": "brokers_root_p6_t3_s2"
    },
    {
      "source": "brokers_root_p6_t3_s2",
      "target": "brokers_root_p6_t3_s2_d1"
    },
    {
      "source": "brokers_root_p6_t3_s2",
      "target": "brokers_root_p6_t3_s2_d2"
    },
    {
      "source": "brokers_root_p6_t3",
      "target": "brokers_root_p6_t3_s3"
    },
    {
      "source": "brokers_root_p6_t3_s3",
      "target": "brokers_root_p6_t3_s3_d1"
    },
    {
      "source": "brokers_root_p6_t3_s3",
      "target": "brokers_root_p6_t3_s3_d2"
    },
    {
      "source": "brokers_root_p6_t3",
      "target": "brokers_root_p6_t3_s4"
    },
    {
      "source": "brokers_root_p6_t3_s4",
      "target": "brokers_root_p6_t3_s4_d1"
    },
    {
      "source": "brokers_root_p6_t3_s4",
      "target": "brokers_root_p6_t3_s4_d2"
    },
    {
      "source": "brokers_root_p6_t3",
      "target": "brokers_root_p6_t3_s5"
    },
    {
      "source": "brokers_root_p6_t3_s5",
      "target": "brokers_root_p6_t3_s5_d1"
    },
    {
      "source": "brokers_root_p6_t3_s5",
      "target": "brokers_root_p6_t3_s5_d2"
    },
    {
      "source": "brokers_root_p6",
      "target": "brokers_root_p6_t4"
    },
    {
      "source": "brokers_root_p6_t4",
      "target": "brokers_root_p6_t4_s1"
    },
    {
      "source": "brokers_root_p6_t4_s1",
      "target": "brokers_root_p6_t4_s1_d1"
    },
    {
      "source": "brokers_root_p6_t4_s1",
      "target": "brokers_root_p6_t4_s1_d2"
    },
    {
      "source": "brokers_root_p6_t4",
      "target": "brokers_root_p6_t4_s2"
    },
    {
      "source": "brokers_root_p6_t4_s2",
      "target": "brokers_root_p6_t4_s2_d1"
    },
    {
      "source": "brokers_root_p6_t4_s2",
      "target": "brokers_root_p6_t4_s2_d2"
    },
    {
      "source": "brokers_root_p6_t4",
      "target": "brokers_root_p6_t4_s3"
    },
    {
      "source": "brokers_root_p6_t4_s3",
      "target": "brokers_root_p6_t4_s3_d1"
    },
    {
      "source": "brokers_root_p6_t4_s3",
      "target": "brokers_root_p6_t4_s3_d2"
    },
    {
      "source": "brokers_root_p6_t4",
      "target": "brokers_root_p6_t4_s4"
    },
    {
      "source": "brokers_root_p6_t4_s4",
      "target": "brokers_root_p6_t4_s4_d1"
    },
    {
      "source": "brokers_root_p6_t4_s4",
      "target": "brokers_root_p6_t4_s4_d2"
    },
    {
      "source": "brokers_root_p6_t4",
      "target": "brokers_root_p6_t4_s5"
    },
    {
      "source": "brokers_root_p6_t4_s5",
      "target": "brokers_root_p6_t4_s5_d1"
    },
    {
      "source": "brokers_root_p6_t4_s5",
      "target": "brokers_root_p6_t4_s5_d2"
    },
    {
      "source": "brokers_root_p6",
      "target": "brokers_root_p6_t5"
    },
    {
      "source": "brokers_root_p6_t5",
      "target": "brokers_root_p6_t5_s1"
    },
    {
      "source": "brokers_root_p6_t5_s1",
      "target": "brokers_root_p6_t5_s1_d1"
    },
    {
      "source": "brokers_root_p6_t5_s1",
      "target": "brokers_root_p6_t5_s1_d2"
    },
    {
      "source": "brokers_root_p6_t5",
      "target": "brokers_root_p6_t5_s2"
    },
    {
      "source": "brokers_root_p6_t5_s2",
      "target": "brokers_root_p6_t5_s2_d1"
    },
    {
      "source": "brokers_root_p6_t5_s2",
      "target": "brokers_root_p6_t5_s2_d2"
    },
    {
      "source": "brokers_root_p6_t5",
      "target": "brokers_root_p6_t5_s3"
    },
    {
      "source": "brokers_root_p6_t5_s3",
      "target": "brokers_root_p6_t5_s3_d1"
    },
    {
      "source": "brokers_root_p6_t5_s3",
      "target": "brokers_root_p6_t5_s3_d2"
    },
    {
      "source": "brokers_root_p6_t5",
      "target": "brokers_root_p6_t5_s4"
    },
    {
      "source": "brokers_root_p6_t5_s4",
      "target": "brokers_root_p6_t5_s4_d1"
    },
    {
      "source": "brokers_root_p6_t5_s4",
      "target": "brokers_root_p6_t5_s4_d2"
    },
    {
      "source": "brokers_root_p6_t5",
      "target": "brokers_root_p6_t5_s5"
    },
    {
      "source": "brokers_root_p6_t5_s5",
      "target": "brokers_root_p6_t5_s5_d1"
    },
    {
      "source": "brokers_root_p6_t5_s5",
      "target": "brokers_root_p6_t5_s5_d2"
    },
    {
      "source": "brokers_root_p6",
      "target": "brokers_root_p6_t6"
    },
    {
      "source": "brokers_root_p6_t6",
      "target": "brokers_root_p6_t6_s1"
    },
    {
      "source": "brokers_root_p6_t6_s1",
      "target": "brokers_root_p6_t6_s1_d1"
    },
    {
      "source": "brokers_root_p6_t6_s1",
      "target": "brokers_root_p6_t6_s1_d2"
    },
    {
      "source": "brokers_root_p6_t6",
      "target": "brokers_root_p6_t6_s2"
    },
    {
      "source": "brokers_root_p6_t6_s2",
      "target": "brokers_root_p6_t6_s2_d1"
    },
    {
      "source": "brokers_root_p6_t6_s2",
      "target": "brokers_root_p6_t6_s2_d2"
    },
    {
      "source": "brokers_root_p6_t6",
      "target": "brokers_root_p6_t6_s3"
    },
    {
      "source": "brokers_root_p6_t6_s3",
      "target": "brokers_root_p6_t6_s3_d1"
    },
    {
      "source": "brokers_root_p6_t6_s3",
      "target": "brokers_root_p6_t6_s3_d2"
    },
    {
      "source": "brokers_root_p6_t6",
      "target": "brokers_root_p6_t6_s4"
    },
    {
      "source": "brokers_root_p6_t6_s4",
      "target": "brokers_root_p6_t6_s4_d1"
    },
    {
      "source": "brokers_root_p6_t6_s4",
      "target": "brokers_root_p6_t6_s4_d2"
    },
    {
      "source": "brokers_root_p6_t6",
      "target": "brokers_root_p6_t6_s5"
    },
    {
      "source": "brokers_root_p6_t6_s5",
      "target": "brokers_root_p6_t6_s5_d1"
    },
    {
      "source": "brokers_root_p6_t6_s5",
      "target": "brokers_root_p6_t6_s5_d2"
    },
    {
      "source": "brokers_root",
      "target": "brokers_root_p7"
    },
    {
      "source": "brokers_root_p7",
      "target": "brokers_root_p7_t1"
    },
    {
      "source": "brokers_root_p7_t1",
      "target": "brokers_root_p7_t1_s1"
    },
    {
      "source": "brokers_root_p7_t1_s1",
      "target": "brokers_root_p7_t1_s1_d1"
    },
    {
      "source": "brokers_root_p7_t1_s1",
      "target": "brokers_root_p7_t1_s1_d2"
    },
    {
      "source": "brokers_root_p7_t1",
      "target": "brokers_root_p7_t1_s2"
    },
    {
      "source": "brokers_root_p7_t1_s2",
      "target": "brokers_root_p7_t1_s2_d1"
    },
    {
      "source": "brokers_root_p7_t1_s2",
      "target": "brokers_root_p7_t1_s2_d2"
    },
    {
      "source": "brokers_root_p7_t1",
      "target": "brokers_root_p7_t1_s3"
    },
    {
      "source": "brokers_root_p7_t1_s3",
      "target": "brokers_root_p7_t1_s3_d1"
    },
    {
      "source": "brokers_root_p7_t1_s3",
      "target": "brokers_root_p7_t1_s3_d2"
    },
    {
      "source": "brokers_root_p7_t1",
      "target": "brokers_root_p7_t1_s4"
    },
    {
      "source": "brokers_root_p7_t1_s4",
      "target": "brokers_root_p7_t1_s4_d1"
    },
    {
      "source": "brokers_root_p7_t1_s4",
      "target": "brokers_root_p7_t1_s4_d2"
    },
    {
      "source": "brokers_root_p7_t1",
      "target": "brokers_root_p7_t1_s5"
    },
    {
      "source": "brokers_root_p7_t1_s5",
      "target": "brokers_root_p7_t1_s5_d1"
    },
    {
      "source": "brokers_root_p7_t1_s5",
      "target": "brokers_root_p7_t1_s5_d2"
    },
    {
      "source": "brokers_root_p7",
      "target": "brokers_root_p7_t2"
    },
    {
      "source": "brokers_root_p7_t2",
      "target": "brokers_root_p7_t2_s1"
    },
    {
      "source": "brokers_root_p7_t2_s1",
      "target": "brokers_root_p7_t2_s1_d1"
    },
    {
      "source": "brokers_root_p7_t2_s1",
      "target": "brokers_root_p7_t2_s1_d2"
    },
    {
      "source": "brokers_root_p7_t2",
      "target": "brokers_root_p7_t2_s2"
    },
    {
      "source": "brokers_root_p7_t2_s2",
      "target": "brokers_root_p7_t2_s2_d1"
    },
    {
      "source": "brokers_root_p7_t2_s2",
      "target": "brokers_root_p7_t2_s2_d2"
    },
    {
      "source": "brokers_root_p7_t2",
      "target": "brokers_root_p7_t2_s3"
    },
    {
      "source": "brokers_root_p7_t2_s3",
      "target": "brokers_root_p7_t2_s3_d1"
    },
    {
      "source": "brokers_root_p7_t2_s3",
      "target": "brokers_root_p7_t2_s3_d2"
    },
    {
      "source": "brokers_root_p7_t2",
      "target": "brokers_root_p7_t2_s4"
    },
    {
      "source": "brokers_root_p7_t2_s4",
      "target": "brokers_root_p7_t2_s4_d1"
    },
    {
      "source": "brokers_root_p7_t2_s4",
      "target": "brokers_root_p7_t2_s4_d2"
    },
    {
      "source": "brokers_root_p7_t2",
      "target": "brokers_root_p7_t2_s5"
    },
    {
      "source": "brokers_root_p7_t2_s5",
      "target": "brokers_root_p7_t2_s5_d1"
    },
    {
      "source": "brokers_root_p7_t2_s5",
      "target": "brokers_root_p7_t2_s5_d2"
    },
    {
      "source": "brokers_root_p7",
      "target": "brokers_root_p7_t3"
    },
    {
      "source": "brokers_root_p7_t3",
      "target": "brokers_root_p7_t3_s1"
    },
    {
      "source": "brokers_root_p7_t3_s1",
      "target": "brokers_root_p7_t3_s1_d1"
    },
    {
      "source": "brokers_root_p7_t3_s1",
      "target": "brokers_root_p7_t3_s1_d2"
    },
    {
      "source": "brokers_root_p7_t3",
      "target": "brokers_root_p7_t3_s2"
    },
    {
      "source": "brokers_root_p7_t3_s2",
      "target": "brokers_root_p7_t3_s2_d1"
    },
    {
      "source": "brokers_root_p7_t3_s2",
      "target": "brokers_root_p7_t3_s2_d2"
    },
    {
      "source": "brokers_root_p7_t3",
      "target": "brokers_root_p7_t3_s3"
    },
    {
      "source": "brokers_root_p7_t3_s3",
      "target": "brokers_root_p7_t3_s3_d1"
    },
    {
      "source": "brokers_root_p7_t3_s3",
      "target": "brokers_root_p7_t3_s3_d2"
    },
    {
      "source": "brokers_root_p7_t3",
      "target": "brokers_root_p7_t3_s4"
    },
    {
      "source": "brokers_root_p7_t3_s4",
      "target": "brokers_root_p7_t3_s4_d1"
    },
    {
      "source": "brokers_root_p7_t3_s4",
      "target": "brokers_root_p7_t3_s4_d2"
    },
    {
      "source": "brokers_root_p7_t3",
      "target": "brokers_root_p7_t3_s5"
    },
    {
      "source": "brokers_root_p7_t3_s5",
      "target": "brokers_root_p7_t3_s5_d1"
    },
    {
      "source": "brokers_root_p7_t3_s5",
      "target": "brokers_root_p7_t3_s5_d2"
    },
    {
      "source": "brokers_root_p7",
      "target": "brokers_root_p7_t4"
    },
    {
      "source": "brokers_root_p7_t4",
      "target": "brokers_root_p7_t4_s1"
    },
    {
      "source": "brokers_root_p7_t4_s1",
      "target": "brokers_root_p7_t4_s1_d1"
    },
    {
      "source": "brokers_root_p7_t4_s1",
      "target": "brokers_root_p7_t4_s1_d2"
    },
    {
      "source": "brokers_root_p7_t4",
      "target": "brokers_root_p7_t4_s2"
    },
    {
      "source": "brokers_root_p7_t4_s2",
      "target": "brokers_root_p7_t4_s2_d1"
    },
    {
      "source": "brokers_root_p7_t4_s2",
      "target": "brokers_root_p7_t4_s2_d2"
    },
    {
      "source": "brokers_root_p7_t4",
      "target": "brokers_root_p7_t4_s3"
    },
    {
      "source": "brokers_root_p7_t4_s3",
      "target": "brokers_root_p7_t4_s3_d1"
    },
    {
      "source": "brokers_root_p7_t4_s3",
      "target": "brokers_root_p7_t4_s3_d2"
    },
    {
      "source": "brokers_root_p7_t4",
      "target": "brokers_root_p7_t4_s4"
    },
    {
      "source": "brokers_root_p7_t4_s4",
      "target": "brokers_root_p7_t4_s4_d1"
    },
    {
      "source": "brokers_root_p7_t4_s4",
      "target": "brokers_root_p7_t4_s4_d2"
    },
    {
      "source": "brokers_root_p7_t4",
      "target": "brokers_root_p7_t4_s5"
    },
    {
      "source": "brokers_root_p7_t4_s5",
      "target": "brokers_root_p7_t4_s5_d1"
    },
    {
      "source": "brokers_root_p7_t4_s5",
      "target": "brokers_root_p7_t4_s5_d2"
    },
    {
      "source": "brokers_root_p7",
      "target": "brokers_root_p7_t5"
    },
    {
      "source": "brokers_root_p7_t5",
      "target": "brokers_root_p7_t5_s1"
    },
    {
      "source": "brokers_root_p7_t5_s1",
      "target": "brokers_root_p7_t5_s1_d1"
    },
    {
      "source": "brokers_root_p7_t5_s1",
      "target": "brokers_root_p7_t5_s1_d2"
    },
    {
      "source": "brokers_root_p7_t5",
      "target": "brokers_root_p7_t5_s2"
    },
    {
      "source": "brokers_root_p7_t5_s2",
      "target": "brokers_root_p7_t5_s2_d1"
    },
    {
      "source": "brokers_root_p7_t5_s2",
      "target": "brokers_root_p7_t5_s2_d2"
    },
    {
      "source": "brokers_root_p7_t5",
      "target": "brokers_root_p7_t5_s3"
    },
    {
      "source": "brokers_root_p7_t5_s3",
      "target": "brokers_root_p7_t5_s3_d1"
    },
    {
      "source": "brokers_root_p7_t5_s3",
      "target": "brokers_root_p7_t5_s3_d2"
    },
    {
      "source": "brokers_root_p7_t5",
      "target": "brokers_root_p7_t5_s4"
    },
    {
      "source": "brokers_root_p7_t5_s4",
      "target": "brokers_root_p7_t5_s4_d1"
    },
    {
      "source": "brokers_root_p7_t5_s4",
      "target": "brokers_root_p7_t5_s4_d2"
    },
    {
      "source": "brokers_root_p7_t5",
      "target": "brokers_root_p7_t5_s5"
    },
    {
      "source": "brokers_root_p7_t5_s5",
      "target": "brokers_root_p7_t5_s5_d1"
    },
    {
      "source": "brokers_root_p7_t5_s5",
      "target": "brokers_root_p7_t5_s5_d2"
    },
    {
      "source": "brokers_root_p7",
      "target": "brokers_root_p7_t6"
    },
    {
      "source": "brokers_root_p7_t6",
      "target": "brokers_root_p7_t6_s1"
    },
    {
      "source": "brokers_root_p7_t6_s1",
      "target": "brokers_root_p7_t6_s1_d1"
    },
    {
      "source": "brokers_root_p7_t6_s1",
      "target": "brokers_root_p7_t6_s1_d2"
    },
    {
      "source": "brokers_root_p7_t6",
      "target": "brokers_root_p7_t6_s2"
    },
    {
      "source": "brokers_root_p7_t6_s2",
      "target": "brokers_root_p7_t6_s2_d1"
    },
    {
      "source": "brokers_root_p7_t6_s2",
      "target": "brokers_root_p7_t6_s2_d2"
    },
    {
      "source": "brokers_root_p7_t6",
      "target": "brokers_root_p7_t6_s3"
    },
    {
      "source": "brokers_root_p7_t6_s3",
      "target": "brokers_root_p7_t6_s3_d1"
    },
    {
      "source": "brokers_root_p7_t6_s3",
      "target": "brokers_root_p7_t6_s3_d2"
    },
    {
      "source": "brokers_root_p7_t6",
      "target": "brokers_root_p7_t6_s4"
    },
    {
      "source": "brokers_root_p7_t6_s4",
      "target": "brokers_root_p7_t6_s4_d1"
    },
    {
      "source": "brokers_root_p7_t6_s4",
      "target": "brokers_root_p7_t6_s4_d2"
    },
    {
      "source": "brokers_root_p7_t6",
      "target": "brokers_root_p7_t6_s5"
    },
    {
      "source": "brokers_root_p7_t6_s5",
      "target": "brokers_root_p7_t6_s5_d1"
    },
    {
      "source": "brokers_root_p7_t6_s5",
      "target": "brokers_root_p7_t6_s5_d2"
    },
    {
      "source": "brokers_root",
      "target": "brokers_root_p8"
    },
    {
      "source": "brokers_root_p8",
      "target": "brokers_root_p8_t1"
    },
    {
      "source": "brokers_root_p8_t1",
      "target": "brokers_root_p8_t1_s1"
    },
    {
      "source": "brokers_root_p8_t1_s1",
      "target": "brokers_root_p8_t1_s1_d1"
    },
    {
      "source": "brokers_root_p8_t1_s1",
      "target": "brokers_root_p8_t1_s1_d2"
    },
    {
      "source": "brokers_root_p8_t1",
      "target": "brokers_root_p8_t1_s2"
    },
    {
      "source": "brokers_root_p8_t1_s2",
      "target": "brokers_root_p8_t1_s2_d1"
    },
    {
      "source": "brokers_root_p8_t1_s2",
      "target": "brokers_root_p8_t1_s2_d2"
    },
    {
      "source": "brokers_root_p8_t1",
      "target": "brokers_root_p8_t1_s3"
    },
    {
      "source": "brokers_root_p8_t1_s3",
      "target": "brokers_root_p8_t1_s3_d1"
    },
    {
      "source": "brokers_root_p8_t1_s3",
      "target": "brokers_root_p8_t1_s3_d2"
    },
    {
      "source": "brokers_root_p8_t1",
      "target": "brokers_root_p8_t1_s4"
    },
    {
      "source": "brokers_root_p8_t1_s4",
      "target": "brokers_root_p8_t1_s4_d1"
    },
    {
      "source": "brokers_root_p8_t1_s4",
      "target": "brokers_root_p8_t1_s4_d2"
    },
    {
      "source": "brokers_root_p8_t1",
      "target": "brokers_root_p8_t1_s5"
    },
    {
      "source": "brokers_root_p8_t1_s5",
      "target": "brokers_root_p8_t1_s5_d1"
    },
    {
      "source": "brokers_root_p8_t1_s5",
      "target": "brokers_root_p8_t1_s5_d2"
    },
    {
      "source": "brokers_root_p8",
      "target": "brokers_root_p8_t2"
    },
    {
      "source": "brokers_root_p8_t2",
      "target": "brokers_root_p8_t2_s1"
    },
    {
      "source": "brokers_root_p8_t2_s1",
      "target": "brokers_root_p8_t2_s1_d1"
    },
    {
      "source": "brokers_root_p8_t2_s1",
      "target": "brokers_root_p8_t2_s1_d2"
    },
    {
      "source": "brokers_root_p8_t2",
      "target": "brokers_root_p8_t2_s2"
    },
    {
      "source": "brokers_root_p8_t2_s2",
      "target": "brokers_root_p8_t2_s2_d1"
    },
    {
      "source": "brokers_root_p8_t2_s2",
      "target": "brokers_root_p8_t2_s2_d2"
    },
    {
      "source": "brokers_root_p8_t2",
      "target": "brokers_root_p8_t2_s3"
    },
    {
      "source": "brokers_root_p8_t2_s3",
      "target": "brokers_root_p8_t2_s3_d1"
    },
    {
      "source": "brokers_root_p8_t2_s3",
      "target": "brokers_root_p8_t2_s3_d2"
    },
    {
      "source": "brokers_root_p8_t2",
      "target": "brokers_root_p8_t2_s4"
    },
    {
      "source": "brokers_root_p8_t2_s4",
      "target": "brokers_root_p8_t2_s4_d1"
    },
    {
      "source": "brokers_root_p8_t2_s4",
      "target": "brokers_root_p8_t2_s4_d2"
    },
    {
      "source": "brokers_root_p8_t2",
      "target": "brokers_root_p8_t2_s5"
    },
    {
      "source": "brokers_root_p8_t2_s5",
      "target": "brokers_root_p8_t2_s5_d1"
    },
    {
      "source": "brokers_root_p8_t2_s5",
      "target": "brokers_root_p8_t2_s5_d2"
    },
    {
      "source": "brokers_root_p8",
      "target": "brokers_root_p8_t3"
    },
    {
      "source": "brokers_root_p8_t3",
      "target": "brokers_root_p8_t3_s1"
    },
    {
      "source": "brokers_root_p8_t3_s1",
      "target": "brokers_root_p8_t3_s1_d1"
    },
    {
      "source": "brokers_root_p8_t3_s1",
      "target": "brokers_root_p8_t3_s1_d2"
    },
    {
      "source": "brokers_root_p8_t3",
      "target": "brokers_root_p8_t3_s2"
    },
    {
      "source": "brokers_root_p8_t3_s2",
      "target": "brokers_root_p8_t3_s2_d1"
    },
    {
      "source": "brokers_root_p8_t3_s2",
      "target": "brokers_root_p8_t3_s2_d2"
    },
    {
      "source": "brokers_root_p8_t3",
      "target": "brokers_root_p8_t3_s3"
    },
    {
      "source": "brokers_root_p8_t3_s3",
      "target": "brokers_root_p8_t3_s3_d1"
    },
    {
      "source": "brokers_root_p8_t3_s3",
      "target": "brokers_root_p8_t3_s3_d2"
    },
    {
      "source": "brokers_root_p8_t3",
      "target": "brokers_root_p8_t3_s4"
    },
    {
      "source": "brokers_root_p8_t3_s4",
      "target": "brokers_root_p8_t3_s4_d1"
    },
    {
      "source": "brokers_root_p8_t3_s4",
      "target": "brokers_root_p8_t3_s4_d2"
    },
    {
      "source": "brokers_root_p8_t3",
      "target": "brokers_root_p8_t3_s5"
    },
    {
      "source": "brokers_root_p8_t3_s5",
      "target": "brokers_root_p8_t3_s5_d1"
    },
    {
      "source": "brokers_root_p8_t3_s5",
      "target": "brokers_root_p8_t3_s5_d2"
    },
    {
      "source": "brokers_root_p8",
      "target": "brokers_root_p8_t4"
    },
    {
      "source": "brokers_root_p8_t4",
      "target": "brokers_root_p8_t4_s1"
    },
    {
      "source": "brokers_root_p8_t4_s1",
      "target": "brokers_root_p8_t4_s1_d1"
    },
    {
      "source": "brokers_root_p8_t4_s1",
      "target": "brokers_root_p8_t4_s1_d2"
    },
    {
      "source": "brokers_root_p8_t4",
      "target": "brokers_root_p8_t4_s2"
    },
    {
      "source": "brokers_root_p8_t4_s2",
      "target": "brokers_root_p8_t4_s2_d1"
    },
    {
      "source": "brokers_root_p8_t4_s2",
      "target": "brokers_root_p8_t4_s2_d2"
    },
    {
      "source": "brokers_root_p8_t4",
      "target": "brokers_root_p8_t4_s3"
    },
    {
      "source": "brokers_root_p8_t4_s3",
      "target": "brokers_root_p8_t4_s3_d1"
    },
    {
      "source": "brokers_root_p8_t4_s3",
      "target": "brokers_root_p8_t4_s3_d2"
    },
    {
      "source": "brokers_root_p8_t4",
      "target": "brokers_root_p8_t4_s4"
    },
    {
      "source": "brokers_root_p8_t4_s4",
      "target": "brokers_root_p8_t4_s4_d1"
    },
    {
      "source": "brokers_root_p8_t4_s4",
      "target": "brokers_root_p8_t4_s4_d2"
    },
    {
      "source": "brokers_root_p8_t4",
      "target": "brokers_root_p8_t4_s5"
    },
    {
      "source": "brokers_root_p8_t4_s5",
      "target": "brokers_root_p8_t4_s5_d1"
    },
    {
      "source": "brokers_root_p8_t4_s5",
      "target": "brokers_root_p8_t4_s5_d2"
    },
    {
      "source": "brokers_root_p8",
      "target": "brokers_root_p8_t5"
    },
    {
      "source": "brokers_root_p8_t5",
      "target": "brokers_root_p8_t5_s1"
    },
    {
      "source": "brokers_root_p8_t5_s1",
      "target": "brokers_root_p8_t5_s1_d1"
    },
    {
      "source": "brokers_root_p8_t5_s1",
      "target": "brokers_root_p8_t5_s1_d2"
    },
    {
      "source": "brokers_root_p8_t5",
      "target": "brokers_root_p8_t5_s2"
    },
    {
      "source": "brokers_root_p8_t5_s2",
      "target": "brokers_root_p8_t5_s2_d1"
    },
    {
      "source": "brokers_root_p8_t5_s2",
      "target": "brokers_root_p8_t5_s2_d2"
    },
    {
      "source": "brokers_root_p8_t5",
      "target": "brokers_root_p8_t5_s3"
    },
    {
      "source": "brokers_root_p8_t5_s3",
      "target": "brokers_root_p8_t5_s3_d1"
    },
    {
      "source": "brokers_root_p8_t5_s3",
      "target": "brokers_root_p8_t5_s3_d2"
    },
    {
      "source": "brokers_root_p8_t5",
      "target": "brokers_root_p8_t5_s4"
    },
    {
      "source": "brokers_root_p8_t5_s4",
      "target": "brokers_root_p8_t5_s4_d1"
    },
    {
      "source": "brokers_root_p8_t5_s4",
      "target": "brokers_root_p8_t5_s4_d2"
    },
    {
      "source": "brokers_root_p8_t5",
      "target": "brokers_root_p8_t5_s5"
    },
    {
      "source": "brokers_root_p8_t5_s5",
      "target": "brokers_root_p8_t5_s5_d1"
    },
    {
      "source": "brokers_root_p8_t5_s5",
      "target": "brokers_root_p8_t5_s5_d2"
    },
    {
      "source": "brokers_root_p8",
      "target": "brokers_root_p8_t6"
    },
    {
      "source": "brokers_root_p8_t6",
      "target": "brokers_root_p8_t6_s1"
    },
    {
      "source": "brokers_root_p8_t6_s1",
      "target": "brokers_root_p8_t6_s1_d1"
    },
    {
      "source": "brokers_root_p8_t6_s1",
      "target": "brokers_root_p8_t6_s1_d2"
    },
    {
      "source": "brokers_root_p8_t6",
      "target": "brokers_root_p8_t6_s2"
    },
    {
      "source": "brokers_root_p8_t6_s2",
      "target": "brokers_root_p8_t6_s2_d1"
    },
    {
      "source": "brokers_root_p8_t6_s2",
      "target": "brokers_root_p8_t6_s2_d2"
    },
    {
      "source": "brokers_root_p8_t6",
      "target": "brokers_root_p8_t6_s3"
    },
    {
      "source": "brokers_root_p8_t6_s3",
      "target": "brokers_root_p8_t6_s3_d1"
    },
    {
      "source": "brokers_root_p8_t6_s3",
      "target": "brokers_root_p8_t6_s3_d2"
    },
    {
      "source": "brokers_root_p8_t6",
      "target": "brokers_root_p8_t6_s4"
    },
    {
      "source": "brokers_root_p8_t6_s4",
      "target": "brokers_root_p8_t6_s4_d1"
    },
    {
      "source": "brokers_root_p8_t6_s4",
      "target": "brokers_root_p8_t6_s4_d2"
    },
    {
      "source": "brokers_root_p8_t6",
      "target": "brokers_root_p8_t6_s5"
    },
    {
      "source": "brokers_root_p8_t6_s5",
      "target": "brokers_root_p8_t6_s5_d1"
    },
    {
      "source": "brokers_root_p8_t6_s5",
      "target": "brokers_root_p8_t6_s5_d2"
    }
  ]
};
