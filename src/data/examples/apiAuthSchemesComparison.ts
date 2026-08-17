import { ComparisonWorkspaceData } from "../../services/llmService";

export const API_AUTH_SCHEMES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Web API Auth Schemes: JWT Bearer Tokens vs HttpOnly Session Cookies vs API Keys",
  "domainType": "concepts",
  "overview": "A web security evaluation comparing stateless JWT bearer tokens, secure HttpOnly SameSite session cookies (XSS/CSRF resistance), and service-to-service API keys.",
  "recommendedApproach": "Use HttpOnly SameSite Cookies for browser web applications to eliminate XSS token theft; use JWT Bearer Tokens for mobile APIs and microservices; use API Keys for third-party developer integrations.",
  "criteria": [
    {
      "id": "c1",
      "label": "XSS Vulnerability Protection (Script Token Theft)",
      "type": "text",
      "description": "Preventing malicious JavaScript (document.cookie / localStorage) from stealing authentication tokens."
    },
    {
      "id": "c2",
      "label": "CSRF Vulnerability Protection",
      "type": "text",
      "description": "Mitigating Cross-Site Request Forgery attacks via SameSite attributes or Anti-CSRF tokens."
    },
    {
      "id": "c3",
      "label": "Stateless Verification vs Server State Lookup",
      "type": "text",
      "description": "Verifying signatures cryptographically (0-DB calls) vs querying session database."
    },
    {
      "id": "c4",
      "label": "Instant Token Revocation & Invalidation",
      "type": "text",
      "description": "Ability to revoke a user session immediately across all devices."
    },
    {
      "id": "c5",
      "label": "Cross-Domain CORS & Mobile Client Suitability",
      "type": "text",
      "description": "Ease of sending authentication headers from mobile apps or cross-domain subdomains."
    },
    {
      "id": "c6",
      "label": "Payload Storage Size & Cookie Overhead",
      "type": "text",
      "description": "Data size attached to every HTTP request."
    }
  ],
  "options": [
    {
      "id": "httponly-cookie",
      "name": "HttpOnly SameSite Session Cookie",
      "summary": "Browser security gold standard storing session IDs in browser-managed HttpOnly cookies.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (100% XSS Proof)",
          "note": "HttpOnly flag prevents JavaScript from accessing cookie memory entirely, making XSS token theft impossible."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "SameSite=Lax / Strict",
          "note": "SameSite=Lax/Strict attribute blocks automatic cross-site cookie transmission, eliminating CSRF."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Stateful Session Lookup",
          "note": "Requires server database or Redis session lookup (or short-lived JWT inside cookie)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Best-in-Class (Instant Revocation)",
          "note": "Delete session key in Redis to invalidate user session instantly across all devices."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Same-Domain Web Apps",
          "note": "Ideal for single-domain and multi-subdomain web applications."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Tiny (Session ID string)",
          "note": "Sends a short random session ID string (~32 bytes)."
        }
      },
      "tags": [
        "HttpOnly Cookie",
        "XSS Proof",
        "SameSite",
        "Session",
        "Web Gold Standard"
      ]
    },
    {
      "id": "jwt-bearer",
      "name": "Stateless JWT Bearer Token",
      "summary": "Cryptographically signed JSON Web Token passed in Authorization: Bearer headers.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Vulnerable if in LocalStorage",
          "note": "If stored in localStorage or JS memory, vulnerable to XSS token theft."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% CSRF Proof (Header)",
          "note": "Authorization: Bearer header is not sent automatically by browser, eliminating CSRF."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class Stateless (0 DB Calls)",
          "note": "Microservices verify RS256/ES256 signature locally without querying a central database."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Requires Blacklist / Short Expiry",
          "note": "Cannot revoke instantly unless using short-lived access tokens (15m) + refresh token rotation."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class Mobile & Microservices",
          "note": "The universal standard for mobile apps (iOS/Android) and microservices."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Larger Payload",
          "note": "Signed JWT claims payload sent on every request (~500 bytes)."
        }
      },
      "tags": [
        "JWT",
        "Stateless",
        "Bearer Token",
        "Mobile",
        "Microservices"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use HttpOnly SameSite=Lax Cookies for browser web application authentication to eliminate XSS token theft.",
    "Use JWT Bearer Tokens for mobile application APIs and microservices.",
    "Implement short-lived JWT access tokens (15 mins) paired with HttpOnly refresh token rotation."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Auth Scheme Selection",
        "description": "Choosing the web API authentication mechanism."
      },
      {
        "id": "p1",
        "label": "Browser Web Application XSS Protection",
        "description": "Need HttpOnly SameSite cookies to make authentication 100% immune to XSS token theft."
      },
      {
        "id": "p2",
        "label": "Stateless Mobile & Microservice Authorization",
        "description": "Need stateless signed JWT Bearer tokens for 0-DB call microservice verification."
      },
      {
        "id": "e1",
        "label": "HttpOnly Session Cookie",
        "description": "XSS-proof browser cookie authentication standard."
      },
      {
        "id": "e2",
        "label": "JWT Bearer Token",
        "description": "Stateless signed token for mobile and microservices."
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
