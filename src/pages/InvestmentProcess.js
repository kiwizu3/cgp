import React from "react";

const steps = [
  {
    title: "Identification and Research",
    description:
      "We identify promising opportunities through deep market analysis and research, with a focus on growth potential and sustainable projects.",
  },
  {
    title: "Evaluation",
    description:
      "Each opportunity is thoroughly assessed for financial health, strategic fit, and risk, ensuring alignment with client goals.",
  },
  {
    title: "Investment Decision",
    description:
      "Decisions are made with discipline and data-backed insights. We pursue investments that align with our values and provide sustainable returns.",
  },
  {
    title: "Strategic Growth and Risk Management",
    description:
      "After investment, we continuously monitor performance and market conditions, making strategic adjustments as needed.",
  },
  {
    title: "Ongoing Support and Communication",
    description:
      "We maintain clear, transparent communication with clients, offering regular updates and advisory to ensure confidence throughout the journey.",
  },
];

const InvestmentProcess = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold display-6">Our Investment Process</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div className="timeline-step" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content px-5 py-4">
              <h5 className="fw-semibold">
                {index + 1}. {step.title}
              </h5>
              <p className="text-muted mb-0">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentProcess;