import { SelfReportWizard } from "./SelfReportWizard";
import { McqVerificationWizard } from "./McqVerificationWizard";
import { DiagnosticReportView } from "./DiagnosticReportView";
import { StudyRoadmapView } from "./StudyRoadmapView";
import { ReassessmentWizard } from "./ReassessmentWizard";
import { FlashcardPracticeView } from "./FlashcardPracticeView";
import {
  AssessmentStage1Data,
  AssessmentStage2Data,
  StudyRoadmapData,
  AssessmentSelfReportStatus,
  FlashcardDeckData,
  Flashcard,
} from "../../services/llmService";
import { AssessmentStage } from "../../hooks/useAppState";

interface AssessmentWorkspaceProps {
  stage: AssessmentStage;
  stage1Data: AssessmentStage1Data | null;
  stage2Data: AssessmentStage2Data | null;
  reassessmentStage2Data: AssessmentStage2Data | null;
  selfReportAnswers: Record<string, AssessmentSelfReportStatus>;
  mcqAnswers: Record<string, number>;
  studyRoadmap: StudyRoadmapData | null;
  flashcardDeck: FlashcardDeckData | null;
  isLoading: boolean;
  onSelfReportSubmit: (answers: Record<string, AssessmentSelfReportStatus>) => void;
  onMcqSubmit: (answers: Record<string, number>) => void;
  onReassessmentChecklistSubmit: (selectedConceptIds: string[]) => void;
  onReassessmentMcqSubmit: (answers: Record<string, number>) => void;
  onRateFlashcard: (card: Flashcard, rating: "easy" | "good" | "hard") => void;
  onViewMap: () => void;
  onGenerateRoadmap: () => void;
  onStartReassessment: () => void;
  onStartFlashcards: () => void;
  onExportReport: () => void;
}

export function AssessmentWorkspace({
  stage,
  stage1Data,
  stage2Data,
  reassessmentStage2Data,
  selfReportAnswers,
  mcqAnswers,
  studyRoadmap,
  flashcardDeck,
  isLoading,
  onSelfReportSubmit,
  onMcqSubmit,
  onReassessmentChecklistSubmit,
  onReassessmentMcqSubmit,
  onRateFlashcard,
  onViewMap,
  onGenerateRoadmap,
  onStartReassessment,
  onStartFlashcards,
  onExportReport,
}: AssessmentWorkspaceProps) {
  if (stage === "self_report" && stage1Data) {
    return <SelfReportWizard data={stage1Data} onSubmit={onSelfReportSubmit} />;
  }

  if (stage === "mcq" && stage2Data) {
    return <McqVerificationWizard data={stage2Data} onSubmit={onMcqSubmit} />;
  }

  if (stage === "reassess" && stage1Data) {
    return (
      <ReassessmentWizard
        stage1Data={stage1Data}
        stage2Data={reassessmentStage2Data}
        selfReportAnswers={selfReportAnswers}
        onChecklistSubmit={onReassessmentChecklistSubmit}
        onMcqSubmit={onReassessmentMcqSubmit}
        isLoading={isLoading}
      />
    );
  }

  if (stage === "flashcards" && flashcardDeck) {
    return (
      <FlashcardPracticeView
        topic={flashcardDeck.topic}
        cards={flashcardDeck.cards}
        onRateCard={onRateFlashcard}
        onFinish={() => onViewMap()}
      />
    );
  }

  if (stage === "roadmap" && studyRoadmap) {
    return <StudyRoadmapView roadmap={studyRoadmap} />;
  }

  if (stage1Data) {
    return (
      <DiagnosticReportView
        stage1Data={stage1Data}
        stage2Data={stage2Data}
        selfReportAnswers={selfReportAnswers}
        mcqAnswers={mcqAnswers}
        onViewMap={onViewMap}
        onGenerateRoadmap={onGenerateRoadmap}
        onStartReassessment={onStartReassessment}
        onStartFlashcards={onStartFlashcards}
        onExportReport={onExportReport}
      />
    );
  }

  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-[32px] border border-white/60 bg-white/70 p-8 text-center text-slate-500">
      Select or generate a topic to start your diagnostic assessment.
    </div>
  );
}
