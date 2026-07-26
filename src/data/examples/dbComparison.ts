import { MindMapData } from "../../services/llmService";

export const DB_COMPARISON_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "db_root",
      "label": "Database Internals & Storage Engine Architecture",
      "description": "Rigorous first-principles blueprint of B+ Tree balancing, LSM-Tree compaction, Buffer Pool eviction algorithms, MVCC isolation levels, Volcano & vectorized query engines, Raft distributed consensus, and ARIES crash recovery.",
      "type": "topic"
    },
    {
      "id": "db_root_p1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM)",
      "description": "Internal physical layout on disk and memory: B+ Trees, Log-Structured Merge (LSM) Trees, and Write-Ahead Logs (WAL).",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1",
      "label": "B+ Tree Page Architecture & Balancing",
      "description": "Self-balancing n-ary search tree optimized for block storage systems.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s1",
      "label": "Internal vs Leaf Node Structural Segregation",
      "description": "Storing routing keys in internal nodes and actual data record pointers exclusively in leaf nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s1_d1",
      "label": "Fan-Out Maximization (100-1000 Keys per Node)",
      "description": "Maximizing node fan-out to achieve low tree heights (3-4 levels for billions of rows).",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s1_d2",
      "label": "Doubly-Linked Leaf Node Chain",
      "description": "Linking leaf pages sequentially via next/prev pointers for ultra-fast range scans.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s2",
      "label": "Page Split & Merge Algorithms",
      "description": "Maintaining tree balance during insert and delete operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s2_d1",
      "label": "50% Page Fill Factor Split Trigger",
      "description": "Splitting full pages (100% capacity) into two half-full pages and promoting median keys.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s2_d2",
      "label": "Underflow Merge & Key Borrowing",
      "description": "Merging underflowing pages (< 50% capacity) with sibling pages to optimize space.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s3",
      "label": "Page Binary Layout (Slotted-Page Architecture)",
      "description": "Structuring fixed-size 8KB/16KB disk pages for variable-length tuple storage.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s3_d1",
      "label": "Header & Slot Array Offset Pointer Layout",
      "description": "Growing slot pointer arrays forward from page start while tuple bytes grow backward from page end.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s3_d2",
      "label": "In-Page Tuple De-fragmentation Sweeps",
      "description": "De-fragmenting internal page gap space without altering slot IDs.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s4",
      "label": "B-Tree Latch Crabbing (Coupling) Protocol",
      "description": "Acquiring read/write latches down the tree path to prevent concurrent structural modifications.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s4_d1",
      "label": "Read Crabbing (Hold Parent until Child Latched)",
      "description": "Acquiring child read latch before releasing parent read latch.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s4_d2",
      "label": "Write Crabbing (Un-safe Child Release Rule)",
      "description": "Holding parent write latches until child is confirmed safe from page splits.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s5",
      "label": "B+ Tree Random I/O Write Bottlenecks",
      "description": "Analyzing random disk seek penalties inherent to B+ Tree page updates.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s5_d1",
      "label": "In-Place Page Modification Penalty",
      "description": "Overwriting dirty pages across random disk locations, bound by disk I/O limits.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t1_s5_d2",
      "label": "Doublewrite Buffer Mitigation (MySQL InnoDB)",
      "description": "Writing dirty pages sequentially to doublewrite buffers before writing to data files.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2",
      "label": "LSM-Tree (Log-Structured Merge-Tree) Architecture",
      "description": "Write-optimized storage engine converting random writes into sequential disk I/O.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s1",
      "label": "In-Memory MemTable (SkipList / Red-Black Tree)",
      "description": "Buffering incoming writes sequentially in sorted in-memory data structures.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s1_d1",
      "label": "Concurrent SkipList Insert Lock-Freedom",
      "description": "Supporting concurrent multi-threaded writes using probabilistic SkipLists.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s1_d2",
      "label": "Flush Threshold Trigger (64MB MemTable Limit)",
      "description": "Freezing full MemTables into immutable states and flushing them sequentially to disk SSTables.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s2",
      "label": "SSTable (Sorted String Table) Immutable File Format",
      "description": "Immutable disk files containing sorted key-value pairs broken into block chunks.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s2_d1",
      "label": "Index Block & Data Block Structure",
      "description": "Appending key index blocks at file ends for fast binary searching.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s2_d2",
      "label": "Block-Level ZSTD / Snappy Compression",
      "description": "Compressing 4KB-64KB data blocks independently to reduce storage footprints.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s3",
      "label": "Bloom Filter Negative Read Acceleration",
      "description": "Probabilistic bit-array data structures avoiding unnecessary SSTable disk lookups.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s3_d1",
      "label": "Optimal Bit Array Length Formula (m = -n*ln(p)/(ln2)^2)",
      "description": "Allocating ~10 bits per key to achieve 1% false positive rates.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s3_d2",
      "label": "Definitive Non-Existence Elimination",
      "description": "Confirming key non-existence instantly without executing disk reads.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s4",
      "label": "Compaction Strategies (Size-Tiered vs Leveled)",
      "description": "Merging SSTable files to clean up tombstones and eliminate duplicate key versions.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s4_d1",
      "label": "Leveled Compaction (RocksDB / LevelDB)",
      "description": "Organizing SSTables into exponential levels (L1=10MB, L2=100MB, L3=1GB) with 10x size ratios.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s4_d2",
      "label": "Size-Tiered Compaction (Cassandra)",
      "description": "Merging SSTables of similar sizes together, optimizing for high write throughput.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s5",
      "label": "Write Amplification & Read Amplification Tradeoffs",
      "description": "Quantifying computational overhead metrics of LSM-Tree engines.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s5_d1",
      "label": "Write Amplification Factor (WAF = Bytes Written to Disk / Bytes Written by User)",
      "description": "Managing WAF tradeoffs (typically 10-30x in Leveled Compaction).",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t2_s5_d2",
      "label": "Read Amplification Mitigation via Block Caching",
      "description": "Caching SSTable index and data blocks to prevent multi-level read lookups.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3",
      "label": "Write-Ahead Logging (WAL) & Append-Only Storage",
      "description": "Durability mechanism recording transaction modifications to disk prior to buffer pool updates.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s1",
      "label": "WAL Protocol Fundamental Rule",
      "description": "Ensuring dirty buffer pages are never written to disk until corresponding WAL log records are flushed.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s1_d1",
      "label": "Sequential Disk I/O Write Performance",
      "description": "Appending transaction logs to disk sequentially at near-raw disk bus speeds.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s1_d2",
      "label": "fsync() Flush Commit Guarantees",
      "description": "Calling fsync() during transaction commit to guarantee hardware durability.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s2",
      "label": "Log Sequence Number (LSN) Tracking",
      "description": "Monotonically increasing 64-bit integer indexing log records and page modifications.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s2_d1",
      "label": "PageLSN vs FlushedLSN Comparison",
      "description": "Preventing un-flushed page writes by enforcing PageLSN <= FlushedLSN.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s2_d2",
      "label": "Transaction PrevLSN Pointer Chains",
      "description": "Chaining transaction log records for fast undo operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s3",
      "label": "Group Commit Optimization",
      "description": "Batching concurrent transaction fsync requests into single disk flush operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s3_d1",
      "label": "Queue-Based Group Flush Buffering",
      "description": "Gathering hundreds of pending transaction commits into single fsync calls.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s3_d2",
      "label": "IOPS Bottleneck Elimination",
      "description": "Scaling transaction commit throughput from 100 tps to 50,000+ tps.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s4",
      "label": "WAL Segment File Rotation & Archiving",
      "description": "Managing rolling WAL segment files (e.g. 16MB PostgreSQL WAL segments).",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s4_d1",
      "label": "Checkpoint Recycles & Truncation",
      "description": "Deleting or recycling old WAL files prior to active checkpoint LSNs.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s4_d2",
      "label": "Continuous WAL Archiving for PITR",
      "description": "Shipping WAL segments to cloud storage for Point-in-Time Recovery.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s5",
      "label": "Physical vs Logical vs Physiological Logging",
      "description": "Formatting log record contents for recovery performance and space efficiency.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s5_d1",
      "label": "Physical Logging (Byte-for-Byte State Drops)",
      "description": "Logging exact page byte diffs; simple recovery but massive log sizes.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t3_s5_d2",
      "label": "Physiological Logging (Page ID + Logical Action)",
      "description": "Logging target page IDs alongside logical operation codes for compact logging.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4",
      "label": "Fractal Trees & Write-Optimized B-Trees",
      "description": "Advanced index structures adding message buffers to internal nodes to accelerate writes.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s1",
      "label": "Internal Node Message Buffers (Tokutek / Percona FT)",
      "description": "Attaching write buffers to internal routing nodes in B-Trees.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s1_d1",
      "label": "Asynchronous Insert Message Ingestion",
      "description": "Appending insert/update messages to internal node buffers without descending to leaves.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s1_d2",
      "label": "Batch Message Cascade Sweeps",
      "description": "Flushing full node message buffers downward to child nodes in large batches.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s2",
      "label": "Eliminating Random I/O Write Penalties",
      "description": "Achieving write speeds comparable to LSM-Trees while retaining B+ Tree read efficiency.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s2_d1",
      "label": "High Fan-Out Maintenance",
      "description": "Preserving fast point and range queries without multi-SSTable read amplification.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s2_d2",
      "label": "De-duplication During Cascade Sweeps",
      "description": "Resolving upsert and delete operations when message batches reach leaf pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s3",
      "label": "Agile Indexing & On-the-Fly Schema Modifications",
      "description": "Adding or dropping secondary indexes without locking table data.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s3_d1",
      "label": "Background Index Message Injection",
      "description": "Injecting index-creation messages into root node buffers.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s3_d2",
      "label": "Zero Downtime Schema Migration",
      "description": "Building new indexes asynchronously while active workloads execute.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s4",
      "label": "Fractal Tree Node Compression Blocks",
      "description": "Compressing 4MB node buffers to maximize memory cache efficiency.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s4_d1",
      "label": "Large Node Size Advantage (4MB vs 8KB)",
      "description": "Compressing 4MB node pages to achieve higher compression ratios.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s4_d2",
      "label": "Sub-Block Partial Decompression",
      "description": "Decompressing specific sub-blocks within 4MB nodes to handle point queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s5",
      "label": "Comparison Matrix: B+ Tree vs LSM vs Fractal Tree",
      "description": "Evaluating trade-offs across point reads, range queries, and write throughput.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s5_d1",
      "label": "B+ Tree (Optimal Point/Range Reads, Slow Random Writes)",
      "description": "Selecting B+ Trees for read-heavy OLTP workloads.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t4_s5_d2",
      "label": "LSM-Tree (Optimal Writes, Slow Point Reads, High Space Amplification)",
      "description": "Selecting LSM-Trees for write-heavy logging and time-series workloads.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5",
      "description": "Detailed first-principles mechanics for Storage Engine Data Structures (B+ Tree vs LSM) topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s1_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s1_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s2_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s2_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s3",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s3_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s3_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s4",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s4_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s4_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s5",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s5_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t5_s5_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6",
      "description": "Detailed first-principles mechanics for Storage Engine Data Structures (B+ Tree vs LSM) topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s1_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s1_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s2_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s2_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s3",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s3_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s3_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s4",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s4_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s4_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s5",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s5_d1",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p1_t6_s5_d2",
      "label": "Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Storage Engine Data Structures (B+ Tree vs LSM) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p2",
      "label": "Buffer Pool & Memory Management",
      "description": "Buffer Pool Manager, Clock Sweep / LRU-2 / ARC eviction algorithms, dirty page flushing, and Direct I/O.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1",
      "label": "Buffer Pool Manager Architecture",
      "description": "In-memory page table caching disk blocks to minimize slow disk I/O operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s1",
      "label": "Page Table Hash Map (Page_ID -> Frame_ID)",
      "description": "Mapping disk page IDs to in-memory buffer pool frame array indexes.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s1_d1",
      "label": "Concurrent Hash Table Bucket Latching",
      "description": "Using fine-grained bucket locks to allow parallel thread access.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s1_d2",
      "label": "Pin Count / Reference Counter Tracking",
      "description": "Incrementing pin counts while queries read pages to prevent concurrent page eviction.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s2",
      "label": "Buffer Pool Frame Descriptor Array",
      "description": "Metadata array tracking properties of every in-memory buffer frame.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s2_d1",
      "label": "Dirty Bit Flag Tracking",
      "description": "Marking frames modified in memory that must be flushed to disk before eviction.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s2_d2",
      "label": "Read/Write Latch Locks on Frames",
      "description": "Synchronizing multi-threaded page access using shared read and exclusive write latches.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s3",
      "label": "Buffer Pool Partitioning (Multiple Instances)",
      "description": "Dividing buffer pools into multiple independent instances (e.g. 8-64 instances in MySQL).",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s3_d1",
      "label": "Hash-Based Instance Selection (Page_ID % Instance_Count)",
      "description": "Distributing pages across pool instances to reduce global mutex lock contention.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s3_d2",
      "label": "Independent Eviction & Latch Execution",
      "description": "Running parallel background eviction threads per pool instance.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s4",
      "label": "Direct I/O (O_DIRECT) vs OS PageCache",
      "description": "Bypassing operating system page caching to avoid double buffering and unexpected OS latency.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s4_d1",
      "label": "O_DIRECT POSIX Flag Application",
      "description": "Executing disk reads/writes directly between storage hardware and database buffer pool frames.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s4_d2",
      "label": "Eliminating Double-Buffering RAM Waste",
      "description": "Preventing identical page copies from occupying both OS PageCache and database buffer pools.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s5",
      "label": "Alignment Requirements for Direct I/O",
      "description": "Enforcing 512-byte or 4096-byte memory address and offset alignment for Direct I/O buffers.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s5_d1",
      "label": "posix_memalign Memory Allocation",
      "description": "Allocating buffer pool frames aligned to hardware sector boundaries.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t1_s5_d2",
      "label": "Zero-Copy DMA Transfer Execution",
      "description": "Enabling Direct Memory Access (DMA) controllers to copy disk bytes directly into RAM.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2",
      "label": "Page Eviction Algorithms (LRU, Clock, ARC)",
      "description": "Selecting victim pages for eviction when buffer pool capacity is exhausted.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s1",
      "label": "LRU-K (LRU-2) Eviction Algorithm",
      "description": "Tracking backward distance to the K-th previous access to prevent sequential scan pollution.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s1_d1",
      "label": "Sequential Table Scan Pollution Problem",
      "description": "Standard LRU flushing hot cached pages out during full table scans.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s1_d2",
      "label": "LRU-2 Second-Access Timestamp Tracking",
      "description": "Requiring pages to be accessed twice before entering high-priority hot LRU lists.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s2",
      "label": "Clock-Sweep (Second-Chance) Eviction Algorithm",
      "description": "Low-overhead approximation of LRU using circular frame pointers and reference bits.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s2_d1",
      "label": "Reference Bit Scanning Cycle",
      "description": "Clearing reference bits (1 -> 0) during hand sweeps; evicting first frame with bit 0.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s2_d2",
      "label": "Lock-Free Circular Pointer Advancement",
      "description": "Executing clock sweeps using atomic CAS operations without global LRU queue locks.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s3",
      "label": "Adaptive Replacement Cache (ARC)",
      "description": "Self-tuning algorithm dynamically balancing recency (L1) and frequency (L2) caches.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s3_d1",
      "label": "Dual Target Ghost Lists (B1 & B2)",
      "description": "Tracking recently evicted page IDs to tune cache allocation target size p dynamically.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s3_d2",
      "label": "Resistance to Workload Shift Anomalies",
      "description": "Adapting automatically between random access and frequency-heavy access patterns.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s4",
      "label": "PostgreSQL Clock-Sweep Usage Count Mechanics",
      "description": "PostgreSQL-specific eviction incrementing usage counts (up to 5) on access.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s4_d1",
      "label": "Usage Count Decrement Sweeps",
      "description": "Decrementing usage counts by 1 per clock hand pass; evicting frames hitting 0.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s4_d2",
      "label": "Hot Page Protection Thresholds",
      "description": "Protecting frequently accessed index root pages from eviction.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s5",
      "label": "MySQL InnoDB Midpoint Insertion Strategy",
      "description": "Dividing LRU lists into New (58%) and Old (42%) sub-lists.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s5_d1",
      "label": "Midpoint Insertion Point",
      "description": "Inserting newly read pages at the boundary between New and Old lists.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t2_s5_d2",
      "label": "Time-Based Promotion Window (innodb_old_blocks_time = 1000ms)",
      "description": "Requiring pages to remain in Old list > 1s before promotion to New list, blocking scan pollution.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3",
      "label": "Dirty Page Flushing & Background Checkpointing",
      "description": "Writing modified in-memory pages back to persistent storage without stalling active transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s1",
      "label": "Fuzzy Checkpointing Mechanics",
      "description": "Writing dirty pages to disk gradually over time while active transactions modify data.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s1_d1",
      "label": "Checkpoint LSN Recording",
      "description": "Logging Checkpoint Start LSN and writing active dirty page lists to WAL.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s1_d2",
      "label": "Non-Blocking Transaction Execution",
      "description": "Avoiding global database freezes during checkpoint flushing.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s2",
      "label": "Page Cleaner / Flusher Background Threads",
      "description": "Dedicated background threads monitoring dirty page ratios in buffer pools.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s2_d1",
      "label": "Dirty Page Target Percentage (e.g. 75% Limit)",
      "description": "Initiating aggressive flushing when dirty page counts exceed percentage targets.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s2_d2",
      "label": "Adaptive Flusher Rate Algorithms",
      "description": "Dynamically matching flush rates to current WAL generation speeds.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s3",
      "label": "LSN-Ordered Flush Scheduling",
      "description": "Sorting dirty pages by PageLSN prior to flushing to optimize disk write patterns.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s3_d1",
      "label": "Sequential Page Grouping",
      "description": "Grouping dirty pages located in adjacent disk sectors to issue contiguous I/O writes.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s3_d2",
      "label": "WAL FlushedLSN Compliance Verification",
      "description": "Ensuring WAL log entries are flushed before writing dirty pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s4",
      "label": "Doublewrite / Neighbor Page Flushing (InnoDB)",
      "description": "Writing pages to contiguous doublewrite buffer segments before updating data files.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s4_d1",
      "label": "Partial Page Write Recovery (Torn Page Protection)",
      "description": "Recovering from OS crashes mid-way through 16KB page writes using doublewrite copies.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s4_d2",
      "label": "Neighbor Page Flush Grouping",
      "description": "Flushing adjacent dirty pages in the same extent to optimize HDD seek times.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s5",
      "label": "Buffer Pool Cold Start Warm-Up Routines",
      "description": "Restoring buffer pool states following database restarts to prevent cold cache query slowdowns.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s5_d1",
      "label": "Dump/Restore Buffer Pool State Files",
      "description": "Saving top-N hot page IDs to disk on shutdown and reloading them sequentially on startup.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t3_s5_d2",
      "label": "Asynchronous Background Page Prefetching",
      "description": "Prefetching historical hot pages in parallel while opening database ports.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4",
      "label": "Scan-Resistant Prefetching & Read-Ahead",
      "description": "Predicting future page access patterns and pre-loading pages into RAM prior to query requests.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s1",
      "label": "Sequential Read-Ahead Heuristics",
      "description": "Detecting sequential page access streams and prefetching contiguous disk blocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s1_d1",
      "label": "Trigger Window Thresholds (e.g. 4 Consecutive Pages)",
      "description": "Initiating prefetch tasks when queries read 4 consecutive pages sequentially.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s1_d2",
      "label": "Asynchronous I/O Read Requests (io_submit / POSIX AIO)",
      "description": "Dispatching non-blocking prefetch I/O requests in parallel with query processing.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s2",
      "label": "Index Range Scan Prefetching",
      "description": "Inspecting B+ Tree leaf node pointer chains to prefetch data pages in advance.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s2_d1",
      "label": "Leaf Page Address Extraction",
      "description": "Extracting data page addresses from index leaf nodes to pre-load target data blocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s2_d2",
      "label": "Random-to-Sequential I/O Re-ordering",
      "description": "Sorting target data page addresses by physical disk offset to issue optimized sequential reads.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s3",
      "label": "Dedicated Async Prefetch Worker Pools",
      "description": "Decoupling prefetch I/O execution from main query execution threads.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s3_d1",
      "label": "Prefetch Queue Rate Limiting",
      "description": "Preventing prefetch queues from overwhelming disk I/O channels.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s3_d2",
      "label": "Eviction Protection for Prefetched Pages",
      "description": "Protecting un-read prefetched pages from immediate eviction.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s4",
      "label": "Scan-Resistant Buffer Allocation",
      "description": "Bypassing main hot buffer pools during detected large table scans.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s4_d1",
      "label": "Ring Buffer Local Allocations (PostgreSQL Buffer Rings)",
      "description": "Restricting full table scans to small 256KB circular ring buffers.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s4_d2",
      "label": "Zero Eviction Impact on Hot Worksets",
      "description": "Preventing large analytic queries from evicting cached OLTP pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s5",
      "label": "NUMA-Aware Memory Allocation (Non-Uniform Memory Access)",
      "description": "Pinning buffer pool memory instances to local CPU NUMA nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s5_d1",
      "label": "Inter-Socket Memory Bus Bottlenecks",
      "description": "Avoiding remote NUMA node memory access latency penalties (30-50% slower).",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t4_s5_d2",
      "label": "numactl & MPOL_BIND Memory Policies",
      "description": "Binding buffer pool memory frames to CPU sockets matching query thread affinities.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5",
      "label": "Buffer Pool & Memory Management Topic 5",
      "description": "Detailed first-principles mechanics for Buffer Pool & Memory Management topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s1",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s1_d1",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s1_d2",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s2",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s2_d1",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s2_d2",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s3",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s3_d1",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s3_d2",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s4",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s4_d1",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s4_d2",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s5",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s5_d1",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t5_s5_d2",
      "label": "Buffer Pool & Memory Management Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6",
      "label": "Buffer Pool & Memory Management Topic 6",
      "description": "Detailed first-principles mechanics for Buffer Pool & Memory Management topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s1",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s1_d1",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s1_d2",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s2",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s2_d1",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s2_d2",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s3",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s3_d1",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s3_d2",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s4",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s4_d1",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s4_d2",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s5",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Buffer Pool & Memory Management Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s5_d1",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p2_t6_s5_d2",
      "label": "Buffer Pool & Memory Management Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Buffer Pool & Memory Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p3",
      "label": "Concurrency Control & Isolation Levels",
      "description": "Two-Phase Locking (2PL), Multi-Version Concurrency Control (MVCC) tuple visibility, and SSI isolation.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1",
      "label": "Two-Phase Locking (2PL) Protocol",
      "description": "Pessimistic concurrency control guaranteeing serializability by separating lock acquisition and release phases.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s1",
      "label": "Growing Phase vs Shrinking Phase Rules",
      "description": "Strict 2PL phases enforcing lock acquisition before lock release.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s1_d1",
      "label": "Growing Phase (Acquire Locks, Release None)",
      "description": "Acquiring all required read/write locks; zero lock releases permitted.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s1_d2",
      "label": "Shrinking Phase (Release Locks, Acquire None)",
      "description": "Releasing locks sequentially; zero new lock acquisitions permitted.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s2",
      "label": "Strict 2PL (SS2PL / Rigorous 2PL)",
      "description": "Holding all exclusive write locks until final transaction COMMIT or ROLLBACK.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s2_d1",
      "label": "Cascading Abort Elimination",
      "description": "Preventing un-committed dirty writes from being read by adjacent transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s2_d2",
      "label": "Commercial RDBMS Default Standard",
      "description": "Serving as standard pessimistic locking model in enterprise RDBMS engines.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s3",
      "label": "Lock Modes & Compatibility Matrix",
      "description": "Shared (S), Exclusive (X), Intent Shared (IS), and Intent Exclusive (IX) hierarchy.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s3_d1",
      "label": "Shared (S) vs Exclusive (X) Conflicts",
      "description": "Allowing multiple concurrent S locks while X locks enforce exclusive single-writer access.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s3_d2",
      "label": "Intent Locks (IS / IX) Table Granularity",
      "description": "Acquiring intent locks at table levels before locking individual row pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s4",
      "label": "Deadlock Detection & Resolution Algorithms",
      "description": "Detecting circular lock wait dependencies among concurrent transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s4_d1",
      "label": "Waits-For Graph (WFG) Cycle Detection",
      "description": "Maintaining directed graphs of transaction dependencies and scanning for cycles.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s4_d2",
      "label": "Victim Selection & Abort (Wait-Die vs Wound-Wait)",
      "description": "Aborting transactions with lowest cost or youngest timestamp to break deadlocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s5",
      "label": "Predicate Locking vs Index-Range Locking",
      "description": "Preventing Phantom Reads by locking predicate search conditions.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s5_d1",
      "label": "Predicate Locking Complexity Overhead",
      "description": "Locking arbitrary WHERE clauses (expensive mathematical evaluation).",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t1_s5_d2",
      "label": "Next-Key Locking Implementation (InnoDB)",
      "description": "Combining index record locks with gap locks to prevent phantom inserts in range queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2",
      "label": "Multi-Version Concurrency Control (MVCC)",
      "description": "Optimistic concurrency control maintaining multiple physical versions of tuples to allow non-blocking reads.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s1",
      "label": "Tuple Version Header Metadata Fields",
      "description": "Attaching creation and deletion transaction IDs to tuple headers.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s1_d1",
      "label": "PostgreSQL tuple header (xmin, xmax)",
      "description": "Storing creation transaction ID xmin and deletion/update transaction ID xmax.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s1_d2",
      "label": "MySQL InnoDB Undo Log Pointer Chain (roll_ptr)",
      "description": "Storing single current tuples in-place and linking previous versions in Undo Log chains.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s2",
      "label": "Read View Snapshot Visibility Rules",
      "description": "Determining tuple version visibility for transactions based on snapshot timestamps.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s2_d1",
      "label": "Read View Active Transaction Array (m_ids)",
      "description": "Capturing snapshot array of active un-committed transaction IDs at query start.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s2_d2",
      "label": "Visibility Condition (xmin < m_up_limit AND xmin NOT IN m_ids)",
      "description": "Ignoring versions created by un-committed or future transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s3",
      "label": "Non-Blocking Readers (\"Readers Don't Block Writers\")",
      "description": "Allowing read queries to execute concurrently with write updates without locking data.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s3_d1",
      "label": "Historical Version Snapshot Retrieval",
      "description": "Directing readers to historical undo versions while writers modify current tuples.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s3_d2",
      "label": "High-Concurrency OLTP Throughput",
      "description": "Eliminating read-write lock contention in high-throughput database systems.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s4",
      "label": "Vacuuming & Garbage Collection Engine",
      "description": "Purging obsolete dead tuple versions no longer visible to any active transaction.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s4_d1",
      "label": "PostgreSQL Auto-Vacuum Process",
      "description": "Scanning tables to remove dead tuples and update free space maps (FSM).",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s4_d2",
      "label": "Transaction ID Wraparound Hazard (2 Billion XID Limit)",
      "description": "Forcing emergency freeze vacuoms to prevent XID wraparound data loss.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s5",
      "label": "In-Place Updates vs Append-Only Versioning",
      "description": "Comparing storage engine MVCC update strategies.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s5_d1",
      "label": "PostgreSQL Append-Only (HOT - Heap Only Tuples)",
      "description": "Writing new tuple versions to heap pages; requires heavy vacuuming.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t2_s5_d2",
      "label": "InnoDB In-Place Update + Undo Logs",
      "description": "Modifying current pages in-place and writing undo diffs to Undo Logs.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3",
      "label": "ANSI SQL Isolation Levels & Anomalies",
      "description": "Defining transaction isolation levels based on prohibited concurrency anomalies.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s1",
      "label": "Read Uncommitted (Dirty Read Anomaly)",
      "description": "Lowest isolation level allowing transactions to read un-committed modifications of active transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s1_d1",
      "label": "Dirty Read Scenario",
      "description": "Reading data modified by Tx1 which subsequently rolls back, leavingTx2 with invalid data.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s1_d2",
      "label": "Zero Read Locking Overhead",
      "description": "Executing queries without acquiring shared locks or checking MVCC visibility.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s2",
      "label": "Read Committed (Non-Repeatable Read Anomaly)",
      "description": "Guaranteeing transactions read only committed data, but values may change between queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s2_d1",
      "label": "Non-Repeatable (Fuzzy) Read Scenario",
      "description": "Re-reading identical rows within Tx1 and receiving modified values committed by Tx2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s2_d2",
      "label": "Fresh Read View Creation per Statement",
      "description": "Generating new MVCC Read Views at the start of every SQL statement.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s3",
      "label": "Repeatable Read (Phantom Read Anomaly)",
      "description": "Guaranteeing rows read within a transaction remain unchanged throughout its duration.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s3_d1",
      "label": "Phantom Read Scenario",
      "description": "Executing range queries within Tx1 and discovering new rows inserted and committed by Tx2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s3_d2",
      "label": "Transaction-Level Fixed Read View",
      "description": "Re-using initial MVCC Read View across all statements in the transaction.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s4",
      "label": "Serializable Isolation (Zero Anomalies)",
      "description": "Highest isolation level guaranteeing execution results equivalent to some strict serial order.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s4_d1",
      "label": "Write Skew Anomaly (Constraint Violation)",
      "description": "Concurrent transactions reading overlapping sets and modifying disjoint subsets, violating global constraints.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s4_d2",
      "label": "Pessimistic 2PL vs Optimistic SSI Implementation",
      "description": "Enforcing serializability via strict locking or Serializable Snapshot Isolation.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s5",
      "label": "Snapshot Isolation (SI) vs True Serializability",
      "description": "Understanding that standard Snapshot Isolation permits Write Skew anomalies.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s5_d1",
      "label": "Write Skew Classic Scenario (Doctor On-Call Rule)",
      "description": "Two doctors concurrently stepping off call because each sees the other on call.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t3_s5_d2",
      "label": "Explicit SELECT FOR UPDATE Locking Safeguards",
      "description": "Adding explicit locks in SI to prevent write skew in critical business logic.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4",
      "label": "Serializable Snapshot Isolation (SSI)",
      "description": "Lock-free serializable isolation detecting dependency cycles in MVCC execution graphs.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s1",
      "label": "siREAD Lock-Free Tracking Flags",
      "description": "Tracking read dependencies without blocking concurrent writers.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s1_d1",
      "label": "siREAD Lock Attributes",
      "description": "Attaching lightweight read-attribute flags to tuples and index pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s1_d2",
      "label": "Zero Blocking Read Execution",
      "description": "Maintaining high MVCC read performance under serializable isolation.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s2",
      "label": "Dependency Graph Construction (rw-antidependencies)",
      "description": "Detecting state where transaction Tx1 reads a tuple version later updated by Tx2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s2_d1",
      "label": "rw-Antidependency Edge Creation (Tx1 -rw-> Tx2)",
      "description": "Marking potential conflict edges in the active transaction graph.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s2_d2",
      "label": "Consecutive rw-Antidependency Cycle Detection",
      "description": "Identifying adjacent rw-antidependency edges signaling potential write skew.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s3",
      "label": "First-Committer-Wins & Transaction Aborts",
      "description": "Aborting one of the conflicting transactions when hazardous dependency cycles emerge.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s3_d1",
      "label": "Pivot Transaction Identification",
      "description": "Identifying pivot transactions in rw-antidependency chains and aborting them.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s3_d2",
      "label": "Optimistic Execution Abort Penalty",
      "description": "Accepting transaction aborts and retries under high write-write contention.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s4",
      "label": "PostgreSQL SSI Implementation (SIREAD Locks)",
      "description": "PostgreSQL implementation of SSI (Cahill algorithm) introduced in version 9.1.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s4_d1",
      "label": "Shared Memory Lock Table Allocations",
      "description": "Allocating siREAD locks in shared RAM tracking tuple, page, and relation reads.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s4_d2",
      "label": "Lock Escalation (Tuple -> Page -> Relation)",
      "description": "Escalating granular locks to page/relation levels when memory limits are reached.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s5",
      "label": "SSI Performance vs Strict 2PL Throughput Comparison",
      "description": "Evaluating performance advantages of SSI over pessimistic 2PL in read-heavy workloads.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s5_d1",
      "label": "5-10x Throughput Advantage in Read-Heavy Workloads",
      "description": "Outperforming 2PL dramatically when read queries dominate.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t4_s5_d2",
      "label": "High Contention Retry Overhead",
      "description": "Falling back to 2PL performance levels under extreme write contention.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5",
      "label": "Concurrency Control & Isolation Levels Topic 5",
      "description": "Detailed first-principles mechanics for Concurrency Control & Isolation Levels topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s1",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s1_d1",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s1_d2",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s2",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s2_d1",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s2_d2",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s3",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s3_d1",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s3_d2",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s4",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s4_d1",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s4_d2",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s5",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s5_d1",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t5_s5_d2",
      "label": "Concurrency Control & Isolation Levels Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6",
      "label": "Concurrency Control & Isolation Levels Topic 6",
      "description": "Detailed first-principles mechanics for Concurrency Control & Isolation Levels topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s1",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s1_d1",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s1_d2",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s2",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s2_d1",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s2_d2",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s3",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s3_d1",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s3_d2",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s4",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s4_d1",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s4_d2",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s5",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Concurrency Control & Isolation Levels Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s5_d1",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p3_t6_s5_d2",
      "label": "Concurrency Control & Isolation Levels Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Concurrency Control & Isolation Levels Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p4",
      "label": "Query Compilation & Execution Engines",
      "description": "Volcano iterator model, Vectorized execution, Cost-Based Optimizer (CBO) statistics, and join algorithms.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1",
      "label": "Volcano (Iterator / Pipeline) Execution Model",
      "description": "Classic row-at-a-time pull-based query execution architecture (Goetz Graefe 1994).",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s1",
      "label": "Abstract Operator Interface (open(), next(), close())",
      "description": "Standardized C++ interface implemented by all physical query plan nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s1_d1",
      "label": "Pull-Based Iterator Execution Loop",
      "description": "Parent operators calling next() on child operators to pull single tuples up the tree.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s1_d2",
      "label": "Minimal Execution Memory Footprint",
      "description": "Processing streaming data with minimal RAM requirements (single tuple in memory per operator).",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s2",
      "label": "Instruction Cache (I-Cache) & Virtual Call Overhead",
      "description": "Performance bottlenecks of Volcano models on modern CPU hardware.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s2_d1",
      "label": "Indirect Virtual Function Call Penalties",
      "description": "Executing millions of virtual next() calls per query, triggering CPU branch mispredictions.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s2_d2",
      "label": "CPU Instruction Cache Invalidation",
      "description": "Bouncing instruction caches between different operator code paths for every row.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s3",
      "label": "Volcano Materialization Barriers",
      "description": "Operators requiring full input dataset consumption before returning the first output row.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s3_d1",
      "label": "Pipeline Breakers (Sort, Hash Join Build, Group By)",
      "description": "Blocking tuple streaming until all child input rows are processed.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s3_d2",
      "label": "Disk Spilling for Large Materializations",
      "description": "Spilling intermediate operator data to disk when work_mem limits are exceeded.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s4",
      "label": "PostgreSQL / MySQL Traditional Executor Implementation",
      "description": "Production implementation of Volcano iterator execution engines in classic RDBMS engines.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s4_d1",
      "label": "ExecProcNode() Function Pointer Calls",
      "description": "Executing queries via recursive ExecProcNode() function invocations.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s4_d2",
      "label": "Tuple Table Slot Memory Abstractions",
      "description": "Passing standardized TupleTableSlot pointers between physical execution nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s5",
      "label": "Volcano Model Limitations on Modern Hardware",
      "description": "Analyzing low CPU IPC (Instructions Per Cycle) efficiency on modern multi-core CPUs.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s5_d1",
      "label": "< 0.5 Instructions Per Cycle (IPC) Efficiency",
      "description": "Stalling CPU execution pipelines due to memory latency and virtual call overhead.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t1_s5_d2",
      "label": "Inability to Leverage CPU SIMD Vector Extensions",
      "description": "Failing to utilize 128-bit/512-bit SIMD registers during single-row iterations.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2",
      "label": "Vectorized Execution (MonetDB / DuckDB / ClickHouse)",
      "description": "Block-at-a-time query processing passing arrays of column values to maximize CPU SIMD utilization.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s1",
      "label": "Vector Batch Data Structures (e.g. 1024 Tuples per Batch)",
      "description": "Passing columnar vector arrays between query operators instead of single rows.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s1_d1",
      "label": "Amortizing Virtual Function Call Overhead (1/1024th Penalty)",
      "description": "Dividing virtual call overhead across 1024 tuples per next() invocation.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s1_d2",
      "label": "Tight Primitive Loop Architecture",
      "description": "Executing simple primitive loops over contiguous memory arrays.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s2",
      "label": "CPU SIMD Vectorization (AVX-512 / ARM NEON)",
      "description": "Leveraging CPU vector instructions to process multiple data elements in single clock cycles.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s2_d1",
      "label": "AVX-512 Parallel Operations (16 x 32-bit Integers)",
      "description": "Evaluating filter predicates across 16 values simultaneously in vector registers.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s2_d2",
      "label": "L1/L2 Cache Line Saturation",
      "description": "Keeping vector data arrays inside fast L1 data caches (32KB per core).",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s3",
      "label": "Selection Vectors & Filter Masks",
      "description": "Filtering vector batches using bitmasks to avoid copying array elements.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s3_d1",
      "label": "Selection Vector Array Offset Pointers",
      "description": "Maintaining arrays of active tuple indexes matching filter conditions.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s3_d2",
      "label": "Zero-Copy Data Filtering Execution",
      "description": "Passing selection vectors downstream without modifying underlying column arrays.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s4",
      "label": "DuckDB & ClickHouse Vector Engine Implementations",
      "description": "Production vectorized query engines achieving 10-100x speedups for OLAP workloads.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s4_d1",
      "label": "Vectorized Expression Evaluation Trees",
      "description": "Evaluating mathematical expressions over full vector columns.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s4_d2",
      "label": "Push-Based Vector Pipeline Execution",
      "description": "Pushing vector batches up pipelines to maximize data locality.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s5",
      "label": "Vectorized vs JIT Compiled Engine Performance Comparison",
      "description": "Comparing vectorized execution against JIT code compilation approaches.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s5_d1",
      "label": "Zero Compilation Latency Overhead",
      "description": "Executing queries instantly without incurring 10-100ms JIT compilation delays.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t2_s5_d2",
      "label": "Optimal OLAP Analytics Performance",
      "description": "Dominating analytical queries spanning millions of rows.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3",
      "label": "JIT Query Compilation (LLVM / HyPer)",
      "description": "Compiling SQL queries dynamically into native machine code to eliminate operator abstraction overhead.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s1",
      "label": "Push-Based Data-Centric Pipeline Architecture (Thomas Neumann / HyPer)",
      "description": "Pushing tuples upward through operators to keep data in CPU registers as long as possible.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s1_d1",
      "label": "Data-Centric Loop Fusion",
      "description": "Fusing multiple SQL operators into single tight nested C++ loops.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s1_d2",
      "label": "CPU Register Pinning",
      "description": "Keeping intermediate evaluation values in CPU registers without writing to memory.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s2",
      "label": "LLVM IR (Intermediate Representation) Generation",
      "description": "Translating SQL parse trees into LLVM assembly code at query runtime.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s2_d1",
      "label": "Dynamic Code Generation (Codegen)",
      "description": "Generating machine code tailored specifically to exact query column types and predicates.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s2_d2",
      "label": "Eliminating Type Switching & Null Checks",
      "description": "Pruning unnecessary conditional branches for known non-null schema types.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s3",
      "label": "JIT Compilation Overhead vs Query Runtime Tradeoffs",
      "description": "Managing JIT compilation latency penalties for short-running queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s3_d1",
      "label": "Compilation Delay Penalty (10-100ms LLVM Overhead)",
      "description": "Avoiding JIT compilation for quick OLTP queries completing in < 1ms.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s3_d2",
      "label": "JIT Threshold Compilation Rules (PostgreSQL jit_above_cost)",
      "description": "Enabling JIT compilation only when total estimated query cost exceeds threshold bounds.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s4",
      "label": "PostgreSQL LLVM JIT Engine Features",
      "description": "JIT compilation infrastructure introduced in PostgreSQL 11.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s4_d1",
      "label": "Expression Evaluation JIT Compilation",
      "description": "Compiling complex WHERE clause expressions and target lists into machine code.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s4_d2",
      "label": "Tuple De-serialization JIT Optimization",
      "description": "Compiling specialized routines to extract specific attribute offsets from raw disk tuples.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s5",
      "label": "JIT Compilation in Single-Store & MemSQL Engines",
      "description": "Compiling SQL queries into C++ source files and compiling via gcc/clang into shared objects.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s5_d1",
      "label": "Shared Object Cache Re-Use (.so Files)",
      "description": "Caching compiled query templates to reuse binary code across parameterized queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t3_s5_d2",
      "label": "Sub-Millisecond Execution of Machine Code Templates",
      "description": "Achieving peak hardware execution speeds for recurring query patterns.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4",
      "label": "Cost-Based Optimizer (CBO) & Statistics",
      "description": "Evaluating query plan alternatives using statistical cost estimation models to select optimal execution paths.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s1",
      "label": "System R / System R* Dynamic Programming Join Search",
      "description": "Classic dynamic programming algorithm finding optimal left-deep join trees.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s1_d1",
      "label": "Left-Deep vs Bushy Tree Search Space",
      "description": "Restricting search space to left-deep trees to limit optimization complexity.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s1_d2",
      "label": "O(3^N) Exponential Subproblem Complexity",
      "description": "Managing exponential join order search spaces for queries with > 10 tables.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s2",
      "label": "Volcano / Cascades Extensible Optimizer Framework (Goetz Graefe)",
      "description": "Rule-based and cost-based extensible transformation framework (used in SQL Server, CockroachDB).",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s2_d1",
      "label": "Logical vs Physical Operator Transformations",
      "description": "Applying equivalence rules to transform logical operators into candidate physical operators.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s2_d2",
      "label": "Memo Structure & Sub-Tree De-duplication",
      "description": "Storing equivalent sub-plans in compact Memo data structures to avoid redundant work.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s3",
      "label": "Database Statistics & Equi-Width / Equi-Depth Histograms",
      "description": "Collecting column data distribution statistics to estimate query predicate selectivity.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s3_d1",
      "label": "Equi-Depth Histograms (Equal Row Count Bins)",
      "description": "Dividing data ranges into bins containing equal numbers of rows for accurate skew estimates.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s3_d2",
      "label": "Most Common Values (MCV) & HyperLogLog Distinct Counts",
      "description": "Tracking top-N frequent values and distinct cardinalities (NDV).",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s4",
      "label": "Selectivity Estimation & Cardinality Mis-Estimations",
      "description": "Calculating row output ratios (Selectivity s in [0, 1]) for query filters.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s4_d1",
      "label": "Independence Assumption Fallacy (P(A AND B) = P(A) * P(B))",
      "description": "Assuming column independence, leading to severe under-estimations for correlated columns (e.g. Make='Audi' AND Model='R8').",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s4_d2",
      "label": "Multi-Column Extended Statistics (CREATE STATISTICS)",
      "description": "Collecting joint multi-column statistics to capture real-world data correlations.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s5",
      "label": "Physical Join Algorithms (Hash Join vs Nested Loop vs Sort-Merge)",
      "description": "Selecting physical join implementations based on cardinality and index availability.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s5_d1",
      "label": "Hash Join (Build Hash Table on Smaller Relation, Probe with Larger)",
      "description": "Optimal for large un-indexed tables; requires memory for build-side hash table.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s5_d2",
      "label": "Index Nested Loop Join (Loop Outer, B+ Tree Lookup Inner)",
      "description": "Optimal when inner table possesses high-selectivity secondary indexes.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t4_s5_d3",
      "label": "Sort-Merge Join (Sort Both Relations, Merge Sequential Lists)",
      "description": "Optimal when input relations are already sorted on join keys.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5",
      "label": "Query Compilation & Execution Engines Topic 5",
      "description": "Detailed first-principles mechanics for Query Compilation & Execution Engines topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s1",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s1_d1",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s1_d2",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s2",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s2_d1",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s2_d2",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s3",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s3_d1",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s3_d2",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s4",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s4_d1",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s4_d2",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s5",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s5_d1",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t5_s5_d2",
      "label": "Query Compilation & Execution Engines Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6",
      "label": "Query Compilation & Execution Engines Topic 6",
      "description": "Detailed first-principles mechanics for Query Compilation & Execution Engines topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s1",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s1_d1",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s1_d2",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s2",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s2_d1",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s2_d2",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s3",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s3_d1",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s3_d2",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s4",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s4_d1",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s4_d2",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s5",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Query Compilation & Execution Engines Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s5_d1",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p4_t6_s5_d2",
      "label": "Query Compilation & Execution Engines Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Query Compilation & Execution Engines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p5",
      "label": "Distributed Consensus & Sharding Architecture",
      "description": "Raft consensus, 2PC Two-Phase Commit, Consistent Hashing, and Google Spanner TrueTime clocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1",
      "label": "Raft Consensus Protocol Mechanics",
      "description": "Understandable consensus algorithm managing replicated log state machines across distributed nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s1",
      "label": "Leader Election & Term Epoch Counters",
      "description": "Electing single active leaders using randomized election timeouts.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s1_d1",
      "label": "Randomized Election Timeouts (150-300ms)",
      "description": "Staggering worker election timers to prevent split-vote deadlocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s1_d2",
      "label": "Majority Vote Consensus (N/2 + 1 Quorum)",
      "description": "Requiring candidate nodes to secure votes from majorities of cluster nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s2",
      "label": "Log Replication & AppendEntries RPCs",
      "description": "Replicating state machine log entries from leaders to follower nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s2_d1",
      "label": "Log Matching Property Invariant",
      "description": "Guaranteeing followers with matching log index and term share identical historical logs.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s2_d2",
      "label": "Leader Commit Index Advancement",
      "description": "Advancing commit indexes once log entries are replicated to majority quorums.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s3",
      "label": "Safety Invariants & Leader Completeness",
      "description": "Proving that committed log entries are never overridden or lost during leader transitions.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s3_d1",
      "label": "Election Restriction (Up-to-Date Log Verification)",
      "description": "Rejecting candidate votes if candidate logs are less up-to-date than follower logs.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s3_d2",
      "label": "Un-Committed Prior Term Log Overwrites",
      "description": "Overwriting un-committed follower logs to match leader state.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s4",
      "label": "Cluster Membership Changes (Joint Consensus)",
      "description": "Adding or removing nodes without stopping cluster operation.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s4_d1",
      "label": "Two-Phase Joint Consensus Transition (C_old,new)",
      "description": "Requiring majorities from both old (C_old) and new (C_new) configurations during transitions.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s4_d2",
      "label": "Single-Server Configuration Updates",
      "description": "Simplifying membership changes by adding/removing nodes one at a time.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s5",
      "label": "Log Compacting & Snapshotting Systems",
      "description": "Discarding committed log entries by persisting state machine snapshots.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s5_d1",
      "label": "InstallSnapshot RPC Communications",
      "description": "Streaming state snapshots to lagging followers whose logs have been truncated.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t1_s5_d2",
      "label": "Memory Truncation Safeguards",
      "description": "Releasing log memory to prevent unbounded storage growth.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2",
      "label": "Two-Phase Commit (2PC) Protocol",
      "description": "Atomic commitment protocol coordinating distributed transactions across multiple sharded nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s1",
      "label": "Phase 1: Prepare Phase (Voting Phase)",
      "description": "Coordinator node requesting participant nodes to vote PREPARE or ABORT.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s1_d1",
      "label": "Participant Resource Lock Acquisition",
      "description": "Acquiring local locks and writing undo/redo logs before voting PREPARED.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s1_d2",
      "label": "Immutable PREPARED Vote Guarantee",
      "description": "Guaranteeing that participant nodes voting PREPARED will commit if commanded.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s2",
      "label": "Phase 2: Commit Phase (Execution Phase)",
      "description": "Coordinator issuing global COMMIT or ABORT commands based on unanimous votes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s2_d1",
      "label": "Unanimous Vote Rule (All PREPARED -> Global COMMIT)",
      "description": "Issuing global COMMIT if all nodes voted PREPARED; issuing ABORT if any voted ABORT.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s2_d2",
      "label": "Persistent Coordinator Decision Logging",
      "description": "Writing decision record to coordinator WAL before broadcasting COMMIT messages.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s3",
      "label": "Coordinator Single Point of Failure (SPOF) Problem",
      "description": "Blocking vulnerability occurring when coordinators crash after participants vote PREPARED.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s3_d1",
      "label": "Participant Lock Blocking Hazard",
      "description": "Holding participant locks indefinitely while waiting for crashed coordinator recovery.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s3_d2",
      "label": "Raft-Replicated Coordinator Workarounds",
      "description": "Replicating coordinator state using Raft to eliminate single point of failure crashes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s4",
      "label": "Three-Phase Commit (3PC) Non-Blocking Variant",
      "description": "Adding Pre-Commit phases and timeout mechanisms to remove blocking hazards.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s4_d1",
      "label": "Pre-Commit State Insertion",
      "description": "Inserting intermediate states so nodes can safely commit during coordinator crashes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s4_d2",
      "label": "Network Partition Incompatibility Limit",
      "description": "Failing to maintain consistency under real-world asynchronous network partitions.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s5",
      "label": "Percolator Distributed Transactions (TiDB / CockroachDB)",
      "description": "Decentralized distributed transaction protocol built on top of key-value stores using primary locks.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s5_d1",
      "label": "Primary Lock Status Verification",
      "description": "Determining transaction commit status based on single primary key lock state.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t2_s5_d2",
      "label": "Asynchronous Lock Cleanup Sweeps",
      "description": "Clearing orphaned secondary locks in parallel after primary locks commit.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3",
      "label": "Consistent Hashing & Dynamic Sharding",
      "description": "Distributing data across dynamic clusters while minimizing data movement during scaling.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s1",
      "label": "Consistent Hash Ring Mapping (2^32 Integer Space)",
      "description": "Mapping node IP addresses and data keys onto a circular 32-bit hash space.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s1_d1",
      "label": "Clockwise Key-to-Node Assignment",
      "description": "Assigning data keys to first online node encountered moving clockwise around the ring.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s1_d2",
      "label": "Minimal Data Movement (K/N Keys Shifted on Node Add/Remove)",
      "description": "Re-locating only 1/Nth of keys when cluster nodes are added or removed.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s2",
      "label": "Virtual Nodes (Vnodes) & Load Balancing",
      "description": "Assigning hundreds of virtual node positions per physical server to ensure uniform data distribution.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s2_d1",
      "label": "Virtual Node Ring Distribution (e.g. 256 Vnodes per Host)",
      "description": "Distributing virtual positions to smooth out non-uniform hashing distribution spikes.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s2_d2",
      "label": "Heterogeneous Hardware Capacity Weighting",
      "description": "Assigning more vnodes to powerful hardware servers.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s3",
      "label": "Range-Based Sharding (CockroachDB / HBase)",
      "description": "Partitioning data tables into ordered contiguous key ranges (e.g. 64MB Ranges).",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s3_d1",
      "label": "Dynamic Range Splitting & Merging",
      "description": "Splitting ranges automatically as data grows beyond 64MB thresholds.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s3_d2",
      "label": "Efficient Range Scan Support",
      "description": "Executing range queries within single target shards without querying full clusters.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s4",
      "label": "Directory-Based Lookup Routing Tables",
      "description": "Centralized metadata services tracking exact shard-to-node locations (MongoDB Config Servers).",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s4_d1",
      "label": "Router Query Dispatch (Mongos Router)",
      "description": "Routing client requests to correct shard servers using cached routing tables.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s4_d2",
      "label": "Metadata Synchronization Latencies",
      "description": "Handling transient routing errors when shards migrate.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s5",
      "label": "Cross-Shard Transaction Routing Penalties",
      "description": "Performance penalties incurred when queries span multiple network-isolated shards.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s5_d1",
      "label": "Scatter-Gather Query Execution Latency",
      "description": "Broadcasting queries to all shards and merging results when shard keys are omitted.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t3_s5_d2",
      "label": "Shard Key Design Best Practices",
      "description": "Selecting high-cardinality shard keys that align with dominant query patterns.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4",
      "label": "Google Spanner & TrueTime Architecture",
      "description": "Globally distributed synchronous database using hardware atomic clocks and GPS receivers.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s1",
      "label": "TrueTime API Error Bound Interval [t.earliest, t.latest]",
      "description": "Exposing time as a bounded uncertainty interval where absolute time is guaranteed within bounds.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s1_d1",
      "label": "TrueTime Uncertainty Metric epsilon (typically 1-7ms)",
      "description": "Bounding clock drift across global datacenters using GPS receivers and rubidium atomic clocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s1_d2",
      "label": "Synchronized Hardware Time Master Daemon",
      "description": "Re-synchronizing local server clocks continuously against dedicated time masters.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s2",
      "label": "Commit Wait Rule for External Consistency",
      "description": "Waiting out clock uncertainty epsilon before releasing transaction commit timestamps.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s2_d1",
      "label": "Commit Wait Duration Guarantee (2 * epsilon)",
      "description": "Delaying transaction completion until t.earliest > s_commit to enforce strict causal ordering.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s2_d2",
      "label": "Global External Consistency (Linearizability)",
      "description": "Guaranteeing that if Tx2 starts after Tx1 commits, Tx2 receives a higher timestamp globally.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s3",
      "label": "Multi-Region Paxos Group Replication",
      "description": "Replicating data ranges across global datacenters using Paxos consensus groups.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s3_d1",
      "label": "Directories & Tablets Data Layering",
      "description": "Grouping related data keys into directories to optimize Paxos replication locality.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s3_d2",
      "label": "Leader-Lease Renewal Architecture",
      "description": "Granting timed leases to Paxos leaders to serve local read queries without network consensus.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s4",
      "label": "Lock-Free Snapshot Reads Across Global Datacenters",
      "description": "Executing consistent point-in-time read queries at historical timestamps without acquiring locks.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s4_d1",
      "label": "Read-Only Transaction Zero-Lock Execution",
      "description": "Serving multi-region read queries entirely from local replicas using historical MVCC snapshots.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s4_d2",
      "label": "Eliminating Read-Write Contention Globally",
      "description": "Allowing global analytical queries to execute without blocking active write transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s5",
      "label": "CockroachDB Hybrid Logical Clocks (HLC) Alternative",
      "description": "Achieving distributed serializability on commodity hardware without hardware atomic clocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s5_d1",
      "label": "Combining Physical NTP Time with Logical Counters",
      "description": "Tracking physical NTP time alongside logical causality counters.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t4_s5_d2",
      "label": "Read Restart Uncertainty Window Retries",
      "description": "Restarting transactions when reading values within physical clock uncertainty windows.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5",
      "label": "Distributed Consensus & Sharding Architecture Topic 5",
      "description": "Detailed first-principles mechanics for Distributed Consensus & Sharding Architecture topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s1",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s1_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s1_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s2",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s2_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s2_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s3",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s3_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s3_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s4",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s4_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s4_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s5",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s5_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t5_s5_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6",
      "label": "Distributed Consensus & Sharding Architecture Topic 6",
      "description": "Detailed first-principles mechanics for Distributed Consensus & Sharding Architecture topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s1",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s1_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s1_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s2",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s2_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s2_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s3",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s3_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s3_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s4",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s4_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s4_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s5",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Sharding Architecture Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s5_d1",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p5_t6_s5_d2",
      "label": "Distributed Consensus & Sharding Architecture Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Sharding Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p6",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES)",
      "description": "Algorithms for Recovery and Isolation Exploiting Semantics (ARIES): Analysis, Redo, and Undo phases.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1",
      "label": "ARIES Recovery Paradigm Fundamentals",
      "description": "Industry-standard database recovery algorithm developed by C. Mohan (IBM Almaden).",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s1",
      "label": "WAL Protocol Strict Enforcement",
      "description": "Ensuring all log records reach disk before dirty pages are written, and undo information reaches disk before commit.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s1_d1",
      "label": "Physiological Log Record Formatting",
      "description": "Combining physical page identification with logical intra-page operation codes.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s1_d2",
      "label": "PageLSN Integrity Verification",
      "description": "Stamping target pages with PageLSN to determine exact page state during recovery.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s2",
      "label": "Repeating History During Redo",
      "description": "Re-executing ALL logged operations (committed and un-committed) during recovery to restore exact crash state.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s2_d1",
      "label": "Restoring Exact Pre-Crash Page States",
      "description": "Bringing database state forward to the precise moment of system failure.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s2_d2",
      "label": "Simplifying Undo Phase Execution",
      "description": "Allowing the Undo phase to execute standard transaction rollback operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s3",
      "label": "Logging Changes During Undo (Compensation Log Records)",
      "description": "Logging inverse undo actions as Compensation Log Records (CLRs) to prevent infinite recovery loops.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s3_d1",
      "label": "CLR UndoNextLSN Pointer Chains",
      "description": "Storing pointers to next un-undone log records to bypass previously undone actions during re-crashes.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s3_d2",
      "label": "Bounded Recovery Execution Time",
      "description": "Guaranteeing recovery progress even if crashes occur repeatedly during recovery execution.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s4",
      "label": "Transaction & Dirty Page Table Checkpointing",
      "description": "Writing active transaction states and dirty page lists to log during fuzzy checkpoints.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s4_d1",
      "label": "Transaction Table Active Status Map",
      "description": "Tracking active transaction IDs, status (Running/Committing), and LastLSN pointers.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s4_d2",
      "label": "Dirty Page Table (DPT) RecLSN Tracking",
      "description": "Tracking oldest un-flushed log sequence number (RecLSN) per dirty page.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s5",
      "label": "Minimum Redo LSN Calculation (Smallest RecLSN)",
      "description": "Scanning DPT to determine exact WAL starting point for Redo phase execution.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s5_d1",
      "label": "Bypassing Historical WAL Scans",
      "description": "Skipping logged operations prior to the smallest RecLSN across all dirty pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t1_s5_d2",
      "label": "Accelerating Crash Recovery Speeds",
      "description": "Minimizing time required to execute the Analysis and Redo recovery phases.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2",
      "label": "Phase 1: Analysis Phase Execution",
      "description": "Reconstructing Transaction Table and Dirty Page Table states from checkpoint records.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s1",
      "label": "Scanning Log Forward from Last Checkpoint",
      "description": "Locating the most recent Begin Checkpoint record and scanning forward to end of log.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s1_d1",
      "label": "Re-building Active Transaction Table",
      "description": "Adding newly started transactions and removing committed transactions encountered in log.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s1_d2",
      "label": "Re-building Dirty Page Table (DPT)",
      "description": "Adding newly dirtied pages with RecLSN set to log record LSN if not present.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s2",
      "label": "Determining RedoLSN Starting Point",
      "description": "Selecting smallest RecLSN across all DPT entries as RedoLSN.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s2_d1",
      "label": "Smallest RecLSN Extraction",
      "description": "Identifying oldest un-flushed page modification logged prior to crash.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s2_d2",
      "label": "Worst-Case Fallback (Begin Checkpoint LSN)",
      "description": "Falling back to Begin Checkpoint LSN if DPT is empty at checkpoint.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s3",
      "label": "Identifying Active \"Loser\" Transactions",
      "description": "Determining transactions active at crash time lacking commit records.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s3_d1",
      "label": "Loser Transaction List Compilation",
      "description": "Flagging all transactions remaining in Running state at end of log scan.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s3_d2",
      "label": "Targeting Losers for Undo Phase Rollback",
      "description": "Marking loser transactions for inverse operation execution during Undo phase.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s4",
      "label": "Handling End-of-Log Partial Record Corruptions",
      "description": "Detecting and truncating incomplete log records written during mid-crash IO operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s4_d1",
      "label": "CRC32 Log Record Checksum Validation",
      "description": "Validating log record integrity checksums before processing.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s4_d2",
      "label": "Log Truncation at First Corrupt LSN",
      "description": "Truncating partial log writes occurring at disk write boundaries.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s5",
      "label": "Analysis Phase Output Hand-Off",
      "description": "Passing reconstructed DPT and Loser Transaction lists to Redo phase.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s5_d1",
      "label": "In-Memory Metadata Reconstruction",
      "description": "Populating memory tables required for precise Redo execution.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t2_s5_d2",
      "label": "Preparing System for Phase 2 Redo Scanning",
      "description": "Setting scan pointers to RedoLSN to begin physical state restoration.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3",
      "label": "Phase 2: Redo Phase Execution",
      "description": "Re-applying all logged updates from RedoLSN forward to restore exact pre-crash state.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s1",
      "label": "Scanning Log Forward from RedoLSN to End of Log",
      "description": "Re-reading log records starting from RedoLSN and processing all update/CLR records.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s1_d1",
      "label": "Re-Applying Operations for All Transactions",
      "description": "Executing updates for both committed and un-committed (loser) transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s1_d2",
      "label": "Repeating History Invariant Maintenance",
      "description": "Ensuring database state matches crash moment before undoing loser actions.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s2",
      "label": "PageLSN Condition Check for Redo Avoidance",
      "description": "Checking target page PageLSN to avoid re-applying updates already present on disk.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s2_d1",
      "label": "Redo Condition (Page In DPT AND PageLSN < Log Record LSN)",
      "description": "Re-applying update ONLY if page is dirty and on-disk PageLSN predates log record.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s2_d2",
      "label": "Skipping Already-Flushed Page Updates",
      "description": "Eliminating redundant disk page writes during recovery.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s3",
      "label": "Updating PageLSN During Redo Execution",
      "description": "Stamping re-applied log record LSN onto modified page header PageLSN fields.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s3_d1",
      "label": "Page Header LSN Timestamping",
      "description": "Keeping PageLSN synchronized with latest applied log record.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s3_d2",
      "label": "Maintaining On-Disk Recovery Progress",
      "description": "Ensuring re-crashes during Redo do not re-execute completed Redo steps.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s4",
      "label": "Processing Compensation Log Records (CLRs) During Redo",
      "description": "Re-applying CLR actions encountered during forward log scan.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s4_d1",
      "label": "Re-Applying Previously Undone Operations",
      "description": "Restoring inverse actions executed during prior partial recovery attempts.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s4_d2",
      "label": "Advancing Recovery State Accurately",
      "description": "Ensuring previous recovery progress is fully preserved.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s5",
      "label": "Redo Phase Termination & State Verification",
      "description": "Completing forward scan when end of log is reached, verifying all dirty pages match pre-crash state.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s5_d1",
      "label": "On-Disk State Restoration Confirmation",
      "description": "Verifying all logged modifications up to crash moment are reflected in RAM/disk.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t3_s5_d2",
      "label": "Hand-Off to Phase 3 Undo Execution",
      "description": "Passing Loser Transaction list to initiate rollback of un-committed actions.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4",
      "label": "Phase 3: Undo Phase Execution",
      "description": "Rolling back all un-committed \"loser\" transactions by processing log records backward.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s1",
      "label": "Backward Log Scan via LastLSN Pointers",
      "description": "Iterating backward through log records of active loser transactions using LastLSN pointers.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s1_d1",
      "label": "Priority Queue Execution (Highest LSN First)",
      "description": "Processing highest LSN across all loser transactions to undo actions in reverse chronological order.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s1_d2",
      "label": "Following PrevLSN Chains",
      "description": "Traversing transaction log record chains backward to initial Begin records.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s2",
      "label": "Writing Compensation Log Records (CLRs)",
      "description": "Logging inverse actions as CLRs during undo processing before modifying data pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s2_d1",
      "label": "CLR Log Entry Creation",
      "description": "Writing CLR log records to WAL before applying inverse changes to pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s2_d2",
      "label": "Setting CLR UndoNextLSN Pointer",
      "description": "Setting UndoNextLSN to point to PrevLSN of currently undone log record.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s3",
      "label": "Bypassing Undone Log Records via UndoNextLSN",
      "description": "Using UndoNextLSN pointers to skip previously undone log records during recovery after secondary crashes.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s3_d1",
      "label": "Fast-Forwarding Through Undone Records",
      "description": "Jumping over CLR-covered log records during re-crash Undo execution.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s3_d2",
      "label": "Preventing Double-Undo Corruption Faults",
      "description": "Ensuring inverse operations are applied exactly once per log record.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s4",
      "label": "Writing Transaction End Records",
      "description": "Logging End transaction records as each loser transaction is fully rolled back.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s4_d1",
      "label": "Removing Losers from Active Transaction Table",
      "description": "Clearing transaction state once all un-committed updates are undone.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s4_d2",
      "label": "Releasing Retained Transaction Locks",
      "description": "Releasing locks held by loser transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s5",
      "label": "Recovery Completion & Database Open Event",
      "description": "Finalizing Undo phase and declaring database ready to accept new client connections.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s5_d1",
      "label": "Flushing Final Recovery WAL Records",
      "description": "Calling fsync() on final CLR and End log records.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t4_s5_d2",
      "label": "Opening Listener Ports for Client Traffic",
      "description": "Resuming normal database transaction processing.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5",
      "description": "Detailed first-principles mechanics for Write-Ahead Logging & Crash Recovery (ARIES) topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s1_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s1_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s2_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s2_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s3",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s3_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s3_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s4",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s4_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s4_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s5",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s5_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t5_s5_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6",
      "description": "Detailed first-principles mechanics for Write-Ahead Logging & Crash Recovery (ARIES) topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s1_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s1_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s2_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s2_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s3",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s3_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s3_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s4",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s4_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s4_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s5",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s5_d1",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p6_t6_s5_d2",
      "label": "Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Write-Ahead Logging & Crash Recovery (ARIES) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p7",
      "label": "Indexing Techniques & Access Methods",
      "description": "B-Tree, Hash Index, GiST, GIN, Cover Indexing, and Bitmap Indexing architectures.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1",
      "label": "B-Tree & B+ Tree Index Access Paths",
      "description": "Primary indexing mechanism for point lookups, range queries, and order-by sorting.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s1",
      "label": "Index Scan vs Index Only Scan vs Bitmap Index Scan",
      "description": "Comparing execution access paths utilizing secondary B-Tree indexes.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s1_d1",
      "label": "Index Scan (Index Lookup + Heap Page Read per Row)",
      "description": "Reading index entries and fetching corresponding tuple pages from heap storage.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s1_d2",
      "label": "Index Only Scan (Covering Index Zero Heap Read)",
      "description": "Serving queries entirely from index leaf nodes without accessing heap tables.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s2",
      "label": "Visibility Map Checks (PostgreSQL Index Only Scans)",
      "description": "Checking table Visibility Maps to verify page tuples are visible to all active transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s2_d1",
      "label": "Bypassing Heap Page Tuple MVCC Checks",
      "description": "Skipping heap page fetches when Visibility Map bits confirm all page tuples are all-visible.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s2_d2",
      "label": "Vacuum Dependency for Index Only Scan Acceleration",
      "description": "Relying on autovacuum to update Visibility Maps to maximize index-only scan performance.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s3",
      "label": "Composite (Multi-Column) Index Column Ordering Rules",
      "description": "Ordering columns in multi-column indexes (colA, colB, colC) based on query patterns.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s3_d1",
      "label": "Leftmost Prefix Rule Enforcement",
      "description": "Utilizing composite index only when queries contain leftmost index columns.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s3_d2",
      "label": "High-Selectivity Leading Column Rule",
      "description": "Placing highest selectivity columns first to maximize initial B-Tree branch pruning.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s4",
      "label": "Covering Indexes & INCLUDE Clause",
      "description": "Adding non-key payload columns to index leaf nodes to enable index-only scans.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s4_d1",
      "label": "INCLUDE (colC, colD) Non-Key Payload Storage",
      "description": "Storing extra columns in leaf nodes without adding them to internal B-Tree routing nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s4_d2",
      "label": "Optimizing B-Tree Internal Node Fan-Out",
      "description": "Keeping internal routing node keys small to maintain high node fan-out ratios.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s5",
      "label": "Deduplication & Compressible Index Keys",
      "description": "Deduplicating identical key entries in non-unique B-Tree indexes (PostgreSQL 13+).",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s5_d1",
      "label": "Posting List Array Compression",
      "description": "Storing single key entries followed by array lists of matching heap Tuple IDs (TIDs).",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t1_s5_d2",
      "label": "30-50% Index Disk Footprint Reduction",
      "description": "Shrinking secondary index disk footprints to fit larger index portions in RAM.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2",
      "label": "Hash Index Architecture & Bucket Allocation",
      "description": "O(1) constant-time point lookup indexing structures utilizing hash functions.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s1",
      "label": "Hash Function Bucket Mapping (Hash(Key) % Buckets)",
      "description": "Mapping key values to fixed-size bucket pages using uniform hash functions.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s1_d1",
      "label": "Constant Time O(1) Point Lookup Access",
      "description": "Accessing target index buckets in single hash computation steps.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s1_d2",
      "label": "Inability to Support Range Queries (<, >, BETWEEN)",
      "description": "Failing to support range scans because hashed keys lose spatial ordering.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s2",
      "label": "Extendible Hashing & Directory Pages",
      "description": "Dynamic hashing architecture using directory pointer arrays and bit depth doubling.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s2_d1",
      "label": "Global vs Local Bit Depth Counters",
      "description": "Doubling directory sizes without re-hashing existing un-overflowed data buckets.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s2_d2",
      "label": "Directory Pointer Splitting",
      "description": "Splitting full overflow buckets and updating corresponding directory pointers.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s3",
      "label": "Linear Hashing Incremental Bucket Growth",
      "description": "Growing hash bucket arrays incrementally one bucket at a time without global directory locks.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s3_d1",
      "label": "Split Pointer Round-Robin Advancement",
      "description": "Splitting buckets sequentially based on overall load factor thresholds.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s3_d2",
      "label": "Graceful Storage Expansion",
      "description": "Eliminating sudden latency spikes caused by global directory doubling.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s4",
      "label": "PostgreSQL WAL-Logged Hash Indexes (PostgreSQL 10+)",
      "description": "Making Hash Indexes crash-safe and replica-compatible via full WAL logging.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s4_d1",
      "label": "Crash Recovery Compliance",
      "description": "Restoring Hash Index consistency automatically following system crashes.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s4_d2",
      "label": "Streaming Replication Support",
      "description": "Replicating Hash Index modifications to standby read replicas.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s5",
      "label": "Hash Collision Handling (Chaining vs Open Addressing)",
      "description": "Resolving hash collisions when distinct keys map to identical bucket indexes.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s5_d1",
      "label": "Overflow Page Chaining (PostgreSQL)",
      "description": "Chaining secondary overflow pages to primary hash buckets.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t2_s5_d2",
      "label": "Open Addressing (Linear Probing / Robin Hood Hashing)",
      "description": "Probing adjacent array slots to store colliding keys in contiguous memory.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3",
      "label": "Generalized Search Tree (GiST) & Spatial Indexing",
      "description": "Extensible index framework supporting hierarchical multi-dimensional data (R-Tree, Vector Search).",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s1",
      "label": "GiST Lossy Page Bounding Enclosures (Bounding Boxes)",
      "description": "Structuring internal node entries as bounding predicates enclosing all child sub-tree entries.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s1_d1",
      "label": "Bounding Box (MBR / Minimum Bounding Rectangle)",
      "description": "Enclosing 2D/3D geometric spatial shapes within rectangular coordinate bounds.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s1_d2",
      "label": "Consistent() & Compress() User API Methods",
      "description": "Allowing custom data types to define bounding and consistency test functions.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s2",
      "label": "R-Tree Spatial Search Implementation via GiST",
      "description": "Indexing spatial GIS data (points, lines, polygons) using R-Tree bounding box hierarchies.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s2_d1",
      "label": "Spatial Intersection Queries (ST_Intersects)",
      "description": "Filtering spatial geometries by testing bounding box overlaps down the tree.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s2_d2",
      "label": "K-Nearest Neighbor (k-NN) Distance Ordering (ORDER BY <->)",
      "description": "Executing fast distance searches using priority queue branch-and-bound traversals.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s3",
      "label": "GiST PickSplit() Node Splitting Strategies",
      "description": "Custom algorithms partitioning overflowing node entries into two minimal-overlap child groups.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s3_d1",
      "label": "Minimal Area Expansion Heuristics",
      "description": "Grouping spatial shapes to minimize total surface area of new bounding boxes.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s3_d2",
      "label": "Quadratic vs Linear Split Algorithms",
      "description": "Balancing split optimization quality against index build speed.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s4",
      "label": "Vector Similarity Search via GiST / SP-GiST",
      "description": "Indexing high-dimensional vector embeddings for AI similarity search.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s4_d1",
      "label": "Hierarchical K-Means Vector Partitioning",
      "description": "Clustering vector embeddings into spatial tree regions.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s4_d2",
      "label": "Cosine & L2 Distance Vector Indexing",
      "description": "Executing fast nearest-neighbor vector retrieval for LLM RAG pipelines.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s5",
      "label": "PostGIS Spatial Query Acceleration",
      "description": "Leveraging GiST indexes to accelerate complex spatial geographic queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s5_d1",
      "label": "Million-Row Spatial Join Acceleration",
      "description": "Accelerating spatial polygon joins by 100x compared to full table scans.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t3_s5_d2",
      "label": "Geographic Distance Radius Filtering",
      "description": "Filtering points within radius distances of GPS coordinate inputs.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4",
      "label": "Generalized Inverted Index (GIN) & Full-Text Search",
      "description": "Inverted index structure mapping composite data elements (words, array items, JSON keys) to matching row IDs.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s1",
      "label": "Inverted Key-to-TID Entry Tree Mapping",
      "description": "Extracting sub-elements (tokens) from text or JSON fields and indexing individual tokens.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s1_d1",
      "label": "B-Tree Key Indexing of Individual Tokens",
      "description": "Storing sorted unique token words as primary keys in B-Tree index nodes.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s1_d2",
      "label": "Posting List / Posting Tree Value Arrays",
      "description": "Attaching sorted lists of matching Tuple IDs (TIDs) to each unique token key.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s2",
      "label": "JSONB Attribute & Array Element Indexing",
      "description": "Indexing semi-structured JSON documents in PostgreSQL using GIN indexes.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s2_d1",
      "label": "jsonb_ops vs jsonb_path_ops Strategy",
      "description": "Indexing key-value pairs (jsonb_ops) or hashed path-value chains (jsonb_path_ops).",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s2_d2",
      "label": "Fast Containment Testing (JSONB @> '{\"status\": \"active\"}')",
      "description": "Evaluating complex JSON document containment queries in sub-milliseconds.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s3",
      "label": "GIN FastUpdate Pending List Buffer",
      "description": "Buffering incoming GIN index inserts in a flat pending list to prevent index build bottlenecks.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s3_d1",
      "label": "Deferred Bulk Index Insertion",
      "description": "Appending new document TIDs to pending lists during active INSERT transactions.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s3_d2",
      "label": "Background Pending List Maintenance Sweeps",
      "description": "Merging pending list entries into main GIN B-Trees in large batch operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s4",
      "label": "Full-Text Search Tokenization & Stemming",
      "description": "Parsing text documents into normalized lexemes using language dictionaries.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s4_d1",
      "label": "Stop-Word Elimination & Stemming (Porter Stemmer)",
      "description": "Removing common stop-words (and, the) and reducing words to root stems (running -> run).",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s4_d2",
      "label": "tsvector & tsquery Evaluation Matches",
      "description": "Matching parsed document tsvector lexemes against query tsquery expressions.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s5",
      "label": "GIN vs GiST Performance Tradeoff Comparison",
      "description": "Comparing GIN and GiST indexes for composite and full-text search workloads.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s5_d1",
      "label": "GIN (3x Faster Reads, Slower Writes, Larger Disk Size)",
      "description": "Selecting GIN for read-heavy static text and JSON searching.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t4_s5_d2",
      "label": "GiST (Faster Writes, Smaller Size, Slower Multi-Match Reads)",
      "description": "Selecting GiST for dynamic high-update composite data workloads.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5",
      "label": "Indexing Techniques & Access Methods Topic 5",
      "description": "Detailed first-principles mechanics for Indexing Techniques & Access Methods topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s1",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s1_d1",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s1_d2",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s2",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s2_d1",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s2_d2",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s3",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s3_d1",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s3_d2",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s4",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s4_d1",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s4_d2",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s5",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s5_d1",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t5_s5_d2",
      "label": "Indexing Techniques & Access Methods Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6",
      "label": "Indexing Techniques & Access Methods Topic 6",
      "description": "Detailed first-principles mechanics for Indexing Techniques & Access Methods topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s1",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s1_d1",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s1_d2",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s2",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s2_d1",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s2_d2",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s3",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s3_d1",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s3_d2",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s4",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s4_d1",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s4_d2",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s5",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Indexing Techniques & Access Methods Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s5_d1",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p7_t6_s5_d2",
      "label": "Indexing Techniques & Access Methods Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Indexing Techniques & Access Methods Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p8",
      "label": "Columnar Storage & Vectorized Scans",
      "description": "Parquet/ORC block encodings, Dictionary encoding, Bit-packing, Run-Length Encoding (RLE), and SIMD scans.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1",
      "label": "Columnar vs Row-Oriented Storage Layout",
      "description": "Organizing physical data on disk by columns rather than contiguous rows.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s1",
      "label": "Row-Store (NSM - N-ary Storage Model) Memory Layout",
      "description": "Storing all attributes of a single row contiguously on disk pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s1_d1",
      "label": "OLTP Write & Single-Record Read Optimality",
      "description": "Inserting and retrieving full single-row records in single I/O operations.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s1_d2",
      "label": "Analytic Query Read Waste Penalty",
      "description": "Loading un-needed column attributes into RAM when scanning table subsets.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s2",
      "label": "Column-Store (DSM - Decomposition Storage Model) Layout",
      "description": "Storing all values of a single column contiguously across storage blocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s2_d1",
      "label": "I/O Bandwidth Minimization for Analytic Queries",
      "description": "Reading strictly the 2-3 target columns required by SELECT queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s2_d2",
      "label": "High Data Compression Ratios (5-10x Compression)",
      "description": "Compressing homogeneous data types contiguously using specialized encoders.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s3",
      "label": "Apache Parquet File Schema Layout",
      "description": "Self-describing columnar file format containing File Metadata, Row Groups, and Column Chunks.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s3_d1",
      "label": "Row Group Partitioning (e.g. 512MB - 1GB Blocks)",
      "description": "Partitioning dataset rows into horizontal Row Groups.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s3_d2",
      "label": "Column Chunk & Page Sub-Structure",
      "description": "Splitting Column Chunks inside Row Groups into individual 1MB Data Pages.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s4",
      "label": "Apache ORC File Schema Layout",
      "description": "Optimized Row Columnar (ORC) format utilizing Stripes and File Footers.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s4_d1",
      "label": "Stripe Layout Architecture (256MB Default Stripes)",
      "description": "Structuring files into self-contained Stripes with Index, Data, and Footer sections.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s4_d2",
      "label": "Post-Script & Metadata Parsing",
      "description": "Reading file footers to extract column statistics prior to reading data streams.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s5",
      "label": "Hybrid HTAP Hybrid Storage Engines (TiDB / SingleStore)",
      "description": "Maintaining parallel Row-Store (for OLTP) and Column-Store (for OLAP) copies of identical tables.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s5_d1",
      "label": "Real-Time Asynchronous Columnar Replication",
      "description": "Replicating row-store transaction logs to columnar memory stores in real time.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t1_s5_d2",
      "label": "Smart Query Optimizer Engine Routing",
      "description": "Routing point updates to row engines and aggregation queries to column engines.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2",
      "label": "Lightweight Columnar Encoding Techniques",
      "description": "Compressing homogeneous column arrays using lightweight, CPU-friendly algorithms.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s1",
      "label": "Dictionary Encoding Architecture",
      "description": "Replacing long repeated string values with small integer dictionary IDs.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s1_d1",
      "label": "Unique String Dictionary Array Creation",
      "description": "Building sorted dictionary arrays of unique string values.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s1_d2",
      "label": "Fixed-Bit Width ID Representation",
      "description": "Replacing 50-byte text strings with 8-bit or 16-bit integer dictionary IDs.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s2",
      "label": "Run-Length Encoding (RLE)",
      "description": "Compressing sequences of identical consecutive column values into (Value, Count) pairs.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s2_d1",
      "label": "RLE Compression Formula (e.g. \"AAAABBB\" -> \"A4B3\")",
      "description": "Achieving massive 100x compression ratios on sorted low-cardinality columns.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s2_d2",
      "label": "Direct Execution Over RLE Compressed Data",
      "description": "Executing aggregation queries directly over (Value, Count) pairs without decompressing.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s3",
      "label": "Bit-Packing & Frame-of-Reference (FOR) Encoding",
      "description": "Scaling integer bit-widths down to absolute minimum required bits.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s3_d1",
      "label": "Frame-of-Reference Delta Base Calculation",
      "description": "Subtracting minimum value base frame from column values to yield small positive deltas.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s3_d2",
      "label": "Bit-Packing Tiling (Packing 8-bit deltas into 64-bit words)",
      "description": "Packing small integer deltas tightly into native CPU word registers.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s4",
      "label": "Delta / Double-Delta Encoding for Time-Series",
      "description": "Storing consecutive differences (deltas) between adjacent numerical values.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s4_d1",
      "label": "Double-Delta Timestamp Compression (Gorilla TSDB)",
      "description": "Calculating deltas of deltas to compress regular time-series timestamps down to 1 bit per value.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s4_d2",
      "label": "XOR Floating-Point Compression",
      "description": "XORing consecutive IEEE 754 float values to compress slowly changing metrics.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s5",
      "label": "Cascaded Encoding Combination Pipelines",
      "description": "Chaining multiple encoders together (e.g. Dictionary -> RLE -> Bit-Packing -> ZSTD).",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s5_d1",
      "label": "Multi-Stage Compression Pipelines",
      "description": "Maximizing compression efficiency by stacking structural and general-purpose compressors.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t2_s5_d2",
      "label": "Adaptive Encoder Selection Heuristics",
      "description": "Profiling column data statistics to choose optimal encoding pipeline combinations.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3",
      "label": "Predicate Pushdown & Metadata Pruning",
      "description": "Utilizing file metadata statistics to skip reading un-needed storage blocks.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s1",
      "label": "Min/Max Column Statistics Profiling",
      "description": "Storing minimum and maximum values for every column chunk and row group.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s1_d1",
      "label": "Row Group Pruning (WHERE col > 100)",
      "description": "Skipping 512MB Row Groups entirely if col_max < 100.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s1_d2",
      "label": "Eliminating 90%+ Storage Read Volume",
      "description": "Bypassing disk I/O operations for non-matching data partitions.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s2",
      "label": "Page-Level Statistics & Fine-Grained Pruning",
      "description": "Evaluating min/max bounds at individual 1MB data page levels.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s2_d1",
      "label": "Second-Tier Fine-Grained Filtering",
      "description": "Pruning individual 1MB pages within matching Row Groups.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s2_d2",
      "label": "Combining Min/Max with Bloom Filters",
      "description": "Checking page-level Bloom filters to prune non-matching point lookup queries.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s3",
      "label": "Partition Pruning in Data Lakes (S3 Prefix Skipping)",
      "description": "Organizing columnar files in directory paths based on partition keys (e.g. year=2026/month=07/).",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s3_d1",
      "label": "Hive Metastore / Iceberg Directory Filtering",
      "description": "Skipping non-matching cloud storage directory prefixes during query planning.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s3_d2",
      "label": "Petabyte-Scale Query Filtering Acceleration",
      "description": "Narrowing down petabyte datasets to specific megabyte file subsets.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s4",
      "label": "Late Materialization & Tuple Reconstruction",
      "description": "Deferring full tuple reconstruction until after all filter predicates have been evaluated.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s4_d1",
      "label": "Evaluating Predicates Over Encoded Columns First",
      "description": "Filtering column offsets prior to loading remaining payload columns.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s4_d2",
      "label": "Avoiding Un-Necessary Column Decompressions",
      "description": "Decompressing payload columns exclusively for rows satisfying all filter conditions.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s5",
      "label": "Iceberg / Delta Lake Manifest File Indexing",
      "description": "Utilizing ACID table format manifest files to track data file statistics.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s5_d1",
      "label": "Metadata-Driven Query Optimization",
      "description": "Planning query execution using centralized manifest file statistics without listing S3 buckets.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t3_s5_d2",
      "label": "O(1) Snapshot Time-Travel Queries",
      "description": "Reading historic table states by pointing queries to specific historical manifest files.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4",
      "label": "SIMD-Accelerated Vector Scans & Joins",
      "description": "Executing parallel analytical scans and hash join probes using CPU SIMD hardware.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s1",
      "label": "Vectorized Filter Predicate Scanning",
      "description": "Scanning compressed column arrays using AVX-512 or ARM NEON vector instructions.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s1_d1",
      "label": "Parallel Comparison Mask Generation",
      "description": "Comparing 16 integer values against filter constants in single SIMD instructions.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s1_d2",
      "label": "Bitmask Compression & Bit-Shift Output",
      "description": "Extracting matched row indices using fast bitmask bit-count instructions (popcount).",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s2",
      "label": "SIMD-Accelerated Dictionary Decoding",
      "description": "Decoding integer dictionary IDs to values in parallel using SIMD gather instructions.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s2_d1",
      "label": "AVX-512 Vector Gather Operations (_mm512_i32gather_epi32)",
      "description": "Fetching multiple dictionary strings simultaneously using vector index offsets.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s2_d2",
      "label": "High-Throughput String Un-packing",
      "description": "Accelerating string column evaluations by 5-10x.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s3",
      "label": "Vectorized Hash Table Probing for Joins",
      "description": "Probing hash tables with batches of keys using vector SIMD registers.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s3_d1",
      "label": "Multi-Key Vector Hash Computation",
      "description": "Computing hash values for 8-16 join keys simultaneously in vector registers.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s3_d2",
      "label": "Parallel Hash Bucket Probe Sweeps",
      "description": "Probing hash table buckets in parallel to maximize memory bus utilization.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s4",
      "label": "Hardware Cache-Line Aware Memory Alignments",
      "description": "Aligning columnar memory buffers to 64-byte CPU cache lines.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s4_d1",
      "label": "64-Byte Cache Line Padding",
      "description": "Ensuring vector arrays start at memory addresses divisible by 64 bytes.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s4_d2",
      "label": "Eliminating Mis-aligned Memory Read Penalties",
      "description": "Preventing CPU pipeline stalls caused by un-aligned memory fetches crossing cache boundaries.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s5",
      "label": "GPU-Accelerated Columnar Scans (NVIDIA cuDF)",
      "description": "Offloading massive columnar dataset scans and aggregations to GPU VRAM.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s5_d1",
      "label": "Terabyte-per-Second Memory Bandwidth (HBM3)",
      "description": "Scanning columnar data at 3,000 GB/s memory bandwidth speeds.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t4_s5_d2",
      "label": "Thousands of Parallel CUDA Thread Scans",
      "description": "Executing parallel filtering across thousands of CUDA cores simultaneously.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5",
      "label": "Columnar Storage & Vectorized Scans Topic 5",
      "description": "Detailed first-principles mechanics for Columnar Storage & Vectorized Scans topic 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s1",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s1_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s1_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s2",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s2_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s2_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s3",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s3_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s3_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s4",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s4_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s4_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s5",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s5_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t5_s5_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6",
      "label": "Columnar Storage & Vectorized Scans Topic 6",
      "description": "Detailed first-principles mechanics for Columnar Storage & Vectorized Scans topic 6.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s1",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s1_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s1_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s2",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s2_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s2_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s3",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s3_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s3_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s4",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s4_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s4_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s5",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Columnar Storage & Vectorized Scans Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s5_d1",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "db_root_p8_t6_s5_d2",
      "label": "Columnar Storage & Vectorized Scans Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Columnar Storage & Vectorized Scans Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "db_root",
      "target": "db_root_p1"
    },
    {
      "source": "db_root_p1",
      "target": "db_root_p1_t1"
    },
    {
      "source": "db_root_p1_t1",
      "target": "db_root_p1_t1_s1"
    },
    {
      "source": "db_root_p1_t1_s1",
      "target": "db_root_p1_t1_s1_d1"
    },
    {
      "source": "db_root_p1_t1_s1",
      "target": "db_root_p1_t1_s1_d2"
    },
    {
      "source": "db_root_p1_t1",
      "target": "db_root_p1_t1_s2"
    },
    {
      "source": "db_root_p1_t1_s2",
      "target": "db_root_p1_t1_s2_d1"
    },
    {
      "source": "db_root_p1_t1_s2",
      "target": "db_root_p1_t1_s2_d2"
    },
    {
      "source": "db_root_p1_t1",
      "target": "db_root_p1_t1_s3"
    },
    {
      "source": "db_root_p1_t1_s3",
      "target": "db_root_p1_t1_s3_d1"
    },
    {
      "source": "db_root_p1_t1_s3",
      "target": "db_root_p1_t1_s3_d2"
    },
    {
      "source": "db_root_p1_t1",
      "target": "db_root_p1_t1_s4"
    },
    {
      "source": "db_root_p1_t1_s4",
      "target": "db_root_p1_t1_s4_d1"
    },
    {
      "source": "db_root_p1_t1_s4",
      "target": "db_root_p1_t1_s4_d2"
    },
    {
      "source": "db_root_p1_t1",
      "target": "db_root_p1_t1_s5"
    },
    {
      "source": "db_root_p1_t1_s5",
      "target": "db_root_p1_t1_s5_d1"
    },
    {
      "source": "db_root_p1_t1_s5",
      "target": "db_root_p1_t1_s5_d2"
    },
    {
      "source": "db_root_p1",
      "target": "db_root_p1_t2"
    },
    {
      "source": "db_root_p1_t2",
      "target": "db_root_p1_t2_s1"
    },
    {
      "source": "db_root_p1_t2_s1",
      "target": "db_root_p1_t2_s1_d1"
    },
    {
      "source": "db_root_p1_t2_s1",
      "target": "db_root_p1_t2_s1_d2"
    },
    {
      "source": "db_root_p1_t2",
      "target": "db_root_p1_t2_s2"
    },
    {
      "source": "db_root_p1_t2_s2",
      "target": "db_root_p1_t2_s2_d1"
    },
    {
      "source": "db_root_p1_t2_s2",
      "target": "db_root_p1_t2_s2_d2"
    },
    {
      "source": "db_root_p1_t2",
      "target": "db_root_p1_t2_s3"
    },
    {
      "source": "db_root_p1_t2_s3",
      "target": "db_root_p1_t2_s3_d1"
    },
    {
      "source": "db_root_p1_t2_s3",
      "target": "db_root_p1_t2_s3_d2"
    },
    {
      "source": "db_root_p1_t2",
      "target": "db_root_p1_t2_s4"
    },
    {
      "source": "db_root_p1_t2_s4",
      "target": "db_root_p1_t2_s4_d1"
    },
    {
      "source": "db_root_p1_t2_s4",
      "target": "db_root_p1_t2_s4_d2"
    },
    {
      "source": "db_root_p1_t2",
      "target": "db_root_p1_t2_s5"
    },
    {
      "source": "db_root_p1_t2_s5",
      "target": "db_root_p1_t2_s5_d1"
    },
    {
      "source": "db_root_p1_t2_s5",
      "target": "db_root_p1_t2_s5_d2"
    },
    {
      "source": "db_root_p1",
      "target": "db_root_p1_t3"
    },
    {
      "source": "db_root_p1_t3",
      "target": "db_root_p1_t3_s1"
    },
    {
      "source": "db_root_p1_t3_s1",
      "target": "db_root_p1_t3_s1_d1"
    },
    {
      "source": "db_root_p1_t3_s1",
      "target": "db_root_p1_t3_s1_d2"
    },
    {
      "source": "db_root_p1_t3",
      "target": "db_root_p1_t3_s2"
    },
    {
      "source": "db_root_p1_t3_s2",
      "target": "db_root_p1_t3_s2_d1"
    },
    {
      "source": "db_root_p1_t3_s2",
      "target": "db_root_p1_t3_s2_d2"
    },
    {
      "source": "db_root_p1_t3",
      "target": "db_root_p1_t3_s3"
    },
    {
      "source": "db_root_p1_t3_s3",
      "target": "db_root_p1_t3_s3_d1"
    },
    {
      "source": "db_root_p1_t3_s3",
      "target": "db_root_p1_t3_s3_d2"
    },
    {
      "source": "db_root_p1_t3",
      "target": "db_root_p1_t3_s4"
    },
    {
      "source": "db_root_p1_t3_s4",
      "target": "db_root_p1_t3_s4_d1"
    },
    {
      "source": "db_root_p1_t3_s4",
      "target": "db_root_p1_t3_s4_d2"
    },
    {
      "source": "db_root_p1_t3",
      "target": "db_root_p1_t3_s5"
    },
    {
      "source": "db_root_p1_t3_s5",
      "target": "db_root_p1_t3_s5_d1"
    },
    {
      "source": "db_root_p1_t3_s5",
      "target": "db_root_p1_t3_s5_d2"
    },
    {
      "source": "db_root_p1",
      "target": "db_root_p1_t4"
    },
    {
      "source": "db_root_p1_t4",
      "target": "db_root_p1_t4_s1"
    },
    {
      "source": "db_root_p1_t4_s1",
      "target": "db_root_p1_t4_s1_d1"
    },
    {
      "source": "db_root_p1_t4_s1",
      "target": "db_root_p1_t4_s1_d2"
    },
    {
      "source": "db_root_p1_t4",
      "target": "db_root_p1_t4_s2"
    },
    {
      "source": "db_root_p1_t4_s2",
      "target": "db_root_p1_t4_s2_d1"
    },
    {
      "source": "db_root_p1_t4_s2",
      "target": "db_root_p1_t4_s2_d2"
    },
    {
      "source": "db_root_p1_t4",
      "target": "db_root_p1_t4_s3"
    },
    {
      "source": "db_root_p1_t4_s3",
      "target": "db_root_p1_t4_s3_d1"
    },
    {
      "source": "db_root_p1_t4_s3",
      "target": "db_root_p1_t4_s3_d2"
    },
    {
      "source": "db_root_p1_t4",
      "target": "db_root_p1_t4_s4"
    },
    {
      "source": "db_root_p1_t4_s4",
      "target": "db_root_p1_t4_s4_d1"
    },
    {
      "source": "db_root_p1_t4_s4",
      "target": "db_root_p1_t4_s4_d2"
    },
    {
      "source": "db_root_p1_t4",
      "target": "db_root_p1_t4_s5"
    },
    {
      "source": "db_root_p1_t4_s5",
      "target": "db_root_p1_t4_s5_d1"
    },
    {
      "source": "db_root_p1_t4_s5",
      "target": "db_root_p1_t4_s5_d2"
    },
    {
      "source": "db_root_p1",
      "target": "db_root_p1_t5"
    },
    {
      "source": "db_root_p1_t5",
      "target": "db_root_p1_t5_s1"
    },
    {
      "source": "db_root_p1_t5_s1",
      "target": "db_root_p1_t5_s1_d1"
    },
    {
      "source": "db_root_p1_t5_s1",
      "target": "db_root_p1_t5_s1_d2"
    },
    {
      "source": "db_root_p1_t5",
      "target": "db_root_p1_t5_s2"
    },
    {
      "source": "db_root_p1_t5_s2",
      "target": "db_root_p1_t5_s2_d1"
    },
    {
      "source": "db_root_p1_t5_s2",
      "target": "db_root_p1_t5_s2_d2"
    },
    {
      "source": "db_root_p1_t5",
      "target": "db_root_p1_t5_s3"
    },
    {
      "source": "db_root_p1_t5_s3",
      "target": "db_root_p1_t5_s3_d1"
    },
    {
      "source": "db_root_p1_t5_s3",
      "target": "db_root_p1_t5_s3_d2"
    },
    {
      "source": "db_root_p1_t5",
      "target": "db_root_p1_t5_s4"
    },
    {
      "source": "db_root_p1_t5_s4",
      "target": "db_root_p1_t5_s4_d1"
    },
    {
      "source": "db_root_p1_t5_s4",
      "target": "db_root_p1_t5_s4_d2"
    },
    {
      "source": "db_root_p1_t5",
      "target": "db_root_p1_t5_s5"
    },
    {
      "source": "db_root_p1_t5_s5",
      "target": "db_root_p1_t5_s5_d1"
    },
    {
      "source": "db_root_p1_t5_s5",
      "target": "db_root_p1_t5_s5_d2"
    },
    {
      "source": "db_root_p1",
      "target": "db_root_p1_t6"
    },
    {
      "source": "db_root_p1_t6",
      "target": "db_root_p1_t6_s1"
    },
    {
      "source": "db_root_p1_t6_s1",
      "target": "db_root_p1_t6_s1_d1"
    },
    {
      "source": "db_root_p1_t6_s1",
      "target": "db_root_p1_t6_s1_d2"
    },
    {
      "source": "db_root_p1_t6",
      "target": "db_root_p1_t6_s2"
    },
    {
      "source": "db_root_p1_t6_s2",
      "target": "db_root_p1_t6_s2_d1"
    },
    {
      "source": "db_root_p1_t6_s2",
      "target": "db_root_p1_t6_s2_d2"
    },
    {
      "source": "db_root_p1_t6",
      "target": "db_root_p1_t6_s3"
    },
    {
      "source": "db_root_p1_t6_s3",
      "target": "db_root_p1_t6_s3_d1"
    },
    {
      "source": "db_root_p1_t6_s3",
      "target": "db_root_p1_t6_s3_d2"
    },
    {
      "source": "db_root_p1_t6",
      "target": "db_root_p1_t6_s4"
    },
    {
      "source": "db_root_p1_t6_s4",
      "target": "db_root_p1_t6_s4_d1"
    },
    {
      "source": "db_root_p1_t6_s4",
      "target": "db_root_p1_t6_s4_d2"
    },
    {
      "source": "db_root_p1_t6",
      "target": "db_root_p1_t6_s5"
    },
    {
      "source": "db_root_p1_t6_s5",
      "target": "db_root_p1_t6_s5_d1"
    },
    {
      "source": "db_root_p1_t6_s5",
      "target": "db_root_p1_t6_s5_d2"
    },
    {
      "source": "db_root",
      "target": "db_root_p2"
    },
    {
      "source": "db_root_p2",
      "target": "db_root_p2_t1"
    },
    {
      "source": "db_root_p2_t1",
      "target": "db_root_p2_t1_s1"
    },
    {
      "source": "db_root_p2_t1_s1",
      "target": "db_root_p2_t1_s1_d1"
    },
    {
      "source": "db_root_p2_t1_s1",
      "target": "db_root_p2_t1_s1_d2"
    },
    {
      "source": "db_root_p2_t1",
      "target": "db_root_p2_t1_s2"
    },
    {
      "source": "db_root_p2_t1_s2",
      "target": "db_root_p2_t1_s2_d1"
    },
    {
      "source": "db_root_p2_t1_s2",
      "target": "db_root_p2_t1_s2_d2"
    },
    {
      "source": "db_root_p2_t1",
      "target": "db_root_p2_t1_s3"
    },
    {
      "source": "db_root_p2_t1_s3",
      "target": "db_root_p2_t1_s3_d1"
    },
    {
      "source": "db_root_p2_t1_s3",
      "target": "db_root_p2_t1_s3_d2"
    },
    {
      "source": "db_root_p2_t1",
      "target": "db_root_p2_t1_s4"
    },
    {
      "source": "db_root_p2_t1_s4",
      "target": "db_root_p2_t1_s4_d1"
    },
    {
      "source": "db_root_p2_t1_s4",
      "target": "db_root_p2_t1_s4_d2"
    },
    {
      "source": "db_root_p2_t1",
      "target": "db_root_p2_t1_s5"
    },
    {
      "source": "db_root_p2_t1_s5",
      "target": "db_root_p2_t1_s5_d1"
    },
    {
      "source": "db_root_p2_t1_s5",
      "target": "db_root_p2_t1_s5_d2"
    },
    {
      "source": "db_root_p2",
      "target": "db_root_p2_t2"
    },
    {
      "source": "db_root_p2_t2",
      "target": "db_root_p2_t2_s1"
    },
    {
      "source": "db_root_p2_t2_s1",
      "target": "db_root_p2_t2_s1_d1"
    },
    {
      "source": "db_root_p2_t2_s1",
      "target": "db_root_p2_t2_s1_d2"
    },
    {
      "source": "db_root_p2_t2",
      "target": "db_root_p2_t2_s2"
    },
    {
      "source": "db_root_p2_t2_s2",
      "target": "db_root_p2_t2_s2_d1"
    },
    {
      "source": "db_root_p2_t2_s2",
      "target": "db_root_p2_t2_s2_d2"
    },
    {
      "source": "db_root_p2_t2",
      "target": "db_root_p2_t2_s3"
    },
    {
      "source": "db_root_p2_t2_s3",
      "target": "db_root_p2_t2_s3_d1"
    },
    {
      "source": "db_root_p2_t2_s3",
      "target": "db_root_p2_t2_s3_d2"
    },
    {
      "source": "db_root_p2_t2",
      "target": "db_root_p2_t2_s4"
    },
    {
      "source": "db_root_p2_t2_s4",
      "target": "db_root_p2_t2_s4_d1"
    },
    {
      "source": "db_root_p2_t2_s4",
      "target": "db_root_p2_t2_s4_d2"
    },
    {
      "source": "db_root_p2_t2",
      "target": "db_root_p2_t2_s5"
    },
    {
      "source": "db_root_p2_t2_s5",
      "target": "db_root_p2_t2_s5_d1"
    },
    {
      "source": "db_root_p2_t2_s5",
      "target": "db_root_p2_t2_s5_d2"
    },
    {
      "source": "db_root_p2",
      "target": "db_root_p2_t3"
    },
    {
      "source": "db_root_p2_t3",
      "target": "db_root_p2_t3_s1"
    },
    {
      "source": "db_root_p2_t3_s1",
      "target": "db_root_p2_t3_s1_d1"
    },
    {
      "source": "db_root_p2_t3_s1",
      "target": "db_root_p2_t3_s1_d2"
    },
    {
      "source": "db_root_p2_t3",
      "target": "db_root_p2_t3_s2"
    },
    {
      "source": "db_root_p2_t3_s2",
      "target": "db_root_p2_t3_s2_d1"
    },
    {
      "source": "db_root_p2_t3_s2",
      "target": "db_root_p2_t3_s2_d2"
    },
    {
      "source": "db_root_p2_t3",
      "target": "db_root_p2_t3_s3"
    },
    {
      "source": "db_root_p2_t3_s3",
      "target": "db_root_p2_t3_s3_d1"
    },
    {
      "source": "db_root_p2_t3_s3",
      "target": "db_root_p2_t3_s3_d2"
    },
    {
      "source": "db_root_p2_t3",
      "target": "db_root_p2_t3_s4"
    },
    {
      "source": "db_root_p2_t3_s4",
      "target": "db_root_p2_t3_s4_d1"
    },
    {
      "source": "db_root_p2_t3_s4",
      "target": "db_root_p2_t3_s4_d2"
    },
    {
      "source": "db_root_p2_t3",
      "target": "db_root_p2_t3_s5"
    },
    {
      "source": "db_root_p2_t3_s5",
      "target": "db_root_p2_t3_s5_d1"
    },
    {
      "source": "db_root_p2_t3_s5",
      "target": "db_root_p2_t3_s5_d2"
    },
    {
      "source": "db_root_p2",
      "target": "db_root_p2_t4"
    },
    {
      "source": "db_root_p2_t4",
      "target": "db_root_p2_t4_s1"
    },
    {
      "source": "db_root_p2_t4_s1",
      "target": "db_root_p2_t4_s1_d1"
    },
    {
      "source": "db_root_p2_t4_s1",
      "target": "db_root_p2_t4_s1_d2"
    },
    {
      "source": "db_root_p2_t4",
      "target": "db_root_p2_t4_s2"
    },
    {
      "source": "db_root_p2_t4_s2",
      "target": "db_root_p2_t4_s2_d1"
    },
    {
      "source": "db_root_p2_t4_s2",
      "target": "db_root_p2_t4_s2_d2"
    },
    {
      "source": "db_root_p2_t4",
      "target": "db_root_p2_t4_s3"
    },
    {
      "source": "db_root_p2_t4_s3",
      "target": "db_root_p2_t4_s3_d1"
    },
    {
      "source": "db_root_p2_t4_s3",
      "target": "db_root_p2_t4_s3_d2"
    },
    {
      "source": "db_root_p2_t4",
      "target": "db_root_p2_t4_s4"
    },
    {
      "source": "db_root_p2_t4_s4",
      "target": "db_root_p2_t4_s4_d1"
    },
    {
      "source": "db_root_p2_t4_s4",
      "target": "db_root_p2_t4_s4_d2"
    },
    {
      "source": "db_root_p2_t4",
      "target": "db_root_p2_t4_s5"
    },
    {
      "source": "db_root_p2_t4_s5",
      "target": "db_root_p2_t4_s5_d1"
    },
    {
      "source": "db_root_p2_t4_s5",
      "target": "db_root_p2_t4_s5_d2"
    },
    {
      "source": "db_root_p2",
      "target": "db_root_p2_t5"
    },
    {
      "source": "db_root_p2_t5",
      "target": "db_root_p2_t5_s1"
    },
    {
      "source": "db_root_p2_t5_s1",
      "target": "db_root_p2_t5_s1_d1"
    },
    {
      "source": "db_root_p2_t5_s1",
      "target": "db_root_p2_t5_s1_d2"
    },
    {
      "source": "db_root_p2_t5",
      "target": "db_root_p2_t5_s2"
    },
    {
      "source": "db_root_p2_t5_s2",
      "target": "db_root_p2_t5_s2_d1"
    },
    {
      "source": "db_root_p2_t5_s2",
      "target": "db_root_p2_t5_s2_d2"
    },
    {
      "source": "db_root_p2_t5",
      "target": "db_root_p2_t5_s3"
    },
    {
      "source": "db_root_p2_t5_s3",
      "target": "db_root_p2_t5_s3_d1"
    },
    {
      "source": "db_root_p2_t5_s3",
      "target": "db_root_p2_t5_s3_d2"
    },
    {
      "source": "db_root_p2_t5",
      "target": "db_root_p2_t5_s4"
    },
    {
      "source": "db_root_p2_t5_s4",
      "target": "db_root_p2_t5_s4_d1"
    },
    {
      "source": "db_root_p2_t5_s4",
      "target": "db_root_p2_t5_s4_d2"
    },
    {
      "source": "db_root_p2_t5",
      "target": "db_root_p2_t5_s5"
    },
    {
      "source": "db_root_p2_t5_s5",
      "target": "db_root_p2_t5_s5_d1"
    },
    {
      "source": "db_root_p2_t5_s5",
      "target": "db_root_p2_t5_s5_d2"
    },
    {
      "source": "db_root_p2",
      "target": "db_root_p2_t6"
    },
    {
      "source": "db_root_p2_t6",
      "target": "db_root_p2_t6_s1"
    },
    {
      "source": "db_root_p2_t6_s1",
      "target": "db_root_p2_t6_s1_d1"
    },
    {
      "source": "db_root_p2_t6_s1",
      "target": "db_root_p2_t6_s1_d2"
    },
    {
      "source": "db_root_p2_t6",
      "target": "db_root_p2_t6_s2"
    },
    {
      "source": "db_root_p2_t6_s2",
      "target": "db_root_p2_t6_s2_d1"
    },
    {
      "source": "db_root_p2_t6_s2",
      "target": "db_root_p2_t6_s2_d2"
    },
    {
      "source": "db_root_p2_t6",
      "target": "db_root_p2_t6_s3"
    },
    {
      "source": "db_root_p2_t6_s3",
      "target": "db_root_p2_t6_s3_d1"
    },
    {
      "source": "db_root_p2_t6_s3",
      "target": "db_root_p2_t6_s3_d2"
    },
    {
      "source": "db_root_p2_t6",
      "target": "db_root_p2_t6_s4"
    },
    {
      "source": "db_root_p2_t6_s4",
      "target": "db_root_p2_t6_s4_d1"
    },
    {
      "source": "db_root_p2_t6_s4",
      "target": "db_root_p2_t6_s4_d2"
    },
    {
      "source": "db_root_p2_t6",
      "target": "db_root_p2_t6_s5"
    },
    {
      "source": "db_root_p2_t6_s5",
      "target": "db_root_p2_t6_s5_d1"
    },
    {
      "source": "db_root_p2_t6_s5",
      "target": "db_root_p2_t6_s5_d2"
    },
    {
      "source": "db_root",
      "target": "db_root_p3"
    },
    {
      "source": "db_root_p3",
      "target": "db_root_p3_t1"
    },
    {
      "source": "db_root_p3_t1",
      "target": "db_root_p3_t1_s1"
    },
    {
      "source": "db_root_p3_t1_s1",
      "target": "db_root_p3_t1_s1_d1"
    },
    {
      "source": "db_root_p3_t1_s1",
      "target": "db_root_p3_t1_s1_d2"
    },
    {
      "source": "db_root_p3_t1",
      "target": "db_root_p3_t1_s2"
    },
    {
      "source": "db_root_p3_t1_s2",
      "target": "db_root_p3_t1_s2_d1"
    },
    {
      "source": "db_root_p3_t1_s2",
      "target": "db_root_p3_t1_s2_d2"
    },
    {
      "source": "db_root_p3_t1",
      "target": "db_root_p3_t1_s3"
    },
    {
      "source": "db_root_p3_t1_s3",
      "target": "db_root_p3_t1_s3_d1"
    },
    {
      "source": "db_root_p3_t1_s3",
      "target": "db_root_p3_t1_s3_d2"
    },
    {
      "source": "db_root_p3_t1",
      "target": "db_root_p3_t1_s4"
    },
    {
      "source": "db_root_p3_t1_s4",
      "target": "db_root_p3_t1_s4_d1"
    },
    {
      "source": "db_root_p3_t1_s4",
      "target": "db_root_p3_t1_s4_d2"
    },
    {
      "source": "db_root_p3_t1",
      "target": "db_root_p3_t1_s5"
    },
    {
      "source": "db_root_p3_t1_s5",
      "target": "db_root_p3_t1_s5_d1"
    },
    {
      "source": "db_root_p3_t1_s5",
      "target": "db_root_p3_t1_s5_d2"
    },
    {
      "source": "db_root_p3",
      "target": "db_root_p3_t2"
    },
    {
      "source": "db_root_p3_t2",
      "target": "db_root_p3_t2_s1"
    },
    {
      "source": "db_root_p3_t2_s1",
      "target": "db_root_p3_t2_s1_d1"
    },
    {
      "source": "db_root_p3_t2_s1",
      "target": "db_root_p3_t2_s1_d2"
    },
    {
      "source": "db_root_p3_t2",
      "target": "db_root_p3_t2_s2"
    },
    {
      "source": "db_root_p3_t2_s2",
      "target": "db_root_p3_t2_s2_d1"
    },
    {
      "source": "db_root_p3_t2_s2",
      "target": "db_root_p3_t2_s2_d2"
    },
    {
      "source": "db_root_p3_t2",
      "target": "db_root_p3_t2_s3"
    },
    {
      "source": "db_root_p3_t2_s3",
      "target": "db_root_p3_t2_s3_d1"
    },
    {
      "source": "db_root_p3_t2_s3",
      "target": "db_root_p3_t2_s3_d2"
    },
    {
      "source": "db_root_p3_t2",
      "target": "db_root_p3_t2_s4"
    },
    {
      "source": "db_root_p3_t2_s4",
      "target": "db_root_p3_t2_s4_d1"
    },
    {
      "source": "db_root_p3_t2_s4",
      "target": "db_root_p3_t2_s4_d2"
    },
    {
      "source": "db_root_p3_t2",
      "target": "db_root_p3_t2_s5"
    },
    {
      "source": "db_root_p3_t2_s5",
      "target": "db_root_p3_t2_s5_d1"
    },
    {
      "source": "db_root_p3_t2_s5",
      "target": "db_root_p3_t2_s5_d2"
    },
    {
      "source": "db_root_p3",
      "target": "db_root_p3_t3"
    },
    {
      "source": "db_root_p3_t3",
      "target": "db_root_p3_t3_s1"
    },
    {
      "source": "db_root_p3_t3_s1",
      "target": "db_root_p3_t3_s1_d1"
    },
    {
      "source": "db_root_p3_t3_s1",
      "target": "db_root_p3_t3_s1_d2"
    },
    {
      "source": "db_root_p3_t3",
      "target": "db_root_p3_t3_s2"
    },
    {
      "source": "db_root_p3_t3_s2",
      "target": "db_root_p3_t3_s2_d1"
    },
    {
      "source": "db_root_p3_t3_s2",
      "target": "db_root_p3_t3_s2_d2"
    },
    {
      "source": "db_root_p3_t3",
      "target": "db_root_p3_t3_s3"
    },
    {
      "source": "db_root_p3_t3_s3",
      "target": "db_root_p3_t3_s3_d1"
    },
    {
      "source": "db_root_p3_t3_s3",
      "target": "db_root_p3_t3_s3_d2"
    },
    {
      "source": "db_root_p3_t3",
      "target": "db_root_p3_t3_s4"
    },
    {
      "source": "db_root_p3_t3_s4",
      "target": "db_root_p3_t3_s4_d1"
    },
    {
      "source": "db_root_p3_t3_s4",
      "target": "db_root_p3_t3_s4_d2"
    },
    {
      "source": "db_root_p3_t3",
      "target": "db_root_p3_t3_s5"
    },
    {
      "source": "db_root_p3_t3_s5",
      "target": "db_root_p3_t3_s5_d1"
    },
    {
      "source": "db_root_p3_t3_s5",
      "target": "db_root_p3_t3_s5_d2"
    },
    {
      "source": "db_root_p3",
      "target": "db_root_p3_t4"
    },
    {
      "source": "db_root_p3_t4",
      "target": "db_root_p3_t4_s1"
    },
    {
      "source": "db_root_p3_t4_s1",
      "target": "db_root_p3_t4_s1_d1"
    },
    {
      "source": "db_root_p3_t4_s1",
      "target": "db_root_p3_t4_s1_d2"
    },
    {
      "source": "db_root_p3_t4",
      "target": "db_root_p3_t4_s2"
    },
    {
      "source": "db_root_p3_t4_s2",
      "target": "db_root_p3_t4_s2_d1"
    },
    {
      "source": "db_root_p3_t4_s2",
      "target": "db_root_p3_t4_s2_d2"
    },
    {
      "source": "db_root_p3_t4",
      "target": "db_root_p3_t4_s3"
    },
    {
      "source": "db_root_p3_t4_s3",
      "target": "db_root_p3_t4_s3_d1"
    },
    {
      "source": "db_root_p3_t4_s3",
      "target": "db_root_p3_t4_s3_d2"
    },
    {
      "source": "db_root_p3_t4",
      "target": "db_root_p3_t4_s4"
    },
    {
      "source": "db_root_p3_t4_s4",
      "target": "db_root_p3_t4_s4_d1"
    },
    {
      "source": "db_root_p3_t4_s4",
      "target": "db_root_p3_t4_s4_d2"
    },
    {
      "source": "db_root_p3_t4",
      "target": "db_root_p3_t4_s5"
    },
    {
      "source": "db_root_p3_t4_s5",
      "target": "db_root_p3_t4_s5_d1"
    },
    {
      "source": "db_root_p3_t4_s5",
      "target": "db_root_p3_t4_s5_d2"
    },
    {
      "source": "db_root_p3",
      "target": "db_root_p3_t5"
    },
    {
      "source": "db_root_p3_t5",
      "target": "db_root_p3_t5_s1"
    },
    {
      "source": "db_root_p3_t5_s1",
      "target": "db_root_p3_t5_s1_d1"
    },
    {
      "source": "db_root_p3_t5_s1",
      "target": "db_root_p3_t5_s1_d2"
    },
    {
      "source": "db_root_p3_t5",
      "target": "db_root_p3_t5_s2"
    },
    {
      "source": "db_root_p3_t5_s2",
      "target": "db_root_p3_t5_s2_d1"
    },
    {
      "source": "db_root_p3_t5_s2",
      "target": "db_root_p3_t5_s2_d2"
    },
    {
      "source": "db_root_p3_t5",
      "target": "db_root_p3_t5_s3"
    },
    {
      "source": "db_root_p3_t5_s3",
      "target": "db_root_p3_t5_s3_d1"
    },
    {
      "source": "db_root_p3_t5_s3",
      "target": "db_root_p3_t5_s3_d2"
    },
    {
      "source": "db_root_p3_t5",
      "target": "db_root_p3_t5_s4"
    },
    {
      "source": "db_root_p3_t5_s4",
      "target": "db_root_p3_t5_s4_d1"
    },
    {
      "source": "db_root_p3_t5_s4",
      "target": "db_root_p3_t5_s4_d2"
    },
    {
      "source": "db_root_p3_t5",
      "target": "db_root_p3_t5_s5"
    },
    {
      "source": "db_root_p3_t5_s5",
      "target": "db_root_p3_t5_s5_d1"
    },
    {
      "source": "db_root_p3_t5_s5",
      "target": "db_root_p3_t5_s5_d2"
    },
    {
      "source": "db_root_p3",
      "target": "db_root_p3_t6"
    },
    {
      "source": "db_root_p3_t6",
      "target": "db_root_p3_t6_s1"
    },
    {
      "source": "db_root_p3_t6_s1",
      "target": "db_root_p3_t6_s1_d1"
    },
    {
      "source": "db_root_p3_t6_s1",
      "target": "db_root_p3_t6_s1_d2"
    },
    {
      "source": "db_root_p3_t6",
      "target": "db_root_p3_t6_s2"
    },
    {
      "source": "db_root_p3_t6_s2",
      "target": "db_root_p3_t6_s2_d1"
    },
    {
      "source": "db_root_p3_t6_s2",
      "target": "db_root_p3_t6_s2_d2"
    },
    {
      "source": "db_root_p3_t6",
      "target": "db_root_p3_t6_s3"
    },
    {
      "source": "db_root_p3_t6_s3",
      "target": "db_root_p3_t6_s3_d1"
    },
    {
      "source": "db_root_p3_t6_s3",
      "target": "db_root_p3_t6_s3_d2"
    },
    {
      "source": "db_root_p3_t6",
      "target": "db_root_p3_t6_s4"
    },
    {
      "source": "db_root_p3_t6_s4",
      "target": "db_root_p3_t6_s4_d1"
    },
    {
      "source": "db_root_p3_t6_s4",
      "target": "db_root_p3_t6_s4_d2"
    },
    {
      "source": "db_root_p3_t6",
      "target": "db_root_p3_t6_s5"
    },
    {
      "source": "db_root_p3_t6_s5",
      "target": "db_root_p3_t6_s5_d1"
    },
    {
      "source": "db_root_p3_t6_s5",
      "target": "db_root_p3_t6_s5_d2"
    },
    {
      "source": "db_root",
      "target": "db_root_p4"
    },
    {
      "source": "db_root_p4",
      "target": "db_root_p4_t1"
    },
    {
      "source": "db_root_p4_t1",
      "target": "db_root_p4_t1_s1"
    },
    {
      "source": "db_root_p4_t1_s1",
      "target": "db_root_p4_t1_s1_d1"
    },
    {
      "source": "db_root_p4_t1_s1",
      "target": "db_root_p4_t1_s1_d2"
    },
    {
      "source": "db_root_p4_t1",
      "target": "db_root_p4_t1_s2"
    },
    {
      "source": "db_root_p4_t1_s2",
      "target": "db_root_p4_t1_s2_d1"
    },
    {
      "source": "db_root_p4_t1_s2",
      "target": "db_root_p4_t1_s2_d2"
    },
    {
      "source": "db_root_p4_t1",
      "target": "db_root_p4_t1_s3"
    },
    {
      "source": "db_root_p4_t1_s3",
      "target": "db_root_p4_t1_s3_d1"
    },
    {
      "source": "db_root_p4_t1_s3",
      "target": "db_root_p4_t1_s3_d2"
    },
    {
      "source": "db_root_p4_t1",
      "target": "db_root_p4_t1_s4"
    },
    {
      "source": "db_root_p4_t1_s4",
      "target": "db_root_p4_t1_s4_d1"
    },
    {
      "source": "db_root_p4_t1_s4",
      "target": "db_root_p4_t1_s4_d2"
    },
    {
      "source": "db_root_p4_t1",
      "target": "db_root_p4_t1_s5"
    },
    {
      "source": "db_root_p4_t1_s5",
      "target": "db_root_p4_t1_s5_d1"
    },
    {
      "source": "db_root_p4_t1_s5",
      "target": "db_root_p4_t1_s5_d2"
    },
    {
      "source": "db_root_p4",
      "target": "db_root_p4_t2"
    },
    {
      "source": "db_root_p4_t2",
      "target": "db_root_p4_t2_s1"
    },
    {
      "source": "db_root_p4_t2_s1",
      "target": "db_root_p4_t2_s1_d1"
    },
    {
      "source": "db_root_p4_t2_s1",
      "target": "db_root_p4_t2_s1_d2"
    },
    {
      "source": "db_root_p4_t2",
      "target": "db_root_p4_t2_s2"
    },
    {
      "source": "db_root_p4_t2_s2",
      "target": "db_root_p4_t2_s2_d1"
    },
    {
      "source": "db_root_p4_t2_s2",
      "target": "db_root_p4_t2_s2_d2"
    },
    {
      "source": "db_root_p4_t2",
      "target": "db_root_p4_t2_s3"
    },
    {
      "source": "db_root_p4_t2_s3",
      "target": "db_root_p4_t2_s3_d1"
    },
    {
      "source": "db_root_p4_t2_s3",
      "target": "db_root_p4_t2_s3_d2"
    },
    {
      "source": "db_root_p4_t2",
      "target": "db_root_p4_t2_s4"
    },
    {
      "source": "db_root_p4_t2_s4",
      "target": "db_root_p4_t2_s4_d1"
    },
    {
      "source": "db_root_p4_t2_s4",
      "target": "db_root_p4_t2_s4_d2"
    },
    {
      "source": "db_root_p4_t2",
      "target": "db_root_p4_t2_s5"
    },
    {
      "source": "db_root_p4_t2_s5",
      "target": "db_root_p4_t2_s5_d1"
    },
    {
      "source": "db_root_p4_t2_s5",
      "target": "db_root_p4_t2_s5_d2"
    },
    {
      "source": "db_root_p4",
      "target": "db_root_p4_t3"
    },
    {
      "source": "db_root_p4_t3",
      "target": "db_root_p4_t3_s1"
    },
    {
      "source": "db_root_p4_t3_s1",
      "target": "db_root_p4_t3_s1_d1"
    },
    {
      "source": "db_root_p4_t3_s1",
      "target": "db_root_p4_t3_s1_d2"
    },
    {
      "source": "db_root_p4_t3",
      "target": "db_root_p4_t3_s2"
    },
    {
      "source": "db_root_p4_t3_s2",
      "target": "db_root_p4_t3_s2_d1"
    },
    {
      "source": "db_root_p4_t3_s2",
      "target": "db_root_p4_t3_s2_d2"
    },
    {
      "source": "db_root_p4_t3",
      "target": "db_root_p4_t3_s3"
    },
    {
      "source": "db_root_p4_t3_s3",
      "target": "db_root_p4_t3_s3_d1"
    },
    {
      "source": "db_root_p4_t3_s3",
      "target": "db_root_p4_t3_s3_d2"
    },
    {
      "source": "db_root_p4_t3",
      "target": "db_root_p4_t3_s4"
    },
    {
      "source": "db_root_p4_t3_s4",
      "target": "db_root_p4_t3_s4_d1"
    },
    {
      "source": "db_root_p4_t3_s4",
      "target": "db_root_p4_t3_s4_d2"
    },
    {
      "source": "db_root_p4_t3",
      "target": "db_root_p4_t3_s5"
    },
    {
      "source": "db_root_p4_t3_s5",
      "target": "db_root_p4_t3_s5_d1"
    },
    {
      "source": "db_root_p4_t3_s5",
      "target": "db_root_p4_t3_s5_d2"
    },
    {
      "source": "db_root_p4",
      "target": "db_root_p4_t4"
    },
    {
      "source": "db_root_p4_t4",
      "target": "db_root_p4_t4_s1"
    },
    {
      "source": "db_root_p4_t4_s1",
      "target": "db_root_p4_t4_s1_d1"
    },
    {
      "source": "db_root_p4_t4_s1",
      "target": "db_root_p4_t4_s1_d2"
    },
    {
      "source": "db_root_p4_t4",
      "target": "db_root_p4_t4_s2"
    },
    {
      "source": "db_root_p4_t4_s2",
      "target": "db_root_p4_t4_s2_d1"
    },
    {
      "source": "db_root_p4_t4_s2",
      "target": "db_root_p4_t4_s2_d2"
    },
    {
      "source": "db_root_p4_t4",
      "target": "db_root_p4_t4_s3"
    },
    {
      "source": "db_root_p4_t4_s3",
      "target": "db_root_p4_t4_s3_d1"
    },
    {
      "source": "db_root_p4_t4_s3",
      "target": "db_root_p4_t4_s3_d2"
    },
    {
      "source": "db_root_p4_t4",
      "target": "db_root_p4_t4_s4"
    },
    {
      "source": "db_root_p4_t4_s4",
      "target": "db_root_p4_t4_s4_d1"
    },
    {
      "source": "db_root_p4_t4_s4",
      "target": "db_root_p4_t4_s4_d2"
    },
    {
      "source": "db_root_p4_t4",
      "target": "db_root_p4_t4_s5"
    },
    {
      "source": "db_root_p4_t4_s5",
      "target": "db_root_p4_t4_s5_d1"
    },
    {
      "source": "db_root_p4_t4_s5",
      "target": "db_root_p4_t4_s5_d2"
    },
    {
      "source": "db_root_p4_t4_s5",
      "target": "db_root_p4_t4_s5_d3"
    },
    {
      "source": "db_root_p4",
      "target": "db_root_p4_t5"
    },
    {
      "source": "db_root_p4_t5",
      "target": "db_root_p4_t5_s1"
    },
    {
      "source": "db_root_p4_t5_s1",
      "target": "db_root_p4_t5_s1_d1"
    },
    {
      "source": "db_root_p4_t5_s1",
      "target": "db_root_p4_t5_s1_d2"
    },
    {
      "source": "db_root_p4_t5",
      "target": "db_root_p4_t5_s2"
    },
    {
      "source": "db_root_p4_t5_s2",
      "target": "db_root_p4_t5_s2_d1"
    },
    {
      "source": "db_root_p4_t5_s2",
      "target": "db_root_p4_t5_s2_d2"
    },
    {
      "source": "db_root_p4_t5",
      "target": "db_root_p4_t5_s3"
    },
    {
      "source": "db_root_p4_t5_s3",
      "target": "db_root_p4_t5_s3_d1"
    },
    {
      "source": "db_root_p4_t5_s3",
      "target": "db_root_p4_t5_s3_d2"
    },
    {
      "source": "db_root_p4_t5",
      "target": "db_root_p4_t5_s4"
    },
    {
      "source": "db_root_p4_t5_s4",
      "target": "db_root_p4_t5_s4_d1"
    },
    {
      "source": "db_root_p4_t5_s4",
      "target": "db_root_p4_t5_s4_d2"
    },
    {
      "source": "db_root_p4_t5",
      "target": "db_root_p4_t5_s5"
    },
    {
      "source": "db_root_p4_t5_s5",
      "target": "db_root_p4_t5_s5_d1"
    },
    {
      "source": "db_root_p4_t5_s5",
      "target": "db_root_p4_t5_s5_d2"
    },
    {
      "source": "db_root_p4",
      "target": "db_root_p4_t6"
    },
    {
      "source": "db_root_p4_t6",
      "target": "db_root_p4_t6_s1"
    },
    {
      "source": "db_root_p4_t6_s1",
      "target": "db_root_p4_t6_s1_d1"
    },
    {
      "source": "db_root_p4_t6_s1",
      "target": "db_root_p4_t6_s1_d2"
    },
    {
      "source": "db_root_p4_t6",
      "target": "db_root_p4_t6_s2"
    },
    {
      "source": "db_root_p4_t6_s2",
      "target": "db_root_p4_t6_s2_d1"
    },
    {
      "source": "db_root_p4_t6_s2",
      "target": "db_root_p4_t6_s2_d2"
    },
    {
      "source": "db_root_p4_t6",
      "target": "db_root_p4_t6_s3"
    },
    {
      "source": "db_root_p4_t6_s3",
      "target": "db_root_p4_t6_s3_d1"
    },
    {
      "source": "db_root_p4_t6_s3",
      "target": "db_root_p4_t6_s3_d2"
    },
    {
      "source": "db_root_p4_t6",
      "target": "db_root_p4_t6_s4"
    },
    {
      "source": "db_root_p4_t6_s4",
      "target": "db_root_p4_t6_s4_d1"
    },
    {
      "source": "db_root_p4_t6_s4",
      "target": "db_root_p4_t6_s4_d2"
    },
    {
      "source": "db_root_p4_t6",
      "target": "db_root_p4_t6_s5"
    },
    {
      "source": "db_root_p4_t6_s5",
      "target": "db_root_p4_t6_s5_d1"
    },
    {
      "source": "db_root_p4_t6_s5",
      "target": "db_root_p4_t6_s5_d2"
    },
    {
      "source": "db_root",
      "target": "db_root_p5"
    },
    {
      "source": "db_root_p5",
      "target": "db_root_p5_t1"
    },
    {
      "source": "db_root_p5_t1",
      "target": "db_root_p5_t1_s1"
    },
    {
      "source": "db_root_p5_t1_s1",
      "target": "db_root_p5_t1_s1_d1"
    },
    {
      "source": "db_root_p5_t1_s1",
      "target": "db_root_p5_t1_s1_d2"
    },
    {
      "source": "db_root_p5_t1",
      "target": "db_root_p5_t1_s2"
    },
    {
      "source": "db_root_p5_t1_s2",
      "target": "db_root_p5_t1_s2_d1"
    },
    {
      "source": "db_root_p5_t1_s2",
      "target": "db_root_p5_t1_s2_d2"
    },
    {
      "source": "db_root_p5_t1",
      "target": "db_root_p5_t1_s3"
    },
    {
      "source": "db_root_p5_t1_s3",
      "target": "db_root_p5_t1_s3_d1"
    },
    {
      "source": "db_root_p5_t1_s3",
      "target": "db_root_p5_t1_s3_d2"
    },
    {
      "source": "db_root_p5_t1",
      "target": "db_root_p5_t1_s4"
    },
    {
      "source": "db_root_p5_t1_s4",
      "target": "db_root_p5_t1_s4_d1"
    },
    {
      "source": "db_root_p5_t1_s4",
      "target": "db_root_p5_t1_s4_d2"
    },
    {
      "source": "db_root_p5_t1",
      "target": "db_root_p5_t1_s5"
    },
    {
      "source": "db_root_p5_t1_s5",
      "target": "db_root_p5_t1_s5_d1"
    },
    {
      "source": "db_root_p5_t1_s5",
      "target": "db_root_p5_t1_s5_d2"
    },
    {
      "source": "db_root_p5",
      "target": "db_root_p5_t2"
    },
    {
      "source": "db_root_p5_t2",
      "target": "db_root_p5_t2_s1"
    },
    {
      "source": "db_root_p5_t2_s1",
      "target": "db_root_p5_t2_s1_d1"
    },
    {
      "source": "db_root_p5_t2_s1",
      "target": "db_root_p5_t2_s1_d2"
    },
    {
      "source": "db_root_p5_t2",
      "target": "db_root_p5_t2_s2"
    },
    {
      "source": "db_root_p5_t2_s2",
      "target": "db_root_p5_t2_s2_d1"
    },
    {
      "source": "db_root_p5_t2_s2",
      "target": "db_root_p5_t2_s2_d2"
    },
    {
      "source": "db_root_p5_t2",
      "target": "db_root_p5_t2_s3"
    },
    {
      "source": "db_root_p5_t2_s3",
      "target": "db_root_p5_t2_s3_d1"
    },
    {
      "source": "db_root_p5_t2_s3",
      "target": "db_root_p5_t2_s3_d2"
    },
    {
      "source": "db_root_p5_t2",
      "target": "db_root_p5_t2_s4"
    },
    {
      "source": "db_root_p5_t2_s4",
      "target": "db_root_p5_t2_s4_d1"
    },
    {
      "source": "db_root_p5_t2_s4",
      "target": "db_root_p5_t2_s4_d2"
    },
    {
      "source": "db_root_p5_t2",
      "target": "db_root_p5_t2_s5"
    },
    {
      "source": "db_root_p5_t2_s5",
      "target": "db_root_p5_t2_s5_d1"
    },
    {
      "source": "db_root_p5_t2_s5",
      "target": "db_root_p5_t2_s5_d2"
    },
    {
      "source": "db_root_p5",
      "target": "db_root_p5_t3"
    },
    {
      "source": "db_root_p5_t3",
      "target": "db_root_p5_t3_s1"
    },
    {
      "source": "db_root_p5_t3_s1",
      "target": "db_root_p5_t3_s1_d1"
    },
    {
      "source": "db_root_p5_t3_s1",
      "target": "db_root_p5_t3_s1_d2"
    },
    {
      "source": "db_root_p5_t3",
      "target": "db_root_p5_t3_s2"
    },
    {
      "source": "db_root_p5_t3_s2",
      "target": "db_root_p5_t3_s2_d1"
    },
    {
      "source": "db_root_p5_t3_s2",
      "target": "db_root_p5_t3_s2_d2"
    },
    {
      "source": "db_root_p5_t3",
      "target": "db_root_p5_t3_s3"
    },
    {
      "source": "db_root_p5_t3_s3",
      "target": "db_root_p5_t3_s3_d1"
    },
    {
      "source": "db_root_p5_t3_s3",
      "target": "db_root_p5_t3_s3_d2"
    },
    {
      "source": "db_root_p5_t3",
      "target": "db_root_p5_t3_s4"
    },
    {
      "source": "db_root_p5_t3_s4",
      "target": "db_root_p5_t3_s4_d1"
    },
    {
      "source": "db_root_p5_t3_s4",
      "target": "db_root_p5_t3_s4_d2"
    },
    {
      "source": "db_root_p5_t3",
      "target": "db_root_p5_t3_s5"
    },
    {
      "source": "db_root_p5_t3_s5",
      "target": "db_root_p5_t3_s5_d1"
    },
    {
      "source": "db_root_p5_t3_s5",
      "target": "db_root_p5_t3_s5_d2"
    },
    {
      "source": "db_root_p5",
      "target": "db_root_p5_t4"
    },
    {
      "source": "db_root_p5_t4",
      "target": "db_root_p5_t4_s1"
    },
    {
      "source": "db_root_p5_t4_s1",
      "target": "db_root_p5_t4_s1_d1"
    },
    {
      "source": "db_root_p5_t4_s1",
      "target": "db_root_p5_t4_s1_d2"
    },
    {
      "source": "db_root_p5_t4",
      "target": "db_root_p5_t4_s2"
    },
    {
      "source": "db_root_p5_t4_s2",
      "target": "db_root_p5_t4_s2_d1"
    },
    {
      "source": "db_root_p5_t4_s2",
      "target": "db_root_p5_t4_s2_d2"
    },
    {
      "source": "db_root_p5_t4",
      "target": "db_root_p5_t4_s3"
    },
    {
      "source": "db_root_p5_t4_s3",
      "target": "db_root_p5_t4_s3_d1"
    },
    {
      "source": "db_root_p5_t4_s3",
      "target": "db_root_p5_t4_s3_d2"
    },
    {
      "source": "db_root_p5_t4",
      "target": "db_root_p5_t4_s4"
    },
    {
      "source": "db_root_p5_t4_s4",
      "target": "db_root_p5_t4_s4_d1"
    },
    {
      "source": "db_root_p5_t4_s4",
      "target": "db_root_p5_t4_s4_d2"
    },
    {
      "source": "db_root_p5_t4",
      "target": "db_root_p5_t4_s5"
    },
    {
      "source": "db_root_p5_t4_s5",
      "target": "db_root_p5_t4_s5_d1"
    },
    {
      "source": "db_root_p5_t4_s5",
      "target": "db_root_p5_t4_s5_d2"
    },
    {
      "source": "db_root_p5",
      "target": "db_root_p5_t5"
    },
    {
      "source": "db_root_p5_t5",
      "target": "db_root_p5_t5_s1"
    },
    {
      "source": "db_root_p5_t5_s1",
      "target": "db_root_p5_t5_s1_d1"
    },
    {
      "source": "db_root_p5_t5_s1",
      "target": "db_root_p5_t5_s1_d2"
    },
    {
      "source": "db_root_p5_t5",
      "target": "db_root_p5_t5_s2"
    },
    {
      "source": "db_root_p5_t5_s2",
      "target": "db_root_p5_t5_s2_d1"
    },
    {
      "source": "db_root_p5_t5_s2",
      "target": "db_root_p5_t5_s2_d2"
    },
    {
      "source": "db_root_p5_t5",
      "target": "db_root_p5_t5_s3"
    },
    {
      "source": "db_root_p5_t5_s3",
      "target": "db_root_p5_t5_s3_d1"
    },
    {
      "source": "db_root_p5_t5_s3",
      "target": "db_root_p5_t5_s3_d2"
    },
    {
      "source": "db_root_p5_t5",
      "target": "db_root_p5_t5_s4"
    },
    {
      "source": "db_root_p5_t5_s4",
      "target": "db_root_p5_t5_s4_d1"
    },
    {
      "source": "db_root_p5_t5_s4",
      "target": "db_root_p5_t5_s4_d2"
    },
    {
      "source": "db_root_p5_t5",
      "target": "db_root_p5_t5_s5"
    },
    {
      "source": "db_root_p5_t5_s5",
      "target": "db_root_p5_t5_s5_d1"
    },
    {
      "source": "db_root_p5_t5_s5",
      "target": "db_root_p5_t5_s5_d2"
    },
    {
      "source": "db_root_p5",
      "target": "db_root_p5_t6"
    },
    {
      "source": "db_root_p5_t6",
      "target": "db_root_p5_t6_s1"
    },
    {
      "source": "db_root_p5_t6_s1",
      "target": "db_root_p5_t6_s1_d1"
    },
    {
      "source": "db_root_p5_t6_s1",
      "target": "db_root_p5_t6_s1_d2"
    },
    {
      "source": "db_root_p5_t6",
      "target": "db_root_p5_t6_s2"
    },
    {
      "source": "db_root_p5_t6_s2",
      "target": "db_root_p5_t6_s2_d1"
    },
    {
      "source": "db_root_p5_t6_s2",
      "target": "db_root_p5_t6_s2_d2"
    },
    {
      "source": "db_root_p5_t6",
      "target": "db_root_p5_t6_s3"
    },
    {
      "source": "db_root_p5_t6_s3",
      "target": "db_root_p5_t6_s3_d1"
    },
    {
      "source": "db_root_p5_t6_s3",
      "target": "db_root_p5_t6_s3_d2"
    },
    {
      "source": "db_root_p5_t6",
      "target": "db_root_p5_t6_s4"
    },
    {
      "source": "db_root_p5_t6_s4",
      "target": "db_root_p5_t6_s4_d1"
    },
    {
      "source": "db_root_p5_t6_s4",
      "target": "db_root_p5_t6_s4_d2"
    },
    {
      "source": "db_root_p5_t6",
      "target": "db_root_p5_t6_s5"
    },
    {
      "source": "db_root_p5_t6_s5",
      "target": "db_root_p5_t6_s5_d1"
    },
    {
      "source": "db_root_p5_t6_s5",
      "target": "db_root_p5_t6_s5_d2"
    },
    {
      "source": "db_root",
      "target": "db_root_p6"
    },
    {
      "source": "db_root_p6",
      "target": "db_root_p6_t1"
    },
    {
      "source": "db_root_p6_t1",
      "target": "db_root_p6_t1_s1"
    },
    {
      "source": "db_root_p6_t1_s1",
      "target": "db_root_p6_t1_s1_d1"
    },
    {
      "source": "db_root_p6_t1_s1",
      "target": "db_root_p6_t1_s1_d2"
    },
    {
      "source": "db_root_p6_t1",
      "target": "db_root_p6_t1_s2"
    },
    {
      "source": "db_root_p6_t1_s2",
      "target": "db_root_p6_t1_s2_d1"
    },
    {
      "source": "db_root_p6_t1_s2",
      "target": "db_root_p6_t1_s2_d2"
    },
    {
      "source": "db_root_p6_t1",
      "target": "db_root_p6_t1_s3"
    },
    {
      "source": "db_root_p6_t1_s3",
      "target": "db_root_p6_t1_s3_d1"
    },
    {
      "source": "db_root_p6_t1_s3",
      "target": "db_root_p6_t1_s3_d2"
    },
    {
      "source": "db_root_p6_t1",
      "target": "db_root_p6_t1_s4"
    },
    {
      "source": "db_root_p6_t1_s4",
      "target": "db_root_p6_t1_s4_d1"
    },
    {
      "source": "db_root_p6_t1_s4",
      "target": "db_root_p6_t1_s4_d2"
    },
    {
      "source": "db_root_p6_t1",
      "target": "db_root_p6_t1_s5"
    },
    {
      "source": "db_root_p6_t1_s5",
      "target": "db_root_p6_t1_s5_d1"
    },
    {
      "source": "db_root_p6_t1_s5",
      "target": "db_root_p6_t1_s5_d2"
    },
    {
      "source": "db_root_p6",
      "target": "db_root_p6_t2"
    },
    {
      "source": "db_root_p6_t2",
      "target": "db_root_p6_t2_s1"
    },
    {
      "source": "db_root_p6_t2_s1",
      "target": "db_root_p6_t2_s1_d1"
    },
    {
      "source": "db_root_p6_t2_s1",
      "target": "db_root_p6_t2_s1_d2"
    },
    {
      "source": "db_root_p6_t2",
      "target": "db_root_p6_t2_s2"
    },
    {
      "source": "db_root_p6_t2_s2",
      "target": "db_root_p6_t2_s2_d1"
    },
    {
      "source": "db_root_p6_t2_s2",
      "target": "db_root_p6_t2_s2_d2"
    },
    {
      "source": "db_root_p6_t2",
      "target": "db_root_p6_t2_s3"
    },
    {
      "source": "db_root_p6_t2_s3",
      "target": "db_root_p6_t2_s3_d1"
    },
    {
      "source": "db_root_p6_t2_s3",
      "target": "db_root_p6_t2_s3_d2"
    },
    {
      "source": "db_root_p6_t2",
      "target": "db_root_p6_t2_s4"
    },
    {
      "source": "db_root_p6_t2_s4",
      "target": "db_root_p6_t2_s4_d1"
    },
    {
      "source": "db_root_p6_t2_s4",
      "target": "db_root_p6_t2_s4_d2"
    },
    {
      "source": "db_root_p6_t2",
      "target": "db_root_p6_t2_s5"
    },
    {
      "source": "db_root_p6_t2_s5",
      "target": "db_root_p6_t2_s5_d1"
    },
    {
      "source": "db_root_p6_t2_s5",
      "target": "db_root_p6_t2_s5_d2"
    },
    {
      "source": "db_root_p6",
      "target": "db_root_p6_t3"
    },
    {
      "source": "db_root_p6_t3",
      "target": "db_root_p6_t3_s1"
    },
    {
      "source": "db_root_p6_t3_s1",
      "target": "db_root_p6_t3_s1_d1"
    },
    {
      "source": "db_root_p6_t3_s1",
      "target": "db_root_p6_t3_s1_d2"
    },
    {
      "source": "db_root_p6_t3",
      "target": "db_root_p6_t3_s2"
    },
    {
      "source": "db_root_p6_t3_s2",
      "target": "db_root_p6_t3_s2_d1"
    },
    {
      "source": "db_root_p6_t3_s2",
      "target": "db_root_p6_t3_s2_d2"
    },
    {
      "source": "db_root_p6_t3",
      "target": "db_root_p6_t3_s3"
    },
    {
      "source": "db_root_p6_t3_s3",
      "target": "db_root_p6_t3_s3_d1"
    },
    {
      "source": "db_root_p6_t3_s3",
      "target": "db_root_p6_t3_s3_d2"
    },
    {
      "source": "db_root_p6_t3",
      "target": "db_root_p6_t3_s4"
    },
    {
      "source": "db_root_p6_t3_s4",
      "target": "db_root_p6_t3_s4_d1"
    },
    {
      "source": "db_root_p6_t3_s4",
      "target": "db_root_p6_t3_s4_d2"
    },
    {
      "source": "db_root_p6_t3",
      "target": "db_root_p6_t3_s5"
    },
    {
      "source": "db_root_p6_t3_s5",
      "target": "db_root_p6_t3_s5_d1"
    },
    {
      "source": "db_root_p6_t3_s5",
      "target": "db_root_p6_t3_s5_d2"
    },
    {
      "source": "db_root_p6",
      "target": "db_root_p6_t4"
    },
    {
      "source": "db_root_p6_t4",
      "target": "db_root_p6_t4_s1"
    },
    {
      "source": "db_root_p6_t4_s1",
      "target": "db_root_p6_t4_s1_d1"
    },
    {
      "source": "db_root_p6_t4_s1",
      "target": "db_root_p6_t4_s1_d2"
    },
    {
      "source": "db_root_p6_t4",
      "target": "db_root_p6_t4_s2"
    },
    {
      "source": "db_root_p6_t4_s2",
      "target": "db_root_p6_t4_s2_d1"
    },
    {
      "source": "db_root_p6_t4_s2",
      "target": "db_root_p6_t4_s2_d2"
    },
    {
      "source": "db_root_p6_t4",
      "target": "db_root_p6_t4_s3"
    },
    {
      "source": "db_root_p6_t4_s3",
      "target": "db_root_p6_t4_s3_d1"
    },
    {
      "source": "db_root_p6_t4_s3",
      "target": "db_root_p6_t4_s3_d2"
    },
    {
      "source": "db_root_p6_t4",
      "target": "db_root_p6_t4_s4"
    },
    {
      "source": "db_root_p6_t4_s4",
      "target": "db_root_p6_t4_s4_d1"
    },
    {
      "source": "db_root_p6_t4_s4",
      "target": "db_root_p6_t4_s4_d2"
    },
    {
      "source": "db_root_p6_t4",
      "target": "db_root_p6_t4_s5"
    },
    {
      "source": "db_root_p6_t4_s5",
      "target": "db_root_p6_t4_s5_d1"
    },
    {
      "source": "db_root_p6_t4_s5",
      "target": "db_root_p6_t4_s5_d2"
    },
    {
      "source": "db_root_p6",
      "target": "db_root_p6_t5"
    },
    {
      "source": "db_root_p6_t5",
      "target": "db_root_p6_t5_s1"
    },
    {
      "source": "db_root_p6_t5_s1",
      "target": "db_root_p6_t5_s1_d1"
    },
    {
      "source": "db_root_p6_t5_s1",
      "target": "db_root_p6_t5_s1_d2"
    },
    {
      "source": "db_root_p6_t5",
      "target": "db_root_p6_t5_s2"
    },
    {
      "source": "db_root_p6_t5_s2",
      "target": "db_root_p6_t5_s2_d1"
    },
    {
      "source": "db_root_p6_t5_s2",
      "target": "db_root_p6_t5_s2_d2"
    },
    {
      "source": "db_root_p6_t5",
      "target": "db_root_p6_t5_s3"
    },
    {
      "source": "db_root_p6_t5_s3",
      "target": "db_root_p6_t5_s3_d1"
    },
    {
      "source": "db_root_p6_t5_s3",
      "target": "db_root_p6_t5_s3_d2"
    },
    {
      "source": "db_root_p6_t5",
      "target": "db_root_p6_t5_s4"
    },
    {
      "source": "db_root_p6_t5_s4",
      "target": "db_root_p6_t5_s4_d1"
    },
    {
      "source": "db_root_p6_t5_s4",
      "target": "db_root_p6_t5_s4_d2"
    },
    {
      "source": "db_root_p6_t5",
      "target": "db_root_p6_t5_s5"
    },
    {
      "source": "db_root_p6_t5_s5",
      "target": "db_root_p6_t5_s5_d1"
    },
    {
      "source": "db_root_p6_t5_s5",
      "target": "db_root_p6_t5_s5_d2"
    },
    {
      "source": "db_root_p6",
      "target": "db_root_p6_t6"
    },
    {
      "source": "db_root_p6_t6",
      "target": "db_root_p6_t6_s1"
    },
    {
      "source": "db_root_p6_t6_s1",
      "target": "db_root_p6_t6_s1_d1"
    },
    {
      "source": "db_root_p6_t6_s1",
      "target": "db_root_p6_t6_s1_d2"
    },
    {
      "source": "db_root_p6_t6",
      "target": "db_root_p6_t6_s2"
    },
    {
      "source": "db_root_p6_t6_s2",
      "target": "db_root_p6_t6_s2_d1"
    },
    {
      "source": "db_root_p6_t6_s2",
      "target": "db_root_p6_t6_s2_d2"
    },
    {
      "source": "db_root_p6_t6",
      "target": "db_root_p6_t6_s3"
    },
    {
      "source": "db_root_p6_t6_s3",
      "target": "db_root_p6_t6_s3_d1"
    },
    {
      "source": "db_root_p6_t6_s3",
      "target": "db_root_p6_t6_s3_d2"
    },
    {
      "source": "db_root_p6_t6",
      "target": "db_root_p6_t6_s4"
    },
    {
      "source": "db_root_p6_t6_s4",
      "target": "db_root_p6_t6_s4_d1"
    },
    {
      "source": "db_root_p6_t6_s4",
      "target": "db_root_p6_t6_s4_d2"
    },
    {
      "source": "db_root_p6_t6",
      "target": "db_root_p6_t6_s5"
    },
    {
      "source": "db_root_p6_t6_s5",
      "target": "db_root_p6_t6_s5_d1"
    },
    {
      "source": "db_root_p6_t6_s5",
      "target": "db_root_p6_t6_s5_d2"
    },
    {
      "source": "db_root",
      "target": "db_root_p7"
    },
    {
      "source": "db_root_p7",
      "target": "db_root_p7_t1"
    },
    {
      "source": "db_root_p7_t1",
      "target": "db_root_p7_t1_s1"
    },
    {
      "source": "db_root_p7_t1_s1",
      "target": "db_root_p7_t1_s1_d1"
    },
    {
      "source": "db_root_p7_t1_s1",
      "target": "db_root_p7_t1_s1_d2"
    },
    {
      "source": "db_root_p7_t1",
      "target": "db_root_p7_t1_s2"
    },
    {
      "source": "db_root_p7_t1_s2",
      "target": "db_root_p7_t1_s2_d1"
    },
    {
      "source": "db_root_p7_t1_s2",
      "target": "db_root_p7_t1_s2_d2"
    },
    {
      "source": "db_root_p7_t1",
      "target": "db_root_p7_t1_s3"
    },
    {
      "source": "db_root_p7_t1_s3",
      "target": "db_root_p7_t1_s3_d1"
    },
    {
      "source": "db_root_p7_t1_s3",
      "target": "db_root_p7_t1_s3_d2"
    },
    {
      "source": "db_root_p7_t1",
      "target": "db_root_p7_t1_s4"
    },
    {
      "source": "db_root_p7_t1_s4",
      "target": "db_root_p7_t1_s4_d1"
    },
    {
      "source": "db_root_p7_t1_s4",
      "target": "db_root_p7_t1_s4_d2"
    },
    {
      "source": "db_root_p7_t1",
      "target": "db_root_p7_t1_s5"
    },
    {
      "source": "db_root_p7_t1_s5",
      "target": "db_root_p7_t1_s5_d1"
    },
    {
      "source": "db_root_p7_t1_s5",
      "target": "db_root_p7_t1_s5_d2"
    },
    {
      "source": "db_root_p7",
      "target": "db_root_p7_t2"
    },
    {
      "source": "db_root_p7_t2",
      "target": "db_root_p7_t2_s1"
    },
    {
      "source": "db_root_p7_t2_s1",
      "target": "db_root_p7_t2_s1_d1"
    },
    {
      "source": "db_root_p7_t2_s1",
      "target": "db_root_p7_t2_s1_d2"
    },
    {
      "source": "db_root_p7_t2",
      "target": "db_root_p7_t2_s2"
    },
    {
      "source": "db_root_p7_t2_s2",
      "target": "db_root_p7_t2_s2_d1"
    },
    {
      "source": "db_root_p7_t2_s2",
      "target": "db_root_p7_t2_s2_d2"
    },
    {
      "source": "db_root_p7_t2",
      "target": "db_root_p7_t2_s3"
    },
    {
      "source": "db_root_p7_t2_s3",
      "target": "db_root_p7_t2_s3_d1"
    },
    {
      "source": "db_root_p7_t2_s3",
      "target": "db_root_p7_t2_s3_d2"
    },
    {
      "source": "db_root_p7_t2",
      "target": "db_root_p7_t2_s4"
    },
    {
      "source": "db_root_p7_t2_s4",
      "target": "db_root_p7_t2_s4_d1"
    },
    {
      "source": "db_root_p7_t2_s4",
      "target": "db_root_p7_t2_s4_d2"
    },
    {
      "source": "db_root_p7_t2",
      "target": "db_root_p7_t2_s5"
    },
    {
      "source": "db_root_p7_t2_s5",
      "target": "db_root_p7_t2_s5_d1"
    },
    {
      "source": "db_root_p7_t2_s5",
      "target": "db_root_p7_t2_s5_d2"
    },
    {
      "source": "db_root_p7",
      "target": "db_root_p7_t3"
    },
    {
      "source": "db_root_p7_t3",
      "target": "db_root_p7_t3_s1"
    },
    {
      "source": "db_root_p7_t3_s1",
      "target": "db_root_p7_t3_s1_d1"
    },
    {
      "source": "db_root_p7_t3_s1",
      "target": "db_root_p7_t3_s1_d2"
    },
    {
      "source": "db_root_p7_t3",
      "target": "db_root_p7_t3_s2"
    },
    {
      "source": "db_root_p7_t3_s2",
      "target": "db_root_p7_t3_s2_d1"
    },
    {
      "source": "db_root_p7_t3_s2",
      "target": "db_root_p7_t3_s2_d2"
    },
    {
      "source": "db_root_p7_t3",
      "target": "db_root_p7_t3_s3"
    },
    {
      "source": "db_root_p7_t3_s3",
      "target": "db_root_p7_t3_s3_d1"
    },
    {
      "source": "db_root_p7_t3_s3",
      "target": "db_root_p7_t3_s3_d2"
    },
    {
      "source": "db_root_p7_t3",
      "target": "db_root_p7_t3_s4"
    },
    {
      "source": "db_root_p7_t3_s4",
      "target": "db_root_p7_t3_s4_d1"
    },
    {
      "source": "db_root_p7_t3_s4",
      "target": "db_root_p7_t3_s4_d2"
    },
    {
      "source": "db_root_p7_t3",
      "target": "db_root_p7_t3_s5"
    },
    {
      "source": "db_root_p7_t3_s5",
      "target": "db_root_p7_t3_s5_d1"
    },
    {
      "source": "db_root_p7_t3_s5",
      "target": "db_root_p7_t3_s5_d2"
    },
    {
      "source": "db_root_p7",
      "target": "db_root_p7_t4"
    },
    {
      "source": "db_root_p7_t4",
      "target": "db_root_p7_t4_s1"
    },
    {
      "source": "db_root_p7_t4_s1",
      "target": "db_root_p7_t4_s1_d1"
    },
    {
      "source": "db_root_p7_t4_s1",
      "target": "db_root_p7_t4_s1_d2"
    },
    {
      "source": "db_root_p7_t4",
      "target": "db_root_p7_t4_s2"
    },
    {
      "source": "db_root_p7_t4_s2",
      "target": "db_root_p7_t4_s2_d1"
    },
    {
      "source": "db_root_p7_t4_s2",
      "target": "db_root_p7_t4_s2_d2"
    },
    {
      "source": "db_root_p7_t4",
      "target": "db_root_p7_t4_s3"
    },
    {
      "source": "db_root_p7_t4_s3",
      "target": "db_root_p7_t4_s3_d1"
    },
    {
      "source": "db_root_p7_t4_s3",
      "target": "db_root_p7_t4_s3_d2"
    },
    {
      "source": "db_root_p7_t4",
      "target": "db_root_p7_t4_s4"
    },
    {
      "source": "db_root_p7_t4_s4",
      "target": "db_root_p7_t4_s4_d1"
    },
    {
      "source": "db_root_p7_t4_s4",
      "target": "db_root_p7_t4_s4_d2"
    },
    {
      "source": "db_root_p7_t4",
      "target": "db_root_p7_t4_s5"
    },
    {
      "source": "db_root_p7_t4_s5",
      "target": "db_root_p7_t4_s5_d1"
    },
    {
      "source": "db_root_p7_t4_s5",
      "target": "db_root_p7_t4_s5_d2"
    },
    {
      "source": "db_root_p7",
      "target": "db_root_p7_t5"
    },
    {
      "source": "db_root_p7_t5",
      "target": "db_root_p7_t5_s1"
    },
    {
      "source": "db_root_p7_t5_s1",
      "target": "db_root_p7_t5_s1_d1"
    },
    {
      "source": "db_root_p7_t5_s1",
      "target": "db_root_p7_t5_s1_d2"
    },
    {
      "source": "db_root_p7_t5",
      "target": "db_root_p7_t5_s2"
    },
    {
      "source": "db_root_p7_t5_s2",
      "target": "db_root_p7_t5_s2_d1"
    },
    {
      "source": "db_root_p7_t5_s2",
      "target": "db_root_p7_t5_s2_d2"
    },
    {
      "source": "db_root_p7_t5",
      "target": "db_root_p7_t5_s3"
    },
    {
      "source": "db_root_p7_t5_s3",
      "target": "db_root_p7_t5_s3_d1"
    },
    {
      "source": "db_root_p7_t5_s3",
      "target": "db_root_p7_t5_s3_d2"
    },
    {
      "source": "db_root_p7_t5",
      "target": "db_root_p7_t5_s4"
    },
    {
      "source": "db_root_p7_t5_s4",
      "target": "db_root_p7_t5_s4_d1"
    },
    {
      "source": "db_root_p7_t5_s4",
      "target": "db_root_p7_t5_s4_d2"
    },
    {
      "source": "db_root_p7_t5",
      "target": "db_root_p7_t5_s5"
    },
    {
      "source": "db_root_p7_t5_s5",
      "target": "db_root_p7_t5_s5_d1"
    },
    {
      "source": "db_root_p7_t5_s5",
      "target": "db_root_p7_t5_s5_d2"
    },
    {
      "source": "db_root_p7",
      "target": "db_root_p7_t6"
    },
    {
      "source": "db_root_p7_t6",
      "target": "db_root_p7_t6_s1"
    },
    {
      "source": "db_root_p7_t6_s1",
      "target": "db_root_p7_t6_s1_d1"
    },
    {
      "source": "db_root_p7_t6_s1",
      "target": "db_root_p7_t6_s1_d2"
    },
    {
      "source": "db_root_p7_t6",
      "target": "db_root_p7_t6_s2"
    },
    {
      "source": "db_root_p7_t6_s2",
      "target": "db_root_p7_t6_s2_d1"
    },
    {
      "source": "db_root_p7_t6_s2",
      "target": "db_root_p7_t6_s2_d2"
    },
    {
      "source": "db_root_p7_t6",
      "target": "db_root_p7_t6_s3"
    },
    {
      "source": "db_root_p7_t6_s3",
      "target": "db_root_p7_t6_s3_d1"
    },
    {
      "source": "db_root_p7_t6_s3",
      "target": "db_root_p7_t6_s3_d2"
    },
    {
      "source": "db_root_p7_t6",
      "target": "db_root_p7_t6_s4"
    },
    {
      "source": "db_root_p7_t6_s4",
      "target": "db_root_p7_t6_s4_d1"
    },
    {
      "source": "db_root_p7_t6_s4",
      "target": "db_root_p7_t6_s4_d2"
    },
    {
      "source": "db_root_p7_t6",
      "target": "db_root_p7_t6_s5"
    },
    {
      "source": "db_root_p7_t6_s5",
      "target": "db_root_p7_t6_s5_d1"
    },
    {
      "source": "db_root_p7_t6_s5",
      "target": "db_root_p7_t6_s5_d2"
    },
    {
      "source": "db_root",
      "target": "db_root_p8"
    },
    {
      "source": "db_root_p8",
      "target": "db_root_p8_t1"
    },
    {
      "source": "db_root_p8_t1",
      "target": "db_root_p8_t1_s1"
    },
    {
      "source": "db_root_p8_t1_s1",
      "target": "db_root_p8_t1_s1_d1"
    },
    {
      "source": "db_root_p8_t1_s1",
      "target": "db_root_p8_t1_s1_d2"
    },
    {
      "source": "db_root_p8_t1",
      "target": "db_root_p8_t1_s2"
    },
    {
      "source": "db_root_p8_t1_s2",
      "target": "db_root_p8_t1_s2_d1"
    },
    {
      "source": "db_root_p8_t1_s2",
      "target": "db_root_p8_t1_s2_d2"
    },
    {
      "source": "db_root_p8_t1",
      "target": "db_root_p8_t1_s3"
    },
    {
      "source": "db_root_p8_t1_s3",
      "target": "db_root_p8_t1_s3_d1"
    },
    {
      "source": "db_root_p8_t1_s3",
      "target": "db_root_p8_t1_s3_d2"
    },
    {
      "source": "db_root_p8_t1",
      "target": "db_root_p8_t1_s4"
    },
    {
      "source": "db_root_p8_t1_s4",
      "target": "db_root_p8_t1_s4_d1"
    },
    {
      "source": "db_root_p8_t1_s4",
      "target": "db_root_p8_t1_s4_d2"
    },
    {
      "source": "db_root_p8_t1",
      "target": "db_root_p8_t1_s5"
    },
    {
      "source": "db_root_p8_t1_s5",
      "target": "db_root_p8_t1_s5_d1"
    },
    {
      "source": "db_root_p8_t1_s5",
      "target": "db_root_p8_t1_s5_d2"
    },
    {
      "source": "db_root_p8",
      "target": "db_root_p8_t2"
    },
    {
      "source": "db_root_p8_t2",
      "target": "db_root_p8_t2_s1"
    },
    {
      "source": "db_root_p8_t2_s1",
      "target": "db_root_p8_t2_s1_d1"
    },
    {
      "source": "db_root_p8_t2_s1",
      "target": "db_root_p8_t2_s1_d2"
    },
    {
      "source": "db_root_p8_t2",
      "target": "db_root_p8_t2_s2"
    },
    {
      "source": "db_root_p8_t2_s2",
      "target": "db_root_p8_t2_s2_d1"
    },
    {
      "source": "db_root_p8_t2_s2",
      "target": "db_root_p8_t2_s2_d2"
    },
    {
      "source": "db_root_p8_t2",
      "target": "db_root_p8_t2_s3"
    },
    {
      "source": "db_root_p8_t2_s3",
      "target": "db_root_p8_t2_s3_d1"
    },
    {
      "source": "db_root_p8_t2_s3",
      "target": "db_root_p8_t2_s3_d2"
    },
    {
      "source": "db_root_p8_t2",
      "target": "db_root_p8_t2_s4"
    },
    {
      "source": "db_root_p8_t2_s4",
      "target": "db_root_p8_t2_s4_d1"
    },
    {
      "source": "db_root_p8_t2_s4",
      "target": "db_root_p8_t2_s4_d2"
    },
    {
      "source": "db_root_p8_t2",
      "target": "db_root_p8_t2_s5"
    },
    {
      "source": "db_root_p8_t2_s5",
      "target": "db_root_p8_t2_s5_d1"
    },
    {
      "source": "db_root_p8_t2_s5",
      "target": "db_root_p8_t2_s5_d2"
    },
    {
      "source": "db_root_p8",
      "target": "db_root_p8_t3"
    },
    {
      "source": "db_root_p8_t3",
      "target": "db_root_p8_t3_s1"
    },
    {
      "source": "db_root_p8_t3_s1",
      "target": "db_root_p8_t3_s1_d1"
    },
    {
      "source": "db_root_p8_t3_s1",
      "target": "db_root_p8_t3_s1_d2"
    },
    {
      "source": "db_root_p8_t3",
      "target": "db_root_p8_t3_s2"
    },
    {
      "source": "db_root_p8_t3_s2",
      "target": "db_root_p8_t3_s2_d1"
    },
    {
      "source": "db_root_p8_t3_s2",
      "target": "db_root_p8_t3_s2_d2"
    },
    {
      "source": "db_root_p8_t3",
      "target": "db_root_p8_t3_s3"
    },
    {
      "source": "db_root_p8_t3_s3",
      "target": "db_root_p8_t3_s3_d1"
    },
    {
      "source": "db_root_p8_t3_s3",
      "target": "db_root_p8_t3_s3_d2"
    },
    {
      "source": "db_root_p8_t3",
      "target": "db_root_p8_t3_s4"
    },
    {
      "source": "db_root_p8_t3_s4",
      "target": "db_root_p8_t3_s4_d1"
    },
    {
      "source": "db_root_p8_t3_s4",
      "target": "db_root_p8_t3_s4_d2"
    },
    {
      "source": "db_root_p8_t3",
      "target": "db_root_p8_t3_s5"
    },
    {
      "source": "db_root_p8_t3_s5",
      "target": "db_root_p8_t3_s5_d1"
    },
    {
      "source": "db_root_p8_t3_s5",
      "target": "db_root_p8_t3_s5_d2"
    },
    {
      "source": "db_root_p8",
      "target": "db_root_p8_t4"
    },
    {
      "source": "db_root_p8_t4",
      "target": "db_root_p8_t4_s1"
    },
    {
      "source": "db_root_p8_t4_s1",
      "target": "db_root_p8_t4_s1_d1"
    },
    {
      "source": "db_root_p8_t4_s1",
      "target": "db_root_p8_t4_s1_d2"
    },
    {
      "source": "db_root_p8_t4",
      "target": "db_root_p8_t4_s2"
    },
    {
      "source": "db_root_p8_t4_s2",
      "target": "db_root_p8_t4_s2_d1"
    },
    {
      "source": "db_root_p8_t4_s2",
      "target": "db_root_p8_t4_s2_d2"
    },
    {
      "source": "db_root_p8_t4",
      "target": "db_root_p8_t4_s3"
    },
    {
      "source": "db_root_p8_t4_s3",
      "target": "db_root_p8_t4_s3_d1"
    },
    {
      "source": "db_root_p8_t4_s3",
      "target": "db_root_p8_t4_s3_d2"
    },
    {
      "source": "db_root_p8_t4",
      "target": "db_root_p8_t4_s4"
    },
    {
      "source": "db_root_p8_t4_s4",
      "target": "db_root_p8_t4_s4_d1"
    },
    {
      "source": "db_root_p8_t4_s4",
      "target": "db_root_p8_t4_s4_d2"
    },
    {
      "source": "db_root_p8_t4",
      "target": "db_root_p8_t4_s5"
    },
    {
      "source": "db_root_p8_t4_s5",
      "target": "db_root_p8_t4_s5_d1"
    },
    {
      "source": "db_root_p8_t4_s5",
      "target": "db_root_p8_t4_s5_d2"
    },
    {
      "source": "db_root_p8",
      "target": "db_root_p8_t5"
    },
    {
      "source": "db_root_p8_t5",
      "target": "db_root_p8_t5_s1"
    },
    {
      "source": "db_root_p8_t5_s1",
      "target": "db_root_p8_t5_s1_d1"
    },
    {
      "source": "db_root_p8_t5_s1",
      "target": "db_root_p8_t5_s1_d2"
    },
    {
      "source": "db_root_p8_t5",
      "target": "db_root_p8_t5_s2"
    },
    {
      "source": "db_root_p8_t5_s2",
      "target": "db_root_p8_t5_s2_d1"
    },
    {
      "source": "db_root_p8_t5_s2",
      "target": "db_root_p8_t5_s2_d2"
    },
    {
      "source": "db_root_p8_t5",
      "target": "db_root_p8_t5_s3"
    },
    {
      "source": "db_root_p8_t5_s3",
      "target": "db_root_p8_t5_s3_d1"
    },
    {
      "source": "db_root_p8_t5_s3",
      "target": "db_root_p8_t5_s3_d2"
    },
    {
      "source": "db_root_p8_t5",
      "target": "db_root_p8_t5_s4"
    },
    {
      "source": "db_root_p8_t5_s4",
      "target": "db_root_p8_t5_s4_d1"
    },
    {
      "source": "db_root_p8_t5_s4",
      "target": "db_root_p8_t5_s4_d2"
    },
    {
      "source": "db_root_p8_t5",
      "target": "db_root_p8_t5_s5"
    },
    {
      "source": "db_root_p8_t5_s5",
      "target": "db_root_p8_t5_s5_d1"
    },
    {
      "source": "db_root_p8_t5_s5",
      "target": "db_root_p8_t5_s5_d2"
    },
    {
      "source": "db_root_p8",
      "target": "db_root_p8_t6"
    },
    {
      "source": "db_root_p8_t6",
      "target": "db_root_p8_t6_s1"
    },
    {
      "source": "db_root_p8_t6_s1",
      "target": "db_root_p8_t6_s1_d1"
    },
    {
      "source": "db_root_p8_t6_s1",
      "target": "db_root_p8_t6_s1_d2"
    },
    {
      "source": "db_root_p8_t6",
      "target": "db_root_p8_t6_s2"
    },
    {
      "source": "db_root_p8_t6_s2",
      "target": "db_root_p8_t6_s2_d1"
    },
    {
      "source": "db_root_p8_t6_s2",
      "target": "db_root_p8_t6_s2_d2"
    },
    {
      "source": "db_root_p8_t6",
      "target": "db_root_p8_t6_s3"
    },
    {
      "source": "db_root_p8_t6_s3",
      "target": "db_root_p8_t6_s3_d1"
    },
    {
      "source": "db_root_p8_t6_s3",
      "target": "db_root_p8_t6_s3_d2"
    },
    {
      "source": "db_root_p8_t6",
      "target": "db_root_p8_t6_s4"
    },
    {
      "source": "db_root_p8_t6_s4",
      "target": "db_root_p8_t6_s4_d1"
    },
    {
      "source": "db_root_p8_t6_s4",
      "target": "db_root_p8_t6_s4_d2"
    },
    {
      "source": "db_root_p8_t6",
      "target": "db_root_p8_t6_s5"
    },
    {
      "source": "db_root_p8_t6_s5",
      "target": "db_root_p8_t6_s5_d1"
    },
    {
      "source": "db_root_p8_t6_s5",
      "target": "db_root_p8_t6_s5_d2"
    }
  ]
};
