'use client'

import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-8 h-8 text-teal-400" />
              <span className="text-xl font-bold">Diagnohealth Pathlab</span>
            </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
  India-registered lab offering certified Drug & Alcohol Testing for the maritime sector across global ports.
</p>

            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Our Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Our Team</a></li>
              <li><a href="#clients" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Our Clients</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Contact us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
       <ul className="space-y-2 text-sm">
  <li><span className="text-gray-300">Unannounced / Random Drug & Alcohol Testing</span></li>
  <li><span className="text-gray-300">Potable (Drinking) Water Analysis</span></li>
  <li><span className="text-gray-300">Biological Monitoring for Chemical Exposures (Benzene Testing)</span></li>
  <li><span className="text-gray-300">Sampling Kits – To Meet Emergencies</span></li>
</ul>

          </div>

     {/* Contact Info */}
<div>
  <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
  <div className="space-y-3">
    {/* Emails */}
    <div className="flex items-start">
      <Mail className="w-5 h-5 text-teal-400 mr-2 mt-0.5" />
      <div className="text-gray-300 text-sm space-y-1">
        <p>operationsdiagnohealth@gmail.com</p>
        <p>davidpedrodavid40@gmail.com</p>
        <p>collectorsdiagnohealth@gmail.com</p>
      </div>
    </div>

    {/* Phone Numbers */}
    <div className="flex items-start">
      <Phone className="w-5 h-5 text-teal-400 mr-2 mt-0.5" />
      <div className="text-gray-300 text-sm space-y-1">
        <a href="tel:+918291292085" className="block hover:underline">+91 82912 92085</a>
        <a href="tel:+919082622303" className="block hover:underline">+91 90826 22303</a>
        <a href="tel:+919082622362" className="block hover:underline">+91 90826 22362</a>
      </div>
    </div>

    {/* Address */}
    <div className="flex items-start">
      <MapPin className="w-5 h-5 text-teal-400 mr-2 mt-0.5" />
      <span className="text-gray-300 text-sm">
     plot No.179, Shop No.14,<br/> Proviso Heights, Sector 17, Ulwe, Navi Mumbai, Maharashtra 410206
      </span>
    </div>
  </div>
</div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Diagnohealth Pathlab. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Terms & Conditions</a>
              <a href="#sitemap" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
