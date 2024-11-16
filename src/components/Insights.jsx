import React from 'react';
import { FaChartLine, FaUsers, FaRegChartBar } from 'react-icons/fa';

function Insights() {
  return (
    <section className="insights py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1">
            <div className="insights-image p-4">
              <img 
                src="https://placehold.co/800x600?text=Analytics+Dashboard" 
                alt="Insights Preview" 
                className="img-fluid rounded shadow-lg" 
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <h2 className="display-5 fw-bold mb-4">Find actionable insights, and generate beautiful reports for your clients</h2>
            <div className="features">
              <div className="feature mb-4">
                <FaChartLine className="text-warning mb-3" size={24} />
                <h5>Advanced Analytics</h5>
                <p className="text-muted">Find creative insights and optimize ads</p>
              </div>
              <div className="feature mb-4">
                <FaUsers className="text-warning mb-3" size={24} />
                <h5>Audience Analysis</h5>
                <p className="text-muted">Discover your best and worst performing audiences</p>
              </div>
              <div className="feature mb-4">
                <FaRegChartBar className="text-warning mb-3" size={24} />
                <h5>Team Collaboration</h5>
                <p className="text-muted">Keep your team in the loop with automated reports</p>
              </div>
            </div>
            <a href="#" className="btn btn-link text-primary ps-0">Learn about Analysis →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Insights;