import React from 'react';
import { images } from '../../constants';
import './SubHeading.css';

const SubHeading = ({title,color,size}) => (
  <div className='app__subheading'>
    <p className='p__opensans' style={{color:color,"font-size": size}}>{title}</p>
    <img src={images.sea} alt="waves" className='waves__img'></img>
  </div>
);

export default SubHeading;
