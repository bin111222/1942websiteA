'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectModal from '@/components/ProjectModal';
import { Project } from '@/types/project';
import { projects } from '@/data/projects';

interface PortfolioCardProps {
  project: Project;
  index: number;
}

function PortfolioCard({ project, index }: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Fallback gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
          
          {/* Project Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative p-4">
          {/* Category Badge */}
          <div className={`absolute -top-3 left-4 px-4 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium shadow-lg`}>
            {project.category}
          </div>

          {/* Text Content */}
          <div className="pt-2">
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Project Link */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-purple-500 transition-colors duration-300"
            >
              <span>View Project</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Add Coming Soon Overlay */}
        {project.comingSoon && (
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

                  {/* Animated line */}
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

                  {/* Subtitle with typing effect */}
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

        {/* Corner Accent */}
        <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
      </motion.div>

      {isModalOpen && (
        <ProjectModal 
          project={project}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 md:pt-36 md:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-6 py-2.5 rounded-full text-base font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4" // Reduced margin
              >
                Our Portfolio
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 leading-tight pb-2"> {/* Reduced margin */}
                Featured Projects
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"> {/* Added bottom margin */}
                Explore our collection of innovative AI solutions and transformative digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid Section - Added bottom padding */}
        <section className="pb-20 md:pb-24 lg:pb-32 relative"> {/* Added bottom padding */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <PortfolioCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 