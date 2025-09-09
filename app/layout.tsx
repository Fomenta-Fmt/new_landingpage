import type { Metadata } from "next";
import "./globals.css";
import { archivo } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Fomenta - Impulsione o financiamento dos seus projetos",
  description: "A Fomenta conecta você aos melhores editais e oportunidades de fomento. Encontre o edital perfeito para o seu projeto e acelere seu crescimento.",
  keywords: ['editais', 'fomento', 'startup', 'inovação', 'captação de recursos', 'pesquisa', 'desenvolvimento científico']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} font-main bg-background text-primary antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
