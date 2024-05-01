import React from 'react';
import Map from './Map'; // Assuming you have a Map component
import JobListing from './JobListing'; // Component to display job listings

function SearchResults({ jobs, location }) {
    return (
        <div className="search-results">
            <Map location={location} jobs={jobs} />
            <div className="job-listings">
                {jobs.map(job => (
                    <JobListing key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
