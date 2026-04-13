import Navbar from "@/components/Navbar";
import HeroAlt from "@/components/HeroAlt";
import FeaturedWork from "@/components/FeaturedWork";
import OtherProjects from "@/components/OtherProjects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroAlt />
      <FeaturedWork />
      <OtherProjects />
      <About />
      <Experience />
      <Services />
      <Slider />
      <Footer />
    </>
  );
}
