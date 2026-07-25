import { MindMapData } from "../../services/llmService";

const nodes: Array<{
  id: string;
  label: string;
  description: string;
  type?: "topic" | "concept" | "example" | "question" | "action" | "decision" | "source";
}> = [];

const edges: Array<{
  source: string;
  target: string;
  label?: string;
}> = [];

function add(id: string, label: string, description: string, parentId?: string | null) {
  nodes.push({ id, label, description, type: "concept" });
  if (parentId) {
    edges.push({ source: parentId, target: id });
  }
}

// L0: Root
add('de_root', 'Data Engineering Ecosystem', 'Comprehensive architecture encompassing data ingestion, processing, storage, analytics, orchestration, quality, governance, and ML feature engineering.');

// L1: 8 Pillars
add('de_p1', 'Data Ingestion', 'Capturing data from source systems to storage using batch polling, webhooks, or streaming change data capture (CDC).', 'de_root');
add('de_p2', 'Processing (Batch & Stream)', 'Transforming, aggregating, and enriching data either in bounded historical batches or unbounded real-time streams.', 'de_root');
add('de_p3', 'Storage Formats & Tables', 'Optimized file formats and table metadata layers that define how data is physically stored and logically accessed.', 'de_root');
add('de_p4', 'Warehousing & OLAP', 'Analytical databases designed for fast aggregation, complex joins, and business intelligence reporting over large datasets.', 'de_root');
add('de_p5', 'Orchestration', 'Defining, scheduling, and monitoring complex data pipeline DAGs (Directed Acyclic Graphs) and their dependencies.', 'de_root');
add('de_p6', 'Data Quality & Observability', 'Ensuring data accuracy and reliability through automated testing, anomaly detection, metadata tracking, and SLAs.', 'de_root');
add('de_p7', 'Catalog, Governance & Data Mesh', 'Managing metadata, column-level lineage, access control policies, and decentralizing data ownership into domain products.', 'de_root');
add('de_p8', 'ML Feature Store & Real-Time', 'Managing, transforming, and serving machine learning features with point-in-time correctness for offline training and low-latency online inference.', 'de_root');

// ==========================================
// Pillar 1: Data Ingestion (6 Topics)
// ==========================================
add('de_p1_t1', 'JDBC Batch Ingestion', 'Extracting data from relational databases using SQL queries at scheduled intervals based on state tracking.', 'de_p1');
add('de_p1_t1_s1', 'Query Watermark Tracking', 'Using a last_modified timestamp column to incrementally fetch only rows inserted or updated since the previous run.', 'de_p1_t1');
add('de_p1_t1_s1_l1', 'State Management', 'Storing the high-water mark externally to ensure fault tolerance and exactly-once extraction semantics.', 'de_p1_t1_s1');
add('de_p1_t1_s1_l2', 'Index Requirements', 'Requiring an index on the watermark column to avoid full table scans during incremental JDBC queries.', 'de_p1_t1_s1');

add('de_p1_t2', 'Debezium CDC', 'Logical replication that streams database row-level changes (inserts/updates/deletes) without polling overhead.', 'de_p1');
add('de_p1_t2_s1', 'PostgreSQL pgoutput', 'Debezium captures PostgreSQL changes via logical replication decoding (pgoutput plugin), reading the WAL and emitting events to Kafka.', 'de_p1_t2');
add('de_p1_t2_s1_l1', 'Before/After State', 'Events contain both the previous row state and the new state, enabling consumer systems to correctly handle updates and deletes.', 'de_p1_t2_s1');
add('de_p1_t2_s1_l2', 'Zero-Impact Extraction', 'Reading from the Write-Ahead Log avoids executing heavy SELECT queries against the primary database, minimizing performance impact.', 'de_p1_t2_s1');

add('de_p1_t3', 'Kafka Connect SMT', 'Single Message Transforms apply lightweight modifications to records as they pass through Kafka Connect source or sink connectors.', 'de_p1');
add('de_p1_t3_s1', 'Field Masking', 'Using the MaskField or ReplaceField SMT to redact PII (Personally Identifiable Information) before it hits the Kafka topic.', 'de_p1_t3');
add('de_p1_t3_s1_l1', 'Regex Router', 'Dynamically routing messages to different topics based on record content or metadata using regex replacement.', 'de_p1_t3_s1');
add('de_p1_t3_s1_l2', 'Timestamp Router', 'Partitioning data into time-based topics or S3 directories using the InsertField SMT to add ingestion timestamps.', 'de_p1_t3_s1');

add('de_p1_t4', 'REST API Polling', 'Fetching data from third-party SaaS applications using paginated HTTP requests with robust error handling.', 'de_p1');
add('de_p1_t4_s1', 'Exponential Backoff', 'Implementing retry logic that progressively increases the wait time between retries to handle rate limits (HTTP 429).', 'de_p1_t4');
add('de_p1_t4_s1_l1', 'Idempotency Keys', 'Including a unique request ID in API calls to prevent duplicate processing if a request times out but succeeds on the server.', 'de_p1_t4_s1');
add('de_p1_t4_s1_l2', 'Cursor Pagination', 'Using server-provided cursor tokens instead of offset/limit to ensure consistency when rows are added during iteration.', 'de_p1_t4_s1');

