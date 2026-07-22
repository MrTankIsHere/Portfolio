import { motion } from "framer-motion";
import { personalInfo, skillGroups, education, spokenLanguages } from "../data/content";
import { GraduationCap, Languages as LanguagesIcon, Cpu, UserCheck } from "lucide-react";
import TechIcon from "../components/TechIcon";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase font-semibold tracking-widest text-[var(--accent-primary)] mb-2 block">
          Background & Capabilities
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          About Me
        </h2>
        <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Summary Bio & Education / Languages */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Bio Summary Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl gradient-bg flex items-center justify-center text-white shrink-0">
                <UserCheck size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                  Overview
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">MERN & AI Integration</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education Cards Grid */}
          <div>
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <GraduationCap className="text-[var(--accent-primary)]" size={22} />
              <span>Education</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider text-[var(--accent-primary)] uppercase bg-[var(--accent-primary)]/10 px-2.5 py-0.5 rounded-full">
                      {edu.years}
                    </span>
                    <h4 className="font-display font-bold text-sm text-[var(--text-primary)] mt-2">
                      {edu.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      {edu.school}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text-secondary)]">Grade</span>
                    <span className="text-xs font-bold text-[var(--accent-primary)]">{edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spoken */}
          <div>
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <LanguagesIcon className="text-[var(--accent-primary)]" size={22} />
              <span>Languages</span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {spokenLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <p className="font-display font-semibold text-sm text-[var(--text-primary)]">
                    {lang.name}
                  </p>
                  <p className="text-xs text-[var(--accent-primary)] font-medium mt-1">
                    {lang.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Grouped Skills & Technologies with Icons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl gradient-bg flex items-center justify-center text-white shrink-0">
              <Cpu size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                Technical Skills & Expertise
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">Development Stack, AI APIs & Tools</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-[var(--border-subtle)]/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                      {group.title}
                    </h4>
                    <span className="text-[10px] text-[var(--text-secondary)] font-medium">
                      {group.items.length} items
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="glass px-3 py-1.5 rounded-xl text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-all flex items-center gap-2 group cursor-default"
                      >
                        <TechIcon name={skill} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
