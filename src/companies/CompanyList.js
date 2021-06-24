import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";

/**
 * Company List 
 * Shows a page with a list of all companies 
 * routed at /companies 
 */

function CompanyList() {
  console.debug("CompanyList");
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
    console.debug("getCompaniesOnMount");
    search();
  }, []);

  // on search form submit, run this function 
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-8">
          <div className="my-3"><h1 className="text-center">Companies</h1></div>
          <SearchForm searchFor={search} />
          {companies.length
            ? (
              <div>
                {companies.map(c => (
                  <CompanyCard
                    key={c.handle}
                    handle={c.handle}
                    name={c.name}
                    description={c.description}
                    logoUrl={c.logoUrl}
                  />
                ))}
              </div>
            ) : (
              <p>No results matching your search</p>
            )}
        </div>
        <div className="col-lg-2">

        </div>
      </div>
    </div>
  );
}

export default CompanyList;