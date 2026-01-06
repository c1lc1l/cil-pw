import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cloud, Pen, Server, FileText } from "lucide-react";

type RoleMode = "captain" | "editor";

const roleConfig = {
  captain: {
    title: "Ben",
    subtitle: "Architecting Organized Tech Chaos",
    org: "AWS Cloud Club at PCU Cavite",
    color: "captain",
    icon: Cloud,
    typewriterTexts: [
      "INITIALISING AWS CLOUDS... ☁️",
      "CONFIGURING LAMBDA FUNCTIONS... ⚙️",
      "DEPLOYING SERVERLESS STACK... 🚀",
      "BREWING SPANISH LATTE... ☕",
    ],
    gradient: "from-blue-600 to-blue-400",
    glowColor: "navy-glow",
    description: "Captain & Chief Executive Officer",
    images: [
      "/public/images/captain/photo1.jpg",
      "/public/images/captain/photo2.jpg",
      "/public/images/captain/photo3.jpg",
      "/public/images/captain/photo4.jpeg",
    ],
  },
  editor: {
    title: "Cil",
    subtitle: "Bridging Philosophies & Politics",
    org: "The Christian Chronicle",
    color: "editor",
    icon: Pen,
    typewriterTexts: [
      "PROOFREADING EDITORIAL ARTICLES... 📝",
      "WHO WHAT WHEN WHERE WHY HOW... ✍️",
      "ORGANIZING CONTENT PIPELINE... 📚",
      "BREWING MATCHA LATTE... ☕",
    ],
    gradient: "from-orange-600 to-amber-500",
    glowColor: "coffee-glow",
    description: "Associate Editor-in-Chief",
    images: [
      "/public/images/aeic/photo1.jpg",
      "/public/images/aeic/photo2.jpg",
      "/public/images/aeic/photo3.jpg",
      "/public/images/aeic/photo4.jpg",
    ],
  },
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
      <span className={`inline-block w-0.5 h-[1em] ml-1 bg-current ${showCursor ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

const FanImageCards = ({ images, role }: { images: string[]; role: RoleMode }) => {
  const prefersReducedMotion = useReducedMotion();
  
  const fanPositions = {
    lg: [
      { rotate: -14, x: -550, y: 0, z: 0 },
      { rotate: -6,  x: -480, y: -280, z: 1 },
      { rotate: 6,   x: 260,  y: -280, z: 1 },
      { rotate: 14,  x: 330,  y: 0, z: 0 },
    ],
    xl: [
      { rotate: -16, x: -720, y: -110, z: 0 },
      { rotate: -8,  x: -540, y: -250, z: 1 },
      { rotate: 8,   x: 340,  y: -250, z: 1 },
      { rotate: 16,  x: 520,  y: -110, z: 0 },
    ],
  };

  const isXL = typeof window !== "undefined" && window.innerWidth >= 1280;
  const positions = isXL ? fanPositions.xl : fanPositions.lg;


  const cardVariants = {
    initial: {
      opacity: 0,
      scale: 0.7,
      x: 0,
      y: 0,
      rotate: 0,
    },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: positions[i].x,
      y: positions[i].y,
      rotate: positions[i].rotate,
      transition: {
        duration: 0.5,
        delay: i * 0.06,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.7,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Desktop fan layout */}
      <div className="hidden lg:block relative w-full h-full">
        <AnimatePresence mode="wait">
          {images.map((img, i) => (
            <motion.div
              key={`${role}-${i}`}
              custom={i}
              variants={prefersReducedMotion ? {} : cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: positions[i].z }}
            >
                <div
                  className={`w-[240px] h-[300px] xl:w-[260px] xl:h-[320px]
                  rounded-xl overflow-hidden shadow-2xl border backdrop-blur-sm
                  ${
                    role === "captain"
                      ? "border-blue-500/40 shadow-blue-500/30"
                      : "border-orange-500/40 shadow-orange-500/30"
                  }`}
                >
                <img
                  src={img}
                  alt={`${role} photo ${i + 1}`}
                  className="w-full h-full object-cover opacity-70"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div
                  className={`absolute inset-0 mix-blend-multiply ${
                    role === "captain"
                      ? "bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-transparent"
                      : "bg-gradient-to-br from-orange-600/30 via-orange-500/20 to-transparent"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile stacked layout */}
      <div className="lg:hidden flex flex-col gap-4 items-center justify-center opacity-25">
        <AnimatePresence mode="wait">
          {images.slice(0, 2).map((img, i) => (
            <motion.div
              key={`${role}-mobile-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={`w-[180px] h-[220px] rounded-lg overflow-hidden shadow-xl border-2 ${
                role === "captain"
                  ? "border-blue-500/30 shadow-blue-500/20"
                  : "border-orange-500/30 shadow-orange-500/20"
              }`}
            >
              <img
                src={img}
                alt={`${role} photo ${i + 1}`}
                className="w-full h-full object-cover opacity-60"
                loading="eager"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CoffeeWave = ({ activeRole }: { activeRole: RoleMode }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <motion.svg
        className="w-full h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          className={activeRole === "captain" ? "fill-blue-950/40" : "fill-orange-950/40"}
          initial={{ d: "M0,80 C240,80 480,80 720,80 C960,80 1200,80 1440,80 L1440,120 L0,120 Z" }}
          animate={{
            d: [
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
              "M0,70 C240,30 480,110 720,70 C960,30 1200,110 1440,70 L1440,120 L0,120 Z",
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z"
          className={activeRole === "captain" ? "fill-blue-950/20" : "fill-orange-950/20"}
          animate={{
            d: [
              "M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z",
              "M0,90 C240,130 480,50 720,90 C960,130 1200,50 1440,90 L1440,120 L0,120 Z",
              "M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.svg>
    </div>
  );
};

const HeroSection = ({ 
  activeRole, 
  setActiveRole 
}: { 
  activeRole: RoleMode;
  setActiveRole: (role: RoleMode) => void;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const config = roleConfig[activeRole];
  const Icon = config.icon;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      {/* Dynamic ambient glows based on role - positioned HIGHER */}
      <motion.div 
        className="absolute -top-40 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        animate={{
          backgroundColor: activeRole === "captain" 
            ? "hsl(210 80% 45% / 0.15)" 
            : "hsl(25 40% 50% / 0.15)",
        }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        animate={{
          backgroundColor: activeRole === "captain" 
            ? "hsl(210 90% 50% / 0.1)" 
            : "hsl(25 50% 55% / 0.1)",
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Fan image cards - behind everything */}
      <FanImageCards images={config.images} role={activeRole} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Role Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg">
            <button
              onClick={() => setActiveRole("captain")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeRole === "captain"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-mono font-semibold">Ben</span>
            </button>
            <button
              onClick={() => setActiveRole("editor")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeRole === "editor"
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Pen className="w-4 h-4" />
              <span className="text-sm font-mono font-semibold">Cil</span>
            </button>
          </div>
        </motion.div>

        {/* Terminal-style typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-slate-400">
              {activeRole === "captain" ? "active.status: C L O U D" : "active.status: J O U R N A L I S M"}
            </span>
          </div>
          
          <div className="h-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`font-mono text-lg md:text-xl ${
                  activeRole === "captain" ? "text-blue-400" : "text-orange-400"
                }`}
              >
                <TypewriterText texts={config.typewriterTexts} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Main heading with role-based styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 tracking-tighter">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-white"
            >
              Hi, I'm Gen!
            </motion.span>
          </h1>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl md:text-3xl font-semibold mb-4">
                <span className={`bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                  {config.subtitle}
                </span>
              </p>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {config.description}
                <br />
                <span className={activeRole === "captain" ? "text-blue-400/80" : "text-orange-400/80"}>
                  {config.org}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Role indicator cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
              activeRole === "captain"
                ? "border-blue-600 bg-blue-600/20 shadow-[0_0_30px_hsl(210_80%_45%/0.3)]"
                : "border-slate-700 bg-slate-800/30 hover:bg-slate-800/50"
            }`}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          >
            <Server className={`w-5 h-5 ${activeRole === "captain" ? "text-blue-400" : "text-slate-400"}`} />
            <span className="font-mono text-sm text-white">Cloud Engineering</span>
          </motion.div>
          <motion.div
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
              activeRole === "editor"
                ? "border-orange-600 bg-orange-600/20 shadow-[0_0_30px_hsl(25_40%_50%/0.3)]"
                : "border-slate-700 bg-slate-800/30 hover:bg-slate-800/50"
            }`}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          >
            <FileText className={`w-5 h-5 ${activeRole === "editor" ? "text-orange-400" : "text-slate-400"}`} />
            <span className="font-mono text-sm text-white">Campus Journalism</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
        >
          <div className={`w-1 h-2 rounded-full ${activeRole === "captain" ? "bg-blue-400" : "bg-orange-400"}`} />
        </motion.div>
      </motion.div>

      {/* Coffee wave transition */}
      <CoffeeWave activeRole={activeRole} />
    </section>
  );
};

export default HeroSection;