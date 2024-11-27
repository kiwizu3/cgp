import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Automation from './components/Automation';
import Why from './components/Why';
import Insights from './components/Insights';
import CreateAds from './components/CreateAds';
import Footer from './components/Footer';
import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <Test color="primary"/> */}
        <Hero />
        <Stats />
        <About/>
        <Why />
        {/* <Insights />
        <CreateAds /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;