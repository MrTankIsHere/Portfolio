import { motion } from "framer-motion";
import { projects } from "../data/content";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-10 w-80 h-80 gradient-bg rounded-full blur-[130px] opacity-15 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase font-semibold tracking-widest text-[var(--accent-primary)] mb-2 block">
          Featured Work & Applications
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Projects
        </h2>
        <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Single Row 3-Card Grid for Desktop, Responsive for Mobile/Tablet */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, pIdx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: pIdx * 0.1 }}
            className={`glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 h-full ${
              project.featured
                ? "ring-2 ring-[var(--accent-primary)]/80 shadow-lg shadow-red-950/20"
                : ""
            }`}
          >
            {/* Top Content */}
            <div>
              {/* Header & Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                {project.featured ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-white gradient-bg px-3 py-1 rounded-full shadow-sm">
                    <Sparkles size={12} /> FEATURED PROJECT
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-secondary)] glass px-2.5 py-1 rounded-full">
                    FULL STACK
                  </span>
                )}

                <div className="flex items-center gap-2">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub for ${project.title}`}
                      className="w-8 h-8 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                    >
                      <FaGithub size={15} />
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="w-8 h-8 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-[var(--accent-primary)] mb-3 mt-1">
                {project.subtitle}
              </p>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Bullet Points */}
              <ul className="space-y-2 mb-6 text-xs text-[var(--text-secondary)] border-t border-[var(--border-subtle)]/40 pt-4">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Stack Chips */}
            <div className="pt-4 border-t border-[var(--border-subtle)]/50 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full glass text-[var(--text-primary)] border-[var(--glass-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
