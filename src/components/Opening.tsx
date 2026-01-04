import { motion, useReducedMotion } from "framer-motion";

const Opening = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-coffee-light/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-navy-mid/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Name - calm, composed */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-medium text-foreground tracking-tight mb-4">
            Cil Casio
          </h1>
          <p className="text-lg text-muted-foreground font-mono">
            Technology Consultant
          </p>
        </motion.div>

        {/* Mission statement - single intentional phrase with proper highlight */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.3] tracking-tight">
            Building reliable systems,{" "}
            <span className="relative inline">
              <span className="relative z-10">teaching cloud fundamentals</span>
              <span 
                className="absolute inset-0 bg-coffee/20 -skew-x-2 translate-y-[45%] h-[40%] -z-0" 
                aria-hidden="true"
              />
            </span>
            , and shipping with intention.
          </h2>
        </motion.div>

        {/* Scroll hint - minimal */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-sm text-muted-foreground/50 font-mono"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Opening;