add('de_p1_t5', 'Webhook Receivers', 'Event-driven ingestion where external systems push HTTP POST requests to an API Gateway upon state changes.', 'de_p1');
add('de_p1_t5_s1', 'Exactly-Once Processing', 'Ensuring each webhook event is processed only once despite potential retries from the source system.', 'de_p1_t5');
add('de_p1_t5_s1_l1', 'Deduplication Table', 'Storing event IDs in a fast key-value store (like DynamoDB or Redis) to detect and drop duplicate webhook deliveries.', 'de_p1_t5_s1');
add('de_p1_t5_s1_l2', 'Dead Letter Queue', 'Routing unparseable or failed webhook payloads to a separate SQS queue for manual inspection without blocking the pipeline.', 'de_p1_t5_s1');

add('de_p1_t6', 'Log Aggregation', 'Collecting server and application logs using agents like Fluentd or Fluent Bit for central analysis.', 'de_p1');
add('de_p1_t6_s1', 'Filter record_transformer', 'Using the Fluentd filter plugin to mutate log records, add static tags, or parse JSON payloads before routing.', 'de_p1_t6');
add('de_p1_t6_s1_l1', 'Output Plugin Buffer', 'Buffering logs in memory or on disk to withstand network partitions and batch writes to destinations like Elasticsearch or S3.', 'de_p1_t6_s1');
add('de_p1_t6_s1_l2', 'Kinesis Firehose', 'Streaming logs to Firehose with dynamic partitioning to automatically group records in S3 by date prefix (e.g., year=2024/month=08).', 'de_p1_t6_s1');

// ==========================================
// Pillar 2: Processing (Batch & Stream) (6 Topics)
// ==========================================
add('de_p2_t1', 'Spark RDD Lineage', 'Resilient Distributed Datasets maintain a DAG of operations (lineage) to reconstruct lost partitions upon node failure.', 'de_p2');
add('de_p2_t1_s1', 'Fault Tolerance via Recomputation', 'Instead of replicating data, Spark re-evaluates the transformations from the last checkpoint or source to recover missing data.', 'de_p2_t1');
add('de_p2_t1_s1_l1', 'Action Triggers', 'PySpark DataFrame API uses lazy evaluation; transformations are unexecuted until an action (like collect() or count()) triggers execution.', 'de_p2_t1_s1');
add('de_p2_t1_s1_l2', 'Catalyst Optimizer', 'Translates logical plans to physical plans, pushing down predicates and pruning unneeded columns to reduce I/O.', 'de_p2_t1_s1');

add('de_p2_t2', 'Spark Memory Management', 'Optimizing memory usage to reduce garbage collection overhead and maximize processing speed.', 'de_p2');
add('de_p2_t2_s1', 'Tungsten Engine', 'Spark Tungsten utilizes off-heap memory and a custom binary format to bypass JVM object overhead and minimize GC pauses.', 'de_p2_t2');
add('de_p2_t2_s1_l1', 'Whole-Stage CodeGen', 'Compiling complex query plans into a single Java function at runtime to eliminate virtual function calls and leverage CPU registers.', 'de_p2_t2_s1');
add('de_p2_t2_s1_l2', 'Window Functions', 'Using RANK/LEAD/LAG with PARTITION BY and ORDER BY to compute aggregations over sliding frames of rows without self-joins.', 'de_p2_t2_s1');

add('de_p2_t3', 'Flink Stateful Streaming', 'Processing continuous event streams while maintaining internal state across discrete events.', 'de_p2');
add('de_p2_t3_s1', 'Checkpointing via Chandy-Lamport', 'Injecting barrier markers into the stream to trigger asynchronous distributed snapshots of operator state without stopping the world.', 'de_p2_t3');
add('de_p2_t3_s1_l1', 'RocksDB State Backend', 'Spilling large state out of JVM memory to embedded RocksDB on local disk, enabling state sizes larger than available RAM.', 'de_p2_t3_s1');
add('de_p2_t3_s1_l2', 'Exactly-Once 2PC', 'Using the Two-Phase Commit protocol for Flink sinks (like Kafka) to ensure state and output are committed atomically.', 'de_p2_t3_s1');

add('de_p2_t4', 'Event-Time Processing', 'Handling events based on when they occurred (event time) rather than when they arrived (processing time).', 'de_p2');
add('de_p2_t4_s1', 'Watermarks', 'A heuristic mechanism in Flink signaling that no more events older than a specific timestamp will arrive, triggering window evaluation.', 'de_p2_t4');
add('de_p2_t4_s1_l1', 'Max-Out-Of-Orderness', 'Configuring a delay tolerance to wait for late-arriving events before advancing the watermark and closing the window.', 'de_p2_t4_s1');
add('de_p2_t4_s1_l2', 'Allowed Lateness', 'Permitting late events to update already-emitted window results rather than dropping them immediately.', 'de_p2_t4_s1');

