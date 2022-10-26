import React from 'react';

import { SubHeading } from '../../../components';
import { images } from '../../../constants';
import './Restaurant.css'

const Restaurant = () => (
  <div className='app__bg app__wrapper section__padding' id='restaurant'>
    <div className='app__wrapper_info'>
      <SubHeading title="Un cadre unique" color="#FFFFFF"/>
      <h1 className='headtext__olswald' style={{marginBottom: '3rem'}}>Le restaurant</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans' style={{color:"#FFFFFF"}}> Royan ZOOOOOOOO</p>
        <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem 0"}}> Royan ZOOOOOOOO</p>
        <p className='p__opensans' style={{color:"#FFFFFF"}}> Royan ZOOOOOOOO</p>
        <p className='p__opensans' style={{color:"#FFFFFF"}}> Royan ZOOOOOOOO</p>
      </div>
      <button type='button' className='custom__button' onClick={event =>  window.location.href='/contact'} ><p className='custom__button-text'>Voir sur la carte</p></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default Restaurant;
