import React from 'react';

const Services = () => {
  const services = [
    { title: "Qualified Team", description: "A team of experienced professionals." },
    { title: "Individual Approach", description: "Tailored investment strategies for unique needs." },
    { title: "100% Success", description: "Proven track record of delivering results." },
    { title: "100% Satisfaction", description: "Dedicated to ensuring client satisfaction." },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
