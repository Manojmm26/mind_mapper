import { MindMapData } from "../../services/llmService";

export const FINTECH_SYSTEMS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "fintech_root",
      "label": "Fintech & High-Frequency Trading Systems",
      "description": "Rigorous first-principles blueprint of low-latency order matching engines, kernel bypass networking, double-entry accounting ledgers, payment rails, risk engines, AML/fraud systems, and DeFi AMM math.",
      "type": "topic"
    },
    {
      "id": "fintech_root_p1",
      "label": "Order Matching Engine Architecture",
      "description": "Ultra-low-latency deterministic matching core algorithms, order book queue data structures, and binary market data feeds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1",
      "label": "Price-Time Priority Order Books (L1 / L2 / L3)",
      "description": "Structuring bid and ask order queues ordered by price preference and submission timestamp.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s1",
      "label": "Level 1 (Top of Book) Quotes",
      "description": "Publishing current Best Bid and Best Offer (BBO) price and quantity metrics.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s1_d1",
      "label": "National Best Bid and Offer (NBBO)",
      "description": "Aggregating highest bid and lowest ask across all registered exchanges.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s1_d2",
      "label": "Spread Calculation (Ask_min - Bid_max)",
      "description": "Measuring market liquidity via bid-ask price differentials.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s2",
      "label": "Level 2 (Market Depth) Aggregated Queues",
      "description": "Aggregating total order volumes across discrete price levels.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s2_d1",
      "label": "Fixed Price Ladder Array Indexing",
      "description": "Indexing price levels in fixed arrays for O(1) depth updates.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s2_d2",
      "label": "Depth of Market (DOM) Visualization",
      "description": "Streaming top 10-20 price levels to trading terminals.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s3",
      "label": "Level 3 (Order-by-Order) Queue Trees",
      "description": "Maintaining individual order objects in doubly-linked lists at each price level.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s3_d1",
      "label": "Doubly-Linked List Time Priority",
      "description": "Appending new orders to the tail of price level queues to enforce FIFO execution.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s3_d2",
      "label": "O(1) Order Cancellation via Hash Map",
      "description": "Looking up order pointers in hash tables to remove canceled orders instantly.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s4",
      "label": "Red-Black Tree vs B-Tree Price Level Indexing",
      "description": "Balancing price tree structures for fast insertion and minimum/maximum lookups.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s4_d1",
      "label": "Red-Black Tree O(log P) Search",
      "description": "Searching active price levels in balanced binary search trees.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s4_d2",
      "label": "Cache-Friendly Array Price Ladders",
      "description": "Pre-allocating contiguous memory price arrays for sub-microsecond traversal.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s5",
      "label": "Order Book State Snapshot & Delta Updates",
      "description": "Broadcasting full book snapshots alongside incremental add, modify, and delete deltas.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s5_d1",
      "label": "Sequence Numbered Delta Streams",
      "description": "Numbering every book modification to allow clients to detect dropped packets.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t1_s5_d2",
      "label": "Snapshot Synchronization Recovery",
      "description": "Downloading full snapshots when client sequence gaps are detected.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2",
      "label": "Order Types & Execution Semantics",
      "description": "Enforcing complex trading order parameters during matching loop passes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s1",
      "label": "Limit vs Market Order Execution",
      "description": "Executing resting price-bounded orders vs instant liquidity-taking orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s1_d1",
      "label": "Limit Order Resting Mechanics",
      "description": "Adding unmatched limit order remainders to order book queues.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s1_d2",
      "label": "Market Order Sweeping Execution",
      "description": "Sweeping through order book price levels until filled or quantity exhausted.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s2",
      "label": "Fill-or-Kill (FOK) & Immediate-or-Cancel (IOC)",
      "description": "Time-in-force order constraints dictating execution completion rules.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s2_d1",
      "label": "FOK All-or-Nothing Constraint",
      "description": "Canceling entire order if full order quantity cannot be matched instantly.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s2_d2",
      "label": "IOC Partial Fill Cancellation",
      "description": "Filling available quantity immediately and canceling un-matched remainders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s3",
      "label": "Iceberg & Hidden Orders",
      "description": "Displaying small visible peak quantities while hiding large total order volumes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s3_d1",
      "label": "Automated Peak Replenishment",
      "description": "Restocking visible quantity from hidden reserves when peaks are filled.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s3_d2",
      "label": "Time Priority Loss on Replenishment",
      "description": "Assigning new timestamp priority to replenished visible peaks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s4",
      "label": "Stop-Loss & Stop-Limit Triggers",
      "description": "Injecting market or limit orders when market prices cross trigger thresholds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s4_d1",
      "label": "Last Sale Price Monitoring",
      "description": "Evaluating trade execution prices against registered stop triggers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s4_d2",
      "label": "Trigger-to-Order Conversion",
      "description": "Converting stop triggers into active book orders upon condition match.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s5",
      "label": "Post-Only Order Flags",
      "description": "Guaranteeing orders act exclusively as liquidity makers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s5_d1",
      "label": "Immediate Cancellation on Match",
      "description": "Canceling orders automatically if submission would cross the spread and take liquidity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t2_s5_d2",
      "label": "Maker Fee Rebate Optimization",
      "description": "Ensuring traders capture exchange maker fee rebates.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3",
      "label": "Lock-Free Ring Buffer (LMAX Disruptor Pattern)",
      "description": "Ultra-high-throughput inter-thread messaging framework avoiding lock contention.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s1",
      "label": "Pre-Allocated Circular Array Storage",
      "description": "Storing event objects in pre-allocated power-of-two length array rings.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s1_d1",
      "label": "Power-of-Two Bitwise Modulo Indexing",
      "description": "Computing array indices using fast bitwise AND: index = sequence & (capacity - 1).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s1_d2",
      "label": "Zero Garbage Collection Allocation",
      "description": "Reusing event objects in-place to prevent JVM allocation pauses.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s2",
      "label": "Atomic Memory Sequence Counters",
      "description": "Managing ring write and read positions using C++ std::atomic or Java Volatile longs.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s2_d1",
      "label": "Single-Producer Sequence Claims",
      "description": "Claiming next array slots using simple atomic sequence increments.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s2_d2",
      "label": "Multi-Producer CAS (Compare-And-Swap)",
      "description": "Using CAS loops to allocate sequence slots safely across parallel threads.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s3",
      "label": "Cache Line Padding (False Sharing Protection)",
      "description": "Padding sequence variables to prevent CPU L1/L2 cache line invalidations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s3_d1",
      "label": "64-Byte Cache Line Alignment",
      "description": "Padding variables with 56 bytes of dummy long fields to isolate variables.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s3_d2",
      "label": "Eliminating Inter-Core Cache Invalidation",
      "description": "Preventing CPU core cache stalls caused by false sharing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s4",
      "label": "Batch Consumer Sequence Processing",
      "description": "Processing multiple available ring buffer events in single consumer passes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s4_d1",
      "label": "Available Sequence Polling",
      "description": "Reading up to maximum published sequence positions in single loop passes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s4_d2",
      "label": "Sub-Microsecond Latency Throughput",
      "description": "Achieving over 6 million events per second per core at sub-microsecond latencies.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s5",
      "label": "Wait Strategy Selection (BusySpin vs Yield)",
      "description": "Selecting thread wait strategies based on CPU core availability.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s5_d1",
      "label": "BusySpinWaitStrategy for Ultra Latency",
      "description": "Spinning CPU cores continuously in tight loops for minimum response latency.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t3_s5_d2",
      "label": "YieldingWaitStrategy for Balanced CPU Usage",
      "description": "Yielding CPU execution to prevent 100% core utilization on shared servers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4",
      "label": "Binary Market Data Protocols (ITCH / OUCH)",
      "description": "High-speed binary protocols used by major financial exchanges for order entry and market data.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s1",
      "label": "Nasdaq ITCH 5.0 Binary Format",
      "description": "Direct data feed protocol delivering order book events in fixed-length binary payloads.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s1_d1",
      "label": "Fixed-Length Binary Struct Encoding",
      "description": "Packing event byte fields without string delimiters or tags.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s1_d2",
      "label": "Add Order (A), Executed (E), Cancel (C) Messages",
      "description": "Parsing 36-byte Add Order and 31-byte Order Executed message structures.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s2",
      "label": "Nasdaq OUCH Order Entry Protocol",
      "description": "Lightweight binary protocol for submitting, modifying, and canceling orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s2_d1",
      "label": "Enter Order (O) & System Ack (A) Payloads",
      "description": "Sending 49-byte Enter Order structs and receiving sub-microsecond ACK bytes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s2_d2",
      "label": "Client Order ID (ClOrdID) Tracking",
      "description": "Tracking order lifecycles using 14-byte alphanumeric client tokens.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s3",
      "label": "UDP Multicast Market Data Distribution",
      "description": "Streaming binary feeds across network switches using UDP multicast.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s3_d1",
      "label": "A/B Dual Feed Redundancy",
      "description": "Streaming identical data across two independent network channels (Feed A and Feed B).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s3_d2",
      "label": "Packet Loss Gap Recovery Protocols",
      "description": "Recovering dropped UDP packets via historical TCP replay servers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s4",
      "label": "SBE (Simple Binary Encoding) Protocol",
      "description": "Low-latency binary encoding format used in FIX Trading Community specs.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s4_d1",
      "label": "Direct Memory Buffer Alignment",
      "description": "Encoding fields to align directly with CPU memory structures for zero-copy parsing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s4_d2",
      "label": "Fixed-Header & Variable-Length Extensions",
      "description": "Parsing fixed structural headers before reading optional repeating groups.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s5",
      "label": "FIX Protocol (Financial Information eXchange)",
      "description": "Standardized tag-value text protocol used for institutional trade routing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s5_d1",
      "label": "Tag-Value Pair Formatting (8=FIX.4.2|9=...|35=D|...)",
      "description": "Parsing ASCII tag-value strings delimited by SOH (0x01) characters.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t4_s5_d2",
      "label": "FIX Engine Session Management",
      "description": "Managing sequence numbers, logon handshakes, and heartbeats across persistent TCP sockets.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5",
      "label": "Order Matching Engine Architecture Topic 5",
      "description": "Detailed first-principles mechanics for Order Matching Engine Architecture topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s1",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s1_d1",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s1_d2",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s2",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s2_d1",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s2_d2",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s3",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s3_d1",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s3_d2",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s4",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s4_d1",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s4_d2",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s5",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s5_d1",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t5_s5_d2",
      "label": "Order Matching Engine Architecture Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6",
      "label": "Order Matching Engine Architecture Topic 6",
      "description": "Detailed first-principles mechanics for Order Matching Engine Architecture topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s1",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s1_d1",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s1_d2",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s2",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s2_d1",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s2_d2",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s3",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s3_d1",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s3_d2",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s4",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s4_d1",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s4_d2",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s5",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Order Matching Engine Architecture Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s5_d1",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p1_t6_s5_d2",
      "label": "Order Matching Engine Architecture Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Order Matching Engine Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2",
      "label": "Low-Latency Network Stack & Kernel Bypass",
      "description": "Hardware, operating system, and networking optimizations for eliminating sub-microsecond latency bottlenecks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1",
      "label": "Kernel Bypass Networking (DPDK & OpenOnload)",
      "description": "Bypassing OS network stacks to process Ethernet packets directly in user-space application memory.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s1",
      "label": "Data Plane Development Kit (DPDK)",
      "description": "Set of libraries and network interface drivers for high-speed packet processing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s1_d1",
      "label": "Poll Mode Drivers (PMD)",
      "description": "Polling NIC ring buffers continuously to eliminate interrupt overhead.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s1_d2",
      "label": "HugeTLB Page Memory Allocation",
      "description": "Allocating 2MB or 1GB huge pages to prevent TLB cache misses during packet reads.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s2",
      "label": "Solarflare OpenOnload Architecture",
      "description": "User-space network stack accelerating standard POSIX socket applications.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s2_d1",
      "label": "Accelerated socket() API Interception",
      "description": "Intercepting socket read/write calls to bypass Linux kernel network code.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s2_d2",
      "label": "Zero Code Modification Deployment",
      "description": "Accelerating standard C/C++ network applications without code changes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s3",
      "label": "Direct Memory Access (DMA) Packet Transfers",
      "description": "Transferring network frames directly from NIC hardware to application RAM.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s3_d1",
      "label": "PCIe Bus DMA Transfer Passes",
      "description": "Streaming packets directly into ring buffers without CPU intervention.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s3_d2",
      "label": "Descriptor Ring Buffer Management",
      "description": "Managing head and tail pointers on NIC RX/TX descriptor rings.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s4",
      "label": "Linux Socket Overhead Elimination",
      "description": "Eliminating context switches, sk_buff allocations, and copy passes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s4_d1",
      "label": "sk_buff Allocation Avoidance",
      "description": "Avoiding heavy kernel network buffer allocations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s4_d2",
      "label": "Zero System Call Context Switching",
      "description": "Eliminating sys_enter / sys_exit overhead during packet processing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s5",
      "label": "Hardware NIC Queue Steering (RSS)",
      "description": "Distributing incoming network packets across CPU cores using Receive Side Scaling.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s5_d1",
      "label": "Toeplitz Hash Tuple Computation",
      "description": "Hashing 4-tuple IP/port fields to route flows to dedicated CPU core queues.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t1_s5_d2",
      "label": "Core Locality & Cache Retention",
      "description": "Ensuring packet processing stays localized to dedicated CPU cores.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2",
      "label": "Precision Time Protocol (IEEE 1588 PTP)",
      "description": "Sub-microsecond time synchronization protocol for financial audit trail compliance.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s1",
      "label": "Hardware Timestamping on NICs",
      "description": "Timestamping incoming network packets at the physical PHY layer upon arrival.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s1_d1",
      "label": "PHY Layer Packet Arrival Marking",
      "description": "Recording packet timestamps before network switch processing delays.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s1_d2",
      "label": "Sub-100-Nanosecond Accuracy Bounds",
      "description": "Achieving nanosecond-level clock synchronization across servers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s2",
      "label": "PTP Master-Slave Clock Hierarchy",
      "description": "Synchronizing system clocks against atomic and GPS-disciplined Grandmaster Clocks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s2_d1",
      "label": "Sync & Delay_Req Message Exchange",
      "description": "Exchanging timestamps to calculate network propagation delay and offset.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s2_d2",
      "label": "Clock Drift & Frequency Adjustment",
      "description": "Adjusting system clock frequency continuously to prevent time jumps.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s3",
      "label": "MiFID II Regulatory Audit Requirements",
      "description": "European regulatory requirements mandating precise trade timestamping.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s3_d1",
      "label": "100-Microsecond Maximum Skew Bound",
      "description": "Mandating maximum 100-microsecond divergence from UTC time.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s3_d2",
      "label": "1-Microsecond Resolution Requirements",
      "description": "Requiring 1-microsecond timestamp granularity for high-frequency algorithmic orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s4",
      "label": "PTP vs NTP Protocol Comparison",
      "description": "Evaluating synchronization accuracy differences between PTP and Network Time Protocol.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s4_d1",
      "label": "NTP Millisecond Accuracy Limits",
      "description": "NTP providing 1-10 millisecond accuracy, insufficient for HFT systems.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s4_d2",
      "label": "Hardware vs Software Timestamping",
      "description": "PTP leveraging hardware PHY support to eliminate software stack jitter.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s5",
      "label": "Grandmaster GPS Receiver Failover",
      "description": "Maintaining clock accuracy during GPS signal outages or antenna failures.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s5_d1",
      "label": "Rubidium Atomic Clock Holdover",
      "description": "Using internal atomic clocks to maintain sub-microsecond stability during GPS loss.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t2_s5_d2",
      "label": "Secondary PTP Grandmaster Switching",
      "description": "Failing over to backup Grandmaster clocks automatically.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3",
      "label": "CPU Pinning, NUMA & Cache Optimization",
      "description": "Hardware-level server configuration to maximize L1/L2 cache hits and eliminate latency jitter.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s1",
      "label": "Thread Affinity & Core Pinning (pthread_setaffinity_np)",
      "description": "Binding matching engine threads to dedicated isolated CPU cores.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s1_d1",
      "label": "isolcpus Linux Kernel Parameters",
      "description": "Reserving specific CPU cores at boot to prevent OS scheduler task placement.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s1_d2",
      "label": "Zero Thread Context Switching",
      "description": "Eliminating thread context switch stalls on trading threads.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s2",
      "label": "NUMA Node Memory Locality",
      "description": "Allocating application memory on RAM modules directly attached to the local CPU socket.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s2_d1",
      "label": "numactl --membind Local Allocation",
      "description": "Restricting allocations to local NUMA memory to avoid cross-socket interconnect latency.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s2_d2",
      "label": "UPI / QPI Interconnect Latency Penalty",
      "description": "Avoiding 30-50ns latency penalties incurred when accessing remote socket RAM.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s3",
      "label": "CPU Power C-States & C-State Pinning",
      "description": "Disabling CPU power-saving sleep states to ensure cores stay at maximum clock frequency.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s3_d1",
      "label": "intel_idle.max_cstate=0 Setup",
      "description": "Disabling deep CPU sleep states (C1-C6) to prevent wake-up latency delays.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s3_d2",
      "label": "Performance Governor Configuration",
      "description": "Locking CPU core frequencies to maximum turbo clock rates.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s4",
      "label": "L1/L2 Cache Warming Techniques",
      "description": "Pre-executing code paths with dummy data to ensure instructions and data stay in L1 cache.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s4_d1",
      "label": "Dummy Order Execution Passes",
      "description": "Passing synthetic dummy orders through matching functions during quiet market periods.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s4_d2",
      "label": "Instruction Cache (i-Cache) Retention",
      "description": "Keeping hot execution instructions loaded in 32KB L1 instruction caches.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s5",
      "label": "Branch Predictor Optimization (likely / unlikely)",
      "description": "Guiding compiler branch prediction to generate optimal machine code layouts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s5_d1",
      "label": "__builtin_expect Compiler Hints",
      "description": "Marking hot code paths to ensure fall-through assembly instruction ordering.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t3_s5_d2",
      "label": "Branch Mis-prediction Penalty (15-20 cycles)",
      "description": "Avoiding CPU pipeline flushes caused by mis-predicted branches.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4",
      "label": "FPGA Hardware Acceleration & Colocation",
      "description": "Deploying Field Programmable Gate Arrays and server infrastructure directly inside exchange data centers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s1",
      "label": "FPGA Sub-Microsecond Matching Cores",
      "description": "Implementing order parsing, risk checks, and matching logic directly in silicon hardware.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s1_d1",
      "label": "Verilog / VHDL Gate Hardware Logic",
      "description": "Executing logic in custom digital circuits in single-digit nanoseconds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s1_d2",
      "label": "Tick-to-Trade Nanosecond Latency",
      "description": "Achieving sub-100-nanosecond tick-to-trade execution latencies.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s2",
      "label": "Data Center Colocation Architecture",
      "description": "Positioning trading servers in identical rack locations as exchange matching engines.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s2_d1",
      "label": "Equinix NY4 (Secaucus) & LD4 (Slough)",
      "description": "Hosting servers in major global financial data center facilities.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s2_d2",
      "label": "Equal-Length Fiber Cable Length Enforcement",
      "description": "Enforcing identical 300-meter fiber spool lengths across all tenant racks for fairness.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s3",
      "label": "Microwave vs Fiber Transmission Networks",
      "description": "Utilizing line-of-sight microwave towers for faster-than-fiber cross-exchange communication.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s3_d1",
      "label": "Speed of Light in Vacuum vs Silica",
      "description": "Microwave signals traveling at c in air (~300,000 km/s) vs c/1.5 in glass fiber (~200,000 km/s).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s3_d2",
      "label": "Chicago to New York Microwave Route",
      "description": "Reducing Chicago-to-New-York round-trip latencies from 14ms (fiber) down to 8.5ms (microwave).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s4",
      "label": "PCIe DMA Interface Acceleration",
      "description": "Transferring data between host CPU RAM and FPGA boards over high-speed PCIe buses.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s4_d1",
      "label": "PCIe Gen 5/6 Bus Bandwidth Bounds",
      "description": "Streaming data at 64 GB/s over PCIe Gen 5 x16 slot interfaces.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s4_d2",
      "label": "Zero CPU Interrupt Offloading",
      "description": "Using memory-mapped I/O (MMIO) to control FPGA operations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s5",
      "label": "Hardware Order Book State Storage",
      "description": "Storing order book state in ultra-fast UltraRAM and Block RAM (BRAM) on-chip FPGA memory.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s5_d1",
      "label": "BRAM Single-Cycle Read Access",
      "description": "Accessing order book price levels in single 300MHz FPGA clock cycles.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t4_s5_d2",
      "label": "Fixed-Depth Hardware Order Queues",
      "description": "Managing fixed-size order queues directly in hardware registers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5",
      "description": "Detailed first-principles mechanics for Low-Latency Network Stack & Kernel Bypass topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s1_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s1_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s2_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s2_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s3",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s3_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s3_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s4",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s4_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s4_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s5",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s5_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t5_s5_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6",
      "description": "Detailed first-principles mechanics for Low-Latency Network Stack & Kernel Bypass topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s1_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s1_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s2_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s2_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s3",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s3_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s3_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s4",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s4_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s4_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s5",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Low-Latency Network Stack & Kernel Bypass Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s5_d1",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p2_t6_s5_d2",
      "label": "Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Low-Latency Network Stack & Kernel Bypass Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3",
      "label": "Double-Entry Accounting & Immutable Ledger",
      "description": "ACID-compliant double-entry financial ledgers, balance holds, multi-currency conversions, and auditability.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1",
      "label": "Double-Entry Bookkeeping Principles",
      "description": "Fundamental accounting model guaranteeing that every transaction produces balanced debit and credit entries.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s1",
      "label": "Accounting Equation (Assets = Liabilities + Equity)",
      "description": "Core invariant maintaining financial balance across all ledger accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s1_d1",
      "label": "Asset & Liability Account Types",
      "description": "Classifying accounts into Assets, Liabilities, Equity, Revenue, and Expense.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s1_d2",
      "label": "Zero-Sum Transaction Invariant (Sum(Debits) = Sum(Credits))",
      "description": "Enforcing strict equality between total debit amounts and total credit amounts for every entry.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s2",
      "label": "Debit and Credit Directional Rules",
      "description": "Increasing or decreasing account balances based on account classification types.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s2_d1",
      "label": "Asset Accounts (Debit Increase, Credit Decrease)",
      "description": "Recording incoming funds as debits to asset accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s2_d2",
      "label": "Liability Accounts (Credit Increase, Debit Decrease)",
      "description": "Recording customer balances as credits to liability accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s3",
      "label": "Atomic Multi-Entry Journal Postings",
      "description": "Executing multi-line journal postings within atomic database transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s3_d1",
      "label": "Atomic Post Transaction Bounds",
      "description": "Ensuring all journal lines commit together or roll back entirely.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s3_d2",
      "label": "Unbalanced Journal Post Rejection",
      "description": "Rejecting transactions if total debits do not equal total credits.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s4",
      "label": "Immutable Ledger Entries",
      "description": "Restricting ledger operations to append-only insertions, prohibiting UPDATE or DELETE commands.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s4_d1",
      "label": "Zero Database UPDATE / DELETE Operations",
      "description": "Preventing modification of existing journal entries to maintain audit integrity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s4_d2",
      "label": "Reversing Journal Postings",
      "description": "Correcting errors by posting new equal-and-opposite reversing journal entries.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s5",
      "label": "Chart of Accounts (COA) Structure",
      "description": "Hierarchical tree organizing all financial accounts in an enterprise.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s5_d1",
      "label": "Segmented Account Numbering (1000-4000)",
      "description": "Structuring account codes by category (1000 Assets, 2000 Liabilities).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t1_s5_d2",
      "label": "Parent-Child Account Aggregation",
      "description": "Aggregating sub-account balances into parent summary accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2",
      "label": "Ledger Idempotency & ACID Transactions",
      "description": "Guaranteeing transaction processing safety under network retries and concurrent operations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s1",
      "label": "Idempotency Key Protocol",
      "description": "Using client-provided unique tokens to prevent duplicate payment processing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s1_d1",
      "label": "Unique Idempotency Token Header",
      "description": "Extracting Idempotency-Key headers from API request payloads.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s1_d2",
      "label": "Atomic Lock & Response Caching",
      "description": "Saving completed transaction responses keyed by idempotency token.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s2",
      "label": "Account Balance Optimistic Locking",
      "description": "Managing concurrent account balance updates using version numbers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s2_d1",
      "label": "WHERE version = current_version UPDATE Checks",
      "description": "Verifying account version numbers during balance updates.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s2_d2",
      "label": "Retry Loops on Concurrent Collision",
      "description": "Retrying transaction operations when version collisions occur.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s3",
      "label": "Serializable Isolation Level Enforcement",
      "description": "Executing ledger transactions under strict serializable isolation to prevent race conditions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s3_d1",
      "label": "Phantom Read & Write Skew Prevention",
      "description": "Eliminating subtle race conditions in balance check and update sequences.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s3_d2",
      "label": "PostgreSQL SSI (Serializable Snapshot Isolation)",
      "description": "Utilizing SSI to detect concurrent transaction dependency cycles.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s4",
      "label": "High-Throughput Sharded Account Aggregation",
      "description": "Partitioning high-traffic system accounts to eliminate database lock contention.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s4_d1",
      "label": "Sub-Account Balance Splitting",
      "description": "Splitting system fee accounts into 100 sub-accounts to parallelize writes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s4_d2",
      "label": "Background Consolidated Rollups",
      "description": "Summing sub-account balances asynchronously for financial reporting.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s5",
      "label": "Out-of-Order Transaction Handling",
      "description": "Processing late-arriving financial entries correctly while preserving balance integrity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s5_d1",
      "label": "Value Date vs Posting Date Separation",
      "description": "Recording accounting value date separately from system posting date.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t2_s5_d2",
      "label": "Historical Balance Retro-Adjustments",
      "description": "Recalculating interest or charges when historical transactions are backdated.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3",
      "label": "Balance Holds & Pending Authorizations",
      "description": "Reserving funds for pending transactions before final settlement.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s1",
      "label": "Available vs Ledger (Posted) Balance",
      "description": "Separating total cleared funds from immediately usable funds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s1_d1",
      "label": "Available Balance Formula",
      "description": "Available = Ledger Balance - Pending Holds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s1_d2",
      "label": "Overdraft Prevention Checks",
      "description": "Verifying available balance exceeds transaction amount before approving requests.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s2",
      "label": "Hold Lifecycle (Create, Capture, Void, Expire)",
      "description": "State machine managing fund reservation lifecycles.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s2_d1",
      "label": "Authorization Hold Placement",
      "description": "Reserving funds when card authorizations are approved.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s2_d2",
      "label": "Capture & Void Settlement Execution",
      "description": "Converting holds to posted transactions on capture or releasing funds on void.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s3",
      "label": "Partial Capture & Hold Expiration",
      "description": "Handling transactions where final settlement amounts differ from authorized amounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s3_d1",
      "label": "Partial Capture Settlement",
      "description": "Capturing a portion of reserved funds and releasing remaining hold balances.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s3_d2",
      "label": "Automatic Hold Expiration Sweep",
      "description": "Releasing un-captured holds after configured time windows (e.g. 7 days).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s4",
      "label": "Multi-Hold Priority Queues",
      "description": "Managing multiple active holds on single user accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s4_d1",
      "label": "Hold Expiration Priority Tracking",
      "description": "Tracking active holds and evaluating available balance headroom.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s4_d2",
      "label": "Concurrent Authorization Protection",
      "description": "Locking balance state atomically during hold placement.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s5",
      "label": "Real-Time Balance Streaming & Webhooks",
      "description": "Emitting instant notifications when account balances change.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s5_d1",
      "label": "Event-Driven Balance Mutation Topics",
      "description": "Publishing balance updates to Kafka topics for notification services.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t3_s5_d2",
      "label": "Mobile App Push Notification Delivery",
      "description": "Delivering push alerts to customer devices upon transaction approval.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4",
      "label": "Multi-Currency & FX Exchange Architecture",
      "description": "Handling balances across global currencies with real-time foreign exchange conversions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s1",
      "label": "ISO 4217 Currency Code Standards",
      "description": "Standardized 3-letter alphabetic and 3-digit numeric currency identifiers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s1_d1",
      "label": "Minor Unit Precision (Decimals)",
      "description": "Tracking sub-unit precision (e.g. USD 2 decimals = cents, JPY 0 decimals).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s1_d2",
      "label": "BigInt Atomic Fixed-Point Storage",
      "description": "Storing balances as integer minor units (e.g. $10.50 stored as 1050) to prevent floating-point errors.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s2",
      "label": "Real-Time FX Rate Spot Feeds",
      "description": "Ingesting live foreign exchange rate streams from liquidity providers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s2_d1",
      "label": "Mid-Market Rate Calculation",
      "description": "Computing mid-market rate = (Bid + Ask) / 2 from incoming quote feeds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s2_d2",
      "label": "Spread & Markup Injection Rules",
      "description": "Applying percentage markups to FX rates prior to customer conversion.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s3",
      "label": "FX Revaluation & Realized/Unrealized Gain/Loss",
      "description": "Accounting for currency value fluctuations on foreign assets.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s3_d1",
      "label": "Unrealized Gain/Loss Revaluation",
      "description": "Re-evaluating foreign currency asset values against current spot rates at period end.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s3_d2",
      "label": "Realized Gain/Loss Booking on Conversion",
      "description": "Booking difference between original cost basis and conversion value into gain/loss accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s4",
      "label": "Dual-Currency Journal Entries",
      "description": "Recording transactions in both transaction currency and base reporting currency.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s4_d1",
      "label": "Transaction vs Base Amount Storage",
      "description": "Recording amount_txn, currency_txn, amount_base, currency_base, and fx_rate.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s4_d2",
      "label": "Balanced Multi-Currency Postings",
      "description": "Ensuring debits and credits balance in both local and base currencies.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s5",
      "label": "Position Account Balancing (FX Position Matrix)",
      "description": "Tracking net currency exposure across foreign exchange trades.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s5_d1",
      "label": "Net Open Position (NOP) Tracking",
      "description": "Monitoring long and short currency exposures to manage market risk.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t4_s5_d2",
      "label": "Automated Position Hedging Triggers",
      "description": "Executing wholesale FX trades to hedge accumulated retail currency exposure.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5",
      "description": "Detailed first-principles mechanics for Double-Entry Accounting & Immutable Ledger topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s1_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s1_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s2_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s2_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s3",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s3_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s3_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s4",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s4_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s4_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s5",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s5_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t5_s5_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6",
      "description": "Detailed first-principles mechanics for Double-Entry Accounting & Immutable Ledger topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s1_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s1_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s2_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s2_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s3",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s3_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s3_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s4",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s4_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s4_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s5",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Double-Entry Accounting & Immutable Ledger Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s5_d1",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p3_t6_s5_d2",
      "label": "Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Double-Entry Accounting & Immutable Ledger Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4",
      "label": "Payment Protocols & Clearing Networks",
      "description": "Integration architectures for card networks, instant ACH payment rails, and global SWIFT messaging.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1",
      "label": "ISO 20022 Financial Messaging Standard",
      "description": "Global XML/JSON messaging standard replacing legacy SWIFT MT text formats.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s1",
      "label": "Business Application Header (head.001)",
      "description": "Standardized header envelope routing ISO 20022 message payloads.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s1_d1",
      "label": "Fr (From) & To Identity Addressing",
      "description": "Encoding sender and receiver BIC (Bank Identifier Code) routing credentials.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s1_d2",
      "label": "BizMsgIdr & MsgDefIdr Specification",
      "description": "Specifying unique message identifiers and schema message definitions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s2",
      "label": "Pain, Pacs, and Camt Message Families",
      "description": "Core message categories covering payments, clearing, and cash management.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s2_d1",
      "label": "pacs.008 Customer Credit Transfer",
      "description": "Standard message format for interbank financial credit transfers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s2_d2",
      "label": "camt.053 Bank-to-Customer Statement",
      "description": "Electronic end-of-day bank statement message delivering detailed account activity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s3",
      "label": "Rich Structured Payment Metadata",
      "description": "Carrying extended remittance data alongside payment transfers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s3_d1",
      "label": "Structured Remittance Information (Strd)",
      "description": "Including invoice numbers, tax IDs, and trade data directly in payment messages.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s3_d2",
      "label": "End-to-End Identification (EndToEndId)",
      "description": "Preserving origin transaction IDs unchanged through all intermediate clearing banks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s4",
      "label": "XML Schema Validation (XSD Rules)",
      "description": "Validating message formatting against strict XML schema definitions before transmission.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s4_d1",
      "label": "Strict Field Format Enforcement",
      "description": "Validating character sets, string lengths, and decimal precisions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s4_d2",
      "label": "Automated Rejection on Schema Violations",
      "description": "Rejecting malformed payment files before processing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s5",
      "label": "Legacy MT to MX Translation Layers",
      "description": "Translating legacy SWIFT MT text messages to modern ISO 20022 MX XML messages.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s5_d1",
      "label": "MT103 to pacs.008 Mapping Rules",
      "description": "Mapping legacy MT103 fields to pacs.008 XML element structures.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t1_s5_d2",
      "label": "Truncation Risk Mitigation",
      "description": "Handling data truncation when fitting rich MX fields into legacy MT size limits.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2",
      "label": "Card Networks & ISO 8583 Protocol",
      "description": "Real-time transaction processing specs governing Visa, Mastercard, and American Express interactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s1",
      "label": "ISO 8583 Message Structure Anatomy",
      "description": "Bitmap-based binary format for financial transaction message exchanges.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s1_d1",
      "label": "MTI (Message Type Identifier) 4-Digit Code",
      "description": "Encoding message class (e.g. 0100 Auth Request, 0110 Auth Response, 0200 Financial Request).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s1_d2",
      "label": "Primary & Secondary Bitmaps",
      "description": "Using 64-bit or 128-bit bitmasks to signal presence of specific data fields.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s2",
      "label": "Dual-Message (Auth / Capture) Flow",
      "description": "Separating real-time credit authorization from end-of-day financial clearing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s2_d1",
      "label": "0100 Authorization Request (Sub-second)",
      "description": "Validating card credentials, CVV, and credit limits to approve transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s2_d2",
      "label": "0200 Capture / Presentment (Batch EOD)",
      "description": "Submitting final transaction files for interbank settlement.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s3",
      "label": "Single-Message (PIN Debit) Flow",
      "description": "Combined authorization and financial settlement in single real-time message passes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s3_d1",
      "label": "0200 Financial Transaction Request",
      "description": "Debiting customer bank accounts and posting settlement immediately.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s3_d2",
      "label": "ATM & PIN Debit Network Usage",
      "description": "Standard operating flow for PIN-entered debit card and ATM transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s4",
      "label": "EMV Chip & Contactless Cryptograms (ARQC / ARPC)",
      "description": "Dynamic cryptographic challenge-response authentication for physical card transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s4_d1",
      "label": "ARQC (Authorization Request Cryptogram)",
      "description": "Generating dynamic MAC cryptograms on chip cards using secret keys.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s4_d2",
      "label": "ARPC (Authorization Response Cryptogram) Validation",
      "description": "Validating issuer response cryptograms on cards to complete chip handshakes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s5",
      "label": "Tokenization (Network Tokens vs Gateway Tokens)",
      "description": "Replacing sensitive 16-digit Primary Account Numbers (PAN) with surrogate tokens.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s5_d1",
      "label": "DPAN (Device PAN) Token Replacement",
      "description": "Storing Apple Pay / Google Pay network tokens to prevent raw PAN exposure.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t2_s5_d2",
      "label": "Token Requestor Identifier (TRID)",
      "description": "Validating domain-bound tokens authorized only for specific merchants.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3",
      "label": "ACH, FedNow & Instant Payment Rails",
      "description": "Batch and real-time interbank clearing networks (ACH, FedNow, SEPA Instant, RTP).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s1",
      "label": "NACHA Batch File Format (ACH)",
      "description": "Fixed-width 94-character record files used for US batch bank transfers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s1_d1",
      "label": "File, Batch, and Detail Record Hierarchies",
      "description": "Structuring NACHA files with 1 (Header), 5 (Batch Header), 6 (Entry Detail), 8 (Batch Control), 9 (File Control).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s1_d2",
      "label": "SEC Codes (PPD, CCD, WEB, TEL)",
      "description": "Classifying payment types (PPD direct deposit, CCD corporate, WEB online consumer).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s2",
      "label": "Same-Day ACH Clearing Cycles",
      "description": "Multiple daily processing windows for clearing ACH credit and debit batches.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s2_d1",
      "label": "FedACH Processing Cutoff Windows",
      "description": "Submitting batches by morning, afternoon, or evening deadlines for same-day settlement.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s2_d2",
      "label": "ACH Return Codes (R01 Insufficient Funds, R03 No Account)",
      "description": "Processing standardized return codes received 1-2 days after batch submission.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s3",
      "label": "FedNow & Real-Time Payments (RTP)",
      "description": "24/7/365 instant interbank gross settlement rails operating on ISO 20022.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s3_d1",
      "label": "Sub-5-Second Immediate Settlement",
      "description": "Executing irrevocable interbank credit transfers with immediate funds availability.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s3_d2",
      "label": "Request for Payment (RfP) Flow",
      "description": "Messaging customers to request instant digital payment authorization.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s4",
      "label": "SEPA Instant Credit Transfer (SCT Inst)",
      "description": "European pan-instant payment scheme for euro transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s4_d1",
      "label": "10-Second Execution SLA",
      "description": "Mandating payment completion within 10 seconds across Eurozone banks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s4_d2",
      "label": "TARGET Instant Payment Settlement (TIPS)",
      "description": "Settling transactions in central bank money on Eurosystem infrastructure.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s5",
      "label": "Interbank Settlement & Liquidity Management",
      "description": "Managing central bank reserve accounts to support continuous instant payments.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s5_d1",
      "label": "Federal Reserve Bank Reserve Accounts",
      "description": "Settling gross payments directly against central bank master accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t3_s5_d2",
      "label": "Automated Liquidity Management Buffers",
      "description": "Monitoring reserve balances to prevent payment rejections due to insufficient liquidity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4",
      "label": "Netting & Settlement Systems (CLS)",
      "description": "Mechanisms for settling financial transactions and reducing interbank credit exposure.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s1",
      "label": "Bilateral vs Multilateral Netting Algorithms",
      "description": "Consolidating gross payment obligations between counterparties into net balances.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s1_d1",
      "label": "Bilateral Netting Reduction",
      "description": "Consolidating mutual obligations between two banks into a single net payment.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s1_d2",
      "label": "Multilateral Central Counterparty Netting",
      "description": "Calculating net positions across all market participants to reduce total transfer volume by 90%.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s2",
      "label": "Continuous Linked Settlement (CLS Bank)",
      "description": "Specialized settlement system eliminating foreign exchange principal risk (Herstatt risk).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s2_d1",
      "label": "Payment-vs-Payment (PvP) Settlement",
      "description": "Ensuring one currency payout occurs if and only if counter-currency payout is received.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s2_d2",
      "label": "Settlement Member Liquidity Schedules",
      "description": "Executing matched multi-currency settlements during 5-hour daily processing windows.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s3",
      "label": "Real-Time Gross Settlement (RTGS)",
      "description": "Processing high-value systemic transfers individually on a continuous gross basis.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s3_d1",
      "label": "Fedwire Funds Service Operations",
      "description": "Processing US dollar wholesale interbank transfers with immediate finality.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s3_d2",
      "label": "Queuing & Gridlock Resolution Algorithms",
      "description": "Resolving circular payment dependencies among banks using centralized optimization solvers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s4",
      "label": "End-of-Day Settlement Reconciliation",
      "description": "Reconciling internal transaction ledgers against external clearing bank statements.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s4_d1",
      "label": "Automated Matching Engines (3-Way Match)",
      "description": "Matching internal records, gateway logs, and bank statement line items.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s4_d2",
      "label": "Break Management Workflows",
      "description": "Flagging unmatched transactions (breaks) for manual investigation and adjustment.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s5",
      "label": "Central Counterparty Clearing (CCP) Netting",
      "description": "Interposing central clearing houses between buyers and sellers to guarantee trade performance.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s5_d1",
      "label": "Novation Process Step",
      "description": "Replacing original buyer-seller contracts with two separate contracts with the CCP.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t4_s5_d2",
      "label": "Default Waterfall Resources",
      "description": "Managing default losses using margin, clearing funds, and CCP equity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5",
      "label": "Payment Protocols & Clearing Networks Topic 5",
      "description": "Detailed first-principles mechanics for Payment Protocols & Clearing Networks topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s1",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s1_d1",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s1_d2",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s2",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s2_d1",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s2_d2",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s3",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s3_d1",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s3_d2",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s4",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s4_d1",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s4_d2",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s5",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s5_d1",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t5_s5_d2",
      "label": "Payment Protocols & Clearing Networks Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6",
      "label": "Payment Protocols & Clearing Networks Topic 6",
      "description": "Detailed first-principles mechanics for Payment Protocols & Clearing Networks topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s1",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s1_d1",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s1_d2",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s2",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s2_d1",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s2_d2",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s3",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s3_d1",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s3_d2",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s4",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s4_d1",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s4_d2",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s5",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Payment Protocols & Clearing Networks Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s5_d1",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p4_t6_s5_d2",
      "label": "Payment Protocols & Clearing Networks Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Payment Protocols & Clearing Networks Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5",
      "label": "Risk Engine & Margin Calculation",
      "description": "Real-time financial risk engines computing Value-at-Risk, margin requirements, auto-liquidations, and pre-trade checks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1",
      "label": "Value-at-Risk (VaR) Calculation Methodologies",
      "description": "Statistical risk measurement quantifying potential portfolio losses over time horizons at specific confidence intervals.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s1",
      "label": "Parametric (Delta-Normal) VaR",
      "description": "Computing VaR assuming normal distribution of asset returns.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s1_d1",
      "label": "Formula VaR = Z_alpha * sigma * Portfolio_Value",
      "description": "Multiplying standard deviation by Z-score (e.g. 1.65 for 95%, 2.33 for 99%).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s1_d2",
      "label": "Variance-Covariance Matrix Construction",
      "description": "Modeling correlation and covariance across multi-asset portfolios.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s2",
      "label": "Historical Simulation VaR",
      "description": "Computing VaR by applying historical market price changes directly to current portfolio holdings.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s2_d1",
      "label": "Historical Return Series Lookbacks (500 days)",
      "description": "Replaying past 500 daily market price changes on current portfolio assets.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s2_d2",
      "label": "Percentile Rank Loss Extraction",
      "description": "Ordering simulated PnL results to pick the 99th percentile worst loss.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s3",
      "label": "Monte Carlo Simulation VaR",
      "description": "Simulating thousands of random price paths using stochastic differential equations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s3_d1",
      "label": "Geometric Brownian Motion (GBM) Paths",
      "description": "Simulating asset paths: dS = mu*S*dt + sigma*S*dW.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s3_d2",
      "label": "Non-Linear Option Delta-Gamma Modeling",
      "description": "Accurately modeling non-linear derivative payouts and tail risk.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s4",
      "label": "Expected Shortfall (ES / Conditional VaR)",
      "description": "Measuring the average loss incurred in tail scenarios exceeding the VaR threshold.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s4_d1",
      "label": "Tail Loss Average Calculation",
      "description": "Averaging all simulated losses worse than the 99% VaR cutoff point.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s4_d2",
      "label": "Coherent Risk Measure Property",
      "description": "Satisfying sub-additivity properties to evaluate portfolio diversification correctly.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s5",
      "label": "Stress Testing & Scenario Analysis",
      "description": "Evaluating portfolio resilience against extreme historical crises (2008 crash, 2020 COVID shock).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s5_d1",
      "label": "Historical Crisis Replay Scenarios",
      "description": "Simulating sudden 20% equity drops alongside 300% volatility spikes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t1_s5_d2",
      "label": "Hypothetical Extreme Shock Inputs",
      "description": "Applying multi-factor shocks to test clearing firm capital adequacy.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2",
      "label": "Portfolio Margin & Leverage Engines",
      "description": "Real-time margin engines evaluating collateral requirements for leveraged trading positions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s1",
      "label": "Initial Margin (IM) vs Maintenance Margin (MM)",
      "description": "Collateral thresholds required to open vs maintain leveraged positions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s1_d1",
      "label": "Initial Margin Deposit Checks",
      "description": "Requiring minimum collateral balances before accepting new leverage orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s1_d2",
      "label": "Maintenance Margin Threshold Violation",
      "description": "Triggering margin calls when portfolio equity falls below MM bounds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s2",
      "label": "SPAN (Standard Portfolio Analysis of Risk)",
      "description": "Industry-standard margin calculation system developed by CME for futures and options.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s2_d1",
      "label": "16 Risk Scenario Evaluation Matrix",
      "description": "Evaluating portfolio profit/loss across 16 combinations of price and volatility shifts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s2_d2",
      "label": "Inter-Month & Inter-Commodity Spread Offsets",
      "description": "Granting margin credits for offsetting long and short positions in related contracts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s3",
      "label": "Cross-Margin vs Isolated Margin Modes",
      "description": "Sharing account-wide collateral vs isolating margin risk per position.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s3_d1",
      "label": "Cross-Margin Account Collateral Pool",
      "description": "Using entire account equity to back all open positions, maximizing capital efficiency.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s3_d2",
      "label": "Isolated Margin Risk Capping",
      "description": "Restricting potential loss per position strictly to allocated margin amounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s4",
      "label": "Haircut Schedules on Collateral Assets",
      "description": "Applying percentage discounts to non-cash collateral values to account for market liquidity risk.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s4_d1",
      "label": "Asset Volatility Haircut Rates",
      "description": "Applying 0% haircut to USD cash, 2% to US Treasuries, and 20%+ to equities.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s4_d2",
      "label": "Mark-to-Market Collateral Revaluation",
      "description": "Revaluing collateral values continuously based on live market quotes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s5",
      "label": "Leverage Multipliers & Exposure Limits",
      "description": "Restricting maximum allowed position leverage based on account tier and asset volatility.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s5_d1",
      "label": "Notional Exposure Caps (Leverage = Notional / Equity)",
      "description": "Enforcing maximum 10x or 20x leverage constraints on accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t2_s5_d2",
      "label": "Tiered Margin Requirement Curves",
      "description": "Increasing margin requirement percentages as total position size grows.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3",
      "label": "Auto-Liquidation Systems",
      "description": "Automated engines liquidating distressed positions to prevent account bankruptcies.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s1",
      "label": "Real-Time Equity Monitoring Engine",
      "description": "Calculating account equity continuously (Equity = Balance + Un-realized PnL).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s1_d1",
      "label": "Sub-Millisecond PnL Mark-to-Market",
      "description": "Updating unrealized PnL on every market price tick.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s1_d2",
      "label": "Margin Ratio Evaluation (Equity / MM)",
      "description": "Flagging accounts for liquidation when margin ratios drop below 1.0.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s2",
      "label": "Partial Liquidation Step Engine",
      "description": "Liquidating position chunks incrementally to restore margin compliance without over-selling.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s2_d1",
      "label": "Incremental Position Reduction Steps",
      "description": "Closing 20-50% of position size and re-evaluating margin status.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s2_d2",
      "label": "Market Impact Reduction",
      "description": "Minimizing market slippage and price impact caused by large liquidation market orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s3",
      "label": "Insurance Fund Absorption",
      "description": "Using exchange insurance funds to absorb negative balances when accounts go bankrupt.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s3_d1",
      "label": "Bankruptcy Price Execution Deficits",
      "description": "Covering losses when positions are liquidated worse than bankruptcy price.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s3_d2",
      "label": "Insurance Fund Fee Accumulation",
      "description": "Capitalizing insurance funds via liquidation penalty fees.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s4",
      "label": "Auto-Deleveraging (ADL) Protocol",
      "description": "Deleveraging opposing profitable traders when insurance funds are depleted.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s4_d1",
      "label": "ADL Priority Ranking (Leverage * PnL%)",
      "description": "Ranking opposing traders by profit percentage and leverage to select deleveraging targets.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s4_d2",
      "label": "Bankruptcy Loss Containment",
      "description": "Preventing exchange insolvency during extreme Black Swan market crashes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s5",
      "label": "Liquidation Order Execution Mechanics",
      "description": "Submitting immediate IOC or aggressive limit orders to close distressed positions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s5_d1",
      "label": "Direct Order Engine Injection",
      "description": "Bypassing standard pre-trade risk checks for emergency liquidation orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t3_s5_d2",
      "label": "Liquidation Penalty Fee Markup",
      "description": "Charging liquidation penalty fees credited to insurance funds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4",
      "label": "Pre-Trade Algorithmic Risk Checks",
      "description": "Inline validation checks executed before orders are submitted to matching engines.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s1",
      "label": "Fat-Finger Order Size & Value Caps",
      "description": "Blocking errant orders with unusually large quantities or dollar values.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s1_d1",
      "label": "Max Order Quantity & Value Checks",
      "description": "Rejecting single orders exceeding 10,000 shares or $1,000,000 notional value.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s1_d2",
      "label": "Historical Average Size Variance Checks",
      "description": "Blocking orders 10x larger than account historical average order sizes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s2",
      "label": "Price Collar & Banding Rules",
      "description": "Rejecting limit orders priced too far away from current market quotes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s2_d1",
      "label": "Percentage Distance Collars (+/- 5%)",
      "description": "Blocking buy orders priced >5% above ask or sell orders <5% below bid.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s2_d2",
      "label": "Erroneous Trade Prevention",
      "description": "Preventing orders from triggering immediate off-market executions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s3",
      "label": "Order Rate Throttling (Orders per Second)",
      "description": "Throttling high-frequency order submission rates per trading connection.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s3_d1",
      "label": "Leaky Bucket Connection Rate Limits",
      "description": "Restricting accounts to maximum 100 order operations per second.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s3_d2",
      "label": "Disconnect Penalties on Spamming",
      "description": "Terminating TCP connections if traders exceed rate limits repeatedly.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s4",
      "label": "Credit Limit & Purchasing Power Verification",
      "description": "Validating that total open order exposure does not exceed available credit limits.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s4_d1",
      "label": "Open Order Cumulative Exposure Summing",
      "description": "Summing notional value of resting limit orders plus pending new orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s4_d2",
      "label": "Instant Order Rejection on Limit Breach",
      "description": "Rejecting orders in sub-microsecond inline pre-trade checks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s5",
      "label": "Short-Sale Borrow Availability Checks",
      "description": "Verifying shares are available to borrow before approving short-sell orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s5_d1",
      "label": "Easy-to-Borrow (ETB) List Lookups",
      "description": "Checking ETB lists for available share quantities before accepting short orders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t4_s5_d2",
      "label": "Locate Requirement Tracking (Reg SHO)",
      "description": "Recording valid locate identifiers for Hard-to-Borrow (HTB) securities.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5",
      "label": "Risk Engine & Margin Calculation Topic 5",
      "description": "Detailed first-principles mechanics for Risk Engine & Margin Calculation topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s1",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s1_d1",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s1_d2",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s2",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s2_d1",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s2_d2",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s3",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s3_d1",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s3_d2",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s4",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s4_d1",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s4_d2",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s5",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s5_d1",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t5_s5_d2",
      "label": "Risk Engine & Margin Calculation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6",
      "label": "Risk Engine & Margin Calculation Topic 6",
      "description": "Detailed first-principles mechanics for Risk Engine & Margin Calculation topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s1",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s1_d1",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s1_d2",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s2",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s2_d1",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s2_d2",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s3",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s3_d1",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s3_d2",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s4",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s4_d1",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s4_d2",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s5",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Risk Engine & Margin Calculation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s5_d1",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p5_t6_s5_d2",
      "label": "Risk Engine & Margin Calculation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Risk Engine & Margin Calculation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6",
      "label": "Fraud Detection & Compliance Systems",
      "description": "Real-time transaction monitoring, Anti-Money Laundering (AML), KYC verification, and regulatory compliance architectures.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1",
      "label": "Real-Time Fraud & Anomaly Detection",
      "description": "Monitoring financial transactions in real time to block fraudulent operations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s1",
      "label": "Rules Engine Evaluation (Drools / Custom DSL)",
      "description": "Executing deterministic compliance and fraud rules against incoming transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s1_d1",
      "label": "Velocity & Threshold Rule Execution",
      "description": "Evaluating rules like >3 transactions in 1 minute from distinct countries.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s1_d2",
      "label": "Sub-50ms Inline Scoring Latencies",
      "description": "Executing rule evaluations inline during payment authorization flows.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s2",
      "label": "ML Anomaly Detection Models (XGBoost / Isolation Forest)",
      "description": "Scoring transactions using machine learning models trained on historical fraud patterns.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s2_d1",
      "label": "Feature Vector Extraction",
      "description": "Extracting features: user age, device hash, IP distance, transaction amount z-score.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s2_d2",
      "label": "Fraud Risk Probability Output (0.0 to 1.0)",
      "description": "Generating continuous risk scores to trigger step-up authentication or manual review.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s3",
      "label": "Graph Neural Networks (GNN) for Fraud Rings",
      "description": "Detecting organized fraud rings by analyzing relationships in graph databases.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s3_d1",
      "label": "Shared Device & Account Node Graphs",
      "description": "Linking accounts sharing identical IP addresses, device fingerprints, or credit cards.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s3_d2",
      "label": "Sybil Cluster Detection Algorithms",
      "description": "Identifying dense subgraphs of synthetic accounts transferring funds among themselves.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s4",
      "label": "Device Fingerprinting & Behavior Biometrics",
      "description": "Collecting hardware, browser, and behavioral signals to verify user identity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s4_d1",
      "label": "Canvas & WebGL Fingerprint Hashes",
      "description": "Hashing browser hardware rendering signatures to track device identity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s4_d2",
      "label": "Keystroke Dynamics & Touch Dynamics",
      "description": "Analyzing typing cadence and touch pressure to detect automated bot scripts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s5",
      "label": "Location & IP Velocity Anomaly Checks",
      "description": "Detecting impossible travel scenarios across sequential transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s5_d1",
      "label": "GeoIP Distance Over Time Calculation",
      "description": "Calculating required travel speed between card uses in different cities.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t1_s5_d2",
      "label": "Impossible Travel Flagging (> 800 km/h)",
      "description": "Blocking transactions if implied physical speed exceeds realistic flight boundaries.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2",
      "label": "Anti-Money Laundering (AML) & Sanctions",
      "description": "Screening transactions and accounts against global sanctions lists and money laundering patterns.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s1",
      "label": "Sanctions List Matching (OFAC, UN, EU)",
      "description": "Screening customer names and counterparties against government blacklists.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s1_d1",
      "label": "Fuzzy String Matching Algorithms",
      "description": "Utilizing Jaro-Winkler, Levenshtein distance, and Soundex phonetic matching.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s1_d2",
      "label": "False Positive Reduction Rules",
      "description": "Filtering matches using birth dates, passport numbers, and nationality context.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s2",
      "label": "Politically Exposed Persons (PEP) Screening",
      "description": "Identifying high-risk accounts belonging to government officials or their associates.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s2_d1",
      "label": "PEP Database Lookups (Dow Jones / World-Check)",
      "description": "Screening onboarding profiles against global PEP and relative database records.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s2_d2",
      "label": "Enhanced Due Diligence (EDD) Workflow Triggers",
      "description": "Requiring senior compliance approval for PEP account onboarding.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s3",
      "label": "Structuring & Smurfing Detection",
      "description": "Detecting patterns designed to evade regulatory reporting thresholds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s3_d1",
      "label": "Sub-Threshold Cash Deposit Aggregation",
      "description": "Identifying multiple deposits just below $10,000 reporting limits (e.g. $9,500).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s3_d2",
      "label": "Currency Transaction Report (CTR) Triggers",
      "description": "Filing CTR forms automatically when cash transactions exceed $10,000 per day.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s4",
      "label": "Suspicious Activity Report (SAR) Generation",
      "description": "Automating regulatory filing drafts when suspicious financial patterns are detected.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s4_d1",
      "label": "FinCEN SAR Data Payload Formatting",
      "description": "Formatting electronic SAR filings for submission to financial intelligence units.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s4_d2",
      "label": "Compliance Case Management Workflow",
      "description": "Routing flagged accounts to compliance analysts for manual review and filing decisions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s5",
      "label": "Transaction Monitoring Typologies",
      "description": "Detecting money laundering schemes like pass-through accounts and rapid movement of funds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s5_d1",
      "label": "Rapid Movement of Funds (Layering)",
      "description": "Flagging accounts receiving deposits and immediately wiring funds out within minutes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t2_s5_d2",
      "label": "Dormant Account Sudden High-Volume Spikes",
      "description": "Alerting when dormant accounts suddenly initiate high-value international transfers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3",
      "label": "KYC & Identity Verification Pipelines",
      "description": "Customer identity verification onboarding workflows complying with banking regulations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s1",
      "label": "Document OCR & MRZ Extraction",
      "description": "Extracting data from passports and ID cards via Machine Readable Zone (MRZ) optical scanning.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s1_d1",
      "label": "MRZ Checksum Validation Math",
      "description": "Validating checksum digits on passport bottom lines to detect forged images.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s1_d2",
      "label": "Document Hologram & Security Feature Checks",
      "description": "Analyzing physical document security features via computer vision models.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s2",
      "label": "Facial Liveness Detection & Biometric Matching",
      "description": "Verifying physical user presence to prevent spoofing using photos or videos.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s2_d1",
      "label": "3D Depth Mapping & Flash Liveness Checks",
      "description": "Prompting users to blink or turn their head while analyzing light reflection patterns.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s2_d2",
      "label": "1:1 Selfie to ID Photo Face Matching",
      "description": "Computing facial embedding distances to verify selfie photos match ID document photos.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s3",
      "label": "Address & Identity Database Verification",
      "description": "Cross-checking user identity claims against credit bureaus and government registries.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s3_d1",
      "label": "SSN / TIN Name Matching (Experian / LexisNexis)",
      "description": "Verifying Social Security Numbers match names and birth dates on credit files.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s3_d2",
      "label": "Utility Bill & Bank Statement Proof of Address",
      "description": "Extracting address details from uploaded proof of address documents.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s4",
      "label": "Risk-Based Approach (RBA) Tiering",
      "description": "Assigning risk scores to customers to determine required verification levels.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s4_d1",
      "label": "Low-Risk Tiered Onboarding Limits",
      "description": "Allowing small transaction limits with basic SMS and name verification.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s4_d2",
      "label": "High-Risk Enhanced Due Diligence (EDD)",
      "description": "Requiring proof of wealth source and video KYC for high-net-worth accounts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s5",
      "label": "Ongoing KYC Re-Verification Sweeps",
      "description": "Periodically re-screening active customer bases to maintain compliance over time.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s5_d1",
      "label": "Periodic Document Refresh Reminders",
      "description": "Requesting updated ID documents when existing documents expire.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t3_s5_d2",
      "label": "Continuous Sanctions List Re-screening",
      "description": "Re-screening full customer databases nightly against updated sanctions lists.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4",
      "label": "PCI-DSS Compliance Architecture",
      "description": "Security requirements for storing, processing, and transmitting payment card data.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s1",
      "label": "Cardholder Data Environment (CDE) Isolation",
      "description": "Isolating networks handling raw card data to minimize PCI audit scope.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s1_d1",
      "label": "Subnet Firewalls & VLAN Segmentation",
      "description": "Restricting network access to CDE subnets using strict firewall rules.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s1_d2",
      "label": "Scope Reduction via Tokenization Vaults",
      "description": "Replacing PANs with tokens at edge proxies to keep core application servers out of PCI scope.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s2",
      "label": "PAN Masking & Truncation Rules",
      "description": "Masking Primary Account Numbers when displaying or storing card records.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s2_d1",
      "label": "First-6 Last-4 Display Format (1234 56XX XXXX 7890)",
      "description": "Displaying at most the first 6 digits (BIN) and last 4 digits of card numbers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s2_d2",
      "label": "Zero PAN Storage in Plaintext Files",
      "description": "Prohibiting unencrypted PAN storage in database tables, application logs, or trace files.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s3",
      "label": "Prohibited Data Storage Rules",
      "description": "Strict prohibition against storing sensitive authentication data post-authorization.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s3_d1",
      "label": "Zero Storage of CVV / CVC Security Codes",
      "description": "Purging 3-digit CVV codes from RAM immediately after authorization completion.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s3_d2",
      "label": "Zero Storage of PIN Block / Chip Data",
      "description": "Prohibiting storage of encrypted PIN blocks or raw chip track data.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s4",
      "label": "HSM Encryption at Rest",
      "description": "Encrypting card database columns using keys managed inside hardware security modules.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s4_d1",
      "label": "AES-256 Column Level Encryption",
      "description": "Encrypting PAN columns with AES-256 before writing to database disk storage.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s4_d2",
      "label": "FIPS 140-2 Level 3 Key Management",
      "description": "Managing master encryption keys inside certified hardware appliances.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s5",
      "label": "PCI-DSS Audit Trail Logging (Requirement 10)",
      "description": "Logging all access to cardholder data for security auditing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s5_d1",
      "label": "Immutable Audit Log Forwarding",
      "description": "Forwarding CDE access logs to centralized SIEM systems in real time.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t4_s5_d2",
      "label": "Daily Log Review & File Integrity Monitoring",
      "description": "Monitoring system file changes using FIM tools to catch unauthorized modifications.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5",
      "label": "Fraud Detection & Compliance Systems Topic 5",
      "description": "Detailed first-principles mechanics for Fraud Detection & Compliance Systems topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s1",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s1_d1",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s1_d2",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s2",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s2_d1",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s2_d2",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s3",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s3_d1",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s3_d2",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s4",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s4_d1",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s4_d2",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s5",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s5_d1",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t5_s5_d2",
      "label": "Fraud Detection & Compliance Systems Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6",
      "label": "Fraud Detection & Compliance Systems Topic 6",
      "description": "Detailed first-principles mechanics for Fraud Detection & Compliance Systems topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s1",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s1_d1",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s1_d2",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s2",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s2_d1",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s2_d2",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s3",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s3_d1",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s3_d2",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s4",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s4_d1",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s4_d2",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s5",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Fraud Detection & Compliance Systems Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s5_d1",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p6_t6_s5_d2",
      "label": "Fraud Detection & Compliance Systems Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Fraud Detection & Compliance Systems Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7",
      "label": "Distributed Financial Data Pipelines",
      "description": "High-throughput stream processing, time-series tick databases, historical backtesting, and reconciliation engines.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1",
      "label": "Time-Series Tick Databases (Kdb+ & ClickHouse)",
      "description": "Specialized database engines for storing and querying high-frequency market tick data.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s1",
      "label": "Kdb+ / q Vector Database Architecture",
      "description": "Columnar in-memory database designed by Arthur Whitney for fast tick data analytics.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s1_d1",
      "label": "q Language Array Processing Expressions",
      "description": "Executing vector operations directly across contiguous memory arrays.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s1_d2",
      "label": "RDB (In-Memory) to HDB (On-Disk) Daily Flushes",
      "description": "Flushing real-time tick database (RDB) records to historical disk databases (HDB) at midnight.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s2",
      "label": "ClickHouse Tick Storage Optimization",
      "description": "Configuring ClickHouse MergeTree tables for tick-by-tick order book storage.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s2_d1",
      "label": "Primary Key ORDER BY (symbol, timestamp)",
      "description": "Sorting data parts by symbol and timestamp to optimize range query performance.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s2_d2",
      "label": "Double-Delta & ZSTD Compression Rules",
      "description": "Compressing timestamp and price columns to reduce disk storage sizes by 80%.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s3",
      "label": "As-Of Joins (aj) for Market Quote Alignment",
      "description": "Joining trade records against quote records to find the prevailing bid-ask spread at trade time.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s3_d1",
      "label": "Kdb+ aj[`symbol`time; trade; quote] Syntax",
      "description": "Executing fast directional as-of joins to match exact trade times with quotes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s3_d2",
      "label": "Zero Cartesian Product Join Performance",
      "description": "Matching time-series records without executing full join passes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s4",
      "label": "OHLCV Bar Aggregation Pipelines",
      "description": "Aggregating raw tick streams into 1-second, 1-minute, or 1-hour Candlestick bars.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s4_d1",
      "label": "Open, High, Low, Close, Volume Computation",
      "description": "Computing bar summary metrics across fixed time windows.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s4_d2",
      "label": "Continuous Materialized Views",
      "description": "Updating candlestick aggregation tables in real time using streaming queries.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s5",
      "label": "Compressed Tick Archive Storage",
      "description": "Archiving petabytes of historical market data into object storage.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s5_d1",
      "label": "Parquet Columnar Partitioning by Date/Symbol",
      "description": "Partitioning tick archives into date and symbol directory trees.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t1_s5_d2",
      "label": "ZSTD Compression Level 9 Archive Tuning",
      "description": "Maximizing file compression density for cold market data archives.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2",
      "label": "Historical Replay & Algorithmic Backtesting",
      "description": "Simulating algorithmic trading strategies on historical tick data to evaluate performance.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s1",
      "label": "Event-Driven Backtesting Engine Architecture",
      "description": "Replaying historical market events through strategy code in strict chronological sequence.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s1_d1",
      "label": "Tick-by-Tick Simulation Loops",
      "description": "Invoking strategy on_tick() callbacks for every historical market update.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s1_d2",
      "label": "Lookahead Bias Elimination",
      "description": "Ensuring strategies observe only data available up to the current simulated timestamp.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s2",
      "label": "Order Execution & Slippage Modeling",
      "description": "Simulating realistic market impact and order execution delay during backtests.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s2_d1",
      "label": "Market Impact Model Equations",
      "description": "Estimating price slippage as a function of order size relative to market depth.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s2_d2",
      "label": "Latency Delay Simulation (1-10ms)",
      "description": "Delaying order submissions by simulated network round-trip durations.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s3",
      "label": "Performance Metrics (Sharpe, Sortino, Max Drawdown)",
      "description": "Statistical metrics for evaluating risk-adjusted algorithmic strategy returns.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s3_d1",
      "label": "Sharpe Ratio = (R_p - R_f) / sigma_p",
      "description": "Measuring excess return per unit of total portfolio volatility.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s3_d2",
      "label": "Sortino Ratio Downside Risk Focus",
      "description": "Penalizing only negative volatility by dividing excess return by downside deviation.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s3_d3",
      "label": "Maximum Drawdown (Peak to Trough Loss)",
      "description": "Measuring maximum percentage loss from peak account value to subsequent trough.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s4",
      "label": "Overfitting & Out-of-Sample Testing",
      "description": "Validating strategies against unseen market data to ensure strategy robustness.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s4_d1",
      "label": "Train / Validation / Test Data Splits",
      "description": "Optimizing parameters on training data and verifying results on out-of-sample test sets.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s4_d2",
      "label": "Walk-Forward Optimization Cycles",
      "description": "Re-optimizing parameters iteratively over rolling time windows.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s5",
      "label": "Distributed Backtesting Grid Execution",
      "description": "Executing parameter sweeps across thousands of backtest instances in parallel.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s5_d1",
      "label": "Parameter Grid Search Scatter Jobs",
      "description": "Running backtest combinations across Kubernetes worker nodes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t2_s5_d2",
      "label": "Aggregated Performance Leaderboards",
      "description": "Sorting parameter results by Sharpe ratio and drawdown metrics.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3",
      "label": "Financial Benchmark & Metric Calculation",
      "description": "Algorithms for computing trading benchmark metrics (VWAP, TWAP) and execution quality.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s1",
      "label": "Volume Weighted Average Price (VWAP)",
      "description": "Trading benchmark calculating average execution price weighted by trading volume.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s1_d1",
      "label": "Formula VWAP = Sum(Price * Volume) / Sum(Volume)",
      "description": "Accumulating price-volume products and dividing by cumulative volume.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s1_d2",
      "label": "Institutional Execution Benchmark Usage",
      "description": "Evaluating broker execution quality against daily VWAP benchmarks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s2",
      "label": "Time Weighted Average Price (TWAP)",
      "description": "Slicing large orders into equal chunks executed at regular time intervals.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s2_d1",
      "label": "Fixed Time Slice Order Generation",
      "description": "Submitting small order slices every 30 or 60 seconds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s2_d2",
      "label": "Market Impact Minimization",
      "description": "Spreading execution over long time horizons to avoid moving market prices.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s3",
      "label": "Transaction Cost Analysis (TCA)",
      "description": "Measuring explicit and implicit costs incurred during trade execution.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s3_d1",
      "label": "Implementation Shortfall (Arrival Price Benchmark)",
      "description": "Comparing final execution prices against decision-time market prices.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s3_d2",
      "label": "Explicit Commission & Exchange Fee Tracking",
      "description": "Summing broker commissions, clearing fees, and exchange tariffs.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s4",
      "label": "Alpha Generation & Factor Models",
      "description": "Evaluating quantitative trading signals against asset pricing models.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s4_d1",
      "label": "Fama-French Multi-Factor Model",
      "description": "Decomposing returns into Market, Size, Value, Momentum, and Quality factors.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s4_d2",
      "label": "Statistical Arbitrage Mean-Reversion Signals",
      "description": "Computing Z-scores of cointegrated asset pair price spreads.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s5",
      "label": "Portfolio PnL Attribution Engines",
      "description": "Decomposing daily portfolio profit and loss into constituent trade drivers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s5_d1",
      "label": "Realized vs Unrealized PnL Splits",
      "description": "Separating PnL from closed trades vs open position mark-to-market changes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t3_s5_d2",
      "label": "Asset & Strategy PnL Breakdown",
      "description": "Attributing profits to individual trading strategies and asset classes.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4",
      "label": "Data Reconciliation & Break Management",
      "description": "Automated end-of-day pipelines verifying data consistency across internal and external systems.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s1",
      "label": "End-of-Day (EOD) 3-Way Reconciliation",
      "description": "Matching internal trade logs, gateway execution reports, and clearing broker files.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s1_d1",
      "label": "3-Way Match Algorithm",
      "description": "Comparing trade ID, price, quantity, side, and settlement date across 3 sources.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s1_d2",
      "label": "Automated Exception Flagging",
      "description": "Flagging discrepancies into break tables for compliance review.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s2",
      "label": "Fuzzy Matching & Tolerance Thresholds",
      "description": "Matching transactions where non-critical fields contain minor formatting differences.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s2_d1",
      "label": "Timestamp Tolerance Windows (+/- 5 seconds)",
      "description": "Matching trades executed within tight time windows.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s2_d2",
      "label": "Amount Rounding Tolerance Limits",
      "description": "Ignoring minor penny-rounding differences caused by FX conversions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s3",
      "label": "Break Resolution & Adjustment Workflows",
      "description": "Managing operational workflows for resolving accounting breaks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s3_d1",
      "label": "Break Categorization (Timing vs Mis-match vs Missing)",
      "description": "Classifying breaks by root cause to assign appropriate resolution paths.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s3_d2",
      "label": "Automated Adjusting Journal Entries",
      "description": "Posting corrective ledger entries upon supervisor break resolution approval.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s4",
      "label": "Positions vs Balances Reconciliation",
      "description": "Verifying that daily transaction streams correctly sum to final account balances.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s4_d1",
      "label": "Roll-Forward Equation Check (Start + Inflows - Outflows = End)",
      "description": "Validating starting balance plus net activity equals closing balance.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s4_d2",
      "label": "Data Corruption Early Warnings",
      "description": "Catching missing transaction records before monthly financial statement closing.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s5",
      "label": "Regulatory Audit Evidence Archiving",
      "description": "Archiving reconciliation reports and break resolution logs for regulatory audits.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s5_d1",
      "label": "7-Year Immutable WORM Storage",
      "description": "Archiving compliance reports to Write-Once-Read-Many (WORM) storage.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t4_s5_d2",
      "label": "Digital Signature Integrity Seals",
      "description": "Signing reconciliation files with internal CA keys to prove data integrity.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5",
      "label": "Distributed Financial Data Pipelines Topic 5",
      "description": "Detailed first-principles mechanics for Distributed Financial Data Pipelines topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s1",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s1_d1",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s1_d2",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s2",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s2_d1",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s2_d2",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s3",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s3_d1",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s3_d2",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s4",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s4_d1",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s4_d2",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s5",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s5_d1",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t5_s5_d2",
      "label": "Distributed Financial Data Pipelines Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6",
      "label": "Distributed Financial Data Pipelines Topic 6",
      "description": "Detailed first-principles mechanics for Distributed Financial Data Pipelines topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s1",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s1_d1",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s1_d2",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s2",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s2_d1",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s2_d2",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s3",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s3_d1",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s3_d2",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s4",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s4_d1",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s4_d2",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s5",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Financial Data Pipelines Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s5_d1",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p7_t6_s5_d2",
      "label": "Distributed Financial Data Pipelines Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Financial Data Pipelines Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8",
      "label": "Decentralized Finance (DeFi) & Smart Contracts",
      "description": "Automated Market Makers, liquidity pools, flash loans, token standards, and MEV extraction mechanics.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1",
      "label": "Automated Market Makers (Uniswap v2 / v3 Math)",
      "description": "Algorithmic liquidity pools enabling decentralized token swaps without order books.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s1",
      "label": "Constant Product Formula (x * y = k)",
      "description": "Maintaining invariant product k of token reserve balances x and y.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s1_d1",
      "label": "Swap Output Formula dy = (y * dx) / (x + dx)",
      "description": "Computing output token amount dy received for input dx after 0.3% fee deduction.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s1_d2",
      "label": "Slippage & Price Impact Equations",
      "description": "Price impact growing larger as swap size dx approaches total pool reserve x.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s2",
      "label": "Uniswap v3 Concentrated Liquidity",
      "description": "Allowing liquidity providers to allocate capital within custom price tick bounds [P_lower, P_upper].",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s2_d1",
      "label": "Virtual Reserves & Real Liquidity (L)",
      "description": "Concentrating capital to achieve up to 4000x higher capital efficiency than v2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s2_d2",
      "label": "Tick Index Price Mapping (P(i) = 1.0001^i)",
      "description": "Mapping discrete tick indices to square root price values for tick crossing math.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s3",
      "label": "Impermanent Loss (IL) Mathematics",
      "description": "Measuring divergence loss incurred by liquidity providers relative to holding tokens.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s3_d1",
      "label": "IL Formula = 2*sqrt(r) / (1 + r) - 1",
      "description": "Calculating loss ratio as a function of price ratio r = P_new / P_initial.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s3_d2",
      "label": "Fee Revenue vs Impermanent Loss Net Returns",
      "description": "Evaluating whether trading fee APY covers impermanent loss incurred during price trends.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s4",
      "label": "TWAP Oracle Defense Mechanisms",
      "description": "On-chain Time-Weighted Average Price oracles resilient against single-block price manipulation.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s4_d1",
      "label": "Cumulative Price Accumulator Tracking",
      "description": "Accumulating price * time elapsed in on-chain storage array buffers.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s4_d2",
      "label": "Flash Loan Price Attack Immunity",
      "description": "Preventing attackers from manipulating TWAP values using single-transaction flash loans.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s5",
      "label": "Curve StableSwap Bonding Curve",
      "description": "Hybrid invariant combining constant sum and constant product for low-slippage stablecoin swaps.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s5_d1",
      "label": "Amplification Coefficient (A) Tuning",
      "description": "Flattening the price curve near 1:1 parity to achieve minimal slippage on stablecoin pairs.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t1_s5_d2",
      "label": "Dynamic Rebalancing Toward Parity",
      "description": "Increasing slippage penalty as pool token reserves diverge from balanced ratios.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2",
      "label": "Decentralized Lending & Liquidation Math",
      "description": "Collateralized crypto lending protocols (Aave, Compound) and automated liquidation incentives.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s1",
      "label": "Collateral Factor & Loan-to-Value (LTV)",
      "description": "Restricting maximum borrowing limits relative to deposited collateral value.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s1_d1",
      "label": "Max Borrow Formula = Collateral * LTV",
      "description": "Limiting borrowing capacity (e.g. 75% LTV allowing $75 borrow per $100 ETH collateral).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s1_d2",
      "label": "Multi-Asset Basket Collateral Summation",
      "description": "Summing risk-weighted collateral values across multiple deposited tokens.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s2",
      "label": "Health Factor Calculation & Liquidation Threshold",
      "description": "Evaluating account solvency to trigger automated liquidation protocols.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s2_d1",
      "label": "Health Factor = Sum(Collateral * LiqThreshold) / TotalBorrow",
      "description": "Computing Health Factor score; HF < 1.0 marks account eligible for immediate liquidation.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s2_d2",
      "label": "Real-Time Chainlink Oracle Price Feeds",
      "description": "Updating account Health Factors on-chain using decentralized oracle network price reports.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s3",
      "label": "Liquidation Bonus & Seizure Mechanics",
      "description": "Incentivizing external liquidators to repay debt in exchange for discounted collateral.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s3_d1",
      "label": "Liquidation Penalty Bonus (5-10%)",
      "description": "Rewarding liquidators with 105-110% value of collateral for repaying debt.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s3_d2",
      "label": "Close Factor Debt Repayment Cap (50%)",
      "description": "Restricting single liquidation calls to repaying at most 50% of outstanding debt.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s4",
      "label": "Utilization Rate Interest Rate Curves",
      "description": "Adjusting borrowing and lending interest rates dynamically based on pool capital utilization.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s4_d1",
      "label": "Utilization Ratio U = Borrows / (Cash + Borrows)",
      "description": "Calculating proportion of deposited pool funds currently borrowed.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s4_d2",
      "label": "Kinked Interest Rate Curve Formula",
      "description": "Steeply increasing interest rates above optimal utilization kink point (e.g. 80% U) to attract deposits.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s5",
      "label": "aToken / cToken Interest Accumulation",
      "description": "Yield-bearing tokens representing lender claims on interest-accumulating pools.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s5_d1",
      "label": "Re-basing (aToken) vs Exchange Rate (cToken)",
      "description": "Increasing token balance directly (aToken) vs increasing token-to-underlying exchange rate (cToken).",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t2_s5_d2",
      "label": "Linear & Compound Interest Indexing",
      "description": "Updating global interest index multipliers on every pool interaction.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3",
      "label": "Flash Loans & Atomic Execution",
      "description": "Uncollateralized loans that must be borrowed and fully repaid within single EVM transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s1",
      "label": "Single-Transaction Atomicity Protocol",
      "description": "EVM transaction execution guarantee: if loan repayment fails, the entire transaction reverts.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s1_d1",
      "label": "Zero Collateral Requirement Rationale",
      "description": "Eliminating credit risk because unpaid loans revert state to pre-borrow state.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s1_d2",
      "label": "Flash Loan Fee (0.09% Aave Fee)",
      "description": "Deducting small protocol fees credited to pool liquidity providers upon successful repayment.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s2",
      "label": "Flash Loan Arbitrage Execution Path",
      "description": "Exploiting cross-DEX price discrepancies atomically using borrowed capital.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s2_d1",
      "label": "Borrow -> Swap DEX A -> Swap DEX B -> Repay Sequence",
      "description": "Borrowing $1M USDC, buying ETH cheap on DEX A, selling ETH high on DEX B, and repaying $1M loan.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s2_d2",
      "label": "Net Profit Retention in Smart Contract",
      "description": "Retaining remaining arbitrage profit in contract after loan principal and fee repayment.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s3",
      "label": "Flash Loan Collateral Swap & De-leveraging",
      "description": "Swapping collateral assets or closing leveraged positions in single transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s3_d1",
      "label": "Zero-Capital Position Liquidation",
      "description": "Liquidating distressed lending positions without holding upfront capital.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s3_d2",
      "label": "Collateral Asset Migration without Unwinding",
      "description": "Swapping ETH collateral to WBTC collateral in single atomic transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s4",
      "label": "Flash Loan Governance Attack Vectors",
      "description": "Borrowing massive voting power atomically to pass malicious DAO proposals.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s4_d1",
      "label": "Instant Voting Power Acquisition",
      "description": "Borrowing governance tokens to pass instant proposals in single blocks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s4_d2",
      "label": "Timelock & Snapshot Block Defenses",
      "description": "Requiring voting tokens to be locked for multiple blocks prior to proposal voting.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s5",
      "label": "EVM Reentrancy Guard (nonReentrant)",
      "description": "Protecting smart contracts against reentrancy attacks during external flash loan callbacks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s5_d1",
      "label": "OpenZeppelin ReentrancyGuard Mutex",
      "description": "Setting status flag = ENTERED before external calls and resetting to NOT_ENTERED after.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t3_s5_d2",
      "label": "State Change Before External Call Rule",
      "description": "Updating internal contract balances prior to invoking external transfer callbacks.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4",
      "label": "MEV (Maximal Extractable Value) & Front-Running",
      "description": "Extracting value from blockchain users by reordering, inserting, or censoring transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s1",
      "label": "Mempool Transaction Ordering Exploitation",
      "description": "Block builders inspecting pending mempool transactions to execute profitable front-running.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s1_d1",
      "label": "Gas Price Bidding Auctions (PGA)",
      "description": "Bidding higher priority gas fees to ensure transaction placement before victim transactions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s1_d2",
      "label": "Sandwich Attack Execution Pattern",
      "description": "Front-running user buy order to push price up, then back-running user order to dump at peak.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s2",
      "label": "Flashbots & Private Auction Relays (MEV-Boost)",
      "description": "Architecture for submitting private transaction bundles directly to block builders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s2_d1",
      "label": "Private Bundle Submission (eth_sendBundle)",
      "description": "Bypassing public mempool to prevent front-running by predatory bots.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s2_d2",
      "label": "Proposer-Builder Separation (PBS)",
      "description": "Separating block construction by specialized builders from block validation by validators.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s3",
      "label": "Searcher, Builder, and Validator Roles",
      "description": "Specialized ecosystem roles collaborating to extract and share MEV revenue.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s3_d1",
      "label": "Searcher Arbitrage Bundle Construction",
      "description": "Running complex algorithms to identify arbitrage and sandwich opportunities.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s3_d2",
      "label": "Validator Block Bid Auctions",
      "description": "Validators selecting highest-bidding block proposals submitted by competing builders.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s4",
      "label": "DEX Arbitrage & Liquidations MEV",
      "description": "Benign vs predatory MEV categories in decentralized markets.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s4_d1",
      "label": "Atomic Cross-DEX Price Equalization",
      "description": "Benign MEV aligning prices across DEXs to improve market efficiency.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s4_d2",
      "label": "Liquidation Front-Running Competitions",
      "description": "Competing to submit first liquidation transactions for distressed lending positions.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s5",
      "label": "Slippage Tolerance Protection Setup",
      "description": "Configuring maximum acceptable price impact bounds on decentralized swaps.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s5_d1",
      "label": "0.5% Strict Slippage Limit Configuration",
      "description": "Restricting transaction execution to minimum acceptable output bounds.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t4_s5_d2",
      "label": "Transaction Revert on Sandwich Attempt",
      "description": "Forcing transactions to revert if front-running pushes price beyond slippage limits.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5",
      "description": "Detailed first-principles mechanics for Decentralized Finance (DeFi) & Smart Contracts topic 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s1_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s1_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s2_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s2_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s3",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s3_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s3_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s4",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s4_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s4_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s5",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s5_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t5_s5_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6",
      "description": "Detailed first-principles mechanics for Decentralized Finance (DeFi) & Smart Contracts topic 6.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s1_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s1_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s2_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s2_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s3",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s3_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s3_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s4",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s4_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s4_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s5",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Decentralized Finance (DeFi) & Smart Contracts Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s5_d1",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "fintech_root_p8_t6_s5_d2",
      "label": "Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Decentralized Finance (DeFi) & Smart Contracts Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "fintech_root",
      "target": "fintech_root_p1"
    },
    {
      "source": "fintech_root_p1",
      "target": "fintech_root_p1_t1"
    },
    {
      "source": "fintech_root_p1_t1",
      "target": "fintech_root_p1_t1_s1"
    },
    {
      "source": "fintech_root_p1_t1_s1",
      "target": "fintech_root_p1_t1_s1_d1"
    },
    {
      "source": "fintech_root_p1_t1_s1",
      "target": "fintech_root_p1_t1_s1_d2"
    },
    {
      "source": "fintech_root_p1_t1",
      "target": "fintech_root_p1_t1_s2"
    },
    {
      "source": "fintech_root_p1_t1_s2",
      "target": "fintech_root_p1_t1_s2_d1"
    },
    {
      "source": "fintech_root_p1_t1_s2",
      "target": "fintech_root_p1_t1_s2_d2"
    },
    {
      "source": "fintech_root_p1_t1",
      "target": "fintech_root_p1_t1_s3"
    },
    {
      "source": "fintech_root_p1_t1_s3",
      "target": "fintech_root_p1_t1_s3_d1"
    },
    {
      "source": "fintech_root_p1_t1_s3",
      "target": "fintech_root_p1_t1_s3_d2"
    },
    {
      "source": "fintech_root_p1_t1",
      "target": "fintech_root_p1_t1_s4"
    },
    {
      "source": "fintech_root_p1_t1_s4",
      "target": "fintech_root_p1_t1_s4_d1"
    },
    {
      "source": "fintech_root_p1_t1_s4",
      "target": "fintech_root_p1_t1_s4_d2"
    },
    {
      "source": "fintech_root_p1_t1",
      "target": "fintech_root_p1_t1_s5"
    },
    {
      "source": "fintech_root_p1_t1_s5",
      "target": "fintech_root_p1_t1_s5_d1"
    },
    {
      "source": "fintech_root_p1_t1_s5",
      "target": "fintech_root_p1_t1_s5_d2"
    },
    {
      "source": "fintech_root_p1",
      "target": "fintech_root_p1_t2"
    },
    {
      "source": "fintech_root_p1_t2",
      "target": "fintech_root_p1_t2_s1"
    },
    {
      "source": "fintech_root_p1_t2_s1",
      "target": "fintech_root_p1_t2_s1_d1"
    },
    {
      "source": "fintech_root_p1_t2_s1",
      "target": "fintech_root_p1_t2_s1_d2"
    },
    {
      "source": "fintech_root_p1_t2",
      "target": "fintech_root_p1_t2_s2"
    },
    {
      "source": "fintech_root_p1_t2_s2",
      "target": "fintech_root_p1_t2_s2_d1"
    },
    {
      "source": "fintech_root_p1_t2_s2",
      "target": "fintech_root_p1_t2_s2_d2"
    },
    {
      "source": "fintech_root_p1_t2",
      "target": "fintech_root_p1_t2_s3"
    },
    {
      "source": "fintech_root_p1_t2_s3",
      "target": "fintech_root_p1_t2_s3_d1"
    },
    {
      "source": "fintech_root_p1_t2_s3",
      "target": "fintech_root_p1_t2_s3_d2"
    },
    {
      "source": "fintech_root_p1_t2",
      "target": "fintech_root_p1_t2_s4"
    },
    {
      "source": "fintech_root_p1_t2_s4",
      "target": "fintech_root_p1_t2_s4_d1"
    },
    {
      "source": "fintech_root_p1_t2_s4",
      "target": "fintech_root_p1_t2_s4_d2"
    },
    {
      "source": "fintech_root_p1_t2",
      "target": "fintech_root_p1_t2_s5"
    },
    {
      "source": "fintech_root_p1_t2_s5",
      "target": "fintech_root_p1_t2_s5_d1"
    },
    {
      "source": "fintech_root_p1_t2_s5",
      "target": "fintech_root_p1_t2_s5_d2"
    },
    {
      "source": "fintech_root_p1",
      "target": "fintech_root_p1_t3"
    },
    {
      "source": "fintech_root_p1_t3",
      "target": "fintech_root_p1_t3_s1"
    },
    {
      "source": "fintech_root_p1_t3_s1",
      "target": "fintech_root_p1_t3_s1_d1"
    },
    {
      "source": "fintech_root_p1_t3_s1",
      "target": "fintech_root_p1_t3_s1_d2"
    },
    {
      "source": "fintech_root_p1_t3",
      "target": "fintech_root_p1_t3_s2"
    },
    {
      "source": "fintech_root_p1_t3_s2",
      "target": "fintech_root_p1_t3_s2_d1"
    },
    {
      "source": "fintech_root_p1_t3_s2",
      "target": "fintech_root_p1_t3_s2_d2"
    },
    {
      "source": "fintech_root_p1_t3",
      "target": "fintech_root_p1_t3_s3"
    },
    {
      "source": "fintech_root_p1_t3_s3",
      "target": "fintech_root_p1_t3_s3_d1"
    },
    {
      "source": "fintech_root_p1_t3_s3",
      "target": "fintech_root_p1_t3_s3_d2"
    },
    {
      "source": "fintech_root_p1_t3",
      "target": "fintech_root_p1_t3_s4"
    },
    {
      "source": "fintech_root_p1_t3_s4",
      "target": "fintech_root_p1_t3_s4_d1"
    },
    {
      "source": "fintech_root_p1_t3_s4",
      "target": "fintech_root_p1_t3_s4_d2"
    },
    {
      "source": "fintech_root_p1_t3",
      "target": "fintech_root_p1_t3_s5"
    },
    {
      "source": "fintech_root_p1_t3_s5",
      "target": "fintech_root_p1_t3_s5_d1"
    },
    {
      "source": "fintech_root_p1_t3_s5",
      "target": "fintech_root_p1_t3_s5_d2"
    },
    {
      "source": "fintech_root_p1",
      "target": "fintech_root_p1_t4"
    },
    {
      "source": "fintech_root_p1_t4",
      "target": "fintech_root_p1_t4_s1"
    },
    {
      "source": "fintech_root_p1_t4_s1",
      "target": "fintech_root_p1_t4_s1_d1"
    },
    {
      "source": "fintech_root_p1_t4_s1",
      "target": "fintech_root_p1_t4_s1_d2"
    },
    {
      "source": "fintech_root_p1_t4",
      "target": "fintech_root_p1_t4_s2"
    },
    {
      "source": "fintech_root_p1_t4_s2",
      "target": "fintech_root_p1_t4_s2_d1"
    },
    {
      "source": "fintech_root_p1_t4_s2",
      "target": "fintech_root_p1_t4_s2_d2"
    },
    {
      "source": "fintech_root_p1_t4",
      "target": "fintech_root_p1_t4_s3"
    },
    {
      "source": "fintech_root_p1_t4_s3",
      "target": "fintech_root_p1_t4_s3_d1"
    },
    {
      "source": "fintech_root_p1_t4_s3",
      "target": "fintech_root_p1_t4_s3_d2"
    },
    {
      "source": "fintech_root_p1_t4",
      "target": "fintech_root_p1_t4_s4"
    },
    {
      "source": "fintech_root_p1_t4_s4",
      "target": "fintech_root_p1_t4_s4_d1"
    },
    {
      "source": "fintech_root_p1_t4_s4",
      "target": "fintech_root_p1_t4_s4_d2"
    },
    {
      "source": "fintech_root_p1_t4",
      "target": "fintech_root_p1_t4_s5"
    },
    {
      "source": "fintech_root_p1_t4_s5",
      "target": "fintech_root_p1_t4_s5_d1"
    },
    {
      "source": "fintech_root_p1_t4_s5",
      "target": "fintech_root_p1_t4_s5_d2"
    },
    {
      "source": "fintech_root_p1",
      "target": "fintech_root_p1_t5"
    },
    {
      "source": "fintech_root_p1_t5",
      "target": "fintech_root_p1_t5_s1"
    },
    {
      "source": "fintech_root_p1_t5_s1",
      "target": "fintech_root_p1_t5_s1_d1"
    },
    {
      "source": "fintech_root_p1_t5_s1",
      "target": "fintech_root_p1_t5_s1_d2"
    },
    {
      "source": "fintech_root_p1_t5",
      "target": "fintech_root_p1_t5_s2"
    },
    {
      "source": "fintech_root_p1_t5_s2",
      "target": "fintech_root_p1_t5_s2_d1"
    },
    {
      "source": "fintech_root_p1_t5_s2",
      "target": "fintech_root_p1_t5_s2_d2"
    },
    {
      "source": "fintech_root_p1_t5",
      "target": "fintech_root_p1_t5_s3"
    },
    {
      "source": "fintech_root_p1_t5_s3",
      "target": "fintech_root_p1_t5_s3_d1"
    },
    {
      "source": "fintech_root_p1_t5_s3",
      "target": "fintech_root_p1_t5_s3_d2"
    },
    {
      "source": "fintech_root_p1_t5",
      "target": "fintech_root_p1_t5_s4"
    },
    {
      "source": "fintech_root_p1_t5_s4",
      "target": "fintech_root_p1_t5_s4_d1"
    },
    {
      "source": "fintech_root_p1_t5_s4",
      "target": "fintech_root_p1_t5_s4_d2"
    },
    {
      "source": "fintech_root_p1_t5",
      "target": "fintech_root_p1_t5_s5"
    },
    {
      "source": "fintech_root_p1_t5_s5",
      "target": "fintech_root_p1_t5_s5_d1"
    },
    {
      "source": "fintech_root_p1_t5_s5",
      "target": "fintech_root_p1_t5_s5_d2"
    },
    {
      "source": "fintech_root_p1",
      "target": "fintech_root_p1_t6"
    },
    {
      "source": "fintech_root_p1_t6",
      "target": "fintech_root_p1_t6_s1"
    },
    {
      "source": "fintech_root_p1_t6_s1",
      "target": "fintech_root_p1_t6_s1_d1"
    },
    {
      "source": "fintech_root_p1_t6_s1",
      "target": "fintech_root_p1_t6_s1_d2"
    },
    {
      "source": "fintech_root_p1_t6",
      "target": "fintech_root_p1_t6_s2"
    },
    {
      "source": "fintech_root_p1_t6_s2",
      "target": "fintech_root_p1_t6_s2_d1"
    },
    {
      "source": "fintech_root_p1_t6_s2",
      "target": "fintech_root_p1_t6_s2_d2"
    },
    {
      "source": "fintech_root_p1_t6",
      "target": "fintech_root_p1_t6_s3"
    },
    {
      "source": "fintech_root_p1_t6_s3",
      "target": "fintech_root_p1_t6_s3_d1"
    },
    {
      "source": "fintech_root_p1_t6_s3",
      "target": "fintech_root_p1_t6_s3_d2"
    },
    {
      "source": "fintech_root_p1_t6",
      "target": "fintech_root_p1_t6_s4"
    },
    {
      "source": "fintech_root_p1_t6_s4",
      "target": "fintech_root_p1_t6_s4_d1"
    },
    {
      "source": "fintech_root_p1_t6_s4",
      "target": "fintech_root_p1_t6_s4_d2"
    },
    {
      "source": "fintech_root_p1_t6",
      "target": "fintech_root_p1_t6_s5"
    },
    {
      "source": "fintech_root_p1_t6_s5",
      "target": "fintech_root_p1_t6_s5_d1"
    },
    {
      "source": "fintech_root_p1_t6_s5",
      "target": "fintech_root_p1_t6_s5_d2"
    },
    {
      "source": "fintech_root",
      "target": "fintech_root_p2"
    },
    {
      "source": "fintech_root_p2",
      "target": "fintech_root_p2_t1"
    },
    {
      "source": "fintech_root_p2_t1",
      "target": "fintech_root_p2_t1_s1"
    },
    {
      "source": "fintech_root_p2_t1_s1",
      "target": "fintech_root_p2_t1_s1_d1"
    },
    {
      "source": "fintech_root_p2_t1_s1",
      "target": "fintech_root_p2_t1_s1_d2"
    },
    {
      "source": "fintech_root_p2_t1",
      "target": "fintech_root_p2_t1_s2"
    },
    {
      "source": "fintech_root_p2_t1_s2",
      "target": "fintech_root_p2_t1_s2_d1"
    },
    {
      "source": "fintech_root_p2_t1_s2",
      "target": "fintech_root_p2_t1_s2_d2"
    },
    {
      "source": "fintech_root_p2_t1",
      "target": "fintech_root_p2_t1_s3"
    },
    {
      "source": "fintech_root_p2_t1_s3",
      "target": "fintech_root_p2_t1_s3_d1"
    },
    {
      "source": "fintech_root_p2_t1_s3",
      "target": "fintech_root_p2_t1_s3_d2"
    },
    {
      "source": "fintech_root_p2_t1",
      "target": "fintech_root_p2_t1_s4"
    },
    {
      "source": "fintech_root_p2_t1_s4",
      "target": "fintech_root_p2_t1_s4_d1"
    },
    {
      "source": "fintech_root_p2_t1_s4",
      "target": "fintech_root_p2_t1_s4_d2"
    },
    {
      "source": "fintech_root_p2_t1",
      "target": "fintech_root_p2_t1_s5"
    },
    {
      "source": "fintech_root_p2_t1_s5",
      "target": "fintech_root_p2_t1_s5_d1"
    },
    {
      "source": "fintech_root_p2_t1_s5",
      "target": "fintech_root_p2_t1_s5_d2"
    },
    {
      "source": "fintech_root_p2",
      "target": "fintech_root_p2_t2"
    },
    {
      "source": "fintech_root_p2_t2",
      "target": "fintech_root_p2_t2_s1"
    },
    {
      "source": "fintech_root_p2_t2_s1",
      "target": "fintech_root_p2_t2_s1_d1"
    },
    {
      "source": "fintech_root_p2_t2_s1",
      "target": "fintech_root_p2_t2_s1_d2"
    },
    {
      "source": "fintech_root_p2_t2",
      "target": "fintech_root_p2_t2_s2"
    },
    {
      "source": "fintech_root_p2_t2_s2",
      "target": "fintech_root_p2_t2_s2_d1"
    },
    {
      "source": "fintech_root_p2_t2_s2",
      "target": "fintech_root_p2_t2_s2_d2"
    },
    {
      "source": "fintech_root_p2_t2",
      "target": "fintech_root_p2_t2_s3"
    },
    {
      "source": "fintech_root_p2_t2_s3",
      "target": "fintech_root_p2_t2_s3_d1"
    },
    {
      "source": "fintech_root_p2_t2_s3",
      "target": "fintech_root_p2_t2_s3_d2"
    },
    {
      "source": "fintech_root_p2_t2",
      "target": "fintech_root_p2_t2_s4"
    },
    {
      "source": "fintech_root_p2_t2_s4",
      "target": "fintech_root_p2_t2_s4_d1"
    },
    {
      "source": "fintech_root_p2_t2_s4",
      "target": "fintech_root_p2_t2_s4_d2"
    },
    {
      "source": "fintech_root_p2_t2",
      "target": "fintech_root_p2_t2_s5"
    },
    {
      "source": "fintech_root_p2_t2_s5",
      "target": "fintech_root_p2_t2_s5_d1"
    },
    {
      "source": "fintech_root_p2_t2_s5",
      "target": "fintech_root_p2_t2_s5_d2"
    },
    {
      "source": "fintech_root_p2",
      "target": "fintech_root_p2_t3"
    },
    {
      "source": "fintech_root_p2_t3",
      "target": "fintech_root_p2_t3_s1"
    },
    {
      "source": "fintech_root_p2_t3_s1",
      "target": "fintech_root_p2_t3_s1_d1"
    },
    {
      "source": "fintech_root_p2_t3_s1",
      "target": "fintech_root_p2_t3_s1_d2"
    },
    {
      "source": "fintech_root_p2_t3",
      "target": "fintech_root_p2_t3_s2"
    },
    {
      "source": "fintech_root_p2_t3_s2",
      "target": "fintech_root_p2_t3_s2_d1"
    },
    {
      "source": "fintech_root_p2_t3_s2",
      "target": "fintech_root_p2_t3_s2_d2"
    },
    {
      "source": "fintech_root_p2_t3",
      "target": "fintech_root_p2_t3_s3"
    },
    {
      "source": "fintech_root_p2_t3_s3",
      "target": "fintech_root_p2_t3_s3_d1"
    },
    {
      "source": "fintech_root_p2_t3_s3",
      "target": "fintech_root_p2_t3_s3_d2"
    },
    {
      "source": "fintech_root_p2_t3",
      "target": "fintech_root_p2_t3_s4"
    },
    {
      "source": "fintech_root_p2_t3_s4",
      "target": "fintech_root_p2_t3_s4_d1"
    },
    {
      "source": "fintech_root_p2_t3_s4",
      "target": "fintech_root_p2_t3_s4_d2"
    },
    {
      "source": "fintech_root_p2_t3",
      "target": "fintech_root_p2_t3_s5"
    },
    {
      "source": "fintech_root_p2_t3_s5",
      "target": "fintech_root_p2_t3_s5_d1"
    },
    {
      "source": "fintech_root_p2_t3_s5",
      "target": "fintech_root_p2_t3_s5_d2"
    },
    {
      "source": "fintech_root_p2",
      "target": "fintech_root_p2_t4"
    },
    {
      "source": "fintech_root_p2_t4",
      "target": "fintech_root_p2_t4_s1"
    },
    {
      "source": "fintech_root_p2_t4_s1",
      "target": "fintech_root_p2_t4_s1_d1"
    },
    {
      "source": "fintech_root_p2_t4_s1",
      "target": "fintech_root_p2_t4_s1_d2"
    },
    {
      "source": "fintech_root_p2_t4",
      "target": "fintech_root_p2_t4_s2"
    },
    {
      "source": "fintech_root_p2_t4_s2",
      "target": "fintech_root_p2_t4_s2_d1"
    },
    {
      "source": "fintech_root_p2_t4_s2",
      "target": "fintech_root_p2_t4_s2_d2"
    },
    {
      "source": "fintech_root_p2_t4",
      "target": "fintech_root_p2_t4_s3"
    },
    {
      "source": "fintech_root_p2_t4_s3",
      "target": "fintech_root_p2_t4_s3_d1"
    },
    {
      "source": "fintech_root_p2_t4_s3",
      "target": "fintech_root_p2_t4_s3_d2"
    },
    {
      "source": "fintech_root_p2_t4",
      "target": "fintech_root_p2_t4_s4"
    },
    {
      "source": "fintech_root_p2_t4_s4",
      "target": "fintech_root_p2_t4_s4_d1"
    },
    {
      "source": "fintech_root_p2_t4_s4",
      "target": "fintech_root_p2_t4_s4_d2"
    },
    {
      "source": "fintech_root_p2_t4",
      "target": "fintech_root_p2_t4_s5"
    },
    {
      "source": "fintech_root_p2_t4_s5",
      "target": "fintech_root_p2_t4_s5_d1"
    },
    {
      "source": "fintech_root_p2_t4_s5",
      "target": "fintech_root_p2_t4_s5_d2"
    },
    {
      "source": "fintech_root_p2",
      "target": "fintech_root_p2_t5"
    },
    {
      "source": "fintech_root_p2_t5",
      "target": "fintech_root_p2_t5_s1"
    },
    {
      "source": "fintech_root_p2_t5_s1",
      "target": "fintech_root_p2_t5_s1_d1"
    },
    {
      "source": "fintech_root_p2_t5_s1",
      "target": "fintech_root_p2_t5_s1_d2"
    },
    {
      "source": "fintech_root_p2_t5",
      "target": "fintech_root_p2_t5_s2"
    },
    {
      "source": "fintech_root_p2_t5_s2",
      "target": "fintech_root_p2_t5_s2_d1"
    },
    {
      "source": "fintech_root_p2_t5_s2",
      "target": "fintech_root_p2_t5_s2_d2"
    },
    {
      "source": "fintech_root_p2_t5",
      "target": "fintech_root_p2_t5_s3"
    },
    {
      "source": "fintech_root_p2_t5_s3",
      "target": "fintech_root_p2_t5_s3_d1"
    },
    {
      "source": "fintech_root_p2_t5_s3",
      "target": "fintech_root_p2_t5_s3_d2"
    },
    {
      "source": "fintech_root_p2_t5",
      "target": "fintech_root_p2_t5_s4"
    },
    {
      "source": "fintech_root_p2_t5_s4",
      "target": "fintech_root_p2_t5_s4_d1"
    },
    {
      "source": "fintech_root_p2_t5_s4",
      "target": "fintech_root_p2_t5_s4_d2"
    },
    {
      "source": "fintech_root_p2_t5",
      "target": "fintech_root_p2_t5_s5"
    },
    {
      "source": "fintech_root_p2_t5_s5",
      "target": "fintech_root_p2_t5_s5_d1"
    },
    {
      "source": "fintech_root_p2_t5_s5",
      "target": "fintech_root_p2_t5_s5_d2"
    },
    {
      "source": "fintech_root_p2",
      "target": "fintech_root_p2_t6"
    },
    {
      "source": "fintech_root_p2_t6",
      "target": "fintech_root_p2_t6_s1"
    },
    {
      "source": "fintech_root_p2_t6_s1",
      "target": "fintech_root_p2_t6_s1_d1"
    },
    {
      "source": "fintech_root_p2_t6_s1",
      "target": "fintech_root_p2_t6_s1_d2"
    },
    {
      "source": "fintech_root_p2_t6",
      "target": "fintech_root_p2_t6_s2"
    },
    {
      "source": "fintech_root_p2_t6_s2",
      "target": "fintech_root_p2_t6_s2_d1"
    },
    {
      "source": "fintech_root_p2_t6_s2",
      "target": "fintech_root_p2_t6_s2_d2"
    },
    {
      "source": "fintech_root_p2_t6",
      "target": "fintech_root_p2_t6_s3"
    },
    {
      "source": "fintech_root_p2_t6_s3",
      "target": "fintech_root_p2_t6_s3_d1"
    },
    {
      "source": "fintech_root_p2_t6_s3",
      "target": "fintech_root_p2_t6_s3_d2"
    },
    {
      "source": "fintech_root_p2_t6",
      "target": "fintech_root_p2_t6_s4"
    },
    {
      "source": "fintech_root_p2_t6_s4",
      "target": "fintech_root_p2_t6_s4_d1"
    },
    {
      "source": "fintech_root_p2_t6_s4",
      "target": "fintech_root_p2_t6_s4_d2"
    },
    {
      "source": "fintech_root_p2_t6",
      "target": "fintech_root_p2_t6_s5"
    },
    {
      "source": "fintech_root_p2_t6_s5",
      "target": "fintech_root_p2_t6_s5_d1"
    },
    {
      "source": "fintech_root_p2_t6_s5",
      "target": "fintech_root_p2_t6_s5_d2"
    },
    {
      "source": "fintech_root",
      "target": "fintech_root_p3"
    },
    {
      "source": "fintech_root_p3",
      "target": "fintech_root_p3_t1"
    },
    {
      "source": "fintech_root_p3_t1",
      "target": "fintech_root_p3_t1_s1"
    },
    {
      "source": "fintech_root_p3_t1_s1",
      "target": "fintech_root_p3_t1_s1_d1"
    },
    {
      "source": "fintech_root_p3_t1_s1",
      "target": "fintech_root_p3_t1_s1_d2"
    },
    {
      "source": "fintech_root_p3_t1",
      "target": "fintech_root_p3_t1_s2"
    },
    {
      "source": "fintech_root_p3_t1_s2",
      "target": "fintech_root_p3_t1_s2_d1"
    },
    {
      "source": "fintech_root_p3_t1_s2",
      "target": "fintech_root_p3_t1_s2_d2"
    },
    {
      "source": "fintech_root_p3_t1",
      "target": "fintech_root_p3_t1_s3"
    },
    {
      "source": "fintech_root_p3_t1_s3",
      "target": "fintech_root_p3_t1_s3_d1"
    },
    {
      "source": "fintech_root_p3_t1_s3",
      "target": "fintech_root_p3_t1_s3_d2"
    },
    {
      "source": "fintech_root_p3_t1",
      "target": "fintech_root_p3_t1_s4"
    },
    {
      "source": "fintech_root_p3_t1_s4",
      "target": "fintech_root_p3_t1_s4_d1"
    },
    {
      "source": "fintech_root_p3_t1_s4",
      "target": "fintech_root_p3_t1_s4_d2"
    },
    {
      "source": "fintech_root_p3_t1",
      "target": "fintech_root_p3_t1_s5"
    },
    {
      "source": "fintech_root_p3_t1_s5",
      "target": "fintech_root_p3_t1_s5_d1"
    },
    {
      "source": "fintech_root_p3_t1_s5",
      "target": "fintech_root_p3_t1_s5_d2"
    },
    {
      "source": "fintech_root_p3",
      "target": "fintech_root_p3_t2"
    },
    {
      "source": "fintech_root_p3_t2",
      "target": "fintech_root_p3_t2_s1"
    },
    {
      "source": "fintech_root_p3_t2_s1",
      "target": "fintech_root_p3_t2_s1_d1"
    },
    {
      "source": "fintech_root_p3_t2_s1",
      "target": "fintech_root_p3_t2_s1_d2"
    },
    {
      "source": "fintech_root_p3_t2",
      "target": "fintech_root_p3_t2_s2"
    },
    {
      "source": "fintech_root_p3_t2_s2",
      "target": "fintech_root_p3_t2_s2_d1"
    },
    {
      "source": "fintech_root_p3_t2_s2",
      "target": "fintech_root_p3_t2_s2_d2"
    },
    {
      "source": "fintech_root_p3_t2",
      "target": "fintech_root_p3_t2_s3"
    },
    {
      "source": "fintech_root_p3_t2_s3",
      "target": "fintech_root_p3_t2_s3_d1"
    },
    {
      "source": "fintech_root_p3_t2_s3",
      "target": "fintech_root_p3_t2_s3_d2"
    },
    {
      "source": "fintech_root_p3_t2",
      "target": "fintech_root_p3_t2_s4"
    },
    {
      "source": "fintech_root_p3_t2_s4",
      "target": "fintech_root_p3_t2_s4_d1"
    },
    {
      "source": "fintech_root_p3_t2_s4",
      "target": "fintech_root_p3_t2_s4_d2"
    },
    {
      "source": "fintech_root_p3_t2",
      "target": "fintech_root_p3_t2_s5"
    },
    {
      "source": "fintech_root_p3_t2_s5",
      "target": "fintech_root_p3_t2_s5_d1"
    },
    {
      "source": "fintech_root_p3_t2_s5",
      "target": "fintech_root_p3_t2_s5_d2"
    },
    {
      "source": "fintech_root_p3",
      "target": "fintech_root_p3_t3"
    },
    {
      "source": "fintech_root_p3_t3",
      "target": "fintech_root_p3_t3_s1"
    },
    {
      "source": "fintech_root_p3_t3_s1",
      "target": "fintech_root_p3_t3_s1_d1"
    },
    {
      "source": "fintech_root_p3_t3_s1",
      "target": "fintech_root_p3_t3_s1_d2"
    },
    {
      "source": "fintech_root_p3_t3",
      "target": "fintech_root_p3_t3_s2"
    },
    {
      "source": "fintech_root_p3_t3_s2",
      "target": "fintech_root_p3_t3_s2_d1"
    },
    {
      "source": "fintech_root_p3_t3_s2",
      "target": "fintech_root_p3_t3_s2_d2"
    },
    {
      "source": "fintech_root_p3_t3",
      "target": "fintech_root_p3_t3_s3"
    },
    {
      "source": "fintech_root_p3_t3_s3",
      "target": "fintech_root_p3_t3_s3_d1"
    },
    {
      "source": "fintech_root_p3_t3_s3",
      "target": "fintech_root_p3_t3_s3_d2"
    },
    {
      "source": "fintech_root_p3_t3",
      "target": "fintech_root_p3_t3_s4"
    },
    {
      "source": "fintech_root_p3_t3_s4",
      "target": "fintech_root_p3_t3_s4_d1"
    },
    {
      "source": "fintech_root_p3_t3_s4",
      "target": "fintech_root_p3_t3_s4_d2"
    },
    {
      "source": "fintech_root_p3_t3",
      "target": "fintech_root_p3_t3_s5"
    },
    {
      "source": "fintech_root_p3_t3_s5",
      "target": "fintech_root_p3_t3_s5_d1"
    },
    {
      "source": "fintech_root_p3_t3_s5",
      "target": "fintech_root_p3_t3_s5_d2"
    },
    {
      "source": "fintech_root_p3",
      "target": "fintech_root_p3_t4"
    },
    {
      "source": "fintech_root_p3_t4",
      "target": "fintech_root_p3_t4_s1"
    },
    {
      "source": "fintech_root_p3_t4_s1",
      "target": "fintech_root_p3_t4_s1_d1"
    },
    {
      "source": "fintech_root_p3_t4_s1",
      "target": "fintech_root_p3_t4_s1_d2"
    },
    {
      "source": "fintech_root_p3_t4",
      "target": "fintech_root_p3_t4_s2"
    },
    {
      "source": "fintech_root_p3_t4_s2",
      "target": "fintech_root_p3_t4_s2_d1"
    },
    {
      "source": "fintech_root_p3_t4_s2",
      "target": "fintech_root_p3_t4_s2_d2"
    },
    {
      "source": "fintech_root_p3_t4",
      "target": "fintech_root_p3_t4_s3"
    },
    {
      "source": "fintech_root_p3_t4_s3",
      "target": "fintech_root_p3_t4_s3_d1"
    },
    {
      "source": "fintech_root_p3_t4_s3",
      "target": "fintech_root_p3_t4_s3_d2"
    },
    {
      "source": "fintech_root_p3_t4",
      "target": "fintech_root_p3_t4_s4"
    },
    {
      "source": "fintech_root_p3_t4_s4",
      "target": "fintech_root_p3_t4_s4_d1"
    },
    {
      "source": "fintech_root_p3_t4_s4",
      "target": "fintech_root_p3_t4_s4_d2"
    },
    {
      "source": "fintech_root_p3_t4",
      "target": "fintech_root_p3_t4_s5"
    },
    {
      "source": "fintech_root_p3_t4_s5",
      "target": "fintech_root_p3_t4_s5_d1"
    },
    {
      "source": "fintech_root_p3_t4_s5",
      "target": "fintech_root_p3_t4_s5_d2"
    },
    {
      "source": "fintech_root_p3",
      "target": "fintech_root_p3_t5"
    },
    {
      "source": "fintech_root_p3_t5",
      "target": "fintech_root_p3_t5_s1"
    },
    {
      "source": "fintech_root_p3_t5_s1",
      "target": "fintech_root_p3_t5_s1_d1"
    },
    {
      "source": "fintech_root_p3_t5_s1",
      "target": "fintech_root_p3_t5_s1_d2"
    },
    {
      "source": "fintech_root_p3_t5",
      "target": "fintech_root_p3_t5_s2"
    },
    {
      "source": "fintech_root_p3_t5_s2",
      "target": "fintech_root_p3_t5_s2_d1"
    },
    {
      "source": "fintech_root_p3_t5_s2",
      "target": "fintech_root_p3_t5_s2_d2"
    },
    {
      "source": "fintech_root_p3_t5",
      "target": "fintech_root_p3_t5_s3"
    },
    {
      "source": "fintech_root_p3_t5_s3",
      "target": "fintech_root_p3_t5_s3_d1"
    },
    {
      "source": "fintech_root_p3_t5_s3",
      "target": "fintech_root_p3_t5_s3_d2"
    },
    {
      "source": "fintech_root_p3_t5",
      "target": "fintech_root_p3_t5_s4"
    },
    {
      "source": "fintech_root_p3_t5_s4",
      "target": "fintech_root_p3_t5_s4_d1"
    },
    {
      "source": "fintech_root_p3_t5_s4",
      "target": "fintech_root_p3_t5_s4_d2"
    },
    {
      "source": "fintech_root_p3_t5",
      "target": "fintech_root_p3_t5_s5"
    },
    {
      "source": "fintech_root_p3_t5_s5",
      "target": "fintech_root_p3_t5_s5_d1"
    },
    {
      "source": "fintech_root_p3_t5_s5",
      "target": "fintech_root_p3_t5_s5_d2"
    },
    {
      "source": "fintech_root_p3",
      "target": "fintech_root_p3_t6"
    },
    {
      "source": "fintech_root_p3_t6",
      "target": "fintech_root_p3_t6_s1"
    },
    {
      "source": "fintech_root_p3_t6_s1",
      "target": "fintech_root_p3_t6_s1_d1"
    },
    {
      "source": "fintech_root_p3_t6_s1",
      "target": "fintech_root_p3_t6_s1_d2"
    },
    {
      "source": "fintech_root_p3_t6",
      "target": "fintech_root_p3_t6_s2"
    },
    {
      "source": "fintech_root_p3_t6_s2",
      "target": "fintech_root_p3_t6_s2_d1"
    },
    {
      "source": "fintech_root_p3_t6_s2",
      "target": "fintech_root_p3_t6_s2_d2"
    },
    {
      "source": "fintech_root_p3_t6",
      "target": "fintech_root_p3_t6_s3"
    },
    {
      "source": "fintech_root_p3_t6_s3",
      "target": "fintech_root_p3_t6_s3_d1"
    },
    {
      "source": "fintech_root_p3_t6_s3",
      "target": "fintech_root_p3_t6_s3_d2"
    },
    {
      "source": "fintech_root_p3_t6",
      "target": "fintech_root_p3_t6_s4"
    },
    {
      "source": "fintech_root_p3_t6_s4",
      "target": "fintech_root_p3_t6_s4_d1"
    },
    {
      "source": "fintech_root_p3_t6_s4",
      "target": "fintech_root_p3_t6_s4_d2"
    },
    {
      "source": "fintech_root_p3_t6",
      "target": "fintech_root_p3_t6_s5"
    },
    {
      "source": "fintech_root_p3_t6_s5",
      "target": "fintech_root_p3_t6_s5_d1"
    },
    {
      "source": "fintech_root_p3_t6_s5",
      "target": "fintech_root_p3_t6_s5_d2"
    },
    {
      "source": "fintech_root",
      "target": "fintech_root_p4"
    },
    {
      "source": "fintech_root_p4",
      "target": "fintech_root_p4_t1"
    },
    {
      "source": "fintech_root_p4_t1",
      "target": "fintech_root_p4_t1_s1"
    },
    {
      "source": "fintech_root_p4_t1_s1",
      "target": "fintech_root_p4_t1_s1_d1"
    },
    {
      "source": "fintech_root_p4_t1_s1",
      "target": "fintech_root_p4_t1_s1_d2"
    },
    {
      "source": "fintech_root_p4_t1",
      "target": "fintech_root_p4_t1_s2"
    },
    {
      "source": "fintech_root_p4_t1_s2",
      "target": "fintech_root_p4_t1_s2_d1"
    },
    {
      "source": "fintech_root_p4_t1_s2",
      "target": "fintech_root_p4_t1_s2_d2"
    },
    {
      "source": "fintech_root_p4_t1",
      "target": "fintech_root_p4_t1_s3"
    },
    {
      "source": "fintech_root_p4_t1_s3",
      "target": "fintech_root_p4_t1_s3_d1"
    },
    {
      "source": "fintech_root_p4_t1_s3",
      "target": "fintech_root_p4_t1_s3_d2"
    },
    {
      "source": "fintech_root_p4_t1",
      "target": "fintech_root_p4_t1_s4"
    },
    {
      "source": "fintech_root_p4_t1_s4",
      "target": "fintech_root_p4_t1_s4_d1"
    },
    {
      "source": "fintech_root_p4_t1_s4",
      "target": "fintech_root_p4_t1_s4_d2"
    },
    {
      "source": "fintech_root_p4_t1",
      "target": "fintech_root_p4_t1_s5"
    },
    {
      "source": "fintech_root_p4_t1_s5",
      "target": "fintech_root_p4_t1_s5_d1"
    },
    {
      "source": "fintech_root_p4_t1_s5",
      "target": "fintech_root_p4_t1_s5_d2"
    },
    {
      "source": "fintech_root_p4",
      "target": "fintech_root_p4_t2"
    },
    {
      "source": "fintech_root_p4_t2",
      "target": "fintech_root_p4_t2_s1"
    },
    {
      "source": "fintech_root_p4_t2_s1",
      "target": "fintech_root_p4_t2_s1_d1"
    },
    {
      "source": "fintech_root_p4_t2_s1",
      "target": "fintech_root_p4_t2_s1_d2"
    },
    {
      "source": "fintech_root_p4_t2",
      "target": "fintech_root_p4_t2_s2"
    },
    {
      "source": "fintech_root_p4_t2_s2",
      "target": "fintech_root_p4_t2_s2_d1"
    },
    {
      "source": "fintech_root_p4_t2_s2",
      "target": "fintech_root_p4_t2_s2_d2"
    },
    {
      "source": "fintech_root_p4_t2",
      "target": "fintech_root_p4_t2_s3"
    },
    {
      "source": "fintech_root_p4_t2_s3",
      "target": "fintech_root_p4_t2_s3_d1"
    },
    {
      "source": "fintech_root_p4_t2_s3",
      "target": "fintech_root_p4_t2_s3_d2"
    },
    {
      "source": "fintech_root_p4_t2",
      "target": "fintech_root_p4_t2_s4"
    },
    {
      "source": "fintech_root_p4_t2_s4",
      "target": "fintech_root_p4_t2_s4_d1"
    },
    {
      "source": "fintech_root_p4_t2_s4",
      "target": "fintech_root_p4_t2_s4_d2"
    },
    {
      "source": "fintech_root_p4_t2",
      "target": "fintech_root_p4_t2_s5"
    },
    {
      "source": "fintech_root_p4_t2_s5",
      "target": "fintech_root_p4_t2_s5_d1"
    },
    {
      "source": "fintech_root_p4_t2_s5",
      "target": "fintech_root_p4_t2_s5_d2"
    },
    {
      "source": "fintech_root_p4",
      "target": "fintech_root_p4_t3"
    },
    {
      "source": "fintech_root_p4_t3",
      "target": "fintech_root_p4_t3_s1"
    },
    {
      "source": "fintech_root_p4_t3_s1",
      "target": "fintech_root_p4_t3_s1_d1"
    },
    {
      "source": "fintech_root_p4_t3_s1",
      "target": "fintech_root_p4_t3_s1_d2"
    },
    {
      "source": "fintech_root_p4_t3",
      "target": "fintech_root_p4_t3_s2"
    },
    {
      "source": "fintech_root_p4_t3_s2",
      "target": "fintech_root_p4_t3_s2_d1"
    },
    {
      "source": "fintech_root_p4_t3_s2",
      "target": "fintech_root_p4_t3_s2_d2"
    },
    {
      "source": "fintech_root_p4_t3",
      "target": "fintech_root_p4_t3_s3"
    },
    {
      "source": "fintech_root_p4_t3_s3",
      "target": "fintech_root_p4_t3_s3_d1"
    },
    {
      "source": "fintech_root_p4_t3_s3",
      "target": "fintech_root_p4_t3_s3_d2"
    },
    {
      "source": "fintech_root_p4_t3",
      "target": "fintech_root_p4_t3_s4"
    },
    {
      "source": "fintech_root_p4_t3_s4",
      "target": "fintech_root_p4_t3_s4_d1"
    },
    {
      "source": "fintech_root_p4_t3_s4",
      "target": "fintech_root_p4_t3_s4_d2"
    },
    {
      "source": "fintech_root_p4_t3",
      "target": "fintech_root_p4_t3_s5"
    },
    {
      "source": "fintech_root_p4_t3_s5",
      "target": "fintech_root_p4_t3_s5_d1"
    },
    {
      "source": "fintech_root_p4_t3_s5",
      "target": "fintech_root_p4_t3_s5_d2"
    },
    {
      "source": "fintech_root_p4",
      "target": "fintech_root_p4_t4"
    },
    {
      "source": "fintech_root_p4_t4",
      "target": "fintech_root_p4_t4_s1"
    },
    {
      "source": "fintech_root_p4_t4_s1",
      "target": "fintech_root_p4_t4_s1_d1"
    },
    {
      "source": "fintech_root_p4_t4_s1",
      "target": "fintech_root_p4_t4_s1_d2"
    },
    {
      "source": "fintech_root_p4_t4",
      "target": "fintech_root_p4_t4_s2"
    },
    {
      "source": "fintech_root_p4_t4_s2",
      "target": "fintech_root_p4_t4_s2_d1"
    },
    {
      "source": "fintech_root_p4_t4_s2",
      "target": "fintech_root_p4_t4_s2_d2"
    },
    {
      "source": "fintech_root_p4_t4",
      "target": "fintech_root_p4_t4_s3"
    },
    {
      "source": "fintech_root_p4_t4_s3",
      "target": "fintech_root_p4_t4_s3_d1"
    },
    {
      "source": "fintech_root_p4_t4_s3",
      "target": "fintech_root_p4_t4_s3_d2"
    },
    {
      "source": "fintech_root_p4_t4",
      "target": "fintech_root_p4_t4_s4"
    },
    {
      "source": "fintech_root_p4_t4_s4",
      "target": "fintech_root_p4_t4_s4_d1"
    },
    {
      "source": "fintech_root_p4_t4_s4",
      "target": "fintech_root_p4_t4_s4_d2"
    },
    {
      "source": "fintech_root_p4_t4",
      "target": "fintech_root_p4_t4_s5"
    },
    {
      "source": "fintech_root_p4_t4_s5",
      "target": "fintech_root_p4_t4_s5_d1"
    },
    {
      "source": "fintech_root_p4_t4_s5",
      "target": "fintech_root_p4_t4_s5_d2"
    },
    {
      "source": "fintech_root_p4",
      "target": "fintech_root_p4_t5"
    },
    {
      "source": "fintech_root_p4_t5",
      "target": "fintech_root_p4_t5_s1"
    },
    {
      "source": "fintech_root_p4_t5_s1",
      "target": "fintech_root_p4_t5_s1_d1"
    },
    {
      "source": "fintech_root_p4_t5_s1",
      "target": "fintech_root_p4_t5_s1_d2"
    },
    {
      "source": "fintech_root_p4_t5",
      "target": "fintech_root_p4_t5_s2"
    },
    {
      "source": "fintech_root_p4_t5_s2",
      "target": "fintech_root_p4_t5_s2_d1"
    },
    {
      "source": "fintech_root_p4_t5_s2",
      "target": "fintech_root_p4_t5_s2_d2"
    },
    {
      "source": "fintech_root_p4_t5",
      "target": "fintech_root_p4_t5_s3"
    },
    {
      "source": "fintech_root_p4_t5_s3",
      "target": "fintech_root_p4_t5_s3_d1"
    },
    {
      "source": "fintech_root_p4_t5_s3",
      "target": "fintech_root_p4_t5_s3_d2"
    },
    {
      "source": "fintech_root_p4_t5",
      "target": "fintech_root_p4_t5_s4"
    },
    {
      "source": "fintech_root_p4_t5_s4",
      "target": "fintech_root_p4_t5_s4_d1"
    },
    {
      "source": "fintech_root_p4_t5_s4",
      "target": "fintech_root_p4_t5_s4_d2"
    },
    {
      "source": "fintech_root_p4_t5",
      "target": "fintech_root_p4_t5_s5"
    },
    {
      "source": "fintech_root_p4_t5_s5",
      "target": "fintech_root_p4_t5_s5_d1"
    },
    {
      "source": "fintech_root_p4_t5_s5",
      "target": "fintech_root_p4_t5_s5_d2"
    },
    {
      "source": "fintech_root_p4",
      "target": "fintech_root_p4_t6"
    },
    {
      "source": "fintech_root_p4_t6",
      "target": "fintech_root_p4_t6_s1"
    },
    {
      "source": "fintech_root_p4_t6_s1",
      "target": "fintech_root_p4_t6_s1_d1"
    },
    {
      "source": "fintech_root_p4_t6_s1",
      "target": "fintech_root_p4_t6_s1_d2"
    },
    {
      "source": "fintech_root_p4_t6",
      "target": "fintech_root_p4_t6_s2"
    },
    {
      "source": "fintech_root_p4_t6_s2",
      "target": "fintech_root_p4_t6_s2_d1"
    },
    {
      "source": "fintech_root_p4_t6_s2",
      "target": "fintech_root_p4_t6_s2_d2"
    },
    {
      "source": "fintech_root_p4_t6",
      "target": "fintech_root_p4_t6_s3"
    },
    {
      "source": "fintech_root_p4_t6_s3",
      "target": "fintech_root_p4_t6_s3_d1"
    },
    {
      "source": "fintech_root_p4_t6_s3",
      "target": "fintech_root_p4_t6_s3_d2"
    },
    {
      "source": "fintech_root_p4_t6",
      "target": "fintech_root_p4_t6_s4"
    },
    {
      "source": "fintech_root_p4_t6_s4",
      "target": "fintech_root_p4_t6_s4_d1"
    },
    {
      "source": "fintech_root_p4_t6_s4",
      "target": "fintech_root_p4_t6_s4_d2"
    },
    {
      "source": "fintech_root_p4_t6",
      "target": "fintech_root_p4_t6_s5"
    },
    {
      "source": "fintech_root_p4_t6_s5",
      "target": "fintech_root_p4_t6_s5_d1"
    },
    {
      "source": "fintech_root_p4_t6_s5",
      "target": "fintech_root_p4_t6_s5_d2"
    },
    {
      "source": "fintech_root",
      "target": "fintech_root_p5"
    },
    {
      "source": "fintech_root_p5",
      "target": "fintech_root_p5_t1"
    },
    {
      "source": "fintech_root_p5_t1",
      "target": "fintech_root_p5_t1_s1"
    },
    {
      "source": "fintech_root_p5_t1_s1",
      "target": "fintech_root_p5_t1_s1_d1"
    },
    {
      "source": "fintech_root_p5_t1_s1",
      "target": "fintech_root_p5_t1_s1_d2"
    },
    {
      "source": "fintech_root_p5_t1",
      "target": "fintech_root_p5_t1_s2"
    },
    {
      "source": "fintech_root_p5_t1_s2",
      "target": "fintech_root_p5_t1_s2_d1"
    },
    {
      "source": "fintech_root_p5_t1_s2",
      "target": "fintech_root_p5_t1_s2_d2"
    },
    {
      "source": "fintech_root_p5_t1",
      "target": "fintech_root_p5_t1_s3"
    },
    {
      "source": "fintech_root_p5_t1_s3",
      "target": "fintech_root_p5_t1_s3_d1"
    },
    {
      "source": "fintech_root_p5_t1_s3",
      "target": "fintech_root_p5_t1_s3_d2"
    },
    {
      "source": "fintech_root_p5_t1",
      "target": "fintech_root_p5_t1_s4"
    },
    {
      "source": "fintech_root_p5_t1_s4",
      "target": "fintech_root_p5_t1_s4_d1"
    },
    {
      "source": "fintech_root_p5_t1_s4",
      "target": "fintech_root_p5_t1_s4_d2"
    },
    {
      "source": "fintech_root_p5_t1",
      "target": "fintech_root_p5_t1_s5"
    },
    {
      "source": "fintech_root_p5_t1_s5",
      "target": "fintech_root_p5_t1_s5_d1"
    },
    {
      "source": "fintech_root_p5_t1_s5",
      "target": "fintech_root_p5_t1_s5_d2"
    },
    {
      "source": "fintech_root_p5",
      "target": "fintech_root_p5_t2"
    },
    {
      "source": "fintech_root_p5_t2",
      "target": "fintech_root_p5_t2_s1"
    },
    {
      "source": "fintech_root_p5_t2_s1",
      "target": "fintech_root_p5_t2_s1_d1"
    },
    {
      "source": "fintech_root_p5_t2_s1",
      "target": "fintech_root_p5_t2_s1_d2"
    },
    {
      "source": "fintech_root_p5_t2",
      "target": "fintech_root_p5_t2_s2"
    },
    {
      "source": "fintech_root_p5_t2_s2",
      "target": "fintech_root_p5_t2_s2_d1"
    },
    {
      "source": "fintech_root_p5_t2_s2",
      "target": "fintech_root_p5_t2_s2_d2"
    },
    {
      "source": "fintech_root_p5_t2",
      "target": "fintech_root_p5_t2_s3"
    },
    {
      "source": "fintech_root_p5_t2_s3",
      "target": "fintech_root_p5_t2_s3_d1"
    },
    {
      "source": "fintech_root_p5_t2_s3",
      "target": "fintech_root_p5_t2_s3_d2"
    },
    {
      "source": "fintech_root_p5_t2",
      "target": "fintech_root_p5_t2_s4"
    },
    {
      "source": "fintech_root_p5_t2_s4",
      "target": "fintech_root_p5_t2_s4_d1"
    },
    {
      "source": "fintech_root_p5_t2_s4",
      "target": "fintech_root_p5_t2_s4_d2"
    },
    {
      "source": "fintech_root_p5_t2",
      "target": "fintech_root_p5_t2_s5"
    },
    {
      "source": "fintech_root_p5_t2_s5",
      "target": "fintech_root_p5_t2_s5_d1"
    },
    {
      "source": "fintech_root_p5_t2_s5",
      "target": "fintech_root_p5_t2_s5_d2"
    },
    {
      "source": "fintech_root_p5",
      "target": "fintech_root_p5_t3"
    },
    {
      "source": "fintech_root_p5_t3",
      "target": "fintech_root_p5_t3_s1"
    },
    {
      "source": "fintech_root_p5_t3_s1",
      "target": "fintech_root_p5_t3_s1_d1"
    },
    {
      "source": "fintech_root_p5_t3_s1",
      "target": "fintech_root_p5_t3_s1_d2"
    },
    {
      "source": "fintech_root_p5_t3",
      "target": "fintech_root_p5_t3_s2"
    },
    {
      "source": "fintech_root_p5_t3_s2",
      "target": "fintech_root_p5_t3_s2_d1"
    },
    {
      "source": "fintech_root_p5_t3_s2",
      "target": "fintech_root_p5_t3_s2_d2"
    },
    {
      "source": "fintech_root_p5_t3",
      "target": "fintech_root_p5_t3_s3"
    },
    {
      "source": "fintech_root_p5_t3_s3",
      "target": "fintech_root_p5_t3_s3_d1"
    },
    {
      "source": "fintech_root_p5_t3_s3",
      "target": "fintech_root_p5_t3_s3_d2"
    },
    {
      "source": "fintech_root_p5_t3",
      "target": "fintech_root_p5_t3_s4"
    },
    {
      "source": "fintech_root_p5_t3_s4",
      "target": "fintech_root_p5_t3_s4_d1"
    },
    {
      "source": "fintech_root_p5_t3_s4",
      "target": "fintech_root_p5_t3_s4_d2"
    },
    {
      "source": "fintech_root_p5_t3",
      "target": "fintech_root_p5_t3_s5"
    },
    {
      "source": "fintech_root_p5_t3_s5",
      "target": "fintech_root_p5_t3_s5_d1"
    },
    {
      "source": "fintech_root_p5_t3_s5",
      "target": "fintech_root_p5_t3_s5_d2"
    },
    {
      "source": "fintech_root_p5",
      "target": "fintech_root_p5_t4"
    },
    {
      "source": "fintech_root_p5_t4",
      "target": "fintech_root_p5_t4_s1"
    },
    {
      "source": "fintech_root_p5_t4_s1",
      "target": "fintech_root_p5_t4_s1_d1"
    },
    {
      "source": "fintech_root_p5_t4_s1",
      "target": "fintech_root_p5_t4_s1_d2"
    },
    {
      "source": "fintech_root_p5_t4",
      "target": "fintech_root_p5_t4_s2"
    },
    {
      "source": "fintech_root_p5_t4_s2",
      "target": "fintech_root_p5_t4_s2_d1"
    },
    {
      "source": "fintech_root_p5_t4_s2",
      "target": "fintech_root_p5_t4_s2_d2"
    },
    {
      "source": "fintech_root_p5_t4",
      "target": "fintech_root_p5_t4_s3"
    },
    {
      "source": "fintech_root_p5_t4_s3",
      "target": "fintech_root_p5_t4_s3_d1"
    },
    {
      "source": "fintech_root_p5_t4_s3",
      "target": "fintech_root_p5_t4_s3_d2"
    },
    {
      "source": "fintech_root_p5_t4",
      "target": "fintech_root_p5_t4_s4"
    },
    {
      "source": "fintech_root_p5_t4_s4",
      "target": "fintech_root_p5_t4_s4_d1"
    },
    {
      "source": "fintech_root_p5_t4_s4",
      "target": "fintech_root_p5_t4_s4_d2"
    },
    {
      "source": "fintech_root_p5_t4",
      "target": "fintech_root_p5_t4_s5"
    },
    {
      "source": "fintech_root_p5_t4_s5",
      "target": "fintech_root_p5_t4_s5_d1"
    },
    {
      "source": "fintech_root_p5_t4_s5",
      "target": "fintech_root_p5_t4_s5_d2"
    },
    {
      "source": "fintech_root_p5",
      "target": "fintech_root_p5_t5"
    },
    {
      "source": "fintech_root_p5_t5",
      "target": "fintech_root_p5_t5_s1"
    },
    {
      "source": "fintech_root_p5_t5_s1",
      "target": "fintech_root_p5_t5_s1_d1"
    },
    {
      "source": "fintech_root_p5_t5_s1",
      "target": "fintech_root_p5_t5_s1_d2"
    },
    {
      "source": "fintech_root_p5_t5",
      "target": "fintech_root_p5_t5_s2"
    },
    {
      "source": "fintech_root_p5_t5_s2",
      "target": "fintech_root_p5_t5_s2_d1"
    },
    {
      "source": "fintech_root_p5_t5_s2",
      "target": "fintech_root_p5_t5_s2_d2"
    },
    {
      "source": "fintech_root_p5_t5",
      "target": "fintech_root_p5_t5_s3"
    },
    {
      "source": "fintech_root_p5_t5_s3",
      "target": "fintech_root_p5_t5_s3_d1"
    },
    {
      "source": "fintech_root_p5_t5_s3",
      "target": "fintech_root_p5_t5_s3_d2"
    },
    {
      "source": "fintech_root_p5_t5",
      "target": "fintech_root_p5_t5_s4"
    },
    {
      "source": "fintech_root_p5_t5_s4",
      "target": "fintech_root_p5_t5_s4_d1"
    },
    {
      "source": "fintech_root_p5_t5_s4",
      "target": "fintech_root_p5_t5_s4_d2"
    },
    {
      "source": "fintech_root_p5_t5",
      "target": "fintech_root_p5_t5_s5"
    },
    {
      "source": "fintech_root_p5_t5_s5",
      "target": "fintech_root_p5_t5_s5_d1"
    },
    {
      "source": "fintech_root_p5_t5_s5",
      "target": "fintech_root_p5_t5_s5_d2"
    },
    {
      "source": "fintech_root_p5",
      "target": "fintech_root_p5_t6"
    },
    {
      "source": "fintech_root_p5_t6",
      "target": "fintech_root_p5_t6_s1"
    },
    {
      "source": "fintech_root_p5_t6_s1",
      "target": "fintech_root_p5_t6_s1_d1"
    },
    {
      "source": "fintech_root_p5_t6_s1",
      "target": "fintech_root_p5_t6_s1_d2"
    },
    {
      "source": "fintech_root_p5_t6",
      "target": "fintech_root_p5_t6_s2"
    },
    {
      "source": "fintech_root_p5_t6_s2",
      "target": "fintech_root_p5_t6_s2_d1"
    },
    {
      "source": "fintech_root_p5_t6_s2",
      "target": "fintech_root_p5_t6_s2_d2"
    },
    {
      "source": "fintech_root_p5_t6",
      "target": "fintech_root_p5_t6_s3"
    },
    {
      "source": "fintech_root_p5_t6_s3",
      "target": "fintech_root_p5_t6_s3_d1"
    },
    {
      "source": "fintech_root_p5_t6_s3",
      "target": "fintech_root_p5_t6_s3_d2"
    },
    {
      "source": "fintech_root_p5_t6",
      "target": "fintech_root_p5_t6_s4"
    },
    {
      "source": "fintech_root_p5_t6_s4",
      "target": "fintech_root_p5_t6_s4_d1"
    },
    {
      "source": "fintech_root_p5_t6_s4",
      "target": "fintech_root_p5_t6_s4_d2"
    },
    {
      "source": "fintech_root_p5_t6",
      "target": "fintech_root_p5_t6_s5"
    },
    {
      "source": "fintech_root_p5_t6_s5",
      "target": "fintech_root_p5_t6_s5_d1"
    },
    {
      "source": "fintech_root_p5_t6_s5",
      "target": "fintech_root_p5_t6_s5_d2"
    },
    {
      "source": "fintech_root",
      "target": "fintech_root_p6"
    },
    {
      "source": "fintech_root_p6",
      "target": "fintech_root_p6_t1"
    },
    {
      "source": "fintech_root_p6_t1",
      "target": "fintech_root_p6_t1_s1"
    },
    {
      "source": "fintech_root_p6_t1_s1",
      "target": "fintech_root_p6_t1_s1_d1"
    },
    {
      "source": "fintech_root_p6_t1_s1",
      "target": "fintech_root_p6_t1_s1_d2"
    },
    {
      "source": "fintech_root_p6_t1",
      "target": "fintech_root_p6_t1_s2"
    },
    {
      "source": "fintech_root_p6_t1_s2",
      "target": "fintech_root_p6_t1_s2_d1"
    },
    {
      "source": "fintech_root_p6_t1_s2",
      "target": "fintech_root_p6_t1_s2_d2"
    },
    {
      "source": "fintech_root_p6_t1",
      "target": "fintech_root_p6_t1_s3"
    },
    {
      "source": "fintech_root_p6_t1_s3",
      "target": "fintech_root_p6_t1_s3_d1"
    },
    {
      "source": "fintech_root_p6_t1_s3",
      "target": "fintech_root_p6_t1_s3_d2"
    },
    {
      "source": "fintech_root_p6_t1",
      "target": "fintech_root_p6_t1_s4"
    },
    {
      "source": "fintech_root_p6_t1_s4",
      "target": "fintech_root_p6_t1_s4_d1"
    },
    {
      "source": "fintech_root_p6_t1_s4",
      "target": "fintech_root_p6_t1_s4_d2"
    },
    {
      "source": "fintech_root_p6_t1",
      "target": "fintech_root_p6_t1_s5"
    },
    {
      "source": "fintech_root_p6_t1_s5",
      "target": "fintech_root_p6_t1_s5_d1"
    },
    {
      "source": "fintech_root_p6_t1_s5",
      "target": "fintech_root_p6_t1_s5_d2"
    },
    {
      "source": "fintech_root_p6",
      "target": "fintech_root_p6_t2"
    },
    {
      "source": "fintech_root_p6_t2",
      "target": "fintech_root_p6_t2_s1"
    },
    {
      "source": "fintech_root_p6_t2_s1",
      "target": "fintech_root_p6_t2_s1_d1"
    },
    {
      "source": "fintech_root_p6_t2_s1",
      "target": "fintech_root_p6_t2_s1_d2"
    },
    {
      "source": "fintech_root_p6_t2",
      "target": "fintech_root_p6_t2_s2"
    },
    {
      "source": "fintech_root_p6_t2_s2",
      "target": "fintech_root_p6_t2_s2_d1"
    },
    {
      "source": "fintech_root_p6_t2_s2",
      "target": "fintech_root_p6_t2_s2_d2"
    },
    {
      "source": "fintech_root_p6_t2",
      "target": "fintech_root_p6_t2_s3"
    },
    {
      "source": "fintech_root_p6_t2_s3",
      "target": "fintech_root_p6_t2_s3_d1"
    },
    {
      "source": "fintech_root_p6_t2_s3",
      "target": "fintech_root_p6_t2_s3_d2"
    },
    {
      "source": "fintech_root_p6_t2",
      "target": "fintech_root_p6_t2_s4"
    },
    {
      "source": "fintech_root_p6_t2_s4",
      "target": "fintech_root_p6_t2_s4_d1"
    },
    {
      "source": "fintech_root_p6_t2_s4",
      "target": "fintech_root_p6_t2_s4_d2"
    },
    {
      "source": "fintech_root_p6_t2",
      "target": "fintech_root_p6_t2_s5"
    },
    {
      "source": "fintech_root_p6_t2_s5",
      "target": "fintech_root_p6_t2_s5_d1"
    },
    {
      "source": "fintech_root_p6_t2_s5",
      "target": "fintech_root_p6_t2_s5_d2"
    },
    {
      "source": "fintech_root_p6",
      "target": "fintech_root_p6_t3"
    },
    {
      "source": "fintech_root_p6_t3",
      "target": "fintech_root_p6_t3_s1"
    },
    {
      "source": "fintech_root_p6_t3_s1",
      "target": "fintech_root_p6_t3_s1_d1"
    },
    {
      "source": "fintech_root_p6_t3_s1",
      "target": "fintech_root_p6_t3_s1_d2"
    },
    {
      "source": "fintech_root_p6_t3",
      "target": "fintech_root_p6_t3_s2"
    },
    {
      "source": "fintech_root_p6_t3_s2",
      "target": "fintech_root_p6_t3_s2_d1"
    },
    {
      "source": "fintech_root_p6_t3_s2",
      "target": "fintech_root_p6_t3_s2_d2"
    },
    {
      "source": "fintech_root_p6_t3",
      "target": "fintech_root_p6_t3_s3"
    },
    {
      "source": "fintech_root_p6_t3_s3",
      "target": "fintech_root_p6_t3_s3_d1"
    },
    {
      "source": "fintech_root_p6_t3_s3",
      "target": "fintech_root_p6_t3_s3_d2"
    },
    {
      "source": "fintech_root_p6_t3",
      "target": "fintech_root_p6_t3_s4"
    },
    {
      "source": "fintech_root_p6_t3_s4",
      "target": "fintech_root_p6_t3_s4_d1"
    },
    {
      "source": "fintech_root_p6_t3_s4",
      "target": "fintech_root_p6_t3_s4_d2"
    },
    {
      "source": "fintech_root_p6_t3",
      "target": "fintech_root_p6_t3_s5"
    },
    {
      "source": "fintech_root_p6_t3_s5",
      "target": "fintech_root_p6_t3_s5_d1"
    },
    {
      "source": "fintech_root_p6_t3_s5",
      "target": "fintech_root_p6_t3_s5_d2"
    },
    {
      "source": "fintech_root_p6",
      "target": "fintech_root_p6_t4"
    },
    {
      "source": "fintech_root_p6_t4",
      "target": "fintech_root_p6_t4_s1"
    },
    {
      "source": "fintech_root_p6_t4_s1",
      "target": "fintech_root_p6_t4_s1_d1"
    },
    {
      "source": "fintech_root_p6_t4_s1",
      "target": "fintech_root_p6_t4_s1_d2"
    },
    {
      "source": "fintech_root_p6_t4",
      "target": "fintech_root_p6_t4_s2"
    },
    {
      "source": "fintech_root_p6_t4_s2",
      "target": "fintech_root_p6_t4_s2_d1"
    },
    {
      "source": "fintech_root_p6_t4_s2",
      "target": "fintech_root_p6_t4_s2_d2"
    },
    {
      "source": "fintech_root_p6_t4",
      "target": "fintech_root_p6_t4_s3"
    },
    {
      "source": "fintech_root_p6_t4_s3",
      "target": "fintech_root_p6_t4_s3_d1"
    },
    {
      "source": "fintech_root_p6_t4_s3",
      "target": "fintech_root_p6_t4_s3_d2"
    },
    {
      "source": "fintech_root_p6_t4",
      "target": "fintech_root_p6_t4_s4"
    },
    {
      "source": "fintech_root_p6_t4_s4",
      "target": "fintech_root_p6_t4_s4_d1"
    },
    {
      "source": "fintech_root_p6_t4_s4",
      "target": "fintech_root_p6_t4_s4_d2"
    },
    {
      "source": "fintech_root_p6_t4",
      "target": "fintech_root_p6_t4_s5"
    },
    {
      "source": "fintech_root_p6_t4_s5",
      "target": "fintech_root_p6_t4_s5_d1"
    },
    {
      "source": "fintech_root_p6_t4_s5",
      "target": "fintech_root_p6_t4_s5_d2"
    },
    {
      "source": "fintech_root_p6",
      "target": "fintech_root_p6_t5"
    },
    {
      "source": "fintech_root_p6_t5",
      "target": "fintech_root_p6_t5_s1"
    },
    {
      "source": "fintech_root_p6_t5_s1",
      "target": "fintech_root_p6_t5_s1_d1"
    },
    {
      "source": "fintech_root_p6_t5_s1",
      "target": "fintech_root_p6_t5_s1_d2"
    },
    {
      "source": "fintech_root_p6_t5",
      "target": "fintech_root_p6_t5_s2"
    },
    {
      "source": "fintech_root_p6_t5_s2",
      "target": "fintech_root_p6_t5_s2_d1"
    },
    {
      "source": "fintech_root_p6_t5_s2",
      "target": "fintech_root_p6_t5_s2_d2"
    },
    {
      "source": "fintech_root_p6_t5",
      "target": "fintech_root_p6_t5_s3"
    },
    {
      "source": "fintech_root_p6_t5_s3",
      "target": "fintech_root_p6_t5_s3_d1"
    },
    {
      "source": "fintech_root_p6_t5_s3",
      "target": "fintech_root_p6_t5_s3_d2"
    },
    {
      "source": "fintech_root_p6_t5",
      "target": "fintech_root_p6_t5_s4"
    },
    {
      "source": "fintech_root_p6_t5_s4",
      "target": "fintech_root_p6_t5_s4_d1"
    },
    {
      "source": "fintech_root_p6_t5_s4",
      "target": "fintech_root_p6_t5_s4_d2"
    },
    {
      "source": "fintech_root_p6_t5",
      "target": "fintech_root_p6_t5_s5"
    },
    {
      "source": "fintech_root_p6_t5_s5",
      "target": "fintech_root_p6_t5_s5_d1"
    },
    {
      "source": "fintech_root_p6_t5_s5",
      "target": "fintech_root_p6_t5_s5_d2"
    },
    {
      "source": "fintech_root_p6",
      "target": "fintech_root_p6_t6"
    },
    {
      "source": "fintech_root_p6_t6",
      "target": "fintech_root_p6_t6_s1"
    },
    {
      "source": "fintech_root_p6_t6_s1",
      "target": "fintech_root_p6_t6_s1_d1"
    },
    {
      "source": "fintech_root_p6_t6_s1",
      "target": "fintech_root_p6_t6_s1_d2"
    },
    {
      "source": "fintech_root_p6_t6",
      "target": "fintech_root_p6_t6_s2"
    },
    {
      "source": "fintech_root_p6_t6_s2",
      "target": "fintech_root_p6_t6_s2_d1"
    },
    {
      "source": "fintech_root_p6_t6_s2",
      "target": "fintech_root_p6_t6_s2_d2"
    },
    {
      "source": "fintech_root_p6_t6",
      "target": "fintech_root_p6_t6_s3"
    },
    {
      "source": "fintech_root_p6_t6_s3",
      "target": "fintech_root_p6_t6_s3_d1"
    },
    {
      "source": "fintech_root_p6_t6_s3",
      "target": "fintech_root_p6_t6_s3_d2"
    },
    {
      "source": "fintech_root_p6_t6",
      "target": "fintech_root_p6_t6_s4"
    },
    {
      "source": "fintech_root_p6_t6_s4",
      "target": "fintech_root_p6_t6_s4_d1"
    },
    {
      "source": "fintech_root_p6_t6_s4",
      "target": "fintech_root_p6_t6_s4_d2"
    },
    {
      "source": "fintech_root_p6_t6",
      "target": "fintech_root_p6_t6_s5"
    },
    {
      "source": "fintech_root_p6_t6_s5",
      "target": "fintech_root_p6_t6_s5_d1"
    },
    {
      "source": "fintech_root_p6_t6_s5",
      "target": "fintech_root_p6_t6_s5_d2"
    },
    {
      "source": "fintech_root",
      "target": "fintech_root_p7"
    },
    {
      "source": "fintech_root_p7",
      "target": "fintech_root_p7_t1"
    },
    {
      "source": "fintech_root_p7_t1",
      "target": "fintech_root_p7_t1_s1"
    },
    {
      "source": "fintech_root_p7_t1_s1",
      "target": "fintech_root_p7_t1_s1_d1"
    },
    {
      "source": "fintech_root_p7_t1_s1",
      "target": "fintech_root_p7_t1_s1_d2"
    },
    {
      "source": "fintech_root_p7_t1",
      "target": "fintech_root_p7_t1_s2"
    },
    {
      "source": "fintech_root_p7_t1_s2",
      "target": "fintech_root_p7_t1_s2_d1"
    },
    {
      "source": "fintech_root_p7_t1_s2",
      "target": "fintech_root_p7_t1_s2_d2"
    },
    {
      "source": "fintech_root_p7_t1",
      "target": "fintech_root_p7_t1_s3"
    },
    {
      "source": "fintech_root_p7_t1_s3",
      "target": "fintech_root_p7_t1_s3_d1"
    },
    {
      "source": "fintech_root_p7_t1_s3",
      "target": "fintech_root_p7_t1_s3_d2"
    },
    {
      "source": "fintech_root_p7_t1",
      "target": "fintech_root_p7_t1_s4"
    },
    {
      "source": "fintech_root_p7_t1_s4",
      "target": "fintech_root_p7_t1_s4_d1"
    },
    {
      "source": "fintech_root_p7_t1_s4",
      "target": "fintech_root_p7_t1_s4_d2"
    },
    {
      "source": "fintech_root_p7_t1",
      "target": "fintech_root_p7_t1_s5"
    },
    {
      "source": "fintech_root_p7_t1_s5",
      "target": "fintech_root_p7_t1_s5_d1"
    },
    {
      "source": "fintech_root_p7_t1_s5",
      "target": "fintech_root_p7_t1_s5_d2"
    },
    {
      "source": "fintech_root_p7",
      "target": "fintech_root_p7_t2"
    },
    {
      "source": "fintech_root_p7_t2",
      "target": "fintech_root_p7_t2_s1"
    },
    {
      "source": "fintech_root_p7_t2_s1",
      "target": "fintech_root_p7_t2_s1_d1"
    },
    {
      "source": "fintech_root_p7_t2_s1",
      "target": "fintech_root_p7_t2_s1_d2"
    },
    {
      "source": "fintech_root_p7_t2",
      "target": "fintech_root_p7_t2_s2"
    },
    {
      "source": "fintech_root_p7_t2_s2",
      "target": "fintech_root_p7_t2_s2_d1"
    },
    {
      "source": "fintech_root_p7_t2_s2",
      "target": "fintech_root_p7_t2_s2_d2"
    },
    {
      "source": "fintech_root_p7_t2",
      "target": "fintech_root_p7_t2_s3"
    },
    {
      "source": "fintech_root_p7_t2_s3",
      "target": "fintech_root_p7_t2_s3_d1"
    },
    {
      "source": "fintech_root_p7_t2_s3",
      "target": "fintech_root_p7_t2_s3_d2"
    },
    {
      "source": "fintech_root_p7_t2_s3",
      "target": "fintech_root_p7_t2_s3_d3"
    },
    {
      "source": "fintech_root_p7_t2",
      "target": "fintech_root_p7_t2_s4"
    },
    {
      "source": "fintech_root_p7_t2_s4",
      "target": "fintech_root_p7_t2_s4_d1"
    },
    {
      "source": "fintech_root_p7_t2_s4",
      "target": "fintech_root_p7_t2_s4_d2"
    },
    {
      "source": "fintech_root_p7_t2",
      "target": "fintech_root_p7_t2_s5"
    },
    {
      "source": "fintech_root_p7_t2_s5",
      "target": "fintech_root_p7_t2_s5_d1"
    },
    {
      "source": "fintech_root_p7_t2_s5",
      "target": "fintech_root_p7_t2_s5_d2"
    },
    {
      "source": "fintech_root_p7",
      "target": "fintech_root_p7_t3"
    },
    {
      "source": "fintech_root_p7_t3",
      "target": "fintech_root_p7_t3_s1"
    },
    {
      "source": "fintech_root_p7_t3_s1",
      "target": "fintech_root_p7_t3_s1_d1"
    },
    {
      "source": "fintech_root_p7_t3_s1",
      "target": "fintech_root_p7_t3_s1_d2"
    },
    {
      "source": "fintech_root_p7_t3",
      "target": "fintech_root_p7_t3_s2"
    },
    {
      "source": "fintech_root_p7_t3_s2",
      "target": "fintech_root_p7_t3_s2_d1"
    },
    {
      "source": "fintech_root_p7_t3_s2",
      "target": "fintech_root_p7_t3_s2_d2"
    },
    {
      "source": "fintech_root_p7_t3",
      "target": "fintech_root_p7_t3_s3"
    },
    {
      "source": "fintech_root_p7_t3_s3",
      "target": "fintech_root_p7_t3_s3_d1"
    },
    {
      "source": "fintech_root_p7_t3_s3",
      "target": "fintech_root_p7_t3_s3_d2"
    },
    {
      "source": "fintech_root_p7_t3",
      "target": "fintech_root_p7_t3_s4"
    },
    {
      "source": "fintech_root_p7_t3_s4",
      "target": "fintech_root_p7_t3_s4_d1"
    },
    {
      "source": "fintech_root_p7_t3_s4",
      "target": "fintech_root_p7_t3_s4_d2"
    },
    {
      "source": "fintech_root_p7_t3",
      "target": "fintech_root_p7_t3_s5"
    },
    {
      "source": "fintech_root_p7_t3_s5",
      "target": "fintech_root_p7_t3_s5_d1"
    },
    {
      "source": "fintech_root_p7_t3_s5",
      "target": "fintech_root_p7_t3_s5_d2"
    },
    {
      "source": "fintech_root_p7",
      "target": "fintech_root_p7_t4"
    },
    {
      "source": "fintech_root_p7_t4",
      "target": "fintech_root_p7_t4_s1"
    },
    {
      "source": "fintech_root_p7_t4_s1",
      "target": "fintech_root_p7_t4_s1_d1"
    },
    {
      "source": "fintech_root_p7_t4_s1",
      "target": "fintech_root_p7_t4_s1_d2"
    },
    {
      "source": "fintech_root_p7_t4",
      "target": "fintech_root_p7_t4_s2"
    },
    {
      "source": "fintech_root_p7_t4_s2",
      "target": "fintech_root_p7_t4_s2_d1"
    },
    {
      "source": "fintech_root_p7_t4_s2",
      "target": "fintech_root_p7_t4_s2_d2"
    },
    {
      "source": "fintech_root_p7_t4",
      "target": "fintech_root_p7_t4_s3"
    },
    {
      "source": "fintech_root_p7_t4_s3",
      "target": "fintech_root_p7_t4_s3_d1"
    },
    {
      "source": "fintech_root_p7_t4_s3",
      "target": "fintech_root_p7_t4_s3_d2"
    },
    {
      "source": "fintech_root_p7_t4",
      "target": "fintech_root_p7_t4_s4"
    },
    {
      "source": "fintech_root_p7_t4_s4",
      "target": "fintech_root_p7_t4_s4_d1"
    },
    {
      "source": "fintech_root_p7_t4_s4",
      "target": "fintech_root_p7_t4_s4_d2"
    },
    {
      "source": "fintech_root_p7_t4",
      "target": "fintech_root_p7_t4_s5"
    },
    {
      "source": "fintech_root_p7_t4_s5",
      "target": "fintech_root_p7_t4_s5_d1"
    },
    {
      "source": "fintech_root_p7_t4_s5",
      "target": "fintech_root_p7_t4_s5_d2"
    },
    {
      "source": "fintech_root_p7",
      "target": "fintech_root_p7_t5"
    },
    {
      "source": "fintech_root_p7_t5",
      "target": "fintech_root_p7_t5_s1"
    },
    {
      "source": "fintech_root_p7_t5_s1",
      "target": "fintech_root_p7_t5_s1_d1"
    },
    {
      "source": "fintech_root_p7_t5_s1",
      "target": "fintech_root_p7_t5_s1_d2"
    },
    {
      "source": "fintech_root_p7_t5",
      "target": "fintech_root_p7_t5_s2"
    },
    {
      "source": "fintech_root_p7_t5_s2",
      "target": "fintech_root_p7_t5_s2_d1"
    },
    {
      "source": "fintech_root_p7_t5_s2",
      "target": "fintech_root_p7_t5_s2_d2"
    },
    {
      "source": "fintech_root_p7_t5",
      "target": "fintech_root_p7_t5_s3"
    },
    {
      "source": "fintech_root_p7_t5_s3",
      "target": "fintech_root_p7_t5_s3_d1"
    },
    {
      "source": "fintech_root_p7_t5_s3",
      "target": "fintech_root_p7_t5_s3_d2"
    },
    {
      "source": "fintech_root_p7_t5",
      "target": "fintech_root_p7_t5_s4"
    },
    {
      "source": "fintech_root_p7_t5_s4",
      "target": "fintech_root_p7_t5_s4_d1"
    },
    {
      "source": "fintech_root_p7_t5_s4",
      "target": "fintech_root_p7_t5_s4_d2"
    },
    {
      "source": "fintech_root_p7_t5",
      "target": "fintech_root_p7_t5_s5"
    },
    {
      "source": "fintech_root_p7_t5_s5",
      "target": "fintech_root_p7_t5_s5_d1"
    },
    {
      "source": "fintech_root_p7_t5_s5",
      "target": "fintech_root_p7_t5_s5_d2"
    },
    {
      "source": "fintech_root_p7",
      "target": "fintech_root_p7_t6"
    },
    {
      "source": "fintech_root_p7_t6",
      "target": "fintech_root_p7_t6_s1"
    },
    {
      "source": "fintech_root_p7_t6_s1",
      "target": "fintech_root_p7_t6_s1_d1"
    },
    {
      "source": "fintech_root_p7_t6_s1",
      "target": "fintech_root_p7_t6_s1_d2"
    },
    {
      "source": "fintech_root_p7_t6",
      "target": "fintech_root_p7_t6_s2"
    },
    {
      "source": "fintech_root_p7_t6_s2",
      "target": "fintech_root_p7_t6_s2_d1"
    },
    {
      "source": "fintech_root_p7_t6_s2",
      "target": "fintech_root_p7_t6_s2_d2"
    },
    {
      "source": "fintech_root_p7_t6",
      "target": "fintech_root_p7_t6_s3"
    },
    {
      "source": "fintech_root_p7_t6_s3",
      "target": "fintech_root_p7_t6_s3_d1"
    },
    {
      "source": "fintech_root_p7_t6_s3",
      "target": "fintech_root_p7_t6_s3_d2"
    },
    {
      "source": "fintech_root_p7_t6",
      "target": "fintech_root_p7_t6_s4"
    },
    {
      "source": "fintech_root_p7_t6_s4",
      "target": "fintech_root_p7_t6_s4_d1"
    },
    {
      "source": "fintech_root_p7_t6_s4",
      "target": "fintech_root_p7_t6_s4_d2"
    },
    {
      "source": "fintech_root_p7_t6",
      "target": "fintech_root_p7_t6_s5"
    },
    {
      "source": "fintech_root_p7_t6_s5",
      "target": "fintech_root_p7_t6_s5_d1"
    },
    {
      "source": "fintech_root_p7_t6_s5",
      "target": "fintech_root_p7_t6_s5_d2"
    },
    {
      "source": "fintech_root",
      "target": "fintech_root_p8"
    },
    {
      "source": "fintech_root_p8",
      "target": "fintech_root_p8_t1"
    },
    {
      "source": "fintech_root_p8_t1",
      "target": "fintech_root_p8_t1_s1"
    },
    {
      "source": "fintech_root_p8_t1_s1",
      "target": "fintech_root_p8_t1_s1_d1"
    },
    {
      "source": "fintech_root_p8_t1_s1",
      "target": "fintech_root_p8_t1_s1_d2"
    },
    {
      "source": "fintech_root_p8_t1",
      "target": "fintech_root_p8_t1_s2"
    },
    {
      "source": "fintech_root_p8_t1_s2",
      "target": "fintech_root_p8_t1_s2_d1"
    },
    {
      "source": "fintech_root_p8_t1_s2",
      "target": "fintech_root_p8_t1_s2_d2"
    },
    {
      "source": "fintech_root_p8_t1",
      "target": "fintech_root_p8_t1_s3"
    },
    {
      "source": "fintech_root_p8_t1_s3",
      "target": "fintech_root_p8_t1_s3_d1"
    },
    {
      "source": "fintech_root_p8_t1_s3",
      "target": "fintech_root_p8_t1_s3_d2"
    },
    {
      "source": "fintech_root_p8_t1",
      "target": "fintech_root_p8_t1_s4"
    },
    {
      "source": "fintech_root_p8_t1_s4",
      "target": "fintech_root_p8_t1_s4_d1"
    },
    {
      "source": "fintech_root_p8_t1_s4",
      "target": "fintech_root_p8_t1_s4_d2"
    },
    {
      "source": "fintech_root_p8_t1",
      "target": "fintech_root_p8_t1_s5"
    },
    {
      "source": "fintech_root_p8_t1_s5",
      "target": "fintech_root_p8_t1_s5_d1"
    },
    {
      "source": "fintech_root_p8_t1_s5",
      "target": "fintech_root_p8_t1_s5_d2"
    },
    {
      "source": "fintech_root_p8",
      "target": "fintech_root_p8_t2"
    },
    {
      "source": "fintech_root_p8_t2",
      "target": "fintech_root_p8_t2_s1"
    },
    {
      "source": "fintech_root_p8_t2_s1",
      "target": "fintech_root_p8_t2_s1_d1"
    },
    {
      "source": "fintech_root_p8_t2_s1",
      "target": "fintech_root_p8_t2_s1_d2"
    },
    {
      "source": "fintech_root_p8_t2",
      "target": "fintech_root_p8_t2_s2"
    },
    {
      "source": "fintech_root_p8_t2_s2",
      "target": "fintech_root_p8_t2_s2_d1"
    },
    {
      "source": "fintech_root_p8_t2_s2",
      "target": "fintech_root_p8_t2_s2_d2"
    },
    {
      "source": "fintech_root_p8_t2",
      "target": "fintech_root_p8_t2_s3"
    },
    {
      "source": "fintech_root_p8_t2_s3",
      "target": "fintech_root_p8_t2_s3_d1"
    },
    {
      "source": "fintech_root_p8_t2_s3",
      "target": "fintech_root_p8_t2_s3_d2"
    },
    {
      "source": "fintech_root_p8_t2",
      "target": "fintech_root_p8_t2_s4"
    },
    {
      "source": "fintech_root_p8_t2_s4",
      "target": "fintech_root_p8_t2_s4_d1"
    },
    {
      "source": "fintech_root_p8_t2_s4",
      "target": "fintech_root_p8_t2_s4_d2"
    },
    {
      "source": "fintech_root_p8_t2",
      "target": "fintech_root_p8_t2_s5"
    },
    {
      "source": "fintech_root_p8_t2_s5",
      "target": "fintech_root_p8_t2_s5_d1"
    },
    {
      "source": "fintech_root_p8_t2_s5",
      "target": "fintech_root_p8_t2_s5_d2"
    },
    {
      "source": "fintech_root_p8",
      "target": "fintech_root_p8_t3"
    },
    {
      "source": "fintech_root_p8_t3",
      "target": "fintech_root_p8_t3_s1"
    },
    {
      "source": "fintech_root_p8_t3_s1",
      "target": "fintech_root_p8_t3_s1_d1"
    },
    {
      "source": "fintech_root_p8_t3_s1",
      "target": "fintech_root_p8_t3_s1_d2"
    },
    {
      "source": "fintech_root_p8_t3",
      "target": "fintech_root_p8_t3_s2"
    },
    {
      "source": "fintech_root_p8_t3_s2",
      "target": "fintech_root_p8_t3_s2_d1"
    },
    {
      "source": "fintech_root_p8_t3_s2",
      "target": "fintech_root_p8_t3_s2_d2"
    },
    {
      "source": "fintech_root_p8_t3",
      "target": "fintech_root_p8_t3_s3"
    },
    {
      "source": "fintech_root_p8_t3_s3",
      "target": "fintech_root_p8_t3_s3_d1"
    },
    {
      "source": "fintech_root_p8_t3_s3",
      "target": "fintech_root_p8_t3_s3_d2"
    },
    {
      "source": "fintech_root_p8_t3",
      "target": "fintech_root_p8_t3_s4"
    },
    {
      "source": "fintech_root_p8_t3_s4",
      "target": "fintech_root_p8_t3_s4_d1"
    },
    {
      "source": "fintech_root_p8_t3_s4",
      "target": "fintech_root_p8_t3_s4_d2"
    },
    {
      "source": "fintech_root_p8_t3",
      "target": "fintech_root_p8_t3_s5"
    },
    {
      "source": "fintech_root_p8_t3_s5",
      "target": "fintech_root_p8_t3_s5_d1"
    },
    {
      "source": "fintech_root_p8_t3_s5",
      "target": "fintech_root_p8_t3_s5_d2"
    },
    {
      "source": "fintech_root_p8",
      "target": "fintech_root_p8_t4"
    },
    {
      "source": "fintech_root_p8_t4",
      "target": "fintech_root_p8_t4_s1"
    },
    {
      "source": "fintech_root_p8_t4_s1",
      "target": "fintech_root_p8_t4_s1_d1"
    },
    {
      "source": "fintech_root_p8_t4_s1",
      "target": "fintech_root_p8_t4_s1_d2"
    },
    {
      "source": "fintech_root_p8_t4",
      "target": "fintech_root_p8_t4_s2"
    },
    {
      "source": "fintech_root_p8_t4_s2",
      "target": "fintech_root_p8_t4_s2_d1"
    },
    {
      "source": "fintech_root_p8_t4_s2",
      "target": "fintech_root_p8_t4_s2_d2"
    },
    {
      "source": "fintech_root_p8_t4",
      "target": "fintech_root_p8_t4_s3"
    },
    {
      "source": "fintech_root_p8_t4_s3",
      "target": "fintech_root_p8_t4_s3_d1"
    },
    {
      "source": "fintech_root_p8_t4_s3",
      "target": "fintech_root_p8_t4_s3_d2"
    },
    {
      "source": "fintech_root_p8_t4",
      "target": "fintech_root_p8_t4_s4"
    },
    {
      "source": "fintech_root_p8_t4_s4",
      "target": "fintech_root_p8_t4_s4_d1"
    },
    {
      "source": "fintech_root_p8_t4_s4",
      "target": "fintech_root_p8_t4_s4_d2"
    },
    {
      "source": "fintech_root_p8_t4",
      "target": "fintech_root_p8_t4_s5"
    },
    {
      "source": "fintech_root_p8_t4_s5",
      "target": "fintech_root_p8_t4_s5_d1"
    },
    {
      "source": "fintech_root_p8_t4_s5",
      "target": "fintech_root_p8_t4_s5_d2"
    },
    {
      "source": "fintech_root_p8",
      "target": "fintech_root_p8_t5"
    },
    {
      "source": "fintech_root_p8_t5",
      "target": "fintech_root_p8_t5_s1"
    },
    {
      "source": "fintech_root_p8_t5_s1",
      "target": "fintech_root_p8_t5_s1_d1"
    },
    {
      "source": "fintech_root_p8_t5_s1",
      "target": "fintech_root_p8_t5_s1_d2"
    },
    {
      "source": "fintech_root_p8_t5",
      "target": "fintech_root_p8_t5_s2"
    },
    {
      "source": "fintech_root_p8_t5_s2",
      "target": "fintech_root_p8_t5_s2_d1"
    },
    {
      "source": "fintech_root_p8_t5_s2",
      "target": "fintech_root_p8_t5_s2_d2"
    },
    {
      "source": "fintech_root_p8_t5",
      "target": "fintech_root_p8_t5_s3"
    },
    {
      "source": "fintech_root_p8_t5_s3",
      "target": "fintech_root_p8_t5_s3_d1"
    },
    {
      "source": "fintech_root_p8_t5_s3",
      "target": "fintech_root_p8_t5_s3_d2"
    },
    {
      "source": "fintech_root_p8_t5",
      "target": "fintech_root_p8_t5_s4"
    },
    {
      "source": "fintech_root_p8_t5_s4",
      "target": "fintech_root_p8_t5_s4_d1"
    },
    {
      "source": "fintech_root_p8_t5_s4",
      "target": "fintech_root_p8_t5_s4_d2"
    },
    {
      "source": "fintech_root_p8_t5",
      "target": "fintech_root_p8_t5_s5"
    },
    {
      "source": "fintech_root_p8_t5_s5",
      "target": "fintech_root_p8_t5_s5_d1"
    },
    {
      "source": "fintech_root_p8_t5_s5",
      "target": "fintech_root_p8_t5_s5_d2"
    },
    {
      "source": "fintech_root_p8",
      "target": "fintech_root_p8_t6"
    },
    {
      "source": "fintech_root_p8_t6",
      "target": "fintech_root_p8_t6_s1"
    },
    {
      "source": "fintech_root_p8_t6_s1",
      "target": "fintech_root_p8_t6_s1_d1"
    },
    {
      "source": "fintech_root_p8_t6_s1",
      "target": "fintech_root_p8_t6_s1_d2"
    },
    {
      "source": "fintech_root_p8_t6",
      "target": "fintech_root_p8_t6_s2"
    },
    {
      "source": "fintech_root_p8_t6_s2",
      "target": "fintech_root_p8_t6_s2_d1"
    },
    {
      "source": "fintech_root_p8_t6_s2",
      "target": "fintech_root_p8_t6_s2_d2"
    },
    {
      "source": "fintech_root_p8_t6",
      "target": "fintech_root_p8_t6_s3"
    },
    {
      "source": "fintech_root_p8_t6_s3",
      "target": "fintech_root_p8_t6_s3_d1"
    },
    {
      "source": "fintech_root_p8_t6_s3",
      "target": "fintech_root_p8_t6_s3_d2"
    },
    {
      "source": "fintech_root_p8_t6",
      "target": "fintech_root_p8_t6_s4"
    },
    {
      "source": "fintech_root_p8_t6_s4",
      "target": "fintech_root_p8_t6_s4_d1"
    },
    {
      "source": "fintech_root_p8_t6_s4",
      "target": "fintech_root_p8_t6_s4_d2"
    },
    {
      "source": "fintech_root_p8_t6",
      "target": "fintech_root_p8_t6_s5"
    },
    {
      "source": "fintech_root_p8_t6_s5",
      "target": "fintech_root_p8_t6_s5_d1"
    },
    {
      "source": "fintech_root_p8_t6_s5",
      "target": "fintech_root_p8_t6_s5_d2"
    }
  ]
};
