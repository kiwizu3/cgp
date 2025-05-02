import React from "react";

const services = [
  {
    title: "Investment Advisory",
    description:
      "We provide personalized investment advice tailored to your goals, risk tolerance, and timeline...",
    image: "/images/investment-advisory.jpg",
  },
  {
    title: "Investment Research",
    description:
      "Our research team delivers deep insights into market trends and economic indicators...",
    image: "/images/investment-research.jpg",
  },
  {
    title: "Market Analysis",
    description:
      "Stay ahead with our in-depth market reports and economic forecasts...",
    image: "/images/market-analysis.jpg",
  },
  {
    title: "Green Investments",
    description:
      "We promote environmentally conscious investment opportunities...",
    image: "/images/green-investments.jpg",
  },
  {
    title: "Reliability & Comprehensive Support",
    description:
      "From consultation to ongoing management, our support ensures a seamless experience...",
    image: "/images/reliability-support.jpg",
  },
  {
    title: "Risk Mitigation & Strategic Growth",
    description:
      "We design strategies that balance risk and reward, protecting your investments...",
    image: "/images/risk-mitigation.jpg",
  },
];

function OurApproach() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Our Approach</h1>
      <div className="card-columns-custom">
        {services.map((service, index) => (
          <div className="card mb-4 shadow-sm" key={index}>
            <img
              src={`assets/${service.image}`}
              className="card-img-top"
              alt={service.title}
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-semibold">{service.title}</h5>
              <p className="card-text text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurApproach;