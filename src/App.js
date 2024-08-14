import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';  // We'll create this
import JobList from './components/JobList';
import JobMap from './components/JobMap';
import JobDetails from './components/JobDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/map" element={<JobMap />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
