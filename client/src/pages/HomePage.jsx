export default function HomePage({ health }) {
  return (
    <main className="window">
      <h1>CloudChat 2002</h1>
      <p>Full-stack architecture initialized with modular placeholders.</p>
      <section className="status-panel">
        <h2>Backend Status</h2>
        <p className={`status ${health.status}`}>{health.message}</p>
      </section>
      <section>
        <h2>Systems Stubbed</h2>
        <ul>
          <li>Authentication</li>
          <li>VendZ feed</li>
          <li>AI simulation</li>
          <li>Chat</li>
          <li>Timeline engine</li>
          <li>World event bus</li>
          <li>Multi-site router</li>
        </ul>
      </section>
    </main>
  );
}
