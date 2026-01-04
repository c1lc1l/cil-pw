import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "booting cilcasio.cloud",
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

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => setIsVisible(false), 600);
      return () => clearTimeout(timer);
    }

    if (currentLine >= bootLines.length) {
      const timer = setTimeout(() => setIsVisible(false), 400);
      return () => clearTimeout(timer);
    }

    const line = bootLines[currentLine];
    const currentLineStart = displayedText.lastIndexOf("\n") + 1;
    const currentLineText = displayedText.slice(currentLineStart);

    if (currentLineText === line) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setDisplayedText((prev) => prev + "\n");
      }, 250);
      return () => clearTimeout(timer);
    }

    const nextChar = line[currentLineText.length];
    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + nextChar);
    }, 40);

    return () => clearTimeout(timer);
  }, [currentLine, displayedText, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Subtle glow */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: prefersReducedMotion ? 1 : [1, 1.1, 1],
              opacity: prefersReducedMotion ? 0.3 : [0.2, 0.35, 0.2]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-64 h-64 rounded-full bg-coffee/20 blur-3xl"
          />

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm px-6 py-5"
          >
            {/* Dots */}
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-coffee/30" />
              <div className="w-2 h-2 rounded-full bg-coffee/20" />
              <div className="w-2 h-2 rounded-full bg-coffee/10" />
            </div>

            {/* Content */}
            <div className="font-mono text-sm text-foreground/80 min-h-[3rem] min-w-[220px]">
              {prefersReducedMotion ? (
                <div className="space-y-1">
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
                    <div key={i} className="flex items-center gap-2 min-h-[1.4rem]">
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
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-1.5 h-4 bg-coffee-light/70 ml-0.5"
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
