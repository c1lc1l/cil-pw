import { motion } from "framer-motion";
import { Coffee, Star, CloudLightning, Globe, Database, Cpu, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  rating: number;
  reviewer: string;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, rating, reviewer, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      <Card glowOnHover className="h-full bg-gradient-to-br from-card to-secondary/30 group">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="p-3 rounded-xl bg-coffee/20 border border-coffee/30 group-hover:bg-coffee/30 transition-colors">
              {icon}
            </div>
            <div className="flex items-center gap-1">
              <Coffee className="w-4 h-4 text-coffee-light" />
            </div>
          </div>
          <CardTitle className="mt-4 text-foreground group-hover:text-coffee-light transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
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
    rating: 4.9,
    reviewer: "Stressed Student",
  },
  {
    icon: <CloudLightning className="w-6 h-6 text-coffee-light" />,
    title: "Lambda Liftoff",
    description: "Code Runs Itself While You Game Valorant. Serverless functions that scale automatically. Zero servers to manage.",
    rating: 4.8,
    reviewer: "Sleepy Developer",
  },
  {
    icon: <Globe className="w-6 h-6 text-coffee-light" />,
    title: "CloudFront CDN",
    description: "Global Speed, Local Cavite Latency. Edge locations worldwide mean your app loads faster than your professor's patience.",
    rating: 4.7,
    reviewer: "Impatient User",
  },
  {
    icon: <Cpu className="w-6 h-6 text-coffee-light" />,
    title: "EC2 Energy",
    description: "Virtual machines that actually work. Spin up instances faster than you can say 'deployment failed'. Auto-scaling included.",
    rating: 4.8,
    reviewer: "Caffeinated DevOps",
  },
  {
    icon: <Shield className="w-6 h-6 text-coffee-light" />,
    title: "IAM Protection",
    description: "Security so tight, even you might get locked out. Role-based access control that keeps the hackers guessing.",
    rating: 4.9,
    reviewer: "Paranoid Admin",
  },
  {
    icon: <Coffee className="w-6 h-6 text-coffee-light" />,
    title: "Coffee-Powered Debugging",
    description: "Premium caffeine-based troubleshooting methodology. Each bug fixed is another cup consumed. Unlimited refills.",
    rating: 5.0,
    reviewer: "Night Owl Coder",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-coffee/30 bg-coffee/10 text-coffee-light text-sm font-mono mb-4">
            aws.services.premium
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-foreground">
            Cloud Services & Benefits
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade AWS solutions with a side of humor. Built for developers who appreciate good code and better coffee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
