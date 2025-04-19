import BrandLogo from "@/components/BrandLogo";
import BrowsebyDressStyle from "@/components/BrowsebyDressStyle";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import Newsletter from "@/components/Newsletter";
import OurHappy from "@/components/OurHappy";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <BrandLogo />
    <NewArrivals />
    <TopSelling />
    <BrowsebyDressStyle />
    <OurHappy />
    <Newsletter />
  </div>
  )
}
