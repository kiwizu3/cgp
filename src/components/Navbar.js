import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll position
  const [isExpanded, setIsExpanded] = useState(false); // State for menu toggle
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll event to handle navbar transparency and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setIsScrolled(scrollTop > 0); // Navbar turns background when scrolled
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navbar collapse toggle
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine navbar class based on scroll and expanded state
  const navbarClass = `navbar navbar-expand-lg fixed-top ${
    isScrolled || isExpanded ? 'navbar-light bg-white shadow' : 'navbar-dark navbar-transparent'
  }`;

  return (
    <nav className={navbarClass}>
      <div
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
        }}
      ></div>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={`assets/images/logo.${isScrolled || isExpanded ? 'png' : 'jpg'}`} alt="Logo" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle} // Controlled toggle button
          aria-expanded={isExpanded}
        >
          {isExpanded ? (<i className="bi-navbar bi bi-x"></i>) : (<i className="bi-navbar bi bi-list"></i>)}
        </button>
        <div className={`collapse navbar-collapse py-4 ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about">
                    About Us
                  </Link>
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
              <Link className="nav-link" to="/">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Blog
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2">
            <Link to="#" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
