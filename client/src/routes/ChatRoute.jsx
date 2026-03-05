import { ChatPage } from "../domains/chat/ChatPage";
import { WorldEventsPanel } from "../domains/worldEvents/WorldEventsPanel";

export function ChatRoute() {
  return (
    <>
      <ChatPage />
      <WorldEventsPanel />
    </>
  );
}
