import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/tooltip";
import { Coffee, Cloud, Pen, Rocket, Target, Users } from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: <Coffee className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <Pen className="w-4 h-4" /> },
  { id: "credentials", label: "Creds", icon: <Target className="w-4 h-4" /> },
  { id: "portfolio", label: "Projects", icon: <Rocket className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Users className="w-4 h-4" /> },
];

export default function RightNav() {
  const [active, setActive] = useState("hero");

  // Scroll to section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  // Track active section while scrolling
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-8 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((sec) => (
        <Tooltip key={sec.id} content={sec.label} side="left">
          <motion.button
            onClick={() => handleScroll(sec.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
              ${active === sec.id ? "bg-coffee-dark border-coffee-dark" : "bg-transparent border-coffee-light"}
            `}
            whileHover={{ scale: 1.2 }}
            aria-label={sec.label}
          >
            <motion.div
              className={`${active === sec.id ? "text-background" : "text-coffee-light"}`}
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
            >
              {sec.icon}
            </motion.div>
          </motion.button>
        </Tooltip>
      ))}
      {/* Optional connecting line for techy look */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700/50 to-transparent -z-10" />
    </div>
  );
}