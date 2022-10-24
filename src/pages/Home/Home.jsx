import React from 'react';
import { AboutUs, FindUs, Gallery, Header, Intro } from '.';

const Home = () => (
    <div className='app__main'>
      <Intro />
      <Header />
      <AboutUs />
      <Gallery />
      <FindUs />
    </div>
  );
  
  export default Home;