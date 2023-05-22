import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { SubHeading } from '../../../components';
import { images } from '../../../constants';
import './Restaurant.css'
import { useTranslation } from 'react-i18next';
const meteoUrl = process.env.REACT_APP_METEO


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
  }else if (Math.floor(Date.now() / 1000) >= post.sys.sunset){
    weatherImg = images.night
    temp = Math.round(post.main.temp-273.15)
  }else {
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
        if(post.weather[0].description === 'few clouds'){
          weatherImg = images.cloudy_day
        }else{
          weatherImg = images.cloud
        }
        break;
      default:
        weatherImg = images.sun
    }
  }

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
         setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const {t} = useTranslation()
  return(
  <div className='app__restaurant app__bg app__wrapper section__padding' id='restaurant'>
    <div className='app__wrapper_info'>
      <SubHeading title={t('LeRestaurant_enTete')} color="#FFFFFF"/>
      <h1 className='headtext__cormorant'>{t('LeRestaurant_titre')}</h1>
      <div className='app__wrapper-content'>
      <p className='p__cormorant' style={{color:"#DCCA87", margin:"1rem 0 1rem 0"}}>{t('LeRestaurant_adresse')}</p>
        <div className='app__restaurant-meteo'>
          <img src={weatherImg} alt="meteo_img"></img>
          <p className='p__opensans' style={{color:"#FFFFFF",'font-size':'12px'}}>{temp}°C --- {date} {dateState.toLocaleString('fr-FR', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
            })}</p>
        </div>
        <p className='p__opensans' style={{color:"#FFFFFF"}}>{t('LeRestaurant_texte')}</p>
      </div>
      <button type='button' className='custom__button' onClick={event =>  window.location.href='/contact'} ><p className='custom__button-text'>{t('LeRestaurant_bouton')}</p></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.terasse7} alt="findus"/>
    </div>
  </div>
)
};

export default Restaurant;
