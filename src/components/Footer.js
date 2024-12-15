import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGoogle, FaSnapchatGhost } from 'react-icons/fa';

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer py-5 bg-dark text-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <Link to="/">
              <img className="footer-logo mb-4" src="assets/images/logo.png" alt="Logo" />
            </Link>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-primary px-4 py-2">Contact Us</button>
            </div>
          </div>
        </div>
        <hr className="my-5" />

        <div className="row text-left">
          <div className="col-md-6 mb-4">
            <h5>Our Head Office</h5>
            <p>No: 23, Sri Parakumba Mawatha, Kotte Road, Ethul Kotte, Sri Lanka</p>
          </div>
          <div className="col-md-6 mb-4 text-lg-end text-start">
            <h5>Contact Us</h5>
            <p className="mb-1">+94 77 220 2506</p>
            <p>
              <a href="mailto:connect@cgp.lk" className="text-light text-decoration-none">
                connect@cgp.lk
              </a>
            </p>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">About</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  The Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Our Approach</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  The Approach
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Blog
                </Link>
              </li>
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
        <div className="row text-center">
          <div className="col-12 mt-4 mb-2">
            <span>
              © Capital Growth Partners, {getYear()} All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
