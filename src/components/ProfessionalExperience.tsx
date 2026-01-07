import { motion } from "framer-motion";
import { TrendingUp, Rocket, Users, Pen, Target, Trophy, Server, Briefcase } from "lucide-react";
import { RoleCard } from "./RoleCard";

export const ProfessionalExperience = () => {
  const roles = [
    {
        role: "Technology Consultant",
        title: "Consultant",
        organization: "Creds",
        dateRange: "Oct 2025 – Present",
        description:
            "Designed and automated a newsletter system on AWS and Google Apps Script—serving ~1,000 daily subscribers, aggregating 20+ external feeds, and supporting lifecycle decisions for the platform.",
        logoSrc: "/logos/creds.png",
        logoAlt: "Creds",
        borderColor: "purple" as const,
        glowColor: "265 80% 55%",
        boxShadowColor: "265 80% 55%",
        iconRotation: 5,
        isRightAligned: false,
        delay: 0.1,
        skills: [
            { icon: Server, label: "AWS SES & Email Automation", color: "purple" as const },
            { icon: Rocket, label: "TypeScript Workflow Engineering", color: "purple" as const },
            { icon: Target, label: "System Lifecycle & Ops Support", color: "purple" as const },
        ],
    },
    {
      role: "Captain & CEO",
      title: "Captain",
      organization: "AWS Cloud Club — PCU Cavite",
      dateRange: "Feb 2025 – Present",
      description:
        "Transformed a growing community into a thriving ecosystem—scaling to 120+ members, opening internship pathways, and launching 4 initiatives that engaged 200+ students in real-world experiences.",
      logoSrc: "/logos/awsccpcu.png",
      logoAlt: "AWS Cloud Club",
      borderColor: "purple" as const,
      glowColor: "265 80% 55%",
      boxShadowColor: "265 80% 55%",
      iconRotation: 5,
      isRightAligned: false,
      delay: 0,
      skills: [
        { icon: TrendingUp, label: "Technical Enablement & Community Engagement", color: "purple" as const },
        { icon: Rocket, label: "Initiative Launch & Execution", color: "purple" as const },
        { icon: Users, label: "Leadership & Internship Pathways", color: "purple" as const },
      ],
    },
    {
        role: "AI/ML Subject Matter Expert",
        title: "AI/ML SME",
        organization: "AWS Cloud Club Philippines",
        dateRange: "Oct 2024 – Present",
        description:
            "Provided AI/ML guidance across student communities—designing workshops, creating technical resources, and advising members and leaders on ML‑driven solutions using AWS technologies.",
        logoSrc: "/logos/awsccph.png",
        logoAlt: "AWS Cloud Club Philippines",
        borderColor: "purple" as const,
        glowColor: "265 80% 55%",
        boxShadowColor: "265 80% 55%",
        iconRotation: 5,
        isRightAligned: true,
        delay: 0.2,
        skills: [
            { icon: Pen, label: "AI/ML Curriculum & Content", color: "purple" as const },
            { icon: Users, label: "Student Enablement & Mentorship", color: "purple" as const },
            { icon: Trophy, label: "Program & Event Optimization", color: "purple" as const },
        ],
    },
    {
      role: "Associate Editor-in-Chief",
      title: "Associate Editor-in-Chief",
      organization: "The Christian Chronicle",
      description:
        "Authored compelling narratives on politics and society across columns, editorials, and features—driving 2,000+ Facebook engagement while representing PCU in national competitions.",
      dateRange: "Aug 2025 – Jan 2026",
      logoSrc: "/logos/theccpub.png",
      logoAlt: "The Christian Chronicle",
      borderColor: "purple" as const,
      glowColor: "265 80% 55%",
      boxShadowColor: "265 80% 55%",
      iconRotation: 5,
      isRightAligned: true,
      delay: 0.1,
      skills: [
        { icon: Pen, label: "Columns, Editorials & Investigative Features", color: "purple" as const },
        { icon: Target, label: "Content Strategy & Editorial Direction", color: "purple" as const },
        { icon: Trophy, label: "Campus Journalist of Year 2025", color: "purple" as const },
      ],
    },
  ];

  return (
    <section id="professional-experience" className="py-0 md:py-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-600/30 bg-purple-600/10 text-purple-400 text-sm font-mono mb-4">
            <Users className="w-4 h-4" />
            <span>Experience.Init()</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-mono font-bold text-white">
            My Roles & Contributions
          </h3>
        </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {roles.map((roleData) => (
            <RoleCard
              key={roleData.role}
              role={roleData.role}
              title={roleData.title}
              organization={roleData.organization}
              dateRange={roleData.dateRange}
              description={roleData.description}
              logoSrc={roleData.logoSrc}
              logoAlt={roleData.logoAlt}
              borderColor={roleData.borderColor}
              glowColor={roleData.glowColor}
              boxShadowColor={roleData.boxShadowColor}
              iconRotation={roleData.iconRotation}
              isRightAligned={roleData.isRightAligned}
              delay={roleData.delay}
              skills={roleData.skills}
            />
          ))}
        </div>

        {/* Additional Experience Timeline or Stats (Optional) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Members Scaled", value: "120+" },
            { label: "Initiatives Launched", value: "4" },
            { label: "Students Engaged", value: "200+" },
            { label: "Social Reach", value: "2K+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-slate-600 transition-colors"
            >
              <p className="text-2xl md:text-3xl font-mono font-bold text-blue-400 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default ProfessionalExperience;