import React from 'react';

function Stats() {
  const stats = [
    {
      value: '76%',
      label: 'decrease in campaign management time',
      story: 'Read story'
    },
    {
      value: '6 HRS',
      label: 'saved per day on ad management',
      story: 'Read story'
    },
    {
      value: '1,160%',
      label: 'increase in lead sales',
      story: 'Read story'
    }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="row justify-content-center g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-4">
              <div className="stat-card p-4 h-100">
                <h2 className="display-5 fw-bold text-center mb-3">{stat.value}</h2>
                <p className="text-center mb-2">{stat.label}</p>
                <div className="text-center">
                  <a href="#" className="text-primary text-decoration-none">{stat.story}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;