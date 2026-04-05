/**
 * Wiki Service - IndexedDB Storage Layer
 *
 * Provides persistent storage for wiki pages, index entries, and activity logs
 * using the browser's native IndexedDB API. This enables the AI Mind Mapper
 * to maintain a compounding knowledge base across sessions without requiring
 * a backend server.
 */

import { WikiPage, IngestionSource } from "../config/wikiSchema";

// ---------------------------------------------------------------------------
// Storage Interfaces
// ---------------------------------------------------------------------------

export interface WikiIndexEntry {
  id: string;
  title: string;
  summary: string;
  sourceType: IngestionSource;
  sourceName?: string;
  createdAt: string;
  updatedAt: string;
  nodeCount: number;
  tags: string[];
  relatedPageIds: string[];
}

export interface WikiLogEntry {
  id: string;
  timestamp: string;
  type: "ingest" | "query" | "lint" | "export" | "delete" | "update";
  topic: string;
  details: string;
  pageId?: string;
}

// ---------------------------------------------------------------------------
// Database Configuration
// ---------------------------------------------------------------------------

const DB_NAME = "mindmapper-wiki";
const DB_VERSION = 1;

const STORE_PAGES = "wiki-pages";
const STORE_INDEX = "wiki-index";
const STORE_LOGS = "wiki-logs";

// ---------------------------------------------------------------------------
// Database Initialization
// ---------------------------------------------------------------------------

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Pages store: full mind map data
      if (!db.objectStoreNames.contains(STORE_PAGES)) {
        const pageStore = db.createObjectStore(STORE_PAGES, { keyPath: "id" });
        pageStore.createIndex("title", "title", { unique: false });
        pageStore.createIndex("sourceType", "sourceType", { unique: false });
        pageStore.createIndex("updatedAt", "updatedAt", { unique: false });
        pageStore.createIndex("tags", "metadata.tags", { multiEntry: true });
      }

      // Index store: lightweight catalog for search and navigation
      if (!db.objectStoreNames.contains(STORE_INDEX)) {
        const indexStore = db.createObjectStore(STORE_INDEX, { keyPath: "id" });
        indexStore.createIndex("title", "title", { unique: false });
        indexStore.createIndex("sourceType", "sourceType", { unique: false });
        indexStore.createIndex("updatedAt", "updatedAt", { unique: false });
        indexStore.createIndex("tags", "tags", { multiEntry: true });
      }

      // Logs store: chronological activity record
      if (!db.objectStoreNames.contains(STORE_LOGS)) {
        const logStore = db.createObjectStore(STORE_LOGS, { keyPath: "id" });
        logStore.createIndex("type", "type", { unique: false });
        logStore.createIndex("timestamp", "timestamp", { unique: false });
        logStore.createIndex("pageId", "pageId", { unique: false });
      }
    };
  });
}

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

