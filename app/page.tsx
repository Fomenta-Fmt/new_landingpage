import Image from "next/image";
import HeroSection from "@/app/components/hero-section";
import LogoCloud from "./components/logo-cloud";


export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
    </>
  );
}
