import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Zap, Star } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const TypewriterText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
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
  }, [displayText, isDeleting, currentIndex, texts]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-0.5 h-[1em] ml-1 bg-coffee-light ${showCursor ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

const StarRating = ({ rating, label }: { rating: number; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-star text-star" : "text-muted-foreground"}`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{rating}/5</span>
      <span className="text-xs text-coffee-light">{label}</span>
    </div>
  );
};

interface CloudParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingClouds = ({ active }: { active: boolean }) => {
  const [particles, setParticles] = useState<CloudParticle[]>([]);

  useEffect(() => {
    if (active) {
      const newParticles: CloudParticle[] = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 40,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 4,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [active]);

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, x: `${particle.x}%`, y: `${particle.y}%`, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [`${particle.y}%`, `${particle.y - 30}%`],
            scale: [0, 1, 0.8],
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute pointer-events-none"
          style={{ left: `${particle.x}%` }}
        >
          <Cloud className="text-coffee-light" style={{ width: particle.size, height: particle.size }} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

const HeroSection = () => {
  const [deployed, setDeployed] = useState(false);

  const typewriterTexts = [
    "INITIALISING AWS CLOUDS...",
    "CONFIGURING LAMBDA FUNCTIONS...",
    "DEPLOYING TO PRODUCTION...",
    "BREWING SERVERLESS MAGIC...",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero px-4">
      {/* Background particles */}
      <FloatingClouds active={deployed} />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coffee-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-mid/30 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Terminal-style typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">system.status: online</span>
          </div>
          
          <div className="font-mono text-lg md:text-xl text-coffee-light mb-6 h-8">
            <TypewriterText texts={typewriterTexts} />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-4 tracking-tight">
            <span className="text-foreground">Cil Casio</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-cream to-coffee-light bg-clip-text text-transparent">
            Serverless Sorcerer ⚡
          </p>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            AWS Cloud Club Captain & AI/ML Developer at Philippine Christian University
          </p>
        </motion.div>

        {/* Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <StarRating rating={4.8} label="AWS Certified" />
          <StarRating rating={4.9} label="MLOps Guru" />
        </motion.div>

        {/* Deploy toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col items-center gap-4"
        >
          <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-500 ${
            deployed 
              ? "border-coffee-light bg-coffee/20 shadow-[0_0_40px_hsl(25_50%_40%/0.4)]" 
              : "border-border bg-secondary/30"
          }`}>
            <Zap className={`w-5 h-5 transition-colors ${deployed ? "text-coffee-light" : "text-muted-foreground"}`} />
            <span className="font-mono text-sm uppercase tracking-wider">Deploy to Production</span>
            <Switch
              checked={deployed}
              onCheckedChange={setDeployed}
              className="data-[state=checked]:bg-coffee-light"
            />
          </div>
          <AnimatePresence>
            {deployed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-coffee-light font-mono"
              >
                🚀 Successfully deployed to AWS CloudFront!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-coffee-light" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
