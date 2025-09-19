import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ResourcesSection from "@/components/ResourcesSection";
import NGOsSection from "@/components/NGOsSection";
import HowItWorksSection from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      
      <HeroSection />
      <StatsSection />
      <ResourcesSection />
      <hr />
      <NGOsSection />
      <HowItWorksSection />
      
    </div>
  );
};

export default Index;
