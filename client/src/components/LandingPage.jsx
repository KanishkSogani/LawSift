import HeroSection from "./HeroSection";
import Features from "./Features";
import Uploadpdf from "./Uploadpdf";
import About from "./About";
import Footer from "./Footer";

function LandingPage({ image, setImage }) {
  return (
    <>
      <HeroSection />
      <Features />
      <Uploadpdf image={image} setImage={setImage} />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
