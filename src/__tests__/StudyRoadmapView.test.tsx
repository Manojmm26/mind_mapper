import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StudyRoadmapView } from "../components/Assessment/StudyRoadmapView";
import { StudyRoadmapData } from "../services/llmService";

describe("StudyRoadmapView Component", () => {
  const mockRoadmap: StudyRoadmapData = {
    topic: "System Design",
    overview: "Tailored action plan for mastering scalable architectures.",
    totalEstimatedHours: 10,
    milestones: [
      {
        id: "m_1",
        title: "Load Balancing & Caching",
        description: "Master distribution and high-speed data retrieval.",
        estimatedHours: 4,
        targetConcepts: ["c_1"],
        keyTakeaways: ["Consistent Hashing", "Redis caching"],
        recommendedResources: [
          {
            title: "System Design Primer",
            type: "article",
            description: "Complete guide to distributed systems.",
          },
        ],
        practiceTask: "Build a Node.js proxy server with Round Robin load balancing.",
      },
    ],
  };

  it("should render roadmap overview, hours badge, milestones, and practice tasks", () => {
    render(<StudyRoadmapView roadmap={mockRoadmap} />);

    expect(screen.getByText("System Design")).toBeTruthy();
    expect(screen.getByText(/Estimated Total Study Time:/i)).toBeTruthy();
    expect(screen.getByText("Load Balancing & Caching")).toBeTruthy();
    expect(screen.getByText("System Design Primer")).toBeTruthy();
    expect(screen.getByText(/Build a Node\.js proxy server/i)).toBeTruthy();
  });
});
