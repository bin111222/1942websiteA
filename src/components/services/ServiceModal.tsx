'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Portal from '../Portal';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    gradient: string;
    details?: {
      overview?: string;
      benefits?: string[];
      features?: string[];
      process?: {
        step: string;
        description: string;
      }[];
      examples?: {
        title: string;
        description: string;
      }[];
    };
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            style={{ 
              zIndex: 9999,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-50"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className={`p-6 rounded-xl bg-gradient-to-r ${service.gradient} mb-8`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90">
                    {service.description}
                  </p>
                </div>

                {/* Overview */}
                {service.details?.overview && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-semibold mb-4">Overview</h4>
                    <p className="text-gray-600">{service.details.overview}</p>
                  </motion.div>
                )}

                {/* Key Benefits */}
                {service.details?.benefits && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.details.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* How It Works */}
                {service.details?.process && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-semibold mb-4">How It Works</h4>
                    <div className="space-y-4">
                      {service.details.process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex gap-4 items-start"
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center font-semibold`}>
                            {index + 1}
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">{step.step}</h5>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Examples */}
                {service.details?.examples && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-semibold mb-4">Success Stories</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.details.examples.map((example, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="p-4 rounded-lg bg-gray-50"
                        >
                          <h5 className="font-medium mb-2">{example.title}</h5>
                          <p className="text-gray-600 text-sm">{example.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
} 