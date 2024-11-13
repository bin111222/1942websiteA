'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  delay?: number;
  isMobile?: boolean;
  onClick: () => void;
}

function ServiceCard({ title, description, icon: Icon, gradient, delay = 0, isMobile = false, onClick }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: isMobile ? 0.3 : 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      {/* Icon Container */}
      <div className="mb-6 relative">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} p-3 shadow-lg`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold relative">
          {/* Background text layer */}
          <span className="text-gray-800 transition-opacity duration-300 group-hover:opacity-0">
            {title}
          </span>
          {/* Gradient text layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {title}
          </span>
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Learn More Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-blue-500 font-medium pt-2 group-hover:text-purple-500 transition-colors duration-300"
        >
          <span>Learn More</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>

      {/* Corner Accent */}
      <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
    </motion.div>
  );
}

export default ServiceCard;