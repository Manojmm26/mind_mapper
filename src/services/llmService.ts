import { executeLlmJsonCall, getAI } from "./aiClient";
import { WikiContext } from "./wikiPromptEnhancer";
import { getActiveGeminiModel } from "../config/aiConfig";
import {
  mindMapSchemaGenAI,
  comparisonWorkspaceSchemaGenAI,
  assessmentStage1SchemaGenAI,
  assessmentStage2SchemaGenAI,
  studyRoadmapSchemaGenAI,
  flashcardDeckSchemaGenAI,
  validateMindMap,
  validateComparisonWorkspace,
  validateAssessmentStage1,
  validateAssessmentStage2,
  validateStudyRoadmap,
  validateFlashcardDeck,
  normalizeComparisonData,
  type NodeData,
  type EdgeData,
  type MindMapData,
  type ComparisonCriterion,
  type CriterionScore,
  type ComparisonAction,
  type ComparisonOption,
  type ComparisonDomain,
  type ComparisonWorkspaceData,
  type ComparisonWorkspaceDataRaw,
  type AssessmentConcept,
  type AssessmentStage1Data,
  type MCQQuestion,
  type AssessmentStage2Data,
  type StudyRoadmapData,
  type StudyMilestone,
  type Resource,
  type AssessmentSelfReportStatus,
  type Flashcard,
  type FlashcardDeckData,
} from "./llmSchemas";

// Re-export types and helpers so existing imports from other modules continue to work
export type {
  NodeData,
  EdgeData,
  MindMapData,
  ComparisonCriterion,
  CriterionScore,
  ComparisonAction,
  ComparisonOption,
  ComparisonDomain,
  ComparisonWorkspaceData,
  ComparisonWorkspaceDataRaw,
  AssessmentConcept,
  AssessmentStage1Data,
  MCQQuestion,
  AssessmentStage2Data,
  StudyRoadmapData,
  StudyMilestone,
  Resource,
  AssessmentSelfReportStatus,
  Flashcard,
  FlashcardDeckData,
};
export { normalizeComparisonData };

// ---------------------------------------------------------------------------
// Wiki Pattern Instructions (shared across all prompts)
// ---------------------------------------------------------------------------

const WIKI_INSTRUCTIONS = `
--- WIKI INTEGRATION RULES ---
You are building upon an existing knowledge base. Follow these rules:
1. CROSS-REFERENCE: When a node relates to an existing page, add a [[wikilink]] in its description or sourceHint (e.g., "See also [[Transformer Architecture]]").
2. CONTRADICTION FLAGGING: If new information contradicts an existing page, note it in sourceHint: "Note: This contrasts with [[Page Title]] which states..."
3. TERMINOLOGY CONSISTENCY: Use the same terms and tags as the existing wiki. Do not invent synonyms for concepts that already have established names.
4. EXPAND, DON'T DUPLICATE: If a concept is already well-covered in an existing page, link to it and explain the new perspective rather than recreating the same content.
5. COMPOUNDING KNOWLEDGE: Each new map should make the overall knowledge base richer — add depth, nuance, or connections that weren't there before.
--- END WIKI RULES ---
`;

// ---------------------------------------------------------------------------
// Mind Map from Document
// ---------------------------------------------------------------------------

export async function generateMindMap(
  text: string,
  wikiContext?: WikiContext,
): Promise<MindMapData> {
  const basePrompt = `You are an expert knowledge architect analyzing a document to build a comprehensive, hierarchical mind map.

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
"""`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  return executeLlmJsonCall(prompt, mindMapSchemaGenAI, validateMindMap);
}

// ---------------------------------------------------------------------------
// Mind Map from Topic (Learning Roadmap)
// ---------------------------------------------------------------------------

