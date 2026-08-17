import { ComparisonWorkspaceData } from "../../services/llmService";

export const DISTRIBUTED_LOCKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed Lock Backends: Redlock (Redis) vs etcd Lease Lock vs Postgres Advisory Locks",
  "domainType": "tools",
  "overview": "A distributed system coordination evaluation comparing multi-node Redis Redlock, etcd Raft linearizable TTL lease locks, and PostgreSQL advisory locks.",
  "recommendedApproach": "Use etcd Lease Lock for strictly linearizable Raft distributed locks; use Postgres Advisory Locks for simple single-DB transaction locking; use Redis Redlock with fencing tokens for high-speed caching locks.",
  "criteria": [
    {
      "id": "c1",
      "label": "Consensus Protocol & Linearizable Guarantees",
      "type": "text",
      "description": "Raft majority quorum consensus vs multi-node Redis asynchronous replication."
    },
    {
      "id": "c2",
      "label": "Fencing Tokens & Clock Drift Vulnerability",
      "type": "text",
      "description": "Susceptibility to system clock jumps and process pause GC STW vulnerabilities."
    },
    {
      "id": "c3",
      "label": "Lock TTL & Auto-Renewal Keep-Alive",
      "type": "text",
      "description": "Automatic background heartbeat threads extending lock expiration during active execution."
    },
    {
      "id": "c4",
      "label": "Lock Acquisition Speed & Latency (ms)",
      "type": "text",
      "description": "In-memory Redis speed vs etcd gRPC quorum latency."
    },
    {
      "id": "c5",
      "label": "Infrastructure Overhead (Existing DB vs Dedicated Cluster)",
      "type": "text",
      "description": "Using existing Postgres/Redis infrastructure vs deploying etcd cluster."
    },
    {
      "id": "c6",
      "label": "Correctness Guarantees (Martin Kleppmann Analysis)",
      "type": "text",
      "description": "Proven safety guarantees for critical financial transactions."
    }
  ],
  "options": [
    {
      "id": "etcd-lock",
      "name": "etcd Lease Lock (Raft)",
      "summary": "Strongly consistent distributed lock mechanism backed by etcd Raft consensus and TTL leases.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Raft Quorum)",
          "note": "Uses Raft consensus algorithm guaranteeing strict linearizable lock ownership across nodes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Immune to Clock Drift",
          "note": "Raft leader lease reads eliminate system clock jump vulnerabilities."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Automatic Keep-Alive Lease",
          "note": "Client heartbeat loop automatically extends lease; revokes instantly if client crashes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Fast (Sub-10ms gRPC)",
          "note": "gRPC streaming watch notifies waiters instantly when lock is released."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "K8s Infra / Dedicated",
          "note": "Utilizes existing etcd cluster or dedicated 3-node etcd cluster."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Proven Correctness",
          "note": "Proven safety for critical Kubernetes and enterprise state locking."
        }
      },
      "tags": [
        "etcd",
        "Raft",
        "Distributed Lock",
        "Linearizable",
        "CNCF"
      ]
    },
    {
      "id": "postgres-advisory-lock",
      "name": "Postgres Advisory Locks",
      "summary": "Application-defined locks managed entirely within PostgreSQL using pg_advisory_lock().",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Postgres ACID Transaction",
          "note": "Tied to PostgreSQL database session or transaction lifespan."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Immune to Clock Drift",
          "note": "Managed by central Postgres server process."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Session / Transaction Bound",
          "note": "Lock is automatically released when SQL transaction commits or session drops."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Fast (Database Connection)",
          "note": "Sub-millisecond lock acquisition via standard SQL query."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Zero Extra Infra",
          "note": "Leverages existing PostgreSQL database without deploying extra services."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Safe for Single Postgres DB",
          "note": "Extremely safe for applications already using PostgreSQL."
        }
      },
      "tags": [
        "Postgres",
        "Advisory Lock",
        "Zero Infra",
        "ACID",
        "SQL"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use etcd Lease Locks for distributed systems requiring strict Raft linearizable safety guarantees.",
    "Use Postgres Advisory Locks (`pg_advisory_lock`) for application locking when already running PostgreSQL.",
    "Always use monotonic fencing tokens when accessing shared resources protected by distributed locks."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Distributed Lock Selection",
        "description": "Choosing the distributed lock backend."
      },
      {
        "id": "p1",
        "label": "Strict Raft Linearizable Safety & Fencing Tokens",
        "description": "Need etcd Raft consensus with TTL lease keep-alive heartbeats for critical distributed coordination."
      },
      {
        "id": "p2",
        "label": "Zero-Infra Single Postgres Database Transaction Locks",
        "description": "Need Postgres advisory locks (pg_advisory_lock) tied to SQL transaction lifespans with zero extra servers."
      },
      {
        "id": "e1",
        "label": "etcd Lease Lock",
        "description": "Raft-based strongly consistent distributed lock."
      },
      {
        "id": "e2",
        "label": "Postgres Advisory Lock",
        "description": "PostgreSQL in-database advisory lock."
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
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      }
    ]
  }
};
