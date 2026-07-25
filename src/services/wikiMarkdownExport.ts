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
import { getAllWikiPages, getLogs } from "./wikiService";
import { createZipArchive, ZipFileEntry } from "../utils/zip";

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

/**
 * Generates a markdown-formatted activity log page.
 */
export async function generateMarkdownLogs(): Promise<string> {
  const logs = await getLogs();
  let md = "# 📜 Knowledge Base Audit Log\n\n";
  md += `*Last updated: ${new Date().toLocaleString()}*\n\n`;

  if (logs.length === 0) {
    md += "_No recorded activity logs yet._\n";
    return md;
  }

  for (const log of logs) {
    const dateStr = new Date(log.timestamp).toISOString().split("T")[0];
    md += `## [${dateStr}] ${log.type.toUpperCase()} | ${log.topic}\n`;
    md += `- **Details**: ${log.details}\n`;
    if (log.pageId) {
      md += `- **Page**: [[${log.pageId}]]\n`;
    }
    md += "\n";
  }

  return md;
}

/**
 * Converts a WikiPage object into Obsidian-compatible Markdown with YAML frontmatter.
 */
export function wikiPageToMarkdown(page: Record<string, any>): string {
  const tags = Array.isArray(page.metadata?.tags)
    ? page.metadata.tags.map((t: string) => `"${t}"`).join(", ")
    : "";

  let md = `---\n`;
  md += `id: "${page.id}"\n`;
  md += `title: "${page.title.replace(/"/g, '\\"')}"\n`;
  md += `sourceType: "${page.sourceType}"\n`;
  if (page.sourceName) {
    md += `sourceName: "${page.sourceName.replace(/"/g, '\\"')}"\n`;
  }
  md += `createdAt: "${page.createdAt}"\n`;
  md += `updatedAt: "${page.updatedAt}"\n`;
  md += `tags: [${tags}]\n`;
  md += `---\n\n`;

  md += `# ${page.title}\n\n`;

  if (page.metadata?.summary) {
    md += `> **Summary**: ${page.metadata.summary}\n\n`;
  }

  md += `## 💡 Key Concepts & Nodes\n\n`;
  if (Array.isArray(page.nodes) && page.nodes.length > 0) {
    for (const node of page.nodes) {
      md += `### ${node.label}\n`;
      if (node.description) {
        md += `${node.description}\n\n`;
      }
      if (node.metadata?.type) {
        md += `- **Type**: \`${node.metadata.type}\`\n`;
      }
      if (node.metadata?.importance) {
        md += `- **Importance**: ${node.metadata.importance}\n`;
      }
      if (node.metadata?.nextStep) {
        md += `- **Next Step**: ${node.metadata.nextStep}\n`;
      }
      md += `\n`;
    }
  }

  if (Array.isArray(page.metadata?.relatedPages) && page.metadata.relatedPages.length > 0) {
    md += `## 🔗 Related Wiki Pages\n\n`;
    for (const relId of page.metadata.relatedPages) {
      md += `- [[${relId}]]\n`;
    }
  }

  return md;
}

/**
 * Bundles the entire IndexedDB wiki into an Obsidian-compatible ZIP vault download.
 */
export async function exportObsidianVaultZip(index?: ConceptIndex): Promise<Blob> {
  const files: ZipFileEntry[] = [];

  // 1. Add index.md if concept index is present
  if (index) {
    files.push({
      filename: "index.md",
      content: generateMarkdownIndex(index),
    });
  }

  // 2. Add log.md
  const logMd = await generateMarkdownLogs();
  files.push({
    filename: "log.md",
    content: logMd,
  });

  // 3. Add wiki pages
  const pages = await getAllWikiPages();
  for (const page of pages) {
    const slug = page.title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    const filename = `wiki/${slug || page.id}.md`;
    files.push({
      filename,
      content: wikiPageToMarkdown(page),
    });
  }

  return createZipArchive(files);
}

