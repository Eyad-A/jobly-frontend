import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import Search from "../common/SearchForm";
import JobCardList from "./JobCardList";

/**
 * JobList 
 * Shows a list of all the jobs 
 * routed at /jobs 
 */

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobs() {
    Search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div>
      <Search searchFor={search} />
      {jobs.length 
        ? <JobCardList jobs={jobs} />
        : <p>No results found</p>
      }
    </div>
  );
}

export default JobList;