interface Challenge {
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link: string;
  gradient: string;
  comingSoon: boolean;
  challenges?: (string | Challenge)[];
  solutions: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  results?: Array<{
    metric: string;
    description: string;
  }>;
  gallery: Array<{
    url: string;
    title: string;
    description: string;
  }>;
  process: Array<{
    phase: string;
    description: string;
    duration: string;
    deliverables?: string[];
  }>;
} 