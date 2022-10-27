import React from 'react';

import './AboutUs.css';
import { images } from '../../../constants';
import { SubHeading } from '../../../components';

const AboutUs = ({txtLang}) => {
  return(
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <SubHeading title={txtLang.Pages.Acceuil.Equipe_Histoire.enTete_1} color="#DCCA87" size="30px"/>
        <p className='p_opensans'>{txtLang.Pages.Acceuil.Equipe_Histoire.texte_1}</p>
      </div>

      <div className='app__aboutus-content_img flex__center'>
        <img src={images.fish} alt='fish_photo'/>
      </div>

      <div className='app__aboutus-content_history'>
        <SubHeading title={txtLang.Pages.Acceuil.Equipe_Histoire.enTete_2} color="#DCCA87" size="30px"/>
        <p className='p_opensans'>{txtLang.Pages.Acceuil.Equipe_Histoire.texte_2}</p>
      </div>
    </div>
  </div>
)};

export default AboutUs;
