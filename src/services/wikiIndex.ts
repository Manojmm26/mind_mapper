/**
 * Wiki Index Service - Cross-Referencing & Concept Linking
 *
 * Manages a global concept index across all wiki pages (mind maps).
 * Extracts concepts from nodes, tracks their occurrences, and builds
 * a cross-reference map to link related pages together.
 *
 * This enables the "compounding knowledge" aspect of the LLM Wiki pattern:
 * as new maps are added, the index automatically discovers connections,
 * surfaces recurring themes, and suggests [[wikilinks]] between pages.
 */

import { WikiPage } from "../config/wikiSchema";

// ---------------------------------------------------------------------------
// Index Data Structures
// ---------------------------------------------------------------------------

export interface ConceptEntry {
  /** Normalized concept identifier (slugified) */
  id: string;
  /** Display name of the concept */
  label: string;
  /** Number of times this concept appears across all pages */
  occurrences: number;
  /** IDs of wiki pages that contain this concept */
  pageIds: string[];
  /** IDs of specific nodes that reference this concept */
  nodeIds: string[];
  /** ISO date when first seen */
  firstSeen: string;
  /** ISO date when last updated */
  lastSeen: string;
  /** Optional tags associated with this concept */
  tags?: string[];
}

export interface CrossReferenceMap {
  /** Maps a page ID to an array of related page IDs */
  [pageId: string]: string[];
}

export interface ConceptIndex {
  /** Global registry of all extracted concepts */
  concepts: Record<string, ConceptEntry>;
  /** Bidirectional page-to-page relationship map */
  crossReferences: CrossReferenceMap;
  /** Last time the index was rebuilt or updated */
  updatedAt: string;
  /** Total number of unique concepts tracked */
  totalConcepts: number;
  /** Total number of cross-reference links */
  totalLinks: number;
}

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Normalizes a concept name for consistent indexing.
 * Lowercases, trims, and removes special characters.
 */
export function normalizeConceptName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Extracts potential concepts from a single wiki page.
 * Looks at node labels, descriptions, tags, and explicit wikilinks.
 */
export function extractConceptsFromPage(page: WikiPage): ConceptEntry[] {
  const conceptMap = new Map<string, ConceptEntry>();
  const now = new Date().toISOString();

  const addConcept = (label: string, nodeId: string, tags?: string[]) => {
    const id = normalizeConceptName(label);
    const existing = conceptMap.get(id);

    if (existing) {
      existing.occurrences += 1;
      if (!existing.pageIds.includes(page.id)) {
        existing.pageIds.push(page.id);
      }
      if (!existing.nodeIds.includes(nodeId)) {
        existing.nodeIds.push(nodeId);
      }
      existing.lastSeen = now;
      if (tags) {
        existing.tags = [...new Set([...(existing.tags || []), ...tags])];
      }
    } else {
      conceptMap.set(id, {
        id,
        label,
        occurrences: 1,
        pageIds: [page.id],
        nodeIds: [nodeId],
        firstSeen: now,
        lastSeen: now,
        tags: tags || [],
      });
    }
  };

  // Extract from node labels and descriptions
  for (const node of page.nodes) {
    addConcept(node.label, node.id, node.metadata?.tags);

    // Extract explicit wikilinks from description or metadata
    const wikilinkRegex = /\[\[([^\]]+)\]\]/g;
    const textToScan = [node.description, node.metadata?.sourceHint]
      .filter(Boolean)
      .join(" ");
    let match;
    while ((match = wikilinkRegex.exec(textToScan)) !== null) {
      addConcept(match[1], node.id, node.metadata?.tags);
    }
  }

  // Extract from page-level tags
  for (const tag of page.metadata.tags) {
    addConcept(tag, `page_${page.id}_tag`, [tag]);
  }

  return Array.from(conceptMap.values());
}

// ---------------------------------------------------------------------------
// Index Building & Updating
// ---------------------------------------------------------------------------

/**
 * Builds a complete concept index from scratch using all wiki pages.
 * Use this for initial setup or full rebuilds.
 */
