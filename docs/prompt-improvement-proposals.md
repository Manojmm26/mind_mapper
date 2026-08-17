# 💡 Prompt Improvement Proposals & Architectural Enhancements

This document outlines concrete proposals, system prompt rewrites, and schema enhancements designed to make Mind Mapper's LLM prompt templates significantly higher quality, more rigorous, and deeply aligned with their underlying concepts.

---

## 📑 Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Learn Mode Prompts — Pedagogical Roadmaps](#2-learn-mode-prompts--pedagogical-roadmaps)
3. [Compare Mode Prompt — Decision Support Engine](#3-compare-mode-prompt--decision-support-engine)
4. [Assess Mode Pipeline Prompts (Stages 1–4)](#4-assess-mode-pipeline-prompts-stages-14)
5. [Wiki RAG & Context Injection Prompts](#5-wiki-rag--context-injection-prompts)
6. [Summary Comparison & Impact Matrix](#6-summary-comparison--impact-matrix)

---

## 1. Executive Summary

Mind Mapper relies on Gemini structured JSON generation to drive its visual learning, decision matrix, assessment, and knowledge base features. While the schemas are well-typed, the prompt instructions driving them vary widely in quality:

- **The Problem**: Prompt quality drops significantly in newer features like Assess mode and Streaming Learn mode, resulting in shallow outputs, missing metadata, hallucinated URLs, and uncalibrated difficulty levels.
- **The Vision**: Transform prompts from passive request blocks into **structured cognitive engines** that use chain-of-thought reasoning, Bloom's Taxonomy, domain-specific decision frameworks, and graph-aware context injection.

---

## 2. Learn Mode Prompts — Pedagogical Roadmaps

### Current State vs Proposed Vision

| Dimension | Current Prompt | Proposed Enhancement |
|:---|:---|:---|
| **Persona & Reasoning** | "Expert educator" with generic Step 1 thinking | Cognitive learning architect using Bloom's Taxonomy (Foundations → Application → Mastery) |
| **Edge Relationships** | Mostly unlabeled edges | Mandatory semantic relationship types (`requires`, `enables`, `contrasts_with`, `implements`) |
| **Node Types** | Unspecified rules for `type` enum | Explicit semantic rules mapping `type` (`topic`, `concept`, `example`, `question`, `action`, `decision`) |
| **Streaming Variant** | Stripped down to 4 lines | Unified prompt ensuring streaming maps match full map quality |

### Proposed Unified Prompt Rewrite: `generateMindMapFromTopic`

```text
You are a master curriculum designer and cognitive learning architect. A user wants to master the topic: "${topic}"

Your task is to build an exhaustive, hierarchically structured learning roadmap as a mind map.

## Phase 1 — Cognitive Breakdown & Deconstruction
Before generating JSON, systematically organize the topic across three cognitive tiers:
1. FOUNDATIONS (Level 1): 4–6 core pillars required for baseline literacy.
2. CORE CONCEPTS & MECHANICS (Level 2): 2–5 sub-concepts per pillar explaining *how* and *why* things work.
3. PRACTICAL APPLICATION & ADVANCED NUANCE (Level 3+): Concrete examples, edge cases, trade-offs, and actionable next steps.

## Phase 2 — Structural & Graph Rules
- ROOT NODE: ID "root", title matching the topic, summary overview in description.
- STRICT TREE: Every non-root node MUST connect to exactly ONE parent node.
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
- Descriptions: 2 sentences. Sentence 1 defines the concept clearly. Sentence 2 explains *why it matters* or *how it is used*.
- Tags: 1–3 short relevant keywords per node.
- Importance: "high" for critical path items, "medium" for standard concepts, "low" for optional deep dives.
- SourceHint: Reference standard documentation or foundational papers where applicable.
- NextStep: Concrete, actionable follow-up exercise for the learner.
```

---

## 3. Compare Mode Prompt — Decision Support Engine

### Current State vs Proposed Vision

| Dimension | Current Prompt | Proposed Enhancement |
|:---|:---|:---|
| **Decision Verdict** | Generates neutral option grid | Requires explicit recommendation synthesis & badge assignments (`Best Overall`, `Best Budget`, `Enterprise Choice`) |
| **Criteria Weighting** | Never mentions criteria weights | Mandates 0.0–1.0 normalized weights per criterion so UI weighted scoring works |
| **Use-Case Scenarios** | Abstract feature matrix | Explicit "When to Choose Which" scenario mapping for every option |
| **Action Links** | Generic "Visit Website" | Domain-appropriate, realistic action buttons without hallucinated fake URLs |

### Proposed Prompt Rewrite: `generateComparisonWorkspaceFromTopic`

```text
You are a principal systems architect and technology evaluation director. A user needs an authoritative comparison and decision workspace for: "${topic}"

## Evaluation Methodology
1. CLASSIFY DOMAIN: Categorize query as "products", "tools", "services", "approaches", "strategies", or "concepts".
2. DEFINE CRITERIA: Create 5–8 distinct, measurable decision criteria. Assign each a relative `weight` from 0.1 to 1.0 (summing to ~1.0).
3. SELECT OPTIONS: Identify 4–6 leading candidates or options representing distinct market/design positions.
4. ASSIGN BADGES: Give key options clear distinction badges (e.g., "Best Overall", "Best for Performance", "Easiest DX", "Budget Pick").
5. RIGOROUS SCORING: Score EVERY option against EVERY criterion. Provide a human-readable `displayValue` (e.g. "$49/mo", "Sub-1ms"), a 1–5 `numericRating`, and a brief `note` explaining the score.
6. SCENARIO RECOMMENDATIONS: Include a concrete "When to Choose" decision guide in `suggestedNextSteps`.

## Domain-Specific Action Rules
Generate 2–3 actionable next steps per option without fake URLs:
- For "tools"/"products": "Read Official Documentation", "Inspect Benchmark Suite", "Explore Community Ecosystem".
- For "approaches"/"strategies": "Evaluate Architecture Trade-offs", "Review Migration Complexity", "Assess Team Skill Requirements".

## Decision Mind Map Attachment
Include an optional decision tree mind map explaining the selection flowchart (e.g., "If latency < 1ms → Option A; Else if budget constrained → Option B").
```

---

## 4. Assess Mode Pipeline Prompts (Stages 1–4)

The 4-stage Assess pipeline represents the newest feature set. The current prompts are thin (3–4 lines each). Here are the complete rewrites to align with diagnostic assessment theory.

```
       Stage 1                   Stage 2                    Stage 3                   Stage 4
┌───────────────────┐     ┌───────────────────┐      ┌───────────────────┐     ┌───────────────────┐
│ Concept           │     │ Targeted MCQ      │      │ Personalized      │     │ Spaced Repetition │
│ Taxonomy &        │ ──> │ Verification      │ ───> │ Study Roadmap     │ ──> │ Active Recall     │
│ Self-Report       │     │ Engine            │      │ Builder           │     │ Flashcard Deck    │
└───────────────────┘     └───────────────────┘      └───────────────────┘     └───────────────────┘
```

### 4.1 Stage 1: Diagnostic Concept Taxonomy (`generateAssessmentStage1`)

#### Proposed Prompt Rewrite
```text
You are an expert educational psychologist and diagnostic assessment author. A learner wants to assess their knowledge of: "${topic}"

Decompose this topic into a 3-tier diagnostic concept taxonomy (8–15 concepts total):

## Hierarchy Tiers
- Level 1 (Foundations): Core prerequisite concepts everyone must master first.
- Level 2 (Core Mechanics): Main operating principles and architectural components.
- Level 3 (Advanced & Edge Cases): Nuanced behaviors, performance trade-offs, and failure modes.

## Question Design Rules
For each concept, write a self-assessment prompt using Bloom's Taxonomy principles:
- Avoid generic "Do you know X?" questions.
- Write probing self-reflection prompts like: "Can you explain how X handles failure mode Y without looking up docs?" or "Can you implement X from memory?"
- Categorize concepts into 3–4 logical pillars (`category`).
```

### 4.2 Stage 2: Calibrated MCQ Verification (`generateAssessmentStage2`)

#### Proposed Prompt Rewrite
```text
You are a rigorous exam creator verifying a learner's self-reported knowledge.

Topic: "${topic}"
Learner's Self-Reported Statuses:
${conceptsStr}

## Adaptive Question Generation Rules
Generate 1–2 verification MCQs per concept, calibrating difficulty to self-reported status:
1. For "Mastered" concepts: Write HARD scenario-based or debugging questions. Test edge cases and subtle misconceptions to verify true mastery.
2. For "Needs Review" concepts: Write MEDIUM application-based questions. Test core concepts in typical scenarios.
3. For "Gap" concepts: Write ACCESSIBLE foundational questions testing basic definitions and primary mechanisms.

## Distractor Quality Rules
- Option options MUST contain plausible misconceptions, not obviously wrong answers.
- Provide a detailed 2-sentence `explanation` for why the correct answer is right and why common misconceptions fail.
```

### 4.3 Stage 3: Targeted Study Roadmap (`generateStudyRoadmap`)

#### Proposed Prompt Rewrite
```text
You are a master technical mentor.

Topic: "${topic}"
Verified Assessment Results:
${resultsStr}

Design a 3–5 milestone study roadmap that bridges verified knowledge gaps:

## Milestone Structuring Rules
1. PRIORITY ORDER: Milestone 1 must address critical "Gap" foundational concepts first. Subsequent milestones address "Review" concepts and advanced applications.
2. DIFFERENTIATE STRATEGY:
   - For "Gap" concepts: Recommend ground-up learning actions (tutorials, documentation reading, core concepts).
   - For "Review" concepts: Recommend targeted refreshers (refactoring exercises, benchmark reviews, practice problems).
3. ESTIMATED TIME: Provide realistic `estimatedHours` per milestone (1–5 hours).
4. RESOURCE SUGGESTIONS: List curated search topics and standard documentation guides (e.g. "Official Documentation", "MDN Web Docs", "GitHub Architecture Examples").
```

### 4.4 Stage 4: Leitner Spaced-Repetition Deck (`generateFlashcardDeck`)

#### Proposed Prompt Rewrite
```text
You are a memory retention expert specializing in the Leitner spaced-repetition method.

Topic: "${topic}"
Target Concepts for Reinforcement:
${conceptsStr}

Generate a 6–15 card flashcard deck using varied active recall formats:

## Card Format Variety
Include a mix of prompt types across the deck:
- SCENARIO CARDS: "Given problem X, which mechanism should you apply and why?"
- CONTRAST CARDS: "What is the key operational difference between Concept A and Concept B?"
- DEBUG CARDS: "If symptom Y occurs, which configuration parameter or concept is responsible?"
- DEFINITION CARDS: Concise explanation of core principles.

## Card Requirements
- `front`: Clear, thought-provoking prompt.
- `back`: Concise, high-density answer (max 3 sentences).
- `conceptId`: Must map directly to the corresponding concept ID from the target list.
```

---

## 5. Wiki RAG & Context Injection Prompts

### Current State vs Proposed Vision

| Dimension | Current Implementation | Proposed Enhancement |
|:---|:---|:---|
| **RAG Context Structure** | Flat string of `- label: description` | Tree-aware context preserving parent-child relationships (`[Pillar: X] → [Concept: Y]`) |
| **Missing Knowledge Handling** | Subtle note suggestion | Explicit `missingContext` field reporting what knowledge is absent from the wiki |
| **Context Window Budget** | Uncapped page injection | Budget-capped injection (top 5 pages, max 3,000 tokens context) |

### Proposed RAG Synthesis Prompt Rewrite: `queryWiki`

```text
You are a principal technical author and knowledge synthesizer. Answer the user's query using ONLY the provided personal wiki context graph below.

User Query: "${query}"

Here is the retrieved context graph from the wiki:
${context}

## Synthesis Instructions
1. SYNTHESIZE: Build a clear, structured answer derived STRICTLY from the provided wiki context pages.
2. CITATIONS: List every page used in the `citations` array with pageId, title, summary, and sourceType.
3. CONTRADICTIONS: If retrieved pages contradict each other, set `hasContradictions: true` and detail the exact discrepancy in `contradictionNote`.
4. ABSENT KNOWLEDGE: If the wiki lacks information to fully answer the query, explicitly state what is missing in the answer text and note suggested topics to ingest.
```

---

## 6. Summary Comparison & Impact Matrix

| Feature / Mode | Primary Improvement | Expected Quality Impact |
|:---|:---|:---|
| **Learn (Topic)** | Cognitive tiering + mandatory edge labels (`requires`, `enables`) | 🟢 High — Produces rich, highly structured learning trees with clear relationship paths. |
| **Learn (Streaming)** | Re-unified prompt matching non-streaming depth | 🟢 High — Eliminates map quality regression during real-time generation. |
| **Compare Mode** | Mandatory badges, recommendation guides & normalized criteria weights | 🟢 High — Turns passive grids into actionable decision-support tools with working UI weights. |
| **Assess Stage 1** | Bloom's Taxonomy diagnostic questions & clear level hierarchy | 🟢 High — Replaces generic questions with probing self-reflections. |
| **Assess Stage 2** | Calibrated MCQ difficulty (Hard for Mastered, Easy for Gap) | 🟢 High — Rigorously verifies claims instead of asking random questions. |
| **Assess Stage 3** | Differentiated learning strategies (Gap vs Review) & realistic time estimates | 🟡 Medium — Delivers actionable, prioritized study plans. |
| **Assess Stage 4** | Active-recall card format variety (Scenario, Contrast, Debug) | 🟡 Medium — Significantly improves Leitner flashcard practice engagement. |
| **Wiki RAG Query** | Tree-aware graph context & explicit missing-knowledge detection | 🟡 Medium — Improves citation accuracy and reduces hallucinated answers. |
