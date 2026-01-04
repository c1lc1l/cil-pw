import { Github, Linkedin, Mail, Coffee } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/c1lc1l", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/cilcasio", label: "LinkedIn" },
  { icon: Mail, href: "mailto:cil@cilcasio.com", label: "Email" },
];

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="py-16 px-6 border-t border-coffee-brown/20 relative">
      {/* Warm bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-coffee-espresso/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Social links with warmth */}
          <motion.div 
            className="flex items-center gap-5"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-coffee-light transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Closing note */}
          <motion.div 
            className="flex items-center gap-3"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Coffee className="w-4 h-4 text-coffee-warm/50" />
            <p className="text-sm text-muted-foreground/50 font-mono">
              © {new Date().getFullYear()} Cil Casio
            </p>
          </motion.div>
        </div>
        
        {/* Warm sign-off */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-sm text-muted-foreground/30 font-serif italic text-center md:text-left"
        >
          Built with coffee and quiet nights in Manila.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
