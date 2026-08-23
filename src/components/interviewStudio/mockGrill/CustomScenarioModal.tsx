import React from "react";
import { PlusCircle, X } from "lucide-react";

interface CustomScenarioModalProps {
  customTitle: string;
  onCustomTitleChange: (value: string) => void;
  customContext: string;
  onCustomContextChange: (value: string) => void;
  customArchetype: string;
  onCustomArchetypeChange: (value: string) => void;
  archetypes: string[];
  onClose: () => void;
  onSave: () => void;
}

export function CustomScenarioModal({
  customTitle,
  onCustomTitleChange,
  customContext,
  onCustomContextChange,
  customArchetype,
  onCustomArchetypeChange,
  archetypes,
  onClose,
  onSave,
}: CustomScenarioModalProps) {
  const selectableArchetypes = archetypes.reduce<string[]>((acc, a) => {
    if (a !== "All") {
      acc.push(a);
    }
    return acc;
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
            <PlusCircle size={16} className="text-purple-600" />
            Add Custom War Story / Architecture
          </h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Scenario Title
            </label>
            <input
              type="text"
              placeholder="e.g. Migrating 2TB SQL Server to Distributed Kafka Event Sourcing"
              value={customTitle}
              onChange={(e) => onCustomTitleChange(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-3 font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Archetype Category
            </label>
            <select
              value={customArchetype}
              onChange={(e) => onCustomArchetypeChange(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2.5 font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              {selectableArchetypes.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Incident Background / Technical Architecture Context
            </label>
            <textarea
              rows={4}
              placeholder="Describe the scale, failure symptoms, technologies involved (.NET, Angular, SQL), root cause, and how you engineered the solution..."
              value={customContext}
              onChange={(e) => onCustomContextChange(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-3 font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 leading-relaxed"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-xs font-bold shadow-md transition-smooth"
          >
            Create & Start Interrogation
          </button>
        </div>
      </div>
    </div>
  );
}
