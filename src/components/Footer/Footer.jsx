import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

import './Footer.css';
const Footer = () => (
  <div className='app__footer section__padding'>
    <div className='app__footer-links flex__center'>
      <div className='app__footer-links_contact' >
        <h1 className='app__footer-headtext'>Contact</h1>
        <p className='p__opensans'>hello</p>
        <p className='p__opensans'>hello</p>
      </div>
      <div className='app__footer-links_logo'>
      <Link to='/'>
          <p className='p__opensans'>La cabane du Mil'lieus</p>
      </Link>
        <img src={images.boat} alt='header img'/>
      </div>
      <div className='app__footer-links_works'>
        <h1 className='app__footer-headtext'>Horairre d'ouverture</h1>
        <p className='p__opensans'>Lundi-Vendredi : </p>
        <p className='p__opensans'>hello</p>
        <p className='p__opensans'>Samedi-Dimanche : </p>
        <p className='p__opensans'>hello</p>
      </div>
    </div>
    <div className='app__footer-copyright'>
        <p className='p__opensans'>2022 La Cabane du Mil'Lieus, Tout droits réservés.</p>
      </div>
  </div>
);

export default Footer;
