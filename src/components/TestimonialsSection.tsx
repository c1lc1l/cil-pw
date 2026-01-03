import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Cil transformed our cloud infrastructure from chaos to clarity. His serverless solutions cut our costs by 60%.",
    author: "Maria Santos",
    role: "CTO, StartupPH",
    highlight: "60% cost reduction",
  },
  {
    quote: "The AWS workshops Cil organized were game-changing for our dev team. Real skills, not just theory.",
    author: "Juan Dela Cruz",
    role: "Engineering Lead",
    highlight: "Real skills",
  },
  {
    quote: "Working with Cil on our ML pipeline was seamless. He bridges the gap between complex AI and practical deployment.",
    author: "Angela Reyes",
    role: "Data Science Manager",
    highlight: "Seamless ML",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-coffee/30 bg-coffee/10 text-coffee-light text-sm font-mono mb-6">
            testimonials.verified()
          </span>
          
          {/* Expressive header with rhythmic spacing */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-foreground tracking-tight leading-tight">
            <span className="block mb-2">Words from</span>
            <span className="block text-gradient">the Cloud</span>
          </h2>
        </motion.div>

        {/* Stacked testimonials with expressive typography */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border group hover:border-coffee/30 transition-all duration-500">
                {/* Quote icon */}
                <Quote className="absolute top-6 left-6 w-8 h-8 text-coffee-light/20" />
                
                {/* Highlight badge */}
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-3 right-8 px-4 py-1 rounded-full bg-coffee/20 border border-coffee/30 text-coffee-light text-xs font-mono"
                >
                  {testimonial.highlight}
                </motion.span>

                {/* Quote text with expressive spacing */}
                <blockquote className="relative z-10 pt-6">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed tracking-wide mb-8">
                    "{testimonial.quote}"
                  </p>
                  
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coffee to-coffee-light flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <cite className="not-italic font-mono text-foreground font-medium">
                        {testimonial.author}
                      </cite>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 60px hsl(25 40% 40% / 0.1)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
