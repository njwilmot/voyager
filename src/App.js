import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';  // Make sure to import the SearchBar
import JobList from './components/JobList';
import JobMap from './components/JobMap';
import './App.css';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<SearchBar />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/map" element={<JobMap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
