import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { McqVerificationWizard } from "../components/Assessment/McqVerificationWizard";
import { AssessmentStage2Data } from "../services/llmService";

describe("McqVerificationWizard Component", () => {
  const mockStage2: AssessmentStage2Data = {
    topic: "Docker",
    mcqs: [
      {
        id: "q_1",
        conceptId: "c_1",
        conceptLabel: "Dockerfiles",
        question: "Which instruction specifies the base image?",
        options: ["RUN", "FROM", "CMD", "COPY"],
        correctIndex: 1,
        explanation: "FROM sets the base image for subsequent instructions.",
      },
      {
        id: "q_2",
        conceptId: "c_2",
        conceptLabel: "Container Networking",
        question: "Which network driver is the default for standalone containers?",
        options: ["host", "bridge", "overlay", "macvlan"],
        correctIndex: 1,
        explanation: "Bridge is the default network driver when no network is specified.",
      },
    ],
  };

  it("should render question prompt and options", () => {
    render(<McqVerificationWizard data={mockStage2} onSubmit={vi.fn()} />);

    expect(screen.getByText("Dockerfiles")).toBeTruthy();
    expect(screen.getByText("Which instruction specifies the base image?")).toBeTruthy();
    expect(screen.getByText("FROM")).toBeTruthy();
  });

  it("should select option, proceed to next question, and submit answers", () => {
    const handleSubmit = vi.fn();
    render(<McqVerificationWizard data={mockStage2} onSubmit={handleSubmit} />);

    // Select FROM option for Q1
    fireEvent.click(screen.getByText("FROM"));
    fireEvent.click(screen.getByText(/Next Question/i));

    // Q2 should now be visible
    expect(screen.getByText("Container Networking")).toBeTruthy();
    expect(
      screen.getByText("Which network driver is the default for standalone containers?"),
    ).toBeTruthy();

    // Select bridge option for Q2
    fireEvent.click(screen.getByText("bridge"));
    fireEvent.click(screen.getByText(/Generate Diagnostic Report/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      q_1: 1,
      q_2: 1,
    });
  });
});
