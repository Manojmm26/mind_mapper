import { executeLlmJsonCall } from "./aiClient";
import {
  techStackParadigmBatchGenAiSchema,
  techStackScenarioBatchGenAiSchema,
  techStackSqlRuleBatchGenAiSchema,
  techStackDecisionMatrixGenAiSchema,
  generatedParadigmBatchSchema,
  generatedScenarioBatchSchema,
  generatedSqlRuleBatchSchema,
  generatedDecisionMatrixSchema,
  validateTechStackPayload,
  GeneratedParadigm,
  GeneratedScenario,
  TechStackGeneratedPayload,
} from "../schemas/techStackGenSchema";

export interface CustomStackInput {
  frontendName: string;
  backendName: string;
  databaseName: string;
}

export type DossierStage = "paradigms" | "scenarios" | "sqlRules" | "decision";

export interface GenerationProgress {
  stage: DossierStage;
  done: number;
  total: number;
}

// Match the depth served by the flagship built-in stack
// (32 Rosetta paradigms / 18 war-story scenarios / 20 tuning rules).
export const DOSSIER_TARGETS = {
  paradigms: 32 as const,
  scenarios: 18 as const,
  sqlRules: 20 as const,
};

// Per-call batch sizes sized to stay well inside Gemini output limits.
// Paradigm batches are small because each item carries TWO full deep-dive
// dossiers (~2KB of content per paradigm).
const BATCH_SIZES = { paradigms: 3, scenarios: 6, sqlRules: 5 };

function buildStackBrief(input: CustomStackInput): string {
  const { frontendName, backendName, databaseName } = input;
  return `You are a Principal Engineer who has conducted 200+ senior full-stack interview loops. The candidate's target stack is:
- Frontend: ${frontendName}
- Backend: ${backendName}
- Database: ${databaseName}

RULES:
- Be brutally authentic to how these technologies actually behave (event loops, GC profiles, change detection, connection pools, execution plans).
- Every string must mention concrete mechanics, versions, or numbers — no generic filler.
- Code must be real idiomatic snippets for the named technologies — not pseudo-code.
- Do not invent version numbers beyond what is widely released.`;
}

async function generateBatch<T>(
  prompt: string,
  responseSchema: object,
  parseItems: (data: unknown) => T[]
): Promise<T[]> {
  const result = await executeLlmJsonCall<{ items: T[] }>(
    prompt,
    responseSchema,
    (data) => ({ items: parseItems(data) })
  );
  return result.items;
}

/**
 * Generates a full interview-prep dossier (Rosetta paradigms, war-story
 * scenarios, database tuning rules, and a decision matrix) for a custom
 * frontend/backend/database combination via a staged series of Gemini calls.
 *
 * Individual batch failures degrade gracefully — the pipeline only throws if
 * a section falls below usable minimums, in which case callers should fall
 * back to the local starter template.
 */
