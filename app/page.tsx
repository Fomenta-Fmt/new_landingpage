import { Metadata } from "next";
import HeroSection from "@/app/components/Header/hero-section";
import LogoCloud from "@/app/components/logo-cloud";
import Footer from "@/app/components/Footer/footer";
import Features from "@/app/components/features";
import Solution from "@/app/components/solution";

export const metadata: Metadata = {
  title: "Fomenta - Impulsione o financiamento dos seus projetos",
  description: "A Fomenta conecta você aos melhores editais e oportunidades de fomento. Encontre o edital perfeito para o seu projeto e acelere seu crescimento.",
  keywords: ['editais', 'fomento', 'startup', 'inovação', 'captação de recursos', 'pesquisa', 'desenvolvimento científico']
};

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
