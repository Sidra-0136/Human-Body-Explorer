import { Link } from "react-router-dom";
import "../styles/cards.css";

function OrganCard({ id, name, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="organ-image" />
      <h2>{name}</h2>
      <p>{description}</p>

      <Link to={`/organ/${id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default OrganCard;