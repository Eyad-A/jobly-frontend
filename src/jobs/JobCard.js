import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import "./JobCard.css";

/**
 * Renders information about a job 
 * Rendered by JobCardList 
 */

function JobCard({ id, title, salary, equity, companyName }) {

  const { currentUser, hasAppliedToJob, applyToJob } = useContext(UserContext);
  // const { currentUser } = UserContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(function updateAppliedStatus() {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  if (currentUser) {
    return (
      <div className="JobCard card"> {applied}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{companyName}</p>
          {salary && <div>Salary: {formatSalary(salary)}</div>}
          {equity !== undefined && <div>Equity: {equity}</div>}
          <button className="btn btn-danger font-weight-bold text-uppercase float-right" onClick={handleApply} disabled={applied}>
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="JobCard card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{companyName}</p>
          {salary && <div>Salary: {formatSalary(salary)}</div>}
          {equity !== undefined && <div>Equity: {equity}</div>}
          <p>LOG IN TO APPLY</p>
        </div>
      </div>
    );
  }
}

function formatSalary(salary) {
  const digits = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digits.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digits.push(",");
  }
  return digits.reverse().join("");
}

export default JobCard;