import { motion } from "framer-motion";

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

export default TechBackdrop;