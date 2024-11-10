import React from 'react';

function Services() {
  return (
    <div className="services py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Why Capital Growth Partners?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>Diversified Investment Portfolios</h3>
              <p>Balanced approach to risk management and maximizing returns.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>Strategic Planning</h3>
              <p>Long-term strategic planning for sustainable growth.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm">
              <h3>Local Expertise</h3>
              <p>In-depth market analysis and local insights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
