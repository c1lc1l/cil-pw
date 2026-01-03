import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MissionStatement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section 
      ref={containerRef}
      className="min-h-[70vh] flex items-center justify-center px-4 py-24 relative overflow-hidden"
    >
      {/* Decorative line */}
      <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-coffee-light/30 to-transparent origin-top"
      />

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Pre-heading */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="block text-xs md:text-sm font-mono text-coffee-light uppercase tracking-[0.3em] mb-8"
        >
          Mission Statement
        </motion.span>

        {/* Main statement with expressive typography */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.2] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="block text-foreground mb-2"
          >
            Serverless clarity
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="block text-muted-foreground mb-2"
          >
            for classrooms, codes,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="block text-muted-foreground mb-2"
          >
            and clouds —
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="block"
          >
            <span className="text-gradient font-normal">engineered with intention.</span>
          </motion.span>
        </h2>

        {/* Decorative elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-coffee-light to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default MissionStatement;
