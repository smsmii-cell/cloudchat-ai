export default function TimelineBar({ timeline }) {
  const label = timeline
    ? `Day ${timeline.day} — ${timeline.dateLabel}, 2002 — ${timeline.timeLabel}`
    : "Day ? — --- --, 2002 — --:--";

  return (
    <header className="timeline-bar">
      <strong>{label}</strong>
    </header>
  );
}
