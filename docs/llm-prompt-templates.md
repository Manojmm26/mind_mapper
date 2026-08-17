# 🧠 LLM Prompt Templates & Sub-Call Pipeline Documentation

This document contains a complete, in-depth technical reference for all **LLM Prompt Templates**, **Structured JSON Schemas**, and **Generation Pipelines** implemented in Mind Mapper.

---

## 📑 Table of Contents
1. [Overview & Execution Engine](#1-overview--execution-engine)
2. [Learn Mode — Topic Mind Map Generator](#2-learn-mode--topic-mind-map-generator)
3. [Learn Mode — Streaming Variant](#3-learn-mode--streaming-variant)
4. [Compare Mode — Decision Matrix Generator](#4-compare-mode--decision-matrix-generator)
5. [Assess Mode — 4-Stage Assessment Pipeline](#5-assess-mode--4-stage-assessment-pipeline)
   - [Stage 1: Diagnostic Concept Decomposition](#51-stage-1-diagnostic-concept-decomposition)
   - [Stage 2: MCQ Verification Engine](#52-stage-2-mcq-verification-engine)
   - [Stage 3: Personalized Study Roadmap](#53-stage-3-personalized-study-roadmap)
   - [Stage 4: Leitner Spaced Repetition Flashcards](#54-stage-4-leitner-spaced-repetition-flashcards)
6. [Document Upload Mind Map Extractor](#6-document-upload-mind-map-extractor)
7. [Wiki Knowledge RAG & Synthesis Query](#7-wiki-knowledge-rag--synthesis-query)
8. [Wiki Context Enhancer & System Rules](#8-wiki-context-enhancer--system-rules)
9. [Wiki QA & Health Linting](#9-wiki-qa--health-linting)
10. [Model Configuration](#10-model-configuration)
11. [Summary Pipeline Reference Table](#11-summary-pipeline-reference-table)

---

## 1. Overview & Execution Engine

All LLM calls utilize Google Gemini models via `@google/genai` (configured in [`src/config/aiConfig.ts`](../src/config/aiConfig.ts)). Structured JSON responses are enforced using Gemini's native `responseMimeType: "application/json"` with GenAI schema objects. Results are validated at runtime through Zod schemas.

### Execution Flow
```
Prompt String + GenAI Schema
    │
    ▼
executeLlmJsonCall(prompt, responseSchema, validator)    [src/services/aiClient.ts]
    │
    ├── ai.models.generateContent({ model, contents, config })
    │       responseMimeType: "application/json"
    │       responseSchema: <GenAI schema object>
    │
    ├── JSON.parse(response.text)
    │
    └── validator(parsed)   ← Zod .parse() for runtime type safety
            │
            ▼
        Typed result (MindMapData | ComparisonWorkspaceData | etc.)
```

- **Client Wrapper**: [`src/services/aiClient.ts`](../src/services/aiClient.ts) → `executeLlmJsonCall(prompt, responseSchema, validator)`
- **Streaming Parser**: [`src/services/llmService.ts`](../src/services/llmService.ts) → `generateMindMapStream(topic, onUpdate, wikiContext)`
- **Schema Barrel Re-export**: [`src/services/llmSchemas.ts`](../src/services/llmSchemas.ts) → re-exports all types from the three schema files
- **Schema Source Files**:
  - [`src/schemas/mindMapSchema.ts`](../src/schemas/mindMapSchema.ts) — Node, Edge, MindMapData
  - [`src/schemas/comparisonSchema.ts`](../src/schemas/comparisonSchema.ts) — Criteria, Options, Scores, Actions, ComparisonWorkspaceData
  - [`src/schemas/assessmentSchema.ts`](../src/schemas/assessmentSchema.ts) — Assessment concepts, MCQs, Study milestones, Flashcards

### Wiki Context Injection (applies to all generators)
Every generator function accepts an optional `wikiContext?: WikiContext` parameter. When present:
1. The wiki context string (existing pages, shared concepts) is appended to the base prompt.
2. The `WIKI_INSTRUCTIONS` system rules block is appended after the context.

See [Section 8](#8-wiki-context-enhancer--system-rules) for full details.

---

## 2. Learn Mode — Topic Mind Map Generator

Creates a rich, multi-level tree roadmap (30–70 nodes) for any input topic.

- **Function**: `generateMindMapFromTopic(topic, wikiContext)`
- **Location**: [`src/services/llmService.ts` L127–L162](../src/services/llmService.ts)
- **Schema**: `mindMapSchemaGenAI` ([`src/schemas/mindMapSchema.ts`](../src/schemas/mindMapSchema.ts))
- **Validator**: `validateMindMap`

### Exact Prompt Template
```text
You are a master curriculum designer and cognitive learning architect. A user wants to master the topic: "${topic}"

Your task is to build an exhaustive, hierarchically structured learning roadmap as a mind map.

## Phase 1 — Cognitive Breakdown & Deconstruction
Organize the topic across three cognitive tiers:
1. FOUNDATIONS (Level 1): 4–6 core pillars required for baseline literacy.
2. CORE CONCEPTS & MECHANICS (Level 2): 2–5 sub-concepts per pillar explaining how and why things work.
3. PRACTICAL APPLICATION & ADVANCED NUANCE (Level 3+): Concrete examples, edge cases, trade-offs, and actionable next steps.

## Phase 2 — Structural & Graph Rules
- ROOT NODE: ID "root", title matching the topic, summary overview in description.
- STRICT TREE: Every non-root node MUST connect to exactly ONE parent node via an edge.
- NODE COUNT: Target 30–60 nodes for a comprehensive roadmap.
- EDGE LABELS: Every edge MUST include a concise relationship label (e.g., "requires", "enables", "implements", "exemplifies", "contrasts with").
- NODE TYPES: Assign semantic types accurately:
  - "topic": Root and main level-1 pillars.
  - "concept": Core theoretical mechanisms.
  - "example": Code snippets, real-world case studies, or concrete instances.
  - "question": Key diagnostic or reflection prompts.
  - "action": Practical exercises, commands, or build tasks.
  - "decision": Trade-off evaluation points.

## Node Quality Requirements
- Labels: Max 6 words. Precise and technical.
- Descriptions: 2 sentences. Sentence 1 defines the concept clearly. Sentence 2 explains why it matters or how it is used.
- Tags: 1–3 short relevant keywords per node.
- Importance: "high" for critical path items, "medium" for standard concepts, "low" for optional deep dives.
- SourceHint: Reference standard documentation or foundational papers where applicable.
- NextStep: Concrete, actionable follow-up exercise for the learner.
```

---

## 3. Learn Mode — Streaming Variant

Real-time streaming variant using incremental node/edge parsing. Prompts are unified with non-streaming to maintain roadmap quality.

- **Function**: `generateMindMapStream(topic, onUpdate, wikiContext)`
- **Location**: [`src/services/llmService.ts` L355–L403](../src/services/llmService.ts)
- **Schema**: `mindMapSchemaGenAI` (same as above)
- **Validator**: `validateMindMap`
- **Transport**: `ai.models.generateContentStream(...)` — chunks are fed into `createIncrementalParser` which extracts complete JSON node/edge objects as they arrive.

### Exact Prompt Template
Uses the same unified prompt template as `generateMindMapFromTopic` to ensure consistent map quality.

---

## 4. Compare Mode — Decision Matrix Generator

Generates a domain-agnostic evaluation matrix comparing options across key criteria with linked decision trees.

- **Function**: `generateComparisonWorkspaceFromTopic(topic, wikiContext)`
- **Location**: [`src/services/llmService.ts` L168–L210](../src/services/llmService.ts)
- **Schema**: `comparisonWorkspaceSchemaGenAI` ([`src/schemas/comparisonSchema.ts`](../src/schemas/comparisonSchema.ts))
- **Validator**: `validateComparisonWorkspace`
- **Post-processing**: Result is passed through `normalizeComparisonData(rawData)` before returning.

### Exact Prompt Template
```text
You are a principal systems architect and technology evaluation director. A user needs an authoritative comparison and decision workspace for: "${topic}"

## Evaluation Methodology
1. CLASSIFY DOMAIN: Categorize query as "products", "tools", "services", "approaches", "strategies", or "concepts".
2. DEFINE CRITERIA: Create 5–8 distinct, measurable decision criteria. Assign each a relative weight from 0.1 to 1.0 (summing to ~1.0).
3. SELECT OPTIONS: Identify 4–6 leading candidates or options representing distinct market/design positions.
4. ASSIGN BADGES: Give key options clear distinction badges (e.g., "Best Overall", "Best for Performance", "Easiest DX", "Budget Pick").
5. RIGOROUS SCORING: Score EVERY option against EVERY criterion. Provide a human-readable displayValue (e.g. "$49/mo", "Sub-1ms"), a 1–5 numericRating, and a brief note explaining the score.
6. SCENARIO RECOMMENDATIONS: Include a concrete "When to Choose" decision guide in suggestedNextSteps.

## Domain-Specific Action Rules
Generate 2–3 actionable next steps per option without fake URLs:
- For "tools"/"products": "Read Official Documentation", "Inspect Benchmark Suite", "Explore Community Ecosystem".
- For "approaches"/"strategies": "Evaluate Architecture Trade-offs", "Review Migration Complexity", "Assess Team Skill Requirements".

## Decision Mind Map Attachment
Include an optional decision tree mind map explaining the selection flowchart (e.g., "If latency < 1ms -> Option A; Else if budget constrained -> Option B"). Keep labels concise and descriptions useful.
```

---

## 5. Assess Mode — 4-Stage Assessment Pipeline

The assessment feature runs a sequential sub-call chain where each stage's output feeds into the next:

```
[User Topic]
    │
    ▼
Stage 1: generateAssessmentStage1(topic)
    → Returns 8-15 concepts with self-assessment questions
    │
    ▼  User marks each concept: "Mastered" / "Needs Review" / "Gap"
Stage 2: generateAssessmentStage2(topic, selfReportedConcepts)
    → Returns 1-2 MCQs per concept for verification
    │
    ▼  User answers MCQs → system calculates verified mastery
Stage 3: generateStudyRoadmap(topic, conceptResults)
    → Returns 3-5 chronological milestones with resources
    │
    ▼
Stage 4: generateFlashcardDeck(topic, concepts)
    → Returns 6-15 spaced repetition flashcards
```

### 5.1 Stage 1: Diagnostic Concept Decomposition
- **Function**: `generateAssessmentStage1(topic, wikiContext)`
- **Location**: [`src/services/llmService.ts` L409–L427](../src/services/llmService.ts)
- **Schema**: `assessmentStage1SchemaGenAI` ([`src/schemas/assessmentSchema.ts`](../src/schemas/assessmentSchema.ts))
- **Validator**: `validateAssessmentStage1`

#### Exact Prompt
```text
You are an expert educational psychologist and diagnostic assessment author. A learner wants to assess their knowledge of: "${topic}".

Your task is to decompose this topic into a 3-tier diagnostic concept taxonomy (8–15 concepts total):

## Domain Overview
- Provide a clear, engaging overview of the assessment domain and what mastery looks like.

## Hierarchy Tiers & Level Assignment
- Level 1 (Foundations): Core prerequisite concepts everyone must understand first.
- Level 2 (Core Mechanics): Main operating principles and architectural components.
- Level 3 (Advanced & Edge Cases): Nuanced behaviors, performance trade-offs, and failure modes.

## Question & Concept Rules
- Group concepts into 3–4 logical categories/pillars.
- For each concept, write a probing self-reflection question using Bloom's Taxonomy principles (e.g. "Can you explain how X handles failure mode Y without looking up docs?" or "Can you implement X from memory?"). Avoid generic "Do you know X?" questions.
- Keep concept labels concise and descriptions specific.

Output MUST match the assessmentStage1SchemaGenAI JSON structure.
```

### 5.2 Stage 2: MCQ Verification Engine
- **Function**: `generateAssessmentStage2(topic, selfReportedConcepts, wikiContext)`
- **Location**: [`src/services/llmService.ts` L433–L461](../src/services/llmService.ts)
- **Schema**: `assessmentStage2SchemaGenAI` ([`src/schemas/assessmentSchema.ts`](../src/schemas/assessmentSchema.ts))
- **Validator**: `validateAssessmentStage2`
- **Input data injected**: The user's self-reported concept statuses are serialized as `JSON.stringify(selfReportedConcepts, null, 2)` and embedded directly into the prompt.

#### Exact Prompt
```text
You are a rigorous exam creator verifying a learner's self-reported knowledge.

Topic: "${topic}"
Learner's Self-Reported Concept Statuses:
${conceptsStr}

Generate Stage 2 verification multiple-choice questions (MCQs):

## Adaptive Question Calibration Rules
Create 1–2 targeted MCQs for each concept listed above, calibrating difficulty to the user's self-reported status:
1. For "mastered" concepts: Generate HARD scenario-based, debugging, or trade-off questions. Test edge cases and subtle misconceptions to verify true mastery.
2. For "review" concepts: Generate MEDIUM application-based questions testing core concepts in typical operational scenarios.
3. For "gap" concepts: Generate ACCESSIBLE foundational questions testing basic definitions, mechanisms, and core principles.

## Distractor & Option Quality Rules
- Each MCQ must have exactly 4 options with correctIndex (0-3).
- Options MUST contain plausible misconceptions — do NOT include obviously silly options.
- Provide a detailed 2-sentence explanation explaining why the correct answer is right and why common misconceptions fail.

Output MUST match the assessmentStage2SchemaGenAI JSON structure.
```

### 5.3 Stage 3: Personalized Study Roadmap
- **Function**: `generateStudyRoadmap(topic, conceptResults, wikiContext)`
- **Location**: [`src/services/llmService.ts` L467–L493](../src/services/llmService.ts)
- **Schema**: `studyRoadmapSchemaGenAI` ([`src/schemas/assessmentSchema.ts`](../src/schemas/assessmentSchema.ts))
- **Validator**: `validateStudyRoadmap`
- **Input data injected**: The diagnostic results array (conceptId, conceptLabel, status) is serialized as `JSON.stringify(conceptResults, null, 2)`.

#### Exact Prompt
```text
You are a master technical mentor and personalized learning advisor.

Topic: "${topic}"
Verified Assessment Results:
${resultsStr}

Design a structured study roadmap with 3-5 chronological milestones to bridge verified knowledge gaps:

## Milestone Structuring Rules
1. PRIORITY ORDER: Milestone 1 MUST address critical "gap" foundational concepts first. Subsequent milestones address "review" concepts and advanced applications.
2. DIFFERENTIATED LEARNING STRATEGY:
   - For "gap" concepts: Recommend ground-up learning actions (foundational tutorials, documentation reading, core concept walkthroughs).
   - For "review" concepts: Recommend targeted refreshers (hands-on exercises, benchmark reviews, practice problems).
3. ESTIMATED TIME: Provide realistic estimatedHours per milestone (1–5 hours).
4. RESOURCE RECOMMENDATIONS: Suggest 2-3 search topics or standard documentation guides per milestone (e.g. "Official Documentation", "MDN Web Docs", "Architecture Deep Dives").

Output MUST match the studyRoadmapSchemaGenAI JSON structure.
```

### 5.4 Stage 4: Leitner Spaced Repetition Flashcards
- **Function**: `generateFlashcardDeck(topic, concepts, wikiContext)`
- **Location**: [`src/services/llmService.ts` L499–L524](../src/services/llmService.ts)
- **Schema**: `flashcardDeckSchemaGenAI` ([`src/schemas/assessmentSchema.ts`](../src/schemas/assessmentSchema.ts))
- **Validator**: `validateFlashcardDeck`
- **Input data injected**: Target concepts array (id, label, description) serialized as `JSON.stringify(concepts, null, 2)`.

#### Exact Prompt
```text
You are a memory retention expert specializing in the Leitner spaced-repetition method.

Topic: "${topic}"
Target Concepts for Reinforcement:
${conceptsStr}

Generate a flashcard deck with 6-15 cards covering these concepts using active recall principles:

## Card Format Variety
Include a diverse mix of prompt types across the deck:
- SCENARIO CARDS: "Given problem X, which mechanism should you apply and why?"
- CONTRAST CARDS: "What is the key operational difference between Concept A and Concept B?"
- DEBUG CARDS: "If symptom Y occurs, which configuration parameter or concept is responsible?"
- DEFINITION CARDS: Concise explanation of core principles.

## Card Requirements
- `front`: Clear, thought-provoking prompt.
- `back`: Concise, high-density educational answer (max 3 sentences).
- `conceptId`: Must map directly to the corresponding concept ID from the target list.

Output MUST match the flashcardDeckSchemaGenAI JSON structure.
```

---

## 6. Document Upload Mind Map Extractor

Parses uploaded document text (PDF/TXT/Markdown) and extracts a hierarchical mind map.

- **Function**: `generateMindMap(text, wikiContext)`
- **Location**: [`src/services/llmService.ts` L84–L121](../src/services/llmService.ts)
- **Schema**: `mindMapSchemaGenAI` ([`src/schemas/mindMapSchema.ts`](../src/schemas/mindMapSchema.ts))
- **Validator**: `validateMindMap`
- **Input truncation**: Document text is capped at 50,000 characters via `text.substring(0, 50000)`.

### Exact Prompt Template
```text
You are an expert knowledge architect analyzing a document to build a comprehensive, hierarchical mind map.

## Your Task
1. Identify the single central theme or thesis — this becomes the ROOT node.
2. Extract major topics/sections as LEVEL 1 children of the root.
3. For each major topic, extract sub-topics as LEVEL 2 children.
4. Continue decomposing into LEVEL 3 and LEVEL 4 where the document provides enough detail.
5. Every node MUST have a meaningful, specific description — never use generic filler.

## Structural Rules
- Build a proper TREE: one root, with branches going deeper into detail.
- Every non-root node must connect to exactly one parent via an edge.
- Aim for 20-60 nodes depending on document complexity.
- Labels: concise (max 6 words). Descriptions: specific and informative (1-2 sentences).
- Add metadata when it helps: node type, 1-3 tags, importance, confidence, sourceHint, and nextStep.
- Do NOT create disconnected nodes. Every node must be reachable from the root.
- Prefer depth over breadth — 3-4 levels of hierarchy is better than 15 flat siblings.

## Output Format
- Return structured JSON matching the MindMapData schema.
- Include metadata on nodes: type, tags, importance, confidence, sourceHint.
- Keep labels concise (max 6 words), descriptions specific and educational (1-2 sentences).

Document content:
"""
${text.substring(0, 50000)}
"""
```

---

## 7. Wiki Knowledge RAG & Synthesis Query

- **Function**: `queryWiki(query, wikiIndex, conceptIndex, maxPages)`
- **Location**: [`src/services/wikiQuery.ts` L222–L283](../src/services/wikiQuery.ts)
- **Schema**: `querySchema` ([`src/services/wikiQuery.ts` L46–L81](../src/services/wikiQuery.ts))
- **Response parser**: `parseResponse<WikiQueryResult>(response)`

### Retrieval Engine (RAG)
Before calling the LLM, `fetchRelevantPages()` scores all wiki index entries against the query using weighted multi-factor scoring:

| Factor | Weight | Source |
|:---|:---|:---|
| Title match | ×4 | `entry.title` |
| Tag match | ×3 | `entry.tags[]` |
| Summary match | ×2 | `entry.summary` |
| Source name match | ×1 | `entry.sourceName` |
| Concept index boost | ×2 (label) + tag score | `conceptIndex.concepts` |
| Node-level match (full page) | ×2 (label) + ×1 (description) | `page.nodes[]` |
| Graph neighborhood boost | +1.5 per cross-reference | `conceptIndex.crossReferences` |

Top results (default `maxPages=5`) are loaded with full node content and assembled into a context block.

### Context Assembly Format
```text
## Page: ${page.title} (ID: ${page.id})
Source: ${page.sourceType}
Summary: ${page.metadata.summary || "N/A"}
Content:
- ${node.label}: ${node.description || "No description"}
...

---

## Page: ...
```

### Exact LLM Prompt
```text
You are a knowledgeable assistant answering questions based on a personal wiki knowledge base.

User Query: "${query}"

Here is the relevant context from the wiki:
${context}

Instructions:
1. Synthesize a clear, comprehensive answer to the query using ONLY the provided wiki pages.
2. If the pages contradict each other, explicitly note the contradiction in the contradictionNote field.
3. Cite every page you use in the citations array.
4. If the provided context is insufficient, state what is missing in the answer.

Return your response as a JSON object matching the schema.
```

---

## 8. Wiki Context Enhancer & System Rules

When an existing wiki is present, context is injected into all generation prompts (Learn, Compare, Document, Assess). This is handled by [`src/services/wikiPromptEnhancer.ts`](../src/services/wikiPromptEnhancer.ts).

### Context Builder (`buildWikiContext`)
- **Function**: `buildWikiContext(query, indexEntries, conceptIndex, fullPages)`
- **Location**: [`src/services/wikiPromptEnhancer.ts` L40–L102](../src/services/wikiPromptEnhancer.ts)
- Finds up to 5 related pages by matching query terms against titles, tags, and summaries.
- Finds up to 10 shared concepts from the global concept index.
- Assembles a formatted context block with:
  - `## Existing Related Pages & Key Concepts` — lists existing `[[Page Title]]` with summaries and top 5 node labels.
  - `## Recurring Concepts` — shared concepts appearing across multiple pages.
  - `## Instructions for Integration` — directives for wikilinks, contradictions, and consistency.

### Shared System Instructions (`WIKI_INSTRUCTIONS`)
Appended after the wiki context block. Defined in [`src/services/llmService.ts` L69–L78](../src/services/llmService.ts):

```text
--- WIKI INTEGRATION RULES ---
You are building upon an existing knowledge base. Follow these rules:
1. CROSS-REFERENCE: When a node relates to an existing page, add a [[wikilink]] in its description or sourceHint (e.g., "See also [[Transformer Architecture]]").
2. CONTRADICTION FLAGGING: If new information contradicts an existing page, note it in sourceHint: "Note: This contrasts with [[Page Title]] which states..."
3. TERMINOLOGY CONSISTENCY: Use the same terms and tags as the existing wiki. Do not invent synonyms for concepts that already have established names.
4. EXPAND, DON'T DUPLICATE: If a concept is already well-covered in an existing page, link to it and explain the new perspective rather than recreating the same content.
5. COMPOUNDING KNOWLEDGE: Each new map should make the overall knowledge base richer — add depth, nuance, or connections that weren't there before.
--- END WIKI RULES ---
```

---

## 9. Wiki QA & Health Linting

- **Function**: `generateLintPrompt(pagesSummary)`
- **Location**: [`src/services/wikiPromptEnhancer.ts` L183–L204](../src/services/wikiPromptEnhancer.ts)
- **Note**: This function returns the prompt string only; the caller is responsible for executing the LLM call.

### Exact Prompt Template
```text
You are a knowledge base quality assurance agent.
Review the following wiki pages and identify issues:
1. Contradictions between pages
2. Orphaned pages with no connections
3. Stale or outdated information
4. Missing cross-references
5. Knowledge gaps that should be explored

Pages to review:
${pagesSummary.map(p => `- [[${p.title}]]: ${p.summary}`).join("\n")}

Return your analysis as a JSON object with the following structure:
{
  "contradictions": [{ "pageA": "id", "pageB": "id", "description": "..." }],
  "orphans": ["id"],
  "suggestedLinks": [{ "from": "id", "to": "id", "reason": "..." }],
  "gaps": ["topic suggestions"]
}
```

---

## 10. Model Configuration

Model selection is managed in [`src/config/aiConfig.ts`](../src/config/aiConfig.ts).

### Available Models

| Model ID | Name | Category | Default? | Recommended For |
|:---|:---|:---|:---|:---|
| `gemini-3.5-flash-lite` | Gemini 3.5 Flash-Lite | flash-lite | ✅ Yes | Mind Maps, Comparison Workspaces & Wiki Synthesis |
| `gemini-2.5-flash-lite` | Gemini 2.5 Flash-Lite | flash-lite | No | High-Volume Queries, Quick Wiki Tags & Auto-Linting |
| `gemini-3.6-flash` | Gemini 3.6 Flash | flash | No | Complex Mind Maps & Deep Context Ingestion |
| `gemini-3.1-pro-preview` | Gemini 3.1 Pro | pro | No | Complex Architecture & Technical Synthesizing |

### Model Resolution Order
1. `localStorage.getItem("mindmapper_gemini_model")` (user override in browser)
2. `VITE_GEMINI_MODEL` environment variable
3. `GEMINI_MODEL` environment variable
4. Fallback: `"gemini-3.5-flash-lite"`

---

## 11. Summary Pipeline Reference Table

| # | Pipeline / Operation | Function Name | File Location | Schema | Validator | Primary Output |
|:--|:---|:---|:---|:---|:---|:---|
| 1 | **Learn Mode** | `generateMindMapFromTopic` | `llmService.ts` L127 | `mindMapSchemaGenAI` | `validateMindMap` | 30–70 node mind map |
| 2 | **Learn Streaming** | `generateMindMapStream` | `llmService.ts` L355 | `mindMapSchemaGenAI` | `validateMindMap` | Incremental node/edge stream |
| 3 | **Compare Mode** | `generateComparisonWorkspaceFromTopic` | `llmService.ts` L168 | `comparisonWorkspaceSchemaGenAI` | `validateComparisonWorkspace` + `normalizeComparisonData` | Decision matrix & options |
| 4 | **Assess Stage 1** | `generateAssessmentStage1` | `llmService.ts` L409 | `assessmentStage1SchemaGenAI` | `validateAssessmentStage1` | 8–15 concepts & self-report questions |
| 5 | **Assess Stage 2** | `generateAssessmentStage2` | `llmService.ts` L433 | `assessmentStage2SchemaGenAI` | `validateAssessmentStage2` | 1–2 MCQs per concept |
| 6 | **Assess Stage 3** | `generateStudyRoadmap` | `llmService.ts` L467 | `studyRoadmapSchemaGenAI` | `validateStudyRoadmap` | 3–5 milestone study plan |
| 7 | **Assess Stage 4** | `generateFlashcardDeck` | `llmService.ts` L499 | `flashcardDeckSchemaGenAI` | `validateFlashcardDeck` | 6–15 flashcards |
| 8 | **Document Upload** | `generateMindMap` | `llmService.ts` L84 | `mindMapSchemaGenAI` | `validateMindMap` | 20–60 node extracted map |
| 9 | **Wiki RAG Query** | `queryWiki` | `wikiQuery.ts` L222 | `querySchema` | `parseResponse` | Answer with citations |
| 10 | **Wiki Context** | `buildWikiContext` | `wikiPromptEnhancer.ts` L40 | — (text string) | — | Context block + `[[wikilinks]]` |
| 11 | **Wiki Health QA** | `generateLintPrompt` | `wikiPromptEnhancer.ts` L183 | — (returns prompt only) | — | Contradiction & link audit |
