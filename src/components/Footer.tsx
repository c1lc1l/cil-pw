import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Coffee, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/c1lc1l", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/cilcasio", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/cilcasio", label: "Twitter" },
  { icon: Mail, href: "mailto:cil@cilcasio.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
              Cil Casio
            </h3>
            <p className="text-sm text-muted-foreground">
              Serverless Sorcerer • AWS Cloud Captain
            </p>
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

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-coffee-light/30 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-coffee-light fill-coffee-light" /> 
              and <Coffee className="w-4 h-4 text-coffee-light" />
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
              © {new Date().getFullYear()} Gen "Cil" Benedict Casio. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/40 mt-1 font-mono">
              Deployed on AWS CloudFront + S3 • Route53: cilcasio.com
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
