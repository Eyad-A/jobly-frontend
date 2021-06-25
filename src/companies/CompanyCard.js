import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**
 * Company Card 
 * Shows information about a company 
 */

 function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h5>
          <Link to={`/companies/${handle}`}>
          {name} 
          </Link>
          {logoUrl && <img src={logoUrl} alt={name} className="float-right ml-5" />}
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CompanyCard;