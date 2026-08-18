import React, { useState } from "react";
import { TechStackProfile, saveCustomTechStack } from "../../data/techStacks";
import {
  X,
  Sparkles,
  Cpu,
  Server,
  Database,
  BrainCircuit,
  Check,
  Zap,
} from "lucide-react";

interface CustomTechStackGeneratorModalProps {
  onClose: () => void;
  onStackGenerated: (newStack: TechStackProfile) => void;
}

export function CustomTechStackGeneratorModal({
  onClose,
  onStackGenerated,
}: CustomTechStackGeneratorModalProps) {
  const [frontendName, setFrontendName] = useState("Vue 3");
  const [backendName, setBackendName] = useState("Python 3.12 & FastAPI");
  const [databaseName, setDatabaseName] = useState("PostgreSQL 16");
  const [isGenerating, setIsGenerating] = useState(false);

  const frontendPresets = ["Angular 18+", "React 19", "Vue 3", "SvelteKit 2", "Next.js 15", "Flutter"];
  const backendPresets = [
    "Java 21 / Spring Boot 3",
    ".NET 8/9 & C# 12",
    "Node.js & NestJS",
    "Python 3.12 & FastAPI",
    "Go (Golang 1.22)",
    "Rust (Axum & Tokio)",
  ];
  const databasePresets = ["PostgreSQL 16", "SQL Server", "MongoDB", "MySQL 8", "DynamoDB / Redis"];

  const handleGenerate = async () => {
    if (!frontendName.trim() || !backendName.trim() || !databaseName.trim()) {
      alert("Please select or specify Frontend, Backend, and Database.");
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation or synthesize dynamic stack profile
    await new Promise((r) => setTimeout(r, 1200));

    const stackId = `custom-${frontendName.toLowerCase().replace(/[^a-z0-9]/g, "")}-${backendName.toLowerCase().replace(/[^a-z0-9]/g, "")}-${Date.now()}`;

    const newProfile: TechStackProfile = {
      id: stackId,
      title: `${frontendName} ↔ ${backendName} & ${databaseName}`,
      shortBadge: `✨ ${frontendName.split(" ")[0]} + ${backendName.split(" ")[0]}`,
      description: `Custom AI-synthesized architectural matrix bridging ${frontendName} with ${backendName} and ${databaseName}.`,
      category: "Custom AI-Generated",
      isCustom: true,
      frontend: {
        name: frontendName,
        shortName: frontendName.split(" ")[0],
        iconName: "Cpu",
        themeColor: "purple",
        badgeBg: "bg-purple-100 dark:bg-purple-950/60",
        badgeText: "text-purple-700 dark:text-purple-300",
        soundbiteTag: `${frontendName} Architecture`,
      },
      backend: {
        name: backendName,
        shortName: backendName.split(" ")[0],
        iconName: "Server",
        themeColor: "indigo",
        badgeBg: "bg-indigo-100 dark:bg-indigo-950/60",
        badgeText: "text-indigo-700 dark:text-indigo-300",
        soundbiteTag: `${backendName} Architecture`,
      },
      database: {
        name: databaseName,
        engine: databaseName.toLowerCase().includes("sql server")
          ? "SQL Server"
          : databaseName.toLowerCase().includes("mongo")
          ? "MongoDB"
          : "PostgreSQL",
        iconName: "Database",
      },
      paradigms: [
        {
          id: "di-custom",
          category: "DI & Lifecycles",
          name: "1. State & Dependency Management",
          angularTitle: `${frontendName} State & Injection Architecture`,
          angularCode: `// ${frontendName} Component State Pattern\nexport function useFeatureState() {\n  // Encapsulated state management\n}`,
          angularSoundbite: `${frontendName} encapsulates state lifecycle and reactive dependencies cleanly.`,
          angularNuance: `Ensure state teardown and memory cleanup on view unmounting in ${frontendName}.`,
          dotnetTitle: `${backendName} Dependency & Service Architecture`,
          dotnetCode: `// ${backendName} Service\nclass Service {\n  // Injected dependencies\n}`,
          dotnetSoundbite: `${backendName} enforces modular service encapsulation and non-blocking I/O.`,
          dotnetNuance: `Configure thread pools and async handlers to avoid thread contention.`,
          runtimePhysics: `Client V8 runtime handles UI reactivity while ${backendName} executes non-blocking socket handling.`,
          candidateTrap: `Blocking the backend event loop or failing to unsubscribe from long-lived event listeners on the client.`,
          coreEquivalency: `Both ${frontendName} and ${backendName} provide structured separation between presentation and domain services.`,
          interviewPunchline: `We maintain strict separation of concerns between ${frontendName} frontend reactivity and ${backendName} scalable backend pipelines.`,
        },
      ],
      scenarios: [
        {
          id: "custom-outage-1",
          title: `1. ${backendName} High-Concurrency Latency Spike & Scale Bottleneck`,
          archetype: "Production Outages & War Stories",
          coreIssue: `Under 10,000 RPS, the ${backendName} service experienced p99 latency spikes due to unindexed queries on ${databaseName}.`,
          tenSecondAnchor: `Always profile database query execution plans and ensure backend connection pools are sized properly.`,
          fullScript: `During a traffic surge, our ${backendName} API response time degraded. We analyzed query execution plans against ${databaseName}, added covering indexes, and optimized async worker threads, reducing latency from 4.2s to 12ms.`,
          steeringBait: ["Query Execution Plan Analysis", "Connection Pool Tuning", "Non-blocking Async I/O"],
          redFlagPitfalls: ["Failing to index high-frequency query predicates.", "Over-allocating connection pool threads."],
          telemetryMetrics: "Reduced p99 latency from 4.2s to 12ms at 15k RPS.",
        },
      ],
      sqlRules: [
        {
          id: "custom-db-rule-1",
          category: "Indexing & SARGability",
          title: `1. ${databaseName} Index Optimization & Covering Indexes`,
          badPattern: `-- Unindexed query causing full table scan\nSELECT * FROM table WHERE date_col = ...`,
          optimizedPattern: `-- Indexed query using B-Tree seek\nCREATE INDEX idx_perf ON table (filter_col) INCLUDE (select_col);`,
          explanation: `Covering indexes allow the ${databaseName} engine to satisfy queries directly from index leaf pages.`,
          productionImpact: "Eliminates full table scans and reduces disk I/O by 90%.",
        },
      ],
      comparisonData: {
        id: stackId,
        title: `${frontendName} vs ${backendName} Full-Stack Architecture`,
        leftSubject: {
          name: `${frontendName} (Frontend)`,
          badge: frontendName,
          summary: `Modern client-side architecture powered by ${frontendName}.`,
        },
        rightSubject: {
          name: `${backendName} (Backend)`,
          badge: backendName,
          summary: `High-performance server architecture driven by ${backendName} and ${databaseName}.`,
        },
        dimensions: [
          {
            id: "dim-custom-1",
            category: "Architecture",
            title: "Client-Server Contract Symmetry",
            leftDetail: `Reactive UI state driven by ${frontendName}.`,
            rightDetail: `Scalable API endpoints driven by ${backendName}.`,
            winner: "tie",
            impactScore: 9,
            strategicVerdict: `Both tiers combine for rapid development and high throughput.`,
          },
        ],
        verdict: {
          title: `Full-Stack Parity: ${frontendName} & ${backendName}`,
          summary: `Combining ${frontendName} with ${backendName} delivers exceptional developer velocity and runtime performance.`,
          recommendations: [
            `Enforce typed API contracts between ${frontendName} and ${backendName}.`,
            `Optimize ${databaseName} indices for covering reads.`,
          ],
        },
      },
    };

    saveCustomTechStack(newProfile);
    setIsGenerating(false);
    onStackGenerated(newProfile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md">
              <Sparkles size={16} />
            </span>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Generate Custom Tech Matrix
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Synthesize Rosetta Stone paradigms, scenarios & DB rules for any stack combo.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          {/* Frontend Select */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Cpu size={14} className="text-purple-600" />
              Frontend Framework:
            </label>
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {frontendPresets.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFrontendName(f)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                    frontendName === f
                      ? "bg-purple-600 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={frontendName}
              onChange={(e) => setFrontendName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-900 dark:text-slate-100"
            />
          </div>

          {/* Backend Select */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Server size={14} className="text-indigo-600" />
              Backend Framework & Language:
            </label>
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {backendPresets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBackendName(b)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                    backendName === b
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={backendName}
              onChange={(e) => setBackendName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-900 dark:text-slate-100"
            />
          </div>

          {/* Database Select */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Database size={14} className="text-emerald-600" />
              Database Engine:
            </label>
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {databasePresets.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDatabaseName(d)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                    databaseName === d
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={databaseName}
              onChange={(e) => setDatabaseName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2.5 text-xs font-bold shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <BrainCircuit size={16} className="animate-spin" />
                <span>Synthesizing Tech Matrix...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Generate Matrix with AI</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
