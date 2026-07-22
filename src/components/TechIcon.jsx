import {
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  Sparkles,
  Terminal,
  Layers,
  Bot,
  Brain,
  Search,
  SearchCheck,
  Palette,
  Music,
  BookOpen,
  Workflow,
  Lightbulb,
  Users,
  TrendingUp,
  FileCode,
  Compass,
  Presentation,
  Image
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa6";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
  SiFramer
} from "react-icons/si";

export default function TechIcon({ name, className = "w-4 h-4" }) {
  switch (name.toLowerCase()) {
    // Languages
    case "javascript":
      return <FaJs className={`${className} text-amber-400`} />;
    case "typescript":
      return <SiTypescript className={`${className} text-blue-500`} />;
    case "python":
      return <FaPython className={`${className} text-yellow-500`} />;
    case "html5":
    case "html":
      return <FaHtml5 className={`${className} text-orange-500`} />;
    case "css3":
    case "css":
      return <FaCss3Alt className={`${className} text-blue-400`} />;

    // Frontend
    case "react.js":
    case "react":
      return <FaReact className={`${className} text-sky-400`} />;
    case "next.js":
    case "nextjs":
      return <SiNextdotjs className={`${className} text-[var(--text-primary)]`} />;
    case "tailwind css":
    case "tailwind":
      return <SiTailwindcss className={`${className} text-teal-400`} />;
    case "responsive web design":
    case "responsive ui development":
      return <Layout className={`${className} text-purple-400`} />;
    case "vite":
      return <SiVite className={`${className} text-yellow-400`} />;
    case "framer motion":
      return <SiFramer className={`${className} text-pink-400`} />;

    // Backend & DB
    case "node.js":
    case "nodejs":
      return <FaNodeJs className={`${className} text-emerald-500`} />;
    case "express.js":
    case "express":
      return <SiExpress className={`${className} text-slate-300`} />;
    case "rest api development":
    case "rest api integration":
      return <Server className={`${className} text-indigo-400`} />;
    case "mongodb":
      return <SiMongodb className={`${className} text-emerald-400`} />;
    case "mongoose":
      return <Database className={`${className} text-red-500`} />;

    // Tools & Version Control
    case "git":
      return <FaGitAlt className={`${className} text-orange-600`} />;
    case "github":
      return <FaGithub className={`${className} text-slate-200`} />;
    case "vs code":
      return <Terminal className={`${className} text-blue-400`} />;
    case "postman":
      return <SiPostman className={`${className} text-orange-500`} />;
    case "mongodb compass":
      return <SiMongodb className={`${className} text-emerald-500`} />;

    // AI Integration & APIs
    case "groq api":
    case "groq":
      return <Cpu className={`${className} text-red-400`} />;
    case "gemini api":
    case "gemini":
      return <Sparkles className={`${className} text-blue-400`} />;
    case "openrouter api":
    case "openrouter":
      return <Workflow className={`${className} text-violet-400`} />;
    case "chatgpt":
      return <Bot className={`${className} text-emerald-400`} />;
    case "claude":
      return <Bot className={`${className} text-amber-500`} />;
    case "grok":
      return <Brain className={`${className} text-pink-500`} />;
    case "cursor":
      return <Code2 className={`${className} text-cyan-400`} />;
    case "antigravity":
      return <Sparkles className={`${className} text-red-500`} />;

    // AI Research & Other Tools
    case "notebooklm":
      return <BookOpen className={`${className} text-sky-400`} />;
    case "perplexity ai":
      return <Search className={`${className} text-teal-300`} />;
    case "claude deep research":
    case "gemini deep research":
      return <SearchCheck className={`${className} text-amber-400`} />;
    case "gamma":
      return <Presentation className={`${className} text-purple-400`} />;
    case "phot.ai":
      return <Image className={`${className} text-pink-400`} />;
    case "nightcafe":
      return <Palette className={`${className} text-indigo-400`} />;
    case "suno ai":
      return <Music className={`${className} text-rose-400`} />;
    case "there's an ai for that":
      return <Compass className={`${className} text-emerald-400`} />;

    // Practices
    case "full stack development":
      return <Layers className={`${className} text-red-400`} />;
    case "problem solving":
      return <Lightbulb className={`${className} text-amber-400`} />;
    case "clean code":
      return <FileCode className={`${className} text-green-400`} />;
    case "team collaboration":
      return <Users className={`${className} text-blue-400`} />;
    case "continuous learning":
      return <TrendingUp className={`${className} text-teal-400`} />;

    default:
      return <Sparkles className={`${className} text-[var(--accent-primary)]`} />;
  }
}
