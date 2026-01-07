import { motion } from "framer-motion";

// Coffee Wave component for decorative top wave
export const CoffeeWaveTop = ({ activeRole }: { activeRole: "captain" | "editor" }) => {
  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
      <motion.svg
        className="w-full h-24 md:h-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
          className={activeRole === "captain" ? "fill-blue-950/40" : "fill-orange-800/40"}
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
          className={activeRole === "captain" ? "fill-blue-950/20" : "fill-orange-800/20"}
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

export const CoffeeWaveBottom = ({ activeRole }: { activeRole: "captain" | "editor" }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <motion.svg
        className="w-full h-32 md:h-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          className={activeRole === "captain" ? "fill-blue-950/40" : "fill-orange-800/40"}
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
          className={activeRole === "captain" ? "fill-blue-950/20" : "fill-orange-800/20"}
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