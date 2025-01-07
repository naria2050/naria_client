import HeroSection from "@/components/Shared/HomePage/HeroSection";
import HeroTabs from "@/components/Shared/HomePage/HeroTabs";
import MostPopularDestinationCarousel from "@/components/Shared/HomePage/MostPopularDestinationCarousel";
import PromotionalSection from "@/components/Shared/HomePage/PromotionalSection";
import UpcomingPackages from "@/components/Shared/HomePage/UpcomingPackages";

const HomePage = () => {
  return (
    <div className="relative bg-gray-100 ">
      <div className="relative w-full rounded-3xl">
        <HeroSection />
        <HeroTabs />
      </div>
      <PromotionalSection />
      <UpcomingPackages />
      <MostPopularDestinationCarousel />
      {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
    </div>
  );
};

export default HomePage;
