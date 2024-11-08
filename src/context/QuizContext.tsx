// src/context/QuizContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';
import Quiz from '@/components/Quiz/Quiz';

interface QuizContextType {
  isQuizOpen: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    console.log('Opening quiz...'); // Debug log
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

  return (
    <QuizContext.Provider value={{ isQuizOpen, openQuiz, closeQuiz }}>
      {children}
      <Quiz /> {/* Add the Quiz component here */}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};