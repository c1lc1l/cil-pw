import { useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type AmbientMode = "focused" | "creative" | "night";

interface AmbientBackgroundProps {
  mode: AmbientMode;
}

const modeConfig = {
  focused: {
    primaryGlow: "hsl(210 100% 20% / 0.15)",
    secondaryGlow: "hsl(25 40% 35% / 0.1)",
    particleOpacity: 0.3,
    animationSpeed: 1,
  },
  creative: {
    primaryGlow: "hsl(25 50% 40% / 0.2)",
    secondaryGlow: "hsl(210 80% 30% / 0.15)",
    particleOpacity: 0.5,
    animationSpeed: 0.7,
  },
  night: {
    primaryGlow: "hsl(210 100% 10% / 0.2)",
    secondaryGlow: "hsl(25 30% 20% / 0.08)",
    particleOpacity: 0.15,
    animationSpeed: 1.5,
  },
};

interface GeometricShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: "circle" | "hexagon" | "triangle";
  delay: number;
}

const AmbientBackground = ({ mode }: AmbientBackgroundProps) => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const config = modeConfig[mode];
  
  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallax3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Generate geometric shapes
  const shapes: GeometricShape[] = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 60 + Math.random() * 120,
      rotation: Math.random() * 360,
      type: ["circle", "hexagon", "triangle"][i % 3] as GeometricShape["type"],
      delay: i * 0.5,
    })), 
  []);

  if (prefersReducedMotion) {
    return (
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 20% 30%, ${config.primaryGlow} 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 70%, ${config.secondaryGlow} 0%, transparent 50%)`
          }}
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Gradient orbs with parallax */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] -top-48 -left-48 transition-colors duration-1000"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8 * config.animationSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: config.primaryGlow,
          y: parallax1,
        }}
      />
      
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] top-1/3 right-0 transition-colors duration-1000"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10 * config.animationSpeed,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: config.secondaryGlow,
          y: parallax2,
        }}
      />
      
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bottom-1/4 left-1/4 transition-colors duration-1000"
        animate={{
          scale: [1, 1.15, 1],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 12 * config.animationSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: config.primaryGlow,
          y: parallax3,
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, rotate: shape.rotation }}
          animate={{
            opacity: [0, config.particleOpacity, 0],
            rotate: [shape.rotation, shape.rotation + 180],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15 * config.animationSpeed,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && (
            <div 
              className="w-full h-full rounded-full border border-coffee-light/10"
              style={{ background: `radial-gradient(circle, hsl(25 40% 50% / 0.05) 0%, transparent 70%)` }}
            />
          )}
          {shape.type === "hexagon" && (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,3 93,25 93,75 50,97 7,75 7,25" 
                fill="none" 
                stroke="hsl(210 60% 40% / 0.1)"
                strokeWidth="1"
              />
            </svg>
          )}
          {shape.type === "triangle" && (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,10 90,90 10,90" 
                fill="none" 
                stroke="hsl(25 40% 50% / 0.08)"
                strokeWidth="1"
              />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--coffee-light)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--coffee-light)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default AmbientBackground;
