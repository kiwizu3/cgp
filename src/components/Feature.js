import React from 'react';

function Feature() {
  return (
    <div className="feature py-5">
      <div className="container text-center">
        <h2 className="mb-4">Our Investment Strategy</h2>
        <p className="mb-4">We believe in a strategy that prioritizes long-term growth over short-term gains. By focusing on comprehensive market analysis and diversified investment portfolios, we aim to deliver consistent returns that align with our clients’ objectives.</p>
        <img src="https://placehold.co/512" className="img-fluid rounded shadow-sm mb-4" alt="Investment Strategy" />
        <div className="row g-4">
          <div className="col-6 col-md-3"><h3>40+</h3><p>Our Staffs</p></div>
          <div className="col-6 col-md-3"><h3>80+</h3><p>Our Clients</p></div>
          <div className="col-6 col-md-3"><h3>25+</h3><p>Completed Projects</p></div>
          <div className="col-6 col-md-3"><h3>10+</h3><p>Running Projects</p></div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
