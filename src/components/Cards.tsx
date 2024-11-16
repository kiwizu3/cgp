import React from 'react';

const Cards = (services:any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {services.map((service:any, index:number) => (
      <div
        key={index}
        className="bg-white p-6 shadow-subtle rounded-lg transition-transform transform hover:scale-105"
      >
        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    ))}
  </div>
  
  );
};

export default Cards;
