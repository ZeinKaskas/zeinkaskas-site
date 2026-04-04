import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import AboutBrief from "@/components/AboutBrief";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <Testimonials />
        <TrustedBy />
        <Ticker />
        <Services />
        <FeaturedWork />
        <AboutBrief />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
