import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__olswald' style={{marginBottom: '3rem'}}>Trouvez nous!</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'> Royan ZOOOOOOOO</p>
        <p className='p__olswald' style={{color:"#DCCA87", margin:"2rem 0"}}> Royan ZOOOOOOOO</p>
        <p className='p__opensans'> Royan ZOOOOOOOO</p>
        <p className='p__opensans'> Royan ZOOOOOOOO</p>
      </div>
      <button className='custom__button'></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default FindUs;
