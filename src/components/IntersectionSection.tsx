import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cloud, Pen, Lightbulb, Code, FileText, Users } from "lucide-react";

const synergies = [
  {
    icon: FileText,
    title: "Clear Documentation",
    description: "Translating complex cloud architectures into documentation anyone can follow.",
    captainIcon: Cloud,
    editorIcon: Pen,
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Leading teams with editorial precision and engineering rigor.",
    captainIcon: Code,
    editorIcon: Users,
  },
  {
    icon: Lightbulb,
    title: "Structured Thinking",
    description: "Building scalable systems with the same logic applied to editorial processes.",
    captainIcon: Cloud,
    editorIcon: Lightbulb,
  },
  {
    icon: Code,
    title: "Developer Advocacy",
    description: "Communicating technical concepts through writing that developers trust.",
    captainIcon: Code,
    editorIcon: FileText,
  },
];

const IntersectionSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-navy-accent/5 rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-coffee-warm/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground text-sm font-mono mb-6">
            the.intersection()
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground tracking-tight mb-4">
            Where Cloud Meets Words
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering clarity meets editorial precision. Here's how both roles work together.
          </p>
        </motion.div>

        {/* Synergy Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {synergies.map((synergy, index) => {
            const Icon = synergy.icon;
            const CaptainIcon = synergy.captainIcon;
            const EditorIcon = synergy.editorIcon;
            
            return (
              <motion.div
                key={synergy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.5, 
                  delay: prefersReducedMotion ? 0 : index * 0.1 
                }}
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                className="group"
              >
                <div className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 h-full">
                  {/* Icon and flow indicator */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-navy-accent/20 border border-navy-accent/30">
                      <CaptainIcon className="w-4 h-4 text-navy-glow" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <div className="p-2 rounded-lg bg-gradient-to-br from-navy-accent/10 to-coffee-warm/10 border border-foreground/10">
                      <Icon className="w-4 h-4 text-foreground" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <div className="p-2 rounded-lg bg-coffee-warm/20 border border-coffee-warm/30">
                      <EditorIcon className="w-4 h-4 text-coffee-light" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-mono font-semibold text-foreground mb-2 group-hover:text-coffee-light transition-colors">
                    {synergy.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {synergy.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ 
                      background: "linear-gradient(135deg, hsl(210 80% 45% / 0.05) 0%, hsl(25 40% 50% / 0.05) 100%)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground italic font-serif">
            "The best code tells a story. The best writing has structure."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntersectionSection;