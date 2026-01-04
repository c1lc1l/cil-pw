import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectNarrative {
  title: string;
  tagline: string;
  aside?: string;
  paragraphs: string[];
  link?: string;
  linkText?: string;
}

const projects: ProjectNarrative[] = [
  {
    title: "Reika the Orca",
    tagline: "Serverless AI assistant handling 200+ concurrent classroom users",
    aside: "Shipped after three espressos and a deadline.",
    paragraphs: [
      "Reika is a conversational AI assistant built for educational environments. The architecture is fully serverless: Lambda for compute, DynamoDB for session state, API Gateway for routing. The system handles real traffic—200+ concurrent users during peak classroom sessions—without manual scaling intervention.",
      "Guardrails matter more than features. I implemented request throttling, graceful degradation for API failures, and comprehensive logging. When OpenAI's API has latency spikes, users see loading states instead of errors. CI/CD runs through GitHub Actions with staging environments for every PR.",
      "The tradeoff: cold starts. Lambda cold starts add 800ms-1.2s on first requests. For a conversational AI, that's noticeable. I mitigated with provisioned concurrency for peak hours, but the cost increase was significant. Serverless isn't free—it's differently expensive."
    ],
    link: "https://github.com/c1lc1l/reika",
    linkText: "View source"
  },
  {
    title: "Leaf Disease Detection",
    tagline: "ML model for agricultural image classification with ~81% accuracy",
    aside: "The model is a tool, not an oracle.",
    paragraphs: [
      "A convolutional neural network trained to identify plant leaf diseases from images. The model achieves approximately 81% accuracy on the validation set—good enough for screening, not good enough for diagnosis. That distinction matters.",
      "Dataset curation was the real work. I filtered corrupted images, balanced class distributions, and implemented data augmentation to prevent overfitting. The final dataset was smaller but cleaner than the original. Garbage in, garbage out applies to ML more than most admit.",
      "Human-in-the-loop is the design. The system flags potential diseases for expert review rather than making definitive calls. Secure image handling through S3 presigned URLs keeps user data protected. ML pragmatism over hype."
    ]
  },
  {
    title: "Wordie",
    tagline: "Long-running game service on EC2 with VPC networking",
    aside: "Where I learned to appreciate serverless by doing without it.",
    paragraphs: [
      "A word game application running on EC2 within a properly configured VPC. Unlike my serverless projects, Wordie taught me the fundamentals: security groups, NAT gateways, load balancer configuration, and the operational overhead of long-running services.",
      "Scaling was manual before it was automatic. When traffic spiked, I learned to watch CloudWatch metrics and adjust capacity. Later, I implemented auto-scaling groups, but understanding the manual process first made the automation meaningful.",
      "The lesson: serverless abstracts operational complexity, but understanding what's abstracted makes you a better engineer. EC2 forced me to think about availability zones, instance types, and the cost of always-on compute. Those lessons inform every Lambda function I write now."
    ],
    link: "https://github.com/c1lc1l/wordie",
    linkText: "View source"
  }
];

const ProjectNarratives = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6 relative">
      {/* Subtle warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-espresso/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section intro with warmth */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-muted-foreground">
            Selected projects, presented as case narratives.
          </p>
          <p className="text-muted-foreground/50 text-sm mt-2 font-serif italic">
            Each one taught me something I couldn't learn from documentation.
          </p>
        </motion.div>

        {/* Projects with varied rhythm */}
        <div className="space-y-28 md:space-y-36">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative"
            >
              {/* Coffee accent line */}
              <div className="absolute -left-4 md:-left-8 top-0 w-1 h-12 bg-gradient-to-b from-coffee-warm/50 to-transparent rounded-full" />
              
              {/* Project title */}
              <h3 className="text-2xl md:text-3xl font-mono font-medium text-foreground mb-2">
                {project.title}
              </h3>
              
              {/* Tagline */}
              <p className="text-coffee-light text-sm font-mono mb-4">
                {project.tagline}
              </p>
              
              {/* Personal aside */}
              {project.aside && (
                <p className="text-muted-foreground/50 text-sm font-serif italic mb-8 pl-4 border-l-2 border-coffee-brown/20">
                  {project.aside}
                </p>
              )}

              {/* Narrative paragraphs */}
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                {project.paragraphs.map((para, pIndex) => (
                  <p key={pIndex}>{para}</p>
                ))}
              </div>

              {/* Link with warmth */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm text-coffee-light/80 hover:text-coffee-crema transition-colors font-mono group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  {project.linkText}
                </a>
              )}
            </motion.article>
          ))}
        </div>

        {/* Transition - like taking a sip */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-36 flex justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-coffee-warm/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectNarratives;
