'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../../components/services/ServiceCard';
import {
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudArrowUpIcon,
  CogIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  DocumentMagnifyingGlassIcon,
  LightBulbIcon,
  EnvelopeIcon,
  MegaphoneIcon,
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  ChatBubbleLeftEllipsisIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "AI-Powered Website Design",
    description: "Modern, responsive websites crafted with AI to deliver a seamless user experience and optimized performance.",
    icon: GlobeAltIcon,
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Social Media Automation",
    description: "Boost engagement with AI-driven social media strategies, content scheduling, and analytics.",
    icon: ChartBarIcon,
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    title: "Content Generation",
    description: "Efficient, high-quality AI-generated content for blogs, social media, and marketing.",
    icon: CommandLineIcon,
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Visual Design & Branding",
    description: "AI-enhanced designs that capture your brand's essence, from logos to complete branding solutions.",
    icon: SparklesIcon,
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    title: "Customer Support Chatbots",
    description: "24/7 AI chatbots that provide fast, reliable support for a superior customer experience.",
    icon: ChatBubbleLeftEllipsisIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Content Personalization",
    description: "Tailored content recommendations powered by AI to keep your audience engaged.",
    icon: AdjustmentsHorizontalIcon,
    gradient: "from-purple-500 to-fuchsia-500"
  },
  {
    title: "Automated SEO Optimization",
    description: "Advanced AI-driven SEO strategies to boost your search rankings and visibility.",
    icon: DocumentMagnifyingGlassIcon,
    gradient: "from-green-500 to-blue-500"
  },
  {
    title: "Smart Email Campaigns",
    description: "AI-optimized email campaigns that maximize open rates and conversions.",
    icon: EnvelopeIcon,
    gradient: "from-cyan-500 to-indigo-500"
  },
  {
    title: "AI-Powered Digital Advertising",
    description: "Intelligent ad campaigns that target the right audience and boost ROI with AI insights.",
    icon: MegaphoneIcon,
    gradient: "from-red-500 to-orange-500"
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="min-h-screen py-32 relative overflow-hidden" ref={ref}>
      {/* Background Gradients - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        {/* Gradient Circles remain unchanged for desktop */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.1 : 0.2 }}
            className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-8"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Transformative AI Solutions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Unleashing the Power of AI in Your Digital Journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-0">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradient={service.gradient}
              delay={isMobile ? 0 : index * 0.1}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.2 : 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.a
            href="https://wa.me/919833812505"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={isMobile ? {} : { 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(45,108,223,0.3)"
            }}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Schedule a Consultation</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}