import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";

/**
 * Renders information about a job 
 * Rendered by JobCardList 
 */

function JobCard({ id, title, salary, equity, companyName }) {

  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
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

  // if (currentUser) {
  return (
    <div> {applied}
      <h3>{title}</h3>
      <p>{companyName}</p>
      {salary && <div>Salary: {formatSalary(salary)}</div>}
      {equity !== undefined && <div>Equity: {equity}</div>}
      <button onClick={handleApply} disabled={applied}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
  // } else {
  //   return (
  //     <div>
  //       <h3>{title}</h3>
  //       <p>{companyName}</p>
  //       {salary && <div>Salary: {formatSalary(salary)}</div>}
  //       {equity !== undefined && <div>Equity: {equity}</div>}
  //       <p>LOG IN TO APPLY</p>
  //     </div>
  //   );
  // }
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