import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cloud, Zap } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import CertificationCarousel from "@/components/CertificationCarousel";

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
      <span className={`inline-block w-0.5 h-[1em] ml-1 bg-coffee-light ${showCursor ? "opacity-100" : "opacity-0"}`} />
    </span>
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
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (active && !prefersReducedMotion) {
      const newParticles: CloudParticle[] = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: 50 + Math.random() * 50,
        size: 20 + Math.random() * 50,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 4,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [active, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, x: `${particle.x}%`, y: `${particle.y}%`, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [`${particle.y}%`, `${particle.y - 40}%`],
            scale: [0, 1.2, 0.8],
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
          <Cloud className="text-coffee-light/60" style={{ width: particle.size, height: particle.size }} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

// Animated wave background
const WaveBackground = () => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 w-full h-64 opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,106.7C672,96,768,128,864,154.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient)"
          animate={{
            d: [
              "M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,106.7C672,96,768,128,864,154.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,117.3C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,106.7C672,96,768,128,864,154.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25 40% 40%)" />
            <stop offset="100%" stopColor="hsl(210 80% 30%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const HeroSection = () => {
  const [deployed, setDeployed] = useState(false);

  const typewriterTexts = [
    "INITIALISING AWS CLOUDS... ☁️",
    "CONFIGURING LAMBDA FUNCTIONS... ⚙️",
    "PROOFREADING EDITORIAL ARTICLES... 📝",
    "BREWING SPANISH LATTE... ☕",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero px-4">
      {/* Background particles */}
      <FloatingClouds active={deployed} />
      <WaveBackground />
      
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

        {/* Main heading with expressive typography */}
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
              Hi I'm Gen!
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold mb-4"
          >
            <span className="bg-gradient-to-r from-cream via-coffee-light to-coffee bg-clip-text text-transparent">
              Architecting Organized Chaos Through Python and Writing
            </span>
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            AWS Cloud Club Captain "Ben" | Associate Editor-in-Chief "Cil"
            <br />
            <span className="text-coffee-light/80">at Philippine Christian University</span>
          </motion.p>
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

        {/* Deploy toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-500 ${
            deployed 
              ? "border-coffee-light bg-coffee/20 shadow-[0_0_60px_hsl(25_50%_40%/0.5)]" 
              : "border-border bg-secondary/30 hover:bg-secondary/50"
          }`}>
            <Zap className={`w-5 h-5 transition-colors ${deployed ? "text-coffee-light" : "text-muted-foreground"}`} />
            <span className="font-mono text-sm uppercase tracking-wider">I Need More Clouds!</span>
            <Switch
              checked={deployed}
              onCheckedChange={setDeployed}
              className="data-[state=checked]:bg-coffee-light"
            />
          </div>
          <AnimatePresence>
            {deployed && (
              <motion.p
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="text-sm text-coffee-light font-mono"
              >
                ⛅ Nimbus, Cirrus, Cumulus, Stratus... Your serverless clouds are deployed! ⛅
              </motion.p>
            )}
          </AnimatePresence>
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
          <div className="w-1 h-2 rounded-full bg-coffee-light" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
