import i18next from 'i18next'
import React, { useEffect, useRef, useState } from 'react'
import { images } from '../../constants'
import './LangSelector.css'

const LangSelector = () => {
  const [image, setImage] = useState(
    images.en
  );

  useEffect(() => {
    },[setImage]);
  
  const handleClick = () => {
    if(document.querySelector('html').lang==='fr'){
      document.querySelector('html').lang = 'en'
      i18next.changeLanguage('en')
      setImage(
        images.fr
      );
    }else{
      console.log("click")
      document.querySelector('html').lang = 'fr'
      i18next.changeLanguage('fr')
      setImage(
        images.en
      );
    }
  };
    
  return (
    <div className='app__langselector'>
      <img src={image} onClick={handleClick}></img>
    </div>
  )
}

export default LangSelector