import React from 'react';

import './AboutUs.css';
import { images } from '../../../constants';
import { SubHeading } from '../../../components';
import { useTranslation } from 'react-i18next';

function reveal() {
  var reveals = document.querySelectorAll(".app__aboutus-content_img");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

const AboutUs = () => {
  const {t} = useTranslation()
  window.addEventListener("scroll", reveal);
  return(
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <SubHeading title={t('Equipe_Histoire_enTete_1')} color="#DCCA87" size="30px"/>
        <p className='p_opensans'>{t('Equipe_Histoire_texte_1')}</p>
      </div>

      <div className='app__aboutus-content_img flex__center'>
        <img src={images.fish_drawing} alt='fish_photo'/>
      </div>

      <div className='app__aboutus-content_history'>
        <SubHeading title={t('Equipe_Histoire_enTete_2')} color="#DCCA87" size="30px"/>
        <p className='p_opensans'>{t('Equipe_Histoire_texte_2')}</p>
      </div>
    </div>
  </div>
)};

export default AboutUs;
