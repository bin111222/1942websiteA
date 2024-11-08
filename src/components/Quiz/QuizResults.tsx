// src/components/Quiz/QuizResults.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, ClockIcon, LightBulbIcon } from '@heroicons/react/24/outline';

interface Question {
  id: number;
  category: string;
  feedback: string;
  question: string;
}

interface Answer {
  score: number;
  text: string;
  category: string;
  questionId: number;
}

interface Interpretation {
  title: string;
  description: string;
  recommendations: string[];
}

interface Interpretations {
  high: Interpretation;
  medium: Interpretation;
  low: Interpretation;
}

interface QuizResultsProps {
  answers: Answer[];
  questions: Question[];
  interpretations: Interpretations;
  onReset: () => void;
  onClose: () => void;
}

function QuizResults({ answers, questions, interpretations, onReset, onClose }: QuizResultsProps) {
  const maxPossibleScore = questions.length * 3;
  const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
  const scorePercentage = (totalScore / maxPossibleScore) * 100;

  const getInterpretation = () => {
    if (scorePercentage >= 80) return interpretations.high;
    if (scorePercentage >= 50) return interpretations.medium;
    return interpretations.low;
  };

  const currentInterpretation = getInterpretation();

  return (
    <div className="relative max-h-[80vh] overflow-y-auto">
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Score Overview */}
          <div className="text-center space-y-6">
            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={440}
                  initial={{ strokeDashoffset: 440 }}
                  animate={{ strokeDashoffset: 440 - (440 * scorePercentage) / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  {Math.round(scorePercentage)}%
                </motion.span>
                <span className="text-sm text-gray-500">AI Readiness</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-bold text-gray-800">
                {currentInterpretation.title}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {currentInterpretation.description}
              </p>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ChartBarIcon,
                title: "Implementation Readiness",
                value: `${Math.round(scorePercentage * 0.9)}%`,
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: ClockIcon,
                title: "Time to Market",
                value: scorePercentage >= 80 ? "2-3 Months" : scorePercentage >= 50 ? "3-6 Months" : "6+ Months",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: LightBulbIcon,
                title: "Innovation Potential",
                value: `${Math.round(scorePercentage * 1.1)}%`,
                color: "from-pink-500 to-rose-500"
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <metric.icon className="w-8 h-8 mb-4 text-gray-400" />
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{metric.title}</h4>
                <p className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${metric.color}`}>
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Recommended Next Steps</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentInterpretation.recommendations.map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{recommendation}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-6"
          >
            <motion.button
              onClick={() => {
                window.location.href = '/contact';
                onClose();
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
                       text-white font-medium text-lg shadow-lg transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
            
            <div className="flex gap-6">
              <motion.button
                onClick={onReset}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-8 py-4 rounded-xl border border-gray-200 text-gray-600 
                         hover:bg-gray-50 transition-all duration-300"
              >
                Retake Quiz
              </motion.button>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-8 py-4 rounded-xl border border-gray-200 text-gray-600 
                         hover:bg-gray-50 transition-all duration-300"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default QuizResults;