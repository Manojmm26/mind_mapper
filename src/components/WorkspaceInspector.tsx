import { useState } from 'react';
import { Edge, Node } from '@xyflow/react';
import { ArrowRight, BookmarkPlus, Check, CircleDashed, Compass, Flag, Layers3, Tag } from 'lucide-react';
import { ComparisonWorkspaceData, MindMapData } from '../services/llmService';
import { buildGraphMaps } from '../utils/mapData';
import { cn } from '../utils/cn';
import { NodeType } from '../config/wikiSchema';
import { useWiki } from '../hooks/useWiki';

interface WorkspaceInspectorProps {
  nodes: Node[];
  edges: Edge[];
  selectedNodeId?: string | null;
  comparisonData: ComparisonWorkspaceData | null;
  onSelectNode: (id: string) => void;
  onStartFlashcards?: (targetConceptIds?: string[]) => void;
}

function formatValue(value?: string) {
  if (!value) {
    return null;
  }

  return value.replace(/-/g, ' ');
}

export function WorkspaceInspector({
  nodes,
  edges,
  selectedNodeId,
  comparisonData,
  onSelectNode,
  onStartFlashcards,
}: WorkspaceInspectorProps) {
  const [savedToWiki, setSavedToWiki] = useState(false);
  const wiki = useWiki();
  const { nodeMap, parentMap, childrenMap, depthMap, root } = buildGraphMaps(nodes, edges);
  const selectedNode = selectedNodeId ? nodeMap.get(selectedNodeId) : root || null;
  const parentNode = selectedNode ? nodeMap.get(parentMap[selectedNode.id] || '') : null;
  const childNodes = selectedNode ? (childrenMap[selectedNode.id] || []).map((childId) => nodeMap.get(childId)).filter(Boolean) as Node[] : [];
  const tags = Array.isArray(selectedNode?.data?.tags) ? (selectedNode?.data?.tags as string[]) : [];

  const handleSaveBranchToWiki = async () => {
    if (!selectedNode) return;

    // Collect selected node + all descendant node IDs recursively
    const descendantIds = new Set<string>();
    const collectDescendants = (nodeId: string) => {
      descendantIds.add(nodeId);
      const children = childrenMap[nodeId] || [];
      for (const childId of children) {
        if (!descendantIds.has(childId)) {
          collectDescendants(childId);
        }
      }
    };
    collectDescendants(selectedNode.id);

    const subNodes = nodes
      .filter((n) => descendantIds.has(n.id))
      .map((n) => ({
        id: n.id,
        label: String(n.data?.label || ''),
        description: String(n.data?.description || ''),
        type: ((n.data?.type as string) || 'concept') as MindMapData['nodes'][number]['type'],
        importance: (n.data?.importance as "high" | "medium" | "low") || 'medium',
        tags: Array.isArray(n.data?.tags) ? (n.data?.tags as string[]) : [],
        nextStep: n.data?.nextStep as string | undefined,
      }));

    const subEdges = edges
      .filter((e) => descendantIds.has(e.source) && descendantIds.has(e.target))
      .map((e) => ({
        source: e.source,
        target: e.target,
        label: e.label as string | undefined,
      }));

    const title = String(selectedNode.data?.label || 'Untitled Concept');

    const mapData: MindMapData = {
      nodes: subNodes,
      edges: subEdges,
    };

    await wiki.ingestMindMap(mapData, 'topic', title);

    setSavedToWiki(true);
    setTimeout(() => setSavedToWiki(false), 2500);
  };

  return (
    <aside className="flex h-full flex-col gap-5 overflow-y-auto rounded-[32px] border border-white/60 bg-white/75 dark:border-white/10 dark:bg-slate-900/80 p-5 shadow-[0_12px_60px_rgba(15,23,42,0.1)] backdrop-blur-2xl scrollbar-hide">
      <div className="rounded-[28px] bg-white dark:bg-slate-900 p-6 shadow-[0_2px_8px_rgba(15,23,42,0.04)] ring-1 ring-slate-100 dark:ring-white/10">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <Compass size={12} />
            Inspector
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveBranchToWiki}
              disabled={savedToWiki}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] transition-all",
                savedToWiki
                  ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 ring-1 ring-emerald-200 dark:ring-emerald-800/40"
                  : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 ring-1 ring-indigo-100 dark:ring-indigo-800/40"
              )}
              title="Save selected concept branch to Knowledge Wiki"
            >
              {savedToWiki ? (
                <>
                  <Check size={11} /> Saved to Wiki
                </>
              ) : (
                <>
                  <BookmarkPlus size={11} /> Save to Wiki
                </>
              )}
            </button>
            <div className="flex items-center gap-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
              <Layers3 size={11} />
              Depth {depthMap[selectedNode?.id || ''] ?? 0}
            </div>
          </div>
        </div>
        <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white">
          {String(selectedNode?.data?.label || 'Workspace overview')}
        </h3>
        <p className="mt-3 text-sm font-medium leading-7 text-slate-600 dark:text-slate-400 opacity-90">
          {String(
            selectedNode?.data?.description ||
              comparisonData?.overview ||
              root?.data?.description ||
              'Select a node to inspect its branch, related actions, and supporting context.'
          )}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 px-1">
        {formatValue(selectedNode?.data?.type as string | undefined) && (
          <span className="rounded-xl bg-indigo-50/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-indigo-700 ring-1 ring-indigo-100">
            {formatValue(selectedNode?.data?.type as string)}
          </span>
        )}
        {formatValue(selectedNode?.data?.importance as string | undefined) && (
          <span className="rounded-xl bg-orange-50/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-orange-700 ring-1 ring-orange-100">
            {formatValue(selectedNode?.data?.importance as string)} priority
          </span>
        )}
        {formatValue(selectedNode?.data?.confidence as string | undefined) && (
          <span className="rounded-xl bg-emerald-50/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 ring-1 ring-emerald-100">
            {formatValue(selectedNode?.data?.confidence as string)} confidence
          </span>
        )}
      </div>

      {selectedNode?.data?.assessmentStatus && (
        <section
          className={cn(
            "rounded-[28px] border p-5 transition-all shadow-sm",
            selectedNode.data.assessmentStatus === "mastered"
              ? "border-emerald-200 bg-emerald-50/70"
              : selectedNode.data.assessmentStatus === "review"
              ? "border-amber-200 bg-amber-50/70"
              : "border-rose-200 bg-rose-50/70",
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              💡 AI Concept Explainer
            </span>
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white",
                selectedNode.data.assessmentStatus === "mastered"
                  ? "bg-emerald-600"
                  : selectedNode.data.assessmentStatus === "review"
                  ? "bg-amber-600"
                  : "bg-rose-600",
              )}
            >
              {selectedNode.data.assessmentStatus === "mastered"
                ? "🟢 Mastered"
                : selectedNode.data.assessmentStatus === "review"
                ? "🟡 Needs Review"
                : "🔴 Knowledge Gap"}
            </span>
          </div>

          {selectedNode.data.question && (
            <div className="mt-3 rounded-xl bg-white/80 p-3 shadow-xs">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Diagnostic Question Tested
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-800">
                "{String(selectedNode.data.question)}"
              </p>
            </div>
          )}

          <div className="mt-3">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Key Concept Takeaway
            </p>
            <p className="mt-1 text-xs font-medium leading-5 text-slate-700">
              {String(selectedNode.data.description || "Core principle for this topic.")}
            </p>
          </div>

          {onStartFlashcards && (
            <button
              type="button"
              onClick={() => onStartFlashcards([selectedNode.id])}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-purple-700 active:scale-95"
            >
              <span>🃏 Study Flashcards for this Node</span>
            </button>
          )}
        </section>
      )}

      {tags.length > 0 && (
        <section className="space-y-4 rounded-[28px] bg-slate-50/50 dark:bg-slate-800/50 p-5 ring-1 ring-slate-100 dark:ring-white/10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Tag size={12} />
            Context Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-xl bg-white dark:bg-slate-900 px-3 py-1.5 text-[12px] font-bold text-slate-600 dark:text-slate-200 shadow-sm ring-1 ring-slate-100/50 dark:ring-white/10">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {selectedNode?.data?.nextStep && (
        <section className="group rounded-[28px] border border-cyan-100/50 dark:border-cyan-800/40 bg-cyan-50/40 dark:bg-cyan-950/40 p-5 transition-colors hover:bg-cyan-50/60 dark:hover:bg-cyan-950/60">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            <Flag size={12} className="transition-transform group-hover:scale-110" />
            Strategic Next step
          </div>
          <p className="mt-4 text-[13px] font-semibold leading-6 text-cyan-950/90 dark:text-cyan-100">{String(selectedNode.data.nextStep)}</p>
        </section>
      )}

      <section className="space-y-4 rounded-[28px] bg-white dark:bg-slate-900 p-6 shadow-sm ring-1 ring-slate-100 dark:ring-white/10">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <Layers3 size={12} />
          Branch context
        </div>
        
        <div className="space-y-5">
          {parentNode ? (
            <div className="space-y-2">
              <p className="pl-1 text-[9px] font-black uppercase tracking-widest text-slate-400">Upward hierarchy</p>
              <button
                type="button"
                onClick={() => onSelectNode(parentNode.id)}
                className="flex w-full items-center justify-between rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 text-left transition-all hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-[0.98]"
              >
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-black text-slate-900 dark:text-white leading-none">{String(parentNode.data?.label || 'Untitled')}</p>
                  <p className="mt-2 text-[9px] font-black uppercase tracking-[0.16em] text-slate-400 leading-none">Parent Node</p>
                </div>
                <ArrowRight size={14} className="text-slate-400 -rotate-45" />
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 dark:border-white/15 bg-slate-50/50 dark:bg-slate-800/50 p-4 text-[12px] font-bold text-slate-500 dark:text-slate-400 text-center">
              Root Level Entity
            </div>
          )}

          <div className="space-y-3">
            <p className="pl-1 text-[9px] font-black uppercase tracking-widest text-slate-400">Branch Details</p>
            {childNodes.length > 0 ? (
              <div className="grid gap-2">
                {childNodes.map((childNode) => (
                  <button
                    key={childNode.id}
                    type="button"
                    onClick={() => onSelectNode(childNode.id)}
                    className={cn(
                      'flex w-full items-center justify-between rounded-2xl p-4 text-left transition-all active:scale-[0.98]',
                      childNode.id === selectedNodeId 
                        ? 'bg-cyan-50 dark:bg-cyan-950/60 shadow-[inset_0_0_0_2px_rgba(6,182,212,0.1)]' 
                        : 'bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700'
                    )}
                  >
                    <div className="min-w-0">
                      <p className={cn(
                        'truncate text-[13px] font-black transition-colors',
                        childNode.id === selectedNodeId ? 'text-cyan-900 dark:text-cyan-300' : 'text-slate-800 dark:text-slate-100'
                      )}>
                        {String(childNode.data?.label || 'Untitled')}
                      </p>
                      {childNode.data?.type && (
                        <p className="mt-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400">
                          {String(childNode.data.type)}
                        </p>
                      )}
                    </div>
                    <ArrowRight size={14} className={cn(
                      'shrink-0 transition-colors',
                      childNode.id === selectedNodeId ? 'text-cyan-500' : 'text-slate-300 dark:text-slate-500'
                    )} />
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-200 dark:border-white/15 bg-slate-50/50 dark:bg-slate-800/50 p-8 text-center">
                <CircleDashed size={20} className="text-slate-300 dark:text-slate-500" />
                <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400">Terminal Branch (Leaf)</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {comparisonData && (
        <section className="group rounded-[32px] bg-[linear-gradient(135deg,rgba(255,251,235,0.7),rgba(255,255,255,0.8))] p-6 ring-1 ring-amber-100 shadow-sm transition-all hover:ring-amber-200">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">
            <Compass size={14} className="animate-spin-slow" />
            Decision Intelligence
          </div>
          <p className="mt-4 text-[13px] font-semibold leading-relaxed text-amber-950/80">{comparisonData.recommendedApproach}</p>
          <div className="mt-5 space-y-2.5">
            {comparisonData.nextSteps.slice(0, 3).map((step, i) => (
              <div key={step} className="flex gap-3 items-start rounded-2xl bg-white/60 p-3 text-[12px] font-bold text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-lg bg-white shadow-sm text-[10px] font-black text-amber-600">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}