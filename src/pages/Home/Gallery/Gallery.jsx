import React from 'react';
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import { SubHeading } from '../../../components';
import { images } from '../../../constants';
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

  return(
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="Des plats maisons"/>
      <h1 className='headtext__cormorant'>Photos</h1>
      <p className='p__opensans' style={{marginTop: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button type='button' className='custom__button' onClick={event =>  window.location.href='/photos'}><p className='custom__button-text'>Decouvrir nos plats</p></button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container'>
        {galleryImages.map((image,index) =>
          <div className='app__gallery-images_card flax__center' key={`gallery_image-${index+1}`}>
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
