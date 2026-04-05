/**
 * Wiki Lint Service - Health Checks & Knowledge Gap Detection
 *
 * Analyzes the wiki pages and concept index to identify structural issues,
 * stale content, orphaned pages, unresolved links, and potential knowledge gaps.
 * Returns a structured LintReport with actionable suggestions.
 */

import { WikiPage, LintIssue } from "../config/wikiSchema";
import { ConceptIndex } from "./wikiIndex";

export interface LintReport {
  issues: LintIssue[];
  summary: {
    totalIssues: number;
    errors: number;
    warnings: number;
    info: number;
    healthScore: number; // 0-100, higher is better
  };
  timestamp: string;
}

/**
 * Runs all lint checks against the provided wiki pages and concept index.
 */
export function runLintChecks(pages: WikiPage[], index: ConceptIndex): LintReport {
  const issues: LintIssue[] = [];

  // Collect all page IDs for quick lookup
  const pageIds = new Set(pages.map(p => p.id));
  const now = new Date();

  // 1. Orphan Page Check
  for (const page of pages) {
    const hasInbound = pages.some(
      (p) => p.id !== page.id && p.metadata.relatedPages.includes(page.id)
    );
    // Also check concept index for cross-references
    const hasConceptLink = index.crossReferences[page.id]?.length > 0;

    if (!hasInbound && !hasConceptLink && pages.length > 1) {
      issues.push({
        ruleId: "orphan-page",
        pageId: page.id,
        message: `Page "${page.title}" has no inbound links from other pages or concepts.`,
        suggestion: "Link this page from related topics or add relevant tags to improve discoverability.",
        severity: "warning",
      });
    }
  }

  // 2. Stale Content Check
  for (const page of pages) {
    if (!page.metadata.lastUpdated && !page.updatedAt) continue;
    const lastUpdate = new Date(page.metadata.lastUpdated || page.updatedAt);
    const daysSinceUpdate = Math.floor((now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysSinceUpdate > 90) {
      issues.push({
        ruleId: "stale-content",
        pageId: page.id,
        message: `Page "${page.title}" hasn't been updated in ${daysSinceUpdate} days.`,
        suggestion: "Review and refresh the content with recent knowledge or mark as archived.",
        severity: "info",
      });
    }
  }

  // 3. Missing Description Check
  for (const page of pages) {
    const emptyNodes = page.nodes.filter(
      (n) => !n.description || n.description.trim().length < 10
    );
    if (emptyNodes.length > 0) {
      issues.push({
        ruleId: "missing-description",
        pageId: page.id,
        message: `${emptyNodes.length} node(s) in "${page.title}" lack meaningful descriptions.`,
        suggestion: "Add specific, informative descriptions to improve clarity and searchability.",
        severity: "error",
      });
    }
  }

  // 4. Low Node Count / Knowledge Gap Check
  for (const page of pages) {
    if (page.nodes.length < 5) {
      issues.push({
        ruleId: "knowledge-gap",
        pageId: page.id,
        message: `Page "${page.title}" has only ${page.nodes.length} nodes.`,
        suggestion: "Consider expanding this topic or merging it with a related page.",
        severity: "warning",
      });
    }
  }

  // 5. Unresolved Wikilinks Check
  const wikilinkRegex = /\[\[([^\]]+)\]\]/g;
  for (const page of pages) {
    const unresolved: string[] = [];
    for (const node of page.nodes) {
      const text = [node.description, node.metadata?.sourceHint].filter(Boolean).join(" ");
      let match;
      while ((match = wikilinkRegex.exec(text)) !== null) {
        const linkedTitle = match[1];
        // Check if any page title matches the linked title (case-insensitive)
        const exists = pages.some(p => p.title.toLowerCase() === linkedTitle.toLowerCase());
        if (!exists) {
          unresolved.push(linkedTitle);
        }
      }
    }
    if (unresolved.length > 0) {
      issues.push({
        ruleId: "unresolved-wikilink",
        pageId: page.id,
        message: `Page "${page.title}" contains ${unresolved.length} unresolved wikilink(s): ${unresolved.slice(0, 3).join(", ")}${unresolved.length > 3 ? "..." : ""}.`,
        suggestion: "Create pages for these concepts or fix the link syntax.",
        severity: "warning",
      });
    }
  }

  // 6. Tag Consistency Check
  // (Simplified: checks for tags that appear only once across the entire wiki)
  const tagCounts = new Map<string, number>();
  for (const page of pages) {
    for (const tag of page.metadata.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }
  const rareTags = Array.from(tagCounts.entries())
    .filter(([, count]) => count === 1)
    .map(([tag]) => tag);

  if (rareTags.length > 0 && pages.length > 5) {
    issues.push({
      ruleId: "rare-tags",
      pageId: "global",
      message: `${rareTags.length} tag(s) are used only once across the wiki.`,
      suggestion: "Consider standardizing tags using the wiki schema taxonomy.",
      severity: "info",
    });
  }

  // Calculate Health Score
  const errorWeight = 10;
  const warningWeight = 5;
  const infoWeight = 1;
  const totalPenalty = issues.reduce((sum, issue) => {
    if (issue.severity === "error") return sum + errorWeight;
    if (issue.severity === "warning") return sum + warningWeight;
    return sum + infoWeight;
  }, 0);

  const maxPossiblePenalty = Math.max(pages.length * 15, 100); // Normalize based on wiki size
  const healthScore = Math.max(0, Math.min(100, Math.round(100 - (totalPenalty / maxPossiblePenalty) * 100)));

  return {
    issues,
    summary: {
      totalIssues: issues.length,
      errors: issues.filter(i => i.severity === "error").length,
      warnings: issues.filter(i => i.severity === "warning").length,
      info: issues.filter(i => i.severity === "info").length,
      healthScore,
    },
    timestamp: now.toISOString(),
  };
}
