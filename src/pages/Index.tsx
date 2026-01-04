import CloudBootOverlay from "@/components/CloudBootOverlay";
import Opening from "@/components/Opening";
import ProfessionalIdentity from "@/components/ProfessionalIdentity";
import ProjectNarratives from "@/components/ProjectNarratives";
import ExperienceNarrative from "@/components/ExperienceNarrative";
import ContactClose from "@/components/ContactClose";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CloudBootOverlay />
      
      <main>
        <Opening />
        <ProfessionalIdentity />
        <ProjectNarratives />
        <ExperienceNarrative />
        <ContactClose />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
