/**
 * Wiki Entity Synthesis Engine
 *
 * Compiles and merges new mind map concepts into canonical topic pages.
 * Instead of keeping every mind map as a separate isolated document, this service
 * enables "compounding knowledge" by updating existing canonical entity pages
 * with newly discovered nodes, relationships, and wikilinks.
 */

import { WikiPage, WikiNodeMetadata } from "../config/wikiSchema";
import { normalizeConceptName } from "./wikiIndex";

export interface SynthesizedEntityUpdate {
  /** Target page ID to update */
  targetPageId: string;
  /** Title of the target entity page */
  targetTitle: string;
  /** New nodes added to the entity page */
  addedNodes: Array<{
    id: string;
    label: string;
    description?: string;
    metadata?: WikiNodeMetadata;
  }>;
  /** Updated page summary */
  updatedSummary: string;
}

/**
 * Identifies existing wiki pages that match concepts in a new mind map
 * and merges new nodes into those canonical pages.
 *
 * @param existingPages - List of all current wiki pages.
 * @param newNodes - Nodes from the incoming mind map.
 * @param newEdges - Edges from the incoming mind map.
 * @returns Array of synthesized updates applied to canonical pages.
 */
export function synthesizeCanonicalEntities(
  existingPages: WikiPage[],
  newNodes: Array<{ id: string; label: string; description?: string; metadata?: WikiNodeMetadata }>,
  newEdges: Array<{ source: string; target: string; label?: string }>
): SynthesizedEntityUpdate[] {
  const pageMap = new Map<string, WikiPage>();
  for (const page of existingPages) {
    pageMap.set(normalizeConceptName(page.title), page);
  }

  const updates: SynthesizedEntityUpdate[] = [];

  for (const node of newNodes) {
    const conceptSlug = normalizeConceptName(node.label);
    const targetPage = pageMap.get(conceptSlug);

    if (targetPage) {
      // Check if this node is already present in the target canonical page
      const existsInPage = targetPage.nodes.some(
        (existingNode) => normalizeConceptName(existingNode.label) === conceptSlug
      );

      if (!existsInPage) {
        targetPage.nodes.push({
          id: node.id,
          label: node.label,
          description: node.description,
          metadata: {
            ...node.metadata,
            sourceHint: `Merged from recent synthesis`,
          },
        });

        targetPage.updatedAt = new Date().toISOString();
        targetPage.metadata.nodeCount = targetPage.nodes.length;

        updates.push({
          targetPageId: targetPage.id,
          targetTitle: targetPage.title,
          addedNodes: [node],
          updatedSummary: targetPage.metadata.summary || `Updated canonical entity page for ${targetPage.title}`,
        });
      }
    }
  }

  return updates;
}
