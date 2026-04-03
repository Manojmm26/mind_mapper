import { PRETEXT_THEME_ACCENTS, type PretextThemeFamily } from "../../services/pretextMapLayout";

export const THEME_FAMILIES = [
  "blue",
  "green",
  "amber",
  "purple",
  "teal",
  "pink",
  "orange",
  "red",
] as const;

export const ANIMATION_DURATION = {
  fast: 300,
  normal: 600,
  slow: 900,
} as const;

export const LERP_FACTORS = {
  default: 0.12,
  tunnel: 0.08,
} as const;

export const PARALLAX_SMOOTHING = 0.06;

export const NODE_SPACING = {
  childGap: 40,
  siblingGap: 260,
  ancestorOffset: 200,
  parentOffsetY: 140,
  childOffsetY: 160,
} as const;

export const TUNNEL_CONFIG = {
  ringRadiusX: 280,
  ringRadiusY: 160,
  baseY: 180,
  parentOffsetY: 200,
  ancestorOffsetY: 320,
  ancestorStepY: 120,
} as const;

export const VIEWPORT = {
  minScale: 0.2,
  maxScale: 3,
  fitPadding: 96,
  gridSpacing: 72,
} as const;

export const PERFORMANCE = {
  viewportMargin: 200,
  maxTrailLength: 12,
  maxRecentlyViewed: 8,
  maxUndoStack: 20,
  maxSearchResults: 12,
} as const;

export const COLORS = {
  background: {
    center: "#1e293b",
    edge: "#0f172a",
  },
  grid: "rgba(148,163,184,0.12)",
  root: {
    accent: "#38bdf8",
    surface: "#0f172a",
    header: "#111827",
    title: "#f8fafc",
    body: "rgba(226,232,240,0.94)",
  },
} as const;

export const KEYBOARD_SHORTCUTS = {
  atlas: "1",
  tunnel: "2",
  overview: "3",
  edit: "e",
  collect: "c",
  addChild: "n",
  search: "/",
  details: "d",
  stats: "s",
  story: "t",
  focus: "x",
  presentation: "p",
  compare: "b",
  minimap: "m",
  help: "?",
  undo: "z",
  redo: "shift+z",
  delete: "Delete",
  escape: "Escape",
} as const;

export const STORAGE_KEYS = {
  onboarding: "ke_onboarding_seen",
} as const;
