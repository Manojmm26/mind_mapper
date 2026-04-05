# The LLM Wiki Pattern

A blueprint for building personal, persistent knowledge bases using Large Language Models.

## Core Concept

Traditional Retrieval-Augmented Generation (RAG) treats knowledge as disposable: documents are chunked, embedded, and retrieved on-demand. The LLM re-discovers connections from scratch on every query. There is no accumulation, no compounding insight, and no persistent memory.

The **LLM Wiki Pattern** flips this model. Instead of retrieving raw chunks at query time, an LLM incrementally builds and maintains a **persistent, structured wiki**—a living collection of interlinked markdown files that sits between you and your raw sources. 

When new information arrives, the LLM doesn't just index it. It reads, synthesizes, cross-references, and updates the existing knowledge graph. Contradictions are flagged, summaries are revised, and connections are strengthened. The result is a **compounding artifact** that grows richer and more accurate over time.

> **The Human's Role:** Curate sources, direct analysis, ask probing questions, and synthesize meaning.  
> **The LLM's Role:** Handle the bookkeeping—summarizing, cross-referencing, filing, and maintaining consistency across dozens of pages.

---

## Architecture

The system is built on three distinct layers:

### 1. Raw Sources (Immutable)
Your curated collection of original documents: articles, research papers, meeting transcripts, books, podcasts, or data files. These are **read-only**. The LLM extracts from them but never modifies them. This is your ground truth.

### 2. The Wiki (LLM-Owned)
A directory of LLM-generated markdown files containing:
- Entity & concept pages
- Topic summaries & syntheses
- Comparisons & analyses
- Cross-references & wikilinks
The LLM has full ownership of this layer. It creates, updates, and prunes pages to maintain coherence.

### 3. The Schema (Configuration)
A configuration document (e.g., `CLAUDE.md`, `AGENTS.md`, or `SYSTEM.md`) that defines:
- Wiki structure & naming conventions
- Ingestion workflows
- Query response formats
- Maintenance rules
This file transforms the LLM from a generic chatbot into a disciplined knowledge architect. You and the LLM co-evolve it as your needs change.

---

## Core Operations

### 📥 Ingest
Drop a new source into the raw collection and instruct the LLM to process it.
**Typical Flow:**
1. LLM reads the source and extracts key insights.
2. Discusses takeaways with you (optional).
3. Creates or updates relevant wiki pages.
4. Updates cross-references and the central index.
5. Appends an entry to the activity log.
*A single source may touch 10–15 wiki pages.*

### 🔍 Query
Ask questions against the wiki. The LLM searches relevant pages, synthesizes an answer, and provides citations.
**Key Insight:** Good answers should be filed back into the wiki as new pages. Comparisons, analyses, and discovered connections are valuable artifacts that shouldn't vanish into chat history.

### 🧹 Lint
Periodically run a health check on the wiki. The LLM scans for:
- Contradictions between pages
- Stale claims superseded by newer sources
- Orphaned pages with no inbound links
- Missing cross-references or concept pages
- Data gaps that warrant further research
This keeps the knowledge base clean, consistent, and actionable as it scales.

---

## Navigation & Tracking

Two special files keep the wiki navigable and auditable:

### `index.md` (Content Catalog)
A structured catalog of every page in the wiki, organized by category (entities, concepts, sources, etc.). Each entry includes a link, a one-line summary, and optional metadata. The LLM reads this first during queries to efficiently locate relevant context. Works remarkably well at moderate scale (~100 sources, hundreds of pages) without requiring vector databases.

### `log.md` (Chronological Record)
An append-only timeline of wiki activity: ingests, queries, lint passes, and structural changes.
**Pro Tip:** Use consistent prefixes for parseability:
```text
## [2026-04-04] ingest | Understanding Transformer Architectures
## [2026-04-04] query | Compare attention mechanisms
## [2026-04-05] lint | Resolved 3 contradictions in entity pages
```
Simple Unix tools like `grep` and `tail` can instantly surface recent activity.

---

## Tooling & Ecosystem

The wiki is fundamentally just a **Git repository of markdown files**, making it compatible with a rich ecosystem of tools:

| Tool | Purpose |
|------|---------|
| **Obsidian** | Primary IDE for browsing, graph visualization, and real-time sync with LLM edits |
| **Obsidian Web Clipper** | Browser extension for quickly saving articles as markdown |
| **qmd** | Local hybrid search engine (BM25 + vector + LLM re-ranking) for larger wikis |
| **Marp** | Markdown-to-slides format for generating presentations directly from wiki content |
| **Dataview / Bases** | Query page frontmatter to generate dynamic tables, lists, and dashboards |
| **Git** | Version control, branching, collaboration, and full edit history |

### Image Handling
LLMs struggle to parse markdown with inline images in a single pass. Workaround:
1. Download images locally to a fixed asset directory.
2. Have the LLM read the text first, then view referenced images separately for additional context.
3. Alternatively, pre-generate detailed alt-text/descriptions for images and embed them in the markdown.

---

## Why This Works

The tedious part of maintaining a knowledge base isn't reading or thinking—it's **bookkeeping**. Updating cross-references, tracking contradictions, maintaining consistency, and filing new information grows exponentially harder as a wiki scales. Humans abandon wikis because the maintenance burden outpaces the value.

LLMs don't get bored. They don't forget to update a link. They can touch 15 files in a single pass without fatigue. By offloading maintenance to an LLM, the wiki stays alive, current, and genuinely useful.

This pattern echoes Vannevar Bush's 1945 **Memex** vision: a private, actively curated knowledge store where the *connections between documents* are as valuable as the documents themselves. The missing piece in Bush's era was automated maintenance. Today, the LLM solves it.

---

## Implementation Notes

This document describes a **pattern, not a rigid framework**. The exact directory structure, schema conventions, page formats, and tooling should be adapted to your domain and workflow.

**Start simple:**
1. Create a `raw/` folder for sources.
2. Create a `wiki/` folder for LLM-generated markdown.
3. Write a `schema.md` with basic ingestion and formatting rules.
4. Drop in your first source and let the LLM build the initial structure.
5. Iterate, refine the schema, and scale as needed.

The wiki is yours. The LLM is your architect. The knowledge compounds.