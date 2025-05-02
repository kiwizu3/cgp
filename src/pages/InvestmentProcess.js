import React from "react";
import { FaSearch, FaClipboardCheck, FaChartLine, FaShieldAlt, FaComments } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={24} />,
    title: "Identification and Research",
    description: "We identify promising opportunities through deep market analysis and research, with a focus on growth potential and sustainable projects.",
  },
  {
    icon: <FaClipboardCheck size={24} />,
    title: "Evaluation",
    description: "Each opportunity is thoroughly assessed for financial health, strategic fit, and risk, ensuring alignment with client goals.",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Investment Decision",
    description: "Decisions are made with discipline and data-backed insights. We pursue investments that align with our values and provide sustainable returns.",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Strategic Growth & Risk Mgmt",
    description: "After investment, we continuously monitor performance and market conditions, making strategic adjustments as needed.",
  },
  {
    icon: <FaComments size={24} />,
    title: "Ongoing Support & Communication",
    description: "We maintain clear, transparent communication with clients, offering regular updates and advisory throughout the journey.",
  },
];

const InvestmentProcess = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold display-6">Our Investment Process</h2>
      <div className="row g-4 justify-content-center">
        {steps.map((step, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="step-card position-relative p-4 shadow-sm h-100">
              <div className="step-number">{`0${index + 1}`}</div>
              <div className="step-icon mb-3 text-success">{step.icon}</div>
              <h5 className="fw-semibold">{step.title}</h5>
              <p className="text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentProcess;