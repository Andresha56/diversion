import { ActionCards } from "../User/ActionCards";
import { StatsSection } from "../User/StatsSection";

export const Home = () => {
  return (
    <div className="flex gap-8">
      <StatsSection />
      <ActionCards />
    </div>
  );
};
