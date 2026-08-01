import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SelfReportWizard } from "../components/Assessment/SelfReportWizard";
import { AssessmentStage1Data } from "../services/llmService";

describe("SelfReportWizard Component", () => {
  const mockData: AssessmentStage1Data = {
    topic: "Kubernetes Architecture",
    overview: "Diagnostic self-evaluation of Kubernetes components.",
    concepts: [
      {
        id: "c_1",
        label: "Control Plane",
        description: "Manages worker nodes and pods in the cluster.",
        category: "Architecture",
        question: "Do you understand API Server and etcd?",
        level: 1,
      },
      {
        id: "c_2",
        label: "Kubelet",
        description: "Agent that runs on each node in the cluster.",
        category: "Node Components",
        question: "Do you understand Kubelet pod spec enforcement?",
        level: 1,
      },
    ],
  };

  it("should render topic and first concept question", () => {
    render(<SelfReportWizard data={mockData} onSubmit={vi.fn()} />);

    expect(screen.getByText("Control Plane")).toBeTruthy();
    expect(screen.getByText(/API Server and etcd/i)).toBeTruthy();
  });

  it("should handle self-report button selection and advance to next concept", () => {
    const handleSubmit = vi.fn();
    render(<SelfReportWizard data={mockData} onSubmit={handleSubmit} />);

    const masteredBtn = screen.getByText("I Mastered This");
    fireEvent.click(masteredBtn);

    // Second concept should now be displayed
    expect(screen.getByText("Kubelet")).toBeTruthy();
    expect(screen.getByText(/Kubelet pod spec enforcement/i)).toBeTruthy();

    const reviewBtn = screen.getByText("Needs Review");
    fireEvent.click(reviewBtn);

    // Click Proceed to complete wizard
    const finishBtn = screen.getByText(/Proceed to Phase 2/i);
    fireEvent.click(finishBtn);

    expect(handleSubmit).toHaveBeenCalledWith({
      c_1: "mastered",
      c_2: "review",
    });
  });
});
