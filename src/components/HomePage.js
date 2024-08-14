// HomePage.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './HomePage.css';

function HomePage() {
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // In a real app, you'd fetch results from an API here
    const mockResults = [
      { title: "Software Engineer", company: "Tech Co", location: "San Francisco, CA" },
      { title: "Data Analyst", company: "Data Corp", location: "New York, NY" },
      // Add more mock results as needed
    ];
    setSearchResults(mockResults);
    setHasSearched(true);
  };

  return (
    <div className={`home-page ${hasSearched ? 'searched' : ''}`}>
      {!hasSearched && <h1>Find Your Next Career Opportunity</h1>}
      <div className="content-wrapper">
        <div className="main-content">
          <SearchBar onSearch={handleSearch} isSmall={hasSearched} />
          {!hasSearched && (
            <section className="trending-jobs">
              <h2>Trending Jobs</h2>
              {/* Add trending jobs content here */}
            </section>
          )}
        </div>
        {hasSearched && (
          <div className="results-sidebar">
            <SearchResults results={searchResults} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;