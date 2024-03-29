import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Uploadpdf from "../components/Uploaddummy";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function LandingPage({ setData }) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Uploadpdf setData={setData} />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
