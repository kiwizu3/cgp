import React from 'react';

const  Stats = () => {
  const stats = [
    {
      title: 'Qualified Team',
      image: 'team.svg',
    },
    {
      title: 'Individual Approach',
      image: 'approach.svg',
    },
    {
      title: '100% Success',
      image: 'success.svg',
    },
    {
      title: '100% Satisfaction',
      image: 'satisfaction.svg',
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="row justify-content-center g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-sm-12">
              <div className="stat-card mx-auto shadow p-4 h-100">
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