// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, isSmall }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={`search-bar-container ${isSmall ? 'small' : ''}`}>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Job title, keywords, or company, city, state, or zip code"
      />
      <button type="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;