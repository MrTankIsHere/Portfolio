import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/content";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Connect() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="connect" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase font-semibold tracking-widest text-[var(--accent-primary)] mb-2 block">
          Get In Touch
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Connect With Me
        </h2>
        <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Cards & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 space-y-4"
        >
          <div className="mb-6">
            <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-2">
              Let's Build Together
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Seeking full stack (MERN) developer opportunities. Feel free to reach out via email, phone, or direct message!
            </p>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-card flex items-center gap-4 rounded-2xl p-4 hover:border-[var(--accent-primary)] transition-all group"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0 shadow-sm">
              <Mail size={19} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Email</p>
              <p className="font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {personalInfo.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="glass-card flex items-center gap-4 rounded-2xl p-4 hover:border-[var(--accent-primary)] transition-all group"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0 shadow-sm">
              <Phone size={19} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Phone</p>
              <p className="font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {personalInfo.phone}
              </p>
            </div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-4 rounded-2xl p-4 hover:border-[var(--accent-primary)] transition-all group"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0 shadow-sm">
              <FaLinkedin size={19} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">LinkedIn</p>
              <p className="font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {personalInfo.linkedinDisplay}
              </p>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-4 rounded-2xl p-4 hover:border-[var(--accent-primary)] transition-all group"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0 shadow-sm">
              <FaGithub size={19} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">GitHub</p>
              <p className="font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {personalInfo.githubDisplay}
              </p>
            </div>
          </a>

          <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0 shadow-sm">
              <MapPin size={19} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Location</p>
              <p className="font-medium text-sm text-[var(--text-primary)]">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form with Signature Gradient Border */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 relative"
        >
          {/* Animated Gradient Glow Container */}
          <div className="relative rounded-3xl p-[1.5px] gradient-bg shadow-2xl">
            <div className="glass rounded-[23px] p-6 sm:p-8 bg-[var(--bg-surface)]/90 backdrop-blur-xl">
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <CheckCircle size={48} className="text-emerald-500 mb-3 animate-bounce" />
                  <h4 className="font-display font-bold text-xl text-[var(--text-primary)]">
                    Message Prepared!
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] mt-2">
                    Opening your default mail client with your message details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your message or inquiry here..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)]/40 border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="gradient-bg w-full py-4 rounded-xl font-semibold text-sm text-white shadow-lg flex items-center justify-center gap-2 hover:shadow-red-900/40 transition-all"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
