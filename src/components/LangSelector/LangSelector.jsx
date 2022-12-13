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
  const [image_it, setImage_it] = useState(
    images.it_grey
  );

  
  const handleClick = (e) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    switch(e.target.getAttribute('alt')){
      case 'img_fr':
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
        setImage_it(
          images.it_grey
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
        setImage_it(
          images.it_grey
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
        setImage_it(
          images.it_grey
        );
        break
        case 'img_it':
        document.querySelector('html').lang = 'it'
        i18next.changeLanguage('it')
        setImage_fr(
          images.fr_grey
        );
        setImage_en(
          images.en_grey
        );
        setImage_de(
          images.de_grey
        );
        setImage_it(
          images.it
        );
        break
        default:
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
        setImage_it(
          images.it_grey
        );
          break
    }
  };
    
  return (
    <div className='app__langselector'>
      <img src={image_fr} onClick={handleClick} alt='img_fr'></img>
      <img src={image_en} onClick={handleClick} alt='img_en'></img>
      <img src={image_de} onClick={handleClick} alt='img_de'></img>
      <img src={image_it} onClick={handleClick} alt='img_it'></img>
    </div>
  )
}

export default LangSelector 