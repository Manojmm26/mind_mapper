/**
 * Wiki Prompt Enhancer - Context Injection for LLM Generation
 *
 * This service bridges the persistent wiki knowledge base with the LLM generation
 * pipeline. It analyzes the current user query against the existing wiki index
 * and concept graph, then injects a structured context block into the LLM prompt.
 *
 * This enables the "compounding knowledge" behavior:
 * - The LLM knows what you already know.
 * - It cross-references new concepts with existing pages using [[wikilinks]].
 * - It flags contradictions between new information and stored knowledge.
 * - It avoids duplicating content that already exists in the wiki.
 */

import { WikiIndexEntry } from "./wikiService";
import { ConceptIndex, ConceptEntry, normalizeConceptName } from "./wikiIndex";
import { WikiPage } from "../config/wikiSchema";

// ---------------------------------------------------------------------------
// Context Data Structures
// ---------------------------------------------------------------------------

export interface WikiContext {
  /** Pages from the wiki that are semantically related to the current query */
  relatedPages: WikiIndexEntry[];
  /** Concepts from the global index that match or relate to the query */
  sharedConcepts: ConceptEntry[];
  /** Formatted context string ready to be injected into the LLM prompt */
  contextString: string;
}

// ---------------------------------------------------------------------------
// Context Builder
// ---------------------------------------------------------------------------

/**
 * Analyzes the user's query against the wiki index and concept graph
 * to build a relevant context block for the LLM.
 */
export function buildWikiContext(
  query: string,
  indexEntries: WikiIndexEntry[],
  conceptIndex: ConceptIndex,
  fullPages?: WikiPage[]
): WikiContext {
  const normalizedQuery = normalizeConceptName(query);
  const queryTerms = normalizedQuery.split("-").filter(Boolean);

  // 1. Find related pages by matching query terms against titles, tags, and summaries
  const relatedPages = indexEntries.filter((entry) => {
    const titleMatch = entry.title.toLowerCase().includes(normalizedQuery);
    const tagMatch = entry.tags.some((tag) =>
      queryTerms.some((term) => tag.toLowerCase().includes(term))
    );
    const summaryMatch = entry.summary
      .toLowerCase()
      .includes(normalizedQuery);

    return titleMatch || tagMatch || summaryMatch;
  }).slice(0, 5); // Limit to top 5 most relevant pages

  // 2. Find shared concepts that match the query
  const sharedConcepts = Object.values(conceptIndex.concepts).filter(
    (concept) => {
      const labelMatch = concept.label.toLowerCase().includes(normalizedQuery);
      const tagMatch = concept.tags?.some((tag) =>
        queryTerms.some((term) => tag.toLowerCase().includes(term))
      );
      return labelMatch || tagMatch;
    }
  ).slice(0, 10);

  // Map related page IDs to full pages if provided
  const pageDetailsMap = new Map<string, WikiPage>();
  if (fullPages) {
    for (const page of fullPages) {
      pageDetailsMap.set(page.id, page);
    }
  }

  // 3. Build the context string
  const contextString = formatContextForPrompt(query, relatedPages, sharedConcepts, pageDetailsMap);

  return { relatedPages, sharedConcepts, contextString };
}

// ---------------------------------------------------------------------------
// Prompt Formatting
// ---------------------------------------------------------------------------

/**
 * Formats the wiki context into a structured instruction block for the LLM.
 * This block is designed to be appended to the base mind map generation prompt.
 */
function formatContextForPrompt(
  query: string,
  relatedPages: WikiIndexEntry[],
  sharedConcepts: ConceptEntry[],
  pageDetailsMap?: Map<string, WikiPage>
): string {
  if (relatedPages.length === 0 && sharedConcepts.length === 0) {
    return "";
  }

  let context = `\n\n--- WIKI CONTEXT: EXISTING KNOWLEDGE BASE ---\n`;
  context += `You are building upon an existing knowledge base. The user already has mind maps on related topics.\n`;
  context += `Your goal is to EXPAND and CROSS-REFERENCE, not duplicate.\n\n`;

  if (relatedPages.length > 0) {
    context += `## Existing Related Pages & Key Concepts\n`;
    context += `The following pages already exist in the wiki. Reference them using [[Page Title]] syntax where appropriate.\n`;
    for (const page of relatedPages) {
      const fullPage = pageDetailsMap?.get(page.id);
      context += `- [[${page.title}]] (${page.sourceType}): ${page.summary || "No summary available."}\n`;
      if (fullPage && fullPage.nodes.length > 0) {
        const topNodes = fullPage.nodes.slice(0, 5);
        context += `  - Key Nodes: ${topNodes.map(n => `"${n.label}"${n.description ? `: ${n.description.substring(0, 60)}...` : ""}`).join("; ")}\n`;
      }
    }
    context += `\n`;
  }

  if (sharedConcepts.length > 0) {
    context += `## Recurring Concepts\n`;
    context += `These concepts appear across multiple existing pages. Ensure consistency in terminology and link to them.\n`;
    for (const concept of sharedConcepts) {
      context += `- **${concept.label}**: Appears in ${concept.pageIds.length} page(s). Tags: ${concept.tags?.join(", ") || "none"}\n`;
    }
    context += `\n`;
  }

  context += `## Instructions for Integration\n`;
  context += `1. When a node in your new map relates to an existing page, add a [[wikilink]] in its description or sourceHint.\n`;
  context += `2. If your new information contradicts an existing page, add a note in sourceHint: "Note: This contrasts with [[Page Title]] which states..." \n`;
  context += `3. Do not recreate concepts that are already well-covered in existing pages. Instead, link to them and explain the new perspective.\n`;
  context += `4. Use the same terminology and tags as the existing wiki to maintain consistency.\n`;
  context += `--- END WIKI CONTEXT ---\n`;

  return context;
}

// ---------------------------------------------------------------------------
// Prompt Enhancer
// ---------------------------------------------------------------------------

/**
 * Takes a base LLM prompt and enhances it with wiki context.
 * Returns the augmented prompt ready for generation.
 */
export function enhanceMindMapPrompt(
  basePrompt: string,
  wikiContext: WikiContext
): string {
  if (!wikiContext.contextString) {
    return basePrompt;
  }

  return `${basePrompt}${wikiContext.contextString}`;
}

/**
 * Generates a "Lint Prompt" for the LLM to analyze existing wiki pages
 * and return a structured health report.
 */
export function generateLintPrompt(
  pagesSummary: Array<{ id: string; title: string; summary: string }>
): string {
  return `You are a knowledge base quality assurance agent.
Review the following wiki pages and identify issues:
1. Contradictions between pages
2. Orphaned pages with no connections
3. Stale or outdated information
4. Missing cross-references
5. Knowledge gaps that should be explored

Pages to review:
${pagesSummary.map(p => `- [[${p.title}]]: ${p.summary}`).join("\n")}

Return your analysis as a JSON object with the following structure:
{
  "contradictions": [{ "pageA": "id", "pageB": "id", "description": "..." }],
  "orphans": ["id"],
  "suggestedLinks": [{ "from": "id", "to": "id", "reason": "..." }],
  "gaps": ["topic suggestions"]
}`;
}
