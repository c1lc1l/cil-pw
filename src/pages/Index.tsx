import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import BenefitsSection from "@/components/BenefitsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import AmbientModeToggle from "@/components/AmbientModeToggle";
import CloudBootOverlay from "@/components/CloudBootOverlay";

type AmbientMode = "focused" | "creative" | "night";

const Index = () => {
  const [ambientMode, setAmbientMode] = useState<AmbientMode>("focused");

  return (
    <div className="min-h-screen bg-background relative">
      {/* Boot overlay - plays once on load */}
      <CloudBootOverlay />
      
      {/* Ambient background layer */}
      <AmbientBackground mode={ambientMode} />
      
      {/* Ambient mode toggle */}
      <AmbientModeToggle mode={ambientMode} onModeChange={setAmbientMode} />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <MissionStatement />
        <BenefitsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
