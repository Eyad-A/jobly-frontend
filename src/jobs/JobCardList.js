import React from "react";
import JobCard from "./JobCard";

/**
 * Renders a list of job cards  * 
 */

function JobCardList({ jobs }) {
  return (
    <div>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
        />
      ))}
    </div>
  );
}

export default JobCardList;