add('de_p2_t5', 'Apache Beam Portability', 'A unified programming model for batch and streaming pipelines that decouples the code from the execution engine.', 'de_p2');
add('de_p2_t5_s1', 'Unified Runner API', 'Writing logic once in Python or Java and executing it seamlessly on runners like Google Cloud Dataflow, Flink, or Spark.', 'de_p2_t5');
add('de_p2_t5_s1_l1', 'PCollections', 'Immutable distributed datasets that abstract away whether the underlying data is a bounded batch or an unbounded stream.', 'de_p2_t5_s1');
add('de_p2_t5_s1_l2', 'Trigger Conditions', 'Defining when to emit results for a window, such as repeatedly every minute or once upon the watermark passing the window end.', 'de_p2_t5_s1');

add('de_p2_t6', 'Vectorized In-Process OLAP', 'Executing analytical queries on single machines using CPU-efficient columnar techniques.', 'de_p2');
add('de_p2_t6_s1', 'DuckDB Execution', 'A vectorized SQL OLAP engine running entirely in-process, reading Parquet files directly with extremely low overhead.', 'de_p2_t6');
add('de_p2_t6_s1_l1', 'Polars Lazy Frames', 'Using a query optimizer in Python/Rust to delay execution, applying zero-copy Apache Arrow memory formats to accelerate aggregations.', 'de_p2_t6_s1');
add('de_p2_t6_s1_l2', 'SIMD Instructions', 'Exploiting Single Instruction Multiple Data hardware capabilities to process batches of columnar values in a single CPU cycle.', 'de_p2_t6_s1');

// ==========================================
// Pillar 3: Storage Formats & Table Formats (6 Topics)
// ==========================================
add('de_p3_t1', 'Parquet Columnar Format', 'Storing data in columns rather than rows, vastly improving read performance for analytical queries that select subset of fields.', 'de_p3');
add('de_p3_t1_s1', 'Row Groups & Pages', 'Partitioning data into row groups (typically 128MB), column chunks, and data pages (1MB) optimized for compression.', 'de_p3_t1');
add('de_p3_t1_s1_l1', 'Dictionary & RLE', 'Using dictionary encoding and Run-Length Encoding to heavily compress repetitive columnar values before applying ZSTD.', 'de_p3_t1_s1');
add('de_p3_t1_s1_l2', 'Predicate Pushdown', 'Skipping entire row groups using stored statistics (min/max/null counts) and Bloom filters when resolving SQL WHERE clauses.', 'de_p3_t1_s1');

add('de_p3_t2', 'Apache Iceberg Architecture', 'An open table format providing SQL behavior over vast data lakes without the directory-listing bottlenecks of Hive.', 'de_p3');
add('de_p3_t2_s1', 'Metadata Hierarchy', 'Structured as metadata.json pointing to snapshots, which point to manifest lists, which point to manifest files referencing data files.', 'de_p3_t2');
add('de_p3_t2_s1_l1', 'Hidden Partitioning', 'Storing partition metadata independently of folder structures, allowing partition evolution without rewriting existing data files.', 'de_p3_t2_s1');
add('de_p3_t2_s1_l2', 'Time Travel Queries', 'Querying historical states natively via SELECT * FROM table VERSION AS OF snapshot_id for auditing and rollback.', 'de_p3_t2_s1');

add('de_p3_t3', 'Delta Lake Protocol', 'An open-source storage layer that brings ACID transactions and scalable metadata handling to Apache Spark and other engines.', 'de_p3');
add('de_p3_t3_s1', 'Transaction Log', 'The _delta_log directory sequences JSON commit files, which are periodically compacted into Parquet checkpoint files for fast replay.', 'de_p3_t3');
add('de_p3_t3_s1_l1', 'Optimistic Concurrency', 'Handling multiple writers by verifying that concurrent commits do not conflict on the same data files before succeeding.', 'de_p3_t3_s1');
add('de_p3_t3_s1_l2', 'Z-Order Clustering', 'Reorganizing data layout to co-locate related information along multiple columns, dramatically pruning files during multidimensional queries.', 'de_p3_t3_s1');

add('de_p3_t4', 'Apache Hudi Upserts', 'Hadoop Upserts Deletes and Incrementals format, originally built for streaming ingestion with frequent record-level updates.', 'de_p3');
add('de_p3_t4_s1', 'Storage Types', 'Offering two table types: Copy-On-Write (rewrites Parquet on update) and Merge-On-Read (logs updates to Avro, merged at read time).', 'de_p3_t4');
add('de_p3_t4_s1_l1', 'COW vs MOR Tradeoff', 'Copy-On-Write favors read-heavy analytical workloads, while Merge-On-Read minimizes write latency for high-throughput streaming.', 'de_p3_t4_s1');
add('de_p3_t4_s1_l2', 'Incremental Pull', 'Querying only the records that changed since a specific commit time, treating the table like an event stream.', 'de_p3_t4_s1');

