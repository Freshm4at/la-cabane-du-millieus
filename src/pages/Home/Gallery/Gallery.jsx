import React from 'react';
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import { SubHeading } from '../../../components';
import { images } from '../../../constants';
import { useTranslation } from 'react-i18next';
const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direction) =>{
    const current = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300
    }else{
      current.scrollLeft += 300
    }
  }
  const {t} = useTranslation()

  return(
  <div className='app__gallery flex__center '>
    <div className='app__gallery-content section__padding'>
      <SubHeading title={t("Photos_enTete")}/>
      <h1 className='headtext__cormorant'>{t("Photos_titre")}</h1>
      <p className='p__opensans' style={{marginTop: "2rem"}}>{t("Photos_texte")}</p>
      <button type='button' className='custom__button' onClick={event =>  window.location.href='/photos'}><p className='custom__button-text'>{t("Photos_bouton")}</p></button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container'>
        {galleryImages.map((image,index) =>
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
            <img src={image} alt='gallery'/>
          </div>
        )}
      </div>
      <div className='app__gallery-images_arrow'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>{scroll('left')}}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>{scroll('right')}}/>
      </div>
    </div>
  </div>
)};

export default Gallery;
