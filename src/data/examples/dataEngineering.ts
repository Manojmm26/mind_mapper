import { MindMapData } from "../../services/llmService";

export const DATA_ENGINEERING_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "de_root",
      "label": "Data Engineering & Modern Data Stack",
      "description": "Comprehensive first-principles blueprint of data ingestion, stream/batch processing engines, storage formats, OLAP data warehouses, pipeline orchestration, data quality, lakehouse governance, and real-time feature stores.",
      "type": "topic"
    },
    {
      "id": "de_root_p1",
      "label": "Data Ingestion & Source Systems",
      "description": "Mechanisms for capturing, extracting, and streaming structured and unstructured data from transactional databases, APIs, and log producers into landing zones.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1",
      "label": "JDBC Batch Ingestion",
      "description": "Extracting data from relational databases using SQL queries over Java Database Connectivity connections.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s1",
      "label": "Partitioned Query Execution",
      "description": "Splitting large table reads into parallel range queries based on indexed numeric or timestamp primary keys.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s1_d1",
      "label": "Boundary Calculation Math",
      "description": "Computing min and max column bounds to divide query ranges into equal-sized WHERE clause predicate splits.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s1_d2",
      "label": "Fetch Size Optimization",
      "description": "Setting statement fetch size parameters to 10,000 rows to balance network throughput and JVM heap usage.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s2",
      "label": "Incremental High-Watermark Extraction",
      "description": "Filtering source tables using monotonic timestamp or auto-incrementing ID column thresholds.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s2_d1",
      "label": "State Storage Persistence",
      "description": "Storing high-watermark state in metadata stores like Postgres or DynamoDB between pipeline runs.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s2_d2",
      "label": "Late-Arriving Data Handling",
      "description": "Applying a 5-minute sliding lookback window to capture late-committed database transactions.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s3",
      "label": "Connection Pooling & Resource Limits",
      "description": "Managing database connection lifecycles to prevent exhausting OLTP connection limits.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s3_d1",
      "label": "HikariCP Configuration",
      "description": "Configuring maximum pool size and connection timeout bounds to limit database CPU utilization.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s3_d2",
      "label": "Read Replica Offloading",
      "description": "Routing heavy ingestion queries to dedicated read replicas to isolate production master nodes.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s4",
      "label": "Full Table Snapshot Strategies",
      "description": "Extracting entire database tables when incremental key columns are unavailable.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s4_d1",
      "label": "Staging Table Atomic Swaps",
      "description": "Writing full extracts into temporary staging tables before executing atomic RENAME operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s4_d2",
      "label": "Chunked Offset Paging",
      "description": "Paging through unindexed tables using LIMIT/OFFSET or keyset pagination to prevent query timeouts.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s5",
      "label": "Schema Drift Detection",
      "description": "Identifying new, deleted, or modified source database columns before loading.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s5_d1",
      "label": "Information Schema Comparison",
      "description": "Querying information_schema.columns to compare current source columns against target table definitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t1_s5_d2",
      "label": "Type Mapping Rules",
      "description": "Mapping database-specific data types (e.g. Postgres JSONB to Parquet String) deterministically.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2",
      "label": "Change Data Capture (CDC) with Debezium",
      "description": "Capturing row-level insert, update, and delete events directly from database transaction logs.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s1",
      "label": "Postgres Write-Ahead Log (WAL) Tailing",
      "description": "Reading binary change events from Postgres WAL using logical decoding plugins like pgoutput.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s1_d1",
      "label": "Replication Slot Management",
      "description": "Creating persistent logical replication slots to guarantee log retention during consumer downtime.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s1_d2",
      "label": "LNS Sequence Number Tracking",
      "description": "Tracking Log Sequence Numbers (LSN) to ensure exact-once stream position resumption.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s2",
      "label": "MySQL Binlog Ingestion",
      "description": "Parsing MySQL row-based binary logs to stream database mutation events in real-time.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s2_d1",
      "label": "GTID Event Tracking",
      "description": "Utilizing Global Transaction Identifiers (GTID) for fault-tolerant multi-source binlog failover.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s2_d2",
      "label": "Schema History Topic",
      "description": "Persisting DDL DDL statements in Kafka internal topics to parse binlog row structures accurately.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s3",
      "label": "Kafka Connect Engine Architecture",
      "description": "Distributed runtime worker cluster for executing source and sink connector tasks.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s3_d1",
      "label": "Distributed Mode Rebalancing",
      "description": "Rebalancing connector tasks across cluster nodes when workers fail using Kafka group protocols.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s3_d2",
      "label": "Single Message Transforms (SMT)",
      "description": "Applying lightweight transformations like field masking or routing rules in-flight before publishing.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s4",
      "label": "Debezium Event Payload Structure",
      "description": "JSON or Avro envelope containing before/after row states, source metadata, and transaction timestamps.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s4_d1",
      "label": "Envelope Before-After Fields",
      "description": "Extracting pre-change (\"before\") and post-change (\"after\") record states for audit logging.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s4_d2",
      "label": "Tombstone Event Handling",
      "description": "Emitting null-payload tombstone records following DELETE operations to trigger Kafka compaction.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s5",
      "label": "CDC Initial Snapshot Mechanics",
      "description": "Exporting historical database data without locking tables before switching to log tailing.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s5_d1",
      "label": "Non-Blocking SELECT Snapshots",
      "description": "Executing SELECT queries under READ COMMITTED isolation while recording starting LSN positions.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t2_s5_d2",
      "label": "Incremental Snapshotting (Key-Range)",
      "description": "Chunking snapshot SELECT queries by primary key ranges to minimize lock times and memory pressure.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3",
      "label": "REST API & Webhook Ingestion",
      "description": "Pulling and receiving payload data from third-party SaaS applications and HTTP endpoints.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s1",
      "label": "OAuth 2.0 Token Rotation",
      "description": "Automating access token retrieval and refresh token rotation for API authentication.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s1_d1",
      "label": "Token Expiry Management",
      "description": "Checking JWT expiration claims (exp) to proactively refresh tokens 5 minutes before expiry.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s1_d2",
      "label": "Secrets Vault Storage",
      "description": "Fetching client credentials dynamically from HashiCorp Vault or AWS Secrets Manager.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s2",
      "label": "Exponential Backoff & Rate Limit Handling",
      "description": "Managing HTTP 429 Too Many Requests responses using adaptive polling backoffs.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s2_d1",
      "label": "Retry-After Header Parsing",
      "description": "Respecting standard Retry-After headers emitted by rate-limited API servers.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s2_d2",
      "label": "Full Jitter Backoff Algorithm",
      "description": "Calculating retry intervals as random(0, min(cap, base * 2^attempt)) to prevent thundering herds.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s3",
      "label": "Cursor & Page-Based Pagination",
      "description": "Iterating through multi-page API responses using cursor tokens or link headers.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s3_d1",
      "label": "Link Header Parsing (RFC 5988)",
      "description": "Parsing rel=\"next\" URLs from HTTP response headers to fetch subsequent data pages.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s3_d2",
      "label": "Opaque Cursor Tokens",
      "description": "Passing next_cursor strings in request parameters to fetch contiguous record sets.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s4",
      "label": "Webhook Event Receiver Microservices",
      "description": "Event-driven HTTP endpoints for receiving push notifications from SaaS providers.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s4_d1",
      "label": "HMAC Signature Verification",
      "description": "Validating X-Hub-Signature headers using SHA-256 HMAC keys to verify webhook payload authenticity.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s4_d2",
      "label": "Buffer Queue Offloading",
      "description": "Immediately pushing received webhook payloads into Kafka or SQS before returning HTTP 202 Accepted.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s5",
      "label": "Schema Normalization & Unnesting",
      "description": "Flattening complex nested JSON objects into tabular relational structures.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s5_d1",
      "label": "JSON Array Explode Transforms",
      "description": "Unnesting JSON arrays into individual output rows while preserving top-level parent keys.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t3_s5_d2",
      "label": "Dynamic Column Typing",
      "description": "Inferring string, integer, float, and timestamp types from JSON payload values.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4",
      "label": "Log Shipping & Buffer Collector Pipelines",
      "description": "Collecting high-volume application logs and metrics using lightweight edge agents.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s1",
      "label": "Vector / Fluentd Aggregator Topologies",
      "description": "Deploying daemonsets and central aggregators for log parsing, buffering, and routing.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s1_d1",
      "label": "Disk-Backed Buffer Queues",
      "description": "Configuring persistent disk buffering to prevent data loss during downstream sink outages.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s1_d2",
      "label": "Grok Pattern Parsing",
      "description": "Extracting structured fields from unformatted log strings using regular expression Grok rules.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s2",
      "label": "Logstash Pipeline Pipelines",
      "description": "Processing server logs with input, filter, and output plugin configurations.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s2_d1",
      "label": "Multiline Log Grouping",
      "description": "Combining multi-line stack traces into single log events using regular expression pattern matching.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s2_d2",
      "label": "GeoIP Enrichment Filters",
      "description": "Resolving IP addresses to geographical coordinates using MaxMind GeoIP databases.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s3",
      "label": "AWS Kinesis Firehose Delivery",
      "description": "Managed real-time log streaming service for delivering data directly to object stores.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s3_d1",
      "label": "Buffer Hints Tuning",
      "description": "Configuring 128 MB or 300-second buffer thresholds to optimize Parquet file sizes on S3.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s3_d2",
      "label": "Inline Lambda Transforms",
      "description": "Executing AWS Lambda functions to validate and transform records before object storage landing.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s4",
      "label": "Backpressure & Flow Control",
      "description": "Regulating log producer volume when downstream ingestion targets slow down.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s4_d1",
      "label": "TCP Socket Window Control",
      "description": "Utilizing TCP window sizes to throttle log shipping agents when buffer queues fill up.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s4_d2",
      "label": "Sampling & Dropping Rules",
      "description": "Dropping DEBUG log levels dynamically during high-traffic spikes to protect core pipelines.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s5",
      "label": "Structured JSON Logging Standards",
      "description": "Enforcing JSON formatting at log creation time to eliminate regex parsing overhead.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s5_d1",
      "label": "ECS (Elastic Common Schema) Standard",
      "description": "Standardizing field names (@timestamp, service.name, log.level) across application codebases.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t4_s5_d2",
      "label": "Correlation ID Injection",
      "description": "Injecting trace_id and span_id fields into log events for distributed tracing correlation.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5",
      "label": "File-Based Landing Zone Patterns",
      "description": "Organizing raw data files in cloud object stores like AWS S3 or Azure Blob Storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s1",
      "label": "Hive Style Partitioning Scheme",
      "description": "Structuring object keys using key=value directory formats for partition pruning.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s1_d1",
      "label": "Date-Time Key Hierarchy",
      "description": "Organizing paths as s3://bucket/table/year=2026/month=07/day=25/ to accelerate query filtering.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s1_d2",
      "label": "Partition Over-Segmentation Risks",
      "description": "Avoiding minute-level partitioning to prevent creating millions of tiny files.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s2",
      "label": "Atomic Object Ingestion Verification",
      "description": "Ensuring files are fully written and closed before triggering downstream ETL runs.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s2_d1",
      "label": "SUCCESS Marker Files",
      "description": "Writing zero-byte _SUCCESS files after completing batch data uploads to signal pipeline readiness.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s2_d2",
      "label": "S3 Event Notifications (SNS/SQS)",
      "description": "Publishing ObjectCreated events to SQS queues to trigger event-driven ingestion workflows.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s3",
      "label": "File Format Selection Metrics",
      "description": "Selecting optimal file storage formats (CSV, JSON, Avro, Parquet) for landing zones.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s3_d1",
      "label": "Raw Payload Compression (Gzip/Snappy)",
      "description": "Compressing raw text payloads using Gzip or Snappy to minimize network storage costs.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s3_d2",
      "label": "Schema Evolution Compatibility",
      "description": "Preferring Avro over CSV for landing zones due to Avro embedded JSON schema definitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s4",
      "label": "S3 Lifecycle & Tiering Policies",
      "description": "Automating object migration across storage classes based on access patterns.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s4_d1",
      "label": "Infrequent Access (IA) Transition",
      "description": "Transitioning raw landing objects to S3 Standard-IA after 30 days of inactivity.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s4_d2",
      "label": "Glacier Deep Archive Expiration",
      "description": "Archiving raw files to Glacier Deep Archive after 90 days for compliance retention.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s5",
      "label": "Object Store Consistency Models",
      "description": "Understanding storage consistency guarantees across cloud vendors.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s5_d1",
      "label": "S3 Strong Read-After-Write Consistency",
      "description": "Relying on AWS S3 strong consistency for immediate object listing after PUT operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t5_s5_d2",
      "label": "Multipart Upload Cleanup",
      "description": "Configuring lifecycle rules to abort incomplete multipart uploads after 7 days.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6",
      "label": "Distributed Message Buffer Queues",
      "description": "Buffer queues providing high-throughput decoupling between ingestion producers and consumers.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s1",
      "label": "Apache Kafka Topic Partitioning",
      "description": "Distributing event streams across log partitions for parallel horizontal scaling.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s1_d1",
      "label": "Partition Key Hashing (Murmur2)",
      "description": "Hashing message keys with Murmur2 algorithm to route related records to identical partitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s1_d2",
      "label": "Consumer Group Partition Assignment",
      "description": "Assigning topic partitions to individual consumer instances within a group.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s2",
      "label": "Kafka Producer Acknowledgment Modes",
      "description": "Configuring acks parameters to balance latency against data durability requirements.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s2_d1",
      "label": "acks=all (in-sync replicas)",
      "description": "Requiring all in-sync replicas (ISR) to acknowledge writes for maximum durability guarantees.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s2_d2",
      "label": "Idempotent Producer Enabling",
      "description": "Enabling enable.idempotence=true to prevent duplicate messages using sequence numbers.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s3",
      "label": "AWS SQS & Dead Letter Queues (DLQ)",
      "description": "Managed message queuing service with automatic retry and error isolation mechanisms.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s3_d1",
      "label": "Visibility Timeout Management",
      "description": "Adjusting visibility timeouts to prevent concurrent workers from processing duplicate messages.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s3_d2",
      "label": "DLQ Redrive Policies",
      "description": "Routing failed messages to Dead Letter Queues after maxReceiveCount failures for manual inspection.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s4",
      "label": "RabbitMQ AMQP Exchanges",
      "description": "Advanced Message Queuing Protocol broker supporting flexible routing topologies.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s4_d1",
      "label": "Direct vs Topic Exchanges",
      "description": "Routing messages to queues based on exact binding keys or wildcard routing key patterns.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s4_d2",
      "label": "Publisher Confirms & Prefetch",
      "description": "Configuring channel prefetch counts to prevent slow consumer node memory saturation.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s5",
      "label": "Buffer Retention & Compaction Policies",
      "description": "Managing broker disk retention limits and key-based log cleanup.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s5_d1",
      "label": "Retention Time vs Bytes Limits",
      "description": "Setting retention.ms and retention.bytes parameters to prevent disk volume exhaustion.",
      "type": "concept"
    },
    {
      "id": "de_root_p1_t6_s5_d2",
      "label": "Log Compaction (cleanup.policy=compact)",
      "description": "Retaining only the latest record payload for each key in topic log segments.",
      "type": "concept"
    },
    {
      "id": "de_root_p2",
      "label": "Batch & Stream Processing Engines",
      "description": "Distributed compute frameworks for transforming, aggregating, and joining massive datasets in batch or real-time.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1",
      "label": "Apache Spark Core Architecture",
      "description": "Distributed memory-centric compute engine operating across driver and executor worker nodes.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s1",
      "label": "RDD vs DataFrame vs Dataset APIs",
      "description": "Evolution of Spark abstractions from raw Java objects to optimized columnar DataFrames.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s1_d1",
      "label": "Resilient Distributed Datasets (RDD)",
      "description": "Low-level immutable JVM object collections supporting fine-grained lineage graph transformations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s1_d2",
      "label": "Encoder Serialization Performance",
      "description": "Using Spark Encoders to convert domain objects into off-heap binary format without Java serialization.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s2",
      "label": "Spark Catalyst Optimizer Pipeline",
      "description": "Extensible query optimizer that transforms logical plans into optimized physical execution plans.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s2_d1",
      "label": "Predicate Pushdown Optimization",
      "description": "Pushing WHERE clause filters down to Parquet file readers to eliminate unnecessary data scan.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s2_d2",
      "label": "Column Pruning Transformations",
      "description": "Stripping unreferenced columns from physical scans to reduce executor memory footprint.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s3",
      "label": "Tungsten Execution Engine",
      "description": "Spark CPU and memory optimization engine utilizing off-heap memory and code generation.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s3_d1",
      "label": "Off-Heap Memory Management",
      "description": "Managing raw memory bytes directly via sun.misc.Unsafe to bypass Java GC overhead.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s3_d2",
      "label": "Whole-Stage Code Generation",
      "description": "Collapsing query plan operators into single Java bytecode loops to maximize CPU L1/L2 cache usage.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s4",
      "label": "Spark Shuffle Architecture",
      "description": "Redistributing data across executor partitions during wide transformations like groupBy or join.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s4_d1",
      "label": "Sort-Based Shuffle Implementation",
      "description": "Writing partition data into sorted disk files with index files to limit open file descriptors.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s4_d2",
      "label": "Shuffle Spill Tuning",
      "description": "Adjusting spark.shuffle.file.buffer and spark.memory.fraction to minimize disk spilling.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s5",
      "label": "Broadcast Join vs Sort-Merge Join",
      "description": "Selecting join physical strategies based on table size metrics.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s5_d1",
      "label": "Broadcast Hash Join (BHJ)",
      "description": "Broadcasting small tables (<10MB) to all executors to eliminate network shuffle operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t1_s5_d2",
      "label": "Sort-Merge Join (SMJ) Mechanics",
      "description": "Shuffling, sorting, and merging two large tables along join keys across executor partitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2",
      "label": "PySpark & Window Functions",
      "description": "Python API for Apache Spark enabling complex analytical windowing and analytical queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s1",
      "label": "Window Specification & Framing",
      "description": "Defining partition boundaries and frame ordering for analytical computations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s1_d1",
      "label": "PARTITION BY & ORDER BY Clauses",
      "description": "Grouping data rows into logical windows and establishing row evaluation sequences.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s1_d2",
      "label": "Rows vs Range Frame Specifications",
      "description": "Defining window bounds by physical row offsets (ROWS BETWEEN) or value ranges (RANGE BETWEEN).",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s2",
      "label": "Ranking & Cumulative Functions",
      "description": "Computing row ranks, dense ranks, and cumulative sums across window frames.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s2_d1",
      "label": "ROW_NUMBER vs RANK vs DENSE_RANK",
      "description": "Evaluating tied values with sequential numbers, skipped ranks, or continuous ranks.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s2_d2",
      "label": "LAG & LEAD Analytic Offsets",
      "description": "Accessing preceding or succeeding row values without executing self-join operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s3",
      "label": "Vectorized PySpark UDFs (Pandas UDF)",
      "description": "Executing custom Python functions using Apache Arrow for high-speed vector transfer.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s3_d1",
      "label": "PyArrow Memory Zero-Copy Serialization",
      "description": "Transferring columnar batches between JVM and Python worker processes without serialization penalty.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s3_d2",
      "label": "Grouped Map Vectorized UDFs",
      "description": "Applying pandas.DataFrame operations to each grouped partition in parallel.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s4",
      "label": "Spark Memory Tuning Strategy",
      "description": "Allocating executor JVM memory across Execution, Storage, and User memory pools.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s4_d1",
      "label": "spark.memory.fraction Configuration",
      "description": "Setting the ratio of JVM heap dedicated to Spark internal memory management (default 0.6).",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s4_d2",
      "label": "Storage vs Execution Memory Eviction",
      "description": "Evicting cached data blocks when execution memory requires space for shuffle operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s5",
      "label": "Dynamic Resource Allocation",
      "description": "Automatically scaling Spark executor counts based on workload demand.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s5_d1",
      "label": "External Shuffle Service Setup",
      "description": "Preserving shuffle files on worker nodes so executors can be safely decommissioned.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t2_s5_d2",
      "label": "Executor Idle Timeout Thresholds",
      "description": "Releasing idle executors after spark.dynamicAllocation.executorIdleTimeout expires.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3",
      "label": "Apache Flink Stateful Stream Processing",
      "description": "Low-latency distributed stream processing engine providing stateful event-driven applications.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s1",
      "label": "Flink Event-Time Processing & Watermarks",
      "description": "Handling out-of-order stream events based on embedded event timestamps.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s1_d1",
      "label": "Bounded Out-of-Orderness Watermarks",
      "description": "Generating watermarks with fixed lag tolerances to signal event-time progression.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s1_d2",
      "label": "Allowed Lateness Policies",
      "description": "Configuring window late event allowances before dropping or routing to side outputs.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s2",
      "label": "Keyed State & RocksDB State Backend",
      "description": "Managing massive application state partitioned by record key.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s2_d1",
      "label": "RocksDB Off-Heap State Storage",
      "description": "Persisting keyed state blocks in embedded RocksDB instances to scale beyond JVM heap limits.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s2_d2",
      "label": "ValueState vs ListState vs MapState",
      "description": "Selecting state primitives based on data structure requirements for stream operators.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s3",
      "label": "Asynchronous Barrier Snapshotting (ABS)",
      "description": "Flink lightweight distributed checkpointing algorithm for fault tolerance.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s3_d1",
      "label": "Checkpoint Barrier Injection",
      "description": "Injecting checkpoint barriers into stream sources to trigger state persistence across operators.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s3_d2",
      "label": "Aligned vs Unaligned Checkpoints",
      "description": "Bypassing channel alignment delays during heavy backpressure using unaligned checkpointing.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s4",
      "label": "Savepoints vs Checkpoints",
      "description": "Distinguishing automatic fault-recovery snapshots from manual state migration points.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s4_d1",
      "label": "Manual Savepoint Triggering",
      "description": "Creating canonical state snapshots for application upgrades or cluster migration.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s4_d2",
      "label": "State Schema Evolution Rules",
      "description": "Evolving state POJO schemas using Avro or Protobuf backward compatibility definitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s5",
      "label": "Flink Stream Windowing Operators",
      "description": "Grouping continuous unbounded event streams into finite processing buckets.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s5_d1",
      "label": "Tumbling vs Sliding Windows",
      "description": "Partitioning streams into non-overlapping fixed time windows vs overlapping sliding windows.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t3_s5_d2",
      "label": "Session Windows with Dynamic Gaps",
      "description": "Grouping events into activity sessions separated by idle gap durations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4",
      "label": "Apache Beam Unified Programming Model",
      "description": "Portable open-source model for defining batch and streaming data processing pipelines.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s1",
      "label": "PCollection & PTransform Abstractions",
      "description": "Core Beam primitives for representing distributed datasets and execution steps.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s1_d1",
      "label": "Bounded vs Unbounded PCollections",
      "description": "Unified representation of finite batch files and infinite real-time event streams.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s1_d2",
      "label": "ParDo Multi-Output Operations",
      "description": "Applying element-wise processing functions (DoFn) with main and side outputs.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s2",
      "label": "Beam Pipeline Runners",
      "description": "Executing Beam pipelines across target engine backends like Dataflow, Flink, or Spark.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s2_d1",
      "label": "Google Cloud Dataflow Runner",
      "description": "Managed serverless execution of Beam pipelines with auto-scaling compute workers.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s2_d2",
      "label": "Portability Framework (Fn API)",
      "description": "Executing Python or Go pipeline transforms on Java-based runners using gRPC interfaces.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s3",
      "label": "Windowing, Triggering & Accumulating",
      "description": "Fine-grained control over when and how window results are emitted.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s3_d1",
      "label": "Early & Late Triggers",
      "description": "Emitting speculative window results before watermarks pass and updated results for late data.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s3_d2",
      "label": "Accumulating vs Retracting Modes",
      "description": "Emitting cumulative pane totals vs emitting explicit retraction events for previous panes.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s4",
      "label": "Side Inputs & Side Outputs",
      "description": "Passing auxiliary lookup data to transforms and routing filtered output elements.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s4_d1",
      "label": "Asynchronous Side Input Views",
      "description": "Broadcasting slowly-changing lookup tables to streaming transforms as PCollectionView.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s4_d2",
      "label": "TupleTag Filter Routing",
      "description": "Routing dead-letter errors or secondary record streams using typed TupleTags.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s5",
      "label": "Metrics & Pipeline Tracing",
      "description": "Monitoring Beam pipeline execution health across distributed workers.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s5_d1",
      "label": "Counter & Distribution Metrics",
      "description": "Tracking record throughput counts and latency distributions using native Beam Metrics APIs.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t4_s5_d2",
      "label": "Watermark Stagnation Alerting",
      "description": "Detecting stuck upstream sources by monitoring output watermark progression metrics.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5",
      "label": "DuckDB In-Process Analytical Engine",
      "description": "Embeddable high-performance vectorized OLAP database engine.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s1",
      "label": "Vectorized Execution Pipeline",
      "description": "Processing data in CPU-cache-friendly memory vectors rather than row-at-a-time.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s1_d1",
      "label": "Data Chunk Vector Memory Layout",
      "description": "Organizing memory into 2048-element DataChunks for SIMD instruction vectorization.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s1_d2",
      "label": "Morsel-Driven Parallelism",
      "description": "Scheduling fixed-size data morsels across worker threads dynamically to maximize CPU core usage.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s2",
      "label": "Zero-Copy Data Format Interoperability",
      "description": "Querying external Parquet, Arrow, and Postgres datasets directly without loading.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s2_d1",
      "label": "Direct Parquet File Scanning",
      "description": "Reading Parquet metadata headers directly to execute projection and predicate pushdowns.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s2_d2",
      "label": "Apache Arrow C Data Interface",
      "description": "Exchanging Arrow memory tables between DuckDB and Python/R without memory copy.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s3",
      "label": "DuckDB Memory Management",
      "description": "Managing query execution memory to prevent Out-Of-Memory (OOM) crashes.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s3_d1",
      "label": "Out-of-Core Processing (Disk Spilling)",
      "description": "Spilling intermediate hash aggregation and sort tables to disk when memory limits are reached.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s3_d2",
      "label": "Automatic Buffer Pool Sizing",
      "description": "Dynamically allocating buffer manager memory based on available system RAM limits.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s4",
      "label": "Spatial & JSON Extensions",
      "description": "Extending core analytical capabilities with dynamic extension modules.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s4_d1",
      "label": "JSON Read/Extract Expressions",
      "description": "Parsing JSON strings directly in SQL queries using vectorized JSON extraction functions.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s4_d2",
      "label": "Spatial Geometry Queries",
      "description": "Executing ST_Point, ST_Contains, and spatial join functions on geographical coordinates.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s5",
      "label": "DuckDB CLI & Local ETL Automation",
      "description": "Utilizing standalone DuckDB executables for lightweight local data transformations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s5_d1",
      "label": "COPY TO Export Syntax",
      "description": "Exporting SQL query results directly into compressed Parquet or CSV files via single SQL statements.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t5_s5_d2",
      "label": "Shell Pipeline Integration",
      "description": "Piping stdin/stdout streams into duckdb commands within Bash or CI/CD build scripts.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6",
      "label": "Polars Lazy Evaluation Framework",
      "description": "Lightning-fast DataFrames library written in Rust utilizing Apache Arrow and query optimization.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s1",
      "label": "LazyFrame Query Optimization Engine",
      "description": "Building logical execution plans before executing physical DataFrame evaluations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s1_d1",
      "label": "Filter & Projection Pushdown",
      "description": "Reordering query steps to filter rows and eliminate unused columns before loading data into memory.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s1_d2",
      "label": "Common Subexpression Elimination",
      "description": "Identifying duplicate DataFrame expressions to compute shared results only once.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s2",
      "label": "Apache Arrow Memory Alignment",
      "description": "Utilizing Arrow memory layout for zero-copy operations and cache locality.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s2_d1",
      "label": "Contiguous Columnar Buffers",
      "description": "Storing series values in aligned memory arrays to maximize L1/L2 cache hit rates.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s2_d2",
      "label": "Null Bitmap Representations",
      "description": "Tracking null values using separate bit masks rather than sentinel value placeholders.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s3",
      "label": "Polars Parallel Execution Engine",
      "description": "Multithreaded execution engine written in Rust using Rayon thread pools.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s3_d1",
      "label": "Lock-Free Thread Allocation",
      "description": "Partitioning DataFrame operations across CPU cores without global GIL locking penalties.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s3_d2",
      "label": "Streaming Mode Execution",
      "description": "Processing datasets larger than RAM in streaming chunks rather than single allocations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s4",
      "label": "Polars Expression API Syntax",
      "description": "Expressive functional syntax for defining parallel column transformations.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s4_d1",
      "label": "pl.col() Selector Combinators",
      "description": "Applying functions simultaneously across multiple columns matching string patterns or types.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s4_d2",
      "label": "Fast GroupBy Aggregations",
      "description": "Executing parallel multi-column group-by aggregations using specialized hash tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s5",
      "label": "PyArrow & Pandas Conversion Protocols",
      "description": "Interoperating between Polars, Pandas, and PyArrow data structures.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s5_d1",
      "label": "Zero-Copy to_arrow() Export",
      "description": "Exporting Polars DataFrames to PyArrow Table objects without memory reallocation.",
      "type": "concept"
    },
    {
      "id": "de_root_p2_t6_s5_d2",
      "label": "Pandas Conversion Overhead",
      "description": "Converting Polars to Pandas DataFrames via Arrow memory blocks.",
      "type": "concept"
    },
    {
      "id": "de_root_p3",
      "label": "Storage Formats & Table Formats",
      "description": "Columnar storage structures and open table format specs providing ACID transactions, time travel, and schema evolution.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1",
      "label": "Apache Parquet File Anatomy",
      "description": "Self-describing columnar storage format optimized for fast analytical query execution.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s1",
      "label": "Row Group & Column Chunk Structure",
      "description": "Partitioning file data into horizontal row groups containing vertical column chunks.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s1_d1",
      "label": "Row Group Size Optimization",
      "description": "Configuring 128 MB to 512 MB row group sizes to align with HDFS/S3 block transfer bounds.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s1_d2",
      "label": "Column Chunk Offset Headers",
      "description": "Reading file footer metadata to locate starting byte offsets of target query columns.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s2",
      "label": "Page-Level Encoding Algorithms",
      "description": "Compressing column values using specialized data encoding techniques.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s2_d1",
      "label": "Run-Length Encoding (RLE) & Bit-Packing",
      "description": "Compressing repeated values and low-cardinality integers into minimal bit representations.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s2_d2",
      "label": "Dictionary Encoding Rules",
      "description": "Replacing repeated string values with small integer key references stored in dictionary pages.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s3",
      "label": "Parquet Footer Metadata & Statistics",
      "description": "Embedded metadata containing schema definitions and column-level min/max statistics.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s3_d1",
      "label": "File Metadata Deserialization",
      "description": "Reading Thrift-encoded footer metadata at the end of files before scanning data pages.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s3_d2",
      "label": "Row Group Skipping (Min/Max Pruning)",
      "description": "Skipping entire row groups when query filter values fall outside min/max statistic ranges.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s4",
      "label": "Snappy vs ZSTD vs GZIP Compression",
      "description": "Selecting page compression codecs based on CPU vs storage tradeoffs.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s4_d1",
      "label": "Snappy Decompression Speed",
      "description": "Selecting Snappy for high-throughput query read workloads due to fast CPU decompression speeds.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s4_d2",
      "label": "ZSTD Compression Ratio Optimization",
      "description": "Using ZSTD compression levels 3-9 for cold archive storage to achieve 30% higher density.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s5",
      "label": "Bloom Filter Page Indexes",
      "description": "Probabilistic data structures embedded in Parquet files for fast equality filtering.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s5_d1",
      "label": "Split Block Bloom Filters",
      "description": "Checking bloom filter pages to determine if specific high-cardinality keys exist in a row group.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t1_s5_d2",
      "label": "False Positive Rate Tuning",
      "description": "Configuring 1% false positive rates to balance bloom filter memory size against skip accuracy.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2",
      "label": "Apache Iceberg Table Specification",
      "description": "High-performance open table format for huge analytic datasets, providing SQL ACID guarantees.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s1",
      "label": "Iceberg Architecture & Metadata Tree",
      "description": "Managing dataset state using a hierarchical tree of manifest files and snapshots.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s1_d1",
      "label": "Catalog Pointer Updates",
      "description": "Executing atomic swaps on catalog pointers (e.g. Hive Metastore, REST) to commit new snapshots.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s1_d2",
      "label": "Manifest List & Manifest File Roles",
      "description": "Indexing data files, partition values, and column min/max metrics in manifest files.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s2",
      "label": "ACID Snapshot Isolation & Time-Travel",
      "description": "Providing serializable transaction isolation and historic query snapshot capabilities.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s2_d1",
      "label": "Optimistic Concurrency Control (OCC)",
      "description": "Detecting commit conflicts and retrying snapshot generation when concurrent writers collide.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s2_d2",
      "label": "AS OF Snapshot Query Syntax",
      "description": "Querying historical table states using snapshot IDs or timestamps (SELECT * FROM t FOR SYSTEM_TIME AS OF ...).",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s3",
      "label": "Hidden Partitioning & Partition Evolution",
      "description": "Abstracting partition logic from user SQL queries and changing partition specs over time.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s3_d1",
      "label": "Partition Transform Functions",
      "description": "Applying year(), month(), day(), or bucket() transforms directly to timestamp/string columns.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s3_d2",
      "label": "Zero-Rewrite Partition Evolution",
      "description": "Adding or modifying partition specs without re-writing existing historical Parquet data files.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s4",
      "label": "Iceberg Schema Evolution Rules",
      "description": "Safely altering column names, types, and positions using unique field IDs.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s4_d1",
      "label": "Field ID Tracking Mechanics",
      "description": "Assigning immutable integer IDs to columns so renames do not break historical data references.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s4_d2",
      "label": "Safe Type Widening Bounds",
      "description": "Allowing safe widening (int to long, float to double) while preventing precision loss.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s5",
      "label": "Merge-on-Read vs Copy-on-Write",
      "description": "Selecting row update strategies based on write vs read query performance demands.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s5_d1",
      "label": "Position Delete & Equality Delete Files",
      "description": "Writing delta delete files during updates to avoid re-writing entire Parquet files immediately.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t2_s5_d2",
      "label": "Compaction Maintenance Jobs",
      "description": "Running rewriteDataFiles procedures to merge small files and compact delete deltas into base files.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3",
      "label": "Delta Lake Table Protocol",
      "description": "ACID storage layer built on top of cloud object storage using JSON transaction logs.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s1",
      "label": "DeltaLog JSON Transaction Log",
      "description": "Recording atomic commits as sequential JSON log files (_delta_log/000.json).",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s1_d1",
      "label": "Single Driver Commit Protocol",
      "description": "Enforcing atomic log file creation via cloud storage conditional PUTs or atomic RENAMES.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s1_d2",
      "label": "Log Checkpoint Parquet Files",
      "description": "Compacting every 10 JSON log commits into single Parquet checkpoint files for fast table loading.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s2",
      "label": "Delta Lake Optimizations (OPTIMIZE & Z-ORDER)",
      "description": "Coalescing small files and co-locating multi-column data for fast skipping.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s2_d1",
      "label": "Bin-Packing File Coalescing",
      "description": "Merging small 10MB Parquet files into target 1GB files to eliminate object store metadata overhead.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s2_d2",
      "label": "Z-Ordering Space-Filling Curves",
      "description": "Organizing multi-column data along Z-order curves to maximize multidimensional min/max pruning.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s3",
      "label": "Change Data Feed (CDF) Infrastructure",
      "description": "Tracking row-level changes across Delta table commits for streaming consumers.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s3_d1",
      "label": "_change_type Record Enrichment",
      "description": "Emitting insert, update_preimage, update_postimage, and delete change event records.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s3_d2",
      "label": "Incremental CDF Queries",
      "description": "Querying table change ranges between starting and ending commit versions or timestamps.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s4",
      "label": "Delta Lake Constraints & Schema Enforcement",
      "description": "Enforcing schema validation rules and SQL check constraints at write time.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s4_d1",
      "label": "Schema Auto-Merge (mergeSchema)",
      "description": "Opting into automatic schema expansion when incoming DataFrames include new columns.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s4_d2",
      "label": "CHECK Constraint Enforcement",
      "description": "Validating boolean SQL expressions (e.g. price > 0) before committing write transactions.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s5",
      "label": "Vacuum Protocol & Retention Safeguards",
      "description": "Deleting unreferenced historical files to reclaim object storage space.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s5_d1",
      "label": "VACUUM Retain Hours Parameter",
      "description": "Purging uncommitted or stale files older than 168 hours (7 days) from storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t3_s5_d2",
      "label": "Concurrent Reader Safeguards",
      "description": "Preventing zero-retention vacuum runs to avoid breaking active long-running SELECT queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4",
      "label": "Apache Hudi Data Management",
      "description": "Streaming data lake platform delivering atomic transactions, CDC ingestion, and index structures.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s1",
      "label": "Copy-on-Write (COW) vs Merge-on-Read (MOR)",
      "description": "Selecting Hudi storage types based on read/write latency requirements.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s1_d1",
      "label": "COW Synchronous Parquet Re-writing",
      "description": "Writing updated records into new Parquet file versions during pipeline ingestion commits.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s1_d2",
      "label": "MOR Avro Delta Log Streaming",
      "description": "Writing updates into log-based Avro delta files for asynchronous compaction into Parquet.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s2",
      "label": "Hudi Indexing Strategies",
      "description": "Mapping record keys to file group IDs to locate existing rows fast during updates.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s2_d1",
      "label": "Bloom Index File Lookup",
      "description": "Scanning Parquet footer bloom filters to identify target files containing update keys.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s2_d2",
      "label": "Global Simple Index vs HBase Index",
      "description": "Utilizing external key-value stores for ultra-fast record key to file location resolution.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s3",
      "label": "Timeline Architecture & Actions",
      "description": "Tracking table state using an ordered sequence of commits, cleans, and compactions.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s3_d1",
      "label": "Commit Instant States",
      "description": "Managing instant lifecycle states: REQUESTED, INFLIGHT, and COMPLETED.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s3_d2",
      "label": "Cleaner Plan Execution",
      "description": "Purging older file slices based on configured retention policies.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s4",
      "label": "Hudi DeltaStreamer Ingestion Tool",
      "description": "Standalone utility for streaming data from Kafka or DFS directly into Hudi tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s4_d1",
      "label": "Built-in Schema Provider Setup",
      "description": "Fetching target schemas dynamically from Confluent Schema Registry.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s4_d2",
      "label": "Checkpoint Token Persistence",
      "description": "Saving source stream position offsets in Hudi commit metadata for exact-once recovery.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s5",
      "label": "Clustering & File Sizing Management",
      "description": "Re-organizing Hudi data layouts to optimize query performance.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s5_d1",
      "label": "Inline vs Async Clustering",
      "description": "Grouping small data files into larger layout buckets without interrupting write pipelines.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t4_s5_d2",
      "label": "Space-Filling Curve (Hilbert) Sorting",
      "description": "Sorting data along Hilbert curves to improve multi-column data locality.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5",
      "label": "Apache Avro Serialization Format",
      "description": "Row-based binary data serialization system relying on JSON schema definitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s1",
      "label": "Avro Binary Encoding Rules",
      "description": "Encoding data values without field names or type markers into compact binary bytes.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s1_d1",
      "label": "Variable-Length Zigzag Encoding",
      "description": "Encoding signed integers into variable byte lengths to minimize payload byte size.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s1_d2",
      "label": "Schema-Coupled Deserialization",
      "description": "Requiring exact writer schemas during binary reader decoding operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s2",
      "label": "Confluent Schema Registry Integration",
      "description": "Centralized REST service for storing and versioning Avro schemas.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s2_d1",
      "label": "Magic Byte Payload Framing",
      "description": "Prefixing Avro payloads with 5-byte headers containing 4-byte Schema Registry IDs.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s2_d2",
      "label": "Backward & Forward Compatibility Checks",
      "description": "Enforcing schema compatibility rules to prevent broken downstream consumer decodes.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s3",
      "label": "Avro Container Files (OCF)",
      "description": "Self-describing files storing Avro JSON schemas alongside binary record blocks.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s3_d1",
      "label": "File Header Schema Embeddings",
      "description": "Embedding the full JSON schema string in the header block of .avro container files.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s3_d2",
      "label": "Sync Marker Block Separation",
      "description": "Separating data blocks with 16-byte random sync markers to allow parallel file splitting.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s4",
      "label": "Schema Evolution Resolution",
      "description": "Resolving differences between the schema used to write data and the reader schema.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s4_d1",
      "label": "Default Value Injection",
      "description": "Populating missing fields using default values defined in the reader schema.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s4_d2",
      "label": "Field Alias Mapping",
      "description": "Mapping renamed fields using the aliases attribute in Avro schema definitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s5",
      "label": "RPC Protocols & Schema Compilation",
      "description": "Defining gRPC-like protocols and compiling schemas into domain code classes.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s5_d1",
      "label": "Avro IDL (Interface Definition Language)",
      "description": "Writing clean human-readable .avdl files to generate JSON schemas automatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t5_s5_d2",
      "label": "SpecificRecord Code Generation",
      "description": "Compiling Avro schemas into strongly-typed Java POJOs using avro-tools Maven plugins.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6",
      "label": "Apache Arrow Columnar In-Memory Standard",
      "description": "Cross-language in-memory data format optimized for CPU/GPU SIMD analytics.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s1",
      "label": "Arrow Memory Layout Specification",
      "description": "Standardizing flat and nested columnar memory layouts across languages.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s1_d1",
      "label": "Bitmask Validity Buffers",
      "description": "Tracking null values using contiguous 1-bit boolean masks to avoid value padding.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s1_d2",
      "label": "Value Buffers & Offset Buffers",
      "description": "Storing variable-length strings using contiguous byte arrays and integer offset arrays.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s2",
      "label": "Zero-Copy Inter-Process Communication (IPC)",
      "description": "Exchanging memory tables between Python, R, C++, and Rust without serialization.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s2_d1",
      "label": "Arrow IPC Stream/File Format",
      "description": "Serializing Arrow record batches into flat buffers for zero-copy socket or file transfers.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s2_d2",
      "label": "Arrow C Data Interface",
      "description": "Passing Arrow memory pointers across C ABI boundaries without memory allocation.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s3",
      "label": "Arrow Flight RPC Framework",
      "description": "High-performance gRPC data transfer framework for streaming large Arrow record batches.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s3_d1",
      "label": "Flight SQL Protocol",
      "description": "Executing SQL queries over Arrow Flight to bypass slow ODBC/JDBC wire protocols.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s3_d2",
      "label": "Parallel Stream Endpoints",
      "description": "Distributing data download partitions across multiple server endpoints.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s4",
      "label": "SIMD Acceleration on Arrow Buffers",
      "description": "Executing Single Instruction Multiple Data (SIMD) CPU instructions on contiguous memory.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s4_d1",
      "label": "AVX-512 Vectorized Vector Operations",
      "description": "Executing vector addition, filtering, and aggregation across 512-bit CPU registers.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s4_d2",
      "label": "Cache-Line Alignment (64-byte)",
      "description": "Aligning memory buffer addresses to 64-byte boundaries for optimal CPU cache loads.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s5",
      "label": "PyArrow Memory Pool Management",
      "description": "Tracking and controlling memory allocations in Python analytical environments.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s5_d1",
      "label": "Default Allocator Setup (jemalloc)",
      "description": "Using jemalloc memory allocators to prevent memory fragmentation during DataFrame operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p3_t6_s5_d2",
      "label": "Memory Usage Accounting",
      "description": "Inspecting pyarrow.total_allocated_bytes() to prevent process Out-Of-Memory errors.",
      "type": "concept"
    },
    {
      "id": "de_root_p4",
      "label": "Data Warehouse & OLAP Architecture",
      "description": "Columnar analytical database engines designed for complex SQL queries, star-schema modeling, and massive concurrency.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1",
      "label": "Dimensional Modeling (Kimball Methodology)",
      "description": "Designing data warehouse schemas using fact and dimension tables optimized for analytical business queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s1",
      "label": "Fact Table Granularity & Metrics",
      "description": "Defining individual row grain and numeric additive metrics.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s1_d1",
      "label": "Atomic Grain Definition",
      "description": "Establishing the precise physical business event represented by each fact table row.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s1_d2",
      "label": "Additive vs Semi-Additive Facts",
      "description": "Distinguishing fully sum-able metrics (revenue) from non-additive metrics (account balances).",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s2",
      "label": "Slowly Changing Dimensions (SCD Type 1/2/3)",
      "description": "Managing historical attribute changes in dimension tables over time.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s2_d1",
      "label": "SCD Type 1 (Overwrite)",
      "description": "Overwriting legacy dimension attribute values directly, losing historical state tracking.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s2_d2",
      "label": "SCD Type 2 (Valid From/To Timestamping)",
      "description": "Inserting new dimension rows with surrogate keys, valid_from, valid_to, and is_current flags.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s3",
      "label": "Conformed Dimensions & Bus Matrix",
      "description": "Standardizing dimension tables across multiple business process data marts.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s3_d1",
      "label": "Shared Dim_Customer / Dim_Product",
      "description": "Reusing single conformed dimension tables across sales, billing, and support fact tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s3_d2",
      "label": "Enterprise Data Bus Architecture",
      "description": "Mapping business processes against shared dimensions in an enterprise bus matrix.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s4",
      "label": "Junk & Degenerate Dimensions",
      "description": "Handling miscellaneous flags and transaction identifiers in fact tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s4_d1",
      "label": "Junk Dimension Combining",
      "description": "Grouping low-cardinality flags and indicators into single surrogate-keyed junk dimensions.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s4_d2",
      "label": "Degenerate Transaction IDs",
      "description": "Storing invoice numbers or order IDs directly in fact tables without foreign key joins.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s5",
      "label": "Bridge Tables for Multi-Valued Attributes",
      "description": "Resolving many-to-many relationships between facts and dimensions.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s5_d1",
      "label": "Weight Factor Allocation",
      "description": "Assigning fractional weighting factors to bridge table rows to prevent metric double-counting.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t1_s5_d2",
      "label": "Group Surrogate Keys",
      "description": "Linking fact rows to dimension groups via intermediate bridge table surrogate keys.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2",
      "label": "Snowflake Architecture & Micro-Partitions",
      "description": "Cloud-native multi-cluster shared-data data warehouse separating compute and storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s1",
      "label": "Micro-Partitioning & Pruning Engine",
      "description": "Automatically partitioning table data into contiguous 50-500 MB uncompressed blocks.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s1_d1",
      "label": "Metadata Range Min/Max Pruning",
      "description": "Consulting Cloud Services layer metadata to skip micro-partitions outside query filter bounds.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s1_d2",
      "label": "Clustering Depth Metrics",
      "description": "Monitoring SYSTEM$CLUSTERING_DEPTH to determine table partition fragmentation.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s2",
      "label": "Multi-Cluster Virtual Warehouse Scaling",
      "description": "Scaling compute clusters horizontally and vertically to handle concurrent workloads.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s2_d1",
      "label": "Auto-Scaling Policy Configuration",
      "description": "Configuring Standard vs Economy scaling policies to start/stop warehouse clusters automatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s2_d2",
      "label": "Warehouse Size Resizing (X-Small to 6X-Large)",
      "description": "Resizing virtual warehouses dynamically to scale memory and CPU cores for heavy queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s3",
      "label": "Snowflake Zero-Copy Cloning",
      "description": "Creating instant table, schema, or database clones without duplicating underlying storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s3_d1",
      "label": "Metadata Pointer Copying",
      "description": "Duplicating micro-partition metadata references to create read-write table copies instantly.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s3_d2",
      "label": "Copy-on-Write Micro-Partition Creation",
      "description": "Writing new micro-partitions only when modified data is written to cloned tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s4",
      "label": "Time Travel & Fail-Safe Mechanics",
      "description": "Querying and restoring historic table states within retention windows.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s4_d1",
      "label": "DATA_RETENTION_TIME_IN_DAYS Setup",
      "description": "Configuring 0 to 90 days of historic retention for UNDROP and AT(TIMESTAMP => ...) queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s4_d2",
      "label": "7-Day Non-Configurable Fail-Safe",
      "description": "Utilizing Snowflake disaster recovery storage after Time Travel retention expires.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s5",
      "label": "Search Optimization Service (SOS)",
      "description": "Building background search access paths for fast point lookup queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s5_d1",
      "label": "Equality & Substring Search Indexes",
      "description": "Accelerating selective needle-in-a-haystack queries on large tables containing text columns.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t2_s5_d2",
      "label": "SOS Maintenance Cost Tracking",
      "description": "Monitoring compute credit consumption for continuous search index maintenance.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3",
      "label": "Google BigQuery Serverless Architecture",
      "description": "Serverless enterprise data warehouse separating storage (Dremel) and compute (Colossus).",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s1",
      "label": "Slot Reservation & Allocation Engine",
      "description": "Managing BigQuery virtual CPU compute units (slots) for query execution.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s1_d1",
      "label": "On-Demand vs Editions (Standard/Enterprise)",
      "description": "Selecting per-TiB query pricing vs dedicated slot reservations with autoscaling bounds.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s1_d2",
      "label": "Fair Scheduler Slot Sharing",
      "description": "Distributing allocated slots dynamically among concurrent running queries within project pools.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s2",
      "label": "BigQuery In-Memory BI Engine",
      "description": "Ultra-fast in-memory analysis service that accelerates SQL queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s2_d1",
      "label": "Vectorized Memory Sub-Engine",
      "description": "Caching frequently scanned table columns in execution memory for sub-second dashboards.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s2_d2",
      "label": "Reservation Memory Allocation",
      "description": "Allocating GB memory capacities to specific GCP projects and table locations.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s3",
      "label": "Partitioning & Clustering Strategies",
      "description": "Optimizing table scan costs and query speeds by organizing data layouts.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s3_d1",
      "label": "Ingestion-Time vs Column Partitioning",
      "description": "Partitioning tables by _PARTITIONTIME or specific DATE/TIMESTAMP columns (max 4000 partitions).",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s3_d2",
      "label": "Multi-Column Clustering Keys",
      "description": "Ordering table data by up to 4 columns to optimize range scan and aggregation queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s4",
      "label": "BigQuery Materialized Views",
      "description": "Pre-computed query result tables updated incrementally as base tables change.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s4_d1",
      "label": "Smart Query Rewrite Engine",
      "description": "Rerouting SQL queries automatically to use valid materialized views without query text changes.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s4_d2",
      "label": "Zero-Maintenance Incremental Refresh",
      "description": "Updating materialized view data delta changes in background without full table scans.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s5",
      "label": "BigQuery Omni & Storage API",
      "description": "Querying multi-cloud data (AWS/Azure) and streaming high-throughput Arrow reads.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s5_d1",
      "label": "BigQuery Storage Read API",
      "description": "Streaming structured Arrow/Avro record batches directly into Spark or Python applications.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t3_s5_d2",
      "label": "Cross-Cloud BigQuery Omni Access",
      "description": "Executing BigQuery SQL queries on S3 or Azure Blob storage without data egress.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4",
      "label": "Amazon Redshift Architecture",
      "description": "Fully managed petabyte-scale cloud data warehouse utilizing MPP (Massively Parallel Processing).",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s1",
      "label": "Distribution Styles (EVEN, KEY, ALL, AUTO)",
      "description": "Distributing table rows across compute node slices to optimize join performance.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s1_d1",
      "label": "KEY Distribution Colocation",
      "description": "Hashing join key columns to store matching table rows on identical compute node slices.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s1_d2",
      "label": "DISTSTYLE ALL Replication",
      "description": "Replicating small dimension tables across all node slices to eliminate network join shuffles.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s2",
      "label": "Sort Keys (COMPOUND vs INTERLEAVED)",
      "description": "Sorting column data on disk to accelerate range and filtering queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s2_d1",
      "label": "COMPOUND Sort Key Hierarchies",
      "description": "Ordering data sequentially by primary, secondary, and tertiary filter key columns.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s2_d2",
      "label": "INTERLEAVED Equal-Weight Sorting",
      "description": "Assigning equal sorting weight across multiple query filter columns using Z-order curves.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s3",
      "label": "RA3 Nodes & Redshift Managed Storage (RMS)",
      "description": "Separating compute from storage by storing data blocks in S3-backed managed storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s3_d1",
      "label": "High-Performance SSD Cache",
      "description": "Caching hot micro-blocks on local NVMe SSDs while offloading cold data to RMS S3 storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s3_d2",
      "label": "Cross-Cluster Data Sharing",
      "description": "Sharing live read-only datasets across isolated Redshift compute clusters without data movement.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s4",
      "label": "Concurrency Scaling & WLM Workload Management",
      "description": "Managing query queues and automatically spinning up transient compute capacity.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s4_d1",
      "label": "Automatic WLM Memory Allocation",
      "description": "Allocating RAM and concurrency limits to query queues based on priority rules.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s4_d2",
      "label": "Transient Concurrency Scaling Clusters",
      "description": "Offloading bursting read queries automatically to background serverless scaling clusters.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s5",
      "label": "Automatic Table Optimization (ATO)",
      "description": "Utilizing machine learning to continuously optimize table sort and distribution keys.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s5_d1",
      "label": "Workload Query Pattern Analysis",
      "description": "Analyzing historical query execution logs to recommend or apply optimal DISTKEY/SORTKEY settings.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t4_s5_d2",
      "label": "Background Auto-VACUUM & Auto-ANALYZE",
      "description": "Reclaiming deleted space and updating column distribution statistics automatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5",
      "label": "ClickHouse Real-Time Columnar Engine",
      "description": "Open-source column-oriented DBMS for real-time analytical report generation.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s1",
      "label": "MergeTree Storage Engine Family",
      "description": "Core storage engine organizing data into primary-key sorted data parts.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s1_d1",
      "label": "Primary Index Sparse Indexing",
      "description": "Creating sparse index marks for every 8192 rows to allow fast binary search skipping.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s1_d2",
      "label": "Background Part Merging Process",
      "description": "Merging un-sorted data parts in background threads to maintain sorted storage ordering.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s2",
      "label": "ReplacingMergeTree & AggregatingMergeTree",
      "description": "Specialized engines for deduplicating records and pre-aggregating metrics.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s2_d1",
      "label": "ReplacingMergeTree Deduplication",
      "description": "Deduplicating duplicate keys asynchronously during background part merge passes.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s2_d2",
      "label": "AggregatingMergeTree AggregateState",
      "description": "Storing intermediate aggregate state states (e.g. HyperLogLog) for fast rollups.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s3",
      "label": "Vectorized Query Execution & SIMD",
      "description": "Processing block arrays in parallel using SIMD hardware acceleration.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s3_d1",
      "label": "Block Vector Processing (65K rows)",
      "description": "Passing 65,536-row data blocks through query operators to maximize CPU pipeline usage.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s3_d2",
      "label": "JIT Compilation (LLVM)",
      "description": "Compiling SQL expressions into native machine code at runtime using LLVM.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s4",
      "label": "ClickHouse Distributed Tables",
      "description": "Sharding and replicating tables across multi-node ClickHouse clusters.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s4_d1",
      "label": "Distributed Engine Query Routing",
      "description": "Distributing SQL query execution across target shard instances and aggregating partial results.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s4_d2",
      "label": "ReplicatedMergeTree ZooKeeper Coordination",
      "description": "Synchronizing part mutation logs across replica nodes via ZooKeeper or Keeper.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s5",
      "label": "ClickHouse Kafka Engine Integration",
      "description": "Streaming events directly from Kafka topics into ClickHouse tables without ETL.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s5_d1",
      "label": "Kafka Engine Consumer Setup",
      "description": "Consuming raw JSON or Protobuf messages directly into internal stream buffers.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t5_s5_d2",
      "label": "Materialized View Trigger Ingestion",
      "description": "Attaching Materialized Views to pull from Kafka Engine tables and persist into MergeTree tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6",
      "label": "OLAP Cube Pre-Aggregation & Caching",
      "description": "Pre-computing multi-dimensional metric aggregations to deliver sub-second response times.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s1",
      "label": "Cube Rollups & GROUP BY GROUPING SETS",
      "description": "Calculating aggregates across multiple combination sets of dimensions.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s1_d1",
      "label": "CUBE & ROLLUP SQL Clauses",
      "description": "Generating power-set combinations of dimension aggregations in single SQL passes.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s1_d2",
      "label": "Materialized Grouping Set Tables",
      "description": "Persisting pre-computed grouping sets into fast cache layers or OLAP engine tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s2",
      "label": "Cube.js & Semantic Layer Engines",
      "description": "Headless semantic layer engines providing metric definitions and caching.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s2_d1",
      "label": "Semantic Data Modeling Specs",
      "description": "Defining measures, dimensions, and join relationships in centralized YAML/JS files.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s2_d2",
      "label": "Pre-Aggregation Refresh Scheduling",
      "description": "Warming pre-aggregation caches automatically based on cron schedules or partition triggers.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s3",
      "label": "HyperLogLog (HLL) Cardinality Estimation",
      "description": "Probabilistic data structure for estimating distinct counts with minimal memory.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s3_d1",
      "label": "Flajolet-Martin Algorithm Base",
      "description": "Estimating COUNT(DISTINCT) metrics using leading zero counts of hashed bit patterns.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s3_d2",
      "label": "Relative Error Bounds (1-2%)",
      "description": "Achieving 99% accuracy while reducing cardinality memory footprint from gigabytes to kilobytes.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s4",
      "label": "Result Set Caching Architecture",
      "description": "Caching query results at data warehouse and API layer boundaries.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s4_d1",
      "label": "Cache Invalidation by Snapshot ID",
      "description": "Invalidating cached SQL results whenever underlying table transaction IDs change.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s4_d2",
      "label": "Redis In-Memory Result Caching",
      "description": "Caching JSON API query payloads in Redis with short TTL expiration policies.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s5",
      "label": "Incremental View Maintenance (IVM)",
      "description": "Updating pre-aggregated query views using only incoming delta change records.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s5_d1",
      "label": "Delta State Algebra Rules",
      "description": "Applying addition and subtraction delta state changes to summary metric counts.",
      "type": "concept"
    },
    {
      "id": "de_root_p4_t6_s5_d2",
      "label": "Batch Delta Merging Routines",
      "description": "Compacting high-frequency micro-deltas before updating summary tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p5",
      "label": "Pipeline Orchestration & Scheduling",
      "description": "Frameworks for defining, dependency-graphing, scheduling, and monitoring complex data workflows.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1",
      "label": "Apache Airflow DAG Architecture",
      "description": "Python framework for programmatically authoring, scheduling, and monitoring DAG workflows.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s1",
      "label": "DAG & Operator Declarative Spec",
      "description": "Defining Directed Acyclic Graphs of tasks using Python code.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s1_d1",
      "label": "Bitshift Operator Syntax (>>)",
      "description": "Chaining task execution order using Python bitshift operators (task1 >> task2).",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s1_d2",
      "label": "Immutability & Idempotency Rules",
      "description": "Enforcing idempotent task executions to ensure retries produce deterministic data outputs.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s2",
      "label": "Airflow TaskInstance State Machine",
      "description": "Managing execution lifecycles of individual Airflow tasks.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s2_d1",
      "label": "State Transition Sequence",
      "description": "Tracking transitions: None -> Scheduled -> Queued -> Running -> Success / Failed.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s2_d2",
      "label": "Trigger Rules (all_success, one_failed)",
      "description": "Controlling task execution based on parent task completion states.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s3",
      "label": "XCom Data Passing Mechanics",
      "description": "Exchanging small metadata state values between tasks within a DAG run.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s3_d1",
      "label": "XCom Backend Customization",
      "description": "Overriding default DB XCom storage with S3/GCS backends to handle larger metadata payloads.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s3_d2",
      "label": "XCom Pull/Push Overheads",
      "description": "Avoiding heavy DataFrame transfers via XCom to prevent database bloat.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s4",
      "label": "Airflow Sensor Patterns",
      "description": "Tasks that poll external systems until a specific condition or file appears.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s4_d1",
      "label": "Poke vs Reschedule Mode",
      "description": "Using mode=\"reschedule\" to free up worker slots between long-polling sensor checks.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s4_d2",
      "label": "Smart Sensors & Deferrable Operators",
      "description": "Offloading polling loops to async asyncio triggerer processes to conserve worker memory.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s5",
      "label": "Dynamic DAG Generation",
      "description": "Programmatically constructing DAG workflows from external YAML configs or database tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s5_d1",
      "label": "Globals Namespace Injection",
      "description": "Injecting dynamic DAG instances into Python globals() dicts for scheduler discovery.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t1_s5_d2",
      "label": "DAG File Parsing Overhead",
      "description": "Optimizing top-level Python code execution to keep DAG parsing times under 2 seconds.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2",
      "label": "Airflow Executor Implementations",
      "description": "Compute architectures for executing queued Airflow task instances across infrastructure.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s1",
      "label": "CeleryExecutor Queue Management",
      "description": "Distributing tasks to Celery worker pools using Redis or RabbitMQ message brokers.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s1_d1",
      "label": "Celery Worker Concurrency Tuning",
      "description": "Setting worker_concurrency to control parallel task slots per worker node.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s1_d2",
      "label": "Custom Celery Queue Routing",
      "description": "Routing heavy ETL tasks to high-memory worker queues using queue parameters.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s2",
      "label": "KubernetesExecutor Pod Allocation",
      "description": "Spinning up ephemeral Kubernetes Pods for isolated task executions.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s2_d1",
      "label": "Pod Resource Requests & Limits",
      "description": "Configuring precise CPU and memory requests per task pod to optimize cluster packing.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s2_d2",
      "label": "Pod Mutation Hooks",
      "description": "Injecting sidecar containers, secrets, or volume mounts into task pods before execution.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s3",
      "label": "LocalExecutor & SequentialExecutor",
      "description": "Executing tasks locally on single-machine scheduler instances.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s3_d1",
      "label": "LocalExecutor Parallel Process Pools",
      "description": "Utilizing Python multiprocessing pools for local task execution without Celery.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s3_d2",
      "label": "SequentialExecutor SQLite Constraints",
      "description": "Restricting execution to single tasks during local development due to SQLite lock limits.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s4",
      "label": "KPO (KubernetesPodOperator) Patterns",
      "description": "Running arbitrary container images as isolated Airflow tasks.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s4_d1",
      "label": "Container Environment Isolation",
      "description": "Decoupling task library dependencies from the core Airflow worker environment.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s4_d2",
      "label": "Image Pull Policy & Secrets Handling",
      "description": "Injecting imagePullSecrets and env_from to authenticate against private container registries.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s5",
      "label": "Scheduler High-Availability (HA)",
      "description": "Running multiple Airflow scheduler instances concurrently to prevent single points of failure.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s5_d1",
      "label": "Row-Level Database Lock Coordination",
      "description": "Coordinating task scheduling across multiple instances using SQL row locks.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t2_s5_d2",
      "label": "Heartbeat Monitoring & Orphan Adoption",
      "description": "Adopting orphaned task instances when scheduler nodes crash.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3",
      "label": "Dagster Data-Aware Orchestration",
      "description": "Next-generation orchestrator focusing on software-defined assets, data freshness, and testability.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s1",
      "label": "Software-Defined Assets (SDA)",
      "description": "Declaring pipeline tasks in terms of the data assets they produce.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s1_d1",
      "label": "@asset Decorator Specification",
      "description": "Annotating Python functions to define asset dependencies and compute logic.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s1_d2",
      "label": "Asset Materialization Lineage",
      "description": "Tracking asset versioning and dependency graphs automatically across execution runs.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s2",
      "label": "Partitioned Assets & Backfill Jobs",
      "description": "Slicing data assets by time ranges or static keys for incremental processing.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s2_d1",
      "label": "Daily/Hourly Partition Definitions",
      "description": "Defining time-window partitions to compute incremental data slices.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s2_d2",
      "label": "Parallel Partition Backfilling",
      "description": "Executing multi-partition backfills across target historical time windows.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s3",
      "label": "Auto-Materialize Declarative Policies",
      "description": "Automatically updating downstream assets when parent data changes.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s3_d1",
      "label": "Freshness Policy Specifications",
      "description": "Configuring Maximum Lag rules (e.g. data must be updated within 2 hours).",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s3_d2",
      "label": "Eager vs Lazy Auto-Materialization",
      "description": "Triggering immediate downstream runs vs batching updates to meet freshness SLAs.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s4",
      "label": "Dagster I/O Managers & Resources",
      "description": "Decoupling compute logic from storage storage backends.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s4_d1",
      "label": "Polars / DuckDB I/O Managers",
      "description": "Automating asset data loading and saving to Parquet/Snowflake without boilerplate code.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s4_d2",
      "label": "Pluggable Resource Providers",
      "description": "Swapping database connection resources between local dev mocks and production instances.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s5",
      "label": "Dagster Dbt & Airbyte Integration",
      "description": "First-class integration with external data tools to build unified asset graphs.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s5_d1",
      "label": "dbt Manifest Ingestion",
      "description": "Parsing dbt manifest.json files to generate Dagster asset nodes automatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t3_s5_d2",
      "label": "Airbyte Stream Asset Synchronization",
      "description": "Tracking raw Airbyte ingestion jobs as upstream asset dependencies.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4",
      "label": "Prefect Modern Workflow Engine",
      "description": "Python workflow orchestration engine featuring dynamic DAGs, native async, and cloud deployment.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s1",
      "label": "@flow and @task Imperative Decorators",
      "description": "Turning standard Python code into resilient workflows by adding decorators.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s1_d1",
      "label": "Dynamic Control Flow Support",
      "description": "Supporting standard Python if statements, loops, and recursion within flow functions.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s1_d2",
      "label": "Native Asyncio Co-routine Execution",
      "description": "Executing async tasks concurrently within Python asyncio event loops.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s2",
      "label": "Prefect Work Pools & Workers",
      "description": "Infrastructure management model for polling, provisioning, and running flow deployments.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s2_d1",
      "label": "Process vs Kubernetes Work Pools",
      "description": "Routing deployments to local processes, Docker containers, or Kubernetes Jobs.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s2_d2",
      "label": "Worker Heartbeat & Cancellation",
      "description": "Monitoring worker node health and handling graceful task cancellation.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s3",
      "label": "Task Result Persistence & Caching",
      "description": "Caching task execution outputs to skip redundant computation on retries.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s3_d1",
      "label": "Cache Key Computation Rules",
      "description": "Hashing task inputs, code definitions, and custom parameters to build cache keys.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s3_d2",
      "label": "FileSystem & S3 Result Storage",
      "description": "Persisting serialized task outputs to object stores for cross-flow state sharing.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s4",
      "label": "Prefect Cloud Artifacts & Automations",
      "description": "Generating rich markdown reports and triggering automated incident responses.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s4_d1",
      "label": "Markdown Table Artifact Publishing",
      "description": "Publishing custom summary tables and charts directly to the Prefect UI dashboard.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s4_d2",
      "label": "Event-Driven Webhook Triggers",
      "description": "Triggering flow runs automatically when external webhook events are received.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s5",
      "label": "State Change Hooks & Retries",
      "description": "Attaching custom callback functions to task and flow state transitions.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s5_d1",
      "label": "on_failure & on_completion Callbacks",
      "description": "Executing Slack or PagerDuty alert notifications when tasks transition to Failed states.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t4_s5_d2",
      "label": "Exponential Task Retry Configurations",
      "description": "Configuring retry_delay_seconds with exponential backoff multipliers.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5",
      "label": "dbt Cloud & Core Orchestration",
      "description": "Transforming data inside warehouses by executing modular SQL models and tests.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s1",
      "label": "dbt DAG Resolution & Selection Syntax",
      "description": "Building transformation dependency graphs using ref() functions.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s1_d1",
      "label": "ref() & source() Dynamic Compilation",
      "description": "Resolving SQL model dependencies and generating target database table names.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s1_d2",
      "label": "Node Selection Syntax (+model+)",
      "description": "Selecting models, upstream parents (+model), and downstream children (model+) for execution.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s2",
      "label": "dbt Slim Builds & State Comparison",
      "description": "Executing only modified dbt models in CI/CD pipelines to save time and compute.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s2_d1",
      "label": "state:modified Selector Logic",
      "description": "Comparing current dbt code against historical manifest.json artifacts to isolate changes.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s2_d2",
      "label": "Deferring Unmodified Models (defer)",
      "description": "Rerouting upstream model references to production schemas during development builds.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s3",
      "label": "Materialization Strategies (Table, View, Incremental)",
      "description": "Configuring how SQL models are persisted in the data warehouse.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s3_d1",
      "label": "Incremental Model Strategy Tuning",
      "description": "Configuring merge or append strategies using is_incremental() macro checks.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s3_d2",
      "label": "Ephemeral Models (CTE Expansion)",
      "description": "Inlining SQL transformations as Common Table Expressions without creating database objects.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s4",
      "label": "dbt Semantic Layer & MetricFlow",
      "description": "Defining standardized business metrics directly within dbt projects.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s4_d1",
      "label": "Semantic Model YAML Specs",
      "description": "Defining entities, dimensions, and measures in version-controlled dbt project files.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s4_d2",
      "label": "MetricFlow Query Engine Execution",
      "description": "Generating SQL queries dynamically to compute metrics on-the-fly for BI tools.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s5",
      "label": "dbt Hooks & Grant Management",
      "description": "Executing auxiliary SQL statements before/after models build and managing access permissions.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s5_d1",
      "label": "Pre-Hook & Post-Hook SQL Statements",
      "description": "Executing AUDIT logging or VACUUM commands before and after model runs.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t5_s5_d2",
      "label": "Centralized Grants Management",
      "description": "Applying SELECT permissions to database roles automatically using dbt grants configurations.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6",
      "label": "Workload SLA & Backfill Management",
      "description": "Strategies for monitoring data delivery deadlines and executing historical re-runs.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s1",
      "label": "Service Level Agreement (SLA) Tracking",
      "description": "Monitoring pipeline execution durations against business delivery deadlines.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s1_d1",
      "label": "Airflow sla_miss_callback Alerts",
      "description": "Triggering alert notifications when tasks exceed configured execution time bounds.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s1_d2",
      "label": "Pipeline Duration Anomaly Alerts",
      "description": "Detecting unusual task duration spikes using historical baseline statistics.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s2",
      "label": "Backfill Execution Strategies",
      "description": "Re-running historical pipeline intervals after fixing code bugs or adding columns.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s2_d1",
      "label": "Catchup=False Safeguard Setup",
      "description": "Preventing unexpected automatic execution of historic DAG runs upon initial deployment.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s2_d2",
      "label": "Parallel Backfill Chunking",
      "description": "Splitting multi-year backfills into discrete monthly execution chunks to manage warehouse load.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s3",
      "label": "Circuit Breakers & Pipeline Halting",
      "description": "Automatically stopping downstream DAG execution when upstream data quality fails.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s3_d1",
      "label": "Data Quality Fail Fast Sensors",
      "description": "Aborting pipeline runs immediately if upstream row count or null checks fail.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s3_d2",
      "label": "Global Kill Switches",
      "description": "Utilizing Airflow Variables or feature flags to pause processing during outages.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s4",
      "label": "Idempotent Pipeline Design Rules",
      "description": "Ensuring pipeline runs can be executed repeatedly for the same date without corrupting data.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s4_d1",
      "label": "Overwrite Partition Target Write",
      "description": "Replacing target date partitions entirely rather than performing blind APPEND operations.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s4_d2",
      "label": "Unique Key Deduplication Upserts",
      "description": "Executing MERGE INTO statements using unique primary keys during data writes.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s5",
      "label": "Cross-DAG Dependency Management",
      "description": "Coordinating workflow execution sequences across separate pipeline DAG files.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s5_d1",
      "label": "ExternalTaskSensor Polling",
      "description": "Pausing downstream DAG tasks until specific tasks in upstream DAGs complete successfully.",
      "type": "concept"
    },
    {
      "id": "de_root_p5_t6_s5_d2",
      "label": "Dataset-Triggered Workflows (Airflow 2.4+)",
      "description": "Triggering DAG runs automatically when target data datasets are updated.",
      "type": "concept"
    },
    {
      "id": "de_root_p6",
      "label": "Data Quality & Observability",
      "description": "Frameworks and protocols for testing data, detecting anomalies, enforcing schema contracts, and tracking end-to-end lineage.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1",
      "label": "Great Expectations Test Framework",
      "description": "Python data validation framework for defining, testing, and documenting data assertions.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s1",
      "label": "Expectation Suites & Validation Rules",
      "description": "Defining declarative assertion rules for datasets.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s1_d1",
      "label": "expect_column_values_to_not_be_null",
      "description": "Asserting that target columns contain zero null values across dataset rows.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s1_d2",
      "label": "expect_column_values_to_be_between",
      "description": "Validating that numeric column values remain strictly within minimum and maximum bounds.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s2",
      "label": "Data Docs Automatic Generation",
      "description": "Compiling Expectation Suites into human-readable HTML documentation sites.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s2_d1",
      "label": "HTML Validation Report Publishing",
      "description": "Building visual validation reports detailing test pass/fail results and summary statistics.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s2_d2",
      "label": "S3/GCS Data Docs Hosting",
      "description": "Hosting generated HTML documentation sites on cloud object storage for team access.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s3",
      "label": "Checkpoint Execution & Integrations",
      "description": "Running Expectation Suites within data pipelines and Airflow DAGs.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s3_d1",
      "label": "Batch Request Configuration",
      "description": "Binding Data Docs validation runs to specific Spark or Pandas DataFrames.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s3_d2",
      "label": "Action List Callbacks (Slack/Email)",
      "description": "Routing failed validation notifications to Slack channels or alerting endpoints.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s4",
      "label": "Custom Expectation Development",
      "description": "Authoring custom domain-specific validation logic in Python.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s4_d1",
      "label": "ColumnMapExpectation Class Extension",
      "description": "Extending base classes to implement custom regex or business logic validations.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s4_d2",
      "label": "Metric Computation Functions",
      "description": "Defining custom metrics to evaluate complex multi-column relationships.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s5",
      "label": "Profiling & Automated Suite Generation",
      "description": "Analyzing existing datasets to automatically generate baseline Expectation Suites.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s5_d1",
      "label": "User Configurable Profiler Engines",
      "description": "Scanning database tables to infer data types, value ranges, and uniqueness rules.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t1_s5_d2",
      "label": "Baseline Suite Refining",
      "description": "Reviewing and adjusting auto-generated expectations before deploying to production.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2",
      "label": "dbt Data Testing & Macros",
      "description": "Testing data models directly inside warehouses using SQL assertions and jinja macros.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s1",
      "label": "Generic Out-of-the-Box Tests",
      "description": "Applying built-in assertions to model columns in schema.yml files.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s1_d1",
      "label": "unique & not_null Test Constraints",
      "description": "Generating SQL queries that fail if duplicate keys or null values are detected.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s1_d2",
      "label": "accepted_values & relationships",
      "description": "Validating categorical values against whitelist arrays and verifying foreign key integrity.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s2",
      "label": "Singular Custom SQL Tests",
      "description": "Writing custom SQL queries that return failing rows.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s2_d1",
      "label": "Zero-Row Failure Assertion Model",
      "description": "Structuring test SQL to return records only when data fails business validation logic.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s2_d2",
      "label": "Multi-Table Variance Thresholding",
      "description": "Asserting that row counts between staging and mart tables match within 0.1% thresholds.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s3",
      "label": "dbt Test Store Failures Configuration",
      "description": "Persisting failed test records into database tables for root-cause analysis.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s3_d1",
      "label": "store_failures=true Flag Configuration",
      "description": "Creating audit schemas to store exact failing rows when dbt test commands execute.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s3_d2",
      "label": "Audit Table Retention Lifecycle",
      "description": "Cleaning up historical test failure tables to prevent database storage clutter.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s4",
      "label": "Custom Jinja Test Macro Authoring",
      "description": "Creating reusable parameterised test templates using Jinja code.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s4_d1",
      "label": "test_ macro Naming Conventions",
      "description": "Defining reusable macro blocks in the macros/ directory for team-wide sharing.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s4_d2",
      "label": "Adapter-Specific SQL Handling",
      "description": "Utilizing target.type variables to handle dialect differences across Snowflake, BigQuery, and Postgres.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s5",
      "label": "dbt-expectations Package Integration",
      "description": "Porting Great Expectations assertions to dbt using the dbt-expectations library.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s5_d1",
      "label": "expect_table_row_count_to_equal_other_table",
      "description": "Asserting that raw ingestion and target staging tables contain identical row counts.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t2_s5_d2",
      "label": "expect_column_stdev_to_be_between",
      "description": "Monitoring statistical standard deviation metrics to detect data anomaly spikes.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3",
      "label": "Monte Carlo & Data Observability Platforms",
      "description": "Automated ML-driven monitoring of data downtime across pipelines, warehouses, and BI tools.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s1",
      "label": "5 Pillars of Data Observability",
      "description": "Measuring Freshness, Volume, Schema, Quality, and Lineage across data assets.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s1_d1",
      "label": "Freshness & Volume Anomaly Detection",
      "description": "Using ML models to detect when table updates are late or row counts drop unexpectedly.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s1_d2",
      "label": "Schema Drift Automated Alerting",
      "description": "Detecting deleted, renamed, or modified column types across warehouse tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s2",
      "label": "Metadata-Only Zero-Copy Agent Monitoring",
      "description": "Monitoring data health by inspecting warehouse system logs without reading PII rows.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s2_d1",
      "label": "INFORMATION_SCHEMA & Audit Log Scanning",
      "description": "Parsing query history logs to monitor table read/write volume and query execution frequency.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s2_d2",
      "label": "Data Privacy & Security Isolation",
      "description": "Eliminating security risks by avoiding reads of customer data payload contents.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s3",
      "label": "Root Cause Analysis & Incident Lineage",
      "description": "Tracing data anomalies back to broken upstream code, failed pipelines, or bad API payloads.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s3_d1",
      "label": "Upstream Lineage Impact Analysis",
      "description": "Visualizing downstream BI dashboard impacts when upstream table anomalies trigger alerts.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s3_d2",
      "label": "dbt Model & Git Commit Correlation",
      "description": "Correlating data quality drops with recent dbt code deployments or schema updates.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s4",
      "label": "Data Incident Triage & SLA Dashboards",
      "description": "Managing data downtime incidents using Slack, PagerDuty, and Jira integrations.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s4_d1",
      "label": "Incident Severity Level Classification",
      "description": "Assigning P1-P4 severity tiers based on downstream dashboard usage and user impact.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s4_d2",
      "label": "Mean Time to Detect (MTTD) & Resolve (MTTR)",
      "description": "Tracking team metrics for data issue detection speed and resolution efficiency.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s5",
      "label": "Field Health & Distribution Profiling",
      "description": "Monitoring statistical distributions of column values over time.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s5_d1",
      "label": "Null Rate & Uniqueness Tracking",
      "description": "Detecting sudden spikes in null value percentages or non-unique primary key rows.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t3_s5_d2",
      "label": "Numeric Range & Z-Score Anomaly Alerts",
      "description": "Alerting when column numeric averages deviate by more than 3 standard deviations.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4",
      "label": "Data Contracts & Schema-First Ownership",
      "description": "API-like contracts between data producers and data engineering teams to prevent broken pipelines.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s1",
      "label": "Data Contract Specification (YAML/JSON Schema)",
      "description": "Defining schema structures, SLA guarantees, and data ownership in version-controlled files.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s1_d1",
      "label": "Schema Definition & Constraints Section",
      "description": "Specifying column names, data types, required fields, and acceptable value ranges.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s1_d2",
      "label": "SLA & Freshness Commitments",
      "description": "Documenting update frequency, availability guarantees, and point-of-contact owners.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s2",
      "label": "Producer-Side Contract Validation",
      "description": "Enforcing contract checks at source system write boundaries before publishing data.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s2_d1",
      "label": "CI/CD Schema Breaking Change Prevention",
      "description": "Failing software pull requests if database migrations violate active data contracts.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s2_d2",
      "label": "Kafka Producer Interceptor Validation",
      "description": "Rejecting invalid events at producer gateways before messages reach Kafka brokers.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s3",
      "label": "Contract Decoupling & Buffer Abstractions",
      "description": "Insulating internal service data models from analytical consumption schemas.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s3_d1",
      "label": "Domain Data Interface Layer",
      "description": "Exposing stable contract-compliant views rather than raw internal database tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s3_d2",
      "label": "Deprecation & Versioning Protocols",
      "description": "Managing breaking schema updates using major versioning (v1 -> v2) and migration windows.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s4",
      "label": "Contract Enforcement Tools (datacontract-cli)",
      "description": "Open-source CLI tooling for validating data sources against contract specs.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s4_d1",
      "label": "datacontract test Execution",
      "description": "Running contract tests against Postgres, Snowflake, or Kafka topic sources.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s4_d2",
      "label": "Exporting Contracts to JSON Schema / Avro",
      "description": "Compiling YAML contracts into Avro schemas, Protobuf files, or dbt model tests.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s5",
      "label": "Governance & Ownership Assignment",
      "description": "Establishing operational accountability for data sources within software engineering teams.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s5_d1",
      "label": "Source Service Team Ownership",
      "description": "Assigning data quality accountability to software teams building source microservices.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t4_s5_d2",
      "label": "Contract Registry Central Hosting",
      "description": "Hosting active contracts in central repositories for discovery and automated enforcement.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5",
      "label": "OpenLineage & End-to-End Lineage Tracking",
      "description": "Open standard for collecting and analyzing end-to-end data lineage metadata.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s1",
      "label": "OpenLineage Core Spec & Facets",
      "description": "Standardizing job, run, and dataset event schemas across data processing engines.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s1_d1",
      "label": "RunEvent Lifecycle Messages (START, COMPLETE, FAIL)",
      "description": "Emitting JSON event payloads when pipeline jobs start, complete, or fail.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s1_d2",
      "label": "Dataset & Job Facets Metadata",
      "description": "Attaching schema facets, column facets, and SQL execution facets to lineage events.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s2",
      "label": "Spark & Airflow OpenLineage Integrations",
      "description": "Extracting lineage metadata automatically from pipeline runtimes.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s2_d1",
      "label": "Spark Listener OpenLineage Agent",
      "description": "Interpreting Spark Catalyst query plans to capture input/output dataset lineage.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s2_d2",
      "label": "Airflow Lineage Extraction Hooks",
      "description": "Extracting task inputs and outputs automatically from Airflow operators.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s3",
      "label": "Marquez Lineage Metadata Server",
      "description": "Open-source reference implementation of an OpenLineage API server and UI.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s3_d1",
      "label": "Lineage Graph Visualization",
      "description": "Rendering interactive directed graphs showing datasets, jobs, and run histories.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s3_d2",
      "label": "Dataset Version Tracking Engine",
      "description": "Recording dataset schema mutations across pipeline job executions over time.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s4",
      "label": "Column-Level Lineage Propagation",
      "description": "Tracking data flow and transformations at individual column granularity.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s4_d1",
      "label": "SQL AST Parser Lineage Extraction",
      "description": "Parsing SQL SELECT expressions to map source table columns to target model columns.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s4_d2",
      "label": "Impact Radius Calculation for Schema Changes",
      "description": "Identifying all downstream BI reports affected when a specific source column changes.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s5",
      "label": "Data Catalog Integration Protocols",
      "description": "Pushing OpenLineage metadata into enterprise data catalogs like Atlan, Alation, or DataHub.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s5_d1",
      "label": "Catalog API Metadata Sync",
      "description": "Ingesting lineage streams to update search indexes and asset relationships continuously.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t5_s5_d2",
      "label": "Governance Policy Enforcement Alignment",
      "description": "Propagating security classification tags (e.g. PII) automatically along lineage paths.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6",
      "label": "Freshness SLA Monitoring & Circuit Breaking",
      "description": "Protocols for detecting stale data pipelines and preventing bad data propagation.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s1",
      "label": "Data Freshness Assertions",
      "description": "Measuring time elapsed since the most recent timestamp entry in a dataset.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s1_d1",
      "label": "MAX(created_at) Threshold Checks",
      "description": "Querying maximum record timestamps to verify data is updated within SLA bounds.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s1_d2",
      "label": "dbt source freshness Configurations",
      "description": "Configuring warn_after and error_after freshness thresholds in dbt source YAML files.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s2",
      "label": "Pipeline Circuit Breaker Implementation",
      "description": "Halting downstream processing when upstream quality tests or freshness checks fail.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s2_d1",
      "label": "Airflow ShortCircuitOperator Patterns",
      "description": "Evaluating test result booleans to skip downstream DAG execution branches.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s2_d2",
      "label": "DBT Test Execution Failure Gates",
      "description": "Running dbt test prior to dbt run to block model builds when raw data is invalid.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s3",
      "label": "Stale Data Notification Routing",
      "description": "Alerting stakeholders when datasets miss delivery SLAs.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s3_d1",
      "label": "PagerDuty On-Call Escalation Rules",
      "description": "Escalating SLA breaches to primary on-call engineers via automated phone calls/SMS.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s3_d2",
      "label": "Slack Channel Status Banners",
      "description": "Updating Slack status banners to inform business users of active data outages.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s4",
      "label": "Fallback Data Serving Strategies",
      "description": "Serving cached or previous-day data snapshots during active pipeline outages.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s4_d1",
      "label": "Read-Only Staging Table Failover",
      "description": "Routing dashboard queries to historical staging snapshots while main pipelines recover.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s4_d2",
      "label": "Graceful UI Indicator Banners",
      "description": "Displaying data freshness warnings on BI dashboards when datasets are stale.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s5",
      "label": "Audit Logging & Data SLA Compliance Reports",
      "description": "Tracking long-term data pipeline reliability metrics against compliance SLAs.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s5_d1",
      "label": "Pipeline Uptime SLA Percentages (99.9%)",
      "description": "Calculating pipeline availability metrics to measure quarterly operational SLAs.",
      "type": "concept"
    },
    {
      "id": "de_root_p6_t6_s5_d2",
      "label": "Root Cause Post-Mortem Logging",
      "description": "Documenting incident post-mortems and preventative action items for data outages.",
      "type": "concept"
    },
    {
      "id": "de_root_p7",
      "label": "Data Lakehouse, Catalog & Governance",
      "description": "Unifying data lakes and data warehouses while enforcing enterprise access controls, catalogs, and data mesh principles.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1",
      "label": "Data Lakehouse Storage Architecture",
      "description": "Combining the low-cost scalable storage of data lakes with the ACID transactions of data warehouses.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s1",
      "label": "Storage & Compute Decoupling",
      "description": "Storing data files in cloud object stores while executing queries on dynamic compute clusters.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s1_d1",
      "label": "Object Storage Cost Efficiency",
      "description": "Leveraging S3/GCS $0.02/GB monthly rates instead of expensive warehouse block storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s1_d2",
      "label": "Stateless Compute Worker Scaling",
      "description": "Spinning compute clusters up and down dynamically without moving physical storage files.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s2",
      "label": "Open Data Format Standardization",
      "description": "Storing core data in Apache Parquet or ORC files managed by open table formats.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s2_d1",
      "label": "Vendor Lock-in Elimination",
      "description": "Querying identical Parquet data files using Spark, Trino, DuckDB, or Snowflake.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s2_d2",
      "label": "Direct Access Path Acceleration",
      "description": "Skipping warehouse proprietary ingestion loops to process cloud storage files directly.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s3",
      "label": "Medallion Architecture (Bronze / Silver / Gold)",
      "description": "Structuring data processing layers to progressively improve data quality and usability.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s3_d1",
      "label": "Bronze Layer (Raw Ingestion)",
      "description": "Landing append-only raw source payloads with original schema structures intact.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s3_d2",
      "label": "Silver Layer (Cleansed & Enriched)",
      "description": "Cleaning, joining, and validating data into structured domain tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s3_d3",
      "label": "Gold Layer (Curated Business Marts)",
      "description": "Aggregating data into high-performance dimensional star-schema models for business reporting.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s4",
      "label": "Trino / Presto Distributed SQL Engine",
      "description": "High-speed distributed SQL query engine for scanning huge datasets across data lakes.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s4_d1",
      "label": "In-Memory Parallel Processing",
      "description": "Executing queries without staging intermediate results to disk between query stages.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s4_d2",
      "label": "Connector Architecture (Hive, Iceberg, Delta)",
      "description": "Querying disparate data sources via pluggable connector modules in single SQL queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s5",
      "label": "Lakehouse Compaction & Maintenance",
      "description": "Automating background storage maintenance to ensure fast query scans.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s5_d1",
      "label": "Small File Problem Mitigation",
      "description": "Coalescing millions of small files into 128-512MB target Parquet files.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t1_s5_d2",
      "label": "Orphan File Cleanup Operations",
      "description": "Deleting unused data files left behind by interrupted write transactions.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2",
      "label": "Databricks Unity Catalog Architecture",
      "description": "Unified governance layer for data, AI assets, and security access control across Databricks workspaces.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s1",
      "label": "Three-Level Namespace Model",
      "description": "Organizing data assets using catalog.schema.table naming hierarchies.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s1_d1",
      "label": "Top-Level Catalog Scoping",
      "description": "Creating top-level catalogs for environments (dev, staging, prod) or business domains.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s1_d2",
      "label": "Schema & Asset Organization",
      "description": "Grouping tables, views, volumes, and ML models logically within schemas.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s2",
      "label": "Centralized ANSI SQL Grant Management",
      "description": "Managing permissions across data assets using standard SQL GRANT/REVOKE syntax.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s2_d1",
      "label": "GRANT SELECT ON TABLE Controls",
      "description": "Assigning fine-grained access rights to specific Active Directory or Okta user groups.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s2_d2",
      "label": "Inherited Catalog Permissions",
      "description": "Inheriting permissions from catalog to schema to table level to simplify security management.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s3",
      "label": "Attribute-Based Access Control (ABAC)",
      "description": "Restricting access dynamically based on user attributes and data sensitivity tags.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s3_d1",
      "label": "PII Tag Assignment Rules",
      "description": "Tagging columns containing sensitive attributes (ssn, email, credit_card).",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s3_d2",
      "label": "Tag-Based Policy Enforcement",
      "description": "Denying read access to PII-tagged columns dynamically for non-authorized user roles.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s4",
      "label": "Unity Catalog Volumes Architecture",
      "description": "Governing unstructured and semi-structured files in cloud object storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s4_d1",
      "label": "Managed vs External Volumes",
      "description": "Managing object storage directory lifecycles inside Unity Catalog locations.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s4_d2",
      "label": "Path-Based Access Control",
      "description": "Restricting file reads and writes using SQL permissions on volume paths.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s5",
      "label": "System Tables & Audit Logging",
      "description": "Querying built-in operational logs to monitor access patterns and billing.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s5_d1",
      "label": "system.access.audit Event Logs",
      "description": "Analyzing SQL queries, user accesses, and permission changes across workspaces.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t2_s5_d2",
      "label": "system.billing.usage Credit Tracking",
      "description": "Tracking DBU credit consumption broken down by cluster, SKU, and user.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3",
      "label": "Apache Atlas & Enterprise Data Catalogs",
      "description": "Open-source metadata management and governance framework for Hadoop and data lakes.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s1",
      "label": "Type System & Entity Definitions",
      "description": "Modeling data assets, processes, and metadata attributes using JSON schemas.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s1_d1",
      "label": "Custom Entity Type Specs",
      "description": "Defining metadata types for tables, columns, dashboards, and ML models.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s1_d2",
      "label": "Attribute Definition Rules",
      "description": "Attaching required, unique, or optional attributes to catalog entity types.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s2",
      "label": "Automated Metadata Ingestion Hooks",
      "description": "Capturing metadata changes automatically from Hive, Spark, and Kafka runtime engines.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s2_d1",
      "label": "Hive Metastore Listener Hooks",
      "description": "Intercepting DDL commands to update catalog entities in real time.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s2_d2",
      "label": "Kafka Message Bus Metadata Streaming",
      "description": "Streaming metadata mutation events asynchronously to the Atlas backend.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s3",
      "label": "Business Glossary & Classification Tags",
      "description": "Mapping technical table assets to standardized business terminology.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s3_d1",
      "label": "Business Term Assignments",
      "description": "Linking technical column names (e.g. c_usr_eml) to business terms (Customer Email).",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s3_d2",
      "label": "Classification Propagation Rules",
      "description": "Propagating tags (e.g. Confidential) downstream along lineage paths automatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s4",
      "label": "DataHub / Amundsen Metadata Architectures",
      "description": "Modern open-source data catalog platforms emphasizing search and discovery.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s4_d1",
      "label": "Elasticsearch Indexing Engine",
      "description": "Indexing metadata entities in Elasticsearch to provide instant full-text search.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s4_d2",
      "label": "Push vs Pull Metadata Ingestion",
      "description": "Combining scheduled crawler pulls with event-driven API metadata pushes.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s5",
      "label": "Search & Lineage Visualization APIs",
      "description": "Exposing metadata query endpoints for external application integration.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s5_d1",
      "label": "GraphQL & REST Query Interfaces",
      "description": "Querying catalog entity graphs and lineage relationships programmatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t3_s5_d2",
      "label": "Impact Analysis Graph Traversal",
      "description": "Traversing entity graphs to determine downstream pipeline dependencies.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4",
      "label": "Row & Column-Level Security Policies",
      "description": "Restricting access to specific rows and columns dynamically based on user identity.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s1",
      "label": "Dynamic Dynamic Column Masking Functions",
      "description": "Replacing sensitive column values with masked placeholders during query execution.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s1_d1",
      "label": "SHA-256 Masking Functions",
      "description": "Hashing string values (e.g. sha2(email)) for unauthorized users while showing raw text to admins.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s1_d2",
      "label": "Partial String Redaction Rules",
      "description": "Redacting social security numbers to display only the final 4 digits (XXX-XX-1234).",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s2",
      "label": "Row-Level Security Filter Predicates",
      "description": "Filtering query results to display only rows permitted for the executing user.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s2_d1",
      "label": "Session User Environment Lookup",
      "description": "Applying WHERE tenant_id = CURRENT_USER_TENANT() predicates automatically to SQL queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s2_d2",
      "label": "User Mapping Table Joins",
      "description": "Joining data tables against security mapping tables to enforce regional or department access.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s3",
      "label": "Postgres Row Level Security (RLS)",
      "description": "Enforcing native RLS policies directly in PostgreSQL databases.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s3_d1",
      "label": "CREATE POLICY Syntax Rules",
      "description": "Defining FOR SELECT USING (user_id = current_setting('app.current_user_id')) policies.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s3_d2",
      "label": "FORCE ROW LEVEL SECURITY Setup",
      "description": "Enforcing RLS policies on table owners to prevent administrative bypasses.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s4",
      "label": "Immuta & Apache Ranger Governance Engines",
      "description": "Centralized access control engines providing policy enforcement across query engines.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s4_d1",
      "label": "Ranger Plugin Sidecar Architecture",
      "description": "Intercepting query execution plans inside Spark, Trino, or Hive nodes to apply policies.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s4_d2",
      "label": "Policy Engine Evaluation Speed",
      "description": "Evaluating user entitlement rules in sub-millisecond durations during query parsing.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s5",
      "label": "Performance Costs of Security Predicates",
      "description": "Optimizing query execution when complex row-level security policies are applied.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s5_d1",
      "label": "Subquery Predicate Inlining",
      "description": "Ensuring security subqueries evaluate efficiently without causing full table scans.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t4_s5_d2",
      "label": "Masked Column Index Invalidation",
      "description": "Understanding how applying functions to columns prevents index usage.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5",
      "label": "Data Mesh Architecture & Decentralization",
      "description": "Organizational and technical paradigm shifting data architecture from centralized lakes to domain-driven ownership.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s1",
      "label": "4 Core Principles of Data Mesh",
      "description": "Domain Ownership, Data as a Product, Federated Computational Governance, and Self-serve Data Platform.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s1_d1",
      "label": "Domain Data Ownership Principle",
      "description": "Assigning data pipeline responsibility to cross-functional product software teams.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s1_d2",
      "label": "Data as a Product (DaaP) Mindset",
      "description": "Applying product management principles to datasets (SLAs, documentation, discoverability).",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s2",
      "label": "Data Product Specification & Anatomy",
      "description": "Encapsulating code, data, metadata, and infrastructure into self-contained units.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s2_d1",
      "label": "Output Port Definition Rules",
      "description": "Exposing standardized data output interfaces (SQL tables, Kafka topics, REST APIs).",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s2_d2",
      "label": "Input Port Consumption Declarations",
      "description": "Explicitly declaring dependencies on upstream data products.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s3",
      "label": "Federated Computational Governance",
      "description": "Enforcing global security, quality, and interoperability standards programmatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s3_d1",
      "label": "Automated Policy Execution in CI/CD",
      "description": "Verifying that data products meet enterprise security standards before deployment.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s3_d2",
      "label": "Global Interoperability Standards",
      "description": "Enforcing standard formats (Parquet, JSON) and identifiers across domain teams.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s4",
      "label": "Self-Serve Data Platform Infrastructure",
      "description": "Providing automated platform tooling to reduce domain team infrastructure friction.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s4_d1",
      "label": "Infrastructure Provisioning Automation",
      "description": "Providing Terraform modules to provision storage buckets, databases, and pipelines instantly.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s4_d2",
      "label": "Centralized Discovery & Catalog Services",
      "description": "Aggregating metadata across distributed data products into a unified search UI.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s5",
      "label": "Data Mesh Organizational Transformation",
      "description": "Restructuring engineering teams and incentives to support decentralized data management.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s5_d1",
      "label": "Domain Data Product Owner Role",
      "description": "Establishing dedicated Product Manager roles accountable for domain dataset quality.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t5_s5_d2",
      "label": "Central Platform Team Responsibilities",
      "description": "Shifting central data teams from building ETL to building self-serve platform tools.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6",
      "label": "GDPR Right-to-Erasure Deletion Pipelines",
      "description": "Automating user data deletion across distributed lakehouse files and backup stores.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s1",
      "label": "Right-to-Be-Forgotten Compliance Standards",
      "description": "Legal requirements to remove personal data upon user request within 30 days.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s1_d1",
      "label": "Personal Data Identification Rules",
      "description": "Cataloging all tables and columns storing Personally Identifiable Information (PII).",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s1_d2",
      "label": "Audit Trail Deletion Logging",
      "description": "Recording cryptographic proof of deletion execution for regulatory compliance.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s2",
      "label": "Point Update & Delete File Processing",
      "description": "Executing row deletions in append-only object stores using table formats.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s2_d1",
      "label": "Iceberg / Delta Row-Level Deletes",
      "description": "Executing DELETE FROM table WHERE user_id = X queries to remove target records.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s2_d2",
      "label": "Delta Compaction & Snapshot Purging",
      "description": "Compacting deletion files and running VACUUM commands to purge historical Parquet files.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s3",
      "label": "Crypto-Erase Techniques",
      "description": "Encrypting user data with unique keys and destroying the key to render data unreadable.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s3_d1",
      "label": "Per-User Encryption Key Management",
      "description": "Encrypting sensitive user data using dedicated per-user cryptographic keys.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s3_d2",
      "label": "Key Destruction Protocols",
      "description": "Deleting user keys from KMS to render stored ciphertext permanently un-decryptable.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s4",
      "label": "Cascading Deletion Workflows",
      "description": "Propagating deletion requests across primary databases, data lakes, and BI caches.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s4_d1",
      "label": "Event-Driven Deletion Bus Topic",
      "description": "Publishing user deletion events to dedicated Kafka topics for consumer execution.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s4_d2",
      "label": "Downstream Verification Checks",
      "description": "Verifying that user records are fully scrubbed across all downstream tables.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s5",
      "label": "Backup & Archive Remediation Policies",
      "description": "Handling user data deletion requests in immutable cold storage backups.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s5_d1",
      "label": "Backup Retention Window Expiration",
      "description": "Relying on strict 30-day backup expiration windows to purge deleted user data.",
      "type": "concept"
    },
    {
      "id": "de_root_p7_t6_s5_d2",
      "label": "Restore Re-scrubbing Routines",
      "description": "Re-applying pending deletion logs when historical database backups are restored.",
      "type": "concept"
    },
    {
      "id": "de_root_p8",
      "label": "ML Feature Store & Real-Time Serving",
      "description": "Architectures for engineering, storing, versioning, and serving machine learning features across batch and low-latency online environments.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1",
      "label": "Feature Store Dual-Storage Architecture",
      "description": "Separating offline batch storage for model training from online low-latency storage for real-time inference.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s1",
      "label": "Offline Store (Parquet, Snowflake, BigQuery)",
      "description": "Scalable columnar storage holding years of historical feature data for model training.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s1_d1",
      "label": "High-Throughput Batch Writes",
      "description": "Loading large feature matrices in parallel using Spark or SQL transformation jobs.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s1_d2",
      "label": "Historical Feature Retention",
      "description": "Retaining complete time-series feature histories to support model re-training.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s2",
      "label": "Online Store (Redis, Cassandra, DynamoDB)",
      "description": "Low-latency key-value storage for serving feature vectors to production models.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s2_d1",
      "label": "Sub-10ms Read Latencies",
      "description": "Serving feature values by entity key in single-digit millisecond durations.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s2_d2",
      "label": "TTL Expiration & Memory Eviction",
      "description": "Configuring TTL policies to automatically purge inactive entity feature records.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s3",
      "label": "Feature Synchronization Engine",
      "description": "Replicating feature updates from offline stores or streaming pipelines to online stores.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s3_d1",
      "label": "Materialization Scheduler Jobs",
      "description": "Running scheduled batch jobs to push newly computed offline features to Redis.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s3_d2",
      "label": "Streaming Direct Writes",
      "description": "Writing stream-computed features directly to online stores for real-time freshness.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s4",
      "label": "Entity Key Schema Definitions",
      "description": "Defining primary join keys (user_id, merchant_id) that tie feature values to real-world objects.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s4_d1",
      "label": "Composite Entity Keys",
      "description": "Combining multiple entity IDs (e.g. user_id + device_id) for granular feature lookups.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s4_d2",
      "label": "Entity Value Validation",
      "description": "Validating key formats and types before writing feature vectors to storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s5",
      "label": "Feature View Metadata Specifications",
      "description": "Grouping related features together under logical feature view declarations.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s5_d1",
      "label": "Source Data Mapping Rules",
      "description": "Mapping feature views to underlying batch tables or streaming topics.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t1_s5_d2",
      "label": "Feature Value Type Assertions",
      "description": "Enforcing data types (INT64, FLOAT, VECTOR) across offline and online storage layers.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2",
      "label": "Point-in-Time Correct Joins (Time Travel)",
      "description": "Executing time-travel joins to build training datasets without data leakage.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s1",
      "label": "Data Leakage Prevention Problem",
      "description": "Avoiding the inclusion of future feature values relative to prediction event timestamps.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s1_d1",
      "label": "Observation Timestamp Alignment",
      "description": "Matching training label timestamps with feature values that existed at that exact moment.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s1_d2",
      "label": "Model Performance Impact",
      "description": "Preventing over-optimistic model evaluation results caused by future feature leakage.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s2",
      "label": "As-Of Join Algorithm Mechanics",
      "description": "Joining observation events to feature records using timestamp inequality predicates.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s2_d1",
      "label": "SQL AS-OF Join Syntax",
      "description": "Executing SELECT ... ASOF JOIN queries to fetch the latest feature value prior to observation time.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s2_d2",
      "label": "Spark / DuckDB Optimization Rules",
      "description": "Optimizing range join execution plans using sorted partitions to avoid Cartesian joins.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s3",
      "label": "Feast Historical Retrieval Engine",
      "description": "Automating point-in-time joins using open-source Feast feature store SDKs.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s3_d1",
      "label": "get_historical_features API",
      "description": "Passing an entity DataFrame containing timestamps to fetch leakage-free training data.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s3_d2",
      "label": "Offline Engine Execution Routing",
      "description": "Compiling retrieval requests into optimized Snowflake, BigQuery, or Spark SQL queries.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s4",
      "label": "Observation Window Padding Rules",
      "description": "Handling cases where feature values are missing or out-of-bounds relative to timestamps.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s4_d1",
      "label": "Lookback Window Thresholds",
      "description": "Restricting feature matching to values created within a max lookback duration (e.g. 30 days).",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s4_d2",
      "label": "Default Imputation Fallbacks",
      "description": "Populating missing feature values using pre-defined defaults or mean imputations.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s5",
      "label": "Training Dataset Snapshot Versioning",
      "description": "Versioning exported training datasets to ensure reproducible model training runs.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s5_d1",
      "label": "Immutable Training Artifacts",
      "description": "Saving generated training datasets to S3/GCS as immutable Parquet files.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t2_s5_d2",
      "label": "DVC (Data Version Control) Tracking",
      "description": "Tracking training dataset hashes and metadata in Git repositories alongside model code.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3",
      "label": "Feast Open-Source Feature Store",
      "description": "Operational feature store for managing, serving, and deploying machine learning features.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s1",
      "label": "Feature Repository YAML Configuration",
      "description": "Defining features, entities, and data sources in version-controlled Python/YAML specs.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s1_d1",
      "label": "feature_store.yaml Setup",
      "description": "Configuring provider backends (local, aws, gcp) and storage engine locations.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s1_d2",
      "label": "feast apply Deployment Workflow",
      "description": "Parsing repository definitions and updating feature store infrastructure state.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s2",
      "label": "Batch & Push Feature Views",
      "description": "Defining features computed via batch ETL queries or pushed directly from stream sources.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s2_d1",
      "label": "BatchFeatureView Specifications",
      "description": "Linking features to SQL transformation queries run on data warehouses.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s2_d2",
      "label": "PushFeatureView Direct Ingestion",
      "description": "Exposing REST endpoints to push streaming updates directly into online feature stores.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s3",
      "label": "Online Feature Serving via Feast Server",
      "description": "Serving low-latency feature vectors to inference services using gRPC or HTTP APIs.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s3_d1",
      "label": "get_online_features Request Payload",
      "description": "Passing entity keys to receive mapped feature values in single-digit milliseconds.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s3_d2",
      "label": "gRPC Protobuf Wire Performance",
      "description": "Utilizing binary gRPC interfaces to minimize payload size and serialization latency.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s4",
      "label": "Feast Materialization Workflows",
      "description": "Executing scheduled data loads from offline sources into online key-value stores.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s4_d1",
      "label": "feast materialize Command Usage",
      "description": "Running date-bounded materialization jobs to populate online stores with fresh features.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s4_d2",
      "label": "Incremental Materialization Tracking",
      "description": "Tracking materialization timestamps to process only newly updated feature rows.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s5",
      "label": "Custom Provider Extension Interfaces",
      "description": "Extending Feast to support proprietary data warehouse or key-value store backends.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s5_d1",
      "label": "OfflineStore Plugin Interface",
      "description": "Implementing custom connectors for unsupported data warehouses or query engines.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t3_s5_d2",
      "label": "OnlineStore Plugin Interface",
      "description": "Building custom key-value store drivers for internal low-latency databases.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4",
      "label": "Tecton Enterprise Feature Platform",
      "description": "Fully managed enterprise feature platform for real-time AI and machine learning.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s1",
      "label": "Stream Feature Transformations",
      "description": "Computing real-time features from streaming event sources like Kafka or Kinesis.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s1_d1",
      "label": "Spark Streaming Transformation Pipelines",
      "description": "Executing continuous streaming aggregation jobs to update feature metrics in seconds.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s1_d2",
      "label": "Sliding Window Aggregations (1m, 5m, 1h)",
      "description": "Computing real-time sliding counts, sums, and averages over incoming stream events.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s2",
      "label": "On-Demand Feature Views (ODFV)",
      "description": "Computing features dynamically at inference time using request payload context.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s2_d1",
      "label": "Python Transformation Logic",
      "description": "Executing lightweight Python code to compute features from incoming API request data.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s2_d2",
      "label": "Combining Contextual & Stored Features",
      "description": "Merging real-time request attributes with pre-computed stored features during model scoring.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s3",
      "label": "Feature Lineage & Registry Catalog",
      "description": "Discovering, sharing, and auditing feature definitions across organization teams.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s3_d1",
      "label": "Central Web UI Registry",
      "description": "Browsing documentation, statistics, and lineage graphs for published enterprise features.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s3_d2",
      "label": "Feature Reuse Acceleration",
      "description": "Preventing duplicate feature engineering work by enabling cross-team feature sharing.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s4",
      "label": "Built-in Feature Monitoring & Alerting",
      "description": "Detecting data drift, missing values, and materialization delays automatically.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s4_d1",
      "label": "Feature Value Drift Metrics",
      "description": "Monitoring statistical distribution shifts between offline training data and online serving data.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s4_d2",
      "label": "Materialization Delay Monitoring",
      "description": "Alerting when online store feature freshness falls behind configured SLAs.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s5",
      "label": "Enterprise Security & Access Controls",
      "description": "Enforcing RBAC permissions and encryption across feature pipelines.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s5_d1",
      "label": "Role-Based Access Control (RBAC)",
      "description": "Restricting feature modification rights to authorized data science and engineering teams.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t4_s5_d2",
      "label": "End-to-End Encryption at Rest & Transit",
      "description": "Encrypting feature data stored in offline files, key-value stores, and API streams.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5",
      "label": "Real-Time Low-Latency Serving (Redis)",
      "description": "Optimizing in-memory key-value databases for sub-millisecond feature retrieval.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s1",
      "label": "Redis Data Structure Selection",
      "description": "Mapping feature vectors to Redis Hashes, Strings, or JSON documents.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s1_d1",
      "label": "Redis Hashes (HSET / HMGET)",
      "description": "Storing entity feature fields inside Redis Hashes for efficient partial feature reads.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s1_d2",
      "label": "RedisJSON Document Storage",
      "description": "Storing complex nested feature structures as queryable JSON documents.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s2",
      "label": "Pipeline & Multi-Key Read Optimization",
      "description": "Batching feature requests into single network round-trips to minimize latency.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s2_d1",
      "label": "Redis Pipelining Commands",
      "description": "Sending multiple read requests in a single TCP socket write to eliminate network round-trips.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s2_d2",
      "label": "MGET / HMGET Multi-Key Operations",
      "description": "Fetching features for multiple entities in a single atomic database call.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s3",
      "label": "Redis Cluster Sharding & Replication",
      "description": "Scaling Redis horizontally to handle millions of feature requests per second.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s3_d1",
      "label": "Hash Slot Distribution (16384 slots)",
      "description": "Distributing entity keys across cluster nodes using CRC16 hash slot allocation.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s3_d2",
      "label": "Read-Replicas & Sentinel Failover",
      "description": "Scaling read throughput by routing inference queries to high-availability read replicas.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s4",
      "label": "Memory Footprint Reduction (ZipList / Listpack)",
      "description": "Tuning Redis internal encodings to store billions of features in minimal RAM.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s4_d1",
      "label": "hash-max-ziplist-entries Tuning",
      "description": "Encoding small hashes as compact contiguous memory arrays to save up to 70% RAM.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s4_d2",
      "label": "Key Name Compression Strategies",
      "description": "Using short string prefixes for feature keys to minimize overhead byte storage.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s5",
      "label": "High-Availability Persistence Modes (AOF vs RDB)",
      "description": "Configuring disk persistence to prevent feature loss during Redis node reboots.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s5_d1",
      "label": "RDB Snapshot File Backups",
      "description": "Saving periodic point-in-time binary memory snapshots to disk for quick recovery.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t5_s5_d2",
      "label": "AOF (Append Only File) Sync Modes",
      "description": "Logging every write command to disk with appendfsync everysec for durability.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6",
      "label": "Feature Drift & Data Quality Monitoring",
      "description": "Tracking statistical distribution shifts in features between training and production.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s1",
      "label": "Training-Serving Skew Detection",
      "description": "Identifying discrepancies between feature values used during training and online serving.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s1_d1",
      "label": "Feature Schema Mismatch Checks",
      "description": "Detecting differences in data types, nullabilities, or allowed categories.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s1_d2",
      "label": "Transformation Logic Divergence",
      "description": "Catching bugs caused by separate code implementations for batch vs online feature transforms.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s2",
      "label": "Statistical Drift Metrics (PSI & KS-Test)",
      "description": "Computing statistical distance metrics to quantify distribution changes over time.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s2_d1",
      "label": "Population Stability Index (PSI)",
      "description": "Measuring feature value bucket shifts; PSI > 0.2 signals significant distribution drift.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s2_d2",
      "label": "Kolmogorov-Smirnov (KS) Test",
      "description": "Comparing continuous feature cumulative distributions to detect drift with p-value thresholds.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s3",
      "label": "Evidently AI & Monitoring Frameworks",
      "description": "Open-source libraries for evaluating feature health and model performance in production.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s3_d1",
      "label": "Automated Drift Profile Reports",
      "description": "Generating interactive HTML dashboards comparing reference datasets against current production data.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s3_d2",
      "label": "Integration with Prometheus & Grafana",
      "description": "Exporting drift metrics to Prometheus for real-time alerting on Grafana dashboards.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s4",
      "label": "Production Feature Logging Pipelines",
      "description": "Capturing online feature vectors served during model inference for offline analysis.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s4_d1",
      "label": "Asynchronous Prediction Logging",
      "description": "Logging input features and model predictions to SQS/Kafka without slowing down inference.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s4_d2",
      "label": "Joined Audit Logs for Retraining",
      "description": "Joining logged features with delayed ground-truth labels to build updated training sets.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s5",
      "label": "Automated Model Retraining Triggers",
      "description": "Triggering automated retraining workflows when feature drift exceeds acceptable limits.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s5_d1",
      "label": "Drift Threshold Alarm Triggers",
      "description": "Emitting CloudWatch/Prometheus alerts when PSI metrics cross critical thresholds.",
      "type": "concept"
    },
    {
      "id": "de_root_p8_t6_s5_d2",
      "label": "Automated Airflow DAG Triggering",
      "description": "Launching retraining pipelines automatically to refresh model weights on recent data.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "de_root",
      "target": "de_root_p1"
    },
    {
      "source": "de_root_p1",
      "target": "de_root_p1_t1"
    },
    {
      "source": "de_root_p1_t1",
      "target": "de_root_p1_t1_s1"
    },
    {
      "source": "de_root_p1_t1_s1",
      "target": "de_root_p1_t1_s1_d1"
    },
    {
      "source": "de_root_p1_t1_s1",
      "target": "de_root_p1_t1_s1_d2"
    },
    {
      "source": "de_root_p1_t1",
      "target": "de_root_p1_t1_s2"
    },
    {
      "source": "de_root_p1_t1_s2",
      "target": "de_root_p1_t1_s2_d1"
    },
    {
      "source": "de_root_p1_t1_s2",
      "target": "de_root_p1_t1_s2_d2"
    },
    {
      "source": "de_root_p1_t1",
      "target": "de_root_p1_t1_s3"
    },
    {
      "source": "de_root_p1_t1_s3",
      "target": "de_root_p1_t1_s3_d1"
    },
    {
      "source": "de_root_p1_t1_s3",
      "target": "de_root_p1_t1_s3_d2"
    },
    {
      "source": "de_root_p1_t1",
      "target": "de_root_p1_t1_s4"
    },
    {
      "source": "de_root_p1_t1_s4",
      "target": "de_root_p1_t1_s4_d1"
    },
    {
      "source": "de_root_p1_t1_s4",
      "target": "de_root_p1_t1_s4_d2"
    },
    {
      "source": "de_root_p1_t1",
      "target": "de_root_p1_t1_s5"
    },
    {
      "source": "de_root_p1_t1_s5",
      "target": "de_root_p1_t1_s5_d1"
    },
    {
      "source": "de_root_p1_t1_s5",
      "target": "de_root_p1_t1_s5_d2"
    },
    {
      "source": "de_root_p1",
      "target": "de_root_p1_t2"
    },
    {
      "source": "de_root_p1_t2",
      "target": "de_root_p1_t2_s1"
    },
    {
      "source": "de_root_p1_t2_s1",
      "target": "de_root_p1_t2_s1_d1"
    },
    {
      "source": "de_root_p1_t2_s1",
      "target": "de_root_p1_t2_s1_d2"
    },
    {
      "source": "de_root_p1_t2",
      "target": "de_root_p1_t2_s2"
    },
    {
      "source": "de_root_p1_t2_s2",
      "target": "de_root_p1_t2_s2_d1"
    },
    {
      "source": "de_root_p1_t2_s2",
      "target": "de_root_p1_t2_s2_d2"
    },
    {
      "source": "de_root_p1_t2",
      "target": "de_root_p1_t2_s3"
    },
    {
      "source": "de_root_p1_t2_s3",
      "target": "de_root_p1_t2_s3_d1"
    },
    {
      "source": "de_root_p1_t2_s3",
      "target": "de_root_p1_t2_s3_d2"
    },
    {
      "source": "de_root_p1_t2",
      "target": "de_root_p1_t2_s4"
    },
    {
      "source": "de_root_p1_t2_s4",
      "target": "de_root_p1_t2_s4_d1"
    },
    {
      "source": "de_root_p1_t2_s4",
      "target": "de_root_p1_t2_s4_d2"
    },
    {
      "source": "de_root_p1_t2",
      "target": "de_root_p1_t2_s5"
    },
    {
      "source": "de_root_p1_t2_s5",
      "target": "de_root_p1_t2_s5_d1"
    },
    {
      "source": "de_root_p1_t2_s5",
      "target": "de_root_p1_t2_s5_d2"
    },
    {
      "source": "de_root_p1",
      "target": "de_root_p1_t3"
    },
    {
      "source": "de_root_p1_t3",
      "target": "de_root_p1_t3_s1"
    },
    {
      "source": "de_root_p1_t3_s1",
      "target": "de_root_p1_t3_s1_d1"
    },
    {
      "source": "de_root_p1_t3_s1",
      "target": "de_root_p1_t3_s1_d2"
    },
    {
      "source": "de_root_p1_t3",
      "target": "de_root_p1_t3_s2"
    },
    {
      "source": "de_root_p1_t3_s2",
      "target": "de_root_p1_t3_s2_d1"
    },
    {
      "source": "de_root_p1_t3_s2",
      "target": "de_root_p1_t3_s2_d2"
    },
    {
      "source": "de_root_p1_t3",
      "target": "de_root_p1_t3_s3"
    },
    {
      "source": "de_root_p1_t3_s3",
      "target": "de_root_p1_t3_s3_d1"
    },
    {
      "source": "de_root_p1_t3_s3",
      "target": "de_root_p1_t3_s3_d2"
    },
    {
      "source": "de_root_p1_t3",
      "target": "de_root_p1_t3_s4"
    },
    {
      "source": "de_root_p1_t3_s4",
      "target": "de_root_p1_t3_s4_d1"
    },
    {
      "source": "de_root_p1_t3_s4",
      "target": "de_root_p1_t3_s4_d2"
    },
    {
      "source": "de_root_p1_t3",
      "target": "de_root_p1_t3_s5"
    },
    {
      "source": "de_root_p1_t3_s5",
      "target": "de_root_p1_t3_s5_d1"
    },
    {
      "source": "de_root_p1_t3_s5",
      "target": "de_root_p1_t3_s5_d2"
    },
    {
      "source": "de_root_p1",
      "target": "de_root_p1_t4"
    },
    {
      "source": "de_root_p1_t4",
      "target": "de_root_p1_t4_s1"
    },
    {
      "source": "de_root_p1_t4_s1",
      "target": "de_root_p1_t4_s1_d1"
    },
    {
      "source": "de_root_p1_t4_s1",
      "target": "de_root_p1_t4_s1_d2"
    },
    {
      "source": "de_root_p1_t4",
      "target": "de_root_p1_t4_s2"
    },
    {
      "source": "de_root_p1_t4_s2",
      "target": "de_root_p1_t4_s2_d1"
    },
    {
      "source": "de_root_p1_t4_s2",
      "target": "de_root_p1_t4_s2_d2"
    },
    {
      "source": "de_root_p1_t4",
      "target": "de_root_p1_t4_s3"
    },
    {
      "source": "de_root_p1_t4_s3",
      "target": "de_root_p1_t4_s3_d1"
    },
    {
      "source": "de_root_p1_t4_s3",
      "target": "de_root_p1_t4_s3_d2"
    },
    {
      "source": "de_root_p1_t4",
      "target": "de_root_p1_t4_s4"
    },
    {
      "source": "de_root_p1_t4_s4",
      "target": "de_root_p1_t4_s4_d1"
    },
    {
      "source": "de_root_p1_t4_s4",
      "target": "de_root_p1_t4_s4_d2"
    },
    {
      "source": "de_root_p1_t4",
      "target": "de_root_p1_t4_s5"
    },
    {
      "source": "de_root_p1_t4_s5",
      "target": "de_root_p1_t4_s5_d1"
    },
    {
      "source": "de_root_p1_t4_s5",
      "target": "de_root_p1_t4_s5_d2"
    },
    {
      "source": "de_root_p1",
      "target": "de_root_p1_t5"
    },
    {
      "source": "de_root_p1_t5",
      "target": "de_root_p1_t5_s1"
    },
    {
      "source": "de_root_p1_t5_s1",
      "target": "de_root_p1_t5_s1_d1"
    },
    {
      "source": "de_root_p1_t5_s1",
      "target": "de_root_p1_t5_s1_d2"
    },
    {
      "source": "de_root_p1_t5",
      "target": "de_root_p1_t5_s2"
    },
    {
      "source": "de_root_p1_t5_s2",
      "target": "de_root_p1_t5_s2_d1"
    },
    {
      "source": "de_root_p1_t5_s2",
      "target": "de_root_p1_t5_s2_d2"
    },
    {
      "source": "de_root_p1_t5",
      "target": "de_root_p1_t5_s3"
    },
    {
      "source": "de_root_p1_t5_s3",
      "target": "de_root_p1_t5_s3_d1"
    },
    {
      "source": "de_root_p1_t5_s3",
      "target": "de_root_p1_t5_s3_d2"
    },
    {
      "source": "de_root_p1_t5",
      "target": "de_root_p1_t5_s4"
    },
    {
      "source": "de_root_p1_t5_s4",
      "target": "de_root_p1_t5_s4_d1"
    },
    {
      "source": "de_root_p1_t5_s4",
      "target": "de_root_p1_t5_s4_d2"
    },
    {
      "source": "de_root_p1_t5",
      "target": "de_root_p1_t5_s5"
    },
    {
      "source": "de_root_p1_t5_s5",
      "target": "de_root_p1_t5_s5_d1"
    },
    {
      "source": "de_root_p1_t5_s5",
      "target": "de_root_p1_t5_s5_d2"
    },
    {
      "source": "de_root_p1",
      "target": "de_root_p1_t6"
    },
    {
      "source": "de_root_p1_t6",
      "target": "de_root_p1_t6_s1"
    },
    {
      "source": "de_root_p1_t6_s1",
      "target": "de_root_p1_t6_s1_d1"
    },
    {
      "source": "de_root_p1_t6_s1",
      "target": "de_root_p1_t6_s1_d2"
    },
    {
      "source": "de_root_p1_t6",
      "target": "de_root_p1_t6_s2"
    },
    {
      "source": "de_root_p1_t6_s2",
      "target": "de_root_p1_t6_s2_d1"
    },
    {
      "source": "de_root_p1_t6_s2",
      "target": "de_root_p1_t6_s2_d2"
    },
    {
      "source": "de_root_p1_t6",
      "target": "de_root_p1_t6_s3"
    },
    {
      "source": "de_root_p1_t6_s3",
      "target": "de_root_p1_t6_s3_d1"
    },
    {
      "source": "de_root_p1_t6_s3",
      "target": "de_root_p1_t6_s3_d2"
    },
    {
      "source": "de_root_p1_t6",
      "target": "de_root_p1_t6_s4"
    },
    {
      "source": "de_root_p1_t6_s4",
      "target": "de_root_p1_t6_s4_d1"
    },
    {
      "source": "de_root_p1_t6_s4",
      "target": "de_root_p1_t6_s4_d2"
    },
    {
      "source": "de_root_p1_t6",
      "target": "de_root_p1_t6_s5"
    },
    {
      "source": "de_root_p1_t6_s5",
      "target": "de_root_p1_t6_s5_d1"
    },
    {
      "source": "de_root_p1_t6_s5",
      "target": "de_root_p1_t6_s5_d2"
    },
    {
      "source": "de_root",
      "target": "de_root_p2"
    },
    {
      "source": "de_root_p2",
      "target": "de_root_p2_t1"
    },
    {
      "source": "de_root_p2_t1",
      "target": "de_root_p2_t1_s1"
    },
    {
      "source": "de_root_p2_t1_s1",
      "target": "de_root_p2_t1_s1_d1"
    },
    {
      "source": "de_root_p2_t1_s1",
      "target": "de_root_p2_t1_s1_d2"
    },
    {
      "source": "de_root_p2_t1",
      "target": "de_root_p2_t1_s2"
    },
    {
      "source": "de_root_p2_t1_s2",
      "target": "de_root_p2_t1_s2_d1"
    },
    {
      "source": "de_root_p2_t1_s2",
      "target": "de_root_p2_t1_s2_d2"
    },
    {
      "source": "de_root_p2_t1",
      "target": "de_root_p2_t1_s3"
    },
    {
      "source": "de_root_p2_t1_s3",
      "target": "de_root_p2_t1_s3_d1"
    },
    {
      "source": "de_root_p2_t1_s3",
      "target": "de_root_p2_t1_s3_d2"
    },
    {
      "source": "de_root_p2_t1",
      "target": "de_root_p2_t1_s4"
    },
    {
      "source": "de_root_p2_t1_s4",
      "target": "de_root_p2_t1_s4_d1"
    },
    {
      "source": "de_root_p2_t1_s4",
      "target": "de_root_p2_t1_s4_d2"
    },
    {
      "source": "de_root_p2_t1",
      "target": "de_root_p2_t1_s5"
    },
    {
      "source": "de_root_p2_t1_s5",
      "target": "de_root_p2_t1_s5_d1"
    },
    {
      "source": "de_root_p2_t1_s5",
      "target": "de_root_p2_t1_s5_d2"
    },
    {
      "source": "de_root_p2",
      "target": "de_root_p2_t2"
    },
    {
      "source": "de_root_p2_t2",
      "target": "de_root_p2_t2_s1"
    },
    {
      "source": "de_root_p2_t2_s1",
      "target": "de_root_p2_t2_s1_d1"
    },
    {
      "source": "de_root_p2_t2_s1",
      "target": "de_root_p2_t2_s1_d2"
    },
    {
      "source": "de_root_p2_t2",
      "target": "de_root_p2_t2_s2"
    },
    {
      "source": "de_root_p2_t2_s2",
      "target": "de_root_p2_t2_s2_d1"
    },
    {
      "source": "de_root_p2_t2_s2",
      "target": "de_root_p2_t2_s2_d2"
    },
    {
      "source": "de_root_p2_t2",
      "target": "de_root_p2_t2_s3"
    },
    {
      "source": "de_root_p2_t2_s3",
      "target": "de_root_p2_t2_s3_d1"
    },
    {
      "source": "de_root_p2_t2_s3",
      "target": "de_root_p2_t2_s3_d2"
    },
    {
      "source": "de_root_p2_t2",
      "target": "de_root_p2_t2_s4"
    },
    {
      "source": "de_root_p2_t2_s4",
      "target": "de_root_p2_t2_s4_d1"
    },
    {
      "source": "de_root_p2_t2_s4",
      "target": "de_root_p2_t2_s4_d2"
    },
    {
      "source": "de_root_p2_t2",
      "target": "de_root_p2_t2_s5"
    },
    {
      "source": "de_root_p2_t2_s5",
      "target": "de_root_p2_t2_s5_d1"
    },
    {
      "source": "de_root_p2_t2_s5",
      "target": "de_root_p2_t2_s5_d2"
    },
    {
      "source": "de_root_p2",
      "target": "de_root_p2_t3"
    },
    {
      "source": "de_root_p2_t3",
      "target": "de_root_p2_t3_s1"
    },
    {
      "source": "de_root_p2_t3_s1",
      "target": "de_root_p2_t3_s1_d1"
    },
    {
      "source": "de_root_p2_t3_s1",
      "target": "de_root_p2_t3_s1_d2"
    },
    {
      "source": "de_root_p2_t3",
      "target": "de_root_p2_t3_s2"
    },
    {
      "source": "de_root_p2_t3_s2",
      "target": "de_root_p2_t3_s2_d1"
    },
    {
      "source": "de_root_p2_t3_s2",
      "target": "de_root_p2_t3_s2_d2"
    },
    {
      "source": "de_root_p2_t3",
      "target": "de_root_p2_t3_s3"
    },
    {
      "source": "de_root_p2_t3_s3",
      "target": "de_root_p2_t3_s3_d1"
    },
    {
      "source": "de_root_p2_t3_s3",
      "target": "de_root_p2_t3_s3_d2"
    },
    {
      "source": "de_root_p2_t3",
      "target": "de_root_p2_t3_s4"
    },
    {
      "source": "de_root_p2_t3_s4",
      "target": "de_root_p2_t3_s4_d1"
    },
    {
      "source": "de_root_p2_t3_s4",
      "target": "de_root_p2_t3_s4_d2"
    },
    {
      "source": "de_root_p2_t3",
      "target": "de_root_p2_t3_s5"
    },
    {
      "source": "de_root_p2_t3_s5",
      "target": "de_root_p2_t3_s5_d1"
    },
    {
      "source": "de_root_p2_t3_s5",
      "target": "de_root_p2_t3_s5_d2"
    },
    {
      "source": "de_root_p2",
      "target": "de_root_p2_t4"
    },
    {
      "source": "de_root_p2_t4",
      "target": "de_root_p2_t4_s1"
    },
    {
      "source": "de_root_p2_t4_s1",
      "target": "de_root_p2_t4_s1_d1"
    },
    {
      "source": "de_root_p2_t4_s1",
      "target": "de_root_p2_t4_s1_d2"
    },
    {
      "source": "de_root_p2_t4",
      "target": "de_root_p2_t4_s2"
    },
    {
      "source": "de_root_p2_t4_s2",
      "target": "de_root_p2_t4_s2_d1"
    },
    {
      "source": "de_root_p2_t4_s2",
      "target": "de_root_p2_t4_s2_d2"
    },
    {
      "source": "de_root_p2_t4",
      "target": "de_root_p2_t4_s3"
    },
    {
      "source": "de_root_p2_t4_s3",
      "target": "de_root_p2_t4_s3_d1"
    },
    {
      "source": "de_root_p2_t4_s3",
      "target": "de_root_p2_t4_s3_d2"
    },
    {
      "source": "de_root_p2_t4",
      "target": "de_root_p2_t4_s4"
    },
    {
      "source": "de_root_p2_t4_s4",
      "target": "de_root_p2_t4_s4_d1"
    },
    {
      "source": "de_root_p2_t4_s4",
      "target": "de_root_p2_t4_s4_d2"
    },
    {
      "source": "de_root_p2_t4",
      "target": "de_root_p2_t4_s5"
    },
    {
      "source": "de_root_p2_t4_s5",
      "target": "de_root_p2_t4_s5_d1"
    },
    {
      "source": "de_root_p2_t4_s5",
      "target": "de_root_p2_t4_s5_d2"
    },
    {
      "source": "de_root_p2",
      "target": "de_root_p2_t5"
    },
    {
      "source": "de_root_p2_t5",
      "target": "de_root_p2_t5_s1"
    },
    {
      "source": "de_root_p2_t5_s1",
      "target": "de_root_p2_t5_s1_d1"
    },
    {
      "source": "de_root_p2_t5_s1",
      "target": "de_root_p2_t5_s1_d2"
    },
    {
      "source": "de_root_p2_t5",
      "target": "de_root_p2_t5_s2"
    },
    {
      "source": "de_root_p2_t5_s2",
      "target": "de_root_p2_t5_s2_d1"
    },
    {
      "source": "de_root_p2_t5_s2",
      "target": "de_root_p2_t5_s2_d2"
    },
    {
      "source": "de_root_p2_t5",
      "target": "de_root_p2_t5_s3"
    },
    {
      "source": "de_root_p2_t5_s3",
      "target": "de_root_p2_t5_s3_d1"
    },
    {
      "source": "de_root_p2_t5_s3",
      "target": "de_root_p2_t5_s3_d2"
    },
    {
      "source": "de_root_p2_t5",
      "target": "de_root_p2_t5_s4"
    },
    {
      "source": "de_root_p2_t5_s4",
      "target": "de_root_p2_t5_s4_d1"
    },
    {
      "source": "de_root_p2_t5_s4",
      "target": "de_root_p2_t5_s4_d2"
    },
    {
      "source": "de_root_p2_t5",
      "target": "de_root_p2_t5_s5"
    },
    {
      "source": "de_root_p2_t5_s5",
      "target": "de_root_p2_t5_s5_d1"
    },
    {
      "source": "de_root_p2_t5_s5",
      "target": "de_root_p2_t5_s5_d2"
    },
    {
      "source": "de_root_p2",
      "target": "de_root_p2_t6"
    },
    {
      "source": "de_root_p2_t6",
      "target": "de_root_p2_t6_s1"
    },
    {
      "source": "de_root_p2_t6_s1",
      "target": "de_root_p2_t6_s1_d1"
    },
    {
      "source": "de_root_p2_t6_s1",
      "target": "de_root_p2_t6_s1_d2"
    },
    {
      "source": "de_root_p2_t6",
      "target": "de_root_p2_t6_s2"
    },
    {
      "source": "de_root_p2_t6_s2",
      "target": "de_root_p2_t6_s2_d1"
    },
    {
      "source": "de_root_p2_t6_s2",
      "target": "de_root_p2_t6_s2_d2"
    },
    {
      "source": "de_root_p2_t6",
      "target": "de_root_p2_t6_s3"
    },
    {
      "source": "de_root_p2_t6_s3",
      "target": "de_root_p2_t6_s3_d1"
    },
    {
      "source": "de_root_p2_t6_s3",
      "target": "de_root_p2_t6_s3_d2"
    },
    {
      "source": "de_root_p2_t6",
      "target": "de_root_p2_t6_s4"
    },
    {
      "source": "de_root_p2_t6_s4",
      "target": "de_root_p2_t6_s4_d1"
    },
    {
      "source": "de_root_p2_t6_s4",
      "target": "de_root_p2_t6_s4_d2"
    },
    {
      "source": "de_root_p2_t6",
      "target": "de_root_p2_t6_s5"
    },
    {
      "source": "de_root_p2_t6_s5",
      "target": "de_root_p2_t6_s5_d1"
    },
    {
      "source": "de_root_p2_t6_s5",
      "target": "de_root_p2_t6_s5_d2"
    },
    {
      "source": "de_root",
      "target": "de_root_p3"
    },
    {
      "source": "de_root_p3",
      "target": "de_root_p3_t1"
    },
    {
      "source": "de_root_p3_t1",
      "target": "de_root_p3_t1_s1"
    },
    {
      "source": "de_root_p3_t1_s1",
      "target": "de_root_p3_t1_s1_d1"
    },
    {
      "source": "de_root_p3_t1_s1",
      "target": "de_root_p3_t1_s1_d2"
    },
    {
      "source": "de_root_p3_t1",
      "target": "de_root_p3_t1_s2"
    },
    {
      "source": "de_root_p3_t1_s2",
      "target": "de_root_p3_t1_s2_d1"
    },
    {
      "source": "de_root_p3_t1_s2",
      "target": "de_root_p3_t1_s2_d2"
    },
    {
      "source": "de_root_p3_t1",
      "target": "de_root_p3_t1_s3"
    },
    {
      "source": "de_root_p3_t1_s3",
      "target": "de_root_p3_t1_s3_d1"
    },
    {
      "source": "de_root_p3_t1_s3",
      "target": "de_root_p3_t1_s3_d2"
    },
    {
      "source": "de_root_p3_t1",
      "target": "de_root_p3_t1_s4"
    },
    {
      "source": "de_root_p3_t1_s4",
      "target": "de_root_p3_t1_s4_d1"
    },
    {
      "source": "de_root_p3_t1_s4",
      "target": "de_root_p3_t1_s4_d2"
    },
    {
      "source": "de_root_p3_t1",
      "target": "de_root_p3_t1_s5"
    },
    {
      "source": "de_root_p3_t1_s5",
      "target": "de_root_p3_t1_s5_d1"
    },
    {
      "source": "de_root_p3_t1_s5",
      "target": "de_root_p3_t1_s5_d2"
    },
    {
      "source": "de_root_p3",
      "target": "de_root_p3_t2"
    },
    {
      "source": "de_root_p3_t2",
      "target": "de_root_p3_t2_s1"
    },
    {
      "source": "de_root_p3_t2_s1",
      "target": "de_root_p3_t2_s1_d1"
    },
    {
      "source": "de_root_p3_t2_s1",
      "target": "de_root_p3_t2_s1_d2"
    },
    {
      "source": "de_root_p3_t2",
      "target": "de_root_p3_t2_s2"
    },
    {
      "source": "de_root_p3_t2_s2",
      "target": "de_root_p3_t2_s2_d1"
    },
    {
      "source": "de_root_p3_t2_s2",
      "target": "de_root_p3_t2_s2_d2"
    },
    {
      "source": "de_root_p3_t2",
      "target": "de_root_p3_t2_s3"
    },
    {
      "source": "de_root_p3_t2_s3",
      "target": "de_root_p3_t2_s3_d1"
    },
    {
      "source": "de_root_p3_t2_s3",
      "target": "de_root_p3_t2_s3_d2"
    },
    {
      "source": "de_root_p3_t2",
      "target": "de_root_p3_t2_s4"
    },
    {
      "source": "de_root_p3_t2_s4",
      "target": "de_root_p3_t2_s4_d1"
    },
    {
      "source": "de_root_p3_t2_s4",
      "target": "de_root_p3_t2_s4_d2"
    },
    {
      "source": "de_root_p3_t2",
      "target": "de_root_p3_t2_s5"
    },
    {
      "source": "de_root_p3_t2_s5",
      "target": "de_root_p3_t2_s5_d1"
    },
    {
      "source": "de_root_p3_t2_s5",
      "target": "de_root_p3_t2_s5_d2"
    },
    {
      "source": "de_root_p3",
      "target": "de_root_p3_t3"
    },
    {
      "source": "de_root_p3_t3",
      "target": "de_root_p3_t3_s1"
    },
    {
      "source": "de_root_p3_t3_s1",
      "target": "de_root_p3_t3_s1_d1"
    },
    {
      "source": "de_root_p3_t3_s1",
      "target": "de_root_p3_t3_s1_d2"
    },
    {
      "source": "de_root_p3_t3",
      "target": "de_root_p3_t3_s2"
    },
    {
      "source": "de_root_p3_t3_s2",
      "target": "de_root_p3_t3_s2_d1"
    },
    {
      "source": "de_root_p3_t3_s2",
      "target": "de_root_p3_t3_s2_d2"
    },
    {
      "source": "de_root_p3_t3",
      "target": "de_root_p3_t3_s3"
    },
    {
      "source": "de_root_p3_t3_s3",
      "target": "de_root_p3_t3_s3_d1"
    },
    {
      "source": "de_root_p3_t3_s3",
      "target": "de_root_p3_t3_s3_d2"
    },
    {
      "source": "de_root_p3_t3",
      "target": "de_root_p3_t3_s4"
    },
    {
      "source": "de_root_p3_t3_s4",
      "target": "de_root_p3_t3_s4_d1"
    },
    {
      "source": "de_root_p3_t3_s4",
      "target": "de_root_p3_t3_s4_d2"
    },
    {
      "source": "de_root_p3_t3",
      "target": "de_root_p3_t3_s5"
    },
    {
      "source": "de_root_p3_t3_s5",
      "target": "de_root_p3_t3_s5_d1"
    },
    {
      "source": "de_root_p3_t3_s5",
      "target": "de_root_p3_t3_s5_d2"
    },
    {
      "source": "de_root_p3",
      "target": "de_root_p3_t4"
    },
    {
      "source": "de_root_p3_t4",
      "target": "de_root_p3_t4_s1"
    },
    {
      "source": "de_root_p3_t4_s1",
      "target": "de_root_p3_t4_s1_d1"
    },
    {
      "source": "de_root_p3_t4_s1",
      "target": "de_root_p3_t4_s1_d2"
    },
    {
      "source": "de_root_p3_t4",
      "target": "de_root_p3_t4_s2"
    },
    {
      "source": "de_root_p3_t4_s2",
      "target": "de_root_p3_t4_s2_d1"
    },
    {
      "source": "de_root_p3_t4_s2",
      "target": "de_root_p3_t4_s2_d2"
    },
    {
      "source": "de_root_p3_t4",
      "target": "de_root_p3_t4_s3"
    },
    {
      "source": "de_root_p3_t4_s3",
      "target": "de_root_p3_t4_s3_d1"
    },
    {
      "source": "de_root_p3_t4_s3",
      "target": "de_root_p3_t4_s3_d2"
    },
    {
      "source": "de_root_p3_t4",
      "target": "de_root_p3_t4_s4"
    },
    {
      "source": "de_root_p3_t4_s4",
      "target": "de_root_p3_t4_s4_d1"
    },
    {
      "source": "de_root_p3_t4_s4",
      "target": "de_root_p3_t4_s4_d2"
    },
    {
      "source": "de_root_p3_t4",
      "target": "de_root_p3_t4_s5"
    },
    {
      "source": "de_root_p3_t4_s5",
      "target": "de_root_p3_t4_s5_d1"
    },
    {
      "source": "de_root_p3_t4_s5",
      "target": "de_root_p3_t4_s5_d2"
    },
    {
      "source": "de_root_p3",
      "target": "de_root_p3_t5"
    },
    {
      "source": "de_root_p3_t5",
      "target": "de_root_p3_t5_s1"
    },
    {
      "source": "de_root_p3_t5_s1",
      "target": "de_root_p3_t5_s1_d1"
    },
    {
      "source": "de_root_p3_t5_s1",
      "target": "de_root_p3_t5_s1_d2"
    },
    {
      "source": "de_root_p3_t5",
      "target": "de_root_p3_t5_s2"
    },
    {
      "source": "de_root_p3_t5_s2",
      "target": "de_root_p3_t5_s2_d1"
    },
    {
      "source": "de_root_p3_t5_s2",
      "target": "de_root_p3_t5_s2_d2"
    },
    {
      "source": "de_root_p3_t5",
      "target": "de_root_p3_t5_s3"
    },
    {
      "source": "de_root_p3_t5_s3",
      "target": "de_root_p3_t5_s3_d1"
    },
    {
      "source": "de_root_p3_t5_s3",
      "target": "de_root_p3_t5_s3_d2"
    },
    {
      "source": "de_root_p3_t5",
      "target": "de_root_p3_t5_s4"
    },
    {
      "source": "de_root_p3_t5_s4",
      "target": "de_root_p3_t5_s4_d1"
    },
    {
      "source": "de_root_p3_t5_s4",
      "target": "de_root_p3_t5_s4_d2"
    },
    {
      "source": "de_root_p3_t5",
      "target": "de_root_p3_t5_s5"
    },
    {
      "source": "de_root_p3_t5_s5",
      "target": "de_root_p3_t5_s5_d1"
    },
    {
      "source": "de_root_p3_t5_s5",
      "target": "de_root_p3_t5_s5_d2"
    },
    {
      "source": "de_root_p3",
      "target": "de_root_p3_t6"
    },
    {
      "source": "de_root_p3_t6",
      "target": "de_root_p3_t6_s1"
    },
    {
      "source": "de_root_p3_t6_s1",
      "target": "de_root_p3_t6_s1_d1"
    },
    {
      "source": "de_root_p3_t6_s1",
      "target": "de_root_p3_t6_s1_d2"
    },
    {
      "source": "de_root_p3_t6",
      "target": "de_root_p3_t6_s2"
    },
    {
      "source": "de_root_p3_t6_s2",
      "target": "de_root_p3_t6_s2_d1"
    },
    {
      "source": "de_root_p3_t6_s2",
      "target": "de_root_p3_t6_s2_d2"
    },
    {
      "source": "de_root_p3_t6",
      "target": "de_root_p3_t6_s3"
    },
    {
      "source": "de_root_p3_t6_s3",
      "target": "de_root_p3_t6_s3_d1"
    },
    {
      "source": "de_root_p3_t6_s3",
      "target": "de_root_p3_t6_s3_d2"
    },
    {
      "source": "de_root_p3_t6",
      "target": "de_root_p3_t6_s4"
    },
    {
      "source": "de_root_p3_t6_s4",
      "target": "de_root_p3_t6_s4_d1"
    },
    {
      "source": "de_root_p3_t6_s4",
      "target": "de_root_p3_t6_s4_d2"
    },
    {
      "source": "de_root_p3_t6",
      "target": "de_root_p3_t6_s5"
    },
    {
      "source": "de_root_p3_t6_s5",
      "target": "de_root_p3_t6_s5_d1"
    },
    {
      "source": "de_root_p3_t6_s5",
      "target": "de_root_p3_t6_s5_d2"
    },
    {
      "source": "de_root",
      "target": "de_root_p4"
    },
    {
      "source": "de_root_p4",
      "target": "de_root_p4_t1"
    },
    {
      "source": "de_root_p4_t1",
      "target": "de_root_p4_t1_s1"
    },
    {
      "source": "de_root_p4_t1_s1",
      "target": "de_root_p4_t1_s1_d1"
    },
    {
      "source": "de_root_p4_t1_s1",
      "target": "de_root_p4_t1_s1_d2"
    },
    {
      "source": "de_root_p4_t1",
      "target": "de_root_p4_t1_s2"
    },
    {
      "source": "de_root_p4_t1_s2",
      "target": "de_root_p4_t1_s2_d1"
    },
    {
      "source": "de_root_p4_t1_s2",
      "target": "de_root_p4_t1_s2_d2"
    },
    {
      "source": "de_root_p4_t1",
      "target": "de_root_p4_t1_s3"
    },
    {
      "source": "de_root_p4_t1_s3",
      "target": "de_root_p4_t1_s3_d1"
    },
    {
      "source": "de_root_p4_t1_s3",
      "target": "de_root_p4_t1_s3_d2"
    },
    {
      "source": "de_root_p4_t1",
      "target": "de_root_p4_t1_s4"
    },
    {
      "source": "de_root_p4_t1_s4",
      "target": "de_root_p4_t1_s4_d1"
    },
    {
      "source": "de_root_p4_t1_s4",
      "target": "de_root_p4_t1_s4_d2"
    },
    {
      "source": "de_root_p4_t1",
      "target": "de_root_p4_t1_s5"
    },
    {
      "source": "de_root_p4_t1_s5",
      "target": "de_root_p4_t1_s5_d1"
    },
    {
      "source": "de_root_p4_t1_s5",
      "target": "de_root_p4_t1_s5_d2"
    },
    {
      "source": "de_root_p4",
      "target": "de_root_p4_t2"
    },
    {
      "source": "de_root_p4_t2",
      "target": "de_root_p4_t2_s1"
    },
    {
      "source": "de_root_p4_t2_s1",
      "target": "de_root_p4_t2_s1_d1"
    },
    {
      "source": "de_root_p4_t2_s1",
      "target": "de_root_p4_t2_s1_d2"
    },
    {
      "source": "de_root_p4_t2",
      "target": "de_root_p4_t2_s2"
    },
    {
      "source": "de_root_p4_t2_s2",
      "target": "de_root_p4_t2_s2_d1"
    },
    {
      "source": "de_root_p4_t2_s2",
      "target": "de_root_p4_t2_s2_d2"
    },
    {
      "source": "de_root_p4_t2",
      "target": "de_root_p4_t2_s3"
    },
    {
      "source": "de_root_p4_t2_s3",
      "target": "de_root_p4_t2_s3_d1"
    },
    {
      "source": "de_root_p4_t2_s3",
      "target": "de_root_p4_t2_s3_d2"
    },
    {
      "source": "de_root_p4_t2",
      "target": "de_root_p4_t2_s4"
    },
    {
      "source": "de_root_p4_t2_s4",
      "target": "de_root_p4_t2_s4_d1"
    },
    {
      "source": "de_root_p4_t2_s4",
      "target": "de_root_p4_t2_s4_d2"
    },
    {
      "source": "de_root_p4_t2",
      "target": "de_root_p4_t2_s5"
    },
    {
      "source": "de_root_p4_t2_s5",
      "target": "de_root_p4_t2_s5_d1"
    },
    {
      "source": "de_root_p4_t2_s5",
      "target": "de_root_p4_t2_s5_d2"
    },
    {
      "source": "de_root_p4",
      "target": "de_root_p4_t3"
    },
    {
      "source": "de_root_p4_t3",
      "target": "de_root_p4_t3_s1"
    },
    {
      "source": "de_root_p4_t3_s1",
      "target": "de_root_p4_t3_s1_d1"
    },
    {
      "source": "de_root_p4_t3_s1",
      "target": "de_root_p4_t3_s1_d2"
    },
    {
      "source": "de_root_p4_t3",
      "target": "de_root_p4_t3_s2"
    },
    {
      "source": "de_root_p4_t3_s2",
      "target": "de_root_p4_t3_s2_d1"
    },
    {
      "source": "de_root_p4_t3_s2",
      "target": "de_root_p4_t3_s2_d2"
    },
    {
      "source": "de_root_p4_t3",
      "target": "de_root_p4_t3_s3"
    },
    {
      "source": "de_root_p4_t3_s3",
      "target": "de_root_p4_t3_s3_d1"
    },
    {
      "source": "de_root_p4_t3_s3",
      "target": "de_root_p4_t3_s3_d2"
    },
    {
      "source": "de_root_p4_t3",
      "target": "de_root_p4_t3_s4"
    },
    {
      "source": "de_root_p4_t3_s4",
      "target": "de_root_p4_t3_s4_d1"
    },
    {
      "source": "de_root_p4_t3_s4",
      "target": "de_root_p4_t3_s4_d2"
    },
    {
      "source": "de_root_p4_t3",
      "target": "de_root_p4_t3_s5"
    },
    {
      "source": "de_root_p4_t3_s5",
      "target": "de_root_p4_t3_s5_d1"
    },
    {
      "source": "de_root_p4_t3_s5",
      "target": "de_root_p4_t3_s5_d2"
    },
    {
      "source": "de_root_p4",
      "target": "de_root_p4_t4"
    },
    {
      "source": "de_root_p4_t4",
      "target": "de_root_p4_t4_s1"
    },
    {
      "source": "de_root_p4_t4_s1",
      "target": "de_root_p4_t4_s1_d1"
    },
    {
      "source": "de_root_p4_t4_s1",
      "target": "de_root_p4_t4_s1_d2"
    },
    {
      "source": "de_root_p4_t4",
      "target": "de_root_p4_t4_s2"
    },
    {
      "source": "de_root_p4_t4_s2",
      "target": "de_root_p4_t4_s2_d1"
    },
    {
      "source": "de_root_p4_t4_s2",
      "target": "de_root_p4_t4_s2_d2"
    },
    {
      "source": "de_root_p4_t4",
      "target": "de_root_p4_t4_s3"
    },
    {
      "source": "de_root_p4_t4_s3",
      "target": "de_root_p4_t4_s3_d1"
    },
    {
      "source": "de_root_p4_t4_s3",
      "target": "de_root_p4_t4_s3_d2"
    },
    {
      "source": "de_root_p4_t4",
      "target": "de_root_p4_t4_s4"
    },
    {
      "source": "de_root_p4_t4_s4",
      "target": "de_root_p4_t4_s4_d1"
    },
    {
      "source": "de_root_p4_t4_s4",
      "target": "de_root_p4_t4_s4_d2"
    },
    {
      "source": "de_root_p4_t4",
      "target": "de_root_p4_t4_s5"
    },
    {
      "source": "de_root_p4_t4_s5",
      "target": "de_root_p4_t4_s5_d1"
    },
    {
      "source": "de_root_p4_t4_s5",
      "target": "de_root_p4_t4_s5_d2"
    },
    {
      "source": "de_root_p4",
      "target": "de_root_p4_t5"
    },
    {
      "source": "de_root_p4_t5",
      "target": "de_root_p4_t5_s1"
    },
    {
      "source": "de_root_p4_t5_s1",
      "target": "de_root_p4_t5_s1_d1"
    },
    {
      "source": "de_root_p4_t5_s1",
      "target": "de_root_p4_t5_s1_d2"
    },
    {
      "source": "de_root_p4_t5",
      "target": "de_root_p4_t5_s2"
    },
    {
      "source": "de_root_p4_t5_s2",
      "target": "de_root_p4_t5_s2_d1"
    },
    {
      "source": "de_root_p4_t5_s2",
      "target": "de_root_p4_t5_s2_d2"
    },
    {
      "source": "de_root_p4_t5",
      "target": "de_root_p4_t5_s3"
    },
    {
      "source": "de_root_p4_t5_s3",
      "target": "de_root_p4_t5_s3_d1"
    },
    {
      "source": "de_root_p4_t5_s3",
      "target": "de_root_p4_t5_s3_d2"
    },
    {
      "source": "de_root_p4_t5",
      "target": "de_root_p4_t5_s4"
    },
    {
      "source": "de_root_p4_t5_s4",
      "target": "de_root_p4_t5_s4_d1"
    },
    {
      "source": "de_root_p4_t5_s4",
      "target": "de_root_p4_t5_s4_d2"
    },
    {
      "source": "de_root_p4_t5",
      "target": "de_root_p4_t5_s5"
    },
    {
      "source": "de_root_p4_t5_s5",
      "target": "de_root_p4_t5_s5_d1"
    },
    {
      "source": "de_root_p4_t5_s5",
      "target": "de_root_p4_t5_s5_d2"
    },
    {
      "source": "de_root_p4",
      "target": "de_root_p4_t6"
    },
    {
      "source": "de_root_p4_t6",
      "target": "de_root_p4_t6_s1"
    },
    {
      "source": "de_root_p4_t6_s1",
      "target": "de_root_p4_t6_s1_d1"
    },
    {
      "source": "de_root_p4_t6_s1",
      "target": "de_root_p4_t6_s1_d2"
    },
    {
      "source": "de_root_p4_t6",
      "target": "de_root_p4_t6_s2"
    },
    {
      "source": "de_root_p4_t6_s2",
      "target": "de_root_p4_t6_s2_d1"
    },
    {
      "source": "de_root_p4_t6_s2",
      "target": "de_root_p4_t6_s2_d2"
    },
    {
      "source": "de_root_p4_t6",
      "target": "de_root_p4_t6_s3"
    },
    {
      "source": "de_root_p4_t6_s3",
      "target": "de_root_p4_t6_s3_d1"
    },
    {
      "source": "de_root_p4_t6_s3",
      "target": "de_root_p4_t6_s3_d2"
    },
    {
      "source": "de_root_p4_t6",
      "target": "de_root_p4_t6_s4"
    },
    {
      "source": "de_root_p4_t6_s4",
      "target": "de_root_p4_t6_s4_d1"
    },
    {
      "source": "de_root_p4_t6_s4",
      "target": "de_root_p4_t6_s4_d2"
    },
    {
      "source": "de_root_p4_t6",
      "target": "de_root_p4_t6_s5"
    },
    {
      "source": "de_root_p4_t6_s5",
      "target": "de_root_p4_t6_s5_d1"
    },
    {
      "source": "de_root_p4_t6_s5",
      "target": "de_root_p4_t6_s5_d2"
    },
    {
      "source": "de_root",
      "target": "de_root_p5"
    },
    {
      "source": "de_root_p5",
      "target": "de_root_p5_t1"
    },
    {
      "source": "de_root_p5_t1",
      "target": "de_root_p5_t1_s1"
    },
    {
      "source": "de_root_p5_t1_s1",
      "target": "de_root_p5_t1_s1_d1"
    },
    {
      "source": "de_root_p5_t1_s1",
      "target": "de_root_p5_t1_s1_d2"
    },
    {
      "source": "de_root_p5_t1",
      "target": "de_root_p5_t1_s2"
    },
    {
      "source": "de_root_p5_t1_s2",
      "target": "de_root_p5_t1_s2_d1"
    },
    {
      "source": "de_root_p5_t1_s2",
      "target": "de_root_p5_t1_s2_d2"
    },
    {
      "source": "de_root_p5_t1",
      "target": "de_root_p5_t1_s3"
    },
    {
      "source": "de_root_p5_t1_s3",
      "target": "de_root_p5_t1_s3_d1"
    },
    {
      "source": "de_root_p5_t1_s3",
      "target": "de_root_p5_t1_s3_d2"
    },
    {
      "source": "de_root_p5_t1",
      "target": "de_root_p5_t1_s4"
    },
    {
      "source": "de_root_p5_t1_s4",
      "target": "de_root_p5_t1_s4_d1"
    },
    {
      "source": "de_root_p5_t1_s4",
      "target": "de_root_p5_t1_s4_d2"
    },
    {
      "source": "de_root_p5_t1",
      "target": "de_root_p5_t1_s5"
    },
    {
      "source": "de_root_p5_t1_s5",
      "target": "de_root_p5_t1_s5_d1"
    },
    {
      "source": "de_root_p5_t1_s5",
      "target": "de_root_p5_t1_s5_d2"
    },
    {
      "source": "de_root_p5",
      "target": "de_root_p5_t2"
    },
    {
      "source": "de_root_p5_t2",
      "target": "de_root_p5_t2_s1"
    },
    {
      "source": "de_root_p5_t2_s1",
      "target": "de_root_p5_t2_s1_d1"
    },
    {
      "source": "de_root_p5_t2_s1",
      "target": "de_root_p5_t2_s1_d2"
    },
    {
      "source": "de_root_p5_t2",
      "target": "de_root_p5_t2_s2"
    },
    {
      "source": "de_root_p5_t2_s2",
      "target": "de_root_p5_t2_s2_d1"
    },
    {
      "source": "de_root_p5_t2_s2",
      "target": "de_root_p5_t2_s2_d2"
    },
    {
      "source": "de_root_p5_t2",
      "target": "de_root_p5_t2_s3"
    },
    {
      "source": "de_root_p5_t2_s3",
      "target": "de_root_p5_t2_s3_d1"
    },
    {
      "source": "de_root_p5_t2_s3",
      "target": "de_root_p5_t2_s3_d2"
    },
    {
      "source": "de_root_p5_t2",
      "target": "de_root_p5_t2_s4"
    },
    {
      "source": "de_root_p5_t2_s4",
      "target": "de_root_p5_t2_s4_d1"
    },
    {
      "source": "de_root_p5_t2_s4",
      "target": "de_root_p5_t2_s4_d2"
    },
    {
      "source": "de_root_p5_t2",
      "target": "de_root_p5_t2_s5"
    },
    {
      "source": "de_root_p5_t2_s5",
      "target": "de_root_p5_t2_s5_d1"
    },
    {
      "source": "de_root_p5_t2_s5",
      "target": "de_root_p5_t2_s5_d2"
    },
    {
      "source": "de_root_p5",
      "target": "de_root_p5_t3"
    },
    {
      "source": "de_root_p5_t3",
      "target": "de_root_p5_t3_s1"
    },
    {
      "source": "de_root_p5_t3_s1",
      "target": "de_root_p5_t3_s1_d1"
    },
    {
      "source": "de_root_p5_t3_s1",
      "target": "de_root_p5_t3_s1_d2"
    },
    {
      "source": "de_root_p5_t3",
      "target": "de_root_p5_t3_s2"
    },
    {
      "source": "de_root_p5_t3_s2",
      "target": "de_root_p5_t3_s2_d1"
    },
    {
      "source": "de_root_p5_t3_s2",
      "target": "de_root_p5_t3_s2_d2"
    },
    {
      "source": "de_root_p5_t3",
      "target": "de_root_p5_t3_s3"
    },
    {
      "source": "de_root_p5_t3_s3",
      "target": "de_root_p5_t3_s3_d1"
    },
    {
      "source": "de_root_p5_t3_s3",
      "target": "de_root_p5_t3_s3_d2"
    },
    {
      "source": "de_root_p5_t3",
      "target": "de_root_p5_t3_s4"
    },
    {
      "source": "de_root_p5_t3_s4",
      "target": "de_root_p5_t3_s4_d1"
    },
    {
      "source": "de_root_p5_t3_s4",
      "target": "de_root_p5_t3_s4_d2"
    },
    {
      "source": "de_root_p5_t3",
      "target": "de_root_p5_t3_s5"
    },
    {
      "source": "de_root_p5_t3_s5",
      "target": "de_root_p5_t3_s5_d1"
    },
    {
      "source": "de_root_p5_t3_s5",
      "target": "de_root_p5_t3_s5_d2"
    },
    {
      "source": "de_root_p5",
      "target": "de_root_p5_t4"
    },
    {
      "source": "de_root_p5_t4",
      "target": "de_root_p5_t4_s1"
    },
    {
      "source": "de_root_p5_t4_s1",
      "target": "de_root_p5_t4_s1_d1"
    },
    {
      "source": "de_root_p5_t4_s1",
      "target": "de_root_p5_t4_s1_d2"
    },
    {
      "source": "de_root_p5_t4",
      "target": "de_root_p5_t4_s2"
    },
    {
      "source": "de_root_p5_t4_s2",
      "target": "de_root_p5_t4_s2_d1"
    },
    {
      "source": "de_root_p5_t4_s2",
      "target": "de_root_p5_t4_s2_d2"
    },
    {
      "source": "de_root_p5_t4",
      "target": "de_root_p5_t4_s3"
    },
    {
      "source": "de_root_p5_t4_s3",
      "target": "de_root_p5_t4_s3_d1"
    },
    {
      "source": "de_root_p5_t4_s3",
      "target": "de_root_p5_t4_s3_d2"
    },
    {
      "source": "de_root_p5_t4",
      "target": "de_root_p5_t4_s4"
    },
    {
      "source": "de_root_p5_t4_s4",
      "target": "de_root_p5_t4_s4_d1"
    },
    {
      "source": "de_root_p5_t4_s4",
      "target": "de_root_p5_t4_s4_d2"
    },
    {
      "source": "de_root_p5_t4",
      "target": "de_root_p5_t4_s5"
    },
    {
      "source": "de_root_p5_t4_s5",
      "target": "de_root_p5_t4_s5_d1"
    },
    {
      "source": "de_root_p5_t4_s5",
      "target": "de_root_p5_t4_s5_d2"
    },
    {
      "source": "de_root_p5",
      "target": "de_root_p5_t5"
    },
    {
      "source": "de_root_p5_t5",
      "target": "de_root_p5_t5_s1"
    },
    {
      "source": "de_root_p5_t5_s1",
      "target": "de_root_p5_t5_s1_d1"
    },
    {
      "source": "de_root_p5_t5_s1",
      "target": "de_root_p5_t5_s1_d2"
    },
    {
      "source": "de_root_p5_t5",
      "target": "de_root_p5_t5_s2"
    },
    {
      "source": "de_root_p5_t5_s2",
      "target": "de_root_p5_t5_s2_d1"
    },
    {
      "source": "de_root_p5_t5_s2",
      "target": "de_root_p5_t5_s2_d2"
    },
    {
      "source": "de_root_p5_t5",
      "target": "de_root_p5_t5_s3"
    },
    {
      "source": "de_root_p5_t5_s3",
      "target": "de_root_p5_t5_s3_d1"
    },
    {
      "source": "de_root_p5_t5_s3",
      "target": "de_root_p5_t5_s3_d2"
    },
    {
      "source": "de_root_p5_t5",
      "target": "de_root_p5_t5_s4"
    },
    {
      "source": "de_root_p5_t5_s4",
      "target": "de_root_p5_t5_s4_d1"
    },
    {
      "source": "de_root_p5_t5_s4",
      "target": "de_root_p5_t5_s4_d2"
    },
    {
      "source": "de_root_p5_t5",
      "target": "de_root_p5_t5_s5"
    },
    {
      "source": "de_root_p5_t5_s5",
      "target": "de_root_p5_t5_s5_d1"
    },
    {
      "source": "de_root_p5_t5_s5",
      "target": "de_root_p5_t5_s5_d2"
    },
    {
      "source": "de_root_p5",
      "target": "de_root_p5_t6"
    },
    {
      "source": "de_root_p5_t6",
      "target": "de_root_p5_t6_s1"
    },
    {
      "source": "de_root_p5_t6_s1",
      "target": "de_root_p5_t6_s1_d1"
    },
    {
      "source": "de_root_p5_t6_s1",
      "target": "de_root_p5_t6_s1_d2"
    },
    {
      "source": "de_root_p5_t6",
      "target": "de_root_p5_t6_s2"
    },
    {
      "source": "de_root_p5_t6_s2",
      "target": "de_root_p5_t6_s2_d1"
    },
    {
      "source": "de_root_p5_t6_s2",
      "target": "de_root_p5_t6_s2_d2"
    },
    {
      "source": "de_root_p5_t6",
      "target": "de_root_p5_t6_s3"
    },
    {
      "source": "de_root_p5_t6_s3",
      "target": "de_root_p5_t6_s3_d1"
    },
    {
      "source": "de_root_p5_t6_s3",
      "target": "de_root_p5_t6_s3_d2"
    },
    {
      "source": "de_root_p5_t6",
      "target": "de_root_p5_t6_s4"
    },
    {
      "source": "de_root_p5_t6_s4",
      "target": "de_root_p5_t6_s4_d1"
    },
    {
      "source": "de_root_p5_t6_s4",
      "target": "de_root_p5_t6_s4_d2"
    },
    {
      "source": "de_root_p5_t6",
      "target": "de_root_p5_t6_s5"
    },
    {
      "source": "de_root_p5_t6_s5",
      "target": "de_root_p5_t6_s5_d1"
    },
    {
      "source": "de_root_p5_t6_s5",
      "target": "de_root_p5_t6_s5_d2"
    },
    {
      "source": "de_root",
      "target": "de_root_p6"
    },
    {
      "source": "de_root_p6",
      "target": "de_root_p6_t1"
    },
    {
      "source": "de_root_p6_t1",
      "target": "de_root_p6_t1_s1"
    },
    {
      "source": "de_root_p6_t1_s1",
      "target": "de_root_p6_t1_s1_d1"
    },
    {
      "source": "de_root_p6_t1_s1",
      "target": "de_root_p6_t1_s1_d2"
    },
    {
      "source": "de_root_p6_t1",
      "target": "de_root_p6_t1_s2"
    },
    {
      "source": "de_root_p6_t1_s2",
      "target": "de_root_p6_t1_s2_d1"
    },
    {
      "source": "de_root_p6_t1_s2",
      "target": "de_root_p6_t1_s2_d2"
    },
    {
      "source": "de_root_p6_t1",
      "target": "de_root_p6_t1_s3"
    },
    {
      "source": "de_root_p6_t1_s3",
      "target": "de_root_p6_t1_s3_d1"
    },
    {
      "source": "de_root_p6_t1_s3",
      "target": "de_root_p6_t1_s3_d2"
    },
    {
      "source": "de_root_p6_t1",
      "target": "de_root_p6_t1_s4"
    },
    {
      "source": "de_root_p6_t1_s4",
      "target": "de_root_p6_t1_s4_d1"
    },
    {
      "source": "de_root_p6_t1_s4",
      "target": "de_root_p6_t1_s4_d2"
    },
    {
      "source": "de_root_p6_t1",
      "target": "de_root_p6_t1_s5"
    },
    {
      "source": "de_root_p6_t1_s5",
      "target": "de_root_p6_t1_s5_d1"
    },
    {
      "source": "de_root_p6_t1_s5",
      "target": "de_root_p6_t1_s5_d2"
    },
    {
      "source": "de_root_p6",
      "target": "de_root_p6_t2"
    },
    {
      "source": "de_root_p6_t2",
      "target": "de_root_p6_t2_s1"
    },
    {
      "source": "de_root_p6_t2_s1",
      "target": "de_root_p6_t2_s1_d1"
    },
    {
      "source": "de_root_p6_t2_s1",
      "target": "de_root_p6_t2_s1_d2"
    },
    {
      "source": "de_root_p6_t2",
      "target": "de_root_p6_t2_s2"
    },
    {
      "source": "de_root_p6_t2_s2",
      "target": "de_root_p6_t2_s2_d1"
    },
    {
      "source": "de_root_p6_t2_s2",
      "target": "de_root_p6_t2_s2_d2"
    },
    {
      "source": "de_root_p6_t2",
      "target": "de_root_p6_t2_s3"
    },
    {
      "source": "de_root_p6_t2_s3",
      "target": "de_root_p6_t2_s3_d1"
    },
    {
      "source": "de_root_p6_t2_s3",
      "target": "de_root_p6_t2_s3_d2"
    },
    {
      "source": "de_root_p6_t2",
      "target": "de_root_p6_t2_s4"
    },
    {
      "source": "de_root_p6_t2_s4",
      "target": "de_root_p6_t2_s4_d1"
    },
    {
      "source": "de_root_p6_t2_s4",
      "target": "de_root_p6_t2_s4_d2"
    },
    {
      "source": "de_root_p6_t2",
      "target": "de_root_p6_t2_s5"
    },
    {
      "source": "de_root_p6_t2_s5",
      "target": "de_root_p6_t2_s5_d1"
    },
    {
      "source": "de_root_p6_t2_s5",
      "target": "de_root_p6_t2_s5_d2"
    },
    {
      "source": "de_root_p6",
      "target": "de_root_p6_t3"
    },
    {
      "source": "de_root_p6_t3",
      "target": "de_root_p6_t3_s1"
    },
    {
      "source": "de_root_p6_t3_s1",
      "target": "de_root_p6_t3_s1_d1"
    },
    {
      "source": "de_root_p6_t3_s1",
      "target": "de_root_p6_t3_s1_d2"
    },
    {
      "source": "de_root_p6_t3",
      "target": "de_root_p6_t3_s2"
    },
    {
      "source": "de_root_p6_t3_s2",
      "target": "de_root_p6_t3_s2_d1"
    },
    {
      "source": "de_root_p6_t3_s2",
      "target": "de_root_p6_t3_s2_d2"
    },
    {
      "source": "de_root_p6_t3",
      "target": "de_root_p6_t3_s3"
    },
    {
      "source": "de_root_p6_t3_s3",
      "target": "de_root_p6_t3_s3_d1"
    },
    {
      "source": "de_root_p6_t3_s3",
      "target": "de_root_p6_t3_s3_d2"
    },
    {
      "source": "de_root_p6_t3",
      "target": "de_root_p6_t3_s4"
    },
    {
      "source": "de_root_p6_t3_s4",
      "target": "de_root_p6_t3_s4_d1"
    },
    {
      "source": "de_root_p6_t3_s4",
      "target": "de_root_p6_t3_s4_d2"
    },
    {
      "source": "de_root_p6_t3",
      "target": "de_root_p6_t3_s5"
    },
    {
      "source": "de_root_p6_t3_s5",
      "target": "de_root_p6_t3_s5_d1"
    },
    {
      "source": "de_root_p6_t3_s5",
      "target": "de_root_p6_t3_s5_d2"
    },
    {
      "source": "de_root_p6",
      "target": "de_root_p6_t4"
    },
    {
      "source": "de_root_p6_t4",
      "target": "de_root_p6_t4_s1"
    },
    {
      "source": "de_root_p6_t4_s1",
      "target": "de_root_p6_t4_s1_d1"
    },
    {
      "source": "de_root_p6_t4_s1",
      "target": "de_root_p6_t4_s1_d2"
    },
    {
      "source": "de_root_p6_t4",
      "target": "de_root_p6_t4_s2"
    },
    {
      "source": "de_root_p6_t4_s2",
      "target": "de_root_p6_t4_s2_d1"
    },
    {
      "source": "de_root_p6_t4_s2",
      "target": "de_root_p6_t4_s2_d2"
    },
    {
      "source": "de_root_p6_t4",
      "target": "de_root_p6_t4_s3"
    },
    {
      "source": "de_root_p6_t4_s3",
      "target": "de_root_p6_t4_s3_d1"
    },
    {
      "source": "de_root_p6_t4_s3",
      "target": "de_root_p6_t4_s3_d2"
    },
    {
      "source": "de_root_p6_t4",
      "target": "de_root_p6_t4_s4"
    },
    {
      "source": "de_root_p6_t4_s4",
      "target": "de_root_p6_t4_s4_d1"
    },
    {
      "source": "de_root_p6_t4_s4",
      "target": "de_root_p6_t4_s4_d2"
    },
    {
      "source": "de_root_p6_t4",
      "target": "de_root_p6_t4_s5"
    },
    {
      "source": "de_root_p6_t4_s5",
      "target": "de_root_p6_t4_s5_d1"
    },
    {
      "source": "de_root_p6_t4_s5",
      "target": "de_root_p6_t4_s5_d2"
    },
    {
      "source": "de_root_p6",
      "target": "de_root_p6_t5"
    },
    {
      "source": "de_root_p6_t5",
      "target": "de_root_p6_t5_s1"
    },
    {
      "source": "de_root_p6_t5_s1",
      "target": "de_root_p6_t5_s1_d1"
    },
    {
      "source": "de_root_p6_t5_s1",
      "target": "de_root_p6_t5_s1_d2"
    },
    {
      "source": "de_root_p6_t5",
      "target": "de_root_p6_t5_s2"
    },
    {
      "source": "de_root_p6_t5_s2",
      "target": "de_root_p6_t5_s2_d1"
    },
    {
      "source": "de_root_p6_t5_s2",
      "target": "de_root_p6_t5_s2_d2"
    },
    {
      "source": "de_root_p6_t5",
      "target": "de_root_p6_t5_s3"
    },
    {
      "source": "de_root_p6_t5_s3",
      "target": "de_root_p6_t5_s3_d1"
    },
    {
      "source": "de_root_p6_t5_s3",
      "target": "de_root_p6_t5_s3_d2"
    },
    {
      "source": "de_root_p6_t5",
      "target": "de_root_p6_t5_s4"
    },
    {
      "source": "de_root_p6_t5_s4",
      "target": "de_root_p6_t5_s4_d1"
    },
    {
      "source": "de_root_p6_t5_s4",
      "target": "de_root_p6_t5_s4_d2"
    },
    {
      "source": "de_root_p6_t5",
      "target": "de_root_p6_t5_s5"
    },
    {
      "source": "de_root_p6_t5_s5",
      "target": "de_root_p6_t5_s5_d1"
    },
    {
      "source": "de_root_p6_t5_s5",
      "target": "de_root_p6_t5_s5_d2"
    },
    {
      "source": "de_root_p6",
      "target": "de_root_p6_t6"
    },
    {
      "source": "de_root_p6_t6",
      "target": "de_root_p6_t6_s1"
    },
    {
      "source": "de_root_p6_t6_s1",
      "target": "de_root_p6_t6_s1_d1"
    },
    {
      "source": "de_root_p6_t6_s1",
      "target": "de_root_p6_t6_s1_d2"
    },
    {
      "source": "de_root_p6_t6",
      "target": "de_root_p6_t6_s2"
    },
    {
      "source": "de_root_p6_t6_s2",
      "target": "de_root_p6_t6_s2_d1"
    },
    {
      "source": "de_root_p6_t6_s2",
      "target": "de_root_p6_t6_s2_d2"
    },
    {
      "source": "de_root_p6_t6",
      "target": "de_root_p6_t6_s3"
    },
    {
      "source": "de_root_p6_t6_s3",
      "target": "de_root_p6_t6_s3_d1"
    },
    {
      "source": "de_root_p6_t6_s3",
      "target": "de_root_p6_t6_s3_d2"
    },
    {
      "source": "de_root_p6_t6",
      "target": "de_root_p6_t6_s4"
    },
    {
      "source": "de_root_p6_t6_s4",
      "target": "de_root_p6_t6_s4_d1"
    },
    {
      "source": "de_root_p6_t6_s4",
      "target": "de_root_p6_t6_s4_d2"
    },
    {
      "source": "de_root_p6_t6",
      "target": "de_root_p6_t6_s5"
    },
    {
      "source": "de_root_p6_t6_s5",
      "target": "de_root_p6_t6_s5_d1"
    },
    {
      "source": "de_root_p6_t6_s5",
      "target": "de_root_p6_t6_s5_d2"
    },
    {
      "source": "de_root",
      "target": "de_root_p7"
    },
    {
      "source": "de_root_p7",
      "target": "de_root_p7_t1"
    },
    {
      "source": "de_root_p7_t1",
      "target": "de_root_p7_t1_s1"
    },
    {
      "source": "de_root_p7_t1_s1",
      "target": "de_root_p7_t1_s1_d1"
    },
    {
      "source": "de_root_p7_t1_s1",
      "target": "de_root_p7_t1_s1_d2"
    },
    {
      "source": "de_root_p7_t1",
      "target": "de_root_p7_t1_s2"
    },
    {
      "source": "de_root_p7_t1_s2",
      "target": "de_root_p7_t1_s2_d1"
    },
    {
      "source": "de_root_p7_t1_s2",
      "target": "de_root_p7_t1_s2_d2"
    },
    {
      "source": "de_root_p7_t1",
      "target": "de_root_p7_t1_s3"
    },
    {
      "source": "de_root_p7_t1_s3",
      "target": "de_root_p7_t1_s3_d1"
    },
    {
      "source": "de_root_p7_t1_s3",
      "target": "de_root_p7_t1_s3_d2"
    },
    {
      "source": "de_root_p7_t1_s3",
      "target": "de_root_p7_t1_s3_d3"
    },
    {
      "source": "de_root_p7_t1",
      "target": "de_root_p7_t1_s4"
    },
    {
      "source": "de_root_p7_t1_s4",
      "target": "de_root_p7_t1_s4_d1"
    },
    {
      "source": "de_root_p7_t1_s4",
      "target": "de_root_p7_t1_s4_d2"
    },
    {
      "source": "de_root_p7_t1",
      "target": "de_root_p7_t1_s5"
    },
    {
      "source": "de_root_p7_t1_s5",
      "target": "de_root_p7_t1_s5_d1"
    },
    {
      "source": "de_root_p7_t1_s5",
      "target": "de_root_p7_t1_s5_d2"
    },
    {
      "source": "de_root_p7",
      "target": "de_root_p7_t2"
    },
    {
      "source": "de_root_p7_t2",
      "target": "de_root_p7_t2_s1"
    },
    {
      "source": "de_root_p7_t2_s1",
      "target": "de_root_p7_t2_s1_d1"
    },
    {
      "source": "de_root_p7_t2_s1",
      "target": "de_root_p7_t2_s1_d2"
    },
    {
      "source": "de_root_p7_t2",
      "target": "de_root_p7_t2_s2"
    },
    {
      "source": "de_root_p7_t2_s2",
      "target": "de_root_p7_t2_s2_d1"
    },
    {
      "source": "de_root_p7_t2_s2",
      "target": "de_root_p7_t2_s2_d2"
    },
    {
      "source": "de_root_p7_t2",
      "target": "de_root_p7_t2_s3"
    },
    {
      "source": "de_root_p7_t2_s3",
      "target": "de_root_p7_t2_s3_d1"
    },
    {
      "source": "de_root_p7_t2_s3",
      "target": "de_root_p7_t2_s3_d2"
    },
    {
      "source": "de_root_p7_t2",
      "target": "de_root_p7_t2_s4"
    },
    {
      "source": "de_root_p7_t2_s4",
      "target": "de_root_p7_t2_s4_d1"
    },
    {
      "source": "de_root_p7_t2_s4",
      "target": "de_root_p7_t2_s4_d2"
    },
    {
      "source": "de_root_p7_t2",
      "target": "de_root_p7_t2_s5"
    },
    {
      "source": "de_root_p7_t2_s5",
      "target": "de_root_p7_t2_s5_d1"
    },
    {
      "source": "de_root_p7_t2_s5",
      "target": "de_root_p7_t2_s5_d2"
    },
    {
      "source": "de_root_p7",
      "target": "de_root_p7_t3"
    },
    {
      "source": "de_root_p7_t3",
      "target": "de_root_p7_t3_s1"
    },
    {
      "source": "de_root_p7_t3_s1",
      "target": "de_root_p7_t3_s1_d1"
    },
    {
      "source": "de_root_p7_t3_s1",
      "target": "de_root_p7_t3_s1_d2"
    },
    {
      "source": "de_root_p7_t3",
      "target": "de_root_p7_t3_s2"
    },
    {
      "source": "de_root_p7_t3_s2",
      "target": "de_root_p7_t3_s2_d1"
    },
    {
      "source": "de_root_p7_t3_s2",
      "target": "de_root_p7_t3_s2_d2"
    },
    {
      "source": "de_root_p7_t3",
      "target": "de_root_p7_t3_s3"
    },
    {
      "source": "de_root_p7_t3_s3",
      "target": "de_root_p7_t3_s3_d1"
    },
    {
      "source": "de_root_p7_t3_s3",
      "target": "de_root_p7_t3_s3_d2"
    },
    {
      "source": "de_root_p7_t3",
      "target": "de_root_p7_t3_s4"
    },
    {
      "source": "de_root_p7_t3_s4",
      "target": "de_root_p7_t3_s4_d1"
    },
    {
      "source": "de_root_p7_t3_s4",
      "target": "de_root_p7_t3_s4_d2"
    },
    {
      "source": "de_root_p7_t3",
      "target": "de_root_p7_t3_s5"
    },
    {
      "source": "de_root_p7_t3_s5",
      "target": "de_root_p7_t3_s5_d1"
    },
    {
      "source": "de_root_p7_t3_s5",
      "target": "de_root_p7_t3_s5_d2"
    },
    {
      "source": "de_root_p7",
      "target": "de_root_p7_t4"
    },
    {
      "source": "de_root_p7_t4",
      "target": "de_root_p7_t4_s1"
    },
    {
      "source": "de_root_p7_t4_s1",
      "target": "de_root_p7_t4_s1_d1"
    },
    {
      "source": "de_root_p7_t4_s1",
      "target": "de_root_p7_t4_s1_d2"
    },
    {
      "source": "de_root_p7_t4",
      "target": "de_root_p7_t4_s2"
    },
    {
      "source": "de_root_p7_t4_s2",
      "target": "de_root_p7_t4_s2_d1"
    },
    {
      "source": "de_root_p7_t4_s2",
      "target": "de_root_p7_t4_s2_d2"
    },
    {
      "source": "de_root_p7_t4",
      "target": "de_root_p7_t4_s3"
    },
    {
      "source": "de_root_p7_t4_s3",
      "target": "de_root_p7_t4_s3_d1"
    },
    {
      "source": "de_root_p7_t4_s3",
      "target": "de_root_p7_t4_s3_d2"
    },
    {
      "source": "de_root_p7_t4",
      "target": "de_root_p7_t4_s4"
    },
    {
      "source": "de_root_p7_t4_s4",
      "target": "de_root_p7_t4_s4_d1"
    },
    {
      "source": "de_root_p7_t4_s4",
      "target": "de_root_p7_t4_s4_d2"
    },
    {
      "source": "de_root_p7_t4",
      "target": "de_root_p7_t4_s5"
    },
    {
      "source": "de_root_p7_t4_s5",
      "target": "de_root_p7_t4_s5_d1"
    },
    {
      "source": "de_root_p7_t4_s5",
      "target": "de_root_p7_t4_s5_d2"
    },
    {
      "source": "de_root_p7",
      "target": "de_root_p7_t5"
    },
    {
      "source": "de_root_p7_t5",
      "target": "de_root_p7_t5_s1"
    },
    {
      "source": "de_root_p7_t5_s1",
      "target": "de_root_p7_t5_s1_d1"
    },
    {
      "source": "de_root_p7_t5_s1",
      "target": "de_root_p7_t5_s1_d2"
    },
    {
      "source": "de_root_p7_t5",
      "target": "de_root_p7_t5_s2"
    },
    {
      "source": "de_root_p7_t5_s2",
      "target": "de_root_p7_t5_s2_d1"
    },
    {
      "source": "de_root_p7_t5_s2",
      "target": "de_root_p7_t5_s2_d2"
    },
    {
      "source": "de_root_p7_t5",
      "target": "de_root_p7_t5_s3"
    },
    {
      "source": "de_root_p7_t5_s3",
      "target": "de_root_p7_t5_s3_d1"
    },
    {
      "source": "de_root_p7_t5_s3",
      "target": "de_root_p7_t5_s3_d2"
    },
    {
      "source": "de_root_p7_t5",
      "target": "de_root_p7_t5_s4"
    },
    {
      "source": "de_root_p7_t5_s4",
      "target": "de_root_p7_t5_s4_d1"
    },
    {
      "source": "de_root_p7_t5_s4",
      "target": "de_root_p7_t5_s4_d2"
    },
    {
      "source": "de_root_p7_t5",
      "target": "de_root_p7_t5_s5"
    },
    {
      "source": "de_root_p7_t5_s5",
      "target": "de_root_p7_t5_s5_d1"
    },
    {
      "source": "de_root_p7_t5_s5",
      "target": "de_root_p7_t5_s5_d2"
    },
    {
      "source": "de_root_p7",
      "target": "de_root_p7_t6"
    },
    {
      "source": "de_root_p7_t6",
      "target": "de_root_p7_t6_s1"
    },
    {
      "source": "de_root_p7_t6_s1",
      "target": "de_root_p7_t6_s1_d1"
    },
    {
      "source": "de_root_p7_t6_s1",
      "target": "de_root_p7_t6_s1_d2"
    },
    {
      "source": "de_root_p7_t6",
      "target": "de_root_p7_t6_s2"
    },
    {
      "source": "de_root_p7_t6_s2",
      "target": "de_root_p7_t6_s2_d1"
    },
    {
      "source": "de_root_p7_t6_s2",
      "target": "de_root_p7_t6_s2_d2"
    },
    {
      "source": "de_root_p7_t6",
      "target": "de_root_p7_t6_s3"
    },
    {
      "source": "de_root_p7_t6_s3",
      "target": "de_root_p7_t6_s3_d1"
    },
    {
      "source": "de_root_p7_t6_s3",
      "target": "de_root_p7_t6_s3_d2"
    },
    {
      "source": "de_root_p7_t6",
      "target": "de_root_p7_t6_s4"
    },
    {
      "source": "de_root_p7_t6_s4",
      "target": "de_root_p7_t6_s4_d1"
    },
    {
      "source": "de_root_p7_t6_s4",
      "target": "de_root_p7_t6_s4_d2"
    },
    {
      "source": "de_root_p7_t6",
      "target": "de_root_p7_t6_s5"
    },
    {
      "source": "de_root_p7_t6_s5",
      "target": "de_root_p7_t6_s5_d1"
    },
    {
      "source": "de_root_p7_t6_s5",
      "target": "de_root_p7_t6_s5_d2"
    },
    {
      "source": "de_root",
      "target": "de_root_p8"
    },
    {
      "source": "de_root_p8",
      "target": "de_root_p8_t1"
    },
    {
      "source": "de_root_p8_t1",
      "target": "de_root_p8_t1_s1"
    },
    {
      "source": "de_root_p8_t1_s1",
      "target": "de_root_p8_t1_s1_d1"
    },
    {
      "source": "de_root_p8_t1_s1",
      "target": "de_root_p8_t1_s1_d2"
    },
    {
      "source": "de_root_p8_t1",
      "target": "de_root_p8_t1_s2"
    },
    {
      "source": "de_root_p8_t1_s2",
      "target": "de_root_p8_t1_s2_d1"
    },
    {
      "source": "de_root_p8_t1_s2",
      "target": "de_root_p8_t1_s2_d2"
    },
    {
      "source": "de_root_p8_t1",
      "target": "de_root_p8_t1_s3"
    },
    {
      "source": "de_root_p8_t1_s3",
      "target": "de_root_p8_t1_s3_d1"
    },
    {
      "source": "de_root_p8_t1_s3",
      "target": "de_root_p8_t1_s3_d2"
    },
    {
      "source": "de_root_p8_t1",
      "target": "de_root_p8_t1_s4"
    },
    {
      "source": "de_root_p8_t1_s4",
      "target": "de_root_p8_t1_s4_d1"
    },
    {
      "source": "de_root_p8_t1_s4",
      "target": "de_root_p8_t1_s4_d2"
    },
    {
      "source": "de_root_p8_t1",
      "target": "de_root_p8_t1_s5"
    },
    {
      "source": "de_root_p8_t1_s5",
      "target": "de_root_p8_t1_s5_d1"
    },
    {
      "source": "de_root_p8_t1_s5",
      "target": "de_root_p8_t1_s5_d2"
    },
    {
      "source": "de_root_p8",
      "target": "de_root_p8_t2"
    },
    {
      "source": "de_root_p8_t2",
      "target": "de_root_p8_t2_s1"
    },
    {
      "source": "de_root_p8_t2_s1",
      "target": "de_root_p8_t2_s1_d1"
    },
    {
      "source": "de_root_p8_t2_s1",
      "target": "de_root_p8_t2_s1_d2"
    },
    {
      "source": "de_root_p8_t2",
      "target": "de_root_p8_t2_s2"
    },
    {
      "source": "de_root_p8_t2_s2",
      "target": "de_root_p8_t2_s2_d1"
    },
    {
      "source": "de_root_p8_t2_s2",
      "target": "de_root_p8_t2_s2_d2"
    },
    {
      "source": "de_root_p8_t2",
      "target": "de_root_p8_t2_s3"
    },
    {
      "source": "de_root_p8_t2_s3",
      "target": "de_root_p8_t2_s3_d1"
    },
    {
      "source": "de_root_p8_t2_s3",
      "target": "de_root_p8_t2_s3_d2"
    },
    {
      "source": "de_root_p8_t2",
      "target": "de_root_p8_t2_s4"
    },
    {
      "source": "de_root_p8_t2_s4",
      "target": "de_root_p8_t2_s4_d1"
    },
    {
      "source": "de_root_p8_t2_s4",
      "target": "de_root_p8_t2_s4_d2"
    },
    {
      "source": "de_root_p8_t2",
      "target": "de_root_p8_t2_s5"
    },
    {
      "source": "de_root_p8_t2_s5",
      "target": "de_root_p8_t2_s5_d1"
    },
    {
      "source": "de_root_p8_t2_s5",
      "target": "de_root_p8_t2_s5_d2"
    },
    {
      "source": "de_root_p8",
      "target": "de_root_p8_t3"
    },
    {
      "source": "de_root_p8_t3",
      "target": "de_root_p8_t3_s1"
    },
    {
      "source": "de_root_p8_t3_s1",
      "target": "de_root_p8_t3_s1_d1"
    },
    {
      "source": "de_root_p8_t3_s1",
      "target": "de_root_p8_t3_s1_d2"
    },
    {
      "source": "de_root_p8_t3",
      "target": "de_root_p8_t3_s2"
    },
    {
      "source": "de_root_p8_t3_s2",
      "target": "de_root_p8_t3_s2_d1"
    },
    {
      "source": "de_root_p8_t3_s2",
      "target": "de_root_p8_t3_s2_d2"
    },
    {
      "source": "de_root_p8_t3",
      "target": "de_root_p8_t3_s3"
    },
    {
      "source": "de_root_p8_t3_s3",
      "target": "de_root_p8_t3_s3_d1"
    },
    {
      "source": "de_root_p8_t3_s3",
      "target": "de_root_p8_t3_s3_d2"
    },
    {
      "source": "de_root_p8_t3",
      "target": "de_root_p8_t3_s4"
    },
    {
      "source": "de_root_p8_t3_s4",
      "target": "de_root_p8_t3_s4_d1"
    },
    {
      "source": "de_root_p8_t3_s4",
      "target": "de_root_p8_t3_s4_d2"
    },
    {
      "source": "de_root_p8_t3",
      "target": "de_root_p8_t3_s5"
    },
    {
      "source": "de_root_p8_t3_s5",
      "target": "de_root_p8_t3_s5_d1"
    },
    {
      "source": "de_root_p8_t3_s5",
      "target": "de_root_p8_t3_s5_d2"
    },
    {
      "source": "de_root_p8",
      "target": "de_root_p8_t4"
    },
    {
      "source": "de_root_p8_t4",
      "target": "de_root_p8_t4_s1"
    },
    {
      "source": "de_root_p8_t4_s1",
      "target": "de_root_p8_t4_s1_d1"
    },
    {
      "source": "de_root_p8_t4_s1",
      "target": "de_root_p8_t4_s1_d2"
    },
    {
      "source": "de_root_p8_t4",
      "target": "de_root_p8_t4_s2"
    },
    {
      "source": "de_root_p8_t4_s2",
      "target": "de_root_p8_t4_s2_d1"
    },
    {
      "source": "de_root_p8_t4_s2",
      "target": "de_root_p8_t4_s2_d2"
    },
    {
      "source": "de_root_p8_t4",
      "target": "de_root_p8_t4_s3"
    },
    {
      "source": "de_root_p8_t4_s3",
      "target": "de_root_p8_t4_s3_d1"
    },
    {
      "source": "de_root_p8_t4_s3",
      "target": "de_root_p8_t4_s3_d2"
    },
    {
      "source": "de_root_p8_t4",
      "target": "de_root_p8_t4_s4"
    },
    {
      "source": "de_root_p8_t4_s4",
      "target": "de_root_p8_t4_s4_d1"
    },
    {
      "source": "de_root_p8_t4_s4",
      "target": "de_root_p8_t4_s4_d2"
    },
    {
      "source": "de_root_p8_t4",
      "target": "de_root_p8_t4_s5"
    },
    {
      "source": "de_root_p8_t4_s5",
      "target": "de_root_p8_t4_s5_d1"
    },
    {
      "source": "de_root_p8_t4_s5",
      "target": "de_root_p8_t4_s5_d2"
    },
    {
      "source": "de_root_p8",
      "target": "de_root_p8_t5"
    },
    {
      "source": "de_root_p8_t5",
      "target": "de_root_p8_t5_s1"
    },
    {
      "source": "de_root_p8_t5_s1",
      "target": "de_root_p8_t5_s1_d1"
    },
    {
      "source": "de_root_p8_t5_s1",
      "target": "de_root_p8_t5_s1_d2"
    },
    {
      "source": "de_root_p8_t5",
      "target": "de_root_p8_t5_s2"
    },
    {
      "source": "de_root_p8_t5_s2",
      "target": "de_root_p8_t5_s2_d1"
    },
    {
      "source": "de_root_p8_t5_s2",
      "target": "de_root_p8_t5_s2_d2"
    },
    {
      "source": "de_root_p8_t5",
      "target": "de_root_p8_t5_s3"
    },
    {
      "source": "de_root_p8_t5_s3",
      "target": "de_root_p8_t5_s3_d1"
    },
    {
      "source": "de_root_p8_t5_s3",
      "target": "de_root_p8_t5_s3_d2"
    },
    {
      "source": "de_root_p8_t5",
      "target": "de_root_p8_t5_s4"
    },
    {
      "source": "de_root_p8_t5_s4",
      "target": "de_root_p8_t5_s4_d1"
    },
    {
      "source": "de_root_p8_t5_s4",
      "target": "de_root_p8_t5_s4_d2"
    },
    {
      "source": "de_root_p8_t5",
      "target": "de_root_p8_t5_s5"
    },
    {
      "source": "de_root_p8_t5_s5",
      "target": "de_root_p8_t5_s5_d1"
    },
    {
      "source": "de_root_p8_t5_s5",
      "target": "de_root_p8_t5_s5_d2"
    },
    {
      "source": "de_root_p8",
      "target": "de_root_p8_t6"
    },
    {
      "source": "de_root_p8_t6",
      "target": "de_root_p8_t6_s1"
    },
    {
      "source": "de_root_p8_t6_s1",
      "target": "de_root_p8_t6_s1_d1"
    },
    {
      "source": "de_root_p8_t6_s1",
      "target": "de_root_p8_t6_s1_d2"
    },
    {
      "source": "de_root_p8_t6",
      "target": "de_root_p8_t6_s2"
    },
    {
      "source": "de_root_p8_t6_s2",
      "target": "de_root_p8_t6_s2_d1"
    },
    {
      "source": "de_root_p8_t6_s2",
      "target": "de_root_p8_t6_s2_d2"
    },
    {
      "source": "de_root_p8_t6",
      "target": "de_root_p8_t6_s3"
    },
    {
      "source": "de_root_p8_t6_s3",
      "target": "de_root_p8_t6_s3_d1"
    },
    {
      "source": "de_root_p8_t6_s3",
      "target": "de_root_p8_t6_s3_d2"
    },
    {
      "source": "de_root_p8_t6",
      "target": "de_root_p8_t6_s4"
    },
    {
      "source": "de_root_p8_t6_s4",
      "target": "de_root_p8_t6_s4_d1"
    },
    {
      "source": "de_root_p8_t6_s4",
      "target": "de_root_p8_t6_s4_d2"
    },
    {
      "source": "de_root_p8_t6",
      "target": "de_root_p8_t6_s5"
    },
    {
      "source": "de_root_p8_t6_s5",
      "target": "de_root_p8_t6_s5_d1"
    },
    {
      "source": "de_root_p8_t6_s5",
      "target": "de_root_p8_t6_s5_d2"
    }
  ]
};
