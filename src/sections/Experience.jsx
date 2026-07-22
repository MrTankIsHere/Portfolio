import { motion } from "framer-motion";
import { experiences } from "../data/content";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase font-semibold tracking-widest text-[var(--accent-primary)] mb-2 block">
          Work History
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Professional Experience
        </h2>
        <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-6 sm:p-8 relative border-l-4 border-l-[var(--accent-primary)] overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 gradient-bg rounded-full blur-[100px] opacity-10 pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-white shrink-0 shadow-md">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <p className="font-semibold text-sm text-[var(--accent-primary)] mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full">
                  <Calendar size={14} className="text-[var(--accent-primary)]" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full">
                  <MapPin size={14} className="text-[var(--accent-primary)]" />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  <CheckCircle2
                    size={18}
                    className="text-[var(--accent-primary)] shrink-0 mt-1"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
