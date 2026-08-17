import { ComparisonWorkspaceData } from "../../services/llmService";

export const IAC_TOOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Infrastructure as Code (IaC): Terraform vs Pulumi vs OpenTofu vs AWS CDK vs Ansible",
  "domainType": "tools",
  "overview": "A comprehensive comparison of IaC and configuration management frameworks evaluating declarative HCL vs imperative real programming languages, state management, and provider ecosystems.",
  "recommendedApproach": "Use Terraform or OpenTofu for declarative multi-cloud infrastructure; use Pulumi or AWS CDK if your team strongly prefers TypeScript/Python/Go software engineering patterns; use Ansible for OS configuration management.",
  "criteria": [
    {
      "id": "c1",
      "label": "Language Model (HCL vs Real Code)",
      "type": "text",
      "description": "Declarative configuration (HCL/YAML) vs imperative programming (TS, Python, Go, C#)."
    },
    {
      "id": "c2",
      "label": "State Management & Lock Synchronization",
      "type": "text",
      "description": "State file tracking, concurrency locking, and drift detection."
    },
    {
      "id": "c3",
      "label": "Multi-Cloud Provider Ecosystem",
      "type": "text",
      "description": "Availability and freshness of AWS, GCP, Azure, and third-party SaaS providers."
    },
    {
      "id": "c4",
      "label": "Open Source Licensing & Governance",
      "type": "text",
      "description": "BSL vs Apache 2.0 / Linux Foundation governance."
    },
    {
      "id": "c5",
      "label": "Testing & Software Engineering Abstractions",
      "type": "text",
      "description": "Unit testing, loop constructs, package sharing (npm/PyPI), and object-oriented abstractions."
    },
    {
      "id": "c6",
      "label": "Day-2 OS & Configuration Management",
      "type": "text",
      "description": "Ability to configure internal OS packages, service daemons, and SSH tasks."
    }
  ],
  "options": [
    {
      "id": "terraform",
      "name": "HashiCorp Terraform",
      "summary": "The pioneer and most widely used declarative IaC tool powered by HCL.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Declarative (HCL)",
          "note": "HashiCorp Configuration Language (HCL) provides domain-specific clarity."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "State File (S3/DynamoDB)",
          "note": "Requires remote state backends with lock mechanisms to prevent race conditions."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Industry Standard",
          "note": "Thousands of community and official cloud providers."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "BSL License",
          "note": "Transitioned from open-source to Business Source License (BSL)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderate",
          "note": "HCL supports modules, but lacks native unit testing and OOP abstractions."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Provisioning Only",
          "note": "Focuses on infrastructure provisioning, not in-instance OS config."
        }
      },
      "tags": [
        "HCL",
        "Declarative",
        "Industry Standard",
        "HashiCorp"
      ]
    },
    {
      "id": "pulumi",
      "name": "Pulumi",
      "summary": "Modern IaC platform allowing developers to infrastructure using TypeScript, Python, Go, or C#.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Real Code (TS/Py/Go)",
          "note": "Use standard loops, classes, functions, and IDE auto-complete."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Pulumi Cloud / S3",
          "note": "Managed SaaS state backend or self-managed object storage."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Extensive",
          "note": "Bridged Terraform providers plus native auto-generated providers."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Apache 2.0",
          "note": "Open-source core SDKs and CLI under Apache 2.0 license."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class",
          "note": "Use Jest, PyTest, or Go testing frameworks; publish reusable npm/PyPI modules."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Provisioning Only",
          "note": "Integrates with Ansible/UserData for post-boot configuration."
        }
      },
      "tags": [
        "TypeScript",
        "Python",
        "Real-Languages",
        "Apache-2.0"
      ]
    },
    {
      "id": "opentofu",
      "name": "OpenTofu (Linux Foundation)",
      "summary": "The open-source, community-governed fork of Terraform maintained by the Linux Foundation.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Declarative (HCL)",
          "note": "100% compatible with existing Terraform HCL configurations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "State Compatible",
          "note": "Uses identical state file formats and remote backends."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Open Registry",
          "note": "OpenTofu registry mirrors all open-source providers."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Linux Foundation (MPL 2.0)",
          "note": "Truly open-source and vendor-neutral community governance."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Enhanced HCL",
          "note": "Adds requested features like dynamic provider iteration and improved state encryption."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Provisioning Only",
          "note": "Focuses on infrastructure provisioning."
        }
      },
      "tags": [
        "Open-Source",
        "Linux Foundation",
        "Fork",
        "HCL"
      ]
    },
    {
      "id": "aws-cdk",
      "name": "AWS CDK",
      "summary": "AWS-native software development framework to define cloud infrastructure in TypeScript/Python.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Real Code (TS/Py/Java)",
          "note": "Synthesizes real code constructs into CloudFormation templates."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "CloudFormation State",
          "note": "Delegates state management entirely to AWS CloudFormation service."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "AWS Only (CDKTF for others)",
          "note": "Purpose-built for AWS services (though CDKTF extends to Terraform)."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Apache 2.0",
          "note": "Open-source framework backed by AWS."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Outstanding (AWS)",
          "note": "L2 and L3 constructs provide incredible high-level AWS architectural defaults."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Provisioning Only",
          "note": "Relies on CloudFormation init or EC2 UserData."
        }
      },
      "tags": [
        "AWS",
        "CloudFormation",
        "Constructs",
        "TypeScript"
      ]
    },
    {
      "id": "ansible",
      "name": "Red Hat Ansible",
      "summary": "Agentless automation engine for OS configuration management, application deployment, and orchestration.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Declarative YAML",
          "note": "Playbooks defined in human-readable YAML tasks."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Stateless (Idempotent)",
          "note": "No state file; checks target system current state via SSH/WinRM."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Broad",
          "note": "Modules for cloud provisioning, network switches, and Linux/Windows OS."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "GPLv3",
          "note": "Open-source engine supported by Red Hat Enterprise."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Good (Roles)",
          "note": "Ansible Galaxy provides reusable roles and collections."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Best-in-Class",
          "note": "Unrivaled for package installation, config editing, and SSH task automation."
        }
      },
      "tags": [
        "Agentless",
        "SSH",
        "Config Management",
        "YAML"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Decide team paradigm preference: Declarative HCL (OpenTofu/Terraform) vs Software Code (Pulumi/CDK).",
    "If concerned with BSL licensing, migrate to OpenTofu (drop-in replacement).",
    "Use Ansible alongside Terraform/Pulumi to handle post-boot Linux/Windows package configuration.",
    "Set up CI/CD pipeline (GitHub Actions/GitLab) with automated 'plan/preview' PR comments."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "IaC Tool Selection",
        "description": "Choosing the right infrastructure automation stack."
      },
      {
        "id": "p1",
        "label": "Declarative Multi-Cloud HCL Standard",
        "description": "Need battle-tested HCL configurations across AWS, GCP, and Azure."
      },
      {
        "id": "p2",
        "label": "Software Engineering (TypeScript / Python)",
        "description": "Prefer real programming languages, unit testing, and npm/PyPI modules."
      },
      {
        "id": "p3",
        "label": "AWS-Exclusive High-Level Constructs",
        "description": "Deeply integrated AWS architecture using CloudFormation."
      },
      {
        "id": "p4",
        "label": "Agentless OS Configuration & SSH",
        "description": "Need to manage Linux packages, config files, and server security patches."
      },
      {
        "id": "e1",
        "label": "OpenTofu / Terraform",
        "description": "The open-source HCL standard for multi-cloud provisioning."
      },
      {
        "id": "e2",
        "label": "Pulumi",
        "description": "Multi-cloud infrastructure defined in real TypeScript, Python, or Go."
      },
      {
        "id": "e3",
        "label": "AWS CDK",
        "description": "High-level object-oriented constructs for AWS CloudFormation."
      },
      {
        "id": "e4",
        "label": "Ansible",
        "description": "Agentless YAML automation for OS configuration management."
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
