import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import RightNav from "@/components/RightNav";
import Footer, { HeroSocials } from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import CloudBootOverlay from "@/components/CloudBootOverlay";


const Index = () => {
  const [activeRole, setActiveRole] = useState<"captain" | "editor">("captain");

  return (
    <div className="min-h-screen bg-background relative">
      {/* Boot overlay - plays once on load */}
      <CloudBootOverlay />
      
      {/* Ambient background layer */}
      <AmbientBackground mode="focused" />

      
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSocials />
        <RightNav />
        <HeroSection activeRole={activeRole} setActiveRole={setActiveRole} />
        <MissionStatement activeRole={activeRole} />
        <Footer />
      </main>
    </div>
  );
};


export default Index;
