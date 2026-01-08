import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Coffee } from "lucide-react";
import { CoffeeWaveBottom } from "./CoffeeWave";
import TechBackdrop from "./TechBackdrop";

const heroConfig = {
  name: "Gen",
  handle: "coffee(): Brewing",
  status: "status(): Active",
  subtitle: "Architecting Organized Chaos Through AI, Cloud, and Journalism",
  about:
    "I'm Gen Benedict C. Casio—technology consultant, student developer, and coffee enthusiast. I specialize in cloud-native systems, serverless architectures, and applied AI/ML on AWS, turning concepts into working solutions. As associate editor-in-chief, I explore the intersection of technology, AI, and social issues through writing.",
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
          setTimeout(() => setIsDeleting(true), 1500);
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
        className={`inline-block w-[2px] h-[0.9em] ml-1 bg-current ${
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
      className="relative min-h-[95vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-3 sm:px-4"
    >
      <TechBackdrop activeRole="captain" />

      <div className="relative z-10 w-full max-w-md sm:max-w-4xl lg:max-w-6xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* PHOTO - TOP MOBILE, RIGHT DESKTOP */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end pb-3 sm:pb-0 order-1 lg:order-2"
          >
            {/* MOBILE: Large circle */}
            <div className="w-32 h-32 lg:hidden rounded-full overflow-hidden ring-2 ring-blue-500/50 shadow-2xl bg-slate-900/60 backdrop-blur-xl border-4 border-slate-800/60">
              <img
                src={heroConfig.photo}
                alt="Gen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* DESKTOP: Full rectangle */}
            <div className="hidden lg:block w-64 h-80 rounded-3xl overflow-hidden border-4 border-blue-500/40 shadow-[0_0_80px_rgba(37,99,235,0.5)] bg-slate-900/80 backdrop-blur-xl relative">
              <img
                src={heroConfig.photo}
                alt="Gen speaking at an event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent/60 to-transparent" />
            </div>
          </motion.div>

          {/* TERMINAL - BOTTOM MOBILE, LEFT DESKTOP */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2 lg:order-1 relative bg-slate-950/90 border border-slate-800/60 rounded-3xl shadow-[0_0_60px_rgba(37,99,235,0.4)] overflow-hidden backdrop-blur-2xl"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/60 bg-slate-900/95 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              </div>
              <span className="text-xs font-mono text-slate-400 font-medium tracking-wider truncate max-w-[140px]">
                ~/portfolio/gen.exe
              </span>
            </div>

            {/* Terminal body */}
            <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 font-mono text-[13px] sm:text-sm md:text-base text-slate-200 space-y-3">
              {/* Badges */}
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/90 text-xs text-slate-300 backdrop-blur-sm min-w-0 max-w-[160px]">
                  <Coffee className="w-3 h-3 text-blue-400 flex-shrink-0" />
                  <span className="truncate font-medium">{heroConfig.handle}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/90 text-xs text-slate-300 backdrop-blur-sm min-w-0 max-w-[140px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg" />
                  <span className="truncate font-medium">{heroConfig.status}</span>
                </span>
              </div>

              {/* Typewriter */}
              <div className="text-blue-400 text-sm mb-3">
                <TypewriterText texts={heroConfig.typewriterTexts} />
              </div>

              {/* Heading */}
              <div>
                <p className="text-slate-500 text-xs mb-2">&gt; whoami</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Hi, I'm Gen!
                </h1>
              </div>

              {/* Subtitle + about */}
              <div className="mt-4">
                <p className="text-lg md:text-xl font-semibold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                    {heroConfig.subtitle}
                  </span>
                </p>
                <div className="h-px w-full bg-gradient-to-r from-slate-700/50 via-blue-500/20 to-transparent mb-4" />
                <p className="text-sm md:text-base text-slate-400 leading-relaxed tracking-wide">
                  {heroConfig.about}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CoffeeWaveBottom activeRole="captain" />
    </section>
  );
};

export default HeroSection;