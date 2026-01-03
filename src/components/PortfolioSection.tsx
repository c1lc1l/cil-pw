import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, BookOpen, Users, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

interface Project {
  title: string;
  description: string;
  insight: string;
  type: string;
  icon: React.ReactNode;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "TutorialsDojo Articles",
    description: "In-depth AWS certification guides and cloud computing tutorials for aspiring solutions architects.",
    insight: "Knowledge shared is knowledge multiplied.",
    type: "Technical Writing",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://tutorialsdojo.com",
    tags: ["AWS", "Certification", "Cloud"],
  },
  {
    title: "Dev.to Blog (c1lc1l)",
    description: "Developer stories, serverless patterns, and ML experiments shared with the global dev community.",
    insight: "Writing code is temporary. Writing about code is forever.",
    type: "Blog",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://dev.to/c1lc1l",
    tags: ["DevOps", "Serverless", "ML"],
  },
  {
    title: "AWS Siklab Events",
    description: "Community-driven AWS workshops and hands-on labs for Filipino cloud enthusiasts.",
    insight: "Building the next generation of cloud builders.",
    type: "Community",
    icon: <Users className="w-5 h-5" />,
    link: "https://awssiklab.com",
    tags: ["Community", "Events", "AWS"],
  },
  {
    title: "Cloud Architecture Projects",
    description: "Production-grade serverless applications and infrastructure-as-code templates.",
    insight: "Infrastructure that writes itself. Almost.",
    type: "Open Source",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/c1lc1l",
    tags: ["IaC", "Lambda", "CDK"],
  },
  {
    title: "ML/AI Experiments",
    description: "Machine learning models and AI-powered applications built with SageMaker and TensorFlow.",
    insight: "Teaching machines to think, so I don't have to.",
    type: "AI/ML",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/c1lc1l",
    tags: ["SageMaker", "TensorFlow", "AI"],
  },
  {
    title: "AWS Cloud Club PCU",
    description: "Leading the AWS Cloud Club chapter at Philippine Christian University. Building the next generation of cloud architects.",
    insight: "Leadership is service with extra commits.",
    type: "Leadership",
    icon: <Users className="w-5 h-5" />,
    link: "https://awscloudclubs.com",
    tags: ["Leadership", "Education", "AWS"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
      whileHover={prefersReducedMotion ? {} : { y: -10 }}
    >
      <Card glowOnHover className="h-full flex flex-col bg-gradient-to-br from-card via-card to-navy-mid/20 group relative overflow-hidden">
        {/* Layered depth effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-coffee/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-coffee-light/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 -translate-y-10" />
        
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <motion.div 
                className="p-2 rounded-lg bg-coffee/20 text-coffee-light border border-coffee/30 group-hover:border-coffee-light/50 transition-colors"
                whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              >
                {project.icon}
              </motion.div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {project.type}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowUpRight className="w-4 h-4 text-coffee-light" />
            </motion.div>
          </div>
          <CardTitle className="text-xl text-foreground group-hover:text-coffee-light transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow relative z-10">
          {/* Project insight quote */}
          <p className="text-sm italic text-coffee-light/70 mb-4 border-l-2 border-coffee/20 pl-3">
            "{project.insight}"
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary/80 border border-border text-muted-foreground hover:border-coffee/30 hover:text-coffee-light transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10">
          <Button variant="coffee" size="sm" className="w-full group/btn" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              View Deploy
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-mid/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          tag="portfolio.showcase()"
          title={
            <>
              <span className="block">Projects &amp;</span>
              <span className="block text-gradient">Contributions</span>
            </>
          }
          subtitle="From cloud architectures to community building. Each project deployed with passion and lots of coffee."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
