import "./App.css";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";
import AboutSection from "./components/AboutSection";
import InformationSection from "./components/InformationSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
function App() {
  return (
    <>
      <div>
        <section className="preloader">
          <div className="spinner">
            <span className="spinner-rotate"></span>
          </div>
        </section>

        <Navbar />
        <SliderSection />
        <AboutSection/>
        <InformationSection/>
      

        <section className="clients section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Companies I've had worked</h3>
              </div>

              <div className="col-lg-2 col-4 ms-auto clients-item-height">
                <img
                  src="images/clients/cachet.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="images/clients/guitar-center.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="images/clients/tokico.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="images/clients/shopify.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 me-auto clients-item-height">
                <img
                  src="images/clients/profil-rejser.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

       <ServicesSection />
       <ProjectsSection />
       <ContactSection />
       
        
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="copyright-text-wrap">
                <p className="mb-0">
                  <span className="copyright-text">
                    Copyright © 2036 <a href="#">First Portfolio</a> Company.
                    All rights reserved.
                  </span>
                  Design:
                  <a
                    rel="sponsored"
                    href="https://templatemo.com"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
