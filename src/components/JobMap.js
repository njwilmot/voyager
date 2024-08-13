import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './JobMap.css'; // Add a CSS file to style the component

function JobMap() {
    // State to store markers
    const [markers, setMarkers] = useState([]);

    // Function to add a marker on map click
    const addMarker = (e) => {
        const newMarker = {
            id: markers.length + 1,
            position: [e.latlng.lat, e.latlng.lng],
            title: `Job ${markers.length + 1}`
        };
        setMarkers([...markers, newMarker]);
    };

    // Reset map state on component mount
    useEffect(() => {
        setMarkers([]);  // Clear markers or reset any other state
    }, []);

    return (
        <div className="job-map-container">
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                className="map-container" // Apply custom CSS class for the map
                onClick={addMarker} // Add marker on map click
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map(marker => (
                    <Marker key={marker.id} position={marker.position}>
                        <Popup>{marker.title}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default JobMap;
