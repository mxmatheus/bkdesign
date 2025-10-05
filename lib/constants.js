/**
 * Site configuration and content constants
 * Centralized data for the portfolio site
 */

// Site configuration
export const siteConfig = {
  name: "Batuhan Köksal",
  title: "Full Stack Developer",
  description: "Creating beautiful and functional web experiences with modern technologies",
  email: "contact@example.com",
  location: "Istanbul, Turkey",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  }
};

// Skills data organized by category
export const skills = [
  // Frontend
  {
    name: "React",
    icon: "Code2",
    category: "frontend",
    level: 90
  },
  {
    name: "Next.js",
    icon: "Layout",
    category: "frontend",
    level: 85
  },
  {
    name: "TypeScript",
    icon: "FileCode",
    category: "frontend",
    level: 80
  },
  {
    name: "TailwindCSS",
    icon: "Palette",
    category: "frontend",
    level: 90
  },
  {
    name: "Framer Motion",
    icon: "Sparkles",
    category: "frontend",
    level: 75
  },
  {
    name: "Three.js",
    icon: "Box",
    category: "frontend",
    level: 70
  },
  // Backend
  {
    name: "Node.js",
    icon: "Server",
    category: "backend",
    level: 85
  },
  {
    name: "Express",
    icon: "Zap",
    category: "backend",
    level: 80
  },
  {
    name: "MongoDB",
    icon: "Database",
    category: "backend",
    level: 75
  },
  {
    name: "PostgreSQL",
    icon: "Database",
    category: "backend",
    level: 70
  },
  {
    name: "REST APIs",
    icon: "Globe",
    category: "backend",
    level: 85
  },
  {
    name: "GraphQL",
    icon: "Network",
    category: "backend",
    level: 65
  },
  // Tools
  {
    name: "Git",
    icon: "GitBranch",
    category: "tools",
    level: 90
  },
  {
    name: "Docker",
    icon: "Container",
    category: "tools",
    level: 70
  },
  {
    name: "Vercel",
    icon: "Cloud",
    category: "tools",
    level: 85
  },
  {
    name: "VS Code",
    icon: "Code",
    category: "tools",
    level: 95
  },
  {
    name: "Figma",
    icon: "Figma",
    category: "tools",
    level: 75
  },
  {
    name: "Jest",
    icon: "TestTube",
    category: "tools",
    level: 70
  }
];

// Projects data
export const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management",
    longDescription: "Built a full-stack e-commerce platform featuring real-time inventory tracking, secure payment processing with Stripe, and an intuitive admin dashboard. The platform handles thousands of products and provides a seamless shopping experience across all devices.",
    technologies: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/project-1.jpg",
    video: "/projects/project-1.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-1",
    accentColor: "#00ffff"
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    longDescription: "Developed a collaborative task management application with real-time synchronization using WebSockets. Features include drag-and-drop task organization, team collaboration, deadline tracking, and detailed analytics dashboard.",
    technologies: ["React", "TypeScript", "Express", "Socket.io", "PostgreSQL"],
    image: "/projects/project-2.jpg",
    video: "/projects/project-2.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-2",
    accentColor: "#ff0080"
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    description: "AI-powered content generation tool for marketers and creators",
    longDescription: "Created an AI-powered content generation platform that helps marketers and content creators produce high-quality content efficiently. Integrated with OpenAI's GPT models and features custom templates, tone adjustment, and multi-language support.",
    technologies: ["Next.js", "OpenAI API", "TailwindCSS", "Prisma", "PostgreSQL"],
    image: "/projects/project-3.jpg",
    video: "/projects/project-3.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-3",
    accentColor: "#00ff88"
  },
  {
    id: "project-4",
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking portfolio performance",
    longDescription: "Built a comprehensive analytics dashboard for tracking investment portfolio performance. Features include real-time stock data integration, interactive charts, portfolio diversification analysis, and automated reporting.",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    image: "/projects/project-4.jpg",
    video: "/projects/project-4.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-4",
    accentColor: "#ff6b00"
  },
  {
    id: "project-5",
    title: "Social Media Platform",
    description: "Niche social media platform for creative professionals",
    longDescription: "Developed a social media platform tailored for creative professionals to showcase their work, connect with peers, and find collaboration opportunities. Features include portfolio galleries, messaging system, and project collaboration tools.",
    technologies: ["Next.js", "GraphQL", "Apollo", "MongoDB", "AWS S3"],
    image: "/projects/project-5.jpg",
    video: "/projects/project-5.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-5",
    accentColor: "#8b00ff"
  },
  {
    id: "project-6",
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with workout plans",
    longDescription: "Created a mobile-first fitness tracking application that helps users track workouts, monitor progress, and follow personalized workout plans. Includes exercise library with video demonstrations, progress charts, and social features.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Firebase"],
    image: "/projects/project-6.jpg",
    video: "/projects/project-6.mp4",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-6",
    accentColor: "#00ffff"
  }
];

// Navigation links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

// Hero CTA buttons
export const heroButtons = [
  {
    text: "View Projects",
    href: "#projects",
    variant: "cyan"
  },
  {
    text: "Contact Me",
    href: "#contact",
    variant: "magenta"
  }
];

// About section content
export const aboutContent = {
  paragraphs: [
    "I'm a passionate Full Stack Developer with a keen eye for creating beautiful, functional, and user-centric digital experiences. With expertise in modern web technologies, I transform ideas into elegant solutions.",
    "My journey in web development started with a curiosity about how things work on the internet. Today, I specialize in building scalable applications using React, Next.js, and Node.js, always staying up-to-date with the latest industry trends.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and the power of collaboration."
  ],
  avatar: "/avatar.png"
};

// Footer social links
// BURAYA KENDİ SOSYAL MEDYA LİNKLERİNİZİ EKLEYİN
export const footerSocialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/batuhankilic",  // Kendi GitHub kullanıcı adınızı yazın
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/batuhankilic",  // Kendi LinkedIn profilinizi yazın
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/batuhankilic",  // Kendi Twitter kullanıcı adınızı yazın
    icon: "Twitter"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/batuhankilic",  // Kendi Instagram kullanıcı adınızı yazın
    icon: "Instagram"
  },
  {
    name: "Email",
    url: "mailto:batuhan@example.com",  // Kendi email adresinizi yazın
    icon: "Mail"
  }
];
