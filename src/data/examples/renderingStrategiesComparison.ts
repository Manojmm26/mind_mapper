import { ComparisonWorkspaceData } from "../../services/llmService";

export const RENDERING_STRATEGIES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Frontend Rendering Strategies: SSR vs SSG vs CSR vs ISR vs Streaming SSR vs React Server Components (RSC)",
  "domainType": "approaches",
  "overview": "A foundational web architecture comparison evaluating rendering strategies across Core Web Vitals (LCP, INP), SEO indexing, server load, and dynamic data freshness.",
  "recommendedApproach": "Use React Server Components (RSC) & Streaming SSR for rich dynamic full-stack applications; use SSG for static marketing/blogs; use CSR for auth-gated SaaS dashboards.",
  "criteria": [
    {
      "id": "c1",
      "label": "First Contentful Paint (FCP) & LCP Speed",
      "type": "text",
      "description": "Speed of delivering pre-rendered HTML to the browser."
    },
    {
      "id": "c2",
      "label": "SEO Search Engine Indexability",
      "type": "text",
      "description": "Ease with which web crawlers index complete page content without executing JS."
    },
    {
      "id": "c3",
      "label": "Client Bundle Size & Hydration Overhead",
      "type": "text",
      "description": "JavaScript bundle sent to client for DOM hydration."
    },
    {
      "id": "c4",
      "label": "Data Freshness & Server Compute Load",
      "type": "text",
      "description": "Real-time dynamic data vs static edge caching vs per-request server compute."
    },
    {
      "id": "c5",
      "label": "Interaction to Next Paint (INP) & DX",
      "type": "text",
      "description": "Responsiveness during user interactions and developer mental model."
    },
    {
      "id": "c6",
      "label": "Hosting Infrastructure Complexity",
      "type": "text",
      "description": "Static CDN hosting vs persistent Node.js/Edge server runtime required."
    }
  ],
  "options": [
    {
      "id": "rsc-streaming",
      "name": "React Server Components (RSC) + Streaming SSR",
      "summary": "Modern architecture running component code exclusively on the server while streaming HTML chunks to client.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Fast (Streamed Chunks)",
          "note": "Streams HTML shell instantly; Suspense boundaries stream slow data chunks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Crawlable",
          "note": "Full HTML payload delivered directly to search engines."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Zero JS for Server Components",
          "note": "Server component dependencies stay on server; only Client components ship JS bytes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Real-Time Dynamic",
          "note": "Fetches live database data directly inside server component functions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class",
          "note": "Eliminates client fetch waterfalls while maintaining React component model."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Node/Edge Runtime Required",
          "note": "Requires server runtime (Vercel, AWS, Node server) to process requests."
        }
      },
      "tags": [
        "RSC",
        "Next.js 15",
        "Suspense",
        "Zero-Bundle"
      ]
    },
    {
      "id": "ssg",
      "name": "Static Site Generation (SSG)",
      "summary": "Pre-rendering pages into static HTML/CSS files at build time for ultra-fast CDN delivery.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Instantaneous",
          "note": "Served directly from global CDN edge caches."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class",
          "note": "Complete static HTML pre-built for search engine crawlers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Small",
          "note": "Minimal hydration code for static pages."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Build-Time Stale",
          "note": "Data fixed at build time; requires rebuilding site for content updates."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Outstanding",
          "note": "Unbeatable performance for content-heavy sites."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Simple Static CDN",
          "note": "Deploy to Cloudflare Pages, S3, or GitHub Pages with zero server costs."
        }
      },
      "tags": [
        "SSG",
        "Astro",
        "CDN",
        "Static"
      ]
    },
    {
      "id": "csr",
      "name": "Client-Side Rendering (CSR)",
      "summary": "Traditional Single Page App (SPA) where browser downloads empty HTML and executes JS to render UI.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Slow Initial Render",
          "note": "White screen until browser downloads, parses, and executes full JS bundle."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Poor / Complex",
          "note": "Relies on search engine JavaScript execution engines."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Heavy Bundle",
          "note": "Entire React/Vue application bundle shipped to browser."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Client Fetching",
          "note": "Fetches data on client via REST/GraphQL hooks after initial page load."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Fast Subsequent Nav",
          "note": "Instantaneous client-side page transitions once loaded."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Simple Static CDN",
          "note": "Hosts index.html and JS bundle on any static web host."
        }
      },
      "tags": [
        "SPA",
        "Vite",
        "Client-Side",
        "Dashboards"
      ]
    },
    {
      "id": "isr",
      "name": "Incremental Static Regeneration (ISR)",
      "summary": "Updates static pages in the background on a per-page basis without rebuilding the whole site.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Instantaneous (CDN Cache)",
          "note": "Serves cached static page immediately."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class",
          "note": "Static HTML always available for search engine indexers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Small",
          "note": "Static page client bundle."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Stale-While-Revalidate",
          "note": "Regenerates static page in background when requested past revalidate period."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Great Balance",
          "note": "Combines static CDN speed with eventual data freshness."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Server Cache Required",
          "note": "Requires framework supporting revalidation (Next.js/Nuxt)."
        }
      },
      "tags": [
        "ISR",
        "Next.js",
        "Stale-While-Revalidate",
        "E-Commerce"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose RSC & Streaming SSR for dynamic, full-stack applications (Next.js App Router).",
    "Choose SSG (Astro/Next) for documentation, blogs, and marketing sites.",
    "Choose CSR (Vite + React) for internal admin tools and auth-gated SaaS dashboards.",
    "Audit Core Web Vitals (LCP, INP, CLS) using Chrome DevTools or PageSpeed Insights."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Rendering Architecture Selection",
        "description": "Choosing the frontend rendering model for your web application."
      },
      {
        "id": "p1",
        "label": "Dynamic Full-Stack App with Zero-Bundle Server Components",
        "description": "Need real-time database access, zero client JS for server parts, and fast streaming."
      },
      {
        "id": "p2",
        "label": "Static Content & Maximum SEO Speed",
        "description": "Blogs, marketing pages, and documentation pre-rendered to static CDN HTML."
      },
      {
        "id": "p3",
        "label": "Auth-Gated SaaS App / Admin Portal",
        "description": "Interactive dashboard behind login screen where SEO is irrelevant."
      },
      {
        "id": "p4",
        "label": "High-Volume E-Commerce Catalogs",
        "description": "Millions of product pages requiring static CDN speed with background revalidation."
      },
      {
        "id": "e1",
        "label": "React Server Components (RSC)",
        "description": "Server-side component execution with streaming HTML chunks."
      },
      {
        "id": "e2",
        "label": "Static Site Generation (SSG)",
        "description": "Pre-built static HTML served directly from global CDN edge."
      },
      {
        "id": "e3",
        "label": "Client-Side Rendering (CSR)",
        "description": "SPA bundle rendered entirely in browser JavaScript."
      },
      {
        "id": "e4",
        "label": "Incremental Static Regeneration (ISR)",
        "description": "Stale-while-revalidate background static page regeneration."
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
