import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';  // Make sure to import the SearchBar
import JobList from './components/JobList';
import JobMap from './components/JobMap';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <SearchBar />  {/* Add the SearchBar component here */}
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/map" element={<JobMap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
