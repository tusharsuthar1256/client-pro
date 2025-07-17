'use client';

import Link from 'next/link';
import React from 'react';

const Clients: React.FC = () => {
  const clientNames = [
    'Viswa Group',
    'Josh Teck Marine',
    'ETC...',
    
  ];

  return (
    <section id="clients" className="pt-1 pb-7 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Esteemed Clients</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading maritime companies worldwide
          </p>
        </div>

        {/* Client Name Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientNames.map((name, index) => (
            <div
              key={index}
              className="bg-white text-center text-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 font-semibold text-lg"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href='/Partner-with-us'>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
            Join Our Client Network
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clients;
