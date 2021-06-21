import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";

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

  // useEffect(() => {
  //   async function getListOfCompanies() {
  //     let res = await JoblyApi.getCompanies();
  //     setCompanies(res);
  //   }
  //   getListOfCompanies();
  // }, []);

  // on search form submit, run this function 
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);    
    setCompanies(companies);
  }

  return (
    <div>
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
  );
}

export default CompanyList;