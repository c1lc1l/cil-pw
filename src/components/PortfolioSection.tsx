import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, BookOpen, Users, ArrowUpRight, Cloud, Pen, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectFilter = "all" | "cloud" | "editorial" | "hybrid";

interface Project {
  title: string;
  description: string;
  insight: string;
  type: string;
  role: "cloud" | "editorial" | "hybrid";
  icon: React.ReactNode;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "AWS Cloud Club PCU",
    description: "Leading the AWS Cloud Club chapter at Philippine Christian University. Building the next generation of cloud architects.",
    insight: "Leadership is service with extra commits.",
    type: "Leadership",
    role: "cloud",
    icon: <Users className="w-5 h-5" />,
    link: "https://awscloudclubs.com",
    tags: ["Leadership", "Education", "AWS"],
  },
  {
    title: "AWS Siklab Events",
    description: "Community-driven AWS workshops and hands-on labs for Filipino cloud enthusiasts.",
    insight: "Building the next generation of cloud builders.",
    type: "Community",
    role: "cloud",
    icon: <Users className="w-5 h-5" />,
    link: "https://awssiklab.com",
    tags: ["Community", "Events", "AWS"],
  },
  {
    title: "Cloud Architecture Projects",
    description: "Production-grade serverless applications and infrastructure-as-code templates.",
    insight: "Infrastructure that writes itself. Almost.",
    type: "Open Source",
    role: "cloud",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/c1lc1l",
    tags: ["IaC", "Lambda", "CDK"],
  },
  {
    title: "TutorialsDojo Articles",
    description: "In-depth AWS certification guides and cloud computing tutorials for aspiring solutions architects.",
    insight: "Knowledge shared is knowledge multiplied.",
    type: "Technical Writing",
    role: "editorial",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://tutorialsdojo.com",
    tags: ["AWS", "Certification", "Guides"],
  },
  {
    title: "PCU Publication",
    description: "Associate Editor-in-Chief overseeing content strategy, editorial workflows, and team mentorship.",
    insight: "Every story deserves clarity and purpose.",
    type: "Editorial",
    role: "editorial",
    icon: <Pen className="w-5 h-5" />,
    link: "#",
    tags: ["Leadership", "Editorial", "Content"],
  },
  {
    title: "Dev.to Blog (c1lc1l)",
    description: "Developer stories, serverless patterns, and ML experiments shared with the global dev community.",
    insight: "Writing code is temporary. Writing about code is forever.",
    type: "Blog",
    role: "hybrid",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://dev.to/c1lc1l",
    tags: ["DevOps", "Serverless", "ML"],
  },
];

const filterConfig = {
  all: { label: "All Projects", icon: Sparkles, color: "bg-foreground text-background" },
  cloud: { label: "Cloud", icon: Cloud, color: "bg-navy-accent text-white" },
  editorial: { label: "Editorial", icon: Pen, color: "bg-coffee-warm text-white" },
  hybrid: { label: "Hybrid", icon: Sparkles, color: "bg-gradient-to-r from-navy-accent to-coffee-warm text-white" },
};

const roleBadgeConfig = {
  cloud: { bg: "bg-navy-accent/20", border: "border-navy-accent/40", text: "text-navy-glow", icon: Cloud },
  editorial: { bg: "bg-coffee-warm/20", border: "border-coffee-warm/40", text: "text-coffee-light", icon: Pen },
  hybrid: { bg: "bg-gradient-to-r from-navy-accent/20 to-coffee-warm/20", border: "border-foreground/20", text: "text-foreground", icon: Sparkles },
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const prefersReducedMotion = useReducedMotion();
  const badge = roleBadgeConfig[project.role];
  const BadgeIcon = badge.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.05 }}
      whileHover={prefersReducedMotion ? {} : { y: -8 }}
    >
      <Card className="h-full flex flex-col bg-card border-border hover:border-foreground/20 transition-all duration-300 group relative overflow-hidden">
        {/* Role badge */}
        <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full ${badge.bg} ${badge.border} border`}>
          <BadgeIcon className={`w-3 h-3 ${badge.text}`} />
          <span className={`text-xs font-mono capitalize ${badge.text}`}>{project.role}</span>
        </div>
        
        <CardHeader className="pt-12">
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${project.role === "cloud" ? "bg-navy-accent/20 text-navy-glow border-navy-accent/30" : project.role === "editorial" ? "bg-coffee-warm/20 text-coffee-light border-coffee-warm/30" : "bg-secondary text-foreground border-border"} border`}>
              {project.icon}
            </div>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {project.type}
            </span>
          </div>
          <CardTitle className="text-xl text-foreground group-hover:text-coffee-light transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-sm italic text-muted-foreground/80 mb-4 border-l-2 border-border pl-3">
            "{project.insight}"
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full group/btn" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              View Project
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.role === filter);

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-mid/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground text-sm font-mono mb-6">
            portfolio.showcase()
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground tracking-tight mb-4">
            <span className="block">Projects &</span>
            <span className="block text-gradient">Contributions</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm">
            {(Object.keys(filterConfig) as ProjectFilter[]).map((key) => {
              const config = filterConfig[key];
              const Icon = config.icon;
              const isActive = filter === key;
              
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? config.color + " shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-mono text-sm">{config.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;