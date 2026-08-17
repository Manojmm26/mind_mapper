import { ComparisonWorkspaceData } from "../../services/llmService";

export const OBJECT_STORAGE_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Cloud Object Storage & Blob Repositories: Amazon S3 vs Cloudflare R2 vs Google Cloud Storage vs MinIO",
  "domainType": "services",
  "overview": "A comparative evaluation of cloud blob storage solutions analyzing egress bandwidth fees, S3 API compatibility, global edge distribution, self-hosting, and data durability.",
  "recommendedApproach": "Use Cloudflare R2 to eliminate bandwidth egress fees for public assets & media; use Amazon S3 for 11 9s durability and deep AWS service integration; use MinIO for self-hosted Kubernetes object storage.",
  "criteria": [
    {
      "id": "c1",
      "label": "Bandwidth Egress Fees ($/GB)",
      "type": "text",
      "description": "Data transfer fees charged when downloading files or streaming video to users."
    },
    {
      "id": "c2",
      "label": "Amazon S3 API Compatibility",
      "type": "text",
      "description": "Support for S3 SDKs, signed URLs, multipart uploads, and bucket policies."
    },
    {
      "id": "c3",
      "label": "Storage Class Lifecycle Policies",
      "type": "text",
      "description": "Automatic transition to Glacier, Coldline, or Archive storage tiers."
    },
    {
      "id": "c4",
      "label": "Data Durability & Multi-Region Replication",
      "type": "text",
      "description": "99.999999999% (11 9s) durability and cross-region replication."
    },
    {
      "id": "c5",
      "label": "Edge Execution & Worker Integration",
      "type": "text",
      "description": "Direct binding to edge compute functions (Cloudflare Workers, Lambda@Edge)."
    },
    {
      "id": "c6",
      "label": "Self-Hosted & Kubernetes Autonomy",
      "type": "text",
      "description": "Deployable on private bare-metal or K8s clusters via S3 API."
    }
  ],
  "options": [
    {
      "id": "cloudflare-r2",
      "name": "Cloudflare R2",
      "summary": "Zero egress fee object storage compatible with Amazon S3 APIs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Egress Fees ($0/GB)",
          "note": "Eliminates network egress charges entirely; pay only for storage GBs and write operations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "High S3 API Parity",
          "note": "Supports S3 API calls, pre-signed URLs, and multipart uploads via AWS SDKs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Basic Lifecycle",
          "note": "Supports automatic object expiration rules."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Global Anycast",
          "note": "Replicates objects across Cloudflare's global edge network automatically."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class (Workers)",
          "note": "Direct zero-latency Javascript binding (env.MY_BUCKET) inside Cloudflare Workers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Cloud SaaS",
          "note": "Managed cloud service."
        }
      },
      "tags": [
        "Cloudflare R2",
        "Zero-Egress",
        "S3-Compatible",
        "Edge"
      ]
    },
    {
      "id": "amazon-s3",
      "name": "Amazon S3",
      "summary": "The industry-standard object storage service offering unmatched durability, security, and storage tiers.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "$0.09 / GB Egress",
          "note": "Standard cloud egress fees apply unless downloading within same AWS region."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "The Gold Standard",
          "note": "Pioneered the object storage API standard used across the web."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unmatched Tiers",
          "note": "S3 Standard, Intelligent-Tiering, Glacier Flexible, Glacier Deep Archive ($0.00099/GB)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "11 Nines (99.999999999%)",
          "note": "Industry benchmark for enterprise data durability across multiple AZs."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "S3 Event Notifications",
          "note": "Triggers AWS Lambda, SQS, and SNS directly on object upload/delete."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "AWS Outposts",
          "note": "Managed AWS regional service."
        }
      },
      "tags": [
        "Amazon S3",
        "11 Nines",
        "Glacier",
        "Industry Standard"
      ]
    },
    {
      "id": "minio",
      "name": "MinIO",
      "summary": "High-performance, Kubernetes-native open-source object storage suite.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Egress (Self-Hosted)",
          "note": "Runs on your infrastructure; zero bandwidth charges."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Strict S3 Compliance",
          "note": "Verified 100% S3 API compatibility test suite."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Tiering Support",
          "note": "Tiers cold data to AWS S3, Google Cloud Storage, or Azure Blob."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Erasure Coding",
          "note": "Reed-Solomon erasure coding protects data against multiple drive/node losses."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Webhook Notifications",
          "note": "Triggers Webhooks, Kafka, and NATS events on bucket changes."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% Self-Hosted K8s",
          "note": "Deploy on private Kubernetes clusters via MinIO Operator."
        }
      },
      "tags": [
        "MinIO",
        "Self-Hosted",
        "Kubernetes",
        "Open-Source"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Cloudflare R2 for user-uploaded media and public assets to eliminate egress bandwidth bills.",
    "Use Amazon S3 for enterprise compliance archives and deep integration with AWS Lambda/Glacier.",
    "Deploy MinIO on Kubernetes for private, air-gapped high-performance S3 object storage."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Object Storage Selection",
        "description": "Choosing cloud blob storage for files and media."
      },
      {
        "id": "p1",
        "label": "Zero Egress Fees for Public Media & CDN",
        "description": "Need S3 API compatibility without paying $0.09/GB egress bandwidth charges."
      },
      {
        "id": "p2",
        "label": "11 Nines Durability & Glacier Archiving",
        "description": "Need maximum enterprise durability, AWS integration, and cheap long-term archiving."
      },
      {
        "id": "p3",
        "label": "Self-Hosted Private Kubernetes Cluster",
        "description": "Need private S3 object storage deployed on bare-metal or private clouds via MinIO."
      },
      {
        "id": "e1",
        "label": "Cloudflare R2",
        "description": "Zero egress fee S3-compatible object storage."
      },
      {
        "id": "e2",
        "label": "Amazon S3",
        "description": "Industry benchmark with 11 9s durability and Glacier tiers."
      },
      {
        "id": "e3",
        "label": "MinIO",
        "description": "High-performance open-source self-hosted K8s object storage."
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
