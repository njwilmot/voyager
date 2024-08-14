// SearchResults.js
import React from 'react';
import './SearchResults.css';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {results.map((job, index) => (
        <div key={index} className="job-item">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;