add('de_p3_t5', 'Avro Row-Based Format', 'A row-oriented serialization framework heavily used in Kafka ecosystems for its fast write speeds and compact binary size.', 'de_p3');
add('de_p3_t5_s1', 'Schema Evolution', 'Embedding the schema alongside data to handle backward/forward compatibility when fields are added or removed.', 'de_p3_t5');
add('de_p3_t5_s1_l1', 'Default Values', 'Requiring default values for new fields to ensure older readers can still process newly written records without crashing.', 'de_p3_t5_s1');
add('de_p3_t5_s1_l2', 'Confluent Schema Registry', 'Centralizing Avro schemas in a registry to enforce compatibility rules (e.g., BACKWARD) before producers publish messages.', 'de_p3_t5_s1');

add('de_p3_t6', 'Apache Arrow IPC', 'An in-memory columnar data format enabling zero-copy data exchange between different languages and systems.', 'de_p3');
add('de_p3_t6_s1', 'Zero-Copy Mechanics', 'Eliminating serialization/deserialization overhead; memory buffers are directly mapped and read by Python, Rust, or Java.', 'de_p3_t6');
add('de_p3_t6_s1_l1', 'Flight RPC', 'A high-performance framework over gRPC designed specifically to stream large Arrow record batches across networks.', 'de_p3_t6_s1');
add('de_p3_t6_s1_l2', 'Pandas Integration', 'Converting Parquet files to Arrow buffers, enabling PyArrow to feed Pandas or Polars DataFrames instantaneously.', 'de_p3_t6_s1');

// ==========================================
// Pillar 4: Warehousing & OLAP (6 Topics)
// ==========================================
add('de_p4_t1', 'Dimensional Modeling', 'Organizing data into Kimball star schemas with central numeric Fact tables surrounded by descriptive Dimension tables.', 'de_p4');
add('de_p4_t1_s1', 'Conformed Dimensions', 'Standardized dimensions (e.g., Date, Customer) shared across multiple data marts to ensure consistent BI reporting metrics.', 'de_p4_t1');
add('de_p4_t1_s1_l1', 'SCD Type 1', 'Slowly Changing Dimension Type 1 completely overwrites the existing row, keeping no historical record of the previous state.', 'de_p4_t1_s1');
add('de_p4_t1_s1_l2', 'SCD Type 2', 'Tracking history by adding a new row with effective_date, expiry_date, and current_flag for every attribute change.', 'de_p4_t1_s1');

add('de_p4_t2', 'Snowflake Architecture', 'A cloud-native data warehouse decoupling storage (S3/Blob) from compute (Virtual Warehouses) with a centralized control plane.', 'de_p4');
add('de_p4_t2_s1', 'Micro-Partitions', 'Automatically dividing tables into immutable 50-500MB compressed columnar files containing detailed min/max metadata.', 'de_p4_t2');
add('de_p4_t2_s1_l1', 'Clustering Keys', 'Defining sort orders to co-locate data, enabling the optimizer to aggressively prune micro-partitions during query execution.', 'de_p4_t2_s1');
add('de_p4_t2_s1_l2', 'Zero-Copy Cloning', 'Creating instantaneous, cost-free clones of databases or tables by simply duplicating metadata pointers without moving underlying storage.', 'de_p4_t2_s1');

add('de_p4_t3', 'BigQuery Serverless Dremel', 'A fully managed, serverless enterprise warehouse executing queries across thousands of distributed nodes concurrently.', 'de_p4');
add('de_p4_t3_s1', 'Slot-Based Execution', 'Allocating computational units (slots) dynamically to process Dremel execution trees over columnar Capacitor storage formats.', 'de_p4_t3');
add('de_p4_t3_s1_l1', 'BI Engine', 'An in-memory analysis service that accelerates BigQuery queries to sub-second latency for interactive Looker dashboards.', 'de_p4_t3_s1');
add('de_p4_t3_s1_l2', 'Nested & Repeated Fields', 'Natively supporting arrays and structs within columns, denormalizing relationships to avoid expensive distributed joins.', 'de_p4_t3_s1');

add('de_p4_t4', 'Amazon Redshift Distribution', 'An MPP (Massively Parallel Processing) columnar warehouse heavily dependent on manual node topology and data placement.', 'de_p4');
add('de_p4_t4_s1', 'DISTKEY & SORTKEY', 'Configuring a DISTKEY collocates frequently joined rows on the same compute node, while SORTKEY enables efficient range scans.', 'de_p4_t4');
add('de_p4_t4_s1_l1', 'Distribution Styles', 'Choosing between KEY (hash distribution), ALL (broadcast to all nodes), or EVEN (round-robin) to minimize network shuffle.', 'de_p4_t4_s1');
add('de_p4_t4_s1_l2', 'Redshift Spectrum', 'Querying external S3 data lakes directly from Redshift by pushing down aggregations to a massive fleet of ephemeral nodes.', 'de_p4_t4_s1');

add('de_p4_t5', 'Real-Time OLAP', 'Systems designed for sub-second aggregations over high-throughput streaming data and historical batches simultaneously.', 'de_p4');
add('de_p4_t5_s1', 'Apache Druid Ingestion', 'Reading directly from Kafka via supervisors, converting events into immutable segments clustered by time granularity.', 'de_p4_t5');
add('de_p4_t5_s1_l1', 'Data Rollup', 'Pre-aggregating metrics at ingestion time (e.g., minute-level sums) to drastically reduce storage and query execution time.', 'de_p4_t5_s1');
add('de_p4_t5_s1_l2', 'ClickHouse MergeTree', 'Inserting data in fast columnar blocks and merging them continuously in the background, optimized for lightning-fast COUNT/GROUP BY.', 'de_p4_t5_s1');

