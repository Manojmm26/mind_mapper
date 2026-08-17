import { ComparisonWorkspaceData } from "../../services/llmService";

export const SECRET_MANAGEMENT_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Secret Management & Vault Infrastructure: HashiCorp Vault vs AWS Secrets Manager vs Infisical vs Bitwarden",
  "domainType": "tools",
  "overview": "A cloud security evaluation comparing dynamic secrets generation, hardware security module (HSM) encryption, developer secret syncing, self-hosted open-source control, and compliance auditing.",
  "recommendedApproach": "Use HashiCorp Vault for enterprise dynamic secret lease generation and HSM encryption; use AWS Secrets Manager for native AWS rotation; use Infisical for modern developer secret sync.",
  "criteria": [
    {
      "id": "c1",
      "label": "Dynamic Secret Generation (Database Leases / Cloud IAM)",
      "type": "text",
      "description": "Generating short-lived ephemeral credentials that expire automatically after minutes."
    },
    {
      "id": "c2",
      "label": "Developer Secret Syncing & CLI Integration",
      "type": "text",
      "description": "Injecting environment variables into local dev environments (.env) securely."
    },
    {
      "id": "c3",
      "label": "Hardware Security Module (HSM) & KMS Encryption",
      "type": "text",
      "description": "Envelope encryption with FIPS 140-2 Level 3 HSM keys."
    },
    {
      "id": "c4",
      "label": "Automatic Secret Rotation",
      "type": "text",
      "description": "Automated password and API key rotation via Lambda/Vault functions."
    },
    {
      "id": "c5",
      "label": "Self-Hosted Open Source vs Managed Cloud SaaS",
      "type": "text",
      "description": "Air-gapped private cluster deployment vs zero-ops cloud service."
    },
    {
      "id": "c6",
      "label": "Audit Logging & Compliance Governance",
      "type": "text",
      "description": "Immutable log of every secret read, update, or deletion for SOC2 compliance."
    }
  ],
  "options": [
    {
      "id": "hashicorp-vault",
      "name": "HashiCorp Vault",
      "summary": "The gold-standard enterprise secret management and data protection platform.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (Dynamic Secrets)",
          "note": "Generates dynamic ephemeral credentials for Postgres, AWS, and K8s on demand with TTL leases."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Vault Agent & Secrets Operator",
          "note": "Vault Agent and Kubernetes Secrets Store CSI driver inject secrets directly into pods."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "FIPS 140-2 Level 3 HSM",
          "note": "Integrates with enterprise HSMs for master key unsealing and envelope encryption."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Automated Lease Renewal",
          "note": "Revokes credentials automatically when leases expire."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Self-Hosted & HCP Vault",
          "note": "Deploy self-hosted cluster or use HCP Vault managed cloud."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Gold Standard Audit",
          "note": "Detailed, immutable audit logs sent to SIEM backends."
        }
      },
      "tags": [
        "Vault",
        "HashiCorp",
        "Dynamic Secrets",
        "Gold Standard",
        "HSM"
      ]
    },
    {
      "id": "infisical",
      "name": "Infisical",
      "summary": "The open-source secret management platform built for modern developer teams and CI/CD pipelines.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Dynamic Credentials",
          "note": "Supports dynamic database secrets and OAuth integrations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Developer DX",
          "note": "'infisical run' injects secrets into local dev commands without writing plain-text .env files to disk."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "End-to-End Encryption",
          "note": "AES-256-GCM encryption with client-side key derivation."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Secret Rotation",
          "note": "Automated secret rotation for database passwords."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "100% Open-Source & Cloud",
          "note": "Deploy via Docker/K8s or use Infisical Cloud SaaS."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Audit Logs & RBAC",
          "note": "Clean dashboard for secret access audit history."
        }
      },
      "tags": [
        "Infisical",
        "Open-Source",
        "Developer DX",
        "Secret Sync",
        "E2EE"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt HashiCorp Vault for enterprise dynamic secret generation and HSM encryption.",
    "Adopt Infisical for modern developer secret management replacing plain-text .env files.",
    "Eliminate hardcoded long-lived cloud credentials by implementing short-lived dynamic secret leases."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Secret Management Selection",
        "description": "Choosing the vault and secret management solution."
      },
      {
        "id": "p1",
        "label": "Enterprise Dynamic Secret Leases & HSM Encryption",
        "description": "Need short-lived ephemeral credentials generated on demand with HSM key unsealing."
      },
      {
        "id": "p2",
        "label": "Developer DX & Secure .env Local Secret Injection",
        "description": "Need developer-centric secret sync CLI injecting environment variables without disk writes."
      },
      {
        "id": "e1",
        "label": "HashiCorp Vault",
        "description": "Gold standard enterprise dynamic secret management platform."
      },
      {
        "id": "e2",
        "label": "Infisical",
        "description": "Open-source developer-first secret management platform."
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
