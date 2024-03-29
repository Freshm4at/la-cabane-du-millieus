import React from 'react';

import './Header.css';
import {images} from '../../../constants'
import { SubHeading } from '../../../components';
import { useTranslation } from 'react-i18next';
import statut from './statut.json'


const Header = () => {
  const {t} = useTranslation()

  var displayAlert =  <div className='app__header_alert' style={{display:'none'}}></div>
  if(statut.close==='Oui'){
    displayAlert = <div className='app__header_alert' style={{display:'flex'}}>
      <h2 className='p__opensans'>{t('Intro_alert1')}</h2>
      <p className='p__opensans'>{t('Intro_alert2')}{statut.date}</p>
    </div>
  }
  return(
  <div className='app__header'>
    {displayAlert}
    <div className='app_header-content app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title={t('Intro_enTete')}/>
        <h1 className='headtext'>{t('Intro_titre')}</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>{t('Intro_texte')}</p>
        <button type='button' className='custom__button'><p className='custom__button-text' onClick={event =>  window.location.href='/menu'}>{t('Intro_bouton')}</p></button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.devanture1} alt='header img'/>
      </div>
    </div>
  </div>
)};

export default Header;
