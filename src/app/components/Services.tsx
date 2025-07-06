'use client';

import React from 'react';
import { FlaskConical, Droplet, ShieldCheck, Package } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FlaskConical,
      title: 'Unannounced / Random Drug & Alcohol Testing',
    },
    {
      icon: Droplet,
      title: 'Potable (Drinking) Water Analysis',
    },
    {
      icon: ShieldCheck,
      title: 'Biological Monitoring for Chemical Exposures - Benzene Testing',
    },
    {
      icon: Package,
      title: 'Sampling Kits - To Meet Emergencies',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Comprehensive testing services tailored to the maritime industry&apos;s unique needs.
</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white h-64 flex flex-col justify-center items-center text-center rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 px-2">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
