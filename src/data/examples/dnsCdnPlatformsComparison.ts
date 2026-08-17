import { ComparisonWorkspaceData } from "../../services/llmService";

export const DNS_CDN_PLATFORMS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "DNS & Edge CDN Platforms: Cloudflare DNS vs Amazon Route 53 vs NS1 vs Fastly",
  "domainType": "services",
  "overview": "A global infrastructure comparison evaluating DNS propagation speed, Anycast routing latency, traffic steering (geolocation/failover), and edge security.",
  "recommendedApproach": "Use Cloudflare for fastest global 1.1.1.1 Anycast DNS & built-in CDN/WAF; use Amazon Route 53 for native AWS resource alias routing; use NS1 for complex enterprise traffic steering.",
  "criteria": [
    {
      "id": "c1",
      "label": "Global Anycast DNS Lookup Latency (ms)",
      "type": "text",
      "description": "Authoritative DNS resolution speed across global Anycast points of presence."
    },
    {
      "id": "c2",
      "label": "Traffic Steering & Geolocation Routing",
      "type": "text",
      "description": "Routing user traffic based on geographic location, latency, and server health."
    },
    {
      "id": "c3",
      "label": "AWS Alias Record & Cloud Resource Integration",
      "type": "text",
      "description": "Native alias routing to AWS ELBs, CloudFront distributions, and S3 buckets."
    },
    {
      "id": "c4",
      "label": "DDoS Resilience & DNSSEC",
      "type": "text",
      "description": "Layer 3/4 DNS reflection attack scrubbing and 1-click DNSSEC signing."
    },
    {
      "id": "c5",
      "label": "Terraform Provider & API Velocity",
      "type": "text",
      "description": "Managing DNS records programmatically via Infrastructure as Code."
    },
    {
      "id": "c6",
      "label": "Pricing Structure (per Million Queries)",
      "type": "text",
      "description": "Flat rate vs query volume line item billing."
    }
  ],
  "options": [
    {
      "id": "cloudflare-dns",
      "name": "Cloudflare DNS",
      "summary": "The fastest authoritative DNS provider globally built on Cloudflare's 1.1.1.1 Anycast network.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (< 10ms)",
          "note": "Consistently ranks as the world's fastest authoritative DNS network (DNSPerf)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Load Balancing Addon",
          "note": "Cloudflare Load Balancing provides geo-routing and health check failover."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "CNAME Flattening",
          "note": "CNAME flattening allows root domain (example.com) to point to CNAME targets seamlessly."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unmatched (300+ Tbps)",
          "note": "Absorbs massive DNS amplification and reflection attacks automatically."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Excellent",
          "note": "First-class Cloudflare Terraform provider."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Free Unlimited Queries",
          "note": "Unmetered DNS query volume included in free and paid Cloudflare plans."
        }
      },
      "tags": [
        "Cloudflare",
        "Fastest DNS",
        "1.1.1.1",
        "Free Unmetered"
      ]
    },
    {
      "id": "route53",
      "name": "Amazon Route 53",
      "summary": "Highly available and scalable cloud DNS web service integrated natively into AWS.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very Fast",
          "note": "Global Anycast network backed by 100% SLA."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Advanced Traffic Flow",
          "note": "Latency-based routing, GeoDNS, Geoproximity, and Multi-Value answer routing."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (AWS Alias)",
          "note": "Alias records map root domain directly to AWS ALBs, CloudFront, and S3 free of query charge."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "AWS Shield Standard",
          "note": "Protected against Layer 3/4 DDoS via AWS Shield."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "AWS Native",
          "note": "Managed via AWS CDK, Terraform, or AWS Console."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "$0.40 / Hosted Zone",
          "note": "$0.40/mo per hosted zone plus $0.40 per million queries."
        }
      },
      "tags": [
        "AWS Route 53",
        "AWS Alias",
        "100% SLA",
        "GeoDNS"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Cloudflare DNS for the world's fastest global Anycast lookup speeds and free unmetered queries.",
    "Choose Amazon Route 53 if hosting primary infrastructure on AWS to leverage free Alias record routing to ALBs.",
    "Enable 1-click DNSSEC signing across all domain zones to prevent DNS spoofing."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "DNS Platform Selection",
        "description": "Choosing the authoritative global DNS provider."
      },
      {
        "id": "p1",
        "label": "Fastest Global Anycast & Unmetered Free Queries",
        "description": "Need sub-10ms lookup speeds with zero query volume fees."
      },
      {
        "id": "p2",
        "label": "AWS Native Infrastructure & Alias Records",
        "description": "Need 100% SLA and zero-cost Alias routing to AWS ALBs, S3, and CloudFront."
      },
      {
        "id": "e1",
        "label": "Cloudflare DNS",
        "description": "World's fastest global Anycast DNS network with unmetered queries."
      },
      {
        "id": "e2",
        "label": "Amazon Route 53",
        "description": "100% SLA AWS cloud DNS with native Alias records."
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
