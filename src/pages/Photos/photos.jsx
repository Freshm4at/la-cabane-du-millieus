import React from 'react';
import './photos.css';
import images from '../../constants/images'
import { GalleryComponent } from '../../components';
import { useTranslation } from 'react-i18next';
import importAll from '../../components/Tools/importAll';

const ImgFolder = importAll(require.context('../../assets/photos', false, /\.(png|jpe?g|svg)$/));
var galleryImages = []
for (let i = 1; i < ImgFolder[1] + 1; i++) {
galleryImages.push(ImgFolder[0][`gallery${i}.png`]);
}

const Photos = () =>{
    const {t} = useTranslation()
    return(
    <div className='app__photos'>
        <div className='app__photos-header'>
            <img src={images.seatPhoto} alt='sea_photo'></img>
            <h1 className='headtext__cormorant'>{t('Gallerie_titre')}</h1>
        </div>
        <GalleryComponent galleyImages={galleryImages}></GalleryComponent>
    </div>
)}
export default Photos
