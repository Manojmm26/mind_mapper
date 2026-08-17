import { ComparisonWorkspaceData } from "../../services/llmService";

export const API_TESTING_TOOLS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "API Testing & Client Tools: Bruno vs Postman vs Insomnia vs Hoppscotch",
  "domainType": "tools",
  "overview": "A comparative evaluation of API clients evaluating git-friendly plain-text storage, privacy, cloud syncing, offline performance, and team collection sharing.",
  "recommendedApproach": "Use Bruno for git-native plain text Bru collections stored directly in source repositories; use Postman for cloud team workspaces; use Hoppscotch for lightweight web browser API testing.",
  "criteria": [
    {
      "id": "c1",
      "label": "Git-Native Plain-Text Storage (.bru)",
      "type": "text",
      "description": "Storing API collections as plain text files version-controlled directly inside git repositories."
    },
    {
      "id": "c2",
      "label": "Offline-First & Local Data Privacy",
      "type": "text",
      "description": "Executing requests 100% locally without forced cloud login or third-party data sync."
    },
    {
      "id": "c3",
      "label": "Cloud Workspace & Team Collaboration",
      "type": "text",
      "description": "Cloud syncing, shared team workspaces, and online API documentation hubs."
    },
    {
      "id": "c4",
      "label": "Pre-request Scripts & Test Automation",
      "type": "text",
      "description": "JavaScript pre-request scripts, environment variables, and automated collection runners."
    },
    {
      "id": "c5",
      "label": "Protocols (REST, GraphQL, gRPC, WebSockets)",
      "type": "text",
      "description": "Support for gRPC Protobuf, GraphQL schema introspection, and WebSocket streams."
    },
    {
      "id": "c6",
      "label": "License & Open-Source Autonomy",
      "type": "text",
      "description": "Open-source licensing vs commercial SaaS restrictions."
    }
  ],
  "options": [
    {
      "id": "bruno",
      "name": "Bruno",
      "summary": "Fast, git-friendly open-source API client that stores collections directly as plain-text files in your repository.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Best-in-Class (.bru Files)",
          "note": "Saves API requests in plain-text Bru language directly inside git repos for seamless PR reviews."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Local & Private",
          "note": "Zero cloud sync; zero forced account sign-in; your API secrets stay on disk."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Git Branch Driven",
          "note": "Team collaboration happens via standard Git branches and Pull Requests."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Node.js Scripting",
          "note": "Supports JavaScript pre-request scripts and npm package imports in tests."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "REST & GraphQL",
          "note": "First-class support for REST and GraphQL APIs."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "MIT License",
          "note": "100% open-source software under the MIT license."
        }
      },
      "tags": [
        "Bruno",
        "Git-Native",
        "Plain-Text",
        "Offline-First",
        "MIT"
      ]
    },
    {
      "id": "postman",
      "name": "Postman",
      "summary": "The pioneer enterprise API platform featuring cloud team workspaces, documentation hubs, and mock servers.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Complex JSON Export",
          "note": "Exports large JSON collection files which can lead to git merge conflicts."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Cloud Dependent",
          "note": "Requires cloud account login for primary workspace functionality."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class Cloud Teams",
          "note": "Turnkey real-time team workspaces, published docs, and automated mock servers."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Newman Runner",
          "note": "Newman CLI runs Postman collection tests inside CI/CD pipelines."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Universal (REST, gRPC, WS)",
          "note": "Supports REST, GraphQL, gRPC Protobuf, and WebSockets."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Commercial SaaS Tiers",
          "note": "Free tier with user seat limits; commercial enterprise plans."
        }
      },
      "tags": [
        "Postman",
        "Enterprise",
        "Cloud Workspace",
        "Newman"
      ]
    },
    {
      "id": "hoppscotch",
      "name": "Hoppscotch",
      "summary": "Lightweight open-source web-based API development ecosystem.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "JSON Imports",
          "note": "Exports/imports JSON collection files."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Browser Native",
          "note": "Runs directly inside the browser using PWA or desktop app."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Cloud & Self-Hosted",
          "note": "Hoppscotch Enterprise supports self-hosted team collaboration."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "JavaScript Scripting",
          "note": "Pre-request and post-response script assertions."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "REST, GraphQL, Socket.io",
          "note": "Great web-native support for REST, GraphQL, WebSockets, and SSE."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "MIT License",
          "note": "100% open-source software under MIT license."
        }
      },
      "tags": [
        "Hoppscotch",
        "Web-Native",
        "PWA",
        "Open-Source"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Bruno for development teams wanting API collection version control directly inside Git repos.",
    "Use Postman if your organization relies on public API documentation hubs and cloud team workspaces.",
    "Try Hoppscotch web PWA for quick, browser-native API debugging."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "API Client Selection",
        "description": "Choosing the API testing and documentation client."
      },
      {
        "id": "p1",
        "label": "Git-Native Plain Text Version Control",
        "description": "Want API requests stored as .bru text files inside git repo for PR reviews with 100% local privacy."
      },
      {
        "id": "p2",
        "label": "Enterprise Cloud Team Workspaces & Mock Servers",
        "description": "Need published cloud documentation hubs, mock servers, and automated Newman CI runners."
      },
      {
        "id": "p3",
        "label": "Lightweight Web-Browser PWA Testing",
        "description": "Need open-source web-native API tester with zero installation required."
      },
      {
        "id": "e1",
        "label": "Bruno",
        "description": "Git-native plain-text offline-first API client."
      },
      {
        "id": "e2",
        "label": "Postman",
        "description": "Pioneer enterprise cloud API platform."
      },
      {
        "id": "e3",
        "label": "Hoppscotch",
        "description": "Lightweight open-source web PWA API client."
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
