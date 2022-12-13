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
    const lang = ['fr','it','en','de']
    const langImg = [images.fr,images.it,images.en,images.de]
    const langImg_grey = [images.fr_grey,images.it_grey,images.en_grey,images.de_grey]
    const langSet = [setImage_fr,setImage_it,setImage_en,setImage_de]
    lang.map((it,index)=>{
      const selectedLang = e.target.getAttribute('alt').split('_')
      if(it===selectedLang[1]){
        document.querySelector('html').lang = it
        i18next.changeLanguage(it)
        langSet[index](
          langImg[index]
        )
      }else{
        langSet[index](
          langImg_grey[index]
        )
      }
      return ''
    })

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