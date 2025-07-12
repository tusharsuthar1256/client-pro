'use client';

import React, { useState } from 'react';
import BackgroundCarousel from '../components/BackgroundCarousel';

const JoinNowPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/partner-with-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', designation: '', email: '', company: '', message: '' });
      } else {
        setStatus(result.message || 'Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative min-h-[100vh] overflow-hidden flex justify-center items-center py-10 pt-23 px-4">
      <BackgroundCarousel />
      <div className="relative bg-white shadow-lg rounded-xl p-8 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Join Now</h2>

        <form className="space-y-4 text-gray-900" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g. Lab Manager, Procurement Head, Owner"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company / Laboratory Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company or Lab Name"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message / Description</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you want to join..."
              rows={4}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-teal-700 transition duration-300 font-semibold"
          >
            Submit
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-blue-800 font-medium">{status}</p>
        )}
      </div>
    </div>
  );
};

export default JoinNowPage;
