import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FlashcardPracticeView } from "../components/Assessment/FlashcardPracticeView";
import { Flashcard } from "../services/llmService";

describe("FlashcardPracticeView Component", () => {
  const mockCards: Flashcard[] = [
    {
      id: "fc_1",
      conceptId: "c_1",
      title: "Consistent Hashing",
      category: "System Design",
      question: "How does Consistent Hashing minimize key redistribution?",
      explanation: "Keys and nodes are mapped to a 360-degree hash ring.",
      keyTakeaways: ["Virtual nodes even out distribution", "Addition of a node affects 1/N keys"],
      realWorldExample: "Nginx load balancing and DynamoDB partitioning.",
    },
  ];

  it("should render flashcard front side prompt", () => {
    render(
      <FlashcardPracticeView
        topic="System Design"
        cards={mockCards}
        onRateCard={vi.fn()}
        onFinish={vi.fn()}
      />,
    );

    expect(screen.getByText("Consistent Hashing")).toBeTruthy();
    expect(
      screen.getByText("How does Consistent Hashing minimize key redistribution?"),
    ).toBeTruthy();
  });

  it("should flip card to back side and allow rating", () => {
    const handleRateCard = vi.fn();
    render(
      <FlashcardPracticeView
        topic="System Design"
        cards={mockCards}
        onRateCard={handleRateCard}
        onFinish={vi.fn()}
      />,
    );

    const flipContainer = screen.getByText("Flip Card");
    fireEvent.click(flipContainer);

    expect(
      screen.getByText("Keys and nodes are mapped to a 360-degree hash ring."),
    ).toBeTruthy();

    const easyBtn = screen.getByText("Easy 🟢");
    fireEvent.click(easyBtn);

    expect(handleRateCard).toHaveBeenCalledWith(mockCards[0], "easy");
    expect(screen.getByText("Practice Session Completed!")).toBeTruthy();
  });
});
