import { services } from "../data/servicesData";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="services section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img
                src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg"
                className="avatar-image img-fluid"
                alt=""
              />

              <h2 className="text-white ms-4 mb-0">Services</h2>
            </div>
            <div className="row pt-lg-5">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  price={service.price}
                  description={service.description}
                  iconClass={service.iconClass}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
