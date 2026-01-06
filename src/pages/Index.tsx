import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
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
        <HeroSection activeRole={activeRole} setActiveRole={setActiveRole} />
        <MissionStatement activeRole={activeRole} />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};


export default Index;
