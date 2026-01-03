import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  tag: string;
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ tag, title, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`mb-16 md:mb-24 ${centered ? "text-center" : ""}`}
    >
      {/* Tag with expressive spacing */}
      <motion.span 
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full border border-coffee/30 bg-coffee/10 text-coffee-light text-xs md:text-sm font-mono uppercase tracking-[0.15em] mb-6"
      >
        {tag}
      </motion.span>
      
      {/* Title with rhythmic typography */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-foreground tracking-tight leading-tight mb-6">
        {typeof title === "string" ? (
          title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))
        ) : (
          title
        )}
      </h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
