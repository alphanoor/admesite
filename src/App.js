import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./web/components/common/Navbar/Navb";
import HeroSection from "./web/components/LandingPage/HeroSection";
import HowItWorks from "./web/components/LandingPage/HowItWorks";
import Footer from "./web/components/LandingPage/Footer";

function App() {
  return (
    <>
      <Navb />
      <HeroSection />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
