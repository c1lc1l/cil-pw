import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Cloud, Pen, Cpu, BookOpen, Users, Server } from "lucide-react";

const MissionStatement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Decorative center line */}
      <motion.div 
        style={{ scaleY: prefersReducedMotion ? 1 : scrollYProgress }}
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent origin-top hidden md:block"
      />

      <motion.div
        style={prefersReducedMotion ? {} : { opacity, scale }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground text-sm font-mono mb-6">
            who.am.i()
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground tracking-tight">
            Two Roles, One Passion
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Building clouds and crafting words with the same attention to clarity and structure
          </p>
        </motion.div>

        {/* Dual Identity Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ben - Cloud Captain Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-navy-dark/80 to-navy-mid/30 border border-navy-accent/30 hover:border-navy-accent/60 transition-all duration-500">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px hsl(210 80% 45% / 0.15), 0 0 40px hsl(210 80% 45% / 0.1)" }}
              />
              
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-navy-accent/20 border border-navy-accent/40">
                  <Cloud className="w-8 h-8 text-navy-glow" />
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-bold text-foreground">"Ben"</h3>
                  <p className="text-navy-glow text-sm font-mono">The Cloud Captain</p>
                </div>
              </div>

              {/* Role description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                AWS Cloud Club Captain at PCU. Building serverless architectures 
                and cloud solutions that scale. Teaching the next generation of 
                cloud builders.
              </p>

              {/* Skills */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Server className="w-4 h-4 text-navy-glow" />
                  <span className="text-foreground/80">AWS, Lambda, Infrastructure as Code</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Cpu className="w-4 h-4 text-navy-glow" />
                  <span className="text-foreground/80">Serverless Architecture & DevOps</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-navy-glow" />
                  <span className="text-foreground/80">Community Leadership & Education</span>
                </div>
              </div>

              {/* Decorative circuit pattern */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-navy-glow">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <circle cx="30" cy="10" r="2" fill="currentColor" />
                  <circle cx="50" cy="10" r="2" fill="currentColor" />
                  <line x1="10" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="1" />
                  <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="1" />
                  <circle cx="30" cy="50" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Cil - Editor Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-coffee-espresso/80 to-coffee-brown/30 border border-coffee-warm/30 hover:border-coffee-warm/60 transition-all duration-500">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px hsl(25 40% 50% / 0.15), 0 0 40px hsl(25 40% 50% / 0.1)" }}
              />
              
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-coffee-warm/20 border border-coffee-warm/40">
                  <Pen className="w-8 h-8 text-coffee-light" />
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-bold text-foreground">"Cil"</h3>
                  <p className="text-coffee-light text-sm font-mono">The Editor-in-Chief</p>
                </div>
              </div>

              {/* Role description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                Associate Editor-in-Chief at PCU's publication. Leading editorial 
                teams, crafting technical content, and bridging complex ideas 
                with clear communication.
              </p>

              {/* Skills */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Pen className="w-4 h-4 text-coffee-light" />
                  <span className="text-foreground/80">Technical Writing & Content Strategy</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <BookOpen className="w-4 h-4 text-coffee-light" />
                  <span className="text-foreground/80">Editorial Leadership & Mentoring</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-coffee-light" />
                  <span className="text-foreground/80">Research & Fact-checking</span>
                </div>
              </div>

              {/* Decorative pen marks */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-coffee-light">
                  <path d="M10 50 L50 10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M45 15 L55 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M5 55 L15 45" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connecting element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-secondary/50 border border-border">
            <Cloud className="w-5 h-5 text-navy-glow" />
            <span className="text-sm text-muted-foreground font-mono">×</span>
            <Pen className="w-5 h-5 text-coffee-light" />
            <span className="text-sm text-foreground/80 font-mono">= Organized Clarity</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionStatement;