// Structured knowledge base extracted from Adnan Ahmed's CV.
// Used by the chatbot to answer visitor questions without needing a backend/LLM API.

export const profile = {
  name: "Adnan Ahmed",
  title: "Software Engineer / Full Stack MERN Developer",
  location: "Karachi, Pakistan",
  email: "adnanahmedb7208@gmail.com",
  phone: "+92 318 8397653",
  linkedin: "https://www.linkedin.com/in/adnan-ahmed-066847242/",
  github: "https://github.com/AdnanAhmed04",
  portfolio: "https://adnanahmed04.netlify.app/",
  summary:
    "I am a Full Stack MERN Developer based in Karachi with expertise in React.js, Next.js, Node.js, Express, and MongoDB. I specialize in building scalable, efficient, and user-friendly web applications, combining strong front-end skills with solid back-end development. With a focus on modern UI/UX principles and clean code practices, I thrive in collaborative environments and am passionate about learning new technologies.",
};

export const expertise = [
  "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
  "Next.js & React.js",
  "Modern, responsive UI/UX design",
  "Integrating LLMs / AI features into web apps",
  "REST API design & development",
  "React Native (mobile apps)",
];

export const experience = [
  {
    company: "TailorFlow AI",
    role: "Full Stack Developer",
    period: "Apr 2026 – Present",
    highlights: [
      "Developed multiple web applications, including a Service Management System, using Next.js, Tailwind CSS, and Framer Motion.",
      "Crafted responsive and scalable interfaces with consistent performance across desktop, tablet, and mobile.",
      "Integrated LLM-powered features for intelligent text generation, summarization, and conversational capabilities.",
    ],
    stack: ["React Native", "Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Python"],
  },
  {
    company: "Virtual Care",
    role: "Full Stack Developer",
    period: "Jun 2025 – Mar 2026",
    highlights: [
      "Built multiple projects including a Service Management System using Next.js, Tailwind CSS, and Framer Motion.",
      "Designed and delivered scalable, responsive UIs with seamless cross-device performance.",
      "Applied modern UI/UX principles to improve usability and accessibility.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "MongoDB", "Git", "GitHub"],
  },
  {
    company: "Rawts",
    role: "Front-End Developer",
    period: "Jun 2024 – Sep 2024",
    highlights: [
      "Developed a responsive portfolio website using Gatsby, increasing portfolio views by 35%.",
      "Leveraged Google Analytics to analyze user behavior, boosting engagement by 30%.",
      "Implemented modular coding practices to improve maintainability and scalability.",
    ],
    stack: ["Gatsby.js", "React", "Tailwind CSS", "Google Analytics", "Git", "GitHub"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institute: "Undergraduate",
    period: "2021 – 2025",
    detail: "CGPA: 3.01",
  },
  {
    degree: "Pre-Engineering",
    institute: "Govt Jauhar Degree College",
    period: "Aug 2019 – May 2021",
    detail: "Grade: 71% (A)",
  },
];

export const skills = {
  "Programming Languages": ["Python", "JavaScript (ES6+)"],
  "Markup & Styling": ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Material-UI", "Chakra-UI", "Particle.js", "Framer Motion", "AOS"],
  "Software Development Concepts": ["OOP", "Functional Programming", "Design Patterns", "DSA"],
  "Frameworks & Libraries": ["React.js", "Next.js", "Node.js", "Express.js"],
  Databases: ["MongoDB", "SQL"],
  "Analytics & Monitoring": ["Google Analytics", "Firebase Analytics"],
  Tools: ["Git", "GitHub", "Postman", "Jira"],
  "Cloud & Platforms": ["AWS (S3 bucket)", "Cloudinary"],
};

export const projects = [
  {
    name: "DSA Learning Mobile App",
    description:
      "A cross-platform mobile app for learning Data Structures and Algorithms, with interactive lessons, coding exercises, and progress tracking.",
    stack: ["React Native", "Expo Go", "EAS", "Material UI"],
  },
  {
    name: "Job Finder Platform",
    description:
      "A job aggregation platform that collects and displays opportunities from multiple sources via web scraping, with RESTful APIs for data storage and retrieval.",
    stack: ["React.js", "Node.js", "MongoDB", "Web Scraping"],
  },
  {
    name: "Auto Expense Hub",
    description:
      "A full-stack expense management app for tracking income, expenses, and financial insights with secure backend APIs and interactive dashboards.",
    stack: ["React.js", "Express.js", "MongoDB", "Material UI"],
  },
  {
    name: "AI-Based Home Construction",
    description:
      "An AI-powered platform offering intelligent recommendations and planning support for home construction, using fine-tuned LLMs for personalized guidance and cost estimation.",
    stack: ["React.js", "MongoDB", "Tailwind CSS", "LLM Fine-Tuning", "Python"],
  },
];

export const courses = [
  "Saylani Mass IT Training - Web and Mobile Application Development (2023–2024)",
  "Python by Coursera",
  "Front-End Web Development with JavaScript and React.js (Meta)",
  "Gold Level in JavaScript on HackerRank",
  "Silver star in Problem Solving on HackerRank",
  "Gold Level in Python on HackerRank",
  "Silver star in SQL on HackerRank",
];

export const languages = [
  { name: "English", level: "Professional Proficiency" },
  { name: "Urdu", level: "Native Proficiency" },
];
