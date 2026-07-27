import { GoogleGenAI, Type } from "@google/genai";
import { WikiPage } from "../config/wikiSchema";
import { getWikiPage, WikiIndexEntry } from "./wikiService";
import { ConceptIndex } from "./wikiIndex";
import { getActiveGeminiModel } from "../config/aiConfig";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (aiInstance) return aiInstance;

  const viteEnv = (
    import.meta as ImportMeta & { env?: Record<string, string | undefined> }
  ).env;
  const apiKey =
    viteEnv?.VITE_GEMINI_API_KEY || (process.env as any).GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    throw new Error(
      "Gemini API Key is not set. Please add your key to the .env file.",
    );
  }

  aiInstance = new GoogleGenAI({ apiKey });
  return aiInstance;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WikiCitation {
  pageId: string;
  title: string;
  summary: string;
  sourceType: string;
}

export interface WikiQueryResult {
  query: string;
  answer: string;
  citations: WikiCitation[];
  hasContradictions: boolean;
  contradictionNote?: string;
}

const querySchema = {
  type: Type.OBJECT,
  properties: {
    answer: {
      type: Type.STRING,
      description:
        "A comprehensive, synthesized answer to the user's query based on the provided wiki pages.",
    },
    citations: {
      type: Type.ARRAY,
      description:
        "List of wiki pages used to synthesize the answer. Include pageId, title, summary, and sourceType.",
      items: {
        type: Type.OBJECT,
        properties: {
          pageId: { type: Type.STRING },
          title: { type: Type.STRING },
          summary: { type: Type.STRING },
          sourceType: { type: Type.STRING },
        },
        required: ["pageId", "title", "summary", "sourceType"],
      },
    },
    hasContradictions: {
      type: Type.BOOLEAN,
      description:
        "True if the provided wiki pages contain contradictory information regarding the query.",
    },
    contradictionNote: {
      type: Type.STRING,
      description:
        "If contradictions exist, describe them briefly. Otherwise, null.",
    },
  },
  required: ["answer", "citations", "hasContradictions"],
};

function parseResponse<T>(response: any): T {
  const jsonStr = response.text?.trim() || "{}";
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response:", jsonStr);
    throw new Error("Invalid response format from LLM.");
  }
}

function tokenizeQuery(query: string) {
  return query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);
}

function scoreText(text: string | undefined, query: string, terms: string[]) {
  if (!text) {
    return 0;
  }

  const lowerText = text.toLowerCase();
  let score = 0;

  if (lowerText.includes(query)) {
    score += Math.max(8, query.length);
  }

  for (const term of terms) {
    if (lowerText.includes(term)) {
      score += 3;
    }
  }

  return score;
}

// ---------------------------------------------------------------------------
// Query Logic
// ---------------------------------------------------------------------------

/**
 * Searches the wiki index and fetches full page content for relevant results.
 * Returns up to `maxPages` pages sorted by relevance.
 */
async function fetchRelevantPages(
  query: string,
  index: WikiIndexEntry[],
  conceptIndex?: ConceptIndex | null,
  maxPages: number = 5,
): Promise<WikiPage[]> {
  const lowerQuery = query.toLowerCase().trim();
  const terms = tokenizeQuery(query);
  const conceptBoosts = new Map<string, number>();

  if (conceptIndex) {
    for (const concept of Object.values(conceptIndex.concepts)) {
      const conceptScore =
        scoreText(concept.label, lowerQuery, terms) * 2 +
        (concept.tags || []).reduce(
          (sum, tag) => sum + scoreText(tag, lowerQuery, terms),
          0,
        );

      if (conceptScore <= 0) {
        continue;
      }

      for (const pageId of concept.pageIds) {
        conceptBoosts.set(pageId, (conceptBoosts.get(pageId) || 0) + conceptScore);
      }
    }
  }

  const scoredEntries = index
    .map((entry) => {
      const titleScore = scoreText(entry.title, lowerQuery, terms) * 4;
      const summaryScore = scoreText(entry.summary, lowerQuery, terms) * 2;
      const tagScore = entry.tags.reduce(
        (sum, tag) => sum + scoreText(tag, lowerQuery, terms) * 3,
        0,
      );
      const sourceScore = scoreText(entry.sourceName, lowerQuery, terms);
      const totalScore =
        titleScore +
        summaryScore +
        tagScore +
        sourceScore +
        (conceptBoosts.get(entry.id) || 0);

      return { entry, score: totalScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPages * 2);

  const loadedPages = await Promise.all(
    scoredEntries.map(async ({ entry, score }) => {
      const page = await getWikiPage(entry.id);
      if (!page) {
        return null;
      }

      const nodeScore = page.nodes.reduce(
        (sum, node) =>
          sum +
          scoreText(node.label, lowerQuery, terms) * 2 +
          scoreText(node.description, lowerQuery, terms),
        0,
      );

      // Graph neighborhood boost: boost pages connected via crossReferences
      let graphBoost = 0;
      if (conceptIndex?.crossReferences[entry.id]) {
        const connectedPageIds = conceptIndex.crossReferences[entry.id];
        graphBoost = connectedPageIds.length * 1.5;
      }

      return {
        page,
        score: score + nodeScore + graphBoost,
      };
    }),
  );

  return loadedPages
    .filter((item): item is { page: WikiPage; score: number } => Boolean(item))
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPages)
    .map(({ page }) => page);
}

/**
 * Queries the wiki knowledge base.
 * Searches for relevant pages, sends their content to Gemini for synthesis,
 * and returns a structured answer with citations.
 */
export async function queryWiki(
  query: string,
  wikiIndex: WikiIndexEntry[],
  conceptIndex?: ConceptIndex | null,
  maxPages: number = 5,
): Promise<WikiQueryResult> {
  const relevantPages = await fetchRelevantPages(
    query,
    wikiIndex,
    conceptIndex,
    maxPages,
  );

  if (relevantPages.length === 0) {
    return {
      query,
      answer:
        "No relevant information found in the knowledge base. Try generating a mind map on this topic first.",
      citations: [],
      hasContradictions: false,
    };
  }

  const context = relevantPages
    .map(
      (page) => `
## Page: ${page.title} (ID: ${page.id})
Source: ${page.sourceType}
Summary: ${page.metadata.summary || "N/A"}
Content:
${page.nodes.map((n) => `- ${n.label}: ${n.description || "No description"}`).join("\n")}
`,
    )
    .join("\n---\n");

  const ai = getAI();
  const response = await ai.models.generateContent({
    model: getActiveGeminiModel(),
    contents: `You are a knowledgeable assistant answering questions based on a personal wiki knowledge base.

User Query: "${query}"

Here is the relevant context from the wiki:
${context}

Instructions:
1. Synthesize a clear, comprehensive answer to the query using ONLY the provided wiki pages.
2. If the pages contradict each other, explicitly note the contradiction in the contradictionNote field.
3. Cite every page you use in the citations array.
4. If the provided context is insufficient, state what is missing in the answer.

Return your response as a JSON object matching the schema.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: querySchema,
    },
  });

  const parsed = parseResponse<WikiQueryResult>(response);
  return { ...parsed, query };
}
