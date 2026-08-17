import { ComparisonWorkspaceData } from "../../services/llmService";

export const DISTRIBUTED_FILE_SYSTEMS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Distributed File Systems & Cluster Storage: Ceph vs GlusterFS vs AWS EFS vs Lustre",
  "domainType": "services",
  "overview": "A storage infrastructure comparison evaluating unified block/object/POSIX file storage, high-throughput parallel I/O, self-hosted Kubernetes Rook operators, and cloud managed NFS.",
  "recommendedApproach": "Use Ceph (via Rook-Ceph operator) for unified block, object, and POSIX storage on Kubernetes; use AWS EFS for managed cloud NFS; use Lustre for HPC supercomputing.",
  "criteria": [
    {
      "id": "c1",
      "label": "Unified Storage Types (Block RBD, Object S3, POSIX CephFS)",
      "type": "text",
      "description": "Providing block devices, S3 object API, and shared POSIX filesystem from single cluster."
    },
    {
      "id": "c2",
      "label": "Kubernetes Storage Orchestration (CSI & Rook Operator)",
      "type": "text",
      "description": "Cloud-native Kubernetes storage operator for dynamic PVC provisioning."
    },
    {
      "id": "c3",
      "label": "Parallel I/O Throughput (GB/s) for HPC",
      "type": "text",
      "description": "High-performance computing parallel file striping across thousands of compute nodes."
    },
    {
      "id": "c4",
      "label": "Self-Healing & CRUSH Data Placement",
      "type": "text",
      "description": "Algorithmic data placement without central metadata bottleneck."
    },
    {
      "id": "c5",
      "label": "Managed Cloud vs Self-Hosted Infrastructure",
      "type": "text",
      "description": "Managed cloud NFS vs bare-metal Linux cluster administration."
    },
    {
      "id": "c6",
      "label": "POSIX Compliance & Shared Multi-Attach (RWX)",
      "type": "text",
      "description": "ReadWriteMany (RWX) volume mounts across multiple pods."
    }
  ],
  "options": [
    {
      "id": "ceph",
      "name": "Ceph (CNCF Rook-Ceph)",
      "summary": "Unified, distributed storage system providing block storage (RBD), object storage (RGW S3), and POSIX file system (CephFS).",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "3-in-1 Unified Storage",
          "note": "Provides block storage (RBD), S3-compatible object storage (RGW), and POSIX filesystem (CephFS)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class (Rook-Ceph)",
          "note": "Rook-Ceph operator automates Ceph deployment and lifecycle management on Kubernetes."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High Throughput",
          "note": "CRUSH map algorithm distributes data across OSDs without central metadata bottlenecks."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Self-Healing",
          "note": "Automatically rebalances and heals data when drives or nodes fail."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Open Source",
          "note": "Deploy on private bare-metal or cloud instances."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "POSIX CephFS (RWX)",
          "note": "CephFS supports ReadWriteMany shared volume mounts in Kubernetes."
        }
      },
      "tags": [
        "Ceph",
        "Rook",
        "Unified Storage",
        "CNCF",
        "Kubernetes"
      ]
    },
    {
      "id": "aws-efs",
      "name": "Amazon EFS",
      "summary": "Fully managed serverless elastic POSIX file system for AWS compute workloads.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "POSIX NFSv4",
          "note": "Managed NFSv4 shared file system."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "AWS EKS CSI Driver",
          "note": "Official AWS EFS CSI driver provisions RWX persistent volumes for EKS."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Elastic Throughput",
          "note": "Auto-scales throughput up to 30+ GB/s based on workload demand."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "AWS Managed Multi-AZ",
          "note": "Replicates data across multiple Availability Zones in AWS region."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Managed Cloud",
          "note": "Zero servers or storage pools to manage; pay per GB-month stored."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Standard POSIX RWX",
          "note": "Simultaneously accessible by thousands of EC2 instances and EKS pods."
        }
      },
      "tags": [
        "AWS EFS",
        "Managed NFS",
        "POSIX",
        "EKS RWX"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy Rook-Ceph on Kubernetes clusters for self-hosted unified block, S3 object, and POSIX file storage.",
    "Use AWS EFS for managed multi-pod ReadWriteMany (RWX) NFS volume mounts in Amazon EKS.",
    "Architect storage pools with replication factors (3x) or erasure coding to guarantee data durability."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Distributed File System Selection",
        "description": "Choosing the cluster storage system."
      },
      {
        "id": "p1",
        "label": "Unified Kubernetes Block, S3 Object, & POSIX Storage",
        "description": "Need self-healing open-source unified storage deployed via CNCF Rook operator."
      },
      {
        "id": "p2",
        "label": "Managed Cloud Serverless NFS for AWS EKS",
        "description": "Need zero-ops managed POSIX NFS for multi-pod ReadWriteMany (RWX) volumes in AWS."
      },
      {
        "id": "e1",
        "label": "Ceph / Rook",
        "description": "CNCF open-source unified distributed storage system."
      },
      {
        "id": "e2",
        "label": "Amazon EFS",
        "description": "Fully managed multi-AZ POSIX NFS file system for AWS."
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
