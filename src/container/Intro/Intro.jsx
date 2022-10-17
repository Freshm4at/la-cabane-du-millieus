import React, { useState } from 'react';
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  return(
  <div className='app__video'>
    <video src={meal}
    ref={vidRef}
    type='video/mp4'
    loop
    controls={false}
    autoPlay
    muted/>
  </div>
  )
};

export default Intro;
