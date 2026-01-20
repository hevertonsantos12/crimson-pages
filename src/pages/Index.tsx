import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularSection from "@/components/PopularSection";
import TrendingSection from "@/components/TrendingSection";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <PopularSection />
        <TrendingSection />
        <BannerSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
