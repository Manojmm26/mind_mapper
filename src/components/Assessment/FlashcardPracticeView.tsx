import React, { useState } from "react";
import {
  RotateCw,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Sparkles,
  Award,
  ArrowRight,
  BookOpen,
  Zap,
} from "lucide-react";
import { Flashcard } from "../../services/llmService";

interface FlashcardPracticeViewProps {
  topic: string;
  cards: Flashcard[];
  onRateCard: (card: Flashcard, rating: "easy" | "good" | "hard") => void;
  onFinish: () => void;
}

export function FlashcardPracticeView({
  topic,
  cards,
  onRateCard,
  onFinish,
}: FlashcardPracticeViewProps) {
  const [deck, setDeck] = useState<Flashcard[]>(cards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    easy: 0,
    good: 0,
    hard: 0,
  });
  const [isFinished, setIsFinished] = useState(false);

  const currentCard = deck[currentIndex];
  const progressPercent = Math.round(((currentIndex) / deck.length) * 100);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleRating = (rating: "easy" | "good" | "hard") => {
    if (!currentCard) return;

    onRateCard(currentCard, rating);

    setSessionStats((prev) => ({
      ...prev,
      [rating]: prev[rating] + 1,
    }));

    setIsFlipped(false);

    if (rating === "hard") {
      // Leitner queue re-ordering: push hard card to the end of deck queue
      setDeck((prevDeck) => [...prevDeck, currentCard]);
    }

    if (currentIndex + 1 >= deck.length && rating !== "hard") {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (isFinished || deck.length === 0 || !currentCard) {
    return (
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-[32px] border border-white/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 p-8 text-center shadow-xl backdrop-blur-xl space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 shadow-inner">
            <Award size={40} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Practice Session Completed!
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Great effort reviewing <span className="font-semibold text-cyan-600 dark:text-cyan-400">{topic}</span>. Your mind map and scores have been updated in real time.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 p-4 border border-slate-100 dark:border-white/10">
            <div className="text-center">
              <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-400">{sessionStats.easy}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Mastered</span>
            </div>
            <div className="text-center border-x border-slate-200 dark:border-white/10">
              <span className="block text-2xl font-black text-amber-600 dark:text-amber-400">{sessionStats.good}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Review</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black text-rose-600 dark:text-rose-400">{sessionStats.hard}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Retried</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onFinish}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-950 dark:bg-white px-6 py-4 text-sm font-bold text-white dark:text-slate-950 shadow-md transition-all hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-[1.02]"
          >
            <span>Return to Workspace Report & Map</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-y-auto p-4 md:p-6 space-y-6">
      {/* Top Header & Progress */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800/40">
            <Zap size={12} /> Flashcard Practice Mode
          </div>
          <h2 className="mt-2 text-xl font-black text-slate-900 dark:text-white sm:text-2xl">
            {topic}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Progress</span>
            <span className="text-sm font-black text-slate-800 dark:text-slate-100">
              Card {currentIndex + 1} of {deck.length}
            </span>
          </div>
          <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full bg-cyan-600 dark:bg-cyan-500 transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3D Flip Card Container */}
      <div className="mx-auto w-full max-w-2xl flex-1 flex flex-col justify-center min-h-[380px]">
        <div
          onClick={handleFlip}
          className="group relative cursor-pointer min-h-[360px] w-full rounded-[32px] border border-white/90 dark:border-white/10 bg-white dark:bg-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-2xl"
          style={{ perspective: "1000px" }}
        >
          {!isFlipped ? (
            /* FRONT SIDE */
            <div className="flex h-full flex-col justify-between p-5 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {currentCard.category || "General Concept"}
                  </span>
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:underline flex items-center gap-1">
                    <RotateCw size={14} className="animate-spin-slow" /> Tap to reveal answer
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black tracking-tight text-slate-900 dark:text-white md:text-2xl">
                  {currentCard.title}
                </h3>

                <p className="mt-4 text-base font-medium leading-7 text-slate-700 dark:text-slate-200">
                  {currentCard.question}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/40 p-4 border border-cyan-100/80 dark:border-cyan-800/40">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 dark:text-cyan-300">
                  <BookOpen size={16} />
                  <span>Think about the core mechanics before flipping.</span>
                </div>
                <span className="rounded-xl bg-cyan-600 dark:bg-cyan-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                  Flip Card
                </span>
              </div>
            </div>
          ) : (
            /* BACK SIDE */
            <div className="flex h-full flex-col justify-between p-5 sm:p-8 bg-slate-950 text-white rounded-[32px] shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-800/50">
                    Explanation & Key Takeaways
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <RotateCw size={14} /> Tap to view question
                  </span>
                </div>

                <p className="text-sm font-semibold leading-6 text-slate-200">
                  {currentCard.explanation}
                </p>

                {currentCard.keyTakeaways && currentCard.keyTakeaways.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Key Skills</span>
                    <ul className="space-y-1">
                      {currentCard.keyTakeaways.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentCard.realWorldExample && (
                  <div className="rounded-xl bg-slate-900 p-3 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">Real-World Scenario</span>
                    <p className="text-xs text-slate-300 leading-5">
                      {currentCard.realWorldExample}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  How well did you know this?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => handleRating("hard")}
                    className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-rose-500/20 border border-rose-500/40 p-3 text-xs font-bold text-rose-300 hover:bg-rose-500/30 transition-all active:scale-95"
                  >
                    <XCircle size={18} />
                    <span>Hard 🔴</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRating("good")}
                    className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-amber-500/20 border border-amber-500/40 p-3 text-xs font-bold text-amber-300 hover:bg-amber-500/30 transition-all active:scale-95"
                  >
                    <AlertCircle size={18} />
                    <span>Good 🟡</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRating("easy")}
                    className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 p-3 text-xs font-bold text-emerald-300 hover:bg-emerald-500/30 transition-all active:scale-95"
                  >
                    <CheckCircle2 size={18} />
                    <span>Easy 🟢</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
