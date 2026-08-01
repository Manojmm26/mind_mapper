import { describe, it, expect } from "vitest";
import {
  validateAssessmentStage1,
  validateAssessmentStage2,
  validateStudyRoadmap,
  validateFlashcardDeck,
} from "../services/llmSchemas";

describe("LLM Schemas & Validators", () => {
  it("should validate a valid Assessment Stage 1 concept tree", () => {
    const rawData = {
      topic: "System Design",
      overview: "Diagnostic evaluation of core system design principles.",
      concepts: [
        {
          id: "c_1",
          label: "Load Balancing",
          description: "Distributes incoming network traffic across multiple servers.",
          category: "Infrastructure",
          question: "Do you understand Round Robin and Consistent Hashing?",
          level: 1,
        },
        {
          id: "c_2",
          label: "Caching Strategies",
          description: "Store data in high-speed memory for faster access.",
          category: "Performance",
          question: "Do you know Write-Through vs Write-Back caching?",
          level: 1,
        },
        {
          id: "c_3",
          label: "Database Sharding",
          description: "Horizontal partitioning of database records across servers.",
          category: "Data Storage",
          question: "Do you understand shard key selection?",
          level: 1,
        },
        {
          id: "c_4",
          label: "Message Queues",
          description: "Asynchronous task processing decoupling microservices.",
          category: "Messaging",
          question: "Do you understand at-least-once delivery semantics?",
          level: 1,
        },
        {
          id: "c_5",
          label: "API Gateway",
          description: "Single entry point for client requests handling auth and rate limiting.",
          category: "Infrastructure",
          question: "Do you understand rate-limiting algorithms like Token Bucket?",
          level: 1,
        },
      ],
    };

    const validated = validateAssessmentStage1(rawData);
    expect(validated.topic).toBe("System Design");
    expect(validated.concepts).toHaveLength(5);
  });

  it("should validate Stage 2 MCQ verification data", () => {
    const rawMcqs = {
      topic: "System Design",
      mcqs: [
        {
          id: "q_1",
          conceptId: "c_1",
          conceptLabel: "Load Balancing",
          question: "Which algorithm guarantees minimal cache invalidation when servers are added?",
          options: [
            "Round Robin",
            "Consistent Hashing",
            "Least Connections",
            "Random Selection",
          ],
          correctIndex: 1,
          explanation: "Consistent Hashing maps both servers and keys to a ring, minimizing key movement.",
        },
      ],
    };

    const validated = validateAssessmentStage2(rawMcqs);
    expect(validated.mcqs).toHaveLength(1);
    expect(validated.mcqs[0].correctIndex).toBe(1);
  });

  it("should validate Flashcard Deck Data", () => {
    const rawDeck = {
      topic: "System Design",
      cards: [
        {
          id: "fc_1",
          conceptId: "c_1",
          title: "Load Balancing",
          category: "Infrastructure",
          question: "How does Consistent Hashing minimize cache churn?",
          explanation: "Consistent Hashing assigns nodes and keys to a 360-degree ring.",
          keyTakeaways: [
            "Use virtual nodes to balance load evenly.",
            "Addition of a node only affects adjacent keys.",
          ],
          realWorldExample: "Nginx or AWS ALB handling microservice traffic.",
        },
      ],
    };

    const validated = validateFlashcardDeck(rawDeck);
    expect(validated.cards).toHaveLength(1);
    expect(validated.cards[0].category).toBe("Infrastructure");
  });

  it("should validate Study Roadmap Action Plan data", () => {
    const rawRoadmap = {
      topic: "System Design",
      overview: "Step-by-step learning path to master distributed systems.",
      totalEstimatedHours: 12,
      milestones: [
        {
          id: "m_1",
          title: "Foundational Load Balancing & Caching",
          description: "Master traffic distribution and fast data retrieval.",
          estimatedHours: 4,
          targetConcepts: ["c_1", "c_2"],
          keyTakeaways: ["Setup Nginx load balancer", "Configure Redis cache"],
          recommendedResources: [
            {
              title: "System Design Primer - Load Balancing",
              type: "article",
              description: "Comprehensive guide to load balancers.",
            },
          ],
          practiceTask: "Build a Node.js proxy server with Round Robin routing.",
        },
        {
          id: "m_2",
          title: "Database Partitioning & Sharding",
          description: "Scale database reads and writes horizontally.",
          estimatedHours: 8,
          targetConcepts: ["c_3"],
          keyTakeaways: ["Shard key selection strategies"],
          recommendedResources: [
            {
              title: "PostgreSQL Database Sharding",
              type: "documentation",
              description: "Official guide to Postgres table partitioning.",
            },
          ],
          practiceTask: "Implement horizontal sharding in PostgreSQL.",
        },
      ],
    };

    const validated = validateStudyRoadmap(rawRoadmap);
    expect(validated.totalEstimatedHours).toBe(12);
    expect(validated.milestones).toHaveLength(2);
  });
});
