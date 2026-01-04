import { motion, useReducedMotion } from "framer-motion";
import { Coffee } from "lucide-react";

const Opening = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden texture-grain">
      {/* Warm ambient glows */}
      <div className="absolute top-1/4 left-1/5 w-[600px] h-[600px] bg-coffee-warm/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-coffee-espresso/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-coffee-crema/5 rounded-full blur-[80px] pointer-events-none animate-warmth" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Name with warmth */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-medium text-foreground tracking-tight mb-3">
            Cil Casio
          </h1>
          <p className="text-lg text-muted-foreground font-mono flex items-center gap-2">
            Technology Consultant
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-coffee-warm/60" />
            <span className="text-coffee-light/70">Manila</span>
          </p>
        </motion.div>

        {/* Mission statement with organic highlight */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.35] tracking-tight">
            Building reliable systems,{" "}
            <span className="relative inline whitespace-nowrap">
              <span className="relative z-10 text-cream">teaching cloud fundamentals</span>
              <span 
                className="absolute left-[-6px] right-[-6px] bottom-[2px] h-[45%] bg-gradient-to-r from-coffee-warm/30 via-coffee-warm/40 to-coffee-brown/25 rounded-sm -z-0" 
                style={{ transform: 'rotate(-0.8deg)' }}
                aria-hidden="true"
              />
            </span>
            , and shipping with intention.
          </h2>
        </motion.div>

        {/* Warm aside - personality */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground/70 font-serif italic text-lg mb-12"
        >
          Usually with coffee. Always past midnight.
        </motion.p>

        {/* Scroll hint with coffee icon */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-3 text-muted-foreground/40"
        >
          <Coffee className="w-4 h-4 text-coffee-warm/50" />
          <span className="text-sm font-mono">scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Opening;
