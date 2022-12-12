import React from "react";
//import GoogleMapReact from 'google-map-react';
import './map.css'


export default function Map(){
  /* 
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
        
   <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}>
   </GoogleMapReact>
   */
  return (
    <div classname="google_map" style={{ height: '100%', width: '100%' }}>
        <iframe title='Google Maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6020658382276!2d-1.1290721796778609!3d45.77916466335991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48016503cced1ab5%3A0xabaf18d5be441c43!2sLa%20Cabane%20du%20mil%E2%80%99%20lieus!5e0!3m2!1sfr!2sfr!4v1670841499346!5m2!1sfr!2sfr" style={{border:0, width:"100%",height:"600px" }} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}