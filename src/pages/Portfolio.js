// src/pages/Portfolio.jsx
import React from 'react';

const projects = [
  {
    name: 'Solar Sence 10 MW',
    location: 'Mannar, Sri Lanka',
    status: 'Under Development',
    opportunity: 'Partially open',
    image: '/assets/solar1.jpg',
  },
  {
    name: 'Ecoener tech 10 MW',
    location: 'Mannar, Sri Lanka',
    status: 'Under Development',
    opportunity: 'Partially open',
    image: '/assets/solar2.jpg',
  },
  {
    name: 'Sunener dynamics 10 MW',
    location: 'Mannar, Sri Lanka',
    status: 'Under Development',
    opportunity: 'Close',
    image: '/assets/solar3.jpg',
  },
  {
    name: 'Earth Edge Solar 10 MW',
    location: 'Kappalthurai, Sri Lanka',
    status: 'Under Development',
    opportunity: 'Open',
    image: '/assets/solar6.jpg',
  },
  {
    name: 'Dry Fruit Processing Plant',
    location: 'Matale, Sri Lanka',
    status: 'Ready to Build',
    opportunity: 'Partially open',
    image: '/assets/dryfruit.jpg',
  },
  {
    name: 'Port Land Development',
    location: 'Colombo, Sri Lanka',
    status: 'Under Development',
    opportunity: 'Open',
    image: '/assets/port.jpg',
  },
];

function Portfolio() {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Our Investment Portfolio</h1>
      <div className="row g-4">
        {projects.map((project, idx) => (
          <div key={idx} className="col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text"><strong>Location:</strong> {project.location}</p>
                <p className="card-text"><strong>Status:</strong> {project.status}</p>
                <p className="card-text"><strong>Investment Opportunity:</strong> {project.opportunity}</p>
                <div className="mt-auto">
                  <button className="btn btn-outline-primary btn-sm mt-2">More Information</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
