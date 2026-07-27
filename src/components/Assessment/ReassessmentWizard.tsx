import React, { useState } from "react";
import { CheckSquare, Square, Sparkles, ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";
import { AssessmentStage1Data, AssessmentStage2Data, AssessmentSelfReportStatus } from "../../services/llmService";
import { McqVerificationWizard } from "./McqVerificationWizard";

interface ReassessmentWizardProps {
  stage1Data: AssessmentStage1Data;
  stage2Data: AssessmentStage2Data | null;
  selfReportAnswers: Record<string, AssessmentSelfReportStatus>;
  onChecklistSubmit: (selectedConceptIds: string[]) => void;
  onMcqSubmit: (answers: Record<string, number>) => void;
  isLoading: boolean;
}

export function ReassessmentWizard({
  stage1Data,
  stage2Data,
  selfReportAnswers,
  onChecklistSubmit,
  onMcqSubmit,
  isLoading,
}: ReassessmentWizardProps) {
  // Filter concepts that were flagged as 'gap' or 'review'
  const revisitableConcepts = stage1Data.concepts.filter(
    (c) => selfReportAnswers[c.id] === "review" || selfReportAnswers[c.id] === "gap" || !selfReportAnswers[c.id]
  );

  const [selectedIds, setSelectedIds] = useState<string[]>(
    revisitableConcepts.map((c) => c.id)
  );

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleChecklistNext = () => {
    if (selectedIds.length === 0) return;
    onChecklistSubmit(selectedIds);
  };

  // If Stage 2 targeted MCQs are generated, render the MCQ wizard
  if (stage2Data && stage2Data.mcqs.length > 0) {
    return (
      <McqVerificationWizard
        topic={stage1Data.topic}
        mcqs={stage2Data.mcqs}
        onComplete={onMcqSubmit}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-y-auto p-4 md:p-6 space-y-6">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="rounded-[28px] border border-cyan-100 bg-cyan-50/70 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-800">
            <RefreshCw size={14} className="animate-spin-slow" /> Knowledge Re-Assessment
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
            What have you learned about {stage1Data.topic}?
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Select the knowledge gaps and review concepts you have studied since your last evaluation. AI will generate targeted verification questions for your selected concepts.
          </p>
        </div>

        {/* Concept Multi-Select Checklist */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select studied concepts ({selectedIds.length} of {revisitableConcepts.length})
            </span>
            <button
              type="button"
              onClick={() =>
                setSelectedIds(
                  selectedIds.length === revisitableConcepts.length
                    ? []
                    : revisitableConcepts.map((c) => c.id)
                )
              }
              className="text-xs font-semibold text-cyan-600 hover:underline"
            >
              {selectedIds.length === revisitableConcepts.length ? "Deselect All" : "Select All"}
            </button>
          </div>

          <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
            {revisitableConcepts.map((concept) => {
              const isChecked = selectedIds.includes(concept.id);
              const prevStatus = selfReportAnswers[concept.id] || "gap";

              return (
                <div
                  key={concept.id}
                  onClick={() => toggleSelect(concept.id)}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-all ${
                    isChecked
                      ? "border-cyan-500 bg-cyan-50/60 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-cyan-600">
                    {isChecked ? (
                      <CheckSquare size={20} className="text-cyan-600" />
                    ) : (
                      <Square size={20} className="text-slate-300" />
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-bold text-slate-900">
                        {concept.label}
                      </p>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500 uppercase">
                        {concept.category}
                      </span>
                      {prevStatus === "gap" && (
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[9px] font-black uppercase text-rose-700">
                          🔴 Knowledge Gap
                        </span>
                      )}
                      {prevStatus === "review" && (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-black uppercase text-amber-700">
                          🟡 Needs Review
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-5">
                      {concept.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleChecklistNext}
          disabled={isLoading || selectedIds.length === 0}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-cyan-700 disabled:opacity-40"
        >
          {isLoading ? (
            <>
              <Sparkles size={18} className="animate-spin" />
              <span>Generating Targeted Verification MCQs…</span>
            </>
          ) : (
            <>
              <span>Verify Selected Concepts ({selectedIds.length})</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
