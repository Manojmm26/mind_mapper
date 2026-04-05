/**
 * Wiki Lint Rules - Rule Implementations
 *
 * Contains the actual lint rule check functions that analyze wiki pages
 * for structural issues, stale content, missing descriptions, and more.
 *
 * Separated from wikiSchema.ts to keep the schema file focused on types
 * and configuration constants only.
 */

import { WikiPage } from "../config/wikiSchema";

// ---------------------------------------------------------------------------
// Rule Types
// ---------------------------------------------------------------------------

export type LintSeverity = "info" | "warning" | "error";

export interface LintIssue {
  ruleId: string;
  pageId: string;
  message: string;
  suggestion?: string;
  severity: LintSeverity;
}

export interface LintRule {
  id: string;
  name: string;
  description: string;
  severity: LintSeverity;
  check: (page: WikiPage, allPages: WikiPage[]) => LintIssue | null;
}

// ---------------------------------------------------------------------------
// Rule Implementations
// ---------------------------------------------------------------------------

export const LINT_RULES: LintRule[] = [
  {
    id: "orphan-page",
    name: "Orphan Page Check",
    description:
      "Finds pages with no inbound cross-references from other pages",
    severity: "warning",
    check: (page, allPages) => {
      const hasInbound = allPages.some(
        (p) => p.id !== page.id && p.metadata.wikilinks?.includes(page.title),
      );
      if (!hasInbound && allPages.length > 1) {
        return {
          ruleId: "orphan-page",
          pageId: page.id,
          message: `Page "${page.title}" has no inbound links from other wiki pages`,
          suggestion: "Consider linking this page from related topics",
          severity: "warning",
        };
      }
      return null;
    },
  },
  {
    id: "stale-content",
    name: "Stale Content Check",
    description: "Flags pages not updated in over 90 days",
    severity: "info",
    check: (page) => {
      if (!page.metadata.lastUpdated) return null;
      const daysSinceUpdate = Math.floor(
        (Date.now() - new Date(page.metadata.lastUpdated).getTime()) /
          (1000 * 60 * 60 * 24),
      );
      if (daysSinceUpdate > 90) {
        return {
          ruleId: "stale-content",
          pageId: page.id,
          message: `Page "${page.title}" hasn't been updated in ${daysSinceUpdate} days`,
          suggestion: "Review and update with recent knowledge",
          severity: "info",
        };
      }
      return null;
    },
  },
  {
    id: "missing-description",
    name: "Missing Description Check",
    description: "Ensures all nodes have meaningful descriptions",
    severity: "error",
    check: (page) => {
      const emptyDescriptions = page.nodes.filter(
        (n) => !n.description || n.description.trim().length < 10,
      );
      if (emptyDescriptions.length > 0) {
        return {
          ruleId: "missing-description",
          pageId: page.id,
          message: `${emptyDescriptions.length} nodes lack meaningful descriptions`,
          suggestion: "Add specific, informative descriptions to all nodes",
          severity: "error",
        };
      }
      return null;
    },
  },
];
