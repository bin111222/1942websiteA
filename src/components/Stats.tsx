'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  ClockIcon, 
  SparklesIcon,
  GlobeAltIcon,
  FilmIcon,
  PhotoIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    number: "35%",
    label: "Increase in Leads",
    description: "Year-over-year growth in qualified leads",
    icon: ChartBarIcon,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    number: "40%",
    label: "Increase in Online Presence",
    description: "Enhanced digital visibility and engagement",
    icon: GlobeAltIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "7+",
    label: "Years in the Creative Business",
    description: "Delivering excellence since 2017",
    icon: ClockIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "200+",
    label: "Artists Collaborated With",
    description: "Creative partnerships worldwide",
    icon: UserGroupIcon,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    number: "1000+",
    label: "Marketing Materials Created",
    description: "Comprehensive marketing solutions",
    icon: SparklesIcon,
    gradient: "from-pink-500 to-purple-500"
  },
  {
    number: "100s",
    label: "Hours of Content Shot",
    description: "Professional video production",
    icon: FilmIcon,
    gradient: "from-purple-500 to-blue-500"
  },
  {
    number: "2000+",
    label: "Images Delivered",
    description: "High-quality visual content",
    icon: PhotoIcon,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    number: "600+",
    label: "Blogs Written",
    description: "Engaging content creation",
    icon: DocumentTextIcon,
    gradient: "from-indigo-500 to-purple-500"
  }
];

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-8"
          >
            Our Impact
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-tight lg:leading-snug py-1">
            Driving Real Results
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through innovative AI solutions and delivering measurable outcomes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6"
            >
              {/* Icon */}
              <div className="mb-4">
                <stat.icon className={`w-8 h-8 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
              </div>

              {/* Number */}
              <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}
              </h3>

              {/* Label */}
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-gray-600">
                {stat.description}
              </p>

              {/* Background Accent */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 