import { motion, useReducedMotion } from "framer-motion";

const ProfessionalIdentity = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Role declaration - short, declarative */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-foreground font-medium mb-8"
        >
          AWS-focused cloud and serverless engineer. Educator and community leader.
        </motion.p>

        {/* Professional summary - prose, not bullets */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            I design and operate serverless architectures on AWS—Lambda, API Gateway, DynamoDB, S3—focusing on systems that scale reliably without operational overhead. My work spans from prototype to production, serving{" "}
            <span className="text-coffee-light font-mono text-sm">200+ concurrent users</span>{" "}
            on some deployments.
          </p>
          
          <p>
            Beyond building, I teach. As AWS Cloud Club Captain at Philippine Christian University and a contributor to AWS Cloud Club Philippines, I've helped{" "}
            <span className="text-coffee-light font-mono text-sm">1,000+ students</span>{" "}
            understand cloud fundamentals through hands-on workshops and documentation.
          </p>
          
          <p>
            I write about cloud architecture, ML workflows, and the decisions behind system design. My perspective: good engineering is about tradeoffs acknowledged, not features accumulated.
          </p>
        </motion.div>

        {/* Subtle transition */}
        <motion.div
          initial={prefersReducedMotion ? {} : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 h-px w-16 bg-gradient-to-r from-coffee-light/40 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

export default ProfessionalIdentity;
