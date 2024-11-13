// src/components/CaseStudies.tsx
'use client';
import React, { useState } from 'react';
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
import ProjectModal from './ProjectModal';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';

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

// Add this near the top of the file, after the imports
const FEATURED_PROJECT_IDS = [
  'thesculptique', // Replace with your actual project IDs
  'aimedical',
  'industrialai'
];

// Action Button for the Case Study Card Component
function CaseStudyCard({ 
  study, 
  index, 
  setSelectedProject 
}: { 
  study: Project; 
  index: number;
  setSelectedProject: (project: Project | null) => void;
}) {
  const handleClick = () => {
    if (!study.comingSoon) {
      setSelectedProject(study);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
      onClick={handleClick}
      style={{ cursor: study.comingSoon ? 'default' : 'pointer' }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[300px]">
        {/* Fallback gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-50`} />
        
        {/* Project Image */}
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            console.error(`Failed to load image: ${study.image}`);
            // Optionally set a fallback image
            const imgElement = e.target as HTMLImageElement;
            imgElement.src = '/images/fallback.jpg';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/30 to-transparent" />
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
            <h3 className="relative text-2xl font-bold mb-2">
              {/* Background text layer */}
              <span className="text-gray-800 transition-opacity duration-300 group-hover:opacity-0">
                {study.title}
              </span>
              {/* Gradient text layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {study.title}
              </span>
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
              <motion.button
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
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${study.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Coming Soon Overlay */}
      {study.comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/95 to-white/98 backdrop-blur-md z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative flex flex-col items-center"
          >
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 blur-sm" />
              <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 blur-sm" />
              <div className="absolute inset-8 rounded-full border-2 border-pink-500/20 blur-sm" />
            </motion.div>

            {/* Main content container */}
            <motion.div
              className="relative z-10 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Glowing effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Text content */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight pb-2"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Revealing Soon
                </motion.div>

                <motion.div
                  className="mt-4 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                />

                <motion.p
                  className="mt-4 text-gray-600 text-center max-w-[200px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  This project is currently
                  <motion.span
                    className="block font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    under R&D
                  </motion.span>
                </motion.p>
              </div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    scale: 0
                  }}
                  animate={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
    // Filter projects to show only featured ones
    const featuredProjects = projects.filter(project => 
      FEATURED_PROJECT_IDS.includes(project.id)
    ).slice(0, 3); // Ensure we only show 3 projects max
  
    return (
      <>
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
              {featuredProjects.map((project, index) => (
                <CaseStudyCard 
                  key={project.title} 
                  study={project} 
                  index={index}
                  setSelectedProject={setSelectedProject}
                />
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

        {/* Add ProjectModal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </>
    );
  }
  
  export default CaseStudies;