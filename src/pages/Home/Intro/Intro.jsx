import React from 'react';
import { images } from '../../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  return(
  <div className='app__video' id='home'>
    <img src={images.sea_black}></img>
  </div>
  )
};

export default Intro;
