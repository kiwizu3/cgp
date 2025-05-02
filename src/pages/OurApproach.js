
import React from 'react';

function OurApproach() {
  const services = [
    {
      title: 'Investment Advisory',
      description:
        'We provide personalized investment advice tailored to your goals, risk tolerance, and timeline. Our team supports you throughout your journey, ensuring strategic decisions for optimal outcomes.',
    },
    {
      title: 'Investment Research',
      description:
        'Our research team delivers deep insights into market trends and economic indicators, helping you make informed decisions with confidence.',
    },
    {
      title: 'Market Analysis',
      description:
        'Stay ahead with our in-depth market reports and economic forecasts. We keep you updated and equipped to navigate the evolving financial landscape.',
    },
    {
      title: 'Green Investments',
      description:
        'We promote environmentally conscious investment opportunities that align financial growth with sustainability.',
    },
    {
      title: 'Reliability & Comprehensive Support',
      description:
        'From consultation to ongoing management, our support ensures a seamless investment experience marked by professionalism and care.',
    },
    {
      title: 'Risk Mitigation & Strategic Growth',
      description:
        'We design strategies that balance risk and reward, protecting your investments while fostering long-term growth.',
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Our Approach</h1>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurApproach;
