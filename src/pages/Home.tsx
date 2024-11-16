import React from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <WhyUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
