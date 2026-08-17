import { ComparisonWorkspaceData } from "../../services/llmService";

export const WAF_SECURITY_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Web Application Firewalls (WAF) & Edge Security: Cloudflare WAF vs AWS WAF vs Akamai App Protector vs Fastly WAF",
  "domainType": "services",
  "overview": "A cloud security evaluation comparing Web Application Firewalls (WAF) on DDoS mitigation, OWASP Top 10 rules, bot management, API shielding, and edge inspection latency.",
  "recommendedApproach": "Use Cloudflare WAF for turnkey edge security and DDoS mitigation; use AWS WAF for deep integration with ALB and CloudFront inside AWS; use Fastly Next-Gen WAF for Signal Sciences rule engine.",
  "criteria": [
    {
      "id": "c1",
      "label": "DDoS Mitigation Capacity & Global Network",
      "type": "text",
      "description": "Network layer 3/4 and application layer 7 DDoS scrubbing capacity."
    },
    {
      "id": "c2",
      "label": "OWASP Top 10 Managed Rule Sets",
      "type": "text",
      "description": "Protection against SQLi, XSS, RCE, and zero-day vulnerability exploits."
    },
    {
      "id": "c3",
      "label": "Bot Management & Behavioral AI",
      "type": "text",
      "description": "Distinguishing search engine crawlers from credential stuffing botnets."
    },
    {
      "id": "c4",
      "label": "Edge Inspection Latency Impact",
      "type": "text",
      "description": "Latency penalty added to HTTP request handling during WAF rule execution."
    },
    {
      "id": "c5",
      "label": "API Shielding & Schema Validation",
      "type": "text",
      "description": "Enforcing OpenAPI specs, JWT validation, and API rate limiting."
    },
    {
      "id": "c6",
      "label": "Rules Customization & Terraform Support",
      "type": "text",
      "description": "Defining custom WAF rules via code (Terraform, wirefilter syntax)."
    }
  ],
  "options": [
    {
      "id": "cloudflare-waf",
      "name": "Cloudflare WAF",
      "summary": "Industry-leading edge WAF and DDoS protection integrated into Cloudflare's global Anycast network.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Unmatched (300+ Tbps)",
          "note": "Massive Anycast network absorbs world's largest Layer 7 DDoS attacks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Managed Machine Learning",
          "note": "Cloudflare Managed Rules updated instantly during global zero-day disclosures."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class (Bot Management)",
          "note": "Behavioral AI and Turnstile challenge eliminate malicious bots without annoying CAPTCHAs."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Near-Zero Latency",
          "note": "Inspected inline at edge POP in under 1ms."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "API Gateway Shield",
          "note": "Validates OpenAPI schemas, client mutual TLS (mTLS), and API key limits."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Wirefilter & Terraform",
          "note": "Custom rules defined via intuitive Wireshark-like syntax or Terraform."
        }
      },
      "tags": [
        "Cloudflare",
        "WAF",
        "DDoS",
        "Bot Management",
        "Edge"
      ]
    },
    {
      "id": "aws-waf",
      "name": "AWS WAF",
      "summary": "AWS native Web Application Firewall integrating directly with Application Load Balancers and CloudFront.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "AWS Shield Integration",
          "note": "Combines with AWS Shield Standard/Advanced for infrastructure DDoS protection."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "AWS & Vendor Managed Rules",
          "note": "Subscribe to AWS Managed Rules or partner rule sets (Fortinet, F5)."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "AWS Bot Control",
          "note": "Addon rule group for detecting common and targeted botnets."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "note": "Inspects traffic directly inside AWS ALB, API Gateway, or CloudFront."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "AWS API Gateway",
          "note": "Native integration with AWS REST and HTTP API Gateways."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "AWS CloudFormation / CDK",
          "note": "Manage WebACL rules using AWS CDK, Terraform, or CloudFormation."
        }
      },
      "tags": [
        "AWS WAF",
        "AWS Shield",
        "ALB",
        "CloudFront"
      ]
    },
    {
      "id": "fastly-waf",
      "name": "Fastly Next-Gen WAF (Signal Sciences)",
      "summary": "High-accuracy, developer-friendly WAF powered by Signal Sciences threshold engine.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High",
          "note": "Fastly global edge scrubbing capacity."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Smart Threshold Engine",
          "note": "Signal Sciences engine eliminates false positives by tracking attacker intent over time."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "Detects account takeover (ATO) and scraping attempts."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Ultra-Fast",
          "note": "Runs directly on Fastly edge or as lightweight hybrid module."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "API Protection",
          "note": "Deep inspection of JSON and GraphQL request bodies."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "DevOps Friendly",
          "note": "Renowned for low false-positive rate and high developer trust."
        }
      },
      "tags": [
        "Fastly",
        "Signal Sciences",
        "Low False Positives",
        "Next-Gen WAF"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy Cloudflare WAF for global edge DDoS mitigation, bot protection, and zero-day patching.",
    "Deploy AWS WAF if infrastructure is entirely contained within AWS ALBs and CloudFront.",
    "Enforce OWASP Top 10 rule sets and configure rate-limiting rules on sensitive /login endpoints."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "WAF Security Selection",
        "description": "Choosing Web Application Firewall and DDoS protection."
      },
      {
        "id": "p1",
        "label": "Global Edge DDoS & AI Bot Mitigation",
        "description": "Need 300+ Tbps DDoS scrubbing, behavioral bot management, and zero-day edge rules."
      },
      {
        "id": "p2",
        "label": "AWS-Native Load Balancer Protection",
        "description": "Need native WAF rules attached directly to AWS ALBs and API Gateways."
      },
      {
        "id": "p3",
        "label": "Low False-Positive Next-Gen Threshold Inspection",
        "description": "Need Signal Sciences threshold engine for accurate application security."
      },
      {
        "id": "e1",
        "label": "Cloudflare WAF",
        "description": "Market leader for Anycast DDoS scrubbing and bot management."
      },
      {
        "id": "e2",
        "label": "AWS WAF",
        "description": "Native security rules for AWS ALB, CloudFront, and API Gateway."
      },
      {
        "id": "e3",
        "label": "Fastly Next-Gen WAF",
        "description": "Signal Sciences smart threshold engine with low false positives."
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
