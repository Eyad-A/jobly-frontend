import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import { useParams } from "react-router-dom";

/**
 * Company Detail 
 * Will list details of one company 
 * Routed at /companies/:handle 
 */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function getCompanyDetail() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }
    getCompany();
  }, [handle]);

  return (
    <div>
      <h1>{company.name}</h1>
      <h4>{company.description}</h4>
    </div>
  );
}

export default CompanyDetail;