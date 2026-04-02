import { Edge, Node } from '@xyflow/react';
import { ArrowRight, CircleDashed, Compass, Flag, Layers3, Link2, Tag } from 'lucide-react';
import { ComparisonWorkspaceData } from '../services/llmService';
import { buildGraphMaps } from '../utils/mapData';
import { cn } from '../utils/cn';

interface WorkspaceInspectorProps {
  nodes: Node[];
  edges: Edge[];
  selectedNodeId?: string | null;
  comparisonData: ComparisonWorkspaceData | null;
  onSelectNode: (id: string) => void;
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
}: WorkspaceInspectorProps) {
  const { nodeMap, parentMap, childrenMap, depthMap, root } = buildGraphMaps(nodes, edges);
  const selectedNode = selectedNodeId ? nodeMap.get(selectedNodeId) : root || null;
  const parentNode = selectedNode ? nodeMap.get(parentMap[selectedNode.id] || '') : null;
  const childNodes = selectedNode ? (childrenMap[selectedNode.id] || []).map((childId) => nodeMap.get(childId)).filter(Boolean) as Node[] : [];
  const tags = Array.isArray(selectedNode?.data?.tags) ? (selectedNode?.data?.tags as string[]) : [];

  return (
    <aside className="flex h-full flex-col gap-5 overflow-y-auto rounded-[32px] border border-white/60 bg-white/75 p-5 shadow-[0_12px_60px_rgba(15,23,42,0.1)] backdrop-blur-2xl scrollbar-hide">
      <div className="rounded-[28px] bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.04)] ring-1 ring-slate-100">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Compass size={12} />
            Inspector
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-700">
            <Layers3 size={11} />
            Depth {depthMap[selectedNode?.id || ''] ?? 0}
          </div>
        </div>
        <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight text-slate-950">
          {String(selectedNode?.data?.label || 'Workspace overview')}
        </h3>
        <p className="mt-3 text-sm font-medium leading-7 text-slate-600 opacity-90">
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

      {tags.length > 0 && (
        <section className="space-y-4 rounded-[28px] bg-slate-50/50 p-5 ring-1 ring-slate-100">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Tag size={12} />
            Context Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-xl bg-white px-3 py-1.5 text-[12px] font-bold text-slate-600 shadow-sm ring-1 ring-slate-100/50">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {selectedNode?.data?.nextStep && (
        <section className="group rounded-[28px] border border-cyan-100/50 bg-cyan-50/40 p-5 transition-colors hover:bg-cyan-50/60">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-700">
            <Flag size={12} className="transition-transform group-hover:scale-110" />
            Strategic Next step
          </div>
          <p className="mt-4 text-[13px] font-semibold leading-6 text-cyan-950/90">{String(selectedNode.data.nextStep)}</p>
        </section>
      )}

      <section className="space-y-4 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
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
                className="flex w-full items-center justify-between rounded-2xl bg-slate-50 p-4 text-left transition-all hover:bg-slate-100 active:scale-[0.98]"
              >
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-black text-slate-900 leading-none">{String(parentNode.data?.label || 'Untitled')}</p>
                  <p className="mt-2 text-[9px] font-black uppercase tracking-[0.16em] text-slate-400 leading-none">Parent Node</p>
                </div>
                <ArrowRight size={14} className="text-slate-400 -rotate-45" />
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-4 text-[12px] font-bold text-slate-500 text-center">
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
                        ? 'bg-cyan-50 shadow-[inset_0_0_0_2px_rgba(6,182,212,0.1)]' 
                        : 'bg-slate-50 hover:bg-slate-100'
                    )}
                  >
                    <div className="min-w-0">
                      <p className={cn(
                        'truncate text-[13px] font-black transition-colors',
                        childNode.id === selectedNodeId ? 'text-cyan-900' : 'text-slate-800'
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
                      childNode.id === selectedNodeId ? 'text-cyan-500' : 'text-slate-300'
                    )} />
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-8 text-center">
                <CircleDashed size={20} className="text-slate-300" />
                <p className="text-[12px] font-bold text-slate-500">Terminal Branch (Leaf)</p>
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