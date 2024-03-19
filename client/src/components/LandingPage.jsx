import HeroSection from "./HeroSection";
import Features from "./Features";
import Uploadpdf from "./Uploadpdf";
import About from "./About";
import Footer from "./Footer";

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
