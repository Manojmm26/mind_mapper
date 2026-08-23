import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
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
import { BrainCircuit } from "lucide-react";

import { TechStackProfile, ANGULAR_DOTNET_STACK } from "../../data/techStacks";
import { GrillHeaderBanner } from "./mockGrill/GrillHeaderBanner";
import { ScenarioCommandCenter, ActiveIncidentContext } from "./mockGrill/ScenarioCommandCenter";
import { CustomScenarioModal } from "./mockGrill/CustomScenarioModal";
import { QuestionNavTabs } from "./mockGrill/QuestionNavTabs";
import { QuestionCard } from "./mockGrill/QuestionCard";
import { AnswerComposer } from "./mockGrill/AnswerComposer";
import { EvaluationScorecard } from "./mockGrill/EvaluationScorecard";

const ARCHETYPES = [
  "All",
  "Production Outages & War Stories",
  "Strategic Steering & Baiting",
  "Architectural Trade-Offs & System Design",
  "Full-Stack Angular ↔ .NET Integration",
  "Counter-Grill & Architecture Deflectors",
];

const PERSONAS = [
  "Mixed Panel (All Personas)",
  "Staff Architect (High-Throughput & Failure Modes)",
  "Engineering Director (Trade-offs & Business Impact)",
  "Database SRE (Lock Contention & Query Tuning)",
  "Frontend Principal (Reactivity & DOM Performance)",
];

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
  const [pastSessions, setPastSessions] = useState<GrillSessionRecord[]>(() => getGrillSessions());

  // Refs for Web Speech API
  const recognitionRef = useRef<any>(null);
  const baseTextRef = useRef<string>("");

  // Hints and UI state
  const [showHint, setShowHint] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

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
  const handleRandomGauntlet = useCallback(() => {
    // Pick unattempted first, or random from all
    const unattempted = allScenarios.filter((s) => !scenarioMasteryMap[s.id]);
    const pool = unattempted.length > 0 ? unattempted : allScenarios;
    const randomPick = pool[Math.floor(Math.random() * pool.length)];
    if (randomPick) {
      setSelectedScenarioId(randomPick.id);
    }
  }, [allScenarios, scenarioMasteryMap]);

  // Handle Drill Weakest Scenario
  const handleDrillWeakest = useCallback(() => {
    const scoredScenarios = allScenarios.filter((s) => scenarioMasteryMap[s.id]);
    if (scoredScenarios.length === 0) {
      handleRandomGauntlet();
      return;
    }
    scoredScenarios.sort(
      (a, b) => (scenarioMasteryMap[a.id]?.bestScore || 0) - (scenarioMasteryMap[b.id]?.bestScore || 0)
    );
    setSelectedScenarioId(scoredScenarios[0].id);
  }, [allScenarios, scenarioMasteryMap, handleRandomGauntlet]);

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
  const handleToggleSpeech = useCallback(() => {
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
  }, [isListening, currentQuestion, candidateAnswers]);

  const currentEval = currentQuestion ? evaluations[currentQuestion.id] : undefined;
  const currentAnswerText = currentQuestion ? candidateAnswers[currentQuestion.id] || "" : "";
  const wordCount = currentAnswerText.trim().split(/\s+/).filter(Boolean).length;

  const handleEvaluateCurrentAnswer = useCallback(async () => {
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
  }, [currentQuestion, candidateAnswers, currentScenario]);

  const handleSaveSession = useCallback(() => {
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
  }, [questions, candidateAnswers, evaluations, currentScenario]);

  const handleCopy = useCallback((text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }, []);

  const handleCopySoundbite = useCallback(() => {
    if (currentEval) {
      handleCopy(currentEval.staffSoundbite, "staff-soundbite");
    }
  }, [currentEval, handleCopy]);

  const handleToggleHint = useCallback(() => setShowHint((prev) => !prev), []);

  const handleChangeAnswer = useCallback(
    (value: string) => {
      if (currentQuestion) {
        setCandidateAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: value,
        }));
      }
    },
    [currentQuestion]
  );

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <GrillHeaderBanner
        pastSessionsCount={pastSessions.length}
        onNavigateToHistory={onNavigateToHistory}
      />

      {/* Main Studio Grid */}
      <div className="grid gap-6 lg:grid-cols-[380px_minmax(0,1fr)]">
        {/* Left: Intelligent Scenario Command Center */}
        <div className="space-y-4">
          <ScenarioCommandCenter
            archetypes={ARCHETYPES}
            personas={PERSONAS}
            allScenarios={allScenarios}
            filteredScenarios={filteredScenarios}
            selectedScenarioId={selectedScenarioId}
            onSelectScenario={setSelectedScenarioId}
            scenarioMasteryMap={scenarioMasteryMap}
            scenarioSearchQuery={scenarioSearchQuery}
            onSearchQueryChange={setScenarioSearchQuery}
            selectedArchetypeFilter={selectedArchetypeFilter}
            onArchetypeFilterChange={setSelectedArchetypeFilter}
            selectedPersona={selectedPersona}
            onPersonaChange={setSelectedPersona}
            onOpenCustomModal={() => setShowCustomModal(true)}
            onRandomGauntlet={handleRandomGauntlet}
            onDrillWeakest={handleDrillWeakest}
          />

          {/* Active Scenario Context Card */}
          <ActiveIncidentContext coreIssue={currentScenario.coreIssue} />
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
              <QuestionNavTabs
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                onSelectQuestion={setCurrentQuestionIndex}
                evaluations={evaluations}
                savedSuccess={savedSuccess}
                onSaveSession={handleSaveSession}
              />

              {/* Current Question Card */}
              {currentQuestion && (
                <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-sm p-6 space-y-4">
                  <QuestionCard
                    question={currentQuestion}
                    showHint={showHint}
                    onToggleHint={handleToggleHint}
                  />

                  {/* Candidate Input Area */}
                  <AnswerComposer
                    answerText={currentAnswerText}
                    onAnswerChange={handleChangeAnswer}
                    wordCount={wordCount}
                    isListening={isListening}
                    onToggleSpeech={handleToggleSpeech}
                    isEvaluating={isEvaluating}
                    onEvaluate={handleEvaluateCurrentAnswer}
                  />

                  {/* AI Evaluation Scorecard */}
                  {currentEval && (
                    <EvaluationScorecard
                      evaluation={currentEval}
                      copied={copiedKey === "staff-soundbite"}
                      onCopy={handleCopySoundbite}
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Custom Scenario Creation Modal */}
      {showCustomModal && (
        <CustomScenarioModal
          customTitle={customTitle}
          onCustomTitleChange={setCustomTitle}
          customContext={customContext}
          onCustomContextChange={setCustomContext}
          customArchetype={customArchetype}
          onCustomArchetypeChange={setCustomArchetype}
          archetypes={ARCHETYPES}
          onClose={() => setShowCustomModal(false)}
          onSave={handleSaveCustomScenario}
        />
      )}
    </div>
  );
}
