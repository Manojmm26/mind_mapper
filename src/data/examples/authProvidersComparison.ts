import { ComparisonWorkspaceData } from "../../services/llmService";

export const AUTH_PROVIDERS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Authentication & Identity Providers: Auth0 vs Clerk vs Supabase Auth vs Keycloak vs AWS Cognito",
  "domainType": "services",
  "overview": "A comparative evaluation of modern authentication platforms covering developer experience, MFA security, multi-tenancy B2B support, self-hosting flexibility, and pricing scaling.",
  "recommendedApproach": "Use Clerk for modern Next.js/React consumer applications; use Keycloak for open-source self-hosted enterprise SSO; use Auth0 for complex multi-tenant B2B enterprise OAuth/SAML.",
  "criteria": [
    {
      "id": "c1",
      "label": "Developer Velocity & Pre-Built UI Components",
      "type": "text",
      "description": "Availability of turnkey sign-in components, user profiles, and SDK integration speed."
    },
    {
      "id": "c2",
      "label": "Enterprise SSO (SAML / OIDC) & B2B Multi-Tenancy",
      "type": "text",
      "description": "Support for enterprise IdP connections, organization switching, and RBAC."
    },
    {
      "id": "c3",
      "label": "MFA, Passkeys & Passwordless Security",
      "type": "text",
      "description": "Biometric WebAuthn passkeys, TOTP, SMS, and adaptive step-up authentication."
    },
    {
      "id": "c4",
      "label": "Deployment & Data Sovereignty (Self-Hosted vs Cloud)",
      "type": "text",
      "description": "Self-hosted Docker/Kubernetes capability vs managed cloud SaaS."
    },
    {
      "id": "c5",
      "label": "Session Management & JWT Architecture",
      "type": "text",
      "description": "Edge token verification, session refresh loops, and custom JWT claims."
    },
    {
      "id": "c6",
      "label": "Pricing Scaling & Monthly Active Users (MAU)",
      "type": "text",
      "description": "Cost per MAU, free tier limits, and enterprise contract predictability."
    }
  ],
  "options": [
    {
      "id": "auth0",
      "name": "Auth0 (Okta)",
      "summary": "The enterprise gold standard for identity management with extensive protocol support.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Very Good",
          "note": "Universal Login redirect page handles edge security out of the box."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class",
          "note": "Unmatched SAML, WS-Fed, Azure AD, and enterprise federation hooks."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Outstanding",
          "note": "Adaptive MFA, risk-based step-up, and WebAuthn passkey support."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Cloud SaaS Only",
          "note": "Hosted in Okta/Auth0 cloud infra with regional compliance tenants."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Flexible Actions",
          "note": "Auth0 Actions allow custom Node.js execution during token issuance."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Costly",
          "note": "High cost scaling once passing 7,500 MAU or enabling enterprise connections."
        }
      },
      "tags": [
        "Enterprise",
        "SAML",
        "Okta",
        "Gold Standard"
      ]
    },
    {
      "id": "clerk",
      "name": "Clerk",
      "summary": "Developer-first authentication platform built specifically for modern React and Next.js applications.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class",
          "note": "Unbeatable drop-in <SignIn />, <UserButton />, and Organization components."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Very Good (B2B)",
          "note": "First-class Organization switcher and B2B user management primitives."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Excellent",
          "note": "Turnkey email magic links, TOTP, SMS, and passkeys out of the box."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Cloud SaaS",
          "note": "Managed SaaS infrastructure optimized for Vercel and edge rendering."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Edge Native",
          "note": "Fast JWT verification middleware designed for Next.js App Router."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Generous Free Tier",
          "note": "10,000 free MAUs, then reasonable pay-as-you-go pricing."
        }
      },
      "tags": [
        "Next.js",
        "React",
        "DX",
        "Drop-In UI"
      ]
    },
    {
      "id": "supabase-auth",
      "name": "Supabase Auth (GoTrue)",
      "summary": "PostgreSQL-integrated authentication solution tightly coupled with Row Level Security (RLS).",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Good",
          "note": "Supabase Auth UI library provides quick starter forms."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good",
          "note": "Supports SAML 2.0 SSO via GoTrue for enterprise tiers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Very Good",
          "note": "Supports TOTP, SMS, Phone OTP, and WebAuthn."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Open Source / Self-Hosted",
          "note": "Run GoTrue locally via Docker or deploy inside Supabase Cloud."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Postgres RLS Native",
          "note": "JWT claims feed directly into auth.uid() inside SQL Row Level Security policies."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Extremely Cheap",
          "note": "50,000 free MAUs included in base Supabase tier."
        }
      },
      "tags": [
        "Postgres RLS",
        "Open-Source",
        "Supabase",
        "Low Cost"
      ]
    },
    {
      "id": "keycloak",
      "name": "Red Hat Keycloak",
      "summary": "The leading open-source IAM solution for self-hosted enterprise identity and access management.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Moderate",
          "note": "Requires custom Freemarker templates for customized sign-in screens."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Outstanding",
          "note": "Enterprise Kerberos, LDAP, Active Directory, SAML 2.0, and OpenID Connect."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High",
          "note": "Full WebAuthn, OTP, and custom authentication flows."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "100% Self-Hosted",
          "note": "Deploy on Kubernetes via Keycloak Operator with complete data sovereignty."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Robust Java Core",
          "note": "Extensive token mapping, user federation, and role mapping."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Zero License Fee",
          "note": "100% free open-source software; pay only for hosting compute."
        }
      },
      "tags": [
        "Open-Source",
        "Self-Hosted",
        "LDAP",
        "Enterprise"
      ]
    },
    {
      "id": "cognito",
      "name": "AWS Cognito",
      "summary": "AWS native user directory and identity pool service for scalable application auth.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Basic",
          "note": "Hosted UI is dated; custom UI requires manual Amplify SDK calls."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Good",
          "note": "Integrates with SAML and OIDC enterprise identity providers."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Good",
          "note": "Supports SMS, TOTP, and adaptive risk detection."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "AWS SaaS",
          "note": "Fully managed AWS regional service."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "AWS IAM Native",
          "note": "Exchanges User Pool tokens for temporary AWS IAM credentials."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Generous Scale",
          "note": "50,000 free MAUs per month, very low cost at massive scale."
        }
      },
      "tags": [
        "AWS",
        "IAM",
        "Low Cost",
        "Amplify"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Identify primary framework (Next.js -> Clerk; Postgres -> Supabase; Enterprise LDAP -> Keycloak/Auth0).",
    "Evaluate data residency constraints (SaaS vs Self-Hosted Keycloak).",
    "Audit B2B requirement for custom SAML connections per organization customer.",
    "Set up JWT verification middleware with JWKS public key caching."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Auth Platform Selection",
        "description": "Choosing the right identity and user authentication stack."
      },
      {
        "id": "p1",
        "label": "Modern React / Next.js DX",
        "description": "Need drop-in pre-built UI components and rapid developer velocity."
      },
      {
        "id": "p2",
        "label": "Complex Enterprise B2B SAML / Okta",
        "description": "Need extensive enterprise identity federation and custom action pipelines."
      },
      {
        "id": "p3",
        "label": "Self-Hosted Open Source Data Sovereignty",
        "description": "Must host identity infrastructure on private Kubernetes clusters."
      },
      {
        "id": "p4",
        "label": "PostgreSQL Row Level Security Integration",
        "description": "Auth tokens directly enforce database RLS policies."
      },
      {
        "id": "e1",
        "label": "Clerk",
        "description": "Best-in-class React/Next.js pre-built components."
      },
      {
        "id": "e2",
        "label": "Auth0 (Okta)",
        "description": "Industry gold standard for enterprise B2B identity."
      },
      {
        "id": "e3",
        "label": "Keycloak",
        "description": "Open-source self-hosted enterprise IAM."
      },
      {
        "id": "e4",
        "label": "Supabase Auth",
        "description": "Postgres-native authentication with RLS integration."
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
