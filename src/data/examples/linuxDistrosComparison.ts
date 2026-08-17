import { ComparisonWorkspaceData } from "../../services/llmService";

export const LINUX_DISTROS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Linux Distributions for Cloud Servers: Ubuntu Server vs Rocky / AlmaLinux vs Debian vs Alpine",
  "domainType": "concepts",
  "overview": "An operating system evaluation comparing container image footprint, glibc vs musl libc, enterprise RHEL stability, package manager speed, and long-term support (LTS) lifecycles.",
  "recommendedApproach": "Use Alpine Linux for tiny 5MB container base images; use Ubuntu Server for cloud instances & AI/GPU drivers; use Debian for lightweight production stability; use Rocky/Alma for enterprise RHEL binary compatibility.",
  "criteria": [
    {
      "id": "c1",
      "label": "Base Image Footprint Size (MB)",
      "type": "text",
      "description": "5MB micro-image vs 100MB full OS distribution."
    },
    {
      "id": "c2",
      "label": "C Standard Library (glibc vs musl libc)",
      "type": "text",
      "description": "Standard GNU C library vs lightweight musl libc."
    },
    {
      "id": "c3",
      "label": "Package Manager & Software Repository Scope",
      "type": "text",
      "description": "apt / dpkg vs dnf / rpm vs apk."
    },
    {
      "id": "c4",
      "label": "Long-Term Support (LTS) Lifecycle",
      "type": "text",
      "description": "5-10 year enterprise security update commitments."
    },
    {
      "id": "c5",
      "label": "NVIDIA GPU Driver & AI Acceleration Support",
      "type": "text",
      "description": "Out-of-the-box CUDA drivers and PyTorch hardware acceleration."
    },
    {
      "id": "c6",
      "label": "RHEL Binary Compatibility (Red Hat Enterprise)",
      "type": "text",
      "description": "100% bug-for-bug compatible with Red Hat Enterprise Linux."
    }
  ],
  "options": [
    {
      "id": "ubuntu-server",
      "name": "Ubuntu Server (LTS)",
      "summary": "The world's most popular cloud Linux distribution backed by Canonical with extensive AI and hardware support.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "~80 MB Base",
          "note": "Standard server image footprint."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "GNU glibc",
          "note": "Standard glibc ensures 100% compatibility with all compiled binary C/C++ libraries."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Massive apt / PPA Repository",
          "note": "Largest software repository and third-party PPA availability."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "5-10 Year LTS",
          "note": "5 years standard LTS support (expandable to 10-12 years via Ubuntu Pro)."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Best-in-Class AI / GPU",
          "note": "First-class NVIDIA CUDA driver installation and AI cloud instance defaults."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Debian Family",
          "note": "Debian-based distribution."
        }
      },
      "tags": [
        "Ubuntu",
        "LTS",
        "Cloud Standard",
        "NVIDIA CUDA",
        "glibc"
      ]
    },
    {
      "id": "alpine",
      "name": "Alpine Linux",
      "summary": "Ultra-lightweight security-oriented Linux distribution based on musl libc and busybox.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (5 MB)",
          "note": "Microscopic 5MB base image size drastically reduces container pull times and attack surface."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "musl libc & BusyBox",
          "note": "Uses musl libc; requires care when running C-extension Python binaries or Node native modules."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Fast apk Package Manager",
          "note": "Blazing fast apk package manager."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Rolling / Stable",
          "note": "Community release cycle."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Minimal",
          "note": "Not recommended for heavy CUDA GPU workloads."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Independent",
          "note": "Independent minimal distribution."
        }
      },
      "tags": [
        "Alpine",
        "5MB",
        "musl libc",
        "Container Base",
        "Ultra-Lightweight"
      ]
    },
    {
      "id": "rocky-linux",
      "name": "Rocky Linux / AlmaLinux",
      "summary": "Community enterprise operating system designed to be 100% bug-for-bug compatible with RHEL.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "~150 MB Base",
          "note": "Enterprise distribution size."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "GNU glibc",
          "note": "Standard enterprise glibc implementation."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "dnf / rpm Repositories",
          "note": "Enterprise EPEL and dnf repositories."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "10-Year Enterprise Support",
          "note": "10-year stable maintenance lifecycle matching RHEL."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Enterprise GPU Support",
          "note": "Strong enterprise NVIDIA and HPC support."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "100% RHEL Compatible",
          "note": "Created to replace CentOS as the free enterprise RHEL binary standard."
        }
      },
      "tags": [
        "Rocky Linux",
        "AlmaLinux",
        "RHEL Compatible",
        "Enterprise",
        "10-Year Support"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Use Alpine Linux as the base image for lightweight container deployments.",
    "Use Ubuntu Server LTS for cloud VM instances running AI GPU workloads.",
    "Use Rocky Linux or AlmaLinux for enterprise infrastructure requiring RHEL binary compatibility."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Linux Distribution Selection",
        "description": "Choosing the Linux server or container OS."
      },
      {
        "id": "p1",
        "label": "Cloud Instances & NVIDIA GPU AI Workloads",
        "description": "Need glibc compatibility, massive apt repositories, and out-of-the-box CUDA drivers."
      },
      {
        "id": "p2",
        "label": "Microscopic 5MB Container Base Image",
        "description": "Need minimal container footprint with musl libc to eliminate attack surface."
      },
      {
        "id": "p3",
        "label": "100% RHEL Binary Compatibility & 10-Year Support",
        "description": "Need enterprise Red Hat binary compatibility and 10-year stability."
      },
      {
        "id": "e1",
        "label": "Ubuntu Server LTS",
        "description": "Dominant cloud Linux distribution with AI CUDA support."
      },
      {
        "id": "e2",
        "label": "Alpine Linux",
        "description": "Microscopic 5MB container base distribution."
      },
      {
        "id": "e3",
        "label": "Rocky Linux / AlmaLinux",
        "description": "100% free RHEL-compatible enterprise OS."
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
