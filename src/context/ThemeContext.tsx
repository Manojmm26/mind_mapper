import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeContextValue {
  theme: ThemeMode;
  effectiveTheme: "light" | "dark";
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const saved = localStorage.getItem("theme") as ThemeMode | null;
  if (saved && ["light", "dark", "system"].includes(saved)) {
    return saved;
  }
  return "system";
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme);
  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">(() =>
    theme === "system" ? getSystemTheme() : theme
  );

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem("theme", mode);
  };

  const toggleTheme = () => {
    if (effectiveTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        setEffectiveTheme(e.matches ? "dark" : "light");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemChange);

    const calculatedTheme = theme === "system" ? getSystemTheme() : theme;
    setEffectiveTheme(calculatedTheme);

    const root = document.documentElement;
    if (calculatedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
