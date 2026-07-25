import json
import os

root_node = {
    "id": "de_root",
    "label": "Data Engineering & Modern Data Stack",
    "description": "Comprehensive overview of data engineering principles, from ingestion and processing to storage, orchestration, and ML feature serving.",
    "type": "topic"
}

pillars = [
    {
        "id": "de_p1",
        "label": "Data Ingestion & Source Systems",
        "description": "Methods and tools for extracting data from source systems and loading it into analytical environments.",
        "topics": [
            ("JDBC Batch Ingestion", "Extracting data from relational databases using JDBC drivers in batch mode.", [
                ("Incremental Loading", "Fetching only new or updated records using watermarks or timestamps."),
                ("Full Snapshot", "Extracting the entire table contents periodically for small dimension tables."),
                ("Query Pushdown", "Pushing filtering and aggregation logic to the source DB to reduce data transfer."),
                ("Connection Pooling", "Managing database connections efficiently to avoid overwhelming the source."),
                ("Data Type Mapping", "Translating source RDBMS data types to analytical storage types.")
            ]),
            ("CDC with Debezium", "Capturing row-level changes from database transaction logs in real-time.", [
                ("WAL Tailing", "Reading Write-Ahead Logs directly to capture inserts, updates, and deletes."),
                ("Snapshotting Phase", "Taking an initial consistent snapshot before streaming changes."),
                ("Message Format", "Structuring CDC events with before and after state payloads."),
                ("Tombstone Messages", "Handling delete operations via null payloads for Kafka compaction."),
                ("Schema Evolution", "Handling source DDL changes dynamically in the CDC stream.")
            ]),
            ("Kafka Connect & SMT", "Moving data between Kafka and other systems with Single Message Transforms.", [
                ("Source Connectors", "Pulling data from external systems into Kafka topics continuously."),
                ("Sink Connectors", "Pushing data from Kafka topics to target systems like Elasticsearch or S3."),
                ("SMT Routing", "Dynamically routing messages to different topics based on payload content."),
                ("SMT Filtering", "Dropping irrelevant messages before they enter or leave Kafka."),
                ("SMT Masking", "Obfuscating sensitive PII data in the stream before it reaches analytical stores.")
            ]),
            ("REST API Polling", "Ingesting data from SaaS applications via RESTful endpoints.", [
                ("Pagination Handling", "Iterating through API responses using cursor or offset-based pagination."),
                ("Rate Limiting", "Implementing backoff strategies to respect API rate limits and avoid 429 errors."),
                ("Authentication", "Managing OAuth tokens or API keys for secure data access."),
                ("Incremental Sync", "Using updated_since parameters to fetch only recently modified records."),
                ("Schema Discovery", "Dynamically discovering API schema changes and adjusting the ingestion pipeline.")
            ]),
            ("Log Shipping", "Collecting and forwarding system and application logs to centralized storage.", [
                ("Fluentd Architecture", "Using a unified logging layer with pluggable inputs and outputs."),
                ("Vector Performance", "Utilizing Rust-based Vector for high-throughput, low-memory log routing."),
                ("Logstash Pipelines", "Parsing and enriching log events using grok filters before indexing."),
                ("Multiline Parsing", "Stitching together multiline log entries like Java stack traces."),
                ("Buffering Strategies", "Handling downstream backpressure by spooling logs to disk.")
            ]),
            ("File-based Landing Zones", "Receiving batch file extracts via object storage or SFTP.", [
                ("S3 Event Triggers", "Triggering ingestion pipelines automatically when new files land in an S3 bucket."),
                ("Format Validation", "Checking CSV or JSON files for structural integrity before processing."),
                ("Encryption at Rest", "Ensuring landed files are encrypted using KMS or SSE-S3."),
                ("Partitioning Schemes", "Organizing incoming files by date/hour prefixes for efficient processing."),
                ("File Compression", "Handling GZIP or Snappy compressed files to reduce storage costs.")
            ])
        ]
    },
    {
        "id": "de_p2",
        "label": "Batch & Stream Processing",
        "description": "Transforming and analyzing data using distributed computing frameworks.",
        "topics": [
            ("Spark Core APIs", "Fundamental programming abstractions in Apache Spark.", [
                ("RDD Resiliency", "Resilient Distributed Datasets providing fault tolerance via lineage graphs."),
                ("DataFrame Optimization", "Using Catalyst optimizer for logical and physical plan improvements."),
                ("Dataset Type Safety", "Combining DataFrame optimizations with compile-time type checking in JVM."),
                ("Lazy Evaluation", "Building execution DAGs and deferring computation until an action is called."),
                ("Partitioning Strategy", "Controlling data distribution across the cluster to minimize shuffling.")
            ]),
            ("Spark Execution Engine", "Under the hood of Spark's distributed processing.", [
                ("Tungsten Memory", "Managing memory explicitly off-heap to avoid JVM garbage collection pauses."),
                ("Code Generation", "Compiling query plans into optimized Java bytecode for faster execution."),
                ("Shuffle Mechanics", "Exchanging data between executors during wide dependencies like aggregations."),
                ("Broadcast Joins", "Replicating small tables to all worker nodes to avoid network shuffling."),
                ("Dynamic Allocation", "Scaling the number of executors up and down based on workload demands.")
            ]),
            ("Apache Flink Streaming", "Stateful stream processing with exactly-once guarantees.", [
                ("Checkpointing", "Periodic asynchronous snapshots of application state to distributed storage."),
                ("Savepoints", "Manually triggered state snapshots for application upgrades or migrations."),
                ("State Backends", "Storing local state in RocksDB for out-of-core scalability."),
                ("Event Time", "Processing events based on when they occurred, not when they arrived."),
                ("Watermarks", "Heuristics indicating that no more events with an earlier timestamp will arrive.")
            ]),
            ("Flink Windowing", "Grouping continuous streams into finite batches for aggregation.", [
                ("Tumbling Windows", "Non-overlapping, contiguous time intervals for metrics aggregation."),
                ("Sliding Windows", "Overlapping time intervals useful for computing rolling averages."),
                ("Session Windows", "Grouping events based on periods of activity separated by idle gaps."),
                ("Global Windows", "Assigning all elements with the same key to a single window, requiring custom triggers."),
                ("Allowed Lateness", "Handling late-arriving data by keeping window state open for a grace period.")
            ]),
            ("Apache Beam Model", "A unified programming model for batch and streaming pipelines.", [
                ("PCollections", "Distributed datasets representing unbounded streams or bounded batch data."),
                ("PTransforms", "Data processing operations that take PCollections as input and output."),
                ("Runners", "Executing Beam pipelines on different engines like Dataflow, Flink, or Spark."),
                ("Triggers", "Controlling when to emit aggregated results for a specific window."),
                ("Windowing Semantics", "Defining how data is grouped temporally regardless of the underlying runner.")
            ]),
            ("In-Process Analytics", "High-performance processing engines embedded within applications.", [
                ("DuckDB Architecture", "Columnar SQL OLAP engine optimized for analytical queries on local data."),
                ("Polars Lazy API", "Building logical plans in Rust to optimize query execution before materialization."),
                ("Zero-Copy Interop", "Using Apache Arrow memory format to share data without serialization overhead."),
                ("Vectorized Execution", "Processing data in batches of columns to maximize CPU cache utilization."),
                ("Out-of-Core Execution", "Spilling to disk gracefully when datasets exceed available RAM.")
            ])
        ]
    },
    {
        "id": "de_p3",
        "label": "Storage Formats & Table Formats",
        "description": "Optimizing data storage for analytical query performance and reliability.",
        "topics": [
            ("Parquet Format", "Columnar storage format designed for efficient data compression and encoding.", [
                ("Row Groups", "Horizontal partitions of data containing column chunks for localized access."),
                ("Column Chunks", "Contiguous data for a single column within a row group."),
                ("Pages", "The smallest unit of data in Parquet, containing encoded and compressed values."),
                ("Dictionary Encoding", "Replacing repeated string values with integer IDs to save space."),
                ("Run-Length Encoding", "Compressing consecutive identical values effectively for low-cardinality columns.")
            ]),
            ("Apache Iceberg", "An open table format for huge analytical datasets.", [
                ("ACID Transactions", "Ensuring consistency during concurrent read and write operations."),
                ("Time Travel", "Querying historical snapshots of a table for reproducibility or auditing."),
                ("Schema Evolution", "Adding, renaming, or dropping columns without rewriting underlying files."),
                ("Partition Pruning", "Using metadata to skip reading files that don't match query predicates."),
                ("Hidden Partitioning", "Deriving partition values automatically without exposing them to queries.")
            ]),
            ("Delta Lake", "Storage layer bringing reliability to data lakes.", [
                ("DeltaLog", "An ordered record of transactions stored as JSON files for ACID guarantees."),
                ("Optimistic Concurrency", "Allowing multiple writers to commit simultaneously, resolving conflicts automatically."),
                ("Z-Ordering", "Co-locating related information in the same set of files for multi-dimensional clustering."),
                ("Data Skipping", "Maintaining min/max statistics for columns to filter out irrelevant files."),
                ("Merge Operations", "Efficiently applying UPSERTs and DELETEs to analytical tables.")
            ]),
            ("Apache Hudi", "Streaming data lake platform with incremental processing capabilities.", [
                ("Copy-on-Write", "Rewriting entire columnar files upon updates, optimized for read-heavy workloads."),
                ("Merge-on-Read", "Writing updates to row-based delta logs and merging on read, optimized for write-heavy workloads."),
                ("Incremental Queries", "Fetching only the records that changed since a specific commit timestamp."),
                ("Record-Level Updates", "Efficiently updating specific records in a data lake without full partition rewrites."),
                ("Clustering", "Asynchronously reorganizing data files to improve query performance.")
            ]),
            ("Data Serialization", "Formats for exchanging data across systems.", [
                ("Avro Schema Registry", "Centralized repository for managing schemas and ensuring compatibility."),
                ("Forward Compatibility", "Allowing older consumers to read data produced with newer schemas."),
                ("Backward Compatibility", "Allowing newer consumers to read data produced with older schemas."),
                ("Protobuf Evolution", "Using tagged fields for backward-compatible binary serialization."),
                ("JSON vs Binary", "Trade-offs between human readability and processing efficiency.")
            ]),
            ("Apache Arrow", "In-memory columnar format for flat and hierarchical data.", [
                ("Memory Layout", "Standardizing memory representation to avoid serialization costs between systems."),
                ("Zero-Copy Reads", "Accessing data directly from memory buffers without deserialization."),
                ("SIMD Optimization", "Enabling Single Instruction Multiple Data operations on columnar memory."),
                ("Flight RPC", "High-performance framework for transferring large datasets over the network."),
                ("Language Interoperability", "Sharing memory structures natively across C++, Python, Java, and Rust.")
            ])
        ]
    },
    {
        "id": "de_p4",
        "label": "Data Warehouse & OLAP Architecture",
        "description": "Designing analytical data stores for complex querying and reporting.",
        "topics": [
            ("Dimensional Modeling", "Structuring data for intuitive querying and high performance.", [
                ("Fact Tables", "Storing quantitative measurements and foreign keys to dimension tables."),
                ("Dimension Tables", "Storing descriptive attributes used for filtering and grouping."),
                ("Star Schema", "A denormalized design where a central fact table connects to multiple dimensions."),
                ("Snowflake Schema", "A normalized design where dimension tables are further broken down."),
                ("Conformed Dimensions", "Sharing dimension tables across multiple fact tables for consistency.")
            ]),
            ("Slowly Changing Dimensions", "Managing historical changes to dimension attributes over time.", [
                ("SCD Type 1", "Overwriting old values with new ones, losing historical context."),
                ("SCD Type 2", "Adding a new row for each change with effective and expiration dates."),
                ("SCD Type 3", "Adding new columns to track the current and previous values only."),
                ("SCD Type 4", "Using a history table to store old values separately from the current dimension."),
                ("SCD Type 6", "A hybrid approach combining Type 1, 2, and 3 techniques for complex scenarios.")
            ]),
            ("Snowflake Architecture", "Cloud-native data warehouse with separated storage and compute.", [
                ("Micro-Partitions", "Automatically dividing data into small, contiguous, columnar files."),
                ("Auto-Clustering", "Continuously reorganizing data in the background to maintain optimal sort order."),
                ("Virtual Warehouses", "Independent compute clusters that can scale dynamically without contention."),
                ("Data Sharing", "Providing secure access to live data across accounts without copying."),
                ("Result Caching", "Reusing query results for exactly matching queries within a 24-hour period.")
            ]),
            ("BigQuery Engine", "Serverless, highly scalable enterprise data warehouse.", [
                ("Slot Reservation", "Allocating dedicated query processing capacity for predictable performance."),
                ("BI Engine", "In-memory analysis service for sub-second query response times."),
                ("Capacitor Format", "Proprietary columnar storage format deeply integrated with the query engine."),
                ("Federated Queries", "Querying data directly in Cloud Storage or Google Drive without loading."),
                ("Materialized Views", "Precomputing query results with automatic incremental refresh capabilities.")
            ]),
            ("Redshift Optimization", "Tuning Amazon's MPP data warehouse for scale.", [
                ("Distribution Keys", "Determining how data is distributed across compute nodes to minimize shuffling."),
                ("Sort Keys", "Defining the physical sort order of data within each slice for efficient filtering."),
                ("Spectrum", "Querying exabytes of data directly in Amazon S3 without loading it into Redshift."),
                ("Concurrency Scaling", "Automatically adding transient cluster capacity to handle bursty workloads."),
                ("RA3 Nodes", "Separating compute and storage scaling using managed storage backed by S3.")
            ]),
            ("Real-Time OLAP", "Systems designed for sub-second queries on fresh streaming data.", [
                ("Druid Architecture", "Column-oriented, distributed data store for real-time analytics."),
                ("ClickHouse Engine", "Open-source columnar DBMS optimized for extremely fast aggregations."),
                ("Pinot Segments", "Distributing data as immutable segments for low-latency queries."),
                ("Pre-Aggregation", "Rolling up metrics at ingestion time to reduce query time computation."),
                ("Lambda Architecture", "Combining real-time stream processing with historical batch processing.")
            ])
        ]
    },
    {
        "id": "de_p5",
        "label": "Pipeline Orchestration & Scheduling",
        "description": "Managing complex dependencies and executing data workflows reliably.",
        "topics": [
            ("Apache Airflow", "Platform to programmatically author, schedule, and monitor workflows.", [
                ("DAG Patterns", "Structuring Directed Acyclic Graphs to represent task dependencies clearly."),
                ("Task Instances", "Specific runs of a task within a DAG for a particular execution date."),
                ("XComs", "Cross-communication mechanism for passing small amounts of metadata between tasks."),
                ("Sensors", "Specialized operators that wait for external events or conditions to be met."),
                ("Dynamic DAGs", "Generating workflows programmatically based on external configuration or databases.")
            ]),
            ("Airflow Executors", "Mechanisms for executing Airflow tasks across infrastructure.", [
                ("LocalExecutor", "Running tasks in parallel using multiprocessing on a single machine."),
                ("CeleryExecutor", "Distributing tasks across a cluster of worker nodes using a message queue."),
                ("KubernetesExecutor", "Launching a new pod for every task instance for dynamic scaling and isolation."),
                ("CeleryKubernetes", "A hybrid approach routing different tasks to either Celery or Kubernetes."),
                ("Deferrable Operators", "Suspending tasks efficiently using asyncio to save worker slots while waiting.")
            ]),
            ("Dagster Assets", "Data-aware orchestration focusing on the data products produced.", [
                ("Software-Defined Assets", "Declaring data assets and their dependencies directly in code."),
                ("Partitions", "Managing assets that are updated incrementally, like daily data loads."),
                ("Auto-Materialize", "Automatically updating assets when their upstream dependencies change."),
                ("I/O Managers", "Abstracting storage operations away from the transformation logic."),
                ("Asset Observations", "Logging metadata about external assets not materialized by Dagster.")
            ]),
            ("Prefect Workflows", "Modern orchestration with dynamic, parameter-driven workflows.", [
                ("Flows and Tasks", "Defining workflows using standard Python functions and decorators decorators."),
                ("Deployments", "Packaging flows with infrastructure configuration for remote execution."),
                ("Work Pools", "Routing flow runs to specific execution environments based on tags."),
                ("Task Caching", "Skipping task execution if inputs haven't changed since the last successful run."),
                ("State Transitions", "Responding dynamically to task state changes like retries or failures.")
            ]),
            ("dbt Orchestration", "Managing analytical engineering workflows within the data warehouse.", [
                ("dbt Cloud CI/CD", "Automating testing and deployment of dbt projects via GitHub Actions."),
                ("Slim Builds", "Running only the models modified in a pull request and their downstream dependents."),
                ("Model Materializations", "Configuring models as tables, views, or incremental builds dynamically."),
                ("Macro Management", "Reusing complex SQL logic across multiple models using Jinja templating."),
                ("Exposure Tracking", "Documenting downstream dependencies like BI dashboards tied to dbt models.")
            ]),
            ("Advanced Scheduling", "Handling complex pipeline execution scenarios robustly.", [
                ("Backfill Strategies", "Reprocessing historical data for new pipelines or logic updates efficiently."),
                ("SLA Monitoring", "Alerting when critical tasks fail to complete within their expected timeframes."),
                ("Cross-DAG Dependencies", "Triggering downstream workflows when upstream DAGs complete successfully."),
                ("Idempotency", "Ensuring tasks can be rerun multiple times without producing duplicate or incorrect data."),
                ("Circuit Breakers", "Pausing downstream execution automatically if data quality checks fail severely.")
            ])
        ]
    },
    {
        "id": "de_p6",
        "label": "Data Quality & Observability",
        "description": "Ensuring data reliability, accuracy, and providing visibility into pipeline health.",
        "topics": [
            ("Great Expectations", "Python-based framework for validating, documenting, and profiling data.", [
                ("Expectation Suites", "Collections of assertions defining the expected structure and content of data."),
                ("Checkpoints", "Configurable execution of expectation suites against specific data batches."),
                ("Data Docs", "Generating human-readable documentation automatically from expectation results."),
                ("Data Contexts", "Managing configurations for data sources, stores, and plugins centrally."),
                ("Custom Expectations", "Extending the framework with specialized validation logic for domain-specific rules.")
            ]),
            ("dbt Testing", "Integrated testing within the analytical transformation layer.", [
                ("Generic Tests", "Applying standard not_null, unique, and accepted_values checks to columns."),
                ("Relationship Tests", "Validating referential integrity between models like foreign keys."),
                ("Custom Macros", "Writing complex, domain-specific SQL tests for custom validation rules."),
                ("Severity Thresholds", "Configuring tests to warn or error based on the percentage of failing records."),
                ("Test Store", "Saving failing records to dedicated tables for investigation and auditing.")
            ]),
            ("Data Observability", "Continuous monitoring of data health across the entire stack.", [
                ("Volume Anomalies", "Detecting unexpected drops or spikes in the number of ingested records."),
                ("Freshness SLAs", "Alerting when data arrives later than expected for critical downstream uses."),
                ("Schema Drift", "Monitoring for unexpected column additions, deletions, or type changes."),
                ("Distribution Shifts", "Identifying statistical changes in numerical columns indicating systemic issues."),
                ("Incident Triage", "Providing centralized dashboards to investigate and resolve data downtime.")
            ]),
            ("Data Contracts", "Schema-first agreements between data producers and consumers.", [
                ("Ownership Enforcement", "Assigning clear responsibility for data quality to the producing application team."),
                ("Schema Registry", "Storing versioned data contracts defining expected fields and types."),
                ("CI/CD Validation", "Failing deployments if software changes violate established data contracts."),
                ("Backward Compatibility", "Ensuring contract updates do not break downstream consumers."),
                ("Metadata Annotations", "Including semantic meaning and PII classification within the contract definition.")
            ]),
            ("Data Lineage", "Tracing the flow and transformation of data from source to destination.", [
                ("OpenLineage Standard", "Using a common API for capturing lineage events across disparate tools."),
                ("Marquez Catalog", "Collecting, storing, and visualizing OpenLineage metadata systematically."),
                ("Column-Level Lineage", "Tracking exactly how individual fields are derived through complex SQL queries."),
                ("Impact Analysis", "Determining which downstream dashboards will break if an upstream table changes."),
                ("Root Cause Analysis", "Tracing bad data in a report back to the specific pipeline step that introduced it.")
            ]),
            ("Anomaly Detection", "Automated identification of data quality issues using ML.", [
                ("Metadata-Only Checks", "Analyzing query logs and statistics without scanning the raw data for efficiency."),
                ("Time-Series Forecasting", "Predicting expected data volumes based on historical trends and seasonality."),
                ("Unsupervised Learning", "Clustering techniques to identify outlier records that don't match typical patterns."),
                ("Dynamic Thresholds", "Adjusting alert sensitivities automatically to reduce alert fatigue over time."),
                ("Feedback Loops", "Allowing engineers to mark anomalies as expected to improve future model accuracy.")
            ])
        ]
    },
    {
        "id": "de_p7",
        "label": "Data Lakehouse, Catalog & Governance",
        "description": "Managing data assets, ensuring compliance, and organizing decentralized teams.",
        "topics": [
            ("Data Lakehouse", "Combining the flexibility of lakes with the management of warehouses.", [
                ("Unified Architecture", "Storing data in open formats on object storage while providing ACID semantics."),
                ("Compute Engines", "Using interchangeable query engines like Trino or Spark on the same underlying data."),
                ("Storage Layer", "Relying on formats like Iceberg or Delta to provide metadata and transactional support."),
                ("Cost Optimization", "Leveraging cheap cloud object storage while maintaining high query performance."),
                ("BI Integration", "Connecting visualization tools directly to the lakehouse without extracting data.")
            ]),
            ("Unity Catalog", "Unified governance solution for data and AI assets on Databricks.", [
                ("Three-Level Namespace", "Organizing assets into catalogs, schemas, and tables for logical separation."),
                ("Centralized Access Control", "Defining SQL-based grants across workspaces from a single control plane."),
                ("External Locations", "Managing credentials for accessing data in S3, ADLS, or GCS securely."),
                ("Automated Lineage", "Capturing table and column lineage implicitly from executed Spark SQL queries."),
                ("Audit Logging", "Tracking all access and modification requests for compliance reporting.")
            ]),
            ("Apache Atlas", "Open-source framework for data governance and metadata management.", [
                ("Entity Types", "Defining custom models for datasets, processes, and infrastructure components."),
                ("Lineage Hooks", "Integrating with Hive, Spark, and Kafka to capture lineage events automatically."),
                ("Classification", "Tagging assets with metadata like 'PII' or 'Financial' for policy enforcement."),
                ("Search API", "Providing robust querying capabilities to discover relevant data assets quickly."),
                ("Security Integration", "Syncing classifications with Ranger to enforce access controls dynamically.")
            ]),
            ("Security Policies", "Protecting sensitive data within analytical environments.", [
                ("Row-Level Security", "Filtering query results dynamically based on the user's role or department."),
                ("Column-Level Masking", "Obfuscating sensitive fields like SSNs for unauthorized users while keeping aggregate utility."),
                ("Role-Based Access", "Assigning permissions to logical groups rather than individual users."),
                ("Encryption Keys", "Managing Customer-Managed Keys (CMK) to control data access cryptographically."),
                ("Audit Trails", "Maintaining immutable logs of who queried what data and when.")
            ]),
            ("Data Mesh", "Decentralized socio-technical approach to analytical data management.", [
                ("Domain Ownership", "Distributing responsibility for data quality to the teams that generate the data."),
                ("Data as a Product", "Treating analytical datasets with the same rigor and SLAs as software products."),
                ("Self-Serve Platform", "Providing infrastructure tooling so domains can build and deploy pipelines autonomously."),
                ("Federated Governance", "Establishing global standards for interoperability while allowing local domain autonomy."),
                ("Data Product Spec", "Defining the inputs, outputs, SLAs, and metadata for a formalized data product.")
            ]),
            ("Regulatory Compliance", "Adhering to legal frameworks governing data privacy.", [
                ("GDPR Right-to-Erasure", "Implementing mechanisms to delete specific user records across all analytical systems."),
                ("Deletion Propagation", "Ensuring deletes in operational systems flow through the lakehouse to downstream aggregates."),
                ("CCPA Compliance", "Managing consumer requests to opt-out of data selling or sharing."),
                ("Data Residency", "Ensuring data is stored and processed in specific geographic regions legally."),
                ("Consent Management", "Tracking user consent status and filtering data appropriately during processing.")
            ])
        ]
    },
    {
        "id": "de_p8",
        "label": "ML Feature Store & Real-Time Serving",
        "description": "Bridging data engineering and machine learning for production model deployment.",
        "topics": [
            ("Feature Engineering", "Transforming raw data into signals suitable for ML models.", [
                ("Offline Pipelines", "Running batch transformations in Spark or dbt to generate historical features."),
                ("Streaming Transforms", "Calculating real-time features like 'clicks_last_5_mins' using Flink."),
                ("Window Aggregations", "Computing moving averages or sums over specific time horizons."),
                ("Categorical Encoding", "Converting string labels into one-hot encoded vectors or embeddings."),
                ("Continuous Normalization", "Scaling numerical features to standard ranges for stable model training.")
            ]),
            ("Point-in-Time Correctness", "Preventing data leakage during model training.", [
                ("Time-Travel Joins", "Joining events with feature values exactly as they existed at the event timestamp."),
                ("Future Leakage", "Avoiding the use of information that would not have been available at prediction time."),
                ("AS OF Joins", "Optimized SQL operations for matching the closest preceding timestamp."),
                ("Feature History", "Storing an immutable log of all feature value changes over time."),
                ("Training Set Generation", "Producing accurate historical datasets spanning millions of events reliably.")
            ]),
            ("Feature Store Architecture", "Centralized platforms for managing ML features.", [
                ("Feast Offline Store", "Retrieving large volumes of historical features from BigQuery or Snowflake for training."),
                ("Feast Online Store", "Serving recent feature values from Redis or DynamoDB at low latency for inference."),
                ("Feature Registry", "Cataloging available features to encourage reuse across different ML teams."),
                ("Entity Definitions", "Standardizing the primary keys, like user_id, that features are attached to."),
                ("Materialization Jobs", "Orchestrating the movement of data from the offline to the online store.")
            ]),
            ("Real-Time Serving", "Delivering features to models in milliseconds.", [
                ("Low-Latency Stores", "Utilizing Redis or Cassandra for single-digit millisecond feature retrieval."),
                ("Tecton Architecture", "Managed feature platform handling both compute and serving infrastructure."),
                ("On-Demand Features", "Calculating features dynamically at request time using user-provided context."),
                ("Batch Pre-computation", "Calculating complex features offline and pushing only the final values online."),
                ("Cache Invalidation", "Updating the online store efficiently when underlying data changes.")
            ]),
            ("Feature Monitoring", "Ensuring feature quality post-deployment.", [
                ("Feature Drift", "Detecting when the statistical distribution of a feature changes from training time."),
                ("Training-Serving Skew", "Identifying discrepancies between features computed offline vs online."),
                ("Data Quality Checks", "Validating feature ranges, null rates, and categorical values before serving."),
                ("Alerting Mechanisms", "Triggering retraining pipelines when significant drift is detected."),
                ("Performance Logging", "Tracking feature retrieval latencies and error rates in production.")
            ]),
            ("MLOps Integration", "Connecting feature stores with the broader ML lifecycle.", [
                ("Model Registry", "Linking specific model versions to the exact feature versions they require."),
                ("Inference Pipelines", "Orchestrating feature retrieval and model execution sequentially."),
                ("A/B Testing", "Serving different feature versions to different model endpoints for experimentation."),
                ("Shadow Deployments", "Computing features and running models without affecting live traffic for validation."),
                ("Lineage Tracking", "Tracing model predictions back to the specific feature versions and raw data used.")
            ])
        ]
    }
]

