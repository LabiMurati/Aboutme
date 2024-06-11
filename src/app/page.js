import React from 'react';
import Header from './Components/header';
import Hero from './Components/hero';
import Work from './Components/work';
import Slider from './Components/slider';
import Services from './Components/services';
import Stack from './Components/stack';
import Together from './Components/together';
import Certification from './Components/certification';
import Navbar from './Components/navbar';
import Experience from './Components/experience';

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <Hero />
      <Work />
      <Slider />
      <Navbar />
      <Services />
      <Stack />
      <Experience/>
      <Certification />
      <Together />
    </div>
  );
};

export default Home;