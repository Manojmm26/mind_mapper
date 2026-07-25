import { useState } from "react";
import {
  Cpu,
  Network,
  Scale,
  Rocket,
  Atom,
  Server,
  Shield,
  Globe,
  Cloud,
  Brain,
  BarChart2,
  Star,
  Layers,
  Sparkles,
  ArrowRight,
  Search,
} from "lucide-react";
import {
  CURATED_EXAMPLES,
  EXAMPLE_CATEGORIES,
  CuratedExample,
  ExampleCategory,
} from "../data/examples";
import { MindMapData, ComparisonWorkspaceData } from "../services/llmService";

interface ExampleGalleryProps {
  onSelectMapExample: (name: string, data: MindMapData) => void;
  onSelectCompareExample: (data: ComparisonWorkspaceData) => void;
}

export function ExampleGallery({
  onSelectMapExample,
  onSelectCompareExample,
}: ExampleGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<ExampleCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExamples = CURATED_EXAMPLES.filter((ex) => {
    const matchesCategory =
      activeCategory === "All" || ex.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: CuratedExample["icon"]) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={20} className="text-purple-600" />;
      case "Network":
        return <Network size={20} className="text-emerald-600" />;
      case "Scale":
        return <Scale size={20} className="text-amber-600" />;
      case "Rocket":
        return <Rocket size={20} className="text-rose-600" />;
      case "Atom":
        return <Atom size={20} className="text-cyan-600" />;
      case "Shield":
        return <Shield size={20} className="text-orange-600" />;
      case "Globe":
        return <Globe size={20} className="text-violet-600" />;
      case "Cloud":
        return <Cloud size={20} className="text-blue-500" />;
      case "Brain":
        return <Brain size={20} className="text-fuchsia-600" />;
      case "BarChart":
        return <BarChart2 size={20} className="text-green-600" />;
      case "Star":
        return <Star size={20} className="text-yellow-500" />;
      case "Layers":
        return <Layers size={20} className="text-sky-600" />;
      case "Server":
      default:
        return <Server size={20} className="text-blue-600" />;
    }
  };

  const handleLaunch = (ex: CuratedExample) => {
    if (ex.type === "compare") {
      onSelectCompareExample(ex.data as ComparisonWorkspaceData);
    } else {
      onSelectMapExample(ex.title, ex.data as MindMapData);
    }
  };

  return (
    <div className="w-full space-y-6 pt-4">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700 ring-1 ring-cyan-200/80">
            <Sparkles size={13} />
            <span>Interactive Portfolio Showcase</span>
          </div>
          <h3 className="mt-2 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            Curated Knowledge Maps & Workspaces
          </h3>
          <p className="mt-1 text-xs text-slate-500 max-w-xl">
            Explore ready-to-use structured roadmaps, system designs, and decision matrices built with AI Mind Mapper.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search showcases..."
            className="w-full rounded-2xl border border-slate-200 bg-white/90 py-2 pl-9 pr-3.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm backdrop-blur-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {EXAMPLE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all active:scale-95 ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Example Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredExamples.map((ex) => (
          <div
            key={ex.id}
            onClick={() => handleLaunch(ex)}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 cursor-pointer"
          >
            <div className="space-y-3">
              {/* Header Icon + Badges */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-inner group-hover:scale-105 transition-transform">
                  {getIcon(ex.icon)}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                    ex.type === "compare"
                      ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200/60"
                      : "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200/60"
                  }`}>
                    {ex.type === "compare" ? "Decision Matrix" : "Mind Map"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                    <Layers size={10} />
                    {typeof ex.nodeCount === "number" ? `${ex.nodeCount} Nodes` : ex.nodeCount}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h4 className="text-base font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {ex.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 line-clamp-2">
                  {ex.description}
                </p>
              </div>
            </div>

            {/* Footer Tags & Launch CTA */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-1">
                {ex.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-500 border border-slate-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-black text-cyan-600 group-hover:translate-x-0.5 transition-transform">
                Explore <ArrowRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
