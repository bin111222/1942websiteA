'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const backgroundElements = [
  { icon: '⚡', size: 'text-2xl' },
  { icon: '🤖', size: 'text-2xl' },
  { icon: '🧠', size: 'text-2xl' },
  { icon: '💡', size: 'text-2xl' },
  { icon: '🔮', size: 'text-2xl' },
  { icon: '⚙️', size: 'text-2xl' },
];

const createScatteredPositions = (count: number) => {
  const positions = [];
  const gridSize = Math.ceil(Math.sqrt(count));
  
  for (let i = 0; i < count; i++) {
    const gridX = (i % gridSize) / gridSize;
    const gridY = Math.floor(i / gridSize) / gridSize;
    
    const randomOffset = 0.15;
    const x = (gridX * 100) + (Math.random() * randomOffset * 100 - randomOffset * 50);
    const y = (gridY * 100) + (Math.random() * randomOffset * 100 - randomOffset * 50);
    
    positions.push({
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(5, Math.min(95, y)),
    });
  }
  
  return positions;
};

const fixedPositions = createScatteredPositions(15);

export const Background = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 50, stiffness: 100 };
  const mouseXSpring = useSpring(useMotionValue(0), springConfig);
  const mouseYSpring = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      setMousePosition({ x, y });
      mouseXSpring.set(x * 20);
      mouseYSpring.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseXSpring, mouseYSpring]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
          }} />
        </div>

        {fixedPositions.map((position, i) => (
          <motion.div
            key={i}
            className={`absolute ${backgroundElements[i % backgroundElements.length].size} opacity-30`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              x: mouseXSpring,
              y: mouseYSpring,
            }}
            animate={{
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          >
            {backgroundElements[i % backgroundElements.length].icon}
          </motion.div>
        ))}

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(45,108,223,0.08) 0%, transparent 70%)`,
              width: `${600 + i * 200}px`,
              height: `${600 + i * 200}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 30}%`,
              x: mouseXSpring,
              y: mouseYSpring,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 50 }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};