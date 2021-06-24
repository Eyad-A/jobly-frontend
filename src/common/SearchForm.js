import React, { useState } from "react";
import "./SearchForm.css";

/**
 * Search Form 
 * Allows us to filter company by name 
 */

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle form submission 
  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  // Handle change to form fields 
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchFormInput"
        name="searchTerm"
        placeholder="Filter by keyword"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="SearchFormButton">
        Submit
      </button>
    </form>
  );


}

export default SearchForm;