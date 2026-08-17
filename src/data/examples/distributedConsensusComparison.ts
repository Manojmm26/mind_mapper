import { ComparisonWorkspaceData } from "../../services/llmService";

export const DISTRIBUTED_CONSENSUS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed Consensus & Coordination Engines: etcd vs Raft vs Paxos vs ZooKeeper vs Consul",
  "domainType": "concepts",
  "overview": "A distributed systems comparison evaluating consensus protocols (Raft vs Multi-Paxos), quorum read consistency, distributed locking, service discovery, and key-value watch mechanisms.",
  "recommendedApproach": "Use etcd for Kubernetes cluster state and distributed key-value watches; use HashiCorp Consul for service discovery & health checks; implement Raft (via SOFAJRaft / Braft) for custom distributed databases.",
  "criteria": [
    {
      "id": "c1",
      "label": "Underlying Consensus Protocol",
      "type": "text",
      "description": "Raft leader election & log replication vs Multi-Paxos vs Zab (ZooKeeper Atomic Broadcast)."
    },
    {
      "id": "c2",
      "label": "Read/Write Linearizability & Quorum Guarantees",
      "type": "text",
      "description": "Strict linearizable reads (ReadIndex / LeaseRead) and majority quorum writes."
    },
    {
      "id": "c3",
      "label": "Key-Value Event Watcher Efficiency",
      "type": "text",
      "description": "HTTP/2 gRPC streaming key range watches vs long-polling."
    },
    {
      "id": "c4",
      "label": "Primary Ecosystem Integration",
      "type": "text",
      "description": "Kubernetes backing database (etcd) vs Kafka metadata / Hadoop (ZooKeeper) vs Consul mesh."
    },
    {
      "id": "c5",
      "label": "Distributed Locks & Session Lease Management",
      "type": "text",
      "description": "TTL lease keep-alive loops for distributed lock managers."
    },
    {
      "id": "c6",
      "label": "Operational Footprint & Language",
      "type": "text",
      "description": "Go single binary vs Java JVM cluster maintenance."
    }
  ],
  "options": [
    {
      "id": "etcd",
      "name": "etcd (CNCF)",
      "summary": "Strongly consistent, distributed key-value store powered by Raft that stores the configuration state of Kubernetes.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Raft Protocol",
          "note": "Pioneered production adoption of the Raft consensus algorithm."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Strict Linearizability",
          "note": "Guarantees linearizable reads and writes via majority quorums."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (gRPC Watch)",
          "note": "Efficient HTTP/2 gRPC streaming watches notify clients instantly on key changes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Kubernetes Backbone",
          "note": "Stores entire cluster state (nodes, pods, secrets, CRDs) for every K8s cluster."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Lease Architecture",
          "note": "TTL leases allow atomic distributed locks with automatic heartbeat renewal."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Go Single Binary",
          "note": "Lightweight Go binary deployable via etcdadm or Helm."
        }
      },
      "tags": [
        "etcd",
        "Raft",
        "Kubernetes",
        "gRPC",
        "CNCF"
      ]
    },
    {
      "id": "zookeeper",
      "name": "Apache ZooKeeper",
      "summary": "Centralized service for maintaining configuration information, naming, and distributed synchronization.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zab Protocol",
          "note": "Uses ZooKeeper Atomic Broadcast (Zab) consensus protocol."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Sequential Consistency",
          "note": "Provides ordered update guarantees across nodes."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Watcher Events",
          "note": "One-time watches notify clients of znode node modifications."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Hadoop & Legacy Kafka",
          "note": "Historically backed Apache Kafka, Hadoop, and HBase (Kafka now uses KRaft)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Ephemeral Znodes",
          "note": "Ephemeral znodes automatically delete when client session drops, implementing locks."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Java JVM Cluster",
          "note": "Requires managing Java JVM memory and heap garbage collection."
        }
      },
      "tags": [
        "ZooKeeper",
        "Zab",
        "Java",
        "Hadoop"
      ]
    },
    {
      "id": "consul",
      "name": "HashiCorp Consul",
      "summary": "Distributed service networking platform offering service discovery, health checking, and KV configuration.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Raft + Serf Gossip",
          "note": "Combines Raft for WAN consensus with Serf gossip protocol for membership."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Strong Consistency",
          "note": "Supports default, consistent, and stale read modes."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Long-Polling / HTTP",
          "note": "Blocking HTTP queries watch for service health and KV changes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Service Discovery & Mesh",
          "note": "Built specifically for multi-datacenter service discovery and DNS routing."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Session Locks",
          "note": "Built-in session management for leader election."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Go Binary",
          "note": "Single binary deployable across multi-cloud infrastructure."
        }
      },
      "tags": [
        "Consul",
        "Raft",
        "Service Discovery",
        "HashiCorp"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use etcd for Kubernetes state management and custom gRPC streaming key-value watches.",
    "Use Consul for multi-cloud service discovery, DNS health checks, and KV configuration.",
    "Study Raft paper (Ongaro & Ousterhout) to understand leader election and log replication."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Distributed Consensus Selection",
        "description": "Choosing the distributed coordination engine."
      },
      {
        "id": "p1",
        "label": "Kubernetes State & gRPC Key-Value Watch",
        "description": "Need Raft-based key-value store with gRPC streaming watches for cluster state."
      },
      {
        "id": "p2",
        "label": "Multi-Datacenter Service Discovery & DNS",
        "description": "Need Raft + Gossip protocol for service health checks and dynamic DNS routing."
      },
      {
        "id": "p3",
        "label": "Legacy Hadoop / Big Data Ecosystem",
        "description": "Need Java znode tree for legacy Apache distributed systems."
      },
      {
        "id": "e1",
        "label": "etcd",
        "description": "CNCF Raft-based key-value store powering Kubernetes."
      },
      {
        "id": "e2",
        "label": "HashiCorp Consul",
        "description": "Service discovery and health check platform with Raft consensus."
      },
      {
        "id": "e3",
        "label": "Apache ZooKeeper",
        "description": "Java Zab protocol engine for big data coordination."
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
      }
    ]
  }
};
