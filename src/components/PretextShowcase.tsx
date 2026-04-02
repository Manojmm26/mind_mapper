import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  Download,
  Loader2,
  Maximize2,
  Minimize2,
  RefreshCw,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import { useElementFullscreen } from '../hooks/useElementFullscreen';
import { PRETEXT_PORTFOLIO_MAP } from '../pretextPortfolioMap';
import { MindMapData, generateMindMapFromTopic } from '../services/llmService';
import { layoutPretextMindMap } from '../services/pretextMapLayout';
import { PRETEXT_TYPOGRAPHY } from '../services/pretextTextService';
import { PretextAtlasCanvas } from './PretextAtlasCanvas';
import { PretextFieldGuide } from './PretextFieldGuide';
import { PretextMindMapCanvas } from './PretextMindMapCanvas';
import { PretextSignalDeck } from './PretextSignalDeck';

interface PretextShowcaseProps {
  onExit: () => void;
}

type PretextExperienceMode = 'signal-deck' | 'atlas' | 'field-guide' | 'overview';

const MODE_COPY: Record<
  PretextExperienceMode,
  {
    title: string;
    description: string;
    hints: Array<{ lead: string; body: string }>;
  }
> = {
  'signal-deck': {
    title: 'Think in next cards, not node clouds',
    description:
      'Chat won because it reduced everything to the next turn. A mind map may want the next thought: a bold deck of measured branch cards where width, rhythm, and emphasis are driven by Pretext instead of fixed UI tiles.',
    hints: [
      {
        lead: 'Choose the next thought:',
        body: 'open one card ahead instead of scanning a whole graph at once.',
      },
      {
        lead: 'Let the cards size themselves:',
        body: 'card width and vertical rhythm are driven by measured copy, not by a rigid template.',
      },
      {
        lead: 'Pin strong branches:',
        body: 'save the cards that matter so the deck becomes a working shortlist, not just a visual effect.',
      },
    ],
  },
  atlas: {
    title: 'Navigate it like a world',
    description:
      'The point here is not just that Pretext is faster. It is that accurate text measurement lets the interface behave like a spatial experience instead of a static diagram.',
    hints: [
      {
        lead: 'Move through the atlas:',
        body: 'click a nearby signal or use Arrow Up and Arrow Down to choose a branch.',
      },
      {
        lead: 'Commit forward:',
        body: 'press Enter or Arrow Right to dive into the highlighted branch.',
      },
      {
        lead: 'Pull back:',
        body: 'Backspace or Arrow Left returns to the parent branch.',
      },
    ],
  },
  'field-guide': {
    title: 'Browse it like a guidebook',
    description:
      'This mode borrows from field journals and travel guides. One readable entry, a few nearby sightings, and a satchel of saved finds make extra time feel like curation rather than wandering.',
    hints: [
      {
        lead: 'Collect deliberately:',
        body: 'pin entries that deserve a second pass so your time turns into a useful shortlist.',
      },
      {
        lead: 'Move by curiosity:',
        body: 'open nearby sightings one at a time instead of forcing the whole map on screen.',
      },
      {
        lead: 'Reopen strong branches:',
        body: 'the satchel and trail log let you compare ideas without losing your place.',
      },
    ],
  },
  overview: {
    title: 'Inspect it like a layout board',
    description:
      'Sometimes the natural move is to step back and inspect the whole topology. Overview mode stays useful when structure matters more than atmosphere.',
    hints: [
      {
        lead: 'Pan the canvas:',
        body: 'drag empty space to move across the measured graph.',
      },
      {
        lead: 'Inspect clusters:',
        body: 'select nodes to focus a branch while still seeing the larger structure.',
      },
      {
        lead: 'Reset perspective:',
        body: 'use Fit view whenever you want the whole layout recentered.',
      },
    ],
  },
};

function downloadJson(data: MindMapData, filename: string) {
  const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
  const link = document.createElement('a');
  link.setAttribute('href', dataUri);
  link.setAttribute('download', filename);
  link.click();
}

