import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { personalInfo } from "../data/content";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0E0B0B] text-[#F4F1EE] overflow-hidden select-none"
    >
      {/* Background Animated Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] gradient-bg rounded-full blur-[140px] opacity-25 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Outer Gradient Ring */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-8">
          <motion.div
            className="absolute inset-0 rounded-full p-[3px] gradient-bg"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full bg-[#0E0B0B] rounded-full" />
          </motion.div>

          <motion.div
            className="absolute inset-2 rounded-full gradient-bg opacity-30 blur-md"
            animate={{ scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo Mark */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-bg flex items-center justify-center text-white font-display font-extrabold text-xl sm:text-2xl shadow-xl shadow-red-950/40"
          >
            BT
          </motion.div>
        </div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#F4F1EE]">
            {personalInfo.name}<span className="text-[#E22227]">.</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-[#94938F] mt-1 tracking-wide flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-[#E22227] animate-pulse" />
            <span>{personalInfo.heroSubtitle}</span>
          </p>
        </motion.div>

        {/* Sleek Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-48 sm:w-56 h-1.5 bg-[#17110F] border border-[#4A4743]/40 rounded-full mt-8 overflow-hidden relative"
        >
          <motion.div
            className="h-full gradient-bg rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
