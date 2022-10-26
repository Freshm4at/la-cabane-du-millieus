import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

import { SubHeading } from '../../../components';
import { images } from '../../../constants';
import './Restaurant.css'
const meteoUrl = "https://api.openweathermap.org/data/2.5/weather?lat=45.7793031477015&lon=-1.1248771891007585&appid=5b09b57f4989e1240c29d992c71ad242"


const Restaurant = () => {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(meteoUrl).then((response) => {
      setPost(response.data);
    });
  }, []);
  var temp = null
  var weatherImg = null
  let date = new Date().toLocaleDateString("fr-FR");
  if (!post){
    temp = "NA"
    weatherImg = images.sun
  }else{
    temp = Math.round(post.main.temp-273.15)
    switch(post.weather[0].main){
      case 'Thunderstorm':
        weatherImg = images.storm
        break;
      case 'Drizzle':
        weatherImg = images.rainy
        break;
      case 'Rain':
        weatherImg = images.rainy
        break;
      case 'Snow':
      weatherImg = images.snow
      break;
      case 'Mist':
        weatherImg = images.mist
        break;
      case 'Clear':
        weatherImg = images.sun
        break;
      case 'Clouds':
        weatherImg = images.cloudy_day
        break;
      default:
        weatherImg = images.sun

    }
  }
  return(
  <div className='app__restaurant app__bg app__wrapper section__padding' id='restaurant'>
    <div className='app__wrapper_info'>
      <SubHeading title="Un cadre unique" color="#FFFFFF"/>
      <h1 className='headtext__cormorant'>Le restaurant</h1>
      <div className='app__wrapper-content'>
      <p className='p__cormorant' style={{color:"#DCCA87", margin:"1rem 0 0 0"}}> Bd Roger Letélié, 17390 La Tremblade</p>
        <div className='app__restaurant-meteo'>
          <img src={weatherImg} alt="meteo_img"></img>
          <p className='p__opensans' style={{color:"#FFFFFF",'font-size':'12px'}}>{date}, {temp}°C</p>
        </div>
        <p className='p__opensans' style={{color:"#FFFFFF"}}> Royan ZOOOOOOOO</p>
        <p className='p__opensans' style={{color:"#FFFFFF"}}> Royan ZOOOOOOOO</p>
      </div>
      <button type='button' className='custom__button' onClick={event =>  window.location.href='/contact'} ><p className='custom__button-text'>Voir sur la carte</p></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
)
};

export default Restaurant;
