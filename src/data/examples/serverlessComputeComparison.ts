import { ComparisonWorkspaceData } from "../../services/llmService";

export const SERVERLESS_COMPUTE_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Serverless & Edge Compute Engines: AWS Lambda vs Cloudflare Workers vs Vercel Functions vs Fastly Compute@Edge",
  "domainType": "tools",
  "overview": "A performance evaluation of serverless compute platforms comparing cold starts, V8 Isolates vs containers, execution timeout limits, edge routing, and global latency.",
  "recommendedApproach": "Use Cloudflare Workers for ultra-low latency V8 isolate edge execution; use AWS Lambda for deep VPC database access and long-running tasks; use Vercel Functions for Next.js full-stack web apps.",
  "criteria": [
    {
      "id": "c1",
      "label": "Cold Start Latency & Execution Model",
      "type": "text",
      "description": "Zero cold start V8 Isolates vs micro-container container boots (50-500ms)."
    },
    {
      "id": "c2",
      "label": "Maximum Execution Timeout",
      "type": "text",
      "description": "Runtime wall-clock limits (30s edge vs 15 min cloud lambda)."
    },
    {
      "id": "c3",
      "label": "VPC & Managed Database Connectivity",
      "type": "text",
      "description": "Native connection pooling to RDS, ElastiCache, and internal VPC subnets."
    },
    {
      "id": "c4",
      "label": "Global Edge Location Count",
      "type": "text",
      "description": "Distribution of compute nodes across global Anycast points of presence."
    },
    {
      "id": "c5",
      "label": "Developer Tooling & Local Emulation",
      "type": "text",
      "description": "CLI quality (Wrangler vs SAM/SST vs Vercel CLI) and local dev environment."
    },
    {
      "id": "c6",
      "label": "Egress & Invocation Cost Scaling",
      "type": "text",
      "description": "Cost per million requests, execution duration GB-seconds, and bandwidth."
    }
  ],
  "options": [
    {
      "id": "aws-lambda",
      "name": "AWS Lambda",
      "summary": "The pioneer serverless platform supporting container images, long runtimes, and full AWS integration.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "50-500ms Cold Start",
          "note": "MicroVM (Firecracker) container boot; mitigated by Provisioned Concurrency."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "15 Minutes",
          "note": "Ideal for background jobs, video processing, and heavy ETL scripts."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Native VPC Access",
          "note": "Direct access to private VPC subnets and RDS Proxy connection pools."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Regional (30+ Regions)",
          "note": "Deploys in chosen AWS regions (Lambda@Edge extends to CloudFront POPs)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Robust (SST / SAM)",
          "note": "Supported by SST, Serverless Framework, and AWS SAM CLI."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "1M Free / Month",
          "note": "Standard GB-second pricing model; watch out for AWS CloudFront egress fees."
        }
      },
      "tags": [
        "Pioneer",
        "15-Min Limit",
        "AWS VPC",
        "Firecracker"
      ]
    },
    {
      "id": "cloudflare-workers",
      "name": "Cloudflare Workers",
      "summary": "Edge-first compute platform executing JavaScript/WASM inside V8 Isolates across 300+ cities.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "0ms Cold Start",
          "note": "V8 Isolates eliminate container startup entirely."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "30s CPU Limit",
          "note": "Optimized for fast HTTP request/response loops and edge routing."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Hyperdrive / D1",
          "note": "Hyperdrive connection pooling accelerates TCP/TLS to origin databases."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "300+ Cities (Anycast)",
          "note": "Executes on nearest Cloudflare edge node to end user."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class (Wrangler)",
          "note": "Wrangler CLI provides instantaneous local testing and production deployment."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Disruptive Low Cost",
          "note": "10M free requests/mo; $5/mo flat for 10M invocations."
        }
      },
      "tags": [
        "V8 Isolates",
        "Zero Cold Start",
        "300+ Cities",
        "Wrangler"
      ]
    },
    {
      "id": "vercel-functions",
      "name": "Vercel Functions",
      "summary": "Managed serverless and edge function infrastructure built for Next.js applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast (Fluid Compute)",
          "note": "Combines AWS Lambda infrastructure with automatic warm concurrency."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "60s (Pro) / 900s",
          "note": "Generous timeouts tailored for server-rendered web pages and streaming."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Vercel Marketplace",
          "note": "Turnkey integrations with Supabase, Neon, Upstash, and PlanetScale."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Global Network",
          "note": "Edge Middleware routes traffic to regional function instances."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Seamless Next.js DX",
          "note": "Zero config; push Git branch to deploy preview deployments."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Included in Pro",
          "note": "Generous execution allocation with clear usage tiers."
        }
      },
      "tags": [
        "Next.js",
        "Vercel",
        "Fluid Compute",
        "DX"
      ]
    },
    {
      "id": "fastly-compute",
      "name": "Fastly Compute@Edge",
      "summary": "Ultra-fast WebAssembly serverless platform compiled from Rust, C++, or JS.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "< 1ms (Lucet / WASM)",
          "note": "Lucet WebAssembly runtime launches in microsecond timeframes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "30s",
          "note": "Purpose-built for instant HTTP header manipulation and streaming."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Origin Shielding",
          "note": "Integrates with Fastly backends and Object Store."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Fastly Anycast Network",
          "note": "Executes on Fastly high-bandwidth global POPs."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Rust-First",
          "note": "Outstanding Rust SDK alongside JavaScript/WASM compilation."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Traffic Tier",
          "note": "Tailored for high-traffic media streaming and enterprise security."
        }
      },
      "tags": [
        "WASM",
        "Rust",
        "Fastly",
        "Microsecond Launch"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Benchmark workload execution duration (Under 30s -> Edge Workers; Over 1 min -> AWS Lambda).",
    "Audit database architecture (Serverless DBs like Neon/PlanetScale work great with edge V8 isolates).",
    "Use Cloudflare Workers for edge security, auth checks, and HTML rewriting.",
    "Use AWS Lambda inside private VPCs for heavy background data processing."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Serverless Compute Selection",
        "description": "Choosing between edge V8 isolates, AWS Lambda, and full-stack platforms."
      },
      {
        "id": "p1",
        "label": "Ultra-Low Latency Edge API Routing",
        "description": "Need zero cold starts and 300+ city global distribution."
      },
      {
        "id": "p2",
        "label": "Long-Running Jobs & Heavy VPC Access",
        "description": "Jobs running up to 15 minutes needing private VPC subnets."
      },
      {
        "id": "p3",
        "label": "Full-Stack Next.js / React App",
        "description": "Deploying server components, API routes, and static assets seamlessly."
      },
      {
        "id": "p4",
        "label": "High-Speed WebAssembly (Rust/WASM)",
        "description": "Ultra-high performance payload transformation at network speed."
      },
      {
        "id": "e1",
        "label": "Cloudflare Workers",
        "description": "Zero cold start V8 Isolates across global Anycast network."
      },
      {
        "id": "e2",
        "label": "AWS Lambda",
        "description": "15-minute max execution with full AWS VPC & IAM integration."
      },
      {
        "id": "e3",
        "label": "Vercel Functions",
        "description": "Fluid compute optimized for Next.js App Router."
      },
      {
        "id": "e4",
        "label": "Fastly Compute@Edge",
        "description": "Microsecond WebAssembly compile runtime in Rust/JS."
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
