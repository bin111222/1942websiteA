'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const Z_INDICES = {
  MODAL: 99999,
  MODAL_CONTENT: 100000,
  GALLERY: 100001,
  BACK_BUTTON: 100001
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState<null | { url: string; title: string; description?: string }>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const parseDuration = (duration: string) => {
    const number = parseInt(duration.split(' ')[0]);
    return isNaN(number) ? 0 : number;
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage && project?.gallery) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, selectedImage, project?.gallery?.length]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenges', label: 'Challenges', show: project.challenges?.length },
    { id: 'solutions', label: 'Solutions', show: project.solutions?.length },
    { id: 'results', label: 'Results', show: project.results?.length },
    { id: 'gallery', label: 'Gallery', show: project.gallery?.length },
    { id: 'process', label: 'Process', show: project.process?.length }
  ].filter(tab => tab.show !== 0);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (selectedImage) {
        setSelectedImage(null);
      } else {
        onClose();
      }
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0"
        style={{ zIndex: Z_INDICES.MODAL }}
        onClick={handleBackdropClick}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <div 
          className="relative w-full h-full overflow-y-auto bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[500px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                console.error(`Failed to load hero image: ${project.image}`);
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = '/images/fallback.jpg'; // Make sure to have a fallback image
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            
            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <div className="max-w-7xl mx-auto">
                <span className={`
                  inline-block px-5 py-2.5 rounded-full 
                  text-white text-sm font-medium 
                  bg-gradient-to-r ${project.gradient}
                  shadow-lg mb-6
                `}>
                  {project.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm bg-white/15 backdrop-blur-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="sticky top-0 bg-white border-b border-gray-200" style={{ zIndex: Z_INDICES.MODAL_CONTENT }}>
            <div className="max-w-7xl mx-auto px-6">
              <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      whitespace-nowrap py-6 px-1 border-b-2 font-medium text-sm
                      transition-all duration-300
                      ${activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-7xl mx-auto px-6 py-12 pb-24">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>
            )}

            {/* Challenges Tab */}
            {activeTab === 'challenges' && project.challenges && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-red-500 text-xl mt-1">⚠️</span>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {typeof challenge === 'object' ? challenge.description : challenge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Solutions Tab */}
            {activeTab === 'solutions' && project.solutions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{solution.icon}</span>
                      <h3 className="relative font-bold text-xl">
                        <span className="text-gray-800 transition-opacity duration-300 group-hover:opacity-0">
                          {solution.title}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {solution.title}
                        </span>
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Results Tab */}
            {activeTab === 'results' && project.results && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {result.metric}
                    </div>
                    <p className="text-gray-600">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && project.gallery && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className="group relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        console.error(`Failed to load gallery image: ${image.url}`);
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.src = '/images/fallback.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-lg font-medium px-6 text-center">
                        {image.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Process Tab */}
            {activeTab === 'process' && project.process && (
              <div className="relative">
                <div className="absolute left-[29px] w-0.5 h-full bg-gray-200" />
                
                <div className="space-y-12">
                  {project.process.map((step, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-[29px] w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-lg" />
                      
                      <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="relative text-xl font-bold">
                              <span className="text-gray-800 transition-opacity duration-300 group-hover:opacity-0">
                                {step.phase}
                              </span>
                              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {step.phase}
                              </span>
                            </h3>
                            <span className="inline-block mt-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                              {step.duration}
                            </span>
                          </div>
                          
                          <span className="text-4xl font-bold text-gray-100">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>

                        {step.deliverables && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div 
        className="fixed bottom-8 left-8"
        style={{ zIndex: Z_INDICES.BACK_BUTTON }}
      >
        <button
          onClick={onClose}
          className="group flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <svg 
            className="w-5 h-5 text-gray-600 group-hover:-translate-x-1 transition-transform duration-300" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium text-gray-600">Back to Projects</span>
        </button>
      </div>

      {/* Image Gallery Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95"
          style={{ zIndex: Z_INDICES.GALLERY }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-7xl">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
              />
              
              {selectedImage.description && (
                <div className="absolute left-0 right-0 bottom-20 text-center">
                  <p className="text-white/90 text-lg px-4 py-2 bg-black/30 backdrop-blur-sm inline-block rounded-lg">
                    {selectedImage.description}
                  </p>
                </div>
              )}

              <div className="fixed bottom-6 left-6 z-[100001]">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="group flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300"
                >
                  <svg 
                    className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="font-medium text-white">Back to Gallery</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          {!isFullscreen ? (
            // Regular view
            <div className="relative max-w-[900px] w-full mx-auto">
              <div className="relative w-full h-[600px]">
                <Image
                  src={project.gallery[currentImageIndex].url}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain cursor-zoom-in"
                  onClick={() => setIsFullscreen(true)}
                />
              </div>
              
              {/* Back to Projects button */}
              <button
                onClick={onClose}
                className="absolute -bottom-16 left-4 flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Back to Projects
              </button>
            </div>
          ) : (
            // Fullscreen view
            <div className="fixed inset-0 z-60 bg-black flex items-center justify-center">
              <Image
                src={project.gallery[currentImageIndex].url}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-contain cursor-zoom-out"
                onClick={() => setIsFullscreen(false)}
              />
              
              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentImageIndex(prev => prev === 0 ? project.gallery.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setCurrentImageIndex(prev => prev === project.gallery.length - 1 ? 0 : prev + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Close fullscreen button */}
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white">
                {currentImageIndex + 1} / {project.gallery.length}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}