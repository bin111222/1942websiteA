import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: "The Sculptique",
    category: "AI Healthcare",
    description: "Developing an AI-powered website for a world-class aesthetic surgeon",
    fullDescription: "The Sculptique represents a breakthrough in aesthetic healthcare technology...",
    image: "/images/portfolio/sculptique.png",
    tags: ["AI Integration", "Web Development", "AI Chatbot"],
    link: "/portfolio/sculptique",
    gradient: "from-blue-600 to-purple-600",
    comingSoon: false,
    challenges: [
      "Integration of complex medical knowledge with AI systems to give accuration information",
      "Ensuring HIPAA compliance and data security",
      "Creating an intuitive interface for medical procedures",
      "Real-time consultation scheduling system",
      "Multi-language support for international patients"
    ],
    solutions: [
      {
        title: "AI-Powered Consultation",
        description: "Implemented advanced natural language processing for patient queries",
        icon: "🤖"
      },
      {
        title: "Secure Infrastructure",
        description: "Built HIPAA-compliant data handling with encrypted storage",
        icon: "🔒"
      },
      {
        title: "Interactive UI",
        description: "Developed an intuitive interface with 3D procedure visualizations",
        icon: "💻"
      }
    ],
    results: [
      {
        metric: "200%",
        description: "Increase in online consultations"
      },
      {
        metric: "40%",
        description: "Reduction in administrative work"
      },
      {
        metric: "95%",
        description: "Patient satisfaction rate"
      }
    ],
    gallery: [
      {
        url: "/images/portfolio/sculptique/homepage.png",
        title: "Homepage Design",
        description: "Modern and clean homepage design focusing on user experience"
      },
      {
        url: "/images/portfolio/sculptique/consultation.png",
        title: "AI Consultation Interface",
        description: "Interactive consultation system with real-time responses"
      },
      {
        url: "/images/portfolio/sculptique/dashboard.png",
        title: "Patient Dashboard",
        description: "Comprehensive dashboard for tracking treatment progress"
      }
    ],
    technologies: [
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        category: "Frontend"
      },
      {
        name: "TensorFlow",
        icon: "/icons/tensorflow.svg",
        category: "AI/ML"
      },
      {
        name: "OpenAI",
        icon: "/icons/openai.svg",
        category: "AI/ML"
      },
      {
        name: "AWS Healthcare",
        icon: "/icons/aws.svg",
        category: "Infrastructure"
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        category: "Database"
      }
    ],
    process: [
      {
        phase: "Discovery",
        description: "Extensive research on healthcare AI requirements",
        duration: "2 weeks"
      },
      {
        phase: "Design",
        description: "UI/UX design with focus on medical accessibility",
        duration: "3 weeks"
      },
      {
        phase: "Development",
        description: "Agile development with continuous integration",
        duration: "12 weeks"
      },
      {
        phase: "Testing",
        description: "Rigorous security and compliance testing",
        duration: "4 weeks"
      },
      {
        phase: "Deployment",
        description: "Phased rollout with monitoring",
        duration: "2 weeks"
      }
    ]
  },
  {
    title: "HKS Clinic",
    category: "Healthcare",
    description: "A comprehensive digital platform for one of Mumbai's premier dermatology clinics.",
    fullDescription: "HKS Clinic's digital transformation project focuses on streamlining patient experiences and clinic operations.",
    image: "/images/portfolio/hks-clinic.png",
    gradient: "from-blue-400 to-cyan-500",
    tags: ["Web Development", "Clinic Management", "Patient Portal"],
    link: "/portfolio/hks-clinic",
    challenges: [
      "Streamlining clinic operations",
      "Patient data management",
      "Appointment scheduling optimization",
      "Digital transformation of existing processes"
    ],
    solutions: [
      {
        title: "Digital Infrastructure",
        description: "Building a modern, integrated digital platform for clinic management.",
        icon: "🏥"
      },
      {
        title: "Patient Portal",
        description: "Developing an intuitive patient portal for appointment booking and treatment tracking.",
        icon: "👥"
      }
    ],
    process: [
      {
        phase: "Planning",
        duration: "2 weeks",
        description: "Comprehensive clinic workflow analysis and requirements gathering",
        deliverables: ["Requirement Analysis", "Technical Roadmap"]
      },
      {
        phase: "Development",
        duration: "8 weeks",
        description: "Platform development with focus on user experience",
        deliverables: ["Core Platform", "Patient Portal", "Admin Dashboard"]
      }
    ],
    comingSoon: true
  },
  {
    title: "Facile Skin",
    category: "Skincare Tech",
    description: "Revolutionary skincare platform combining AI diagnostics with personalized treatment.",
    fullDescription: "Facile Skin is pioneering the future of personalized skincare through advanced AI technology and expert dermatological knowledge.",
    image: "/images/portfolio/facile-skin.png",
    gradient: "from-pink-500 to-rose-500",
    tags: ["AI", "Skincare", "E-commerce", "Personalization"],
    link: "/portfolio/facile-skin",
    challenges: [
      "AI-powered skin analysis integration",
      "Personalized product recommendations",
      "Secure user data handling",
      "Real-time skin tracking system"
    ],
    solutions: [
      {
        title: "AI Skin Analysis",
        description: "Advanced skin analysis system using computer vision and deep learning.",
        icon: "🔍"
      },
      {
        title: "Recommendation Engine",
        description: "Smart product recommendation system based on individual skin profiles.",
        icon: "🎯"
      }
    ],
    process: [
      {
        phase: "Research",
        duration: "3 weeks",
        description: "Skincare technology research and AI model development",
        deliverables: ["AI Model Architecture", "Platform Design"]
      },
      {
        phase: "Development",
        duration: "10 weeks",
        description: "Platform development and AI integration",
        deliverables: ["Core Platform", "AI Integration", "E-commerce System"]
      }
    ],
    comingSoon: true
  },
  {
    title: "Dr. Chirag Shah",
    category: "Medical Portfolio",
    description: "A state-of-the-art digital presence for a leading dermatologist, showcasing expertise and facilitating patient engagement.",
    fullDescription: "Creating a professional digital platform that reflects Dr. Chirag Shah's expertise while providing valuable resources for patients.",
    image: "/images/portfolio/dr-chirag.png",
    tags: ["Web Development", "Medical Portfolio", "Patient Education", "Consultation"],
    link: "/portfolio/dr-chirag",
    gradient: "from-indigo-500 to-purple-500",
    challenges: [
      "Professional brand representation",
      "Educational content management",
      "Patient engagement features",
      "Treatment showcase platform"
    ],
    solutions: [
      {
        title: "Professional Portfolio",
        description: "Creating an elegant, professional digital presence that showcases expertise.",
        icon: "👨‍⚕️"
      },
      {
        title: "Patient Resources",
        description: "Developing comprehensive educational resources and engagement tools.",
        icon: "📚"
      }
    ],
    process: [
      {
        phase: "Design",
        duration: "2 weeks",
        description: "Professional portfolio design and content strategy",
        deliverables: ["Brand Guidelines", "Website Design", "Content Structure"]
      },
      {
        phase: "Development",
        duration: "6 weeks",
        description: "Website development with focus on user experience",
        deliverables: ["Portfolio Website", "Resource Center", "Contact System"]
      }
    ],
    comingSoon: true
  }
]; 