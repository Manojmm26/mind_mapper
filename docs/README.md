# 📖 Mind Mapper Technical Documentation Index

Welcome to the official technical documentation for Mind Mapper.

---

## 📄 Documentation Directory

| Document | Description |
|:---|:---|
| 🧠 **[LLM Prompt Templates & Sub-Call Pipelines](llm-prompt-templates.md)** | Complete reference for all 11 LLM prompt templates, GenAI + Zod schemas, validators, system instructions, streaming parser, model configuration, and multi-stage execution pipelines (`Learn`, `Compare`, `Assess` Stage 1–4, `Document Upload`, `Wiki RAG`, `Wiki Context`, `Wiki Lint`). |
| 🔍 **[Prompt Review — Feature-Level Critical Analysis](prompt-review.md)** | Feature-by-feature critical review of every LLM prompt: what we're asking for, what the schema expects, what's working, and what gaps/weaknesses exist across Learn, Compare, Assess, Document Upload, and Wiki RAG. |
| 💡 **[Prompt Improvement Proposals & Enhancements](prompt-improvement-proposals.md)** | Comprehensive proposal document with complete system prompt rewrites, Bloom's Taxonomy cognitive frameworks, decision-support badges/weights, and graph-aware RAG enhancements. |
| 📚 **[Curated Showcase Templates](curated-templates.md)** | Inventory of all 32 pre-built curated knowledge maps, mega-maps (400–792 nodes), and decision matrices available in the showcase gallery, organized across 6 domain categories. |
| 🌐 **[The LLM Wiki Pattern](../llm-wiki-pattern.md)** | Architectural overview of the LLM Wiki pattern for personal, compounding knowledge bases — covering ingestion, querying, linting, and entity synthesis. |

---

## 🛠️ Key Source File References

| Feature | Primary Implementation File |
|:---|:---|
| **LLM Prompt Templates & Generation Pipelines** | [`src/services/llmService.ts`](../src/services/llmService.ts) |
| **AI Client & JSON Execution Engine** | [`src/services/aiClient.ts`](../src/services/aiClient.ts) |
| **Schema Barrel Re-export** | [`src/services/llmSchemas.ts`](../src/services/llmSchemas.ts) |
| **Mind Map Schema (Zod + GenAI)** | [`src/schemas/mindMapSchema.ts`](../src/schemas/mindMapSchema.ts) |
| **Comparison Matrix Schema** | [`src/schemas/comparisonSchema.ts`](../src/schemas/comparisonSchema.ts) |
| **Assessment, Roadmap & Flashcard Schemas** | [`src/schemas/assessmentSchema.ts`](../src/schemas/assessmentSchema.ts) |
| **Wiki RAG Query Engine** | [`src/services/wikiQuery.ts`](../src/services/wikiQuery.ts) |
| **Wiki Context Injector & Lint Prompt** | [`src/services/wikiPromptEnhancer.ts`](../src/services/wikiPromptEnhancer.ts) |
| **Wiki Entity Synthesis** | [`src/services/wikiSynthesis.ts`](../src/services/wikiSynthesis.ts) |
| **Gemini Model Configuration** | [`src/config/aiConfig.ts`](../src/config/aiConfig.ts) |
| **Curated Templates Registry** | [`src/data/examples/index.ts`](../src/data/examples/index.ts) |
