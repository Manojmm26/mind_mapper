import { ComparisonWorkspaceData } from "../../services/llmService";

export const ZERO_TRUST_SECURITY_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Zero Trust Security & Access Control: Cloudflare ZTNA vs Tailscale vs Zscaler vs Teleport vs OpenVPN",
  "domainType": "services",
  "overview": "A comparative evaluation of enterprise remote access and Zero Trust Network Access (ZTNA) solutions evaluating WireGuard mesh, identity-aware proxies, SSH/K8s auditing, and legacy VPN replacements.",
  "recommendedApproach": "Use Tailscale for frictionless WireGuard mesh networking across developer nodes; use Cloudflare ZTNA for identity-aware web application access; use Teleport for strict SSH, K8s, and DB access auditing.",
  "criteria": [
    {
      "id": "c1",
      "label": "Network Topology (Mesh vs Proxy vs Hub-and-Spoke)",
      "type": "text",
      "description": "Peer-to-peer mesh connectivity vs central gateway proxy routing."
    },
    {
      "id": "c2",
      "label": "Identity Provider (IdP) & SSO Integration",
      "type": "text",
      "description": "Binding network permissions directly to Okta, Azure AD, or Google Workspace identity."
    },
    {
      "id": "c3",
      "label": "Infrastructure Access (SSH, K8s, DB, RDP)",
      "type": "text",
      "description": "Access control and audit logging for Linux servers, Kubernetes clusters, and databases."
    },
    {
      "id": "c4",
      "label": "Client Installation & Agentless Access",
      "type": "text",
      "description": "Requiring desktop/mobile client applications vs agentless browser access."
    },
    {
      "id": "c5",
      "label": "Audit Logging & Session Recording",
      "type": "text",
      "description": "Recording interactive terminal sessions, SQL queries, and HTTP requests."
    },
    {
      "id": "c6",
      "label": "Deployment & Self-Hosted Control",
      "type": "text",
      "description": "Fully managed SaaS vs open-source self-hosted control planes."
    }
  ],
  "options": [
    {
      "id": "tailscale",
      "name": "Tailscale (WireGuard)",
      "summary": "Zero-config mesh VPN powered by WireGuard that connects servers, laptops, and mobile devices securely.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Peer-to-Peer Mesh",
          "note": "Establishes direct encrypted WireGuard tunnels between nodes, bypassing central bottlenecks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Seamless SSO",
          "note": "Binds node identity to Google, Microsoft, or Okta credentials out of the box."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Tailscale SSH & Subnets",
          "note": "Tailscale SSH manages keyless SSH access; subnet routers expose private networks."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Lightweight Client",
          "note": "Requires Tailscale daemon installed on client devices."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Network Flow Logs",
          "note": "Logs connection metadata and Tailscale SSH session audit events."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "SaaS / Headscale",
          "note": "Managed SaaS control plane; open-source Headscale provides self-hosted control plane."
        }
      },
      "tags": [
        "WireGuard",
        "P2P Mesh",
        "Tailscale",
        "Zero-Config"
      ]
    },
    {
      "id": "cloudflare-ztna",
      "name": "Cloudflare Zero Trust (Access & Tunnel)",
      "summary": "Identity-aware reverse proxy and network security platform built on Cloudflare's global edge.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Global Edge Proxy",
          "note": "cloudflared tunnel connects private origin servers to Cloudflare's global network."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class IdP",
          "note": "Integrates multiple IdPs simultaneously with conditional device posture rules."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Web Apps & SSH/RDP",
          "note": "Ideal for securing internal web tools, SSH, and RDP endpoints."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Agentless Browser",
          "note": "Users access internal web apps via browser without installing any VPN client."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "HTTP & SSH Recording",
          "note": "Detailed HTTP access logs and browser-rendered SSH session recordings."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Generous SaaS Tier",
          "note": "50 free seats included in Cloudflare Zero Trust free tier."
        }
      },
      "tags": [
        "Cloudflare",
        "Agentless",
        "Identity-Aware",
        "Edge"
      ]
    },
    {
      "id": "teleport",
      "name": "Gravitational Teleport",
      "summary": "Identity-aware access plane for SSH, Kubernetes clusters, databases, and web applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Access Proxy + Auth",
          "note": "Centralized Teleport Proxy and Auth Server managing short-lived X.509 certificates."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Enterprise OIDC / SAML",
          "note": "Authenticates users via SSO and issues short-lived certificates."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class Infrastructure",
          "note": "Purpose-built for zero-trust access to SSH nodes, K8s APIs, Postgres/MySQL DBs, and AWS IAM."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "tsh CLI & Browser UI",
          "note": "Access via tsh CLI tool or built-in browser web UI."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Full Session Recording",
          "note": "Records complete terminal video sessions and captures individual SQL query logs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Open Source & Cloud",
          "note": "Fully open-source core deployable on Kubernetes or Teleport Cloud SaaS."
        }
      },
      "tags": [
        "Teleport",
        "SSH Audit",
        "K8s Access",
        "Certificates"
      ]
    },
    {
      "id": "openvpn",
      "name": "Legacy OpenVPN",
      "summary": "Traditional centralized hub-and-spoke VPN tunneling protocol.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Hub-and-Spoke",
          "note": "All client traffic routes through a single central VPN gateway server bottleneck."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Basic LDAP / RADIUS",
          "note": "Relies on legacy RADIUS/LDAP servers or static certificates."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Full Network Level Access",
          "note": "Grants broad IP-level access to entire subnet once connected."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Heavy Client",
          "note": "Requires installing OpenVPN client profile (.ovpn) files."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Basic Connection Logs",
          "note": "Logs IP connection events without application-layer query auditing."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Self-Hosted Standard",
          "note": "Free open-source server software widely available."
        }
      },
      "tags": [
        "Legacy VPN",
        "OpenVPN",
        "Hub-and-Spoke",
        "Subnet Access"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Deploy Tailscale for developer workstation to staging/dev server connectivity.",
    "Deploy Cloudflare ZTNA for agentless remote employee access to internal web dashboards.",
    "Adopt Teleport for production SSH and Kubernetes cluster access auditing.",
    "Decommission legacy hub-and-spoke OpenVPN servers to reduce attack surface and network bottlenecks."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Zero Trust Access Decision",
        "description": "Choosing the network security and access control architecture."
      },
      {
        "id": "p1",
        "label": "Peer-to-Peer Mesh Developer Network",
        "description": "Fast WireGuard encryption connecting developer laptops to cloud nodes without central gateways."
      },
      {
        "id": "p2",
        "label": "Agentless Identity-Aware Web Access",
        "description": "Remote employees accessing internal web apps securely via browser with SSO."
      },
      {
        "id": "p3",
        "label": "Strict SSH, K8s & Database Audit Control",
        "description": "Need short-lived certificates, terminal video recording, and SQL query logging."
      },
      {
        "id": "p4",
        "label": "Legacy Subnet IP Tunneling",
        "description": "Traditional full-subnet IP tunnel access via central gateway."
      },
      {
        "id": "e1",
        "label": "Tailscale",
        "description": "Zero-config P2P WireGuard mesh network."
      },
      {
        "id": "e2",
        "label": "Cloudflare ZTNA",
        "description": "Identity-aware edge proxy for agentless web access."
      },
      {
        "id": "e3",
        "label": "Teleport",
        "description": "Certificate-based access plane for SSH, K8s, and DB auditing."
      },
      {
        "id": "e4",
        "label": "OpenVPN",
        "description": "Traditional open-source hub-and-spoke VPN server."
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
