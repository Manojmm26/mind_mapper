import { Edge, Node } from '@xyflow/react';
import { LayoutGrid, ListTree, Scale, Search, Sparkles } from 'lucide-react';
import { ComparisonWorkspaceData } from '../services/llmService';
import { buildGraphMaps } from '../utils/mapData';
import { cn } from '../utils/cn';
import { MapOutline } from './MapOutline';

export type WorkspaceView = 'map' | 'outline' | 'compare';

interface WorkspaceSidebarProps {
  workflowMode: 'learn' | 'compare';
  nodes: Node[];
  edges: Edge[];
  comparisonData: ComparisonWorkspaceData | null;
  selectedNodeId?: string | null;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  activeView: WorkspaceView;
  onChangeView: (view: WorkspaceView) => void;
  onSelectNode: (id: string) => void;
  compact?: boolean;
}

export function WorkspaceSidebar({
  workflowMode,
  nodes,
  edges,
  comparisonData,
  selectedNodeId,
  searchQuery,
  onSearchQueryChange,
  activeView,
  onChangeView,
  onSelectNode,
  compact = false,
}: WorkspaceSidebarProps) {
  const { root, depthMap } = buildGraphMaps(nodes, edges);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const matches = normalizedQuery
    ? nodes.filter((node) => {
        const label = String(node.data?.label || '').toLowerCase();
        const description = String(node.data?.description || '').toLowerCase();
        const tags = Array.isArray(node.data?.tags) ? (node.data.tags as string[]).join(' ').toLowerCase() : '';
        return label.includes(normalizedQuery) || description.includes(normalizedQuery) || tags.includes(normalizedQuery);
      })
    : [];
  const maxDepth = Object.values(depthMap).reduce((max, value) => Math.max(max, value), 0);

  return (
    <aside
      className={cn(
        'flex h-full flex-col gap-4 rounded-[28px] border border-white/60 bg-white/78 p-4 shadow-[0_12px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl',
        compact ? 'p-3' : 'p-4'
      )}
    >
      <div className="space-y-3 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700">
          <Sparkles size={12} />
          {workflowMode === 'compare' ? 'Decision Workspace' : 'Learning Workspace'}
        </div>
        <div>
          <h2 className="text-lg font-black tracking-tight text-slate-950">
            {String(root?.data?.label || (workflowMode === 'compare' ? 'Comparison map' : 'Mind map'))}
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {workflowMode === 'compare'
              ? comparisonData?.overview || 'Compare options, inspect the map, and keep the decision trail visible.'
              : String(root?.data?.description || 'Browse the map through branches, search, and node details.')}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-2xl bg-slate-50 px-2 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Nodes</p>
            <p className="mt-1 text-lg font-black text-slate-900">{nodes.length}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-2 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Branches</p>
            <p className="mt-1 text-lg font-black text-slate-900">{edges.length}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-2 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Depth</p>
            <p className="mt-1 text-lg font-black text-slate-900">{maxDepth + 1}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1 text-sm font-bold text-slate-500">
        <button
          type="button"
          onClick={() => onChangeView('map')}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 transition-colors',
            activeView === 'map' ? 'bg-white text-slate-950 shadow-sm' : 'hover:text-slate-700'
          )}
        >
          <LayoutGrid size={16} />
          Map
        </button>
        <button
          type="button"
          onClick={() => onChangeView('outline')}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 transition-colors',
            activeView === 'outline' ? 'bg-white text-slate-950 shadow-sm' : 'hover:text-slate-700'
          )}
        >
          <ListTree size={16} />
          Outline
        </button>
        {workflowMode === 'compare' && comparisonData && (
          <button
            type="button"
            onClick={() => onChangeView('compare')}
            className={cn(
              'col-span-2 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 transition-colors',
              activeView === 'compare' ? 'bg-white text-slate-950 shadow-sm' : 'hover:text-slate-700'
            )}
          >
            <Scale size={16} />
            Decision Board
          </button>
        )}
      </div>

      <div className="space-y-3">
        <label className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Find a node</label>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchQueryChange(event.target.value)}
            placeholder="Search labels, descriptions, tags..."
            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>

      {normalizedQuery ? (
        <div className="min-h-0 flex-1 space-y-3 overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
            <span>Matches</span>
            <span>{matches.length}</span>
          </div>
          <div className="space-y-2 overflow-y-auto pr-1">
            {matches.length > 0 ? (
              matches.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => onSelectNode(node.id)}
                  className={cn(
                    'w-full rounded-2xl border px-3 py-3 text-left transition-colors',
                    node.id === selectedNodeId
                      ? 'border-cyan-200 bg-cyan-50'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-semibold text-slate-900">{String(node.data?.label || 'Untitled node')}</p>
                    {node.data?.type && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {String(node.data.type)}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                    {String(node.data?.description || 'No description available.')}
                  </p>
                </button>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-4 text-sm text-slate-500">
                No nodes matched this search.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-0 flex-1 space-y-3 overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
            <span>Outline</span>
            <span>{nodes.length}</span>
          </div>
          <div className="overflow-y-auto pr-1">
            <MapOutline
              nodes={nodes}
              edges={edges}
              selectedNodeId={selectedNodeId}
              onSelectNode={onSelectNode}
              compact={compact}
            />
          </div>
        </div>
      )}
    </aside>
  );
}