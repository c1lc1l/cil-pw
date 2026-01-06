// UPDATED MissionStatement.tsx

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Cloud, Pen, Rocket, Target, Users, Trophy, Award, ExternalLink, Filter } from "lucide-react";


const CoffeeWaveTop = ({ activeRole }: { activeRole: "captain" | "editor" }) => {
  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
      <motion.svg
        className="w-full h-32 md:h-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
          className={activeRole === "captain" ? "fill-blue-950/40" : "fill-orange-950/40"}
          animate={{
            d: [
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
              "M0,70 C240,30 480,110 720,70 C960,30 1200,110 1440,70 L1440,0 L0,0 Z",
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z"
          className={activeRole === "captain" ? "fill-blue-950/20" : "fill-orange-950/20"}
          animate={{
            d: [
              "M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z",
              "M0,90 C240,130 480,50 720,90 C960,130 1200,50 1440,90 L1440,0 L0,0 Z",
              "M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.svg>
    </div>
  );
};


interface Certification {
  id: string;
  name: string;
  issuer: string;
  logo: string;
  color: string;
  description: string;
  date?: string;
}

const CertificationBadge = ({ cert }: { cert: Certification }) => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.15, y: -4 }}
        className="relative w-24 h-24 md:w-28 md:h-28 cursor-pointer"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Gradient glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full blur-xl transition-opacity duration-300"
          style={{ 
            background: `radial-gradient(circle, ${cert.color}, transparent 70%)`,
            opacity: isHovered ? 0.6 : 0.3
          }}
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Logo - no border/box */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={cert.logo} 
            alt={cert.name}
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{
              filter: isHovered ? `drop-shadow(0 0 20px ${cert.color}80)` : 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'
            }}
          />
        </div>
      </motion.div>

      {/* Hover Card */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-4 w-72 pointer-events-none"
        >
          <div className="relative">
            {/* Arrow */}
            <div 
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-l-2 border-t-2"
              style={{ 
                borderColor: `${cert.color}60`,
                backgroundColor: 'hsl(222 47% 11%)'
              }}
            />
            
            {/* Card */}
            <div 
              className="relative rounded-2xl border-2 p-4 shadow-2xl backdrop-blur-sm"
              style={{ 
                borderColor: `${cert.color}60`,
                backgroundColor: 'hsl(222 47% 11% / 0.95)',
                boxShadow: `0 20px 40px ${cert.color}20`
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    background: `radial-gradient(circle, ${cert.color}20, transparent)`
                  }}
                >
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-mono font-semibold text-white text-sm leading-tight mb-1">
                    {cert.name}
                  </h4>
                  <p 
                    className="text-xs font-mono"
                    style={{ color: cert.color }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-2">
                {cert.description}
              </p>
              {cert.date && (
                <p className="text-slate-500 text-xs font-mono">
                  Issued: {cert.date}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};


interface Project {
  id: string;
  title: string;
  category: "tech" | "article";
  tags: string[];
  description: string;
  link: string;
  color: string;
}

const HexagonCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const hexagonPath = "M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 200
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[0.87] max-w-[280px] mx-auto">
        {/* Hexagon SVG Container */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <defs>
            <clipPath id={`hex-clip-${project.id}`}>
              <path d={hexagonPath} />
            </clipPath>
            <linearGradient id={`hex-gradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={project.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={project.color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Glow effect */}
          <motion.path
            d={hexagonPath}
            fill="none"
            stroke={project.color}
            strokeWidth="0.5"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              filter: `drop-shadow(0 0 8px ${project.color})`
            }}
          />
          
          {/* Background */}
          <path
            d={hexagonPath}
            fill={`url(#hex-gradient-${project.id})`}
            stroke={project.color}
            strokeWidth="0.3"
            opacity={isHovered ? "0.8" : "0.4"}
            className="transition-opacity duration-300"
          />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
          <h4 className="font-mono font-bold text-white text-base md:text-lg mb-3 line-clamp-2">
            {project.title}
          </h4>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-3 max-w-[200px]">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-mono border"
                style={{
                  borderColor: `${project.color}40`,
                  backgroundColor: `${project.color}15`,
                  color: project.color
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 max-w-[200px]">
            {project.description}
          </p>
          
          {/* Link Button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs border transition-all duration-300"
            style={{
              borderColor: isHovered ? project.color : `${project.color}40`,
              backgroundColor: isHovered ? `${project.color}20` : `${project.color}10`,
              color: project.color
            }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            View
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};


const MissionStatement = ({ activeRole = "captain" }: { activeRole?: "captain" | "editor" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  const [activeFilter, setActiveFilter] = useState<"all" | "tech" | "article">("all");

  const projects: Project[] = [
    {
      id: "proj-1",
      title: "AWS Cloud Infrastructure",
      category: "tech",
      tags: ["AWS", "Cloud", "Infrastructure"],
      description: "Scalable cloud architecture using AWS services for enterprise applications.",
      link: "https://example.com/aws-project",
      color: "#FF9900"
    },
    {
      id: "proj-2",
      title: "AI-Powered Chatbot",
      category: "tech",
      tags: ["Python", "AI", "NLP"],
      description: "Natural language processing chatbot using machine learning algorithms.",
      link: "https://example.com/chatbot",
      color: "#4285F4"
    },
    {
      id: "proj-3",
      title: "Political Analysis Column",
      category: "article",
      tags: ["Politics", "Editorial", "Opinion"],
      description: "In-depth analysis of contemporary political issues and governance.",
      link: "https://example.com/politics-column",
      color: "#F97316"
    },
    {
      id: "proj-4",
      title: "DevOps Pipeline",
      category: "tech",
      tags: ["Docker", "CI/CD", "Cloud"],
      description: "Automated deployment pipeline with containerization and orchestration.",
      link: "https://example.com/devops",
      color: "#10B981"
    },
    {
      id: "proj-5",
      title: "Social Justice Feature",
      category: "article",
      tags: ["Society", "Investigation", "Feature"],
      description: "Investigative feature on social justice movements and community impact.",
      link: "https://example.com/social-justice",
      color: "#EC4899"
    },
    {
      id: "proj-6",
      title: "Data Analytics Dashboard",
      category: "tech",
      tags: ["JavaScript", "Data Viz", "Analytics"],
      description: "Interactive data visualization dashboard for business intelligence.",
      link: "https://example.com/dashboard",
      color: "#8B5CF6"
    },
    {
      id: "proj-7",
      title: "Education Reform Essay",
      category: "article",
      tags: ["Education", "Column", "Policy"],
      description: "Critical examination of education policies and reform initiatives.",
      link: "https://example.com/education",
      color: "#F59E0B"
    },
    {
      id: "proj-8",
      title: "Machine Learning Model",
      category: "tech",
      tags: ["Python", "ML", "TensorFlow"],
      description: "Predictive machine learning model for data-driven decision making.",
      link: "https://example.com/ml-model",
      color: "#06B6D4"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);


  const certifications: Certification[] = [
    {
      id: "aws-ccp",
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      logo: "/logos/ccp.png",
      color: "#FF9900",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology.",
      date: "Jan 2025"
    },
    {
      id: "cloud-captain",
      name: "Cloud Club Captain Badge",
      issuer: "Amazon Web Services",
      logo: "/logos/cloudclubcaptain.png",
      color: "#FF9900",
      description: "Leadership recognition for establishing and growing the AWS Cloud Club community.",
      date: "March 2025"
    },
    {
      id: "oci-ai",
      name: "OCI AI Foundations Associate",
      issuer: "Oracle",
      logo: "/logos/ociai.png",
      color: "#F80000",
      description: "Core knowledge of Oracle Cloud Infrastructure AI services and machine learning fundamentals.",
      date: "July 2025"
    },
    {
      id: "datacamp-ai",
      name: "AI Fundamentals",
      issuer: "DataCamp",
      logo: "/logos/aifundamentals.png",
      color: "#03EF62",
      description: "Comprehensive understanding of artificial intelligence concepts, applications, and ethics.",
      date: "Nov 2024"
    },
    {
      id: "datacamp-data",
      name: "Data Literacy",
      issuer: "DataCamp",
      logo: "/logos/dataliteracy.png",
      color: "#03EF62",
      description: "Skills in interpreting, analyzing, and communicating insights from data effectively.",
      date: "Nov 2024"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      <CoffeeWaveTop activeRole={activeRole} />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={prefersReducedMotion ? {} : { opacity, scale }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Pre-heading with branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-12 py-1.5 rounded-full border border-orange-600/30 bg-orange-600/10 text-orange-400 text-l font-mono mb-6">
            Who.Am.I()
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white tracking-tight">
            Two Roles, One Passion
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Building clouds and crafting words with the same attention to clarity and structure
          </p>
        </motion.div>


        {/* Dual Identity Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ben - Cloud Captain Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-600/30 hover:border-blue-600/60 transition-all duration-500 overflow-hidden">
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, hsl(210 80% 45% / 0.15), transparent 70%)'
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px hsl(210 80% 45% / 0.15), 0 0 40px hsl(210 80% 45% / 0.1)" }}
              />
              
              {/* Icon */}
              <div className="relative flex items-center gap-4 mb-6">
                <motion.div 
                  className="relative w-16 h-16"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient glow behind */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-md opacity-40"
                    style={{
                      background: "radial-gradient(circle, hsl(210 80% 45%), transparent)"
                    }}
                  />
                  {/* Logo */}
                  <img 
                    src="/logos/awsccpcu.png" 
                    alt="AWS Cloud Club"
                    className="relative w-full h-full object-contain"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                    "Ben"
                    <span className="px-2 py-0.5 rounded-md bg-blue-600/20 text-blue-400 text-xs font-mono border border-blue-600/30">
                      Technologist
                    </span>
                  </h3>
                  <p className="text-blue-400 text-sm font-mono">AWS Cloud Club — PCU Cavite</p>
                </div>
              </div>


              {/* Role description */}
              <p className="relative text-slate-300 leading-relaxed mb-6">
                As Captain of AWS Cloud Club — PCU Cavite, I transformed a growing community into a 
                thriving ecosystem—scaling to 120+ members, opening internship pathways, 
                and launching 4 initiatives that engaged 200+ students in real-world 
                experiences and emerging technology.
              </p>


              {/* Skills */}
              <div className="relative space-y-3">
                <div className="flex items-center gap-3 text-sm group/item">
                  <div className="p-1.5 rounded-lg bg-blue-600/10 border border-blue-600/20">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">
                    Technical Enablement
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm group/item">
                  <div className="p-1.5 rounded-lg bg-blue-600/10 border border-blue-600/20">
                    <Rocket className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">
                    Initiative Launch & Execution 
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm group/item">
                  <div className="p-1.5 rounded-lg bg-blue-600/10 border border-blue-600/20">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">
                    Leadership & Internship Pathways
                  </span>
                </div>
              </div>


              {/* Decorative circuit pattern */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 60 60" className="text-blue-400">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <circle cx="30" cy="10" r="2" fill="currentColor" />
                  <circle cx="50" cy="10" r="2" fill="currentColor" />
                  <line x1="10" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="1" />
                  <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="1" />
                  <circle cx="30" cy="50" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>


          {/* Cil - Editor Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-orange-600/30 hover:border-orange-600/60 transition-all duration-500 overflow-hidden">
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, hsl(25 40% 50% / 0.15), transparent 70%)'
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px hsl(25 40% 50% / 0.15), 0 0 40px hsl(25 40% 50% / 0.1)" }}
              />
              
              {/* Icon */}
              <div className="relative flex items-center gap-4 mb-6">
                <motion.div 
                  className="relative w-16 h-16"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient glow behind */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-md opacity-40"
                    style={{
                      background: "radial-gradient(circle, hsl(25 40% 50%), transparent)"
                    }}
                  />
                  {/* Logo */}
                  <img 
                    src="/logos/theccpub.png" 
                    alt="The Christian Chronicle"
                    className="relative w-full h-full object-contain"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                    "Cil"
                    <span className="px-2 py-0.5 rounded-md bg-orange-600/20 text-orange-400 text-xs font-mono border border-orange-600/30">
                      Journalist
                    </span>
                  </h3>
                  <p className="text-orange-400 text-sm font-mono">The Christian Chronicle</p>
                </div>
              </div>


              {/* Role description */}
              <p className="relative text-slate-300 leading-relaxed mb-6">
                As Associate Editor-in-Chief at The Christian Chronicle, I published compelling 
                narratives on politics and society across columns, editorials, and features—driving 
                2,000+ Facebook engagement. Named Campus Journalist of the Year 2025 and represented 
                PCU in national competitions.
              </p>


              {/* Skills */}
              <div className="relative space-y-3">
                <div className="flex items-center gap-3 text-sm group/item">
                  <div className="p-1.5 rounded-lg bg-orange-600/10 border border-orange-600/20">
                    <Pen className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">
                    Columns, Editorials & Investigative Features
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm group/item">
                  <div className="p-1.5 rounded-lg bg-orange-600/10 border border-orange-600/20">
                    <Target className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">
                    Content Strategy & Editorial Direction
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm group/item">
                  <div className="p-1.5 rounded-lg bg-orange-600/10 border border-orange-600/20">
                    <Trophy className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">
                    Campus Journalist of Year 2025
                  </span>
                </div>
              </div>


              {/* Decorative pen marks */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 60 60" className="text-orange-400">
                  <path d="M10 50 L50 10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M45 15 L55 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M5 55 L15 45" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

          <div className="relative">
            {/* Gradient border container */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-700/30 backdrop-blur-sm">
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
                style={{ 
                  background: 'radial-gradient(circle at 50% 50%, hsl(270 60% 50% / 0.1), transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
              
              {/* Certifications grid */}
              <div className="relative grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 justify-items-center">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <CertificationBadge cert={cert} />
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-purple-400/40" />
              <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-blue-400/40" />
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full bg-orange-400/40" />
            </div>
          </div>
        </motion.div>
        
        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-600/30 bg-cyan-600/10 text-cyan-400 text-sm font-mono mb-4">
              <Filter className="w-4 h-4" />
              <span>Portfolio.Showcase()</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-mono font-bold text-white">
              Projects & Publications
            </h3>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              { key: "all", label: "All Projects", color: "#64748B" },
              { key: "tech", label: "Tech Projects", color: "#3B82F6" },
              { key: "article", label: "Articles", color: "#F97316" }
            ].map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as typeof activeFilter)}
                className="px-6 py-2.5 rounded-full font-mono text-sm border-2 transition-all duration-300"
                style={{
                  borderColor: activeFilter === filter.key ? filter.color : `${filter.color}30`,
                  backgroundColor: activeFilter === filter.key ? `${filter.color}20` : `${filter.color}05`,
                  color: activeFilter === filter.key ? filter.color : `${filter.color}AA`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
              style={{ 
                background: 'radial-gradient(circle at 50% 50%, hsl(190 60% 50% / 0.1), transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <motion.div 
              layout
              className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HexagonCard project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-500 font-mono">No projects found in this category.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};


export default MissionStatement;