import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, useReducedMotion, AnimatePresence, LazyMotion, m, domMax } from 'framer-motion';
import { Award } from 'lucide-react';

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
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    logo: '/logos/ccp.png',
    color: '#999B9B',
    description:
      'Foundational understanding of AWS Cloud concepts, services, and terminology.',
    date: 'Jan 2025',
  },
  {
    id: 'cloud-captain',
    name: 'Cloud Club Captain Badge',
    issuer: 'Amazon Web Services',
    logo: '/logos/cloudclubcaptain.png',
    color: '#9333ea',
    description:
      'Cloud Captains are selected as an elite cohort of student leaders on campus.',
    date: 'March 2025',
  },
  {
    id: 'oci-ai',
    name: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    logo: '/logos/ociai.png',
    color: '#F80000',
    description:
      'Core knowledge of Oracle Cloud Infrastructure AI/ML services & concepts.',
    date: 'July 2025',
  },
  {
    id: 'datacamp-ai',
    name: 'AI Fundamentals',
    issuer: 'DataCamp',
    logo: '/logos/aifundamentals.png',
    color: '#03EF62',
    description:
      'Comprehensive understanding of AI fundamentals, applications, and ethics.',
    date: 'Nov 2024',
  },
  {
    id: 'datacamp-data',
    name: 'Data Literacy',
    issuer: 'DataCamp',
    logo: '/logos/dataliteracy.png',
    color: '#03EF62',
    description:
      'Data interpretation, analysis, visualization & communication.',
    date: 'Nov 2024',
  },
];

interface CertificationBadgeProps {
  cert: Certification;
  isMobile: boolean;
}

const CertificationBadge = ({ cert, isMobile }: CertificationBadgeProps) => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Handle clicking outside to close tooltip on mobile
  useEffect(() => {
    if (!isMobile || !isActive) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, isActive]);

  const glowStyles = useMemo(() => ({
    outer: {
      background: `radial-gradient(circle at center, ${cert.color}55 0%, transparent 70%)`,
    },
    inner: {
      background: `radial-gradient(circle at center, ${cert.color}AA 0%, transparent 60%)`,
    },
  }), [cert.color]);

  const handleToggle = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation();
      setIsActive(!isActive);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center"
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onClick={handleToggle}
    >
      {/* Badge Visual */}
      <motion.div
        whileHover={!prefersReducedMotion && !isMobile ? { scale: 1.08, y: -4 } : {}}
        whileTap={isMobile ? { scale: 0.95 } : {}}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer flex-shrink-0"
      >
        {!prefersReducedMotion && (
          <>
            <div
              className="absolute inset-0 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none"
              style={{ ...glowStyles.outer, opacity: isActive ? 0.9 : 0.5 }}
            />
            <div
              className="absolute inset-0 rounded-full blur-md transition-opacity duration-300 pointer-events-none"
              style={{ ...glowStyles.inner, opacity: isActive ? 0.8 : 0.35 }}
            />
          </>
        )}

        <img
          src={cert.logo}
          alt={cert.name}
          loading="lazy"
          decoding="async"
          className="relative w-full h-full object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Tooltip Wrapper */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.16 }}
            // Use "pointer-events-none" so the tooltip doesn't block the next click if it's fading out
            className="absolute top-full z-50 mt-4 flex flex-col items-center pointer-events-none"
          >
            {/* 1. The Arrow: Always perfectly centered under the badge */}
            <div
              className="w-3 h-3 rotate-45 border-l border-t mb-[-6px] z-10"
              style={{
                borderColor: `${cert.color}55`,
                backgroundColor: 'hsl(222 47% 8%)',
              }}
            />

            {/* 2. The Content Card: Pointers-events-auto so you can interact if needed */}
            <div
              className="pointer-events-auto rounded-xl border p-3 sm:p-4 shadow-2xl backdrop-blur-md"
              style={{
                borderColor: `${cert.color}35`,
                backgroundColor: 'hsl(222 47% 8% / 0.98)',
                boxShadow: `0 20px 50px ${cert.color}20`,
                // FIX: On mobile, use a fixed width that fits most screens. 
                // On desktop, keep it standard.
                width: isMobile ? 'calc(100vw - 120px)' : '300px',
                maxWidth: isMobile ? '200px' : '320px',
              }}
            >
              <div className="text-center sm:text-left">
                <h4 className="font-mono font-semibold text-white text-xs sm:text-sm mb-1 leading-tight">
                  {cert.name}
                </h4>
                <p className="font-mono text-[10px] sm:text-xs mb-2" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
                <p className="text-slate-300 text-[10px] sm:text-xs leading-relaxed">
                  {cert.description}
                </p>
                {cert.date && (
                  <p className="text-slate-500 font-mono text-[9px] sm:text-[10px] mt-2 pt-2 border-t border-slate-700/50">
                    Issued: {cert.date}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CertificationsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    const resizeListener = () => checkMobile();
    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <LazyMotion features={domMax}>
      <section id="certifications" className="py-12 sm:py-16 md:py-20 w-full px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mt-10 sm:mt-16 md:mt-20"
          >
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-purple-600/30 bg-purple-600/10 text-purple-400 text-xs sm:text-sm font-mono mb-3 sm:mb-4"
              >
                <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">Credentials.Init()</span>
              </m.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white px-2">
                Certifications & Badges
              </h3>
            </div>

            {/* Badge container */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-700/30 backdrop-blur-sm overflow-visible"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-items-center">
                {certifications.map((cert, index) => (
                  <m.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(index * 0.06, 0.24),
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <CertificationBadge cert={cert} isMobile={isMobile} />
                  </m.div>
                ))}
              </div>

              {/* Decorative dots - hidden on mobile */}
              <div className="hidden sm:block absolute top-6 left-6 w-2 h-2 rounded-full bg-purple-400/40" />
              <div className="hidden sm:block absolute bottom-6 right-6 w-2 h-2 rounded-full bg-blue-400/40" />
              <div className="hidden md:block absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full bg-orange-400/40" />
            </m.div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default CertificationsSection;