# 🔍 LLM Prompt Templates — Feature-Level Critical Review

A feature-by-feature review of what we're sending to the LLM, what we're expecting back, and where the gaps are.

---

## 1. 📘 LEARN — `generateMindMapFromTopic`

**Feature goal**: User types a topic → gets a rich, explorable knowledge tree they can visually navigate.

### What the prompt asks for
- Role: "expert educator and knowledge architect"
- Two-phase thinking: (1) think deeply about pillars, foundations, applications, nuances; (2) build the map
- Structural rules: tree structure, 30–70 nodes, max 6-word labels, 1–2 sentence descriptions
- Metadata: `type`, `tags`, `importance`, `confidence`, `sourceHint`, `nextStep`

### What the schema expects back
- `topic` (string), `overview` (string)
- `nodes[]` — each with `id`, `label`, `description` (required); `type`, `tags`, `importance`, `confidence`, `sourceHint`, `nextStep` (optional)
- `edges[]` — each with `source`, `target` (required); `label` (optional)

### ✅ What's working well
- The "Step 1 — Think Deeply" chain-of-thought section is good prompt engineering — it forces the model to reason before generating structure.
- Node metadata fields (`sourceHint`, `nextStep`) are thoughtful — they turn passive reading into actionable learning.
- "Prefer depth over breadth" is a strong directive that prevents flat, shallow maps.

### ⚠️ Issues & Gaps

| Issue | Severity | Detail |
|:---|:---|:---|
| **No difficulty/level calibration** | 🔴 High | The prompt doesn't ask what level the user is at. A "Kubernetes" map for a beginner vs. a staff engineer should look very different. There's no way to calibrate depth or vocabulary. |
| **No edge labels in practice** | 🟡 Medium | The prompt never instructs the LLM to generate meaningful edge labels ("requires", "enables", "contrasts with"). The schema supports it, but the prompt doesn't push for it. Most edges come back unlabeled. |
| **`type` field underutilized** | 🟡 Medium | The prompt says "add metadata when relevant" but never explains *when* to use `topic` vs `concept` vs `example` vs `question` vs `action` vs `decision` vs `source`. The LLM likely defaults to `concept` for everything. |
| **No ordering/sequencing guidance** | 🟡 Medium | "Organize logically" is vague. The prompt doesn't tell the LLM to encode learning order. A prerequisite chain (learn A before B) isn't captured. The `nextStep` field exists but isn't positioned as a sequencing tool. |
| **`confidence` field is meaningless for topic generation** | 🟢 Low | Confidence makes sense for document extraction (how confident is the extraction?). For topic generation from general knowledge, every node will be "high" confidence. It's wasted schema real estate. |
| **50k char truncation undisclosed** | 🟢 Low | Only applies to `generateMindMap` (document mode), not topic mode. But worth noting — the user isn't told their document got truncated. |

---

## 2. 📘 LEARN (Streaming) — `generateMindMapStream`

**Feature goal**: Same as above but with real-time progressive rendering as nodes appear.

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **Drastically stripped-down prompt** | 🔴 High | The streaming prompt is ~4 lines vs. ~20 lines for the non-streaming version. It drops: the "Think Deeply" chain-of-thought, all metadata guidance, the depth-over-breadth rule, the "don't be superficial" instruction, and the level hierarchy targets. The result quality will be noticeably worse. |
| **Redundant topic injection** | 🟢 Low | The topic appears twice: once in the opening sentence and again at the end as `Document content or topic: "${topic}"`. This wastes tokens and could confuse the model. |

> **Recommendation**: The streaming prompt should be identical to the non-streaming prompt. The schema constraint handles output format — prompt quality shouldn't be sacrificed for streaming.

---

## 3. 📄 DOCUMENT UPLOAD — `generateMindMap`

**Feature goal**: User uploads a PDF/TXT/MD → gets a mind map extracted from the document's content.

