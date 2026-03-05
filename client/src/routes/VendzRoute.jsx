import { VendzPage } from "../domains/vendz/VendzPage";
import { TimelinePanel } from "../domains/timeline/TimelinePanel";

export function VendzRoute() {
  return (
    <>
      <VendzPage />
      <TimelinePanel />
    </>
  );
}
