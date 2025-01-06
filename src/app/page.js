import React from "react";
import HeroSection from "@/components/Shared/HomePage/HeroSection";
import TabsSection from "@/components/Shared/HomePage/TabsSection";
import PromotionalSection from "@/components/Shared/HomePage/PromotionalSection";

const HomePage = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <div className="relative w-full">
        <HeroSection />
        <TabsSection />
      </div>
      <PromotionalSection />
    </div>
  );
};

export default HomePage;
