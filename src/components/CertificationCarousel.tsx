import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Cloud, Brain, Shield, Database } from "lucide-react";

interface Certification {
  icon: typeof Award;
  title: string;
  rating: number;
  subtitle: string;
}

const certifications: Certification[] = [
  { icon: Cloud, title: "AWS Solutions Architect", rating: 4.8, subtitle: "Certified Professional" },
  { icon: Brain, title: "MLOps Practitioner", rating: 4.9, subtitle: "Machine Learning Expert" },
  { icon: Shield, title: "AWS Security Specialty", rating: 4.7, subtitle: "Cloud Security" },
  { icon: Database, title: "Data Analytics", rating: 4.8, subtitle: "Big Data & Analytics" },
];

const CertificationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const cert = certifications[currentIndex];
  const Icon = cert.icon;

  return (
    <div className="relative h-24 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border"
        >
          <div className="p-2 rounded-xl bg-coffee/20 border border-coffee/30">
            <Icon className="w-6 h-6 text-coffee-light" />
          </div>
          <div className="text-left">
            <p className="font-mono text-sm text-foreground font-medium">{cert.title}</p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-xs ${i < Math.floor(cert.rating) ? "text-star" : "text-muted-foreground/30"}`}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{cert.rating}/5</span>
              <span className="text-xs text-coffee-light">{cert.subtitle}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel indicators */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {certifications.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === currentIndex 
                ? "bg-coffee-light w-4" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to certification ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCarousel;
