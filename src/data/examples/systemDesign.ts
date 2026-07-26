import { MindMapData } from "../../services/llmService";

export const SYSTEM_DESIGN_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "sd_root",
      "label": "System Design & Distributed Systems",
      "description": "Rigorous first-principles blueprint of distributed consensus algorithms, replication strategies, database storage engine internals, sharding, caching, event streaming, traffic management, and fault tolerance.",
      "type": "topic"
    },
    {
      "id": "sd_root_p1",
      "label": "Distributed Consensus & Coordination",
      "description": "Protocols for achieving agreement on state mutations across independent untrusted network nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1",
      "label": "Raft Consensus Algorithm",
      "description": "Decomposed consensus algorithm providing leader election, log replication, and safety guarantees.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s1",
      "label": "Raft Leader Election Mechanics",
      "description": "Electing a single cluster leader via randomized election timeouts to prevent split votes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s1_d1",
      "label": "Randomized Election Timeouts (150-300ms)",
      "description": "Assigning staggered candidate timeouts to guarantee a single node reaches majority votes first.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s1_d2",
      "label": "RequestVote RPC & Term Progression",
      "description": "Incrementing currentTerm counters and requesting votes from peer cluster nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s2",
      "label": "Log Replication & Quorum Commits",
      "description": "Replicating state machine command logs from leader to follower nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s2_d1",
      "label": "AppendEntries RPC Heartbeats",
      "description": "Transmitting log entries and periodic heartbeats to maintain leader authority over followers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s2_d2",
      "label": "Majority Quorum Commit Rule",
      "description": "Committing log entries once acknowledged by a strict majority floor(N/2) + 1 of cluster nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s3",
      "label": "Raft Safety Invariants",
      "description": "Enforcing strict safety rules to guarantee state machine execution correctness.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s3_d1",
      "label": "Election Safety Invariant",
      "description": "Ensuring at most one leader can be elected per term across the distributed system.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s3_d2",
      "label": "Leader Append-Only Constraint",
      "description": "Restricting leaders from overwriting or truncating their own historical log entries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s4",
      "label": "Log Matching & Discrepancy Resolution",
      "description": "Resolving log discrepancies when followers fail or miss leader writes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s4_d1",
      "label": "prevLogIndex & prevLogTerm Checks",
      "description": "Verifying preceding log entry match before accepting new log entries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s4_d2",
      "label": "NextIndex Backtracking Search",
      "description": "Decrementing nextIndex pointers to locate matching log entry boundaries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s5",
      "label": "Cluster Membership Changes & Snapshots",
      "description": "Reconfiguring cluster membership and compacting committed logs.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s5_d1",
      "label": "Joint Consensus Transition States",
      "description": "Using joint consensus configurations (C_old,new) to alter membership without split-brain risks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t1_s5_d2",
      "label": "InstallSnapshot RPC Stream",
      "description": "Streaming state machine snapshots to lagging followers falling behind active log bounds.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2",
      "label": "Paxos Protocol Family",
      "description": "Foundational consensus protocol family providing fault-tolerant state agreement.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s1",
      "label": "Basic Paxos Phase 1 (Prepare / Promise)",
      "description": "Proposing proposal numbers to discover existing values and secure proposal rights.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s1_d1",
      "label": "Prepare(n) Message Broadcast",
      "description": "Broadcasting unique proposal number n to acceptor nodes across the network.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s1_d2",
      "label": "Promise(n, max_accepted_val) Response",
      "description": "Acceptors promising not to accept proposal numbers lower than n.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s2",
      "label": "Basic Paxos Phase 2 (Accept / Accepted)",
      "description": "Committing values once a majority of acceptors promise support.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s2_d1",
      "label": "Accept(n, v) Request Emission",
      "description": "Requesting acceptors to adopt value v associated with proposal number n.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s2_d2",
      "label": "Accepted(n, v) Quorum Consensus",
      "description": "Emitting accepted notifications when acceptors approve proposal requests.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s3",
      "label": "Multi-Paxos & Stable Leader Optimization",
      "description": "Streamlining Paxos phase 1 overhead by electing a persistent stable leader.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s3_d1",
      "label": "Phase 1 Elimination on Stable Runs",
      "description": "Bypassing Prepare/Promise phases for sequential client writes once leader authority is set.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s3_d2",
      "label": "Lease Read Optimizations",
      "description": "Using leader leases to serve linearizable read requests locally without network round trips.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s4",
      "label": "Dueling Proposers & Livelock Risks",
      "description": "Mitigating livelock scenarios where competing proposers continuously preempt proposal numbers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s4_d1",
      "label": "Randomized Exponential Backoffs",
      "description": "Adding random delays to proposal retries to prevent endless Phase 1 preemption loops.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s4_d2",
      "label": "Pre-Vote Phase Guarding",
      "description": "Executing lightweight pre-vote checks before advancing global proposal numbers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s5",
      "label": "Egalitarian Paxos (EPaxos)",
      "description": "Leaderless Paxos variant allowing any node to commit commands directly.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s5_d1",
      "label": "Dependency Graph Resolution",
      "description": "Building dependency graphs of concurrent operations to establish deterministic execution ordering.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t2_s5_d2",
      "label": "Fast-Path 1-RTT Commits",
      "description": "Achieving 1 round-trip time commits when no concurrent operation conflicts exist.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3",
      "label": "ZooKeeper Atomic Broadcast (Zab)",
      "description": "High-throughput crash-recovery consensus protocol driving Apache ZooKeeper.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s1",
      "label": "Zab Phase 1: Leader Activation & Recovery",
      "description": "Establishing new epoch leadership and synchronizing state across followers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s1_d1",
      "label": "zxid Transaction ID Structure",
      "description": "Encoding 64-bit transaction IDs into 32-bit epoch numbers and 32-bit sequential counters.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s1_d2",
      "label": "State Synchronization Phase",
      "description": "Ensuring all followers accept the highest committed epoch zxid log entries before serving traffic.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s2",
      "label": "Zab Phase 2: Atomic Broadcast",
      "description": "Broadcasting proposed state updates across cluster followers via two-phase commit.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s2_d1",
      "label": "PROPOSAL Message FIFO Ordering",
      "description": "Enforcing strict FIFO message ordering per leader client connection TCP socket.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s2_d2",
      "label": "ACK & COMMIT Message Broadcast",
      "description": "Emitting COMMIT signals after receiving ACK responses from majority quorum followers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s3",
      "label": "ZooKeeper Ephemeral Nodes & Watches",
      "description": "Core primitives for dynamic service discovery and distributed state monitoring.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s3_d1",
      "label": "Session Heartbeat Ephemeral Deletion",
      "description": "Deleting ephemeral z-nodes automatically when client heartbeats time out.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s3_d2",
      "label": "One-Time Trigger Watch Notifications",
      "description": "Emitting event watches to connected clients upon z-node state mutations.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s4",
      "label": "Zab Primary-Backup Comparison",
      "description": "Comparing Zab primary-backup streaming mechanics against classical Paxos models.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s4_d1",
      "label": "Prefix Property Enforcement",
      "description": "Guaranteeing that if message m is committed, all preceding messages are committed.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s4_d2",
      "label": "Causal Consistency Guarantees",
      "description": "Preserving causal relationships across all state updates committed by Zab.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s5",
      "label": "ZooKeeper Dynamic Reconfiguration",
      "description": "Updating cluster membership without stopping ZooKeeper service nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s5_d1",
      "label": "Incremental Member Transitions",
      "description": "Executing reconfig commands to add or remove ensemble nodes safely.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t3_s5_d2",
      "label": "Quorum Verification Rules",
      "description": "Verifying that old and new configuration quorums approve membership updates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4",
      "label": "Distributed Locking & Fencing Tokens",
      "description": "Mechanisms for controlling access to shared resources across distributed worker processes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s1",
      "label": "Chubby Lock Service Architecture",
      "description": "Coarse-grained distributed lock service built by Google utilizing Paxos.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s1_d1",
      "label": "Master Keep-Alive Leases",
      "description": "Granting master node leases to serve lock requests without per-read consensus.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s1_d2",
      "label": "Lock Delay Guarding",
      "description": "Holding lock state briefly after client disconnects to prevent split-brain writes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s2",
      "label": "Fencing Token Protocol",
      "description": "Preventing split-brain data corruption caused by paused lock holders.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s2_d1",
      "label": "Monotonically Increasing Tokens",
      "description": "Issuing incrementing numbers (1, 2, 3) with lock grants.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s2_d2",
      "label": "Storage Layer Token Validation",
      "description": "Rejecting storage writes containing fencing token numbers lower than the highest written token.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s3",
      "label": "Redis Redlock Algorithm Critique",
      "description": "Multi-node Redis distributed lock algorithm and its architectural limitations.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s3_d1",
      "label": "Multi-Master TTL Voting",
      "description": "Acquiring locks across N independent Redis nodes within a fraction of TTL duration.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s3_d2",
      "label": "Clock Drift & GC Pause Vulnerabilities",
      "description": "Martin Kleppmann critique detailing how process pauses invalidate Redlock safety.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s4",
      "label": "Lease Timeouts & Auto-Renewal",
      "description": "Managing lock expiration times to prevent permanent deadlocks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s4_d1",
      "label": "Background Watchdog Threads",
      "description": "Spinning background threads to periodically extend lock TTLs while jobs are active.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s4_d2",
      "label": "Hard Upper Execution Limits",
      "description": "Enforcing maximum overall lock lifetimes to isolate stuck or hung process threads.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s5",
      "label": "Etcd Distributed Key Locks",
      "description": "Implementing distributed mutexes using etcd key leases and revision comparisons.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s5_d1",
      "label": "CreateRevision Key Sorting",
      "description": "Determining lock acquisition order based on lowest etcd key creation revision.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t4_s5_d2",
      "label": "Watch Preceding Key Revocation",
      "description": "Waiting for lock access by watching the immediately preceding key revision for deletion.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5",
      "label": "Distributed Consensus & Coordination Topic 5",
      "description": "Detailed first-principles mechanics for Distributed Consensus & Coordination topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s1",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s1_d1",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s1_d2",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s2",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s2_d1",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s2_d2",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s3",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s3_d1",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s3_d2",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s4",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s4_d1",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s4_d2",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s5",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s5_d1",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t5_s5_d2",
      "label": "Distributed Consensus & Coordination Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6",
      "label": "Distributed Consensus & Coordination Topic 6",
      "description": "Detailed first-principles mechanics for Distributed Consensus & Coordination topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s1",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s1_d1",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s1_d2",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s2",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s2_d1",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s2_d2",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s3",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s3_d1",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s3_d2",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s4",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s4_d1",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s4_d2",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s5",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Distributed Consensus & Coordination Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s5_d1",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p1_t6_s5_d2",
      "label": "Distributed Consensus & Coordination Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Distributed Consensus & Coordination Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2",
      "label": "Replication & Consistency Models",
      "description": "Tradeoffs and mechanisms for copying data across nodes while maintaining specific consistency guarantees.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1",
      "label": "CAP & PACELC Theorems",
      "description": "Fundamental theoretical bounds governing trade-offs in distributed data stores.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s1",
      "label": "CAP Theorem Proof & Bounds",
      "description": "Formal proof that distributed stores can simultaneously provide at most two of Consistency, Availability, and Partition Tolerance.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s1_d1",
      "label": "Gilbert and Lynch Formal Proof",
      "description": "Proving that under network partitions (P), systems must choose between atomic consistency (C) or availability (A).",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s1_d2",
      "label": "Network Partition Impossibility Result",
      "description": "Demonstrating that network delays make synchronous state agreement impossible without blocking.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s2",
      "label": "PACELC Theorem Extension",
      "description": "Extending CAP to model latency tradeoffs during normal non-partitioned operation.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s2_d1",
      "label": "Partition (PA/EL) vs Else (PC/EC) Bounds",
      "description": "Formulating: If Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C).",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s2_d2",
      "label": "Dynamo vs MongoDB System Categorization",
      "description": "Classifying DynamoDB as PA/EL and MongoDB as PC/EC under normal operating conditions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s3",
      "label": "Consistency Model Taxonomy",
      "description": "Hierarchy of consistency models from strict serializability down to eventual consistency.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s3_d1",
      "label": "Linearizability (Real-Time Safety)",
      "description": "Guaranteeing that all operations appear to execute atomically at a specific point between invocation and response.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s3_d2",
      "label": "Serializability (Transactional Isolation)",
      "description": "Ensuring concurrent execution produces results equivalent to some sequential order.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s4",
      "label": "Eventual Consistency Mechanics",
      "description": "Guaranteeing that all replicas converge to identical states given sufficient time without new updates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s4_d1",
      "label": "Convergence Window Metrics",
      "description": "Measuring the time delta required for replica updates to propagate fully.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s4_d2",
      "label": "Anti-Entropy Repair Processes",
      "description": "Executing background processes to synchronize inconsistent replica states.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s5",
      "label": "Causal & Session Consistency",
      "description": "Preserving causally dependent operation ordering while allowing independent operations to reorder.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s5_d1",
      "label": "Causal Dependency Tracking",
      "description": "Tracking cause-and-effect relationships between read and write operations.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t1_s5_d2",
      "label": "Read-Your-Writes Session Guarantees",
      "description": "Ensuring client sessions always observe their own recent updates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2",
      "label": "Logical Clocks & Event Ordering",
      "description": "Tracking partial and total ordering of events in distributed systems without synchronized physical clocks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s1",
      "label": "Lamport Logical Timestamps",
      "description": "Assigning monotonically increasing scalar integers to establish partial event ordering.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s1_d1",
      "label": "Clock Advance Rule (L = max(L, msg_L) + 1)",
      "description": "Updating local clocks upon message receipt to preserve happened-before relationships.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s1_d2",
      "label": "Happened-Before Relation (a -> b)",
      "description": "Defining causal precedence when event a occurs before event b on a process or via messaging.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s2",
      "label": "Vector Clocks & Version Vectors",
      "description": "Using array clocks to detect concurrent operations and causal conflicts.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s2_d1",
      "label": "Vector Clock Comparison Rules",
      "description": "Determining if vector V1 dominates V2, V2 dominates V1, or if operations are concurrent (conflict).",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s2_d2",
      "label": "Causal History Compaction",
      "description": "Pruning old vector clock elements to prevent unbounded array size growth.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s3",
      "label": "TrueTime & Hybrid Logical Clocks (HLC)",
      "description": "Combining physical GPS/atomic clocks and logical counters for precise global timestamps.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s3_d1",
      "label": "Google TrueTime API [earliest, latest]",
      "description": "Bounding physical clock uncertainty using atomic clocks and GPS receivers in Google Spanner.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s3_d2",
      "label": "Hybrid Logical Clock (HLC) Bounds",
      "description": "Combining NTP physical time with logical counter increments to bound physical skew.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s4",
      "label": "Last-Write-Wins (LWW) Conflict Resolution",
      "description": "Resolving concurrent write conflicts by comparing physical timestamps.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s4_d1",
      "label": "Data Loss Risks in LWW",
      "description": "Losing valid concurrent updates when physical wall-clock times are skewed.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s4_d2",
      "label": "NTP Synchronization Requirements",
      "description": "Configuring NTP chrony daemons to maintain sub-millisecond physical clock synchronization.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s5",
      "label": "Matrix Clocks & Causal Garbage Collection",
      "description": "Extending vector clocks to track global knowledge states across nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s5_d1",
      "label": "N x N Matrix Clock Structures",
      "description": "Tracking what every node knows about every other node's logical clock state.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t2_s5_d2",
      "label": "Safe Log & History Pruning",
      "description": "Pruning historical tombstone records once matrix clocks confirm all nodes acknowledged state.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3",
      "label": "Conflict-Free Replicated Data Types (CRDTs)",
      "description": "Data structures that replicate across nodes and converge deterministically without central coordination.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s1",
      "label": "State-Based (CvRDT) vs Operation-Based (CmRDT)",
      "description": "Classifying CRDTs by state payload transmission vs operation message streaming.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s1_d1",
      "label": "State-Based Convergent Replication (CvRDT)",
      "description": "Transmitting full states and merging using idempotent, commutative, associative join semilattices.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s1_d2",
      "label": "Operation-Based Commutative Replication (CmRDT)",
      "description": "Streaming mutation operations over causal delivery networks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s2",
      "label": "PN-Counters & G-Counters",
      "description": "Distributed counter data structures supporting increment and decrement operations.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s2_d1",
      "label": "Grow-Only Counter (G-Counter)",
      "description": "Maintaining per-node vector counts and merging via max(A[i], B[i]) vector functions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s2_d2",
      "label": "Positive-Negative Counter (PN-Counter)",
      "description": "Combining two G-Counters to track positive increments and negative decrements.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s3",
      "label": "LWW-Element-Set & Observed-Remove Set (OR-Set)",
      "description": "Set data structures supporting element additions and deletions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s3_d1",
      "label": "LWW-Element-Set Timestamping",
      "description": "Adding elements with addition/deletion timestamps to resolve set membership.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s3_d2",
      "label": "OR-Set Unique Tag Tracking",
      "description": "Tagging element additions with unique UUID tokens so deletions only target observed instances.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s4",
      "label": "CRDT Text Editing (R落地 / LJS / Yjs)",
      "description": "Collaborative real-time text editing structures resolving concurrent character inserts.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s4_d1",
      "label": "Yjs / Automerge Sequence Structures",
      "description": "Structuring text as trees or linked lists of characters with immutable positions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s4_d2",
      "label": "Interleaving Resolution Algorithms",
      "description": "Preventing character interleaving during simultaneous typing by concurrent users.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s5",
      "label": "Semilattice Mathematical Foundations",
      "description": "Mathematical properties required for deterministic CRDT state convergence.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s5_d1",
      "label": "Commutativity (A ⊔ B = B ⊔ A)",
      "description": "Ensuring merge order does not affect the final converged state.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t3_s5_d2",
      "label": "Associativity & Idempotency (A ⊔ A = A)",
      "description": "Guaranteeing duplicate or reordered state merges produce identical results.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4",
      "label": "Quorum Consensus & Anti-Entropy",
      "description": "Configuring replica read/write overlap and background repair loops to enforce consistency.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s1",
      "label": "Quorum Mathematics (W + R > N)",
      "description": "Selecting read (R), write (W), and replica (N) counts to guarantee read-write overlap.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s1_d1",
      "label": "Strict Quorum Condition (W + R > N)",
      "description": "Guaranteeing at least one node in any read quorum contains the latest acknowledged write.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s1_d2",
      "label": "Sloppy Quorums & Hinted Handoff",
      "description": "Writing to temporary fallback nodes when primary replica nodes are unreachable.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s2",
      "label": "Read Repair Mechanics",
      "description": "Fixing stale data on replica nodes during active read queries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s2_d1",
      "label": "Digest Read Verification",
      "description": "Requesting full data from one node and content hashes from other quorum nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s2_d2",
      "label": "Asynchronous Background Write Repairs",
      "description": "Writing updated data back to stale replica nodes when hash mismatches occur.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s3",
      "label": "Merkle Tree Anti-Entropy Synchronization",
      "description": "Comparing cryptographic hash trees to detect replica differences fast.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s3_d1",
      "label": "Hierarchical Key-Hash Trees",
      "description": "Structuring table key ranges into tree nodes containing hashes of sub-tree data.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s3_d2",
      "label": "O(log N) Range Divergence Discovery",
      "description": "Traversing Merkle trees to locate out-of-sync key ranges without scanning full datasets.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s4",
      "label": "Cassandra Consistency Levels",
      "description": "Configuring per-query consistency options (ONE, QUORUM, LOCAL_QUORUM, ALL).",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s4_d1",
      "label": "LOCAL_QUORUM Multi-DC Optimization",
      "description": "Restricting quorum checks to nodes within the local data center to avoid cross-DC latency.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s4_d2",
      "label": "Serial Consistency for Lightweight Transactions",
      "description": "Executing Paxos consensus during conditional Paxos transactions (IF NOT EXISTS).",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s5",
      "label": "Active-Active Multi-Region Replication",
      "description": "Accepting write queries simultaneously across multiple geographically separated data centers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s5_d1",
      "label": "Cross-Region Latency Bounds",
      "description": "Managing 100-200ms cross-ocean round-trip times during synchronous write commits.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t4_s5_d2",
      "label": "Conflict Avoidance Architecture",
      "description": "Partitioning write traffic by user geographic location to minimize cross-region write collisions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5",
      "label": "Replication & Consistency Models Topic 5",
      "description": "Detailed first-principles mechanics for Replication & Consistency Models topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s1",
      "label": "Replication & Consistency Models Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s1_d1",
      "label": "Replication & Consistency Models Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s1_d2",
      "label": "Replication & Consistency Models Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s2",
      "label": "Replication & Consistency Models Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s2_d1",
      "label": "Replication & Consistency Models Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s2_d2",
      "label": "Replication & Consistency Models Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s3",
      "label": "Replication & Consistency Models Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s3_d1",
      "label": "Replication & Consistency Models Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s3_d2",
      "label": "Replication & Consistency Models Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s4",
      "label": "Replication & Consistency Models Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s4_d1",
      "label": "Replication & Consistency Models Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s4_d2",
      "label": "Replication & Consistency Models Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s5",
      "label": "Replication & Consistency Models Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s5_d1",
      "label": "Replication & Consistency Models Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t5_s5_d2",
      "label": "Replication & Consistency Models Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6",
      "label": "Replication & Consistency Models Topic 6",
      "description": "Detailed first-principles mechanics for Replication & Consistency Models topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s1",
      "label": "Replication & Consistency Models Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s1_d1",
      "label": "Replication & Consistency Models Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s1_d2",
      "label": "Replication & Consistency Models Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s2",
      "label": "Replication & Consistency Models Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s2_d1",
      "label": "Replication & Consistency Models Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s2_d2",
      "label": "Replication & Consistency Models Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s3",
      "label": "Replication & Consistency Models Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s3_d1",
      "label": "Replication & Consistency Models Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s3_d2",
      "label": "Replication & Consistency Models Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s4",
      "label": "Replication & Consistency Models Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s4_d1",
      "label": "Replication & Consistency Models Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s4_d2",
      "label": "Replication & Consistency Models Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s5",
      "label": "Replication & Consistency Models Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Replication & Consistency Models Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s5_d1",
      "label": "Replication & Consistency Models Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p2_t6_s5_d2",
      "label": "Replication & Consistency Models Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Replication & Consistency Models Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3",
      "label": "Partitioning & Sharding Strategies",
      "description": "Architectures for splitting massive datasets across independent storage nodes to scale write and storage capacity.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1",
      "label": "Consistent Hashing Architecture",
      "description": "Distributing keys across a logical hash ring to minimize data movement when nodes join or leave.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s1",
      "label": "Hash Ring & Token Assignment",
      "description": "Mapping nodes and data keys to a shared 32-bit or 128-bit hash ring space.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s1_d1",
      "label": "MD5 / MurmurHash Ring Mapping",
      "description": "Hashing key strings into integer values along a circular ring space [0, 2^32 - 1].",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s1_d2",
      "label": "Clockwise Successor Lookup Rule",
      "description": "Routing data keys to the first active node encountered moving clockwise around the ring.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s2",
      "label": "Virtual Nodes (Vnodes)",
      "description": "Assigning multiple virtual tokens per physical machine to ensure uniform distribution.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s2_d1",
      "label": "Hotspot Mitigation via Vnodes",
      "description": "Assigning 128-256 virtual nodes per physical node to prevent uneven data cluster packing.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s2_d2",
      "label": "Heterogeneous Hardware Weighting",
      "description": "Allocating higher vnode counts to powerful physical machines with larger storage drives.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s3",
      "label": "Re-sharding Data Movement Minimization",
      "description": "Re-assigning only 1/N of total keys when scaling cluster size up or down.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s3_d1",
      "label": "K/N Key Transfer Bound",
      "description": "Guaranteeing that adding a node requires moving only K/N keys, where K is total keys and N is nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s3_d2",
      "label": "Targeted Range Streaming",
      "description": "Streaming key ranges directly between old and new node owners without cluster downtime.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s4",
      "label": "Rendezvous Hashing (Highest Random Weight)",
      "description": "Alternative hashing scheme selecting destinations by computing highest weight scores.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s4_d1",
      "label": "Weight Score Calculation w(k, i)",
      "description": "Computing weight hash(key + node_id) for each node and selecting the maximum weight destination.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s4_d2",
      "label": "Zero Memory Hash Mapping",
      "description": "Calculating placement without maintaining routing tables or hash ring data structures.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s5",
      "label": "Consistent Hashing in DynamoDB & Cassandra",
      "description": "Real-world production implementations of consistent hash ring partitioning.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s5_d1",
      "label": "Cassandra Token Range Ring",
      "description": "Distributing Murmur3 tokens across cluster nodes and managing replica ring offsets.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t1_s5_d2",
      "label": "Partition Key + Sort Key Design",
      "description": "Hashing partition keys to select node locations while sorting rows locally by sort key.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2",
      "label": "Range-Based Partitioning",
      "description": "Ordering data sequentially and splitting datasets into contiguous key ranges.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s1",
      "label": "Contiguous Key Range Splits",
      "description": "Grouping key ranges (e.g. A-D, E-H) onto specific tablet or region servers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s1_d1",
      "label": "Ordered Range Query Execution",
      "description": "Executing fast range scans (WHERE key BETWEEN x AND y) without querying all cluster nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s1_d2",
      "label": "Monotonic Key Hotspot Risks",
      "description": "Experiencing write hotspots when inserting auto-incrementing IDs or current timestamps.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s2",
      "label": "Dynamic Tablet / Region Splitting",
      "description": "Splitting large partitions automatically when storage size limits are crossed.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s2_d1",
      "label": "64MB - 512MB Tablet Split Bounds",
      "description": "Splitting single tablets into two equal child tablets once storage bounds are exceeded.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s2_d2",
      "label": "Metadata Catalog Update Sequences",
      "description": "Updating central master catalogs (e.g. HBase Meta, CockroachDB range descriptor) atomically.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s3",
      "label": "CockroachDB Multi-Raft Range Architecture",
      "description": "Managing range partitions as independent Raft consensus groups.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s3_d1",
      "label": "64MB Range Size Target",
      "description": "Maintaining fixed 64MB data ranges for fast Raft snapshot transfers and rebalancing.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s3_d2",
      "label": "Range Leaseholder Execution",
      "description": "Routing read and write queries to range leaseholders to bypass consensus during reads.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s4",
      "label": "Google Bigtable Tablet Architecture",
      "description": "Partitioning massive sparse tables into contiguous tablets backed by SSTables on Colossus.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s4_d1",
      "label": "Master Node Tablet Assignment",
      "description": "Assigning tablet ranges to tablet servers via ZooKeeper session locks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s4_d2",
      "label": "Log-Structured Merge Tablet Storage",
      "description": "Writing tablet mutations into WAL files and memtables before flushing to SSTables.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s5",
      "label": "Salting Keys to Prevent Range Hotspots",
      "description": "Prepending pseudo-random prefixes to keys to distribute write loads evenly.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s5_d1",
      "label": "Random Salt Prefixing (0..N)",
      "description": "Prepending random integer prefixes to timestamps (e.g. 3_2026-07-25) to scatter writes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t2_s5_d2",
      "label": "Scatter-Gather Query Overhead",
      "description": "Requiring queries to scan all salt prefix partitions and aggregate partial results.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3",
      "label": "Two-Phase Commit (2PC) & Distributed Transactions",
      "description": "Protocols for executing atomic transactions across multiple database shards or microservices.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s1",
      "label": "2PC Phase 1: Prepare Protocol",
      "description": "Coordinator requesting participants to vote on committing a transaction.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s1_d1",
      "label": "PREPARE Message Emission",
      "description": "Broadcasting PREPARE requests to all resource managers participating in the transaction.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s1_d2",
      "label": "VOTE_COMMIT vs VOTE_ABORT",
      "description": "Participants writing state to local WAL and returning vote commitments to the coordinator.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s2",
      "label": "2PC Phase 2: Commit / Abort Protocol",
      "description": "Coordinator issuing global commit or abort commands based on participant votes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s2_d1",
      "label": "Global COMMIT Message Broadcast",
      "description": "Emitting COMMIT commands when all participants return VOTE_COMMIT votes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s2_d2",
      "label": "Participant Acknowledgment Tracking",
      "description": "Waiting for all participants to acknowledge completion before closing the transaction.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s3",
      "label": "Blocking Vulnerabilities in 2PC",
      "description": "Vulnerabilities where resource locks are held indefinitely if the coordinator crashes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s3_d1",
      "label": "Coordinator Single Point of Failure",
      "description": "Holding participant row locks when a coordinator crashes after Phase 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s3_d2",
      "label": "In-Doubt Transaction Lock Saturation",
      "description": "Exhausting database connection pools due to unresolved in-doubt transaction locks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s4",
      "label": "Three-Phase Commit (3PC) Protocol",
      "description": "Non-blocking commit protocol adding a Pre-Commit phase and timeouts.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s4_d1",
      "label": "Can-Commit -> Pre-Commit -> Do-Commit",
      "description": "Inserting a Pre-Commit state to ensure participants can safely abort on timeouts.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s4_d2",
      "label": "Network Partition Safety Limitations",
      "description": "Failing to guarantee consistency when network partitions split 3PC clusters.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s5",
      "label": "Percolator Distributed Transactions (TiDB)",
      "description": "Google Percolator model for executing cross-shard ACID transactions using optimistic locking.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s5_d1",
      "label": "Primary Lock Selection Protocol",
      "description": "Designating one key lock as primary and referencing it from secondary key locks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t3_s5_d2",
      "label": "Timestamp Oracle (TSO) Monotonic Clock",
      "description": "Fetching start_ts and commit_ts timestamps from central TSO services for MVCC checks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4",
      "label": "Saga Pattern for Distributed Microservices",
      "description": "Managing long-running distributed transactions as a sequence of local transactions with compensation.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s1",
      "label": "Choreography-Based Saga Architecture",
      "description": "Event-driven sagas where microservices listen to events and execute local transactions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s1_d1",
      "label": "Domain Event Publishing Rules",
      "description": "Emitting event notifications (e.g. OrderCreated) to trigger next microservice steps.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s1_d2",
      "label": "Decentralized Service Coupling",
      "description": "Eliminating central orchestrators but increasing event flow complexity.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s2",
      "label": "Orchestration-Based Saga Architecture",
      "description": "Central saga orchestrators instructing microservices to execute specific steps.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s2_d1",
      "label": "Saga State Machine Definition",
      "description": "Modeling saga progress using explicit state machines (e.g. Temporal, AWS Step Functions).",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s2_d2",
      "label": "Command-Reply Message Protocols",
      "description": "Sending execution commands to microservices and waiting for completion responses.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s3",
      "label": "Compensating Transactions",
      "description": "Executing explicit undo steps to reverse completed local transactions when later steps fail.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s3_d1",
      "label": "Forward Recovery vs Backward Recovery",
      "description": "Retrying failed steps continuously vs executing compensating actions backward.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s3_d2",
      "label": "Idempotent Compensation Logic",
      "description": "Ensuring compensating endpoints can be called multiple times without duplicate side effects.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s4",
      "label": "Pivot & Reversible Transactions",
      "description": "Categorizing saga steps into printable, pivot, and compensating transactions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s4_d1",
      "label": "Pivot Transaction Boundaries",
      "description": "Identifying the point-of-no-return step after which a saga cannot be aborted.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s4_d2",
      "label": "Post-Pivot Retry Guarantees",
      "description": "Guaranteeing that steps following pivot transactions must execute to completion.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s5",
      "label": "Outbox Pattern for Saga Events",
      "description": "Guaranteeing reliable event publication during local database updates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s5_d1",
      "label": "Transactional Outbox Table Writes",
      "description": "Writing entity updates and outbox event records within single local ACID transactions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t4_s5_d2",
      "label": "Debezium / Poller Outbox Streaming",
      "description": "Reading outbox table rows via CDC to publish events reliably to message brokers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5",
      "label": "Partitioning & Sharding Strategies Topic 5",
      "description": "Detailed first-principles mechanics for Partitioning & Sharding Strategies topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s1",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s1_d1",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s1_d2",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s2",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s2_d1",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s2_d2",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s3",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s3_d1",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s3_d2",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s4",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s4_d1",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s4_d2",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s5",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s5_d1",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t5_s5_d2",
      "label": "Partitioning & Sharding Strategies Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6",
      "label": "Partitioning & Sharding Strategies Topic 6",
      "description": "Detailed first-principles mechanics for Partitioning & Sharding Strategies topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s1",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s1_d1",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s1_d2",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s2",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s2_d1",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s2_d2",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s3",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s3_d1",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s3_d2",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s4",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s4_d1",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s4_d2",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s5",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Partitioning & Sharding Strategies Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s5_d1",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p3_t6_s5_d2",
      "label": "Partitioning & Sharding Strategies Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Partitioning & Sharding Strategies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4",
      "label": "Caching Architecture & Invalidation",
      "description": "Low-latency in-memory data storage layers, cache eviction strategies, and stampede protection patterns.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1",
      "label": "Cache Topologies & Read/Write Patterns",
      "description": "Architectural patterns for positioning caches between application servers and persistent datastores.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s1",
      "label": "Cache-Aside (Lazy Loading) Pattern",
      "description": "Application code querying cache directly and loading from database on misses.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s1_d1",
      "label": "Cache Miss Read Sequence",
      "description": "Reading from cache -> Miss -> Read DB -> Write back to cache -> Return result.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s1_d2",
      "label": "Stale Data Vulnerability Windows",
      "description": "Experiencing stale reads when database updates occur before cache invalidation calls.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s2",
      "label": "Write-Through & Read-Through Patterns",
      "description": "Positioning cache as the primary data interface that updates storage synchronously.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s2_d1",
      "label": "Synchronous Storage Updates",
      "description": "Cache layer updating backend database synchronously before returning success to caller.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s2_d2",
      "label": "Consistent Cache Data Guarantees",
      "description": "Guaranteeing application reads never encounter stale data relative to cache state.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s3",
      "label": "Write-Behind (Write-Back) Caching",
      "description": "Writing updates to cache immediately and flushing to persistent database asynchronously.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s3_d1",
      "label": "Asynchronous Batch DB Flushes",
      "description": "Coalescing multiple write operations in cache memory before writing to storage.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s3_d2",
      "label": "Data Loss Risks on Cache Node Crashes",
      "description": "Losing un-flushed writes if cache nodes fail before async persistence completes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s4",
      "label": "Write-Around Pattern",
      "description": "Writing updates directly to storage, bypassing cache entirely.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s4_d1",
      "label": "Cache Invalidation on Write",
      "description": "Deleting cached keys on write to force fresh reads on subsequent queries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s4_d2",
      "label": "Cache Churn Reduction",
      "description": "Preventing cache pollution from data that is rarely read after creation.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s5",
      "label": "Refresh-Ahead Caching",
      "description": "Predictively refreshing expiring cache keys before client queries arrive.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s5_d1",
      "label": "Access Frequency Tracking",
      "description": "Monitoring key access patterns to identify frequently queried hot keys.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t1_s5_d2",
      "label": "Async Pre-expiration Reloads",
      "description": "Reloading keys from database when remaining TTL falls below 20% thresholds.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2",
      "label": "Cache Eviction Algorithms",
      "description": "Policies for selecting and purging keys when memory capacity limits are reached.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s1",
      "label": "Least Recently Used (LRU) Eviction",
      "description": "Evicting keys that have not been accessed for the longest duration.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s1_d1",
      "label": "Doubly-Linked List + Hash Map Data Structure",
      "description": "Maintaining O(1) key access and O(1) list node movements to head on access.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s1_d2",
      "label": "Scan Resistance Vulnerabilities",
      "description": "Flushing hot items from cache during large one-time sequential dataset scans.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s2",
      "label": "Least Frequently Used (LFU) Eviction",
      "description": "Evicting keys with the lowest cumulative access frequency counts.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s2_d1",
      "label": "Morris Counter Frequency Tracking",
      "description": "Using logarithmic counters to track access frequency using minimal bit memory.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s2_d2",
      "label": "Frequency Decay & Aging Rules",
      "description": "Decaying historical frequency counts over time so old hot keys can be evicted.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s3",
      "label": "Adaptive Replacement Cache (ARC)",
      "description": "Self-tuning cache algorithm balancing recency (LRU) and frequency (LFU).",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s3_d1",
      "label": "Dual LRU List Structure (L1 & L2)",
      "description": "Tracking recently accessed items (L1) and frequently accessed items (L2).",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s3_d2",
      "label": "Ghost History List Adaptation",
      "description": "Adjusting list target size parameters dynamically using ghost cache miss feedback.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s4",
      "label": "2Q (Two Queue) Eviction Algorithm",
      "description": "Splitting cache space into FIFO staging queues and LRU main queues.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s4_d1",
      "label": "In-Queue FIFO Filtering",
      "description": "Routing new items to FIFO queues and promoting to main LRU only on second access.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s4_d2",
      "label": "Sequential Scan Protection",
      "description": "Preventing one-hit-wonder keys from evicting hot items from main LRU caches.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s5",
      "label": "Random & Segmented LRU (SLRU)",
      "description": "Lightweight eviction approximations used in production systems like Memcached.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s5_d1",
      "label": "Sampled LRU Approximation",
      "description": "Sampling N random keys (e.g. 5) and evicting the oldest key among the sample.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t2_s5_d2",
      "label": "Probationary vs Protected SLRU Segments",
      "description": "Requiring items to be accessed twice before moving to protected cache segments.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3",
      "label": "Redis Cluster Architecture & Internals",
      "description": "High-performance in-memory key-value database supporting clustering and replication.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s1",
      "label": "16,384 Hash Slot Allocation",
      "description": "Partitioning key space into 16,384 logical hash slots distributed across cluster nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s1_d1",
      "label": "CRC16 Key Hashing (CRC16(key) % 16384)",
      "description": "Hashing keys to determine target hash slot assignments.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s1_d2",
      "label": "Hash Tag Force Colocation ({user_123})",
      "description": "Using curly brace syntax to force related keys to compute identical hash slots.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s2",
      "label": "Cluster Gossip Protocol & Node Discovery",
      "description": "Decentralized peer-to-peer communication protocol for tracking node states.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s2_d1",
      "label": "PING / PONG Packet Swapping",
      "description": "Exchanging node health, hash slot mappings, and failure state flags.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s2_d2",
      "label": "Cluster State Convergence Bounds",
      "description": "Converging cluster configuration state within seconds of topology changes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s3",
      "label": "MOVED vs ASK Redirects",
      "description": "Client redirection handling during cluster re-sharding and slot migration.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s3_d1",
      "label": "MOVED Permanent Slot Redirects",
      "description": "Responding with MOVED errors when keys belong to slots owned by other nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s3_d2",
      "label": "ASK Temporary Migration Redirects",
      "description": "Routing client requests to target nodes during active slot migration passes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s4",
      "label": "Redis Event Loop & Threading Model",
      "description": "Single-threaded event loop execution engine built on epoll / kqueue.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s4_d1",
      "label": "aeProcessEvents Non-blocking I/O",
      "description": "Processing multiplexed socket connections sequentially to eliminate lock overhead.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s4_d2",
      "label": "Multi-threaded I/O Offloading (Redis 6+)",
      "description": "Offloading socket read/write parsing to worker threads while keeping command execution single-threaded.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s5",
      "label": "Redis Replication & Sentinel High Availability",
      "description": "Asynchronous replica synchronization and automated master failover monitoring.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s5_d1",
      "label": "PSYNC Replication Protocol",
      "description": "Streaming replication backlog logs to followers for low-latency state catchup.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t3_s5_d2",
      "label": "Sentinel Quorum Failover Elections",
      "description": "Promoting replica nodes to master status when Sentinels vote a master offline.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4",
      "label": "Cache Stampede & Thundering Herd Protection",
      "description": "Protections for preventing database overload when popular cache keys expire simultaneously.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s1",
      "label": "Mutex / Distributed Lock Protection",
      "description": "Restricting database queries to single worker threads when cache misses occur.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s1_d1",
      "label": "Lock Acquisition on Cache Miss",
      "description": "Acquiring a lock on miss; other threads wait for lock release and read newly cached value.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s1_d2",
      "label": "Thread Waiting & Retry Timeouts",
      "description": "Configuring sleep-retry loops for waiting threads to prevent lock starvation.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s2",
      "label": "Probabilistic Early Expiration (XFetch Algorithm)",
      "description": "Recomputations triggered probabilistically as key expiration approaches.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s2_d1",
      "label": "XFetch Probability Formula (-beta * log(rand()))",
      "description": "Evaluating delta - beta * log(rand()) > TTL to trigger background refreshes early.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s2_d2",
      "label": "Optimal Beta Parameter Tuning",
      "description": "Adjusting beta multipliers to match query load and database computation cost.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s3",
      "label": "Jittered Expiration Timestamps",
      "description": "Adding random time offsets to TTL values to prevent simultaneous key expiration.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s3_d1",
      "label": "Randomized TTL Jitter Injection",
      "description": "Setting TTL = base_ttl + random(-jitter, +jitter) to smear expiration times over minutes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s3_d2",
      "label": "Batch Key Loading Distribute Rules",
      "description": "Spreading bulk data load expiration times to flatten database load spikes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s4",
      "label": "Single Flight Pattern (Go / Node.js)",
      "description": "In-memory request collapsing mechanism suppressing duplicate concurrent function calls.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s4_d1",
      "label": "Duplicate Request Suppress Maps",
      "description": "Holding active request promises in local process maps to share results across concurrent callers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s4_d2",
      "label": "Process Memory Scope Limitations",
      "description": "Effective within individual application processes but requires distributed locks across multi-node tiers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s5",
      "label": "Stale-While-Revalidate Caching Headers",
      "description": "Serving stale cached content immediately while updating cache asynchronously in background.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s5_d1",
      "label": "HTTP Cache-Control Extension Specs",
      "description": "Configuring max-age=60, stale-while-revalidate=300 headers for HTTP cache layers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t4_s5_d2",
      "label": "Zero Latency Background Revalidation",
      "description": "Delivering instant sub-millisecond responses to users while refreshing backend caches.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5",
      "label": "Caching Architecture & Invalidation Topic 5",
      "description": "Detailed first-principles mechanics for Caching Architecture & Invalidation topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s1",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s1_d1",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s1_d2",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s2",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s2_d1",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s2_d2",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s3",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s3_d1",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s3_d2",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s4",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s4_d1",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s4_d2",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s5",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s5_d1",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t5_s5_d2",
      "label": "Caching Architecture & Invalidation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6",
      "label": "Caching Architecture & Invalidation Topic 6",
      "description": "Detailed first-principles mechanics for Caching Architecture & Invalidation topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s1",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s1_d1",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s1_d2",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s2",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s2_d1",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s2_d2",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s3",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s3_d1",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s3_d2",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s4",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s4_d1",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s4_d2",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s5",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Caching Architecture & Invalidation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s5_d1",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p4_t6_s5_d2",
      "label": "Caching Architecture & Invalidation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Caching Architecture & Invalidation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5",
      "label": "Event-Driven & Distributed Messaging",
      "description": "High-throughput event streaming systems, log-structured message brokers, and transactional message patterns.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1",
      "label": "Apache Kafka Storage Internals",
      "description": "Log-structured event streaming platform optimized for sequential disk I/O and zero-copy transfer.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s1",
      "label": "Log Segment & Index File Layout",
      "description": "Partition storage structure combining append-only log segments with offset and time indexes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s1_d1",
      "label": "1GB Log Segment Rolling (.log)",
      "description": "Appending incoming records sequentially to active log segment files up to 1GB bounds.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s1_d2",
      "label": "Offset Index Sparse Binary Search (.index)",
      "description": "Mapping relative message offsets to physical file byte positions every 4KB of data.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s2",
      "label": "Zero-Copy Linux sendfile Network Transfer",
      "description": "Bypassing user-space memory buffers when transferring log files to network sockets.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s2_d1",
      "label": "Kernel Context Transfer (Page Cache -> NIC)",
      "description": "Transferring data from OS Page Cache directly to Network Card buffers via DMA without CPU copy.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s2_d2",
      "label": "JVM Memory Copy Elimination",
      "description": "Eliminating user-space buffer allocations to achieve multi-gigabit throughput per broker node.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s3",
      "label": "Page Cache Centric Architecture",
      "description": "Relying on Linux OS Page Cache for caching log segments instead of JVM heap.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s3_d1",
      "label": "Garbage Collection Overhead Avoidance",
      "description": "Keeping broker JVM heaps small (4-8GB) to prevent GC pauses during heavy streaming.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s3_d2",
      "label": "Immediate Read-After-Write Page Cache Hits",
      "description": "Serving real-time consumer reads directly from OS Page Cache without touching physical disk.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s4",
      "label": "Kafka Consumer Group Rebalance Protocol",
      "description": "Distributing topic partitions among consumer instances within a group.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s4_d1",
      "label": "Group Coordinator & Leader Roles",
      "description": "Selecting a broker coordinator to oversee membership and assigning partition assignment work to group leader.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s4_d2",
      "label": "Eager vs Cooperative Sticky Assignor",
      "description": "Cooperative rebalancing allowing consumers to retain existing partitions during group updates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s5",
      "label": "Kafka Transactional Producer & Exactly-Once (EOS)",
      "description": "Achieving atomic multi-partition writes using transactional coordinator logs.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s5_d1",
      "label": "Transactional ID & Producer Epoch",
      "description": "Fencing zombie producer instances using incrementing producer epoch numbers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t1_s5_d2",
      "label": "Control Markers (COMMIT / ABORT)",
      "description": "Writing control markers into partition logs to signal transaction outcomes to consumers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2",
      "label": "Event Sourcing & CQRS Architecture",
      "description": "Persisting domain state as an immutable append-only sequence of events and separating read/write models.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s1",
      "label": "Event Store Immutable Append-Only Log",
      "description": "Storing domain state mutations as immutable event objects rather than overwriting table rows.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s1_d1",
      "label": "Domain Event Structure Schema",
      "description": "Recording event_id, aggregate_id, event_type, payload JSON, and timestamp fields.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s1_d2",
      "label": "Zero Data Loss Audit Log Capabilities",
      "description": "Preserving full historical state change context for audit and analytics purposes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s2",
      "label": "Aggregate Root State Reconstruction",
      "description": "Rebuilding current entity state by replaying historical event sequences from genesis.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s2_d1",
      "label": "Sequential Event Apply Loops",
      "description": "Instantiating empty entities and invoking apply(event) methods in historical sequence.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s2_d2",
      "label": "Concurrency Control via Version Numbers",
      "description": "Enforcing optimistic locking by asserting target aggregate version numbers during event appends.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s3",
      "label": "Snapshot Optimization Strategies",
      "description": "Persisting periodic state snapshots to avoid replaying thousands of historical events.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s3_d1",
      "label": "Every-N-Events Snapshot Triggering",
      "description": "Saving full state snapshots to storage every 100 or 1,000 events.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s3_d2",
      "label": "Snapshot + Delta Event Replay",
      "description": "Loading the latest snapshot and replaying only subsequent delta events.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s4",
      "label": "Command Query Responsibility Segregation (CQRS)",
      "description": "Decoupling write domain models (Commands) from read projection models (Queries).",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s4_d1",
      "label": "Command Model Write Validation",
      "description": "Processing commands (e.g. CreateOrder) and validating business invariants before emitting events.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s4_d2",
      "label": "Read Model Projection Generators",
      "description": "Consuming event streams to build denormalized SQL or Elasticsearch read tables.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s5",
      "label": "Eventual Consistency Gaps in CQRS Projections",
      "description": "Managing latency gaps between event publication and read model updates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s5_d1",
      "label": "Client UI Optimistic Updates",
      "description": "Rendering speculative UI state changes immediately before projection updates complete.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t2_s5_d2",
      "label": "Read-Your-Own-Writes Token Tracking",
      "description": "Routing client reads to write models or waiting for projection sync when token versions match.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3",
      "label": "Dead Letter Queues (DLQ) & Retry Topologies",
      "description": "Patterns for handling unprocessable messages without blocking message consumer streams.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s1",
      "label": "DLQ Error Isolation Architecture",
      "description": "Routing corrupt or non-retryable messages to isolated side queues.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s1_d1",
      "label": "Max Retry Attempt Exhaustion Rules",
      "description": "Offloading messages to DLQ targets after crossing max_retries thresholds (e.g. 5 attempts).",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s1_d2",
      "label": "Exception Payload Header Enrichment",
      "description": "Attaching exception stack traces, timestamp, and host metadata to DLQ message headers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s2",
      "label": "Non-Blocking Exponential Retry Queues",
      "description": "Routing failed messages to delay queues to prevent blocking consumer thread execution.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s2_d1",
      "label": "Multi-Tiered Delay Queue Topology",
      "description": "Routing messages through retry_5s, retry_1m, and retry_1h topics with increasing delays.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s2_d2",
      "label": "Head-of-Line Blocking Elimination",
      "description": "Continuing processing of valid partition messages while failed items pause in delay topics.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s3",
      "label": "Poison Pill Message Detection",
      "description": "Identifying malformed messages that crash consumer processes repeatedly.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s3_d1",
      "label": "Deserialization Error Interceptors",
      "description": "Catching schema or JSON parsing exceptions prior to domain code execution.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s3_d2",
      "label": "Immediate DLQ Bypassing",
      "description": "Routing malformed payloads straight to DLQ without executing retry loops.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s4",
      "label": "Automated DLQ Redrive Mechanisms",
      "description": "Replaying messages stored in DLQs back into primary consumer processing topics.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s4_d1",
      "label": "Batch Redrive CLI Tooling",
      "description": "Filtering and re-injecting DLQ messages back into main ingestion topics after bug fixes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s4_d2",
      "label": "Rate-Limited Redrive Execution",
      "description": "Throttling redrive speeds to prevent overwhelming downstream services.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s5",
      "label": "DLQ Alerting & Operational Dashboards",
      "description": "Monitoring DLQ message accumulation to catch production pipeline failures.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s5_d1",
      "label": "Queue Depth Alarm Thresholds",
      "description": "Triggering PagerDuty alerts when DLQ message counts cross zero or threshold bounds.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t3_s5_d2",
      "label": "Message Payload Inspection UIs",
      "description": "Providing secure internal dashboards for engineers to view and edit failing DLQ payloads.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4",
      "label": "Message Delivery Semantics",
      "description": "Guarantees provided by messaging systems regarding duplicate delivery and message loss.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s1",
      "label": "At-Most-Once Delivery Semantics",
      "description": "Committing offsets before processing messages; risk of data loss on consumer crashes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s1_d1",
      "label": "Auto-Commit Offset Execution",
      "description": "Committing broker offsets immediately upon message receipt prior to processing.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s1_d2",
      "label": "Zero Duplicate Guarantee",
      "description": "Guaranteeing messages are processed at most once, accepting occasional data loss.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s2",
      "label": "At-Least-Once Delivery Semantics",
      "description": "Committing offsets after processing messages; risk of duplicate delivery on crashes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s2_d1",
      "label": "Post-Processing Offset Commit",
      "description": "Committing offsets only after business processing logic completes successfully.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s2_d2",
      "label": "Consumer Idempotency Requirement",
      "description": "Requiring consumers to implement idempotent handling to deduplicate retried messages.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s3",
      "label": "Exactly-Once Processing Semantics (EOS)",
      "description": "Combining transactional producers and idempotent consumers to eliminate data loss and duplicates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s3_d1",
      "label": "Read-Process-Write Transaction Bounds",
      "description": "Atomically committing input offsets and output messages within single transactions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s3_d2",
      "label": "Idempotent Consumer Unique Key Deduplication",
      "description": "Tracking processed message IDs in database unique index tables.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s4",
      "label": "Idempotent Producer Mechanics",
      "description": "Eliminating duplicate message writes caused by network ACK timeouts.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s4_d1",
      "label": "Sequence Number Tracking (Producer ID + Seq)",
      "description": "Assigning sequence numbers to messages; brokers reject duplicate sequence numbers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s4_d2",
      "label": "In-Flight Request Queue Bounds",
      "description": "Restricting max.in.flight.requests.per.connection to preserve message ordering.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s5",
      "label": "Message Deduplication Strategies",
      "description": "Techniques for identifying and discarding duplicate message deliveries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s5_d1",
      "label": "Bloom Filter Duplicate Pre-Screening",
      "description": "Checking bloom filters to identify potential duplicate message IDs before DB lookups.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t4_s5_d2",
      "label": "Sliding Window Deduplication Cache",
      "description": "Caching message IDs in Redis for 24 hours to discard duplicate incoming messages.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5",
      "label": "Event-Driven & Distributed Messaging Topic 5",
      "description": "Detailed first-principles mechanics for Event-Driven & Distributed Messaging topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s1",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s1_d1",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s1_d2",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s2",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s2_d1",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s2_d2",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s3",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s3_d1",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s3_d2",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s4",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s4_d1",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s4_d2",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s5",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s5_d1",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t5_s5_d2",
      "label": "Event-Driven & Distributed Messaging Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6",
      "label": "Event-Driven & Distributed Messaging Topic 6",
      "description": "Detailed first-principles mechanics for Event-Driven & Distributed Messaging topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s1",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s1_d1",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s1_d2",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s2",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s2_d1",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s2_d2",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s3",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s3_d1",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s3_d2",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s4",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s4_d1",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s4_d2",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s5",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Event-Driven & Distributed Messaging Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s5_d1",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p5_t6_s5_d2",
      "label": "Event-Driven & Distributed Messaging Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Event-Driven & Distributed Messaging Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6",
      "label": "Database Storage Engine Internals",
      "description": "Low-level disk data structures, index layouts, page management, and write-ahead logging mechanisms.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1",
      "label": "LSM-Tree (Log-Structured Merge-Tree)",
      "description": "Write-optimized storage engine converting random write workloads into sequential disk I/O.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s1",
      "label": "MemTable & Write-Ahead Log (WAL)",
      "description": "In-memory write buffer backed by persistent sequential log files.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s1_d1",
      "label": "SkipList / Red-Black Tree MemTable",
      "description": "Sorting incoming key-value writes in memory using concurrent SkipList data structures.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s1_d2",
      "label": "Sequential WAL Append Persistence",
      "description": "Appending mutations to disk WAL files before updating MemTable to guarantee crash recovery.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s2",
      "label": "SSTable (Sorted String Table) Format",
      "description": "Immutable sorted data files flushed from MemTable to persistent disk storage.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s2_d1",
      "label": "Data Block & Index Block Sections",
      "description": "Grouping key-value pairs into 4KB data blocks referenced by index block file footers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s2_d2",
      "label": "Bloom Filter Footer Integration",
      "description": "Embedding bloom filters in SSTables to check key existence before disk reads.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s3",
      "label": "Leveled Compaction Strategy",
      "description": "Organizing SSTables into exponential levels (L0, L1, L2) to bound read amplification.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s3_d1",
      "label": "L0 Overlapping Key Ranges",
      "description": "Flushing MemTables directly to L0 SSTables containing overlapping key ranges.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s3_d2",
      "label": "L1+ Non-Overlapping Merge Passes",
      "description": "Merging L(i) SSTables into L(i+1) to ensure non-overlapping key ranges across files.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s4",
      "label": "Size-Tiered Compaction Strategy",
      "description": "Merging SSTables of similar sizes together; optimized for write-heavy workloads.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s4_d1",
      "label": "Write Amplification Reduction",
      "description": "Minimizing disk writes during compaction at the expense of higher read amplification.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s4_d2",
      "label": "Temporary Disk Space Overhead (50%)",
      "description": "Requiring up to 50% free disk headroom during large tier compaction merges.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s5",
      "label": "Read / Write / Space Amplification Tradeoffs",
      "description": "Evaluating fundamental performance metrics of LSM storage engines.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s5_d1",
      "label": "Write Amplification (WA) Ratio",
      "description": "Measuring total bytes written to disk relative to logical bytes written by clients.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t1_s5_d2",
      "label": "Read Amplification (RA) Lookups",
      "description": "Counting SSTable files checked to resolve single key read queries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2",
      "label": "B+ Tree Storage Engine Architecture",
      "description": "Read-optimized self-balancing search tree structure organizing database disk pages.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s1",
      "label": "B+ Tree Page Node Structure",
      "description": "Structuring interior index nodes and leaf data nodes into fixed-size disk pages.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s1_d1",
      "label": "Interior Branching Pointer Nodes",
      "description": "Storing routing keys and child page pointers in interior non-leaf nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s1_d2",
      "label": "Leaf Node Doubly-Linked Lists",
      "description": "Storing actual data records or record pointers in leaf nodes linked horizontally.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s2",
      "label": "Page Split & Merge Mechanics",
      "description": "Maintaining tree balance when leaf pages fill up or become empty.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s2_d1",
      "label": "50/50 Leaf Page Splits",
      "description": "Splitting full pages into two 50% capacity pages and promoting median keys to parent nodes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s2_d2",
      "label": "Underflow Page Coalescing Rules",
      "description": "Merging sparse pages when occupancy falls below 50% fill factor thresholds.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s3",
      "label": "Latch Crabbing & Concurrency Control",
      "description": "Traversing and locking B+ Tree pages safely during concurrent read/write operations.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s3_d1",
      "label": "Read/Write Latch Traversal Rules",
      "description": "Acquiring read latches on child nodes before releasing parent latches during tree descent.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s3_d2",
      "label": "Pessimistic Split Write Latches",
      "description": "Acquiring exclusive write latches up to the root when page splits are anticipated.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s4",
      "label": "Fill Factor Tuning Optimization",
      "description": "Configuring leaf page reserved space to minimize page split frequency.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s4_d1",
      "label": "Default 70-80% Fill Factor Setup",
      "description": "Reserving 20-30% free space in leaf pages to accommodate random updates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s4_d2",
      "label": "100% Fill Factor for Append-Only Data",
      "description": "Packing leaf pages to 100% capacity for static or sequential auto-increment data.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s5",
      "label": "B+ Tree vs LSM-Tree Comparison",
      "description": "Evaluating read vs write performance trade-offs between B+ Trees and LSM-Trees.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s5_d1",
      "label": "Random Read Performance Bounds",
      "description": "B+ Trees offering faster random reads (O(log N)) due to single-point leaf lookups.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t2_s5_d2",
      "label": "Random Write Throughput Comparison",
      "description": "LSM-Trees providing higher random write throughput by converting writes into sequential I/O.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3",
      "label": "Buffer Pool Management & Page Eviction",
      "description": "In-memory page cache managing database disk page reads, writes, and evictions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s1",
      "label": "Buffer Frame Table & Page Mapping",
      "description": "Mapping disk page numbers to in-memory buffer pool frames using hash tables.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s1_d1",
      "label": "Page Table Hash Lookup",
      "description": "Resolving disk page IDs to memory frame addresses in O(1) time.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s1_d2",
      "label": "Dirty Page Flag Tracking",
      "description": "Marking modified buffer frames as dirty to schedule background disk flushes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s2",
      "label": "Clock Sweep (Second Chance) Eviction",
      "description": "Low-overhead page eviction algorithm approximating LRU using usage bit flags.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s2_d1",
      "label": "Circular Buffer Pointer Hand",
      "description": "Iterating through buffer frames, checking and clearing 1-bit reference flags.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s2_d2",
      "label": "Victim Frame Selection Rules",
      "description": "Evicting the first frame encountered with a reference flag of 0.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s3",
      "label": "Async Checkpointing & Dirty Page Flushes",
      "description": "Flushing modified buffer pool pages to disk to limit recovery times.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s3_d1",
      "label": "Fuzzy Checkpointing Algorithms",
      "description": "Flushing dirty pages continuously in background without freezing active transactions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s3_d2",
      "label": "WAL LSN Flush Dependency",
      "description": "Enforcing Write-Ahead Log flushes to disk prior to flushing corresponding dirty data pages.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s4",
      "label": "Buffer Pool Pinning & Unpinning",
      "description": "Preventing active worker threads from evicting pages currently being processed.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s4_d1",
      "label": "Pin Count Increments",
      "description": "Incrementing pin counts when threads access frames; pages with pin count > 0 cannot be evicted.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s4_d2",
      "label": "Unpinning on Operation Release",
      "description": "Decrementing pin counts when thread operations complete.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s5",
      "label": "Direct I/O (O_DIRECT) Bypassing",
      "description": "Bypassing OS Page Cache to manage database memory explicitly via buffer pool.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s5_d1",
      "label": "Double Caching Elimination",
      "description": "Eliminating duplicate memory storage in both database buffer pool and OS Page Cache.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t3_s5_d2",
      "label": "Explicit Memory Alignment Rules",
      "description": "Aligning direct I/O memory buffers to 4096-byte disk sector boundaries.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4",
      "label": "Write-Ahead Logging & ARIES Recovery",
      "description": "Crash recovery algorithms providing Atomicity and Durability across database outages.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s1",
      "label": "WAL Record Anatomy & LSN Tracking",
      "description": "Sequential log records describing database state mutations.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s1_d1",
      "label": "Log Sequence Number (LSN) Monotonicity",
      "description": "Assigning unique 64-bit integer LSNs to every log record.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s1_d2",
      "label": "Page LSN & Flushed LSN Comparisons",
      "description": "Ensuring Page LSN <= Flushed LSN before writing data pages to disk.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s2",
      "label": "ARIES Analysis Phase",
      "description": "Scanning WAL forward from the latest checkpoint to reconstruct state tables.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s2_d1",
      "label": "Transaction Table Reconstruction",
      "description": "Identifying active uncommitted transactions at the time of system crash.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s2_d2",
      "label": "Dirty Page Table (DPT) Recovery",
      "description": "Rebuilding the DPT to locate the earliest un-flushed page LSN (RedoLSN).",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s3",
      "label": "ARIES Redo Phase (Repeating History)",
      "description": "Replaying all WAL changes forward from RedoLSN to restore database state.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s3_d1",
      "label": "Replaying Committed & Uncommitted Writes",
      "description": "Re-applying all logged mutations to restore database to exact pre-crash state.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s3_d2",
      "label": "Page LSN Skip Optimization",
      "description": "Skipping redo operations if Page LSN on disk is already greater than or equal to Record LSN.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s4",
      "label": "ARIES Undo Phase (Rolling Back Aborts)",
      "description": "Rolling back mutations executed by uncommitted transactions active during crash.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s4_d1",
      "label": "Reverse WAL Traversal via PrevLSN",
      "description": "Traversing WAL backward to undo uncommitted transaction changes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s4_d2",
      "label": "Compensation Log Records (CLR)",
      "description": "Writing CLR records during undo operations to prevent repeating undo work on secondary crashes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s5",
      "label": "Physiological Logging Strategy",
      "description": "Combining logical operation logging with physical page pointer references.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s5_d1",
      "label": "Physical Page + Logical Row Delta",
      "description": "Specifying target physical page IDs while logging logical row mutation payloads.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t4_s5_d2",
      "label": "Space-Efficient Log Payload Sizes",
      "description": "Reducing log file size compared to pure physical page logging.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5",
      "label": "Database Storage Engine Internals Topic 5",
      "description": "Detailed first-principles mechanics for Database Storage Engine Internals topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s1",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s1_d1",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s1_d2",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s2",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s2_d1",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s2_d2",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s3",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s3_d1",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s3_d2",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s4",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s4_d1",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s4_d2",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s5",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s5_d1",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t5_s5_d2",
      "label": "Database Storage Engine Internals Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6",
      "label": "Database Storage Engine Internals Topic 6",
      "description": "Detailed first-principles mechanics for Database Storage Engine Internals topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s1",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s1_d1",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s1_d2",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s2",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s2_d1",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s2_d2",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s3",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s3_d1",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s3_d2",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s4",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s4_d1",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s4_d2",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s5",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Database Storage Engine Internals Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s5_d1",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p6_t6_s5_d2",
      "label": "Database Storage Engine Internals Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Database Storage Engine Internals Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7",
      "label": "Rate Limiting & Traffic Management",
      "description": "Algorithms and gateways for controlling traffic flow, preventing resource exhaustion, and protecting microservices.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1",
      "label": "Rate Limiting Algorithms",
      "description": "Mathematical algorithms for throttling API request rates across client sessions.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s1",
      "label": "Token Bucket Algorithm",
      "description": "Refilling tokens into a bucket at fixed rates; requests consume tokens to execute.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s1_d1",
      "label": "Token Refill Rate (r) & Capacity (b)",
      "description": "Refilling r tokens per second up to maximum bucket capacity b.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s1_d2",
      "label": "Burst Traffic Handling Capability",
      "description": "Allowing instant bursts of up to b requests when the bucket is full.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s2",
      "label": "Leaky Bucket Algorithm",
      "description": "Queueing requests in a fixed-capacity bucket that leaks processing requests at constant rates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s2_d1",
      "label": "Constant Output Processing Rate",
      "description": "Smooths out traffic spikes by emitting requests at steady, fixed intervals.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s2_d2",
      "label": "Queue Overflow Rejection (HTTP 429)",
      "description": "Dropping or rejecting incoming requests when the bucket queue overflows.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s3",
      "label": "Fixed Window Counter Algorithm",
      "description": "Counting requests within fixed window intervals (e.g. 1-minute blocks).",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s3_d1",
      "label": "Atomic Counter Invalidation",
      "description": "Resetting counters to zero when window timestamp boundaries cross.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s3_d2",
      "label": "Window Boundary Burst Vulnerability",
      "description": "Permitting 2x rate limits during window boundary transitions (59s to 01s).",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s4",
      "label": "Sliding Window Log Algorithm",
      "description": "Logging request timestamps in sorted sets to evaluate precise rate limits.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s4_d1",
      "label": "Redis Sorted Set (ZREMRANGEBYSCORE)",
      "description": "Pruning timestamps older than current_time - window_size.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s4_d2",
      "label": "High Memory Footprint Overhead",
      "description": "Storing individual request timestamps, leading to high memory usage under heavy load.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s5",
      "label": "Sliding Window Counter Algorithm",
      "description": "Combining current and previous fixed window counts using weighted approximations.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s5_d1",
      "label": "Weighted Rate Estimation Formula",
      "description": "Rate = count_current + count_prev * (1 - time_into_current_window).",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t1_s5_d2",
      "label": "Memory Efficient Smooth Throttling",
      "description": "Providing smooth rate limiting using low memory footprints.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2",
      "label": "API Gateway & Layer 4 / Layer 7 Load Balancing",
      "description": "Routing, authenticating, and balancing incoming network traffic across backend services.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s1",
      "label": "Layer 4 (TCP/UDP) Load Balancing",
      "description": "Routing traffic at the transport layer based on IP addresses and TCP ports.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s1_d1",
      "label": "High Throughput Packet Forwarding",
      "description": "Forwarding TCP packets without inspecting HTTP payload contents.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s1_d2",
      "label": "NAT vs Direct Server Return (DSR)",
      "description": "Using DSR to allow backend servers to respond directly to clients, bypassing load balancer egress.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s2",
      "label": "Layer 7 (HTTP/gRPC) Load Balancing",
      "description": "Routing traffic at the application layer based on HTTP headers, URLs, and cookies.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s2_d1",
      "label": "Header & Path-Based Routing Rules",
      "description": "Routing requests to specific microservice clusters based on URL paths (/api/v1/users).",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s2_d2",
      "label": "TLS Termination Offloading",
      "description": "Decrypting TLS connections at the gateway to offload CPU work from backend microservices.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s3",
      "label": "Envoy Proxy Architecture",
      "description": "High-performance C++ edge and service proxy designed for cloud-native networks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s3_d1",
      "label": "Dynamic Discovery Services (xDS API)",
      "description": "Updating routes, endpoints, and clusters dynamically via gRPC without restarting Envoy.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s3_d2",
      "label": "Non-blocking Event-Driven Core",
      "description": "Handling thousands of concurrent connections using an event-driven worker thread model.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s4",
      "label": "Nginx Event Loop Architecture",
      "description": "Asynchronous event-driven web server and reverse proxy.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s4_d1",
      "label": "Master-Worker Process Model",
      "description": "Master process managing worker processes that handle connections using epoll.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s4_d2",
      "label": "Upstream Keep-Alive Connection Pools",
      "description": "Reusing persistent TCP connections to backend servers to minimize handshake overhead.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s5",
      "label": "Load Balancing Algorithms (Least Conns, Maglev)",
      "description": "Algorithms for distributing requests across backend target instances.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s5_d1",
      "label": "Least Connections Algorithm",
      "description": "Routing requests to backend instances with the fewest active TCP connections.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t2_s5_d2",
      "label": "Google Maglev Consistent Hashing",
      "description": "Distributing traffic using lookup tables to maintain connection affinity during backend changes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3",
      "label": "Resilience Patterns & Circuit Breakers",
      "description": "Software patterns for isolating failures and maintaining system availability during outages.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s1",
      "label": "Circuit Breaker State Machine (Hystrix Pattern)",
      "description": "Preventing cascading failures by failing fast when downstream services are unhealthy.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s1_d1",
      "label": "Closed State (Normal Operation)",
      "description": "Routing requests normally while monitoring failure rates.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s1_d2",
      "label": "Open State (Fast Failure Fallback)",
      "description": "Failing requests immediately without invoking downstream services when failure thresholds are crossed.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s1_d3",
      "label": "Half-Open State (Probe Trial)",
      "description": "Routing limited trial requests to check if downstream health has recovered.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s2",
      "label": "Bulkhead Isolation Pattern",
      "description": "Isolating resource pools to prevent failures in one component from consuming all system resources.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s2_d1",
      "label": "Thread Pool vs Semaphore Isolation",
      "description": "Restricting concurrent calls per service using dedicated thread pools or semaphores.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s2_d2",
      "label": "Cascading Resource Exhaustion Prevention",
      "description": "Ensuring slow downstream dependencies cannot exhaust common application threads.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s3",
      "label": "Client-Side Retries with Jitter",
      "description": "Retrying failed requests using backoffs and random jitter to avoid thundering herds.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s3_d1",
      "label": "Full Jitter Backoff Formula",
      "description": "Sleep time = random(0, min(cap, base * 2^attempt)).",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s3_d2",
      "label": "Retry Budget Limits",
      "description": "Limiting retries to a percentage of overall traffic (e.g. 10%) to avoid overwhelming struggling services.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s4",
      "label": "Graceful Degradation & Fallbacks",
      "description": "Serving degraded or cached responses when core services are unavailable.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s4_d1",
      "label": "Static Fallback Response Payload",
      "description": "Returning static default content (e.g. static recommendations) when recommendation engines fail.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s4_d2",
      "label": "Feature Flag Degradation Toggles",
      "description": "Disabling non-critical UI features automatically during high-load events.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s5",
      "label": "Deadlines & Request Budgets",
      "description": "Propagating timeouts across microservice call chains to drop unneeded work.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s5_d1",
      "label": "gRPC Deadline Propagation",
      "description": "Transmitting remaining time budgets in gRPC headers across downstream calls.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t3_s5_d2",
      "label": "Cancellation on Deadline Expiry",
      "description": "Aborting downstream processing immediately when client deadlines expire.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4",
      "label": "Rate Limiting & Traffic Management Topic 4",
      "description": "Detailed first-principles mechanics for Rate Limiting & Traffic Management topic 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s1",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s1_d1",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s1_d2",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s2",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s2_d1",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s2_d2",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s3",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s3_d1",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s3_d2",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s4",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s4_d1",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s4_d2",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s5",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s5_d1",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t4_s5_d2",
      "label": "Rate Limiting & Traffic Management Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5",
      "label": "Rate Limiting & Traffic Management Topic 5",
      "description": "Detailed first-principles mechanics for Rate Limiting & Traffic Management topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s1",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s1_d1",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s1_d2",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s2",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s2_d1",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s2_d2",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s3",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s3_d1",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s3_d2",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s4",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s4_d1",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s4_d2",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s5",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s5_d1",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t5_s5_d2",
      "label": "Rate Limiting & Traffic Management Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6",
      "label": "Rate Limiting & Traffic Management Topic 6",
      "description": "Detailed first-principles mechanics for Rate Limiting & Traffic Management topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s1",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s1_d1",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s1_d2",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s2",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s2_d1",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s2_d2",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s3",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s3_d1",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s3_d2",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s4",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s4_d1",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s4_d2",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s5",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Rate Limiting & Traffic Management Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s5_d1",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p7_t6_s5_d2",
      "label": "Rate Limiting & Traffic Management Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Rate Limiting & Traffic Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8",
      "label": "Observability, Tracing & Resilience",
      "description": "Frameworks for collecting telemetry, monitoring performance metrics, and testing system fault tolerance.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1",
      "label": "Distributed Tracing & OpenTelemetry",
      "description": "Tracking request flows across microservice boundaries using context propagation.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s1",
      "label": "W3C Trace Context Specification",
      "description": "Standardizing HTTP headers for distributed trace context propagation.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s1_d1",
      "label": "traceparent Header Format",
      "description": "Encoding version-traceid-parentid-traceflags (e.g. 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01).",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s1_d2",
      "label": "tracestate Vendor Extensions",
      "description": "Passing vendor-specific routing and filtering metadata alongside traceparent headers.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s2",
      "label": "Span DAG & Context Propagation",
      "description": "Representing execution steps as directed acyclic graphs of timed spans.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s2_d1",
      "label": "Span Hierarchy (Root vs Child Spans)",
      "description": "Linking child operations to parent spans using parent_span_id references.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s2_d2",
      "label": "In-Memory Context Carrier Injection",
      "description": "Injecting trace context into HTTP headers or gRPC metadata during outbound calls.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s3",
      "label": "Head-Based vs Tail-Based Sampling",
      "description": "Strategies for selecting which traces to collect and store.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s3_d1",
      "label": "Head-Based Sampling (Random %)",
      "description": "Making sampling decisions at trace creation time (e.g. sample 1% of requests).",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s3_d2",
      "label": "Tail-Based Sampling (Error/Latency Focus)",
      "description": "Buffering complete traces in memory and saving only those containing errors or high latencies.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s4",
      "label": "OpenTelemetry Collector Architecture",
      "description": "Proxy service for receiving, processing, and exporting telemetry data.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s4_d1",
      "label": "Receivers -> Processors -> Exporters",
      "description": "Configuring pipelines to ingest OTLP data, apply batching/attributes, and export to backends.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s4_d2",
      "label": "OTLP (OpenTelemetry Protocol)",
      "description": "Protobuf-based transport protocol for traces, metrics, and logs over gRPC/HTTP.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s5",
      "label": "Jaeger / Zipkin Trace Visualization",
      "description": "Distributed tracing UI backends for analyzing request timelines and bottlenecks.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s5_d1",
      "label": "Gantt Chart Timeline Rendering",
      "description": "Rendering microservice call sequences on visual Gantt charts to pinpoint latency spikes.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t1_s5_d2",
      "label": "Critical Path Analysis",
      "description": "Highlighting execution paths that directly determine overall request latency.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2",
      "label": "Metrics Aggregation & Prometheus TSDB",
      "description": "Collecting, indexing, and querying numeric time-series metric data.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s1",
      "label": "Prometheus Pull Model & Scraping",
      "description": "Scraping metrics endpoints over HTTP at regular interval frequencies.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s1_d1",
      "label": "Scrape Target Discovery (Service Discovery)",
      "description": "Discovering metrics endpoints dynamically using Kubernetes API or Consul integration.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s1_d2",
      "label": "/metrics Text Format Parsing",
      "description": "Parsing Prometheus exposition text formats containing metric names, labels, and values.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s2",
      "label": "Metric Types (Counter, Gauge, Histogram, Summary)",
      "description": "Core data types used for metric instrumentation.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s2_d1",
      "label": "Monotonic Counters",
      "description": "Tracking cumulative totals that only increase (e.g. http_requests_total).",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s2_d2",
      "label": "Gauges for Arbitrary Values",
      "description": "Tracking values that go up and down (e.g. memory_usage_bytes, active_threads).",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s2_d3",
      "label": "Histograms for Percentile Calculations",
      "description": "Bucketing observations to calculate quantiles (e.g. p95, p99 latencies) via PromQL.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s3",
      "label": "Prometheus TSDB Chunk Compression",
      "description": "Storing time-series data efficiently using Gorilla XOR compression.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s3_d1",
      "label": "Double-Delta Timestamp Compression",
      "description": "Encoding time intervals using double-delta compression to save memory space.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s3_d2",
      "label": "XOR Floating Point Value Compression",
      "description": "Compressing metric floating-point values by XORing sequential sample bits.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s4",
      "label": "PromQL Query Engine Execution",
      "description": "Functional query language for aggregating and alerting on time-series data.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s4_d1",
      "label": "rate() vs irate() Functions",
      "description": "Calculating average per-second rates over time ranges vs instant rates from last 2 samples.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s4_d2",
      "label": "histogram_quantile() Calculation",
      "description": "Estimating p99 latency percentiles across aggregated histogram buckets.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s5",
      "label": "Thanos / Cortex Long-Term Storage",
      "description": "Scaling Prometheus horizontally for multi-cluster long-term metric retention.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s5_d1",
      "label": "Sidecar S3 Block Uploads",
      "description": "Shipping 2-hour TSDB blocks to cloud object storage for cost-effective retention.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t2_s5_d2",
      "label": "Global Query Engine Aggregation",
      "description": "Deduplicating and querying metrics across multiple Prometheus instances using unified APIs.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3",
      "label": "Chaos Engineering & Fault Injection",
      "description": "Testing system resilience by intentionally introducing controlled infrastructure failures.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s1",
      "label": "Principles of Chaos Engineering",
      "description": "Methodology for experimenting on systems to build confidence in production resilience.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s1_d1",
      "label": "Steady State Hypothesis Definition",
      "description": "Defining normal operational baselines (e.g. 99.9% success rate) before injecting faults.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s1_d2",
      "label": "Blast Radius Minimization",
      "description": "Containing experiments to small user cohorts or staging environments before scaling up.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s2",
      "label": "Chaos Mesh / Chaos Studio Tooling",
      "description": "Cloud-native fault injection platforms for Kubernetes and cloud infrastructure.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s2_d1",
      "label": "Pod Chaos (Kill / Stop / Fail)",
      "description": "Simulating node crashes by terminating randomly selected Kubernetes pods.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s2_d2",
      "label": "Network Chaos (Latency / Loss / Corruption)",
      "description": "Injecting packet delays, packet loss, or network partitions using tc (traffic control).",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s3",
      "label": "Chaos Monkey & Simian Army",
      "description": "Netflix automated tools for randomly terminating production instances.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s3_d1",
      "label": "Random Instance Termination",
      "description": "Terminating AWS EC2 instances during business hours to enforce stateless auto-scaling.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s3_d2",
      "label": "Latency Monkey Traffic Slowdowns",
      "description": "Injecting artificial delays in service calls to verify timeout and fallback handling.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s4",
      "label": "GameDay Operational Exercises",
      "description": "Simulated outage events to train engineering teams and validate incident response.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s4_d1",
      "label": "Surprise Outage Drills",
      "description": "Executing unannounced fault scenarios to test on-call team detection and response times.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s4_d2",
      "label": "Post-GameDay Remediation Backlog",
      "description": "Creating engineering tasks to fix gaps discovered during chaos testing.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s5",
      "label": "Automated Rollback & Emergency Stops",
      "description": "Safety mechanisms to abort chaos experiments automatically if health metrics degrade.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s5_d1",
      "label": "SLO Breach Auto-Aborts",
      "description": "Canceling fault injection immediately if system error rates cross safety thresholds.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t3_s5_d2",
      "label": "Manual Emergency Stop Switches",
      "description": "Providing single-click UI controls to halt active chaos experiments instantly.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4",
      "label": "Observability, Tracing & Resilience Topic 4",
      "description": "Detailed first-principles mechanics for Observability, Tracing & Resilience topic 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s1",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s1_d1",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s1_d2",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s2",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s2_d1",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s2_d2",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s3",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s3_d1",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s3_d2",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s4",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s4_d1",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s4_d2",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s5",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s5_d1",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t4_s5_d2",
      "label": "Observability, Tracing & Resilience Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5",
      "label": "Observability, Tracing & Resilience Topic 5",
      "description": "Detailed first-principles mechanics for Observability, Tracing & Resilience topic 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s1",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s1_d1",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s1_d2",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s2",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s2_d1",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s2_d2",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s3",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s3_d1",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s3_d2",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s4",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s4_d1",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s4_d2",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s5",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s5_d1",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t5_s5_d2",
      "label": "Observability, Tracing & Resilience Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6",
      "label": "Observability, Tracing & Resilience Topic 6",
      "description": "Detailed first-principles mechanics for Observability, Tracing & Resilience topic 6.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s1",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s1_d1",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s1_d2",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s2",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s2_d1",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s2_d2",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s3",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s3_d1",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s3_d2",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s4",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s4_d1",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s4_d2",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s5",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Observability, Tracing & Resilience Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s5_d1",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "sd_root_p8_t6_s5_d2",
      "label": "Observability, Tracing & Resilience Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Observability, Tracing & Resilience Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "sd_root",
      "target": "sd_root_p1"
    },
    {
      "source": "sd_root_p1",
      "target": "sd_root_p1_t1"
    },
    {
      "source": "sd_root_p1_t1",
      "target": "sd_root_p1_t1_s1"
    },
    {
      "source": "sd_root_p1_t1_s1",
      "target": "sd_root_p1_t1_s1_d1"
    },
    {
      "source": "sd_root_p1_t1_s1",
      "target": "sd_root_p1_t1_s1_d2"
    },
    {
      "source": "sd_root_p1_t1",
      "target": "sd_root_p1_t1_s2"
    },
    {
      "source": "sd_root_p1_t1_s2",
      "target": "sd_root_p1_t1_s2_d1"
    },
    {
      "source": "sd_root_p1_t1_s2",
      "target": "sd_root_p1_t1_s2_d2"
    },
    {
      "source": "sd_root_p1_t1",
      "target": "sd_root_p1_t1_s3"
    },
    {
      "source": "sd_root_p1_t1_s3",
      "target": "sd_root_p1_t1_s3_d1"
    },
    {
      "source": "sd_root_p1_t1_s3",
      "target": "sd_root_p1_t1_s3_d2"
    },
    {
      "source": "sd_root_p1_t1",
      "target": "sd_root_p1_t1_s4"
    },
    {
      "source": "sd_root_p1_t1_s4",
      "target": "sd_root_p1_t1_s4_d1"
    },
    {
      "source": "sd_root_p1_t1_s4",
      "target": "sd_root_p1_t1_s4_d2"
    },
    {
      "source": "sd_root_p1_t1",
      "target": "sd_root_p1_t1_s5"
    },
    {
      "source": "sd_root_p1_t1_s5",
      "target": "sd_root_p1_t1_s5_d1"
    },
    {
      "source": "sd_root_p1_t1_s5",
      "target": "sd_root_p1_t1_s5_d2"
    },
    {
      "source": "sd_root_p1",
      "target": "sd_root_p1_t2"
    },
    {
      "source": "sd_root_p1_t2",
      "target": "sd_root_p1_t2_s1"
    },
    {
      "source": "sd_root_p1_t2_s1",
      "target": "sd_root_p1_t2_s1_d1"
    },
    {
      "source": "sd_root_p1_t2_s1",
      "target": "sd_root_p1_t2_s1_d2"
    },
    {
      "source": "sd_root_p1_t2",
      "target": "sd_root_p1_t2_s2"
    },
    {
      "source": "sd_root_p1_t2_s2",
      "target": "sd_root_p1_t2_s2_d1"
    },
    {
      "source": "sd_root_p1_t2_s2",
      "target": "sd_root_p1_t2_s2_d2"
    },
    {
      "source": "sd_root_p1_t2",
      "target": "sd_root_p1_t2_s3"
    },
    {
      "source": "sd_root_p1_t2_s3",
      "target": "sd_root_p1_t2_s3_d1"
    },
    {
      "source": "sd_root_p1_t2_s3",
      "target": "sd_root_p1_t2_s3_d2"
    },
    {
      "source": "sd_root_p1_t2",
      "target": "sd_root_p1_t2_s4"
    },
    {
      "source": "sd_root_p1_t2_s4",
      "target": "sd_root_p1_t2_s4_d1"
    },
    {
      "source": "sd_root_p1_t2_s4",
      "target": "sd_root_p1_t2_s4_d2"
    },
    {
      "source": "sd_root_p1_t2",
      "target": "sd_root_p1_t2_s5"
    },
    {
      "source": "sd_root_p1_t2_s5",
      "target": "sd_root_p1_t2_s5_d1"
    },
    {
      "source": "sd_root_p1_t2_s5",
      "target": "sd_root_p1_t2_s5_d2"
    },
    {
      "source": "sd_root_p1",
      "target": "sd_root_p1_t3"
    },
    {
      "source": "sd_root_p1_t3",
      "target": "sd_root_p1_t3_s1"
    },
    {
      "source": "sd_root_p1_t3_s1",
      "target": "sd_root_p1_t3_s1_d1"
    },
    {
      "source": "sd_root_p1_t3_s1",
      "target": "sd_root_p1_t3_s1_d2"
    },
    {
      "source": "sd_root_p1_t3",
      "target": "sd_root_p1_t3_s2"
    },
    {
      "source": "sd_root_p1_t3_s2",
      "target": "sd_root_p1_t3_s2_d1"
    },
    {
      "source": "sd_root_p1_t3_s2",
      "target": "sd_root_p1_t3_s2_d2"
    },
    {
      "source": "sd_root_p1_t3",
      "target": "sd_root_p1_t3_s3"
    },
    {
      "source": "sd_root_p1_t3_s3",
      "target": "sd_root_p1_t3_s3_d1"
    },
    {
      "source": "sd_root_p1_t3_s3",
      "target": "sd_root_p1_t3_s3_d2"
    },
    {
      "source": "sd_root_p1_t3",
      "target": "sd_root_p1_t3_s4"
    },
    {
      "source": "sd_root_p1_t3_s4",
      "target": "sd_root_p1_t3_s4_d1"
    },
    {
      "source": "sd_root_p1_t3_s4",
      "target": "sd_root_p1_t3_s4_d2"
    },
    {
      "source": "sd_root_p1_t3",
      "target": "sd_root_p1_t3_s5"
    },
    {
      "source": "sd_root_p1_t3_s5",
      "target": "sd_root_p1_t3_s5_d1"
    },
    {
      "source": "sd_root_p1_t3_s5",
      "target": "sd_root_p1_t3_s5_d2"
    },
    {
      "source": "sd_root_p1",
      "target": "sd_root_p1_t4"
    },
    {
      "source": "sd_root_p1_t4",
      "target": "sd_root_p1_t4_s1"
    },
    {
      "source": "sd_root_p1_t4_s1",
      "target": "sd_root_p1_t4_s1_d1"
    },
    {
      "source": "sd_root_p1_t4_s1",
      "target": "sd_root_p1_t4_s1_d2"
    },
    {
      "source": "sd_root_p1_t4",
      "target": "sd_root_p1_t4_s2"
    },
    {
      "source": "sd_root_p1_t4_s2",
      "target": "sd_root_p1_t4_s2_d1"
    },
    {
      "source": "sd_root_p1_t4_s2",
      "target": "sd_root_p1_t4_s2_d2"
    },
    {
      "source": "sd_root_p1_t4",
      "target": "sd_root_p1_t4_s3"
    },
    {
      "source": "sd_root_p1_t4_s3",
      "target": "sd_root_p1_t4_s3_d1"
    },
    {
      "source": "sd_root_p1_t4_s3",
      "target": "sd_root_p1_t4_s3_d2"
    },
    {
      "source": "sd_root_p1_t4",
      "target": "sd_root_p1_t4_s4"
    },
    {
      "source": "sd_root_p1_t4_s4",
      "target": "sd_root_p1_t4_s4_d1"
    },
    {
      "source": "sd_root_p1_t4_s4",
      "target": "sd_root_p1_t4_s4_d2"
    },
    {
      "source": "sd_root_p1_t4",
      "target": "sd_root_p1_t4_s5"
    },
    {
      "source": "sd_root_p1_t4_s5",
      "target": "sd_root_p1_t4_s5_d1"
    },
    {
      "source": "sd_root_p1_t4_s5",
      "target": "sd_root_p1_t4_s5_d2"
    },
    {
      "source": "sd_root_p1",
      "target": "sd_root_p1_t5"
    },
    {
      "source": "sd_root_p1_t5",
      "target": "sd_root_p1_t5_s1"
    },
    {
      "source": "sd_root_p1_t5_s1",
      "target": "sd_root_p1_t5_s1_d1"
    },
    {
      "source": "sd_root_p1_t5_s1",
      "target": "sd_root_p1_t5_s1_d2"
    },
    {
      "source": "sd_root_p1_t5",
      "target": "sd_root_p1_t5_s2"
    },
    {
      "source": "sd_root_p1_t5_s2",
      "target": "sd_root_p1_t5_s2_d1"
    },
    {
      "source": "sd_root_p1_t5_s2",
      "target": "sd_root_p1_t5_s2_d2"
    },
    {
      "source": "sd_root_p1_t5",
      "target": "sd_root_p1_t5_s3"
    },
    {
      "source": "sd_root_p1_t5_s3",
      "target": "sd_root_p1_t5_s3_d1"
    },
    {
      "source": "sd_root_p1_t5_s3",
      "target": "sd_root_p1_t5_s3_d2"
    },
    {
      "source": "sd_root_p1_t5",
      "target": "sd_root_p1_t5_s4"
    },
    {
      "source": "sd_root_p1_t5_s4",
      "target": "sd_root_p1_t5_s4_d1"
    },
    {
      "source": "sd_root_p1_t5_s4",
      "target": "sd_root_p1_t5_s4_d2"
    },
    {
      "source": "sd_root_p1_t5",
      "target": "sd_root_p1_t5_s5"
    },
    {
      "source": "sd_root_p1_t5_s5",
      "target": "sd_root_p1_t5_s5_d1"
    },
    {
      "source": "sd_root_p1_t5_s5",
      "target": "sd_root_p1_t5_s5_d2"
    },
    {
      "source": "sd_root_p1",
      "target": "sd_root_p1_t6"
    },
    {
      "source": "sd_root_p1_t6",
      "target": "sd_root_p1_t6_s1"
    },
    {
      "source": "sd_root_p1_t6_s1",
      "target": "sd_root_p1_t6_s1_d1"
    },
    {
      "source": "sd_root_p1_t6_s1",
      "target": "sd_root_p1_t6_s1_d2"
    },
    {
      "source": "sd_root_p1_t6",
      "target": "sd_root_p1_t6_s2"
    },
    {
      "source": "sd_root_p1_t6_s2",
      "target": "sd_root_p1_t6_s2_d1"
    },
    {
      "source": "sd_root_p1_t6_s2",
      "target": "sd_root_p1_t6_s2_d2"
    },
    {
      "source": "sd_root_p1_t6",
      "target": "sd_root_p1_t6_s3"
    },
    {
      "source": "sd_root_p1_t6_s3",
      "target": "sd_root_p1_t6_s3_d1"
    },
    {
      "source": "sd_root_p1_t6_s3",
      "target": "sd_root_p1_t6_s3_d2"
    },
    {
      "source": "sd_root_p1_t6",
      "target": "sd_root_p1_t6_s4"
    },
    {
      "source": "sd_root_p1_t6_s4",
      "target": "sd_root_p1_t6_s4_d1"
    },
    {
      "source": "sd_root_p1_t6_s4",
      "target": "sd_root_p1_t6_s4_d2"
    },
    {
      "source": "sd_root_p1_t6",
      "target": "sd_root_p1_t6_s5"
    },
    {
      "source": "sd_root_p1_t6_s5",
      "target": "sd_root_p1_t6_s5_d1"
    },
    {
      "source": "sd_root_p1_t6_s5",
      "target": "sd_root_p1_t6_s5_d2"
    },
    {
      "source": "sd_root",
      "target": "sd_root_p2"
    },
    {
      "source": "sd_root_p2",
      "target": "sd_root_p2_t1"
    },
    {
      "source": "sd_root_p2_t1",
      "target": "sd_root_p2_t1_s1"
    },
    {
      "source": "sd_root_p2_t1_s1",
      "target": "sd_root_p2_t1_s1_d1"
    },
    {
      "source": "sd_root_p2_t1_s1",
      "target": "sd_root_p2_t1_s1_d2"
    },
    {
      "source": "sd_root_p2_t1",
      "target": "sd_root_p2_t1_s2"
    },
    {
      "source": "sd_root_p2_t1_s2",
      "target": "sd_root_p2_t1_s2_d1"
    },
    {
      "source": "sd_root_p2_t1_s2",
      "target": "sd_root_p2_t1_s2_d2"
    },
    {
      "source": "sd_root_p2_t1",
      "target": "sd_root_p2_t1_s3"
    },
    {
      "source": "sd_root_p2_t1_s3",
      "target": "sd_root_p2_t1_s3_d1"
    },
    {
      "source": "sd_root_p2_t1_s3",
      "target": "sd_root_p2_t1_s3_d2"
    },
    {
      "source": "sd_root_p2_t1",
      "target": "sd_root_p2_t1_s4"
    },
    {
      "source": "sd_root_p2_t1_s4",
      "target": "sd_root_p2_t1_s4_d1"
    },
    {
      "source": "sd_root_p2_t1_s4",
      "target": "sd_root_p2_t1_s4_d2"
    },
    {
      "source": "sd_root_p2_t1",
      "target": "sd_root_p2_t1_s5"
    },
    {
      "source": "sd_root_p2_t1_s5",
      "target": "sd_root_p2_t1_s5_d1"
    },
    {
      "source": "sd_root_p2_t1_s5",
      "target": "sd_root_p2_t1_s5_d2"
    },
    {
      "source": "sd_root_p2",
      "target": "sd_root_p2_t2"
    },
    {
      "source": "sd_root_p2_t2",
      "target": "sd_root_p2_t2_s1"
    },
    {
      "source": "sd_root_p2_t2_s1",
      "target": "sd_root_p2_t2_s1_d1"
    },
    {
      "source": "sd_root_p2_t2_s1",
      "target": "sd_root_p2_t2_s1_d2"
    },
    {
      "source": "sd_root_p2_t2",
      "target": "sd_root_p2_t2_s2"
    },
    {
      "source": "sd_root_p2_t2_s2",
      "target": "sd_root_p2_t2_s2_d1"
    },
    {
      "source": "sd_root_p2_t2_s2",
      "target": "sd_root_p2_t2_s2_d2"
    },
    {
      "source": "sd_root_p2_t2",
      "target": "sd_root_p2_t2_s3"
    },
    {
      "source": "sd_root_p2_t2_s3",
      "target": "sd_root_p2_t2_s3_d1"
    },
    {
      "source": "sd_root_p2_t2_s3",
      "target": "sd_root_p2_t2_s3_d2"
    },
    {
      "source": "sd_root_p2_t2",
      "target": "sd_root_p2_t2_s4"
    },
    {
      "source": "sd_root_p2_t2_s4",
      "target": "sd_root_p2_t2_s4_d1"
    },
    {
      "source": "sd_root_p2_t2_s4",
      "target": "sd_root_p2_t2_s4_d2"
    },
    {
      "source": "sd_root_p2_t2",
      "target": "sd_root_p2_t2_s5"
    },
    {
      "source": "sd_root_p2_t2_s5",
      "target": "sd_root_p2_t2_s5_d1"
    },
    {
      "source": "sd_root_p2_t2_s5",
      "target": "sd_root_p2_t2_s5_d2"
    },
    {
      "source": "sd_root_p2",
      "target": "sd_root_p2_t3"
    },
    {
      "source": "sd_root_p2_t3",
      "target": "sd_root_p2_t3_s1"
    },
    {
      "source": "sd_root_p2_t3_s1",
      "target": "sd_root_p2_t3_s1_d1"
    },
    {
      "source": "sd_root_p2_t3_s1",
      "target": "sd_root_p2_t3_s1_d2"
    },
    {
      "source": "sd_root_p2_t3",
      "target": "sd_root_p2_t3_s2"
    },
    {
      "source": "sd_root_p2_t3_s2",
      "target": "sd_root_p2_t3_s2_d1"
    },
    {
      "source": "sd_root_p2_t3_s2",
      "target": "sd_root_p2_t3_s2_d2"
    },
    {
      "source": "sd_root_p2_t3",
      "target": "sd_root_p2_t3_s3"
    },
    {
      "source": "sd_root_p2_t3_s3",
      "target": "sd_root_p2_t3_s3_d1"
    },
    {
      "source": "sd_root_p2_t3_s3",
      "target": "sd_root_p2_t3_s3_d2"
    },
    {
      "source": "sd_root_p2_t3",
      "target": "sd_root_p2_t3_s4"
    },
    {
      "source": "sd_root_p2_t3_s4",
      "target": "sd_root_p2_t3_s4_d1"
    },
    {
      "source": "sd_root_p2_t3_s4",
      "target": "sd_root_p2_t3_s4_d2"
    },
    {
      "source": "sd_root_p2_t3",
      "target": "sd_root_p2_t3_s5"
    },
    {
      "source": "sd_root_p2_t3_s5",
      "target": "sd_root_p2_t3_s5_d1"
    },
    {
      "source": "sd_root_p2_t3_s5",
      "target": "sd_root_p2_t3_s5_d2"
    },
    {
      "source": "sd_root_p2",
      "target": "sd_root_p2_t4"
    },
    {
      "source": "sd_root_p2_t4",
      "target": "sd_root_p2_t4_s1"
    },
    {
      "source": "sd_root_p2_t4_s1",
      "target": "sd_root_p2_t4_s1_d1"
    },
    {
      "source": "sd_root_p2_t4_s1",
      "target": "sd_root_p2_t4_s1_d2"
    },
    {
      "source": "sd_root_p2_t4",
      "target": "sd_root_p2_t4_s2"
    },
    {
      "source": "sd_root_p2_t4_s2",
      "target": "sd_root_p2_t4_s2_d1"
    },
    {
      "source": "sd_root_p2_t4_s2",
      "target": "sd_root_p2_t4_s2_d2"
    },
    {
      "source": "sd_root_p2_t4",
      "target": "sd_root_p2_t4_s3"
    },
    {
      "source": "sd_root_p2_t4_s3",
      "target": "sd_root_p2_t4_s3_d1"
    },
    {
      "source": "sd_root_p2_t4_s3",
      "target": "sd_root_p2_t4_s3_d2"
    },
    {
      "source": "sd_root_p2_t4",
      "target": "sd_root_p2_t4_s4"
    },
    {
      "source": "sd_root_p2_t4_s4",
      "target": "sd_root_p2_t4_s4_d1"
    },
    {
      "source": "sd_root_p2_t4_s4",
      "target": "sd_root_p2_t4_s4_d2"
    },
    {
      "source": "sd_root_p2_t4",
      "target": "sd_root_p2_t4_s5"
    },
    {
      "source": "sd_root_p2_t4_s5",
      "target": "sd_root_p2_t4_s5_d1"
    },
    {
      "source": "sd_root_p2_t4_s5",
      "target": "sd_root_p2_t4_s5_d2"
    },
    {
      "source": "sd_root_p2",
      "target": "sd_root_p2_t5"
    },
    {
      "source": "sd_root_p2_t5",
      "target": "sd_root_p2_t5_s1"
    },
    {
      "source": "sd_root_p2_t5_s1",
      "target": "sd_root_p2_t5_s1_d1"
    },
    {
      "source": "sd_root_p2_t5_s1",
      "target": "sd_root_p2_t5_s1_d2"
    },
    {
      "source": "sd_root_p2_t5",
      "target": "sd_root_p2_t5_s2"
    },
    {
      "source": "sd_root_p2_t5_s2",
      "target": "sd_root_p2_t5_s2_d1"
    },
    {
      "source": "sd_root_p2_t5_s2",
      "target": "sd_root_p2_t5_s2_d2"
    },
    {
      "source": "sd_root_p2_t5",
      "target": "sd_root_p2_t5_s3"
    },
    {
      "source": "sd_root_p2_t5_s3",
      "target": "sd_root_p2_t5_s3_d1"
    },
    {
      "source": "sd_root_p2_t5_s3",
      "target": "sd_root_p2_t5_s3_d2"
    },
    {
      "source": "sd_root_p2_t5",
      "target": "sd_root_p2_t5_s4"
    },
    {
      "source": "sd_root_p2_t5_s4",
      "target": "sd_root_p2_t5_s4_d1"
    },
    {
      "source": "sd_root_p2_t5_s4",
      "target": "sd_root_p2_t5_s4_d2"
    },
    {
      "source": "sd_root_p2_t5",
      "target": "sd_root_p2_t5_s5"
    },
    {
      "source": "sd_root_p2_t5_s5",
      "target": "sd_root_p2_t5_s5_d1"
    },
    {
      "source": "sd_root_p2_t5_s5",
      "target": "sd_root_p2_t5_s5_d2"
    },
    {
      "source": "sd_root_p2",
      "target": "sd_root_p2_t6"
    },
    {
      "source": "sd_root_p2_t6",
      "target": "sd_root_p2_t6_s1"
    },
    {
      "source": "sd_root_p2_t6_s1",
      "target": "sd_root_p2_t6_s1_d1"
    },
    {
      "source": "sd_root_p2_t6_s1",
      "target": "sd_root_p2_t6_s1_d2"
    },
    {
      "source": "sd_root_p2_t6",
      "target": "sd_root_p2_t6_s2"
    },
    {
      "source": "sd_root_p2_t6_s2",
      "target": "sd_root_p2_t6_s2_d1"
    },
    {
      "source": "sd_root_p2_t6_s2",
      "target": "sd_root_p2_t6_s2_d2"
    },
    {
      "source": "sd_root_p2_t6",
      "target": "sd_root_p2_t6_s3"
    },
    {
      "source": "sd_root_p2_t6_s3",
      "target": "sd_root_p2_t6_s3_d1"
    },
    {
      "source": "sd_root_p2_t6_s3",
      "target": "sd_root_p2_t6_s3_d2"
    },
    {
      "source": "sd_root_p2_t6",
      "target": "sd_root_p2_t6_s4"
    },
    {
      "source": "sd_root_p2_t6_s4",
      "target": "sd_root_p2_t6_s4_d1"
    },
    {
      "source": "sd_root_p2_t6_s4",
      "target": "sd_root_p2_t6_s4_d2"
    },
    {
      "source": "sd_root_p2_t6",
      "target": "sd_root_p2_t6_s5"
    },
    {
      "source": "sd_root_p2_t6_s5",
      "target": "sd_root_p2_t6_s5_d1"
    },
    {
      "source": "sd_root_p2_t6_s5",
      "target": "sd_root_p2_t6_s5_d2"
    },
    {
      "source": "sd_root",
      "target": "sd_root_p3"
    },
    {
      "source": "sd_root_p3",
      "target": "sd_root_p3_t1"
    },
    {
      "source": "sd_root_p3_t1",
      "target": "sd_root_p3_t1_s1"
    },
    {
      "source": "sd_root_p3_t1_s1",
      "target": "sd_root_p3_t1_s1_d1"
    },
    {
      "source": "sd_root_p3_t1_s1",
      "target": "sd_root_p3_t1_s1_d2"
    },
    {
      "source": "sd_root_p3_t1",
      "target": "sd_root_p3_t1_s2"
    },
    {
      "source": "sd_root_p3_t1_s2",
      "target": "sd_root_p3_t1_s2_d1"
    },
    {
      "source": "sd_root_p3_t1_s2",
      "target": "sd_root_p3_t1_s2_d2"
    },
    {
      "source": "sd_root_p3_t1",
      "target": "sd_root_p3_t1_s3"
    },
    {
      "source": "sd_root_p3_t1_s3",
      "target": "sd_root_p3_t1_s3_d1"
    },
    {
      "source": "sd_root_p3_t1_s3",
      "target": "sd_root_p3_t1_s3_d2"
    },
    {
      "source": "sd_root_p3_t1",
      "target": "sd_root_p3_t1_s4"
    },
    {
      "source": "sd_root_p3_t1_s4",
      "target": "sd_root_p3_t1_s4_d1"
    },
    {
      "source": "sd_root_p3_t1_s4",
      "target": "sd_root_p3_t1_s4_d2"
    },
    {
      "source": "sd_root_p3_t1",
      "target": "sd_root_p3_t1_s5"
    },
    {
      "source": "sd_root_p3_t1_s5",
      "target": "sd_root_p3_t1_s5_d1"
    },
    {
      "source": "sd_root_p3_t1_s5",
      "target": "sd_root_p3_t1_s5_d2"
    },
    {
      "source": "sd_root_p3",
      "target": "sd_root_p3_t2"
    },
    {
      "source": "sd_root_p3_t2",
      "target": "sd_root_p3_t2_s1"
    },
    {
      "source": "sd_root_p3_t2_s1",
      "target": "sd_root_p3_t2_s1_d1"
    },
    {
      "source": "sd_root_p3_t2_s1",
      "target": "sd_root_p3_t2_s1_d2"
    },
    {
      "source": "sd_root_p3_t2",
      "target": "sd_root_p3_t2_s2"
    },
    {
      "source": "sd_root_p3_t2_s2",
      "target": "sd_root_p3_t2_s2_d1"
    },
    {
      "source": "sd_root_p3_t2_s2",
      "target": "sd_root_p3_t2_s2_d2"
    },
    {
      "source": "sd_root_p3_t2",
      "target": "sd_root_p3_t2_s3"
    },
    {
      "source": "sd_root_p3_t2_s3",
      "target": "sd_root_p3_t2_s3_d1"
    },
    {
      "source": "sd_root_p3_t2_s3",
      "target": "sd_root_p3_t2_s3_d2"
    },
    {
      "source": "sd_root_p3_t2",
      "target": "sd_root_p3_t2_s4"
    },
    {
      "source": "sd_root_p3_t2_s4",
      "target": "sd_root_p3_t2_s4_d1"
    },
    {
      "source": "sd_root_p3_t2_s4",
      "target": "sd_root_p3_t2_s4_d2"
    },
    {
      "source": "sd_root_p3_t2",
      "target": "sd_root_p3_t2_s5"
    },
    {
      "source": "sd_root_p3_t2_s5",
      "target": "sd_root_p3_t2_s5_d1"
    },
    {
      "source": "sd_root_p3_t2_s5",
      "target": "sd_root_p3_t2_s5_d2"
    },
    {
      "source": "sd_root_p3",
      "target": "sd_root_p3_t3"
    },
    {
      "source": "sd_root_p3_t3",
      "target": "sd_root_p3_t3_s1"
    },
    {
      "source": "sd_root_p3_t3_s1",
      "target": "sd_root_p3_t3_s1_d1"
    },
    {
      "source": "sd_root_p3_t3_s1",
      "target": "sd_root_p3_t3_s1_d2"
    },
    {
      "source": "sd_root_p3_t3",
      "target": "sd_root_p3_t3_s2"
    },
    {
      "source": "sd_root_p3_t3_s2",
      "target": "sd_root_p3_t3_s2_d1"
    },
    {
      "source": "sd_root_p3_t3_s2",
      "target": "sd_root_p3_t3_s2_d2"
    },
    {
      "source": "sd_root_p3_t3",
      "target": "sd_root_p3_t3_s3"
    },
    {
      "source": "sd_root_p3_t3_s3",
      "target": "sd_root_p3_t3_s3_d1"
    },
    {
      "source": "sd_root_p3_t3_s3",
      "target": "sd_root_p3_t3_s3_d2"
    },
    {
      "source": "sd_root_p3_t3",
      "target": "sd_root_p3_t3_s4"
    },
    {
      "source": "sd_root_p3_t3_s4",
      "target": "sd_root_p3_t3_s4_d1"
    },
    {
      "source": "sd_root_p3_t3_s4",
      "target": "sd_root_p3_t3_s4_d2"
    },
    {
      "source": "sd_root_p3_t3",
      "target": "sd_root_p3_t3_s5"
    },
    {
      "source": "sd_root_p3_t3_s5",
      "target": "sd_root_p3_t3_s5_d1"
    },
    {
      "source": "sd_root_p3_t3_s5",
      "target": "sd_root_p3_t3_s5_d2"
    },
    {
      "source": "sd_root_p3",
      "target": "sd_root_p3_t4"
    },
    {
      "source": "sd_root_p3_t4",
      "target": "sd_root_p3_t4_s1"
    },
    {
      "source": "sd_root_p3_t4_s1",
      "target": "sd_root_p3_t4_s1_d1"
    },
    {
      "source": "sd_root_p3_t4_s1",
      "target": "sd_root_p3_t4_s1_d2"
    },
    {
      "source": "sd_root_p3_t4",
      "target": "sd_root_p3_t4_s2"
    },
    {
      "source": "sd_root_p3_t4_s2",
      "target": "sd_root_p3_t4_s2_d1"
    },
    {
      "source": "sd_root_p3_t4_s2",
      "target": "sd_root_p3_t4_s2_d2"
    },
    {
      "source": "sd_root_p3_t4",
      "target": "sd_root_p3_t4_s3"
    },
    {
      "source": "sd_root_p3_t4_s3",
      "target": "sd_root_p3_t4_s3_d1"
    },
    {
      "source": "sd_root_p3_t4_s3",
      "target": "sd_root_p3_t4_s3_d2"
    },
    {
      "source": "sd_root_p3_t4",
      "target": "sd_root_p3_t4_s4"
    },
    {
      "source": "sd_root_p3_t4_s4",
      "target": "sd_root_p3_t4_s4_d1"
    },
    {
      "source": "sd_root_p3_t4_s4",
      "target": "sd_root_p3_t4_s4_d2"
    },
    {
      "source": "sd_root_p3_t4",
      "target": "sd_root_p3_t4_s5"
    },
    {
      "source": "sd_root_p3_t4_s5",
      "target": "sd_root_p3_t4_s5_d1"
    },
    {
      "source": "sd_root_p3_t4_s5",
      "target": "sd_root_p3_t4_s5_d2"
    },
    {
      "source": "sd_root_p3",
      "target": "sd_root_p3_t5"
    },
    {
      "source": "sd_root_p3_t5",
      "target": "sd_root_p3_t5_s1"
    },
    {
      "source": "sd_root_p3_t5_s1",
      "target": "sd_root_p3_t5_s1_d1"
    },
    {
      "source": "sd_root_p3_t5_s1",
      "target": "sd_root_p3_t5_s1_d2"
    },
    {
      "source": "sd_root_p3_t5",
      "target": "sd_root_p3_t5_s2"
    },
    {
      "source": "sd_root_p3_t5_s2",
      "target": "sd_root_p3_t5_s2_d1"
    },
    {
      "source": "sd_root_p3_t5_s2",
      "target": "sd_root_p3_t5_s2_d2"
    },
    {
      "source": "sd_root_p3_t5",
      "target": "sd_root_p3_t5_s3"
    },
    {
      "source": "sd_root_p3_t5_s3",
      "target": "sd_root_p3_t5_s3_d1"
    },
    {
      "source": "sd_root_p3_t5_s3",
      "target": "sd_root_p3_t5_s3_d2"
    },
    {
      "source": "sd_root_p3_t5",
      "target": "sd_root_p3_t5_s4"
    },
    {
      "source": "sd_root_p3_t5_s4",
      "target": "sd_root_p3_t5_s4_d1"
    },
    {
      "source": "sd_root_p3_t5_s4",
      "target": "sd_root_p3_t5_s4_d2"
    },
    {
      "source": "sd_root_p3_t5",
      "target": "sd_root_p3_t5_s5"
    },
    {
      "source": "sd_root_p3_t5_s5",
      "target": "sd_root_p3_t5_s5_d1"
    },
    {
      "source": "sd_root_p3_t5_s5",
      "target": "sd_root_p3_t5_s5_d2"
    },
    {
      "source": "sd_root_p3",
      "target": "sd_root_p3_t6"
    },
    {
      "source": "sd_root_p3_t6",
      "target": "sd_root_p3_t6_s1"
    },
    {
      "source": "sd_root_p3_t6_s1",
      "target": "sd_root_p3_t6_s1_d1"
    },
    {
      "source": "sd_root_p3_t6_s1",
      "target": "sd_root_p3_t6_s1_d2"
    },
    {
      "source": "sd_root_p3_t6",
      "target": "sd_root_p3_t6_s2"
    },
    {
      "source": "sd_root_p3_t6_s2",
      "target": "sd_root_p3_t6_s2_d1"
    },
    {
      "source": "sd_root_p3_t6_s2",
      "target": "sd_root_p3_t6_s2_d2"
    },
    {
      "source": "sd_root_p3_t6",
      "target": "sd_root_p3_t6_s3"
    },
    {
      "source": "sd_root_p3_t6_s3",
      "target": "sd_root_p3_t6_s3_d1"
    },
    {
      "source": "sd_root_p3_t6_s3",
      "target": "sd_root_p3_t6_s3_d2"
    },
    {
      "source": "sd_root_p3_t6",
      "target": "sd_root_p3_t6_s4"
    },
    {
      "source": "sd_root_p3_t6_s4",
      "target": "sd_root_p3_t6_s4_d1"
    },
    {
      "source": "sd_root_p3_t6_s4",
      "target": "sd_root_p3_t6_s4_d2"
    },
    {
      "source": "sd_root_p3_t6",
      "target": "sd_root_p3_t6_s5"
    },
    {
      "source": "sd_root_p3_t6_s5",
      "target": "sd_root_p3_t6_s5_d1"
    },
    {
      "source": "sd_root_p3_t6_s5",
      "target": "sd_root_p3_t6_s5_d2"
    },
    {
      "source": "sd_root",
      "target": "sd_root_p4"
    },
    {
      "source": "sd_root_p4",
      "target": "sd_root_p4_t1"
    },
    {
      "source": "sd_root_p4_t1",
      "target": "sd_root_p4_t1_s1"
    },
    {
      "source": "sd_root_p4_t1_s1",
      "target": "sd_root_p4_t1_s1_d1"
    },
    {
      "source": "sd_root_p4_t1_s1",
      "target": "sd_root_p4_t1_s1_d2"
    },
    {
      "source": "sd_root_p4_t1",
      "target": "sd_root_p4_t1_s2"
    },
    {
      "source": "sd_root_p4_t1_s2",
      "target": "sd_root_p4_t1_s2_d1"
    },
    {
      "source": "sd_root_p4_t1_s2",
      "target": "sd_root_p4_t1_s2_d2"
    },
    {
      "source": "sd_root_p4_t1",
      "target": "sd_root_p4_t1_s3"
    },
    {
      "source": "sd_root_p4_t1_s3",
      "target": "sd_root_p4_t1_s3_d1"
    },
    {
      "source": "sd_root_p4_t1_s3",
      "target": "sd_root_p4_t1_s3_d2"
    },
    {
      "source": "sd_root_p4_t1",
      "target": "sd_root_p4_t1_s4"
    },
    {
      "source": "sd_root_p4_t1_s4",
      "target": "sd_root_p4_t1_s4_d1"
    },
    {
      "source": "sd_root_p4_t1_s4",
      "target": "sd_root_p4_t1_s4_d2"
    },
    {
      "source": "sd_root_p4_t1",
      "target": "sd_root_p4_t1_s5"
    },
    {
      "source": "sd_root_p4_t1_s5",
      "target": "sd_root_p4_t1_s5_d1"
    },
    {
      "source": "sd_root_p4_t1_s5",
      "target": "sd_root_p4_t1_s5_d2"
    },
    {
      "source": "sd_root_p4",
      "target": "sd_root_p4_t2"
    },
    {
      "source": "sd_root_p4_t2",
      "target": "sd_root_p4_t2_s1"
    },
    {
      "source": "sd_root_p4_t2_s1",
      "target": "sd_root_p4_t2_s1_d1"
    },
    {
      "source": "sd_root_p4_t2_s1",
      "target": "sd_root_p4_t2_s1_d2"
    },
    {
      "source": "sd_root_p4_t2",
      "target": "sd_root_p4_t2_s2"
    },
    {
      "source": "sd_root_p4_t2_s2",
      "target": "sd_root_p4_t2_s2_d1"
    },
    {
      "source": "sd_root_p4_t2_s2",
      "target": "sd_root_p4_t2_s2_d2"
    },
    {
      "source": "sd_root_p4_t2",
      "target": "sd_root_p4_t2_s3"
    },
    {
      "source": "sd_root_p4_t2_s3",
      "target": "sd_root_p4_t2_s3_d1"
    },
    {
      "source": "sd_root_p4_t2_s3",
      "target": "sd_root_p4_t2_s3_d2"
    },
    {
      "source": "sd_root_p4_t2",
      "target": "sd_root_p4_t2_s4"
    },
    {
      "source": "sd_root_p4_t2_s4",
      "target": "sd_root_p4_t2_s4_d1"
    },
    {
      "source": "sd_root_p4_t2_s4",
      "target": "sd_root_p4_t2_s4_d2"
    },
    {
      "source": "sd_root_p4_t2",
      "target": "sd_root_p4_t2_s5"
    },
    {
      "source": "sd_root_p4_t2_s5",
      "target": "sd_root_p4_t2_s5_d1"
    },
    {
      "source": "sd_root_p4_t2_s5",
      "target": "sd_root_p4_t2_s5_d2"
    },
    {
      "source": "sd_root_p4",
      "target": "sd_root_p4_t3"
    },
    {
      "source": "sd_root_p4_t3",
      "target": "sd_root_p4_t3_s1"
    },
    {
      "source": "sd_root_p4_t3_s1",
      "target": "sd_root_p4_t3_s1_d1"
    },
    {
      "source": "sd_root_p4_t3_s1",
      "target": "sd_root_p4_t3_s1_d2"
    },
    {
      "source": "sd_root_p4_t3",
      "target": "sd_root_p4_t3_s2"
    },
    {
      "source": "sd_root_p4_t3_s2",
      "target": "sd_root_p4_t3_s2_d1"
    },
    {
      "source": "sd_root_p4_t3_s2",
      "target": "sd_root_p4_t3_s2_d2"
    },
    {
      "source": "sd_root_p4_t3",
      "target": "sd_root_p4_t3_s3"
    },
    {
      "source": "sd_root_p4_t3_s3",
      "target": "sd_root_p4_t3_s3_d1"
    },
    {
      "source": "sd_root_p4_t3_s3",
      "target": "sd_root_p4_t3_s3_d2"
    },
    {
      "source": "sd_root_p4_t3",
      "target": "sd_root_p4_t3_s4"
    },
    {
      "source": "sd_root_p4_t3_s4",
      "target": "sd_root_p4_t3_s4_d1"
    },
    {
      "source": "sd_root_p4_t3_s4",
      "target": "sd_root_p4_t3_s4_d2"
    },
    {
      "source": "sd_root_p4_t3",
      "target": "sd_root_p4_t3_s5"
    },
    {
      "source": "sd_root_p4_t3_s5",
      "target": "sd_root_p4_t3_s5_d1"
    },
    {
      "source": "sd_root_p4_t3_s5",
      "target": "sd_root_p4_t3_s5_d2"
    },
    {
      "source": "sd_root_p4",
      "target": "sd_root_p4_t4"
    },
    {
      "source": "sd_root_p4_t4",
      "target": "sd_root_p4_t4_s1"
    },
    {
      "source": "sd_root_p4_t4_s1",
      "target": "sd_root_p4_t4_s1_d1"
    },
    {
      "source": "sd_root_p4_t4_s1",
      "target": "sd_root_p4_t4_s1_d2"
    },
    {
      "source": "sd_root_p4_t4",
      "target": "sd_root_p4_t4_s2"
    },
    {
      "source": "sd_root_p4_t4_s2",
      "target": "sd_root_p4_t4_s2_d1"
    },
    {
      "source": "sd_root_p4_t4_s2",
      "target": "sd_root_p4_t4_s2_d2"
    },
    {
      "source": "sd_root_p4_t4",
      "target": "sd_root_p4_t4_s3"
    },
    {
      "source": "sd_root_p4_t4_s3",
      "target": "sd_root_p4_t4_s3_d1"
    },
    {
      "source": "sd_root_p4_t4_s3",
      "target": "sd_root_p4_t4_s3_d2"
    },
    {
      "source": "sd_root_p4_t4",
      "target": "sd_root_p4_t4_s4"
    },
    {
      "source": "sd_root_p4_t4_s4",
      "target": "sd_root_p4_t4_s4_d1"
    },
    {
      "source": "sd_root_p4_t4_s4",
      "target": "sd_root_p4_t4_s4_d2"
    },
    {
      "source": "sd_root_p4_t4",
      "target": "sd_root_p4_t4_s5"
    },
    {
      "source": "sd_root_p4_t4_s5",
      "target": "sd_root_p4_t4_s5_d1"
    },
    {
      "source": "sd_root_p4_t4_s5",
      "target": "sd_root_p4_t4_s5_d2"
    },
    {
      "source": "sd_root_p4",
      "target": "sd_root_p4_t5"
    },
    {
      "source": "sd_root_p4_t5",
      "target": "sd_root_p4_t5_s1"
    },
    {
      "source": "sd_root_p4_t5_s1",
      "target": "sd_root_p4_t5_s1_d1"
    },
    {
      "source": "sd_root_p4_t5_s1",
      "target": "sd_root_p4_t5_s1_d2"
    },
    {
      "source": "sd_root_p4_t5",
      "target": "sd_root_p4_t5_s2"
    },
    {
      "source": "sd_root_p4_t5_s2",
      "target": "sd_root_p4_t5_s2_d1"
    },
    {
      "source": "sd_root_p4_t5_s2",
      "target": "sd_root_p4_t5_s2_d2"
    },
    {
      "source": "sd_root_p4_t5",
      "target": "sd_root_p4_t5_s3"
    },
    {
      "source": "sd_root_p4_t5_s3",
      "target": "sd_root_p4_t5_s3_d1"
    },
    {
      "source": "sd_root_p4_t5_s3",
      "target": "sd_root_p4_t5_s3_d2"
    },
    {
      "source": "sd_root_p4_t5",
      "target": "sd_root_p4_t5_s4"
    },
    {
      "source": "sd_root_p4_t5_s4",
      "target": "sd_root_p4_t5_s4_d1"
    },
    {
      "source": "sd_root_p4_t5_s4",
      "target": "sd_root_p4_t5_s4_d2"
    },
    {
      "source": "sd_root_p4_t5",
      "target": "sd_root_p4_t5_s5"
    },
    {
      "source": "sd_root_p4_t5_s5",
      "target": "sd_root_p4_t5_s5_d1"
    },
    {
      "source": "sd_root_p4_t5_s5",
      "target": "sd_root_p4_t5_s5_d2"
    },
    {
      "source": "sd_root_p4",
      "target": "sd_root_p4_t6"
    },
    {
      "source": "sd_root_p4_t6",
      "target": "sd_root_p4_t6_s1"
    },
    {
      "source": "sd_root_p4_t6_s1",
      "target": "sd_root_p4_t6_s1_d1"
    },
    {
      "source": "sd_root_p4_t6_s1",
      "target": "sd_root_p4_t6_s1_d2"
    },
    {
      "source": "sd_root_p4_t6",
      "target": "sd_root_p4_t6_s2"
    },
    {
      "source": "sd_root_p4_t6_s2",
      "target": "sd_root_p4_t6_s2_d1"
    },
    {
      "source": "sd_root_p4_t6_s2",
      "target": "sd_root_p4_t6_s2_d2"
    },
    {
      "source": "sd_root_p4_t6",
      "target": "sd_root_p4_t6_s3"
    },
    {
      "source": "sd_root_p4_t6_s3",
      "target": "sd_root_p4_t6_s3_d1"
    },
    {
      "source": "sd_root_p4_t6_s3",
      "target": "sd_root_p4_t6_s3_d2"
    },
    {
      "source": "sd_root_p4_t6",
      "target": "sd_root_p4_t6_s4"
    },
    {
      "source": "sd_root_p4_t6_s4",
      "target": "sd_root_p4_t6_s4_d1"
    },
    {
      "source": "sd_root_p4_t6_s4",
      "target": "sd_root_p4_t6_s4_d2"
    },
    {
      "source": "sd_root_p4_t6",
      "target": "sd_root_p4_t6_s5"
    },
    {
      "source": "sd_root_p4_t6_s5",
      "target": "sd_root_p4_t6_s5_d1"
    },
    {
      "source": "sd_root_p4_t6_s5",
      "target": "sd_root_p4_t6_s5_d2"
    },
    {
      "source": "sd_root",
      "target": "sd_root_p5"
    },
    {
      "source": "sd_root_p5",
      "target": "sd_root_p5_t1"
    },
    {
      "source": "sd_root_p5_t1",
      "target": "sd_root_p5_t1_s1"
    },
    {
      "source": "sd_root_p5_t1_s1",
      "target": "sd_root_p5_t1_s1_d1"
    },
    {
      "source": "sd_root_p5_t1_s1",
      "target": "sd_root_p5_t1_s1_d2"
    },
    {
      "source": "sd_root_p5_t1",
      "target": "sd_root_p5_t1_s2"
    },
    {
      "source": "sd_root_p5_t1_s2",
      "target": "sd_root_p5_t1_s2_d1"
    },
    {
      "source": "sd_root_p5_t1_s2",
      "target": "sd_root_p5_t1_s2_d2"
    },
    {
      "source": "sd_root_p5_t1",
      "target": "sd_root_p5_t1_s3"
    },
    {
      "source": "sd_root_p5_t1_s3",
      "target": "sd_root_p5_t1_s3_d1"
    },
    {
      "source": "sd_root_p5_t1_s3",
      "target": "sd_root_p5_t1_s3_d2"
    },
    {
      "source": "sd_root_p5_t1",
      "target": "sd_root_p5_t1_s4"
    },
    {
      "source": "sd_root_p5_t1_s4",
      "target": "sd_root_p5_t1_s4_d1"
    },
    {
      "source": "sd_root_p5_t1_s4",
      "target": "sd_root_p5_t1_s4_d2"
    },
    {
      "source": "sd_root_p5_t1",
      "target": "sd_root_p5_t1_s5"
    },
    {
      "source": "sd_root_p5_t1_s5",
      "target": "sd_root_p5_t1_s5_d1"
    },
    {
      "source": "sd_root_p5_t1_s5",
      "target": "sd_root_p5_t1_s5_d2"
    },
    {
      "source": "sd_root_p5",
      "target": "sd_root_p5_t2"
    },
    {
      "source": "sd_root_p5_t2",
      "target": "sd_root_p5_t2_s1"
    },
    {
      "source": "sd_root_p5_t2_s1",
      "target": "sd_root_p5_t2_s1_d1"
    },
    {
      "source": "sd_root_p5_t2_s1",
      "target": "sd_root_p5_t2_s1_d2"
    },
    {
      "source": "sd_root_p5_t2",
      "target": "sd_root_p5_t2_s2"
    },
    {
      "source": "sd_root_p5_t2_s2",
      "target": "sd_root_p5_t2_s2_d1"
    },
    {
      "source": "sd_root_p5_t2_s2",
      "target": "sd_root_p5_t2_s2_d2"
    },
    {
      "source": "sd_root_p5_t2",
      "target": "sd_root_p5_t2_s3"
    },
    {
      "source": "sd_root_p5_t2_s3",
      "target": "sd_root_p5_t2_s3_d1"
    },
    {
      "source": "sd_root_p5_t2_s3",
      "target": "sd_root_p5_t2_s3_d2"
    },
    {
      "source": "sd_root_p5_t2",
      "target": "sd_root_p5_t2_s4"
    },
    {
      "source": "sd_root_p5_t2_s4",
      "target": "sd_root_p5_t2_s4_d1"
    },
    {
      "source": "sd_root_p5_t2_s4",
      "target": "sd_root_p5_t2_s4_d2"
    },
    {
      "source": "sd_root_p5_t2",
      "target": "sd_root_p5_t2_s5"
    },
    {
      "source": "sd_root_p5_t2_s5",
      "target": "sd_root_p5_t2_s5_d1"
    },
    {
      "source": "sd_root_p5_t2_s5",
      "target": "sd_root_p5_t2_s5_d2"
    },
    {
      "source": "sd_root_p5",
      "target": "sd_root_p5_t3"
    },
    {
      "source": "sd_root_p5_t3",
      "target": "sd_root_p5_t3_s1"
    },
    {
      "source": "sd_root_p5_t3_s1",
      "target": "sd_root_p5_t3_s1_d1"
    },
    {
      "source": "sd_root_p5_t3_s1",
      "target": "sd_root_p5_t3_s1_d2"
    },
    {
      "source": "sd_root_p5_t3",
      "target": "sd_root_p5_t3_s2"
    },
    {
      "source": "sd_root_p5_t3_s2",
      "target": "sd_root_p5_t3_s2_d1"
    },
    {
      "source": "sd_root_p5_t3_s2",
      "target": "sd_root_p5_t3_s2_d2"
    },
    {
      "source": "sd_root_p5_t3",
      "target": "sd_root_p5_t3_s3"
    },
    {
      "source": "sd_root_p5_t3_s3",
      "target": "sd_root_p5_t3_s3_d1"
    },
    {
      "source": "sd_root_p5_t3_s3",
      "target": "sd_root_p5_t3_s3_d2"
    },
    {
      "source": "sd_root_p5_t3",
      "target": "sd_root_p5_t3_s4"
    },
    {
      "source": "sd_root_p5_t3_s4",
      "target": "sd_root_p5_t3_s4_d1"
    },
    {
      "source": "sd_root_p5_t3_s4",
      "target": "sd_root_p5_t3_s4_d2"
    },
    {
      "source": "sd_root_p5_t3",
      "target": "sd_root_p5_t3_s5"
    },
    {
      "source": "sd_root_p5_t3_s5",
      "target": "sd_root_p5_t3_s5_d1"
    },
    {
      "source": "sd_root_p5_t3_s5",
      "target": "sd_root_p5_t3_s5_d2"
    },
    {
      "source": "sd_root_p5",
      "target": "sd_root_p5_t4"
    },
    {
      "source": "sd_root_p5_t4",
      "target": "sd_root_p5_t4_s1"
    },
    {
      "source": "sd_root_p5_t4_s1",
      "target": "sd_root_p5_t4_s1_d1"
    },
    {
      "source": "sd_root_p5_t4_s1",
      "target": "sd_root_p5_t4_s1_d2"
    },
    {
      "source": "sd_root_p5_t4",
      "target": "sd_root_p5_t4_s2"
    },
    {
      "source": "sd_root_p5_t4_s2",
      "target": "sd_root_p5_t4_s2_d1"
    },
    {
      "source": "sd_root_p5_t4_s2",
      "target": "sd_root_p5_t4_s2_d2"
    },
    {
      "source": "sd_root_p5_t4",
      "target": "sd_root_p5_t4_s3"
    },
    {
      "source": "sd_root_p5_t4_s3",
      "target": "sd_root_p5_t4_s3_d1"
    },
    {
      "source": "sd_root_p5_t4_s3",
      "target": "sd_root_p5_t4_s3_d2"
    },
    {
      "source": "sd_root_p5_t4",
      "target": "sd_root_p5_t4_s4"
    },
    {
      "source": "sd_root_p5_t4_s4",
      "target": "sd_root_p5_t4_s4_d1"
    },
    {
      "source": "sd_root_p5_t4_s4",
      "target": "sd_root_p5_t4_s4_d2"
    },
    {
      "source": "sd_root_p5_t4",
      "target": "sd_root_p5_t4_s5"
    },
    {
      "source": "sd_root_p5_t4_s5",
      "target": "sd_root_p5_t4_s5_d1"
    },
    {
      "source": "sd_root_p5_t4_s5",
      "target": "sd_root_p5_t4_s5_d2"
    },
    {
      "source": "sd_root_p5",
      "target": "sd_root_p5_t5"
    },
    {
      "source": "sd_root_p5_t5",
      "target": "sd_root_p5_t5_s1"
    },
    {
      "source": "sd_root_p5_t5_s1",
      "target": "sd_root_p5_t5_s1_d1"
    },
    {
      "source": "sd_root_p5_t5_s1",
      "target": "sd_root_p5_t5_s1_d2"
    },
    {
      "source": "sd_root_p5_t5",
      "target": "sd_root_p5_t5_s2"
    },
    {
      "source": "sd_root_p5_t5_s2",
      "target": "sd_root_p5_t5_s2_d1"
    },
    {
      "source": "sd_root_p5_t5_s2",
      "target": "sd_root_p5_t5_s2_d2"
    },
    {
      "source": "sd_root_p5_t5",
      "target": "sd_root_p5_t5_s3"
    },
    {
      "source": "sd_root_p5_t5_s3",
      "target": "sd_root_p5_t5_s3_d1"
    },
    {
      "source": "sd_root_p5_t5_s3",
      "target": "sd_root_p5_t5_s3_d2"
    },
    {
      "source": "sd_root_p5_t5",
      "target": "sd_root_p5_t5_s4"
    },
    {
      "source": "sd_root_p5_t5_s4",
      "target": "sd_root_p5_t5_s4_d1"
    },
    {
      "source": "sd_root_p5_t5_s4",
      "target": "sd_root_p5_t5_s4_d2"
    },
    {
      "source": "sd_root_p5_t5",
      "target": "sd_root_p5_t5_s5"
    },
    {
      "source": "sd_root_p5_t5_s5",
      "target": "sd_root_p5_t5_s5_d1"
    },
    {
      "source": "sd_root_p5_t5_s5",
      "target": "sd_root_p5_t5_s5_d2"
    },
    {
      "source": "sd_root_p5",
      "target": "sd_root_p5_t6"
    },
    {
      "source": "sd_root_p5_t6",
      "target": "sd_root_p5_t6_s1"
    },
    {
      "source": "sd_root_p5_t6_s1",
      "target": "sd_root_p5_t6_s1_d1"
    },
    {
      "source": "sd_root_p5_t6_s1",
      "target": "sd_root_p5_t6_s1_d2"
    },
    {
      "source": "sd_root_p5_t6",
      "target": "sd_root_p5_t6_s2"
    },
    {
      "source": "sd_root_p5_t6_s2",
      "target": "sd_root_p5_t6_s2_d1"
    },
    {
      "source": "sd_root_p5_t6_s2",
      "target": "sd_root_p5_t6_s2_d2"
    },
    {
      "source": "sd_root_p5_t6",
      "target": "sd_root_p5_t6_s3"
    },
    {
      "source": "sd_root_p5_t6_s3",
      "target": "sd_root_p5_t6_s3_d1"
    },
    {
      "source": "sd_root_p5_t6_s3",
      "target": "sd_root_p5_t6_s3_d2"
    },
    {
      "source": "sd_root_p5_t6",
      "target": "sd_root_p5_t6_s4"
    },
    {
      "source": "sd_root_p5_t6_s4",
      "target": "sd_root_p5_t6_s4_d1"
    },
    {
      "source": "sd_root_p5_t6_s4",
      "target": "sd_root_p5_t6_s4_d2"
    },
    {
      "source": "sd_root_p5_t6",
      "target": "sd_root_p5_t6_s5"
    },
    {
      "source": "sd_root_p5_t6_s5",
      "target": "sd_root_p5_t6_s5_d1"
    },
    {
      "source": "sd_root_p5_t6_s5",
      "target": "sd_root_p5_t6_s5_d2"
    },
    {
      "source": "sd_root",
      "target": "sd_root_p6"
    },
    {
      "source": "sd_root_p6",
      "target": "sd_root_p6_t1"
    },
    {
      "source": "sd_root_p6_t1",
      "target": "sd_root_p6_t1_s1"
    },
    {
      "source": "sd_root_p6_t1_s1",
      "target": "sd_root_p6_t1_s1_d1"
    },
    {
      "source": "sd_root_p6_t1_s1",
      "target": "sd_root_p6_t1_s1_d2"
    },
    {
      "source": "sd_root_p6_t1",
      "target": "sd_root_p6_t1_s2"
    },
    {
      "source": "sd_root_p6_t1_s2",
      "target": "sd_root_p6_t1_s2_d1"
    },
    {
      "source": "sd_root_p6_t1_s2",
      "target": "sd_root_p6_t1_s2_d2"
    },
    {
      "source": "sd_root_p6_t1",
      "target": "sd_root_p6_t1_s3"
    },
    {
      "source": "sd_root_p6_t1_s3",
      "target": "sd_root_p6_t1_s3_d1"
    },
    {
      "source": "sd_root_p6_t1_s3",
      "target": "sd_root_p6_t1_s3_d2"
    },
    {
      "source": "sd_root_p6_t1",
      "target": "sd_root_p6_t1_s4"
    },
    {
      "source": "sd_root_p6_t1_s4",
      "target": "sd_root_p6_t1_s4_d1"
    },
    {
      "source": "sd_root_p6_t1_s4",
      "target": "sd_root_p6_t1_s4_d2"
    },
    {
      "source": "sd_root_p6_t1",
      "target": "sd_root_p6_t1_s5"
    },
    {
      "source": "sd_root_p6_t1_s5",
      "target": "sd_root_p6_t1_s5_d1"
    },
    {
      "source": "sd_root_p6_t1_s5",
      "target": "sd_root_p6_t1_s5_d2"
    },
    {
      "source": "sd_root_p6",
      "target": "sd_root_p6_t2"
    },
    {
      "source": "sd_root_p6_t2",
      "target": "sd_root_p6_t2_s1"
    },
    {
      "source": "sd_root_p6_t2_s1",
      "target": "sd_root_p6_t2_s1_d1"
    },
    {
      "source": "sd_root_p6_t2_s1",
      "target": "sd_root_p6_t2_s1_d2"
    },
    {
      "source": "sd_root_p6_t2",
      "target": "sd_root_p6_t2_s2"
    },
    {
      "source": "sd_root_p6_t2_s2",
      "target": "sd_root_p6_t2_s2_d1"
    },
    {
      "source": "sd_root_p6_t2_s2",
      "target": "sd_root_p6_t2_s2_d2"
    },
    {
      "source": "sd_root_p6_t2",
      "target": "sd_root_p6_t2_s3"
    },
    {
      "source": "sd_root_p6_t2_s3",
      "target": "sd_root_p6_t2_s3_d1"
    },
    {
      "source": "sd_root_p6_t2_s3",
      "target": "sd_root_p6_t2_s3_d2"
    },
    {
      "source": "sd_root_p6_t2",
      "target": "sd_root_p6_t2_s4"
    },
    {
      "source": "sd_root_p6_t2_s4",
      "target": "sd_root_p6_t2_s4_d1"
    },
    {
      "source": "sd_root_p6_t2_s4",
      "target": "sd_root_p6_t2_s4_d2"
    },
    {
      "source": "sd_root_p6_t2",
      "target": "sd_root_p6_t2_s5"
    },
    {
      "source": "sd_root_p6_t2_s5",
      "target": "sd_root_p6_t2_s5_d1"
    },
    {
      "source": "sd_root_p6_t2_s5",
      "target": "sd_root_p6_t2_s5_d2"
    },
    {
      "source": "sd_root_p6",
      "target": "sd_root_p6_t3"
    },
    {
      "source": "sd_root_p6_t3",
      "target": "sd_root_p6_t3_s1"
    },
    {
      "source": "sd_root_p6_t3_s1",
      "target": "sd_root_p6_t3_s1_d1"
    },
    {
      "source": "sd_root_p6_t3_s1",
      "target": "sd_root_p6_t3_s1_d2"
    },
    {
      "source": "sd_root_p6_t3",
      "target": "sd_root_p6_t3_s2"
    },
    {
      "source": "sd_root_p6_t3_s2",
      "target": "sd_root_p6_t3_s2_d1"
    },
    {
      "source": "sd_root_p6_t3_s2",
      "target": "sd_root_p6_t3_s2_d2"
    },
    {
      "source": "sd_root_p6_t3",
      "target": "sd_root_p6_t3_s3"
    },
    {
      "source": "sd_root_p6_t3_s3",
      "target": "sd_root_p6_t3_s3_d1"
    },
    {
      "source": "sd_root_p6_t3_s3",
      "target": "sd_root_p6_t3_s3_d2"
    },
    {
      "source": "sd_root_p6_t3",
      "target": "sd_root_p6_t3_s4"
    },
    {
      "source": "sd_root_p6_t3_s4",
      "target": "sd_root_p6_t3_s4_d1"
    },
    {
      "source": "sd_root_p6_t3_s4",
      "target": "sd_root_p6_t3_s4_d2"
    },
    {
      "source": "sd_root_p6_t3",
      "target": "sd_root_p6_t3_s5"
    },
    {
      "source": "sd_root_p6_t3_s5",
      "target": "sd_root_p6_t3_s5_d1"
    },
    {
      "source": "sd_root_p6_t3_s5",
      "target": "sd_root_p6_t3_s5_d2"
    },
    {
      "source": "sd_root_p6",
      "target": "sd_root_p6_t4"
    },
    {
      "source": "sd_root_p6_t4",
      "target": "sd_root_p6_t4_s1"
    },
    {
      "source": "sd_root_p6_t4_s1",
      "target": "sd_root_p6_t4_s1_d1"
    },
    {
      "source": "sd_root_p6_t4_s1",
      "target": "sd_root_p6_t4_s1_d2"
    },
    {
      "source": "sd_root_p6_t4",
      "target": "sd_root_p6_t4_s2"
    },
    {
      "source": "sd_root_p6_t4_s2",
      "target": "sd_root_p6_t4_s2_d1"
    },
    {
      "source": "sd_root_p6_t4_s2",
      "target": "sd_root_p6_t4_s2_d2"
    },
    {
      "source": "sd_root_p6_t4",
      "target": "sd_root_p6_t4_s3"
    },
    {
      "source": "sd_root_p6_t4_s3",
      "target": "sd_root_p6_t4_s3_d1"
    },
    {
      "source": "sd_root_p6_t4_s3",
      "target": "sd_root_p6_t4_s3_d2"
    },
    {
      "source": "sd_root_p6_t4",
      "target": "sd_root_p6_t4_s4"
    },
    {
      "source": "sd_root_p6_t4_s4",
      "target": "sd_root_p6_t4_s4_d1"
    },
    {
      "source": "sd_root_p6_t4_s4",
      "target": "sd_root_p6_t4_s4_d2"
    },
    {
      "source": "sd_root_p6_t4",
      "target": "sd_root_p6_t4_s5"
    },
    {
      "source": "sd_root_p6_t4_s5",
      "target": "sd_root_p6_t4_s5_d1"
    },
    {
      "source": "sd_root_p6_t4_s5",
      "target": "sd_root_p6_t4_s5_d2"
    },
    {
      "source": "sd_root_p6",
      "target": "sd_root_p6_t5"
    },
    {
      "source": "sd_root_p6_t5",
      "target": "sd_root_p6_t5_s1"
    },
    {
      "source": "sd_root_p6_t5_s1",
      "target": "sd_root_p6_t5_s1_d1"
    },
    {
      "source": "sd_root_p6_t5_s1",
      "target": "sd_root_p6_t5_s1_d2"
    },
    {
      "source": "sd_root_p6_t5",
      "target": "sd_root_p6_t5_s2"
    },
    {
      "source": "sd_root_p6_t5_s2",
      "target": "sd_root_p6_t5_s2_d1"
    },
    {
      "source": "sd_root_p6_t5_s2",
      "target": "sd_root_p6_t5_s2_d2"
    },
    {
      "source": "sd_root_p6_t5",
      "target": "sd_root_p6_t5_s3"
    },
    {
      "source": "sd_root_p6_t5_s3",
      "target": "sd_root_p6_t5_s3_d1"
    },
    {
      "source": "sd_root_p6_t5_s3",
      "target": "sd_root_p6_t5_s3_d2"
    },
    {
      "source": "sd_root_p6_t5",
      "target": "sd_root_p6_t5_s4"
    },
    {
      "source": "sd_root_p6_t5_s4",
      "target": "sd_root_p6_t5_s4_d1"
    },
    {
      "source": "sd_root_p6_t5_s4",
      "target": "sd_root_p6_t5_s4_d2"
    },
    {
      "source": "sd_root_p6_t5",
      "target": "sd_root_p6_t5_s5"
    },
    {
      "source": "sd_root_p6_t5_s5",
      "target": "sd_root_p6_t5_s5_d1"
    },
    {
      "source": "sd_root_p6_t5_s5",
      "target": "sd_root_p6_t5_s5_d2"
    },
    {
      "source": "sd_root_p6",
      "target": "sd_root_p6_t6"
    },
    {
      "source": "sd_root_p6_t6",
      "target": "sd_root_p6_t6_s1"
    },
    {
      "source": "sd_root_p6_t6_s1",
      "target": "sd_root_p6_t6_s1_d1"
    },
    {
      "source": "sd_root_p6_t6_s1",
      "target": "sd_root_p6_t6_s1_d2"
    },
    {
      "source": "sd_root_p6_t6",
      "target": "sd_root_p6_t6_s2"
    },
    {
      "source": "sd_root_p6_t6_s2",
      "target": "sd_root_p6_t6_s2_d1"
    },
    {
      "source": "sd_root_p6_t6_s2",
      "target": "sd_root_p6_t6_s2_d2"
    },
    {
      "source": "sd_root_p6_t6",
      "target": "sd_root_p6_t6_s3"
    },
    {
      "source": "sd_root_p6_t6_s3",
      "target": "sd_root_p6_t6_s3_d1"
    },
    {
      "source": "sd_root_p6_t6_s3",
      "target": "sd_root_p6_t6_s3_d2"
    },
    {
      "source": "sd_root_p6_t6",
      "target": "sd_root_p6_t6_s4"
    },
    {
      "source": "sd_root_p6_t6_s4",
      "target": "sd_root_p6_t6_s4_d1"
    },
    {
      "source": "sd_root_p6_t6_s4",
      "target": "sd_root_p6_t6_s4_d2"
    },
    {
      "source": "sd_root_p6_t6",
      "target": "sd_root_p6_t6_s5"
    },
    {
      "source": "sd_root_p6_t6_s5",
      "target": "sd_root_p6_t6_s5_d1"
    },
    {
      "source": "sd_root_p6_t6_s5",
      "target": "sd_root_p6_t6_s5_d2"
    },
    {
      "source": "sd_root",
      "target": "sd_root_p7"
    },
    {
      "source": "sd_root_p7",
      "target": "sd_root_p7_t1"
    },
    {
      "source": "sd_root_p7_t1",
      "target": "sd_root_p7_t1_s1"
    },
    {
      "source": "sd_root_p7_t1_s1",
      "target": "sd_root_p7_t1_s1_d1"
    },
    {
      "source": "sd_root_p7_t1_s1",
      "target": "sd_root_p7_t1_s1_d2"
    },
    {
      "source": "sd_root_p7_t1",
      "target": "sd_root_p7_t1_s2"
    },
    {
      "source": "sd_root_p7_t1_s2",
      "target": "sd_root_p7_t1_s2_d1"
    },
    {
      "source": "sd_root_p7_t1_s2",
      "target": "sd_root_p7_t1_s2_d2"
    },
    {
      "source": "sd_root_p7_t1",
      "target": "sd_root_p7_t1_s3"
    },
    {
      "source": "sd_root_p7_t1_s3",
      "target": "sd_root_p7_t1_s3_d1"
    },
    {
      "source": "sd_root_p7_t1_s3",
      "target": "sd_root_p7_t1_s3_d2"
    },
    {
      "source": "sd_root_p7_t1",
      "target": "sd_root_p7_t1_s4"
    },
    {
      "source": "sd_root_p7_t1_s4",
      "target": "sd_root_p7_t1_s4_d1"
    },
    {
      "source": "sd_root_p7_t1_s4",
      "target": "sd_root_p7_t1_s4_d2"
    },
    {
      "source": "sd_root_p7_t1",
      "target": "sd_root_p7_t1_s5"
    },
    {
      "source": "sd_root_p7_t1_s5",
      "target": "sd_root_p7_t1_s5_d1"
    },
    {
      "source": "sd_root_p7_t1_s5",
      "target": "sd_root_p7_t1_s5_d2"
    },
    {
      "source": "sd_root_p7",
      "target": "sd_root_p7_t2"
    },
    {
      "source": "sd_root_p7_t2",
      "target": "sd_root_p7_t2_s1"
    },
    {
      "source": "sd_root_p7_t2_s1",
      "target": "sd_root_p7_t2_s1_d1"
    },
    {
      "source": "sd_root_p7_t2_s1",
      "target": "sd_root_p7_t2_s1_d2"
    },
    {
      "source": "sd_root_p7_t2",
      "target": "sd_root_p7_t2_s2"
    },
    {
      "source": "sd_root_p7_t2_s2",
      "target": "sd_root_p7_t2_s2_d1"
    },
    {
      "source": "sd_root_p7_t2_s2",
      "target": "sd_root_p7_t2_s2_d2"
    },
    {
      "source": "sd_root_p7_t2",
      "target": "sd_root_p7_t2_s3"
    },
    {
      "source": "sd_root_p7_t2_s3",
      "target": "sd_root_p7_t2_s3_d1"
    },
    {
      "source": "sd_root_p7_t2_s3",
      "target": "sd_root_p7_t2_s3_d2"
    },
    {
      "source": "sd_root_p7_t2",
      "target": "sd_root_p7_t2_s4"
    },
    {
      "source": "sd_root_p7_t2_s4",
      "target": "sd_root_p7_t2_s4_d1"
    },
    {
      "source": "sd_root_p7_t2_s4",
      "target": "sd_root_p7_t2_s4_d2"
    },
    {
      "source": "sd_root_p7_t2",
      "target": "sd_root_p7_t2_s5"
    },
    {
      "source": "sd_root_p7_t2_s5",
      "target": "sd_root_p7_t2_s5_d1"
    },
    {
      "source": "sd_root_p7_t2_s5",
      "target": "sd_root_p7_t2_s5_d2"
    },
    {
      "source": "sd_root_p7",
      "target": "sd_root_p7_t3"
    },
    {
      "source": "sd_root_p7_t3",
      "target": "sd_root_p7_t3_s1"
    },
    {
      "source": "sd_root_p7_t3_s1",
      "target": "sd_root_p7_t3_s1_d1"
    },
    {
      "source": "sd_root_p7_t3_s1",
      "target": "sd_root_p7_t3_s1_d2"
    },
    {
      "source": "sd_root_p7_t3_s1",
      "target": "sd_root_p7_t3_s1_d3"
    },
    {
      "source": "sd_root_p7_t3",
      "target": "sd_root_p7_t3_s2"
    },
    {
      "source": "sd_root_p7_t3_s2",
      "target": "sd_root_p7_t3_s2_d1"
    },
    {
      "source": "sd_root_p7_t3_s2",
      "target": "sd_root_p7_t3_s2_d2"
    },
    {
      "source": "sd_root_p7_t3",
      "target": "sd_root_p7_t3_s3"
    },
    {
      "source": "sd_root_p7_t3_s3",
      "target": "sd_root_p7_t3_s3_d1"
    },
    {
      "source": "sd_root_p7_t3_s3",
      "target": "sd_root_p7_t3_s3_d2"
    },
    {
      "source": "sd_root_p7_t3",
      "target": "sd_root_p7_t3_s4"
    },
    {
      "source": "sd_root_p7_t3_s4",
      "target": "sd_root_p7_t3_s4_d1"
    },
    {
      "source": "sd_root_p7_t3_s4",
      "target": "sd_root_p7_t3_s4_d2"
    },
    {
      "source": "sd_root_p7_t3",
      "target": "sd_root_p7_t3_s5"
    },
    {
      "source": "sd_root_p7_t3_s5",
      "target": "sd_root_p7_t3_s5_d1"
    },
    {
      "source": "sd_root_p7_t3_s5",
      "target": "sd_root_p7_t3_s5_d2"
    },
    {
      "source": "sd_root_p7",
      "target": "sd_root_p7_t4"
    },
    {
      "source": "sd_root_p7_t4",
      "target": "sd_root_p7_t4_s1"
    },
    {
      "source": "sd_root_p7_t4_s1",
      "target": "sd_root_p7_t4_s1_d1"
    },
    {
      "source": "sd_root_p7_t4_s1",
      "target": "sd_root_p7_t4_s1_d2"
    },
    {
      "source": "sd_root_p7_t4",
      "target": "sd_root_p7_t4_s2"
    },
    {
      "source": "sd_root_p7_t4_s2",
      "target": "sd_root_p7_t4_s2_d1"
    },
    {
      "source": "sd_root_p7_t4_s2",
      "target": "sd_root_p7_t4_s2_d2"
    },
    {
      "source": "sd_root_p7_t4",
      "target": "sd_root_p7_t4_s3"
    },
    {
      "source": "sd_root_p7_t4_s3",
      "target": "sd_root_p7_t4_s3_d1"
    },
    {
      "source": "sd_root_p7_t4_s3",
      "target": "sd_root_p7_t4_s3_d2"
    },
    {
      "source": "sd_root_p7_t4",
      "target": "sd_root_p7_t4_s4"
    },
    {
      "source": "sd_root_p7_t4_s4",
      "target": "sd_root_p7_t4_s4_d1"
    },
    {
      "source": "sd_root_p7_t4_s4",
      "target": "sd_root_p7_t4_s4_d2"
    },
    {
      "source": "sd_root_p7_t4",
      "target": "sd_root_p7_t4_s5"
    },
    {
      "source": "sd_root_p7_t4_s5",
      "target": "sd_root_p7_t4_s5_d1"
    },
    {
      "source": "sd_root_p7_t4_s5",
      "target": "sd_root_p7_t4_s5_d2"
    },
    {
      "source": "sd_root_p7",
      "target": "sd_root_p7_t5"
    },
    {
      "source": "sd_root_p7_t5",
      "target": "sd_root_p7_t5_s1"
    },
    {
      "source": "sd_root_p7_t5_s1",
      "target": "sd_root_p7_t5_s1_d1"
    },
    {
      "source": "sd_root_p7_t5_s1",
      "target": "sd_root_p7_t5_s1_d2"
    },
    {
      "source": "sd_root_p7_t5",
      "target": "sd_root_p7_t5_s2"
    },
    {
      "source": "sd_root_p7_t5_s2",
      "target": "sd_root_p7_t5_s2_d1"
    },
    {
      "source": "sd_root_p7_t5_s2",
      "target": "sd_root_p7_t5_s2_d2"
    },
    {
      "source": "sd_root_p7_t5",
      "target": "sd_root_p7_t5_s3"
    },
    {
      "source": "sd_root_p7_t5_s3",
      "target": "sd_root_p7_t5_s3_d1"
    },
    {
      "source": "sd_root_p7_t5_s3",
      "target": "sd_root_p7_t5_s3_d2"
    },
    {
      "source": "sd_root_p7_t5",
      "target": "sd_root_p7_t5_s4"
    },
    {
      "source": "sd_root_p7_t5_s4",
      "target": "sd_root_p7_t5_s4_d1"
    },
    {
      "source": "sd_root_p7_t5_s4",
      "target": "sd_root_p7_t5_s4_d2"
    },
    {
      "source": "sd_root_p7_t5",
      "target": "sd_root_p7_t5_s5"
    },
    {
      "source": "sd_root_p7_t5_s5",
      "target": "sd_root_p7_t5_s5_d1"
    },
    {
      "source": "sd_root_p7_t5_s5",
      "target": "sd_root_p7_t5_s5_d2"
    },
    {
      "source": "sd_root_p7",
      "target": "sd_root_p7_t6"
    },
    {
      "source": "sd_root_p7_t6",
      "target": "sd_root_p7_t6_s1"
    },
    {
      "source": "sd_root_p7_t6_s1",
      "target": "sd_root_p7_t6_s1_d1"
    },
    {
      "source": "sd_root_p7_t6_s1",
      "target": "sd_root_p7_t6_s1_d2"
    },
    {
      "source": "sd_root_p7_t6",
      "target": "sd_root_p7_t6_s2"
    },
    {
      "source": "sd_root_p7_t6_s2",
      "target": "sd_root_p7_t6_s2_d1"
    },
    {
      "source": "sd_root_p7_t6_s2",
      "target": "sd_root_p7_t6_s2_d2"
    },
    {
      "source": "sd_root_p7_t6",
      "target": "sd_root_p7_t6_s3"
    },
    {
      "source": "sd_root_p7_t6_s3",
      "target": "sd_root_p7_t6_s3_d1"
    },
    {
      "source": "sd_root_p7_t6_s3",
      "target": "sd_root_p7_t6_s3_d2"
    },
    {
      "source": "sd_root_p7_t6",
      "target": "sd_root_p7_t6_s4"
    },
    {
      "source": "sd_root_p7_t6_s4",
      "target": "sd_root_p7_t6_s4_d1"
    },
    {
      "source": "sd_root_p7_t6_s4",
      "target": "sd_root_p7_t6_s4_d2"
    },
    {
      "source": "sd_root_p7_t6",
      "target": "sd_root_p7_t6_s5"
    },
    {
      "source": "sd_root_p7_t6_s5",
      "target": "sd_root_p7_t6_s5_d1"
    },
    {
      "source": "sd_root_p7_t6_s5",
      "target": "sd_root_p7_t6_s5_d2"
    },
    {
      "source": "sd_root",
      "target": "sd_root_p8"
    },
    {
      "source": "sd_root_p8",
      "target": "sd_root_p8_t1"
    },
    {
      "source": "sd_root_p8_t1",
      "target": "sd_root_p8_t1_s1"
    },
    {
      "source": "sd_root_p8_t1_s1",
      "target": "sd_root_p8_t1_s1_d1"
    },
    {
      "source": "sd_root_p8_t1_s1",
      "target": "sd_root_p8_t1_s1_d2"
    },
    {
      "source": "sd_root_p8_t1",
      "target": "sd_root_p8_t1_s2"
    },
    {
      "source": "sd_root_p8_t1_s2",
      "target": "sd_root_p8_t1_s2_d1"
    },
    {
      "source": "sd_root_p8_t1_s2",
      "target": "sd_root_p8_t1_s2_d2"
    },
    {
      "source": "sd_root_p8_t1",
      "target": "sd_root_p8_t1_s3"
    },
    {
      "source": "sd_root_p8_t1_s3",
      "target": "sd_root_p8_t1_s3_d1"
    },
    {
      "source": "sd_root_p8_t1_s3",
      "target": "sd_root_p8_t1_s3_d2"
    },
    {
      "source": "sd_root_p8_t1",
      "target": "sd_root_p8_t1_s4"
    },
    {
      "source": "sd_root_p8_t1_s4",
      "target": "sd_root_p8_t1_s4_d1"
    },
    {
      "source": "sd_root_p8_t1_s4",
      "target": "sd_root_p8_t1_s4_d2"
    },
    {
      "source": "sd_root_p8_t1",
      "target": "sd_root_p8_t1_s5"
    },
    {
      "source": "sd_root_p8_t1_s5",
      "target": "sd_root_p8_t1_s5_d1"
    },
    {
      "source": "sd_root_p8_t1_s5",
      "target": "sd_root_p8_t1_s5_d2"
    },
    {
      "source": "sd_root_p8",
      "target": "sd_root_p8_t2"
    },
    {
      "source": "sd_root_p8_t2",
      "target": "sd_root_p8_t2_s1"
    },
    {
      "source": "sd_root_p8_t2_s1",
      "target": "sd_root_p8_t2_s1_d1"
    },
    {
      "source": "sd_root_p8_t2_s1",
      "target": "sd_root_p8_t2_s1_d2"
    },
    {
      "source": "sd_root_p8_t2",
      "target": "sd_root_p8_t2_s2"
    },
    {
      "source": "sd_root_p8_t2_s2",
      "target": "sd_root_p8_t2_s2_d1"
    },
    {
      "source": "sd_root_p8_t2_s2",
      "target": "sd_root_p8_t2_s2_d2"
    },
    {
      "source": "sd_root_p8_t2_s2",
      "target": "sd_root_p8_t2_s2_d3"
    },
    {
      "source": "sd_root_p8_t2",
      "target": "sd_root_p8_t2_s3"
    },
    {
      "source": "sd_root_p8_t2_s3",
      "target": "sd_root_p8_t2_s3_d1"
    },
    {
      "source": "sd_root_p8_t2_s3",
      "target": "sd_root_p8_t2_s3_d2"
    },
    {
      "source": "sd_root_p8_t2",
      "target": "sd_root_p8_t2_s4"
    },
    {
      "source": "sd_root_p8_t2_s4",
      "target": "sd_root_p8_t2_s4_d1"
    },
    {
      "source": "sd_root_p8_t2_s4",
      "target": "sd_root_p8_t2_s4_d2"
    },
    {
      "source": "sd_root_p8_t2",
      "target": "sd_root_p8_t2_s5"
    },
    {
      "source": "sd_root_p8_t2_s5",
      "target": "sd_root_p8_t2_s5_d1"
    },
    {
      "source": "sd_root_p8_t2_s5",
      "target": "sd_root_p8_t2_s5_d2"
    },
    {
      "source": "sd_root_p8",
      "target": "sd_root_p8_t3"
    },
    {
      "source": "sd_root_p8_t3",
      "target": "sd_root_p8_t3_s1"
    },
    {
      "source": "sd_root_p8_t3_s1",
      "target": "sd_root_p8_t3_s1_d1"
    },
    {
      "source": "sd_root_p8_t3_s1",
      "target": "sd_root_p8_t3_s1_d2"
    },
    {
      "source": "sd_root_p8_t3",
      "target": "sd_root_p8_t3_s2"
    },
    {
      "source": "sd_root_p8_t3_s2",
      "target": "sd_root_p8_t3_s2_d1"
    },
    {
      "source": "sd_root_p8_t3_s2",
      "target": "sd_root_p8_t3_s2_d2"
    },
    {
      "source": "sd_root_p8_t3",
      "target": "sd_root_p8_t3_s3"
    },
    {
      "source": "sd_root_p8_t3_s3",
      "target": "sd_root_p8_t3_s3_d1"
    },
    {
      "source": "sd_root_p8_t3_s3",
      "target": "sd_root_p8_t3_s3_d2"
    },
    {
      "source": "sd_root_p8_t3",
      "target": "sd_root_p8_t3_s4"
    },
    {
      "source": "sd_root_p8_t3_s4",
      "target": "sd_root_p8_t3_s4_d1"
    },
    {
      "source": "sd_root_p8_t3_s4",
      "target": "sd_root_p8_t3_s4_d2"
    },
    {
      "source": "sd_root_p8_t3",
      "target": "sd_root_p8_t3_s5"
    },
    {
      "source": "sd_root_p8_t3_s5",
      "target": "sd_root_p8_t3_s5_d1"
    },
    {
      "source": "sd_root_p8_t3_s5",
      "target": "sd_root_p8_t3_s5_d2"
    },
    {
      "source": "sd_root_p8",
      "target": "sd_root_p8_t4"
    },
    {
      "source": "sd_root_p8_t4",
      "target": "sd_root_p8_t4_s1"
    },
    {
      "source": "sd_root_p8_t4_s1",
      "target": "sd_root_p8_t4_s1_d1"
    },
    {
      "source": "sd_root_p8_t4_s1",
      "target": "sd_root_p8_t4_s1_d2"
    },
    {
      "source": "sd_root_p8_t4",
      "target": "sd_root_p8_t4_s2"
    },
    {
      "source": "sd_root_p8_t4_s2",
      "target": "sd_root_p8_t4_s2_d1"
    },
    {
      "source": "sd_root_p8_t4_s2",
      "target": "sd_root_p8_t4_s2_d2"
    },
    {
      "source": "sd_root_p8_t4",
      "target": "sd_root_p8_t4_s3"
    },
    {
      "source": "sd_root_p8_t4_s3",
      "target": "sd_root_p8_t4_s3_d1"
    },
    {
      "source": "sd_root_p8_t4_s3",
      "target": "sd_root_p8_t4_s3_d2"
    },
    {
      "source": "sd_root_p8_t4",
      "target": "sd_root_p8_t4_s4"
    },
    {
      "source": "sd_root_p8_t4_s4",
      "target": "sd_root_p8_t4_s4_d1"
    },
    {
      "source": "sd_root_p8_t4_s4",
      "target": "sd_root_p8_t4_s4_d2"
    },
    {
      "source": "sd_root_p8_t4",
      "target": "sd_root_p8_t4_s5"
    },
    {
      "source": "sd_root_p8_t4_s5",
      "target": "sd_root_p8_t4_s5_d1"
    },
    {
      "source": "sd_root_p8_t4_s5",
      "target": "sd_root_p8_t4_s5_d2"
    },
    {
      "source": "sd_root_p8",
      "target": "sd_root_p8_t5"
    },
    {
      "source": "sd_root_p8_t5",
      "target": "sd_root_p8_t5_s1"
    },
    {
      "source": "sd_root_p8_t5_s1",
      "target": "sd_root_p8_t5_s1_d1"
    },
    {
      "source": "sd_root_p8_t5_s1",
      "target": "sd_root_p8_t5_s1_d2"
    },
    {
      "source": "sd_root_p8_t5",
      "target": "sd_root_p8_t5_s2"
    },
    {
      "source": "sd_root_p8_t5_s2",
      "target": "sd_root_p8_t5_s2_d1"
    },
    {
      "source": "sd_root_p8_t5_s2",
      "target": "sd_root_p8_t5_s2_d2"
    },
    {
      "source": "sd_root_p8_t5",
      "target": "sd_root_p8_t5_s3"
    },
    {
      "source": "sd_root_p8_t5_s3",
      "target": "sd_root_p8_t5_s3_d1"
    },
    {
      "source": "sd_root_p8_t5_s3",
      "target": "sd_root_p8_t5_s3_d2"
    },
    {
      "source": "sd_root_p8_t5",
      "target": "sd_root_p8_t5_s4"
    },
    {
      "source": "sd_root_p8_t5_s4",
      "target": "sd_root_p8_t5_s4_d1"
    },
    {
      "source": "sd_root_p8_t5_s4",
      "target": "sd_root_p8_t5_s4_d2"
    },
    {
      "source": "sd_root_p8_t5",
      "target": "sd_root_p8_t5_s5"
    },
    {
      "source": "sd_root_p8_t5_s5",
      "target": "sd_root_p8_t5_s5_d1"
    },
    {
      "source": "sd_root_p8_t5_s5",
      "target": "sd_root_p8_t5_s5_d2"
    },
    {
      "source": "sd_root_p8",
      "target": "sd_root_p8_t6"
    },
    {
      "source": "sd_root_p8_t6",
      "target": "sd_root_p8_t6_s1"
    },
    {
      "source": "sd_root_p8_t6_s1",
      "target": "sd_root_p8_t6_s1_d1"
    },
    {
      "source": "sd_root_p8_t6_s1",
      "target": "sd_root_p8_t6_s1_d2"
    },
    {
      "source": "sd_root_p8_t6",
      "target": "sd_root_p8_t6_s2"
    },
    {
      "source": "sd_root_p8_t6_s2",
      "target": "sd_root_p8_t6_s2_d1"
    },
    {
      "source": "sd_root_p8_t6_s2",
      "target": "sd_root_p8_t6_s2_d2"
    },
    {
      "source": "sd_root_p8_t6",
      "target": "sd_root_p8_t6_s3"
    },
    {
      "source": "sd_root_p8_t6_s3",
      "target": "sd_root_p8_t6_s3_d1"
    },
    {
      "source": "sd_root_p8_t6_s3",
      "target": "sd_root_p8_t6_s3_d2"
    },
    {
      "source": "sd_root_p8_t6",
      "target": "sd_root_p8_t6_s4"
    },
    {
      "source": "sd_root_p8_t6_s4",
      "target": "sd_root_p8_t6_s4_d1"
    },
    {
      "source": "sd_root_p8_t6_s4",
      "target": "sd_root_p8_t6_s4_d2"
    },
    {
      "source": "sd_root_p8_t6",
      "target": "sd_root_p8_t6_s5"
    },
    {
      "source": "sd_root_p8_t6_s5",
      "target": "sd_root_p8_t6_s5_d1"
    },
    {
      "source": "sd_root_p8_t6_s5",
      "target": "sd_root_p8_t6_s5_d2"
    }
  ]
};
