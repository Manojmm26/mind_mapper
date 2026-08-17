import { ComparisonWorkspaceData } from "../../services/llmService";

export const LOCAL_FIRST_SYNC_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Local-First Software Architecture & Sync Engines: RxDB vs Replicache vs ElectricSQL vs Automerge CRDTs",
  "domainType": "approaches",
  "overview": "A technical evaluation of local-first data architectures comparing Conflict-Free Replicated Data Types (CRDTs), sync servers, offline capabilities, and instant UI updates.",
  "recommendedApproach": "Use Replicache for fast web apps syncing to existing backend APIs; use ElectricSQL for Postgres-native sync; use Automerge/Yjs for collaborative document editing.",
  "criteria": [
    {
      "id": "c1",
      "label": "Offline-First Read/Write Performance",
      "type": "text",
      "description": "Instant 0ms UI reads/writes directly against client indexedDB or SQLite."
    },
    {
      "id": "c2",
      "label": "Conflict Resolution Mechanism",
      "type": "text",
      "description": "CRDTs (LWW, PN-Counter) vs Server-authoritative mutation queue."
    },
    {
      "id": "c3",
      "label": "Postgres & Existing Backend Integration",
      "type": "text",
      "description": "Syncing directly with PostgreSQL WAL logical replication vs custom REST APIs."
    },
    {
      "id": "c4",
      "label": "Real-Time Collaborative Multi-User Editing",
      "type": "text",
      "description": "Figma/Notion style concurrent multi-user editing with cursor awareness."
    },
    {
      "id": "c5",
      "label": "Client Storage Engine (IndexedDB / SQLite)",
      "type": "text",
      "description": "Browser IndexedDB, OPFS SQLite, or React Native SQLite."
    },
    {
      "id": "c6",
      "label": "Developer Complexity & Mental Model",
      "type": "text",
      "description": "Effort to convert standard REST/GraphQL fetch app into local-first sync."
    }
  ],
  "options": [
    {
      "id": "replicache",
      "name": "Replicache",
      "summary": "Client-side sync framework giving web apps instant UI responses and background server sync.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "0ms Instant UI",
          "note": "Mutates local client memory/IndexedDB state immediately, then queues background push."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Server-Authoritative",
          "note": "Server pushes validated state changes back down; eliminates complex client CRDTs."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Integrates with Any API",
          "note": "Plugs into existing REST, GraphQL, or RPC endpoints in Node, Python, Go."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Very Good",
          "note": "Supports real-time sync via SSE or WebSockets."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "IndexedDB / OPFS",
          "note": "High-performance client key-value cache."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Pragmatic DX",
          "note": "Easiest way to add local-first feel to existing REST backends."
        }
      },
      "tags": [
        "Replicache",
        "Instant UI",
        "Server-Authoritative",
        "Sync"
      ]
    },
    {
      "id": "electric-sql",
      "name": "ElectricSQL",
      "summary": "Open-source sync engine that streams PostgreSQL data subsets directly to local client databases.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "0ms Local Reads/Writes",
          "note": "Queries local SQLite in browser or mobile device natively."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Rich CRDTs",
          "note": "Built-in relational CRDTs resolve concurrent updates automatically."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Postgres Logical Replication",
          "note": "Reads directly from Postgres WAL stream; zero backend sync code needed."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "High",
          "note": "Real-time sync across connected clients via Electric sync service."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "SQLite (wasm / native)",
          "note": "Full SQL support on client via SQLite WASM."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Elegant SQL",
          "note": "Write standard Drizzle / Prisma schemas and SQL queries locally."
        }
      },
      "tags": [
        "Postgres WAL",
        "SQLite WASM",
        "Relational CRDT",
        "Electric"
      ]
    },
    {
      "id": "automerge",
      "name": "Automerge / Yjs (CRDTs)",
      "summary": "Pure data-structure libraries for real-time collaborative document and state editing.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "0ms Local State",
          "note": "All edits are applied locally to the CRDT document instantly."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Mathematically Proven CRDT",
          "note": "Guarantees strong eventual consistency without a central server authority."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Custom Persistence",
          "note": "Requires custom bridge to save CRDT binary blobs into traditional databases."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Unmatched (Figma/Notion Style)",
          "note": "The gold standard for collaborative text editors (ProseMirror, Slate) and canvases."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "In-Memory + Binary Blobs",
          "note": "Encodes CRDT operation history into efficient binary buffers."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "High Complexity",
          "note": "Requires thinking in document trees and handling growing CRDT history size."
        }
      },
      "tags": [
        "CRDT",
        "Yjs",
        "Automerge",
        "Collaborative"
      ]
    },
    {
      "id": "rxdb",
      "name": "RxDB",
      "summary": "Reactive, offline-first JavaScript database for browsers, Node.js, and mobile apps.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Reactive Local Reads",
          "note": "RxJS observables emit updated query results whenever local database changes."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Custom GraphQL/REST Sync",
          "note": "Replication plugins for CouchDB, GraphQL, REST, or Peer-to-Peer."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Pluggable",
          "note": "Replicates with GraphQL backends or custom endpoints."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Good",
          "note": "Real-time subscriptions reflect changes across tabs and users."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Pluggable Storage",
          "note": "Supports IndexedDB, OPFS, SQLite, RxStorage, and memory backends."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Moderate",
          "note": "Requires defining JSON schemas and handling RxJS reactive streams."
        }
      },
      "tags": [
        "RxDB",
        "RxJS",
        "Offline-First",
        "Reactive"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Choose Replicache for adding 0ms instant UI responsiveness to existing web APIs.",
    "Choose ElectricSQL for Postgres-centric applications needing real-time local SQLite sync.",
    "Choose Yjs / Automerge for building collaborative rich text editors or whiteboards.",
    "Audit offline storage limits (IndexedDB vs OPFS SQLite) across target mobile browsers."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Local-First Architecture Selection",
        "description": "Choosing the local-first sync engine and data strategy."
      },
      {
        "id": "p1",
        "label": "Instant UI Sync for Existing REST Backends",
        "description": "Want 0ms local mutation feel while retaining existing server API endpoints."
      },
      {
        "id": "p2",
        "label": "Postgres-Native Local SQLite Streaming",
        "description": "Stream PostgreSQL database tables directly into browser SQLite WASM."
      },
      {
        "id": "p3",
        "label": "Real-Time Collaborative Multi-User Canvas / Text",
        "description": "Building Notion-like rich text or Figma-like canvas with CRDT consistency."
      },
      {
        "id": "p4",
        "label": "Reactive Observable Offline Database",
        "description": "Need RxJS reactive queries updating UI components automatically on local change."
      },
      {
        "id": "e1",
        "label": "Replicache",
        "description": "Client sync framework providing 0ms optimistic UI updates."
      },
      {
        "id": "e2",
        "label": "ElectricSQL",
        "description": "Postgres WAL streaming to browser/mobile SQLite databases."
      },
      {
        "id": "e3",
        "label": "Automerge / Yjs",
        "description": "Mathematical CRDT libraries for collaborative editing."
      },
      {
        "id": "e4",
        "label": "RxDB",
        "description": "Reactive offline-first JavaScript database with pluggable storage."
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
