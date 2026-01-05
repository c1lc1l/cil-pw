import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { 
  Cloud, Pen, Database, CloudLightning, Globe, Cpu, Shield, Coffee,
  FileText, Users, BookOpen, Search, Edit3, Sparkles
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

type SkillTab = "cloud" | "editorial";

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

const cloudSkills: Skill[] = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "S3 & Storage",
    description: "Object storage with 11 9's durability",
    detail: "Lifecycle policies, versioning, cross-region replication",
  },
  {
    icon: <CloudLightning className="w-6 h-6" />,
    title: "Lambda & Serverless",
    description: "Event-driven compute at scale",
    detail: "Functions, Step Functions, API Gateway integration",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "CloudFront CDN",
    description: "Global edge network distribution",
    detail: "Caching strategies, origin failover, WAF integration",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "EC2 & Compute",
    description: "Virtual machines and containers",
    detail: "Auto-scaling, spot instances, ECS/EKS",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "IAM & Security",
    description: "Identity and access management",
    detail: "Policies, roles, MFA, security best practices",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines",
    detail: "CodePipeline, GitHub Actions, Infrastructure as Code",
  },
];

const editorialSkills: Skill[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Technical Writing",
    description: "Clear documentation and guides",
    detail: "API docs, tutorials, architecture decisions",
  },
  {
    icon: <Edit3 className="w-6 h-6" />,
    title: "Content Strategy",
    description: "Planning and content calendars",
    detail: "Audience research, content mapping, SEO",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Leadership",
    description: "Mentoring and process management",
    detail: "Editorial workflows, feedback loops, training",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Editorial Process",
    description: "End-to-end content lifecycle",
    detail: "Drafting, editing, review cycles, publishing",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Research & Fact-check",
    description: "Accuracy and credibility",
    detail: "Source verification, citation management",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Creative Direction",
    description: "Voice and brand consistency",
    detail: "Style guides, tone of voice, visual storytelling",
  },
];

const SkillCard = ({ skill, color, delay }: { skill: Skill; color: "navy" | "coffee"; delay: number }) => {
  const prefersReducedMotion = useReducedMotion();
  const colorClasses = color === "navy" 
    ? { 
        iconBg: "bg-navy-accent/20 border-navy-accent/30",
        iconText: "text-navy-glow",
        hoverGlow: "group-hover:shadow-[0_0_30px_hsl(210_80%_45%/0.15)]",
      }
    : {
        iconBg: "bg-coffee-warm/20 border-coffee-warm/30",
        iconText: "text-coffee-light",
        hoverGlow: "group-hover:shadow-[0_0_30px_hsl(25_40%_50%/0.15)]",
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : delay }}
      whileHover={prefersReducedMotion ? {} : { y: -5 }}
      className="group"
    >
      <Card className={`h-full bg-card border-border hover:border-foreground/20 transition-all duration-300 ${colorClasses.hoverGlow}`}>
        <CardHeader>
          <div className={`inline-flex p-3 rounded-xl ${colorClasses.iconBg} border mb-3 w-fit`}>
            <span className={colorClasses.iconText}>{skill.icon}</span>
          </div>
          <CardTitle className="text-foreground text-lg">{skill.title}</CardTitle>
          <CardDescription className="text-muted-foreground">{skill.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground/80 italic border-l-2 border-border pl-3">
            {skill.detail}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState<SkillTab>("cloud");
  const skills = activeTab === "cloud" ? cloudSkills : editorialSkills;

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground text-sm font-mono mb-6">
            skills.showcase()
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground tracking-tight mb-4">
            <span className="block">Skills &</span>
            <span className="block text-gradient">Expertise</span>
          </h2>
        </motion.div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("cloud")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === "cloud"
                  ? "bg-navy-accent text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Cloud className="w-5 h-5" />
              <span className="font-mono text-sm">Cloud Engineering</span>
            </button>
            <button
              onClick={() => setActiveTab("editorial")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === "editorial"
                  ? "bg-coffee-warm text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Pen className="w-5 h-5" />
              <span className="font-mono text-sm">Editorial & Writing</span>
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <SkillCard 
                key={skill.title} 
                skill={skill} 
                color={activeTab === "cloud" ? "navy" : "coffee"}
                delay={index * 0.08}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BenefitsSection;