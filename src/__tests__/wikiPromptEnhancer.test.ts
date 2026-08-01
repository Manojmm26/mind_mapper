import { describe, it, expect } from "vitest";
import { buildWikiContext } from "../services/wikiPromptEnhancer";

describe("buildWikiContext flexibility suite", () => {
  it("should handle when 2nd argument is a wiki object with index and concepts", () => {
    const wikiObj = {
      index: [
        { id: "1", title: "React Architecture", tags: ["frontend"], summary: "React Fiber details" },
      ],
      concepts: {
        concepts: {
          react: { id: "react", label: "React", tags: ["frontend"] },
        },
      },
    };

    const ctx = buildWikiContext("React", wikiObj);
    expect(ctx).toBeDefined();
    expect(ctx.relatedPages.length).toBe(1);
    expect(ctx.relatedPages[0].title).toBe("React Architecture");
  });

  it("should handle when 2nd argument is an index array and 3rd is conceptIndex", () => {
    const indexEntries = [
      { id: "1", title: "TypeScript Deep Dive", tags: ["ts"], summary: "Type system details" },
    ];
    const conceptIndex = {
      concepts: {
        ts: { id: "ts", label: "TypeScript", tags: ["ts"] },
      },
    };

    const ctx = buildWikiContext("TypeScript", indexEntries, conceptIndex);
    expect(ctx).toBeDefined();
    expect(ctx.relatedPages.length).toBe(1);
    expect(ctx.relatedPages[0].title).toBe("TypeScript Deep Dive");
  });

  it("should handle null/undefined arguments gracefully without throwing", () => {
    const ctx = buildWikiContext("anything", undefined as any);
    expect(ctx).toBeDefined();
    expect(ctx.relatedPages).toEqual([]);
    expect(ctx.sharedConcepts).toEqual([]);
  });
});
