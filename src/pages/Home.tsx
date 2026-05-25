import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Stats from '../components/Stats';
import Gallary from '../components/Gallary';
import InfoBanner from '../components/InfoBanner';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Stats />
      <Gallary />
      <InfoBanner />
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
