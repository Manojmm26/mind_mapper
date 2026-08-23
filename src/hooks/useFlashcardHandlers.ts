import { useCallback } from "react";
import { Edge, Node } from "@xyflow/react";
import {
  generateFlashcardDeck,
  type AssessmentStage1Data,
  type Flashcard,
  type FlashcardDeckData,
} from "../services/llmService";
import { UseWikiReturn } from "./useWiki";
import { buildWikiContext } from "../services/wikiPromptEnhancer";
import type { WorkspaceActiveView, AssessmentStage } from "./useAppState";

export interface UseFlashcardHandlersConfig {
  setIsLoading: (loading: boolean) => void;
  setLoadingMessage: (msg: string) => void;
  setError: (error: string) => void;
  setSavedNodes: (nodes: Node[] | null | ((prev: Node[] | null) => Node[] | null)) => void;
  setActiveView: (view: WorkspaceActiveView) => void;
  setAssessmentStage: (stage: AssessmentStage) => void;
  setFlashcardDeck: (deck: FlashcardDeckData | null) => void;
  setNodeAssessmentStatus: (status: Record<string, "mastered" | "review" | "gap"> | ((prev: Record<string, "mastered" | "review" | "gap">) => Record<string, "mastered" | "review" | "gap">)) => void;
  assessmentStage1Data: AssessmentStage1Data | null;
  flashcardDeck?: FlashcardDeckData | null;
  savedNodes: Node[] | null;
  wiki: UseWikiReturn;
}

export function useFlashcardHandlers({
  setIsLoading,
  setLoadingMessage,
  setError,
  setSavedNodes,
  setActiveView,
  setAssessmentStage,
  setFlashcardDeck,
  setNodeAssessmentStatus,
  assessmentStage1Data,
  flashcardDeck,
  savedNodes,
  wiki,
}: UseFlashcardHandlersConfig) {
  const handleStartFlashcards = useCallback(
    async (targetConceptIds?: string[]) => {
      if (!assessmentStage1Data) return;
      setIsLoading(true);
      setLoadingMessage("Generating interactive flashcards...");

      try {
        const targetConcepts = targetConceptIds
          ? (() => {
              const targetIdSet = new Set(targetConceptIds);
              return assessmentStage1Data.concepts.filter((c) => targetIdSet.has(c.id));
            })()
          : assessmentStage1Data.concepts;

        const wikiCtx = buildWikiContext(assessmentStage1Data.topic, wiki);
        const deck = await generateFlashcardDeck(
          assessmentStage1Data.topic,
          targetConcepts,
          wikiCtx,
        );

        setFlashcardDeck(deck);
        setAssessmentStage("flashcards");
      } catch (err: any) {
        setError(err.message || "Failed to generate flashcard deck.");
      } finally {
        setIsLoading(false);
        setLoadingMessage("");
      }
    },
    [
      assessmentStage1Data,
      wiki,
      setIsLoading,
      setLoadingMessage,
      setFlashcardDeck,
      setAssessmentStage,
      setError,
    ],
  );

  const handleRateFlashcard = useCallback(
    (card: Flashcard, rating: "easy" | "good" | "hard") => {
      if (rating === "easy") {
        setNodeAssessmentStatus((prev) => ({
          ...prev,
          [card.conceptId]: "mastered",
        }));

        setSavedNodes((prevNodes) => {
          if (!prevNodes) return prevNodes;
          return prevNodes.map((n) => {
            if (n.id === card.conceptId) {
              return {
                ...n,
                data: {
                  ...n.data,
                  assessmentStatus: "mastered",
                  themeFamily: "green",
                },
              };
            }
            return n;
          });
        });
      }

      if (rating === "hard" && flashcardDeck) {
        setFlashcardDeck({
          ...flashcardDeck,
          cards: [...flashcardDeck.cards.filter((c) => c.id !== card.id), card],
        });
      }
    },
    [flashcardDeck, setNodeAssessmentStatus, setSavedNodes, setFlashcardDeck],
  );

  return {
    handleStartFlashcards,
    handleRateFlashcard,
  };
}
