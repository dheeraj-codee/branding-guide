import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Services />
      <AboutSection />
      <Portfolio />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}