import {
  RosettaParadigm,
  ScenarioNarrative,
  SqlRule,
} from "../examples/fullStackDotNetAngularMatrix";
import { ComparisonWorkspaceData } from "../../services/llmService";

export interface TechStackFrameworkMeta {
  name: string;
  shortName: string;
  iconName: string;
  themeColor: string; // e.g. 'red', 'blue', 'amber', 'emerald', 'purple'
  badgeBg: string;
  badgeText: string;
  soundbiteTag: string;
}

export interface TechStackProfile {
  id: string;
  title: string;
  shortBadge: string;
  description: string;
  category:
    | "Enterprise Full-Stack"
    | "Cloud Native"
    | "Microservices & Distributed"
    | "Custom AI-Generated";
  frontend: TechStackFrameworkMeta;
  backend: TechStackFrameworkMeta;
  database: {
    name: string;
    engine: "SQL Server" | "PostgreSQL" | "MySQL" | "MongoDB" | "Distributed DB";
    iconName: string;
  };
  paradigms: RosettaParadigm[];
  scenarios: ScenarioNarrative[];
  sqlRules: SqlRule[];
  comparisonData: ComparisonWorkspaceData;
  isCustom?: boolean;
}
