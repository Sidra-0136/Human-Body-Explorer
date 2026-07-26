import "../styles/organDetails.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import organs from "../data/organs";

function OrganDetails() {
  const { id } = useParams();

const [organ, setOrgan] = useState(null);

useEffect(() => {
  const selectedOrgan = organs.find(
    (item) => item.id === Number(id)
  );

  setOrgan(selectedOrgan);
}, [id]);

if (!organ) {
  return <h1>Loading...</h1>;
}

  return (
    <div className="details-page">
      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

      <div className="details-container">
        <div className="image-section">
          <img src={organ.image} alt={organ.name} />
        </div>

        <div className="info-card">
          <h1>{organ.name}</h1>

          <div className="info-item">
            <h3>Description</h3>
            <p>{organ.description}</p>
          </div>

          <div className="info-item">
            <h3>Function</h3>
            <p>{organ.function}</p>
          </div>

          <div className="info-item">
            <h3>Location</h3>
            <p>{organ.location}</p>
          </div>

          <div className="info-item">
            <h3>Parts</h3>
            <ul>
              {organ.parts.map((part, index) => (
                <li key={index}>{part}</li>
              ))}
            </ul>
          </div>

          <div className="info-item">
            <h3>Common Diseases</h3>
            <ul>
              {organ.diseases.map((disease, index) => (
                <li key={index}>{disease}</li>
              ))}
            </ul>
          </div>

          <div className="info-item">
            <h3>Interesting Fact</h3>
            <p>{organ.fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganDetails;