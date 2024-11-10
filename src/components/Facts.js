import React from 'react';

function Facts() {
  return (
    <div className="facts py-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-lg-3 col-md-6">
            <div className="fact-item p-4 border rounded shadow-sm">
              <h2>Qualified Team</h2>
              <p>Over 40 qualified professionals</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="fact-item p-4 border rounded shadow-sm">
              <h2>Individual Approach</h2>
              <p>Tailored strategies for each client</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="fact-item p-4 border rounded shadow-sm">
              <h2>100% Success</h2>
              <p>Committed to achieving investment success</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="fact-item p-4 border rounded shadow-sm">
              <h2>100% Satisfaction</h2>
              <p>Dedicated to client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
