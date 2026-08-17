import { ComparisonWorkspaceData } from "../../services/llmService";

export const CONTAINER_ORCHESTRATION_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Container Orchestration & Compute Platforms: Kubernetes vs AWS ECS vs Nomad vs Fly.io vs Render",
  "domainType": "tools",
  "overview": "A comprehensive comparison of container deployment platforms evaluating operational complexity, multi-cloud flexibility, autoscaling, edge distribution, and total cost of ownership.",
  "recommendedApproach": "Use Kubernetes (EKS/GKE) for large enterprise microservices; use AWS ECS for simpler AWS-native container management; use Fly.io or Render for rapid developer velocity and edge deployments.",
  "criteria": [
    {
      "id": "c1",
      "label": "Operational Complexity & Day-2 Ops",
      "type": "text",
      "description": "Effort required to manage control planes, upgrades, and cluster health."
    },
    {
      "id": "c2",
      "label": "Autoscaling & Resource Scheduling",
      "type": "text",
      "description": "Capabilities for HPA, VPA, scale-to-zero, and spot instance scheduling."
    },
    {
      "id": "c3",
      "label": "Multi-Cloud & On-Premises Portability",
      "type": "text",
      "description": "Freedom to deploy across any cloud vendor or bare-metal data center."
    },
    {
      "id": "c4",
      "label": "Developer Velocity & Friction",
      "type": "text",
      "description": "Speed from code push to live staging/production deployment."
    },
    {
      "id": "c5",
      "label": "Ecosystem & Helm/IaC Tooling",
      "type": "text",
      "description": "Abundance of pre-packaged Helm charts, operators, and Terraform modules."
    },
    {
      "id": "c6",
      "label": "Cost Model & Overheads",
      "type": "text",
      "description": "Base cluster management fees, minimum node counts, and egress costs."
    }
  ],
  "options": [
    {
      "id": "k8s",
      "name": "Kubernetes (EKS / GKE / AKS)",
      "summary": "The de facto industry standard for container orchestration with unmatched flexibility and ecosystem.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "note": "Requires dedicated SRE expertise for ingress, mesh, and storage drivers."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Outstanding",
          "note": "Karpenter, KEDA, and HPA enable precise event-driven and node autoscaling."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% Portable",
          "note": "Runs identically on AWS, GCP, Azure, and bare-metal servers."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Moderate",
          "note": "YAML boilerplate and complex CRDs can slow down initial app setup."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Unmatched",
          "note": "Thousands of Helm charts, operators (ArgoCD, Istio, Cert-Manager)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Variable",
          "note": "Control plane fees (~$73/mo per cluster) plus worker node reserves."
        }
      },
      "tags": [
        "Standard",
        "Helm",
        "Cloud-Native",
        "K8s"
      ]
    },
    {
      "id": "ecs",
      "name": "AWS ECS (Fargate / EC2)",
      "summary": "AWS's deep-integrated container management service offering simplicity without K8s complexity.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Low (Fargate)",
          "note": "Fargate eliminates node management and cluster upgrades entirely."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Target tracking scaling linked directly to CloudWatch metrics."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "AWS Locked",
          "note": "ECS Anywhere exists, but primary value is within AWS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "note": "Simpler task definitions compared to Kubernetes manifests."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "AWS-Centric",
          "note": "Seamless integration with IAM, ALB, CloudWatch, and Secrets Manager."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Predictable",
          "note": "No cluster fee for ECS; pay only for Fargate vCPU/RAM or EC2 instances."
        }
      },
      "tags": [
        "AWS",
        "Fargate",
        "Simple",
        "Enterprise"
      ]
    },
    {
      "id": "nomad",
      "name": "HashiCorp Nomad",
      "summary": "A simple and flexible orchestrator that schedules both containerized and non-containerized workloads.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Low",
          "note": "Single binary installation with minimal operational overhead."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good",
          "note": "Fast scheduling algorithm handling 10,000+ nodes efficiently."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% Portable",
          "note": "Deploys on any cloud or bare-metal; handles legacy Windows/Linux binaries."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "High",
          "note": "Clean HCL job files are much easier to read than K8s manifests."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "HashiCorp Stack",
          "note": "Tight native integration with Consul (mesh) and Vault (secrets)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Cost-Efficient",
          "note": "Zero control plane fee; minimal memory footprint on nodes."
        }
      },
      "tags": [
        "HashiCorp",
        "HCL",
        "Lightweight",
        "Bare-Metal"
      ]
    },
    {
      "id": "fly",
      "name": "Fly.io",
      "summary": "An edge application platform that transforms Docker containers into global microVMs near users.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Ops",
          "note": "Managed Firecracker microVM infrastructure with automatic TLS and routing."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Scale-to-Zero",
          "note": "Auto-starts and stops microVMs based on incoming HTTP request concurrency."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Proprietary Edge",
          "note": "Deploys onto Fly.io global hardware network across 30+ regions."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Outstanding",
          "note": "'fly launch' converts Dockerfiles into global deployments in seconds."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "PaaS Tooling",
          "note": "Managed Postgres, Redis (Upstash), and volume attachments."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Usage-Based",
          "note": "Pay strictly for VM uptime and egress bandwidth; generous free allowance."
        }
      },
      "tags": [
        "Edge",
        "Firecracker",
        "PaaS",
        "Global"
      ]
    },
    {
      "id": "render",
      "name": "Render",
      "summary": "A modern unified cloud platform providing Heroku-like simplicity with container power.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Zero Ops",
          "note": "Fully managed platform for web services, static sites, background workers, and DBs."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good",
          "note": "Autoscaling based on CPU and memory utilization thresholds."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Managed Platform",
          "note": "Hosted infrastructure with automatic SSL and DDoS protection."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class",
          "note": "Git push to deploy with zero configuration required."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Simple IaC",
          "note": "render.yaml blueprint files manage full multi-service stacks."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Predictable Flat Rates",
          "note": "Clear instance pricing tiers per month without surprising line items."
        }
      },
      "tags": [
        "Heroku-Alternative",
        "Git-Push",
        "PaaS",
        "DX"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Audit team DevOps capacity (Do you have dedicated K8s SREs?).",
    "Determine if workloads require multi-cloud portability or multi-region edge latency.",
    "Run a pilot deployment using Render/Fly.io vs EKS/ECS.",
    "Calculate Total Cost of Ownership (TCO) including management fees and engineer hours."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Container Platform Decision",
        "description": "Choosing between Kubernetes, ECS, Nomad, and modern PaaS platforms."
      },
      {
        "id": "p1",
        "label": "Enterprise & Multi-Cloud Standard",
        "description": "Need universal portability, Helm charts, and custom operators."
      },
      {
        "id": "p2",
        "label": "AWS-Centric Infrastructure",
        "description": "Deeply committed to AWS IAM, VPCs, and managed services."
      },
      {
        "id": "p3",
        "label": "Lightweight / Non-Container Workloads",
        "description": "Desire simple HCL orchestrator for bare metal or mixed binaries."
      },
      {
        "id": "p4",
        "label": "Instant DX & Global Edge",
        "description": "Small team prioritizing rapid shipping, zero cold-starts, or edge microVMs."
      },
      {
        "id": "e1",
        "label": "Kubernetes (GKE/EKS)",
        "description": "De facto standard for large-scale microservice fleets."
      },
      {
        "id": "e2",
        "label": "AWS ECS Fargate",
        "description": "Serverless container tasks directly inside AWS VPCs."
      },
      {
        "id": "e3",
        "label": "HashiCorp Nomad",
        "description": "Single-binary orchestrator for containers and legacy executables."
      },
      {
        "id": "e4",
        "label": "Fly.io / Render",
        "description": "Zero-ops developer platforms with fast Git-push deployments."
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
        "source": "root",
        "target": "p4"
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
      },
      {
        "source": "p4",
        "target": "e4"
      }
    ]
  }
};
