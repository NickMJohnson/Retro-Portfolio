import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SpotlightSection } from "@/components/SpotlightSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ChatSection } from "@/components/ChatSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="mesh-gradient" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SpotlightSection />
        <ResumeSection />
        <ChatSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
