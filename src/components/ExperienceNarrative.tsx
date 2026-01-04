import { motion, useReducedMotion } from "framer-motion";

const ExperienceNarrative = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6 relative">
      {/* Warm gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-espresso/[0.04] via-transparent to-coffee-espresso/[0.03] pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section intro */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground/60 text-sm font-mono mb-16"
        >
          Where I've worked, and what I've learned.
        </motion.p>
        
        {/* Experience as impact narrative */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Creds */}
          <article className="relative">
            <div className="absolute -left-4 md:-left-8 top-1 w-1.5 h-1.5 rounded-full bg-coffee-warm/60" />
            <h3 className="text-xl font-mono font-medium text-foreground mb-4">
              Technology Consultant, <span className="text-coffee-light">Creds</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Creds, I own systems thinking end-to-end: architecture decisions, automation pipelines, and lifecycle planning. The work involves evaluating build-vs-buy tradeoffs, designing for maintainability, and ensuring systems remain operable as requirements evolve.
              </p>
              <p className="font-serif italic text-cream-soft/70">
                When something breaks at 2am, I'm the one who gets paged. That accountability shapes how I design.
              </p>
            </div>
          </article>

          {/* AWS Cloud Club */}
          <article className="relative">
            <div className="absolute -left-4 md:-left-8 top-1 w-1.5 h-1.5 rounded-full bg-coffee-warm/60" />
            <h3 className="text-xl font-mono font-medium text-foreground mb-4">
              Captain, <span className="text-coffee-light">AWS Cloud Club PCU</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Leading the AWS Cloud Club chapter at Philippine Christian University means building curriculum, running workshops, and mentoring students through their first cloud deployments. The chapter has grown to{" "}
                <span className="metric-warm">150+ active members</span>{" "}
                with monthly hands-on labs.
              </p>
              <p>
                Teaching forces clarity. When you have to explain VPC subnetting to someone who's never seen a terminal, you discover the gaps in your own understanding. Leading this community has made me a better engineer.
              </p>
            </div>
          </article>

          {/* AWS Cloud Club PH */}
          <article className="relative">
            <div className="absolute -left-4 md:-left-8 top-1 w-1.5 h-1.5 rounded-full bg-coffee-warm/60" />
            <h3 className="text-xl font-mono font-medium text-foreground mb-4">
              Contributor, <span className="text-coffee-light">AWS Cloud Club Philippines</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At the national level, I contribute content and speak at events. This includes writing documentation, reviewing workshop materials, and representing the community at AWS-sponsored gatherings. The audience is broader—university students, career changers, professionals upskilling.
              </p>
              <p className="font-serif italic text-cream-soft/70">
                Scale changes the problem. What works for 20 students doesn't work for 200.
              </p>
            </div>
          </article>
        </motion.div>

        {/* Coffee separator */}
        <div className="my-20 separator-coffee" />

        {/* Skills woven in contextually */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h4 className="text-sm font-mono text-coffee-light mb-3 uppercase tracking-wider">
                Building
              </h4>
              <p>
                Lambda, API Gateway, DynamoDB, S3, CloudFront, EC2, VPC, IAM. Infrastructure as Code with CDK and Terraform. CI/CD through GitHub Actions. Python and TypeScript.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-mono text-coffee-light mb-3 uppercase tracking-wider">
                Operating
              </h4>
              <p>
                CloudWatch for monitoring and alerting. Cost optimization through Reserved Instances and Savings Plans. Security audits and compliance. Incident response and post-mortems.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-mono text-coffee-light mb-3 uppercase tracking-wider">
                Teaching
              </h4>
              <p>
                Curriculum development for cloud fundamentals. Technical writing for Dev.to and internal documentation. Workshop facilitation for audiences from 10 to 200. Mentoring junior developers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceNarrative;
