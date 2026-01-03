import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "booting cilcasio.cloud",
  "",
  "provisioning serverless stack",
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

  // Typewriter effect
  useEffect(() => {
    if (prefersReducedMotion) {
      // Show all text immediately for reduced motion
      const timer = setTimeout(() => setIsVisible(false), 800);
      return () => clearTimeout(timer);
    }

    if (currentLine >= bootLines.length) {
      // All lines done, wait then fade out
      const timer = setTimeout(() => setIsVisible(false), 600);
      return () => clearTimeout(timer);
    }

    const line = bootLines[currentLine];
    
    if (line === "") {
      // Empty line - just pause briefly
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setDisplayedText(prev => prev + "\n");
      }, 200);
      return () => clearTimeout(timer);
    }

    if (displayedText.endsWith(line)) {
      // Line complete, move to next
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setDisplayedText(prev => prev + "\n");
      }, 300);
      return () => clearTimeout(timer);
    }

    // Type next character
    const currentLineStart = displayedText.lastIndexOf("\n") + 1;
    const currentLineText = displayedText.slice(currentLineStart);
    const nextChar = line[currentLineText.length];

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + nextChar);
    }, 45);

    return () => clearTimeout(timer);
  }, [currentLine, displayedText, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: prefersReducedMotion ? 1 : 0.96 
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep"
        >
          {/* Pulsing glow behind card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: prefersReducedMotion ? 1 : [1, 1.15, 1],
              opacity: prefersReducedMotion ? 0.4 : [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-80 h-80 rounded-full bg-coffee-glow/30 blur-3xl"
          />

          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative z-10 rounded-xl border border-coffee-brown/30 bg-navy-medium/80 backdrop-blur-sm px-8 py-6 shadow-2xl"
            style={{
              boxShadow: "0 0 40px rgba(111, 78, 55, 0.15), 0 0 80px rgba(111, 78, 55, 0.08)"
            }}
          >
            {/* Terminal header dots */}
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-coffee-brown/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-coffee-brown/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-coffee-brown/20" />
            </div>

            {/* Terminal content */}
            <div className="font-mono text-sm text-cream-white/90 min-h-[4.5rem] min-w-[280px]">
              {prefersReducedMotion ? (
                <div className="space-y-1">
                  {bootLines.filter(l => l).map((line, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-coffee-light">›</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="whitespace-pre-wrap">
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
                  {/* Blinking cursor */}
                  {currentLine < bootLines.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-coffee-light/80 ml-1 -mb-0.5"
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
