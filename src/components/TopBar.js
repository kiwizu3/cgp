import React from 'react';

function TopBar() {
  return (
    <div className="top-bar bg-primary text-light py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <a href="mailto:connect@cgp.lk" className="text-light me-3">
            <i className="bi bi-envelope"></i> connect@cgp.lk
          </a>
          <span className="text-light me-3">
            <i className="bi bi-telephone"></i> +94 77 220 2506
          </span>
        </div>
        <div>
          <a href="#" className="text-light me-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-light me-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light me-2">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-light">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
