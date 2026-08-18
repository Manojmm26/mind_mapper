import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  SCENARIO_NARRATIVES,
  ScenarioNarrative,
} from "../../data/examples/fullStackDotNetAngularMatrix";
import {
  GrillQuestion,
  GrillEvaluation,
  GrillAnswerRecord,
  GrillSessionRecord,
} from "../../schemas/mockGrillSchema";
import {
  generateMockGrillQuestions,
  evaluateCandidateGrillResponse,
  saveGrillSession,
  getGrillSessions,
} from "../../services/mockGrillService";
import {
  Swords,
  Sparkles,
  UserCheck,
  BrainCircuit,
  Award,
  AlertOctagon,
  CheckCircle,
  HelpCircle,
  Mic,
  MicOff,
  Send,
  RotateCcw,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Save,
  Clock,
  History,
  Target,
  Search,
  Dices,
  PlusCircle,
  X,
  Flame,
  Zap,
  Filter,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import { TechStackProfile, ANGULAR_DOTNET_STACK } from "../../data/techStacks";

interface MockGrillSimulatorProps {
  techStack?: TechStackProfile;
  initialScenarioId?: string;
  onNavigateToHistory?: () => void;
}

export function MockGrillSimulator({
  techStack = ANGULAR_DOTNET_STACK,
  initialScenarioId,
  onNavigateToHistory,
}: MockGrillSimulatorProps) {
  const baseScenarios = techStack.scenarios || SCENARIO_NARRATIVES;

  // Scenario Selection & Filter State
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    initialScenarioId || baseScenarios[0]?.id || "threadpool-starvation"
  );
  const [scenarioSearchQuery, setScenarioSearchQuery] = useState("");
  const [selectedArchetypeFilter, setSelectedArchetypeFilter] = useState<string>("All");
  const [selectedPersona, setSelectedPersona] = useState<string>("Mixed Panel (All Personas)");

  // Custom Scenario Modal State
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customContext, setCustomContext] = useState("");
  const [customArchetype, setCustomArchetype] = useState("Production Outages & War Stories");
  const [customScenarios, setCustomScenarios] = useState<ScenarioNarrative[]>([]);

  // Active Questions State
  const [questions, setQuestions] = useState<GrillQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  // Candidate Response State
  const [candidateAnswers, setCandidateAnswers] = useState<Record<string, string>>({});
  const [evaluations, setEvaluations] = useState<Record<string, GrillEvaluation>>({});
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Historical drill records for mastery badges
  const [pastSessions, setPastSessions] = useState<GrillSessionRecord[]>([]);

  // Refs for Web Speech API
  const recognitionRef = useRef<any>(null);
  const baseTextRef = useRef<string>("");

  // Hints and UI state
  const [showHint, setShowHint] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const archetypes = [
    "All",
    "Production Outages & War Stories",
    "Strategic Steering & Baiting",
    "Architectural Trade-Offs & System Design",
    "Full-Stack Angular ↔ .NET Integration",
    "Counter-Grill & Architecture Deflectors",
  ];

  const personas = [
    "Mixed Panel (All Personas)",
    "Staff Architect (High-Throughput & Failure Modes)",
    "Engineering Director (Trade-offs & Business Impact)",
    "Database SRE (Lock Contention & Query Tuning)",
    "Frontend Principal (Reactivity & DOM Performance)",
  ];

  // Refresh drill history on mount
  useEffect(() => {
    setPastSessions(getGrillSessions());
  }, []);

  // Compute mastery map for each scenario
  const scenarioMasteryMap = useMemo(() => {
    const map: Record<string, { count: number; bestScore: number; latestReadiness?: string }> = {};
    pastSessions.forEach((s) => {
      if (!map[s.scenarioId]) {
        map[s.scenarioId] = { count: 1, bestScore: s.averageScore, latestReadiness: s.overallReadiness };
      } else {
        map[s.scenarioId].count += 1;
        if (s.averageScore > map[s.scenarioId].bestScore) {
          map[s.scenarioId].bestScore = s.averageScore;
          map[s.scenarioId].latestReadiness = s.overallReadiness;
        }
      }
    });
    return map;
  }, [pastSessions]);

  // Combined scenarios (curated for this stack + custom)
  const allScenarios = useMemo(() => {
    return [...customScenarios, ...baseScenarios];
  }, [customScenarios, baseScenarios]);

  const currentScenario =
    allScenarios.find((s) => s.id === selectedScenarioId) || allScenarios[0];

  const currentQuestion = questions[currentQuestionIndex];

  // Filtered Scenarios for Command Center
  const filteredScenarios = useMemo(() => {
    return allScenarios.filter((s) => {
      const matchesCat =
        selectedArchetypeFilter === "All" || s.archetype === selectedArchetypeFilter;
      const q = scenarioSearchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesSearch =
        s.title.toLowerCase().includes(q) ||
        s.archetype.toLowerCase().includes(q) ||
        s.coreIssue.toLowerCase().includes(q) ||
        s.steeringBait.some((b) => b.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [allScenarios, selectedArchetypeFilter, scenarioSearchQuery]);

  // Stop speech recognition on question or scenario change
  useEffect(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
      recognitionRef.current = null;
      setIsListening(false);
    }
  }, [selectedScenarioId, currentQuestionIndex]);

  // Load / Generate questions when scenario or persona changes
  useEffect(() => {
    let isMounted = true;
    async function loadQuestions() {
      setIsLoadingQuestions(true);
      setCandidateAnswers({});
      setEvaluations({});
      setCurrentQuestionIndex(0);
      setSavedSuccess(false);

      const qs = await generateMockGrillQuestions(currentScenario, selectedPersona);
      if (isMounted) {
        setQuestions(qs);
        setIsLoadingQuestions(false);
      }
    }
    loadQuestions();
    return () => {
      isMounted = false;
    };
  }, [selectedScenarioId, selectedPersona]);

  // Handle Random Gauntlet selection
  const handleRandomGauntlet = () => {
    // Pick unattempted first, or random from all
    const unattempted = allScenarios.filter((s) => !scenarioMasteryMap[s.id]);
    const pool = unattempted.length > 0 ? unattempted : allScenarios;
    const randomPick = pool[Math.floor(Math.random() * pool.length)];
    if (randomPick) {
      setSelectedScenarioId(randomPick.id);
    }
  };

  // Handle Drill Weakest Scenario
  const handleDrillWeakest = () => {
    const scoredScenarios = allScenarios.filter((s) => scenarioMasteryMap[s.id]);
    if (scoredScenarios.length === 0) {
      handleRandomGauntlet();
      return;
    }
    scoredScenarios.sort(
      (a, b) => (scenarioMasteryMap[a.id]?.bestScore || 0) - (scenarioMasteryMap[b.id]?.bestScore || 0)
    );
    setSelectedScenarioId(scoredScenarios[0].id);
  };

  // Handle Create Custom Scenario
  const handleSaveCustomScenario = () => {
    if (!customTitle.trim() || !customContext.trim()) {
      alert("Please provide both a Title and Incident / Architecture context for your custom scenario.");
      return;
    }

    const newScenario: ScenarioNarrative = {
      id: `custom-${Date.now()}`,
      title: customTitle.trim(),
      archetype: customArchetype as any,
      coreIssue: customContext.trim(),
      tenSecondAnchor: customTitle.trim(),
      fullScript: customContext.trim(),
      steeringBait: ["Custom Architecture Internals", "Telemetry & Failure Modes"],
      redFlagPitfalls: ["Lack of verified scale metrics", "Unbounded resource usage"],
      telemetryMetrics: "Custom telemetry verified under load.",
    };

    setCustomScenarios((prev) => [newScenario, ...prev]);
    setSelectedScenarioId(newScenario.id);
    setShowCustomModal(false);
    setCustomTitle("");
    setCustomContext("");
  };

  // Web Speech API for voice dictation with zero duplication
  const handleToggleSpeech = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser. You can type your response!");
      return;
    }

    if (isListening && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
      recognitionRef.current = null;
      setIsListening(false);
      return;
    }

    const SpeechRec =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    try {
      const recognition = new SpeechRec();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      const existingText = (currentQuestion ? candidateAnswers[currentQuestion.id] : "") || "";
      baseTextRef.current = existingText.trim();

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
        recognitionRef.current = null;
      };

      recognition.onerror = (e: any) => {
        console.warn("Speech recognition notice/error:", e);
        setIsListening(false);
        recognitionRef.current = null;
      };

      recognition.onresult = (event: any) => {
        if (!currentQuestion) return;

        let finalTranscript = "";
        let interimTranscript = "";

        for (let i = 0; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            finalTranscript += res[0].transcript + " ";
          } else {
            interimTranscript += res[0].transcript;
          }
        }

        const base = baseTextRef.current;
        const spoken = (finalTranscript + interimTranscript).trim();
        const combined = base ? `${base} ${spoken}` : spoken;

        setCandidateAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: combined,
        }));
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.error("Speech recognition startup error:", e);
      setIsListening(false);
      recognitionRef.current = null;
    }
  };

  const handleEvaluateCurrentAnswer = async () => {
    if (!currentQuestion) return;
    const answer = candidateAnswers[currentQuestion.id] || "";
    if (!answer.trim()) {
      alert("Please enter or speak your answer before submitting for evaluation.");
      return;
    }

    setIsEvaluating(true);
    const result = await evaluateCandidateGrillResponse(
      currentScenario,
      currentQuestion,
      answer
    );
    setEvaluations((prev) => ({
      ...prev,
      [currentQuestion.id]: result,
    }));
    setIsEvaluating(false);
  };

  const handleSaveSession = () => {
    const answeredRecords: GrillAnswerRecord[] = [];
    let totalScore = 0;

    questions.forEach((q) => {
      const ans = candidateAnswers[q.id];
      const ev = evaluations[q.id];
      if (ans && ev) {
        answeredRecords.push({
          questionId: q.id,
          questionText: q.question,
          persona: q.persona,
          focusArea: q.focusArea,
          candidateAnswer: ans,
          evaluation: ev,
          answeredAt: new Date().toISOString(),
        });
        totalScore += ev.score;
      }
    });

    if (answeredRecords.length === 0) {
      alert("Please evaluate at least one question before saving the rehearsal session.");
      return;
    }

    const avgScore = totalScore / answeredRecords.length;
    const readiness: GrillSessionRecord["overallReadiness"] =
      avgScore >= 4.5
        ? "Principal"
        : avgScore >= 4.0
        ? "Lead / Staff"
        : avgScore >= 3.0
        ? "Senior"
        : avgScore >= 2.0
        ? "Mid-Level"
        : "Junior";

    const session: GrillSessionRecord = {
      id: `grill-${Date.now()}`,
      scenarioId: currentScenario.id,
      scenarioTitle: currentScenario.title,
      createdAt: new Date().toISOString(),
      answers: answeredRecords,
      averageScore: avgScore,
      overallReadiness: readiness,
    };

    saveGrillSession(session);
    setPastSessions(getGrillSessions());
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const currentEval = currentQuestion ? evaluations[currentQuestion.id] : undefined;
  const currentAnswerText = currentQuestion ? candidateAnswers[currentQuestion.id] || "" : "";
  const wordCount = currentAnswerText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-[28px] bg-gradient-to-r from-violet-600/90 via-indigo-600/90 to-purple-600/90 p-6 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <Swords size={14} />
            AI Mock Grill Simulator & Command Center
          </div>
          {onNavigateToHistory && (
            <button
              onClick={onNavigateToHistory}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/20 hover:bg-white/30 px-3.5 py-1.5 min-h-[36px] text-xs font-bold transition-all text-white backdrop-blur-md"
            >
              <History size={14} />
              <span>Review Past Logs ({pastSessions.length})</span>
            </button>
          )}
        </div>

        <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
          Principal / Staff Technical Interrogation Simulator
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          Survive aggressive follow-up grilling from Principal Architects, VP of Engineering, and Database SREs. Test your depth on edge cases, race conditions, memory leaks, and lock escalations.
        </p>
      </div>

      {/* Main Studio Grid */}
      <div className="grid gap-6 lg:grid-cols-[380px_minmax(0,1fr)]">
        {/* Left: Intelligent Scenario Command Center */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm p-4 space-y-3.5">
            {/* Command Actions Strip */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Scenario Command Center
              </span>
              <button
                onClick={() => setShowCustomModal(true)}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 dark:text-purple-400 hover:underline"
              >
                <PlusCircle size={13} />
                <span>+ Custom Topic</span>
              </button>
            </div>

            {/* Quick Gauntlet Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleRandomGauntlet}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 border border-purple-200/60 dark:border-purple-800/40 p-2.5 min-h-[40px] text-xs font-bold text-purple-700 dark:text-purple-300 transition-all shadow-sm"
              >
                <Dices size={14} className="text-purple-600 dark:text-purple-400" />
                <span>🎲 Surprise Me</span>
              </button>
              <button
                onClick={handleDrillWeakest}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 border border-amber-200/60 dark:border-amber-800/40 p-2.5 min-h-[40px] text-xs font-bold text-amber-700 dark:text-amber-300 transition-all shadow-sm"
              >
                <Target size={14} className="text-amber-600 dark:text-amber-400" />
                <span>🎯 Drill Weakest</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search 18 scenarios & keywords..."
                value={scenarioSearchQuery}
                onChange={(e) => setScenarioSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-8 pr-3 py-2 min-h-[36px] text-xs font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            {/* Archetype Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {archetypes.map((arch) => {
                const count =
                  arch === "All"
                    ? allScenarios.length
                    : allScenarios.filter((s) => s.archetype === arch).length;
                return (
                  <button
                    key={arch}
                    onClick={() => setSelectedArchetypeFilter(arch)}
                    className={`rounded-lg px-2.5 py-1 min-h-[28px] text-[10px] font-bold transition-all ${
                      selectedArchetypeFilter === arch
                        ? "bg-slate-900 text-white dark:bg-purple-600 shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {arch.split(" ")[0]} ({count})
                  </button>
                );
              })}
            </div>

            {/* Interrogator Persona Selector */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
              <label htmlFor="persona-select" className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-1">
                <UserCheck size={12} />
                Interrogator Persona:
              </label>
              <select
                id="persona-select"
                value={selectedPersona}
                onChange={(e) => setSelectedPersona(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2 min-h-[36px] text-xs font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                {personas.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Scrollable Scenario Cards List */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin pt-1">
              {filteredScenarios.map((s) => {
                const isSelected = s.id === selectedScenarioId;
                const mastery = scenarioMasteryMap[s.id];

                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScenarioId(s.id)}
                    className={`w-full text-left rounded-2xl p-3 min-h-[52px] transition-all flex items-start justify-between gap-2 border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                      isSelected
                        ? "bg-purple-600 text-white border-purple-700 shadow-md font-bold"
                        : "bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <div className="space-y-1 pr-1">
                      <p className="text-xs font-bold line-clamp-1 leading-snug">{s.title}</p>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span
                          className={`font-semibold ${
                            isSelected ? "text-white/80" : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {s.archetype.split(" ")[0]}
                        </span>
                        {mastery ? (
                          <span
                            className={`rounded-full px-1.5 py-0.2 font-black ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : mastery.bestScore >= 4.5
                                ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                                : mastery.bestScore >= 4.0
                                ? "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300"
                                : "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"
                            }`}
                          >
                            ⭐ {mastery.bestScore.toFixed(1)}
                          </span>
                        ) : (
                          <span
                            className={`rounded-full px-1.5 py-0.2 font-semibold ${
                              isSelected ? "text-white/60" : "text-slate-400"
                            }`}
                          >
                            ⚪ Untested
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Scenario Context Card */}
          <div className="rounded-3xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 p-4 space-y-2 text-xs text-indigo-950 dark:text-indigo-200">
            <div className="flex items-center gap-2 font-black uppercase text-[11px] text-indigo-700 dark:text-indigo-300">
              <Zap size={14} />
              Active Incident Context
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {currentScenario.coreIssue}
            </p>
          </div>
        </div>

        {/* Right: Active Interrogation Area */}
        <div className="space-y-5">
          {isLoadingQuestions ? (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-12 text-center space-y-3">
              <div className="animate-spin text-purple-600 inline-block">
                <BrainCircuit size={32} />
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {selectedPersona !== "Mixed Panel (All Personas)"
                  ? `${selectedPersona} is formulating tough counter-questions...`
                  : "Principal Architect is formulating tough follow-up counter-questions..."}
              </p>
            </div>
          ) : questions.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-8 text-center text-xs text-slate-500">
              No questions generated. Please select another scenario.
            </div>
          ) : (
            <div className="space-y-5">
              {/* Question Navigation Tabs */}
              <div className="flex items-center justify-between rounded-2xl bg-white/80 dark:bg-slate-900/80 p-2 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  {questions.map((q, idx) => {
                    const isAnswered = !!evaluations[q.id];
                    const isCurrent = idx === currentQuestionIndex;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`rounded-xl px-3.5 py-2 min-h-[36px] text-xs font-black transition-all flex items-center gap-1.5 ${
                          isCurrent
                            ? "bg-purple-600 text-white shadow-md"
                            : isAnswered
                            ? "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                        }`}
                      >
                        <span>Q{idx + 1}</span>
                        {isAnswered && <CheckCircle size={12} className="text-emerald-500" />}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveSession}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-950 text-white px-3.5 py-2 min-h-[36px] text-xs font-bold hover:opacity-90 shadow-sm transition-all"
                  >
                    {savedSuccess ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>Saved to Log!</span>
                      </>
                    ) : (
                      <>
                        <Save size={14} />
                        <span>Save Session Log</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Current Question Card */}
              {currentQuestion && (
                <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm p-6 space-y-4">
                  {/* Persona & Focus Area Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 px-3 py-1 text-xs font-black text-purple-700 dark:text-purple-300">
                      <UserCheck size={14} />
                      {currentQuestion.persona}
                    </span>
                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-400">
                      Focus: {currentQuestion.focusArea}
                    </span>
                  </div>

                  {/* Interrogator Question */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Interviewer Counter-Question:
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                      "{currentQuestion.question}"
                    </h3>
                  </div>

                  {/* Collapsible Hints & Trap Warning */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <HelpCircle size={14} />
                      <span>{showHint ? "Hide Model Points & Traps" : "Show Interviewer Expectations & Traps"}</span>
                      {showHint ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {showHint && (
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 p-4 border border-amber-200/50 dark:border-amber-900/30 text-xs">
                        <div className="space-y-1.5">
                          <strong className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle size={14} /> Key Expected Points:
                          </strong>
                          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                            {currentQuestion.modelAnswerKeyPoints.map((kp, i) => (
                              <li key={i}>{kp}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-1.5">
                          <strong className="text-red-700 dark:text-red-400 flex items-center gap-1">
                            <AlertOctagon size={14} /> Fatal Trap to Avoid:
                          </strong>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentQuestion.trapToAvoid}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Candidate Input Area */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="candidate-answer-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Your Spoken / Typed Defense:
                      </label>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>{wordCount} words</span>
                        <button
                          type="button"
                          onClick={handleToggleSpeech}
                          className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 min-h-[32px] font-bold transition-all ${
                            isListening
                              ? "bg-red-500 text-white animate-pulse"
                              : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
                          }`}
                          title="Speak answer via microphone"
                        >
                          {isListening ? <MicOff size={14} /> : <Mic size={14} />}
                          <span>{isListening ? "Listening..." : "Dictate"}</span>
                        </button>
                      </div>
                    </div>

                    <textarea
                      id="candidate-answer-input"
                      rows={4}
                      placeholder="Articulate your technical response, engine internals, trade-offs, and telemetry metrics..."
                      value={candidateAnswers[currentQuestion.id] || ""}
                      onChange={(e) =>
                        setCandidateAnswers({
                          ...candidateAnswers,
                          [currentQuestion.id]: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 leading-relaxed shadow-inner"
                    />

                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleEvaluateCurrentAnswer}
                        disabled={isEvaluating}
                        className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50"
                      >
                        {isEvaluating ? (
                          <>
                            <BrainCircuit size={16} className="animate-spin" />
                            <span>Interviewer is Evaluating...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Evaluate Response with AI</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* AI Evaluation Scorecard */}
                  {currentEval && (
                    <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-5 border border-purple-200/80 dark:border-purple-900/50 space-y-4 shadow-sm animate-fadeIn">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-600 text-white font-black text-sm shadow-md">
                            {currentEval.score.toFixed(1)}
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase text-slate-400">
                              Assessed Caliber
                            </span>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white">
                              {currentEval.readinessLevel} Engineer Ready
                            </h4>
                          </div>
                        </div>

                        {currentEval.redFlagTriggered && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 dark:bg-red-950 px-3 py-1 text-xs font-black text-red-600 dark:text-red-400">
                            <AlertOctagon size={14} /> Red Flag Warning
                          </span>
                        )}
                      </div>

                      {/* Direct Feedback */}
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                        {currentEval.feedback}
                      </p>

                      {/* Strengths & Gaps */}
                      <div className="grid gap-3 sm:grid-cols-2 text-xs">
                        <div className="rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 p-3.5 border border-emerald-200/60 dark:border-emerald-900/40 space-y-1.5">
                          <strong className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-bold">
                            <CheckCircle size={14} /> What You Nailed:
                          </strong>
                          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                            {currentEval.strengths.map((s, i) => (
                              <li key={i}>• {s}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 p-3.5 border border-amber-200/60 dark:border-amber-900/40 space-y-1.5">
                          <strong className="text-amber-700 dark:text-amber-400 flex items-center gap-1 font-bold">
                            <Target size={14} /> Critical Gaps / Missed Nuance:
                          </strong>
                          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                            {currentEval.gaps.map((g, i) => (
                              <li key={i}>• {g}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Winning Staff Soundbite */}
                      <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-4 border border-purple-300/50 dark:border-purple-800/40 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1">
                            <Award size={14} />
                            Winning Principal / Staff Response:
                          </span>
                          <button
                            onClick={() => handleCopy(currentEval.staffSoundbite, "staff-soundbite")}
                            className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 dark:text-purple-300 hover:underline"
                          >
                            {copiedKey === "staff-soundbite" ? (
                              <Check size={14} className="text-emerald-500" />
                            ) : (
                              <Copy size={14} />
                            )}
                            <span>Copy Soundbite</span>
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold italic text-slate-900 dark:text-white leading-relaxed">
                          "{currentEval.staffSoundbite}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Custom Scenario Creation Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <PlusCircle size={16} className="text-purple-600" />
                Add Custom War Story / Architecture
              </h3>
              <button
                onClick={() => setShowCustomModal(false)}
                className="rounded-full p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Scenario Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Migrating 2TB SQL Server to Distributed Kafka Event Sourcing"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-3 font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Archetype Category
                </label>
                <select
                  value={customArchetype}
                  onChange={(e) => setCustomArchetype(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2.5 font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  {archetypes.filter((a) => a !== "All").map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Incident Background / Technical Architecture Context
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the scale, failure symptoms, technologies involved (.NET, Angular, SQL), root cause, and how you engineered the solution..."
                  value={customContext}
                  onChange={(e) => setCustomContext(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-3 font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 leading-relaxed"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setShowCustomModal(false)}
                className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCustomScenario}
                className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-xs font-bold shadow-md transition-all"
              >
                Create & Start Interrogation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