add('de_p4_t6', 'OLAP Cubes & Pre-aggregation', 'Pre-calculating multidimensional aggregations to serve BI tools with near-zero latency.', 'de_p4');
add('de_p4_t6_s1', 'MDX Hierarchies', 'Using MultiDimensional eXpressions to navigate pre-computed hierarchies (Year->Quarter->Month) in traditional SSAS cubes.', 'de_p4_t6');
add('de_p4_t6_s1_l1', 'Semantic Layer', 'Abstracting complex SQL logic into centralized metric definitions (e.g., Cube.js or dbt Semantic Layer) for consistent consumption.', 'de_p4_t6_s1');
add('de_p4_t6_s1_l2', 'Materialized Views', 'Database objects containing the results of a query, automatically incrementally updated when underlying base tables change.', 'de_p4_t6_s1');

// ==========================================
// Pillar 5: Orchestration (6 Topics)
// ==========================================
add('de_p5_t1', 'Apache Airflow Concepts', 'A platform to programmatically author, schedule, and monitor workflows as Directed Acyclic Graphs (DAGs) in Python.', 'de_p5');
add('de_p5_t1_s1', 'TaskInstance State Machine', 'Tracking execution states (queued -> running -> success/failed/up_for_retry/skipped) within the Airflow metadata database.', 'de_p5_t1');
add('de_p5_t1_s1_l1', 'XCom Data Sharing', 'Cross-communication allows tasks to push/pull small metadata payloads (pickled in the DB) to downstream tasks.', 'de_p5_t1_s1');
add('de_p5_t1_s1_l2', 'Dynamic DAG Factory', 'Generating multiple DAGs programmatically at parse time by iterating over external configuration files or YAML manifests.', 'de_p5_t1_s1');

add('de_p5_t2', 'Airflow Executors & Sensors', 'Defining how tasks are executed and how pipelines wait for external conditions.', 'de_p5');
add('de_p5_t2_s1', 'KubernetesExecutor', 'Launching an ephemeral, isolated Kubernetes Pod for every single task, scaling to zero when the pipeline is idle.', 'de_p5_t2');
add('de_p5_t2_s1_l1', 'PokeSensor vs RescheduleSensor', 'Poke continuously occupies a worker slot while checking conditions; Reschedule frees the slot and sleeps between checks.', 'de_p5_t2_s1');
add('de_p5_t2_s1_l2', 'ExternalTaskSensor', 'Waiting for a task in a completely different DAG to complete, enabling cross-DAG dependency management for SLAs.', 'de_p5_t2_s1');

add('de_p5_t3', 'Dagster Software-Defined Assets', 'An orchestration engine shifting focus from tasks to the data assets (tables/ML models) produced by the pipeline.', 'de_p5');
add('de_p5_t3_s1', 'Declarative Freshness', 'Defining rules like "this asset must be no more than 1 hour old," letting Dagster auto-materialize upstream dependencies.', 'de_p5_t3');
add('de_p5_t3_s1_l1', 'Partitioned Backfills', 'Selectively running backfills on specific partitions (e.g., missed days) with the UI visually mapping execution states.', 'de_p5_t3_s1');
add('de_p5_t3_s1_l2', 'Asset Observations', 'Logging metadata like row counts or data quality scores directly to the asset history without altering the data itself.', 'de_p5_t3_s1');

add('de_p5_t4', 'Prefect Hybrid Execution', 'Orchestration that keeps workflow metadata in Prefect Cloud while executing proprietary code securely on local infrastructure.', 'de_p5');
add('de_p5_t4_s1', 'Kubernetes Work Pools', 'Dynamically provisioning infrastructure via agents that poll Prefect Cloud for scheduled flow runs and deploy them to clusters.', 'de_p5_t4');
add('de_p5_t4_s1_l1', 'Task Caching', 'Skipping task execution entirely if the inputs and caching parameters have not changed, saving significant compute costs.', 'de_p5_t4_s1');
add('de_p5_t4_s1_l2', 'Subflows', 'Triggering independently tracked workflows from within a parent flow, returning futures to orchestrate complex dependencies.', 'de_p5_t4_s1');

add('de_p5_t5', 'dbt (Data Build Tool)', 'Enabling data analysts to transform data in the warehouse using modular SQL SELECT statements and Jinja templating.', 'de_p5');
add('de_p5_t5_s1', 'Model Materializations', 'Configuring how dbt builds the model in the warehouse: as a table, a view, an ephemeral CTE, or an incremental update.', 'de_p5_t5');
add('de_p5_t5_s1_l1', 'Incremental Models', 'Using the is_incremental() macro to append or merge only new rows, significantly reducing warehouse compute costs.', 'de_p5_t5_s1');
add('de_p5_t5_s1_l2', 'The ref() Function', 'Automatically parsing model dependencies to build the execution DAG and swapping schemas seamlessly across environments.', 'de_p5_t5_s1');

