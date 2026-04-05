/**
 * Wiki Schema Configuration
 *
 * Defines the structure, conventions, and LLM instructions for maintaining
 * a persistent, compounding knowledge base within the AI Mind Mapper.
 *
 * This transforms the LLM from a generic map generator into a disciplined
 * wiki architect that cross-references, updates, and maintains consistency
 * across all generated mind maps.
 */

import type { LintRule, LintIssue } from "../services/wikiLintRules";
import { LINT_RULES } from "../services/wikiLintRules";

// Re-export for consumers who import from wikiSchema
export type { LintRule, LintIssue };
export { LINT_RULES };

// ---------------------------------------------------------------------------
// Tag Taxonomy
// ---------------------------------------------------------------------------

export type TagCategory =
  | "domain"
  | "concept"
  | "technique"
  | "tool"
  | "status"
  | "priority";

export interface WikiTag {
  id: string;
  label: string;
  category: TagCategory;
  description?: string;
}

export const DEFAULT_TAG_TAXONOMY: WikiTag[] = [
  // Domains
  { id: "tech", label: "Technology", category: "domain" },
  { id: "science", label: "Science", category: "domain" },
  { id: "business", label: "Business", category: "domain" },
  { id: "health", label: "Health", category: "domain" },
  { id: "education", label: "Education", category: "domain" },
  { id: "personal", label: "Personal", category: "domain" },

  // Concepts
  { id: "foundational", label: "Foundational", category: "concept" },
  { id: "advanced", label: "Advanced", category: "concept" },
  { id: "theoretical", label: "Theoretical", category: "concept" },
  { id: "practical", label: "Practical", category: "concept" },

  // Techniques
  { id: "analysis", label: "Analysis", category: "technique" },
  { id: "synthesis", label: "Synthesis", category: "technique" },
  { id: "comparison", label: "Comparison", category: "technique" },
  { id: "roadmap", label: "Roadmap", category: "technique" },

  // Tools
  { id: "ai-generated", label: "AI Generated", category: "tool" },
  { id: "user-curated", label: "User Curated", category: "tool" },
  { id: "imported", label: "Imported", category: "tool" },

  // Status
  { id: "draft", label: "Draft", category: "status" },
  { id: "reviewed", label: "Reviewed", category: "status" },
  { id: "archived", label: "Archived", category: "status" },
  { id: "active", label: "Active", category: "status" },

  // Priority
  { id: "high", label: "High Priority", category: "priority" },
  { id: "medium", label: "Medium Priority", category: "priority" },
  { id: "low", label: "Low Priority", category: "priority" },
];

// ---------------------------------------------------------------------------
// Node & Edge Metadata Conventions
// ---------------------------------------------------------------------------

export type NodeType =
  | "topic"
  | "concept"
  | "example"
  | "question"
  | "action"
  | "decision"
  | "source"
  | "synthesis"
  | "contradiction";

export type EdgeRelation =
  | "parent"
  | "child"
  | "related"
  | "prerequisite"
  | "contradicts"
  | "supports"
  | "extends"
  | "references";

export interface WikiNodeMetadata {
  type?: NodeType;
  tags?: string[];
  importance?: "high" | "medium" | "low";
  confidence?: "high" | "medium" | "low";
  sourceHint?: string;
  nextStep?: string;
  wikilinks?: string[]; // [[Concept]] references
  lastUpdated?: string; // ISO date
  version?: number;
}

export interface WikiEdgeMetadata {
  relation?: EdgeRelation;
  strength?: "strong" | "moderate" | "weak";
  note?: string;
}

// ---------------------------------------------------------------------------
// Ingestion Workflow
// ---------------------------------------------------------------------------

export type IngestionSource = "document" | "topic" | "comparison" | "manual";

export interface IngestionResult {
  wikiPageId: string;
  nodesCreated: number;
  edgesCreated: number;
  crossReferences: string[]; // IDs of other wiki pages referenced
  contradictionsFlagged: number;
  indexUpdated: boolean;
  logEntry: string;
}

