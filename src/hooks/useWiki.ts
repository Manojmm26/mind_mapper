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

import {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  createElement,
  type ReactNode,
} from "react";
import { MindMapData, ComparisonWorkspaceData } from "../services/llmService";
import { WikiPage, IngestionSource } from "../config/wikiSchema";
import {
  getWikiIndex,
  getAllWikiPages,
  getWikiStats,
  getWikiPage,
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

const WikiContext = createContext<UseWikiReturn | null>(null);

function useProvideWiki(): UseWikiReturn {
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
      const pageId = await ingestMindMapService(
        mapData,
        sourceType,
        sourceName,
      );

      // Re-fetch all stores to keep all tabs (Browse, Graph, Logs, Stats, Health Check) synchronized
      await initializeWiki();

      return pageId;
    },
    [initializeWiki],
  );

  const ingestComparison = useCallback(
    async (
      comparisonData: ComparisonWorkspaceData,
      sourceType: IngestionSource,
      sourceName?: string,
    ): Promise<string> => {
      const pageId = await ingestComparisonService(
        comparisonData,
        sourceType,
        sourceName,
      );
      await initializeWiki();
      return pageId;
    },
    [initializeWiki],
  );

  const loadWikiPage = useCallback(
    async (pageId: string): Promise<WikiPage | null> => {
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

export function WikiProvider({ children }: { children: ReactNode }) {
  const wiki = useProvideWiki();

  return createElement(WikiContext.Provider, { value: wiki }, children);
}

export function useWiki(): UseWikiReturn {
  const wiki = useContext(WikiContext);

  if (!wiki) {
    throw new Error("useWiki must be used within a WikiProvider.");
  }

  return wiki;
}
