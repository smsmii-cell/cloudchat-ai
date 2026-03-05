import { useParams } from "react-router-dom";
import { sites } from "./mockData";

export function SitePage() {
  const { siteId } = useParams();
  const site = sites.find((entry) => entry.id === siteId);

  if (!site) {
    return <p>Site not found.</p>;
  }

  return (
    <section>
      <h1>{site.name}</h1>
      <p>{site.description}</p>
      <div className="card">
        <strong>Sections</strong>
        <ul>
          {site.sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