add('de_p5_t6', 'dbt Slim CI & SLAs', 'Optimizing Continuous Integration workflows and monitoring pipeline execution performance.', 'de_p5');
add('de_p5_t6_s1', 'State:Modified+', 'Using --defer and --select state:modified+ to only compile and test models whose code changed and their downstream dependents.', 'de_p5_t6');
add('de_p5_t6_s1_l1', 'Manifest Comparison', 'Comparing the current PR manifest.json against the production manifest to determine exactly which nodes were altered.', 'de_p5_t6_s1');
add('de_p5_t6_s1_l2', 'SLA Miss Callbacks', 'Configuring Airflow SLAs to trigger PagerDuty alerts or Slack messages automatically when critical pipelines exceed expected duration.', 'de_p5_t6_s1');

// ==========================================
// Pillar 6: Data Quality & Observability (6 Topics)
// ==========================================
add('de_p6_t1', 'Great Expectations', 'A Python framework for profiling data and asserting quality using declarative statements called Expectations.', 'de_p6');
add('de_p6_t1_s1', 'Expectation Suites', 'Grouping expectations (e.g., expect_column_values_to_not_be_null) into a JSON suite evaluated by a Checkpoint.', 'de_p6_t1');
add('de_p6_t1_s1_l1', 'Result Format COMPLETE', 'Configuring the validation engine to return every single failing row identifier rather than just a statistical summary.', 'de_p6_t1_s1');
add('de_p6_t1_s1_l2', 'Data Docs', 'Automatically generating static HTML sites that display the validation results and the documented constraints of the dataset.', 'de_p6_t1_s1');

add('de_p6_t2', 'dbt Testing Framework', 'Executing data quality assertions natively as SQL queries within the transformation DAG.', 'de_p6');
add('de_p6_t2_s1', 'Schema.yml Assertions', 'Defining built-in tests (unique, not_null, accepted_values, relationships) directly on model columns in YAML config.', 'de_p6_t2');
add('de_p6_t2_s1_l1', 'Custom Generic Tests', 'Writing parameterized Jinja macros that return failing rows, allowing reusable complex business logic validations across models.', 'de_p6_t2_s1');
add('de_p6_t2_s1_l2', 'Test Thresholds', 'Setting error and warn severity thresholds based on the count of failing rows to prevent minor anomalies from breaking CI.', 'de_p6_t2_s1');

add('de_p6_t3', 'Data Observability', 'Proactively monitoring data health through automated machine learning rather than manual threshold setting.', 'de_p6');
add('de_p6_t3_s1', 'Metadata-Only Anomaly Detection', 'Tools like Monte Carlo scan warehouse logs (information_schema) for volume, freshness, and schema changes without querying PII data.', 'de_p6_t3');
add('de_p6_t3_s1_l1', 'Volume Drops', 'Triggering alerts when table row insertion rates deviate significantly from historical moving averages or seasonal trends.', 'de_p6_t3_s1');
add('de_p6_t3_s1_l2', 'Freshness Monitoring', 'Identifying tables that haven’t been updated within their expected SLA window by monitoring update timestamps in system tables.', 'de_p6_t3_s1');

add('de_p6_t4', 'Data Contracts', 'Formal agreements between software engineers (data producers) and data engineers (consumers) regarding schema and semantics.', 'de_p6');
add('de_p6_t4_s1', 'OpenAPI-Style Definitions', 'Defining schemas, business meaning, SLAs, and ownership in a version-controlled YAML file integrated into CI/CD.', 'de_p6_t4');
add('de_p6_t4_s1_l1', 'Schema Compatibility', 'Enforcing rules (e.g., BACKWARD compatibility) in the Confluent Schema Registry so producers cannot push breaking changes.', 'de_p6_t4_s1');
add('de_p6_t4_s1_l2', 'CI/CD Blocking', 'Failing the software engineering build pipeline if a database migration violates the established data contract.', 'de_p6_t4_s1');

add('de_p6_t5', 'Lineage Tracking', 'Mapping the flow of data from source systems through transformations down to BI dashboards to analyze root causes.', 'de_p6');
add('de_p6_t5_s1', 'OpenLineage Standard', 'An open framework standardizing the collection of lineage metadata (RunEvent facets) from execution engines like Spark and Airflow.', 'de_p6_t5');
add('de_p6_t5_s1_l1', 'dbt Integration', 'Extracting dataset dependencies automatically from dbt artifacts (manifest.json, run_results.json) into a centralized lineage graph.', 'de_p6_t5_s1');
add('de_p6_t5_s1_l2', 'Impact Analysis', 'Traversing the lineage graph forward to determine which downstream Looker dashboards will break if a source column is dropped.', 'de_p6_t5_s1');

