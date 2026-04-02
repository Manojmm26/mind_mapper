import { ExternalLink, Lightbulb, Scale, Search, ShoppingBag, Compass, BadgeCheck, ArrowRight } from 'lucide-react';
import { ComparisonWorkspaceData } from '../services/llmService';

interface ComparisonWorkspaceProps {
  data: ComparisonWorkspaceData;
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

export function ComparisonWorkspace({ data }: ComparisonWorkspaceProps) {
  return (
    <div className="workspace-surface h-full overflow-y-auto rounded-[32px] border border-white/50 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
          <div className="rounded-[28px] bg-[linear-gradient(135deg,rgba(10,132,255,0.92),rgba(94,92,230,0.8))] p-6 text-white shadow-[0_24px_60px_rgba(37,99,235,0.28)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-white/90">
              <Scale size={12} />
              Decision Board
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight">Compare before you commit</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">{data.overview}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/12 px-4 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">Options</p>
                <p className="mt-2 text-2xl font-black">{data.items.length}</p>
              </div>
              <div className="rounded-2xl bg-white/12 px-4 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">Criteria</p>
                <p className="mt-2 text-2xl font-black">{data.criteria.length}</p>
              </div>
              <div className="rounded-2xl bg-white/12 px-4 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">Next steps</p>
                <p className="mt-2 text-2xl font-black">{data.nextSteps.length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-amber-100 bg-[linear-gradient(180deg,rgba(255,251,235,0.98),rgba(255,255,255,0.95))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-amber-700">
              <BadgeCheck size={12} />
              Recommended approach
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">{data.recommendedApproach}</p>

            <div className="mt-6 space-y-3">
              {data.nextSteps.slice(0, 3).map((step, index) => (
                <div key={step} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xs font-black text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.criteria.length > 0 && (
          <section className="rounded-[28px] border border-white/60 bg-white/88 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-6">
            <div className="flex items-center gap-2 text-sm font-black text-slate-950">
              <Lightbulb size={16} className="text-cyan-600" />
              Decision criteria
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {data.criteria.map((criterion, index) => (
                <div key={`${index}-${criterion.label}`} className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">{criterion.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{criterion.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div>
              <h3 className="text-lg font-black tracking-tight text-slate-950">Matched options</h3>
              <p className="text-sm text-slate-500">Compare summary, attributes, tradeoffs, and direct follow-up links.</p>
            </div>
            <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {data.items.length} results
            </div>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-1 -mx-1">
            {data.items.map((item, index) => {
              const links = getComparisonLinks(item.name, item.searchQuery);

              return (
                <article 
                  key={item.id} 
                  className="group relative flex min-w-[340px] md:min-w-[420px] shrink-0 snap-start flex-col rounded-[48px] border border-white/60 bg-white/95 p-10 shadow-[0_32px_80px_rgba(15,23,42,0.06)] backdrop-blur-3xl transition-all hover:border-cyan-200 hover:shadow-[0_48px_100px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-slate-500">
                        Option {index + 1}
                      </div>
                      <div className="shrink-0 rounded-2xl bg-cyan-100/50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
                        {item.priceBand}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-3xl font-black tracking-tight text-slate-950 leading-[1.1]">
                        {item.name}
                      </h4>
                      <p className="text-[15px] leading-relaxed text-slate-600 font-medium opacity-80">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 grid gap-4">
                    <div className="flex flex-col rounded-[32px] bg-emerald-50/60 p-7 ring-1 ring-emerald-100/50">
                      <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-700">
                        <BadgeCheck size={16} />
                        Best for
                      </div>
                      <p className="text-[14px] leading-7 font-bold text-emerald-950">
                        {item.bestFor}
                      </p>
                    </div>
                    <div className="flex flex-col rounded-[32px] bg-amber-50/60 p-7 ring-1 ring-amber-100/50">
                      <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-amber-700">
                        <Compass size={16} />
                        Considerations
                      </div>
                      <p className="text-[14px] leading-7 font-bold text-amber-950">
                        {item.considerations}
                      </p>
                    </div>
                  </div>

                  {item.attributes.length > 0 && (
                    <div className="mt-10">
                      <div className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 pl-1">Key Specs</div>
                      <div className="flex flex-wrap gap-2.5">
                        {item.attributes.map((attribute) => (
                          <div key={`${item.id}-${attribute.label}`} className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-[13px] font-bold text-slate-700 shadow-sm ring-1 ring-slate-200/50">
                            <span className="text-slate-400 font-black mr-2 uppercase text-[9px] tracking-widest">{attribute.label}</span>
                            {attribute.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-12 flex flex-wrap gap-3 pt-8 border-t border-slate-100/80">
                    {links.map((link) => {
                      const Icon = link.icon;

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-800 transition-all hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-900 hover:shadow-lg active:scale-95"
                        >
                          <Icon size={16} />
                          {link.label}
                          <ExternalLink size={14} className="opacity-30" />
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
          <section className="rounded-[28px] border border-white/60 bg-white/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-6">
            <div className="flex items-center gap-2 text-sm font-black text-slate-950">
              <Compass size={16} className="text-indigo-600" />
              Action lane
            </div>
            <div className="mt-4 grid gap-3 lg:grid-cols-3">
              {data.nextSteps.map((step) => (
                <div key={step} className="flex items-start gap-3 rounded-[24px] bg-slate-50 px-4 py-4">
                  <div className="mt-1 rounded-full bg-indigo-100 p-2 text-indigo-700">
                    <ArrowRight size={14} />
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
