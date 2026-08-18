import { TechStackProfile } from "./types";
import { ANGULAR_DOTNET_STACK } from "./angularDotNetStack";
import { ANGULAR_JAVA_SPRING_STACK } from "./angularJavaSpringStack";
import { REACT_NODE_STACK } from "./reactNodeStack";

export * from "./types";
export * from "./angularDotNetStack";
export * from "./angularJavaSpringStack";
export * from "./reactNodeStack";

const CUSTOM_STACKS_STORAGE_KEY = "INTERVIEW_STUDIO_CUSTOM_STACKS_V1";

export const BUILTIN_TECH_STACKS: TechStackProfile[] = [
  ANGULAR_DOTNET_STACK,
  ANGULAR_JAVA_SPRING_STACK,
  REACT_NODE_STACK,
];

export function getCustomTechStacks(): TechStackProfile[] {
  try {
    const raw = localStorage.getItem(CUSTOM_STACKS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.warn("Failed to read custom tech stacks from localStorage", err);
    return [];
  }
}

export function saveCustomTechStack(profile: TechStackProfile): void {
  try {
    const existing = getCustomTechStacks().filter((s) => s.id !== profile.id);
    const updated = [profile, ...existing];
    localStorage.setItem(CUSTOM_STACKS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to save custom tech stack to localStorage", err);
  }
}

export function deleteCustomTechStack(id: string): void {
  try {
    const existing = getCustomTechStacks().filter((s) => s.id !== id);
    localStorage.setItem(CUSTOM_STACKS_STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error("Failed to delete custom tech stack", err);
  }
}

export function getAllTechStacks(): TechStackProfile[] {
  const custom = getCustomTechStacks();
  return [...BUILTIN_TECH_STACKS, ...custom];
}

export function getTechStackById(id: string): TechStackProfile {
  const all = getAllTechStacks();
  return all.find((s) => s.id === id) || ANGULAR_DOTNET_STACK;
}
