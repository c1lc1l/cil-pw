import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cloud, Coffee, FileText } from "lucide-react";
import { CoffeeWaveBottom } from "./CoffeeWave";
import TechBackdrop from "./TechBackdrop";

type RoleMode = "captain";

const heroConfig = {
  name: "Gen",
  handle: "serverless.coffee: Brewing",
  status: "active.status: Python-ing",
  subtitle: "Architecting Organized Chaos Through AWS",
  about:
    "I'm Gen Benedict Casio, a technology consultant and student developer working with cloud‑native systems, serverless workloads, and applied AI/ML on AWS. I enjoy turning ideas into practical tools and helping communities grow, one sip of coffee at a time.",  
  photo: "/images/captain/photo.JPG",
  typewriterTexts: [
    "BREWING SPANISH LATTE...",
    "DEBUGGING VITE BUILD FAILS...",
    "DEPLOYING SERVERLESS STACK...",
    "BREWING SPANISH LATTE...",
  ],
};

const TypewriterText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(texts[0]);
      return;
    }

    const currentFullText = texts[currentIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts, prefersReducedMotion]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span
        className={`inline-block w-0.5 h-[1em] ml-1 bg-current ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
};


const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4"
    >
      <TechBackdrop activeRole="captain" />

      {/* Ambient blue glows */}
      <motion.div
        className="absolute -top-40 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        animate={{ backgroundColor: "hsl(210 80% 45% / 0.15)" }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        animate={{ backgroundColor: "hsl(210 90% 50% / 0.1)" }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        {/* LEFT: CLI terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-950/80 border border-slate-800 rounded-3xl shadow-[0_0_80px_rgba(37,99,235,0.35)] overflow-hidden backdrop-blur-xl"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-xs font-mono text-slate-400">
              ~/portfolio/gen.exe
            </span>
          </div>

          {/* Terminal body */}
          <div className="px-6 py-5 md:px-8 md:py-7 font-mono text-sm md:text-base text-slate-200 space-y-3">
            {/* top badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/70 text-xs text-slate-300">
                <Coffee className="w-3.5 h-3.5 text-blue-400" />
                {heroConfig.handle}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/70 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {heroConfig.status}
              </span>
            </div>

            {/* typewriter line */}
            <div className="text-blue-400">
              <TypewriterText texts={heroConfig.typewriterTexts} />
            </div>

            {/* main heading */}
            <div className="mt-4">
              <p className="text-slate-400 text-xs mb-1">
                &gt; whoami
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Hi, I'm Gen!
              </h1>
            </div>

            {/* subtitle + about */}
            <div className="mt-3">
              <p className="text-lg md:text-xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  {heroConfig.subtitle}
                </span>
              </p>
              <div className="mt-3 h-px w-full bg-slate-800 mb-4" />
              <p className="mt-2 text-slate-400 leading-relaxed">
                {heroConfig.about}
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: single photo card */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border border-blue-500/40 shadow-[0_0_60px_rgba(37,99,235,0.45)] bg-slate-900/80 backdrop-blur">
            <img
              src={heroConfig.photo}
              alt="Gen speaking at an event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <CoffeeWaveBottom activeRole="captain" />
    </section>
  );
};
export default HeroSection;