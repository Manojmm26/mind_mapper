import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { ThemeToggle } from "../components/ThemeToggle";

function TestConsumer() {
  const { theme, effectiveTheme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="effective">{effectiveTheme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

describe("ThemeContext & Dark Theme Suite", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should initialize with default system theme mode", () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme").textContent).toBe("system");
  });

  it("should allow switching theme modes via ThemeToggle", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
        <TestConsumer />
      </ThemeProvider>
    );

    const darkBtn = screen.getByRole("button", { name: /dark mode/i });
    fireEvent.click(darkBtn);

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    const lightBtn = screen.getByRole("button", { name: /light mode/i });
    fireEvent.click(lightBtn);

    expect(screen.getByTestId("theme").textContent).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
