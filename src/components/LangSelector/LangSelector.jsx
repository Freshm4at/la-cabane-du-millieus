import i18next from 'i18next'
import React, { useState } from 'react'
import { images } from '../../constants'
import './LangSelector.css'

const LangSelector = () => {
  const [image_fr, setImage_fr] = useState(
    images.fr
  );
  const [image_en, setImage_en] = useState(
    images.en_grey
  );
  const [image_de, setImage_de] = useState(
    images.de_grey
  );
  
  const handleClick = (e) => {
    console.log('click')
    switch(e.target.getAttribute('alt')){
      case 'img_fr':
        console.log('click')
        document.querySelector('html').lang = 'fr'
        i18next.changeLanguage('fr')
        setImage_fr(
          images.fr
        );
        setImage_en(
          images.en_grey
        );
        setImage_de(
          images.de_grey
        );
        break
      case 'img_en':
        document.querySelector('html').lang = 'en'
        i18next.changeLanguage('en')
        setImage_fr(
          images.fr_grey
        );
        setImage_en(
          images.en
        );
        setImage_de(
          images.de_grey
        );
        break
      case 'img_de':
        document.querySelector('html').lang = 'de'
        i18next.changeLanguage('de')
        setImage_fr(
          images.fr_grey
        );
        setImage_en(
          images.en_grey
        );
        setImage_de(
          images.de
        );
        break
    }
  };
    
  return (
    <div className='app__langselector'>
      <img src={image_fr} onClick={handleClick} alt='img_fr'></img>
      <img src={image_en} onClick={handleClick} alt='img_en'></img>
      <img src={image_de} onClick={handleClick} alt='img_de'></img>
    </div>
  )
}

export default LangSelector