import { ComparisonWorkspaceData } from "../../services/llmService";

export const IAM_PROTOCOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "IAM Security Protocols: OAuth 2.1 vs OpenID Connect (OIDC) vs SAML 2.0 vs Passkeys (WebAuthn)",
  "domainType": "concepts",
  "overview": "A cybersecurity protocol evaluation comparing delegated authorization (OAuth 2.1), identity authentication (OIDC), enterprise SSO (SAML 2.0), and passwordless FIDO2 WebAuthn Passkeys.",
  "recommendedApproach": "Use OAuth 2.1 + PKCE for delegated API authorization; use OpenID Connect (OIDC) for user identity ID tokens; use WebAuthn Passkeys for phishing-resistant passwordless MFA; use SAML 2.0 for enterprise B2B SSO.",
  "criteria": [
    {
      "id": "c1",
      "label": "Primary Security Purpose (AuthN vs AuthZ vs SSO)",
      "type": "text",
      "description": "User authentication (AuthN) vs scope authorization (AuthZ) vs enterprise single sign-on."
    },
    {
      "id": "c2",
      "label": "Phishing Resistance & Cryptographic Key Pairs",
      "type": "text",
      "description": "Hardware-bound asymmetric key pairs (FIDO2) preventing credential interception."
    },
    {
      "id": "c3",
      "label": "Data Payload Format (JSON Web Tokens vs XML)",
      "type": "text",
      "description": "Lightweight JWT tokens (ID/Access) vs verbose XML SAML assertions."
    },
    {
      "id": "c4",
      "label": "Proof Key for Code Exchange (PKCE) Requirement",
      "type": "text",
      "description": "Mandatory PKCE flow preventing authorization code interception attacks on public clients."
    },
    {
      "id": "c5",
      "label": "Enterprise B2B IdP Compatibility (Okta, Entra ID)",
      "type": "text",
      "description": "Integration with enterprise Identity Providers (Azure AD / Okta / Ping)."
    },
    {
      "id": "c6",
      "label": "Mobile & Web Browser API Integration",
      "type": "text",
      "description": "Native navigator.credentials WebAuthn browser API support."
    }
  ],
  "options": [
    {
      "id": "oidc",
      "name": "OpenID Connect (OIDC)",
      "summary": "The identity layer built on top of the OAuth 2.0 framework providing user authentication via ID Tokens.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Authentication (AuthN)",
          "note": "Adds standardized identity authentication layer (ID Token) to OAuth 2.0."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Bearer JWT Token",
          "note": "Signed JSON Web Tokens (RS256/ES256) verify user identity."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "JSON / JWT",
          "note": "Lightweight JSON payloads easily decoded in web and mobile apps."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "OAuth 2.1 PKCE Flow",
          "note": "Mandated PKCE (Authorization Code + PKCE) for SPA and mobile clients."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Modern Industry Standard",
          "note": "Supported natively by Google, Apple, Auth0, Clerk, and Keycloak."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Universal Web & Mobile",
          "note": "Simple HTTP redirect flows."
        }
      },
      "tags": [
        "OIDC",
        "OpenID Connect",
        "Authentication",
        "JWT",
        "Standard"
      ]
    },
    {
      "id": "passkeys",
      "name": "WebAuthn Passkeys (FIDO2)",
      "summary": "Phishing-resistant passwordless authentication standard using public key cryptography.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Phishing-Resistant AuthN",
          "note": "Replaces passwords with hardware-bound public/private key pairs (TouchID, FaceID, YubiKey)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Phishing Proof",
          "note": "Domain-bound cryptographic origin checks make phishing attacks impossible."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Binary CBOR Payload",
          "note": "Structured WebAuthn credentials processed in browser."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Hardware Challenge",
          "note": "Server issues cryptographic challenge signed by device authenticator."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Modern Passwordless Standard",
          "note": "Backed by Apple, Google, Microsoft, and FIDO Alliance."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Native Browser API",
          "note": "Invoked via navigator.credentials.create() and get()."
        }
      },
      "tags": [
        "Passkeys",
        "WebAuthn",
        "FIDO2",
        "Phishing-Resistant",
        "Passwordless"
      ]
    },
    {
      "id": "saml2",
      "name": "SAML 2.0",
      "summary": "The XML-based open standard for exchanging authentication and authorization data between enterprise IdPs.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Enterprise B2B Single Sign-On",
          "note": "Industry standard for enterprise employee SSO login."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "XML Digital Signatures",
          "note": "Signed XML assertions guarantee authenticity."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Verbose XML",
          "note": "Heavy XML payload formatted with SAML Assertions and Attributes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Redirect & POST Binding",
          "note": "HTTP-Redirect and HTTP-POST browser form bindings."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Legacy Enterprise Standard",
          "note": "Required by legacy enterprise IT departments (Microsoft Entra, Ping, Shibboleth)."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Enterprise Server Proxy",
          "note": "Handled via server-side SAML service provider libraries."
        }
      },
      "tags": [
        "SAML 2.0",
        "Enterprise SSO",
        "XML",
        "B2B",
        "IdP"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt OpenID Connect (OIDC) with OAuth 2.1 PKCE as the baseline authentication protocol for web and mobile apps.",
    "Implement WebAuthn Passkeys for phishing-resistant passwordless MFA.",
    "Support SAML 2.0 / Enterprise OIDC SSO for B2B enterprise organization customers."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "IAM Protocol Selection",
        "description": "Choosing the identity and access management security protocol."
      },
      {
        "id": "p1",
        "label": "Modern Web/Mobile User Authentication & OAuth 2.1 PKCE",
        "description": "Need lightweight JWT ID tokens and authorization code + PKCE flows."
      },
      {
        "id": "p2",
        "label": "Phishing-Resistant Passwordless MFA (FIDO2)",
        "description": "Need hardware-bound public key cryptography using TouchID/FaceID/YubiKey."
      },
      {
        "id": "p3",
        "label": "Enterprise B2B Corporate Single Sign-On (SSO)",
        "description": "Need XML SAML assertions for enterprise identity provider integration."
      },
      {
        "id": "e1",
        "label": "OpenID Connect (OIDC)",
        "description": "JWT-based authentication layer built on OAuth 2.0."
      },
      {
        "id": "e2",
        "label": "WebAuthn Passkeys",
        "description": "FIDO2 phishing-resistant passwordless authentication standard."
      },
      {
        "id": "e3",
        "label": "SAML 2.0",
        "description": "Enterprise XML single sign-on protocol."
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
