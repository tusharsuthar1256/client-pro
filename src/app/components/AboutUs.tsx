'use client'
import React from 'react';
import { Award, Globe, Shield } from 'lucide-react';
import Image from 'next/image';


const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Diagnohealth Pathlab</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-700 text-justify">
  <p className="mb-6">
    DiagnoHealth Path Lab is a globally recognized and India-registered laboratory, specializing in drug and alcohol testing services for the marine industry. 
    Our services are aligned with international maritime standards and are available across major global ports.
  </p>
  <p className="mb-6">
    We follow testing protocols based on the principles of NIDA (National Institute on Drug Abuse, USA) and US-SAMHSA (Substance Abuse and Mental Health Services Administration), 
    and are certified under ISO 9001:2015 and ISO 14001:2015, ensuring reliable, safe, and compliant testing solutions worldwide.
  </p>
</div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-teal-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">ISO Certified</h3>
                <p className="text-sm text-gray-600">9001:2015 & QMS</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Global Coverage</h3>
                <p className="text-sm text-gray-600">Major Ports Worldwide</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Compliant</h3>
                <p className="text-sm text-gray-600">International Standards</p>
              </div>
            </div>
          </div>

          <div className="relative">

            <div className="relative w-full h-96"> 
      <Image
        src="/aboutImg.jpg"
        alt="Example"
        fill 
        className="object-cover rounded-2xl" 
      />
    </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
