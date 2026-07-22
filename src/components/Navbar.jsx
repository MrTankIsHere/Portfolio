import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl transition-all duration-300">
      <nav
        className={`relative glass rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2.5 shadow-xl border-[var(--glass-border)]" : "py-3.5"
          }`}
      >
        {/* Soft glowing underglow behind navbar */}
        <div className="absolute inset-0 -z-10 rounded-full gradient-bg opacity-25 blur-lg pointer-events-none" />

        {/* Brand Mark */}
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-extrabold text-lg tracking-wider text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold shadow-sm">
            BT
          </span>
          <span className="hidden sm:inline-block text-sm font-semibold">
            Bhautik
            <span className="text-[var(--accent-primary)]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-[var(--bg-surface)]/40 px-3 py-1.5 rounded-full border border-[var(--border-subtle)]/30">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${isActive
                    ? "text-white font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 gradient-bg rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:scale-105 transition-all duration-200"
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 glass rounded-3xl p-5 flex flex-col gap-2 shadow-2xl border border-[var(--glass-border)]"
          >
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive
                      ? "gradient-bg text-white font-semibold shadow-md"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]/60"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