add('de_p6_t6', 'Reconciliation & Auditing', 'Verifying data integrity by mathematically proving that what was extracted matches what was loaded.', 'de_p6');
add('de_p6_t6_s1', 'Row Count Reconciliation', 'Comparing total records in the source database against the target warehouse, alerting if the delta exceeds a 0.01% threshold.', 'de_p6_t6');
add('de_p6_t6_s1_l1', 'Financial Hashing', 'Computing MD5 hashes or aggregations on financial columns (e.g., total_revenue) across source and target to guarantee precision.', 'de_p6_t6_s1');
add('de_p6_t6_s1_l2', 'Audit Tables', 'Logging every pipeline run’s start time, end time, rows processed, and error counts into a permanent warehouse audit schema.', 'de_p6_t6_s1');

// ==========================================
// Pillar 7: Catalog, Governance & Data Mesh (6 Topics)
// ==========================================
add('de_p7_t1', 'Unity Catalog (Databricks)', 'A unified governance solution for data, analytics, and AI assets across multiple cloud workspaces.', 'de_p7');
add('de_p7_t1_s1', 'Three-Level Namespace', 'Organizing assets using a strict catalog.schema.table hierarchy to cleanly separate environments and domains.', 'de_p7_t1');
add('de_p7_t1_s1_l1', 'Column-Level Security', 'Restricting read access to sensitive columns (like SSN) via GRANT statements assigned to specific Active Directory groups.', 'de_p7_t1_s1');
add('de_p7_t1_s1_l2', 'Row-Level Security', 'Applying row_filter policies to automatically restrict dataset visibility based on the executing user’s department or region.', 'de_p7_t1_s1');

add('de_p7_t2', 'Apache Atlas Governance', 'An extensible core foundational governance service designed originally for the Hadoop ecosystem.', 'de_p7');
add('de_p7_t2_s1', 'Entity Types & Lineage', 'Defining custom entities (hive_table, hive_column) and capturing hook-based lineage asynchronously from Spark or Hive executions.', 'de_p7_t2');
add('de_p7_t2_s1_l1', 'Field-Level Propagation', 'Tracking exactly how a specific column was mathematically transformed and propagated to downstream tables.', 'de_p7_t2_s1');
add('de_p7_t2_s1_l2', 'Classification Tags', 'Assigning tags (e.g., PII, GDPR) to columns, which automatically propagate to downstream derivatives in the lineage graph.', 'de_p7_t2_s1');

add('de_p7_t3', 'Data Masking & Privacy', 'Securing sensitive data dynamically without replicating or permanently obfuscating the underlying storage.', 'de_p7');
add('de_p7_t3_s1', 'Dynamic Data Masking', 'Using SQL views or Snowflake masking policies to evaluate CURRENT_USER() and replace actual data with asterisks (***) for unauthorized roles.', 'de_p7_t3');
add('de_p7_t3_s1_l1', 'Format-Preserving Encryption', 'Encrypting credit cards such that the ciphertext looks like a valid card number, avoiding breaks in downstream analytic logic.', 'de_p7_t3_s1');
add('de_p7_t3_s1_l2', 'GDPR Right-to-Erasure', 'Orchestrating delete-by-ID propagation across the entire data lake, warehouse, and caching layers to ensure legal compliance.', 'de_p7_t3_s1');

add('de_p7_t4', 'Data Mesh Architecture', 'A decentralized sociotechnical approach that shifts data ownership from a central team to the business domains.', 'de_p7');
add('de_p7_t4_s1', 'Domain Ownership', 'Cross-functional squads (e.g., e-commerce, billing) own the ingestion, quality, and serving of their specific data products.', 'de_p7_t4');
add('de_p7_t4_s1_l1', 'Data Product Specification', 'Defining a product via an interface contract, SLOs, designated output ports (e.g., an Iceberg table), and discovery metadata.', 'de_p7_t4_s1');
add('de_p7_t4_s1_l2', 'Federated Governance', 'Establishing global standards (interoperability, security) that domain teams must adhere to while building local pipelines.', 'de_p7_t4_s1');

add('de_p7_t5', 'Data Lakehouse', 'Merging the flexibility and cheap storage of a data lake with the ACID transactions and management of a data warehouse.', 'de_p7');
add('de_p7_t5_s1', 'Engine Separation', 'Storing data in open formats (Parquet/Iceberg) on cloud object storage, allowing independent query engines (Spark, Trino, Snowflake) to access it.', 'de_p7_t5');
add('de_p7_t5_s1_l1', 'No Vendor Lock-in', 'Avoiding proprietary storage formats so that migrating processing engines does not require massive data migrations.', 'de_p7_t5_s1');
add('de_p7_t5_s1_l2', 'Direct BI Connectivity', 'Connecting tools like Tableau directly to the semantic layer above the lakehouse, bypassing traditional warehouse imports.', 'de_p7_t5_s1');

add('de_p7_t6', 'Data Catalogs', 'Centralized portals (e.g., Alation, Collibra) for discovering, understanding, and requesting access to data assets.', 'de_p7');
add('de_p7_t6_s1', 'Business Glossary', 'Maintaining standardized definitions for business metrics (e.g., "Active User") and linking them to specific technical database columns.', 'de_p7_t6');
add('de_p7_t6_s1_l1', 'Crowdsourced Documentation', 'Allowing data analysts to upvote, comment, and document tribal knowledge directly on table metadata pages.', 'de_p7_t6_s1');
add('de_p7_t6_s1_l2', 'Automated Profiling', 'Running background scans to display column distributions, null percentages, and min/max values automatically in the UI.', 'de_p7_t6_s1');

