// src/components/Quiz/QuizQuestion.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Option {
  text: string;
  score: number;
  category: string;
  insight: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
  feedback: string;
  category: string;
}

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: Option) => void;
  totalQuestions: number;
  currentQuestion: number;
}

function QuizQuestion({ question, onAnswer, totalQuestions, currentQuestion }: QuizQuestionProps) {
  return (
    <div className="space-y-12">
      {/* Question */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-relaxed"
      >
        {question.question}
      </motion.h3>

      {/* Options */}
      <div className="grid gap-6">
        {question.options.map((option: Option, index: number) => (
          <motion.button
            key={option.text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            onClick={() => onAnswer(option)}
            className="w-full p-6 text-left rounded-xl bg-gray-50 border border-gray-200 hover:bg-white hover:border-blue-500/20 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute top-1/2 -translate-y-1/2 left-6 text-2xl font-bold text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="text-lg font-medium text-gray-700 block pl-12">
              {option.text}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-lg text-gray-500 mt-8 px-4"
      >
        {question.feedback}
      </motion.div>
    </div>
  );
}

export default QuizQuestion;