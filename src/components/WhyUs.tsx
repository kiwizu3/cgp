import React from 'react';

const WhyUs = () => {
  const reasons = [
    { title: "Diversified Investment Portfolios", description: "Balanced approach to maximize returns." },
    { title: "Strategic Planning", description: "Innovative long-term strategies for growth." },
    { title: "Local Expertise", description: "In-depth knowledge of the local market." },
    { title: "Client Focus", description: "Personalized approach to build lasting relationships." },
  ];

  return (
    <section id="why-us" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Capital Growth Partners?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-100 shadow p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