export function buildConceptIndex(pages: WikiPage[]): ConceptIndex {
  const conceptIndex: Record<string, ConceptEntry> = {};
  const crossReferences: CrossReferenceMap = {};

  // Initialize cross-ref map for all pages
  for (const page of pages) {
    crossReferences[page.id] = [];
  }

  // Extract and merge concepts
  for (const page of pages) {
    const concepts = extractConceptsFromPage(page);

    for (const concept of concepts) {
      const existing = conceptIndex[concept.id];
      if (existing) {
        existing.occurrences += concept.occurrences;
        existing.pageIds = [
          ...new Set([...existing.pageIds, ...concept.pageIds]),
        ];
        existing.nodeIds = [
          ...new Set([...existing.nodeIds, ...concept.nodeIds]),
        ];
        existing.lastSeen = concept.lastSeen;
        if (concept.tags) {
          existing.tags = [
            ...new Set([...(existing.tags || []), ...concept.tags]),
          ];
        }
      } else {
        conceptIndex[concept.id] = concept;
      }
    }
  }

  // Build cross-reference map based on shared concepts
  for (const concept of Object.values(conceptIndex)) {
    if (concept.pageIds.length > 1) {
      // Connect all pages that share this concept
      for (let i = 0; i < concept.pageIds.length; i++) {
        for (let j = i + 1; j < concept.pageIds.length; j++) {
          const pageA = concept.pageIds[i];
          const pageB = concept.pageIds[j];

          if (!crossReferences[pageA].includes(pageB)) {
            crossReferences[pageA].push(pageB);
          }
          if (!crossReferences[pageB].includes(pageA)) {
            crossReferences[pageB].push(pageA);
          }
        }
      }
    }
  }

  // Calculate totals
  const totalLinks =
    Object.values(crossReferences).reduce(
      (sum, links) => sum + links.length,
      0,
    ) / 2; // Divide by 2 because links are bidirectional

  return {
    concepts: conceptIndex,
    crossReferences,
    updatedAt: new Date().toISOString(),
    totalConcepts: Object.keys(conceptIndex).length,
    totalLinks,
  };
}

/**
 * Incrementally updates an existing concept index with a new or modified page.
 * Much faster than rebuilding the entire index from scratch.
 */
export function updateConceptIndex(
  existingIndex: ConceptIndex,
  updatedPage: WikiPage,
): ConceptIndex {
  const conceptIndex = { ...existingIndex.concepts };
  const crossReferences = { ...existingIndex.crossReferences };

  // Remove old references to this page from existing concepts
  for (const [conceptId, concept] of Object.entries(conceptIndex)) {
    if (concept.pageIds.includes(updatedPage.id)) {
      concept.pageIds = concept.pageIds.filter((id) => id !== updatedPage.id);
      concept.nodeIds = concept.nodeIds.filter(
        (nid) => !updatedPage.nodes.some((n) => n.id === nid),
      );
      concept.occurrences = Math.max(0, concept.occurrences - 1);

      // Remove concept if no longer referenced anywhere
      if (concept.pageIds.length === 0) {
        delete conceptIndex[conceptId];
      }
    }
  }

  // Remove old cross-references for this page
  delete crossReferences[updatedPage.id];
  for (const [pageId, links] of Object.entries(crossReferences)) {
    crossReferences[pageId] = links.filter((id) => id !== updatedPage.id);
  }

  // Extract new concepts from the updated page
  const newConcepts = extractConceptsFromPage(updatedPage);
  crossReferences[updatedPage.id] = [];

  for (const concept of newConcepts) {
    const existing = conceptIndex[concept.id];
    if (existing) {
      existing.occurrences += concept.occurrences;
      existing.pageIds = [
        ...new Set([...existing.pageIds, ...concept.pageIds]),
      ];
      existing.nodeIds = [
        ...new Set([...existing.nodeIds, ...concept.nodeIds]),
      ];
      existing.lastSeen = concept.lastSeen;
      if (concept.tags) {
        existing.tags = [
          ...new Set([...(existing.tags || []), ...concept.tags]),
        ];
      }
    } else {
      conceptIndex[concept.id] = concept;
    }
  }

  // Rebuild cross-references for the updated page
  const updatedPageRefs = new Set(crossReferences[updatedPage.id]);
  const backRefSets = new Map<string, Set<string>>();
  const ensureBackRefs = (pageId: string) => {
    let set = backRefSets.get(pageId);
    if (!set) {
      set = new Set(crossReferences[pageId] || []);
      backRefSets.set(pageId, set);
    }
    return set;
  };

  for (const concept of Object.values(conceptIndex)) {
    if (
      concept.pageIds.includes(updatedPage.id) &&
      concept.pageIds.length > 1
    ) {
      for (const relatedPageId of concept.pageIds) {
        if (relatedPageId !== updatedPage.id) {
          if (!updatedPageRefs.has(relatedPageId)) {
            updatedPageRefs.add(relatedPageId);
            crossReferences[updatedPage.id].push(relatedPageId);
          }
          const backRefs = ensureBackRefs(relatedPageId);
          if (!backRefs.has(updatedPage.id)) {
            backRefs.add(updatedPage.id);
            if (!crossReferences[relatedPageId]) {
              crossReferences[relatedPageId] = [];
            }
            crossReferences[relatedPageId].push(updatedPage.id);
          }
        }
      }
    }
  }

  const totalLinks =
    Object.values(crossReferences).reduce(
      (sum, links) => sum + links.length,
      0,
    ) / 2;

  return {
    concepts: conceptIndex,
    crossReferences,
    updatedAt: new Date().toISOString(),
    totalConcepts: Object.keys(conceptIndex).length,
    totalLinks,
  };
}

