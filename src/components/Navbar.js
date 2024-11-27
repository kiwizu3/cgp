import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://placehold.co/120x30?text=Birch" alt="Birch" height="30" />
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
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Automation</a></li>
                <li><a className="dropdown-item" href="#">Analysis</a></li>
                <li><a className="dropdown-item" href="#">Launching</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Integrations
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Facebook</a></li>
                <li><a className="dropdown-item" href="#">Instagram</a></li>
                <li><a className="dropdown-item" href="#">Google Ads</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2">
            <a href="#" className="btn btn-link text-dark">Contact sales</a>
            <a href="#" className="btn btn-link text-dark">Login</a>
            <a href="#" className="btn btn-warning">Try for free</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;