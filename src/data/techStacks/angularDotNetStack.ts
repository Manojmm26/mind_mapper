import { TechStackProfile } from "./types";
import {
  ROSETTA_STONE_PARADIGMS,
  SCENARIO_NARRATIVES,
  SQL_PERFORMANCE_RULES,
  FULLSTACK_DOTNET_ANGULAR_MATRIX_EXAMPLE,
} from "../examples/fullStackDotNetAngularMatrix";

export const ANGULAR_DOTNET_STACK: TechStackProfile = {
  id: "angular-dotnet",
  title: "Angular 18+ ↔ .NET 8/9 & SQL Server",
  shortBadge: "🅰️ Angular + 🔷 .NET 8/9",
  description: "Master full-stack enterprise matrix covering Angular 18+ Signals and Standalone Architecture with .NET 8/9, C# 12 Primary Constructors, Channels, and SARGable SQL Server performance tuning.",
  category: "Enterprise Full-Stack",
  frontend: {
    name: "Angular 18+",
    shortName: "Angular",
    iconName: "Cpu",
    themeColor: "red",
    badgeBg: "bg-red-100 dark:bg-red-950/60",
    badgeText: "text-red-700 dark:text-red-300",
    soundbiteTag: "Angular 18+ Architecture"
  },
  backend: {
    name: ".NET 8/9 & C# 12",
    shortName: ".NET 8/9",
    iconName: "Server",
    themeColor: "blue",
    badgeBg: "bg-blue-100 dark:bg-blue-950/60",
    badgeText: "text-blue-700 dark:text-blue-300",
    soundbiteTag: ".NET 8/9 & SQL Server"
  },
  database: {
    name: "SQL Server & EF Core",
    engine: "SQL Server",
    iconName: "Database"
  },
  paradigms: ROSETTA_STONE_PARADIGMS,
  scenarios: SCENARIO_NARRATIVES,
  sqlRules: SQL_PERFORMANCE_RULES,
  comparisonData: FULLSTACK_DOTNET_ANGULAR_MATRIX_EXAMPLE
};
