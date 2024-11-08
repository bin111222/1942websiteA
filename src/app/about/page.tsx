'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useQuiz } from '../../context/QuizContext';

const coreValues = [
  {
    icon: "💡",
    title: "Innovation at the Forefront",
    description: "We constantly push boundaries with pioneering AI solutions and creative problem-solving. Our commitment to innovation drives us to bring the latest technology to empower your business.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: "🎯",
    title: "Client-Centric Success",
    description: "Your success is our top priority. We go beyond delivering AI solutions, aiming for measurable outcomes that exceed expectations. We succeed when you succeed.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: "🤝",
    title: "Collaborative Partnership",
    description: "Collaboration is at the heart of our approach. We work closely with you, combining insights to build AI solutions that align perfectly with your unique vision and goals.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: "🔬",
    title: "Research-Driven Excellence",
    description: "We stay at the cutting edge of AI research to bring practical, effective solutions to real-world problems. Our data-driven insights and constant learning fuel transformative results for your business.",
    color: "from-purple-500 to-purple-600"
  }
];

const teamMembers = [
  {
    name: "Varil",
    title: "Founder",
    image: "/images/team/varil.webp",
    description: "The Big Brain"
  },
  {
    name: "Axel",
    title: "Marketing Strategist",
    image: "/images/team/axel.webp",
    description: "Creative Bug"
  },
  {
    name: "Ava",
    title: "Content Specialist",
    image: "/images/team/ava.webp",
    description: "Master of Words and Storytelling"
  },
  {
    name: "Harry",
    title: "SEO Expert",
    image: "/images/team/harry.webp",
    description: "The Search Whisperer"
  },
  {
    name: "Agastya",
    title: "AI Chatbot Architect",
    image: "/images/team/Agastya.webp",
    description: "Conversation Guru"
  },
  {
    name: "Priya",
    title: "Social Media Manager",
    image: "/images/team/Priya.webp",
    description: "Viral Visionary"
  },
  {
    name: "Alia",
    title: "Design Lead",
    image: "/images/team/alia.webp",
    description: "Visual Maestro"
  },
  {
    name: "Kai",
    title: "Analytics Specialist",
    image: "/images/team/kai.webp",
    description: "Data Detective"
  }
];

const CoreValueCard = ({ value }: { value: any }) => {
  return (
    <div className="group relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 
                      hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 
                    group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="bg-blue-50 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl 
                    flex items-center justify-center mb-4 md:mb-6 flex-shrink-0">
          <span className="text-2xl md:text-3xl">{value.icon}</span>
        </div>
        
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            {value.title}
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }: { member: any }) => {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 
                       transition-all duration-300 h-full flex flex-col">
      <div className="relative pt-[100%]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-6 flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
        <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full 
                           text-sm font-medium bg-blue-50 text-blue-600 border border-blue-100 mb-2 md:mb-3">
          {member.title}
        </span>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default function About() {
  const { openQuiz } = useQuiz();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeInAnimation = {
    initial: { opacity: 0, y: isMobile ? 10 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.3 : 0.6 }
  };

  const handleQuizClick = () => {
    console.log('Quiz button clicked');
    openQuiz();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* Hero Section - Optimized */}
      <section className="pt-28 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            {...fadeInAnimation}
            className="flex justify-center mb-4 md:mb-6"
          >
            <span className="inline-block px-6 py-2 md:px-8 md:py-3 rounded-full bg-blue-50 text-blue-600 font-medium text-base md:text-lg border border-blue-100">
              About Us
            </span>
          </motion.div>
          
          <motion.h1 
            {...fadeInAnimation}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 md:mb-8 leading-tight md:leading-tight lg:leading-tight pb-1"
          >
            <span className="block mb-2 md:mb-0 md:inline">Pioneering</span>{' '}
            <span className="block md:inline">AI Solutions</span>
          </motion.h1>
          
          <motion.p 
            {...fadeInAnimation}
            className="text-base md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            Building the future of digital innovation through advanced artificial intelligence
            and creative excellence.
          </motion.p>

          {/* New Get Started Button */}
          <motion.div
            {...fadeInAnimation}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(45,108,223,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleQuizClick}
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started with AI</span>
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - Optimized */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: isMobile ? 0.3 : 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            {...fadeInAnimation}
            className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4 md:mb-6 leading-tight"
          >
            Our Guiding Principles
          </motion.h2>
          
          <motion.p 
            {...fadeInAnimation}
            className="text-base md:text-lg text-gray-400 text-center mb-8 md:mb-12 max-w-3xl mx-auto"
          >
            Empowering Progress Through Innovation, Partnership, and Excellence
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <CoreValueCard value={value} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: isMobile ? 0.3 : 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            {...fadeInAnimation}
            className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4 md:mb-6 leading-tight"
          >
            Meet Our Team
          </motion.h2>
          
          <motion.p 
            {...fadeInAnimation}
            className="text-base md:text-lg text-gray-400 text-center mb-8 md:mb-12 max-w-3xl mx-auto"
          >
            A diverse group of experts passionate about pushing the boundaries of AI technology
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
} 