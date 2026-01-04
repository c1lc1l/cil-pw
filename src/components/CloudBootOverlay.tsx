import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";

const bootLines = [
  "booting cilcasio.cloud",
  "brewing serverless stack",
];

const CloudBootOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => setIsVisible(false), 600);
      return () => clearTimeout(timer);
    }

    if (currentLine >= bootLines.length) {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }

    const line = bootLines[currentLine];
    const currentLineStart = displayedText.lastIndexOf("\n") + 1;
    const currentLineText = displayedText.slice(currentLineStart);

    if (currentLineText === line) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setDisplayedText((prev) => prev + "\n");
      }, 300);
      return () => clearTimeout(timer);
    }

    const nextChar = line[currentLineText.length];
    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + nextChar);
    }, 45);

    return () => clearTimeout(timer);
  }, [currentLine, displayedText, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Warm glow - like coffee steam */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: prefersReducedMotion ? 1 : [1, 1.15, 1],
              opacity: prefersReducedMotion ? 0.25 : [0.2, 0.35, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-72 h-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, hsl(30 45% 35% / 0.4) 0%, transparent 70%)' }}
          />

          {/* Terminal with coffee warmth */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 rounded-xl border border-coffee-brown/40 bg-navy-dark/90 backdrop-blur-sm px-7 py-5"
            style={{
              boxShadow: "0 0 60px rgba(139, 90, 43, 0.12), 0 0 100px rgba(139, 90, 43, 0.06)"
            }}
          >
            {/* Terminal header with coffee icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-coffee-warm/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-coffee-brown/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-coffee-espresso/40" />
              </div>
              <Coffee className="w-3.5 h-3.5 text-coffee-warm/50 ml-2" />
            </div>

            {/* Content */}
            <div className="font-mono text-sm text-cream/85 min-h-[3.5rem] min-w-[240px]">
              {prefersReducedMotion ? (
                <div className="space-y-1.5">
                  {bootLines.map((line, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-coffee-light">›</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {displayedText.split("\n").map((line, i) => (
                    <div key={i} className="flex items-center gap-2 min-h-[1.5rem]">
                      {line && (
                        <>
                          <span className="text-coffee-light">›</span>
                          <span>{line}</span>
                        </>
                      )}
                    </div>
                  ))}
                  {currentLine < bootLines.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-coffee-light/70 ml-0.5"
                    />
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CloudBootOverlay;
