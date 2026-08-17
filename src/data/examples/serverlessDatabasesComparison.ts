import { ComparisonWorkspaceData } from "../../services/llmService";

export const SERVERLESS_DATABASES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Serverless Relational Databases: Neon vs Supabase vs PlanetScale vs AWS Aurora Serverless v2",
  "domainType": "services",
  "overview": "A cloud database evaluation comparing serverless autoscaling compute, database branching, connection pooling over HTTP/WebSockets, Postgres vs MySQL, and open-source self-hosting.",
  "recommendedApproach": "Use Neon for true 0-compute scale-to-zero Postgres & database branching; use Supabase for all-in-one Postgres + Auth + Realtime + Storage; use AWS Aurora Serverless v2 for enterprise AWS workloads.",
  "criteria": [
    {
      "id": "c1",
      "label": "Scale-to-Zero Compute Auto-Suspend",
      "type": "text",
      "description": "Automatically suspending compute CPUs to 0 when idle to eliminate base costs."
    },
    {
      "id": "c2",
      "label": "Git-Like Database Branching (Copy-on-Write)",
      "type": "text",
      "description": "Instantly branching production database state into isolated dev environments in seconds."
    },
    {
      "id": "c3",
      "label": "Underlying Engine (PostgreSQL vs MySQL / Vitess)",
      "type": "text",
      "description": "PostgreSQL relational features vs MySQL Vitess horizontal sharding."
    },
    {
      "id": "c4",
      "label": "Serverless Connection Pooling & HTTP Proxy",
      "type": "text",
      "description": "Native WebSocket/HTTP drivers for serverless functions (Vercel, Cloudflare)."
    },
    {
      "id": "c5",
      "label": "All-in-One BaaS Suite (Auth, Storage, Edge Functions)",
      "type": "text",
      "description": "Built-in authentication, storage buckets, and auto-generated REST/GraphQL APIs."
    },
    {
      "id": "c6",
      "label": "Self-Hosting & Open Source Autonomy",
      "type": "text",
      "description": "Deployable locally or on private clouds via Docker/Kubernetes."
    }
  ],
  "options": [
    {
      "id": "neon",
      "name": "Neon (Serverless Postgres)",
      "summary": "Multi-tenant serverless PostgreSQL with copy-on-write database branching and scale-to-zero.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Scale to 0)",
          "note": "Computes automatically suspend after 5 minutes of inactivity ($0 idle cost)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Instant DB Branching",
          "note": "Branches production data in seconds for preview environments via copy-on-write architecture."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "100% Native Postgres",
          "note": "Full PostgreSQL compatibility including PostGIS, pgvector, and extensions."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Neon Serverless Driver",
          "note": "HTTP and WebSocket driver connects effortlessly from Cloudflare Workers and Vercel."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Database Focused",
          "note": "Purpose-built serverless database."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Open-Source Architecture",
          "note": "Pageserver storage engine is open-source."
        }
      },
      "tags": [
        "Neon",
        "Serverless Postgres",
        "Scale-to-Zero",
        "Branching"
      ]
    },
    {
      "id": "supabase",
      "name": "Supabase",
      "summary": "The open-source Firebase alternative providing a dedicated Postgres database, Auth, Storage, and Realtime.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Pause Inactive",
          "note": "Pauses free tier databases after 7 days of inactivity."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Supabase CLI Branching",
          "note": "Database migrations and local development branching via Supabase CLI."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "PostgreSQL",
          "note": "Full dedicated PostgreSQL database with Row Level Security (RLS)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Built-in Supavisor Pooler",
          "note": "Supavisor manages thousands of serverless connections."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class BaaS Suite",
          "note": "Includes Auth, Storage, Edge Functions, Realtime WebSockets, and Vector embeddings."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% Self-Hosted Open-Source",
          "note": "Deploy entire stack via Docker-Compose on private servers."
        }
      },
      "tags": [
        "Supabase",
        "BaaS",
        "Postgres",
        "Auth",
        "Open-Source"
      ]
    },
    {
      "id": "aurora-serverless",
      "name": "AWS Aurora Serverless v2",
      "summary": "On-demand, auto-scaling configuration for Amazon Aurora MySQL and PostgreSQL.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "0.5 ACU Minimum",
          "note": "Scales down to 0.5 Aurora Capacity Units (ACUs) (~$30/mo minimum per instance)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Aurora Clone",
          "note": "Fast database cloning within AWS region."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Postgres & MySQL",
          "note": "Available for both Aurora PostgreSQL and Aurora MySQL engines."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "RDS Proxy",
          "note": "RDS Proxy pools connection threads across serverless Lambda functions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "AWS Ecosystem",
          "note": "Deep integration with AWS IAM, Secrets Manager, and VPCs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "AWS Cloud Service",
          "note": "Managed AWS regional database service."
        }
      },
      "tags": [
        "AWS Aurora",
        "Serverless v2",
        "AWS Managed",
        "RDS Proxy"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Neon for modern serverless Next.js/Vercel projects needing instant scale-to-zero and git DB branching.",
    "Use Supabase if building full-stack applications requiring integrated Auth, Storage, and Postgres Row Level Security.",
    "Use AWS Aurora Serverless v2 for enterprise AWS workloads needing seamless compute auto-scaling."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Serverless Database Selection",
        "description": "Choosing the serverless relational database engine."
      },
      {
        "id": "p1",
        "label": "Scale-to-Zero & Git Database Branching",
        "description": "Need true 0-compute auto-suspend when idle and copy-on-write DB branching for dev environments."
      },
      {
        "id": "p2",
        "label": "All-in-One Open-Source Backend (Postgres + Auth + Storage)",
        "description": "Need full open-source Firebase alternative with Postgres RLS, Auth, and Storage."
      },
      {
        "id": "p3",
        "label": "AWS Native Auto-Scaling Enterprise Database",
        "description": "Need on-demand Aurora capacity units (ACUs) integrated into AWS VPC and RDS Proxy."
      },
      {
        "id": "e1",
        "label": "Neon",
        "description": "Serverless Postgres with scale-to-zero and instant branching."
      },
      {
        "id": "e2",
        "label": "Supabase",
        "description": "Open-source Firebase alternative built on PostgreSQL."
      },
      {
        "id": "e3",
        "label": "AWS Aurora Serverless v2",
        "description": "On-demand auto-scaling Aurora database for AWS."
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
