import Image from "next/image";
import HeroSection from "@/app/components/Header/hero-section";
import LogoCloud from "@/app/components/logo-cloud";
import Footer from "@/app/components/Footer/footer";
import Features from "@/app/components/features";
import Solution from "@/app/components/solution";


export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <Features />
      <Solution />

      
      <Footer />
    </>
  );
}
