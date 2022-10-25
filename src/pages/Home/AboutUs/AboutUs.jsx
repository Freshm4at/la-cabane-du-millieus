import React from 'react';

import './AboutUs.css';
import { images } from '../../../constants';
import { SubHeading } from '../../../components';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <SubHeading title="L'équipe" color="#DCCA87" size="30px"/>
        <p className='p_opensans'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <button type='button' className='custom__button'>
          <p className='custom__button-text'>En savoir plus</p>
        </button>
      </div>

      <div className='app__aboutus-content_img flex__center'>
        <img src={images.fish}/>
      </div>

      <div className='app__aboutus-content_history'>
        <SubHeading title="Notre histoire" color="#DCCA87" size="30px"/>
        <p className='p_opensans'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <button type='button' className='custom__button'>
        <p className='custom__button-text'>En savoir plus</p>
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
