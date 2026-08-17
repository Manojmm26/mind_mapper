import { ComparisonWorkspaceData } from "../../services/llmService";

export const CD_PROGRESSIVE_ROLLOUTS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Continuous Deployment & GitOps: ArgoCD vs FluxCD vs Flagger",
  "domainType": "tools",
  "overview": "A Kubernetes deployment evaluation comparing pull-based GitOps controllers (ArgoCD/FluxCD), automated canary/blue-green rollouts (Flagger/Argo Rollouts), and multi-cluster synchronization.",
  "recommendedApproach": "Use ArgoCD + Argo Rollouts for visual GitOps dashboarding and canary rollouts; use FluxCD for lightweight headless GitOps controllers; use Flagger for Linkerd/Istio progressive delivery.",
  "criteria": [
    {
      "id": "c1",
      "label": "GitOps Architecture (Pull-Based Reconciliation)",
      "type": "text",
      "description": "Kubernetes cluster polling Git repositories directly to eliminate external SSH/kubectl access."
    },
    {
      "id": "c2",
      "label": "Visual Web UI & Application Tree Inspection",
      "type": "text",
      "description": "Interactive Web UI displaying real-time Kubernetes resource health trees."
    },
    {
      "id": "c3",
      "label": "Progressive Canary & Blue-Green Rollouts",
      "type": "text",
      "description": "Automated percentage traffic shifts based on Prometheus error rate metrics."
    },
    {
      "id": "c4",
      "label": "Multi-Cluster & Multi-Tenant Management",
      "type": "text",
      "description": "Managing hundreds of remote Kubernetes clusters from single control plane."
    },
    {
      "id": "c5",
      "label": "Helm & Kustomize Support",
      "type": "text",
      "description": "Native rendering of Helm charts and Kustomize overlays."
    },
    {
      "id": "c6",
      "label": "CNCF Standardization & Governance",
      "type": "text",
      "description": "Graduated CNCF status and neutral community backing."
    }
  ],
  "options": [
    {
      "id": "argocd",
      "name": "ArgoCD & Argo Rollouts",
      "summary": "The premier CNCF graduated declarative GitOps continuous delivery tool for Kubernetes.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pull-Based GitOps",
          "note": "ArgoCD controller monitors Git repos and automatically syncs cluster state."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Web UI",
          "note": "Provides a rich visual Web UI displaying pod health trees, sync status, and diffs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Argo Rollouts Addon",
          "note": "Argo Rollouts custom controller enables advanced Canary, Blue-Green, and Analysis runs."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Multi-Cluster Standard",
          "note": "ArgoCD ApplicationSets manage deployments across hundreds of Kubernetes clusters."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Helm, Kustomize, Jsonnet",
          "note": "Native support for Helm, Kustomize, and plain YAML."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "100% open-source CNCF graduated project."
        }
      },
      "tags": [
        "ArgoCD",
        "GitOps",
        "CNCF",
        "Visual UI",
        "Canary Rollouts"
      ]
    },
    {
      "id": "fluxcd",
      "name": "FluxCD (Flux v2)",
      "summary": "Set of continuous and progressive delivery solutions for Kubernetes powered by the GitOps Toolkit.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Modular GitOps Toolkit",
          "note": "Composed of dedicated Kubernetes controllers (source-controller, kustomize-controller, helm-controller)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Headless CLI Focus",
          "note": "Headless design focused on GitOps CRDs and CLI commands (Weave GitOps provides UI)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Flagger Integration",
          "note": "Integrates with Flagger for progressive delivery."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Multi-Tenancy",
          "note": "Native Kubernetes RBAC multi-tenancy."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Helm & Kustomize Controllers",
          "note": "Dedicated HelmController handles complex Helm releases."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "CNCF Graduated",
          "note": "100% open-source CNCF graduated project."
        }
      },
      "tags": [
        "FluxCD",
        "GitOps",
        "CNCF",
        "Headless",
        "K8s Toolkit"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt ArgoCD for visual GitOps application deployment management across Kubernetes clusters.",
    "Pair ArgoCD with Argo Rollouts to automate progressive Canary traffic shifting based on Prometheus error rates.",
    "Enforce GitOps pull-based synchronization to eliminate direct kubectl write access in CI/CD pipelines."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Continuous Deployment Selection",
        "description": "Choosing the GitOps deployment engine."
      },
      {
        "id": "p1",
        "label": "Visual GitOps Web UI & Progressive Canary Rollouts",
        "description": "Need rich visual cluster UI and automated Canary traffic shifting via Argo Rollouts."
      },
      {
        "id": "p2",
        "label": "Modular Headless GitOps Toolkit",
        "description": "Need lightweight modular controllers (source-controller, helm-controller) for headless GitOps."
      },
      {
        "id": "e1",
        "label": "ArgoCD",
        "description": "CNCF graduated GitOps engine with visual Web UI."
      },
      {
        "id": "e2",
        "label": "FluxCD",
        "description": "CNCF graduated modular GitOps controller toolkit."
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
