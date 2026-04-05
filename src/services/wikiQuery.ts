import { GoogleGenAI, Type } from "@google/genai";
import { WikiPage } from "../config/wikiSchema";
import { getWikiPage, WikiIndexEntry } from "./wikiService";

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
  maxPages: number = 5,
): Promise<WikiPage[]> {
  const lowerQuery = query.toLowerCase();
  const results = index.filter(
    (entry) =>
      entry.title.toLowerCase().includes(lowerQuery) ||
      entry.summary.toLowerCase().includes(lowerQuery) ||
      entry.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      (entry.sourceName && entry.sourceName.toLowerCase().includes(lowerQuery)),
  );

  const topResults = results.slice(0, maxPages);

  const pages: WikiPage[] = [];
  for (const entry of topResults) {
    const page = await getWikiPage(entry.id);
    if (page) pages.push(page);
  }

  return pages;
}

/**
 * Queries the wiki knowledge base.
 * Searches for relevant pages, sends their content to Gemini for synthesis,
 * and returns a structured answer with citations.
 */
export async function queryWiki(
  query: string,
  wikiIndex: WikiIndexEntry[],
  maxPages: number = 5,
): Promise<WikiQueryResult> {
  const relevantPages = await fetchRelevantPages(query, wikiIndex, maxPages);

  if (relevantPages.length === 0) {
    return {
      query,
      answer:
        "No relevant information found in the knowledge base. Try generating a mind map on this topic first.",
      citations: [],
      hasContradictions: false,
    };
  }

  // Build context from relevant pages
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
    model: "gemini-3-flash-preview",
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
