import { ComparisonWorkspaceData } from "../../services/llmService";

export const ARCHITECTURAL_TOPOLOGIES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Enterprise Architectural Topologies: Modular Monolith vs Microservices vs Event-Driven (EDA) vs Cell-Based",
  "domainType": "concepts",
  "overview": "A high-level enterprise architecture comparison evaluating blast radius isolation, operational complexity, team velocity, data consistency, and cloud infrastructure costs.",
  "recommendedApproach": "Use Modular Monolith for early-stage & medium products wanting single-deploy velocity; use Microservices for large multi-team domains; use Cell-Based for mission-critical fault isolation.",
  "criteria": [
    {
      "id": "c1",
      "label": "Operational Complexity & Deployment Velocity",
      "type": "text",
      "description": "Single CI/CD artifact deploy vs managing dozens of Kubernetes service deployments."
    },
    {
      "id": "c2",
      "label": "Blast Radius & Fault Isolation",
      "type": "text",
      "description": "Single crash taking down app vs isolated service failure boundaries."
    },
    {
      "id": "c3",
      "label": "Data Consistency & Transaction Boundaries",
      "type": "text",
      "description": "Single ACID database vs distributed eventual consistency."
    },
    {
      "id": "c4",
      "label": "Independent Team Ownership & Scaling",
      "type": "text",
      "description": "Autonomous team code ownership and independent service release cycles."
    },
    {
      "id": "c5",
      "label": "Infrastructure & Network Latency Cost",
      "type": "text",
      "description": "In-memory function calls vs network RPC serialization overhead."
    },
    {
      "id": "c6",
      "label": "Scale Boundary (Users & Engineers)",
      "type": "text",
      "description": "Optimal team size and user load for each architectural topology."
    }
  ],
  "options": [
    {
      "id": "modular-monolith",
      "name": "Modular Monolith",
      "summary": "Single deployment unit structured internally into strictly encapsulated, independent domain modules.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class Velocity",
          "note": "Deploys as a single application binary; zero complex distributed infrastructure management."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Shared Process",
          "note": "Uncaught fatal crash affects process; mitigated by modular boundaries and unit tests."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% ACID Database",
          "note": "Uses single database instance allowing seamless ACID transactions across modules."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Enforced Module Boundaries",
          "note": "Strict internal code boundaries (e.g. DDD contexts) prevent spaghetti code."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Zero Network Latency",
          "note": "Inter-module calls are 0ms in-memory function calls."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "1-50 Engineers",
          "note": "Ideal starting architecture for 95% of software applications."
        }
      },
      "tags": [
        "Modular Monolith",
        "DDD",
        "High Velocity",
        "ACID",
        "Zero Latency"
      ]
    },
    {
      "id": "microservices",
      "name": "Microservices Architecture",
      "summary": "Architecture decomposing applications into small, independently deployable services around business capabilities.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High Operational Overhead",
          "note": "Requires mature DevOps CI/CD, Kubernetes, API Gateways, service meshes, and distributed tracing."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Isolated Blast Radius",
          "note": "Service crash only affects that specific microservice."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Database-per-Service",
          "note": "Enforces Database-per-Service pattern; requires eventual consistency (Sagas)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unmatched Team Autonomy",
          "note": "Independent team release trains, tech stacks, and scaling."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Network Overhead",
          "note": "gRPC/HTTP RPC calls add serialization and network latency."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "50+ Engineers",
          "note": "Designed for multi-team engineering organizations."
        }
      },
      "tags": [
        "Microservices",
        "Team Autonomy",
        "Distributed",
        "Database-per-Service"
      ]
    },
    {
      "id": "cell-based",
      "name": "Cell-Based Architecture",
      "summary": "Partitioning infrastructure into self-contained, independent, immutable instances called cells.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Cell Routing Control",
          "note": "Requires intelligent thin edge router to direct users to specific cells."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Blast Radius",
          "note": "A total outage in Cell A affects only 1% of users assigned to Cell A; Cell B remains 100% operational."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Cell-Local ACID",
          "note": "Each cell contains its own complete database and services."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Cell Deployment",
          "note": "Deploy new code cell-by-cell for ultimate canary safety."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "High Infrastructure",
          "note": "Replicates complete stack instances across cells."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Mission-Critical Tier",
          "note": "Used by AWS, Slack, and Salesforce for high availability."
        }
      },
      "tags": [
        "Cell-Based",
        "Fault Isolation",
        "Mission-Critical",
        "AWS Architecture"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Start with a Modular Monolith for maximum developer velocity and 0ms in-memory calls.",
    "Transition to Microservices when scaling beyond 50+ engineers across multiple autonomous teams.",
    "Adopt Cell-Based Architecture for mission-critical SaaS platforms requiring 99.999% uptime."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Architectural Topology Selection",
        "description": "Choosing the enterprise system design architecture."
      },
      {
        "id": "p1",
        "label": "Maximum Developer Velocity & Single Deploy (Modular Monolith)",
        "description": "Need encapsulated domain modules, single database ACID transactions, and zero RPC latency."
      },
      {
        "id": "p2",
        "label": "Multi-Team Autonomy & Independent Release Trains (Microservices)",
        "description": "Need independent service deployments and Database-per-Service patterns for 50+ engineers."
      },
      {
        "id": "p3",
        "label": "Mission-Critical Ultra-Low Blast Radius (Cell-Based)",
        "description": "Need complete self-contained infrastructure cells to isolate outages to 1% of users."
      },
      {
        "id": "e1",
        "label": "Modular Monolith",
        "description": "Encapsulated domain modules in a single deployment unit."
      },
      {
        "id": "e2",
        "label": "Microservices",
        "description": "Independently deployable domain services."
      },
      {
        "id": "e3",
        "label": "Cell-Based Architecture",
        "description": "Self-contained infrastructure cells for 99.999% availability."
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