export async function generateCustomTechStackPayload(
  input: CustomStackInput,
  onProgress?: (p: GenerationProgress) => void
): Promise<TechStackGeneratedPayload> {
  const brief = buildStackBrief(input);
  let lastError: unknown = null;

  // --- Stage 1: Rosetta paradigms ---
  const paradigms: GeneratedParadigm[] = [];
  const paradigmBatches = Math.ceil(DOSSIER_TARGETS.paradigms / BATCH_SIZES.paradigms);
  for (let b = 0; b < paradigmBatches; b++) {
    onProgress?.({ stage: "paradigms", done: b, total: paradigmBatches });
    const startIdx = b * BATCH_SIZES.paradigms;
    try {
      const items = await generateBatch(
        `${brief}

TASK: Produce exactly ${BATCH_SIZES.paradigms} Rosetta-Stone architecture paradigms (items ${startIdx + 1}-${startIdx + BATCH_SIZES.paradigms} of ${DOSSIER_TARGETS.paradigms}) — the most interview-critical architectural paradigms for this stack pair${b > 0 ? `, DIFFERENT from these already-covered ones: ${paradigms.map((p) => p.name).join("; ")}` : ""}.

Each paradigm maps the concept across BOTH tiers (frontend* fields = ${input.frontendName}; backend* fields = ${input.backendName}). Spread across all six category enum values. Number each name starting at ${startIdx + 1}.

CRITICAL — DEEP-DIVE DOSSIERS: every paradigm MUST include frontendDossier AND backendDossier, each containing:
- architectureOverview: 350-500 chars on how THIS framework structures the concept (abstractions, lifecycle, key APIs).
- underTheHoodMechanics: compiler/runtime internals specific to this framework (e.g. reactivity graph, task scheduler, JIT behavior).
- extendedProductionCode: 15-40 line production-grade snippet with imports and error handling.
- codeExplanation: rationale for the non-obvious choices in that code.
- productionBestPractices: 3-6 opinionated practices naming concrete APIs/config flags.
- seniorInterviewProbes: 2 probes, each with a ~50-80 word modelLeadAnswer at Lead/Staff depth plus whyThisMatters.
- criticalPitfallsAndAntiPatterns: 1-3 entries with quantified consequences and remediations.`,
        techStackParadigmBatchGenAiSchema,
        (data) => generatedParadigmBatchSchema.parse(data).items
      );
      paradigms.push(...items);
    } catch (err) {
      lastError = err;
      console.warn(`Paradigm batch ${b + 1}/${paradigmBatches} failed.`, err);
    }
  }
  onProgress?.({ stage: "paradigms", done: paradigmBatches, total: paradigmBatches });

  // --- Stage 2: war-story scenarios ---
  const scenarios: GeneratedScenario[] = [];
  const scenarioBatches = Math.ceil(DOSSIER_TARGETS.scenarios / BATCH_SIZES.scenarios);
  for (let b = 0; b < scenarioBatches; b++) {
    onProgress?.({ stage: "scenarios", done: b, total: scenarioBatches });
    const startIdx = b * BATCH_SIZES.scenarios;
    try {
      const items = await generateBatch(
        `${brief}

TASK: Produce exactly ${BATCH_SIZES.scenarios} production war-story scenarios (numbered ${startIdx + 1}-${startIdx + BATCH_SIZES.scenarios}${b > 0 ? `, thematically distinct from these existing ones: ${scenarios.map((s) => s.title).join("; ")}` : ""}).

Requirements:
- Realistic scale with concrete RPS/latency/data-volume numbers in coreIssue and telemetryMetrics.
- fullScript is a first-person ~90-second spoken script (180-220 words) with before/after metrics.
- steeringBait: phrases candidates drop that invite deep follow-up grilling.
- redFlagPitfalls: claims that would expose shallow understanding.
- Rotate across all five archetype enum values.`,
        techStackScenarioBatchGenAiSchema,
        (data) => generatedScenarioBatchSchema.parse(data).items
      );
      scenarios.push(...items);
    } catch (err) {
      lastError = err;
      console.warn(`Scenario batch ${b + 1}/${scenarioBatches} failed.`, err);
    }
  }
  onProgress?.({ stage: "scenarios", done: scenarioBatches, total: scenarioBatches });

  // --- Stage 3: database tuning rules ---
  const sqlRules: TechStackGeneratedPayload["sqlRules"] = [];
  const sqlBatches = Math.ceil(DOSSIER_TARGETS.sqlRules / BATCH_SIZES.sqlRules);
  for (let b = 0; b < sqlBatches; b++) {
    onProgress?.({ stage: "sqlRules", done: b, total: sqlBatches });
    const startIdx = b * BATCH_SIZES.sqlRules;
    try {
      const items = await generateBatch(
        `${brief}

TASK: Produce exactly ${BATCH_SIZES.sqlRules} data-access performance rules specific to ${input.databaseName} (numbered ${startIdx + 1}-${startIdx + sqlBatches * BATCH_SIZES.sqlRules}${b > 0 ? `, beyond these existing ones: ${sqlRules.map((r) => r.title).join("; ")}` : ""}).

- Use the closest matching category enum value; map NoSQL/document stores onto "High-Throughput & Ingestion" or "Query Engine & Plan Cache"; ORM/data-access-layer rules map onto "EF Core & Dapper Integration".
- Snippets must use ${input.databaseName} syntax where applicable; badPattern/optimizedPattern start with a leading SQL-style comment line.`,
        techStackSqlRuleBatchGenAiSchema,
        (data) => generatedSqlRuleBatchSchema.parse(data).items
      );
      sqlRules.push(...items);
    } catch (err) {
      lastError = err;
      console.warn(`SQL rule batch ${b + 1}/${sqlBatches} failed.`, err);
    }
  }
  onProgress?.({ stage: "sqlRules", done: sqlBatches, total: sqlBatches });

  // --- Stage 4: decision board (optional — failure must not discard the
  //     three successfully generated sections above) ---
  onProgress?.({ stage: "decision", done: 0, total: 1 });
  let decisionMatrix: TechStackGeneratedPayload["decisionMatrix"];
  try {
    decisionMatrix = await executeLlmJsonCall<
      TechStackGeneratedPayload["decisionMatrix"]
    >(
      `${brief}

TASK: Build an architecture decision board defending this exact stack against alternatives. Return topic, overview, dimensions, verdict.

- 5 to 8 dimensions such as developer velocity, raw throughput under load, operational cost, ecosystem maturity, hiring pool, failure modes & recovery.
- leftDetail argues the ${input.frontendName}/client tier; rightDetail argues the ${input.backendName}/server tier; winner ∈ left|right|tie; impactScore 1-10.
- verdict.recommendations: 2-4 concrete actions a team adopting this stack should take.`,
      techStackDecisionMatrixGenAiSchema,
      (data) => generatedDecisionMatrixSchema.parse(data)
    );
  } catch (err) {
    lastError = err;
    console.warn("Decision matrix generation failed; continuing without it.", err);
  }
  onProgress?.({ stage: "decision", done: 1, total: 1 });

  // --- Assembly gate: only bail out when NOTHING usable was generated ---
  if (!paradigms.length && !scenarios.length && !sqlRules.length) {
    console.error("Dossier generation produced no usable sections.", lastError);
    throw new Error("AI generation produced no usable content.");
  }

  // Deduplicate by title in case batches overlap despite anti-repetition prompts.
  const dedupe = <T extends { name?: string; title?: string }>(items: T[]): T[] => {
    const seen = new Set<string>();
    return items.filter((item) => {
      const k = item.name || item.title || "";
      if (!k || seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  };

  return validateTechStackPayload({
    paradigms: dedupe(paradigms),
    scenarios: dedupe(scenarios),
    sqlRules: dedupe(sqlRules),
    decisionMatrix,
  });
}

// ---------------------------------------------------------------------------
// Local template fallback (used when Gemini is unavailable / fails)
// ---------------------------------------------------------------------------

export function buildFallbackCustomStackParadigms(
  input: CustomStackInput,
  count: number = 1
): GeneratedParadigm[] {
  const { frontendName, backendName } = input;
  const templates: GeneratedParadigm[] = [
    {
      category: "State & Async",
      name: "1. State & Dependency Management",
      frontendTitle: `${frontendName} State & Injection Architecture`,
      frontendCode: `// ${frontendName} Component State Pattern\nexport function useFeatureState() {\n  // Encapsulated state management\n}`,
      frontendSoundbite: `${frontendName} encapsulates state lifecycle and reactive dependencies cleanly.`,
      frontendNuance: `Ensure state teardown and memory cleanup on view unmounting in ${frontendName}.`,
      backendTitle: `${backendName} Dependency & Service Architecture`,
      backendCode: `// ${backendName} Service\nclass Service {\n  // Injected dependencies\n}`,
      backendSoundbite: `${backendName} enforces modular service encapsulation and non-blocking I/O.`,
      backendNuance: `Configure thread pools and async handlers to avoid thread contention.`,
      runtimePhysics: `The client runtime handles UI reactivity while ${backendName} executes non-blocking I/O.`,
      candidateTrap: `Blocking the backend event loop or failing to unsubscribe from long-lived listeners on the client.`,
      coreEquivalency: `Both tiers provide structured separation between presentation and domain services.`,
      interviewPunchline: `We maintain strict separation of concerns between ${frontendName} reactivity and ${backendName} scalability.`,
      frontendDossier: {
        conceptTitle: `${frontendName} Deep Dive`,
        architectureOverview: `${frontendName} scopes state and dependency lifecycle to the component graph; providers register at the root and tear down with their owners.`,
        underTheHoodMechanics: `Reactive invalidation marks dirty consumers and flushes them in a scheduled microtask queue.`,
        extendedProductionCode: `// Production pattern in ${frontendName}\nexport function createService() {\n  let disposed = false;\n  return { read: () => disposed ? null : compute(), dispose: () => { disposed = true; } };\n}`,
        codeExplanation: `Explicit dispose guards against leaked subscriptions after unmount.`,
        productionBestPractices: [
          "Scope providers as narrowly as the feature allows.",
          "Always clean up subscriptions on teardown.",
          "Prefer derived state over synchronized copies.",
        ],
        seniorInterviewProbes: [
          {
            interviewerQuestion: "How does this framework prevent stale state after a component unmounts?",
            modelLeadAnswer: `Ownership-scoped lifecycles mean subscriptions registered under a destroyed owner are automatically torn down; manual patterns must still guard callbacks firing post-dispose.`,
            whyThisMatters: "Distinguishes engineers who understand lifetime management from those who memorize APIs.",
          },
        ],
        criticalPitfallsAndAntiPatterns: [
          {
            antiPattern: "Global singletons holding per-view state.",
            consequence: "Cross-view state bleed and memory retention under navigation churn.",
            remediation: "Move state into owner-scoped containers.",
          },
        ],
      },
      backendDossier: {
        conceptTitle: `${backendName} Deep Dive`,
        architectureOverview: `${backendName} composes stateless handlers around injected collaborators; lifecycles are owned by the runtime container rather than request scope by default.`,
        underTheHoodMechanics: `Dependency graphs resolve at startup; per-request state travels through explicit context objects instead of ambient storage.`,
        extendedProductionCode: `// Production pattern in ${backendName}\nclass Handler {\n  constructor(private readonly repo: Repository) {}\n  async handle(cmd: Command): Promise<Result> {\n    return this.repo.transactional(cmd);\n  }\n}`,
        codeExplanation: `Constructor-injected collaborators keep the handler testable and the transaction boundary explicit.`,
        productionBestPractices: [
          "Keep handlers stateless; externalize state to the datastore or context.",
          "Bound concurrent work with explicit semaphores/queues.",
          "Fail fast on misconfiguration during startup.",
        ],
        seniorInterviewProbes: [
          {
            interviewerQuestion: "Where does implicit shared state creep into this stack and how do you contain it?",
            modelLeadAnswer: `Ambient contexts, module-level caches, and connection singletons are the usual offenders; containment means explicit request-scoped context propagation and bounded pools.`,
            whyThisMatters: "Tests whether the candidate can reason about concurrency hygiene at scale.",
          },
        ],
        criticalPitfallsAndAntiPatterns: [
          {
            antiPattern: "Blocking synchronous calls inside the event-loop worker.",
            consequence: "Throughput collapse from thousands of RPS to double digits under load.",
            remediation: "Offload CPU-bound work or use async-native drivers everywhere.",
          },
        ],
      },
    },
  ];
  return templates.slice(0, count);
}

export function buildFallbackCustomStackScenarios(
  input: CustomStackInput,
  count: number = 1
): GeneratedScenario[] {
  const { backendName, databaseName } = input;
  const templates: GeneratedScenario[] = [
    {
      title: `1. ${backendName} High-Concurrency Latency Spike & Scale Bottleneck`,
      archetype: "Production Outages & War Stories",
      coreIssue: `Under 10,000 RPS, the ${backendName} service experienced p99 latency spikes due to unindexed queries on ${databaseName}.`,
      tenSecondAnchor: `Always profile database query execution plans and ensure connection pools are sized properly.`,
      fullScript: `During a traffic surge, our ${backendName} API response time degraded. We analyzed query execution plans against ${databaseName}, added covering indexes, and optimized async workers, reducing latency from 4.2s to 12ms.`,
      steeringBait: ["Query Execution Plan Analysis", "Connection Pool Tuning", "Non-blocking Async I/O"],
      redFlagPitfalls: ["Failing to index high-frequency query predicates.", "Over-allocating connection pool threads."],
      telemetryMetrics: "Reduced p99 latency from 4.2s to 12ms at 15k RPS.",
    },
  ];
  return templates.slice(0, count);
}
