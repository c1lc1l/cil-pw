import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen, Presentation, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "TutorialsDojo Articles",
    description: "In-depth AWS certification guides and cloud computing tutorials for aspiring solutions architects.",
    type: "Technical Writing",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://tutorialsdojo.com",
    tags: ["AWS", "Certification", "Cloud"],
  },
  {
    title: "Dev.to Blog (c1lc1l)",
    description: "Developer stories, serverless patterns, and ML experiments shared with the global dev community.",
    type: "Blog",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://dev.to/c1lc1l",
    tags: ["DevOps", "Serverless", "ML"],
  },
  {
    title: "AWS Siklab Events",
    description: "Community-driven AWS workshops and hands-on labs for Filipino cloud enthusiasts.",
    type: "Community",
    icon: <Users className="w-5 h-5" />,
    link: "https://awssiklab.com",
    tags: ["Community", "Events", "AWS"],
  },
  {
    title: "Cloud Architecture Projects",
    description: "Production-grade serverless applications and infrastructure-as-code templates.",
    type: "Open Source",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/c1lc1l",
    tags: ["IaC", "Lambda", "CDK"],
  },
  {
    title: "ML/AI Experiments",
    description: "Machine learning models and AI-powered applications built with SageMaker and TensorFlow.",
    type: "AI/ML",
    icon: <Presentation className="w-5 h-5" />,
    link: "https://github.com/c1lc1l",
    tags: ["SageMaker", "TensorFlow", "AI"],
  },
  {
    title: "AWS Cloud Club PCU",
    description: "Leading the AWS Cloud Club chapter at Philippine Christian University. Building the next generation of cloud architects.",
    type: "Leadership",
    icon: <Users className="w-5 h-5" />,
    link: "https://awscloudclubs.com",
    tags: ["Leadership", "Education", "AWS"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card glowOnHover className="h-full flex flex-col bg-gradient-to-br from-card to-navy-mid/30">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-coffee/20 text-coffee-light">
              {project.icon}
            </div>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {project.type}
            </span>
          </div>
          <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono rounded-md bg-secondary border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="coffee" size="sm" className="w-full" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
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
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-coffee/30 bg-coffee/10 text-coffee-light text-sm font-mono mb-4">
            portfolio.showcase()
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-foreground">
            Projects & Contributions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From cloud architectures to community building. Each project deployed with passion and lots of coffee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
