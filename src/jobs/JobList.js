import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../common/SearchForm";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/**
 * JobList 
 * Shows a list of all the jobs 
 * routed at /jobs 
 */

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getAllJobs() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-8">
          <div className="my-3"><h1 className="text-center">Jobs</h1></div>
          <SearchForm searchFor={search} />
          {jobs.length
            ? <JobCardList jobs={jobs} />
            : <p>No results found</p>
          }
        </div>
        <div className="col-lg-2">

        </div>
      </div>
    </div>
  );
}

export default JobList;