import { personalInfo } from "../data/content";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative glass mt-24 overflow-hidden">
      {/* Slim Animated Signature Gradient Top Border */}
      <div className="h-[3px] gradient-bg w-full" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[var(--border-subtle)]/50">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-xl text-[var(--text-primary)] tracking-wide">
              Bhautik Tank<span className="text-[var(--accent-primary)]">.</span>
            </span>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Full Stack Developer (MERN) | AI-Integrated Web Applications
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[var(--text-secondary)]">
            <a href="#home" className="hover:text-[var(--accent-primary)] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[var(--accent-primary)] transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-[var(--accent-primary)] transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-[var(--accent-primary)] transition-colors">
              Projects
            </a>
            <a href="#connect" className="hover:text-[var(--accent-primary)] transition-colors">
              Connect
            </a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-white shadow-md hover:scale-110 transition-all"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-[var(--text-secondary)]">
          <p>
            © 2026 Bhautik Tank. - All rights reserved. Designed & built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