### ✅ What's working well
- Clear task decomposition (identify thesis → extract topics → sub-topics → deeper)
- "Prefer depth over breadth" is critical for document extraction
- `sourceHint` field maps well here — it can reference document sections

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **No instruction to preserve document structure** | 🟡 Medium | If the document has chapters/sections/headings, the prompt doesn't tell the LLM to use those as natural hierarchy boundaries. It should say "Use the document's own headings and sections as the primary hierarchy." |
| **Redundant Output Format section** | 🟢 Low | The "Output Format" section repeats rules already stated in "Structural Rules" (concise labels, specific descriptions). |
| **No handling of multi-topic documents** | 🟡 Medium | If someone uploads a textbook chapter covering 3 unrelated topics, the prompt forces a single root. It might be better to detect multi-topic docs and suggest multiple maps. |

---

## 4. ⚖️ COMPARE — `generateComparisonWorkspaceFromTopic`

**Feature goal**: User types a comparison query → gets a structured decision matrix with options, criteria, scores, and actions.

### What the prompt asks for
- Domain classification (products/tools/services/approaches/strategies/concepts)
- 4–8 criteria, 4–8 options
- Per-option scores against every criterion (display value + optional 1–5 rating + note)
- Suggested actions per option
- Next steps
- Optional decision mind map

### ✅ What's working well
- Domain-specific rules are excellent — they adapt criteria and actions per domain type.
- The "scores should be realistic and comparative" instruction prevents the LLM from giving everything a 5/5.
- Optional mind map attachment is a nice multi-format output.

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **No "winner" or recommendation** | 🔴 High | The prompt never asks "which option do you recommend and why?" Users comparing options want a verdict, not just a neutral grid. The schema has `badge` (e.g., "Best Overall") but the prompt doesn't instruct the LLM to use it. |
| **Actions lack real URLs** | 🟡 Medium | The prompt says `"Visit Website"`, `"Read Docs"` etc. but the LLM will generate placeholder text, not actual URLs. The `url` field in the schema is optional and will likely be empty or hallucinated. Either remove it or explicitly instruct the LLM to provide real URLs. |
| **No "when to choose" guidance** | 🟡 Medium | A comparison should tell you *when* each option is the right pick (e.g., "Choose Redis when you need sub-ms latency for caching"). The prompt doesn't ask for use-case-based recommendations. |
| **Criteria weights aren't prompted** | 🟡 Medium | The schema has a `weight` field (0–1) on criteria, but the prompt never mentions weights. The LLM will likely skip this, making the weighted scoring feature in the UI non-functional. |
| **`normalizeComparisonData` defaults to "products"** | 🟢 Low | If the LLM omits `domainType`, it silently defaults to `"products"`, which may be wrong for abstract comparisons. |

---

## 5. 🎯 ASSESS Stage 1 — `generateAssessmentStage1`

**Feature goal**: Given a topic, decompose it into core concepts and generate self-assessment questions so the user can gauge where they stand.

