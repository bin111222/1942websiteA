'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    category: "Data Analytics",
    description: "Real-time data visualization platform with predictive analytics capabilities.",
    image: "/images/portfolio/analytics.jpg",
    tags: ["AI", "Data Visualization", "React"],
    link: "#",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Neural Network Visualization",
    category: "Machine Learning",
    description: "Interactive 3D visualization of deep learning model architectures.",
    image: "/images/portfolio/neural.jpg",
    tags: ["Machine Learning", "WebGL", "Three.js"],
    link: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Predictive Maintenance System",
    category: "Industrial AI",
    description: "IoT-based system for predicting equipment maintenance needs.",
    image: "/images/portfolio/maintenance.jpg",
    tags: ["IoT", "AI", "Python"],
    link: "#",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Intelligent Customer Service Bot",
    category: "NLP",
    description: "Advanced chatbot with natural language understanding capabilities.",
    image: "/images/portfolio/chatbot.jpg",
    tags: ["NLP", "Machine Learning", "Node.js"],
    link: "#",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Computer Vision Quality Control",
    category: "Computer Vision",
    description: "Automated quality inspection system using computer vision.",
    image: "/images/portfolio/vision.jpg",
    tags: ["Computer Vision", "Python", "TensorFlow"],
    link: "#",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "AI Content Generation Platform",
    category: "Content Generation",
    description: "Platform for generating and optimizing marketing content using AI.",
    image: "/images/portfolio/content.jpg",
    tags: ["GPT-3", "React", "Node.js"],
    link: "#",
    gradient: "from-amber-500 to-orange-500"
  }
];

interface PortfolioCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    gradient: string;
  };
  index: number;
}

function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
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
      <div className="relative p-6">
        {/* Category Badge */}
        <div className={`absolute -top-4 left-6 px-4 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium shadow-lg`}>
          {project.category}
        </div>

        {/* Text Content */}
        <div className="pt-2">
          <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <motion.a
            href={project.link}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-purple-500 transition-colors duration-300"
          >
            View Project
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Corner Accent */}
      <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="relative">
        <section className="relative py-32 overflow-hidden">
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
                className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-8"
              >
                Our Portfolio
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 leading-tight pb-2">
                Featured Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Explore our collection of innovative AI solutions and transformative digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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