import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Coffee, Pen, Rocket, Target, Users } from "lucide-react";

type SectionId = "hero" | "professional-experience" | "certifications" | "projects" | "contact";

const sections: {
  id: SectionId;
  label: string;
  icon: JSX.Element;
}[] = [
  { id: "hero", label: "Home", icon: <Coffee className="w-4 h-4" /> },
  { id: "professional-experience", label: "My Experiences", icon: <Pen className="w-4 h-4" /> },
  { id: "certifications", label: "Certifications", icon: <Target className="w-4 h-4" /> },
  { id: "projects", label: "Projects", icon: <Rocket className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Users className="w-4 h-4" /> },
];

export default function RightNav() {
  const [active, setActive] = useState<SectionId>("hero");
  const containerRef = useRef<HTMLDivElement>(null);

  /* ------------------ Smooth Scroll + Hash ------------------ */
  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;

    history.pushState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  /* ------------------ Intersection Observer ------------------ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            setActive(id);
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ------------------ Initial Hash Load ------------------ */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionId;
    if (hash && sections.some((s) => s.id === hash)) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, [scrollToSection]);

  /* ------------------ Active Indicator Position ------------------ */
  const activeIndex = sections.findIndex((s) => s.id === active);

  return (
    <TooltipProvider delayDuration={100}>
      <nav
        className="hidden lg:flex fixed top-1/2 right-8 -translate-y-1/2 z-50"
        aria-label="Section navigation"
      >
        <div
          ref={containerRef}
          className="relative flex flex-col gap-4"
        >
          {sections.map((sec) => {
            const isActive = active === sec.id;

            return (
              <Tooltip key={sec.id}>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={() => scrollToSection(sec.id)}
                    aria-label={sec.label}
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      border transition-colors duration-300
                      ${
                        isActive
                          ? "bg-blue-500 border-blue-500"
                          : "bg-transparent border-blue-500/30"
                      }
                    `}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className={
                        isActive
                          ? "text-background"
                          : "text-blue-300"
                      }
                      whileHover={{ rotate: 15 }}
                    >
                      {sec.icon}
                    </motion.span>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <span className="text-sm font-mono">{sec.label}</span>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </nav>
    </TooltipProvider>
  );
}