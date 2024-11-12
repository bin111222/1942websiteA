interface Challenge {
  description: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  link: string;
  tags: string[];
  gradient: string;
  comingSoon: boolean;
  challenges?: (string | Challenge)[];
  solutions: {
    title: string;
    description: string;
    icon: string;
  }[];
  results?: {
    metric: string;
    description: string;
  }[];
  process?: {
    phase: string;
    duration: string;
    description: string;
    deliverables?: string[];
  }[];
  gallery?: {
    url: string;
    title: string;
    description?: string;
  }[];
  technologies?: {
    name: string;
    icon: string;
    category: string;
  }[];
} 