'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects'; // Import projects from data file

export default function ProjectPage() {
  const params = useParams();
  const projectSlug = params.project as string;

  const project = projects.find((p: Project) => {
    const slug = p.link.replace('/portfolio/', '');
    return slug === projectSlug;
  });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] min-h-[400px] w-full"
      >
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className={`inline-block px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${project.gradient}`}>
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p>{project.fullDescription || project.description}</p>
            </motion.section>

            {project.challenges && (
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <p>{typeof challenge === 'string' ? challenge : challenge.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {project.solutions && (
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span>{solution.icon}</span>
                        <h3 className="font-bold">{solution.title}</h3>
                      </div>
                      <p>{solution.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {project.results && (
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                      <p>{result.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 pt-8 border-t"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 