### What the prompt asks for
- 8–15 core concepts across levels 1, 2, and 3
- Each concept gets a self-assessment question
- User will answer "Mastered", "Needs Review", or "Gap"

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **Too thin — only 4 lines of instruction** | 🔴 High | Compare this to the Learn prompt (20+ lines with chain-of-thought). This prompt has zero guidance on *how* to decompose a topic, what "level 1/2/3" means, what makes a good self-assessment question, or how concepts should relate to each other. The LLM is doing all the work with no guardrails. |
| **"Levels 1, 2, 3" are undefined** | 🔴 High | The prompt says "across levels 1, 2, and 3" but never defines what these levels mean. Is Level 1 = foundational? Advanced? The LLM will interpret this arbitrarily. The schema has `level: number (1-3)` but no semantic meaning. |
| **Self-assessment questions are too generic** | 🟡 Medium | "Can you explain how X works?" is the only example. Better diagnostic questions would be: "Can you compare X vs Y?", "Can you implement X from scratch?", "Can you debug when X fails?" — testing different cognitive levels (Bloom's taxonomy). |
| **No category guidance** | 🟡 Medium | The schema has a `category` field per concept, but the prompt doesn't tell the LLM how to categorize — or even that it should group concepts into pillars. |
| **Says "2-stage" but it's actually 4-stage** | 🟢 Low | The prompt says "Stage 1 of a 2-stage diagnostic assessment" but the actual pipeline has 4 stages (self-report → MCQ → roadmap → flashcards). Minor inconsistency but could confuse the model's framing. |

---

## 6. 🎯 ASSESS Stage 2 — `generateAssessmentStage2`

**Feature goal**: Verify the user's self-report with targeted MCQs to catch overconfidence or underconfidence.

### ✅ What's working well
- Feeding back the self-reported statuses is smart — the LLM knows what the user *claimed* and can target verification questions accordingly.
- 4 options + correctIndex + explanation is a well-structured MCQ format.

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **No difficulty calibration per self-report status** | 🔴 High | If a user says "Mastered" for a concept, the verification MCQ should be harder (edge cases, tricky distinctions). If they say "Gap", the MCQ should test basic understanding. The prompt doesn't differentiate — it just says "1-2 MCQs for each concept." |
| **No instruction on distractor quality** | 🟡 Medium | Good MCQs have plausible distractors (wrong answers that test common misconceptions). The prompt doesn't mention this. The LLM might generate obviously wrong options that don't actually verify understanding. |
| **No instruction to avoid trivially Googleable questions** | 🟡 Medium | "What year was X invented?" is a terrible diagnostic question. The prompt should say "Ask application-based and reasoning questions, not factual recall." |

---

## 7. 🎯 ASSESS Stage 3 — `generateStudyRoadmap`

**Feature goal**: After diagnosis, generate a personalized study plan that prioritizes weak areas.

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **Very thin prompt — only 3 lines of actual instruction** | 🔴 High | "Generate a structured study roadmap with 3-5 chronological milestones" is the entire instruction. No guidance on: how to estimate hours, what makes a good milestone, how to sequence learning, what resource types to prefer. |
| **Resources will be hallucinated** | 🔴 High | The schema has `resources: [{ title, type, url }]` and the prompt says "curated resources." The LLM will generate plausible-sounding resource titles and URLs that don't exist. There's no grounding mechanism. Either remove URLs or add a disclaimer. |
| **No distinction between "review" and "gap" treatment** | 🟡 Medium | The prompt says "prioritizing concepts marked as 'gap' or 'review'" but doesn't explain the difference. A "gap" concept needs full learning from scratch; a "review" concept just needs refreshing. The milestones should reflect this distinction. |
| **`totalEstimatedHours` not in GenAI schema** | 🟢 Low | The Zod schema has `totalEstimatedHours` as optional, but the GenAI schema sent to Gemini doesn't include it. The validator calculates it as a fallback by summing milestones. Minor inconsistency. |

---

## 8. 🎯 ASSESS Stage 4 — `generateFlashcardDeck`

**Feature goal**: Generate spaced-repetition flashcards for the concepts the user needs to reinforce.

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **No difficulty progression** | 🟡 Medium | All flashcards are treated equally. For Leitner to work well, cards should have varying difficulty levels (recognition → recall → application). The prompt doesn't mention this. |
| **"6-15 cards" may not cover all concepts** | 🟡 Medium | If Stage 1 identified 15 concepts and most need review, 6–15 cards can't cover them all with 1 card each. The prompt should say "at least 1 card per concept" or adjust the range. |
| **`category` field in schema, not prompted** | 🟢 Low | The Zod schema has an optional `category` field on flashcards, but the GenAI schema sent to Gemini doesn't include it, and the prompt doesn't mention it. Dead field. |
| **No guidance on card format variety** | 🟢 Low | All cards will likely be "What is X?" → "X is Y." Better flashcard design uses: fill-in-the-blank, true/false, scenario-based, compare-and-contrast, code completion, etc. |

---

## 9. 🔍 WIKI RAG — `queryWiki`

**Feature goal**: User asks a question → system searches wiki pages → LLM synthesizes an answer with citations.

### ✅ What's working well
- The retrieval engine with weighted multi-factor scoring is solid.
- Contradiction detection is a smart differentiator.
- "Cite every page you use" enforces traceability.
- "If the provided context is insufficient, state what is missing" prevents hallucination.

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **Context only sends node labels + descriptions, not full page structure** | 🟡 Medium | The context block sends `- ${node.label}: ${node.description}` as a flat list. The hierarchical relationships (edges) between nodes are lost. The LLM can't see that "TCP" is a child of "Transport Layer" — it just sees two unrelated bullet points. |
| **No "I don't know" safety valve** | 🟡 Medium | The prompt says "using ONLY the provided wiki pages" but doesn't explicitly say "if the wiki doesn't contain the answer, say so clearly instead of guessing." The "insufficient" instruction is close but not strong enough. |
| **Citations are positional, not verified** | 🟢 Low | The LLM is told to cite pages but there's no verification that the cited content actually supports the claim. It could cite the wrong page. |

---

## 10. 🌐 WIKI CONTEXT INJECTION — `WIKI_INSTRUCTIONS`

**Feature goal**: When generating new maps, inject existing wiki knowledge to enable cross-referencing and prevent duplication.

### ✅ What's working well
- The 5 rules (cross-reference, contradiction flagging, terminology consistency, expand don't duplicate, compounding knowledge) are well-designed.
- `[[wikilink]]` syntax is a clever convention that enables post-processing.

### ⚠️ Issues

| Issue | Severity | Detail |
|:---|:---|:---|
| **Context window budget not managed** | 🟡 Medium | Up to 5 pages × their full node content is injected. For large wikis, this could consume significant context window space, leaving less room for the actual generation prompt. There's no token budget or summarization step. |
| **Appended after the base prompt, not before** | 🟢 Low | The wiki context + instructions are appended at the end. LLMs tend to attend more strongly to the beginning and end of prompts. The structural rules (in the middle) might get less attention than the wiki context (at the end). |

---

## 📊 Cross-Cutting Observations

### 1. Prompt Quality Gradient
The prompts have wildly different quality levels:

| Prompt | Lines of instruction | Chain-of-thought? | Specific examples? | Rating |
|:---|:---|:---|:---|:---|
| Learn (topic) | ~20 | ✅ Yes | Partial | ⭐⭐⭐⭐ |
| Compare | ~25 | ✅ Yes (domain rules) | ✅ Yes | ⭐⭐⭐⭐⭐ |
| Document | ~15 | Partial | No | ⭐⭐⭐ |
| Learn (streaming) | ~4 | ❌ No | No | ⭐⭐ |
| Assess Stage 1 | ~4 | ❌ No | 1 example | ⭐⭐ |
| Assess Stage 2 | ~4 | ❌ No | No | ⭐⭐ |
| Assess Stage 3 | ~3 | ❌ No | No | ⭐ |
| Assess Stage 4 | ~4 | ❌ No | No | ⭐⭐ |
| Wiki Query | ~6 | ❌ No | No | ⭐⭐⭐ |

**The Assess pipeline prompts are significantly undertreated compared to Learn and Compare.** They're the newest feature and deserve the same level of prompt engineering investment.

### 2. No User Context Anywhere
None of the prompts accept user-level context:
- What's the user's experience level? (beginner / intermediate / expert)
- What's their learning goal? (overview / deep dive / exam prep / interview prep)
- What do they already know? (could be inferred from wiki)

### 3. No Feedback Loop
There's no mechanism to take user feedback ("this node was unhelpful", "this MCQ was too easy") and feed it back into subsequent generations. Each call is stateless (except the Assess pipeline's sequential data passing).
