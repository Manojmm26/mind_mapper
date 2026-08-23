import React, { useState } from "react";
import {
  TechStackProfile,
  saveCustomTechStack,
} from "../../data/techStacks";
import { normalizeComparisonData } from "../../services/llmSchemas";
import {
  generateCustomTechStackPayload,
  buildFallbackCustomStackParadigms,
  buildFallbackCustomStackScenarios,
} from "../../services/techStackGeneratorService";
import type {
  GeneratedParadigm,
  GeneratedScenario,
  TechStackGeneratedPayload,
} from "../../schemas/techStackGenSchema";
import {
  X,
  Sparkles,
  Cpu,
  Server,
  Database,
  BrainCircuit,
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

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<"info" | "error" | "success">("info");

  const mapDossier = (
    d: GeneratedParadigm["frontendDossier"],
    frameworkName: string
  ) =>
    d && {
      framework: frameworkName,
      conceptTitle: d.conceptTitle,
      architectureOverview: d.architectureOverview,
      underTheHoodMechanics: d.underTheHoodMechanics,
      extendedProductionCode: d.extendedProductionCode,
      codeExplanation: d.codeExplanation,
      productionBestPractices: d.productionBestPractices,
      seniorInterviewProbes: d.seniorInterviewProbes,
      criticalPitfallsAndAntiPatterns: d.criticalPitfallsAndAntiPatterns,
    };

  const mapParadigm = (
    p: GeneratedParadigm,
    i: number,
    frontendName: string,
    backendName: string
  ) => ({
    id: `custom-paradigm-${i + 1}`,
    category: p.category,
    name: `${i + 1}. ${p.name.replace(/^\d+\.\s*/, "")}`,
    angularTitle: p.frontendTitle,
    angularCode: p.frontendCode,
    angularSoundbite: p.frontendSoundbite,
    angularNuance: p.frontendNuance,
    dotnetTitle: p.backendTitle,
    dotnetCode: p.backendCode,
    dotnetSoundbite: p.backendSoundbite,
    dotnetNuance: p.backendNuance,
    runtimePhysics: p.runtimePhysics,
    candidateTrap: p.candidateTrap,
    coreEquivalency: p.coreEquivalency,
    interviewPunchline: p.interviewPunchline,
    angularDossier: mapDossier(p.frontendDossier, frontendName),
    dotnetDossier: mapDossier(p.backendDossier, backendName),
  });

  const mapScenario = (s: GeneratedScenario, i: number) => ({
    id: `custom-scenario-${i + 1}`,
    title: s.title,
    archetype: s.archetype,
    coreIssue: s.coreIssue,
    tenSecondAnchor: s.tenSecondAnchor,
    fullScript: s.fullScript,
    steeringBait: s.steeringBait,
    redFlagPitfalls: s.redFlagPitfalls,
    telemetryMetrics: s.telemetryMetrics,
  });

  const buildStackProfile = (
    baseId: string,
    payload: TechStackGeneratedPayload | null,
    input: { frontendName: string; backendName: string; databaseName: string }
  ): TechStackProfile => {
    const { frontendName, backendName, databaseName } = input;
    const stackId = baseId;

    // Per-section salvage: any AI-generated content for a section is used;
    // sections with nothing usable fall back to the starter template.
    const paradigms =
      payload && payload.paradigms.length > 0
        ? payload.paradigms.map((p, i) => mapParadigm(p, i, input.frontendName, input.backendName))
        : buildFallbackCustomStackParadigms(input).map((p, i) =>
            mapParadigm(p, i, input.frontendName, input.backendName)
          );

    const scenarios =
      payload && payload.scenarios.length > 0
        ? payload.scenarios.map(mapScenario)
        : buildFallbackCustomStackScenarios(input).map((s, i) => mapScenario(s, i));

    const sqlRules =
      payload && payload.sqlRules.length > 0
        ? payload.sqlRules.map((r, i) => ({
          id: `custom-sql-rule-${i + 1}`,
          category: r.category,
          title: r.title,
          badPattern: r.badPattern,
          optimizedPattern: r.optimizedPattern,
          explanation: r.explanation,
          productionImpact: r.productionImpact,
        }))
      : [
          {
            id: "custom-db-rule-1",
            category: "Indexing & SARGability" as const,
            title: `1. ${databaseName} Index Optimization & Covering Indexes`,
            badPattern: `-- Unindexed query causing full table scan\nSELECT * FROM table WHERE date_col = ...`,
            optimizedPattern: `-- Indexed query using B-Tree seek\nCREATE INDEX idx_perf ON table (filter_col) INCLUDE (select_col);`,
            explanation: `Covering indexes allow the ${databaseName} engine to satisfy queries directly from index leaf pages.`,
            productionImpact: "Eliminates full table scans and reduces disk I/O by 90%.",
          },
        ];

    const matrix = payload?.decisionMatrix;
    const comparisonData = normalizeComparisonData({
      title: `${frontendName} vs ${backendName} Full-Stack Architecture`,
      overview:
        matrix?.overview ||
        `Strategic evaluation across ${frontendName} client reactivity, ${backendName} backend concurrency, and ${databaseName} data access.`,
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
      dimensions:
        matrix?.dimensions.map((d, i) => ({
          id: d.category ? `dim-${i}-${d.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : `dim-${i}`,
          category: d.category,
          title: d.title,
          leftDetail: d.leftDetail,
          rightDetail: d.rightDetail,
          winner: d.winner,
          impactScore: d.impactScore,
          strategicVerdict: d.strategicVerdict,
        })) ?? [
          {
            id: "dim-custom-1",
            category: "Architecture",
            title: "Client-Server Contract Symmetry",
            leftDetail: `Reactive UI state driven by ${frontendName}.`,
            rightDetail: `Scalable API endpoints driven by ${backendName}.`,
            winner: "tie" as const,
            impactScore: 9,
            strategicVerdict: `Both tiers combine for rapid development and high throughput.`,
          },
        ],
      verdict: matrix
        ? matrix.verdict
        : {
            title: `Full-Stack Parity: ${frontendName} & ${backendName}`,
            summary: `Combining ${frontendName} with ${backendName} delivers strong developer velocity and runtime performance.`,
            recommendations: [
              `Enforce typed API contracts between ${frontendName} and ${backendName}.`,
              `Optimize ${databaseName} access patterns for covering reads.`,
            ],
          },
    });

    return {
      id: stackId,
      title: `${frontendName} ↔ ${backendName} & ${databaseName}`,
      shortBadge: `✨ ${frontendName.split(" ")[0]} + ${backendName.split(" ")[0]}`,
      description: `AI-synthesized architectural matrix bridging ${frontendName} with ${backendName} and ${databaseName}.`,
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
          ? ("SQL Server" as const)
          : databaseName.toLowerCase().includes("mongo")
          ? ("MongoDB" as const)
          : ("PostgreSQL" as const),
        iconName: "Database",
      },
      paradigms,
      scenarios,
      sqlRules,
      comparisonData,
    };
  };

  const handleGenerate = async () => {
    if (!frontendName.trim() || !backendName.trim() || !databaseName.trim()) {
      alert("Please select or specify Frontend, Backend, and Database.");
      return;
    }

    setIsGenerating(true);
    setStatusMessage(null);
    setStatusTone("info");

    const stackId = `custom-${frontendName.toLowerCase().replace(/[^a-z0-9]/g, "")}-${backendName.toLowerCase().replace(/[^a-z0-9]/g, "")}-${Date.now()}`;
    const input = { frontendName, backendName, databaseName };

    let payload: TechStackGeneratedPayload | null = null;
    try {
      const stageLabels: Record<string, string> = {
        paradigms: "Rosetta Stone paradigms",
        scenarios: "war-story scenarios",
        sqlRules: "database tuning rules",
        decision: "decision board",
      };
      payload = await generateCustomTechStackPayload(input, (p) => {
        setStatusTone("info");
        setStatusMessage(
          `Generating ${stageLabels[p.stage]}… (${p.done}/${p.total})`
        );
      });
      const used: string[] = [];
      const missed: string[] = [];
      const sectionDefs: Array<[string, number, string, string]> = [
        ["paradigms", payload.paradigms.length, "paradigm(s)", "Rosetta paradigms"],
        ["scenarios", payload.scenarios.length, "scenario(s)", "war-story scenarios"],
        ["sqlRules", payload.sqlRules.length, "rule(s)", "tuning rules"],
      ];
      for (const [key, n, label, pretty] of sectionDefs) {
        if (n > 0) {
          used.push(`${n} ${label}`);
        } else {
          missed.push(pretty);
        }
      }
      const matrixNote = payload.decisionMatrix ? "" : " Decision board uses a starter layout.";
      setStatusMessage(
        `AI generated ${used.join(", ")}.${
          missed.length ? ` ${missed.join(" & ")} fell back to the starter template.` : ""
        }${matrixNote}`
      );
      setStatusTone(missed.length || !payload.decisionMatrix ? "info" : "success");
    } catch (err: any) {
      console.warn("AI tech-stack generation failed; using starter template instead.", err);
      setStatusMessage(
        "AI generation unavailable right now — created a starter template for this stack instead. You can retry from the stack switcher."
      );
      setStatusTone("error");
    }

    const newProfile = buildStackProfile(stackId, payload, input);

    saveCustomTechStack(newProfile);
    onStackGenerated(newProfile);

    // Let the user read the status before closing on fallback; close
    // immediately on success.
    if (payload) {
      onClose();
    } else {
      setIsGenerating(false);
    }
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
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-smooth ${
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
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-smooth ${
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
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-smooth ${
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

        {/* Generation Status */}
        {statusMessage && (
          <div
            className={`rounded-xl px-3.5 py-2.5 text-xs font-bold ring-1 ${
              statusTone === "error"
                ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 ring-amber-200/60 dark:ring-amber-800/40"
                : statusTone === "success"
                ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 ring-emerald-200/60 dark:ring-emerald-800/40"
                : "bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 ring-slate-200/60 dark:ring-slate-700/40"
            }`}
            role="status"
          >
            {statusMessage}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            disabled={isGenerating}
            className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2.5 text-xs font-bold shadow-md transition-smooth flex items-center gap-2 disabled:opacity-50"
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
