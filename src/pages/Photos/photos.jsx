import React from 'react';
import './photos.css';
import images from '../../constants/images'
import { GalleryComponent } from '../../components';

const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const photos = ({txtLang}) =>(
    <div className='app__photos'>
        <div className='app__photos-header'>
            <img src={images.seatPhoto} alt='sea_photo'></img>
            <h1 className='headtext__cormorant'>{txtLang.Pages.Photos.titre}</h1>
        </div>
        <GalleryComponent galleyImages={galleryImages}></GalleryComponent>
    </div>
)
export default photos
