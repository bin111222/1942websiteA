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
    question: "What's your main goal for your digital presence?",
    options: [
      { 
        text: "Increase brand awareness", 
        score: 3,
        category: "Brand Growth",
        insight: "Strong potential for comprehensive brand strategy"
      },
      { 
        text: "Generate more leads", 
        score: 3,
        category: "Lead Generation",
        insight: "Perfect for targeted marketing campaigns"
      },
      { 
        text: "Improve online engagement", 
        score: 3,
        category: "Engagement",
        insight: "Great opportunity for content strategy"
      },
      { 
        text: "Just exploring options", 
        score: 1,
        category: "Exploration",
        insight: "Good starting point for digital presence"
      }
    ],
    feedback: "Understanding your goals helps us create the perfect digital strategy.",
    category: "Digital Goals"
  },
  {
    id: 2,
    question: "What type of content do you currently focus on?",
    options: [
      { 
        text: "Social media and blogs", 
        score: 3,
        category: "Content Creation",
        insight: "Ready for advanced content strategy"
      },
      { 
        text: "Photos and videos", 
        score: 3,
        category: "Visual Content",
        insight: "Great foundation for multimedia expansion"
      },
      { 
        text: "Limited content creation", 
        score: 1,
        category: "Content Development",
        insight: "Opportunity to build content foundation"
      }
    ],
    feedback: "Your content mix influences your digital growth potential.",
    category: "Content Strategy"
  },
  {
    id: 3,
    question: "How often do you update your online presence?",
    options: [
      { 
        text: "Daily updates across platforms", 
        score: 3,
        category: "Active Presence",
        insight: "Perfect for comprehensive strategy"
      },
      { 
        text: "Weekly or monthly updates", 
        score: 2,
        category: "Regular Updates",
        insight: "Good rhythm for content scaling"
      },
      { 
        text: "Occasional updates", 
        score: 1,
        category: "Sporadic Presence",
        insight: "Opportunity for consistent strategy"
      }
    ],
    feedback: "Consistency is key in digital marketing success.",
    category: "Update Frequency"
  },
  {
    id: 4,
    question: "What's your current marketing budget allocation?",
    options: [
      { 
        text: "Dedicated marketing budget", 
        score: 3,
        category: "Full Investment",
        insight: "Ready for comprehensive campaign"
      },
      { 
        text: "Flexible project-based budget", 
        score: 2,
        category: "Project Based",
        insight: "Good for targeted campaigns"
      },
      { 
        text: "Limited or exploring budget", 
        score: 1,
        category: "Budget Planning",
        insight: "Start with essential strategies"
      }
    ],
    feedback: "Budget planning helps optimize your digital marketing ROI.",
    category: "Budget Planning"
  },
  {
    id: 5,
    question: "What's your target audience engagement level?",
    options: [
      { 
        text: "Highly engaged community", 
        score: 3,
        category: "Active Community",
        insight: "Perfect for advanced engagement"
      },
      { 
        text: "Growing engagement", 
        score: 2,
        category: "Growing Audience",
        insight: "Good for engagement strategies"
      },
      { 
        text: "Building audience", 
        score: 1,
        category: "Audience Building",
        insight: "Focus on audience development"
      }
    ],
    feedback: "Understanding your audience helps create targeted content.",
    category: "Audience Engagement"
  }
];

const resultInterpretations = {
  high: {
    title: "Digital Marketing Leader",
    description: "Your brand shows strong potential for advanced digital marketing strategies. You're ready for comprehensive campaigns.",
    recommendations: [
      "Advanced content strategy",
      "Multi-platform campaigns",
      "Influencer collaborations",
      "Brand storytelling"
    ]
  },
  medium: {
    title: "Growing Digital Presence",
    description: "Your digital presence has good foundation with room for strategic growth.",
    recommendations: [
      "Content calendar development",
      "Engagement strategy",
      "Platform optimization",
      "Community building"
    ]
  },
  low: {
    title: "Digital Growth Opportunity",
    description: "You're at the start of your digital journey with great potential for growth.",
    recommendations: [
      "Basic content strategy",
      "Platform selection",
      "Audience research",
      "Brand foundation"
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