import { motion, useReducedMotion } from "framer-motion";

const ProfessionalIdentity = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-28 md:py-36 px-6 relative">
      {/* Warm gradient transition from above */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-coffee-espresso/5 to-transparent pointer-events-none" />
      
      <div className="max-w-2xl mx-auto">
        {/* Role declaration - short, with warmth */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
            AWS-focused cloud and serverless engineer.{" "}
            <span className="text-coffee-light">Educator</span> and community leader.
          </p>
        </motion.div>

        {/* Professional summary with embedded metrics */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-7 text-muted-foreground leading-relaxed"
        >
          <p>
            I design and operate serverless architectures on AWS—Lambda, API Gateway, DynamoDB, S3—focusing on systems that scale reliably without operational overhead. My work spans from prototype to production, serving{" "}
            <span className="metric-warm">200+ concurrent users</span>{" "}
            on some deployments.
          </p>
          
          <p>
            Beyond building, I teach. As AWS Cloud Club Captain at Philippine Christian University and a contributor to AWS Cloud Club Philippines, I've helped{" "}
            <span className="metric-warm">1,000+ students</span>{" "}
            understand cloud fundamentals through hands-on workshops and documentation.
          </p>
          
          <p className="font-serif italic text-cream-soft/80">
            Good engineering is about tradeoffs acknowledged, not features accumulated.
          </p>
        </motion.div>

        {/* Coffee-stained separator */}
        <motion.div
          initial={prefersReducedMotion ? {} : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-28 w-24 separator-coffee origin-left"
        />
      </div>
    </section>
  );
};

export default ProfessionalIdentity;
