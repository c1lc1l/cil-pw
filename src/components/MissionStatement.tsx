import DualRoleCards from "./DualRoleCards";
import CertificationsSection from "./CertificationSection";
import ProjectsSection from "./ProjectSection";
import { TechBackdrop, CoffeeWaveTop } from "./TechBackdrop";

const MissionStatement = ({ activeRole = "captain" }: { activeRole?: "captain" | "editor" }) => {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <CoffeeWaveTop activeRole={activeRole} />
      <TechBackdrop activeRole={activeRole} />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <DualRoleCards activeRole={activeRole} />
      <CertificationsSection />
      <ProjectsSection />
    </section>
  );
};

export default MissionStatement;