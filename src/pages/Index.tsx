import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import IntersectionSection from "@/components/IntersectionSection";
import BenefitsSection from "@/components/BenefitsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import CloudBootOverlay from "@/components/CloudBootOverlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Boot overlay - plays once on load */}
      <CloudBootOverlay />
      
      {/* Ambient background layer */}
      <AmbientBackground mode="focused" />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <MissionStatement />
        <IntersectionSection />
        <BenefitsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;