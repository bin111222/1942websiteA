import {
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudArrowUpIcon,
  CogIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  DocumentMagnifyingGlassIcon,
  LightBulbIcon,
  EnvelopeIcon,
  MegaphoneIcon,
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  ChatBubbleLeftEllipsisIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export const services = [
  {
    title: "AI-Powered Website Design",
    description: "Modern, responsive websites crafted with AI to deliver a seamless user experience and optimized performance.",
    icon: GlobeAltIcon,
    gradient: "from-green-500 to-teal-500",
    details: {
      overview: "Our AI-powered website design service combines cutting-edge artificial intelligence with creative expertise to deliver stunning, high-performance websites.",
      benefits: [
        "Faster development time with AI-assisted coding",
        "Personalized user experiences",
        "Optimized for all devices and platforms",
        "AI-driven content recommendations",
        "Automated performance optimization",
        "Smart SEO integration"
      ],
      process: [
        {
          step: "AI Analysis",
          description: "Our AI analyzes your business needs and target audience to recommend optimal design elements."
        },
        {
          step: "Design Generation",
          description: "Multiple design variations are generated using AI, incorporating your brand guidelines."
        },
        {
          step: "Optimization",
          description: "AI continuously optimizes the website's performance and user experience."
        }
      ],
      examples: [
        {
          title: "E-commerce Platform",
          description: "AI-powered product recommendations and personalized user journeys increased sales by 40%."
        },
        {
          title: "Portfolio Website",
          description: "Smart content organization and dynamic layouts showcase work effectively."
        }
      ]
    }
  },
  {
    title: "Social Media Automation",
    description: "Boost engagement with AI-driven social media strategies, content scheduling, and analytics.",
    icon: ChartBarIcon,
    gradient: "from-blue-500 to-indigo-500",
    details: {
      overview: "Revolutionize your social media presence with AI-powered automation that drives engagement and growth.",
      benefits: [
        "Automated content scheduling",
        "AI-driven hashtag optimization",
        "Engagement analytics and insights",
        "Smart audience targeting",
        "Content performance prediction",
        "Automated response management"
      ],
      process: [
        {
          step: "Strategy Analysis",
          description: "AI analyzes your social media performance and audience behavior."
        },
        {
          step: "Content Optimization",
          description: "Smart algorithms optimize your content for maximum engagement."
        },
        {
          step: "Automated Management",
          description: "Automated posting and engagement tracking across platforms."
        }
      ],
      examples: [
        {
          title: "Retail Brand",
          description: "Increased engagement by 200% through AI-optimized content timing."
        },
        {
          title: "Tech Startup",
          description: "Doubled follower growth with automated content strategy."
        }
      ]
    }
  },
  {
    title: "AI Chatbot Development",
    description: "Intelligent conversational agents that enhance customer service and automate support.",
    icon: ChatBubbleBottomCenterTextIcon,
    gradient: "from-purple-500 to-pink-500",
    details: {
      overview: "Create sophisticated AI-powered chatbots that provide instant, personalized customer support 24/7.",
      benefits: [
        "24/7 customer support",
        "Natural language processing",
        "Multi-language support",
        "Seamless integration",
        "Learning capabilities",
        "Analytics dashboard"
      ],
      process: [
        {
          step: "Requirements Analysis",
          description: "Understanding your specific needs and use cases."
        },
        {
          step: "AI Training",
          description: "Training the chatbot with your business data and scenarios."
        },
        {
          step: "Deployment & Learning",
          description: "Continuous improvement through real-world interactions."
        }
      ],
      examples: [
        {
          title: "Customer Service",
          description: "Reduced response time by 90% with 24/7 automated support."
        },
        {
          title: "Lead Generation",
          description: "Increased qualified leads by 60% through intelligent conversations."
        }
      ]
    }
  },
  {
    title: "Cloud AI Solutions",
    description: "Scalable cloud infrastructure optimized for AI and machine learning workloads.",
    icon: CloudArrowUpIcon,
    gradient: "from-yellow-500 to-orange-500",
    details: {
      overview: "Enterprise-grade cloud solutions designed specifically for AI and machine learning applications.",
      benefits: [
        "Scalable infrastructure",
        "Cost optimization",
        "High availability",
        "Security compliance",
        "Performance monitoring",
        "Automated backups"
      ],
      process: [
        {
          step: "Infrastructure Assessment",
          description: "Evaluating current setup and requirements."
        },
        {
          step: "Cloud Migration",
          description: "Seamless transition to AI-optimized cloud infrastructure."
        },
        {
          step: "Monitoring & Optimization",
          description: "Continuous monitoring and performance optimization."
        }
      ],
      examples: [
        {
          title: "ML Pipeline",
          description: "Reduced training time by 70% with optimized cloud resources."
        },
        {
          title: "AI Scaling",
          description: "Handled 10x workload increase with automatic scaling."
        }
      ]
    }
  },
  {
    title: "AI Process Automation",
    description: "Streamline operations with intelligent automation powered by artificial intelligence.",
    icon: CogIcon,
    gradient: "from-red-500 to-pink-500",
    details: {
      overview: "Transform your business processes with intelligent automation that learns and improves over time.",
      benefits: [
        "Reduced operational costs",
        "Improved accuracy",
        "Faster processing",
        "24/7 operation",
        "Scalable workflows",
        "Error reduction"
      ],
      process: [
        {
          step: "Process Analysis",
          description: "Identifying automation opportunities and requirements."
        },
        {
          step: "AI Implementation",
          description: "Developing and deploying intelligent automation solutions."
        },
        {
          step: "Performance Monitoring",
          description: "Tracking and optimizing automation performance."
        }
      ],
      examples: [
        {
          title: "Document Processing",
          description: "Automated document processing reduced handling time by 85%."
        },
        {
          title: "Quality Control",
          description: "AI-powered QC improved accuracy by 95%."
        }
      ]
    }
  },
  {
    title: "AI Development Services",
    description: "Custom AI solution development for unique business challenges and opportunities.",
    icon: CommandLineIcon,
    gradient: "from-cyan-500 to-blue-500",
    details: {
      overview: "Develop custom AI solutions tailored to your specific business needs and challenges.",
      benefits: [
        "Custom solutions",
        "Scalable architecture",
        "Integration support",
        "Performance optimization",
        "Ongoing maintenance",
        "Technical support"
      ],
      process: [
        {
          step: "Requirements Gathering",
          description: "Understanding your unique needs and objectives."
        },
        {
          step: "Solution Development",
          description: "Building and testing your custom AI solution."
        },
        {
          step: "Deployment & Support",
          description: "Implementing and maintaining your AI system."
        }
      ],
      examples: [
        {
          title: "Predictive Analytics",
          description: "Custom AI model improved forecast accuracy by 40%."
        },
        {
          title: "Computer Vision",
          description: "Automated visual inspection reduced defects by 75%."
        }
      ]
    }
  },
  {
    title: "Visual Design & Branding",
    description: "AI-enhanced designs that capture your brand's essence, from logos to complete branding solutions.",
    icon: SparklesIcon,
    gradient: "from-orange-500 to-yellow-500",
    details: {
      overview: "Transform your brand identity with AI-powered design solutions that create stunning, cohesive visual experiences across all touchpoints.",
      benefits: [
        "AI-generated design variations",
        "Brand consistency automation",
        "Color palette optimization",
        "Typography recommendations",
        "Design trend analysis",
        "Multi-platform asset generation"
      ],
      process: [
        {
          step: "Brand Analysis",
          description: "AI analyzes your brand values and market positioning to inform design direction."
        },
        {
          step: "Design Generation",
          description: "Creating multiple design concepts using AI-powered tools and creative expertise."
        },
        {
          step: "Brand Implementation",
          description: "Deploying cohesive branding across all channels and touchpoints."
        }
      ],
      examples: [
        {
          title: "Brand Refresh",
          description: "Complete brand overhaul increased brand recognition by 85%."
        },
        {
          title: "Logo Design",
          description: "AI-assisted logo design process reduced iteration time by 60%."
        }
      ]
    }
  },
  {
    title: "Customer Support Chatbots",
    description: "24/7 AI chatbots that provide fast, reliable support for a superior customer experience.",
    icon: ChatBubbleLeftEllipsisIcon,
    gradient: "from-blue-500 to-cyan-500",
    details: {
      overview: "Deploy intelligent chatbots that provide instant, personalized customer support around the clock while continuously learning from interactions.",
      benefits: [
        "24/7 availability",
        "Instant response times",
        "Multi-language support",
        "Automated issue resolution",
        "Seamless human handoff",
        "Continuous learning"
      ],
      process: [
        {
          step: "Knowledge Base Setup",
          description: "Building comprehensive knowledge base for accurate responses."
        },
        {
          step: "AI Training",
          description: "Training chatbot with company-specific data and scenarios."
        },
        {
          step: "Continuous Improvement",
          description: "Monitoring and optimizing chatbot performance based on interactions."
        }
      ],
      examples: [
        {
          title: "E-commerce Support",
          description: "Resolved 80% of customer queries automatically within seconds."
        },
        {
          title: "Service Desk",
          description: "Reduced support costs by 60% while improving satisfaction scores."
        }
      ]
    }
  },
  {
    title: "AI Content Personalization",
    description: "Tailored content recommendations powered by AI to keep your audience engaged.",
    icon: AdjustmentsHorizontalIcon,
    gradient: "from-purple-500 to-fuchsia-500",
    details: {
      overview: "Deliver personalized content experiences that resonate with each user through advanced AI algorithms and behavioral analysis.",
      benefits: [
        "Real-time personalization",
        "Behavioral tracking",
        "Dynamic content adaptation",
        "A/B testing automation",
        "Engagement analytics",
        "Cross-platform optimization"
      ],
      process: [
        {
          step: "Data Collection",
          description: "Gathering and analyzing user behavior and preferences."
        },
        {
          step: "Content Mapping",
          description: "Creating personalized content journeys for different user segments."
        },
        {
          step: "Optimization Loop",
          description: "Continuously refining content based on user interactions."
        }
      ],
      examples: [
        {
          title: "News Platform",
          description: "Increased user engagement by 120% with personalized content feeds."
        },
        {
          title: "E-learning Site",
          description: "Improved course completion rates by 45% through adaptive content."
        }
      ]
    }
  },
  {
    title: "Automated SEO Optimization",
    description: "Advanced AI-driven SEO strategies to boost your search rankings and visibility.",
    icon: DocumentMagnifyingGlassIcon,
    gradient: "from-green-500 to-blue-500",
    details: {
      overview: "Leverage AI-powered SEO tools and strategies to improve your search engine rankings and drive organic traffic growth.",
      benefits: [
        "Keyword optimization",
        "Content gap analysis",
        "Technical SEO automation",
        "Competitor tracking",
        "Performance monitoring",
        "ROI tracking"
      ],
      process: [
        {
          step: "SEO Audit",
          description: "Comprehensive analysis of current SEO performance and opportunities."
        },
        {
          step: "Strategy Implementation",
          description: "Executing AI-driven optimization across all content and technical elements."
        },
        {
          step: "Performance Tracking",
          description: "Monitoring rankings and adjusting strategy based on AI insights."
        }
      ],
      examples: [
        {
          title: "E-commerce Site",
          description: "Increased organic traffic by 200% in 6 months."
        },
        {
          title: "Local Business",
          description: "Achieved top 3 rankings for all target keywords."
        }
      ]
    }
  },
  {
    title: "Smart Email Campaigns",
    description: "AI-optimized email campaigns that maximize open rates and conversions.",
    icon: EnvelopeIcon,
    gradient: "from-cyan-500 to-indigo-500",
    details: {
      overview: "Create highly effective email campaigns using AI to optimize content, timing, and personalization for maximum engagement.",
      benefits: [
        "Send time optimization",
        "Subject line testing",
        "Content personalization",
        "Automated segmentation",
        "Conversion tracking",
        "Predictive analytics"
      ],
      process: [
        {
          step: "Audience Analysis",
          description: "Understanding subscriber behavior and preferences."
        },
        {
          step: "Campaign Optimization",
          description: "Using AI to optimize every aspect of email campaigns."
        },
        {
          step: "Performance Analysis",
          description: "Tracking results and implementing AI-driven improvements."
        }
      ],
      examples: [
        {
          title: "Retail Campaign",
          description: "Increased email revenue by 150% through AI optimization."
        },
        {
          title: "Newsletter",
          description: "Doubled open rates with AI-powered subject lines."
        }
      ]
    }
  },
  {
    title: "AI-Powered Digital Advertising",
    description: "Intelligent ad campaigns that target the right audience and boost ROI with AI insights.",
    icon: MegaphoneIcon,
    gradient: "from-red-500 to-orange-500",
    details: {
      overview: "Maximize your advertising ROI with AI-powered campaign optimization and targeting across all digital channels.",
      benefits: [
        "Smart audience targeting",
        "Budget optimization",
        "Creative testing",
        "Cross-channel coordination",
        "Real-time bidding",
        "Performance prediction"
      ],
      process: [
        {
          step: "Campaign Setup",
          description: "Defining objectives and implementing AI-driven targeting."
        },
        {
          step: "Optimization",
          description: "Continuous AI optimization of bids, creatives, and audiences."
        },
        {
          step: "Performance Analysis",
          description: "Detailed analytics and AI-powered insights for improvement."
        }
      ],
      examples: [
        {
          title: "E-commerce Ads",
          description: "Reduced cost per acquisition by 40% while scaling revenue."
        },
        {
          title: "Lead Generation",
          description: "Increased qualified leads by 90% through AI targeting."
        }
      ]
    }
  }
]; 