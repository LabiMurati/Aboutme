import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Work from './components/work';
import Slider from './components/slider';
import Services from './components/services';
import Stack from './components/stack';
import Together from './components/together';
import Certification from './components/certification';
import Navbar from './components/navbar';
import Experience from './components/experience';

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