export const INGESTION_WORKFLOW = {
  steps: [
    "1. Parse source content and extract key concepts",
    "2. Generate hierarchical mind map structure",
    "3. Cross-reference with existing wiki index for related topics",
    "4. Add [[wikilink]] syntax to nodes that match existing concepts",
    "5. Flag any contradictions with previously stored information",
    "6. Update central wiki index with new page metadata",
    "7. Append chronological log entry",
    "8. Return structured result for UI display",
  ],
  maxNodesPerMap: 80,
  minNodesPerMap: 15,
  preferredDepth: 4,
  crossReferenceThreshold: 0.7, // Similarity score to trigger wikilink
};

// ---------------------------------------------------------------------------
// Maintenance & Lint Rules
// ---------------------------------------------------------------------------

// LintRule, LintIssue, and LINT_RULES are imported and re-exported at the top.

// ---------------------------------------------------------------------------
// Wiki Page Structure
// ---------------------------------------------------------------------------

export interface WikiPage {
  id: string; // Unique identifier (slugified topic)
  title: string;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  sourceType: IngestionSource;
  sourceName?: string; // Original filename or query
  nodes: Array<{
    id: string;
    label: string;
    description?: string;
    metadata?: WikiNodeMetadata;
  }>;
  edges: Array<{
    source: string;
    target: string;
    label?: string;
    metadata?: WikiEdgeMetadata;
  }>;
  metadata: {
    tags: string[];
    relatedPages: string[]; // Wiki page IDs
    nodeCount: number;
    version: number;
    summary?: string; // AI-generated one-line summary
    wikilinks?: string[]; // [[Concept]] references used across this page
    lastUpdated?: string; // ISO date of last content update
  };
}

// ---------------------------------------------------------------------------
// LLM Instructions for Wiki Maintenance
// ---------------------------------------------------------------------------

export const LLM_WIKI_INSTRUCTIONS = `
You are a disciplined knowledge architect maintaining a persistent wiki of mind maps.

## Core Principles
1. **Accumulation over Retrieval**: Every new mind map should build upon existing knowledge, not replace it.
2. **Cross-Reference Everything**: When generating a new map, actively link to concepts from previous maps using [[wikilink]] syntax.
3. **Flag Contradictions**: If new information conflicts with existing pages, note it explicitly in the node's sourceHint or metadata.
4. **Maintain Consistency**: Use the same terminology, tag taxonomy, and node types across all pages.

## When Generating a New Map
1. Review the provided wiki index for existing related topics.
2. Use [[Concept Name]] syntax when a node matches or relates to an existing concept.
3. Add a sourceHint noting where the idea came from (document name, previous map, etc.).
4. Assign appropriate tags from the defined taxonomy.
5. Ensure the map has proper hierarchy: 1 root → 4-8 pillars → 2-5 sub-concepts each → details.

## When Updating Existing Knowledge
1. Never delete existing nodes unless explicitly requested.
2. If new information supersedes old claims, update the description and add a version note.
3. Strengthen cross-references by adding bidirectional links.
4. Update the page's updatedAt timestamp and increment version.

## Output Format
- Return structured JSON matching the MindMapData schema.
- Include metadata on nodes: type, tags, importance, confidence, sourceHint, wikilinks.
- Keep labels concise (max 6 words), descriptions specific and educational (1-2 sentences).
- Target 20-60 nodes per map, 3-4 levels deep.
`;

// ---------------------------------------------------------------------------
// Default Schema Export
// ---------------------------------------------------------------------------

export interface WikiSchemaConfig {
  tagTaxonomy: WikiTag[];
  ingestionWorkflow: typeof INGESTION_WORKFLOW;
  lintRules: LintRule[];
  llmInstructions: string;
  maxPages: number;
  autoLintInterval: number; // Days between automatic lint checks
}

export const DEFAULT_WIKI_SCHEMA: WikiSchemaConfig = {
  tagTaxonomy: DEFAULT_TAG_TAXONOMY,
  ingestionWorkflow: INGESTION_WORKFLOW,
  lintRules: LINT_RULES,
  llmInstructions: LLM_WIKI_INSTRUCTIONS,
  maxPages: 500,
  autoLintInterval: 7,
};
