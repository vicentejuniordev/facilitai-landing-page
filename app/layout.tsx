import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://facilitai.com.br"),
  title: "FacilitAI | As melhores ferramentas de IA em um só lugar",
  description: "Catálogo digital com mais de 35 ferramentas de Inteligência Artificial organizadas por categoria para estudar, trabalhar, criar e automatizar.",
  keywords: ["inteligência artificial", "ferramentas de IA", "catálogo de IA", "produtividade", "automação"],
  openGraph: {
    title: "FacilitAI — Encontre a IA certa em minutos",
    description: "Mais de 35 ferramentas de IA, organizadas e prontas para consulta.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/catalog/page-01.png", width: 768, height: 1024, alt: "Capa do catálogo FacilitAI" }]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
