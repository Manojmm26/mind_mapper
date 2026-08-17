import { ComparisonWorkspaceData } from "../../services/llmService";

export const AGENT_MEMORY_ARCHITECTURES_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "AI Agent Memory Architectures: Short-Term Buffer vs Vector Semantic vs Knowledge Graph vs Summary Memory",
  "domainType": "concepts",
  "overview": "An AI agent cognitive architecture comparison evaluating short-term conversation context buffers, vector semantic memory, knowledge graph entity relations, and hierarchical summary consolidation.",
  "recommendedApproach": "Use Vector Semantic Memory + Conversation Summary for long-term agent retention; use Knowledge Graph Memory for entity-relationship tracking; use Short-Term Window Buffer for low latency.",
  "criteria": [
    {
      "id": "c1",
      "label": "Context Window Utilization & Token Efficiency",
      "type": "text",
      "description": "Optimizing context window limits while preserving historical context."
    },
    {
      "id": "c2",
      "label": "Semantic Retrieval Accuracy (Embedding Similarity)",
      "type": "text",
      "description": "Retrieving relevant past memories based on semantic query vector distance."
    },
    {
      "id": "c3",
      "label": "Entity-Relationship & Fact Tracking",
      "type": "text",
      "description": "Tracking user facts, preferences, and entity relationships deterministically."
    },
    {
      "id": "c4",
      "label": "Memory Consolidation & Reflection",
      "type": "text",
      "description": "Summarizing background conversations asynchronously during idle periods."
    },
    {
      "id": "c5",
      "label": "Retrieval Latency Overhead (ms)",
      "type": "text",
      "description": "Latency added before generating the next agent turn."
    },
    {
      "id": "c6",
      "label": "Implementation Complexity",
      "type": "text",
      "description": "Ease of implementation in Mem0, Zep, LangChain, or LlamaIndex."
    }
  ],
  "options": [
    {
      "id": "vector-semantic-memory",
      "name": "Vector Semantic Memory (Zep / Mem0)",
      "summary": "Stores past conversation turns as vector embeddings in a vector DB for semantic similarity search.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "High Token Savings",
          "note": "Injects only top-k relevant historical memories into prompt context."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Best-in-Class Semantic Search",
          "note": "Finds related memories based on embedding distance regardless of exact keywords."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Unstructured Vector",
          "note": "Stores raw semantic text passages."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Async Embedding",
          "note": "Embeds and stores memory turns asynchronously."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Low Latency (Sub-20ms)",
          "note": "Fast vector search lookup."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Mem0 / Zep Standard",
          "note": "Supported natively in Mem0 and Zep agent memory services."
        }
      },
      "tags": [
        "Vector Memory",
        "Semantic Search",
        "Mem0",
        "Zep",
        "Long-Term"
      ]
    },
    {
      "id": "knowledge-graph-memory",
      "name": "Knowledge Graph Memory (GraphRAG)",
      "summary": "Extracts entities, facts, and relationships from conversations into a graph database structure.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Exact Fact Retrieval",
          "note": "Retrieves explicit subgraphs (e.g. User -> LIVES_IN -> Seattle) without hallucination."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Graph Traversal",
          "note": "Traverses 2-hop entity relationships for complex multi-fact queries."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Best-in-Class Fact Precision",
          "note": "Tracks deterministic user preferences, dates, and entity attributes."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "LLM Entity Extraction",
          "note": "Requires LLM extraction calls to identify entities and triples."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Moderate",
          "note": "Graph query latency."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Neo4j / GraphRAG",
          "note": "Implemented via Neo4j or GraphRAG memory modules."
        }
      },
      "tags": [
        "Knowledge Graph",
        "GraphRAG",
        "Entity Tracking",
        "Deterministic Facts"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Vector Semantic Memory (via Mem0 or Zep) for long-term agent memory retention.",
    "Combine Knowledge Graph Memory with Vector Memory for complex multi-user CRM applications.",
    "Implement asynchronous memory consolidation workers to summarize chat logs in the background."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Agent Memory Selection",
        "description": "Choosing the AI agent memory architecture."
      },
      {
        "id": "p1",
        "label": "Semantic Long-Term Similarity Retrieval",
        "description": "Need vector embeddings to retrieve relevant conversation turns by semantic similarity."
      },
      {
        "id": "p2",
        "label": "Deterministic Entity & Fact Relationship Tracking",
        "description": "Need graph database triples (User -> LIVES_IN -> City) to track facts accurately."
      },
      {
        "id": "e1",
        "label": "Vector Semantic Memory",
        "description": "Vector database long-term agent memory."
      },
      {
        "id": "e2",
        "label": "Knowledge Graph Memory",
        "description": "Entity-relationship graph memory architecture."
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
