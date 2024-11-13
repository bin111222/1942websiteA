// src/components/Hero.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import Link from 'next/link';

// Testimonials data
const testimonials = [
  {
    quote: "Completely transformed our online presence with their AI-powered solutions",
    author: "Dr. Aamod Rao",
    role: "Aesthetic Surgeon, The Sculptique"
  },
  {
    quote: "Incredible results with their web designs and content creation",
    author: "Dr. Hitesh Kubadia",
    role: "Orthopaedic Surgeon, HKS"
  },
  {
    quote: "Very strong sense of design and content creation using AI",
    author: "Emma Williams",
    role: "Director, Facile Skin"
  },
  {
    quote: "The team is super responsive and always willing to go above and beyond",
    author: "Dr. Chirag Shah",
    role: "Laser Eye Surgeon, Canada"
  }
  
];

export const Hero = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const { openQuiz } = useQuiz();
  
    const handleQuizClick = () => {
      console.log('Quiz button clicked'); // Debugging line
      openQuiz();
    };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-32 relative overflow-hidden flex items-center">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="px-6 py-3 rounded-full text-lg md:text-xl font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                AI-Powered Boutique Creative Studio
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-tight lg:leading-snug py-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Designing Tomorrow,{' '}
              <br className="md:hidden" />
              <span className="block mt-2">Today with AI</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform Your Business with AI-Powered Websites, Chatbots, Social Media, and Content Solutions.
            </motion.p>

            {/* Testimonial Slider */}
            <motion.div 
              className="mb-12 h-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg text-gray-600 italic mb-2">"{testimonials[currentTestimonial].quote}"</p>
                <p className="text-sm text-blue-500 font-semibold">{testimonials[currentTestimonial].author}</p>
                <p className="text-xs text-gray-500">{testimonials[currentTestimonial].role}</p>
              </motion.div>
            </motion.div>

            <div className="flex flex-wrap gap-6 justify-center">
            <motion.button
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 30px rgba(45,108,223,0.3)"
    }}
    whileTap={{ scale: 0.95 }}
    onClick={handleQuizClick}
    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
  >
    Start Your AI Journey
  </motion.button>
              
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(45,108,223,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-400 font-medium text-lg rounded-xl backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};