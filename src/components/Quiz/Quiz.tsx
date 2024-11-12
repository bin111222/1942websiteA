// src/components/Quiz/Quiz.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import { useQuiz } from '../../context/QuizContext';

// Define interfaces
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

interface Answer extends Option {
  questionId: number;
}

const questions = [
  {
    id: 1,
    question: "Do you currently have a website for your business?",
    options: [
      { 
        text: "No website at all", 
        score: 1,
        category: "Web Presence",
        insight: "Perfect starting point for a modern website"
      },
      { 
        text: "Basic website that needs updating", 
        score: 2,
        category: "Web Update",
        insight: "Good opportunity for modernization"
      },
      { 
        text: "Social media pages only", 
        score: 1,
        category: "Digital Presence",
        insight: "Ready to expand online presence"
      }
    ],
    feedback: "Understanding your current online presence helps us create the right strategy.",
    category: "Web Presence"
  },
  {
    id: 2,
    question: "What's your main goal for getting online?",
    options: [
      { 
        text: "Attract more customers", 
        score: 3,
        category: "Growth",
        insight: "Focus on lead generation and visibility"
      },
      { 
        text: "Showcase products/services", 
        score: 2,
        category: "Showcase",
        insight: "Portfolio-focused approach needed"
      },
      { 
        text: "Improve customer communication", 
        score: 2,
        category: "Communication",
        insight: "Enhanced customer interaction tools"
      }
    ],
    feedback: "Your goals will shape the features we prioritize.",
    category: "Business Goals"
  },
  {
    id: 3,
    question: "How do you currently handle customer inquiries?",
    options: [
      { 
        text: "Phone and email only", 
        score: 1,
        category: "Basic Communication",
        insight: "Ready for digital communication channels"
      },
      { 
        text: "Social media messages", 
        score: 2,
        category: "Social Communication",
        insight: "Can centralize communication"
      },
      { 
        text: "Struggling to manage inquiries", 
        score: 3,
        category: "Communication Management",
        insight: "AI chat support could help"
      }
    ],
    feedback: "Modern tools can help streamline customer communication.",
    category: "Customer Service"
  },
  {
    id: 4,
    question: "How often would you like to update your online content?",
    options: [
      { 
        text: "Regularly (weekly/monthly)", 
        score: 3,
        category: "Active Content",
        insight: "Content management system needed"
      },
      { 
        text: "Occasionally", 
        score: 2,
        category: "Basic Content",
        insight: "Simple content tools sufficient"
      },
      { 
        text: "Rarely (yearly)", 
        score: 1,
        category: "Static Content",
        insight: "Static website with basic updates"
      }
    ],
    feedback: "Regular content updates help maintain online visibility.",
    category: "Content Management"
  },
  {
    id: 5,
    question: "What's your comfort level with technology?",
    options: [
      { 
        text: "Need everything managed for me", 
        score: 1,
        category: "Full Service",
        insight: "Managed solution recommended"
      },
      { 
        text: "Comfortable with basic tools", 
        score: 2,
        category: "Semi-Managed",
        insight: "Balanced support approach"
      },
      { 
        text: "Ready to learn and manage", 
        score: 3,
        category: "Self-Managed",
        insight: "Training and tools setup"
      }
    ],
    feedback: "We'll tailor the solution to your comfort level.",
    category: "Technical Comfort"
  }
];

const resultInterpretations = {
  high: {
    title: "Ready for Digital Growth",
    description: "You're well-positioned to benefit from a modern online presence with smart automation.",
    recommendations: [
      "Modern, mobile-friendly website",
      "AI-powered chat support",
      "Easy content management system",
      "Social media integration"
    ]
  },
  medium: {
    title: "Digital Transformation Ready",
    description: "A structured approach to building your online presence will help you grow steadily.",
    recommendations: [
      "Professional website setup",
      "Basic chat support",
      "Simple content updates",
      "Social media presence"
    ]
  },
  low: {
    title: "Starting Your Digital Journey",
    description: "Let's build a strong foundation for your online presence with the basics done right.",
    recommendations: [
      "Simple, effective website",
      "Contact form setup",
      "Basic business information",
      "Easy maintenance plan"
    ]
  }
};

function Quiz() {
  const { isQuizOpen, closeQuiz } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: Option) => {
    const newAnswer: Answer = {
      ...answer,
      questionId: questions[currentQuestion].id
    };
    
    setAnswers(prev => [...prev, newAnswer]);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <AnimatePresence>
      {isQuizOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm sm:p-0"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-screen sm:h-auto sm:max-w-4xl sm:mx-4 sm:rounded-2xl bg-white/95 backdrop-blur-xl sm:border sm:border-gray-200 shadow-xl overflow-y-auto sm:max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={closeQuiz}
              className="absolute top-safe right-4 sm:top-4 sm:right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors z-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 pt-safe sm:static sm:mb-8 w-full sm:max-w-[70%] mx-auto px-2 sm:px-0 bg-white/95 z-40">
              <div className="h-1 bg-gray-100 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center pb-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            {/* Content */}
            <div className="h-full pt-16 sm:pt-0 px-4 sm:px-4 flex flex-col">
              {!showResults ? (
                <QuizQuestion
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
                  totalQuestions={questions.length}
                  currentQuestion={currentQuestion}
                />
              ) : (
                <QuizResults
                  answers={answers}
                  questions={questions}
                  interpretations={resultInterpretations}
                  onReset={resetQuiz}
                  onClose={closeQuiz}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Quiz;