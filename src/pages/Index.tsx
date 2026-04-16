import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SpotlightSection } from "@/components/SpotlightSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ChatSection } from "@/components/ChatSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <div className="grid-bg" />
      <Header />
      <main>
        <HeroSection />
        <CurrentlyBuilding />
        <AboutSection />
        <SpotlightSection />
        <ProjectsSection />
        <ResumeSection />
        <ChatSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
