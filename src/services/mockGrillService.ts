import { executeLlmJsonCall } from "./aiClient";
import {
  GrillQuestion,
  GrillQuestionsPayload,
  GrillEvaluation,
  GrillSessionRecord,
  grillQuestionsPayloadSchema,
  grillEvaluationSchema,
  grillQuestionsGenAiSchema,
  grillEvaluationGenAiSchema,
} from "./llmSchemas";
import { ScenarioNarrative } from "../data/examples/fullStackDotNetAngularMatrix";

const GRILL_STORAGE_KEY = "INTERVIEW_STUDIO_GRILL_SESSIONS_V1";

// Curated default counter-questions for offline / instant rehearsal
const DEFAULT_OFFLINE_GRILL_QUESTIONS: Record<string, GrillQuestion[]> = {
  "threadpool-starvation": [
    {
      id: "tp-q1",
      persona: "Staff Architect (High-Throughput & Failure Modes)",
      focusArea: "IOCP vs Worker Thread Distinction",
      question:
        "Why didn't you just wrap the legacy Redis call inside 'Task.Run(() => redis.Get(...))' to avoid blocking the ASP.NET request thread?",
      modelAnswerKeyPoints: [
        "Task.Run still consumes and blocks a CLR ThreadPool worker thread under the hood.",
        "Under 10k RPS load, this merely shifts thread consumption from request pipeline to worker queue without releasing OS threads.",
        "True async I/O utilizes OS I/O Completion Ports (IOCP) with zero worker thread allocation during packet transit.",
      ],
      trapToAvoid:
        "Claiming Task.Run makes code asynchronous or solves ThreadPool starvation (it actually worsens thread churn).",
    },
    {
      id: "tp-q2",
      persona: "Engineering Director (Trade-offs & Business Impact)",
      focusArea: "Emergency Mitigation Trade-offs",
      question:
        "You increased ThreadPool.SetMinThreads to 500 as an emergency fix. What are the severe OS memory and CPU scheduling risks of keeping MinThreads permanently high?",
      modelAnswerKeyPoints: [
        "Each active Windows thread allocates 1MB user-mode stack space (and 12KB kernel stack in Linux), ballooning process virtual memory.",
        "Context switching thrashing increases CPU overhead exponentially when hundreds of threads wake simultaneously.",
        "MinThreads only acts as a temporary buffer to bypass Hill Climbing latency while the underlying sync-over-async bug is patched.",
      ],
      trapToAvoid:
        "Suggesting that increasing MinThreads is a permanent architectural scaling solution.",
    },
  ],
  "clr-gen2-retention": [
    {
      id: "gen2-q1",
      persona: "Staff Architect (High-Throughput & Failure Modes)",
      focusArea: "Closure & Event Handler Memory Leaking",
      question:
        "How do anonymous lambdas and event subscriptions cause captured services to live indefinitely in Gen 2 heaps?",
      modelAnswerKeyPoints: [
        "Closures generate compiler-generated display classes that hold strong references to all captured variables.",
        "If a Singleton service subscribes to an event on a Transient object without unsubscription, the GC root keeps the entire Transient graph alive in Gen 2.",
        "In .NET, use IDisposable or WeakEventManager; in Angular, use takeUntilDestroyed() or DestroyRef.",
      ],
      trapToAvoid:
        "Relying on GC.Collect() or believing the garbage collector automatically cleans up event subscriber roots.",
    },
  ],
};