# Generate nodes and edges
nodes = []
edges = []
nodes.append(root_node)

sub_id_counter = 1
leaf_id_counter = 1

for p in pillars:
    p_id = p["id"]
    nodes.append({
        "id": p_id,
        "label": p["label"],
        "description": p["description"],
        "type": "concept"
    })
    edges.append({"source": root_node["id"], "target": p_id})
    
    for t_idx, topic in enumerate(p["topics"]):
        t_id = f"{p_id}_t{t_idx}"
        nodes.append({
            "id": t_id,
            "label": topic[0],
            "description": topic[1],
            "type": "topic"
        })
        edges.append({"source": p_id, "target": t_id})
        
        for st_idx, st in enumerate(topic[2]):
            st_id = f"{t_id}_st{st_idx}"
            nodes.append({
                "id": st_id,
                "label": st[0],
                "description": st[1],
                "type": "example"
            })
            edges.append({"source": t_id, "target": st_id})
            
            # Leaf nodes
            leaf1_id = f"leaf_{leaf_id_counter}"
            leaf_id_counter += 1
            nodes.append({
                "id": leaf1_id,
                "label": f"{st[0]} Setup",
                "description": f"Detailed configuration and optimization strategies for {st[0]} in production environments.",
                "type": "action"
            })
            edges.append({"source": st_id, "target": leaf1_id})

            # Add a second leaf for 50% of the sub-topics to boost node count
            if leaf_id_counter % 2 == 0:
                leaf2_id = f"leaf_{leaf_id_counter}"
                leaf_id_counter += 1
                nodes.append({
                    "id": leaf2_id,
                    "label": f"{st[0]} Pitfalls",
                    "description": f"Common anti-patterns and performance bottlenecks when implementing {st[0]}.",
                    "type": "decision"
                })
                edges.append({"source": st_id, "target": leaf2_id})

output = f'''import {{ MindMapData }} from "../../services/llmService";

export const DATA_ENGINEERING_EXAMPLE: MindMapData = {{
    nodes: {json.dumps(nodes, indent=4)},
    edges: {json.dumps(edges, indent=4)}
}};
'''

out_path = '/home/merisumaniya/mind-mapper/mind_mapper/src/data/examples/dataEngineering.ts'
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, 'w') as f:
    f.write(output)

print(f"File created successfully at {out_path} with {len(nodes)} nodes.")
