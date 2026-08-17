import { ComparisonWorkspaceData } from "../../services/llmService";

export const IAC_FRAMEWORKS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Cloud Infrastructure as Code (IaC): Terraform / OpenTofu vs AWS CDK vs Pulumi vs Crossplane",
  "domainType": "tools",
  "overview": "An IaC comparison evaluating declarative HCL state files (Terraform/OpenTofu), real programming languages (Pulumi/AWS CDK), Kubernetes-native control planes (Crossplane), and state lock management.",
  "recommendedApproach": "Use OpenTofu / Terraform HCL for standard declarative cloud infrastructure; use Pulumi or AWS CDK for TypeScript/Python programming flexibility; use Crossplane for K8s control plane CRDs.",
  "criteria": [
    {
      "id": "c1",
      "label": "Language Model (Declarative HCL vs Real Code vs K8s CRDs)",
      "type": "text",
      "description": "HCL DSL syntax vs TypeScript/Python/Go imperative code vs YAML custom resources."
    },
    {
      "id": "c2",
      "label": "State Management & State Drift Detection",
      "type": "text",
      "description": "Central state file locks (tfstate) vs continuous Kubernetes reconciliation loops."
    },
    {
      "id": "c3",
      "label": "Open Source Governance (OpenTofu vs Terraform BSL)",
      "type": "text",
      "description": "Linux Foundation open-source governance (OpenTofu) vs HashiCorp BSL."
    },
    {
      "id": "c4",
      "label": "Type Safety & IDE Autocompletion",
      "type": "text",
      "description": "Full compiler type checking when refactoring cloud resources."
    },
    {
      "id": "c5",
      "label": "Multi-Cloud Provider Coverage",
      "type": "text",
      "description": "Supporting AWS, Azure, GCP, Cloudflare, Datadog, and Kubernetes providers."
    },
    {
      "id": "c6",
      "label": "Self-Service Developer Platforms",
      "type": "text",
      "description": "Creating reusable infrastructure abstractions for application engineering teams."
    }
  ],
  "options": [
    {
      "id": "opentofu",
      "name": "OpenTofu / Terraform",
      "summary": "The open-source Linux Foundation fork of Terraform providing declarative HCL infrastructure management.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Declarative HCL",
          "note": "Defines infrastructure declaratively in HashiCorp Configuration Language (HCL)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "State File (tfstate)",
          "note": "Tracks resources in state file with plan/apply execution stages."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "MPL 2.0 (Linux Foundation)",
          "note": "Truly open-source fork governed by Linux Foundation."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "HCL LSP Validation",
          "note": "HCL language server provides basic validation."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Gold Standard Coverage",
          "note": "Thousands of community providers for every cloud service."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Reusable Modules",
          "note": "Standard module registry structure."
        }
      },
      "tags": [
        "OpenTofu",
        "Terraform",
        "HCL",
        "Linux Foundation",
        "Standard"
      ]
    },
    {
      "id": "pulumi",
      "name": "Pulumi",
      "summary": "Developer-first IaC platform using real programming languages like TypeScript, Python, Go, and C#.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "TypeScript, Python, Go, C#",
          "note": "Write infrastructure using standard programming languages, loops, conditionals, and classes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Pulumi Cloud State",
          "note": "State managed via free Pulumi Cloud backend or S3 bucket."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Apache 2.0",
          "note": "Open-source core framework."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Compiler Type Safety",
          "note": "Full IDE autocomplete, type checking, unit testing, and refactoring."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Multi-Cloud & Bridge",
          "note": "Uses Pulumi native providers plus Terraform provider bridge."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Component Resources",
          "note": "Create npm/PyPI packages containing enterprise infrastructure templates."
        }
      },
      "tags": [
        "Pulumi",
        "TypeScript",
        "Python",
        "Real-Code",
        "Type-Safe"
      ]
    },
    {
      "id": "crossplane",
      "name": "CNCF Crossplane",
      "summary": "Kubernetes-native control plane framework that turns your cluster into a multi-cloud control plane.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Kubernetes CRDs (YAML)",
          "note": "Defines cloud resources (RDS, S3, VPC) as Kubernetes Custom Resources."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Continuous K8s Reconciliation",
          "note": "Continuously reconciles state drift in real time via Kubernetes controller loops."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "CNCF Incubation",
          "note": "Open-source CNCF project."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "K8s Schema Validation",
          "note": "kubectl and kube-linter validation."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Multi-Cloud Providers",
          "note": "AWS, Azure, and GCP provider pods."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Internal Developer Platforms",
          "note": "Build custom Composite Resource Definitions (XRDs) for internal developer self-service."
        }
      },
      "tags": [
        "Crossplane",
        "CNCF",
        "Kubernetes Native",
        "Continuous Reconciliation"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose OpenTofu / Terraform for standard HCL declarative cloud infrastructure.",
    "Choose Pulumi if your engineering team prefers writing infrastructure in TypeScript or Python.",
    "Choose Crossplane for building Kubernetes-native Internal Developer Platforms (IDPs)."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "IaC Framework Selection",
        "description": "Choosing the Infrastructure as Code platform."
      },
      {
        "id": "p1",
        "label": "Declarative HCL & Linux Foundation Governance",
        "description": "Need standard declarative HCL state management backed by OpenTofu."
      },
      {
        "id": "p2",
        "label": "TypeScript / Python Compiler Type Safety",
        "description": "Need to write infrastructure in real code with full IDE autocomplete and unit tests."
      },
      {
        "id": "p3",
        "label": "Kubernetes Native Continuous Control Plane",
        "description": "Need continuous state drift reconciliation and custom CRDs for internal platforms."
      },
      {
        "id": "e1",
        "label": "OpenTofu / Terraform",
        "description": "Declarative HCL infrastructure standard."
      },
      {
        "id": "e2",
        "label": "Pulumi",
        "description": "Real-code IaC framework supporting TypeScript and Python."
      },
      {
        "id": "e3",
        "label": "CNCF Crossplane",
        "description": "Kubernetes-native cloud control plane framework."
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
