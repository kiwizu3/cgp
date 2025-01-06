import React from 'react';
import './Team.css'; // Add this file for custom styles if needed

function Team() {
  const teamMembers = [
    {
      name: 'Nipun Samaratunga',
      position: 'Director, Legal Affairs and Administration',
      image: 'assets/images/team/nipun.png', // Add your team member images
      description:
        'Nipun brings a wealth of experience in legal affairs and administrative management, ensuring operations are compliant and efficient.',
    },
    {
      name: 'Dinesh Tennakoon',
      position: 'Director, Operations and Strategic Management',
      image: 'assets/images/team/dinesh.png',
      description:
        'Dinesh oversees operations and strategic management, driving the company’s growth and efficiency with a strategic mindset.',
    },
    {
      name: 'Dr. R H S Samaratunga',
      position: 'Advisor',
      image: 'assets/images/team/rhs.png',
      description:
        'Dr. Samaratunga, a distinguished economist, has held high-profile positions and contributed extensively to economic growth.',
    },
    {
      name: 'Dr. Ravi Ratnayake',
      position: 'Advisor',
      image: 'assets/images/team/ravi.png',
      description:
        'Dr. Ratnayake, an economist with over 40 years of experience, adds immense value through his global expertise.',
    },
  ];

  return (
    <section className="team-section container py-5" id="team">
      <h2 className="text-center mb-5">Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card rounded-4 team-card h-100 text-center shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top team-img"
              />
              <div className="card-body">
                <h5 className="card-title text-success">{member.name}</h5>
                <p className="card-subtitle text-muted mb-2">{member.position}</p>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
