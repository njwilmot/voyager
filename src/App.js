import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './components/SearchContext';
import Header from './components/Header';
// import SearchBar from './components/SearchBar'; If not needed globally, remove this import
import JobList from './components/JobList';
import JobMap from './components/JobMap';
import './App.css';

function App() {
  return (
      <SearchProvider>
          <Router>
              <div>
                  <Header /> {/* Ensure Header itself does not also include <SearchBar /> */}
                  <Routes>
                      <Route path="/" element={<JobList />} />
                      <Route path="/map" element={<JobMap />} /> {/* Ensure JobMap is used if imported */}
                  </Routes>
              </div>
          </Router>
      </SearchProvider>
  );
}


export default App;
