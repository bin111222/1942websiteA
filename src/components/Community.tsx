'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-light to-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our AI Community</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Be part of our growing community of innovators and creators. Share ideas, learn, and grow together.
          </p>
          
          {/* Community Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg"
            >
              <p className="text-3xl font-bold text-primary-dark">500+</p>
              <p className="text-gray-600">Active Members</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg"
            >
              <p className="text-3xl font-bold text-primary-dark">50+</p>
              <p className="text-gray-600">Weekly Events</p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-white text-primary-dark font-semibold
                     shadow-[20px_20px_60px_#d1d1d1,_-20px_-20px_60px_#ffffff]
                     hover:shadow-[inset_20px_20px_60px_#d1d1d1,_inset_-20px_-20px_60px_#ffffff]
                     transition-all duration-300"
          >
            Join Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}; 