import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ReassessmentWizard } from "../components/Assessment/ReassessmentWizard";
import { AssessmentStage1Data } from "../services/llmService";

describe("ReassessmentWizard Component", () => {
  const mockStage1: AssessmentStage1Data = {
    topic: "PostgreSQL",
    overview: "Diagnostic evaluation of Postgres databases.",
    concepts: [
      {
        id: "c_1",
        label: "B-Tree Indexes",
        description: "Standard index structure for ordering data.",
        category: "Indexing",
        question: "Do you understand index selectivity?",
        level: 1,
      },
      {
        id: "c_2",
        label: "MVCC Concurrency",
        description: "Multi-version concurrency control.",
        category: "Transactions",
        question: "Do you understand tuple visibility?",
        level: 1,
      },
    ],
  };

  const selfReportAnswers = {
    c_1: "gap" as const,
    c_2: "review" as const,
  };

  it("should render studied concepts checklist in Step 1", () => {
    render(
      <ReassessmentWizard
        stage1Data={mockStage1}
        stage2Data={null}
        selfReportAnswers={selfReportAnswers}
        onChecklistSubmit={vi.fn()}
        onMcqSubmit={vi.fn()}
        isLoading={false}
      />,
    );

    expect(screen.getByText("B-Tree Indexes")).toBeTruthy();
    expect(screen.getByText("MVCC Concurrency")).toBeTruthy();
  });

  it("should select concepts and trigger onChecklistSubmit", () => {
    const handleChecklistSubmit = vi.fn();
    render(
      <ReassessmentWizard
        stage1Data={mockStage1}
        stage2Data={null}
        selfReportAnswers={selfReportAnswers}
        onChecklistSubmit={handleChecklistSubmit}
        onMcqSubmit={vi.fn()}
        isLoading={false}
      />,
    );

    const submitBtn = screen.getByText(/Verify Selected Concepts/i);
    fireEvent.click(submitBtn);

    expect(handleChecklistSubmit).toHaveBeenCalled();
  });
});
