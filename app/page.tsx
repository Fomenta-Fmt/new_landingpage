import Image from "next/image";
import HeroSection from "@/app/components/hero-section";
import LogoCloud from "@/app/components/logo-cloud";
import Footer from "@/app/components/footer";
import Features from "./components/features";


export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <Features />

      
      <Footer />
    </>
  );
}
