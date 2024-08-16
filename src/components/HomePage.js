import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import './HomePage.css';
import Trending from './Trending';

function HomePage() {
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setHasSearched(true);
    navigate(`/jobs?search=${encodeURIComponent(term)}`); // Navigate to map with search term
  };

  useEffect(() => {
    const initialResults = [
      { title: "Software Engineer", company: "Tech Co", location: "San Francisco, CA", price: "$120,000/year" },
      { title: "Data Analyst", company: "Data Corp", location: "New York, NY", price: "$95,000/year" },
      { title: "Product Manager", company: "Retail Inc", location: "Los Angeles, CA", price: "$130,000/year" },
      { title: "Graphic Designer", company: "Design Studio", location: "Chicago, IL", price: "$85,000/year" },
      { title: "Sales Associate", company: "SalesForce", location: "Miami, FL", price: "$75,000/year" },
    ];
    setSearchResults(initialResults);
  }, []);

  return (
    <div className="home-page">
      <h1>Find Your Next Career Opportunity</h1>
      <div className="content-wrapper">
        <SearchBar onSearch={handleSearch} /> {/* Pass the handleSearch function */}
        <section className="trending-jobs">
          <Trending />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