// ---------------------------------------------------------------------------
// Query & Analysis Utilities
// ---------------------------------------------------------------------------

/**
 * Finds pages related to a given page ID based on shared concepts.
 * Returns sorted by number of shared concepts (most related first).
 */
export function findRelatedPages(
  pageId: string,
  index: ConceptIndex,
): { pageId: string; sharedConcepts: number }[] {
  const related = index.crossReferences[pageId] || [];

  // Count shared concepts for better ranking
  const pageConceptIds = new Set<string>();
  for (const c of Object.values(index.concepts)) {
    if (c.pageIds.includes(pageId)) {
      pageConceptIds.add(c.id);
    }
  }

  const sharedCounts = new Map<string, number>();
  for (const c of Object.values(index.concepts)) {
    if (!pageConceptIds.has(c.id)) continue;
    for (const pid of c.pageIds) {
      sharedCounts.set(pid, (sharedCounts.get(pid) || 0) + 1);
    }
  }

  return related
    .map((relatedId) => ({
      pageId: relatedId,
      sharedConcepts: (sharedCounts.get(relatedId) || 0),
    }))
    .sort((a, b) => b.sharedConcepts - a.sharedConcepts);
}

/**
 * Gets all concepts associated with a specific page.
 */
export function getConceptsForPage(
  pageId: string,
  index: ConceptIndex,
): ConceptEntry[] {
  return Object.values(index.concepts)
    .filter((c) => c.pageIds.includes(pageId))
    .sort((a, b) => b.occurrences - a.occurrences);
}

/**
 * Finds the most frequently occurring concepts across the entire wiki.
 * Useful for surfacing key themes and generating tag suggestions.
 */
export function getTopConcepts(
  index: ConceptIndex,
  limit: number = 20,
): ConceptEntry[] {
  return Object.values(index.concepts)
    .sort((a, b) => b.occurrences - a.occurrences)
    .slice(0, limit);
}

/**
 * Finds orphaned concepts (concepts that only appear in one page).
 * These might be good candidates for merging or expanding.
 */
export function findOrphanedConcepts(index: ConceptIndex): ConceptEntry[] {
  return Object.values(index.concepts).filter((c) => c.pageIds.length === 1);
}

// generateMarkdownIndex has been moved to wikiMarkdownExport.ts
