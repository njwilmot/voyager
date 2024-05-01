import React from 'react';
import './SearchBar.css';  // Ensure you have created this CSS file.

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Job title, keywords, or company, city, state, or zip code" />
      <button type="button">Search</button>
    </div>
  );
}

export default SearchBar;
