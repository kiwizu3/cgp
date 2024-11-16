import React from 'react';

function Facts() {
  return (
    <div className="facts py-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-lg-3 col-md-6">
            <div className="fact-item py-5 px-4 rounded shadow">
              <h5 className="fw-bold">Qualified Team</h5>
              <p>Over 40 qualified professionals</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="fact-item py-5 px-4 rounded shadow">
              <h5 className="fw-bold">Individual Approach</h5>
              <p>Tailored strategies for each client</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="fact-item py-5 px-4 rounded shadow">
              <h5 className="fw-bold">100%<br/> Success</h5>
              <p>Committed to achieving investment success</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="fact-item py-5 px-4 rounded shadow">
              <h5 className="fw-bold">100% Satisfaction</h5>
              <p>Dedicated to client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
