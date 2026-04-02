import { useMemo } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, Compass, Map as MapIcon, Pin } from 'lucide-react';
import type { PretextGraphLayout, PretextMapNode } from '../services/pretextMapLayout';

interface PretextFieldGuideProps {
  layout: PretextGraphLayout;
  selectedNodeId?: string | null;
  visitedNodeIds?: string[];
  collectedNodeIds?: string[];
  onSelectNode?: (nodeId: string) => void;
  onToggleCollected?: (nodeId: string) => void;
}

function MeasuredLineStack({
  lines,
  className,
}: {
  lines: Array<{ text: string }>;
  className: string;
}) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line.text}-${index}`} className={className}>
          {line.text || '\u00a0'}
        </span>
      ))}
    </>
  );
}

function getNodesFromIds(ids: string[], nodeMap: Map<string, PretextMapNode>) {
  return ids.map((id) => nodeMap.get(id)).filter(Boolean) as PretextMapNode[];
}

export function PretextFieldGuide({
  layout,
  selectedNodeId,
  visitedNodeIds = [],
  collectedNodeIds = [],
  onSelectNode,
  onToggleCollected,
}: PretextFieldGuideProps) {
  const nodeMap = useMemo(() => new Map(layout.nodes.map((node) => [node.id, node])), [layout.nodes]);
  const visitedSet = useMemo(() => new Set(visitedNodeIds), [visitedNodeIds]);
  const collectedSet = useMemo(() => new Set(collectedNodeIds), [collectedNodeIds]);
  const focusId = selectedNodeId || layout.rootId || layout.nodes[0]?.id || null;
  const selectedNode = focusId ? nodeMap.get(focusId) || null : null;

  const parentNode = selectedNode && layout.parentMap[selectedNode.id]
    ? nodeMap.get(layout.parentMap[selectedNode.id] as string) || null
    : null;
  const childNodes = selectedNode ? getNodesFromIds(layout.childrenMap[selectedNode.id] || [], nodeMap) : [];
  const siblingNodes = parentNode
    ? getNodesFromIds(layout.childrenMap[parentNode.id] || [], nodeMap).filter((node) => node.id !== selectedNode?.id)
    : [];
  const nearbyNodes = childNodes.length > 0 ? childNodes : siblingNodes;
  const nearbyLabel = childNodes.length > 0 ? 'Nearby sightings' : siblingNodes.length > 0 ? 'Other trail markers' : 'Trail complete';
  const collectedNodes = getNodesFromIds(collectedNodeIds, nodeMap);
  const recentVisitedNodes = getNodesFromIds([...visitedNodeIds].reverse().slice(0, 6), nodeMap);
  const recommendedNode =
    childNodes.find((node) => !visitedSet.has(node.id)) ||
    childNodes[0] ||
    siblingNodes.find((node) => !visitedSet.has(node.id)) ||
    siblingNodes[0] ||
    null;

  if (!selectedNode) {
    return (
      <div className="flex h-full items-center justify-center rounded-[30px] border border-dashed border-[#d9cfbd] bg-[#f8f3e8] p-6 text-center text-slate-500">
        Choose a node to open the field guide.
      </div>
    );
  }

  const isCollected = collectedSet.has(selectedNode.id);
  const visitIndex = visitedNodeIds.indexOf(selectedNode.id);

  return (
    <div className="h-full overflow-y-auto rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(214,188,138,0.32),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(120,113,108,0.12),transparent_28%),linear-gradient(180deg,#efe5d4_0%,#f5ecde_48%,#fcf6ec_100%)] p-4 text-stone-900 md:p-5">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_320px]">
        <div className="space-y-4">
          <section className="rounded-[28px] border border-[#d7ccb6] bg-[linear-gradient(180deg,rgba(252,247,237,0.95),rgba(246,238,226,0.95))] p-4 shadow-[0_18px_45px_rgba(120,113,108,0.12)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#efe2c7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#6b5a36]">
                  <BookOpen size={12} />
                  Field guide mode
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600">
                  This mode treats the graph like a guidebook: one entry at a time, nearby sightings to keep moving, and a satchel for the nodes worth keeping.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="rounded-2xl border border-[#ded3bf] bg-white/70 px-3 py-2 text-center shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-stone-400">Visited</p>
                  <p className="mt-1 text-lg font-black text-stone-900">{visitedNodeIds.length}</p>
                </div>
                <div className="rounded-2xl border border-[#ded3bf] bg-white/70 px-3 py-2 text-center shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-stone-400">Collected</p>
                  <p className="mt-1 text-lg font-black text-stone-900">{collectedNodeIds.length}</p>
                </div>
              </div>
            </div>
          </section>

          <article className="rounded-[34px] border border-[#d7ccb6] bg-[linear-gradient(180deg,rgba(252,247,237,0.98),rgba(246,238,226,0.98))] p-6 shadow-[0_24px_60px_rgba(120,113,108,0.14)] md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d6cab2] bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-stone-500 shadow-sm">
                  <Compass size={12} />
                  Entry {visitIndex >= 0 ? String(visitIndex + 1).padStart(2, '0') : '00'}
                </div>
                <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">
                  Depth {selectedNode.depth + 1} of {layout.maxDepth + 1}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onToggleCollected?.(selectedNode.id)}
                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  isCollected
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    : 'border-[#d6cab2] bg-white/80 text-stone-700 hover:bg-white'
                }`}
              >
                {isCollected ? <Check size={15} /> : <Pin size={15} />}
                {isCollected ? 'Collected' : 'Add to satchel'}
              </button>
            </div>

            <div className="mt-6 border-t border-[#ddd2bf] pt-6">
              <h2 className="font-display text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[0.92] tracking-tight text-stone-950">
                <MeasuredLineStack lines={selectedNode.title.lines} className="block" />
              </h2>

              {(selectedNode.badges.length > 0 || selectedNode.tags.length > 0) && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedNode.badges.map((badge) => (
                    <span
                      key={`${selectedNode.id}-${badge.label}`}
                      className="rounded-full bg-[#efe2c7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#715b2b]"
                    >
                      {badge.label}
                    </span>
                  ))}
                  {selectedNode.tags.map((tag) => (
                    <span
                      key={`${selectedNode.id}-${tag.label}`}
                      className="rounded-full border border-[#d6cab2] bg-white/80 px-3 py-1 text-[11px] font-semibold text-stone-600"
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}

              {selectedNode.description && selectedNode.description.lines.length > 0 && (
                <div className="mt-6 space-y-1 text-[15px] leading-7 text-stone-700">
                  <MeasuredLineStack lines={selectedNode.description.lines} className="block" />
                </div>
              )}

              {selectedNode.data.nextStep && (
                <div className="mt-6 rounded-[26px] border border-[#dacfb9] bg-white/70 px-5 py-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-stone-400">Natural next move</p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">{selectedNode.data.nextStep}</p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {parentNode && (
                  <button
                    type="button"
                    onClick={() => onSelectNode?.(parentNode.id)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-[#d6cab2] bg-white/80 px-4 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-white"
                  >
                    <ArrowLeft size={15} />
                    Back to {parentNode.data.label}
                  </button>
                )}
                {recommendedNode && (
                  <button
                    type="button"
                    onClick={() => onSelectNode?.(recommendedNode.id)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                  >
                    Open {recommendedNode.data.label}
                    <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          </article>

          <section className="rounded-[30px] border border-[#d7ccb6] bg-[linear-gradient(180deg,rgba(250,244,232,0.96),rgba(247,239,227,0.96))] p-5 shadow-[0_18px_45px_rgba(120,113,108,0.12)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-stone-400">{nearbyLabel}</p>
                <p className="mt-2 text-sm text-stone-600">
                  {childNodes.length > 0
                    ? 'Short, readable entries keep the user moving without forcing a full topology view.'
                    : 'When there are no deeper branches, the guide naturally surfaces alternate markers nearby.'}
                </p>
              </div>
              <div className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-stone-600 shadow-sm">
                {nearbyNodes.length} visible
              </div>
            </div>

            {nearbyNodes.length > 0 ? (
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {nearbyNodes.map((node) => {
                  const nodeIsCollected = collectedSet.has(node.id);
                  const nodeIsVisited = visitedSet.has(node.id);
                  const nodeIsDirectChild = childNodes.some((child) => child.id === node.id);

                  return (
                    <article
                      key={node.id}
                      className="rounded-[26px] border border-[#dacfb9] bg-white/72 p-4 shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="rounded-full bg-[#efe2c7] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#715b2b]">
                          {nodeIsDirectChild ? 'Next stop' : 'Side marker'}
                        </span>
                        <button
                          type="button"
                          onClick={() => onToggleCollected?.(node.id)}
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl border transition-colors ${
                            nodeIsCollected
                              ? 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              : 'border-[#d6cab2] bg-white/80 text-stone-600 hover:bg-white'
                          }`}
                          aria-label={nodeIsCollected ? 'Remove from satchel' : 'Add to satchel'}
                        >
                          {nodeIsCollected ? <Check size={15} /> : <Pin size={15} />}
                        </button>
                      </div>

                      <div className="mt-4">
                        <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-stone-950">
                          <MeasuredLineStack lines={node.title.lines.slice(0, 2)} className="block" />
                        </h3>
                        {node.description && node.description.lines.length > 0 && (
                          <div className="mt-3 text-sm leading-6 text-stone-600">
                            <MeasuredLineStack lines={node.description.lines.slice(0, 2)} className="block" />
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${
                            nodeIsVisited ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-100 text-stone-500'
                          }`}
                        >
                          {nodeIsVisited ? 'Visited' : 'Fresh'}
                        </span>
                        <button
                          type="button"
                          onClick={() => onSelectNode?.(node.id)}
                          className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                        >
                          Open
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-5 rounded-[24px] border border-dashed border-[#d6cab2] bg-white/60 px-4 py-5 text-sm leading-6 text-stone-500">
                This entry closes the trail cleanly. Use the satchel or trail log to reopen something interesting instead of zooming back out.
              </div>
            )}
          </section>
        </div>

        <div className="space-y-4">
          <section className="rounded-[30px] border border-[#d7ccb6] bg-[linear-gradient(180deg,rgba(252,247,237,0.96),rgba(246,238,226,0.96))] p-5 shadow-[0_18px_45px_rgba(120,113,108,0.12)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-stone-400">Satchel</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Keep entries that deserve a second pass. The shortlist makes the extra time spent feel useful.
                </p>
              </div>
              <div className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-stone-600 shadow-sm">
                {collectedNodes.length}
              </div>
            </div>

            {collectedNodes.length > 0 ? (
              <div className="mt-5 space-y-3">
                {collectedNodes.map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => onSelectNode?.(node.id)}
                    className={`w-full rounded-[24px] border px-4 py-4 text-left transition-colors ${
                      node.id === selectedNode.id
                        ? 'border-[#cdb88b] bg-[#efe2c7]'
                        : 'border-[#dacfb9] bg-white/72 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-lg font-bold leading-tight tracking-tight text-stone-950">
                          {node.data.label}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-stone-600">
                          {node.data.description || 'Pinned for later review.'}
                        </p>
                      </div>
                      <span className="rounded-full bg-white/80 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-stone-500">
                        Depth {node.depth + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-[24px] border border-dashed border-[#d6cab2] bg-white/60 px-4 py-5 text-sm leading-6 text-stone-500">
                Pin any entry that feels worth returning to. It turns browsing into a lightweight act of curation.
              </div>
            )}
          </section>

          <section className="rounded-[30px] border border-[#d7ccb6] bg-[linear-gradient(180deg,rgba(252,247,237,0.96),rgba(246,238,226,0.96))] p-5 shadow-[0_18px_45px_rgba(120,113,108,0.12)]">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-stone-400">
              <MapIcon size={13} />
              Trail log
            </div>
            <div className="mt-4 space-y-3">
              {recentVisitedNodes.map((node, index) => (
                <button
                  key={`${node.id}-${index}`}
                  type="button"
                  onClick={() => onSelectNode?.(node.id)}
                  className={`w-full rounded-[24px] border px-4 py-3 text-left transition-colors ${
                    node.id === selectedNode.id
                      ? 'border-[#cdb88b] bg-[#efe2c7]'
                      : 'border-[#dacfb9] bg-white/72 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-stone-900">{node.data.label}</p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                        Depth {node.depth + 1}
                      </p>
                    </div>
                    <ArrowRight size={15} className="text-stone-400" />
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] border border-[#d7ccb6] bg-[linear-gradient(180deg,rgba(244,234,214,0.95),rgba(252,247,237,0.95))] p-5 shadow-[0_18px_45px_rgba(120,113,108,0.12)]">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-stone-400">Suggested move</p>
            {recommendedNode ? (
              <div className="mt-4">
                <p className="font-display text-2xl font-bold tracking-tight text-stone-950">{recommendedNode.data.label}</p>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {recommendedNode.data.description || 'Continue the guide by opening this nearby entry.'}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectNode?.(recommendedNode.id)}
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                >
                  Continue trail
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-stone-600">
                The trail is complete here. Use the satchel to revisit a strong branch or switch modes when you want the whole structure again.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}