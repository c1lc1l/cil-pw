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
  isPrivate?: boolean;          // NEW
  linkLabel?: string; 
}

const projects: Project[] = [
  {
    id: "proj-leaf-disease",
    title: "Leaf Disease Detection",
    category: "tech",
    tags: ["Rekognition", "CV", "S3"],
    description:
      "Computer Vision app using Rekognition Custom Labels, S3 and Lambda event triggers served via a React frontend.",
    link: "https://github.com/your-handle/leaf-disease",
    color: "#22C55E",
  },
  {
    id: "proj-ml-demo",
    title: "Shopee Delivery ML",
    category: "tech",
    tags: ["Regression", "Random Forest"],
    description:
      "Intro ML demo in Google Colab using logistic regression and random forest to predict on-time Shopee deliveries.",
    link: "https://github.com/your-handle/shopee-ml-demo",
    color: "#22C55E",
  },
  {
    id: "proj-reika",
    title: "Reika the Orca",
    category: "tech",
    tags: ["React", "Serverless", "Bedrock"],
    description:
      "Full-stack chatbot app using Lambda, Bedrock with Guardrails, API Gateway, and a React frontend on CloudFront.",
    link: "https://github.com/c1lc1l/reika-ask-cloud",
    color: "#38BDF8",
  },
  {
    id: "art-codex-cli",
    title: "Exploring the OpenAI Codex CLI",
    category: "article",
    tags: ["AI tools", "Dev Productivity", "OpenAI"],
    description:
      "Hands-on guide to using the OpenAI Codex CLI from the terminal for prototyping, model switching, and code generation.",
    link: "https://tutorialsdojo.com/exploring-the-openai-codex-cli-a-hands-on-guide/",
    color: "#F97316",
    linkLabel: "Read Article",
  },
  {
    id: "proj-wordie",
    title: "-Wordie- #2039",
    category: "tech",
    tags: ["EC2", "Python", "Discord"],
    description:
      "Discord bot hosted on EC2, with startup scripts, uptime monitoring and secure SSH via Instance Connect.",
    link: "https://github.com/your-handle/wordie-bot",
    color: "#38BDF8",
  },
  {
    id: "art-ec2-discord-bot",
    title: "Deploy Your Discord Bot Using Amazon EC2",
    category: "article",
    tags: ["EC2", "Python", "Discord Bot"],
    description:
      "Step-by-step walkthrough for hosting a Discord bot on EC2, from instance setup to keeping the bot running 24/7.",
    link: "https://dev.to/c1lc1l/deploy-your-discord-bot-using-amazon-ec2-2mdm",
    color: "#F97316",
    linkLabel: "Read Article"
  },
  {
    id: "proj-reika-ci",
    title: "Game App CI/CD Pipeline",
    category: "tech",
    tags: ["DevOps", "Vercel", "Vite"],
    description:
      "Provisioned GitHub Actions pipelines and secrets to automate builds and deploys for a Vite + React app on Vercel.",
    link: "https://github.com/gmdb22/AWSCCPCUFoundationDay",
    color: "#38BDF8",
  },
  {
    id: "proj-creds-rss",
    title: "Creds RSS Aggregation",
    category: "tech",
    tags: ["Apps Script", "RSS", "Data Ops"],
    description:
      "Google Apps Script pipeline aggregating RSS feeds from 20+ external newsletters to curate daily content.",
    link: "https://example.com/creds-rss",
    color: "#38BDF8",
    isPrivate: true,
    linkLabel: "Summary",
  },
  {
    id: "art-jpas-diokno-salazar",
    title: "Youth, Governance, and Good Leadership",
    category: "article",
    tags: ["News Feature", "Youth", "Governance"],
    description:
      "Feature on ‘Basta PolSci, Mahusay,’ where Chel Diokno and Kerby Salazar urge students to lead with voter literacy.",
    link: "https://www.facebook.com/share/p/17nDfUtBFm/",
    color: "#F97316",
    linkLabel: "Read Article"
  },
  {
    id: "art-carpio-sovereignty",
    title: "Defending Philippine Sovereignty",
    category: "article",
    tags: ["Feature", "West Philippine Sea", "Sovereignty"],
    description:
      "Feature on Justice Carpio’s lecture explaining why Philippine sovereignty extends beyond the Treaty of Paris, including Scarborough Shoal.",
    link: "https://www.facebook.com/share/p/18i6Hxtcqp/",
    color: "#F97316",
    linkLabel: "Read Article"
  },
  {
    id: "art-justitias-demise",
    title: "Justitia’s Demise",
    category: "article",
    tags: ["Editorial", "Martial Law", "Historical memory"],
    description:
      "The scars of the past still echo, but what happens when history is quietly twisted, and the voices of justice fade into silence? ",
    link: "https://www.facebook.com/share/p/17iVc6aZC1/",
    color: "#F97316",
    linkLabel: "Read Article"
  },
  {
    id: "art-checkmate-or-check",
    title: "Checkmate or Check?",
    category: "article",
    tags: ["Editorial", "Corruption", "Accountability"],
    description:
      "Short editorial using chess metaphors to question Senate investigations where investigators share ties with the very contractors they probe.",
    link: "https://www.facebook.com/share/p/1KSPQ3WmTR/",
    color: "#F97316",
    linkLabel: "Read Article"
  },
];


const HexagonCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const label = project.linkLabel ?? (project.isPrivate ? "Summary" : "View Project");
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

      <div className="relative w-full aspect-[0.87] max-w-[300px] md:max-w-[320px] mx-auto">
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
            fill="none"
            stroke={project.color}
            strokeWidth={isHovered ? "0.6" : "0.3"}
            opacity={isHovered ? "1" : "0.4"}
            className="transition-all duration-300"
          /> d={hexagonPath}
           
          
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

        {/* Content */}
        <div className="absolute inset-0 px-7 py-8 flex flex-col items-center justify-center text-center">
          <h4 className="font-mono font-semibold text-sm md:text-base mb-2 line-clamp-2" 
            style={{ 
              textShadow: isHovered ? `0 2px 10px ${project.color}40` : 'none'
            }}>
            {project.title}
          </h4>
          
          {/* Tags with refined styling */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-3">
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
          <p className="text-slate-400 text-xs md:text-sm leading-snug mb-4 line-clamp-5 max-w-[220px] transition-colors duration-300"
            style={{ color: isHovered ? '#cbd5e1' : '#94a3b8' }}>
            {project.description}
          </p>
          
          {/* Link Button with refined hover */}
          <motion.a
            href={project.link}
            target={project.isPrivate ? "_self" : "_blank"}
            rel={project.isPrivate ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300 backdrop-blur-sm"
            style={{
              borderColor: isHovered ? project.color : `${project.color}45`,
              backgroundColor: isHovered ? `${project.color}30` : `${project.color}12`,
              color: project.color,
              boxShadow: isHovered ? `0 4px 20px ${project.color}30, inset 0 1px 0 ${project.color}20` : "none",
            }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            {label}
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
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
