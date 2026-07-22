import { motion } from "framer-motion";
import { personalInfo } from "../data/content";
import { ArrowRight, FolderCode, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Dynamic Background Animated Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] gradient-bg rounded-full blur-[140px] opacity-25 -z-10 pointer-events-none"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-[300px] h-[300px] gradient-bg rounded-full blur-[120px] opacity-15 -z-10 pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs font-semibold tracking-wide text-[var(--accent-primary)] border-[var(--glass-border)]"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <span>OPEN FOR FULL STACK DEVELOPER ROLES</span>
        </motion.div>

        {/* Hero Display Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.08] tracking-tight text-[var(--text-primary)] uppercase"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 font-display text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-secondary)] tracking-wide max-w-3xl"
        >
          {personalInfo.title}
        </motion.p>

        {/* Short Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative gradient-bg px-7 py-3.5 rounded-full font-semibold text-sm text-white shadow-lg hover:shadow-red-900/30 flex items-center gap-2 transition-all duration-300 hover:scale-[1.03]"
          >
            <span>View Projects</span>
            <FolderCode size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#connect"
            className="group glass px-7 py-3.5 rounded-full font-semibold text-sm text-[var(--text-primary)] hover:border-[var(--accent-primary)] flex items-center gap-2 transition-all duration-300 hover:scale-[1.03]"
          >
            <span>Connect With Me</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-[var(--accent-primary)]" />
          </a>
        </motion.div>

        {/* Social Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4 text-[var(--text-secondary)]"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-110 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-110 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-110 transition-all"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
