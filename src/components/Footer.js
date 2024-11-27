import React from 'react';
import { FaFacebookF, FaInstagram, FaGoogle, FaSnapchatGhost } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer py-5 bg-dark text-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-4">Invest today</h2>
            <p className="lead mb-4">Automate campaign management. Automate growth.</p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-primary px-4 py-2">Contact Us</button>
              <button className="btn btn-outline-light px-4 py-2">Book a Demo</button>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Our Offices</a></li>
              <li><a href="#" className="text-light text-decoration-none">The team</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Our Approach</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Vision & Mission</a></li>
              <li><a href="#" className="text-light text-decoration-none">The Approach</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Social Media</h5>
            <div className="d-flex gap-3">
              <FaFacebookF size={24} />
              <FaInstagram size={24} />
              <FaGoogle size={24} />
              <FaSnapchatGhost size={24} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;