export async function generateMockGrillQuestions(
  scenario: ScenarioNarrative,
  selectedPersona?: string
): Promise<GrillQuestion[]> {
  try {
    const personaInstruction =
      selectedPersona && selectedPersona !== "Mixed Panel (All Personas)"
        ? `Adopt the specific persona: "${selectedPersona}". Formulate questions strictly from this perspective.`
        : `Target diverse personas (Staff Architect, Engineering Director, Database SRE, Frontend Principal).`;

    const prompt = `You are a Principal / Staff Distributed Systems & Full-Stack Architect conducting a grueling technical interrogation for a Lead/Principal Engineer candidate (.NET 8/9 + Angular 18+ + SQL).

Scenario Under Discussion:
Title: "${scenario.title}"
Archetype: "${scenario.archetype}"
Core Issue: "${scenario.coreIssue}"
Spoken Teleprompter Script:
"${scenario.fullScript}"

Key Steering Bait Phrases dropped by candidate:
${scenario.steeringBait.map((b) => `- "${b}"`).join("\n")}

Red Flag Pitfalls:
${scenario.redFlagPitfalls.map((p) => `- "${p}"`).join("\n")}

TASK:
Generate 2 to 3 aggressive, deep, highly technical follow-up counter-questions challenging the candidate's architecture, failure modes, scale limitations, or edge case trade-offs.

Requirements:
- ${personaInstruction}
- Focus on real-world edge cases (race conditions, memory leaks, I/O bottlenecks, lock escalations).
- Include model key points and the fatal trap to avoid.`;

    const result = await executeLlmJsonCall<GrillQuestionsPayload>(
      prompt,
      grillQuestionsGenAiSchema,
      (data) => grillQuestionsPayloadSchema.parse(data)
    );

    if (result && result.questions && result.questions.length > 0) {
      return result.questions;
    }
  } catch (err) {
    console.warn("LLM Grill generation failed or offline. Falling back to curated questions.", err);
  }

  // Fallback to curated or dynamically constructed default questions
  if (DEFAULT_OFFLINE_GRILL_QUESTIONS[scenario.id]) {
    return DEFAULT_OFFLINE_GRILL_QUESTIONS[scenario.id];
  }

  return [
    {
      id: `${scenario.id}-fallback-q1`,
      persona: "Staff Architect (High-Throughput & Failure Modes)",
      focusArea: "Edge Cases & Latency Tail Spikes",
      question: `In your solution for '${scenario.title}', what happens to p99 tail latency when the underlying dependency experiences transient 500ms network jitter under 10,000 requests per second?`,
      modelAnswerKeyPoints: [
        "Must implement circuit breakers with Polly v8 to fail fast before connection pools exhaust.",
        "Use bounded System.Threading.Channels or backpressure signals to prevent memory queue blowup.",
        "Implement hedge requests or graceful degradation to cached read replicas.",
      ],
      trapToAvoid: "Suggesting infinite retries without jitter or unbounded background buffers.",
    },
    {
      id: `${scenario.id}-fallback-q2`,
      persona: "Engineering Director (Trade-offs & Business Impact)",
      focusArea: "Architectural Trade-offs & Operational Cost",
      question: `What was the biggest architectural compromise you made in this design, and under what specific scale threshold would you be forced to rewrite it?`,
      modelAnswerKeyPoints: [
        "Articulate precise memory/CPU trade-offs (e.g. Memory vs CPU latency).",
        "Define concrete metrics (e.g., beyond 50k RPS or 10TB data volume).",
        "Describe the next evolution step (e.g., partitioning, event sourcing, or distributed actors).",
      ],
      trapToAvoid: "Claiming the architecture is 100% perfect or has infinite horizontal scalability.",
    },
  ];
}

export async function evaluateCandidateGrillResponse(
  scenario: ScenarioNarrative,
  question: GrillQuestion,
  candidateAnswer: string
): Promise<GrillEvaluation> {
  const trimmed = candidateAnswer.trim();
  if (!trimmed || trimmed.length < 20) {
    return {
      score: 1.5,
      readinessLevel: "Junior",
      feedback: "The answer was too brief or lacked substantive technical reasoning. Staff-level responses must explicitly cite mechanism internals, trade-offs, and quantified metrics.",
      strengths: ["Attempted to answer the question."],
      gaps: [
        "Did not explain the underlying runtime/engine mechanics.",
        "Missed key failure modes and trade-offs.",
      ],
      redFlagTriggered: false,
      staffSoundbite: question.modelAnswerKeyPoints[0] || "Provide a direct, quantified mechanism explanation.",
    };
  }

  try {
    const prompt = `You are evaluating a Principal / Lead Full-Stack (.NET 8/9 + Angular 18+ + SQL) interview candidate's response to a tough technical counter-question.

Scenario Context: "${scenario.title}" (${scenario.archetype})
Interviewer Question: "${question.question}"
Interviewer Persona: "${question.persona}"
Focus Area: "${question.focusArea}"
Model Answer Key Points:
${question.modelAnswerKeyPoints.map((k) => `- ${k}`).join("\n")}
Trap to Avoid: "${question.trapToAvoid}"

CANDIDATE'S SPOKEN/TYPED RESPONSE:
"${candidateAnswer}"

EVALUATION RUBRIC:
- 5.0 (Principal): Articulates exact engine mechanics (IOCP, B-Tree, memory layouts, signals graph), trade-offs, and metrics.
- 4.0 - 4.5 (Lead/Staff): Strong, direct, technically accurate, cites proper mechanisms and avoid traps.
- 3.0 - 3.5 (Senior): Correct general direction but vague on low-level runtime internals.
- 2.0 - 2.5 (Mid-Level): High-level generic buzzwords, misses nuances.
- 1.0 - 1.5 (Junior): Inaccurate claims, falls into the trapToAvoid.

Evaluate strictly and return JSON matching the schema.`;

    const result = await executeLlmJsonCall<GrillEvaluation>(
      prompt,
      grillEvaluationGenAiSchema,
      (data) => grillEvaluationSchema.parse(data)
    );

    return result;
  } catch (err) {
    console.warn("LLM evaluation failed or offline. Using heuristic evaluation.", err);
  }

  // Robust Heuristic Offline Evaluator
  const lowerAnswer = candidateAnswer.toLowerCase();
  const matchedKeyPoints = question.modelAnswerKeyPoints.filter((kp) => {
    const words = kp.toLowerCase().split(/\s+/).filter((w) => w.length > 4);
    return words.some((w) => lowerAnswer.includes(w));
  });

  const hasTrap = lowerAnswer.includes("task.run") || lowerAnswer.includes("gc.collect") || lowerAnswer.includes("infinite");
  const matchedKeyPointSet = new Set(matchedKeyPoints);
  const baseScore = Math.min(5, Math.max(2, 2.5 + matchedKeyPoints.length * 0.9 - (hasTrap ? 1.2 : 0)));
  const scoreRounded = Math.round(baseScore * 10) / 10;

  const readiness: GrillEvaluation["readinessLevel"] =
    scoreRounded >= 4.5
      ? "Principal"
      : scoreRounded >= 4.0
      ? "Lead / Staff"
      : scoreRounded >= 3.0
      ? "Senior"
      : scoreRounded >= 2.0
      ? "Mid-Level"
      : "Junior";

  return {
    score: scoreRounded,
    readinessLevel: readiness,
    feedback: `Good technical grasp. ${matchedKeyPoints.length} out of ${question.modelAnswerKeyPoints.length} core architectural concepts were addressed. ${hasTrap ? "Caution: Detected potential anti-pattern phrasing." : "Pacing and depth were solid."}`,
    strengths:
      matchedKeyPoints.length > 0
        ? matchedKeyPoints.map((k) => `Articulated core concept related to ${k.slice(0, 40)}...`)
        : ["Clear articulation of high-level problem resolution."],
    gaps: question.modelAnswerKeyPoints.flatMap((kp) =>
      matchedKeyPointSet.has(kp) ? [] : [`Could emphasize: ${kp}`]
    ),
    redFlagTriggered: hasTrap,
    redFlagDetails: hasTrap ? `Be careful to avoid: ${question.trapToAvoid}` : undefined,
    staffSoundbite: question.modelAnswerKeyPoints[0] || "Deliver crisp, mechanism-driven answers with verified telemetry.",
  };
}

