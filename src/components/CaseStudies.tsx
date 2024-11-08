// src/components/CaseStudies.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChartBarIcon, 
  CubeIcon, 
  BeakerIcon,
  GlobeAltIcon,
  CommandLineIcon,
  CogIcon,
  CloudIcon,
  CpuChipIcon,
  WrenchIcon
} from '@heroicons/react/24/outline';

// Define containerVariants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Define cardVariants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Define caseStudies array
const caseStudies = [
  {
    title: "The Sculptique",
    description: "Developing an AI-powered website for a world-class aesthetic surgeon",
    tags: ["AI Integration", "Web Development", "AI Chatbot"],
    gradient: "from-blue-500/80 to-purple-600/80",
    comingSoon: false,
    image: "/images/portfolio/ai-dashboard.jpg"
  },
  {
    title: "HKS Clinic",
    description: "Interactive 3D visualization of deep learning models",
    tags: ["Machine Learning", "WebGL", "Interactive Design"],
    gradient: "from-purple-600/80 to-pink-500/80",
    comingSoon: false,
    image: "/images/portfolio/neural-network.jpg"
  },
  {
    title: "Predictive Maintenance System",
    description: "AI-driven system for industrial equipment monitoring",
    tags: ["IoT", "AI", "Industrial"],
    gradient: "from-cyan-500/80 to-blue-500/80",
    comingSoon: false,
    image: "/images/portfolio/predictive-maintenance.jpg"
  }
];

// Define tagColors mapping
const tagColors = {
  "AI Integration": "black",
  "Data Analytics": "black",
  "UX Design": "black",
  "Machine Learning": "black",
  "WebGL": "black",
  "Interactive Design": "black",
  "IoT": "black",
  "AI": "black",
  "Industrial": "black"
};

// Define tagIcons mapping
const tagIcons = {
  "AI Integration": CpuChipIcon,
  "Data Analytics": ChartBarIcon,
  "UX Design": GlobeAltIcon,
  "Machine Learning": BeakerIcon,
  "WebGL": CubeIcon,
  "Interactive Design": CommandLineIcon,
  "IoT": CloudIcon,
  "AI": CpuChipIcon,
  "Industrial": WrenchIcon
};

// Define StudyType interface
interface StudyType {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  comingSoon: boolean;
  image: string;
}

// Action Button for the Case Study Card Component
function CaseStudyCard({ study, index }: { study: StudyType, index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {/* Fallback gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-50`} />
        
        {/* Project Image */}
        <Image
          src={study.image || '/images/portfolio/default.jpg'}
          alt={study.title}
          fill
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className={`absolute -top-4 left-6 px-4 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-medium shadow-lg`}>
          {study.tags[0]}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col h-full">
          {/* Title and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
              {study.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {study.description}
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Footer Content - Tags and Button */}
          <div className="mt-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.slice(1).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Case Study Link */}
            {!study.comingSoon && (
              <Link href={`/case-studies/${encodeURIComponent(study.title.toLowerCase().replace(/\s+/g, '-'))}`} legacyBehavior>
                <motion.a
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-purple-500 transition-colors duration-300"
                >
                  View Case Study
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${study.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Coming Soon Overlay */}
      {study.comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Coming Soon
            </span>
            <div className="mt-2 w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
  
  // Main Case Studies Section with CTA Button
  function CaseStudies() {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <section className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.span 
              variants={cardVariants}
              className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-8"
            >
              Featured Case Studies
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Our Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with AI-driven solutions.
            </p>
          </motion.div>
  
          {/* Case Studies Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} study={study} index={index} />
            ))}
          </motion.div>
  
          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16 sm:mt-20"
          >
            <Link href="/portfolio" legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(45,108,223,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-lg shadow-lg transition-transform duration-200"
                aria-label="View all case studies"
              >
                View All Case Studies
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }
  
  export default CaseStudies;