export function PretextShowcase({ onExit }: PretextShowcaseProps) {
  const contentFullscreen = useElementFullscreen<HTMLElement>();
  const [topicInput, setTopicInput] = useState('Pretext-powered portfolio ideas');
  const [mapData, setMapData] = useState<MindMapData>(PRETEXT_PORTFOLIO_MAP);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [experienceMode, setExperienceMode] = useState<PretextExperienceMode>('signal-deck');
  const [visitedNodeIds, setVisitedNodeIds] = useState<string[]>([]);
  const [collectedNodeIds, setCollectedNodeIds] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fitSignal, setFitSignal] = useState(0);
  const [fontsReady, setFontsReady] = useState(typeof document === 'undefined');

  useEffect(() => {
    if (typeof document === 'undefined' || !('fonts' in document)) {
      setFontsReady(true);
      return;
    }

    let cancelled = false;
    Promise.all([
      document.fonts.load(PRETEXT_TYPOGRAPHY.heroTitle.font, 'Pretext'),
      document.fonts.load(PRETEXT_TYPOGRAPHY.title.font, 'Canvas'),
      document.fonts.load(PRETEXT_TYPOGRAPHY.body.font, 'portfolio'),
      document.fonts.ready,
    ])
      .then(() => {
        if (!cancelled) {
          setFontsReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFontsReady(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const layout = useMemo(() => {
    if (!fontsReady) {
      return null;
    }

    return layoutPretextMindMap(mapData);
  }, [fontsReady, mapData]);

  const nodeMap = useMemo(
    () => new Map((layout?.nodes || []).map((node) => [node.id, node])),
    [layout?.nodes]
  );

  useEffect(() => {
    if (!layout?.rootId) {
      return;
    }

    setSelectedNodeId(layout.rootId);
    setVisitedNodeIds([layout.rootId]);
    setCollectedNodeIds([]);
    setFitSignal((current) => current + 1);
  }, [layout?.rootId, mapData]);

  const selectedNode = (selectedNodeId ? nodeMap.get(selectedNodeId) : null) || layout?.nodes[0] || null;
  const childNodes = selectedNode
    ? (layout?.childrenMap[selectedNode.id] || []).map((childId) => nodeMap.get(childId)).filter(Boolean)
    : [];
  const parentNode = selectedNode ? nodeMap.get(layout?.parentMap[selectedNode.id] || '') || null : null;
  const selectedDepth = selectedNode ? (layout?.depthMap[selectedNode.id] || 0) + 1 : 0;
  const visitedRatio = layout?.nodes.length ? Math.round((visitedNodeIds.length / layout.nodes.length) * 100) : 0;
  const activeModeCopy = MODE_COPY[experienceMode];

  const breadcrumbNodes = useMemo(() => {
    if (!layout || !selectedNode) {
      return [];
    }

    const chain = [];
    let currentId: string | undefined = selectedNode.id;

    while (currentId) {
      const node = nodeMap.get(currentId);
      if (node) {
        chain.unshift(node);
      }
      currentId = layout.parentMap[currentId];
    }

    return chain;
  }, [layout, nodeMap, selectedNode]);

  const handleSelectNode = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    setVisitedNodeIds((current) => (current.includes(nodeId) ? current : [...current, nodeId]));
  };

  const handleToggleCollected = (nodeId: string) => {
    setCollectedNodeIds((current) =>
      current.includes(nodeId) ? current.filter((id) => id !== nodeId) : [...current, nodeId]
    );
  };

  const handleGenerate = async (event: FormEvent) => {
    event.preventDefault();
    const topic = topicInput.trim();
    if (!topic) {
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const data = await generateMindMapFromTopic(topic);
      setMapData(data);
    } catch (generationError: any) {
      setError(generationError.message || 'Unable to generate a Pretext showcase map right now.');
    } finally {
      setIsGenerating(false);
    }
  };

  const mainPanelHeightClass = contentFullscreen.isFullscreen
    ? 'h-[calc(100dvh-3rem)]'
    : 'h-[620px] md:h-[720px] xl:h-[calc(100vh-310px)]';

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.16),transparent_20%),linear-gradient(180deg,#eef6ff_0%,#f7fafc_42%,#fffdf8_100%)] p-4 md:p-6">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-4">
        <header className="workspace-surface rounded-[32px] border border-white/70 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={onExit}
                className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50"
                aria-label="Back to classic experience"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700">
                  <Sparkles size={12} />
                  Pretext experience showcase
                </div>
                <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Pretext Experience Lab
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                  A measured-card playground with four interaction models: signal deck for bold next-thought browsing, atlas for cinematic exploration, field guide for slower curation, and overview for full-topology inspection.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setExperienceMode('signal-deck')}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    experienceMode === 'signal-deck' ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Signal deck
                </button>
                <button
                  type="button"
                  onClick={() => setExperienceMode('atlas')}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    experienceMode === 'atlas' ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Atlas
                </button>
                <button
                  type="button"
                  onClick={() => setExperienceMode('field-guide')}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    experienceMode === 'field-guide' ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Field guide
                </button>
                <button
                  type="button"
                  onClick={() => setExperienceMode('overview')}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    experienceMode === 'overview' ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Overview map
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMapData(PRETEXT_PORTFOLIO_MAP);
                  setError(null);
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <RefreshCw size={16} />
                Starter map
              </button>
              {experienceMode === 'overview' && (
                <button
                  type="button"
                  onClick={() => setFitSignal((current) => current + 1)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <Maximize2 size={16} />
                  Fit view
                </button>
              )}
              <button
                type="button"
                onClick={() => downloadJson(mapData, 'pretext-showcase-map.json')}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <Download size={16} />
                Export JSON
              </button>
            </div>
          </div>
        </header>

        <div className="grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="workspace-surface flex flex-col gap-4 rounded-[32px] border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <section className="rounded-[28px] bg-[linear-gradient(150deg,rgba(8,47,73,0.98),rgba(15,23,42,0.95),rgba(251,146,60,0.58))] p-5 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-100/80">Big demo direction</p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight">{activeModeCopy.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/85">
                {activeModeCopy.description}
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Exploration progress</p>
                  <div className="mt-3 h-2 rounded-full bg-white/15">
                    <div
                      className="h-full rounded-full bg-cyan-300 transition-all duration-500"
                      style={{ width: `${visitedRatio}%` }}
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/85">
                    {visitedNodeIds.length} of {layout?.nodes.length || 0} signals visited
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Depth</p>
                    <p className="mt-2 text-xl font-black">{selectedDepth || 1}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Branches</p>
                    <p className="mt-2 text-xl font-black">{childNodes.length}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/60">Mode</p>
                    <p className="mt-2 text-sm font-black uppercase tracking-[0.14em]">{experienceMode}</p>
                  </div>
                </div>
              </div>
            </section>

            <form onSubmit={handleGenerate} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-amber-700">
                <WandSparkles size={12} />
                Prompt to graph
              </div>
              <label className="mt-4 block text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Generate a fresh map</label>
              <textarea
                value={topicInput}
                onChange={(event) => setTopicInput(event.target.value)}
                rows={4}
                placeholder="Describe a portfolio topic, product idea, or research space..."
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800 placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isGenerating || !topicInput.trim()}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                {isGenerating ? 'Generating map...' : 'Generate with Gemini'}
              </button>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Generate any topic, keep the same measured-card pipeline, and switch between signal deck, atlas, field guide, and full graph overview without changing the data model.
              </p>
              {error && <p className="mt-3 rounded-2xl border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
            </form>

            <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Control hints</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                {activeModeCopy.hints.map((hint) => (
                  <div key={hint.lead} className="rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="font-semibold text-slate-950">{hint.lead}</span> {hint.body}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Current route</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {breadcrumbNodes.length > 0 ? (
                  breadcrumbNodes.map((node, index) => (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => handleSelectNode(node.id)}
                      className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                        node.id === selectedNode?.id
                          ? 'bg-slate-950 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {index + 1}. {node.data.label}
                    </button>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-4 text-sm text-slate-500">
                    Routes appear once the active mode has a selected focus.
                  </div>
                )}
              </div>
            </section>
          </aside>

          <div className="space-y-4">
            <main
              ref={contentFullscreen.elementRef}
              className={`workspace-surface relative overflow-hidden border border-white/60 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-5 ${
                contentFullscreen.isFullscreen ? 'h-full rounded-none' : 'min-h-[620px] rounded-[32px]'
              }`}
            >
              {contentFullscreen.isSupported && (
                <button
                  type="button"
                  onClick={() => contentFullscreen.toggleFullscreen()}
                  className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/88 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-xl transition-colors hover:bg-white"
                >
                  {contentFullscreen.isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  {contentFullscreen.isFullscreen ? 'Exit full screen' : 'Full screen'}
                </button>
              )}
              {!fontsReady || !layout ? (
                <div className="flex h-full min-h-[540px] items-center justify-center rounded-[28px] border border-dashed border-slate-200 bg-white/70 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-slate-950">Preparing Pretext layout</p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                      Waiting for the named fonts so canvas rendering and Pretext measurement stay in sync.
                    </p>
                  </div>
                </div>
              ) : experienceMode === 'signal-deck' ? (
                <div className={mainPanelHeightClass}>
                  <PretextSignalDeck
                    layout={layout}
                    selectedNodeId={selectedNodeId}
                    visitedNodeIds={visitedNodeIds}
                    collectedNodeIds={collectedNodeIds}
                    onSelectNode={handleSelectNode}
                    onToggleCollected={handleToggleCollected}
                  />
                </div>
              ) : experienceMode === 'atlas' ? (
                <div className={mainPanelHeightClass}>
                  <PretextAtlasCanvas
                    layout={layout}
                    selectedNodeId={selectedNodeId}
                    visitedNodeIds={visitedNodeIds}
                    onSelectNode={handleSelectNode}
                  />
                </div>
              ) : experienceMode === 'field-guide' ? (
                <div className={mainPanelHeightClass}>
                  <PretextFieldGuide
                    layout={layout}
                    selectedNodeId={selectedNodeId}
                    visitedNodeIds={visitedNodeIds}
                    collectedNodeIds={collectedNodeIds}
                    onSelectNode={handleSelectNode}
                    onToggleCollected={handleToggleCollected}
                  />
                </div>
              ) : (
                <div className={mainPanelHeightClass}>
                  <PretextMindMapCanvas
                    layout={layout}
                    selectedNodeId={selectedNodeId}
                    onSelectNode={handleSelectNode}
                    fitSignal={fitSignal}
                  />
                </div>
              )}
            </main>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
              <section className="workspace-surface rounded-[32px] border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Current signal</p>
                <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                      {selectedNode?.data.label || 'No node selected'}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                      {selectedNode?.data.description || 'Pick any node to inspect it more closely.'}
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white/80 px-4 py-4 text-center shadow-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Status</p>
                    <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-slate-950">
                      {childNodes.length > 0 ? `${childNodes.length} paths ahead` : 'Leaf node'}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedNode?.data.type && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-600">
                      {selectedNode.data.type}
                    </span>
                  )}
                  {selectedNode?.data.importance && (
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-orange-700">
                      {selectedNode.data.importance} priority
                    </span>
                  )}
                  {selectedNode?.data.confidence && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700">
                      {selectedNode.data.confidence} confidence
                    </span>
                  )}
                  {selectedNode?.data.tags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedNode?.data.nextStep && (
                  <div className="mt-5 rounded-[28px] bg-[linear-gradient(135deg,rgba(8,145,178,0.08),rgba(251,146,60,0.1))] px-5 py-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700">Next dramatic beat</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{selectedNode.data.nextStep}</p>
                  </div>
                )}

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Nodes</p>
                    <p className="mt-2 text-2xl font-black text-slate-950">{layout?.nodes.length || 0}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Edges</p>
                    <p className="mt-2 text-2xl font-black text-slate-950">{layout?.edges.length || 0}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Fonts</p>
                    <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-slate-950">
                      {fontsReady ? 'ready' : 'loading'}
                    </p>
                  </div>
                </div>
              </section>

              <section className="workspace-surface rounded-[32px] border border-white/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Available moves</p>

                {parentNode && (
                  <div className="mt-4 rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Backtrack</p>
                    <button
                      type="button"
                      onClick={() => handleSelectNode(parentNode.id)}
                      className="mt-3 w-full rounded-2xl bg-slate-950 px-4 py-3 text-left text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                      Return to {parentNode.data.label}
                    </button>
                  </div>
                )}

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Forward paths</p>
                    <p className="text-xs font-semibold text-slate-500">{childNodes.length} choices</p>
                  </div>

                  {childNodes.length > 0 ? (
                    childNodes.map((node) => (
                      <button
                        key={node!.id}
                        type="button"
                        onClick={() => handleSelectNode(node!.id)}
                        className={`w-full rounded-[24px] border px-4 py-4 text-left transition-all ${
                          node!.id === selectedNodeId
                            ? 'border-cyan-200 bg-cyan-50 shadow-sm'
                            : visitedNodeIds.includes(node!.id)
                              ? 'border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-bold text-slate-950">{node!.data.label}</p>
                            <p className="mt-2 text-xs leading-6 text-slate-500">{node!.data.description}</p>
                          </div>
                          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                            {visitedNodeIds.includes(node!.id) ? 'visited' : 'new'}
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="rounded-[24px] border border-dashed border-slate-200 bg-slate-50/60 px-4 py-5 text-sm text-slate-500">
                      This is a leaf node. Jump back to the parent or switch to overview mode to scan the full topology.
                    </div>
                  )}
                </div>

                <div className="mt-4 rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Why this UX works</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>Pretext still measures every title and paragraph before anything is arranged.</li>
                    <li>The atlas mode proves that one measured graph can power multiple interaction models, not just a single static layout.</li>
                    <li>The overview map remains available when you want topology, but the first impression is now much more portfolio-like.</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}