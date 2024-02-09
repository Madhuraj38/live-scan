import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.372910,
    lng: -122.087905,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={18}
        center={defaultCenter}
        options={{
        mapTypeControl: false,
        streetViewControl: false,
        draggable: true, 
        zoomControlOptions: { position: 9 },
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: false, // allow scroll wheel
    }}
      >
        {/* Add a marker for the specific location */}
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
