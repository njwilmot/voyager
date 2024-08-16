import React, { useState } from 'react';

function SearchFilters({ onFilterChange }) {
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      jobType,
      location,
      salaryRange,
    });
  };

  return (
    <div className="search-filters">
      <select value={jobType} onChange={(e) => { setJobType(e.target.value); handleFilterChange(); }}>
        <option value="">All Job Types</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Construction">Construction</option>
        {/* Add more job types as needed */}
      </select>

      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={(e) => { setLocation(e.target.value); handleFilterChange(); }} 
      />

      <input 
        type="number" 
        placeholder="Max Salary" 
        value={salaryRange} 
        onChange={(e) => { setSalaryRange(e.target.value); handleFilterChange(); }} 
      />
    </div>
  );
}

export default SearchFilters;
