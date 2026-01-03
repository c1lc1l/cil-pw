import { motion, useReducedMotion } from "framer-motion";
import { Coffee, Star, CloudLightning, Globe, Database, Cpu, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  insight: string;
  rating: number;
  reviewer: string;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, insight, rating, reviewer, delay = 0 }: BenefitCardProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : delay }}
      whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.3 } }}
    >
      <Card glowOnHover className="h-full bg-gradient-to-br from-card via-card to-secondary/30 group relative overflow-hidden">
        {/* Layered background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-coffee-light/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between">
            <motion.div 
              className="p-3 rounded-xl bg-coffee/20 border border-coffee/30 group-hover:bg-coffee/30 group-hover:border-coffee-light/50 transition-all duration-300"
              whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
            >
              {icon}
            </motion.div>
            <div className="flex items-center gap-1">
              <Coffee className="w-4 h-4 text-coffee-light" />
            </div>
          </div>
          <CardTitle className="mt-4 text-foreground group-hover:text-coffee-light transition-colors text-xl">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          {/* Expressive insight quote */}
          <p className="text-sm italic text-coffee-light/80 mb-4 border-l-2 border-coffee/30 pl-3">
            "{insight}"
          </p>
          
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(rating) ? "fill-star text-star" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{rating}/5 • {reviewer}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const benefits = [
  {
    icon: <Database className="w-6 h-6 text-coffee-light" />,
    title: "S3 Stress Relief",
    description: "Infinite Storage, Zero Drama. Objects stored with 99.999999999% durability. Your files are safer than your crypto wallet.",
    insight: "Finally, storage that doesn't judge my file naming conventions.",
    rating: 4.9,
    reviewer: "Stressed Student",
  },
  {
    icon: <CloudLightning className="w-6 h-6 text-coffee-light" />,
    title: "Lambda Liftoff",
    description: "Code Runs Itself While You Game Valorant. Serverless functions that scale automatically. Zero servers to manage.",
    insight: "Deploy and forget. My favorite kind of relationship.",
    rating: 4.8,
    reviewer: "Sleepy Developer",
  },
  {
    icon: <Globe className="w-6 h-6 text-coffee-light" />,
    title: "CloudFront CDN",
    description: "Global Speed, Local Cavite Latency. Edge locations worldwide mean your app loads faster than your professor's patience.",
    insight: "Even my slow internet can't stop this CDN.",
    rating: 4.7,
    reviewer: "Impatient User",
  },
  {
    icon: <Cpu className="w-6 h-6 text-coffee-light" />,
    title: "EC2 Energy",
    description: "Virtual machines that actually work. Spin up instances faster than you can say 'deployment failed'. Auto-scaling included.",
    insight: "Scales up for traffic, scales down for my wallet.",
    rating: 4.8,
    reviewer: "Caffeinated DevOps",
  },
  {
    icon: <Shield className="w-6 h-6 text-coffee-light" />,
    title: "IAM Protection",
    description: "Security so tight, even you might get locked out. Role-based access control that keeps the hackers guessing.",
    insight: "Permission denied never felt so secure.",
    rating: 4.9,
    reviewer: "Paranoid Admin",
  },
  {
    icon: <Coffee className="w-6 h-6 text-coffee-light" />,
    title: "Coffee-Powered Debugging",
    description: "Premium caffeine-based troubleshooting methodology. Each bug fixed is another cup consumed. Unlimited refills.",
    insight: "console.log('works on my machine')",
    rating: 5.0,
    reviewer: "Night Owl Coder",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background layering */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-light/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          tag="aws.services.premium"
          title={
            <>
              <span className="block">Cloud Services</span>
              <span className="block text-gradient">&amp; Benefits</span>
            </>
          }
          subtitle="Enterprise-grade AWS solutions with a side of humor. Built for developers who appreciate good code and better coffee."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
