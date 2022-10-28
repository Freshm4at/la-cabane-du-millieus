import React from 'react';

import './Header.css';
import {images} from '../../../constants'
import { SubHeading } from '../../../components';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const {t} = useTranslation()
  return(
  <div className='app__header'>
    <div className='app_header-content app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title={t('Intro_enTete')}/>
        <h1 className='app__header-h1'>{t('Intro_titre')}</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>{t('Intro_texte')}</p>
        <button type='button' className='custom__button'><p className='custom__button-text' onClick={event =>  window.location.href='/menu'}>{t('Intro_bouton')}</p></button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img'/>
      </div>
    </div>
  </div>
)};

export default Header;
