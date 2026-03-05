import { posts } from "./mockData";

export function VendzPage() {
  return (
    <section>
      <h1>VendZ Feed</h1>
      {posts.map((post) => (
        <article className="card" key={post.id}>
          <strong>{post.author}</strong>
          <p>{post.content}</p>
          <small>{post.likes} likes · {post.comments} comments</small>
        </article>
      ))}
    </section>
  );
}
