export interface QuizOption {
  text: string;
  score: number;
  category: string;
  insight: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  feedback: string;
  category: string;
}

export interface QuizAnswer {
  questionId: number;
  option: QuizOption;
  score: number;
}

export interface ResultInterpretation {
  title: string;
  description: string;
  recommendations: string[];
}

export interface QuizResults {
  answers: QuizAnswer[];
  totalScore: number;
  scorePercentage: number;
  level: 'high' | 'medium' | 'low';
  interpretation: ResultInterpretation;
  priorities: {
    category: string;
    score: number;
    insight: string;
  }[];
} 