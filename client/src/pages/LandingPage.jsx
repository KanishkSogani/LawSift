import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Uploadpdf from "../components/Uploadpdf";
import About from "../components/About";
import Footer from "../components/Footer";

function LandingPage({ setData }) {
  return (
    <>
      <HeroSection />
      <Features />
      <Uploadpdf setData={setData} />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
