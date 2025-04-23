import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

/**
 * Главная страница веб-приложения АйСайт
 * Разделена на логические секции для лучшей структуры и поддерживаемости
 */
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;