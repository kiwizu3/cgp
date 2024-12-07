import React from 'react';

const  Stats = () => {
  const stats = [
    {
      title: 'Qualified Team',
      image: 'team.png',
    },
    {
      title: 'Individual Approach',
      image: 'approach.png',
    },
    {
      title: '100% Success',
      image: 'success.png',
    },
    {
      title: '100% Satisfaction',
      image: 'satisfaction.png',
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="row justify-content-center g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3">
              <div className="stat-card shadow p-4 h-100">
                <img className='p-3' width="100" src={`assets/icons/${stat.image}`}/>
                <p className="text-center fw-bold">{stat.title}</p>
                {/* <div className="text-center">
                  <a href="#" className="text-primary text-decoration-none">{stat.story}</a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;