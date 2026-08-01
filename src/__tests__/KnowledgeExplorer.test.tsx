import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ExpandNodeModal } from "../components/KnowledgeExplorer/ui/ExpandNodeModal";

describe("KnowledgeExplorer Sub-Components Suite", () => {
  it("should render ExpandNodeModal when open is true", () => {
    const onClose = vi.fn();
    const onInputChange = vi.fn();
    const onExpand = vi.fn();

    render(
      <ExpandNodeModal
        expandPrompt={{
          open: true,
          nodeId: "node_1",
          input: "Add practical examples",
          isGenerating: false,
        }}
        nodeLabel="Machine Learning"
        onClose={onClose}
        onInputChange={onInputChange}
        onExpand={onExpand}
      />
    );

    expect(screen.getByText("Expand: Machine Learning")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/practical examples/i)).toHaveValue(
      "Add practical examples",
    );

    const expandBtn = screen.getByRole("button", { name: /expand/i });
    fireEvent.click(expandBtn);
    expect(onExpand).toHaveBeenCalledWith("node_1", "Add practical examples");
  });

  it("should not render ExpandNodeModal when open is false", () => {
    const { container } = render(
      <ExpandNodeModal
        expandPrompt={{
          open: false,
          nodeId: null,
          input: "",
          isGenerating: false,
        }}
        onClose={vi.fn()}
        onInputChange={vi.fn()}
        onExpand={vi.fn()}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
