import OrganCard from "./OrganCard";
import organs from "../data/organs";

function OrganGrid() {
  return (
    <section id="organs" className="organ-section">
      <h1>Explore Major Human Organs</h1>
      <p>
        Select an organ to discover fascinating facts and learn more about the
        human body.
      </p>

      <div className="organ-grid">
        {organs.map((organ) => (
          <OrganCard
            key={organ.id}
            id={organ.id}
            name={organ.name}
            image={organ.image}
            description={organ.description}
          />
        ))}
      </div>
    </section>
  );
}

export default OrganGrid;