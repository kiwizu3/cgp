import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Scale results, not workload.</h1>
            <p className="lead mb-4">
              Birch automates your ad management routine so you can focus on reaching results, faster.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn btn-warning px-4 py-2">Try for free</button>
              <button className="btn btn-outline-dark px-4 py-2">Book a Demo</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center">
              <img 
                src="https://placehold.co/600x400?text=Dashboard+Preview" 
                alt="Dashboard Preview" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;