import React from 'react';
import { AboutUs, Restaurant, Gallery, Header, Intro } from '.';

const Home = () => (
    <div className='app__main'>
      <Intro />
      <Header />
      <AboutUs />
      <Gallery />
      <Restaurant />
    </div>
  );
  
  export default Home;