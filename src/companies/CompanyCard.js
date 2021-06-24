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



// function CompanyCard({ name, description, logoUrl, handle }) {
//   return (
//     <Link className="CompanyCard card" to={`/companies/${handle}`}>
//       <div className="card-body">
//         <h5>
//           {name} 
//           {logoUrl && <img src={logoUrl} alt={name} className="float-right ml-5" />}
//         </h5>
//         <p>{description}</p>
//       </div>
//     </Link>
//   );
// }

export default CompanyCard;