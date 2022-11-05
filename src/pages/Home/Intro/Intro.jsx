import React from 'react';
import { images } from '../../../constants';
import './Intro.css';

const Intro = () => {
  return(
  <div className='app__video' id='home'>
    <img src={images.sea_black} alt='black_sea_img'></img>
  </div>
  )
};

export default Intro;