export async function generateMindMapFromTopic(
  topic: string,
  wikiContext?: WikiContext,
): Promise<MindMapData> {
  const basePrompt = `You are an expert educator and knowledge architect. A user wants to learn about: "${topic}"

Your task is to create a comprehensive, well-organized mind map that serves as a learning roadmap.

## Step 1 — Think Deeply About the Topic
- What are the foundational concepts someone must understand first?
- What are the major pillars/categories within this topic?
- What are the practical applications, tools, or techniques?
- What are common misconceptions or advanced nuances?

## Step 2 — Build the Mind Map
- The ROOT node should be the topic title with a description summarizing what this map covers.
- LEVEL 1: Major categories or pillars (aim for 4-8 branches).
- LEVEL 2: Key concepts within each category (2-5 per branch).
- LEVEL 3+: Specific details, examples, techniques, or sub-concepts.

## Structural Rules
- Build a proper TREE: one root, branching into increasing specificity.
- Every non-root node connects to exactly one parent.
- Target 30-70 nodes for a rich, useful map.
- Labels: concise (max 6 words). Descriptions: specific and educational (1-2 sentences that actually teach something).
- Add metadata when relevant: node type, 1-3 tags, importance, confidence, sourceHint, and nextStep.
- Do NOT create disconnected nodes.
- Do NOT be superficial — go deep enough that each leaf node contains actionable or specific knowledge.
- Organize logically: foundational concepts first, advanced topics later in the hierarchy.`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  return executeLlmJsonCall(prompt, mindMapSchemaGenAI, validateMindMap);
}

// ---------------------------------------------------------------------------
// Comparison Workspace
// ---------------------------------------------------------------------------

export async function generateComparisonWorkspaceFromTopic(
  topic: string,
  wikiContext?: WikiContext,
): Promise<ComparisonWorkspaceData> {
  const basePrompt = `You are an expert comparison and decision-support assistant. A user wants to compare options for: "${topic}".

Create a comprehensive, domain-agnostic comparison workspace that can be shown inside a decision-support app. This could apply to products, tools, services, approaches, strategies, or concepts.

## Your Output Must Include
1. A domainType field: classify this comparison as one of "products", "tools", "services", "approaches", "strategies", or "concepts".
2. A clear overview of the comparison landscape.
3. 4-8 key decision criteria appropriate to the domain (e.g., cost, learning curve, scalability, features, community support).
4. 4-8 recommended options that plausibly match the query.
5. Each option scored against every criterion with a display value, optional rating (1-5), and brief note.
6. Relevant suggested actions for each option (e.g., "Visit Website", "Read Docs", "Start Trial", "Compare Pricing", "Read Research").
7. Concrete next steps for the user.
8. (Optional) A decision-oriented mind map that explains how to choose.

## Domain-Specific Rules
- First determine the domain type, then adapt criteria, scoring, and actions accordingly.
- For "products": include pricing, features, ecosystem. Actions: "Compare Pricing", "Read Reviews", "Try Demo".
- For "tools": include learning curve, integrations, community. Actions: "Read Docs", "Start Trial", "View GitHub".
- For "services": include SLA, support quality, scalability. Actions: "Contact Sales", "Read Case Studies", "Start Free Tier".
- For "approaches": include complexity, tradeoffs, maturity. Actions: "Read Guide", "See Examples", "Compare Benchmarks".
- For "strategies": include risk, timeline, resource needs. Actions: "Read Framework", "See Case Study", "Assess Fit".
- For "concepts": include clarity, applicability, depth. Actions: "Read Primer", "Explore Examples", "Deep Dive".
- Scores should be realistic and comparative. Use the "scores" array to map each option to the criteria by ID.
- Actions should be practical and domain-appropriate. Do not default to shopping links unless domainType is "products".
- If a mind map is included, it must remain a proper tree with one root and connected child nodes.
- Keep labels concise and descriptions useful.`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  const rawData = await executeLlmJsonCall(
    prompt,
    comparisonWorkspaceSchemaGenAI,
    validateComparisonWorkspace,
  );

  return normalizeComparisonData(rawData);
}

// ---------------------------------------------------------------------------
// Streaming Mind Map Generation
// ---------------------------------------------------------------------------

interface StreamParserState {
  buffer: string;
  parsedNodeIds: Set<string>;
  parsedEdgeIds: Set<string>;
  nodes: NodeData[];
  edges: EdgeData[];
}

