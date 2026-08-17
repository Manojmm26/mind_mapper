import { ComparisonWorkspaceData } from "../../services/llmService";

export const CONTAINER_REGISTRIES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Container Image Registries: GitHub Container Registry (GHCR) vs Amazon ECR vs Docker Hub vs Harbor",
  "domainType": "tools",
  "overview": "A container security and infrastructure evaluation comparing OCI image registries, vulnerability scanning (Trivy/Clair), geo-replication, and IAM access integration.",
  "recommendedApproach": "Use GHCR for GitHub Actions CI/CD pipelines; use Amazon ECR for AWS EKS/ECS cluster deployments; use Harbor for self-hosted enterprise Kubernetes compliance and security scanning.",
  "criteria": [
    {
      "id": "c1",
      "label": "OCI Spec Support & Helm Chart Artifacts",
      "type": "text",
      "description": "Storing OCI container images, Helm charts, and WASM modules in unified registry."
    },
    {
      "id": "c2",
      "label": "Built-in Vulnerability Scanning (Trivy / Clair)",
      "type": "text",
      "description": "Automatic CVE vulnerability scanning on image push and continuous database updates."
    },
    {
      "id": "c3",
      "label": "IAM & Cloud Infrastructure Integration",
      "type": "text",
      "description": "IAM role-based authentication vs personal access tokens."
    },
    {
      "id": "c4",
      "label": "Geo-Replication & Multi-Region Caching",
      "type": "text",
      "description": "Replicating image layers across global cloud regions for fast K8s pod pulls."
    },
    {
      "id": "c5",
      "label": "Deployment Model (Self-Hosted vs Cloud)",
      "type": "text",
      "description": "Managed cloud registry vs open-source self-hosted enterprise deployment."
    },
    {
      "id": "c6",
      "label": "Rate Limits & Pricing",
      "type": "text",
      "description": "Anonymous pull limits, storage pricing, and data transfer costs."
    }
  ],
  "options": [
    {
      "id": "ghcr",
      "name": "GitHub Container Registry (GHCR)",
      "summary": "OCI-compliant container registry integrated directly into GitHub Packages and Actions.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Full OCI Support",
          "note": "Stores Docker/OCI images, Helm charts, and build cache layers."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "GitHub Dependabot / CodeQL",
          "note": "Integrates with GitHub security advisories and container scanning actions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "GitHub Actions GITHUB_TOKEN",
          "note": "Zero-config authentication inside GitHub Actions workflows."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Global CDN",
          "note": "Fast global image pull speeds backed by GitHub CDN."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Cloud SaaS",
          "note": "Hosted directly inside GitHub."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Free for Public / Included",
          "note": "Free for public images; included storage allowance for private orgs."
        }
      },
      "tags": [
        "GHCR",
        "GitHub",
        "OCI",
        "Actions"
      ]
    },
    {
      "id": "amazon-ecr",
      "name": "Amazon ECR",
      "summary": "Fully managed AWS container registry providing high performance, security, and multi-region replication.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "OCI & Helm",
          "note": "Supports Docker images, OCI artifacts, and Helm charts."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Enhanced Inspector Scanning",
          "note": "Uses Amazon Inspector (powered by Clair) for continuous CVE scanning."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "AWS IAM Native",
          "note": "Authenticate via IAM roles (EKS service accounts, ECS task execution roles)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Cross-Region Replication",
          "note": "Automated asynchronous multi-region and multi-account image replication."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "AWS Managed",
          "note": "Fully managed cloud service with 99.9% SLA."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "$0.10 / GB Storage",
          "note": "Free data transfer into EKS/ECS within same AWS region."
        }
      },
      "tags": [
        "AWS ECR",
        "EKS",
        "Inspector",
        "IAM"
      ]
    },
    {
      "id": "harbor",
      "name": "CNCF Harbor",
      "summary": "An open-source trusted cloud native container registry that stores, scans, and signs artifacts.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "CNCF Graduated OCI",
          "note": "Stores OCI images, Helm charts, and Cosign digital signatures."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Trivy & Clair Built-in",
          "note": "Integrated Trivy scanner blocks vulnerable images from deployment."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "OIDC / LDAP / RBAC",
          "note": "Deep RBAC, enterprise LDAP, and OIDC identity integration."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Registry Replication",
          "note": "Replicates images between self-hosted Harbor instances and cloud registries."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Self-Hosted K8s",
          "note": "Deploy on private Kubernetes clusters via Helm chart."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Zero License Fee",
          "note": "100% free open-source CNCF graduated project."
        }
      },
      "tags": [
        "Harbor",
        "CNCF",
        "Trivy",
        "Self-Hosted",
        "Security"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use GHCR for GitHub-centric CI/CD build pipelines and public open-source images.",
    "Use Amazon ECR for workloads deploying to AWS EKS and ECS clusters.",
    "Deploy CNCF Harbor on private Kubernetes clusters for strict enterprise security and image signing."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Container Registry Selection",
        "description": "Choosing the OCI container image registry and vulnerability scanner."
      },
      {
        "id": "p1",
        "label": "GitHub Actions CI/CD Integration",
        "description": "Need zero-config authentication with GITHUB_TOKEN inside GitHub workflows."
      },
      {
        "id": "p2",
        "label": "AWS EKS / ECS Native IAM Roles",
        "description": "Need cross-region replication and IAM authentication for AWS clusters."
      },
      {
        "id": "p3",
        "label": "Self-Hosted Enterprise Kubernetes & Trivy Scanning",
        "description": "Need 100% open-source CNCF registry with image signing and Trivy CVE enforcement."
      },
      {
        "id": "e1",
        "label": "GitHub Container Registry (GHCR)",
        "description": "GitHub integrated OCI registry."
      },
      {
        "id": "e2",
        "label": "Amazon ECR",
        "description": "Managed AWS container registry with IAM and Inspector scanning."
      },
      {
        "id": "e3",
        "label": "CNCF Harbor",
        "description": "Open-source self-hosted enterprise registry with Trivy scanner."
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
