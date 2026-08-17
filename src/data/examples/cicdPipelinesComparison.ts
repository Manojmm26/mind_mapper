import { ComparisonWorkspaceData } from "../../services/llmService";

export const CICD_PIPELINES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "CI/CD Automation Pipelines: GitHub Actions vs GitLab CI/CD vs CircleCI vs Argo Workflows",
  "domainType": "tools",
  "overview": "A DevOps build pipeline comparison evaluating YAML syntax, matrix builds, self-hosted runners, secret security, and Kubernetes GitOps integration.",
  "recommendedApproach": "Use GitHub Actions for GitHub-hosted repositories; use GitLab CI/CD for self-hosted enterprise Git & pipelines; use Argo Workflows for Kubernetes-native container DAG execution.",
  "criteria": [
    {
      "id": "c1",
      "label": "Ecosystem & Action Marketplace",
      "type": "text",
      "description": "Pre-built reusable pipeline steps (e.g. actions/checkout, setup-node)."
    },
    {
      "id": "c2",
      "label": "Kubernetes Native & GitOps Integration",
      "type": "text",
      "description": "Running steps inside K8s pods natively vs external SSH/kubectl runners."
    },
    {
      "id": "c3",
      "label": "Matrix Builds & Parallel Runner Speed",
      "type": "text",
      "description": "Parallel matrix testing across OS, Node versions, and architecture runners."
    },
    {
      "id": "c4",
      "label": "Self-Hosted Runner Security & Scaling",
      "type": "text",
      "description": "Ephemeral runner pods, actions-runner-controller (ARC), and security isolation."
    },
    {
      "id": "c5",
      "label": "Configuration Syntax & Monorepo Support",
      "type": "text",
      "description": "YAML pipeline syntax, reusable workflows, and path-filtering triggers."
    },
    {
      "id": "c6",
      "label": "Cost Scaling & Free Minutes",
      "type": "text",
      "description": "Cloud runner minute pricing, macOS/Windows multiplier costs, and self-hosted costs."
    }
  ],
  "options": [
    {
      "id": "github-actions",
      "name": "GitHub Actions",
      "summary": "The dominant CI/CD platform integrated natively into GitHub code repositories.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Marketplace",
          "note": "Over 20,000 community actions for AWS, Docker, Vercel, and linters."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Integrates with ArgoCD, Flux, and kubectl via official actions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "Intuitive matrix strategy (strategy.matrix) runs parallel jobs across Linux, macOS, Windows."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Actions Runner Controller",
          "note": "ARC operator auto-scales ephemeral runner pods on Kubernetes."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Clean YAML",
          "note": "Reusable workflows (workflow_call) and composite actions."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "2,000 Free Min/Mo",
          "note": "Generous free minutes for public/private repos; pay per minute afterwards."
        }
      },
      "tags": [
        "GitHub",
        "Marketplace",
        "Matrix",
        "Standard"
      ]
    },
    {
      "id": "gitlab-ci",
      "name": "GitLab CI/CD",
      "summary": "Deeply integrated CI/CD engine built into the GitLab DevOps platform.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "GitLab Components",
          "note": "GitLab CI component catalog and includes (.gitlab-ci.yml)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "GitLab Agent for K8s",
          "note": "Native Kubernetes cluster connection and GitOps pull synchronization."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High Parallelism",
          "note": "Parallel matrix execution and DAG pipeline dependencies."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "GitLab Runner",
          "note": "Versatile GitLab Runner executor for Docker, Kubernetes, or Bare Metal."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Powerful YAML",
          "note": "Extends YAML with includes, rules, and dynamic child pipelines."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Tier-Based",
          "note": "Included in GitLab SaaS tiers or 100% free when self-hosting GitLab."
        }
      },
      "tags": [
        "GitLab",
        "DevOps",
        "Self-Hosted",
        "GitOps"
      ]
    },
    {
      "id": "argo-workflows",
      "name": "Argo Workflows",
      "summary": "Open-source container-native workflow engine for orchestrating parallel jobs on Kubernetes.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Container Native",
          "note": "Every step in the workflow is executed as a native Kubernetes pod."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% K8s Native",
          "note": "Designed specifically for Kubernetes CRDs and Argo ecosystem (ArgoCD)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Massive DAG Scale",
          "note": "Handles massive parallel DAGs for data processing and ML pipelines."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Cluster Security",
          "note": "Executes directly within your private Kubernetes security boundaries."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "K8s CRD YAML",
          "note": "Defined using Kubernetes Custom Resource Definitions."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Zero License Fee",
          "note": "100% free open-source CNCF project; run on your cluster nodes."
        }
      },
      "tags": [
        "Kubernetes",
        "CNCF",
        "Argo",
        "DAG",
        "Container-Native"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt GitHub Actions for repositories hosted on GitHub.",
    "Adopt GitLab CI/CD for self-hosted enterprise GitLab setups.",
    "Use Argo Workflows for complex Kubernetes-native container DAG execution and ML training pipelines.",
    "Set up self-hosted runner scale sets (ARC) on Kubernetes to optimize CI runner costs."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "CI/CD Platform Selection",
        "description": "Choosing the build and deployment pipeline toolchain."
      },
      {
        "id": "p1",
        "label": "GitHub Repositories & Action Marketplace",
        "description": "Need seamless integration with GitHub PRs, reusable actions, and matrix testing."
      },
      {
        "id": "p2",
        "label": "Self-Hosted Enterprise GitLab Stack",
        "description": "Need all-in-one DevOps platform with native Kubernetes GitOps agent."
      },
      {
        "id": "p3",
        "label": "Kubernetes Container-Native DAG Workflows",
        "description": "Running heavy parallel container DAG jobs directly inside Kubernetes cluster."
      },
      {
        "id": "e1",
        "label": "GitHub Actions",
        "description": "Market-leading CI/CD engine integrated into GitHub."
      },
      {
        "id": "e2",
        "label": "GitLab CI/CD",
        "description": "Integrated pipeline engine for GitLab instances."
      },
      {
        "id": "e3",
        "label": "Argo Workflows",
        "description": "Container-native K8s workflow engine for parallel DAGs."
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
