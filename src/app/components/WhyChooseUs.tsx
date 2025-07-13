'use client';

import React from 'react';
import { CheckCircle, DollarSign, Globe, Shield } from 'lucide-react';



const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: 'Fixed Pricing – No Hidden Costs',
      description: 'Transparent, competitive pricing with no surprise fees or additional charges',
    },
    {
      icon: Globe,
      title: 'Worldwide Network of Certified Collectors',
      description: 'Access to trained professionals at major ports across the globe',
    },
    {
      icon: Shield,
      title: 'Compliance with OCIMF, USCG, US DOT, SAMHSA, NIDA',
      description: 'Meeting all international maritime and regulatory standards',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Diagnohealth Pathlab?</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/70 border border-teal-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 p-4 rounded-full shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 mb-3">
                <reason.icon className="w-6 h-6 text-teal-600" />
                <h3 className="text-lg font-semibold text-gray-900 text-center">{reason.title}</h3>
              </div>

              <p className="text-sm text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default WhyChooseUs;
