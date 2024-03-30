import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Select from "../components/Select";

function LandingPage({ setData }) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Select />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
