'use client';

import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-6 h-6 text-teal-400" />
              <span className="text-lg font-bold">Diagnohealth Pathlab</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed break-words">
              India-registered lab offering certified Drug & Alcohol Testing for the maritime sector across global ports.
            </p>
            <div className="flex flex-wrap gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Our Services", "Our Team", "Our Clients", "Contact us"].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-md font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300 break-words">
              <li>Unannounced / Random Drug & Alcohol Testing</li>
              <li>Potable (Drinking) Water Analysis</li>
              <li>Biological Monitoring for Chemical Exposures (Benzene Testing)</li>
              <li>Sampling Kits – To Meet Emergencies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold mb-3">Contact Info</h3>
            <div className="space-y-4 text-sm text-gray-300">
              {/* Emails */}
              <div className="flex items-start">
                <Mail className="w-4 h-4 text-teal-400 mr-2 mt-0.5" />
                <div className="space-y-1 break-words">
                  <p>operationsdiagnohealth@gmail.com</p>
                  <p>davidpedrodavid40@gmail.com</p>
                  <p>collectorsdiagnohealth@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="w-4 h-4 text-teal-400 mr-2 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+918291292085" className="block hover:underline">+91 82912 92085</a>
                  <a href="tel:+919082622303" className="block hover:underline">+91 90826 22303</a>
                  <a href="tel:+919082622362" className="block hover:underline">+91 90826 22362</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-teal-400 mr-2 mt-0.5" />
                <p className="break-words">
                  Plot No.179, Shop No.14,<br />
                  Proviso Heights, Sector 17,<br />
                  Ulwe, Navi Mumbai, Maharashtra 410206
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Diagnohealth Pathlab. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <a href="#privacy" className="hover:text-teal-400">Privacy Policy</a>
              <a href="#terms" className="hover:text-teal-400">Terms & Conditions</a>
              <a href="#sitemap" className="hover:text-teal-400">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
