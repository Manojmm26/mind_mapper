import { ExternalLink, Lightbulb, Scale, Search, ShoppingBag, BrainCircuit, ChevronUp, ChevronDown, Download } from 'lucide-react';
import { Edge, Node } from '@xyflow/react';
import { ComparisonWorkspaceData } from '../services/llmService';
import { Map } from './Map';
import { MobileMapView } from './MobileMapView';
import { useState } from 'react';

interface ComparisonWorkspaceProps {
  data: ComparisonWorkspaceData;
  isMobile: boolean;
  onSave: (nodes: Node[], edges: Edge[]) => void;
}

function getComparisonLinks(itemName: string, searchQuery: string) {
  const normalizedQuery = encodeURIComponent((searchQuery || itemName).trim());

  return [
    {
      label: 'Research',
      href: `https://www.google.com/search?q=${normalizedQuery}`,
      icon: Search,
    },
    {
      label: 'Shop',
      href: `https://www.google.com/search?tbm=shop&q=${normalizedQuery}`,
      icon: ShoppingBag,
    },
  ];
}

function ComparisonPanel({ data }: { data: ComparisonWorkspaceData }) {
  return (
    <aside className="h-full overflow-y-auto border-b border-slate-200 bg-white lg:bg-white/85 lg:backdrop-blur-xl lg:border-b-0 lg:border-r">
      <div className="space-y-6 p-6 pt-10 lg:p-6 lg:pt-24">
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-700">
            <Scale size={12} />
            Comparison Workspace
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Compare before you decide</h2>
          <p className="text-sm leading-6 text-slate-600">{data.overview}</p>
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-700">Recommended approach</p>
            <p className="mt-2 text-sm leading-6 text-amber-900">{data.recommendedApproach}</p>
          </div>
        </section>

        {data.criteria.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Lightbulb size={16} className="text-cyan-600" />
              Key criteria
            </div>
            <div className="grid gap-3">
              {data.criteria.map((criterion, index) => (
                <div key={`${index}-${criterion.label}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{criterion.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{criterion.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold text-slate-900">Matched options</div>
            <div className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
              {data.items.length} results
            </div>
          </div>
          <div className="space-y-4">
            {data.items.map((item) => {
              const links = getComparisonLinks(item.name, item.searchQuery);

              return (
                <article key={item.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.summary}</p>
                    </div>
                    <div className="shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                      {item.priceBand}
                    </div>
                  </div>

                  {item.attributes.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.attributes.map((attribute) => (
                        <div key={`${item.id}-${attribute.label}`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                          <span className="font-semibold">{attribute.label}:</span> {attribute.value}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-emerald-50 p-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700">Best for</p>
                      <p className="mt-1 text-sm leading-6 text-emerald-900">{item.bestFor}</p>
                    </div>
                    <div className="rounded-2xl bg-rose-50 p-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-rose-700">Watch-outs</p>
                      <p className="mt-1 text-sm leading-6 text-rose-900">{item.considerations}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {links.map((link) => {
                      const Icon = link.icon;

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                        >
                          <Icon size={15} />
                          {link.label}
                          <ExternalLink size={14} />
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {data.nextSteps.length > 0 && (
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Next steps</p>
            <ul className="mt-3 space-y-2">
              {data.nextSteps.map((step) => (
                <li key={step} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </aside>
  );
}

export function ComparisonWorkspace({ data, isMobile, onSave }: ComparisonWorkspaceProps) {
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);

  return (
    <div className="h-full w-full bg-slate-50">
      <div className="grid h-full lg:grid-cols-[430px_minmax(0,1fr)]">
        <ComparisonPanel data={data} />
        <div className="relative min-h-[50vh] lg:min-h-0">
          {isMobile ? (
            <div className="h-full">
              <div className="h-[70vh] min-h-[500px] border-t border-slate-200 bg-white lg:border-t-0">
                <div className="h-full overflow-y-auto">
                  <div className="p-6 pb-32">
                    <h3 className="mb-4 text-lg font-bold text-slate-900">Workspace Map</h3>
                    <p className="mb-6 text-sm text-slate-500">Visualization of your research and comparison path.</p>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 min-h-[300px] flex items-center justify-center italic text-slate-400">
                      Interactive map is optimized for larger screens. Use the outline below for a structured view.
                    </div>
                  </div>
                </div>

                {/* Sticky/Collapsible Outline Trigger */}
                <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isOutlineOpen ? 'h-[80vh]' : 'h-16'}`}>
                  <div className="h-full rounded-t-[32px] border-t border-slate-200 bg-white shadow-[0_-8px_30px_rgb(0,0,0,0.08)] flex flex-col">
                    <button 
                      onClick={() => setIsOutlineOpen(!isOutlineOpen)}
                      className="flex w-full items-center justify-between px-6 py-4"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                          <BrainCircuit size={18} />
                        </div>
                        <span className="font-bold text-slate-900 text-sm">Mind Map Outline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSave(
                              data.map.nodes.map((node) => ({
                                id: node.id,
                                type: 'custom',
                                position: { x: 0, y: 0 },
                                data: { label: node.label, description: node.description },
                              })),
                              data.map.edges.map((edge) => ({
                                id: `${edge.source}-${edge.target}`,
                                source: edge.source,
                                target: edge.target,
                                label: edge.label,
                              }))
                            );
                          }}
                          className="flex h-8 items-center gap-1.5 rounded-lg bg-slate-900 px-3 text-[11px] font-bold text-white transition-transform active:scale-95"
                        >
                          <Download size={14} />
                          SAVE
                        </button>
                        <div className="text-slate-400">
                          {isOutlineOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                        </div>
                      </div>
                    </button>
                    
                    <div className="flex-1 overflow-hidden">
                      <MobileMapView
                        nodes={data.map.nodes.map((node) => ({
                          id: node.id,
                          type: 'custom',
                          position: { x: 0, y: 0 },
                          data: { label: node.label, description: node.description },
                        }))}
                        edges={data.map.edges.map((edge) => ({
                          id: `${edge.source}-${edge.target}`,
                          source: edge.source,
                          target: edge.target,
                          label: edge.label,
                        }))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Map data={data.map} onSave={onSave} />
          )}
        </div>
      </div>
    </div>
  );
}
