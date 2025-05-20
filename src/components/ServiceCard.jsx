const ServiceCard = ({ title, price, description, iconClass }) => {
  return (
    <div className="col-lg-6 col-12">
      <div className="services-thumb">
        <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
          <h3 className="mb-0">{title}</h3>

          <div className="services-price-wrap ms-auto">
            <p className="services-price-text mb-0">{price}</p>
            <div className="services-price-overlay"></div>
          </div>
        </div>

        <p>{description}</p>

        <a href="#" className="custom-btn custom-border-btn btn mt-3">
          Discover More
        </a>

        <div className="services-icon-wrap d-flex justify-content-center align-items-center">
          <i className={`services-icon ${iconClass}`}></i>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
