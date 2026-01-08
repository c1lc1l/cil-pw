import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Facebook, Coffee, Mail, Brain, Cloud, Pen, Sandwich } from "lucide-react";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/c1lc1l", 
    label: "GitHub",
    color: "#ffffff",
    username: "@c1lc1l"
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/benedict-casio", 
    label: "LinkedIn",
    color: "#0A66C2",
    username: "Benedict Casio"
  },
  { 
    icon: Mail, 
    href: "mailto:benedictcasio010@gmail.com", 
    label: "Email",
    color: "#EA4335",
    username: "benedictcasio010@gmail.com"
  },
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/CilCil01", 
    label: "Facebook",
    color: "#1877F2",
    username: "@CilCil01com"
  },
];

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
              Gen Benedict C. Casio
            </h3>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span>Architecting organized chaos through</span>
                <Brain className="w-4 h-4 text-green-400" />
                <span>,</span>
                <Cloud className="w-4 h-4 text-blue-400" />
                <span>and</span>
                <Pen className="w-4 h-4 text-purple-400" />
              </span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-coffee-light hover:border-coffee/30 hover:bg-coffee/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Built with <Coffee className="w-4 h-4 text-coffee-light" /> @ 3 AM
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
              © {new Date().getFullYear()} Gen Benedict C. Casio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export const HeroSocials = () => {
  const [hideSocials, setHideSocials] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHideSocials(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={
        hideSocials
          ? { opacity: 0, x: -20 }
          : { opacity: 1, x: 0 }
      }
      transition={{ duration: 0.4 }}
      className="fixed top-1/2 left-8 -translate-y-1/2 flex-col gap-4 z-50 hidden sm:flex"
      style={{ translateY: '-50%' }}
    >
      {socialLinks.map(({ icon: Icon, href, label, color }, idx) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm hover:border-slate-500/50 transition-all"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 + idx * 0.1 }}
          aria-label={label}
        >
          <Icon 
            className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" 
            style={{ color: `${color}80` }}
          />

          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity"
            style={{ backgroundColor: `${color}80` }}
          />
        </motion.a>
      ))}
    
      {/* Connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700/50 to-transparent -z-10" />
    </motion.div>
  );
};

export default Footer;