// ----------------------------------------------------
// Persistent Storage API for Mock Grill Logs
// ----------------------------------------------------

export function getGrillSessions(): GrillSessionRecord[] {
  try {
    const raw = localStorage.getItem(GRILL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to load grill sessions from localStorage:", e);
    return [];
  }
}

export function saveGrillSession(session: GrillSessionRecord): void {
  try {
    const existing = getGrillSessions();
    const filtered = existing.filter((s) => s.id !== session.id);
    const updated = [session, ...filtered].slice(0, 50); // Keep latest 50 sessions
    localStorage.setItem(GRILL_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save grill session to localStorage:", e);
  }
}

export function deleteGrillSession(sessionId: string): GrillSessionRecord[] {
  try {
    const existing = getGrillSessions();
    const updated = existing.filter((s) => s.id !== sessionId);
    localStorage.setItem(GRILL_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error("Failed to delete grill session:", e);
    return [];
  }
}

export function clearAllGrillSessions(): void {
  try {
    localStorage.removeItem(GRILL_STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear grill sessions:", e);
  }
}

export function exportGrillSessionMarkdown(session: GrillSessionRecord): string {
  let md = `# ⚔️ Technical Mock Grill Assessment Report\n\n`;
  md += `**Scenario**: ${session.scenarioTitle}\n`;
  md += `**Date**: ${new Date(session.createdAt).toLocaleString()}\n`;
  md += `**Overall Score**: ${session.averageScore.toFixed(1)} / 5.0 (${session.overallReadiness})\n\n`;
  md += `---\n\n`;

  session.answers.forEach((ans, idx) => {
    md += `### Question ${idx + 1}: ${ans.questionText}\n`;
    md += `- **Interviewer Persona**: ${ans.persona}\n`;
    md += `- **Focus Area**: ${ans.focusArea}\n\n`;
    md += `#### 🗣️ Candidate Response:\n> ${ans.candidateAnswer.replace(/\n/g, "\n> ")}\n\n`;
    md += `#### 📊 Evaluation (Score: ${ans.evaluation.score.toFixed(1)} / 5.0 - ${ans.evaluation.readinessLevel}):\n`;
    md += `${ans.evaluation.feedback}\n\n`;

    if (ans.evaluation.strengths.length > 0) {
      md += `**Strengths:**\n`;
      ans.evaluation.strengths.forEach((s) => (md += `- ✅ ${s}\n`));
      md += `\n`;
    }

    if (ans.evaluation.gaps.length > 0) {
      md += `**Gaps to Address:**\n`;
      ans.evaluation.gaps.forEach((g) => (md += `- ⚠️ ${g}\n`));
      md += `\n`;
    }

    if (ans.evaluation.redFlagTriggered) {
      md += `**🚨 Red Flag Trap Triggered:** ${ans.evaluation.redFlagDetails || "Anti-pattern detected."}\n\n`;
    }

    md += `**🌟 Winning Principal / Staff Soundbite:**\n> "${ans.evaluation.staffSoundbite}"\n\n`;
    md += `---\n\n`;
  });

  return md;
}
