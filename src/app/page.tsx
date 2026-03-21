import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExploreGrid from "@/components/ExploreGrid";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ExploreGrid />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
