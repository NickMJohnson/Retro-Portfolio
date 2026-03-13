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
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <section id="projects-full" className="border-t border-border">
          <div className="section-container">
            <ProjectsSection />
            <SpotlightSection />
          </div>
        </section>
        <ResumeSection />
        <ChatSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
