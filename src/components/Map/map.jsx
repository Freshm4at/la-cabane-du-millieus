import React from "react";
import GoogleMapReact from 'google-map-react';
import './map.css'


export default function Map(){
  const defaultProps = {
    center: {
      lat: 45.7793031477015,
      lng: -1.1248771891007585
    },
    zoom: 14
  };
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: { lat: 45.7793031477015, lng: -1.1248771891007585 },
    map,
    title: "La Cabane du Mil'lieus"
    });
    return marker;
   };
  return (
    
    // Important! Always set the container height explicitly
    <div classname="google_map" style={{ height: '100vh', width: '100%' }}>
      
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}>
        </GoogleMapReact>
    </div>
  );
}