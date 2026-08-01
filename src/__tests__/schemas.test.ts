import { describe, it, expect } from "vitest";
import { validateMindMap } from "../schemas/mindMapSchema";
import { validateComparisonWorkspace, normalizeComparisonData } from "../schemas/comparisonSchema";
import {
  validateAssessmentStage1,
  validateAssessmentStage2,
  validateStudyRoadmap,
  validateFlashcardDeck,
} from "../schemas/assessmentSchema";

describe("Domain Schema Validation Suite", () => {
  it("should validate and sanitize valid MindMapData", () => {
    const rawData = {
      topic: "Artificial Intelligence",
      overview: "Overview of AI principles.",
      nodes: [
        { id: "root", label: "AI", description: "Root topic node." },
        { id: "node_1", label: "Machine Learning", description: "Sub-topic node." },
      ],
      edges: [{ source: "root", target: "node_1", label: "includes" }],
    };

    const validated = validateMindMap(rawData);
    expect(validated.topic).toBe("Artificial Intelligence");
    expect(validated.nodes.length).toBe(2);
    expect(validated.edges.length).toBe(1);
  });

  it("should handle partial raw data gracefully in validateMindMap", () => {
    const partialData = {
      topic: "Partial Map",
      nodes: [{ id: "n1", label: "Concept" }], // Missing description
    };

    const validated = validateMindMap(partialData);
    expect(validated.topic).toBe("Partial Map");
    expect(validated.nodes[0].description).toBe("No description provided.");
  });

  it("should validate and normalize ComparisonWorkspaceData", () => {
    const rawData = {
      topic: "Database Engines",
      overview: "PostgreSQL vs MongoDB",
      domainType: "tools" as const,
      criteria: [{ id: "c1", label: "ACID Compliance" }],
      options: [
        {
          id: "opt_1",
          label: "PostgreSQL",
          description: "Relational DB",
          scores: [{ criterionId: "c1", displayValue: "Yes", numericRating: 5 }],
        },
      ],
    };

    const validated = validateComparisonWorkspace(rawData);
    const normalized = normalizeComparisonData(validated);
    expect(normalized.topic).toBe("Database Engines");
    expect(normalized.domainType).toBe("tools");
    expect(normalized.options[0].scores[0].displayValue).toBe("Yes");
  });

  it("should validate Assessment Stage 1 concept decomposition schema", () => {
    const stage1Data = {
      topic: "System Design",
      overview: "Scalability and Architecture",
      concepts: [
        {
          id: "concept_1",
          label: "Load Balancing",
          category: "Infrastructure",
          description: "Distributing traffic across servers.",
          question: "Can you explain round-robin load balancing?",
          level: 1,
        },
        {
          id: "concept_2",
          label: "Caching",
          category: "Performance",
          description: "Storing frequent data in memory.",
          question: "Do you know cache invalidation strategies?",
          level: 2,
        },
        {
          id: "concept_3",
          label: "Database Sharding",
          category: "Storage",
          description: "Horizontal partitioning.",
          question: "Can you partition a database table?",
          level: 2,
        },
      ],
    };

    const validated = validateAssessmentStage1(stage1Data);
    expect(validated.concepts.length).toBe(3);
    expect(validated.concepts[0].label).toBe("Load Balancing");
  });

  it("should validate Assessment Stage 2 MCQ verification schema", () => {
    const stage2Data = {
      topic: "System Design",
      mcqs: [
        {
          id: "mcq_1",
          conceptId: "concept_1",
          question: "What is the primary benefit of a load balancer?",
          options: [
            "Distributes incoming network traffic",
            "Encrypts data at rest",
            "Compiles C++ code",
            "Formats JSON responses",
          ],
          correctIndex: 0,
          explanation: "Load balancers distribute traffic across servers.",
        },
      ],
    };

    const validated = validateAssessmentStage2(stage2Data);
    expect(validated.mcqs.length).toBe(1);
    expect(validated.mcqs[0].correctIndex).toBe(0);
  });

  it("should validate Study Roadmap and Flashcard Deck schemas", () => {
    const roadmap = validateStudyRoadmap({
      topic: "DevOps",
      overview: "CI/CD & Kubernetes",
      milestones: [
        {
          id: "m1",
          title: "Containers",
          estimatedHours: 4,
          targetConceptIds: ["c1"],
          keyTakeaways: ["Docker images"],
          recommendedActions: ["Build a Dockerfile"],
        },
      ],
    });
    expect(roadmap.milestones[0].estimatedHours).toBe(4);

    const flashcards = validateFlashcardDeck({
      topic: "DevOps",
      cards: [
        {
          id: "card_1",
          conceptId: "c1",
          front: "What is Docker?",
          back: "A containerization platform.",
        },
      ],
    });
    expect(flashcards.cards.length).toBe(1);
  });
});
