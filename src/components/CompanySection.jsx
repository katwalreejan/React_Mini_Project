import React from "react";
import { companies } from "../data/companies";
import CompanyLogo from "./CompanyLogo";

const CompanySection = () => {
  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-12">
            <h3 className="text-center mb-5">Companies I've had worked</h3>
          </div>

          {companies.map((company) => (
            <CompanyLogo
              className="col-lg-2 col-4 ms-auto clients-item-height"
              key={company.id}
              src={company.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
