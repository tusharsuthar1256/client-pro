import Image from 'next/image';
import React from 'react';

const certifiedLogos = [

  {
    alt: 'ISO/IEC 17025:2017',
    src: '/ISO2.png',
  },
  {
    alt: 'ISO 9001:2015',
    src: '/ISO1.png', 
  },
  {
    alt: 'ISO/IEC 17025:2017',
    src: '/ISO3.png', 
  },


];

const Certified = () => {
  return (
    <div className="py-6 px-4 text-center bg-gray-50 ">
      <h1 className="text-4xl md:text-3xl font-semibold mb-6 text-black">
        Laboratory Accreditations and Certifications
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {certifiedLogos.map((logo, index) => (
          <div
            key={index}
            className=" p-4 rounded-lg  w-28 h-28 md:w-36 md:h-36 flex items-center justify-center transition hover:scale-105"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={120}
              
            />
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Certified;
