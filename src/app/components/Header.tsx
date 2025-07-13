'use client';



import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';


const Header: React.FC = () => {





  return (
    <header className="relative min-h-[100vh] overflow-hidden flex justify-center items-center">
      {/* Background Carousel */}
      
<BackgroundCarousel/>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl md:text-6xl font-bold">DIAGNOHEALTH PATH LAB</h1>
        </div>

        <p className="text-xl md:text-1xl mb-8 max-w-3xl leading-relaxed">
          Comprehensive Drug & Alcohol Testing Services for the Maritime Industry
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
