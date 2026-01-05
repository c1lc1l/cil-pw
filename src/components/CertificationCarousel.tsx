import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Brain, GraduationCap, Database, type LucideIcon } from "lucide-react";

interface Certification {
  icon: LucideIcon;
  title: string;
  issuer: string;
  issued: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    icon: Cloud,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "Jan 2025",
    skills: ["Cloud Fundamentals", "Security Basics", "Architecture"],
  },
  {
    icon: Brain,
    title: "OCI Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "July 2025",
    skills: ["AI/ML Concepts", "OCI AI Services", "Responsible AI"],
  },
  {
    icon: Database,
    title: "Data Literacy",
    issuer: "Datacamp",
    issued: "Nov 2024",
    skills: ["Data Analysis", "Visualization", "SQL Basics"],
  },
  {
    icon: GraduationCap,
    title: "Gemini Certified Educator",
    issuer: "Google",
    issued: "Oct 2025",
    skills: ["Generative AI", "Prompt Engineering", "AI Education"],
  },
];

const AUTO_ROTATE_INTERVAL = 4000;

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 },
};

const CertificationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex((index + certifications.length) % certifications.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % certifications.length),
      AUTO_ROTATE_INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  const cert = certifications[currentIndex];
  const Icon = cert.icon;

  return (
    <section
      className="relative h-24 flex items-center justify-center"
      aria-roledescription="carousel"
      aria-label="Professional certifications"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border"
          role="group"
          aria-roledescription="slide"
          aria-label={`${cert.title}, ${cert.issuer}`}
        >
          <div className="p-2 rounded-xl bg-coffee/20 border border-coffee/30 shrink-0">
            <Icon className="w-6 h-6 text-coffee-light" aria-hidden="true" />
          </div>

          <div className="text-left min-w-0">
            <p className="font-mono text-sm text-foreground font-medium truncate">
              {cert.title}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {cert.issuer} • Issued {cert.issued}
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              {cert.skills.slice(0, 3).map((skill, i) => (
                <span
                  key={skill}
                  className="text-xs text-coffee-light px-1.5 py-0.5 bg-coffee/10 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
        role="tablist"
        aria-label="Certification selector"
      >
        {certifications.map((c, i) => {
          const isActive = i === currentIndex;
          return (
            <button
              key={c.title}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                isActive
                  ? "bg-coffee-light w-4"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Show ${c.title}`}
              aria-selected={isActive}
              role="tab"
              type="button"
            />
          );
        })}
      </div>
    </section>
  );
};

export default CertificationCarousel;
