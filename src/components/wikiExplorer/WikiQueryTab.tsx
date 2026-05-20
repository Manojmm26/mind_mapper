import React, { useState, useMemo } from "react";
import {
  Search,
  Loader2,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { WikiIndexEntry } from "../../services/wikiService";
import { queryWiki, WikiQueryResult } from "../../services/wikiQuery";
import { ConceptIndex } from "../../services/wikiIndex";

// Simple markdown-to-HTML renderer for basic formatting
function renderMarkdown(text: string): string {
  return (
    text
      // Code blocks
      .replace(
        /```(\w*)\n([\s\S]*?)```/g,
        '<pre class="bg-slate-100 rounded-lg p-3 my-2 text-xs font-mono overflow-x-auto"><code>$2</code></pre>',
      )
      // Inline code
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-slate-100 rounded px-1.5 py-0.5 text-xs font-mono text-cyan-700">$1</code>',
      )
      // Bold
      .replace(
        /\*\*([^*]+)\*\*/g,
        '<strong class="font-bold text-slate-900">$1</strong>',
      )
      // Italic
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      // Unordered lists
      .replace(/^[-*] (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
      // Numbered lists
      .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
      // Line breaks to paragraphs
      .replace(/\n\n/g, '</p><p class="mt-2">')
      // Single line breaks
      .replace(/\n/g, "<br/>")
  );
}

export interface WikiQueryTabProps {
  wikiIndex: WikiIndexEntry[];
  conceptIndex: ConceptIndex | null;
  isLoading: boolean;
  onLoadPage: (pageId: string) => void;
}

export function WikiQueryTab({
  wikiIndex,
  conceptIndex,
  isLoading,
  onLoadPage,
}: WikiQueryTabProps) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<WikiQueryResult | null>(null);
  const [isQuerying, setIsQuerying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async () => {
    if (!query.trim() || wikiIndex.length === 0) return;

    setIsQuerying(true);
    setError(null);
    setResult(null);

    try {
      const res = await queryWiki(query, wikiIndex, conceptIndex);
      setResult(res);
    } catch (err: any) {
      setError(err.message || "Failed to query the knowledge base.");
    } finally {
      setIsQuerying(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div className="space-y-4">
      {/* Query Input */}
      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-4 text-slate-400">
          <Sparkles size={18} />
        </div>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about your knowledge base..."
          rows={3}
          className="w-full rounded-2xl border border-slate-200/80 bg-white/80 py-3 pl-12 pr-14 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm ring-1 ring-slate-100 transition-all focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-100 resize-none"
        />
        <button
          onClick={handleAsk}
          disabled={isQuerying || !query.trim() || wikiIndex.length === 0}
          className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-sm transition-all hover:bg-cyan-700 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isQuerying ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <ArrowRight size={16} />
          )}
        </button>
      </div>

      {/* Loading State */}
      {isQuerying && (
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 bg-slate-50/50 py-12 text-slate-500">
          <Loader2 size={24} className="mb-3 animate-spin text-cyan-500" />
          <span className="text-sm font-bold">Synthesizing answer...</span>
          <span className="mt-1 text-xs text-slate-400">
            Searching across {wikiIndex.length} pages
          </span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
          <AlertTriangle size={18} className="mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-bold">Query Failed</p>
            <p className="mt-1 text-xs leading-relaxed">{error}</p>
          </div>
        </div>
      )}

      {/* Result */}
      {result && !isQuerying && (
        <div className="space-y-4">
          {/* Answer */}
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                <Sparkles size={14} />
              </div>
              <h3 className="text-sm font-black tracking-tight text-slate-950">
                Answer
              </h3>
            </div>
            <div
              className="text-sm leading-relaxed text-slate-700 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{
                __html: `<p class="mt-0">${renderMarkdown(result.answer)}</p>`,
              }}
            />
          </div>

          {/* Contradiction Warning */}
          {result.hasContradictions && (
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
              <AlertTriangle size={18} className="mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold">Contradiction Detected</p>
                <p className="mt-1 text-xs leading-relaxed">
                  {result.contradictionNote ||
                    "Some pages in your knowledge base contain conflicting information."}
                </p>
              </div>
            </div>
          )}

          {/* Citations */}
          {result.citations.length > 0 && (
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50/50 p-5 ring-1 ring-slate-100">
              <div className="mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-slate-500" />
                <h3 className="text-sm font-black tracking-tight text-slate-950">
                  Sources
                </h3>
              </div>
              <div className="space-y-2">
                {result.citations.map((cite) => (
                  <button
                    key={cite.pageId}
                    onClick={() => onLoadPage(cite.pageId)}
                    className="group w-full rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition-all hover:border-cyan-200 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {cite.title}
                      </h4>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500 capitalize">
                        {cite.sourceType}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                      {cite.summary}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!result && !isQuerying && !error && (
        <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 bg-slate-50/50 py-16 text-slate-500">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 mb-4">
            <Search size={24} className="text-slate-400" />
          </div>
          <p className="text-sm font-bold text-slate-700">Ask anything</p>
          <p className="mt-1 text-xs leading-5 text-slate-500 text-center max-w-xs">
            The AI will search your knowledge base and synthesize an answer with
            citations.
          </p>
        </div>
      )}
    </div>
  );
}
