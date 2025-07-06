'use client';



import React, { useState, useEffect } from 'react';
import BackgroundCarousel from './BackgroundCarousel';


const Header: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

const [_, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative min-h-[100vh] overflow-hidden flex justify-center items-center">
      {/* Background Carousel */}
      
<BackgroundCarousel/>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-4xl md:text-6xl font-bold">Diagnohealth Pathlab</h1>
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
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
