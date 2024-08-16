import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './JobMap.css'; // Make sure to create and link this CSS file

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
    lat: 33.4484,
    lng: -112.0740,
  };  
  
const mapOptions = {
  gestureHandling: 'greedy', // Allows zooming with the scroll wheel without holding Ctrl
};

function JobMap() {
  const [markers, setMarkers] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  useEffect(() => {
    const initialMarkers = [
      { id: 1, position: { lat: 51.5074, lng: -0.1278 }, title: 'Software Engineer', description: 'Tech Company in London', type: 'Tech', location: 'London', experience: 'Mid' },
      { id: 2, position: { lat: 51.5155, lng: -0.0922 }, title: 'Data Scientist', description: 'Financial Institution', type: 'Finance', location: 'London', experience: 'Senior' },
      { id: 3, position: { lat: 51.5096, lng: -0.1182 }, title: 'Project Manager', description: 'Construction Firm', type: 'Construction', location: 'London', experience: 'Junior' },
    ];
    setMarkers(initialMarkers);
  }, []);

  const filteredMarkers = markers.filter(marker => 
    (marker.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    marker.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (jobType ? marker.type === jobType : true) &&
    (location ? marker.location === location : true) &&
    (experienceLevel ? marker.experience === experienceLevel : true)
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleExperienceLevelChange = (e) => {
    setExperienceLevel(e.target.value);
  };

  const handleMarkerClick = (marker) => {
    setSelectedJob(marker);
  };

  const addMarker = (e) => {
    const newMarker = {
      id: markers.length + 1,
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
      title: `Job ${markers.length + 1}`,
      description: `This is a detailed description of job ${markers.length + 1}.`,
      type: 'Unknown',
      location: 'Unknown',
      experience: 'Unknown',
    };
    setMarkers([...markers, newMarker]);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCkN2fLQ3yPYQxed5TxXjoz8GECCf9tnIQ">
      <div className="job-map-container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search jobs by title or description..." 
            value={searchTerm} 
            onChange={handleSearch} 
          />
          <select value={jobType} onChange={handleJobTypeChange}>
            <option value="">All Job Types</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Construction">Construction</option>
          </select>
          <select value={location} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
          </select>
          <select value={experienceLevel} onChange={handleExperienceLevelChange}>
            <option value="">All Experience Levels</option>
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="map-and-listings">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
            options={mapOptions}
            onClick={addMarker}
          >
            {filteredMarkers.map(marker => (
              <Marker
                key={marker.id}
                position={marker.position}
                onClick={() => handleMarkerClick(marker)}
              />
            ))}

            {selectedJob && (
              <InfoWindow
                position={selectedJob.position}
                onCloseClick={() => setSelectedJob(null)}
              >
                <div>
                  <strong>{selectedJob.title}</strong>
                  <p>{selectedJob.description}</p>
                  <p>Type: {selectedJob.type}</p>
                  <p>Location: {selectedJob.location}</p>
                  <p>Experience Level: {selectedJob.experience}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>

          <div className="job-listing-panel">
            <h3>Job Listings</h3>
            {filteredMarkers.length > 0 ? (
              filteredMarkers.map(marker => (
                <div 
                  key={marker.id} 
                  className="job-item"
                  onClick={() => setSelectedJob(marker)}
                >
                  <h4>{marker.title}</h4>
                  <p>{marker.description}</p>
                </div>
              ))
            ) : (
              <p>No jobs match your search criteria.</p>
            )}
          </div>
        </div>
      </div>
    </LoadScript>
  );
}

export default JobMap;
