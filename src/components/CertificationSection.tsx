import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  logo: string;
  color: string;
  description: string;
  date?: string;
}

const certifications: Certification[] = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    logo: "/logos/ccp.png",
    color: "#999B9B",
    description:
      "Foundational understanding of AWS Cloud concepts, services, and terminology.",
    date: "Jan 2025",
  },
  {
    id: "cloud-captain",
    name: "Cloud Club Captain Badge",
    issuer: "Amazon Web Services",
    logo: "/logos/cloudclubcaptain.png",
    color: "#9333ea",
    description:
      "Cloud Captains are selected as an elite cohort of student leaders on campus.",
    date: "March 2025",
  },
  {
    id: "oci-ai",
    name: "OCI AI Foundations Associate",
    issuer: "Oracle",
    logo: "/logos/ociai.png",
    color: "#F80000",
    description:
      "Core knowledge of Oracle Cloud Infrastructure AI/ML services & concepts.",
    date: "July 2025",
  },
  {
    id: "datacamp-ai",
    name: "AI Fundamentals",
    issuer: "DataCamp",
    logo: "/logos/aifundamentals.png",
    color: "#03EF62",
    description:
      "Comprehensive understanding of AI fundamentals, applications, and ethics.",
    date: "Nov 2024",
  },
  {
    id: "datacamp-data",
    name: "Data Literacy",
    issuer: "DataCamp",
    logo: "/logos/dataliteracy.png",
    color: "#03EF62",
    description:
      "Data interpretation, analysis, visualization & communication.",
    date: "Nov 2024",
  },
];

const CertificationBadge = ({ cert }: { cert: Certification }) => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      <motion.div
        whileHover={
          prefersReducedMotion ? {} : { scale: 1.08, y: -4 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="relative w-24 h-24 md:w-28 md:h-28 cursor-pointer"
      >
        {/* Glow layers */}
        <div
          className="absolute inset-0 rounded-full blur-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${cert.color}55 0%, transparent 70%)`,
            opacity: isHovered ? 0.9 : 0.5,
          }}
        />
        <div
          className="absolute inset-0 rounded-full blur-md transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${cert.color}AA 0%, transparent 60%)`,
            opacity: isHovered ? 0.8 : 0.35,
          }}
        />

        <img
          src={cert.logo}
          alt={cert.name}
          className="relative w-full h-full object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.16 }}
            className="absolute top-full mt-4 w-72 z-50"
          >
            {/* Arrow */}
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t"
              style={{
                borderColor: `${cert.color}55`,
                backgroundColor: "hsl(222 47% 8%)",
              }}
            />

            {/* Card */}
            <div
              className="rounded-xl border p-4 shadow-2xl backdrop-blur-md"
              style={{
                borderColor: `${cert.color}35`,
                backgroundColor: "hsl(222 47% 8% / 0.98)",
                boxShadow: `0 20px 50px ${cert.color}20`,
              }}
            >
              <h4 className="font-mono font-semibold text-white text-sm mb-1">
                {cert.name}
              </h4>
              <p
                className="text-xs font-mono mb-3"
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </p>
              <p className="text-slate-300 text-xs leading-relaxed">
                {cert.description}
              </p>
              {cert.date && (
                <p className="text-slate-500 text-xs font-mono mt-3 pt-2 border-t border-slate-700/50">
                  Issued: {cert.date}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 max-w-6xl mx-auto px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-600/30 bg-purple-600/10 text-purple-400 text-sm font-mono mb-4">
            <Award className="w-4 h-4" />
            <span>Credentials.Init()</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-mono font-bold text-white">
            Certifications & Badges
          </h3>
        </div>

        <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-700/30 backdrop-blur-sm">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 justify-items-center">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 180,
                }}
              >
                <CertificationBadge cert={cert} />
              </motion.div>
            ))}
          </div>

          {/* Decorative dots */}
          <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-purple-400/40" />
          <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-blue-400/40" />
          <div className="absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full bg-orange-400/40" />
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
