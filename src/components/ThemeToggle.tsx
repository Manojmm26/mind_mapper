import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor, Palette } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close speed dial menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getActiveIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={20} className="text-amber-500 transition-transform duration-300 hover:rotate-45" />;
      case "dark":
        return <Moon size={20} className="text-indigo-400 transition-transform duration-300 hover:-rotate-12" />;
      case "system":
      default:
        return <Monitor size={20} className="text-cyan-500 dark:text-cyan-400 transition-transform duration-300" />;
    }
  };

  const options = [
    {
      id: "light" as const,
      label: "Light Mode",
      icon: <Sun size={18} className="text-amber-500" />,
      activeClass: "bg-amber-100 dark:bg-amber-950/80 ring-2 ring-amber-400 text-amber-600 dark:text-amber-300",
    },
    {
      id: "dark" as const,
      label: "Dark Mode",
      icon: <Moon size={18} className="text-indigo-400" />,
      activeClass: "bg-indigo-950/80 dark:bg-indigo-950 ring-2 ring-indigo-500 text-indigo-300",
    },
    {
      id: "system" as const,
      label: "System Auto",
      icon: <Monitor size={18} className="text-cyan-500 dark:text-cyan-400" />,
      activeClass: "bg-slate-100 dark:bg-slate-800 ring-2 ring-cyan-500 text-slate-900 dark:text-slate-100",
    },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Expanded Speed-Dial Options Container */}
      <div
        className={`mb-3 flex flex-col items-center gap-2.5 transition-smooth duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        {options.map((opt) => {
          const isSelected = theme === opt.id;
          return (
            <div key={opt.id} className="group relative flex items-center">
              {/* Tooltip Label */}
              <span className="absolute right-14 whitespace-nowrap rounded-xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-lg backdrop-blur-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                {opt.label}
              </span>

              {/* Option Circular Button */}
              <button
                type="button"
                onClick={() => {
                  setTheme(opt.id);
                  setIsOpen(false);
                }}
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-lg backdrop-blur-xl transition-smooth duration-200 hover:scale-110 active:scale-95 ${
                  isSelected ? opt.activeClass : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
                aria-label={opt.label}
              >
                {opt.icon}
              </button>
            </div>
          );
        })}
      </div>

      {/* Main Circular Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/90 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 shadow-[0_12px_40px_rgba(15,23,42,0.22)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-smooth duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? "ring-4 ring-cyan-500/30 rotate-90" : "hover:ring-2 hover:ring-cyan-500/20"
        }`}
        title="Toggle Theme"
        aria-label="Toggle Theme Options"
      >
        {getActiveIcon()}
      </button>
    </div>
  );
}
