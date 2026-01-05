import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cloud, Pen, Zap, Server, FileText } from "lucide-react";
import CertificationCarousel from "@/components/CertificationCarousel";

type RoleMode = "captain" | "editor";

const roleConfig = {
  captain: {
    title: "Ben",
    subtitle: "The Cloud Captain",
    color: "captain",
    icon: Cloud,
    typewriterTexts: [
      "INITIALISING AWS CLOUDS... ☁️",
      "CONFIGURING LAMBDA FUNCTIONS... ⚙️",
      "DEPLOYING SERVERLESS STACK... 🚀",
      "BREWING SPANISH LATTE... ☕",
    ],
    gradient: "from-navy-accent to-captain-glow",
    glowColor: "navy-glow",
    description: "AWS Cloud Club Captain at PCU",
  },
  editor: {
    title: "Cil",
    subtitle: "The Editor-in-Chief",
    color: "editor",
    icon: Pen,
    typewriterTexts: [
      "PROOFREADING EDITORIAL ARTICLES... 📝",
      "REFINING TECHNICAL DOCS... ✍️",
      "ORGANIZING CONTENT PIPELINE... 📚",
      "BREWING SPANISH LATTE... ☕",
    ],
    gradient: "from-coffee-warm to-editor-glow",
    glowColor: "coffee-glow",
    description: "Associate Editor-in-Chief at PCU",
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

const HeroSection = () => {
  const [activeRole, setActiveRole] = useState<RoleMode>("captain");
  const prefersReducedMotion = useReducedMotion();
  const config = roleConfig[activeRole];
  const Icon = config.icon;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero px-4">
      {/* Dynamic ambient glows based on role */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        animate={{
          backgroundColor: activeRole === "captain" 
            ? "hsl(210 80% 45% / 0.15)" 
            : "hsl(25 40% 50% / 0.15)",
        }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        animate={{
          backgroundColor: activeRole === "captain" 
            ? "hsl(210 90% 50% / 0.1)" 
            : "hsl(25 50% 55% / 0.1)",
        }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Role Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveRole("captain")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeRole === "captain"
                  ? "bg-navy-accent text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-mono">Ben</span>
            </button>
            <button
              onClick={() => setActiveRole("editor")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeRole === "editor"
                  ? "bg-coffee-warm text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Pen className="w-4 h-4" />
              <span className="text-sm font-mono">Cil</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">
              {activeRole === "captain" ? "cloud.status: active" : "editorial.status: active"}
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
                  activeRole === "captain" ? "text-navy-glow" : "text-coffee-light"
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
              className="block text-foreground"
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
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {config.description}
                <br />
                <span className={activeRole === "captain" ? "text-navy-glow/80" : "text-coffee-light/80"}>
                  at Philippine Christian University
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Certification carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-12"
        >
          <CertificationCarousel />
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
                ? "border-navy-accent bg-navy-accent/20 shadow-[0_0_30px_hsl(210_80%_45%/0.3)]"
                : "border-border bg-secondary/30 hover:bg-secondary/50"
            }`}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          >
            <Server className={`w-5 h-5 ${activeRole === "captain" ? "text-navy-glow" : "text-muted-foreground"}`} />
            <span className="font-mono text-sm">Cloud Engineering</span>
          </motion.div>
          <motion.div
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
              activeRole === "editor"
                ? "border-coffee-warm bg-coffee-warm/20 shadow-[0_0_30px_hsl(25_40%_50%/0.3)]"
                : "border-border bg-secondary/30 hover:bg-secondary/50"
            }`}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          >
            <FileText className={`w-5 h-5 ${activeRole === "editor" ? "text-coffee-light" : "text-muted-foreground"}`} />
            <span className="font-mono text-sm">Editorial Leadership</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className={`w-1 h-2 rounded-full ${activeRole === "captain" ? "bg-navy-glow" : "bg-coffee-light"}`} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;