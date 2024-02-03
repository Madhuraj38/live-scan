import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.38016408444609,
    lng: -121.99476708465549,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBwpRl4mubi4uFL0jvUyLT4jyJR6PRjZ_A"
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
