import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "NeuroNex - AI решения для вашего бизнеса",
  description: "Платформа на базе искусственного интеллекта для автоматизации, анализа данных и умных решений. Начните бесплатно.",
  keywords: "AI, machine learning, автоматизация, анализ данных, нейросети",
  openGraph: {
    title: "NeuroNex - AI решения для вашего бизнеса",
    description: "Платформа на базе искусственного интеллекта для автоматизации, анализа данных и умных решений.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
