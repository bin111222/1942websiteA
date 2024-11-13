import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'thesculptique',
    title: "The Sculptique",
    category: "Aesthetic Healthcare",
    description: "Developing an AI-powered website for a world-class aesthetic surgeon",
    fullDescription: "The Sculptique is a modern, high-end aesthetic plastic surgery brand aiming to establish a unique online presence that goes beyond conventional medical websites. The goal is to reflect the brand’s sophistication, innovation, and customer-centered approach.",
    image: "/images/portfolio/thesculptique.png",
    tags: ["AI Integration", "Web Development", "AI Chatbot"],
    link: "/portfolio/thesculptique.png",
    gradient: "from-blue-600 to-purple-600",
    comingSoon: false,
    challenges: [
        "Create a distinctive digital identity to craft a visually compelling website that resonates with an audience seeking premium aesthetic services",
        "Ensure user-friendly navigation to provide an intuitive and seamless user experience, emphasizing easy access to information on services, qualifications, and patient testimonials",
        "Showcase brand trust and authority by highlighting credentials, experience, and professional achievements to foster trust and credibility",
        "Incorporate advanced technology with innovative features like AI-powered chatbots to enhance customer service and engagement",
    ],
    solutions: [
      {
        title: "AI-Powered Website",
        description: "Implemented real-time accurate medical grade information for all services",
        icon: "🤖"
      },
      {
        title: "Advanced SEO Techniques",
        description: "Going above and beyond to ensure the website is found by search engines",
        icon: "🔒"
      },
      {
        title: "Interactive UI",
        description: "Developed an intuitive interface for easy navigation and information access",
        icon: "💻"
      },
      {
        title: "AI-Powered Chatbot",
        description: "Developed an intuitive AI chatbot for patient engagement and information access",
        icon: "📲"
      }
    ],
    results: [
      {
        metric: "30%",
        description: "Increase in online consultations"
      },
      {
        metric: "75%",
        description: "Reduction in administrative work"
      },
      {
        metric: "90%",
        description: "Patient satisfaction rate"
      }
    ],
    gallery: [
      {
        url: "/images/projects/sculptique/1.webp",
        title: "Homepage Design",
        description: "Modern and clean web design focusing on user experience"
      },
      {
        url: "/images/projects/sculptique/2.webp",
        title: "AI Consultation Interface",
        description: "Interactive consultation system with real-time responses"
      },
      {
        url: "/images/projects/sculptique/3.webp",
        title: "Advanced SEO Articles",
        description: "Advanced SEO articles to ensure the website is found by search engines"
      }
    ],
    
    process: [
      {
        phase: "Discovery",
        description: "Extensive research on the business niche and topics that resonate with the target audience",
        duration: "1 week"
      },
      {
        phase: "Design",
        description: "UI/UX design with focus on ease to use and intuitive navigation",
        duration: "2 weeks"
      },
      {
        phase: "Development",
        description: "Agile development with continuous integration",
        duration: "2 weeks"
      },
      {
        phase: "Testing",
        description: "Rigorous security and compliance testing",
        duration: "2 weeks"
      },
      {
        phase: "Deployment",
        description: "Phased rollout with monitoring",
        duration: "1 week"
      }
    ]
  },
  {
    id: 'aimedical',
    title: "HKS Clinic",
    category: "Bone Healthcare",
    description: "A comprehensive digital platform for one of Mumbai's premier orthopedic clinics.",
    fullDescription: "HKS Clinic's digital transformation project focuses on streamlining patient experiences and clinic operations.",
    image: "/images/portfolio/hks-clinic.png",
    gradient: "from-blue-600 to-purple-600",
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
    gallery: [
        {
          url: "/images/projects/hks-clinic/1.webp",
          title: "Homepage Design",
          description: "Modern and clean homepage design focusing on user experience"
        },
        {
          url: "/images/projects/hks-clinic/2.webp",
          title: "AI Consultation Interface",
          description: "Interactive consultation system with real-time responses"
        },
        {
          url: "/images/projects/hks-clinic/3.webp",
          title: "Patient Dashboard",
          description: "Comprehensive dashboard for tracking treatment progress"
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
    comingSoon: false
  },
  {
    id: 'industrialai',
    title: "Industrial AI Platform",
    category: "Skincare Tech",
    description: "Stunning skincare product visuals powered by AI",
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

gallery: [
    {
      url: "/images/projects/facile-skin/1.webp",
      title: "Homepage Design",
      description: "Modern and clean homepage design focusing on user experience"
    },
    {
        url: "/images/projects/facile-skin/2.webp",
      title: "AI Consultation Interface",
      description: "Interactive consultation system with real-time responses"
    },
    {
      url: "/images/projects/facile-skin/3.webp",
        title: "Patient Dashboard",
        description: "Comprehensive dashboard for tracking treatment progress"
        }
    ],
    comingSoon: true
  },
  {
    id: 'dr-chirag',
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
    gallery: [
      {
        url: "/images/projects/dr-chirag/1.webp",
        title: "Portfolio Homepage",
        description: "Professional portfolio showcasing expertise"
      }
    ],
    comingSoon: true
  }
]; 