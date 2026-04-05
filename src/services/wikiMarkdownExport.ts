/**
 * Wiki Markdown Export - Obsidian-Compatible Index Generation
 *
 * Generates markdown-formatted index pages from the concept index.
 * Compatible with Obsidian and other markdown-based knowledge bases.
 *
 * Separated from wikiIndex.ts to keep the index service focused on
 * concept extraction and cross-referencing logic only.
 */

import { ConceptIndex, getTopConcepts } from "./wikiIndex";

/**
 * Generates a markdown-formatted index page for the wiki.
 * Compatible with Obsidian and other markdown-based knowledge bases.
 */
export function generateMarkdownIndex(index: ConceptIndex): string {
  let md = "# 📚 Knowledge Base Index\n\n";
  md += `*Auto-generated on ${new Date(index.updatedAt).toLocaleDateString()}*\n\n`;
  md += `**${index.totalConcepts} concepts** tracked across **${Object.keys(index.crossReferences).length} pages**\n\n`;

  md += "## 🔗 Cross-Reference Map\n\n";
  for (const [pageId, relatedIds] of Object.entries(index.crossReferences)) {
    if (relatedIds.length > 0) {
      md += `- **${pageId}** → ${relatedIds.map((id) => `[[${id}]]`).join(", ")}\n`;
    }
  }

  md += "\n## 🏷️ Top Concepts\n\n";
  const topConcepts = getTopConcepts(index, 15);
  for (const concept of topConcepts) {
    md += `- **${concept.label}** (${concept.occurrences} occurrences across ${concept.pageIds.length} pages)\n`;
  }

  return md;
}
