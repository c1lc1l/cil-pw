import { useReducedMotion, motion } from "framer-motion";
import { TrendingUp, Rocket, Users, Pen, Target, Trophy } from "lucide-react";

export const DualRoleCards = ({ activeRole }: { activeRole: "captain" | "editor" }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Pre-heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-12 py-1.5 rounded-full border border-orange-600/30 bg-orange-600/10 text-orange-400 text-l font-mono mb-6">
          Who.Am.I()
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white tracking-tight">
          Two Roles, One Passion
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Building clouds and crafting words with the same attention to clarity and structure
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Ben - Captain */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group"
        >
          <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-600/30 hover:border-blue-600/60 transition-all duration-500 overflow-hidden">
            {/* Glow & gradient background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(210 80% 45% / 0.15), transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 60px hsl(210 80% 45% / 0.15), 0 0 40px hsl(210 80% 45% / 0.1)",
              }}
            />

            {/* Icon */}
            <div className="relative flex items-center gap-4 mb-6">
              <motion.div
                className="relative w-16 h-16"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl blur-md opacity-40"
                  style={{ background: "radial-gradient(circle, hsl(210 80% 45%), transparent)" }}
                />
                <img src="/logos/awsccpcu.png" alt="AWS Cloud Club" className="relative w-full h-full object-contain" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                  "Ben"
                  <span className="px-2 py-0.5 rounded-md bg-blue-600/20 text-blue-400 text-xs font-mono border border-blue-600/30">
                    Technologist
                  </span>
                </h3>
                <p className="text-blue-400 text-sm font-mono">AWS Cloud Club — PCU Cavite</p>
              </div>
            </div>

            {/* Role description */}
            <p className="relative text-slate-300 leading-relaxed mb-6">
              As Captain of AWS Cloud Club — PCU Cavite, I transformed a 
              growing community into a thriving ecosystem—scaling to 120+ members, 
              opening internship pathways, and launching 4 initiatives 
              that engaged 200+ students in real-world experiences.
            </p>

            {/* Skills */}
            <div className="relative space-y-3">
              {[
                { icon: TrendingUp, label: "Technical Enablement", color: "blue" },
                { icon: Rocket, label: "Initiative Launch & Execution", color: "blue" },
                { icon: Users, label: "Leadership & Internship Pathways", color: "blue" },
              ].map(({ icon: Icon, label, color }, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm group/item">
                  <div className={`p-1.5 rounded-lg bg-${color}-600/10 border border-${color}-600/20`}>
                    <Icon className={`w-4 h-4 text-${color}-400`} />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative circuit pattern */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 60 60" className="text-blue-400">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <circle cx="30" cy="10" r="2" fill="currentColor" />
                  <circle cx="50" cy="10" r="2" fill="currentColor" />
                  <line x1="10" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="1" />
                  <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="1" />
                  <circle cx="30" cy="50" r="2" fill="currentColor" />
                </svg>
              </div>
        </motion.div>

        {/* Cil - Editor */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group"
        >
          <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-orange-600/30 hover:border-orange-600/60 transition-all duration-500 overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(25 40% 50% / 0.15), transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "inset 0 0 60px hsl(25 40% 50% / 0.15), 0 0 40px hsl(25 40% 50% / 0.1)" }}
            />

            <div className="relative flex items-center gap-4 mb-6">
              <motion.div
                className="relative w-16 h-16"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl blur-md opacity-40"
                  style={{ background: "radial-gradient(circle, hsl(25 40% 50%), transparent)" }}
                />
                <img src="/logos/theccpub.png" alt="The Christian Chronicle" className="relative w-full h-full object-contain" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                  "Cil"
                  <span className="px-2 py-0.5 rounded-md bg-orange-600/20 text-orange-400 text-xs font-mono border border-orange-600/30">
                    Journalist
                  </span>
                </h3>
                <p className="text-orange-400 text-sm font-mono">The Christian Chronicle</p>
              </div>
            </div>

            <p className="relative text-slate-300 leading-relaxed mb-6">
              As Associate Editor-in-Chief at The Christian Chronicle, I 
              published compelling narratives on politics and society across 
              columns, editorials, and features—driving 2,000+ Facebook engagement
              while representing PCU in national competitions. 
              </p>

            <div className="relative space-y-3">
              {[
                { icon: Pen, label: "Columns, Editorials & Investigative Features", color: "orange" },
                { icon: Target, label: "Content Strategy & Editorial Direction", color: "orange" },
                { icon: Trophy, label: "Campus Journalist of Year 2025", color: "orange" },
              ].map(({ icon: Icon, label, color }, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm group/item">
                  <div className={`p-1.5 rounded-lg bg-${color}-600/10 border border-${color}-600/20`}>
                    <Icon className={`w-4 h-4 text-${color}-400`} />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-white transition-colors">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DualRoleCards;