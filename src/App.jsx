import "./App.css";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";
import AboutSection from "./components/AboutSection";
import InformationSection from "./components/InformationSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import CompanySection from "./components/CompanySection";
import FooterSection from "./components/FooterSection";
import ContactSection from "./components/ContactSection";
function App() {
  return (
    <>
      <Navbar />
      <SliderSection />
      <AboutSection />
      <InformationSection />
      <CompanySection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
