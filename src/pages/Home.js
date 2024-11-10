
import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Facts from '../components/Facts';
import About from '../components/About';
import Services from '../components/Services';
import Feature from '../components/Feature';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      {/* <TopBar /> */}
      <Navbar />
      <Carousel />
     <Facts />
     <About />
     <Services />
     <Feature />
     <Contact />
     <Footer />
   </div>
  );
}

export default Home;