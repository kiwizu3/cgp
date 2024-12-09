import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Ensure this imports your CSS

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setIsScrolled(scrollTop > 0);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isScrolled ? 'navbar-light bg-white shadow' : 'navbar-dark navbar-transparent'
      } fixed-top`}
    >
      <div
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
        }}
      ></div>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={`assets/images/logo.${isScrolled ? 'png' : 'jpg'}`} alt="Logo" height="50" />
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Our Offices
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    The Team
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Approach
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Vision & Mission
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    The Approach
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2">
            <a href="#" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
