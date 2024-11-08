// src/components/Navbar.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
      
      // Calculate opacity based on scroll position
      const maxScroll = 200; // Adjust this value to control fade speed
      const newOpacity = Math.max(1 - (scrollPosition / maxScroll), 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ opacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/30 backdrop-blur-xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-6">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-800 z-50"
          >
            <div className="relative h-12 w-32">
              <Image 
                src="/images/logo.png" 
                alt="1942 Studio" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === link.path
                    ? 'text-blue-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transition-all transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transition-all transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Mobile Menu - Updated Background */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween' }}
                className="fixed inset-0 bg-white/30 backdrop-blur-xl border-l border-white/20 z-40 md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl font-medium transition-colors duration-300 ${
                        pathname === link.path
                          ? 'text-blue-500'
                          : 'text-gray-800 hover:text-blue-500'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};