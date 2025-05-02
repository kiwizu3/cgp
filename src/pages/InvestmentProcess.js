// src/pages/InvestmentProcess.jsx
import React from 'react';

function InvestmentProcess() {
  const steps = [
    {
      title: '1. Identification and Research',
      description:
        'We identify promising opportunities through deep market analysis and research, with a focus on growth potential and sustainable projects.',
    },
    {
      title: '2. Evaluation',
      description:
        'Each opportunity is thoroughly assessed for financial health, strategic fit, and risk, ensuring alignment with client goals.',
    },
    {
      title: '3. Investment Decision',
      description:
        'Decisions are made with discipline and data-backed insights. We pursue investments that align with our values and provide sustainable returns.',
    },
    {
      title: '4. Strategic Growth and Risk Management',
      description:
        'After investment, we continuously monitor performance and market conditions, making strategic adjustments as needed.',
    },
    {
      title: '5. Ongoing Support and Communication',
      description:
        'We maintain clear, transparent communication with clients, offering regular updates and advisory to ensure confidence throughout the journey.',
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Our Investment Process</h1>
      <div className="row gy-4">
        {steps.map((step, idx) => (
          <div key={idx} className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{step.title}</h5>
                <p className="card-text">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvestmentProcess;
