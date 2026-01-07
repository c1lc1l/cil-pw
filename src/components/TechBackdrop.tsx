import { motion } from "framer-motion";

// TechBackdrop component that was referenced but missing
export const TechBackdrop = ({ activeRole }: { activeRole: "captain" | "editor" }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${activeRole === "captain" ? "hsl(210 80% 45% / 0.1)" : "hsl(25 40% 50% / 0.1)"} 1px, transparent 1px),
              linear-gradient(90deg, ${activeRole === "captain" ? "hsl(210 80% 45% / 0.1)" : "hsl(25 40% 50% / 0.1)"} 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: activeRole === "captain" ? "hsl(210 80% 45%)" : "hsl(25 40% 50%)"
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${activeRole === "captain" ? "hsl(210 80% 45% / 0.15)" : "hsl(25 40% 50% / 0.15)"}, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${activeRole === "captain" ? "hsl(210 80% 45% / 0.15)" : "hsl(25 40% 50% / 0.15)"}, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
};

// Coffee Wave component for decorative top wave
export const CoffeeWaveTop = ({ activeRole }: { activeRole: "captain" | "editor" }) => {
  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
      <motion.svg
        className="w-full h-32 md:h-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
          className={activeRole === "captain" ? "fill-blue-950/40" : "fill-orange-950/40"}
          animate={{
            d: [
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
              "M0,70 C240,30 480,110 720,70 C960,30 1200,110 1440,70 L1440,0 L0,0 Z",
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z"
          className={activeRole === "captain" ? "fill-blue-950/20" : "fill-orange-950/20"}
          animate={{
            d: [
              "M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z",
              "M0,90 C240,130 480,50 720,90 C960,130 1200,50 1440,90 L1440,0 L0,0 Z",
              "M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default TechBackdrop;