export function createIncrementalParser(
  onUpdate: (nodes: NodeData[], edges: EdgeData[]) => void
) {
  const state: StreamParserState = {
    buffer: "",
    parsedNodeIds: new Set(),
    parsedEdgeIds: new Set(),
    nodes: [],
    edges: [],
  };

  function appendChunk(chunk: string) {
    state.buffer += chunk;
    
    let updated = false;

    // 1. Extract nodes
    const nodesRegex = /"nodes"\s*:\s*\[/g;
    const nodesMatch = nodesRegex.exec(state.buffer);
    if (nodesMatch) {
      let index = nodesMatch.index + nodesMatch[0].length;
      let braceCount = 0;
      let inString = false;
      let escape = false;
      let startIdx = -1;

      for (let i = index; i < state.buffer.length; i++) {
        const char = state.buffer[i];
        if (escape) {
          escape = false;
          continue;
        }
        if (char === '\\') {
          escape = true;
          continue;
        }
        if (char === '"') {
          inString = !inString;
          continue;
        }
        if (!inString) {
          if (char === '{') {
            if (braceCount === 0) {
              startIdx = i;
            }
            braceCount++;
          } else if (char === '}') {
            braceCount--;
            if (braceCount === 0 && startIdx !== -1) {
              const nodeStr = state.buffer.substring(startIdx, i + 1);
              try {
                const node = JSON.parse(nodeStr) as NodeData;
                if (node && node.id && !state.parsedNodeIds.has(node.id)) {
                  state.parsedNodeIds.add(node.id);
                  state.nodes.push(node);
                  updated = true;
                }
              } catch (e) {
                // Incomplete or invalid JSON
              }
            }
          } else if (char === ']') {
            break;
          }
        }
      }
    }

    // 2. Extract edges
    const edgesRegex = /"edges"\s*:\s*\[/g;
    const edgesMatch = edgesRegex.exec(state.buffer);
    if (edgesMatch) {
      let index = edgesMatch.index + edgesMatch[0].length;
      let braceCount = 0;
      let inString = false;
      let escape = false;
      let startIdx = -1;

      for (let i = index; i < state.buffer.length; i++) {
        const char = state.buffer[i];
        if (escape) {
          escape = false;
          continue;
        }
        if (char === '\\') {
          escape = true;
          continue;
        }
        if (char === '"') {
          inString = !inString;
          continue;
        }
        if (!inString) {
          if (char === '{') {
            if (braceCount === 0) {
              startIdx = i;
            }
            braceCount++;
          } else if (char === '}') {
            braceCount--;
            if (braceCount === 0 && startIdx !== -1) {
              const edgeStr = state.buffer.substring(startIdx, i + 1);
              try {
                const edge = JSON.parse(edgeStr) as EdgeData;
                if (edge && edge.source && edge.target) {
                  const edgeKey = `${edge.source}-${edge.target}`;
                  if (!state.parsedEdgeIds.has(edgeKey)) {
                    state.parsedEdgeIds.add(edgeKey);
                    state.edges.push(edge);
                    updated = true;
                  }
                }
              } catch (e) {
                // Incomplete or invalid JSON
              }
            }
          } else if (char === ']') {
            break;
          }
        }
      }
    }

    if (updated) {
      onUpdate([...state.nodes], [...state.edges]);
    }
  }

  return { appendChunk };
}

export async function generateMindMapStream(
  topic: string,
  onUpdate: (nodes: NodeData[], edges: EdgeData[]) => void,
  wikiContext?: WikiContext,
): Promise<MindMapData> {
  const ai = getAI();
  const basePrompt = `You are an expert educator and knowledge architect. A user wants to learn about: "${topic}"

Your task is to create a comprehensive, well-organized mind map that serves as a learning roadmap.

## Structural Rules
- Build a proper TREE: one root, branching into increasing specificity.
- Target 30-70 nodes for a rich, useful map.
- Labels: concise (max 6 words). Descriptions: specific and educational.

Document content or topic: "${topic}"`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  const parser = createIncrementalParser(onUpdate);

  const responseStream = await ai.models.generateContentStream({
    model: getActiveGeminiModel(),
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: mindMapSchemaGenAI,
    },
  });

  let fullText = "";
  for await (const chunk of responseStream) {
    const textChunk = chunk.text || "";
    fullText += textChunk;
    parser.appendChunk(textChunk);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(fullText);
  } catch (e) {
    console.error("Failed to parse final JSON response from stream:", fullText);
    throw new Error("Invalid JSON response format from streaming LLM.");
  }

  return validateMindMap(parsed);
}

// ---------------------------------------------------------------------------
// Phase 1: Diagnostic Assessment — Stage 1 (Concept Decomposition & Self-Report)
// ---------------------------------------------------------------------------

export async function generateAssessmentStage1(
  topic: string,
  wikiContext?: WikiContext,
): Promise<AssessmentStage1Data> {
  const basePrompt = `You are an expert diagnostic assessment engine. A user wants to assess their knowledge of: "${topic}".

Generate Stage 1 of a 2-stage diagnostic assessment:
1. Return a clear overview of the assessment domain.
2. Break the topic down into 8-15 core concepts across levels 1, 2, and 3.
3. For each concept, generate a self-assessment question (e.g. "Can you explain how X works?") that the user will answer as "Mastered", "Needs Review", or "Gap".

Output MUST match the assessmentStage1SchemaGenAI JSON structure.`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  return executeLlmJsonCall(prompt, assessmentStage1SchemaGenAI, validateAssessmentStage1);
}

// ---------------------------------------------------------------------------
// Phase 2: Diagnostic Assessment — Stage 2 (MCQ Verification)
// ---------------------------------------------------------------------------

export async function generateAssessmentStage2(
  topic: string,
  selfReportedConcepts: Array<{
    conceptId: string;
    conceptLabel: string;
    status: AssessmentSelfReportStatus;
  }>,
  wikiContext?: WikiContext,
): Promise<AssessmentStage2Data> {
  const conceptsStr = JSON.stringify(selfReportedConcepts, null, 2);

  const basePrompt = `You are an expert diagnostic verification engine.

Topic: "${topic}"
User's Self-Reported Concepts:
${conceptsStr}

Generate Stage 2 verification multiple-choice questions (MCQs):
- Create 1-2 targeted MCQs for each concept listed above to rigorously verify if the user truly understands it.
- Each MCQ must have 4 options, a correctIndex (0-3), and an explanation.

Output MUST match the assessmentStage2SchemaGenAI JSON structure.`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  return executeLlmJsonCall(prompt, assessmentStage2SchemaGenAI, validateAssessmentStage2);
}

// ---------------------------------------------------------------------------
// Phase 3: Actionable Study Roadmap
// ---------------------------------------------------------------------------

export async function generateStudyRoadmap(
  topic: string,
  conceptResults: Array<{
    conceptId: string;
    conceptLabel: string;
    status: "mastered" | "review" | "gap";
  }>,
  wikiContext?: WikiContext,
): Promise<StudyRoadmapData> {
  const resultsStr = JSON.stringify(conceptResults, null, 2);

  const basePrompt = `You are an expert personalized learning advisor.

Topic: "${topic}"
Diagnostic Results:
${resultsStr}

Generate a structured study roadmap with 3-5 chronological milestones prioritizing concepts marked as "gap" or "review". Include estimated hours, key topics, recommended learning actions, and curated resources.

Output MUST match the studyRoadmapSchemaGenAI JSON structure.`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  return executeLlmJsonCall(prompt, studyRoadmapSchemaGenAI, validateStudyRoadmap);
}

// ---------------------------------------------------------------------------
// Phase 4: Leitner Spaced Repetition Flashcards
// ---------------------------------------------------------------------------

export async function generateFlashcardDeck(
  topic: string,
  concepts: Array<{ id: string; label: string; description: string }>,
  wikiContext?: WikiContext,
): Promise<FlashcardDeckData> {
  const conceptsStr = JSON.stringify(concepts, null, 2);

  const basePrompt = `You are an expert spaced-repetition flashcard generator.

Topic: "${topic}"
Target Concepts:
${conceptsStr}

Generate a flashcard deck with 6-15 cards covering these concepts:
- Front: a clear, thought-provoking question or scenario.
- Back: a concise, educational answer.
- Link each card to its corresponding conceptId.

Output MUST match the flashcardDeckSchemaGenAI JSON structure.`;

  const prompt = wikiContext?.contextString
    ? `${basePrompt}${wikiContext.contextString}${WIKI_INSTRUCTIONS}`
    : basePrompt;

  return executeLlmJsonCall(prompt, flashcardDeckSchemaGenAI, validateFlashcardDeck);
}