export function generateId(): string {
  return `wiki_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// ---------------------------------------------------------------------------
// Wiki Page Operations
// ---------------------------------------------------------------------------

export async function saveWikiPage(page: WikiPage): Promise<void> {
  const db = await openDB();
  const tx = db.transaction([STORE_PAGES, STORE_INDEX], "readwrite");

  const pageStore = tx.objectStore(STORE_PAGES);
  const indexStore = tx.objectStore(STORE_INDEX);

  // Save full page
  await new Promise<void>((resolve, reject) => {
    const request = pageStore.put(page);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  // Update lightweight index entry
  const indexEntry: WikiIndexEntry = {
    id: page.id,
    title: page.title,
    summary: page.metadata.summary || "",
    sourceType: page.sourceType,
    sourceName: page.sourceName,
    createdAt: page.createdAt,
    updatedAt: page.updatedAt,
    nodeCount: page.metadata.nodeCount,
    tags: page.metadata.tags,
    relatedPageIds: page.metadata.relatedPages,
  };

  await new Promise<void>((resolve, reject) => {
    const request = indexStore.put(indexEntry);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getWikiPage(id: string): Promise<WikiPage | null> {
  const db = await openDB();
  const tx = db.transaction(STORE_PAGES, "readonly");
  const store = tx.objectStore(STORE_PAGES);

  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

export async function getAllWikiPages(): Promise<WikiPage[]> {
  const db = await openDB();
  const tx = db.transaction(STORE_PAGES, "readonly");
  const store = tx.objectStore(STORE_PAGES);

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteWikiPage(id: string): Promise<void> {
  const db = await openDB();
  const tx = db.transaction([STORE_PAGES, STORE_INDEX], "readwrite");

  const pageStore = tx.objectStore(STORE_PAGES);
  const indexStore = tx.objectStore(STORE_INDEX);

  await new Promise<void>((resolve, reject) => {
    const request = pageStore.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  await new Promise<void>((resolve, reject) => {
    const request = indexStore.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getWikiPagesByTag(tag: string): Promise<WikiPage[]> {
  const db = await openDB();
  const tx = db.transaction(STORE_PAGES, "readonly");
  const store = tx.objectStore(STORE_PAGES);
  const index = store.index("tags");

  return new Promise((resolve, reject) => {
    const request = index.getAll(tag);
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

export async function getWikiPagesBySourceType(
  sourceType: IngestionSource,
): Promise<WikiPage[]> {
  const db = await openDB();
  const tx = db.transaction(STORE_PAGES, "readonly");
  const store = tx.objectStore(STORE_PAGES);
  const index = store.index("sourceType");

  return new Promise((resolve, reject) => {
    const request = index.getAll(sourceType);
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

// ---------------------------------------------------------------------------
// Wiki Index Operations
// ---------------------------------------------------------------------------

export async function getWikiIndex(): Promise<WikiIndexEntry[]> {
  const db = await openDB();
  const tx = db.transaction(STORE_INDEX, "readonly");
  const store = tx.objectStore(STORE_INDEX);

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

export async function searchWikiIndex(
  query: string,
): Promise<WikiIndexEntry[]> {
  const allEntries = await getWikiIndex();
  const lowerQuery = query.toLowerCase();

  return allEntries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(lowerQuery) ||
      entry.summary.toLowerCase().includes(lowerQuery) ||
      entry.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      (entry.sourceName && entry.sourceName.toLowerCase().includes(lowerQuery)),
  );
}

export async function getWikiIndexEntry(
  id: string,
): Promise<WikiIndexEntry | null> {
  const db = await openDB();
  const tx = db.transaction(STORE_INDEX, "readonly");
  const store = tx.objectStore(STORE_INDEX);

  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

// ---------------------------------------------------------------------------
// Activity Log Operations
// ---------------------------------------------------------------------------

export async function addLogEntry(entry: WikiLogEntry): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(STORE_LOGS, "readwrite");
  const store = tx.objectStore(STORE_LOGS);

  await new Promise<void>((resolve, reject) => {
    const request = store.put(entry);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getLogs(options?: {
  limit?: number;
  type?: WikiLogEntry["type"];
  pageId?: string;
}): Promise<WikiLogEntry[]> {
  const db = await openDB();
  const tx = db.transaction(STORE_LOGS, "readonly");
  const store = tx.objectStore(STORE_LOGS);

  let request: IDBRequest<WikiLogEntry[]>;

  if (options?.type) {
    const index = store.index("type");
    request = index.getAll(options.type);
  } else if (options?.pageId) {
    const index = store.index("pageId");
    request = index.getAll(options.pageId);
  } else {
    request = store.getAll();
  }

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      let results = request.result || [];
      // Sort by timestamp descending (newest first)
      results.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      );
      if (options?.limit) {
        results = results.slice(0, options.limit);
      }
      resolve(results);
    };
    request.onerror = () => reject(request.error);
  });
}

export async function clearLogs(): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(STORE_LOGS, "readwrite");
  const store = tx.objectStore(STORE_LOGS);

  await new Promise<void>((resolve, reject) => {
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ---------------------------------------------------------------------------
// Bulk Operations & Maintenance
// ---------------------------------------------------------------------------

export async function getWikiStats(): Promise<{
  totalPages: number;
  totalNodes: number;
  totalEdges: number;
  sourceTypeBreakdown: Record<IngestionSource, number>;
  lastUpdated: string | null;
}> {
  const pages = await getAllWikiPages();

  const stats = {
    totalPages: pages.length,
    totalNodes: 0,
    totalEdges: 0,
    sourceTypeBreakdown: {} as Record<IngestionSource, number>,
    lastUpdated: null as string | null,
  };

  for (const page of pages) {
    stats.totalNodes += page.nodes.length;
    stats.totalEdges += page.edges.length;

    const sourceType = page.sourceType;
    stats.sourceTypeBreakdown[sourceType] =
      (stats.sourceTypeBreakdown[sourceType] || 0) + 1;

    if (!stats.lastUpdated || page.updatedAt > stats.lastUpdated) {
      stats.lastUpdated = page.updatedAt;
    }
  }

  return stats;
}

export async function exportWikiToJSON(): Promise<string> {
  const pages = await getAllWikiPages();
  const index = await getWikiIndex();
  const logs = await getLogs();

  const exportData = {
    exportedAt: new Date().toISOString(),
    pages,
    index,
    logs,
  };

  return JSON.stringify(exportData, null, 2);
}

export async function importWikiFromJSON(json: string): Promise<void> {
  const data = JSON.parse(json);

  if (data.pages && Array.isArray(data.pages)) {
    for (const page of data.pages) {
      await saveWikiPage(page);
    }
  }

  if (data.logs && Array.isArray(data.logs)) {
    for (const log of data.logs) {
      await addLogEntry(log);
    }
  }
}

export async function clearAllWikiData(): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(
    [STORE_PAGES, STORE_INDEX, STORE_LOGS],
    "readwrite",
  );

  await new Promise<void>((resolve, reject) => {
    const req1 = tx.objectStore(STORE_PAGES).clear();
    const req2 = tx.objectStore(STORE_INDEX).clear();
    const req3 = tx.objectStore(STORE_LOGS).clear();

    req1.onsuccess = () => req2.onsuccess && req3.onsuccess && resolve();
    req1.onerror = () => reject(req1.error);
  });

  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
