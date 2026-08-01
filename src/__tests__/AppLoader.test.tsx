import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppLoader } from "../components/common/AppLoader";

describe("AppLoader Component Suite", () => {
  it("renders with default message and overlay variant", () => {
    render(<AppLoader message="Generating Diagnostic Assessment..." />);
    expect(screen.getByText("Generating Diagnostic Assessment...")).toBeInTheDocument();
    expect(screen.getByText("AI Thinking Engine")).toBeInTheDocument();
  });

  it("renders inline variant correctly", () => {
    render(<AppLoader variant="inline" message="Syncing Knowledge Base..." />);
    expect(screen.getByText("Syncing Knowledge Base...")).toBeInTheDocument();
  });

  it("renders card variant with subtitle and cancel button", () => {
    const handleCancel = () => {};
    render(
      <AppLoader
        variant="card"
        message="Expanding Node..."
        subtitle="AI is generating child nodes..."
        onCancel={handleCancel}
      />
    );
    expect(screen.getByText("Expanding Node...")).toBeInTheDocument();
    expect(screen.getByText("AI is generating child nodes...")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });
});
