import React from "react";
import GoogleMapReact from 'google-map-react';
import './map.css'
import { images } from "../../constants";


export default function map(){
  const defaultProps = {
    center: {
      lat: 45.7793031477015,
      lng: -1.1248771891007585
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div classname="google_map" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAoTD5Hj-miYL4GiqKx_j9viTeL-akUVBM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <img src={images.pin} alt='pin' style={{height:'14px',width:'14px','z-index':999}}></img>
      </GoogleMapReact>
    </div>
  );
}