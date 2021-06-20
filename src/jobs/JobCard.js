import React, {useState} from "react";

/**
 * Renders information about a job 
 * Rendered by JobCardList 
 */

function JobCard({ id, title, salary, equity, companyName }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{companyName}</p> 
            <p>{salary} - {equity}</p>
        </div>
    );
}

export default JobCard;