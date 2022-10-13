import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo,setplayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = () =>{
    setplayVideo((prevPlayvideo)=> !prevPlayvideo )
    
    if(playVideo){
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  }
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
