import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionMedical from "@/components/SectionMedical";
import SectionBS from "@/components/SectionBS";
import SectionManiPedi from "@/components/SectionManiPedi";
import SectionWaxing from "@/components/SectionWaxing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <SectionMedical />
      <SectionBS />
      <SectionManiPedi />
      <SectionWaxing />
      <Contact />
      <Footer />
    </>
  );
}