import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DiagnosticReportView } from "../components/Assessment/DiagnosticReportView";
import { AssessmentStage1Data } from "../services/llmService";

describe("DiagnosticReportView Component", () => {
  const mockStage1: AssessmentStage1Data = {
    topic: "Docker",
    overview: "Diagnostic evaluation of containerization.",
    concepts: [
      {
        id: "c_1",
        label: "Dockerfiles",
        description: "Script containing commands to assemble an image.",
        category: "Build",
        question: "Do you understand multi-stage builds?",
        level: 1,
      },
      {
        id: "c_2",
        label: "Container Networking",
        description: "Driver interfaces for container communication.",
        category: "Networking",
        question: "Do you understand bridge vs host networks?",
        level: 1,
      },
    ],
  };

  const selfReportAnswers = {
    c_1: "mastered" as const,
    c_2: "review" as const,
  };

  it("should calculate and display diagnostic score and category bars", () => {
    render(
      <DiagnosticReportView
        stage1Data={mockStage1}
        stage2Data={null}
        selfReportAnswers={selfReportAnswers}
        mcqAnswers={{}}
        onViewMap={vi.fn()}
        onGenerateRoadmap={vi.fn()}
      />,
    );

    expect(screen.getByText("Docker")).toBeTruthy();
    expect(screen.getByText("Detailed Diagnostic Breakdown")).toBeTruthy();
    expect(screen.getByText("Dockerfiles")).toBeTruthy();
    expect(screen.getByText("Container Networking")).toBeTruthy();
  });

  it("should trigger callback handlers on action button clicks", () => {
    const handleViewMap = vi.fn();
    const handleGenerateRoadmap = vi.fn();
    const handleStartFlashcards = vi.fn();
    const handleStartReassessment = vi.fn();
    const handleExportReport = vi.fn();

    render(
      <DiagnosticReportView
        stage1Data={mockStage1}
        stage2Data={null}
        selfReportAnswers={selfReportAnswers}
        mcqAnswers={{}}
        onViewMap={handleViewMap}
        onGenerateRoadmap={handleGenerateRoadmap}
        onStartFlashcards={handleStartFlashcards}
        onStartReassessment={handleStartReassessment}
        onExportReport={handleExportReport}
      />,
    );

    fireEvent.click(screen.getByText("Explore Color-Coded Map"));
    expect(handleViewMap).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Generate Tailored Action Plan"));
    expect(handleGenerateRoadmap).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Practice Flashcards"));
    expect(handleStartFlashcards).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Re-Assess Knowledge"));
    expect(handleStartReassessment).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Export Report"));
    expect(handleExportReport).toHaveBeenCalledTimes(1);
  });
});
