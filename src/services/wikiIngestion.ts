/**
 * Wiki Ingestion Service - Mind Map Processing
 *
 * Handles the transformation of generated mind maps and comparison data
 * into persistent wiki pages. This service encapsulates the logic for
 * extracting summaries, collecting tags, constructing WikiPage objects,
 * and persisting them via the wiki service.
 *
 * Separated from useWiki.ts to keep the React hook focused on state management
 * and UI coordination, while this service handles the data transformation.
 */

import { WikiPage, IngestionSource } from "../config/wikiSchema";
import { saveWikiPage, addLogEntry, generateId } from "./wikiService";
import { MindMapData, ComparisonWorkspaceData } from "./llmService";

// ---------------------------------------------------------------------------
// Ingestion Logic
// ---------------------------------------------------------------------------

/**
 * Transforms a MindMapData object into a WikiPage and persists it.
 *
 * @param mapData - The mind map data to ingest.
 * @param sourceType - The type of source (document, topic, comparison, manual).
 * @param sourceName - Optional name of the source (filename or query).
 * @returns The ID of the created wiki page.
 */
export async function ingestMindMap(
  mapData: MindMapData,
  sourceType: IngestionSource,
  sourceName?: string,
  comparisonData?: ComparisonWorkspaceData
): Promise<string> {
  const now = new Date().toISOString();
  const pageId = generateId();

  // Extract a summary from the root node description if available
  const rootNode = mapData.nodes.find(
    (n) => !mapData.edges.some((e) => e.target === n.id)
  );
  const summary =
    rootNode?.description ||
    `Mind map generated from ${sourceName || sourceType}`;

  // Collect unique tags from nodes for page-level indexing
  const extractedTags = Array.from(
    new Set(mapData.nodes.flatMap((n) => n.tags || []).filter(Boolean))
  ) as string[];

  const wikiPage: WikiPage = {
    id: pageId,
    title: sourceName || `Map ${new Date().toLocaleDateString()}`,
    createdAt: now,
    updatedAt: now,
    sourceType,
    sourceName,
    comparisonData,
    nodes: mapData.nodes.map((n) => ({
      id: n.id,
      label: n.label,
      description: n.description,
      metadata: {
        type: n.type,
        tags: n.tags,
        importance: n.importance,
        confidence: n.confidence,
        sourceHint: n.sourceHint,
        nextStep: n.nextStep,
      },
    })),
    edges: mapData.edges.map((e) => ({
      source: e.source,
      target: e.target,
      label: e.label,
    })),
    metadata: {
      tags: extractedTags,
      relatedPages: [],
      nodeCount: mapData.nodes.length,
      version: 1,
      summary,
    },
  };

  await saveWikiPage(wikiPage);
  await addLogEntry({
    id: generateId(),
    timestamp: now,
    type: "ingest",
    topic: wikiPage.title,
    details: `Ingested ${mapData.nodes.length} nodes from ${sourceType}`,
    pageId,
  });

  return pageId;
}

/**
 * Transforms a ComparisonWorkspaceData object into a WikiPage and persists it.
 * Delegates to ingestMindMap using the embedded mind map data and full comparison workspace data.
 *
 * @param comparisonData - The comparison workspace data to ingest.
 * @param sourceType - The type of source.
 * @param sourceName - Optional name of the source.
 * @returns The ID of the created wiki page.
 */
export async function ingestComparison(
  comparisonData: ComparisonWorkspaceData,
  sourceType: IngestionSource,
  sourceName?: string
): Promise<string> {
  if (!comparisonData.map) {
    throw new Error("Comparison data must include a mind map to ingest.");
  }
  return ingestMindMap(comparisonData.map, sourceType, sourceName, comparisonData);
}
