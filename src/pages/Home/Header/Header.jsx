import React from 'react';

import './Header.css';
import {images} from '../../../constants'
import { SubHeading } from '../../../components';

const Header = () => (
  <div className='app__header'>
    <div className='app_header-content app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title="Decouvrer l'authenticité"/>
        <h1 className='app__header-h1'>De la mer à l'assiette</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <button type='button' className='custom__button'><p className='custom__button-text' onClick={event =>  window.location.href='/menu'}>Parcourir le menu</p></button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img'/>
      </div>
    </div>
  </div>
);

export default Header;
