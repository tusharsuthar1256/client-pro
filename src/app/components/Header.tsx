'use client';

import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-[100vh] overflow-hidden flex justify-center items-center ">
      {/* Background Carousel */}
      <BackgroundCarousel />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        {/* Heading with animation */}
        <h1 className="text-3xl md:text-6xl font-bold mb-6 animate-fade-up opacity-0 dark:text-white text-white animation-delay-200">
          DIAGNOHEALTH PATH LAB
        </h1>

        {/* Subheading with animation */}
        <p className="text-xl md:text-1xl max-w-3xl leading-relaxed animate-fade-up text-white dark:text-white opacity-0 animation-delay-500">
          Comprehensive Drug & Alcohol Testing Services for the Maritime Industry
        </p>
      </div>
    </header>
  );
};

export default Header;