// ==========================================
// Pillar 8: ML Feature Store & Real-Time (6 Topics)
// ==========================================
add('de_p8_t1', 'Feature Engineering & Stores', 'Centralized infrastructure for managing, transforming, and serving machine learning features consistently across environments.', 'de_p8');
add('de_p8_t1_s1', 'Offline Training Sets', 'Generating massive historical datasets from the feature store (e.g., BigQuery/S3 Parquet) for training machine learning models.', 'de_p8_t1');
add('de_p8_t1_s1_l1', 'Point-In-Time Correctness', 'Using as-of joins to align feature timestamps exactly with label timestamps, preventing future data leakage into training.', 'de_p8_t1_s1');
add('de_p8_t1_s1_l2', 'Feature Sharing', 'Registering features in a central catalog to reuse computations (e.g., user_click_rate) across multiple different ML models.', 'de_p8_t1_s1');

add('de_p8_t2', 'Feast (Feature Store)', 'An open-source operational feature store for managing and serving ML features to models in production.', 'de_p8');
add('de_p8_t2_s1', 'Materialization Engine', 'Executing feast materialize-incremental to sync newly computed features from the offline warehouse to the online key-value store.', 'de_p8_t2');
add('de_p8_t2_s1_l1', 'Online Store Serving', 'Using Redis or DynamoDB to serve pre-computed features via low-latency API calls (e.g., HGETALL <entity_id> under 1ms).', 'de_p8_t2_s1');
add('de_p8_t2_s1_l2', 'Feature Registry', 'A central catalog tracking feature names, versions, descriptions, owners, and entity types (e.g., user_id) in a git-backed YAML repository.', 'de_p8_t2_s1');

add('de_p8_t3', 'Real-Time Stream Features', 'Computing ML features on the fly from event streams to capture immediate user behavior.', 'de_p8');
add('de_p8_t3_s1', 'Tecton & Flink Integration', 'Defining streaming transformations that Tecton translates into Flink jobs to maintain stateful real-time aggregations.', 'de_p8_t3');
add('de_p8_t3_s1_l1', 'Sliding Windows', 'Calculating metrics like "number of clicks in the last 5 minutes" updated continuously as new Kafka events arrive.', 'de_p8_t3_s1');
add('de_p8_t3_s1_l2', 'On-Demand Features', 'Executing lightweight Python/Pandas transformations at request time to combine user-provided context with stored features.', 'de_p8_t3_s1');

add('de_p8_t4', 'Batch Feature Materialization', 'Running heavy aggregations on a schedule to update the online store with daily or hourly features.', 'de_p8');
add('de_p8_t4_s1', 'Scheduled Orchestration', 'Using Airflow or Dagster jobs to execute SQL aggregations nightly, calculating metrics like "30-day average transaction value".', 'de_p8_t4');
add('de_p8_t4_s1_l1', 'Composite Entity Keys', 'Designing features that require multi-entity resolution, such as combining user_id and merchant_id for specific interaction scores.', 'de_p8_t4_s1');
add('de_p8_t4_s1_l2', 'Backfilling Features', 'Recomputing historical feature values across months of data when the feature logic changes, ensuring the offline store is consistent.', 'de_p8_t4_s1');

add('de_p8_t5', 'Model Monitoring & Drift', 'Continuously observing the statistical properties of features being fed into models in production.', 'de_p8');
add('de_p8_t5_s1', 'Feature Drift (PSI)', 'Calculating the Population Stability Index to measure the shift in feature distributions between training data and live serving data.', 'de_p8_t5');
add('de_p8_t5_s1_l1', 'Retrain Alerting', 'Triggering automated pipeline alerts (or automatic model retraining runs) when drift metrics exceed a threshold like 0.2.', 'de_p8_t5_s1');
add('de_p8_t5_s1_l2', 'Data Quality in Serving', 'Ensuring that features requested during online inference are not null or wildly out of expected bounds due to upstream pipeline failures.', 'de_p8_t5_s1');

add('de_p8_t6', 'MLOps Infrastructure', 'The platform engineering components required to seamlessly move ML models from notebooks into reliable production pipelines.', 'de_p8');
add('de_p8_t6_s1', 'Model Registry', 'Centralizing model artifacts (e.g., MLflow) and their associated metadata, tagging versions as Staging or Production.', 'de_p8_t6');
add('de_p8_t6_s1_l1', 'Shadow Deployments', 'Serving live inference traffic to a new model version silently, logging predictions without affecting the user experience to validate performance.', 'de_p8_t6_s1');
add('de_p8_t6_s1_l2', 'Inference Pipelines', 'Combining feature retrieval, data imputation, the actual model prediction, and post-processing into a single scalable microservice.', 'de_p8_t6_s1');

export const DATA_ENGINEERING_EXAMPLE: MindMapData = {
  nodes,
  edges
};
