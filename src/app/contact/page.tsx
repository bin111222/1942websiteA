// src/app/contact/page.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <section className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-block px-8 py-3 rounded-full bg-blue-50 text-blue-600 font-medium text-lg border border-blue-100">
              Contact Us
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 leading-tight pb-2"
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
          >
            Ready to transform your business with AI? We're here to help.
          </motion.p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <EnvelopeIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <a href="mailto:info@1942studio.com" className="text-blue-500 hover:text-blue-600 transition-colors">
                info@1942studio.com
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <PhoneIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <a href="tel:+919833812505" className="text-blue-500 hover:text-blue-600 transition-colors">
                +91 98338 12505
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <MapPinIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Remote</h3>
              <p className="text-gray-600">
                Asia
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}