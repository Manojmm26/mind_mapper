import { Rocket, Clock, Target, BookOpen, ExternalLink, CheckSquare, Sparkles, BookmarkCheck } from "lucide-react";
import { StudyRoadmapData } from "../../services/llmService";

interface StudyRoadmapViewProps {
  roadmap: StudyRoadmapData;
}

export function StudyRoadmapView({ roadmap }: StudyRoadmapViewProps) {
  return (
    <div className="mx-auto max-w-5xl space-y-8 p-2 sm:p-4">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-950 p-6 text-white shadow-2xl sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-cyan-300 backdrop-blur-md">
              <Rocket size={14} />
              Tailored Action Plan & Study Roadmap
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
              <BookmarkCheck size={14} />
              Persisted to Knowledge Base
            </div>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {roadmap.topic}
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-200">
            {roadmap.overview}
          </p>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5 backdrop-blur-md">
            <Clock size={16} className="text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Estimated Total Study Time:
            </span>
            <span className="text-base font-black text-cyan-300">
              {roadmap.totalEstimatedHours} Hours
            </span>
          </div>
        </div>
      </section>

      {/* Sequential Milestones */}
      <section className="space-y-6">
        <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
          Sequential Learning Milestones ({roadmap.milestones.length})
        </h3>

        <div className="space-y-6">
          {roadmap.milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="relative overflow-hidden rounded-[28px] border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm transition-smooth hover:shadow-md sm:p-8"
            >
              {/* Top Bar */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 dark:bg-indigo-500 text-sm font-black text-white shadow-md shadow-indigo-500/20">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                      {milestone.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Estimated time: {milestone.estimatedHours} hrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Milestone Details */}
              <div className="mt-5 space-y-4">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {milestone.description}
                </p>

                {/* Target Concepts */}
                {milestone.targetConcepts.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Targets Gaps:
                    </span>
                    {milestone.targetConcepts.map((conceptLabel) => (
                      <span
                        key={conceptLabel}
                        className="inline-flex items-center gap-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/40 px-2.5 py-0.5 text-xs font-semibold text-rose-700 dark:text-rose-300"
                      >
                        <Target size={11} />
                        {conceptLabel}
                      </span>
                    ))}
                  </div>
                )}

                {/* Key Takeaways */}
                {milestone.keyTakeaways.length > 0 && (
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/80 p-4">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Takeaways & Mastery Outcomes
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {milestone.keyTakeaways.map((takeaway) => (
                        <li key={takeaway} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                          <Sparkles size={14} className="mt-0.5 shrink-0 text-indigo-500 dark:text-indigo-400" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommended Resources */}
                {milestone.recommendedResources.length > 0 && (
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Recommended Learning Resources
                    </p>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {milestone.recommendedResources.map((res) => (
                        <div
                          key={res.title}
                          className="flex items-start justify-between gap-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-800/80 p-3 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500/50"
                        >
                          <div>
                            <div className="flex items-center gap-1.5">
                              <BookOpen size={13} className="text-indigo-600 dark:text-indigo-400" />
                              <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                                {res.title}
                              </span>
                            </div>
                            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-4">
                              {res.description}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-md bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 text-[9px] font-bold uppercase text-indigo-700 dark:text-indigo-300">
                            {res.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actionable Practice Task */}
                {milestone.practiceTask && (
                  <div className="rounded-2xl border border-indigo-100 dark:border-indigo-800/40 bg-indigo-50/50 dark:bg-indigo-950/40 p-4">
                    <div className="flex items-start gap-3">
                      <CheckSquare size={18} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
                          Hands-on Practice Exercise
                        </p>
                        <p className="mt-1 text-xs font-semibold text-indigo-950 dark:text-indigo-100 leading-5">
                          "{milestone.practiceTask}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
