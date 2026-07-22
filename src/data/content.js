export const personalInfo = {
  name: "Bhautik Tank",
  title: "Full Stack Developer (MERN) | AI-Integrated Web Applications",
  heroSubtitle: "MERN Stack Developer · AI-Powered Web Apps",
  location: "Ahmedabad, Gujarat, India",
  email: "tankbhautik2002@gmail.com",
  phone: "+91 9023264126",
  linkedin: "https://linkedin.com/in/bhautik-tank",
  linkedinDisplay: "linkedin.com/in/bhautik-tank",
  github: "https://github.com/MrTankIsHere",
  githubDisplay: "github.com/MrTankIsHere",
  summary:
    "Full Stack Developer with hands-on internship experience building web applications using React.js, Next.js, Node.js, Express.js, and MongoDB (MERN stack). B.Tech graduate in Computer Engineering in 2026. Skilled in building responsive web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Experienced in developing REST APIs, integrating AI services such as Groq, Gemini, and OpenRouter APIs, and creating modern, user-friendly interfaces. A quick learner with strong problem-solving abilities, eager to contribute to real-world software projects while continuously expanding technical expertise."
};

export const experiences = [
  {
    company: "Vneviks Skill Tech Pvt. Ltd.",
    role: "MERN Stack Intern",
    period: "Jan 2026 - Apr 2026",
    location: "Ahmedabad, India",
    bullets: [
      "Developed and tested full-stack web application modules using React.js, Node.js, Express.js, and MongoDB.",
      "Participated in structured training in MERN architecture, REST API design, and database management, strengthening core full-stack skills.",
      "Built and debugged application features applying component reusability, state management, and responsive UI practices.",
      "Practiced debugging, testing, and maintaining application features following clean coding principles.",
      "Worked with developers to understand software development workflows and implement project requirements."
    ]
  }
];

export const projects = [
  {
    title: "ChipWise",
    subtitle: "Processor & Laptop Recommendation Platform",
    description:
      "A full-stack web application in next.js that helps users compare processors and receive personalized laptop recommendations using intelligent filtering, benchmark visualization, and Groq powered AI assistance.",
    bullets: [
      "Built a full-stack web app (Next.js, TypeScript, MongoDB/Mongoose) centralizing 137 processor and 45 laptop specs, powering a rule-based recommendation engine across 6 use-case profiles (gaming, programming, content creation, battery, Linux, future-proofing).",
      "Implemented interactive data exploration with TanStack Table (filtering/sorting) and Recharts for side-by-side spec comparisons.",
      "Integrated an AI advisor (Groq API) that answers natural-language questions grounded strictly in live database data, avoiding hallucinated output.",
      "Shipped a responsive UI (Tailwind CSS, shadcn/ui) with light/dark themes, glassmorphism styling, and a custom scroll-scrubbing video hero; deployed on Vercel."
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "Mongoose",
      "Zustand",
      "Groq API"
    ],
    featured: true,
    github: "https://github.com/MrTankIsHere/ChipWise",
    live: "https://chipwise.vercel.app"
  },
  {
    title: "Bunny-Book",
    subtitle: "Library Management System",
    description:
      "Full-stack MERN app enabling digital booking of library resources and study rooms with real-time, conflict-free availability tracking.",
    bullets: [
      "Developed a responsive MERN application for managing library resources and study room bookings.",
      "Implemented conflict-free reservation logic for efficient study room scheduling.",
      "Designed REST APIs and MongoDB collections to manage books, users, and reservation data.",
      "Focused on clean UI, responsive layouts, and efficient database operations."
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    featured: false,
    github: "https://github.com/MrTankIsHere/Library-Management-System",
    live: "#"
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal SPA",
    description:
      "Performant single-page application built with React and Vite using reusable component architecture and modern animated UI.",
    bullets: [
      "Designed and built a performant single-page application (React.js, Vite) using reusable, maintainable component architecture.",
      "Implemented modern animated UI to demonstrate front-end engineering proficiency.",
      "Designed a clean glassmorphism interface supporting both light and dark themes.",
      "Optimized the website for responsiveness, performance, and accessibility."
    ],
    stack: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    featured: false,
    github: "https://github.com/MrTankIsHere/Portfolio",
    live: "#"
  }
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"]
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Web Design"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Development"]
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose"]
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub"]
  },
  {
    title: "Development Tools",
    items: ["VS Code", "Postman", "MongoDB Compass"]
  },
  {
    title: "AI Integration",
    items: ["Groq API", "Gemini API", "OpenRouter API"]
  },
  {
    title: "AI Tools",
    items: ["Claude", "Gemini", "ChatGPT", "Grok", "Cursor", "Antigravity"]
  },
  {
    title: "AI Research Tools",
    items: [
      "NotebookLM",
      "Perplexity AI",
      "Claude Deep Research",
      "Gemini Deep Research"
    ]
  },
  {
    title: "Other AI Tools",
    items: [
      "Gamma",
      "Phot.ai",
      "NightCafe",
      "Suno AI",
      "There's An AI For That"
    ]
  },
  {
    title: "Practices",
    items: [
      "Full Stack Development",
      "Problem Solving",
      "REST API Integration",
      "Responsive UI Development",
      "AI Integration",
      "Clean Code",
      "Team Collaboration",
      "Continuous Learning"
    ]
  }
];

export const education = [
  {
    title: "B.Tech Computer Engineering",
    school: "Aditya Silver Oak Institute of Technology",
    years: "2023 - 2026",
    cgpa: "CGPA 9.34/10"
  },
  {
    title: "Diploma in Computer Engineering",
    school: "Government Polytechnic Ahmedabad",
    years: "2018 - 2021",
    cgpa: "CGPA 8.87/10"
  }
];

export const spokenLanguages = [
  { name: "English", level: "Intermediate" },
  { name: "Hindi", level: "Native" },
  { name: "Gujarati", level: "Native" }
];
