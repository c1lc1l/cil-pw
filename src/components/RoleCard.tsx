import { useReducedMotion, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Skill {
  icon: LucideIcon;
  label: string;
  color: "blue" | "orange" | "purple" | "green" | "pink";
}

interface RoleCardProps {
  role: string;
  title: string;
  organization: string;
  dateRange: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  skills: Skill[];
  borderColor: "blue" | "orange" | "purple" | "green" | "pink";
  glowColor: string; // HSL format: "210 80% 45%"
  boxShadowColor: string; // HSL format: "210 80% 45%"
  iconRotation?: number; // Rotation on hover (e.g., 5 or -5)
  isRightAligned?: boolean;
  delay?: number;
}

export const RoleCard = ({
  role,
  title,
  dateRange,
  organization,
  description,
  logoSrc,
  logoAlt,
  skills,
  borderColor,
  glowColor,
  boxShadowColor,
  iconRotation = 5,
  isRightAligned = false,
  delay = 0,
}: RoleCardProps) => {
  const prefersReducedMotion = useReducedMotion();

  const colorMap = {
    blue: { border: "border-blue-600", hover: "hover:border-blue-600", bg: "bg-blue-600", text: "text-blue-400" },
    orange: {
      border: "border-orange-600",
      hover: "hover:border-orange-600",
      bg: "bg-orange-600",
      text: "text-orange-400",
    },
    purple: {
      border: "border-purple-600",
      hover: "hover:border-purple-600",
      bg: "bg-purple-600",
      text: "text-purple-400",
    },
    green: { border: "border-green-600", hover: "hover:border-green-600", bg: "bg-green-600", text: "text-green-400" },
    pink: { border: "border-pink-600", hover: "hover:border-pink-600", bg: "bg-pink-600", text: "text-pink-400" },
  };

  const colors = colorMap[borderColor];

  return (
    <motion.div
      initial={{ opacity: 0, x: isRightAligned ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div
        className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-indigo-950 to-slate-950 ${colors.border}/30 ${colors.hover}/60 transition-all duration-500 overflow-hidden`}
      >
        {/* Glow & gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, hsl(${glowColor} / 0.15), transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 60px hsl(${boxShadowColor} / 0.15), 0 0 40px hsl(${boxShadowColor} / 0.1)`,
          }}
        />

        {/* Icon */}
        <div className="relative flex items-center gap-4 mb-6">
          <motion.div
            className="relative w-16 h-16"
            whileHover={
              prefersReducedMotion
                ? {}
                : { scale: 1.05, rotate: isRightAligned ? -iconRotation : iconRotation }
            }
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className="absolute inset-0 rounded-2xl blur-md opacity-40"
              style={{
                background: `radial-gradient(circle, hsl(${glowColor}), transparent)`,
              }}
            />
            <img
              src={logoSrc}
              alt={logoAlt}
              className="relative w-full h-full object-contain"
            />
          </motion.div>
          <div>
            <h3 className="text-2xl font-mono font-bold text-white flex items-center gap-2">
              {role}
            </h3>
            <p className={`${colors.text} text-sm font-mono`}>
              {organization}
              {dateRange && (
                <span className="text-slate-400/80">
                  {" · "}
                  {dateRange}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Role description */}
        <p className="relative text-slate-300 leading-relaxed mb-6">{description}</p>

        {/* Skills */}
        <div className="relative space-y-3">
          {skills.map(({ icon: Icon, label, color }, idx) => {
            const skillColors = colorMap[color];
            return (
              <div key={idx} className="flex items-center gap-3 text-sm group/item">
                <div className={`p-1.5 rounded-lg ${skillColors.bg}/10 border ${skillColors.border}/20`}>
                  <Icon className={`w-4 h-4 ${skillColors.text}`} />
                </div>
                <span className="text-slate-300 group-hover/item:text-white transition-colors">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Decorative circuit pattern */}
        <div className={`absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity ${colors.text}`}>
          <svg width="80" height="80" viewBox="0 0 60 60" className="text-current">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <circle cx="30" cy="10" r="2" fill="currentColor" />
            <circle cx="50" cy="10" r="2" fill="currentColor" />
            <line x1="10" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="1" />
            <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="1" />
            <circle cx="30" cy="50" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};