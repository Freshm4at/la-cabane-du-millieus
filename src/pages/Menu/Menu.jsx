import React from 'react';
import './Menu.css';
import { images } from '../../constants';

const Menu = () => (
    <div className='app__menu'>
      <div className='app__menu-header_img'>
        <img src={images.menuHeader} alt='menu_header img'/>
      </div>
    </div>
  );
  
  export default Menu;