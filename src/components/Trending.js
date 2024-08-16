import React, { useEffect, useState, useRef } from 'react';
import './Trending.css';

function Trending() {
  const [jobs, setJobs] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Example job data; in a real scenario, you might fetch this data from an API
    const jobData = [
      { title: "Software Engineer", company: "Tech Co", location: "San Francisco, CA", price: "$120,000/year", image: "/images/job1.png" },
      { title: "Data Analyst", company: "Data Corp", location: "New York, NY", price: "$95,000/year", image: "/images/job2.png" },
      { title: "Product Manager", company: "Retail Inc", location: "Los Angeles, CA", price: "$130,000/year", image: "/images/job3.png" },
      { title: "Graphic Designer", company: "Design Studio", location: "Chicago, IL", price: "$85,000/year", image: "/images/job4.png" },
      { title: "Sales Associate", company: "SalesForce", location: "Miami, FL", price: "$75,000/year", image: "/images/job5.png" },
    ];
    setJobs(jobData);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="trending-container">
      <h2>Trending Jobs</h2>
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>&#8249;</button>
        <button onClick={scrollRight}>&#8250;</button>
      </div>
      <div className="trending-job-list" ref={scrollRef}>
        {jobs.map((job, index) => (
          <div key={index} className="trending-job-card">
            <div className="job-image">
              <img src={job.image} alt={`${job.title}`} />
            </div>
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
