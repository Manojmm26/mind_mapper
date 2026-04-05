/**
 * useWiki Hook - Bridges Wiki Services with App State & Lifecycle
 *
 * Provides a unified interface for the AI Mind Mapper to interact with the
 * persistent wiki knowledge base. Handles initialization, state synchronization,
 * search, linting, and coordinates with the wikiIngestion service for processing.
 *
 * Usage:
 * const wiki = useWiki();
 * wiki.ingestMindMap(mapData, "document", "my-research.pdf");
 */

import { useState, useCallback, useEffect } from "react";
import { MindMapData, ComparisonWorkspaceData } from "../services/llmService";
import { WikiPage, IngestionSource } from "../config/wikiSchema";
import {
  getWikiIndex,
  getAllWikiPages,
  getWikiStats,
  getLogs,
  addLogEntry,
  generateId,
  WikiIndexEntry,
  WikiLogEntry,
  clearAllWikiData,
} from "../services/wikiService";
import {
  ingestMindMap as ingestMindMapService,
  ingestComparison as ingestComparisonService,
} from "../services/wikiIngestion";
import {
  buildConceptIndex,
  updateConceptIndex,
  ConceptIndex,
} from "../services/wikiIndex";
import { runLintChecks, LintReport } from "../services/wikiLint";

export interface WikiStats {
  totalPages: number;
  totalNodes: number;
  totalEdges: number;
  sourceTypeBreakdown: Record<string, number>;
  lastUpdated: string | null;
}

export interface UseWikiReturn {
  // State
  wikiIndex: WikiIndexEntry[];
  conceptIndex: ConceptIndex | null;
  logs: WikiLogEntry[];
  stats: WikiStats | null;
  isLoading: boolean;
  lintReport: LintReport | null;
  pages: WikiPage[];

  // Actions
  initializeWiki: () => Promise<void>;
  ingestMindMap: (
    mapData: MindMapData,
    sourceType: IngestionSource,
    sourceName?: string,
  ) => Promise<string>;
  ingestComparison: (
    comparisonData: ComparisonWorkspaceData,
    sourceType: IngestionSource,
    sourceName?: string,
  ) => Promise<string>;
  loadWikiPage: (pageId: string) => Promise<WikiPage | null>;
  searchWiki: (query: string) => WikiIndexEntry[];
  runLint: () => Promise<void>;
  refreshWiki: () => Promise<void>;
  clearWiki: () => Promise<void>;
}

export function useWiki(): UseWikiReturn {
  const [wikiIndex, setWikiIndex] = useState<WikiIndexEntry[]>([]);
  const [conceptIndex, setConceptIndex] = useState<ConceptIndex | null>(null);
  const [logs, setLogs] = useState<WikiLogEntry[]>([]);
  const [stats, setStats] = useState<WikiStats | null>(null);
  const [pages, setPages] = useState<WikiPage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lintReport, setLintReport] = useState<LintReport | null>(null);

  const initializeWiki = useCallback(async () => {
    setIsLoading(true);
    try {
      const [index, allPages, statsData, logEntries] = await Promise.all([
        getWikiIndex(),
        getAllWikiPages(),
        getWikiStats(),
        getLogs({ limit: 50 }),
      ]);

      setWikiIndex(index);
      setPages(allPages);
      setStats(statsData);
      setLogs(logEntries);

      const newIndex = buildConceptIndex(allPages);
      setConceptIndex(newIndex);
    } catch (error) {
      console.error("Failed to initialize wiki:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshWiki = useCallback(async () => {
    await initializeWiki();
  }, [initializeWiki]);

  const ingestMindMap = useCallback(
    async (
      mapData: MindMapData,
      sourceType: IngestionSource,
      sourceName?: string,
    ): Promise<string> => {
      // Delegate to the ingestion service
      const pageId = await ingestMindMapService(
        mapData,
        sourceType,
        sourceName,
      );

      // Update local state for responsive UI
      const rootNode = mapData.nodes.find(
        (n) => !mapData.edges.some((e) => e.target === n.id),
      );
      const summary =
        rootNode?.description ||
        `Mind map generated from ${sourceName || sourceType}`;
      const extractedTags = Array.from(
        new Set(mapData.nodes.flatMap((n) => n.tags || []).filter(Boolean)),
      ) as string[];
      const now = new Date().toISOString();

      const newPage: WikiPage = {
        id: pageId,
        title: sourceName || `Map ${new Date().toLocaleDateString()}`,
        createdAt: now,
        updatedAt: now,
        sourceType,
        sourceName,
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

      setPages((prev) => [...prev, newPage]);
      setWikiIndex((prev) => [
        ...prev,
        {
          id: pageId,
          title: newPage.title,
          summary,
          sourceType,
          sourceName,
          createdAt: now,
          updatedAt: now,
          nodeCount: mapData.nodes.length,
          tags: extractedTags,
          relatedPageIds: [],
        },
      ]);

      // Incrementally update concept index
      if (conceptIndex) {
        const newIndex = updateConceptIndex(conceptIndex, newPage);
        setConceptIndex(newIndex);

        // Auto-lint after ingestion if wiki has enough pages
        if (pages.length >= 2) {
          const report = runLintChecks([...pages, newPage], newIndex);
          setLintReport(report);
          await addLogEntry({
            id: generateId(),
            timestamp: new Date().toISOString(),
            type: "lint",
            topic: "Auto-Lint (Post-Ingest)",
            details: `Health score: ${report.summary.healthScore}% | ${report.summary.errors} errors, ${report.summary.warnings} warnings`,
          });
        }
      }

      return pageId;
    },
    [conceptIndex, pages],
  );

  const ingestComparison = useCallback(
    async (
      comparisonData: ComparisonWorkspaceData,
      sourceType: IngestionSource,
      sourceName?: string,
    ): Promise<string> => {
      return ingestComparisonService(comparisonData, sourceType, sourceName);
    },
    [],
  );

  const loadWikiPage = useCallback(
    async (pageId: string): Promise<WikiPage | null> => {
      const { getWikiPage } = await import("../services/wikiService");
      return getWikiPage(pageId);
    },
    [],
  );

  const searchWiki = useCallback(
    (query: string): WikiIndexEntry[] => {
      const lowerQuery = query.toLowerCase();
      return wikiIndex.filter(
        (entry) =>
          entry.title.toLowerCase().includes(lowerQuery) ||
          entry.summary.toLowerCase().includes(lowerQuery) ||
          entry.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
      );
    },
    [wikiIndex],
  );

  const runLint = useCallback(async () => {
    if (!conceptIndex) return;
    const report = runLintChecks(pages, conceptIndex);
    setLintReport(report);
    await addLogEntry({
      id: generateId(),
      timestamp: new Date().toISOString(),
      type: "lint",
      topic: "Wiki Health Check",
      details: `Found ${report.summary.totalIssues} issues. Health score: ${report.summary.healthScore}%`,
    });
  }, [pages, conceptIndex]);

  const clearWiki = useCallback(async () => {
    await clearAllWikiData();
    setWikiIndex([]);
    setConceptIndex(null);
    setLogs([]);
    setStats(null);
    setPages([]);
    setLintReport(null);
  }, []);

  // Auto-initialize on mount
  useEffect(() => {
    initializeWiki();
  }, [initializeWiki]);

  return {
    wikiIndex,
    conceptIndex,
    logs,
    stats,
    isLoading,
    lintReport,
    pages,
    initializeWiki,
    ingestMindMap,
    ingestComparison,
    searchWiki,
    loadWikiPage,
    runLint,
    refreshWiki,
    clearWiki,
  };
}
