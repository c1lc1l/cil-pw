import { motion } from "framer-motion";
import { Sun, Palette, Moon } from "lucide-react";

type AmbientMode = "focused" | "creative" | "night";

interface AmbientModeToggleProps {
  mode: AmbientMode;
  onModeChange: (mode: AmbientMode) => void;
}

const modes: { value: AmbientMode; icon: typeof Sun; label: string }[] = [
  { value: "focused", icon: Sun, label: "Focused" },
  { value: "creative", icon: Palette, label: "Creative" },
  { value: "night", icon: Moon, label: "Night" },
];

const AmbientModeToggle = ({ mode, onModeChange }: AmbientModeToggleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-1 p-1 rounded-full bg-secondary/80 backdrop-blur-md border border-border"
    >
      {modes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => onModeChange(value)}
          className={`relative p-2.5 rounded-full transition-colors ${
            mode === value 
              ? "text-coffee-light" 
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${label} mode`}
          title={label}
        >
          {mode === value && (
            <motion.div
              layoutId="ambientIndicator"
              className="absolute inset-0 bg-coffee/30 rounded-full border border-coffee-light/30"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <Icon className="w-4 h-4 relative z-10" />
        </button>
      ))}
    </motion.div>
  );
};

export default AmbientModeToggle;
