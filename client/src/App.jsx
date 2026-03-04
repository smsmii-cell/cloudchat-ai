import { useEffect, useState } from "react";
import TimelineBar from "./components/TimelineBar";
import HomePage from "./pages/HomePage";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function App() {
  const [health, setHealth] = useState({ status: "loading", message: "Connecting..." });
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    async function loadHealth() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/health`, {
          credentials: "include"
        });
        const payload = await response.json();
        setHealth({ status: "ok", message: payload.message });
        setTimeline(payload.timeline);
      } catch (error) {
        setHealth({ status: "error", message: "Unable to reach backend server." });
      }
    }

    loadHealth();
  }, []);

  return (
    <div className="app-shell">
      <TimelineBar timeline={timeline} />
      <HomePage health={health} />
    </div>
  );
}
