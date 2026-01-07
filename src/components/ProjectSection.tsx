import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "tech" | "article";
  tags: string[];
  description: string;
  link: string;
  color: string;
}

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
        delay: index * 0.08,
        type: "spring",
        stiffness: 200
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient glow behind card */}
      <motion.div 
        className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
        style={{ 
          background: `radial-gradient(circle, ${project.color}25, transparent 60%)`,
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.2,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative w-full aspect-[0.87] max-w-[280px] mx-auto">
        {/* Hexagon SVG Container */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <defs>
            <clipPath id={`hex-clip-${project.id}`}>
              <path d={hexagonPath} />
            </clipPath>
            <linearGradient id={`hex-gradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={project.color} stopOpacity={isHovered ? "0.3" : "0.2"} />
              <stop offset="50%" stopColor={project.color} stopOpacity={isHovered ? "0.15" : "0.08"} />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
            </linearGradient>
            {/* Inner highlight gradient */}
            <radialGradient id={`hex-inner-glow-${project.id}`} cx="50%" cy="20%" r="70%">
              <stop offset="0%" stopColor={project.color} stopOpacity={isHovered ? "0.25" : "0.12"} />
              <stop offset="100%" stopColor={project.color} stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Outer glow on hover */}
          <motion.path
            d={hexagonPath}
            fill="none"
            stroke={project.color}
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            style={{
              filter: `drop-shadow(0 0 15px ${project.color}) drop-shadow(0 0 30px ${project.color}50)`
            }}
          />
          
          {/* Background fill */}
          <path
            d={hexagonPath}
            fill={`url(#hex-gradient-${project.id})`}
            className="transition-all duration-400"
          />
          
          {/* Inner glow */}
          <path
            d={hexagonPath}
            fill={`url(#hex-inner-glow-${project.id})`}
            className="transition-opacity duration-300"
          />
          
          {/* Border stroke */}
          <path
            d={hexagonPath}
            fill="none"
            stroke={project.color}
            strokeWidth={isHovered ? "0.6" : "0.3"}
            opacity={isHovered ? "1" : "0.4"}
            className="transition-all duration-300"
          />
          
          {/* Inner border for depth */}
          <path
            d="M50 4 L90 27 L90 73 L50 96 L10 73 L10 27 Z"
            fill="none"
            stroke={project.color}
            strokeWidth="0.15"
            opacity={isHovered ? "0.3" : "0.1"}
            className="transition-all duration-300"
          />
        </svg>

        {/* Decorative corner accents */}
        <motion.div 
          className="absolute top-[10%] left-1/2 -translate-x-1/2 h-[2px] rounded-full"
          style={{ backgroundColor: project.color }}
          animate={{
            width: isHovered ? 40 : 24,
            opacity: isHovered ? 0.7 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 h-[2px] rounded-full"
          style={{ backgroundColor: project.color }}
          animate={{
            width: isHovered ? 40 : 24,
            opacity: isHovered ? 0.7 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Category indicator dot */}
        <div 
          className="absolute top-[18%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{ 
            backgroundColor: project.color,
            boxShadow: `0 0 8px ${project.color}`,
            opacity: isHovered ? 1 : 0.6
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
          <h4 className="font-mono font-bold text-white text-base md:text-lg mb-3 line-clamp-2" 
            style={{ 
              textShadow: isHovered ? `0 2px 10px ${project.color}40` : 'none'
            }}>
            {project.title}
          </h4>
          
          {/* Tags with refined styling */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-3 max-w-[200px]">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full text-[9px] md:text-[10px] font-mono border backdrop-blur-sm transition-all duration-300"
                style={{
                  borderColor: isHovered ? `${project.color}70` : `${project.color}35`,
                  backgroundColor: isHovered ? `${project.color}25` : `${project.color}12`,
                  color: project.color,
                  boxShadow: isHovered ? `0 2px 12px ${project.color}20, inset 0 1px 0 ${project.color}15` : 'none'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 max-w-[200px] transition-colors duration-300"
            style={{ color: isHovered ? '#cbd5e1' : '#94a3b8' }}>
            {project.description}
          </p>
          
          {/* Link Button with refined hover */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300 backdrop-blur-sm"
            style={{
              borderColor: isHovered ? project.color : `${project.color}45`,
              backgroundColor: isHovered ? `${project.color}30` : `${project.color}12`,
              color: project.color,
              boxShadow: isHovered ? `0 4px 20px ${project.color}30, inset 0 1px 0 ${project.color}20` : 'none'
            }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
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

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "tech" | "article">(
    "all"
  );
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters = [
    { key: "all", label: "All Projects", color: "#FFFFFF" },
    { key: "tech", label: "Tech Projects", color: "#3B82F6" },
    { key: "article", label: "Articles", color: "#F97316" },
  ];

  return (
    <motion.section id="projects" className="mt-20 max-w-6xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-600/30 bg-cyan-600/10 text-cyan-400 text-sm font-mono mb-4">
          <Filter className="w-4 h-4" />
          <span>Portfolio.Showcase()</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-mono font-bold text-white">
          Projects & Publications
        </h3>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {filters.map((filter) => (
          <motion.button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key as typeof activeFilter)}
            className="px-6 py-2.5 rounded-full font-mono text-sm border-2 transition-all duration-300"
            style={{
              borderColor:
                activeFilter === filter.key
                  ? filter.color
                  : `${filter.color}30`,
              backgroundColor:
                activeFilter === filter.key
                  ? `${filter.color}20`
                  : `${filter.color}05`,
              color:
                activeFilter === filter.key
                  ? filter.color
                  : `${filter.color}AA`,
            }}
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(190 60% 50% / 0.1), transparent 70%)",
            filter: "blur(60px)",
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
            <p className="text-slate-500 font-mono">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
