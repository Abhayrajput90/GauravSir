import React from 'react';
import services from './Main.json'

const Services = () => {
  return (
    <div className="container-fluid service py-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border   rounded-pill px-4 py-1 mb-3">
            Our Services
          </small>
          <h1 className="display-5 mb-5">What We Offer</h1>
        </div>
        <div className="row g-4">
          {services.Services.map((service, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-12 wow bounceInUp`}
              data-wow-delay={`${0.1 + index * 0.2}s`}
            >
              <div className="bg-light rounded service-item border gradient-advanced ">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className={`fas ${service.icon} fa-7x   mb-4`}></i>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <a href={service.link} className="btn  px-4 py-2 rounded-pill">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
