import React from 'react';
import { FaRocket, FaCode, FaCog } from 'react-icons/fa';

function Automation() {
  return (
    <section className="automation py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">Take advantage of #1 ad automation engine</h2>
            <div className="features">
              <div className="feature mb-4">
                <FaRocket className="text-warning mb-3" size={24} />
                <h5>Optimize and scale ad campaigns</h5>
                <p className="text-muted">Automate your campaign optimization with data-driven decisions</p>
              </div>
              <div className="feature mb-4">
                <FaCode className="text-warning mb-3" size={24} />
                <h5>Custom Testing Framework</h5>
                <p className="text-muted">Make your own testing using external data</p>
              </div>
              <div className="feature mb-4">
                <FaCog className="text-warning mb-3" size={24} />
                <h5>Pre-built Strategies</h5>
                <p className="text-muted">Explore Strategies — pre-built automations</p>
              </div>
            </div>
            <a href="#" className="btn btn-link text-primary ps-0">Learn about Automation →</a>
          </div>
          <div className="col-lg-6">
            <div className="automation-image p-4">
              <img 
                src="https://placehold.co/800x600?text=Automation+Dashboard" 
                alt="Automation Preview" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Automation;