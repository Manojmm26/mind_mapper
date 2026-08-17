import { ComparisonWorkspaceData } from "../../services/llmService";

export const CMS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Headless CMS Platforms: Sanity vs Strapi vs Contentful vs Payload CMS vs Ghost",
  "domainType": "tools",
  "overview": "A comparative guide to modern headless CMS solutions evaluating content modeling flexibility, real-time collaboration, self-hosted vs SaaS, and developer experience.",
  "recommendedApproach": "Use Sanity for customizable studio schemas and structured content graphs; use Payload CMS for code-first TypeScript & Next.js integration; use Strapi for open-source self-hosted REST/GraphQL APIs.",
  "criteria": [
    {
      "id": "c1",
      "label": "Content Studio Customization & DX",
      "type": "text",
      "description": "Flexibility of content editing dashboard and schema definition speed."
    },
    {
      "id": "c2",
      "label": "Self-Hosted Open Source vs Managed SaaS",
      "type": "text",
      "description": "Data ownership, hosting autonomy, and monthly subscription tiers."
    },
    {
      "id": "c3",
      "label": "Real-Time Collaboration & Visual Editing",
      "type": "text",
      "description": "Multi-user live editing, presence cursors, and visual page builders."
    },
    {
      "id": "c4",
      "label": "Query Language & API Flexibility",
      "type": "text",
      "description": "GROQ vs GraphQL vs REST API capabilities."
    },
    {
      "id": "c5",
      "label": "TypeScript Integration & Code-First Schemas",
      "type": "text",
      "description": "Defining CMS schemas as code with auto-generated TypeScript types."
    },
    {
      "id": "c6",
      "label": "Asset & Media Management",
      "type": "text",
      "description": "Image transformations, CDN delivery, and media library organization."
    }
  ],
  "options": [
    {
      "id": "sanity",
      "name": "Sanity.io",
      "summary": "The structured content platform featuring customizable React Studio and GROQ query language.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Sanity Studio)",
          "note": "Sanity Studio is an open-source React app customized entirely in code."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Managed Cloud Backend",
          "note": "Studio hosted anywhere; content database managed in Sanity Cloud."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Real-Time Collaboration",
          "note": "Live multiplayer content editing out of the box."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "GROQ & GraphQL",
          "note": "GROQ query language provides powerful document projection and join capabilities."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Excellent",
          "note": "Sanity TypeGen generates full TypeScript interfaces from schemas."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Outstanding",
          "note": "Sanity Image Pipeline handles focal point cropping and instant WebP/AVIF delivery."
        }
      },
      "tags": [
        "Sanity",
        "GROQ",
        "React Studio",
        "Structured Content"
      ]
    },
    {
      "id": "payload-cms",
      "name": "Payload CMS (v3)",
      "summary": "The native TypeScript headless CMS built directly into Next.js App Router.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Code-First TypeScript",
          "note": "Schemas defined directly as clean TypeScript objects inside your app repo."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Self-Hosted Open Source",
          "note": "Runs directly inside your Next.js application on Node.js/Vercel with Postgres/Mongo."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Live Preview",
          "note": "Integrated live side-by-side page preview."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "REST & GraphQL",
          "note": "Auto-generates typed REST and GraphQL endpoints from TS schema config."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Unmatched (Native TS)",
          "note": "Zero code generation step needed; schemas ARE TypeScript."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "S3 / Local Storage",
          "note": "Stores assets directly in S3, Cloudflare R2, or local disk."
        }
      },
      "tags": [
        "Payload",
        "Next.js",
        "TypeScript",
        "Self-Hosted"
      ]
    },
    {
      "id": "strapi",
      "name": "Strapi 5",
      "summary": "The leading open-source headless Node.js CMS with customizable admin panel.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Visual Content Builder",
          "note": "Content-Type Builder GUI allows creating models directly in browser."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Self-Hosted or Strapi Cloud",
          "note": "Run self-hosted on any server or deploy on managed Strapi Cloud."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Draft & Publish",
          "note": "Role-based access control and draft/publish workflows."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "REST & GraphQL Plugins",
          "note": "Auto-generated REST and GraphQL APIs with deep filtering."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Good",
          "note": "Strapi 5 improves TypeScript type generation."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Media Library",
          "note": "Built-in media library with AWS S3 / Cloudinary provider plugins."
        }
      },
      "tags": [
        "Strapi",
        "Node.js",
        "Open-Source",
        "REST / GraphQL"
      ]
    },
    {
      "id": "contentful",
      "name": "Contentful",
      "summary": "Enterprise API-first content platform designed for large multi-brand organizations.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Enterprise GUI",
          "note": "Structured Web App for content authors and marketers."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "SaaS Platform",
          "note": "Fully managed enterprise SaaS with strict SLA uptime."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Ninetailed / Visual",
          "note": "Integrates with enterprise personalization engines and page builders."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "GraphQL & CDA API",
          "note": "Content Delivery API (CDA) and GraphQL API."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Good",
          "note": "Contentful CLI exports TS types from environment schemas."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Global CDN Assets",
          "note": "High-performance asset delivery network."
        }
      },
      "tags": [
        "Contentful",
        "Enterprise",
        "SaaS",
        "API-First"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Payload CMS v3 if building a Next.js App Router application wanting single-repo TS schemas.",
    "Choose Sanity.io if you need a heavily customized React editing studio and GROQ query flexibility.",
    "Choose Strapi if requiring an open-source self-hosted Node.js CMS with visual schema builder.",
    "Evaluate Contentful for large enterprise corporate sites with non-technical content teams."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Headless CMS Selection",
        "description": "Choosing the content management platform for modern web apps."
      },
      {
        "id": "p1",
        "label": "Next.js & TypeScript Code-First Monorepo",
        "description": "Need CMS embedded inside Next.js app repo with native TypeScript schemas."
      },
      {
        "id": "p2",
        "label": "Custom React Studio & GROQ Graph",
        "description": "Need deeply customized editing studio with real-time multiplayer collaboration."
      },
      {
        "id": "p3",
        "label": "Open-Source Self-Hosted Node.js Server",
        "description": "Need full control over backend database and REST/GraphQL APIs."
      },
      {
        "id": "p4",
        "label": "Enterprise Multi-Brand SaaS",
        "description": "Need managed cloud SaaS platform with strict enterprise SLAs and localization."
      },
      {
        "id": "e1",
        "label": "Payload CMS v3",
        "description": "Native Next.js TypeScript code-first headless CMS."
      },
      {
        "id": "e2",
        "label": "Sanity.io",
        "description": "Structured content platform with React Studio and GROQ."
      },
      {
        "id": "e3",
        "label": "Strapi 5",
        "description": "Open-source Node.js headless CMS with visual model builder."
      },
      {
        "id": "e4",
        "label": "Contentful",
        "description": "Enterprise API-first managed SaaS content platform."
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
