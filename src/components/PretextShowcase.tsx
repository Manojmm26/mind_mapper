import { KnowledgeExplorer } from "./KnowledgeExplorer";
import { PRETEXT_PORTFOLIO_MAP } from "../pretextPortfolioMap";

interface PretextShowcaseProps {
  onExit?: () => void;
}

export function PretextShowcase({ onExit }: PretextShowcaseProps) {
  return (
    <KnowledgeExplorer initialData={PRETEXT_PORTFOLIO_MAP} onExit={onExit} />
  );
}
