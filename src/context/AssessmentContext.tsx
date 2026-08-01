import React, { createContext, useContext, ReactNode } from "react";
import {
  AssessmentStage1Data,
  AssessmentStage2Data,
  StudyRoadmapData,
  AssessmentSelfReportStatus,
  FlashcardDeckData,
  Flashcard,
} from "../services/llmService";
import { AssessmentStage } from "../hooks/useAppState";

export interface AssessmentContextValue {
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
  onStartFlashcards: (targetConceptIds?: string[]) => void;
  onExportReport: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | undefined>(undefined);

export interface AssessmentProviderProps {
  value: AssessmentContextValue;
  children: ReactNode;
}

export const AssessmentProvider: React.FC<AssessmentProviderProps> = ({ value, children }) => {
  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
};

export function useAssessmentContext(): AssessmentContextValue {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error("useAssessmentContext must be used within an AssessmentProvider");
  }
  return context;
}
