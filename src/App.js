import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Automation from './components/Automation';
import Why from './components/Why';
import Insights from './components/Insights';
import CreateAds from './components/CreateAds';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage'; // Import your AboutPage here
import './App.css';
import Team from './components/Team';
import OurApproach from './pages/OurApproach';
import InvestmentProcess from './pages/InvestmentProcess';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={
            <>
             
              <Stats />
              <About />
              <Why />
              <Team />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/approach" element={<OurApproach />} />
          <Route path="/process" element={<InvestmentProcess />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
