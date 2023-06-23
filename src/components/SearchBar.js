import React, { useState } from "react";

function SearchBar({ onSort, onFilter }) {
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);
    onSort(selectedSort);
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilterBy(selectedFilter);
    onFilter(selectedFilter);
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filterBy} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
