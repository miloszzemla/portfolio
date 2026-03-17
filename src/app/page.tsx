import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <About />
      <Experience />
      <Services />
      <Slider />
      <Footer />
    </>
  );
}
