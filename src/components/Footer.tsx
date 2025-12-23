import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Coffee, Cloud } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/c1lc1l", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/cilcasio", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/cilcasio", label: "Twitter" },
  { icon: Mail, href: "mailto:cil@cilcasio.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-gradient-to-b from-background to-navy-dark/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 rounded-xl bg-coffee/20 border border-coffee/30">
              <Cloud className="w-6 h-6 text-coffee-light" />
            </div>
            <div>
              <span className="font-mono font-bold text-lg text-foreground">cilcasio.com</span>
              <p className="text-xs text-muted-foreground">Powered by AWS & Coffee ☕</p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-coffee-light hover:border-coffee-light hover:shadow-[0_0_15px_hsl(25_50%_40%/0.3)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p className="font-mono">
            © {currentYear} Gen "Cil" Benedict Casio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-coffee-light" />
            <span className="font-mono">Made with caffeine in Cavite, Philippines</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
