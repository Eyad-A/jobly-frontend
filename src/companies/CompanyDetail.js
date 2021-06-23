import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import { useParams } from "react-router-dom";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/**
 * Company Detail 
 * Will list details of one company 
 * Routed at /companies/:handle 
 */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState([]);

  useEffect(function getCompanyAndJobs() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }
    getCompany();    
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
    <div>
      <h1>{company.name}</h1>
      <h4>{company.description}</h4>
      <JobCardList jobs={company.jobs} />      
    </div>
  );
}

export default CompanyDetail;