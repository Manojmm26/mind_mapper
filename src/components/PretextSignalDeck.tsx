import { useMemo, type CSSProperties } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Layers3, Pin } from 'lucide-react';
import { PRETEXT_THEME_ACCENTS, type PretextGraphLayout, type PretextMapNode } from '../services/pretextMapLayout';

interface PretextSignalDeckProps {
  layout: PretextGraphLayout;
  selectedNodeId?: string | null;
  visitedNodeIds?: string[];
  collectedNodeIds?: string[];
  onSelectNode?: (nodeId: string) => void;
  onToggleCollected?: (nodeId: string) => void;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized.length === 3 ? normalized.split('').map((part) => part + part).join('') : normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getNodeAccent(node: PretextMapNode) {
  const accents = PRETEXT_THEME_ACCENTS[node.themeFamily] || PRETEXT_THEME_ACCENTS.slate;
  return accents[Math.min(node.themeLevel, accents.length - 1)];
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

export function PretextSignalDeck({
  layout,
  selectedNodeId,
  visitedNodeIds = [],
  collectedNodeIds = [],
  onSelectNode,
  onToggleCollected,
}: PretextSignalDeckProps) {
  const nodeMap = useMemo(() => new Map(layout.nodes.map((node) => [node.id, node])), [layout.nodes]);
  const visitedSet = useMemo(() => new Set(visitedNodeIds), [visitedNodeIds]);
  const collectedSet = useMemo(() => new Set(collectedNodeIds), [collectedNodeIds]);
  const focusId = selectedNodeId || layout.rootId || layout.nodes[0]?.id || null;
  const selectedNode = focusId ? nodeMap.get(focusId) || null : null;

  const chain = useMemo(() => {
    if (!selectedNode) {
      return [] as PretextMapNode[];
    }

    const nodes: PretextMapNode[] = [];
    let currentId: string | undefined = selectedNode.id;

    while (currentId) {
      const node = nodeMap.get(currentId);
      if (node) {
        nodes.unshift(node);
      }
      currentId = layout.parentMap[currentId];
    }

    return nodes;
  }, [layout.parentMap, nodeMap, selectedNode]);

  const parentNode = selectedNode && layout.parentMap[selectedNode.id]
    ? nodeMap.get(layout.parentMap[selectedNode.id] as string) || null
    : null;
  const childNodes = selectedNode ? getNodesFromIds(layout.childrenMap[selectedNode.id] || [], nodeMap) : [];
  const siblingNodes = parentNode
    ? getNodesFromIds(layout.childrenMap[parentNode.id] || [], nodeMap).filter((node) => node.id !== selectedNode?.id)
    : [];
  const nextNodes = childNodes.length > 0 ? childNodes : siblingNodes;
  const nextLabel = childNodes.length > 0 ? 'Next signals' : siblingNodes.length > 0 ? 'Alternate signals' : 'No deeper branch';
  const collectedNodes = getNodesFromIds(collectedNodeIds, nodeMap);
  const recommendedNode =
    childNodes.find((node) => !visitedSet.has(node.id)) ||
    childNodes[0] ||
    siblingNodes.find((node) => !visitedSet.has(node.id)) ||
    siblingNodes[0] ||
    null;

  if (!selectedNode) {
    return (
      <div className="flex h-full items-center justify-center rounded-[30px] border border-dashed border-slate-200 bg-slate-50/80 p-6 text-center text-slate-500">
        Choose a node to open the signal deck.
      </div>
    );
  }

  const accent = getNodeAccent(selectedNode);
  const isCollected = collectedSet.has(selectedNode.id);
  const heroMinHeight = clamp(selectedNode.height + 220, 380, 620);

  return (
    <div className="h-full overflow-y-auto rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.12),transparent_22%),linear-gradient(180deg,#f7fbff_0%,#eff5fb_44%,#fdfdfd_100%)] p-4 md:p-5">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_340px]">
        <div className="space-y-4">
          <section
            key={selectedNode.id}
            className="relative overflow-hidden rounded-[36px] border border-white/70 p-6 text-white shadow-[0_28px_80px_rgba(15,23,42,0.16)]"
            data-motion="hero"
            style={{
              minHeight: `${heroMinHeight}px`,
              background: `radial-gradient(circle at top left, ${hexToRgba(accent, 0.28)}, transparent 26%), linear-gradient(145deg, #08111f 0%, #0f172a 52%, #111827 100%)`,
            }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -right-8 top-8 max-w-[56%] opacity-[0.09]">
                <MeasuredLineStack lines={selectedNode.title.lines} className="font-display block text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.88] tracking-tight" />
              </div>
              <div
                className="absolute bottom-[-10%] left-[-8%] h-56 w-56 rounded-full blur-3xl"
                style={{ backgroundColor: hexToRgba(accent, 0.2) }}
              />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-100">
                  <Compass size={12} />
                  Signal deck
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/75">
                    Depth {(layout.depthMap[selectedNode.id] || 0) + 1}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/75">
                    {(layout.childrenMap[selectedNode.id] || []).length} next
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-100/80">Current thought</p>
                <h2 className="font-display mt-4 text-[clamp(2.5rem,5vw,4.8rem)] font-bold leading-[0.92] tracking-tight text-white">
                  <MeasuredLineStack lines={selectedNode.title.lines} className="block" />
                </h2>

                {selectedNode.description && selectedNode.description.lines.length > 0 && (
                  <div className="mt-5 max-w-3xl space-y-1 text-[15px] leading-7 text-slate-200">
                    <MeasuredLineStack lines={selectedNode.description.lines} className="block" />
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedNode.badges.map((badge) => (
                    <span
                      key={`${selectedNode.id}-${badge.label}`}
                      className="rounded-full bg-white/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-100"
                    >
                      {badge.label}
                    </span>
                  ))}
                  {selectedNode.tags.map((tag) => (
                    <span
                      key={`${selectedNode.id}-${tag.label}`}
                      className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] font-semibold text-white/85"
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onToggleCollected?.(selectedNode.id)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isCollected
                      ? 'bg-emerald-300 text-emerald-950 hover:bg-emerald-200'
                      : 'bg-white/12 text-white hover:bg-white/18'
                  }`}
                >
                  {isCollected ? <Check size={15} /> : <Pin size={15} />}
                  {isCollected ? 'Pinned' : 'Pin this thought'}
                </button>

                {parentNode && (
                  <button
                    type="button"
                    onClick={() => onSelectNode?.(parentNode.id)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/18"
                  >
                    <ArrowLeft size={15} />
                    Back to {parentNode.data.label}
                  </button>
                )}

                {recommendedNode && (
                  <button
                    type="button"
                    onClick={() => onSelectNode?.(recommendedNode.id)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
                  >
                    Open {recommendedNode.data.label}
                    <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/70 bg-white/84 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">{nextLabel}</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  This is the part that should feel native to mind maps: not a graph cloud, but a sequence of next thoughts sized by their actual copy and importance.
                </p>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {nextNodes.length} visible
              </div>
            </div>

            {nextNodes.length > 0 ? (
              <div key={selectedNode.id} className="mt-6 flex gap-3 overflow-x-auto pb-5 scrollbar-hide snap-x snap-mandatory">
                {nextNodes.map((node, index) => {
                  const nodeAccent = getNodeAccent(node);
                  const nodeIsCollected = collectedSet.has(node.id);
                  const cardWidth = clamp(node.width + 56, 250, 380);
                  const cardHeight = clamp(node.height + 76, 220, 340);
                  const restY = Math.round((index % 3) * 16 + (cardHeight - 220) * 0.12 - (cardWidth - 250) * 0.04);
                  const restRotation = `${((index % 2 === 0 ? -1 : 1) * (0.45 + (cardHeight - 220) * 0.008)).toFixed(2)}deg`;
                  const motionStyle = {
                    width: `${cardWidth}px`,
                    minHeight: `${cardHeight}px`,
                    '--signal-deck-rest-y': `${restY}px`,
                    '--signal-deck-rest-rot': restRotation,
                    '--signal-deck-entry-rot': `${(index % 2 === 0 ? -1.6 : 1.6) * (1 + index * 0.08)}deg`,
                    '--signal-deck-delay': `${index * 60}ms`,
                  } as CSSProperties;

                  return (
                    <article
                      key={node.id}
                      className="signal-deck-card-enter group relative shrink-0 snap-start overflow-hidden rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]"
                      style={motionStyle}
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1"
                        style={{ background: `linear-gradient(90deg, ${nodeAccent}, ${hexToRgba(nodeAccent, 0.35)})` }}
                      />
                      <div className="flex items-start justify-between gap-3">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                          {visitedSet.has(node.id) ? 'Visited' : 'Fresh'}
                        </span>
                        <button
                          type="button"
                          onClick={() => onToggleCollected?.(node.id)}
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl border transition-colors ${
                            nodeIsCollected
                              ? 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                          }`}
                          aria-label={nodeIsCollected ? 'Unpin signal' : 'Pin signal'}
                        >
                          {nodeIsCollected ? <Check size={15} /> : <Pin size={15} />}
                        </button>
                      </div>

                      <div className="mt-5">
                        <h3 className="font-display text-2xl font-bold leading-[0.96] tracking-tight text-slate-950">
                          <MeasuredLineStack lines={node.title.lines.slice(0, 3)} className="block" />
                        </h3>

                        {node.description && node.description.lines.length > 0 && (
                          <div className="mt-4 space-y-1 text-sm leading-6 text-slate-600">
                            <MeasuredLineStack lines={node.description.lines.slice(0, 3)} className="block" />
                          </div>
                        )}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-700">
                          {(layout.childrenMap[node.id] || []).length > 0 ? `${(layout.childrenMap[node.id] || []).length} deeper` : 'Leaf'}
                        </span>
                        <button
                          type="button"
                          onClick={() => onSelectNode?.(node.id)}
                          className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
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
              <div className="mt-6 rounded-[26px] border border-dashed border-slate-200 bg-slate-50/70 px-4 py-5 text-sm leading-6 text-slate-500">
                This card finishes the branch. The deck stays useful because you can reopen the path, inspect pinned thoughts, or pivot to a sibling without dropping back into a full graph.
              </div>
            )}
          </section>
        </div>

        <aside className="space-y-4">
          <section className="rounded-[30px] border border-white/70 bg-white/82 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
              <Layers3 size={13} />
              Current route
            </div>
            <div className="mt-4 space-y-2">
              {chain.map((node, index) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => onSelectNode?.(node.id)}
                  className={`w-full rounded-2xl px-4 py-3 text-left transition-colors ${
                    node.id === selectedNode.id ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] opacity-70">Step {index + 1}</p>
                  <p className="mt-1 text-sm font-semibold">{node.data.label}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] border border-white/70 bg-white/82 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Pinned signals</p>
            {collectedNodes.length > 0 ? (
              <div className="mt-4 space-y-3">
                {collectedNodes.map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => onSelectNode?.(node.id)}
                    className={`w-full rounded-[24px] border px-4 py-4 text-left transition-colors ${
                      node.id === selectedNode.id
                        ? 'border-cyan-200 bg-cyan-50/70'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <p className="font-display text-lg font-bold leading-tight tracking-tight text-slate-950">{node.data.label}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{node.data.description || 'Pinned for comparison.'}</p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-[24px] border border-dashed border-slate-200 bg-slate-50/70 px-4 py-5 text-sm leading-6 text-slate-500">
                Pin the cards that feel decisive. The deck becomes more useful when it doubles as a shortlist.
              </div>
            )}
          </section>

          <section className="rounded-[30px] border border-white/70 bg-[linear-gradient(160deg,rgba(8,47,73,0.95),rgba(15,23,42,0.92))] p-5 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)]">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-100/80">Why this is more pretext-native</p>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-200">
              <p>The cards are not fixed slots. Their widths and heights come from measured copy, so the interface breathes with the content.</p>
              <p>That means hierarchy can look expressive without truncation hacks or hidden DOM probes.</p>
              <p>The result is simpler than a spatial map but still unmistakably driven by Pretext.</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}