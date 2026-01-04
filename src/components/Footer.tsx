import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/c1lc1l", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/cilcasio", label: "LinkedIn" },
  { icon: Mail, href: "mailto:cil@cilcasio.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-coffee-light transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground/60 font-mono">
            © {new Date().getFullYear()} Cil Casio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
