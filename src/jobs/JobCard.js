import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";

/**
 * Renders information about a job 
 * Rendered by JobCardList 
 */

function JobCard({ id, title, salary, equity, companyName }) {

  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{companyName}</p>
        <p>{salary} - {equity}</p>
        <h3>YOU CAN APPLY</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{title}</h3>
        <p>{companyName}</p>
        <p>{salary} - {equity}</p>
        <h3>LOG IN TO APPLY</h3>
      </div>
    );
  }
}

export default JobCard;