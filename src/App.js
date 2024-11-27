
import React, { useState, useEffect } from "react";
import Page from './Page';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero-section min-vh-100 d-flex align-items-center">
    <div className="container text-center">
      <h1 className="hero-title">We Deliver 14.4% Yearly Net Returns</h1>
      <p className="hero-subtitle">
        Discover Lasting Investment Opportunities in Sri Lanka.
      </p>
    </div>
  </section>
);

const App = () => (
  <div>
    {/* <Navbar />
    <Hero /> */}
    <Page/>
  </div>
);

export default App;