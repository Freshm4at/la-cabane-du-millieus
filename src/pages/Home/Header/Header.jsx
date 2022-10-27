import React from 'react';

import './Header.css';
import {images} from '../../../constants'
import { SubHeading } from '../../../components';

const Header = ({txtLang}) => {
  return (
  <div className='app__header'>
    <div className='app_header-content app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title={txtLang.Pages.Acceuil.Intro.enTete}/>
        <h1 className='app__header-h1'>{txtLang.Pages.Acceuil.Intro.titre}</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>{txtLang.Pages.Acceuil.Intro.texte}</p>
        <button type='button' className='custom__button'><p className='custom__button-text' onClick={event =>  window.location.href='/menu'}>{txtLang.Pages.Acceuil.Intro.bouton}</p></button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img'/>
      </div>
    </div>
  </div>
)};

export default Header;
