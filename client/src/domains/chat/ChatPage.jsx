import { threads } from "./mockData";

export function ChatPage() {
  return (
    <section>
      <h1>Chat Threads</h1>
      {threads.map((thread) => (
        <article className="card" key={thread.id}>
          <strong>{thread.title}</strong>
          <p>{thread.lastMessage}</p>
          <small>{thread.updatedAt}</small>
        </article>
      ))}
    </section>
  );
}
