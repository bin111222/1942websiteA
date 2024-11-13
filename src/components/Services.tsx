'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ServiceModal from './services/ServiceModal';
import { services } from '@/data/services';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  delay?: number;
  onClick: () => void;
}

function ServiceCard({ title, description, icon: Icon, gradient, delay = 0, onClick }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/5 cursor-pointer"
      onClick={onClick}
    >
      {/* Hover Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Content Container */}
      <div className="relative p-8">
        {/* Icon Container */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-xl`} />
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-2.5 shadow-lg`}
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
      </div>

      {/* Corner Accent */}
      <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${gradient} opacity-10 blur-2xl group-hover:opacity-75 transition-opacity duration-500`} />
    </motion.div>
  );
}

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const featuredServices = services.slice(0, 6);

  return (
    <>
      <section className="py-32 relative overflow-hidden" ref={ref}>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-8"
            >
              Featured Services
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-tight lg:leading-snug py-1">
              AI Solutions for Every Need
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI services can transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-20"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(45,108,223,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-lg shadow-lg"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService || services[0]}
      />
    </>
  );
}; 