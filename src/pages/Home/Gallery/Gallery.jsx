import React from 'react';
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import { SubHeading } from '../../../components';
import { images } from '../../../constants';
const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = ({txtLang}) => {
  const scrollRef = React.useRef(null)
  const scroll = (direction) =>{
    const current = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300
    }else{
      current.scrollLeft += 300
    }
  }

  return(
  <div className='app__gallery flex__center '>
    <div className='app__gallery-content section__padding'>
      <SubHeading title={txtLang.Pages.Acceuil.Photos.enTete}/>
      <h1 className='headtext__cormorant'>{txtLang.Pages.Acceuil.Photos.titre}</h1>
      <p className='p__opensans' style={{marginTop: "2rem"}}>{txtLang.Pages.Acceuil.Photos.texte}</p>
      <button type='button' className='custom__button' onClick={event =>  window.location.href='/photos'}><p className='custom__button-text'>{txtLang.Pages.Acceuil.Photos.bouton}</p></button>
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
