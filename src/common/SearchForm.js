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
    <div className="SearchForm mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg flex-grow-1"
          name="searchTerm"
          placeholder="Filter by keyword"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-lg btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchForm;